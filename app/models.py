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
    
    
from django.db import models
from django.dispatch import receiver
from django.db.models.signals import pre_save
from django.contrib.auth.models import User

class Profile(models.Model):
    student = models.OneToOneField(Student, null=True, blank=True, on_delete=models.CASCADE)
    profile_photo = models.ImageField(null=True, blank=True, upload_to="media/")

@receiver(pre_save, sender=Profile)
def save_profile_photo(sender, instance, **kwargs):
    if instance.student and instance.student.user:
        # Assuming the username is the desired identifier
        username = instance.student.user.username

        # Update the upload_to parameter to include the username
        instance.profile_photo.upload_to = f"media/{username}/"

        # Save the profile photo with the username as part of the path
        instance.profile_photo.save(f"{username}.jpg", instance.profile_photo, save=False)


    
class takeAttendance(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    unitAttendent = models.JSONField()
    date = models.DateField(auto_now_add = True, null = True)
    time = models.TimeField(auto_now_add=True, null = True)
    status = models.CharField(max_length=200, null = True, default='Absent')
    week = models.IntegerField()  # Add a new field for the week

    # def __str__(self):
    #     return self.unitAttendent


class Chat(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    text = models.CharField(max_length=30)
    date = models.DateField(auto_now_add = True, null = True)
    time = models.TimeField(auto_now_add=True, null = True)
    

    
    