# Generated by Django 2.1.2 on 2018-10-18 08:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Disaster',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128, verbose_name='Name')),
                ('symptoms', models.TextField(verbose_name='Symptoms')),
                ('prevention', models.TextField(verbose_name='Prevention')),
            ],
        ),
    ]
