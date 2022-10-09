# Generated by Django 4.1 on 2022-09-16 17:02

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0006_tokenverify_delete_tokenveify'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('postalcode', models.IntegerField(blank=True, null=True)),
                ('salary', models.IntegerField(blank=True, null=True)),
                ('position', models.CharField(default='null', max_length=100)),
                ('address', models.CharField(default='null', max_length=150)),
                ('phonenumber', models.BigIntegerField(default=0)),
                ('image', models.ImageField(blank=True, null=True, upload_to='photo')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
