from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path('', views.Login, name='login'),
    path('index', views.Index, name='index'),
    path('attend', views.Attend, name='attend'),
    path('attendance', views.Attendance, name='attendance'),
    path('classAttendance', views.ClassAttendance, name='classAttendance'),
    path('chat', views.Chats, name='chat'),
    path('enroll', views.Enroll, name='enroll'),
    path('profilePic', views.ProfilePic, name='profilePic'),
    path('examcard', views.ExamCard, name='examcard'),
    path('profile', views.myProfile, name='profile'),
    path('editprofile',views.editProfile, name='editprofile'),
    path('change_password', views.ChangePassword, name='change_password'),
    path('logout', views.Logout, name='logout'),

    # Reset Password
    path('reset_password/',
     auth_views.PasswordResetView.as_view(template_name="app/passwordReset/forget-password.html"),
     name="reset_password"),

    path('reset_password_sent/', 
        auth_views.PasswordResetDoneView.as_view(template_name="app/passwordReset/password_reset_sent.html"), 
        name="password_reset_done"),

    path('reset/<uidb64>/<token>/',
     auth_views.PasswordResetConfirmView.as_view(template_name="app/passwordReset/password_reset_form.html"), 
     name="password_reset_confirm"),

    path('reset_password_complete/', 
        auth_views.PasswordResetCompleteView.as_view(template_name="app/passwordReset/password_reset_done.html"), 
        name="password_reset_complete"),
]