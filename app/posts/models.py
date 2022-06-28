from django.contrib.auth import get_user_model
from django.db import models

from shared_posts.models import Shared_Posts

User = get_user_model()


class Post(models.Model):
    content = models.CharField(max_length=200)
    images = models.ImageField(blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(to=User, on_delete=models.SET_NULL, blank=True, null=True, related_name='user_posts')
    liked_by = models.ManyToManyField(to=User, blank=True, related_name='liked_posts')
    is_liked = models.BooleanField(default=False)
    # comments = models.ForeignKey(to=comment,blank=True,null=True, related_name='post_id') #will be changed later
    embedding_post = models.OneToOneField(to=Shared_Posts, null=True, blank=True, related_name='parent_post')
    is_shared_in = models.ForeignKey(to=Shared_Posts, blank=True, null=True, related_name='child_post')


    def __str__(self):
        return f'ID{self.id}: {self.posted_by}'

