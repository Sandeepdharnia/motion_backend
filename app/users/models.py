from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = ['username']

    email = models.EmailField(unique=True)

    followers = models.ManyToManyField('self', symmetrical=False, blank=True, related_name='users_following')
    following_users = models.ManyToManyField('self', symmetrical=False, related_name='followers_of_user', blank=True)
    avatar = models.ImageField(null=True, blank=True)
    location = models.CharField(max_length=200, null=True, blank=True)
    job = models.CharField(max_length=200, null=True, blank=True)
    banner = models.ImageField(null=True, blank=True)
    things_user_likes = models.CharField(max_length=200, null=True, blank=True, verbose_name='Interest')
    # will be changed, to=Interest, manytomany
    comments = models.CharField(max_length=200, null=True, blank=True, verbose_name='Comment')
    # will be changed, to=Comment, foreignkey
    is_following = models.BooleanField(default=False)
    friends_fr_list_sender = models.ManyToManyField('self', symmetrical=False, related_name='current_user_fr_request', blank=True)
    friends_fr_list_receiver = models.ManyToManyField('self', symmetrical=False, related_name='current_user_received_fr_request', blank=True)
    friends = models.ManyToManyField('self', related_name='current_user_friends', blank=True)
    friends_of = models.ManyToManyField('self', symmetrical=False, related_name='friends_of_friends_current_user', blank=True)

    def __str__(self):
        return self.username
