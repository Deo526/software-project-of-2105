from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Q

from artifact.models import Artifact


@api_view(['POST'])
def searchArtifacts(request):
    try:
        prompt = request.data.get('prompt')
        number = request.data.get('number')
        obj_artifacts = Artifact.objects.filter(Q(name__icontains=prompt) | Q(description__icontains=prompt)
                                                | Q(type__icontains=prompt) | Q(time__icontains=prompt) |
                                                Q(creator__icontains=prompt) | Q(size__icontains=prompt)
                                                | Q(museum__icontains=prompt) | Q(material__icontains=prompt)
                                                | Q(level__icontains=prompt) | Q(placeOfOrigin__icontains=prompt)
                                                ).values()
        artifact_list = list(obj_artifacts)[:number]
        return Response(data=artifact_list, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def recommendArtifacts(request):
    try:
        art_id = request.data.get('id')
        number = request.data.get('number')
        print(art_id)
        artifact = Artifact.objects.filter(id=art_id)[0]
        obj_artifacts = Artifact.objects.filter(Q(material__icontains=artifact.material)
                                                | Q(time__icontains=artifact.time)).exclude(id=art_id).values()
        artifacts = list(obj_artifacts)[:number]
        return Response(data=artifacts, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
