from rest_framework.routers import SimpleRouter
from .views import VisitorModelViewSet

router = SimpleRouter()
router.register("api/visitors",VisitorModelViewSet)
urlpatterns= []
urlpatterns += router.urls