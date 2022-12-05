from django.shortcuts import render

# Create your views here.

from visitors_manage.models import VisitorModel
from visitors_manage.serializers import VisitorModelSerializer, VisitorModelCreateUpdateSerializer

from dvadmin.utils.viewset import CustomModelViewSet


class VisitorModelViewSet(CustomModelViewSet):

    """
    list:查询
    create:新增
    update:修改
    retrieve:单例
    destroy:删除
    """
    queryset = VisitorModel.objects.all()
    serializer_class = VisitorModelSerializer
    create_serializer_class = VisitorModelCreateUpdateSerializer
    update_serializer_class = VisitorModelCreateUpdateSerializer
    filter_fields = ['name','dep','is_leave']
    search_fields = ['name','dep','is_leave']
