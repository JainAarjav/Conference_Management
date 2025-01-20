#converts json input django understandble framwork and database to user readable format

from rest_framework import serializers
from .models import User,Organization,Conference,RegisteredUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email',
                  'password',
                  'name')
        
class OrgSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ('org_id',
                  'org_name',)
        
class ConferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conference
        fields = ('org_id',
                  'conf_id',
                   'startDate',
                   'endDate',
                   'venue',
                   'topic')
        
class RegisteredUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegisteredUser
        fields = ('conf_id',
                  'email',
                  'org_name',
                  'org_id')