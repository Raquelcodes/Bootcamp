from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from django.db.models import Q
from django.shortcuts import get_object_or_404

from rest_framework import filters
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from app.feed.models import Post, Likes
from rest_framework.generics import ListAPIView, RetrieveAPIView, DestroyAPIView, UpdateAPIView, \
    CreateAPIView, GenericAPIView
from app.feed.permissions import IsOwnerOrReadOnly
from app.feed.serializers import PostSerializer, LikesSerializer

User=get_user_model()

# Create your views here.

#POSTS

#GET:  get all posts

class GetPostsView(ListAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        return Post.objects.all()

#POST:  create a post

class CreatePosts(CreateAPIView):
    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly)
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def perform_create(self, serializer):
        serializer.save()

        friends= User.objects.filter(Q(friend_requester__status='accepted') | Q(friend_request_received__status='accepted'), Q(friend_requester__requester__id=self.request.user.id) | Q(friend_request_received__receiver__id=self.request.user.id))

        for friend in friends:
            send_mail(
                f'Hello from Motion - New Post Alert!',
                f'Your friend {self.request.user} just made a new post in Motion - come check it out!',
                'students@propulsionacademy.com',
                [friend.email],
                fail_silently=False,
            )

#GET:  get specific post

class GetPostView(RetrieveAPIView):
    # retrieveapiview gets one single element, by specifying the queryset
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    """
    - self.lookup_field defines what model field is used when querying the object.
    - self.lookup_url_kwarg defines what URL kwarg to get from the view's initialized kwargs.
    """
    lookup_url_kwarg = "id"
    lookup_field = "id"


#GET:  get all posts of a user

class GetPostsViewByUserId(ListAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()

    def get_queryset(self):
        return self.queryset.filter(user__id=self.kwargs.get("pk"))


#DELETE:  delete a post

class DeletePost(DestroyAPIView):
    # allow this action only to the user who owns the post or to admin
    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly)
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_url_kwarg = "id"
    lookup_field = "id"


#PATCH: update a post

class UpdatePost(UpdateAPIView):
    # allow this action only to the user who owns the post or to admin
    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly)
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_url_kwarg = "id"
    lookup_field = "id"

"""
#WIP--------------------------------------
"""
#POST:  share a post
class SharePost(GenericAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()

    def get_queryset(self):
        return self.queryset.filter(user__id=self.kwargs.get("post_id"))

    def post(self, request, *args, **kwargs):
        return


#GET: search all user posts chronological order

class SearchUserPostsChronological(ListAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    filter_backends = (filters.OrderingFilter,)
    ordering_fields = ('created')

    def get_queryset(self):
        return Post.objects.all().order_by('created')


#GET: get all  posts in chronological order of a specific user ID

class UserIDPostsChronological(ListAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    filter_backends = (filters.OrderingFilter,)
    ordering_fields = ('created')

    def get_queryset(self):
        return self.queryset.filter(user__id=self.kwargs.get("user_id")).order_by('created')

"""
#WIIIIP--------------
"""
#GET: get all  posts in chronological order of all followed users of the logged-in user


class FollowedUserPostsChronological(ListAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    filter_backends = (filters.OrderingFilter,)
    ordering_fields = ('created')
    order_by = ('-created')

    def get_queryset(self):
        followed = self.request.user.user_profile.following.all()  #this line provides user IDs for followed users
        return Post.objects.filter(user__id=followed).order_by('created')

#LIKES


#POST: like a post

class LikePostsView(CreateAPIView):
    serializer_class = LikesSerializer
    queryset = Likes.objects.all()

    def create(self, request, *args, **kwargs):
        #check if post called exists
        post = get_object_or_404(Post, id=self.kwargs.get('id'))
        #check f already liked the post
        like, created = Likes.objects.get_or_create(user=self.request.user, post=post)
        if not created:
            raise ValidationError('already liked', code=406)
        else:
            return Response("post liked")


#DELETE: unlike a post

class UnlikePost(DestroyAPIView):
    # allow this action only to the user who owns the post or to admin
    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly)
    queryset = Likes.objects.all()
    serializer_class = LikesSerializer
    lookup_url_kwarg = "post_id"
    lookup_field = "post_id"


#GET: get all posts logged-in user likes

class GetLikesForLoggedInUser(ListAPIView):
    serializer_class = LikesSerializer
    queryset = Likes.objects.all()

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)



"""
#GET: get all posts a user ID likes
class GetLikesByUserId(ListAPIView):
    serializer_class = LikesSerializer
    queryset = Likes.objects.all()

    def get_queryset(self):
        return self.queryset.filter(user__id=self.kwargs.get("pk"))
"""
