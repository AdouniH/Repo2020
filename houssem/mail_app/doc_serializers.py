from rest_framework import serializers


class Doc_email_post(serializers.Serializer):
    mail_adress = serializers.EmailField(required=True, max_length=100, help_text="le mail")
