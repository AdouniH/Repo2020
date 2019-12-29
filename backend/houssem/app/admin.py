from django.contrib import admin

# Register your models here.
from django.contrib import admin
from app.models import Account, Email

admin.site.register(Account)
admin.site.register(Email)
