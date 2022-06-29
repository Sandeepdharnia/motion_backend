from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from django.http import JsonResponse, HttpResponse
from django.shortcuts import get_object_or_404
import json
from django.views import View
from rest_framework.response import Response
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



