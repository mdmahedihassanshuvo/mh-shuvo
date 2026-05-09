from django.urls import path
from . import views

urlpatterns = [
    path(
        '',
        views.HomeView.as_view(),
        name='portfolio_home'
    ),
    path(
        'about/',
        views.AboutView.as_view(),
        name='portfolio_about'
    ),
    path(
        'contact/',
        views.ContactView.as_view(),
        name='portfolio_contact'
    ),
]