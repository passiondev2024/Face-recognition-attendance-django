from django.contrib import admin
from .models import Student, ProfileImage

# Register your models here.
@admin.register(Student)
class StudentTable(admin.ModelAdmin):
    list_display = ('user', 'first_name', 'last_name', 'phone', 'email', 'gender', 'school', 'department', 'course', 'year', 'semester', 'units')
    
    
    
@admin.register(ProfileImage)
class ProfileImageTabls(admin.ModelAdmin):
    list_display = ('student', 'profile_pic')