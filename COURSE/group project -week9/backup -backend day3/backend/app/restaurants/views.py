from django.contrib.auth import get_user_model
from rest_framework.permissions import AllowAny, IsAuthenticated
from app.permissions import IsOwnerOrReadOnly
from rest_framework import filters
from .models import Restaurant, Comment
from .serializers import RestaurantSerializer, CommentSerializer
from rest_framework.generics import ListAPIView, DestroyAPIView, \
    CreateAPIView, RetrieveAPIView, UpdateAPIView


User=get_user_model()

#POST create resturant
#URL restaurants/new/

class CreateRestaurant(CreateAPIView):
    #permission_classes = (IsAuthenticated, IsOwnerOrReadOnly)
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def perform_create(self, serializer):
        serializer.save()


#GET:  get all restaurants
# URL ''

class GetRestaurantView(ListAPIView):
    #to allow non-logged in users to visualize details of a restaurant
    permissions_class=[AllowAny]
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        return Restaurant.objects.all()


#GET a specific restaurant by ID
#URL '<int:id>/'


class GetRestaurantById(RetrieveAPIView):
    # to allow non-logged in users to visualize restaurant details
    permissions_class = [AllowAny]
    # retrieveapiview gets one single element, by specifying the queryset
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    """
    - self.lookup_field defines what model field is used when querying the object.
    - self.lookup_url_kwarg defines what URL kwarg to get from the view's initialized kwargs.
    """
    lookup_url_kwarg = "restaurant_id"
    lookup_field = "id"


#DELETE:  delete a restaurant
#URL delete/<int:id>/


class DeleteRestaurant(DestroyAPIView):
    # allow this action only to the user who owns the post or to admin
    #permission_classes = (IsAuthenticated, IsOwnerOrReadOnly)
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = "restaurant_id"
    lookup_field = "id"


#PATCH: update a restaurant listing
#URL update/<int:id>/


class UpdateRestaurant(UpdateAPIView):
    # allow this action only to the user who owns the post or to admin
    #permission_classes = (IsAuthenticated, IsOwnerOrReadOnly)
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = "restaurant_id"
    lookup_field = "id"


#GET get all comments
#URL 'comment/'

class GetCommentsView(ListAPIView):
    #to allow non-logged in users to visualize details of a restaurant
    permissions_class=[AllowAny]
    serializer_class = CommentSerializer

    def get_queryset(self):
        return Comment.objects.all()


 #POST create comment
 #URL comment/new/<int:restaurant_id>/

class CreateComment(CreateAPIView):
    #permission_classes = (IsAuthenticated, IsOwnerOrReadOnly)
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def perform_create(self, serializer):
        serializer.save()



#GET:  get all comments of a user
# URL comment-by-user/<int:user_id>/

class CommentViewByUserId(ListAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()

    def get_queryset(self):
        return self.queryset.filter(user__id=self.kwargs.get("pk"))


#GET:  get all comments of a restaurant
# URL comment-by-restaurant/<int:restaurant_id>/

class CommentViewByRestaurantId(ListAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()

    def get_queryset(self):
        return self.queryset.filter(restaurant_id=self.kwargs.get("restaurant_id"))



#DELETE:  delete a comment
#URL comment/delete/<int:comment_id>/



class DeleteComment(DestroyAPIView):
    # allow this action only to the user who owns the post or to admin
    permission_classes = (IsAuthenticated,IsOwnerOrReadOnly, )
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_url_kwarg = "comment_id"
    lookup_field = "id"



#GET search restaurants by name
#URL 'search/

class SearchRestaurants(ListAPIView):
    """
        GET: Search users
        in Postman add in Params key: search, value: string
        """
    # to allow non-logged in users to search for restaurants
    permissions_class = [AllowAny]
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()

    filter_backends = (filters.SearchFilter,)
    search_fields = ('name',)


#GET search comments by content
#URL 'comment/search/'

class SearchComments(ListAPIView):
    """
        GET: Search users
        in Postman add in Params key: search, value: string
        """
    # to allow non-logged in users to search for restaurants
    permissions_class = [AllowAny]
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()

    filter_backends = (filters.SearchFilter,)
    search_fields = ('content',)
