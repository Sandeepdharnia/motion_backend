from rest_framework import serializers

from posts.models import Post
from users.serializers import UserSerializer


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


class PostCreateSerializer(PostSerializer):
    class Meta:
        model = Post
        fields = '__all__'


class PostLikedSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Post
        fields = ['text_content', 'user']