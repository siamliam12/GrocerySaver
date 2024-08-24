from django.urls import path
from .views import RegisterView,BlacklistTokenView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

urlpatterns =[
    path('api/login/',TokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('api/logout/', BlacklistTokenView.as_view(), name='token_blacklist'),
    path('api/login/refresh',TokenObtainPairView.as_view(),name='token_refresh'),
    path('api/register/',RegisterView.as_view(),name="signup"),
]