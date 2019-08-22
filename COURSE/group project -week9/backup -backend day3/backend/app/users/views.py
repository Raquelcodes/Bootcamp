
from django.contrib.auth.models import User
from rest_framework import filters
from rest_framework.generics import RetrieveAPIView, ListCreateAPIView, ListAPIView, UpdateAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from app.permissions import IsOwnerOrReadOnly
from .serializers import MyProfileSerializer, UserSerializer, UserProfileSerializer, MyUserSerializer
from .models import UserProfile


#GET  my profile
# URL 'me/'


class GetMyProfile(RetrieveAPIView):
    # allow this action only to the user who owns the profile or to admin
    #permission_classes = (IsAuthenticated, IsOwnerOrReadOnly)
    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly,)
    queryset = UserProfile.objects.all()
    serializer_class = MyProfileSerializer

    def get(self, request, *args, **kwargs):
        user = self.request.user
        me = user.user_profile
        serializer = self.get_serializer(me)
        return Response(serializer.data)


#GET: to get all users
# URL 'list/'

class GenericGetUsersView(ListCreateAPIView):
    # queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        return User.objects.all()


#GET userprofile by user ID
# URL <int:pk>

class GetUserProfileById(RetrieveAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    lookup_url_kwarg = 'pk'


#POST: update user profile - userprofile model part (in front end to be united in same page with "update user profile-user model part)
#URL 'me/update/user-profile/'


class UpdateUserProfileView(UpdateAPIView):
    serializer_class = MyProfileSerializer
    queryset = UserProfile.objects.all()
    permission_classes = [
        IsAuthenticated,
        IsOwnerOrReadOnly,
    ]


    def update(self, request, *args, **kwargs):

        user = self.request.user
        serializer = MyProfileSerializer(instance=user.user_profile,  data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response( "User profile updated.", status=200)
        else:
            return Response( "Unable to perform request. Please try again later.", status=400)

#POST: update user profile - user model part (in front end to be united in same page with "update user profile-userprofile model part)
#URL 'me/update/user-profile/'


class UpdateUserProfileViewMyUser(UpdateAPIView):
    serializer_class = MyProfileSerializer
    queryset = User.objects.all()
    permission_classes = [
        IsAuthenticated,
        IsOwnerOrReadOnly,
    ]


    def update(self, request, *args, **kwargs):

        user = self.request.user
        serializer = MyUserSerializer(instance=user,  data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response( "User profile updated.", status=200)
        else:
            return Response( "Unable to perform request. Please try again later.", status=400)


#GET: to search by username or first name or last name


class SearchUsers(ListAPIView):
    """
        GET: Search users
        in Postman add in Params key: search, value: string
        """
    serializer_class = UserSerializer
    queryset = User.objects.all()

    filter_backends = (filters.SearchFilter,)
    search_fields = ('username', 'first_name', 'last_name')
