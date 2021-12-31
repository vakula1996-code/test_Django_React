from rest_framework import viewsets

from .seriallizers import NewTechniqueSerializer ,NewTechniqueListRetrieveSerializer , WhereIsSerializer,WhereIsListRetrieveSerializer
from ..models import NewTechnique , WhereIs

class NewTechniqueViewSet(viewsets.ModelViewSet):

    queryset = NewTechnique.objects.all()
    serializer_class = NewTechniqueSerializer 

    action_to_serializer = {
        "list": NewTechniqueListRetrieveSerializer,
        "retrieve": NewTechniqueListRetrieveSerializer 
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )

class WhereIsViewSet(viewsets.ModelViewSet):

    queryset = WhereIs.objects.all()
    serializer_class = WhereIsSerializer 

    action_to_serializer = {
        "list": WhereIsListRetrieveSerializer,
        "retrieve": WhereIsListRetrieveSerializer 
    }


    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
    )