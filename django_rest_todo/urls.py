from django.conf.urls import include, url
from django.views.generic import RedirectView
from rest_framework.routers import DefaultRouter
from .api import views

router = DefaultRouter()
router.register(r'todos', views.TodoViewSet)

urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url('', RedirectView.as_view(url='/static/index.html')),
]
