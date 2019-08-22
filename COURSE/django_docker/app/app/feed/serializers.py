from django.contrib.auth import get_user_model
from rest_framework import serializers

from app.feed.models import Post, Likes
User = get_user_model()


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['user_id', 'title', 'content', 'created', 'created_time']
        # read only = cannot be modified:
        #e.g. read_only_fields = ['id', 'first_name']


class LikesSerializer(serializers.ModelSerializer):
    post = PostSerializer()

    class Meta:
        model = Likes
        fields = ["post", 'user']
