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
        Email = data.get('email')
        code = data.get('code')
        username = data.get('username')
        firstname = data.get('first_name')
        lastname = data.get('last_name')
        password = data.get('password')
        passwordRepeat = data.get('password_repeat')
        database = Registration.objects.all().values_list('email', flat=True)
        for email in database:
            if Email in database:
                whatever = Registration.objects.get(email=Email)
                code2 = whatever.code
                print(type(code2),code2, type(code),code)
                logging.warning(type(code2))
                logging.warning(type(code))
                logging.warning(code)
                logging.warning(code2)
                if code2 == code:
                    database2 = users.models.User.objects.all().values_list('username', flat=True)
                    for userNAme in database2:
                        if username in database2:
                            return JsonResponse('username taken please select another', status=201, safe=False)
                        else:
                            if password == passwordRepeat:

                                users.models.User.objects.create(email=Email, username=username, first_name=firstname, last_name=lastname, password=password)
                                return JsonResponse('password is the same', status=201, safe=False)
                            else:
                                return JsonResponse('passwords do not match', status=201, safe=False)
                    return JsonResponse('it works2', status=201, safe=False)
                else:
                    return JsonResponse('it doesnt work1', status=201, safe=False)
            else:
                return JsonResponse('it doesnt work2', status=201, safe=False)
