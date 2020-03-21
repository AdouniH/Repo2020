from django.urls import path
from app1.views import Mail


urlpatterns = [
    path('test/', Mail.as_view(), name="test"),
]
