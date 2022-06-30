from django.contrib.auth import get_user_model
from django.db import models

from posts.models import Post

User = get_user_model()


class Comment(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    content = models.CharField(max_length=3000)
    author = models.ForeignKey(to=User, on_delete=models.SET_NULL, blank=True, null=True, related_name='commented_posts')
    post = models.ForeignKey(to=Post, on_delete=models.SET_NULL, blank=True, null=True, related_name='comments')
    def __str__(self):
        return f'ID{self.id}: {self.post} commentedby {self.author} created on {self.created}'