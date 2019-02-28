from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static
from django.conf.urls import url

from django.shortcuts import render_to_response
from django.template import RequestContext
def handler404(request, *args, **argv):
    response = render_to_response('accounts/error.html', {})
    response.status_code = 404
    return response
def handler500(request, *args, **argv):
    response = render_to_response('accounts/thankyou.html', {})
    response.status_code = 500
    return response

app_name = 'main'
from main.views import IndexPageView,ChangeLanguageView,LandingPageView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', IndexPageView.as_view(), name='index'),
    path('',LandingPageView.as_view(),name = 'landing_page'),
    path('i18n/', include('django.conf.urls.i18n')),
    path('language/', ChangeLanguageView.as_view(), name='change_language'),
    path('accounts/', include('accounts.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
