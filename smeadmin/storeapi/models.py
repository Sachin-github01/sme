from django.db import models
from django.db.models import RESTRICT
from django.utils.safestring import mark_safe
from django.template.defaultfilters import slugify
from django.urls import reverse
from authapi.models import User


# Create your models here.
class StoreData(models.Model):
    STORE_TYPE = (
        ("RETAILE", "RETAILE"),
        ("WHOLESALE", "WHOLESALE"),
        ("MANUFACTURE", "MANUFACTURE")
    )
    store_name = models.CharField(max_length=255, null=False, blank=False, default="")
    slug = models.SlugField(unique=True, default="")
    store_owner = models.ForeignKey(User, on_delete=RESTRICT)
    store_type = models.CharField(choices=STORE_TYPE, default="RETAILE", null=False, blank=False, max_length=255)
    store_logo = models.ImageField(default="", upload_to="images/logo", null=False, blank=False)
    store_banner = models.ImageField(default="", upload_to="images/banner", null=False, blank=False)

    def __str__(self):
        return str(self.store_name)

    def get_absolute_url(self):
        return reverse("store_data_detail", kwargs={"slug": self.slug})

    def save(self, *args, **kwargs):  # new
        if not self.slug:
            self.slug = slugify(self.store_name)
        return super().save(*args, **kwargs)

    def logo(self):
        if self.store_logo.url is not None:
            return mark_safe('<img src={} height="50"/>'.format(self.store_logo.url))
        else:
            return ""

    def banner(self):
        if self.store_banner.url is not None:
            return mark_safe('<img src={} height="50"/>'.format(self.store_banner.url))
        else:
            return ""
