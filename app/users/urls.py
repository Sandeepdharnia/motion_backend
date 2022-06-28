from django.urls import path

from users.views import CreateUserView, RetrieveUpdateDeleteUserView, FollowersView, FollowingView, FollowUser

urlpatterns = [
    path('', CreateUserView.as_view()),
    path('<int:user_id>/', RetrieveUpdateDeleteUserView.as_view()),
    path('followers/', FollowersView.as_view()),
    path('following/', FollowingView.as_view()),
    path('toggle-follow/<int:user_id>/', FollowUser.as_view())
]
