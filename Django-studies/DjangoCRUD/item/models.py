from django.db import models

class Item(models.Model):
    # Fields
    title = models.TextField(max_length=50, null=True)
    content = models.TextField(max_length=500, null=True)
    date = models.DateTimeField(auto_created=True, null=True)

    # # Metadata
    # class Meta:
    #     ordering = [-id]
    
    # Methods
    

    def __str__(self):
        return self.title
