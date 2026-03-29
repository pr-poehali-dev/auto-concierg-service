import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

RECIPIENT = "max.krug@mail.ru"
SMTP_HOST = "smtp.mail.ru"
SMTP_PORT = 465
SMTP_USER = "max.krug@mail.ru"


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта на email max.krug@mail.ru"""
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, X-User-Id, X-Auth-Token, X-Session-Id",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "—")
    phone = body.get("phone", "—")
    address = body.get("address", "—")
    comment = body.get("comment", "—")
    service = body.get("service", "—")
    date = body.get("date", "—")

    html = f"""
    <h2 style="color:#141414">Новая заявка с сайта АвтоКонсьерж</h2>
    <table style="border-collapse:collapse;width:100%;max-width:500px">
      <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold">Услуга</td><td style="padding:8px 12px">{service}</td></tr>
      <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold">Имя</td><td style="padding:8px 12px">{name}</td></tr>
      <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold">Телефон</td><td style="padding:8px 12px">{phone}</td></tr>
      <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold">Адрес</td><td style="padding:8px 12px">{address}</td></tr>
      <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold">Дата/Время</td><td style="padding:8px 12px">{date}</td></tr>
      <tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:bold">Комментарий</td><td style="padding:8px 12px">{comment}</td></tr>
    </table>
    <p style="color:#999;font-size:12px;margin-top:20px">Автоматическое письмо с сайта avto-concierge.ru</p>
    """

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Новая заявка: {service} — {name}"
    msg["From"] = SMTP_USER
    msg["To"] = RECIPIENT
    msg.attach(MIMEText(html, "html", "utf-8"))

    smtp_password = os.environ.get("SMTP_PASSWORD", "")
    with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT) as server:
        server.login(SMTP_USER, smtp_password)
        server.sendmail(SMTP_USER, RECIPIENT, msg.as_string())

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"ok": True}),
    }
