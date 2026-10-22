"use client";

import { useState } from "react";
import { wedding } from "@/data/wedding";
import ScriptHeading from "@/components/ui/ScriptHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { FloralCornerGarland } from "@/components/ui/FloralBorders";
import { Check, Copy, Gift, User, Heart, Sparkles } from "lucide-react";

export default function DressCode() {
  const { intro, palette, gentlemen, ladies, reminder } = wedding.dressCode;
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [showGiftDetails, setShowGiftDetails] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);

  const copyText = async (text: string) => {
    try {
      if (typeof navigator !== "undefined" && navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch {
      // Fall through to textarea fallback
    }

    try {
      if (typeof document !== "undefined") {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "-9999px";
        textArea.setAttribute("readonly", "");
        document.body.appendChild(textArea);
        textArea.select();
        const success = document.execCommand("copy");
        document.body.removeChild(textArea);
        return success;
      }
    } catch {
      return false;
    }
    return false;
  };

  const copyToClipboard = (hex: string) => {
    copyText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const copyGcash = () => {
    copyText(wedding.giftNote.bankInfo.gcashNumber);
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2000);
  };

  return (
    <section id="dress-code" className="scroll-mt-16 bg-[#faf5f0] px-4 sm:px-6 py-20 md:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-5xl">
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
            <ScriptHeading subtitle="Attire & Aesthetics" divider>
              Dress Code
            </ScriptHeading>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delayMs={100}>
            <p className="mx-auto mt-4 max-w-xl text-center font-serif text-lg leading-relaxed text-[#664338]">
              {intro}
            </p>
          </ScrollReveal>

          {/* Color Palette Swatches */}
          <div className="mt-12">
            <ScrollReveal animation="fade-down" delayMs={150}>
              <p className="text-center font-display text-xs font-semibold uppercase tracking-[0.25em] text-[#8b685e] mb-6">
                Official Color Palette
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
              {palette.map((c, idx) => (
                <ScrollReveal
                  key={c.hex}
                  animation="zoom-in"
                  delayMs={idx * 80 + 100}
                >
                  <div
                    onClick={() => copyToClipboard(c.hex)}
                    className="group relative cursor-pointer flex flex-col items-center rounded-2xl bg-white/90 p-4 border border-[#bfa15f]/30 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#bfa15f] hover:shadow-md"
                  >
                    {/* Color Swatch Circle */}
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-md border-2 border-white relative flex items-center justify-center transition-transform group-hover:scale-105"
                      style={{ backgroundColor: c.hex }}
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 text-white rounded-full p-1.5 backdrop-blur-xs">
                        {copiedHex === c.hex ? (
                          <Check className="w-4 h-4 text-emerald-300" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </span>
                    </div>

                    <span className="font-cormorant text-xl font-semibold text-[#783832] mt-3 text-center">
                      {c.name}
                    </span>
                    <span className="font-mono text-xs text-[#8b685e] tracking-wider mt-0.5">
                      {c.hex}
                    </span>
                    <span className="font-serif text-[11px] text-[#664338]/80 text-center mt-1 italic">
                      {c.desc}
                    </span>

                    {copiedHex === c.hex && (
                      <span className="absolute -bottom-2 text-[10px] uppercase font-display bg-[#783832] text-white px-2 py-0.5 rounded-full shadow">
                        Copied!
                      </span>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Attire Guidelines for Gentlemen & Ladies */}
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {/* Gentlemen Card */}
            <ScrollReveal animation="fade-right" delayMs={150}>
              <div className="luxury-card rounded-2xl p-6 sm:p-8 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#f7ebe4] border border-[#bfa15f]/40 flex items-center justify-center text-[#783832]">
                    <User className="w-5 h-5" />
                  </div>
                  <h4 className="font-cormorant text-2xl font-semibold text-[#783832]">
                    For Gentlemen
                  </h4>
                </div>
                <p className="font-serif text-base text-[#664338] leading-relaxed">
                  {gentlemen}
                </p>
                <p className="mt-3 text-xs font-serif text-[#8b685e] italic">
                  Suggested: Modern embroidered Barong Tagalog or crisp formal suit with neutral dress shoes.
                </p>
              </div>
            </ScrollReveal>

            {/* Ladies Card */}
            <ScrollReveal animation="fade-left" delayMs={220}>
              <div className="luxury-card rounded-2xl p-6 sm:p-8 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#f7ebe4] border border-[#bfa15f]/40 flex items-center justify-center text-[#783832]">
                    <Sparkles className="w-5 h-5 text-[#bfa15f]" />
                  </div>
                  <h4 className="font-cormorant text-2xl font-semibold text-[#783832]">
                    For Ladies
                  </h4>
                </div>
                <p className="font-serif text-base text-[#664338] leading-relaxed">
                  {ladies}
                </p>
                <p className="mt-3 text-xs font-serif text-[#8b685e] italic">
                  Suggested: Long gowns or elegant midi dresses in any of our wedding palette shades.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Etiquette Reminder Banner */}
          <ScrollReveal animation="fade-up" delayMs={150}>
            <div className="mt-8 rounded-2xl border border-amber-900/15 bg-[#fdf8f5] p-4 text-center">
              <p className="font-serif text-sm text-[#783832]">
                <span className="font-semibold uppercase tracking-wider font-display text-xs mr-2">
                  Friendly Note:
                </span>
                {reminder}
              </p>
            </div>
          </ScrollReveal>

          {/* A Note on Gifts / Wishing Well */}
          <ScrollReveal animation="flip-in" delayMs={200}>
            <div className="mt-16 rounded-3xl border border-[#bfa15f]/40 bg-white/95 p-8 sm:p-10 shadow-lg text-center backdrop-blur-sm">
              <div className="mx-auto w-12 h-12 rounded-full bg-[#f7ebe4] border border-[#bfa15f]/50 flex items-center justify-center text-[#783832] shadow-inner mb-4">
                <Gift className="w-6 h-6 text-[#bfa15f]" />
              </div>

              <h3 className="font-script text-4xl sm:text-5xl text-[#783832]">
                {wedding.giftNote.title}
              </h3>

              <p className="mx-auto mt-3 max-w-2xl font-serif text-base sm:text-lg leading-relaxed text-[#664338]">
                {wedding.giftNote.message}
              </p>

              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowGiftDetails(!showGiftDetails)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-display text-xs font-semibold uppercase tracking-[0.2em] bg-[#f7ebe4] text-[#783832] border border-[#bfa15f]/50 hover:bg-[#783832] hover:text-white transition-all shadow-sm"
                >
                  <Heart className="w-3.5 h-3.5 text-[#bfa15f]" />
                  {showGiftDetails ? "Hide Gifting Details" : "View Gifting Details & Wishing Well"}
                </button>
              </div>

              {showGiftDetails && (
                <div className="mt-8 mx-auto max-w-md rounded-2xl border border-[#bfa15f]/30 bg-[#fdf8f5] p-6 text-left animate-in fade-in duration-300">
                  <h5 className="font-display text-xs font-semibold uppercase tracking-wider text-[#783832] mb-3 text-center">
                    Digital Blessing Details
                  </h5>
                  <div className="space-y-2 text-sm font-serif text-[#664338]">
                    <p>
                      <span className="font-medium text-[#783832]">Account Name:</span>{" "}
                      {wedding.giftNote.bankInfo.accountName}
                    </p>
                    <p className="flex items-center justify-between">
                      <span>
                        <span className="font-medium text-[#783832]">GCash / Mobile:</span>{" "}
                        {wedding.giftNote.bankInfo.gcashNumber}
                      </span>
                      <button
                        onClick={copyGcash}
                        type="button"
                        className="text-xs font-display px-2.5 py-1 rounded bg-white border border-[#bfa15f]/40 text-[#783832] hover:bg-[#783832] hover:text-white transition-colors"
                      >
                        {copiedAccount ? "Copied!" : "Copy"}
                      </button>
                    </p>
                    <p>
                      <span className="font-medium text-[#783832]">Bank Option:</span>{" "}
                      {wedding.giftNote.bankInfo.bankName}
                    </p>
                  </div>
                  <p className="mt-4 pt-3 border-t border-[#bfa15f]/20 text-xs text-[#8b685e] italic text-center">
                    {wedding.giftNote.bankInfo.note}
                  </p>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
