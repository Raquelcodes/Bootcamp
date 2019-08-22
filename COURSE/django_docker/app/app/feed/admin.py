from django.contrib import admin

# Register your models here.

from app.feed.models import Post, Likes

admin.site.register(Post)
admin.site.register(Likes)
