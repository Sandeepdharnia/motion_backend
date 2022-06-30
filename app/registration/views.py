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


class RegisterView(View):

    def post(self, request, *args, **kwargs):
        data = request.POST.get('email')
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

        Email = request.POST.get('email')
        code = request.POST.get('code')
        username = request.POST.get('username')
        firstname = request.POST.get('first_name')
        lastname = request.POST.get('last_name')
        password = request.POST.get('password')
        passwordRepeat = request.POST.get('password_repeat')
        database = Registration.objects.all().values_list('email', flat=True)
        for email in database:
            if Email in database:
                whatever = Registration.objects.get(email=Email)
                code2 = whatever.code
                if code2 == code:
                    database2 = users.models.User.objects.all().values_list('username', flat=True)
                    for userNAme in database2:
                        if username in database2:
                            return JsonResponse('username taken please select another', status=201, safe=False)
                        else:
                            if password == passwordRepeat:

                                new_user = users.models.User.objects.create(**data)
                                new_user.save()
                                return JsonResponse('password is the same', status=201, safe=False)
                            else:
                                return JsonResponse('passwords do not match', status=201, safe=False)
                    return JsonResponse('it works2', status=201, safe=False)
                else:
                    return JsonResponse('it doesnt work1', status=201, safe=False)
            else:
                return JsonResponse('it doesnt work2', status=201, safe=False)
