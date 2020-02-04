from django.db import models

# Create your models here.
class StrategyBellymonthList(models.Model):
    date_entry = models.DateTimeField(primary_key=True)
    date_exit = models.DateTimeField()
    symbol = models.CharField(max_length=20)
    name = models.CharField(max_length=1)
    entry_open = models.FloatField()
    exit_open = models.FloatField(blank=True, null=True)
    change = models.FloatField(blank=True, null=True)
    category = models.CharField(max_length=7, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'strategy_bellymonth_list'
        unique_together = (('date_entry', 'date_exit', 'symbol'),)


class StrategyList(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=40)
    author = models.CharField(max_length=30)
    simple_intro = models.TextField(blank=True, null=True)
    target = models.CharField(max_length=20)
    capital_per_unit = models.IntegerField()
    strategy_online_time = models.DateTimeField(blank=True, null=True)
    fee = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'strategy_list'


class StrategyStrategy(models.Model):
    name = models.CharField(max_length=40)
    author = models.CharField(max_length=30)
    simple_intro = models.TextField(blank=True, null=True)
    target = models.CharField(max_length=20)
    capital_per_unit = models.IntegerField()
    strategt_online_time = models.DateTimeField()
    fee = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'strategy_strategy'
        unique_together = (('id', 'name'),)
