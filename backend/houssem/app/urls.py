
from django.urls import path
from app.views import UserView, AccountView


urlpatterns = [
    path('users/', UserView.as_view(), name='users_view'),
    path('accounts/', AccountView.as_view(), name='account_view')
]
