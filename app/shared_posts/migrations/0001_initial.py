# Generated by Django 4.0.5 on 2022-06-30 12:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('posts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Shared_Posts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('child_post', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='is_shared_in', to='posts.post')),
                ('parent_post', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='embedding_post', to='posts.post')),
            ],
        ),
    ]
