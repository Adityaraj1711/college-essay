from django.urls import path

from .views import (
    LogInView, ResendActivationCodeView, RemindUsernameView, SignUpView, ActivateView, LogOutView,thankyou,sorry,
    ChangeEmailView, ChangeEmailActivateView, ChangeProfileView, ChangePasswordView,StudentReportView,StudentEssayView,index_page,
    RestorePasswordView, RestorePasswordDoneView, RestorePasswordConfirmView,ActiveSessionSubmitView,home,entername,index,ActiveSessionView,QuestionSubmitView
)
from django.conf.urls import url
app_name = 'accounts'

urlpatterns = [
    path('log-in/', LogInView.as_view(), name='log_in'),
    path('log-out/', LogOutView.as_view(), name='log_out'),
    url(r'^/$', index_page, name='indexpage'),
    path('resend/activation-code/', ResendActivationCodeView.as_view(), name='resend_activation_code'),
    url(r'^enter-details/$', entername, name='entername'),
    url(r'^home/$', home, name='home'),
    url(r'index',index,name='index'),
    url(r'thankyou',thankyou,name='thankyou'),
    url(r'sorry', sorry, name='sorry'),
    path('student-report/',StudentReportView.as_view(),name = "student_report"),
    path('student-report/(?P<pk>[0-9]+)/$',StudentEssayView.as_view(),name="student_essay"),
    path('sign-up/', SignUpView.as_view(), name='sign_up'),
    path('activate/<code>/', ActivateView.as_view(), name='activate'),

    path('restore/password/', RestorePasswordView.as_view(), name='restore_password'),
    path('restore/password/done/', RestorePasswordDoneView.as_view(), name='restore_password_done'),
    path('restore/<uidb64>/<token>/', RestorePasswordConfirmView.as_view(), name='restore_password_confirm'),

    path('remind/username/', RemindUsernameView.as_view(), name='remind_username'),
    path('active-session/', ActiveSessionView.as_view(), name='active_session'),
    path('active-session-done/', ActiveSessionSubmitView.as_view(), name='activesessionsubmit'),
    path('question-submit/', QuestionSubmitView.as_view(), name='questionsubmit'),
    path('change/profile/', ChangeProfileView.as_view(), name='change_profile'),
    path('change/password/', ChangePasswordView.as_view(), name='change_password'),
    path('change/email/', ChangeEmailView.as_view(), name='change_email'),
    path('change/email/<code>/', ChangeEmailActivateView.as_view(), name='change_email_activation'),
]
