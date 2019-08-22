from django.urls import path
from app.users.views import GenericGetUsersView, GetSpecificUserView, GetAllUserProfiles, \
    GetSpecificUserProfile, FollowUser, UnfollowUser, GetAllUserFollowers, GetAllUserFollowing, GetMyProfile, \
    UpdateMyProfile, SearchUsers, SendFriendRequest, OpenFriendRequestsReceived, OpenFriendRequestsRequested, \
    AcceptFriendRequest, RejectFriendRequest, UnfriendUser, ListAcceptedFriends

urlpatterns = [
    path('', GenericGetUsersView.as_view(), name='get-all-users'),
    path('<int:user_id>/', GetSpecificUserView.as_view(), name='get-specific-user'),
    path('profiles/', GetAllUserProfiles.as_view(), name='get-all-user-profiles'),
    path('profiles/<int:user_id>/', GetSpecificUserProfile.as_view(), name='get-specific-user-profile'),
    path('profiles/follow/<int:user_id>/', FollowUser.as_view(), name='follow-user'),
    path('profiles/unfollow/<int:user_id>/', UnfollowUser.as_view(), name='ufollow-user'),
    path('profiles/following/', GetAllUserFollowing.as_view(), name='get-all-followers-of-user'),
    path('profiles/followers/', GetAllUserFollowers.as_view(), name='get-all-following-of-user'),
    path('me/', GetMyProfile.as_view(), name='view-my-profile'),
    path('me/update/', UpdateMyProfile.as_view(), name='update-my-profile'),
    path('search/', SearchUsers.as_view(), name='search-users'),
    path('friendrequests/<int:user_id>/', SendFriendRequest.as_view(), name='send-friend-request-to-user'),
    path('friendrequests/', OpenFriendRequestsReceived.as_view(), name='open-friend-request-received-by-logged-in-user'),
    path('friendrequests/pending/', OpenFriendRequestsRequested.as_view(), name='open-friend-request-to-logged-in-user'),
    path('friendrequests/accept/<int:friend_request_id>/', AcceptFriendRequest.as_view(), name='accept-open-friend-request'),
    path('friendrequests/reject/<int:friend_request_id>/', RejectFriendRequest.as_view(), name='reject-open-friend-request'),
    path('friends/', ListAcceptedFriends.as_view(), name='get-all-accepted-friends'),
    path('friends/unfriend/<int:user_id>/', UnfriendUser.as_view(), name='unfriend-user')


]
