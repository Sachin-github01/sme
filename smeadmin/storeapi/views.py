from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .models import StoreData
from .serializers import StoreDataSerializer


# Create your views here.
# // Only read with ReadOnlyModelViewSet , get list , and get details
class StoreDataReadOnlyModelViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = StoreData.objects.all()
    serializer_class = StoreDataSerializer
    lookup_field = 'slug'


# // with ModelViewSet can be get list, get details , update , create and delete
class StoreDataModelViewSet(viewsets.ModelViewSet):
    queryset = StoreData.objects.all()
    serializer_class = StoreDataSerializer
    lookup_field = 'slug'
