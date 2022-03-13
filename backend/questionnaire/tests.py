from django.test import RequestFactory, TestCase
from django.urls import reverse
from rest_framework import status

from .models import Question
from .views import questions, get_update_delete_question

class ListQuestionsTest(TestCase):
    
    def setUp(self):
        # Access to the request factory
        self.factory = RequestFactory()

    def test_list_questions(self):
        # Create an instance of a GET request.
        request = self.factory.get(reverse('questions'))

        response = questions(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        