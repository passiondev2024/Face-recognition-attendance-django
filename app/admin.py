from django.contrib import admin
from .models import Student, Profile, takeAttendance, Chat, User

# Register your models here.
@admin.register(User)
class UserTable(admin.ModelAdmin):
    list_display = ('id', 'username')

@admin.register(Student)
class StudentTable(admin.ModelAdmin):
    list_display = ('user', 'first_name', 'last_name', 'phone', 'email', 'gender', 'school', 'department', 'course', 'year', 'semester', 'units')
    
    
    
@admin.register(Profile)
class ProfileTable(admin.ModelAdmin):
    list_display = ('student', 'profile_photo')
    
@admin.register(takeAttendance)
class takeAttendanceTable(admin.ModelAdmin):
    list_display = ('student', 'unitAttendent', 'date', 'time', 'status')


@admin.register(Chat)
class ChatTable(admin.ModelAdmin):
    list_display = ('student', 'time', 'date', 'text')