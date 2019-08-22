# Generated by Django 2.2.2 on 2019-06-19 10:33

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('users', '0003_auto_20190618_1113'),
    ]

    operations = [
        migrations.CreateModel(
            name='FriendRequests',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(blank=True, max_length=200, verbose_name='user')),
                ('created', models.DateField(auto_now_add=True, null=True, verbose_name='created')),
                ('created_time', models.DateTimeField(auto_now_add=True, null=True, verbose_name='created time')),
                ('receiver', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='friend_request', to=settings.AUTH_USER_MODEL, verbose_name='receiver')),
                ('requester', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='friend_requester', to=settings.AUTH_USER_MODEL, verbose_name='requester')),
            ],
        ),
    ]
