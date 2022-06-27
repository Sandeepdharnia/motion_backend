from django.contrib import admin

from posts.models import Post


class PostAdmin(admin.ModelAdmin):
    list_display = ['text_content', 'posted_by']


admin.site.register(Post, PostAdmin)