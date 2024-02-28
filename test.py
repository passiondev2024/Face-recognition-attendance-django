# import geocoder

# def get_current_gps_coordinates():
#     g = geocoder.ip('me')
#     if g.latlng is not None:
#         return g.latlng
#     else:
#         return None

# if __name__ == "__main__":
#     coordinates = get_current_gps_coordinates()
#     if coordinates is not None:
#         latitude, longitude = coordinates
#         print(f"Your current GPS coordinates are:")
#         print(f"Latitude: {latitude}")
#         print(f"Longitude: {longitude}")
#     else:
#         print("Unable to retrieve your GPS coordinates.")

import time
from datetime import datetime
from datetime import datetime, timedelta


now = datetime.now()

# Print the day of the week
day_of_week = now.strftime("%A")
print(day_of_week)