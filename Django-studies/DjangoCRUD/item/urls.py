from django.conf.urls import url 
from item import views

urlpatterns = [
    url(r'api/item$', views.item_list),
    url(r'api/item/(P<pk>[0-9]+)$', views.item_detail)
]