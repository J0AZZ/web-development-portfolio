from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from item.models import Item
from item.serializers import ItemSerializer
from rest_framework.decorators import api_view

@api_view(['GET', 'POST'])
def item_list(req):
    # GET all items
    if(req.method == 'GET'):
        items = Item.objects.all()
        items_serializer = ItemSerializer(items)
        return JsonResponse(items_serializer.data, safe=False)
    
    # POST an item
    elif(req.method == 'POST'):
        item_data = JSONParser.parse(req)
        item_serializer = ItemSerializer(data=item_data)
        if(item_serializer.is_valid()):
            item_serializer.save()
            return JsonResponse(item_serializer.errors, status=status.HTTP_201_CREATED)
        return JsonResponse(tutorial_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def item_detail(req, pk):
    try:
        item = Item.objects.get(pk=pk)
    except Item.DoesNotExist:
        return JsonResponse({'message': 'Item not found.'}, status=status.HTTP_404_NOT_FOUND)
    
    # GET an item by id (pk)
    if(req.method == 'GET'):
        item_serializer = ItemSerializer(item)
        return JsonResponse(item_serializer.data)

    # UPDATE an item
    if(req.method == 'PUT'):
        item_data = JSONParser().parse(req)
        item_serializer = ItemSerializer(item, data=item_data)
        if(item_serializer.is_valid()):
            item_serializer.save()
            return JsonResponse(item_serializer.errors)

    # DELETE an item
    if(req.method == 'DELETE'):
        item.delete()
        return JsonResponse({'message': 'Item deleted successfully.'}, status=status.HTTP_204_NO_CONTENT)