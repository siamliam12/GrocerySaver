from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("auth/", include('access.urls')),
    path("food/", include('food.urls')),
    # path("pantry/", include('PantryPro.urls')),
]
