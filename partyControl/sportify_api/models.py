from django.db import models

# Create your models here.

class Room(models.Model):
    code = models.CharField(max_lenght=8, default="", unique=True)