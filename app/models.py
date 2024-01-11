from django.db import models
from django.contrib.auth.models import User
import os
# Create your models here.

class Student(models.Model):
    user = models.OneToOneField(User, null = True, blank = True, on_delete= models.CASCADE)
    first_name = models.CharField(max_length=200, null=True, blank=True)
    last_name = models.CharField(max_length=200, null=True, blank=True)
    phone = models.CharField(max_length=200, null=True, blank=True)
    email = models.CharField(max_length=200, null=True, blank=True)
    gender = models.CharField(max_length=200, null=True, blank=True)
    
    school = models.CharField(max_length=200, blank=True, null=True)
    department = models.CharField(max_length=200, blank=True, null=True)
    course = models.CharField(max_length=200, null=True, blank=True)
    year = models.CharField(max_length=200, null=True, blank=True)
    semester = models.CharField(max_length=200, null=True, blank=True)
    units = models.CharField(max_length=200, blank=True, null=True)
    
    def __str__(self):
        return self.first_name
    
    
class Profile(models.Model):
    student = models.OneToOneField(Student, null=True, blank=True, on_delete=models.CASCADE)
    profile_photo = models.ImageField(null=True, blank=True, upload_to="media/")
    
    # def __str__(self):
    #     return self.profile_photo
    
def profile_photo_upload(instance, filename):
    username = instance.student.user.username
    _, file_extension = os.path.splitext(filename)
    new_filename = f"{username}{file_extension}"
    return os.path.join("media/", new_filename)
    
    
class takeAttendance(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    unitAttendent = models.CharField(max_length=200)
    date = models.DateField(auto_now_add=True, null=True)
    time = models.TimeField(auto_now_add=True, null=True)
    status = models.CharField(max_length=200, null=True, default='Absent')

    def __str__(self):
        return f"{self.student.user.username} - {self.unitAttendent}"

    
    