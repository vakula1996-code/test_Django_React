from django.urls import path 

from rest_framework import routers
from .views import NewTechniqueViewSet,WhereIsViewSet

router = routers.SimpleRouter()
router.register('tech' , NewTechniqueViewSet , basename='tech')
router.register('detalis' , WhereIsViewSet , basename='detalis')


urlpatterns = []
urlpatterns += router.urls