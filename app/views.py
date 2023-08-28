from django.shortcuts import render



# Create your views here.
def Index(request):
    return render(reques, 'app/index.html')