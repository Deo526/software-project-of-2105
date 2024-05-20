from django.contrib.auth.base_user import check_password
from django.contrib.auth.models import make_password
from django.db import models

# Create your models here.


class CustomUser(models.Model):
    objects = models.Manager()
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=128)

    def save(self, *args, **kwargs):
        # 保存之前加密密码
        self.password = make_password(self.password)
        super().save(*args, **kwargs)

    def check_password(self, raw_password):
        return check_password(raw_password, self.password)
