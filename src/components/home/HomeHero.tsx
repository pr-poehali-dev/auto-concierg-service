import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/131e6353-e3ec-4f75-819f-49222c805821/files/ac9ce39a-4610-4f0f-ad85-8879c9ba8c4c.jpg";

const steps = [
  { num: "01", title: "Оставьте заявку", desc: "Укажите услугу, адреса и удобное время. Звонок или форма — как вам удобнее." },
  { num: "02", title: "Назначаем водителя", desc: "Проверенный специалист с видеорегистратором принимает ваш автомобиль по акту." },
  { num: "03", title: "Выполняем задачу", desc: "Везём на мойку, сервис или перегоняем в нужную точку. Всё под страховкой." },
  { num: "04", title: "Отчёт и оплата", desc: "Получаете фотоотчёт с маршрутом. Оплата по тарифу картой или наличными." },
];

export default function HomeHero() {
  return (
    <>
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
    </>
  );
}
