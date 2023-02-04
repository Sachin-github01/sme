from django.urls import path, include
from .views import *

# from rest_framework.routers import DefaultRouter
#
# router = DefaultRouter()
#
# router.register('product-list-details', ProductReadOnlyModelViewSet, basename='productlistdetails')
# router.register('product', ProductModelViewSet, basename='product')

urlpatterns = [
    # path('', include(router.urls))
    path('products/', ProductListView.as_view()),
    path('product/<slug:slug>/', ProductRetrieve.as_view()),
    path('product-create/', ProductCreate.as_view()),
    path('product-update/<slug:slug>/', ProductUpdate.as_view()),
    path('product-delete/<slug:slug>/', ProductDestroy.as_view()),
]
