from django.contrib import admin

from storeapi.models import StoreData


# Register your models here.
class StoreDataAdmin(admin.ModelAdmin):
    list_display = ['id', 'store_name', 'store_owner', 'store_type', 'logo', 'banner']
    list_display_links = ['id', 'store_name']
    search_fields = ['store_owner', 'store_name', 'store_type']
    list_filter = ['store_name', 'store_type']
    list_editable = ["store_type"]
    prepopulated_fields = {"slug": ("store_name",)}


admin.site.register(StoreData, StoreDataAdmin)
