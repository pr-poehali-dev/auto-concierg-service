import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import type { ServiceData } from "./serviceData";

interface ServiceHeroProps {
  service: ServiceData;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <>
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
    </>
  );
}
