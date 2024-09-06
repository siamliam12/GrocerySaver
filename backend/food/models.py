from django.db import models
from django.conf import settings

# Create your models here.
class Recipe(models.Model):
    name = models.CharField(max_length=255)
    ingredients = models.TextField()
    recipe = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True,blank=True, null=True)
    reaction = models.IntegerField(default=0)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE) 

    def __str__(self):
        return self.name
