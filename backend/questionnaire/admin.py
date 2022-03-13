from django.contrib import admin
from .models import Question, Response

# Register your models here.
class QuestionAdmin(admin.ModelAdmin):
    pass

class ResponseAdmin(admin.ModelAdmin):
    pass

admin.site.register(Question, QuestionAdmin)
admin.site.register(Response, ResponseAdmin)