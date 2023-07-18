from django.urls import path
from . import views

urlpatterns = [
    path('', views.Index, name='index'),
    path('attend', views.Attend, name='attend'),
    path('attendance', views.Attendance, name='attendance'),
    path('enroll', views.Enroll, name='enroll'),
    path('examcard', views.ExamCard, name='examcard'),
    path('profile', views.myProfile, name='profile'),
    path('editprofile',views.editProfile, name='')
]