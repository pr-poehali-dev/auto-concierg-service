import { useState } from "react";
import Icon from "@/components/ui/icon";

const SEND_EMAIL_URL = "https://functions.poehali.dev/410daec2-64c7-4708-8a7a-d96509108767";

const services = [
  { id: "transfer", label: "Перегон авто", icon: "Route" },
  { id: "wash", label: "Мойка / химчистка", icon: "Sparkles" },
  { id: "service", label: "Отвезти на СТО", icon: "Wrench" },
  { id: "pickup", label: "Забрать из сервиса", icon: "ArrowDownToLine" },
];

const faqs = [
  {
    q: "Что происходит, если с машиной что-то случится?",
    a: "Каждая поездка застрахована. При приёме автомобиля составляется акт с фотофиксацией. В случае любого инцидента — полное возмещение.",
  },
  {
    q: "Как фиксируется маршрут?",
    a: "Водитель оснащён видеорегистратором, ведётся GPS-запись маршрута. После выполнения задания вы получаете фотоотчёт.",
  },
  {
    q: "Можно ли заказать услугу в последний момент?",
    a: "Да, принимаем срочные заявки. Время ожидания водителя зависит от загруженности и вашего района.",
  },
  {
    q: "Какие автомобили вы обслуживаете?",
    a: "Легковые автомобили любых марок и классов — от городских до премиального сегмента.",
  },
  {
    q: "Как происходит оплата?",
    a: "Онлайн при бронировании или наличными водителю. Принимаем все карты и СБП.",
  },
];

interface HomeBookingProps {
  selectedService: string;
  setSelectedService: (id: string) => void;
  bookingForm: { name: string; phone: string; address: string; date: string };
  setBookingForm: (form: { name: string; phone: string; address: string; date: string }) => void;
  submitted: boolean;
  sending: boolean;
  handleBook: (e: React.FormEvent) => void;
}

