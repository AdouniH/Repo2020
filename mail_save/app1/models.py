
from django.db import models


class Email(models.Model):
    mail_adress = models.EmailField(max_length=255)

    def __str__(self):
        return self.mail_adress
