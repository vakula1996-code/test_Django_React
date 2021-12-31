from django.contrib import admin
from .models import *

class Type_techniciansAdmin(admin.ModelAdmin):
    list_display = ('id','name')
    list_display_links = ('id','name')
    search_fields = ('id','name')

class NameTechniciansAdmin(admin.ModelAdmin):
    list_display = ('id','name')
    list_display_links = ('id','name')
    search_fields = ('id','name')

class UnitAdmin(admin.ModelAdmin):
    list_display = ('id','name')
    list_display_links = ('id','name')
    search_fields = ('id','name')

class New_techniqueAdmin(admin.ModelAdmin):
    list_display = ('id','serial_number','type_techn','name_technicians','unit','price')
    list_display_links = ('id','serial_number','type_techn','name_technicians','unit','price')
    search_fields = ('id','serial_number','type_techn','name_technicians','unit','price')

class CategorysAdmin(admin.ModelAdmin):
    list_display = ('id','categorys')
    list_display_links = ('id','categorys')
    search_fields = ('id','categorys')

class DocumentAdmin(admin.ModelAdmin):
    list_display = ('id','number_doc','name_doc','date_doc')
    list_display_links = ('id','number_doc','name_doc','date_doc')
    search_fields = ('id','number_doc','name_doc','date_doc')

class SubdivisionsAdmin(admin.ModelAdmin):
    list_display = ('id','subdivisions')
    list_display_links = ('id','subdivisions')
    search_fields = ('id','subdivisions')

class WhereIsAdmin(admin.ModelAdmin):
    list_display = ('id','id_technique','id_doc','subdivision_which','сategory','amount','expense','remainder','receipts')
    list_display_links = ('id','id_technique','id_doc','subdivision_which','сategory','amount','expense','remainder','receipts')
    search_fields = ('id','id_technique','id_doc','subdivision_which','сategory','amount','expense','remainder','receipts')


class MovementAdmin(admin.ModelAdmin):
    list_display = ('id','from_which','subdivision_which')
    list_display_links = ('id','from_which','subdivision_which')
    search_fields = ('id','from_which','subdivision_which')


admin.site.register(TypeTechnicians,Type_techniciansAdmin)

admin.site.register(NameTechnicians,NameTechniciansAdmin)

admin.site.register(Unit,UnitAdmin)

admin.site.register(Subdivisions,SubdivisionsAdmin)

admin.site.register(NewTechnique,New_techniqueAdmin)

admin.site.register(Categorys,CategorysAdmin)

admin.site.register(Document,DocumentAdmin)

admin.site.register(WhereIs,WhereIsAdmin)

admin.site.register(Movement,MovementAdmin)
