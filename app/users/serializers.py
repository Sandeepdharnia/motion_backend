from rest_framework import serializers

from users.models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['username', 'followers', 'id']


class UserCreateSerializer(UserSerializer):
    class Meta:
        model = User
        fields = '__all__'
