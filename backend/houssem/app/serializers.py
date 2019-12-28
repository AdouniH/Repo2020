from rest_framework import serializers
from django.contrib.auth.models import User
from app.models import Account


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
    code = serializers.CharField(max_length=300)
    user = serializers.CharField(max_length=300)
    additional = serializers.CharField(max_length=300)


class AccountPostSerializer(serializers.Serializer):
    code = serializers.CharField(max_length=300)
    username = serializers.CharField(max_length=300)
    password = serializers.CharField(max_length=300)
    additional = serializers.CharField(max_length=300)

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        user = User.objects.create(username=validated_data['username'])
        user.set_password(validated_data['password'])
        user.save()
        account = Account.objects.create(code=validated_data['code'],
                                         user=user,
                                         additional=validated_data['additional'])
        account.save()
        return account
