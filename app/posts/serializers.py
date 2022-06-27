from rest_framework import serializers

from posts.models import Post
from users.serializers import UserSerializer


class PostSerializer(serializers.ModelSerializer):
    # user = UserSerializer(read_only=True)
    # is_from_logged_in_user = serializers.SerializerMethodField()
    # logged_in_user_liked = serializers.SerializerMethodField()
    # amount_of_likes = serializers.SerializerMethodField()
    #
    # def get_logged_in_user_liked(self, post):
    #     user = self.context['request'].user
    #     if post in user.liked_posts.all():
    #         return True
    #     return False
    #
    # def get_is_from_logged_in_user(self, post):
    #     user = self.context['request'].user
    #     if user == post.user:
    #         return True
    #     return False
    #
    # @staticmethod
    # def get_amount_of_likes(post):
    #     return post.liked_by.all().count()

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