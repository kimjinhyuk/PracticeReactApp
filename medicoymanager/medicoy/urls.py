from rest_framework import routers
from .api import MedicoyViewSet

routers = routers.DefaultRouter()
routers.register('api/medicoy', MedicoyViewSet, 'medicoy')

urlpatterns = routers.urls
