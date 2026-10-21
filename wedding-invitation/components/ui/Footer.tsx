import { wedding } from "@/data/wedding";
import { FloralDivider, MonogramCrest } from "./BotanicalMotifs";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#f7ebe4] to-[#ebd2c9] px-6 py-16 text-center border-t border-[#bfa15f]/30">
      <div className="mx-auto max-w-4xl flex flex-col items-center">
        {/* Monogram */}
        <div className="mb-4">
          <MonogramCrest size="sm" />
        </div>

        <p className="font-display text-xs uppercase tracking-[0.3em] text-[#783832] font-semibold">
          {wedding.tagline}
        </p>

        <h3 className="font-script text-5xl sm:text-6xl text-[#783832] mt-1 mb-2">
          {wedding.groom} &amp; {wedding.bride}
        </h3>

        <FloralDivider className="my-3 scale-90" />

        <p className="font-serif text-base text-[#664338] mt-1">
          {wedding.dayLabel}, {wedding.dateLabel} · San Pablo City, Laguna
        </p>

        {/* Wedding Hashtag Badge */}
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-[#bfa15f]/40 text-xs font-display tracking-widest text-[#783832] shadow-xs">
          <Heart className="w-3.5 h-3.5 text-[#bfa15f] fill-[#d9aba6]" />
          <span>{wedding.hashtag}</span>
        </div>

        <p className="mt-6 max-w-md font-serif text-xs text-[#8b685e] italic leading-relaxed">
          &ldquo;And over all these virtues put on love, which binds them all together in perfect unity.&rdquo; — Colossians 3:14
        </p>

        {/* Back to top button */}
        <div className="mt-8">
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-display text-[10px] uppercase tracking-[0.2em] bg-white/60 text-[#783832] border border-[#bfa15f]/30 hover:bg-white hover:border-[#bfa15f] transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3 h-3 text-[#bfa15f]" />
            Back to Top
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-[#bfa15f]/20 w-full text-center">
          <p className="font-display text-[10px] uppercase tracking-widest text-[#8b685e]">
            Crafted with love for Kelvin &amp; Janine &copy; 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
