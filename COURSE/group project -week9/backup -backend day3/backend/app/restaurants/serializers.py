from django.contrib.auth import get_user_model
from rest_framework import serializers

from .models import Restaurant, Comment


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['user_id', 'name', 'country', 'city', 'address', 'openingHours', 'priceLevel', 'created_time']

class CommentSerializer(serializers.ModelSerializer):
    #restaurant= RestaurantSerializer()
    class Meta:
        model = Comment
        fields = ['user_id', 'content', 'created']
