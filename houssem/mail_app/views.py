from rest_framework.views import APIView
from rest_framework.response import Response
from mail_app.models import Email
from mail_app.serializers import EmailSerializer
from rest_framework import status
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from drf_yasg.utils import swagger_auto_schema
from mail_app.doc_serializers import Doc_email_post

class Mail(APIView):

    @swagger_auto_schema(responses={200: Doc_email_post(many=True)})
    def get(self, request, format=None):
        """
        Récuperer tous les mails de la base de données

        ---
        """

        # return Response({'t': request.user.username})
        mails = Email.objects.all()
        serializer = EmailSerializer(mails, many=True)
        return Response(serializer.data)

    @swagger_auto_schema(request_body=Doc_email_post, responses={200: EmailSerializer(many=False)})
    def post(self, request, format=None):
        """
        Enregistrer un nouveau mail

        - Permet d'enregistrer un nouveau mail
        - Si le mail existe deja dans la base de données alors le sauvegarde ne sera pas permis
        """

        data = request.data
        input_mail = data.get("mail_adress")
        results = Email.objects.filter(mail_adress=input_mail)

        if results:
            return Response({"error": "mail existe deja"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        else:
            serializer = EmailSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return self.get(request)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
