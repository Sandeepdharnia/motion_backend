from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = ['username']

    email = models.EmailField(unique=True)

    followers = models.ManyToManyField(to='self', blank=True, related_name='following')

    def __str__(self):
        return self.username
