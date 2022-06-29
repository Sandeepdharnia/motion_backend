from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Interest(models.Model):
    title = models.CharField(max_length=200)
    liked_things = models.ManyToManyField(to=User, blank=True, related_name='things_user_likes')

    def __str__(self):
        return f'ID{self.id}: {self.title}'