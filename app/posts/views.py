from django.shortcuts import get_object_or_404
from rest_framework.generics import GenericAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, get_object_or_404
from django.views.generic import ListView, DetailView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from posts.models import Post
from posts.permissions import IsUser
from posts.serializers import PostSerializer, PostCreateSerializer, PostLikedSerializer

from posts.permissions import IsNotOwner
from rest_framework import filters

class CreatePostView(ListCreateAPIView):
    queryset = Post.objects.all()
    permission_classes = []
    filter_backends = [filters.SearchFilter]
    search_fields = ['content']

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
        posts = Post.objects.filter(author__in=followed_user_ids)
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
    permission_classes = [IsAuthenticated, IsNotOwner]

    def post(self, request, post_id):
        post_like = self.get_object()
        user = request.user
        if post_like in user.liked_posts.all():
            user.liked_posts.remove(post_like)
            return Response(self.get_serializer(instance=post_like).data)
        else:
            user.liked_posts.add(post_like)
            return Response(self.get_serializer(instance=post_like).data)

#class ListSearchPostUserView(ListAPIView):
    #serializer_class = PostSerializer
    #lookup_url_kwarg = 'search_string'

    #def get(self, request, *args, **kwargs):
        #search_string = self.kwargs.get("search_string")
        #posts_found = Post.objects.filter(content__icontains=search_string).order_by("-created")
        #return posts_found
        #queryset = Post.objects.all()
        #search_string = self.request.query_params.get('search_string', None)
        #if search_string is not None:
            #queryset = queryset.filter(content__icontains=search_string)
        #return queryset
        #queryset = Post.objects.all().order_by('-update_date')
        #serializer = self.get_serializer(queryset, many=True)
        #filter_backends = [filters.SearchFilter]
        #search_fields = ['username']
        #return Response(serializer.data, status=status.HTTP_200_OK)


class FriendsPostsView(ListAPIView):
    permission_classes = [IsUser]
    serializer_class = PostSerializer

    def get_queryset(self):
        friends_user_ids = self.request.user.friends.all().values_list("id", flat=True)
        posts = Post.objects.filter(author__in=friends_user_ids)
        return posts