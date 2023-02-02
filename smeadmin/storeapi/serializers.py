from rest_framework import serializers
from .models import StoreData


class StoreDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = StoreData
        fields = '__all__'
        lookup_field = 'slug'

        extra_kwargs = {'url': {'lookup_field': 'slug'}}
