from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status


from myapi.models import User,Organization,Conference,RegisteredUser
from myapi.serializers import UserSerializer,OrgSerializer,ConferenceSerializer,RegisteredUserSerializer



@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        inp_data = JSONParser().parse(request)
        print(inp_data)
        user_serializer = UserSerializer(data=inp_data)
        if user_serializer.is_valid():
            print('valid')
            user_serializer.save()
            return JsonResponse(user_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        inp_data = JSONParser().parse(request)
        email = inp_data['email']
        password = inp_data['password']

        print(password)

        user = User.objects.get(email=email)
        if user.password == password:
            serializer = UserSerializer(user)
           
            return JsonResponse({'message':'LoggedIn','data':serializer.data})
        elif user.password != password:
            return JsonResponse({'message':'Incorrect Username/Password Combination'})
    

@api_view(['POST'])
def add_org(request):
    if request.method == 'POST':
        inp_data = JSONParser().parse(request)
        print(inp_data)
        org_serializer = OrgSerializer(data=inp_data)
        if org_serializer.is_valid():
            print('valid')
            org_serializer.save()
            return JsonResponse(org_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(org_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_org(request):
    if request.method == 'GET':
        org = Organization.objects.all()
        org_serializer = OrgSerializer(org, many=True)
        return JsonResponse(org_serializer.data, safe=False)
    

@api_view(['POST'])
def add_conf(request):
    if request.method == 'POST':
        inp_data = JSONParser().parse(request)
        print(inp_data)
        conf_serializer = ConferenceSerializer(data=inp_data)
        if conf_serializer.is_valid():
            print('valid')
            conf_serializer.save()
            return JsonResponse(conf_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(conf_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_conf(request,org_id):
    if request.method == 'GET':
        conf = Conference.objects.filter(org_id=org_id)
        conf_serializer = ConferenceSerializer(conf, many=True)
        return JsonResponse(conf_serializer.data, safe=False)
    

@api_view(['POST'])
def reg_conf(request):
    if request.method == 'POST':
        inp_data = JSONParser().parse(request)
        print(inp_data)
        regConf_serializer = RegisteredUserSerializer(data=inp_data)
        if regConf_serializer.is_valid():
            print('valid')
            regConf_serializer.save()
            return JsonResponse(regConf_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(regConf_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
def get_reg(request,email):
    if request.method == 'GET':
        print(email)
        conf = RegisteredUser.objects.filter(email=email)
        conf_serializer = RegisteredUserSerializer(conf, many=True)
        return JsonResponse(conf_serializer.data, safe=False)