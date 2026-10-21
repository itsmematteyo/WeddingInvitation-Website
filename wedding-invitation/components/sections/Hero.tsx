"use client";

import Image from "next/image";
import { wedding } from "@/data/wedding";
import { FloralDivider, MonogramCrest } from "@/components/ui/BotanicalMotifs";
import { FloralCornerGarland, FloralHeaderGarland } from "@/components/ui/FloralBorders";
import Countdown from "@/components/animations/Countdown";
import PhotoFrame from "@/components/ui/PhotoFrame";
import { Calendar, MapPin, ChevronDown } from "lucide-react";

// Featured couple image in public/images
const HERO_SRC: string | null = "/images/image-test.jpg";

export default function Hero() {
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+of+Kelvin+and+Janine&dates=20261229T013000Z/20261229T080000Z&details=In+God%27s+Perfect+Time.+Kelvin+Arellano+and+Janine+Consulta+Nuptial+Ceremony+at+San+Pablo+Cathedral+Church+and+Reception+at+Golden+Rich.&location=San+Pablo+Cathedral+Church%2C+San+Pablo+City`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden bg-watercolor pt-28 pb-12 px-4 sm:px-6"
    >
      {/* Subtle ambient background wash if image is available */}
      {HERO_SRC && (
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Image
            src={HERO_SRC}
            alt="Kelvin and Janine"
            fill
            priority
            className="object-cover object-center blur-sm scale-105"
          />
          <div className="absolute inset-0 bg-[#fdf8f5]/80" />
        </div>
      )}

      {/* Background decorative luxury stationery border with debossed groove */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-3 sm:inset-6 rounded-3xl border border-[#bfa15f]/40 z-0"
        style={{
          boxShadow:
            "inset 0 0 0 3px #f7ede5, inset 0 0 0 4.5px rgba(191, 161, 95, 0.35)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-5 sm:inset-9 rounded-2xl border border-dashed border-[#bfa15f]/25 z-0"
      />

      {/* Ornate Floral Garlands in Hero Corners */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <FloralCornerGarland position="top-left" />
      </div>
      <div className="absolute top-4 right-4 z-10 pointer-events-none">
        <FloralCornerGarland position="top-right" />
      </div>
      <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
        <FloralCornerGarland position="bottom-left" />
      </div>
      <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
        <FloralCornerGarland position="bottom-right" />
      </div>

      {/* Main Content Suite */}
      <div className="relative z-10 mx-auto max-w-4xl text-center flex flex-col items-center my-auto py-6">
        {/* Monogram Seal */}
        <div className="mb-3">
          <MonogramCrest size="md" />
        </div>

        {/* Crown Garland */}
        <div className="mb-2">
          <FloralHeaderGarland className="scale-90 opacity-80" />
        </div>

        {/* Biblical / Tagline Eyebrow */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="h-px w-8 bg-[#bfa15f]/60" />
          <p className="font-display text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#783832]">
            {wedding.tagline}
          </p>
          <span className="h-px w-8 bg-[#bfa15f]/60" />
        </div>

        {/* Subtitle */}
        <p className="font-cormorant italic text-base sm:text-lg text-[#664338] mb-2">
          Together with our families, we joyfully invite you to the wedding of
        </p>

        {/* Couple Names in Grand Calligraphy */}
        <div className="my-2 sm:my-3">
          <h1 className="font-script text-6xl sm:text-8xl md:text-9xl text-[#783832] leading-[1.05] drop-shadow-sm">
            <span>{wedding.groom}</span>
            <span className="mx-3 sm:mx-6 font-cormorant italic text-3xl sm:text-5xl text-[#bfa15f]">
              &amp;
            </span>
            <span>{wedding.bride}</span>
          </h1>
          <p className="font-display text-xs sm:text-sm tracking-[0.35em] uppercase text-[#8b685e] mt-2">
            {wedding.groomSurname} &amp; {wedding.brideSurname}
          </p>
        </div>

        {/* Featured Arched Couple Portrait Photo */}
        {HERO_SRC && (
          <div className="my-5 w-full max-w-sm sm:max-w-md mx-auto">
            <PhotoFrame
              src={HERO_SRC}
              alt="Kelvin and Janine"
              label="Kelvin & Janine"
              caption="In God's Perfect Time"
              className="aspect-[16/10]"
              shape="arch"
            />
          </div>
        )}

        <FloralDivider className="my-4 scale-110" />

        {/* Date & Time */}
        <div className="mt-2 mb-6 flex flex-col items-center">
          <p className="font-cormorant text-2xl sm:text-3xl text-[#5a2722] font-semibold tracking-wide">
            {wedding.dayLabel}, {wedding.dateLabel}
          </p>
          <p className="font-display text-xs uppercase tracking-[0.25em] text-[#783832] mt-1">
            at {wedding.timeLabel} in the morning
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs font-serif text-[#664338] max-w-md text-center">
            <MapPin className="w-3.5 h-3.5 text-[#bfa15f] shrink-0" />
            <span>San Pablo Cathedral Church &amp; Golden Rich Banquet · San Pablo City</span>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2 mb-8">
          <a
            href="#rsvp"
            className="px-8 py-3 rounded-full font-display text-xs font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-[#783832] to-[#a66a64] text-white shadow-md hover:shadow-xl hover:from-[#5a2722] hover:to-[#8f423d] transition-all transform hover:-translate-y-0.5 border border-[#bfa15f]/60"
          >
            RSVP Attendance
          </a>
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full font-display text-xs font-semibold uppercase tracking-[0.2em] bg-white/85 text-[#783832] border border-[#bfa15f]/50 hover:bg-white hover:border-[#bfa15f] shadow-sm transition-all transform hover:-translate-y-0.5"
          >
            <Calendar className="w-3.5 h-3.5 text-[#bfa15f]" />
            Save the Date
          </a>
          <a
            href="#details"
            className="flex items-center gap-2 px-6 py-3 rounded-full font-display text-xs font-semibold uppercase tracking-[0.2em] bg-white/85 text-[#783832] border border-[#bfa15f]/50 hover:bg-white hover:border-[#bfa15f] shadow-sm transition-all transform hover:-translate-y-0.5"
          >
            <MapPin className="w-3.5 h-3.5 text-[#bfa15f]" />
            Venues &amp; Map
          </a>
        </div>

        {/* Live Countdown Clock */}
        <div className="w-full mt-4">
          <Countdown target={wedding.isoDateTime} />
        </div>
      </div>

      {/* Gentle Scroll Down Indicator */}
      <div className="relative z-10 flex flex-col items-center mt-6">
        <a
          href="#story"
          className="flex flex-col items-center gap-1 font-display text-[11px] uppercase tracking-[0.25em] text-[#8b685e] hover:text-[#783832] transition-colors"
        >
          <span>Scroll to Celebrate</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#bfa15f]" />
        </a>
      </div>
    </section>
  );
}
