import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import type { ServiceData } from "./serviceData";

const SEND_EMAIL_URL = "https://functions.poehali.dev/410daec2-64c7-4708-8a7a-d96509108767";

function BookingForm({ accent, serviceName }: { accent: string; serviceName: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", address: "", comment: "" });

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div
          className="w-16 h-16 mx-auto flex items-center justify-center mb-4"
          style={{ background: `${accent}20` }}
        >
          <Icon name="CheckCircle" size={32} style={{ color: accent }} />
        </div>
        <div className="text-white text-xl font-semibold mb-2">Заявка принята!</div>
        <div className="text-white/50 text-sm">Свяжемся в течение 10 минут</div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await fetch(SEND_EMAIL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, service: serviceName }),
    }).catch(() => {});
    setSending(false);
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-sm text-white/40 mb-6">{serviceName}</div>
      <input
        type="text"
        placeholder="Ваше имя"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
        className="w-full bg-[#141414] border border-[#333] text-white placeholder-[#555] px-4 py-3 text-sm focus:outline-none focus:border-[#555]"
      />
      <input
        type="tel"
        placeholder="Телефон"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        required
        className="w-full bg-[#141414] border border-[#333] text-white placeholder-[#555] px-4 py-3 text-sm focus:outline-none focus:border-[#555]"
      />
      <input
        type="text"
        placeholder="Адрес подачи"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
        className="w-full bg-[#141414] border border-[#333] text-white placeholder-[#555] px-4 py-3 text-sm focus:outline-none focus:border-[#555]"
      />
      <textarea
        placeholder="Комментарий (опционально)"
        value={form.comment}
        onChange={(e) => setForm({ ...form, comment: e.target.value })}
        rows={3}
        className="w-full bg-[#141414] border border-[#333] text-white placeholder-[#555] px-4 py-3 text-sm focus:outline-none focus:border-[#555] resize-none"
      />
      <button
        type="submit"
        disabled={sending}
        className="w-full py-4 text-white font-semibold text-sm transition-opacity hover:opacity-90 disabled:opacity-60"
        style={{ background: accent }}
      >
        {sending ? "Отправляем..." : "Отправить заявку"}
      </button>
    </form>
  );
}

interface ServiceFaqCtaProps {
  service: ServiceData;
}

export default function ServiceFaqCta({ service }: ServiceFaqCtaProps) {
  return (
    <>
      {/* FAQ */}
      <section className="py-24 bg-[#F6F5F3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <div
                className="text-xs uppercase tracking-[0.2em] mb-3"
                style={{ color: service.accent }}
              >
                FAQ
              </div>
              <h2 className="font-display text-4xl font-medium leading-tight">
                Частые<br />вопросы
              </h2>
              <p className="text-[#666] mt-4 text-sm leading-relaxed">
                Остались вопросы? Позвоните нам — ответим за 2 минуты.
              </p>
              <a
                href="tel:+74951234567"
                className="inline-flex items-center gap-2 mt-6 text-sm font-medium transition-opacity hover:opacity-70"
                style={{ color: service.accent }}
              >
                <Icon name="Phone" size={15} />
                +7 (495) 123-45-67
              </a>
            </div>
            <div className="md:col-span-8 space-y-0">
              {service.faq.map((item, i) => (
                <div key={i} className="border-b border-[#E0DDD8] py-7 last:border-0">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
                      style={{ background: service.accentLight, color: service.accent }}
                    >
                      ?
                    </div>
                    <div>
                      <div className="font-semibold mb-2">{item.q}</div>
                      <div className="text-[#666] text-sm leading-relaxed">{item.a}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="booking" className="py-24 bg-[#141414] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className="text-xs uppercase tracking-[0.2em] mb-3"
                style={{ color: service.accent }}
              >
                Оформить заказ
              </div>
              <h2 className="font-display text-5xl font-medium mb-4">
                Готовы начать?
              </h2>
              <p className="text-white/50 text-lg leading-relaxed">
                Оставьте заявку — мы свяжемся в течение 10 минут и согласуем детали.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "Страховка на каждую поездку",
                  "Приём по акту с фотофиксацией",
                  "Круглосуточно, без выходных",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-3 text-sm text-white/60">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: service.accent }} />
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1C1C1C] p-8">
              <BookingForm accent={service.accent} serviceName={service.subtitle} />
            </div>
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="py-16 bg-[#EEECEA]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.2em] text-[#999] mb-8">Другие услуги</div>
          <div className="grid md:grid-cols-3 gap-4">
            {service.otherServices.map((s) => (
              <Link
                key={s.slug}
                to={`/service/${s.slug}`}
                className="bg-white p-6 flex items-center gap-4 hover:shadow-md transition-shadow group"
              >
                <div className="w-10 h-10 bg-[#141414] flex items-center justify-center flex-shrink-0">
                  <Icon name={s.icon} size={18} className="text-[#F59E0B]" />
                </div>
                <span className="font-medium">{s.label}</span>
                <Icon name="ArrowRight" size={16} className="text-[#CCC] ml-auto group-hover:text-[#141414] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#141414] text-white py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="text-lg font-semibold tracking-tight">
            Авто<span className="text-[#F59E0B]">Консьерж</span>
          </Link>
          <div className="text-sm text-white/40">Москва и область · Круглосуточно</div>
          <a href="tel:+74951234567" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
            <Icon name="Phone" size={14} />
            +7 (495) 123-45-67
          </a>
        </div>
      </footer>
    </>
  );
}
