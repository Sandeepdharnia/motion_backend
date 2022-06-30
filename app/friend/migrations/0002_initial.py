# Generated by Django 4.0.5 on 2022-06-30 12:58

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('friend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='friend',
            name='friend_receive_list',
            field=models.ManyToManyField(blank=True, related_name='friends_request_list', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='friend',
            name='friend_request_received',
            field=models.ManyToManyField(blank=True, related_name='friend_requested', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='friend',
            name='status1',
            field=models.ManyToManyField(blank=True, related_name='is_friend', to=settings.AUTH_USER_MODEL),
        ),
    ]
