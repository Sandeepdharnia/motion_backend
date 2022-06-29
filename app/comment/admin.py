from django.contrib import admin

from comment.models import Comment


class CommentAdmin(admin.ModelAdmin):
    list_display = ['post', 'author']


admin.site.register(Comment, CommentAdmin