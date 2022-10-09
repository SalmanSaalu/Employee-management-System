from urllib.parse import urlparse
from django.urls import path
from . import views
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
# )

urlpatterns=[
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('',views.getRoutes,name='routes'),
    path('users/profile/',views.getUserProfile,name='user'),
    path('users/',views.getUsers,name='users'),
    path('users/register/',views.registerUser,name='register'),
    path('users/profile/update/',views.updateUserProfile,name='update'),
    path('users/verify/',views.userVerfiy,name='verify'),
    path('users/attendance/',views.attendance,name='attendance'),
    path('users/todaydate/',views.attendanceToday,name='todayattendance'),
    path('users/leave/',views.leave,name='leave'),
    path('users/personaldetails/',views.personalDetails,name='personaldetails'),
    path('users/profile/personaldetailupdate/',views.personalDetailUpdate,name='peronalDetailUpdate'),
    path('admin/users/',views.adminUsersDetail,name='adminUsersDetail'),
    path('admin/userDetails/',views.userDetails,name='userDetails'),
    path('admin/allAttendance/',views.allAttendance,name='allAttendance'),
    path('admin/updateAdmin/',views.updateAdmin,name='updateAdmin'),
    path('admin/allLeave/',views.allLeave,name='allLeave')
    


]