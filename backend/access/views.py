from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.tokens import RefreshToken
# from .models import BlacklistedToken

#register user
class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    
# class BlacklistTokenView(APIView):
#     def post(self, request, *args, **kwargs):
#         try:
#             token = request.data.get('refresh')
#             if token:
#                 BlacklistedToken.objects.create(token=token)
#                 return Response({"detail": "Logout successful"}, status=status.HTTP_205_RESET_CONTENT)
#             return Response({"detail": "Token not provided"}, status=status.HTTP_400_BAD_REQUEST)
#         except Exception as e:
#             return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()

            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response({f'error:{e}'},status=status.HTTP_400_BAD_REQUEST)