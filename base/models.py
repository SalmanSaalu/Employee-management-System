from distutils.command.upload import upload
from email.policy import default
from pyexpat import model
from turtle import back
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class TokenVerify(models.Model):
    name=models.CharField(max_length=100)
    token=models.CharField(max_length=100)
    email=models.CharField(max_length=100)
    password=models.CharField(max_length=20)
    def __str__(self):
        return '{}'.format(self.name)

class UserDetails(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,blank=True,null=True)
    postalcode=models.IntegerField(blank=True,null=True)
    salary=models.IntegerField(blank=True,null=True)
    position=models.CharField(max_length=100,blank=True,null=True)
    address = models.CharField(max_length=150,blank=True,null=True)
    phonenumber = models.BigIntegerField(blank=True,null=True)
    image = models.ImageField(upload_to='photo',blank=True,null=True)
    
    def __str__(self):
        return '{}'.format(self.user)

class Attendance(models.Model):
    user=models.CharField(blank=True,null=True,max_length=100)
    date=models.CharField(blank=True,null=True,max_length=100)
    submitteddate=models.DateTimeField(default=timezone.now)

    def __str__(self) :
        return '{}'.format(self.user)


class Leave(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE,blank=True,null=True)
    date=models.CharField(blank=True,null=True,max_length=100)
    submitteddate=models.DateTimeField(default=timezone.now)

    def __str__(self) :
        return '{}'.format(self.user)





