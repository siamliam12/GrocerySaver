from rest_framework import status
from rest_framework.views import APIView
from .serializers import RecipeSerializer
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from .models import Recipe


class Main(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self,request):
        recipes = Recipe.objects.all()
        content = RecipeSerializer(recipes,many=True)
        return Response(content.data)
    
    def post(self,request):
        serializer = RecipeSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(serializer.data)
    
    def put(self, request, pk):
        try:
            recipe = Recipe.objects.get(pk=pk)
        except Recipe.DoesNotExist:
            raise status.NotFound("Recipe not found.")

        if recipe.user != request.user:
            raise status.PermissionDenied("You do not have permission to edit this recipe.")

        serializer = RecipeSerializer(recipe, data=request.data, partial=False)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    def delete(self, request, pk):
        try:
            recipe = Recipe.objects.get(pk=pk)
        except Recipe.DoesNotExist:
            return Response({"detail": "Recipe not found."}, status=status.HTTP_404_NOT_FOUND)

        if recipe.user != request.user:
            return Response({"detail": "You do not have permission to delete this recipe."}, status=status.HTTP_403_FORBIDDEN)

        recipe.delete()
        return Response({"detail": "Recipe deleted successfully."}, status=status.HTTP_204_NO_CONTENT)