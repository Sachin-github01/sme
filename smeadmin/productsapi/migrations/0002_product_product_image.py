# Generated by Django 4.1.5 on 2023-02-02 23:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productsapi', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='product_image',
            field=models.ImageField(default='', upload_to='images/products'),
        ),
    ]