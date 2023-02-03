from django.contrib import admin
from .models import Product


# Register your models here.
class ProductAdmin(admin.ModelAdmin):
    list_display = ['id', 'store_name', 'product_name', 'image', 'product_price']
    list_display_links = ['id', 'product_name']
    list_editable = ['product_price']
    search_fields = ['store_name', 'product_name']
    prepopulated_fields = {"slug": ("product_name",)}


admin.site.register(Product, ProductAdmin)
