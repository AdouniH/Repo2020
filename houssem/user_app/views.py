from rest_framework.views import APIView
from rest_framework.response import Response
from user_app.serializers import UserSerializer
from user_app.doc_serializers import Doc_user_post, Doc_user_post_response
from rest_framework import status
from drf_yasg.utils import swagger_auto_schema
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from rest_framework.authentication import BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated


class UserView(APIView):

    authentication_classes = [TokenAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(responses={200: UserSerializer(many=False)})
    def get(self, request, format=None):
        """
        Récuperer tous les utilisateurs de la base de données

        ---
        """
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    @swagger_auto_schema(request_body=Doc_user_post, responses={200: UserSerializer(many=False)})
    def post(self, request, format=None):
        """
        Créer un nouveau utilisateur

        - Login required
        """
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TokenView(APIView):
    # authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(request_body=Doc_user_post, responses={200: Doc_user_post_response(many=False)})
    def post(self, request, format=None):
        """
        Obtenir le token key

        Login required
        """

        data = request.data

        try:
            user = User.objects.get(username=data["username"])
            success = user.check_password(data["password"])
            if not success:
                return Response({'error': "pass dont match"}, status=status.HTTP_404_NOT_FOUND)
        except:
            user = None

        if user is not None:
            # A backend authenticated the credentials
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key})
        else:
            return Response({'error': "error"}, status=status.HTTP_404_NOT_FOUND)
