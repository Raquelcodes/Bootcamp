from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()

# Create your models here.


class Post(models.Model):
    title = models.CharField(
        verbose_name='my post title',
        max_length=200,
        blank=True,
        null=True,
        default='Default post title',
    )

    content = models.CharField(
        verbose_name='my post content',
        max_length=200,
        blank=True,
        null=True,
        default='Default post content',

    )
    user = models.ForeignKey(
            to=User,
            verbose_name='user',
            on_delete=models.CASCADE,
            related_name='posts'
    )

    created = models.DateField(
        verbose_name='created',
        auto_now_add=True,
        null=True,
        blank=True
    )

    created_time = models.DateTimeField(
        verbose_name='created time',
        auto_now_add=True,
        null=True,
        blank=True
    )

    def __str__(self):
        return self.content


class Likes(models.Model):
    post = models.ForeignKey(
        to=Post,
        verbose_name='post likes',
        on_delete=models.CASCADE

    )
    user = models.ForeignKey(
        to=User,
        verbose_name='user',
        on_delete=models.CASCADE,
        related_name='likes'
    )

    created = models.DateField(
        verbose_name='created',
        auto_now_add=True,
        null=True,
        blank=True
    )

    created_time = models.DateTimeField(
        verbose_name='created time',
        auto_now_add=True,
        null=True,
        blank=True
    )
