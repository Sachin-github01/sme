from django.urls import path, include
from .views import UserRegistrationViw, UserLoginView, UserProfileView, UserChangePasswordView, \
    SendPasswordResetEmailView, UserPasswordResetView

urlpatterns = [
    path('registration/', UserRegistrationViw.as_view(), name="registration"),
    path('login/', UserLoginView.as_view(), name="login"),
    path('profile/', UserProfileView.as_view(), name="profile"),
    path('changepassword/', UserChangePasswordView.as_view(), name="changepassword"),
    path('send-reset-password-email/', SendPasswordResetEmailView.as_view(), name="send-reset-password-email"),
    path('reset-password/<uid>/<token>/', UserPasswordResetView.as_view(), name='reset-password'),
]
