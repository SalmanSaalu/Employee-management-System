# Generated by Django 4.1 on 2022-09-16 18:44

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0010_alter_userdetails_address_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Attendance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.CharField(blank=True, max_length=100, null=True)),
                ('submitteddate', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
    ]