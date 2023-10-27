from .models import Student

def get_all_units():
    all_units = Student.objects.values_list('units', flat=True)
    units_list = list(all_units)
    
    return units_list