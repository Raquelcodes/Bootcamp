from django.contrib.auth import get_user_model
from django.db import models
from django.forms import forms

User = get_user_model()

# Create your models here.


class Restaurant(models.Model):
    name = models.CharField(
        verbose_name='restaurant name',
        max_length=200,
        blank=True

    )

    image = models.ImageField(
        blank=True,
        null=True
    )

    country = models.CharField(
        verbose_name='restaurant country',
        max_length=200,
        blank=True,
    )

    city = models.CharField(
        verbose_name='restaurant city',
        max_length=200,
        blank=True)

    address = models.CharField(
        verbose_name='restaurant address',
        max_length=200,
        blank=True)

    openingHours = models.CharField(
        verbose_name='restaurant opening hours',
        max_length=200,
        blank=True)

    priceLevel = models.CharField(
        verbose_name='restaurant price level',
        max_length=200,
        blank=True)

    user = models.ForeignKey(
            to=User,
            verbose_name='user',
            on_delete=models.CASCADE,
            related_name='restaurant'
    )

    created_time = models.DateTimeField(
        verbose_name='created time',
        auto_now_add=True
    )

    def __str__(self):
        return self.name


class Comment(models.Model):

    restaurant = models.ForeignKey(
        to=Restaurant,
        verbose_name='restaurant to comment on',
        on_delete=models.CASCADE,

    )
    user = models.ForeignKey(
        to=User,
        verbose_name='user',
        on_delete=models.CASCADE,
        related_name='comment'
    )

    content = models.CharField(
        verbose_name='my comment content',
        max_length=1000,
        blank=True,
        null=True,
        default='Your comment here...'
    )

    created = models.DateTimeField(
        verbose_name='created time',
        auto_now_add=True
    )

    def __str__(self):
        return self.content