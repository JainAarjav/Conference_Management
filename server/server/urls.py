from django.contrib import admin
from django.urls import path, include # 👈 Add include here

urlpatterns = [
    path('admin/', admin.site.urls),
    
    #api path urls
    path('api/', include('myapi.urls'))
]
