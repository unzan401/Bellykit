from django.urls import path,re_path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('index.html', views.index, name='index'),
    path('about.html', views.about, name='about'),
    path('copyright.html', views.copyright, name='copyright'),
    path('law.html', views.law, name='law'),
    path('pricing.html', views.pricing, name='pricing'),
    path('privacy.html', views.privacy, name='privacy'),
    path('tos.html', views.tos, name='tos'), 
    path('strategy.html', views.strategy, name='strategy')       
]