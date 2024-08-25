from django.contrib import admin
from .models import UserData,BlacklistedToken

admin.site.register(UserData)
admin.site.register(BlacklistedToken)