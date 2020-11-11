from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def main(request):
    return HttpResponse("<h1 style='color: red;'>Hello</h1>")