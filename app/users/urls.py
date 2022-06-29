from django.urls import path, include

from users.views import CreateUserView, RetrieveUpdateDeleteUserView, ListFollowersUser, ListFollowingUser, FollowUser, \
    ListSentFrRequest, SendFrRequest, ListReceivedFrRequest, ListFriends, AcceptFrRequest

followers_friends_patterns = [
    path('followers/toggle-follow/<int:user_id>/', FollowUser.as_view()),    # follow/unfollow user
    path('followers/followers/', ListFollowersUser.as_view()),  # get all followers from current user
    path('followers/following/', ListFollowingUser.as_view()),  # get all users the current user is following
    path('friends/request/sent/', ListSentFrRequest.as_view()),   # list of all pending fr request of current user
    # not asked but makes sense + more readability when coding
    path('friends/request/received/', ListReceivedFrRequest.as_view()),   # list of all received fr request of current user
    # not asked but makes sense + more readability when coding
    path('friends/request/<int:user_id>/', SendFrRequest.as_view()),   # sending a fr request to a specific user
    path('friends/requests/<int:friend_request_id>/accept/', AcceptFrRequest.as_view()),
    path('friends/requests/<int:friend_request_id>/refuse/', ListSentFrRequest.as_view()),
    # get detail of fr request, accept or refuse it, delete it
    path('friends/', ListFriends.as_view()),  # list of all current user friends
]

urlpatterns = [
    path('users/', CreateUserView.as_view()),
    path('users/<int:user_id>/', RetrieveUpdateDeleteUserView.as_view()),
    path('social/', include(followers_friends_patterns)),
]
