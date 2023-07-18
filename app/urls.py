from django.urls import path
from . import views

urlpatterns = [
    path('', views.Index, name='index'),
    path('attend', views.Attend, name='attend'),
    path()
]