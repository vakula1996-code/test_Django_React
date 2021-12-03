from django.urls import path 
from django.urls.resolvers import URLPattern

from .views import TestApiView

urlpatterns = [
    path('test-api/', TestApiView.as_view(), name='test')
]