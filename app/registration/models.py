import random

from django.contrib.auth import get_user_model
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

User = get_user_model()


def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class Registration(models.Model):
    email = models.CharField(max_length=50)
    username = models.CharField(max_length=30,blank=True, null=True)
    user = models.OneToOneField(to=User, on_delete=models.CASCADE, related_name='profile', blank=True, null=True)
    code = models.CharField(default=code_generator, max_length=5)



    def __str__(self):
        return f'ID{self.id}: {self.email}'


@receiver(post_save, sender=User)
def create_registration_profile(sender, instance, *args, **kwargs):
    profile, created = Registration.objects.get_or_create(user=instance)
    if created:
        profile.save()
