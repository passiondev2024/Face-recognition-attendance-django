from django.core.management.base import BaseCommand
from django.db.utils import IntegrityError
from django.core.mail import send_mail
from django.contrib.auth.models import User
from django.conf import settings
import secrets


class Command(BaseCommand):
    help = 'Create users in the User model'

    def handle(self, *args, **kwargs):
        users_data = [
            # Add user credentials here - use dictionary
            {
                "username": "CSC/027/2020",
                "password": "CSC/027/2020",
            },
            {
                "username": "CSC/043/2020",
                "password": "CSC/043/2020",
            },
            {
                "username": "CSC/044/2020",
                "password": "CSC/044/2020",
            },
            {
                "username": "CSC/052/2020",
                "password": "CSC/052/2020",
            },
            {
                "username": "CSC/011/2020",
                "password": "CSC/011/2020",
            },
        ]

        for user_data in users_data:
            try:
                user = User.objects.create_user(
                    username=user_data["username"],
                    password=user_data["password"]
                )
                self.stdout.write(self.style.SUCCESS(f'Successfully created user: {user_data["username"]}'))
            except IntegrityError:
                self.stdout.write(self.style.ERROR(f'User account with username {user_data["username"]} already exists!'))
            except Exception as e:
                self.stdout.write(self.style.ERROR(f'An error occurred: {str(e)}'))
                # Log the error for further investigation

        self.stdout.write(self.style.SUCCESS('User accounts created successfully!'))
