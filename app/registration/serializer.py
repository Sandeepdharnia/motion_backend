# from rest_framework import serializers
# from registration.models import Registration
# from users.serializers import UserSerializer
#
#
# class RegistrationSerializer(serializers.ModelSerializer):
#     profile = UserSerializer(read_only=True)
#
#     class Meta:
#         model = Registration
#         fields = ['email']
#
#
# class RegistrationCreateSerializer(serializers.ModelSerializer):
#     def save(self, validated_data):
#         email = validated_data.get('email')
#         registration = Registration(email=email)
#         registration.save()
#         return registration
#     #
#     # class Meta:
#     #     model = Registration
#     #     fields = ['code']
