from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('feed', views.feed, name='feed'),
    path('user_posts', views.user_posts, name='user_posts')

]

app_name = 'blog'