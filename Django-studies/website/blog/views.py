from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Post

def index(req):
    page = HttpResponse("<h1>INDEX</h1>")
    return page

def feed(req):
    posts = Post.published.all()
    list_template = 'blog/post/list.html'
    return render(req, list_template, {'posts': posts})

def post_detail(req, year, month, day, id):
    post = get_object_or_404(Post, slug=id, 
                                   status='published', 
                                   publish_year=year, 
                                   publish_month=month, 
                                   publish_day=day)
    detail_template = 'blog/post/detail.html'
    return render(req, detail_template, {'post': post})

def user_posts(req):
    page = HttpResponse("<h1>MY POSTS</h1>")
    return page