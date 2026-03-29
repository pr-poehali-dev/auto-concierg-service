import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/131e6353-e3ec-4f75-819f-49222c805821/files/ac9ce39a-4610-4f0f-ad85-8879c9ba8c4c.jpg";

const services = [
  { id: "transfer", label: "Перегон авто", icon: "Route" },
  { id: "wash", label: "Мойка / химчистка", icon: "Sparkles" },
  { id: "service", label: "Отвезти на СТО", icon: "Wrench" },
  { id: "pickup", label: "Забрать из сервиса", icon: "ArrowDownToLine" },
];

const steps = [
  { num: "01", title: "Оставьте заявку", desc: "Укажите услугу, адреса и удобное время. Звонок или форма — как вам удобнее." },
  { num: "02", title: "Назначаем водителя", desc: "Проверенный специалист с видеорегистратором принимает ваш автомобиль по акту." },
  { num: "03", title: "Выполняем задачу", desc: "Везём на мойку, сервис или перегоняем в нужную точку. Всё под страховкой." },
  { num: "04", title: "Отчёт и оплата", desc: "Получаете фотоотчёт с маршрутом. Оплата по тарифу картой или наличными." },
];

const tariffs = [
  {
    name: "Мойка / Сервис",
    price: "от 500 ₽",
    desc: "Отвезём и привезём обратно",
    features: ["Приём/передача по акту", "Видеофиксация", "Страховка", "Фотоотчёт"],
    accent: false,
  },
  {
    name: "Перегон по городу",
    price: "от 30 ₽/км",
    desc: "Минимальный заказ 500 ₽",
    features: ["Любые адреса в городе", "Видеофиксация", "Страховка", "GPS-трек маршрута"],
    accent: true,
  },
  {
    name: "Межгород",
    price: "Фиксированная цена",
    desc: "Рассчитываем индивидуально",
    features: ["Маршрут любой сложности", "Видеофиксация", "Страховка", "Сопровождающий при необходимости"],
    accent: false,
  },
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

const SEND_EMAIL_URL = "https://functions.poehali.dev/410daec2-64c7-4708-8a7a-d96509108767";

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState("transfer");
  const [bookingForm, setBookingForm] = useState({ name: "", phone: "", address: "", date: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const serviceLabel = services.find((s) => s.id === selectedService)?.label || selectedService;
    await fetch(SEND_EMAIL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...bookingForm, service: serviceLabel }),
    }).catch(() => {});
    setSending(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F6F5F3] text-[#141414]">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F6F5F3]/90 backdrop-blur-sm border-b border-[#E0DDD8]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tight">
              Авто<span className="text-[#F59E0B]">Консьерж</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#666]">
            <a href="#how" className="hover:text-[#141414] transition-colors">Как работает</a>
            <a href="#about" className="hover:text-[#141414] transition-colors">О компании</a>
            <a href="#tariffs" className="hover:text-[#141414] transition-colors">Тарифы</a>
            <a href="#faq" className="hover:text-[#141414] transition-colors">FAQ</a>
            <a href="#contacts" className="hover:text-[#141414] transition-colors">Контакты</a>
          </div>
          <a
            href="#booking"
            className="bg-[#141414] text-white text-sm px-5 py-2.5 hover:bg-[#333] transition-colors"
          >
            Заказать
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/85 via-[#141414]/50 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20">
          <div className="max-w-xl animate-slide-up">
            <div className="inline-flex items-center gap-2 text-[#F59E0B] text-xs uppercase tracking-[0.2em] mb-6">
              <span className="w-8 h-px bg-[#F59E0B]" />
              Персональный автосервис
            </div>
            <h1 className="font-display text-6xl md:text-7xl text-white leading-[1.05] mb-6">
              Ваш автомобиль<br />
              <em>в надёжных руках</em>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-md">
              Перегон, мойка, сервис — без вашего участия. Все поездки застрахованы и зафиксированы на видео.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] text-[#141414] font-semibold px-8 py-4 hover:bg-[#FBBF24] transition-colors"
              >
                Оставить заявку
                <Icon name="ArrowRight" size={18} />
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 hover:bg-white/10 transition-colors"
              >
                Как это работает
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-white/40" />
        </div>
      </section>

      {/* STATS BAR */}
      <div className="bg-[#141414] text-white">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "1 200+", label: "выполненных поездок" },
            { val: "100%", label: "застрахованы" },
            { val: "30 мин", label: "среднее время подачи" },
            { val: "4.9", label: "средняя оценка" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-semibold text-[#F59E0B] mb-1">{s.val}</div>
              <div className="text-sm text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-[#F59E0B] mb-3">Процесс</div>
            <h2 className="font-display text-5xl font-medium">Как это работает</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`p-8 border-[#E0DDD8] ${i < 3 ? "md:border-r" : ""} border-t md:border-t-0`}
              >
                <div className="text-5xl font-display font-light text-[#E0DDD8] mb-6">{step.num}</div>
                <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES HIGHLIGHT */}
      <section className="py-16 bg-[#EEECEA]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <div className="text-xs uppercase tracking-[0.2em] text-[#F59E0B] mb-2">Сценарии</div>
            <div className="flex items-end justify-between">
              <h2 className="font-display text-3xl font-medium">Что мы делаем</h2>
              <span className="text-sm text-[#999] hidden md:block">Нажмите на карточку, чтобы узнать подробнее</span>
            </div>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { icon: "Sparkles", title: "Мойка авто", desc: "Отвезём на мойку или химчистку и вернём к вам", slug: "wash" },
              { icon: "Wrench", title: "Отвезти на СТО", desc: "Доставим на сервис, дождёмся и пригоним обратно", slug: "sto" },
              { icon: "Route", title: "Перегон авто", desc: "Из точки А в точку Б с оплатой за км или фикс цена", slug: "transfer" },
              { icon: "RotateCw", title: "Шиномонтаж", desc: "Сезонная смена резины без очередей и вашего участия", slug: "tires" },
              { icon: "Wine", title: "Трезвый водитель", desc: "Приедем, сядем за руль вашего авто и довезём вас домой", slug: "sober-driver" },
            ].map((item) => (
              <Link
                key={item.title}
                to={`/service/${item.slug}`}
                className="bg-white p-7 hover:shadow-md transition-all group block"
              >
                <div className="w-11 h-11 bg-[#141414] flex items-center justify-center mb-5">
                  <Icon name={item.icon} size={20} className="text-[#F59E0B]" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed mb-4">{item.desc}</p>
                <div className="flex items-center gap-1.5 text-xs text-[#F59E0B] font-medium">
                  Как это работает
                  <Icon name="ArrowRight" size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#F59E0B] mb-3">О компании</div>
              <h2 className="font-display text-5xl font-medium mb-6 leading-tight">
                Мы экономим<br />ваше главное<br /><em>ресурс — время</em>
              </h2>
              <p className="text-[#666] leading-relaxed mb-6">
                АвтоКонсьерж — это сервис для занятых людей, которые ценят своё время. Мы берём на себя всю рутину, связанную с автомобилем: перегоны, поездки на мойку, визиты в сервисный центр.
              </p>
              <p className="text-[#666] leading-relaxed mb-8">
                Каждый наш водитель прошёл проверку, имеет видеорегистратор и работает строго по регламенту. Приём и сдача автомобиля — всегда по акту с фотофиксацией.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Проверенные водители с опытом от 5 лет",
                  "Страхование каждой поездки",
                  "Видеорегистратор на каждом маршруте",
                  "Работаем круглосуточно, без выходных",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-[#E0DDD8] overflow-hidden">
                <img
                  src={HERO_IMG}
                  alt="Авто консьерж"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#141414] text-white p-6 w-48">
                <div className="text-3xl font-semibold text-[#F59E0B]">3+</div>
                <div className="text-sm text-white/60 mt-1">года на рынке</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TARIFFS */}
      <section id="tariffs" className="py-24 bg-[#141414] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-[#F59E0B] mb-3">Стоимость</div>
            <h2 className="font-display text-5xl font-medium text-white">Тарифы</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-[#333]">
            {tariffs.map((t) => (
              <div
                key={t.name}
                className={`p-10 flex flex-col ${t.accent ? "bg-[#F59E0B] text-[#141414]" : "bg-[#141414]"}`}
              >
                <div className={`text-xs uppercase tracking-[0.15em] mb-6 ${t.accent ? "text-[#141414]/60" : "text-[#666]"}`}>
                  {t.name}
                </div>
                <div className={`text-4xl font-semibold mb-1 ${t.accent ? "text-[#141414]" : "text-white"}`}>
                  {t.price}
                </div>
                <div className={`text-sm mb-8 ${t.accent ? "text-[#141414]/60" : "text-[#666]"}`}>{t.desc}</div>
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className={`flex items-center gap-3 text-sm ${t.accent ? "text-[#141414]" : "text-white/70"}`}>
                      <Icon name="Check" size={15} className={t.accent ? "text-[#141414]" : "text-[#F59E0B]"} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#booking"
                  className={`text-center py-3 text-sm font-medium transition-colors ${
                    t.accent
                      ? "bg-[#141414] text-white hover:bg-[#333]"
                      : "border border-[#333] text-white hover:border-[#F59E0B] hover:text-[#F59E0B]"
                  }`}
                >
                  Заказать
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
}