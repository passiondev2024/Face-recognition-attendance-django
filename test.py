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

# from datetime import datetime

# now = datetime.now()

# # Print the day of the week
# day_of_week = now.strftime("%A")
# print(day_of_week)


import asyncio
import winsdk.windows.devices.geolocation as wdg

async def getCoords():
    locator = wdg.Geolocator()
    pos = await locator.get_geoposition_async()
    return [round(pos.coordinate.latitude, 8),  round(pos.coordinate.longitude, 8)]

def getLoc():
    try:
        return asyncio.run(getCoords())
    except PermissionError:
        print("ERROR: You need to allow applications to access your location in Windows settings")

if __name__ == "__main__":
    coordinates = getLoc()
    if coordinates:
        print("Latitude:", coordinates[0])
        print("Longitude:", coordinates[1])


