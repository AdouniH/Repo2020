
from django.urls import path, include
from user_app.views import UserView, TokenView


urlpatterns = [
    path('', UserView.as_view(), name=""),
    path('token/', TokenView.as_view(), name=""),
]
