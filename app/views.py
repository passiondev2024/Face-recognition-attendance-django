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

def Index(request):
    return render(request, 'app/index.html')

def Attend(request):
    return render(request, 'app/attend.html')

def Attendance(request):
    return render(request, 'app/attendance.html')

def Enroll(request):
    return render(request, 'app/enroll.html')

def ExamCard(request):
    return render(request, 'app/examcard.html')

def myProfile(request):
    return render(request, 'app/profile.html')

def editProfile(request):
    return render(request, 'app/edit-profile.html')

def Logout(request):
    return render(request, 'app/logout.html')