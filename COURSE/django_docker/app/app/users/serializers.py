from django.contrib.auth import get_user_model
from rest_framework import serializers
from app.users.models import UserProfile, FriendRequests

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'password']
        # read only = cannot be modified:
        read_only_fields = ['id', 'first_name']
        extra_kwargs = {
            'password': {
                # write only (cant be read afterwards)
                'write_only': True
            }
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
        fields = ['user', 'following']


#LOGGED-IN USER FULLPROFILE SERIALIZERS


class FullUserSerializer(serializers.ModelSerializer):
    #to get the user id corresponding to the userprofiles in
    # the followers field of the User model https://www.django-rest-framework.org/api-guide/relations/#slugrelatedfield
    followers = serializers.SlugRelatedField(
        many=True,
        read_only=True,
        slug_field='user_id' #column name in the userprofile table
    )

    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'followers']


class MyProfileSerializer(serializers.ModelSerializer):
    user = FullUserSerializer()

    class Meta:
        model = UserProfile
        fields = '__all__'


#FRIEND REQUESTS SERIALIZERS

class FriendRequestsSerializer(serializers.ModelSerializer):
    requester=UserSerializer()
    receiver = UserSerializer()

    class Meta:
        model = FriendRequests
        fields = '__all__'
