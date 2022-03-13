from django.urls import path 
from .views import questions, get_update_delete_question

# define the urls
urlpatterns = [
    path('questions/', questions, name="questions"),
    path('questions/<int:pk>/', get_update_delete_question, name="question_detail"),
]