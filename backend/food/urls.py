from django.urls import path
from .views import Main


urlpatterns =[
    path('api/recipe',Main.as_view(),name='main'),
    path('api/recipe/<int:pk>',Main.as_view(),name='update & delete'),

]