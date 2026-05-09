from django.views.generic import TemplateView
from django.core.mail import send_mail
from django.shortcuts import redirect


class HtmxTemplateView(TemplateView):

    partial_template_name = None
    full_template_name = "base.html"

    def get_template_names(self):

        if self.request.htmx and self.partial_template_name:
            return [self.partial_template_name]

        return [self.full_template_name]


class HomeView(HtmxTemplateView):
    partial_template_name = "partials/portfolio/pages/home/home.html"
    full_template_name = "partials/portfolio/pages/home/home_page.html"


class AboutView(HtmxTemplateView):
    partial_template_name = "partials/portfolio/pages/about/about.html"
    full_template_name = "partials/portfolio/pages/about/about_page.html"


class ContactView(HtmxTemplateView):
    partial_template_name = "partials/portfolio/pages/contact/contact.html"
    full_template_name = "partials/portfolio/pages/contact/contact_page.html"

    def post(self, request, *args, **kwargs):
        name = request.POST.get("name")
        email = request.POST.get("email")
        subject = request.POST.get("subject")
        message = request.POST.get("message")

        full_message = f"""
            New Contact Message

            Name: {name}
            Email: {email}

            Message:
            {message}
            """

        send_mail(
            subject=subject,
            message=full_message,
            from_email=email,
            recipient_list=["hassanmdmahedi729@gmail.com"],
            fail_silently=False,
        )

        if request.htmx:
            return self.render_to_response({
                "success": True
            })

        return redirect("portfolio_contact")