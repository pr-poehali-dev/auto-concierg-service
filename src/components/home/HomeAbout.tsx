import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/131e6353-e3ec-4f75-819f-49222c805821/files/ac9ce39a-4610-4f0f-ad85-8879c9ba8c4c.jpg";

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

export default function HomeAbout() {
  return (
    <>
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
    </>
  );
}
