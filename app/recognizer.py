import cv2
import numpy as np
import face_recognition
from datetime import datetime
from datetime import date
import time
import os
from django.conf import settings

def Recognizer(details, classNames):
    time_spend = time.time() + 30
    path = os.path.join(settings.BASE_DIR, 'media', 'media')
    print(path)
    
    images = []
    classNames = []
    myList = os.listdir(path)
    for cl in myList:
        curImg = cv2.imread(f'{path}/{cl}')
        images.append(curImg)
        classNames.append(os.path.splitext(cl)[0])
        
    def findEncondings(images):
        encodeList = []
        for img in images:
            img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
            encode = face_recognition.face_encodings(img)[0]
            encodeList.append(encode)
        return encodeList
    
    
    encodeListKnown = findEncondings(images)
    cap = cv2.VideoCapture(0)

    while True:
        success, img = cap.read()
        cv2.imshow('Class Attendance', img)
        imgS = cv2.resize(img, (0,0), None,0.25,0.25)
        imgS = cv2.cvtColor(imgS, cv2.COLOR_BGR2RGB)
        facesCurFrame = face_recognition.face_locations(imgS)
        encodesCurFrame = face_recognition.face_encodings(imgS, facesCurFrame)
        
        name = "Unknown"
        for encodeFace, faceLoc in zip(encodesCurFrame, facesCurFrame):
            matches = face_recognition.compare_faces(encodeListKnown, encodeFace, tolerance=0.6)
            faceDis = face_recognition.face_distance(encodeListKnown, encodeFace)
            matcheIndex = np.argmin(faceDis)
            
            if matches[matcheIndex]:
                name = classNames[matcheIndex].upper()
                y1,x2,y2,x1 = faceLoc
                y1,x2,y2,x1 = y1*4, x2*4, y2*4,x1*4
                cv2.rectangle(img, (x1,y1), (x2,y2), (0,255,0), 2)
                cv2.rectangle(img, (x1,y2-35), (x2,y2), (0,255,0), cv2.FILLED)
                cv2.putText(img, name, (x1+6, y2-6), cv2.FONT_HERSHEY_COMPLEX, 1, (255,255,255), 2)
                
        cv2.imshow('Class Attendance', img)
        if cv2.waitKey(1) == ord('q'):
            break
        if time.time() > time_spend:
            break
    cap.release()
    cv2.destroyAllWindows()
    return name