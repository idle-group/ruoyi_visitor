from visitors_manage.models import VisitorModel
from dvadmin.utils.serializers import CustomModelSerializer

class VisitorModelSerializer(CustomModelSerializer):
    """
        序列化器
    """
    class Meta:
        model = VisitorModel
        fields = "__all__"

class VisitorModelCreateUpdateSerializer(CustomModelSerializer):
    """
    创建/更新时的列化器
    """
    class Meta:
        model = VisitorModel
        fields = "__all__"

