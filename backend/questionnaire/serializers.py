from rest_framework import routers,serializers,viewsets
from .models import Question, Response

class ResponseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Response
        fields =['id', 'title', 'question','response_type',]

class QuestionSerializer(serializers.ModelSerializer):
    
    responses_set = ResponseSerializer(source="response_set", many=True)
    
    class Meta:
        model = Question
        depth = 1
        fields = ["id", "title", "responses_set"]
    