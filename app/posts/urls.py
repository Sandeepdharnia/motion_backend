from django.urls import path

from posts.views import CreatePostView, RetrieveUpdateDeletePostView, LikeView, FollowingPostsView, ListPostsUserView, \
    CreateLike

urlpatterns = [
    path('', CreatePostView.as_view()),
    path('<int:post_id>/', RetrieveUpdateDeletePostView.as_view()),
    path('likes/', LikeView.as_view()),
    path('following/', FollowingPostsView.as_view()),
    path('user/<int:post_id>/', ListPostsUserView.as_view()),
    path('toggle-like/<int:post_id>/', CreateLike.as_view())


]
