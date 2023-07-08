from django.db import models

class contact(models.Model):
    name = models.TextField(max_length=200, null=False)
    email = models.EmailField(max_length=200, null=False)
    message = models.TextField(max_length=2000, null=False)

    def __str__(self):
        return self.message