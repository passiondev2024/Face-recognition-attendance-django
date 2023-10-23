from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Student(models.Model):
    user = models.OneToOneField(User, null = True, blank = True, on_delete= models.CASCADE)
    firstname = models.CharField(max_length=200, null=True, blank=True)
    lastname = models.CharField(max_length=200, null=True, blank=True)
    admission = models.CharField(max_length=13, null=True, blank=True)
    phone = models.CharField(max_length=200, null=True, blank=True)
    email = models.CharField(max_length=200, null=True, blank=True)
    gender = models.CharField(max_length=200, null=True, blank=True)
    profile_pic = models.ImageField(null=True, blank=True)
    
    def __str__(self):
        return self.admission
    
    
    