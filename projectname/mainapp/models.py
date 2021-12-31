from django.db import models
from django.db.models.deletion import CASCADE

class TypeTechnicians(models.Model):
    name = models.CharField(max_length=30, db_index=True, verbose_name='Тип техніки')

    def __str__(self):
        return  self.name

    class Meta:
        verbose_name = 'Тип техніки'
        verbose_name_plural = 'Тип техніки'
        ordering = ['name']

class NameTechnicians(models.Model):
    name = models.CharField(max_length=30,db_index=True,verbose_name='Назва техніки')

    def __str__(self):
        return  self.name

    class Meta:
        verbose_name = 'Назва техніки'
        verbose_name_plural = 'Назва техніки'
        ordering = ['name']

class Unit(models.Model):
    name = models.CharField(max_length=30,db_index=True,verbose_name='Одиниці виміру')

    def __str__(self):
        return  self.name

    class Meta:
        verbose_name = 'Одиниці виміру'
        verbose_name_plural = 'Одиниці виміру'
        ordering = ['name']

class Subdivisions(models.Model):
    subdivisions = models.CharField(max_length=30,verbose_name='Список підрозділів')

    def __str__(self):
        return  self.subdivisions

    class Meta:
        verbose_name = 'Підрозділ'
        verbose_name_plural = 'Підрозділ'
        ordering = ['subdivisions']

class NewTechnique(models.Model):
    serial_number = models.CharField(max_length=30, verbose_name='Серійний номер')
    type_techn = models.ForeignKey(TypeTechnicians, on_delete=models.CASCADE,verbose_name='Тип техніки')
    name_technicians = models.ForeignKey(NameTechnicians, on_delete=models.CASCADE,verbose_name='Назва техніки')
    unit = models.ForeignKey(Unit, on_delete=models.CASCADE,verbose_name='Одиниці виміру')
    price = models.FloatField(verbose_name='Ціна')



    def __str__(self):
        return self.serial_number

    class Meta:
        verbose_name = 'Техніка'
        verbose_name_plural = 'Техніка'
        ordering = ['type_techn']


class Categorys(models.Model):
    categorys = models.CharField(max_length=30,verbose_name='Список категорій')

    def __str__(self):
        return  self.categorys


    class Meta:
        verbose_name = 'Категорії'
        verbose_name_plural = 'Категорії'
        ordering = ['id']



class Document(models.Model):
    number_doc = models.CharField(max_length=30, verbose_name='Номер документа')
    name_doc = models.CharField(max_length=30, verbose_name='Назва документа')
    date_doc = models.DateField(verbose_name='Дата документа')

    def __str__(self):
        return self.number_doc

    class Meta:
        verbose_name = 'Документ'
        verbose_name_plural = 'Документи'
        ordering = ['date_doc']




class WhereIs(models.Model):
    id_technique = models.ForeignKey(NewTechnique, on_delete=models.CASCADE,verbose_name='Техніка')
    id_doc = models.ForeignKey(Document, on_delete=models.CASCADE, verbose_name='Документ')
    subdivision_which = models.ForeignKey(Subdivisions, on_delete=models.CASCADE,verbose_name='Підрозділ')
    сategory = models.ForeignKey(Categorys, on_delete=models.CASCADE, verbose_name="Категорія")
    amount = models.IntegerField(verbose_name='Кількість')
    expense = models.FloatField(verbose_name='Видаток')
    remainder = models.FloatField(verbose_name='Залишок')
    receipts = models.FloatField(verbose_name='Надходження')
    class Meta:
        verbose_name = 'Місце знаходження'
        verbose_name_plural = 'Місце знаходження'
        ordering = ['id_technique']

class Movement(models.Model):
    from_which = models.ForeignKey(WhereIs, on_delete=models.CASCADE,verbose_name='З якого підрозділу')
    subdivision_which = models.ForeignKey(Subdivisions, on_delete=models.CASCADE,verbose_name='В який')


    class Meta:
        verbose_name = 'Пересування'
        verbose_name_plural = 'Пересування'
        ordering = ['from_which']