from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('product-list-details', ProductReadOnlyModelViewSet, basename='productlistdetails')
router.register('product', ProductModelViewSet, basename='product')

urlpatterns = [
    path('', include(router.urls))
]
