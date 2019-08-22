

from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from django.shortcuts import get_object_or_404
from rest_framework import filters, status
from rest_framework.generics import ListCreateAPIView, RetrieveAPIView, ListAPIView, CreateAPIView, GenericAPIView, \
    DestroyAPIView, UpdateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from app.feed.permissions import IsOwnerOrReadOnly
from app.users.models import UserProfile, FriendRequests
from app.users.serializers import UserSerializer, UserProfileSerializer, MyProfileSerializer,\
     FriendRequestsSerializer

from django.core.mail import send_mail

# Create your views here.

#GET: to get all users


class GenericGetUsersView(ListCreateAPIView):
    # queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        return User.objects.all()


#GET: to search by username


class SearchUsers(ListAPIView):
    """
        GET: Search users
        in Postman add in Params key: search, value: string
        """
    serializer_class = UserSerializer
    queryset = User.objects.all()

    filter_backends = (filters.SearchFilter,)
    search_fields = ('username',)


#GET: to get specific user


class GetSpecificUserView(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_url_kwarg = 'user_id'


#GET: to get all user profiles

class GetAllUserProfiles(ListAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer


#GET: to get specific user profile (public view)

class GetSpecificUserProfile(RetrieveAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    lookup_url_kwarg = 'user_id'


#GET: logged-in user gets their own profile


class GetMyProfile(RetrieveAPIView):
    # allow this action only to the user who owns the profile or to admin
    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly)
    queryset = UserProfile.objects.all()
    serializer_class = MyProfileSerializer

    def get(self, request, *args, **kwargs):
        user = self.request.user
        me = user.user_profile
        serializer = self.get_serializer(me)
        return Response(serializer.data)


"""
WIP----------------
"""
#PATCH: logged-in user updates their own profile -


class UpdateMyProfile(UpdateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = MyProfileSerializer
    lookup_field = 'id'

    def partial_update(self, request, *args, **kwargs):
        serializer = MyProfileSerializer(data=request.data)
        user=self.request.user
        if serializer.is_valid(user):
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


"""
    def partial_update(self, request, *args, **kwargs):
        #kwargs['partial'] = True
        return self.update(request=self.request.data('pk'))

"""
"""
    def get_queryset(self):
        #self.kwargs['pk']=self.request.user
        UserProfile.objects.get(request=self.request.data('pk')) # or request.POST or GET
"""


"""
WIP -----------------
"""
#POST: to follow a user


class FollowUser(GenericAPIView):

    serializer_class = UserProfileSerializer
    queryset = UserProfile.following
    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly)
    # to follow a user

    def post(self, request, *args, **kwargs):
        #check if user called in url exists
        user_id = get_object_or_404(User, id=self.kwargs.get('user_id'))


        #check if already following the user (ie get), or if not (create)
        
        follow, created = UserProfile.objects.get_or_create(user=self.request.user)
        follow.following.add(user_id)

    #FIX THIS CONDITIONAL
        if created:
            return Response("user followed")
        else:
            raise ValidationError('already following', code=406)


# DELETE: to unfollow a user

class UnfollowUser(GenericAPIView):
    serializer_class = UserProfileSerializer
    queryset = UserProfile.following
    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly)

    def delete(self, request, *args, **kwargs):
        user_id = get_object_or_404(User, id=self.kwargs.get('user_id'))
        follow, create= UserProfile.objects.get_or_create(user=self.request.user)
        follow.following.remove(user_id)
        return Response("you are no longer following this user")


#GET: to get a list of all the users the logged in user is folowing

class GetAllUserFollowing(ListAPIView):
    serializer_class = UserSerializer
    queryset = UserProfile.objects.all()

    def get_queryset(self):
        following = self.request.user.user_profile.following.all()
        return following


#GET: to get a list of all folowers of the logged in user

class GetAllUserFollowers(ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_queryset(self):
        followers = self.request.user.followers.all()

        allfollowers= [userprofile.user for userprofile in followers]
        return allfollowers


#FRIEND REQUESTS

#POST: send friend request to another user

class SendFriendRequest(CreateAPIView):
    serializer_class = FriendRequestsSerializer
    queryset = FriendRequests.objects.all()

    def create(self, request, *args, **kwargs):
        # requester is logged-in user
        requester=request.user
        # check if friend request already exists
        receiver = get_object_or_404(User, id=self.kwargs.get('user_id'))
        #check if already liked the post

        friend_request=FriendRequests(requester=requester, receiver=receiver, status='pending')
        friend_request.save()
        """ WIP ---------------------
        friend = User.objects.get(friend_request_received__receiver=) #HERE-LOOK AT TATIANA'S CODE
        friend.save()
        send_mail(
            f' You have a new friend request!',
            f'You have just received a friend request from {self.request.user} !',
            'students@propulsionacademy.com',
            [friend.email],
            fail_silently=False,
        )
        """
        return Response('friend request sent!',status=status.HTTP_201_CREATED)


#GET: List all open friend requests from others

class OpenFriendRequestsReceived(ListAPIView):
    serializer_class = FriendRequestsSerializer
    queryset = FriendRequests.objects.all()

    def get_queryset(self):
        open_friend_requests=self.queryset.filter(status='pending', receiver=self.request.user)
        return open_friend_requests


#GET: List all the logged in user’s pending friend requests


class OpenFriendRequestsRequested(ListAPIView):
    serializer_class = FriendRequestsSerializer
    queryset = FriendRequests.objects.all()

    def get_queryset(self):
        open_friend_requests_received=self.queryset.filter(status='pending', requester=self.request.user)
        return open_friend_requests_received

#PATCH: Accept an open friend request
"""
WIP----------------
"""


class AcceptFriendRequest(UpdateAPIView):
    serializer_class = FriendRequestsSerializer
    queryset = FriendRequests.objects.all()
    lookup_url_kwarg = 'friend_request_id'

    def perform_update(self, serializer):
        serializer.save()

        #friend = User.objects.get(friend_requester__status='accepted', friend_request_received=self.request.user)
        #friend.save()
        friend = FriendRequests.objects.get(status='accepted', receiver=self.request.user, id=self.kwargs.get('friend_request_id'))
        friend_to_email=get_object_or_404(User, friend_requester=friend) #friend to email is the friend requester

        send_mail(
            f'Hello from Motion - Your friend request was accepted!',
            f'Your friend {self.request.user} just accepted your friend request!',
            'students@propulsionacademy.com',
            [friend_to_email.email],
            fail_silently=False,
                 )


#PATCH: Reject an open friend request


class RejectFriendRequest(UpdateAPIView):
    serializer_class = FriendRequestsSerializer
    queryset = FriendRequests.objects.all()
    lookup_url_kwarg = 'friend_request_id'


#GET: List all accepted friends (all friends that accepted logged-in user's request)


class ListAcceptedFriends(ListAPIView):
    serializer_class = FriendRequestsSerializer
    queryset = FriendRequests.objects.all()

    def get_queryset(self):
        accepted_friends=self.queryset.filter(status='accepted', requester=self.request.user)
        return accepted_friends


#DELETE: Unfriend a user by friend_requester user ID

class UnfriendUser(DestroyAPIView):
    serializer_class = FriendRequestsSerializer
    queryset = FriendRequests.objects.all()

    def delete(self, request, *args, **kwargs):
        requester= kwargs['user_id']
        receiver=request.user
        accepted_friend_to_delete=FriendRequests.objects.get(receiver=receiver, requester=requester, status='accepted')
        accepted_friend_to_delete.delete()
        return Response('user unfriended', status=status.HTTP_204_NO_CONTENT)
