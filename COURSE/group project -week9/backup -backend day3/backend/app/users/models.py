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

    profilePicture = models.ImageField(
        blank=True,
        null=True
    )

    location = models.CharField(
        verbose_name='user location',
        max_length=200,
        blank=True)

    aboutMe = models.CharField(
        verbose_name='user description',
        max_length=1000,
        blank=True)

    joined = models.DateTimeField(
        verbose_name='joined ',
        auto_now_add=True
    )

    def __str__(self):
        return self.user.username