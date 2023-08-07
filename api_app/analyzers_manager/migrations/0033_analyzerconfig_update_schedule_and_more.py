# Generated by Django 4.1.10 on 2023-08-03 11:00

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("django_celery_beat", "0018_improve_crontab_helptext"),
        ("analyzers_manager", "0032_analyzer_config"),
    ]

    operations = [
        migrations.AddField(
            model_name="analyzerconfig",
            name="update_schedule",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="analyzers",
                to="django_celery_beat.crontabschedule",
            ),
        ),
        migrations.AddField(
            model_name="analyzerconfig",
            name="update_task",
            field=models.OneToOneField(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="analyzer",
                to="django_celery_beat.periodictask",
            ),
        ),
    ]
