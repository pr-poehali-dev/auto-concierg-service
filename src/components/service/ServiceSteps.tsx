import Icon from "@/components/ui/icon";
import type { ServiceData } from "./serviceData";

interface ServiceStepsProps {
  service: ServiceData;
}

export default function ServiceSteps({ service }: ServiceStepsProps) {
  return (
    <>
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
    </>
  );
}