export default function HomeBooking({
  selectedService,
  setSelectedService,
  bookingForm,
  setBookingForm,
  submitted,
  sending,
  handleBook,
}: HomeBookingProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* BOOKING */}
      <section id="booking" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#F59E0B] mb-3">Бронирование</div>
              <h2 className="font-display text-5xl font-medium mb-6">
                Оставить<br />заявку
              </h2>
              <p className="text-[#666] leading-relaxed mb-8">
                Заполните форму — менеджер свяжется с вами в течение 15 минут и уточнит детали. Оплата после подтверждения заказа.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: "Phone", text: "+7 (999) 000-00-00" },
                  { icon: "MessageCircle", text: "Telegram / WhatsApp" },
                  { icon: "Clock", text: "Круглосуточно, без выходных" },
                ].map((c) => (
                  <div key={c.text} className="flex items-center gap-3 text-sm text-[#666]">
                    <Icon name={c.icon} size={16} className="text-[#F59E0B]" />
                    {c.text}
                  </div>
                ))}
              </div>
            </div>
            <div>
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-white border border-[#E0DDD8]">
                  <div className="w-16 h-16 bg-[#F59E0B] flex items-center justify-center mx-auto mb-6">
                    <Icon name="Check" size={28} className="text-[#141414]" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Заявка принята!</h3>
                  <p className="text-[#666] text-sm">Менеджер свяжется с вами в течение 15 минут</p>
                </div>
              ) : (
                <form onSubmit={handleBook} className="bg-white p-8 border border-[#E0DDD8] flex flex-col gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-[0.1em] text-[#999] block mb-2">Услуга</label>
                    <div className="grid grid-cols-2 gap-2">
                      {services.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setSelectedService(s.id)}
                          className={`flex items-center gap-2 px-4 py-3 text-sm border transition-colors ${
                            selectedService === s.id
                              ? "border-[#141414] bg-[#141414] text-white"
                              : "border-[#E0DDD8] hover:border-[#141414] text-[#666]"
                          }`}
                        >
                          <Icon name={s.icon} size={15} />
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.1em] text-[#999] block mb-2">Имя</label>
                    <input
                      type="text"
                      required
                      placeholder="Как к вам обращаться?"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      className="w-full border border-[#E0DDD8] px-4 py-3 text-sm outline-none focus:border-[#141414] transition-colors bg-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.1em] text-[#999] block mb-2">Телефон</label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (___) ___-__-__"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      className="w-full border border-[#E0DDD8] px-4 py-3 text-sm outline-none focus:border-[#141414] transition-colors bg-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.1em] text-[#999] block mb-2">Адрес подачи</label>
                    <input
                      type="text"
                      placeholder="Откуда забрать автомобиль?"
                      value={bookingForm.address}
                      onChange={(e) => setBookingForm({ ...bookingForm, address: e.target.value })}
                      className="w-full border border-[#E0DDD8] px-4 py-3 text-sm outline-none focus:border-[#141414] transition-colors bg-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.1em] text-[#999] block mb-2">Дата и время</label>
                    <input
                      type="datetime-local"
                      value={bookingForm.date}
                      onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                      className="w-full border border-[#E0DDD8] px-4 py-3 text-sm outline-none focus:border-[#141414] transition-colors bg-transparent text-[#141414]"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="bg-[#141414] text-white py-4 font-medium text-sm hover:bg-[#333] transition-colors mt-2 flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {sending ? "Отправляем..." : "Отправить заявку"}
                    {!sending && <Icon name="ArrowRight" size={16} />}
                  </button>
                  <p className="text-xs text-[#999] text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-[#EEECEA]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-[#F59E0B] mb-3">Вопросы</div>
            <h2 className="font-display text-5xl font-medium">Часто спрашивают</h2>
          </div>
          <div className="max-w-3xl">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-[#D8D5D0]">
                <button
                  className="w-full flex items-center justify-between py-6 text-left gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium">{faq.q}</span>
                  <Icon
                    name={openFaq === i ? "Minus" : "Plus"}
                    size={18}
                    className="flex-shrink-0 text-[#F59E0B]"
                  />
                </button>
                {openFaq === i && (
                  <div className="pb-6 text-[#666] text-sm leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#F59E0B] mb-3">Контакты</div>
              <h2 className="font-display text-5xl font-medium mb-8">Свяжитесь<br />с нами</h2>
              <div className="flex flex-col gap-6">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (999) 000-00-00" },
                  { icon: "Mail", label: "Email", value: "info@avto-concierge.ru" },
                  { icon: "MapPin", label: "Город", value: "Москва и область" },
                  { icon: "Clock", label: "Режим работы", value: "Круглосуточно, без выходных" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#141414] flex items-center justify-center flex-shrink-0">
                      <Icon name={c.icon} size={16} className="text-[#F59E0B]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.1em] text-[#999] mb-0.5">{c.label}</div>
                      <div className="font-medium">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#141414] text-white p-10">
              <h3 className="font-display text-3xl mb-4">Готовы сэкономить ваше время?</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Оставьте заявку прямо сейчас — и уже сегодня мы возьмём на себя все хлопоты с вашим автомобилем.
              </p>
              <a
                href="#booking"
                className="inline-flex items-center gap-2 bg-[#F59E0B] text-[#141414] font-semibold px-8 py-4 hover:bg-[#FBBF24] transition-colors"
              >
                Заказать услугу
                <Icon name="ArrowRight" size={18} />
              </a>
              <div className="mt-8 pt-8 border-t border-[#333] flex gap-4">
                {["Telegram", "WhatsApp", "VK"].map((social) => (
                  <button
                    key={social}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#141414] text-white/40 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div>
            <span className="text-white font-medium">Авто<span className="text-[#F59E0B]">Консьерж</span></span>
            <span className="ml-4">© 2026</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Оферта</a>
          </div>
        </div>
      </footer>
    </>
  );
}
