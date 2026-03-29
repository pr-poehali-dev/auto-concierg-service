import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const SERVICES = {
  wash: {
    slug: "wash",
    title: "Помоем автомобиль за вас",
    subtitle: "Мойка и химчистка без вашего участия",
    accent: "#3B82F6",
    accentLight: "#EFF6FF",
    icon: "Sparkles",
    heroLine1: "Чистый автомобиль",
    heroLine2: "без вашего участия",
    tagline: "Мы забираем, везём на мойку и возвращаем. Вы даже не выходите из дома.",
    price: "от 500 ₽",
    priceNote: "включая доставку туда и обратно",
    steps: [
      {
        num: "01",
        icon: "Phone",
        title: "Оставьте заявку",
        desc: "Укажите адрес, тип мойки (обычная или химчистка) и удобное время. Мы свяжемся для подтверждения в течение 10 минут.",
        detail: "Работаем ежедневно с 07:00 до 23:00",
      },
      {
        num: "02",
        icon: "Car",
        title: "Водитель приезжает к вам",
        desc: "Проверенный водитель прибывает в назначенное время. Вместе осматриваете автомобиль и подписываете акт приёма с фотофиксацией.",
        detail: "Среднее время ожидания — 30–40 минут",
      },
      {
        num: "03",
        icon: "Sparkles",
        title: "Мойка на партнёрской станции",
        desc: "Автомобиль доставляется на проверенную мойку. Водитель лично контролирует процесс и не оставляет машину без присмотра.",
        detail: "Только проверенные мойки-партнёры",
      },
      {
        num: "04",
        icon: "MapPin",
        title: "Возврат и фотоотчёт",
        desc: "Чистый автомобиль возвращается к вам. Вы получаете фотоотчёт: до и после, пробег, время поездки. Оплата при возврате.",
        detail: "Карта, наличные или СБП",
      },
    ],
    includes: [
      { icon: "Shield", text: "Страховка на весь маршрут" },
      { icon: "FileText", text: "Акт приёма-передачи" },
      { icon: "Video", text: "Видеорегистратор в машине" },
      { icon: "Camera", text: "Фотоотчёт до и после" },
      { icon: "MapPin", text: "GPS-запись маршрута" },
      { icon: "Clock", text: "Работаем 07:00–23:00" },
    ],
    faq: [
      {
        q: "Какие виды мойки доступны?",
        a: "Ручная мойка, автоматическая, химчистка салона, полная детейлинг-обработка. Уточняем детали при бронировании.",
      },
      {
        q: "Могу ли я выбрать конкретную мойку?",
        a: "Да, можете указать предпочтительную мойку. Если нет предпочтений — отвезём на ближайшую проверенную партнёрскую.",
      },
      {
        q: "Что если мойка занята?",
        a: "Водитель отвезёт на следующую из партнёрских. Вы заранее оговариваете допустимые варианты.",
      },
    ],
    otherServices: [
      { slug: "sto", label: "Отвезём на СТО", icon: "Wrench" },
      { slug: "transfer", label: "Перегон авто", icon: "Route" },
      { slug: "tires", label: "Сезонный шиномонтаж", icon: "RotateCw" },
    ],
  },
  sto: {
    slug: "sto",
    title: "Отвезём и заберём из СТО",
    subtitle: "Сервисный визит без потери вашего времени",
    accent: "#10B981",
    accentLight: "#ECFDF5",
    icon: "Wrench",
    heroLine1: "Сервис без",
    heroLine2: "потери времени",
    tagline: "Забираем машину, везём в сервисный центр, ждём и пригоняем обратно.",
    price: "от 600 ₽",
    priceNote: "туда и обратно, ожидание включено",
    steps: [
      {
        num: "01",
        icon: "Phone",
        title: "Оставьте заявку",
        desc: "Укажите адрес СТО и ваш адрес. Если не знаете, куда ехать — поможем выбрать проверенный сервис по вашей марке автомобиля.",
        detail: "Помогаем выбрать СТО при необходимости",
      },
      {
        num: "02",
        icon: "ClipboardList",
        title: "Приём по акту",
        desc: "Водитель приезжает к вам, осматривает автомобиль, фиксирует состояние и составляет акт приёма-передачи. Подписываете вместе.",
        detail: "Фотофиксация всех повреждений",
      },
      {
        num: "03",
        icon: "Wrench",
        title: "Ожидание в сервисе",
        desc: "Водитель лично сдаёт машину мастеру, контролирует очередь и при необходимости вас уведомит об изменениях. Машина не остаётся без присмотра.",
        detail: "При долгом ремонте — заберём позже",
      },
      {
        num: "04",
        icon: "Home",
        title: "Возврат к вам",
        desc: "После завершения работ водитель принимает автомобиль у сервиса и доставляет к вам. Вы получаете полный фотоотчёт о поездке.",
        detail: "Уведомление перед выездом",
      },
    ],
    includes: [
      { icon: "Shield", text: "Страховка на весь маршрут" },
      { icon: "FileText", text: "Акт приёма-передачи" },
      { icon: "Video", text: "Видеорегистратор в машине" },
      { icon: "Bell", text: "Уведомления о статусе" },
      { icon: "MapPin", text: "GPS-запись маршрута" },
      { icon: "Clock", text: "Работаем 07:00–23:00" },
    ],
    faq: [
      {
        q: "Что если ремонт займёт несколько дней?",
        a: "Оплачиваете только доставку туда. Когда машина будет готова — оформляете новую заявку на возврат.",
      },
      {
        q: "Может ли водитель передать СТО дополнительные пожелания от меня?",
        a: "Конечно. Вы можете написать в заявке любые комментарии для мастера — водитель их передаст.",
      },
      {
        q: "Вы работаете с дилерскими центрами?",
        a: "Да, отвозим в любые СТО: дилерские центры, частные мастерские, шиномонтажи.",
      },
    ],
    otherServices: [
      { slug: "wash", label: "Мойка авто", icon: "Sparkles" },
      { slug: "transfer", label: "Перегон авто", icon: "Route" },
      { slug: "tires", label: "Сезонный шиномонтаж", icon: "RotateCw" },
    ],
  },
  transfer: {
    slug: "transfer",
    title: "Перегоним из точки А в точку Б",
    subtitle: "Перегон с видеофиксацией и страховкой",
    accent: "#F59E0B",
    accentLight: "#FFFBEB",
    icon: "Route",
    heroLine1: "Перегон авто",
    heroLine2: "с полной защитой",
    tagline: "Любой маршрут по городу или межгород. Оплата за километры, не за часы.",
    price: "от 30 ₽/км",
    priceNote: "минимальный заказ 500 ₽, межгород — фикс цена",
    steps: [
      {
        num: "01",
        icon: "MapPin",
        title: "Укажите маршрут",
        desc: "Адрес А и адрес Б — всё. Можно добавить промежуточные точки или особые пожелания. Мы рассчитаем стоимость и подтвердим.",
        detail: "Расчёт стоимости сразу при бронировании",
      },
      {
        num: "02",
        icon: "FileText",
        title: "Акт приёма и старт",
        desc: "Водитель приезжает к месту А. Совместный осмотр, фотофиксация, подпись акта — и машина выдвигается по маршруту.",
        detail: "Видеофиксация начала поездки",
      },
      {
        num: "03",
        icon: "Navigation",
        title: "Поездка под контролем",
        desc: "Весь маршрут записывается видеорегистратором и GPS-трекером. При желании можете следить за местоположением машины в реальном времени.",
        detail: "GPS-трек и видео всего маршрута",
      },
      {
        num: "04",
        icon: "CheckCircle",
        title: "Сдача в точке Б",
        desc: "В точке назначения водитель передаёт машину вам или указанному лицу. Вы получаете фотоотчёт, трек маршрута и итоговый чек.",
        detail: "Передача любому доверенному лицу",
      },
    ],
    includes: [
      { icon: "Shield", text: "Страховка на весь маршрут" },
      { icon: "FileText", text: "Акт приёма-передачи" },
      { icon: "Video", text: "Видеорегистратор в машине" },
      { icon: "MapPin", text: "GPS-трек маршрута" },
      { icon: "Camera", text: "Фотоотчёт точки А и Б" },
      { icon: "Users", text: "Передача доверенному лицу" },
    ],
    faq: [
      {
        q: "Как происходит возврат вашего водителя?",
        a: "Водитель возвращается самостоятельно (такси). Эта стоимость входит в тариф для коротких маршрутов. При межгороде — обсуждается отдельно.",
      },
      {
        q: "Можно передать машину не лично, а на парковку/охрану?",
        a: "Да. Укажите это в заявке — водитель поставит машину на указанное место и пришлёт фото.",
      },
      {
        q: "Работаете ли с межгородом?",
        a: "Да, выполняем межгородние перегоны. Стоимость рассчитывается индивидуально по запросу.",
      },
    ],
    otherServices: [
      { slug: "wash", label: "Мойка авто", icon: "Sparkles" },
      { slug: "sto", label: "Отвезём на СТО", icon: "Wrench" },
      { slug: "tires", label: "Сезонный шиномонтаж", icon: "RotateCw" },
    ],
  },
  tires: {
    slug: "tires",
    title: "Сезонный шиномонтаж за вас",
    subtitle: "Смена резины без очередей и потери времени",
    accent: "#8B5CF6",
    accentLight: "#F5F3FF",
    icon: "RotateCw",
    heroLine1: "Смена резины",
    heroLine2: "без очередей",
    tagline: "Забираем машину, меняем резину на вашем шиномонтаже или нашем и возвращаем.",
    price: "от 700 ₽",
    priceNote: "включая доставку и возврат, шиномонтаж оплачивается отдельно",
    steps: [
      {
        num: "01",
        icon: "Calendar",
        title: "Выберите время",
        desc: "Договоритесь о дате — лучше заблаговременно в начале сезона. Укажите, где хранится резина: у вас дома или в шиномонтаже.",
        detail: "Рекомендуем бронировать заранее в сезон",
      },
      {
        num: "02",
        icon: "Package",
        title: "Забираем машину и резину",
        desc: "Если резина хранится у вас — погрузим в багажник или на прицеп. Если на хранении в шиномонтаже — всё организуем сами. Фиксируем состояние авто.",
        detail: "Помогаем с погрузкой и оформлением",
      },
      {
        num: "03",
        icon: "RotateCw",
        title: "Шиномонтаж на месте",
        desc: "Водитель лично сдаёт машину на шиномонтаж и контролирует работы. Балансировка, накачка, проверка давления — всё включено в стандарт.",
        detail: "Работаем с любыми шиномонтажами",
      },
      {
        num: "04",
        icon: "Home",
        title: "Возврат с готовой машиной",
        desc: "Автомобиль возвращается к вам уже на сезонной резине. Снятые шины — либо забираете, либо оставляем на хранение по вашему запросу.",
        detail: "Организуем хранение снятой резины",
      },
    ],
    includes: [
      { icon: "Shield", text: "Страховка на весь маршрут" },
      { icon: "FileText", text: "Акт приёма-передачи" },
      { icon: "Video", text: "Видеорегистратор в машине" },
      { icon: "Package", text: "Погрузка/разгрузка резины" },
      { icon: "MapPin", text: "GPS-запись маршрута" },
      { icon: "Clock", text: "Работаем 07:00–23:00" },
    ],
    faq: [
      {
        q: "Нужно ли мне ехать на шиномонтаж самому?",
        a: "Нет. Мы забираем машину, везём, ждём и возвращаем. Вы только передаёте ключи и забираете готовый автомобиль.",
      },
      {
        q: "Если резина хранится на шиномонтаже, можно ли без моего присутствия её получить?",
        a: "Да, если вы заранее предупредите шиномонтаж и дадите разрешение. Мы организуем всё самостоятельно.",
      },
      {
        q: "Работаете ли вы в час-пик смены сезона?",
        a: "Да, но в пиковые периоды (октябрь–ноябрь, март–апрель) рекомендуем бронировать за 2–3 дня.",
      },
    ],
    otherServices: [
      { slug: "wash", label: "Мойка авто", icon: "Sparkles" },
      { slug: "sto", label: "Отвезём на СТО", icon: "Wrench" },
      { slug: "transfer", label: "Перегон авто", icon: "Route" },
    ],
  },
  "sober-driver": {
    slug: "sober-driver",
    title: "Трезвый водитель за руль вашего авто",
    subtitle: "Приедем, сядем за руль и довезём вас домой",
    accent: "#EF4444",
    accentLight: "#FEF2F2",
    icon: "Wine",
    heroLine1: "Домой на своей",
    heroLine2: "машине — безопасно",
    tagline: "Наш водитель приедет к вам, сядет за руль вашего авто и довезёт вас и вашу машину домой.",
    price: "от 800 ₽",
    priceNote: "водитель добирается к вам сам, оплата по счётчику",
    steps: [
      {
        num: "01",
        icon: "Phone",
        title: "Оставьте заявку",
        desc: "Укажите адрес, где вы находитесь, и адрес, куда нужно доехать. Мы подтвердим заявку в течение 5 минут и сообщим время прибытия водителя.",
        detail: "Работаем ежедневно с 18:00 до 06:00",
      },
      {
        num: "02",
        icon: "UserCheck",
        title: "Водитель приезжает к вам",
        desc: "Трезвый, опытный водитель добирается до вашего местонахождения на такси или общественном транспорте. Никаких задержек — мы держим вас в курсе.",
        detail: "Среднее время прибытия — 20–30 минут",
      },
      {
        num: "03",
        icon: "Car",
        title: "Едем на вашем авто",
        desc: "Водитель садится за руль вашего автомобиля. Вы сидите рядом или на заднем сиденье — как вам удобно. Всё в рамках ПДД, спокойно и безопасно.",
        detail: "Видеорегистратор записывает весь маршрут",
      },
      {
        num: "04",
        icon: "Home",
        title: "Вы и ваша машина дома",
        desc: "Водитель доставляет вас по адресу и паркует автомобиль. Вы получаете чек, GPS-трек маршрута и можете оценить поездку. Оплата на месте.",
        detail: "Карта, наличные или СБП",
      },
    ],
    includes: [
      { icon: "Shield", text: "Страховка на весь маршрут" },
      { icon: "Video", text: "Видеорегистратор в машине" },
      { icon: "MapPin", text: "GPS-трек маршрута" },
      { icon: "UserCheck", text: "Проверенный водитель" },
      { icon: "Clock", text: "Работаем 18:00–06:00" },
      { icon: "Phone", text: "Связь на протяжении поездки" },
    ],
    faq: [
      {
        q: "Как водитель добирается до меня?",
        a: "На такси или общественном транспорте за наш счёт. Стоимость доставки водителя уже включена в тариф.",
      },
      {
        q: "Что если я нахожусь за городом?",
        a: "Работаем в радиусе до 50 км от города. Для более дальних поездок стоимость рассчитывается индивидуально — уточните при заказе.",
      },
      {
        q: "Можно ли вызвать трезвого водителя заранее, например на вечер?",
        a: "Да, принимаем предварительные заявки. Просто укажите нужное время в заявке, и водитель будет у вас точно в срок.",
      },
    ],
    otherServices: [
      { slug: "wash", label: "Мойка авто", icon: "Sparkles" },
      { slug: "sto", label: "Отвезём на СТО", icon: "Wrench" },
      { slug: "transfer", label: "Перегон авто", icon: "Route" },
    ],
  },
};

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES[slug as keyof typeof SERVICES];

  if (!service) {
    return (
      <div className="min-h-screen bg-[#F6F5F3] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">404</div>
          <Link to="/" className="text-[#F59E0B] underline">На главную</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F5F3] text-[#141414]">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F6F5F3]/90 backdrop-blur-sm border-b border-[#E0DDD8]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-sm text-[#666] hover:text-[#141414] transition-colors">
            <Icon name="ArrowLeft" size={16} />
            <span>Все услуги</span>
          </Link>
          <Link to="/" className="text-lg font-semibold tracking-tight">
            Авто<span className="text-[#F59E0B]">Консьерж</span>
          </Link>
          <a
            href="#booking"
            className="bg-[#141414] text-white text-sm px-5 py-2.5 hover:bg-[#333] transition-colors"
          >
            Заказать
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-16 min-h-[70vh] flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${service.accent}15 0%, ${service.accent}05 50%, transparent 100%)` }}
        />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{ background: service.accent, transform: "translate(200px, -200px)" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] mb-8 transition-opacity hover:opacity-70"
              style={{ color: service.accent }}
            >
              <span className="w-8 h-px" style={{ background: service.accent }} />
              АвтоКонсьерж
            </Link>
            <div
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ background: service.accentLight, color: service.accent }}
            >
              <Icon name={service.icon} size={16} />
              {service.subtitle}
            </div>
            <h1 className="font-display text-6xl md:text-7xl leading-[1.05] mb-6">
              {service.heroLine1}<br />
              <em style={{ color: service.accent }}>{service.heroLine2}</em>
            </h1>
            <p className="text-[#666] text-xl leading-relaxed mb-10 max-w-lg">
              {service.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                id="booking"
                href="#booking"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 hover:opacity-90 transition-opacity"
                style={{ background: service.accent }}
              >
                Оставить заявку
                <Icon name="ArrowRight" size={18} />
              </a>
              <div className="flex flex-col justify-center">
                <div className="text-2xl font-semibold">{service.price}</div>
                <div className="text-xs text-[#999] mt-0.5">{service.priceNote}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <div
              className="text-xs uppercase tracking-[0.2em] mb-3"
              style={{ color: service.accent }}
            >
              Пошагово
            </div>
            <h2 className="font-display text-5xl font-medium">Как это работает</h2>
          </div>

          <div className="space-y-0">
            {service.steps.map((step, i) => (
              <div
                key={step.num}
                className="grid md:grid-cols-12 gap-8 py-12 border-b border-[#F0EDE8] last:border-0 group"
              >
                <div className="md:col-span-1 flex items-start">
                  <span
                    className="text-5xl font-display font-light leading-none"
                    style={{ color: i === 0 ? service.accent : "#E0DDD8" }}
                  >
                    {step.num}
                  </span>
                </div>
                <div className="md:col-span-2 flex items-start pt-1">
                  <div
                    className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                    style={{ background: service.accentLight }}
                  >
                    <Icon name={step.icon} size={20} style={{ color: service.accent }} />
                  </div>
                </div>
                <div className="md:col-span-6">
                  <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                  <p className="text-[#666] leading-relaxed">{step.desc}</p>
                </div>
                <div className="md:col-span-3 flex items-start">
                  <div
                    className="text-sm px-4 py-2 rounded-sm"
                    style={{ background: service.accentLight, color: service.accent }}
                  >
                    {step.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDES */}
      <section className="py-24" style={{ background: service.accent }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.2em] mb-3 text-white/60">Стандартно включено</div>
            <h2 className="font-display text-4xl font-medium text-white">В каждом заказе</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-white/20">
            {service.includes.map((item) => (
              <div key={item.text} className="flex items-center gap-4 p-7" style={{ background: service.accent }}>
                <div className="w-10 h-10 bg-white/15 flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={18} className="text-white" />
                </div>
                <span className="text-white font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                  "Ежедневно с 07:00 до 23:00",
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
          <div className="text-sm text-white/40">Москва и область · Ежедневно 07:00–23:00</div>
          <a href="tel:+74951234567" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
            <Icon name="Phone" size={14} />
            +7 (495) 123-45-67
          </a>
        </div>
      </footer>
    </div>
  );
}

function BookingForm({ accent, serviceName }: { accent: string; serviceName: string }) {
  const [submitted, setSubmitted] = useState(false);
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

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="space-y-4"
    >
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
        className="w-full py-4 text-white font-semibold text-sm transition-opacity hover:opacity-90"
        style={{ background: accent }}
      >
        Отправить заявку
      </button>
    </form>
  );
}