from django.core.management.base import BaseCommand
from django.db.utils import IntegrityError
from app.models import User
from django.contrib.auth import get_user_model
User = get_user_model()

class Command(BaseCommand):
    help = 'Create users in the User model'

    def handle(self, *args, **kwargs):
        users_data = [
            # Add user credentials here - use dictionary
            {
                "username": "CSC/027/2020",
                "password": "CSC/027/2020"
            },
            {
                "username": "CSC/043/2020",
                "password": "CSC/043/2020"
            },
            {
                "username": "CSC/011/2020",
                "password": "CSC/011/2020"
            },
            {
                "username": "CSC/052/2020",
                "password": "CSC/052/2020"
            },
            {
                "username": "CSC/044/2020",
                "password": "CSC/044/2020"
            },
        ]

        for user_data in users_data:
            try:
                user = User.objects.create_user(**user_data)  # Use the correct manager
                self.stdout.write(self.style.SUCCESS(f'Successfully created user: {user_data["username"]}'))
            
            except IntegrityError:    # if the user credentials exists, print the message below.
                self.stdout.write(self.style.ERROR(f'User account with credentials {user_data["username"]} exists!'))
                continue    # continue saving other user credentials.

            # Send welcome email to the user
            # self.send_welcome_email(user, user_data["password"])
        self.stdout.write(self.style.SUCCESS('User accounts created successfully!'))
