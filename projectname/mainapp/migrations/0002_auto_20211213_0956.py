# Generated by Django 3.2.9 on 2021-12-13 09:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='New_technique',
            new_name='NewTechnique',
        ),
        migrations.RenameModel(
            old_name='Type_technicians',
            new_name='TypeTechnicians',
        ),
    ]