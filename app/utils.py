from .models import Student

def get_student_units(student):
    student_instance = Student.objects.get(user=student)
    units = student_instance.units.split(',')
    return units