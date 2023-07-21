from django.shortcuts import render



# Create your views here.
def Index(request):
    return render(request, 'app/index.html')

def Attend(request):
    return render(request, 'app/attend.html')

def Attendance(request):
    return render(request, 'app/attendance.html')

def Enroll(request):
    return render(request, 'app/enroll.html')

def ExamCard(request):
    return render(request, 'examcard.html')

def 