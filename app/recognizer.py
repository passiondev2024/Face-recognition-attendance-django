import cv2
import numpy as np
import face_recognition
import os
from datetime import datetime
from datetime import date
import time

time_spend = time.time() + 30
path = os.path.join(BASE_DIR, 'media')
images = []
classNames = []
myList = os.listdir(path)
# print(myList)
for cl in myList:
    curImg = cv2.imread(f'{path}/{cl}')
    images.append(curImg)
    classNames.append(os.path.splitext(cl)[0])
# print(classNames)

def findEncondings(images):
    encodeList = []
    for img in images:
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        encode = face_recognition.face_encodings(img)[0]
        encodeList.append(encode)
    return encodeList

def markAttendance(name):
    with open('attendance.csv', 'r+') as f:
            myDataList = f.readlines()
            nameList = []
            for line in myDataList:
                entry = line.split(',')
                nameList.append(entry[0])
            if name not in nameList: 
                now = datetime.now()
                today = datetime.today()
                tdString = today.strftime('%d:%m:%Y')
                dtString = now.strftime('%H:%M:%S')
                f.writelines(f'\n{name},{tdString},{dtString}')

encodeListKnown = findEncondings(images)
# print('Encoding Complete')

cap = cv2.VideoCapture(0)

while True:
    success, img = cap.read()
    cv2.imshow('Class Attendance', img)
    imgS = cv2.resize(img,(0,0), None,0.25,0.25)
    imgS = cv2.cvtColor(imgS, cv2.COLOR_BGR2RGB)
    
    facesCurFrame = face_recognition.face_locations(imgS)
    encodesCurFrame = face_recognition.face_encodings(imgS,facesCurFrame)
    
    for encodeFace, faceLoc in zip(encodesCurFrame, facesCurFrame):
        matches = face_recognition.compare_faces(encodeListKnown, encodeFace, tolerance=0.6)
        faceDis = face_recognition.face_distance(encodeListKnown,encodeFace)
        print(faceDis)
        matcheIndex = np.argmin(faceDis)
        
        if matches[matcheIndex]:
            name = classNames[matcheIndex].upper()
            print(name)
            y1,x2,y2,x1 = faceLoc
            y1,x2,y2,x1 = y1*4,x2*4,y2*4,x1*4
            cv2.rectangle(img, (x1, y1),(x2,y2),(0,255,0),2)
            cv2.rectangle(img, (x1,y2-35), (x2,y2),(0,255,0),cv2.FILLED)
            cv2.putText(img, name, (x1+6,y2-6),cv2.FONT_HERSHEY_COMPLEX,1,(255,255,255),2)
            
            markAttendance(name)
    cv2.imshow('Class Attendance', img)
    if cv2.waitKey(1) == ord('q'):
        break
    if time.time() > time_spend:
        break
cap.release()
cv2.destroyAllWindows()