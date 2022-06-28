from django.shortcuts import render
from django.views import View
from django.http import JsonResponse, HttpResponse
from django.shortcuts import get_object_or_404
import json
from registration.models import Registration


class RegisterView(View):
    def post(self, request, *args, **kwargs):
        data = json.loads(request.body)
        new_registration = Registration.objects.create(**data)
        new_registration.save()
        content = {'email': new_registration.email, 'username': new_registration.username}
        return JsonResponse(content, status=201)



