from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.generics import *
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import *
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .models import StoreData
from .serializers import StoreDataSerializer


# Create your views here.
class StoreDataListView(ListAPIView):
    queryset = StoreData.objects.all()
    serializer_class = StoreDataSerializer


class StoreDataRetrieve(RetrieveAPIView):
    queryset = StoreData.objects.all()
    serializer_class = StoreDataSerializer
    lookup_field = 'slug'


class StoreDataCreate(CreateAPIView):
    queryset = StoreData.objects.all()
    serializer_class = StoreDataSerializer
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]


class StoreDataUpdate(UpdateAPIView):
    queryset = StoreData.objects.all()
    serializer_class = StoreDataSerializer
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]


class StoreDataDestroy(DestroyAPIView):
    queryset = StoreData.objects.all()
    serializer_class = StoreDataSerializer
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]


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
