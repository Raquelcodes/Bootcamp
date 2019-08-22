from django.urls import path

from .views import CreateRestaurant, CreateComment, GetRestaurantView, GetRestaurantById, UpdateRestaurant, \
    DeleteRestaurant, CommentViewByUserId, DeleteComment, SearchRestaurants, CommentViewByRestaurantId, GetCommentsView, \
    SearchComments

urlpatterns = [
    path('new/', CreateRestaurant.as_view(), name='create-restaurant'),
    path('', GetRestaurantView.as_view(), name='get-all-restaurant'),
    path('<int:restaurant_id>/', GetRestaurantById.as_view(), name='get-restaurant-by-ID'),
    path('update/<int:restaurant_id>/', UpdateRestaurant.as_view(), name='update-restaurant-by-ID'),
    path('delete/<int:restaurant_id>/', DeleteRestaurant.as_view(), name='delete-restaurant-by-ID'),
    path('comment/new/<int:restaurant_id>/', CreateComment.as_view(), name='create-comment'),
    path('comment-by-user/<int:pk>/', CommentViewByUserId.as_view(), name='get-all-posts-by-user'),
    path('comment/delete/<int:pk>/', DeleteComment.as_view(), name='delete-comment'),
    path('comment-by-restaurant/<int:restaurant_id>/', CommentViewByRestaurantId.as_view(), name='get-comments-by-restaurant-id'),
    path('comment/', GetCommentsView.as_view(), name='get-all-comments'),
    path('search/', SearchRestaurants.as_view(), name='search-restaurants'),
    path('comment/search/', SearchComments.as_view(), name='search-comments')
]
