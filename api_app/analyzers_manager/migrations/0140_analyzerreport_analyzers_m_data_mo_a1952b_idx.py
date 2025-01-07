# Generated by Django 4.2.16 on 2024-12-12 11:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("analyzers_manager", "0139_alter_analyzerconfig_mapping_data_model"),
    ]

    operations = [
        migrations.AddIndex(
            model_name="analyzerreport",
            index=models.Index(
                fields=["data_model_content_type", "data_model_object_id"],
                name="analyzers_m_data_mo_a1952b_idx",
            ),
        ),
    ]