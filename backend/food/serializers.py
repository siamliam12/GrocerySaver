# serializers.py
from rest_framework import serializers
from .models import Recipe

class RecipeSerializer(serializers.ModelSerializer):
    contributor = serializers.CharField(source='user', read_only=True)
    class Meta:
        model = Recipe
        fields = ['id','name','ingredients','recipe','reaction','contributor']
