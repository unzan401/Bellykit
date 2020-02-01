from django.shortcuts import render

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

# strategy data-begin

context={

}

# strategy data-end

def strategy(request):
    return render(request, 'strategy.html', context=context)