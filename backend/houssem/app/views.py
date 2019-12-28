from django.shortcuts import render

# Create your views here.

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from app.serializers import UserSerializer, AccountSerializer, AccountPostSerializer
from rest_framework.permissions import IsAuthenticated
from app.models import Account


class UserView(APIView):
    """
    All users
    http://localhost:8000/accounts/
    """
    permission_classes = []

    def get(self, request, format=None):

        snippets = User.objects.all()
        serializer = UserSerializer(snippets, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        """
        Add new user
        {
        "username": "houssem",
        "password": "test"
        }
        """
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            # serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AccountView(APIView):
    """
    All users
    http://localhost:8000/accounts/
    """
    permission_classes = []

    def get(self, request, format=None):
        accounts = Account.objects.all()
        serializer = AccountSerializer(accounts, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        """
        {
        "code":"test_code",
        "username":"test_username",
        "password":"test_pasword",
        "additional":"test_addistional"
        }
        """
        serializer = AccountPostSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            accounts = Account.objects.all()
            serializer = AccountSerializer(accounts, many=True)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
