from django.urls import path
from . import views

urlpatterns = [
    # path('movie/pp',views.test_html),
    path('movie/map_main',views.MovieDbCreate.as_view()),
]