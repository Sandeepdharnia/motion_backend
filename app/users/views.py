from rest_framework import status
from rest_framework.generics import GenericAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView, get_object_or_404

from rest_framework.response import Response

from users.models import User
from users.permissions import IsUseR
from users.serializers import UserSerializer, UserCreateSerializer
from project.permissions import IsStaffOrReadOnly


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

#
# class FollowersView(GenericAPIView):
#     permission_classes = [IsUseR]
#
#     def get(self, request, *args, **kwargs):
#         queryset = request.user.followers.all()
#         serializer = UserSerializer(queryset, many=True)
#         return Response(serializer.data)


class ListFollowersUser(GenericAPIView):
    queryset = User.objects.all()
    permission_classes = [IsStaffOrReadOnly]
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        queryset = User.objects.filter(followers=self.request.user.id)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

# class FollowingView(GenericAPIView):
#     permission_classes = [IsUseR]
#
#     def get(self, request, *args, **kwargs):
#         queryset = User.objects.filter(following_users__pk=request.user.pk)
#         serializer = UserSerializer(queryset, many=True)
#         return Response(serializer.data)


class ListFollowingUser(GenericAPIView):
    queryset = User.objects.all()
    permission_classes = [IsStaffOrReadOnly]
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        queryset = User.objects.filter(following_users=self.request.user.id)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class FollowUser(GenericAPIView):  # creating a class to follow (of the user model) in order to make changes
    queryset = User.objects.all()
    permission_classes = [IsStaffOrReadOnly]
    serializer_class = UserSerializer
    lookup_url_kwarg = "user_id"

    def get(self, request, *args, **kwargs):
        current_user = self.request.user
        other_user = get_object_or_404(User, pk=kwargs.get("user_id"))
        if not other_user.is_following:
            current_user.followers.add(other_user.id)
            other_user.following_users.add(current_user.id)
            other_user.is_following = True
            other_user.save()
            return Response(status=204)
        else:
            current_user.followers.remove(other_user.id)
            other_user.following_users.remove(current_user.id)
            other_user.is_following = False
            other_user.save()
            return Response(status=204)


class ListSentFrRequest(GenericAPIView):
    queryset = User.objects.all()
    permission_classes = [IsStaffOrReadOnly]
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        queryset = User.objects.filter(friends_fr_list_sender=self.request.user.id)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ListReceivedFrRequest(GenericAPIView):
    queryset = User.objects.all()
    permission_classes = [IsStaffOrReadOnly]
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        queryset = User.objects.filter(friends_fr_list_receiver=self.request.user.id)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class SendFrRequest(GenericAPIView):
    queryset = User.objects.all()
    permission_classes = [IsStaffOrReadOnly]
    serializer_class = UserSerializer
    lookup_url_kwarg = "user_id"

    def get(self, request, *args, **kwargs):
        current_user = self.request.user
        other_user = get_object_or_404(User, pk=kwargs.get('user_id'))
        if not current_user in other_user.friends_fr_list_sender.all():
            other_user.friends_fr_list_sender.add(current_user.id)
            current_user.friends_fr_list_receiver.add(other_user.id)
            return Response(status=203)
        else:
            other_user.friends_fr_list_sender.remove(current_user.id)
            current_user.friends_fr_list_receiver.remove(other_user.id)
            return Response(status=204)


class AcceptFrRequest(GenericAPIView):
    queryset = User.objects.all()
    permission_classes = [IsStaffOrReadOnly]
    serializer_class = UserSerializer
    lookup_url_kwarg = "friend_request_id"

    def get(self, request, *args, **kwargs):
        current_user = self.request.user
        other_user = get_object_or_404(User, pk=self.kwargs.get('friend_request_id'))
        # restriction = User.objects.filter(friends_fr_list_receiver=current_user.id)
        # for user_element in range(restriction.count()):
        users_sent_fr_request_list = []
        current_user_received_list = User.objects.filter(friends_fr_list_receiver=current_user)
        for user_element in current_user_received_list:
            users_sent_fr_request_list.append(user_element)
        for user in users_sent_fr_request_list:
            if user.id == other_user.id:
                current_user.friends.add(other_user.id)
                current_user.friends_fr_list_receiver.remove(other_user.id)
                return Response(status=200)
        # for user_element in current_user.friends_fr_list_receiver.all():
        #     if user_element == other_user.id:
        #         current_user.friends.add(other_user)
        #         current_user.friends_fr_list_receiver.remove(other_user)
        #         return Response(status=200)
        # queryset = current_user.friends_fr_list_receiver.all()
        # queryset.filter()
        return Response(status=206)


class ListFriends(GenericAPIView):
    queryset = User.objects.all()
    permission_classes = [IsStaffOrReadOnly]
    serializer_class = UserSerializer
    lookup_url_kwarg = "friend_request_id"

    def get(self, request, *args, **kwargs):
        current_user_id = self.request.user.id
        queryset = User.objects.filter(friends=current_user_id)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)