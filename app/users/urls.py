from django.urls import path

from users.views import CreateUserView, RetrieveUpdateDeleteUserView, FollowersView, FollowingView, UserProfileView, \
    UserProfileUpdateView

urlpatterns = [
    path('', CreateUserView.as_view()),
    path('me/', UserProfileView.as_view()),
    path('<int:user_id>/update/', UserProfileUpdateView.as_view()),
    path('<int:user_id>/', RetrieveUpdateDeleteUserView.as_view()),
    path('followers/', FollowersView.as_view()),
    path('following/', FollowingView.as_view())
]
