from django.db import models

from app.posts.models import Post


class Shared_Posts(models.Model):
    parent_post = models.OneToOneField(to=Post, null=True, blank=True, related_name='embedding_post')
    child_post = models.ForeignKey(to=Post, blank=True, null=True, related_name='is_shared_in')#possibly change
