from django.db import models


# Create your models here.

class Artifact(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    time = models.CharField(max_length=100)
    creator = models.CharField(max_length=100)
    level = models.CharField(max_length=100)
    placeOfOrigin = models.CharField(max_length=100)
    museum = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    size = models.CharField(max_length=100)
    material = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    collectionUrl = models.CharField(max_length=100)
    imageUrl = models.CharField(max_length=100)

    class Meta:
        db_table = 'artifacts2'
        managed = False

