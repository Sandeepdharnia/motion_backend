from django.db import models

from posts.models import Post


class Shared_Posts(models.Model):
    parent_post = models.OneToOneField(to=Post, null=True, blank=True,on_delete=models.CASCADE, related_name='embedding_post')
    child_post = models.ForeignKey(to=Post, blank=True, null=True,on_delete=models.CASCADE, related_name='is_shared_in')#possibly change

    def __str__(self):
        return f'{self.parent_post}'
