import json

from django.http import JsonResponse
from rest_framework import status
from rest_framework.generics import GenericAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView, get_object_or_404

from rest_framework.response import Response

from users.models import User
from users.permissions import IsUseR
from users.serializers import UserSerializer, UserCreateSerializer, UserProfileSerializer


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


class UserProfileView(GenericAPIView):
    permission_classes = [IsUseR]
    serializer_class = UserProfileSerializer

    def get(self, request, *args, **kwargs):
        queryset = User.objects.filter(id=self.request.user.id)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class UserProfileUpdateView(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserProfileSerializer
    lookup_url_kwarg = 'user_id'

    # def patch(self, request, *args, **kwargs):
    #     user_id = kwargs.get("user_id")
    #     user = get_object_or_404(User, pk=user_id)
    #     data = json.loads(request.body)
    #     setattr(user, "username", data.get("username"))
    #     user.save()
    #     response = {
    #         "id": user_id,
    #         "username": user.username,
    #
    #     }
    #     return JsonResponse(user_id)

    # def perform_update(self, serializer):
    #     serializer.save()
