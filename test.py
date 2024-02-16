from geopy.geocoders import Nominatim

def get_current_gps_coordinates():
    geolocator = Nominatim(user_agent="your_app_name", timeout=5)
    location = geolocator.geocode("me")

    if location is not None:
        return location.latitude, location.longitude
    else:
        return None

if __name__ == "__main__":
    coordinates = get_current_gps_coordinates()
    if coordinates is not None:
        latitude, longitude = coordinates
        print(f"Your current GPS coordinates are:")
        print(f"Latitude: {latitude}")
        print(f"Longitude: {longitude}")
    else:
        print("Unable to retrieve your GPS coordinates.")
