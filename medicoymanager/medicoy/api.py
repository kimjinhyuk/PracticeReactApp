from medicoy.models import Medicoy
from rest_framework import viewsets, permissions
from .serializers import MedicoySerializer

# medicoy Viewset

class MedicoyViewSet(viewsets.ModelViewSet):
  queryset = Medicoy.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]

  serializer_class = MedicoySerializer