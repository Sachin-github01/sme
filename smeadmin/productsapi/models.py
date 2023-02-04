from django.db import models
from django.urls import reverse
from django.utils.safestring import mark_safe
from django.template.defaultfilters import slugify
from storeapi.models import StoreData


# Create your models here.
class Product(models.Model):
    store_name = models.ForeignKey(StoreData, on_delete=models.RESTRICT)
    product_name = models.CharField(max_length=250, null=False, blank=False, default="")
    slug = models.SlugField(unique=True, null=False, blank=False, default="")
    product_image = models.ImageField(default="", upload_to="images/products", null=False, blank=False)
    product_price = models.DecimalField(default="0.00", max_digits=5, decimal_places=2, null=False, blank=False)

    def __str__(self):
        return str(self.product_name)

    def get_absolute_url(self):
        return reverse("product_detail", kwargs={"slug": self.slug})

    def save(self, *args, **kwargs):  # new
        if not self.slug:
            self.slug = slugify(self.product_name)
        return super().save(*args, **kwargs)

    def image(self):
        if self.product_image.url is not None:
            return mark_safe('<img src="{}" height="50"/>'.format(self.product_image.url))
        else:
            return ""
