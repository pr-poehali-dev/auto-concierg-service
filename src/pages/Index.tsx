import { useState } from "react";
import HomeHero from "@/components/home/HomeHero";
import HomeAbout from "@/components/home/HomeAbout";
import HomeBooking from "@/components/home/HomeBooking";

const SEND_EMAIL_URL = "https://functions.poehali.dev/410daec2-64c7-4708-8a7a-d96509108767";

const services = [
  { id: "transfer", label: "Перегон авто", icon: "Route" },
  { id: "wash", label: "Мойка / химчистка", icon: "Sparkles" },
  { id: "service", label: "Отвезти на СТО", icon: "Wrench" },
  { id: "pickup", label: "Забрать из сервиса", icon: "ArrowDownToLine" },
];

export default function Index() {
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
      <HomeHero />
      <HomeAbout />
      <HomeBooking
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        bookingForm={bookingForm}
        setBookingForm={setBookingForm}
        submitted={submitted}
        sending={sending}
        handleBook={handleBook}
      />
    </div>
  );
}
