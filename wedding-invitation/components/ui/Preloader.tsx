"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { wedding } from "@/data/wedding";
import { MonogramCrest, FloralDivider } from "./BotanicalMotifs";
import { FloralCornerGarland, FloralHeaderGarland } from "./FloralBorders";
import { Heart } from "lucide-react";

export default function Preloader() {
  const [phase, setPhase] = useState<"loading" | "fadeout" | "done">("loading");
  const [progress, setProgress] = useState(0);
  const triggeredRef = useRef(false);

  // Lock body scroll while loader is active
  useEffect(() => {
    if (phase !== "done") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  const triggerMusicAndOpen = useCallback(() => {
    if (triggeredRef.current) return;
    triggeredRef.current = true;

    // Dispatch event to automatically play background music
    try {
      window.dispatchEvent(new CustomEvent("wedding:play-music"));
    } catch {
      // ignore
    }

    setPhase("fadeout");
    setTimeout(() => {
      setPhase("done");
    }, 700);
  }, []);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2000; // 2 seconds smooth loading animation

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          triggerMusicAndOpen();
        }, 250);
      }
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, [triggerMusicAndOpen]);

  if (phase === "done") return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to Kelvin and Janine's Wedding Invitation"
      onClick={triggerMusicAndOpen}
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#fbf7f4] transition-all duration-700 cursor-pointer ${
        phase === "fadeout"
          ? "opacity-0 scale-105 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
    >
      {/* Background watercolor wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-watercolor pointer-events-none"
      />

      {/* Luxury Stationery Card with Embossed Groove Frame */}
      <div
        className="relative w-full max-w-lg rounded-3xl p-8 sm:p-12 text-center bg-white/95 border-2 border-[#bfa15f]/50 shadow-2xl backdrop-blur-xl"
        style={{
          boxShadow:
            "inset 0 0 0 4px #f7ede5, inset 0 0 0 5.5px rgba(191, 161, 95, 0.45), 0 30px 70px -15px rgba(120, 56, 50, 0.3)",
        }}
      >
        {/* Botanical Corner Garlands in all 4 corners */}
        <div className="absolute top-2 left-2">
          <FloralCornerGarland position="top-left" />
        </div>
        <div className="absolute top-2 right-2">
          <FloralCornerGarland position="top-right" />
        </div>
        <div className="absolute bottom-2 left-2">
          <FloralCornerGarland position="bottom-left" />
        </div>
        <div className="absolute bottom-2 right-2">
          <FloralCornerGarland position="bottom-right" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Animated Monogram */}
          <div className="animate-pulse-subtle mb-2">
            <MonogramCrest size="md" />
          </div>

          <div className="mb-2">
            <FloralHeaderGarland className="scale-75 opacity-70" />
          </div>

          <p className="font-display text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-[#8b685e]">
            {wedding.tagline}
          </p>

          <p className="font-cormorant italic text-base text-[#664338] mt-1">
            Together with our families
          </p>

          {/* Groom & Bride Names */}
          <div className="my-2">
            <h2 className="font-script text-5xl sm:text-7xl text-[#783832] leading-tight drop-shadow-xs">
              {wedding.groom}{" "}
              <span className="font-cormorant italic text-3xl sm:text-5xl text-[#bfa15f]">
                &amp;
              </span>{" "}
              {wedding.bride}
            </h2>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-[#8b685e] mt-1">
              {wedding.groomSurname} &amp; {wedding.brideSurname}
            </p>
          </div>

          <FloralDivider className="my-3 scale-90" />

          <p className="font-serif text-sm sm:text-base text-[#5a2722] font-medium tracking-wide">
            {wedding.dayLabel}, {wedding.dateLabel} · San Pablo City
          </p>

          {/* Golden Progress Bar */}
          <div className="mt-7 w-48 sm:w-64">
            <div className="flex items-center justify-between text-[10px] font-display uppercase tracking-widest text-[#8b685e] mb-1.5">
              <span>Unfolding</span>
              <Heart className="w-3 h-3 text-[#bfa15f] fill-[#d9aba6] animate-pulse" />
              <span>Invitation</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-[#f7ebe4] overflow-hidden border border-[#bfa15f]/30">
              <div
                className="h-full bg-gradient-to-r from-[#d9aba6] via-[#bfa15f] to-[#783832] transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-2 text-[11px] font-cormorant italic text-[#8b685e]/80 tracking-wider">
              {progress < 100 ? "Please wait a moment..." : "Welcome to our celebration"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
