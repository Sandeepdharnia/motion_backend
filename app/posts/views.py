from django.shortcuts import get_object_or_404
from rest_framework.generics import GenericAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from django.views.generic import ListView, DetailView
from rest_framework.response import Response

from posts.models import Post
from posts.permissions import IsUser
from posts.serializers import PostSerializer, PostCreateSerializer, PostLikedSerializer


class CreatePostView(ListCreateAPIView):
    queryset = Post.objects.all()
    permission_classes = []

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return PostCreateSerializer
        return PostSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class RetrieveUpdateDeletePostView(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_url_kwarg = 'post_id'
    permission_classes = [IsUser]


class LikeView(GenericAPIView):
    permission_classes = [IsUser]

    def get(self, request, *args, **kwargs):
        queryset = Post.objects.filter(liked_by__pk=request.user.pk)
        serializer = PostLikedSerializer(queryset, many=True)
        return Response(serializer.data)


class FollowingPostsView(ListAPIView):
    permission_classes = [IsUser]
    serializer_class = PostSerializer

    def get_queryset(self):
        followed_user_ids = self.request.user.followers.all().values_list("id", flat=True)
        posts = Post.objects.filter(author=followed_user_ids)
        return posts


class ListPostsUserView(ListAPIView):
    serializer_class = PostSerializer
    lookup_url_kwarg = 'post_id'
    permission_classes = [IsUser]

    def get_queryset(self):
        user_id = self.kwargs.get("post_id")
        return Post.objects.filter(author__id=user_id).order_by("-created")


class CreateLike(GenericAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    lookup_url_kwarg = 'post_id'
    permission_classes = []

    def post(self, request, post_id):
        post_to_save = self.get_object()
        user = request.user
        if post_to_save in user.liked_posts.all():
            user.liked_posts.remove(post_to_save)
            return Response(self.get_serializer(instance=post_to_save).data)
        user.liked_posts.add(post_to_save)
        return Response(self.get_serializer(instance=post_to_save).data)

