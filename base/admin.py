from django.contrib import admin

# Register your models here.
from .models import  TokenVerify,UserDetails,Attendance,Leave

class TokenAdmin(admin.ModelAdmin):
    list_display=['name','token','email']
admin.site.register(TokenVerify,TokenAdmin)


class DetailAdmin(admin.ModelAdmin):
    list_display=['user','position','salary']
admin.site.register(UserDetails,DetailAdmin)

class AttendanceAdmin(admin.ModelAdmin):
    list_display=['user','date','submitteddate']
admin.site.register(Attendance,AttendanceAdmin)

class LeaveAdmin(admin.ModelAdmin):
    list_display=['user','date','submitteddate']
admin.site.register(Leave,LeaveAdmin)


