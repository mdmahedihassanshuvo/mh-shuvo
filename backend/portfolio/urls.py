from django.urls import path
from . import views

# API endpoints only (React handles all page routing)
urlpatterns = [
    path('contact/', views.contact, name='api_contact'),
]