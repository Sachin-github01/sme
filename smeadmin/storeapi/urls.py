from django.urls import path, include
from .views import *

# from rest_framework.routers import DefaultRouter

# router = DefaultRouter()

# router.register('storedatalist', StoreDataReadOnlyModelViewSet, basename='storedata')
# router.register('storedata', StoreDataModelViewSet, basename='storedata')

urlpatterns = [
    # path("", include(router.urls))
    path('storedata/', StoreDataListView.as_view()),
    path('storedata/<slug:slug>/', StoreDataRetrieve.as_view()),
    path('storedata-create/', StoreDataCreate.as_view()),
    path('storedata-update/<slug:slug>/', StoreDataUpdate.as_view()),
    path('storedata-delete/<slug:slug>/', StoreDataDestroy.as_view()),
]
