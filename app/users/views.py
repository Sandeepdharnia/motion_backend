from rest_framework import status
from rest_framework.generics import GenericAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView

from rest_framework.response import Response

from users.models import User
from users.permissions import IsUseR
from users.serializers import UserSerializer, UserCreateSerializer


class CreateUserView(ListCreateAPIView):
    queryset = User.objects.all()
    permission_classes = []

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return UserCreateSerializer
        return UserSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class RetrieveUpdateDeleteUserView(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_url_kwarg = 'user_id'
    permission_classes = [IsUseR]


class FollowersView(GenericAPIView):
    permission_classes = [IsUseR]

    def get(self, request, *args, **kwargs):
        queryset = request.user.followers.all()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)


class FollowingView(GenericAPIView):
    permission_classes = [IsUseR]

    def get(self, request, *args, **kwargs):
        queryset = User.objects.filter(followers__pk=request.user.pk)
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)


class FollowUser(GenericAPIView):
    pass