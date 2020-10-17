from rest_framework import serializers
from medicoy.models import Medicoy

#Medicoy Serializer

class MedicoySerializer(serializers.ModelSerializer):
  class Meta:
    model = Medicoy
    fields = ('__all__')