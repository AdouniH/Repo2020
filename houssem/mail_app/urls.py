
from django.urls import path, include
from mail_app.views import Mail

urlpatterns = [
    path('email/', Mail.as_view(), name="email_view")
]