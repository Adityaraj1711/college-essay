from django.contrib import admin
from .models import Activation,Student,Teacher,Section
from django.db import models


admin.site.register(Activation)

class StudentAdmin(admin.ModelAdmin):
    list_display = ('enrollment','question','teacher','name','section','date')
admin.site.register(Student,StudentAdmin)
admin.site.register(Teacher)

class SectionAdmin(admin.ModelAdmin):
    list_display = ('section', 'semester', 'academic_year')
admin.site.register(Section,SectionAdmin)
