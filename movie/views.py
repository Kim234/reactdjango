from django.shortcuts import render
from .serializers import *
from rest_framework import generics

class MovieDbCreate(generics.ListCreateAPIView):
    queryset=MovieDb.objects.all()
    serializer_class=MovieDbSerializer


def test_html(requests):
    return render(requests, 'public/index.html',{})