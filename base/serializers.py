from curses.ascii import US
from dataclasses import field
from pyexpat import model
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken

from .models import Attendance, Leave,UserDetails

class UserSerializer(serializers.ModelSerializer):
    name=serializers.SerializerMethodField(read_only=True)
    _id=serializers.SerializerMethodField(read_only=True)
    isAdmin=serializers.SerializerMethodField(read_only=True)

    class Meta:
        model=User
        fields=['id','_id','username','email','name','isAdmin']

    def get_isAdmin(self,obj):
        return obj.is_staff

    def get__id(self,obj):
        return obj.id

    def get_name(self,obj):
        name=obj.first_name
        if name=='':
            name=obj.email
        return name



class UserSerializerWithToken(UserSerializer):
    token=serializers.SerializerMethodField(read_only=True)

    class Meta:
        model=User
        fields=['id','_id','username','email','name','isAdmin','token']

    def get_token(self,obj):
        token=RefreshToken.for_user(obj)
        return str(token.access_token)


class AttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model =Attendance
        fields = '__all__'

class LeaveSerializer(serializers.ModelSerializer):
    class Meta:
        model =Leave
        fields = '__all__'

class userDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserDetails
        fields=['user','postalcode','salary','position','address','phonenumber']