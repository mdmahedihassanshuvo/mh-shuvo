from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('manage/', admin.site.urls),
    path('api/', include('portfolio.urls')),
]
