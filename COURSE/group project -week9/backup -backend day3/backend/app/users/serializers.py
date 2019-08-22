from django.contrib.auth import get_user_model
from rest_framework import serializers

from .models import UserProfile

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'password']
        # read only = cannot be modified:
        read_only_fields = ['id', 'first_name','username']
        extra_kwargs = {
            'password': {
                # write only (cant be read afterwards)
                'write_only': True
            }
            # ,
            # 'user': {'required': False}
        }

    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        # user = User(username=validated_data['username'])
        user.set_password(validated_data['password'])
        user.save()
        return user


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = UserProfile
        fields = ['user', 'aboutMe', 'joined', 'location']



#LOGGED-IN USER FULLPROFILE SERIALIZERS


class MyUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['username','first_name', 'last_name']


class MyProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = UserProfile
        fields = ['user', 'aboutMe', 'joined', 'location']
