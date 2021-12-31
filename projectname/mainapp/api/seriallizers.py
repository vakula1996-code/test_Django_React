from django.db import models
from django.db.models import fields
from rest_framework import serializers

from ..models import *



class TypeTechniciansSerializer(serializers.ModelSerializer):
     
     class Meta:
         model = TypeTechnicians
         fields = '__all__'

class NameTechniciansSerializer(serializers.ModelSerializer):
     
     class Meta:
         model = NameTechnicians
         fields = '__all__'

class UnitSerializer(serializers.ModelSerializer):
     
     class Meta:
         model = Unit
         fields = '__all__'

class NewTechniqueSerializer(serializers.ModelSerializer):

    class Meta:
        model = NewTechnique
        fields = '__all__'


class NewTechniqueListRetrieveSerializer(serializers.ModelSerializer):

    type_techn = TypeTechniciansSerializer()
    name_technicians = NameTechniciansSerializer()
    unit = UnitSerializer()

    class Meta:
        model = NewTechnique
        fields = '__all__'




class CategorysSerializer(serializers.ModelSerializer):

    class Meta:
        model = Categorys
        fields = '__all__'


class DocumentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Document
        fields = '__all__'

class WhereIsSerializer(serializers.ModelSerializer):


        class Meta:
            model = WhereIs
            fields = '__all__'


class SubdivisionsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subdivisions
        fields = '__all__'

class WhereIsListRetrieveSerializer(serializers.ModelSerializer):

    id_doc = DocumentSerializer()
    subdivision_which = SubdivisionsSerializer()
    сategory = CategorysSerializer()

    class Meta:
        model = WhereIs
        fields = '__all__'