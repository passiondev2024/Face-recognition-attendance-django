from django.contrib import admin
from .models import Student

# Register your models here.
@admin.register(Student)
class StudentTable(admin.ModelAdmin):
    list_display = ('user', 'first_name', 'last_name', 'phone', 'email', 'gender', 'profile_pic', 'school', 'department', 'course', 'year', 'semester', 'units')