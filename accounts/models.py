from django.db import models
from django.contrib.auth.models import User
import datetime
from django.utils import timezone

class Activation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    code = models.CharField(max_length=20, unique=True)
    email = models.EmailField(blank=True)


class Teacher(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    type = models.CharField(default="T",max_length=2)
    is_active = models.BooleanField(default=False)
    temp_password = models.CharField(default="",max_length=5)
    question = models.CharField(default="",max_length=200)
    def __str__(self):
        return self.user.username

class Section(models.Model):
    semester = models.IntegerField(default=0)
    section = models.CharField(default="",max_length=20)
    branch = models.CharField(default="",max_length=20)
    academic_year = models.CharField(default="20XX-20YY",max_length=20)
    def __str__(self):
        return self.section

from django_mysql.models import ListTextField

class Student(models.Model):
    teacher = models.ForeignKey(Teacher,on_delete=models.CASCADE,null=True)
    question = models.CharField(default="",max_length=200)
    section = models.ForeignKey(Section,on_delete=models.CASCADE,null=True)
    essay = models.CharField(default="",max_length=6000)
    enrollment = models.CharField(default="0103CSYYRRRR",max_length=15)
    error_count = models.IntegerField(default=0)
    errors = ListTextField(
        base_field=models.CharField(max_length=100),
        size=100,
        max_length=(1000 * 1001)
    )
    corrected_essay = models.CharField(default="",max_length=6000)
    name = models.CharField(default="",max_length=50)
    marks = models.IntegerField(default=0)
    date = models.DateTimeField(default=timezone.now)
    def __str__(self):
        return self.name