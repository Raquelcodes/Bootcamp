from django.contrib.auth import get_user_model

from django.db import models

# Create your models here.
User = get_user_model()


class UserProfile(models.Model):
    user = models.OneToOneField(
        to=User,
        verbose_name='user',
        on_delete=models.CASCADE,
        related_name='user_profile'
    )
    hobby = models.CharField(
        verbose_name='hobby',
        max_length=200,
        blank=True
    )
    following = models.ManyToManyField(
        to=User,
        blank=True,
        related_name='followers'
    )

    def __str__(self):
        return self.user.username


class FriendRequests(models.Model):
    status= models.CharField(
        verbose_name='user',
        max_length=200,
        blank=True

    )

    requester = models.ForeignKey(
            to=User,
            verbose_name='requester',
            on_delete=models.CASCADE,
            related_name='friend_requester'
    )

    receiver = models.ForeignKey(
        to=User,
        verbose_name='receiver',
        on_delete=models.CASCADE,
        related_name='friend_request_received'
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
