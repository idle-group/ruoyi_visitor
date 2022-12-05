from django.db import models

# Create your models here.
from dvadmin.utils.models import CoreModel

class VisitorModel(CoreModel):
    name = models.CharField(max_length=255, verbose_name="访客姓名")
    dep = models.CharField(max_length=255,verbose_name="到访单位")
    start_time = models.DateTimeField(verbose_name="预约到访时间")
    end_time = models.DateTimeField(verbose_name="预约结束时间")
    is_leave = models.BooleanField(verbose_name="是否离开",default=False)
    class Meta:
        db_table = "visitors"
        verbose_name = "访客登记表"
        verbose_name_plural = verbose_name
        ordering = ("-create_datetime",)