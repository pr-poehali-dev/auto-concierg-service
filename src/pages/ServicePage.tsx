import { Link, useParams } from "react-router-dom";
import { SERVICES } from "@/components/service/serviceData";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceSteps from "@/components/service/ServiceSteps";
import ServiceFaqCta from "@/components/service/ServiceFaqCta";

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
      <ServiceHero service={service} />
      <ServiceSteps service={service} />
      <ServiceFaqCta service={service} />
    </div>
  );
}
