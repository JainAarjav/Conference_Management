# Generated by Django 5.0.3 on 2024-04-03 13:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapi', '0003_conference_organization_user_delete_exam_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='RegisteredUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('conf_id', models.CharField()),
                ('email', models.CharField()),
                ('org_name', models.CharField()),
                ('org_id', models.CharField()),
            ],
        ),
    ]
