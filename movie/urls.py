from django.urls import path
from . import views

urlpatterns = [
#    path('movie/start_app',views.test_html), 
    path('api/lead/',views.MovieDbCreate.as_view()),
]