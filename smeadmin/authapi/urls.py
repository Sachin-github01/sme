from django.urls import path, include
from .views import UserRegistrationViw, UserLoginView

urlpatterns = [
    path('registration/', UserRegistrationViw.as_view(), name="user-registration"),
    path('login/', UserLoginView.as_view(), name="login")
]
