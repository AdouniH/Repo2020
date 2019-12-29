from rest_framework import serializers
from django.contrib.auth.models import User
from app.models import Account, Email


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def create(self, validated_data):
        print('yy')
        user = User.objects.create_user(validated_data['username'])
        user.set_password(validated_data['password'])
        user.save()
        return user


class AccountSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    code = serializers.CharField(max_length=300)
    user = serializers.CharField(max_length=300)
    usrname = serializers.CharField(max_length=300)
    password = serializers.CharField(max_length=300)
    additional = serializers.CharField(max_length=300)


class AccountPostSerializer(serializers.Serializer):
    code = serializers.CharField(max_length=300)
    username = serializers.CharField(max_length=300)
    password = serializers.CharField(max_length=300)
    additional = serializers.CharField(max_length=300)

    def create(self, validated_data):
        """

        """
        user = User.objects.create(username=validated_data['username'])
        user.set_password(validated_data['password'])
        user.save()
        account = Account.objects.create(code=validated_data['code'],
                                         user=user,
                                         usrname=validated_data['username'],
                                         password=validated_data['password'],
                                         additional=validated_data['additional'])
        account.save()
        return account


class EmailSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=300)
    sender = serializers.CharField(max_length=300)

    def create(self, validated_data):
        """

        """
        email = Email.objects.create(email=validated_data['email'],
                                     sender=validated_data['sender'])
        email.save()
        return email
