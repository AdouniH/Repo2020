
from django.urls import path
from app.views import UserView, AccountView, CodeView, EmailView


urlpatterns = [
    path('users/', UserView.as_view(), name='users_view'),
    path('accounts/', AccountView.as_view(), name='account_view'),
    path('code/', CodeView.as_view(), name='code_view'),
    path('email/', EmailView.as_view(), name='email_view')
]
