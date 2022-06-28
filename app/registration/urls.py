from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from registration.views import RegisterView

urlpatterns = [

    path('registration/', RegisterView.as_view()),
    # path('registration/validation/',),
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', jwt_views.TokenVerifyView.as_view(), name='token_refresh'),
    # path('password-reset/',),
    # path('password-reset/validation/',)
]
