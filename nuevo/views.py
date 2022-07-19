from django.http import HttpResponse
from django.shortcuts import render

def saludo(request):
    return render(request, 'React/saludo.html')

def despedida(request):
    return HttpResponse("que hace")



