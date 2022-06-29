from rest_framework import serializers

from posts.models import Post
from users.serializers import UserSerializer

from comment.serializers import CommentSerializer


class PostSerializer(serializers.ModelSerializer):
    #comments = CommentSerializer
    author = UserSerializer
    liked_by = UserSerializer
    class Meta:
        model = Post
        fields = ['content', 'images', 'created', 'updated', 'author', 'liked_by', 'is_liked',]


class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'
            #['content', 'images', 'created', 'updated', 'author', 'liked_by', 'is_liked', 'comments']


class PostLikedSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Post
        fields = ['text_content', 'user']