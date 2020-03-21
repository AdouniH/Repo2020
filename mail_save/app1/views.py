from rest_framework.views import APIView
from rest_framework.response import Response
from app1.models import Email
from app1.serializers import EmailSerializer
from rest_framework import status

class Mail(APIView):
    """
    List all snippets, or create a new snippet.
    """
    def get(self, request, format=None):
        mails = Email.objects.all()
        serializer = EmailSerializer(mails, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
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
