from django.urls import path

from .views import GetMyProfile, GenericGetUsersView, GetUserProfileById, SearchUsers, UpdateUserProfileView, \
    UpdateUserProfileViewMyUser

urlpatterns = [
    path('me/', GetMyProfile.as_view(), name='get-my-profile'),
    path('me/update/user-profile/', UpdateUserProfileView.as_view(), name='get-update-my-profile-profile-data'),
    path('me/update/user-data/', UpdateUserProfileViewMyUser.as_view(), name='get-update-my-profile-private-user-data'),
    path('list/', GenericGetUsersView.as_view(), name='get-all-users'),
    path('<int:pk>/', GetUserProfileById.as_view(), name='get-user-profile-by-ID'),
    path('search/', SearchUsers.as_view(), name='search-users')
    ]
