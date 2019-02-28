from django.views.generic import TemplateView
from accounts.models import *
#from urllib import request


class IndexPageView(TemplateView):
    template_name = 'main/index.html'
    def get_context_data(self, *args, **kwargs):
        context = super(IndexPageView, self).get_context_data(*args, **kwargs)
        context['name'] = 'Gryffindor'

        try:
            account_list = EssayApproval.objects.filter(user=self.request.user)
            print(account_list)
            context['essay'] = EssayApproval.objects.filter(user=self.request.user)
        except:
            pass
        return context

class ChangeLanguageView(TemplateView):
    template_name = 'main/change_language.html'

class LandingPageView(TemplateView):
    template_name = 'main/landingpage.html'