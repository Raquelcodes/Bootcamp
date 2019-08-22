from django.contrib import admin
from app.users.models import UserProfile, FriendRequests

# Register your models here.

admin.site.register(UserProfile)
admin.site.register(FriendRequests)
