from django.shortcuts import render, redirect
from django.contrib.auth.models import auth, User
from django.contrib import messages
from .models import Student, Profile
from .forms import ProfileForm, StudentForm
from .utils import get_student_units



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
    
    context = {'units_list':units_list}
    return render(request, 'app/index.html', context)

def Attend(request):
    return render(request, 'app/attend.html')

def Attendance(request):
    return render(request, 'app/attendance.html')


def ExamCard(request):
    return render(request, 'app/examcard.html')

def myProfile(request):
    return render(request, 'app/profile.html')

def editProfile(request):
    return render(request, 'app/edit-profile.html')

def Logout(request):
    return render(request, 'app/logout.html')