from django.shortcuts import render, redirect
from django.contrib.auth.models import auth, User
from django.contrib import messages



# Create your views here.
def Login(request):
    if request.method == 'POST':
        username = request.post['username']
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
    if request.method == 'POST':
        user = request.user
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        phone = request.POST['phone']
        email = request.POST['email']
        gender = request.POST['gender']
        profile_pic = request.POST['profile_pic']
        school = request.POST['school']
        department= request.POST['department']
        course = request.POST['course']
        year = request.POST['year']
        semester = request.POST['semester']
        units = request.POST.getlist('selected_units')
        
    return render(request, 'app/enroll.html')

def Index(request):
    return render(request, 'app/index.html')

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