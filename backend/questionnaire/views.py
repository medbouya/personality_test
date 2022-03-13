# render() index page
from django.shortcuts import render
# parsing data from the client
from rest_framework.parsers import JSONParser
# To bypass having a CSRF token
from django.views.decorators.csrf import csrf_exempt
# for sending response to the client
from django.http import HttpResponse, JsonResponse
# API definition for question
from .serializers import QuestionSerializer
# Question model
from .models import Question

# Create your views here.

def index(request):
    return render(request, "build/index.html")

@csrf_exempt
def questions(request):
    '''
    List all questions
    '''
    if(request.method == 'GET'):
        # get all the questions
        questions = Question.objects.all()
        # serialize the question data
        serializer = QuestionSerializer(questions, many=True)
        # return a Json response
        return JsonResponse(serializer.data,safe=False)
    elif(request.method == 'POST'):
        # parse the incoming information
        data = JSONParser().parse(request)
        # instanciate with the serializer
        serializer = QuestionSerializer(data=data)
        # check if the sent information is okay
        if(serializer.is_valid()):
            # if okay, save it on the database
            serializer.save()
            # provide a Json Response with the data that was saved
            return JsonResponse(serializer.data, status=201)
            # provide a Json Response with the necessary error information
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def get_update_delete_question(request, pk):
    try:
        # obtain the question with the passed id.
        question = Question.objects.get(pk=pk)
    except:
        # respond with a 404 error message
        return HttpResponse(status=404)  
    if(request.method == 'PUT'):
        # parse the incoming information
        data = JSONParser().parse(request)  
        # instanciate with the serializer
        serializer = QuestionSerializer(question, data=data)
        # check whether the sent information is okay
        if(serializer.is_valid()):  
            # if okay, save it on the database
            serializer.save() 
            # provide a JSON response with the data that was submitted
            return JsonResponse(serializer.data, status=201)
        # provide a JSON response with the necessary error information
        return JsonResponse(serializer.errors, status=400)
    elif(request.method == 'DELETE'):
        # delete the question
        question.delete() 
        # return a no content response.
        return HttpResponse(status=204) 
    elif(request.method == 'GET'):
        # return a specific question with its responses
        question_serializer = QuestionSerializer(question, many=False)
        
        return JsonResponse(question_serializer.data,safe=False)