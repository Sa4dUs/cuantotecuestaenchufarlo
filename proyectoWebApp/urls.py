from django.urls import include, path
from proyectoWebApp import views

urlpatterns = [
    path('', views.index, name="Home"),
    path('result/', views.resultado, name="Calculadora"),
]

