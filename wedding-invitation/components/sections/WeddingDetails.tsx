"use client";

import { wedding } from "@/data/wedding";
import ScriptHeading from "@/components/ui/ScriptHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PhotoFrame from "@/components/ui/PhotoFrame";
import { FloralCornerGarland } from "@/components/ui/FloralBorders";
import { MapPin, Calendar, Clock, Navigation, ExternalLink, Church, Utensils } from "lucide-react";

export default function WeddingDetails() {
  const { ceremony, reception } = wedding.venues;

  const createGoogleCalendarUrl = () => {
    const text = encodeURIComponent("Wedding of Kelvin & Janine");
    const dates = "20261229T013000Z/20261229T080000Z";
    const details = encodeURIComponent(
      "Together with our families, we joyfully celebrate the Holy Matrimony of Kelvin Arellano & Janine Consulta.\n\nCeremony: San Pablo Cathedral Church (9:30 AM)\nReception: Golden Rich Banquet, San Pablo City"
    );
    const location = encodeURIComponent("San Pablo Cathedral Church, San Pablo City, Laguna");
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${location}`;
  };

  const downloadIcsFile = () => {
    const icsData = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Kelvin and Janine Wedding//EN",
      "BEGIN:VEVENT",
      "SUMMARY:Wedding of Kelvin & Janine",
      "DESCRIPTION:Nuptial ceremony at San Pablo Cathedral Church followed by reception at Golden Rich.",
      "LOCATION:San Pablo Cathedral Church, San Pablo City, Laguna",
      "DTSTART:20261229T013000Z",
      "DTEND:20261229T080000Z",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "kelvin-janine-wedding.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="details" className="scroll-mt-16 bg-[#faf5f0] px-4 sm:px-6 py-20 md:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* Luxury Stationery Groove Frame with Floral Corners */}
        <div
          className="relative rounded-3xl border border-[#bfa15f]/40 bg-white/70 p-6 sm:p-12 shadow-xl backdrop-blur-md"
          style={{
            boxShadow:
              "inset 0 0 0 3px #f7ede5, inset 0 0 0 4.5px rgba(191, 161, 95, 0.35), 0 20px 50px -15px rgba(120, 56, 50, 0.12)",
          }}
        >
          {/* Floral Corner Garlands */}
          <div className="absolute top-2 left-2 pointer-events-none">
            <FloralCornerGarland position="top-left" />
          </div>
          <div className="absolute top-2 right-2 pointer-events-none">
            <FloralCornerGarland position="top-right" />
          </div>
          <div className="absolute bottom-2 left-2 pointer-events-none">
            <FloralCornerGarland position="bottom-left" />
          </div>
          <div className="absolute bottom-2 right-2 pointer-events-none">
            <FloralCornerGarland position="bottom-right" />
          </div>

          <ScrollReveal animation="fade-down">
            <ScriptHeading subtitle="When & Where" divider>
              Wedding Details
            </ScriptHeading>
          </ScrollReveal>

          {/* Date & Time Highlight Banner */}
          <div className="mx-auto mt-8 max-w-2xl text-center">
            <ScrollReveal animation="zoom-in" delayMs={100}>
              <div className="rounded-2xl border border-[#bfa15f]/30 bg-white/90 p-6 shadow-sm backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2 text-[#783832]">
                  <Calendar className="w-5 h-5 text-[#bfa15f]" />
                  <span className="font-display text-xs uppercase tracking-[0.25em] font-semibold">
                    The Sacred Date
                  </span>
                </div>
                <h3 className="font-cormorant text-3xl sm:text-4xl font-semibold text-[#5a2722] mt-2">
                  {wedding.dayLabel}, {wedding.dateLabel}
                </h3>
                <p className="font-serif text-lg text-[#664338] mt-1 flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-[#bfa15f]" />
                  <span>Ceremony starts promptly at {wedding.timeLabel}</span>
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={createGoogleCalendarUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-display text-xs font-semibold uppercase tracking-[0.15em] bg-[#f7ebe4] text-[#783832] border border-[#d9aba6]/60 hover:bg-[#783832] hover:text-white transition-all shadow-sm"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#bfa15f]" />
                    Google Calendar
                  </a>
                  <button
                    onClick={downloadIcsFile}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-display text-xs font-semibold uppercase tracking-[0.15em] bg-[#f7ebe4] text-[#783832] border border-[#d9aba6]/60 hover:bg-[#783832] hover:text-white transition-all shadow-sm"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#bfa15f]" />
                    Apple / Outlook (.ics)
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Featured Couple Photo in Details */}
          <div className="mx-auto mt-10 w-full max-w-sm sm:max-w-md">
            <ScrollReveal animation="zoom-in" delayMs={140}>
              <PhotoFrame
                src="/images/image.jpg"
                alt="Kelvin and Janine"
                label="Kelvin & Janine"
                caption="San Pablo Cathedral & Golden Rich"
                className="aspect-[4/5] sm:aspect-[4/5] min-h-[340px] sm:min-h-[440px]"
                shape="arch"
                objectPosition="object-[16%_center]"
                imageStyle={{ objectPosition: "16% center" }}
              />
            </ScrollReveal>
          </div>

          {/* Dual Venue Cards */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Ceremony Card */}
            <ScrollReveal animation="fade-right" delayMs={150}>
              <div className="luxury-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display uppercase tracking-widest bg-[#f7ebe4] text-[#783832] border border-[#bfa15f]/40 font-semibold">
                      <Church className="w-3.5 h-3.5 text-[#bfa15f]" />
                      Ceremony
                    </span>
                    <span className="font-display text-xs text-[#8b685e] font-medium tracking-wider">
                      {ceremony.time}
                    </span>
                  </div>

                  <h4 className="font-cormorant text-3xl font-semibold text-[#783832]">
                    {ceremony.name}
                  </h4>
                  <p className="mt-2 flex items-start gap-2 font-serif text-base text-[#664338]">
                    <MapPin className="w-4 h-4 text-[#bfa15f] shrink-0 mt-1" />
                    <span>{ceremony.address}</span>
                  </p>

                  <p className="mt-4 font-serif text-sm leading-relaxed text-[#664338]/90 italic">
                    {ceremony.description}
                  </p>

                  <div className="mt-4 p-3 rounded-xl bg-[#fdf8f5] border border-[#bfa15f]/20 text-xs text-[#783832]">
                    <span className="font-semibold">Gentle Reminder:</span> {wedding.arrivalNote}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#bfa15f]/20 flex flex-wrap gap-3">
                  <a
                    href={ceremony.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-display text-xs uppercase tracking-wider font-semibold bg-[#783832] text-white hover:bg-[#5a2722] transition-colors shadow-sm"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#e0ca92]" />
                    Google Maps
                  </a>
                  <a
                    href={ceremony.wazeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-display text-xs uppercase tracking-wider font-semibold bg-white text-[#783832] border border-[#bfa15f]/50 hover:bg-[#f7ebe4] transition-colors shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#bfa15f]" />
                    Waze
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Reception Card */}
            <ScrollReveal animation="fade-left" delayMs={250}>
              <div className="luxury-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display uppercase tracking-widest bg-[#f7ebe4] text-[#783832] border border-[#bfa15f]/40 font-semibold">
                      <Utensils className="w-3.5 h-3.5 text-[#bfa15f]" />
                      Reception
                    </span>
                    <span className="font-display text-xs text-[#8b685e] font-medium tracking-wider">
                      {reception.time}
                    </span>
                  </div>

                  <h4 className="font-cormorant text-3xl font-semibold text-[#783832]">
                    {reception.name}
                  </h4>
                  <p className="mt-2 flex items-start gap-2 font-serif text-base text-[#664338]">
                    <MapPin className="w-4 h-4 text-[#bfa15f] shrink-0 mt-1" />
                    <span>{reception.address}</span>
                  </p>

                  <p className="mt-4 font-serif text-sm leading-relaxed text-[#664338]/90 italic">
                    {reception.description}
                  </p>

                  <div className="mt-4 p-3 rounded-xl bg-[#fdf8f5] border border-[#bfa15f]/20 text-xs text-[#783832]">
                    <span className="font-semibold">Reception Note:</span> Following group photos at the altar, join us for cocktails and the luncheon banquet!
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#bfa15f]/20 flex flex-wrap gap-3">
                  <a
                    href={reception.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-display text-xs uppercase tracking-wider font-semibold bg-[#783832] text-white hover:bg-[#5a2722] transition-colors shadow-sm"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#e0ca92]" />
                    Google Maps
                  </a>
                  <a
                    href={reception.wazeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-display text-xs uppercase tracking-wider font-semibold bg-white text-[#783832] border border-[#bfa15f]/50 hover:bg-[#f7ebe4] transition-colors shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#bfa15f]" />
                    Waze
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
