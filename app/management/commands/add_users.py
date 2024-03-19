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
                "username": "CSC0272020",
                "password": "CSC0272020",
            },
            {
                "username": "CSC0432020",
                "password": "CSC0432020",
            },
            {
                "username": "CSC0442020",
                "password": "CSC0442020",
            },
            {
                "username": "CSC0522020",
                "password": "CSC0522020",
            },
            {
                "username": "CSC0112020",
                "password": "CSC0112020",
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
