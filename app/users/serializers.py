from rest_framework import serializers

from users.models import User



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'followers', 'first_name','last_name']


class UserCreateSerializer(UserSerializer):
    class Meta:
        model = User
        fields = '__all__'


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
        "username",
        "first_name",
        "last_name",
        "email",
        "job",
        "things_user_likes",
        ]

