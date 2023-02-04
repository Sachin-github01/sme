from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.generics import *
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import *
from .serializers import ProductSerializer
from .models import Product


# Create your views here.
class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductRetrieve(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'slug'


class ProductCreate(CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]


class ProductUpdate(UpdateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]


class ProductDestroy(DestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]


class ProductReadOnlyModelViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'slug'
    # authentication_classes = [SessionAuthentication]
    # permission_classes = [AllowAny]


class ProductModelViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'slug'
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]
