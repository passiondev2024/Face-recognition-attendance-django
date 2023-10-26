from django.urls import path
from . import views

urlpatterns = [
    path('', views.Login, name='login'),
    path('index', views.Index, name='index'),
    path('attend', views.Attend, name='attend'),
    path('attendance', views.Attendance, name='attendance'),
    path('enroll', views.Enroll, name='enroll'),
    path('profilePic', views.profilePic, name='profilePic'),
    path('examcard', views.ExamCard, name='examcard'),
    path('profile', views.myProfile, name='profile'),
    path('editprofile',views.editProfile, name='editprofile'),
    path('logout', views.Logout, name='logout'),
]