import logging

from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from django.http import JsonResponse, HttpResponse
from django.shortcuts import get_object_or_404
import json
from django.views import View
from rest_framework.response import Response

import users.models
from registration.models import Registration
from django.core.mail import send_mail

#curtis
class RegisterView(View):

    def post(self, request, *args, **kwargs):
        data = json.loads(request.body).get('email')
        check_if_email_exists = []
        for email in Registration.objects.all().values_list('email', flat=True):
            check_if_email_exists.append(email)
        if data in check_if_email_exists:
            return JsonResponse('Email already provided', safe=False, status=200)
        else:
            new_user = Registration.objects.create(email=data)
            new_user.save()
            content = {'code': new_user.code}
            send_mail(
                "Thanks for Registering",
                f'Here is your signup Token:{content}',
                'djangod192@gmail.com',
                [data],
                fail_silently=False,
            )
        return JsonResponse(content, status=201)


class ValidationView(View):
    def post(self, request, *args, **kwargs):
        data = json.loads(request.body)
        email = data.get('email')
        code = data.get('code')
        username = data.get('username')
        firstname = data.get('first_name')
        lastname = data.get('last_name')
        password = data.get('password')
        password_repeat = data.get('password_repeat')

        if password != password_repeat:
            return JsonResponse("Passwords do not match", status=400, safe=False)

        registration = get_object_or_404(Registration, email=email)
        if registration.code != code:
            return JsonResponse("Code is invalid.", status=400, safe=False)

        new_user = users.models.User.objects.create(email=email, username=username, first_name=firstname, last_name=lastname)
        new_user.set_password(password) # https://docs.djangoproject.com/en/4.0/topics/auth/default/#changing-passwords
        new_user.save()
        return JsonResponse('Created successfully', status=201, safe=False)
