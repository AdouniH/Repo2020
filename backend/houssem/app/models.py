from django.db import models

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.db import models
from django.contrib.auth.models import User


class Account(models.Model):
    code = models.CharField(max_length=300)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    usrname = models.CharField(max_length=300)
    password = models.CharField(max_length=300)
    additional = models.CharField(max_length=300)

    def delete(self):
        users = User.objects.filter(username=self.usrname)
        if users:
            for user in users:
                user.delete()
        super(Account, self).delete()

    def __str__(self):
        return self.additional


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
