from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('add_org/',views.add_org,name='add_org'),     #add a new orgzn
    path('get_org/',views.get_org,name='get_org'),     #get all organizations
    path('add_conf/',views.add_conf,name='add_conf'),  #add a new conference
    path('get_conf/<str:org_id>/',views.get_conf,name='get_conf'),    #get conferences of an organization
    path('reg_conf/',views.reg_conf,name='reg_conf'),   #add user to conference
    path('get_reg/<str:email>/',views.get_reg,name='get_reg') #get registered conferences of user 
    
]