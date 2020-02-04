from django.db import models

# Create your models here.
class TestModel(models.Model):
    describe = models.CharField(max_length=30)

    def __str__(self):
        return self.describe
