from django.shortcuts import render, redirect
from django.contrib.auth.models import auth, User
from django.contrib import messages
from .models import Student, Profile, takeAttendance
from .forms import ProfileForm, StudentForm
from .utils import get_student_units
from .recognizer import Recognizer
from datetime import date
from datetime import datetime



# Create your views here.
def Login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user)
            messages.info(request, 'Please enroll to continue')
            return redirect('enroll')
        else:
            messages.error(request, 'Invalid details')
            return redirect('/')
    return render(request, 'app/login.html')

def Enroll(request):
    user = request.user
    existing_student = Student.objects.filter(user=user).first()
    if existing_student:
        # messages.info(request, '')
        return redirect('profilePic')
    
    if request.method == 'POST':
        user = request.user
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        phone = request.POST['phone']
        email = request.POST['email']
        gender = request.POST['gender']
        school = request.POST['school']
        department= request.POST['department']
        course = request.POST['course']
        year = request.POST['year']
        semester = request.POST['semester']
        selected_units = request.POST.getlist('selected_units[]')
        units = ','.join(selected_units)
        
        student_details = Student.objects.create(
            user=user,
            first_name=first_name, last_name=last_name,
            phone=phone, email=email,
            gender=gender, school=school, department=department,
            course=course, year=year,
            semester=semester, units=units
        )
        student_details.save()
        messages.info(request, 'You have been enrolled, upload profile photo to continue')
        return redirect('profilePic')
    else:
        return render(request, 'app/enroll.html')
    return render(request, 'app/enroll.html')

def ProfilePic(request):
    student = request.user.student
    existing_profile = Profile.objects.filter(student=student).first()
    if existing_profile:
        return redirect('index')
    
    form = ProfileForm(initial={'student':student})
    if request.method == 'POST':
        form = ProfileForm(request.POST, request.FILES, initial={'student':student})
        if form.is_valid():
            form.save()
            messages.info(request, 'You are logged in')
            return redirect('index')
        else:
            messages.error(request, 'Upload a valid profile image')
            return redirect('profilePic')  
    else:
        form = ProfileForm(initial={'student':student})
    context = {'form':form}
    return render(request, 'app/profile_pic.html', context)

def Index(request):
    logged_in_user = request.user
    student = Student.objects.get(user=logged_in_user)
    units_list = student.units.split(',')
    registerAttendance = takeAttendance.objects.filter(student=student)
    
    context = {'units_list':units_list, 'registerAttendance':registerAttendance}
    return render(request, 'app/index.html', context)


def Attend(request):
    if request.method == 'POST':
        details = {
            'student': request.user.student,
            'unitAttendent': request.POST['unitAttendent'],
        }

        this_week = datetime.now().isocalendar()[1]
# date=str(date.today())
        if takeAttendance.objects.filter(week=this_week, student=details['student'], unitAttendent=details['unitAttendent']).count() != 0:
            messages.info(request, 'Attendance already taken')
            return redirect('attendance')
        else:
            studentDetails = Student.objects.filter(course=details['student'].course, year=details['student'].year, semester=details['student'].semester)
            classNames = [str(data.user) for data in studentDetails]
            recognized_name = Recognizer(details, classNames)
            
            if recognized_name:
                attendance = takeAttendance(student=details['student'],
                                            unitAttendent=details['unitAttendent'],
                                            status='Present')
                
                attendance.save()
                
            attendances = takeAttendance.objects.filter(date=str(date.today()), student=details['student'], unitAttendent=details['unitAttendent'])
            messages.success(request, 'Attendance taken successfully')
    
    logged_in_user = request.user
    student = Student.objects.get(user=logged_in_user)
    units_list = student.units.split(',')
    context = {'units_list': units_list}
    return render(request, 'app/attend.html', context)


def Attendance(request):
    logged_in_user = request.user
    student = Student.objects.get(user=logged_in_user)
    units_list = student.units.split(',')
    registerAttendance = takeAttendance.objects.filter(student=student)
    
    context = {'units_list':units_list, 'registerAttendance':registerAttendance}
    return render(request, 'app/attendance.html', context)


def ExamCard(request):
    return render(request, 'app/examcard.html')

def myProfile(request):
    logged_in_user = request.user
    student = Student.objects.get(user=logged_in_user)
    units_list = student.units.split(',')
    
    context = {'units_list':units_list}
    return render(request, 'app/profile.html', context)

def editProfile(request):
    profile = request.user.student.profile
    form = ProfileForm(instance=profile)
    if request.method == 'POST':
        form = ProfileForm(request.POST, request.FILES, instance=profile)
        if form.is_valid():
            form.save()
            messages.info(request, 'Profile updated')
            return redirect('index')
    else:
        form =ProfileForm(instance=profile)
    context = {'form':form}
    return render(request, 'app/edit-profile.html', context)

def Logout(request):
    if request.method == 'POST':
        auth.logout(request)
        messages.info(request, 'Your have been logged out')
        return redirect('/')
    return render(request, 'app/logout.html')