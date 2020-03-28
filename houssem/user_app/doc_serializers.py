from rest_framework import serializers

class Doc_user_post(serializers.Serializer):
    username = serializers.CharField(required=True, max_length=100, help_text="Nom d'utilisateur")
    password = serializers.CharField(required=True, max_length=100, help_text="mot de passe")


class Doc_user_post_response(serializers.Serializer):
    token = serializers.CharField(required=True, max_length=100, help_text="token key \n hello world")
