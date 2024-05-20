from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import CustomUser
from .serializers import UserSerializer

# Create your views here.


@api_view(["POST"])
def register(request):
    serializer = UserSerializer(data=request.data)

    username = request.data.get("username")
    email = request.data.get("email")
    if CustomUser.objects.filter(username=username).exists():
        return Response(
            {"message": "Username already exists"},
            status=status.HTTP_400_BAD_REQUEST,
        )

    if CustomUser.objects.filter(email=email).exists():
        return Response(
            {"message": "Email already exists"}, status=status.HTTP_400_BAD_REQUEST
        )

    if serializer.is_valid():
        username = request.data.get("username")
        email = request.data.get("email")
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def login(request):
    username = request.data.get("username")
    password = request.data.get("password")
    user = CustomUser.objects.filter(username=username).first()
    if user and user.check_password(password):
        return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
    return Response(
        {"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED
    )
