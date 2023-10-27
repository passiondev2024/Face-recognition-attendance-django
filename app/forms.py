from .models import Profile, Student
from django.forms import ModelForm
from django import forms

class StudentForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = '__all__'
        
        
class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = '__all__'