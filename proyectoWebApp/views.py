from sqlite3.dbapi2 import Cursor
from django.db import connection
from django.http import response
from django.utils import timezone
from requests.api import get
from django.shortcuts import render, HttpResponse
from .services import get_price
import sqlite3

# Create your views here.

def index(request):
    precio_API = round(get_price(),4)
    return render(request, "proyectoWebApp/index.html", {"precio_API": precio_API})

def resultado(request):
    precio_API = round(get_price(),4)
    try:
        mensaje = str(round(float(precio_API)*float(request.GET["consumo"])*0.001*float(request.GET["tiempo"]), 2))
        return render(request, "proyectoWebApp/resultado.html", {"precio_estimado": mensaje, "precio_API":precio_API})

    except:
        return render(request, "proyectoWebApp/resultado.html", {"precio_estimado": None, "precio_API":precio_API})

def contacto(request):

    return render(request, "proyectoWebApp/contacto.html")
