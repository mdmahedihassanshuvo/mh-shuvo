from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
import json


@csrf_exempt
@require_http_methods(["POST"])
def contact(request):
    """
    API endpoint for contact form submission (React).
    Accepts JSON POST requests and sends email via Django.
    """
    try:
        data = json.loads(request.body)
        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        subject = data.get('subject', '').strip()
        message = data.get('message', '').strip()

        if not all([name, email, subject, message]):
            return JsonResponse(
                {'success': False, 'message': 'All fields are required'},
                status=400
            )

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

        return JsonResponse({'success': True, 'message': 'Message sent successfully'})

    except json.JSONDecodeError:
        return JsonResponse(
            {'success': False, 'message': 'Invalid JSON'},
            status=400
        )
    except Exception as e:
        return JsonResponse(
            {'success': False, 'message': str(e)},
            status=500
        )