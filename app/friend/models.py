from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Post(models.Model):
    status1 = models.ManyToManyField(to=User, blank=True, related_name='is_friend')
    status2 = models.ManyToManyField(to=User, blank=True, related_name='is_following')
    friend_receive_list = models.ManyToManyField(to=User, blank=True, related_name='friends_request_list')
    friend_request_received = models.ManyToManyField(to=User, blank=True, related_name='friend_requested')

    def __str__(self):
        return f'ID{self.id}' #left it out on purpose since all fields are manytomany