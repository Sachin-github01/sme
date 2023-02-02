from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('storedatalist', StoreDataReadOnlyModelViewSet, basename='storedata')
router.register('storedata', StoreDataModelViewSet, basename='storedata')

urlpatterns = [
    path("", include(router.urls))
]
