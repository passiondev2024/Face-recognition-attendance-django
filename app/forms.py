from .models import ProfileImage
from django.forms import ModelForm


class ProfileImageForms(forms.ModelForm):
    class Meta:
        model = ProfileImage
        fields = '__all__'