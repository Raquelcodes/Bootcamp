from django.urls import path
from app.feed.views import GetPostView, DeletePost, UpdatePost, \
    GetPostsViewByUserId, LikePostsView, UnlikePost, SharePost, \
    SearchUserPostsChronological, UserIDPostsChronological, FollowedUserPostsChronological, GetLikesForLoggedInUser, \
    GetPostsView, CreatePosts

urlpatterns = [
    path('', GetPostsView.as_view(), CreatePosts.as_view(), name='get-all-posts-create-posts'),
    path('<int:user_id>/', UserIDPostsChronological.as_view(), name='get-all-posts-of-user-chronological'),
    path('followed/', FollowedUserPostsChronological.as_view(), name='get-all-posts-of-followed-users-chronological'),
    path('posts/postid/<int:id>/', GetPostView.as_view(),  name='get-post-by-post-ID'),
    path('posts/userid/<int:pk>/', GetPostsViewByUserId.as_view(),  name='get-post-by-user-ID'),
    path('posts/delete/<int:id>/', DeletePost.as_view(),  name='delete-post'),
    path('posts/update/<int:id>/', UpdatePost.as_view(),  name='update-post'),
    path("posts/like/<int:id>/", LikePostsView.as_view(), name="like-post"),
    path('posts/like/unlike/<int:post_id>/', UnlikePost.as_view(),  name='unlike-post'),
    path('posts/likes/', GetLikesForLoggedInUser.as_view(),  name='get-posts-liked'),
    path('posts/share-post/<int:post_id>/', SharePost.as_view(),  name='share-post'),
    path('search/', SearchUserPostsChronological.as_view(), name='search-user-posts-cronological')

]
