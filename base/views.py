from email import message
from msilib.schema import ServiceInstall
from os import stat
from turtle import pos
from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.response import Response
# Create your views here.
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import AttendanceSerializer, LeaveSerializer, UserSerializer,UserSerializerWithToken,userDetailsSerializer

from django.contrib.auth.hashers import make_password
from rest_framework import status
from django.conf import settings
from django.core.mail import send_mail, EmailMessage
from .models import Attendance, TokenVerify,UserDetails,Leave

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
@permission_classes([IsAdminUser])
def updateAdmin(request):
    id=request.data['id']
    username=request.data['username']
    email=request.data['email']
    address=request.data['address']
    postalcode=request.data['postalcode']
    phonenumber=request.data['phonenumber']
    salary=request.data['salary']
    position=request.data['position']
    b=UserDetails.objects.get(user=id)

    b.address=address
    b.postalcode=postalcode
    b.phonenumber=phonenumber
    b.salary=salary
    b.position=position
    b.save()

    alldata=UserDetails.objects.all()
    serializer=userDetailsSerializer(alldata,many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
@permission_classes([IsAdminUser])
def allLeave(request):
    allleave=Leave.objects.all().order_by('-submitteddate')
    serializer=LeaveSerializer(allleave,many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
@permission_classes([IsAdminUser])
def allAttendance(request):
    allattendance=Attendance.objects.all().order_by('-submitteddate')
    serializer=AttendanceSerializer(allattendance,many=True)
    return Response(serializer.data)
    


@api_view(['GET'])
@permission_classes([IsAuthenticated])
@permission_classes([IsAdminUser])
def userDetails(request):
    alldata=UserDetails.objects.all()
    serializer=userDetailsSerializer(alldata,many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
@permission_classes([IsAdminUser])
def adminUsersDetail(request):
    # print('working')
    alldata=User.objects.all()
    serializer=UserSerializer(alldata,many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def leave(request):
    data=request.user
    print('working')
    if Leave.objects.filter(user=data).exists():
        leaves= Leave.objects.filter(user=data).order_by('-submitteddate')
        serializer=LeaveSerializer(leaves,many=True)
        return Response(serializer.data)
    else:
        leavemessage={'detail':'no leaves'}
        return Response(leavemessage,status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def attendanceToday(request):
    # print('good')
    if request.data:
        data=request.user
        todaydate=request.data
        newdate=todaydate['checkattendance']
        k= Attendance(user=data.username,date=newdate)
        k.save()
        userAttendance=Attendance.objects.filter(user=data.username).order_by('-submitteddate')
        serializer=AttendanceSerializer(userAttendance,many=True)
        return Response(serializer.data)
        
        
    else:
        message={'detail':'there is being some issue on attendance submission'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)
    



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def attendance(request):
    data=request.user
    if Attendance.objects.filter(user=data.username).exists():

        userAttendance=Attendance.objects.filter(user=data.username).order_by('-submitteddate')
        serializer=AttendanceSerializer(userAttendance,many=True)
        return Response(serializer.data)
    else:
        
        message={'detail':'you have no attendance currently marked'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def registerUser(request):
    data=request.data
    token=data['tokenverify']
    
    if TokenVerify.objects.filter(token=token).exists():
            user=User.objects.create(
                first_name=data['name'],
                username=data['email'],
                email=data['email'],
                password=make_password(data['password']),
                is_active=False
            )
            userdetail=UserDetails(user=user,
                position=data['position'],
                postalcode=data['postalcode'],
                phonenumber=data['phonenumber'],
                address=data['address'])
            userdetail.save()
            serializer=UserSerializerWithToken(user,many=False)
            tokenDelete=TokenVerify.objects.get(token=token)
            tokenDelete.delete()
            return Response('process completed')
        
    else:
       
        message={'detail':'please type your OTP correctly'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def userVerfiy(request):
    data=request.data
    email=data['email']
    if User.objects.filter(email=email).exists():
        message={'user with this email already exist'}
        print(message)
        return Response(message,status=status.HTTP_400_BAD_REQUEST)
    else:
        username=data['name']
        password=make_password(data['password'])

        from django.utils.crypto import get_random_string
        unique_id = get_random_string(length=8, allowed_chars='1234567890')
        Verify=TokenVerify.objects.create(name=username,email=email,token=unique_id,password=password)
        Verify.save()
 
        message='an email is sent'
        subject = 'Hello'
        detailmessage = f'Hi {username}, thank you for registering in empsystems. \n Your OTP to verify \n {unique_id}'
        email_from = settings.EMAIL_HOST_USER
        recipient_list = [email, ]
        send_mail( subject, detailmessage, email_from, recipient_list )


        # print(message)
        return Response(message)

@api_view(['GET'])
def getRoutes(request):
    routes=["../api/"]
    return Response(routes)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    # print(request.user)
    user=request.user
    serializer=UserSerializer(user,many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def personalDetails(request):
    try:
        user=request.user
        detail=UserDetails.objects.get(user=user)
        serializer=userDetailsSerializer(detail,many=False)
        return Response(serializer.data)
    except:
        return Response('no data')
        


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    user=request.user
    serializer=UserSerializerWithToken(user,many=False)
    data=request.data
    user.first_name=data['name']
    user.username=data['email']
    user.email=data['email']

    if data['password']!='':
        user.password=make_password(data['password'])
    user.save()
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def personalDetailUpdate(request):
    
    user=request.user.id
    data=request.data
    address=data['address']
    postalcode=data['postalcode']
    salary=data['salary']
    phonenumber=data['phonenumber']
    position=data['position']
    
    if UserDetails.objects.filter(user=user).exists():
        
        k=UserDetails.objects.get(user=user)
        k.address=address
        k.postalcode=postalcode
        k.salary=salary
        k.phonenumber=phonenumber
        k.position=position    
        k.save()
        serializer=userDetailsSerializer(k,many=False)
        return Response(serializer.data)
    else:
         return Response('no updated data')



@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users=User.objects.all()
    serializer=UserSerializer(users,many=True)
    return Response(serializer.data)


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    
     def validate(self, attrs):
        data = super().validate(attrs)
        serializer=UserSerializerWithToken(self.user).data

        for k,v in serializer.items():
            # print(k,v)
            data[k]=v
        # data['username']=self.user.username
        # data['email']=self.user.email

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer