from django.shortcuts import render
from home.models import *
import time
# Create your views here.

def index(request):
    return render(request,'index.html',context={})

def about(request):
    return render(request, 'about.html', context={})

def copyright(request):
    return render(request, 'copyright.html', context={})

def law(request):
    return render(request, 'law.html', context={})

def pricing(request):
    return render(request, 'pricing.html', context={})

def privacy(request):
    return render(request, 'privacy.html', context={})

def tos(request):
    return render(request, 'tos.html', context={})



def strategy(request):


    strategy=StrategyStrategy.objects.get(id='2')

    # strategy data-begin

    context={
        "strategy_name":strategy.name,
        "author":strategy.author,
        "simple_introduction":strategy.simple_intro,
        "target":strategy.target,
        "capital_per_unit":strategy.capital_per_unit,
        "strategy_online_time":strategy.strategt_online_time,
        "fee":strategy.fee,
    }

    # strategy data-end
    return render(request, 'strategy.html', context=context)