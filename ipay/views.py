from django.shortcuts import render
from datetime import datetime

# Create your views here.
def dashboard(request):
    context={
        'title':'dashboard'
    }
    context['today']=datetime.now().strftime("%d/%m/%Y %H:%M")
    return render(request,'ipay/index.html',context)
