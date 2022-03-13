from django.db import models

# Create your models here.
class Question(models.Model):

    title = models.CharField(max_length=255, verbose_name='Question',)

    def __str__(self):
        return self.title


class Response(models.Model):

    class QuestionType(models.IntegerChoices):
        EXTROVERT = 1
        INTROVERT = 0

    title = models.CharField(max_length=255, verbose_name="Response text")
    question = models.ForeignKey(Question, on_delete=models.CASCADE, verbose_name="Question")
    response_type = models.IntegerField(choices=QuestionType.choices, verbose_name='Question type')

    def __str__(self):
        return self.title