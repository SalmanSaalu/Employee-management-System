# Generated by Django 4.1 on 2022-09-17 08:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0011_attendance'),
    ]

    operations = [
        migrations.AddField(
            model_name='attendance',
            name='user',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
