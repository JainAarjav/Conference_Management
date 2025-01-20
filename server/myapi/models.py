from django.db import models
import uuid

class User(models.Model):
    email = models.CharField(unique=True)
    password = models.CharField(max_length=20)
    name = models.CharField(max_length=80)

class Organization(models.Model):
    org_id = models.UUIDField(default=uuid.uuid4)
    org_name = models.CharField()


class Conference(models.Model):
    org_id = models.CharField()
    conf_id = models.UUIDField(default=uuid.uuid4)
    startDate = models.DateField()
    endDate = models.DateField()
    venue = models.CharField()
    topic = models.CharField()

    
class RegisteredUser(models.Model):
    conf_id = models.CharField()
    email = models.CharField()
    org_name = models.CharField()
    org_id = models.CharField()