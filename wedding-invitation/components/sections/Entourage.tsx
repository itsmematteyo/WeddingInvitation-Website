"use client";

import { useState } from "react";
import { parents, principalSponsors, secondary } from "@/data/sponsors";
import ScriptHeading from "@/components/ui/ScriptHeading";
import { FloralDivider } from "@/components/ui/BotanicalMotifs";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { FloralCornerGarland } from "@/components/ui/FloralBorders";

export default function Entourage() {
  const [activeTab, setActiveTab] = useState<"all" | "parents-sponsors" | "bridal-party" | "attendants">("all");

  return (
    <section id="entourage" className="scroll-mt-16 bg-watercolor px-4 sm:px-6 py-20 md:py-28 relative overflow-hidden">
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
            <ScriptHeading subtitle="Those Who Walk With Us" divider>
              Wedding Entourage
            </ScriptHeading>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delayMs={100}>
            <p className="mx-auto mt-3 max-w-xl text-center font-serif text-base text-[#664338]">
              With deepest gratitude to our beloved parents, sponsors, and entourage who stand by our side as we exchange sacred vows.
            </p>
          </ScrollReveal>

          {/* Filter Navigation Tabs */}
          <ScrollReveal animation="zoom-in" delayMs={150}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {[
                { id: "all", label: "Full Entourage" },
                { id: "parents-sponsors", label: "Parents & Sponsors" },
                { id: "bridal-party", label: "Bridal Party" },
                { id: "attendants", label: "Honor Attendants" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  type="button"
                  className={`px-4 py-2 rounded-full font-display text-xs font-semibold uppercase tracking-[0.15em] transition-all ${
                    activeTab === tab.id
                      ? "bg-[#783832] text-white shadow-sm border border-[#bfa15f]/60"
                      : "bg-white/80 text-[#664338] border border-[#bfa15f]/30 hover:bg-[#f7ebe4]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Content Container */}
          <div className="mt-12 space-y-12">
            {/* SECTION: PARENTS & SPONSORS */}
            {(activeTab === "all" || activeTab === "parents-sponsors") && (
              <div className="space-y-10">
                {/* Nuptial Banner */}
                <ScrollReveal animation="fade-up" delayMs={150}>
                  <div className="luxury-card rounded-3xl p-8 sm:p-10 text-center">
                    <span className="font-display text-xs uppercase tracking-[0.3em] text-[#bfa15f] font-semibold">
                      The Arellano &amp; Consulta Nuptials
                    </span>
                    <h3 className="font-script text-4xl sm:text-5xl text-[#783832] mt-1 mb-6">
                      Parents of the Couple
                    </h3>

                    <div className="grid gap-8 sm:grid-cols-2 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#bfa15f]/25">
                      <div className="pt-4 sm:pt-0">
                        <p className="font-display text-xs uppercase tracking-[0.2em] text-[#8b685e] font-semibold mb-3">
                          Parents of the Groom
                        </p>
                        <ul className="space-y-1.5 font-cormorant text-2xl font-semibold text-[#5a2722]">
                          {parents.groom.map((name) => (
                            <li key={name}>{name}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6 sm:pt-0">
                        <p className="font-display text-xs uppercase tracking-[0.2em] text-[#8b685e] font-semibold mb-3">
                          Parents of the Bride
                        </p>
                        <ul className="space-y-1.5 font-cormorant text-2xl font-semibold text-[#5a2722]">
                          {parents.bride.map((name) => (
                            <li key={name}>{name}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Principal Sponsors */}
                <ScrollReveal animation="fade-up" delayMs={200}>
                  <div className="luxury-card rounded-3xl p-8 sm:p-10">
                    <div className="text-center mb-8">
                      <span className="font-display text-xs uppercase tracking-[0.3em] text-[#bfa15f] font-semibold">
                        Godparents
                      </span>
                      <h3 className="font-script text-4xl sm:text-5xl text-[#783832] mt-1">
                        Principal Sponsors
                      </h3>
                      <p className="font-serif text-sm italic text-[#664338] mt-1">
                        To stand as witnesses to our sacred covenant before God
                      </p>
                      <FloralDivider className="mt-3 scale-90" />
                    </div>

                    <div className="mx-auto max-w-2xl grid sm:grid-cols-2 gap-x-8 gap-y-4">
                      {principalSponsors.map((pair, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3 rounded-xl bg-[#fdf8f5] border border-[#bfa15f]/20 sm:col-span-2"
                        >
                          <span className="font-cormorant text-xl font-semibold text-[#5a2722]">
                            {pair.male}
                          </span>
                          <span className="text-xs text-[#bfa15f] font-display uppercase tracking-widest px-2">
                            &amp;
                          </span>
                          <span className="font-cormorant text-xl font-semibold text-[#5a2722] text-right">
                            {pair.female}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            )}

            {/* SECTION: BRIDAL PARTY */}
            {(activeTab === "all" || activeTab === "bridal-party") && (
              <div className="space-y-8">
                {/* Best Man & Maid of Honor */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <ScrollReveal animation="fade-right" delayMs={150}>
                    <div className="luxury-card rounded-2xl p-6 sm:p-8 text-center h-full">
                      <span className="font-display text-xs uppercase tracking-[0.2em] text-[#bfa15f] font-semibold">
                        Brotherhood &amp; Counsel
                      </span>
                      <h4 className="font-script text-4xl text-[#783832] mt-1 mb-2">Best Man</h4>
                      <p className="font-cormorant text-2xl font-bold text-[#5a2722]">
                        {secondary.bestMan}
                      </p>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal animation="fade-left" delayMs={200}>
                    <div className="luxury-card rounded-2xl p-6 sm:p-8 text-center h-full">
                      <span className="font-display text-xs uppercase tracking-[0.2em] text-[#bfa15f] font-semibold">
                        Sisterhood &amp; Devotion
                      </span>
                      <h4 className="font-script text-4xl text-[#783832] mt-1 mb-2">Maid of Honor</h4>
                      <p className="font-cormorant text-2xl font-bold text-[#5a2722]">
                        {secondary.maidOfHonor}
                      </p>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Groomsmen & Bridesmaids */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <ScrollReveal animation="fade-right" delayMs={180}>
                    <div className="luxury-card rounded-2xl p-6 sm:p-8 h-full">
                      <div className="text-center mb-4">
                        <h4 className="font-script text-3xl text-[#783832]">Groomsmen</h4>
                        <p className="font-display text-[11px] uppercase tracking-wider text-[#8b685e]">
                          To guide and stand with the groom
                        </p>
                      </div>
                      <ul className="space-y-2 text-center font-cormorant text-xl font-medium text-[#5a2722]">
                        {secondary.groomsmen.map((name) => (
                          <li key={name} className="py-1 border-b border-[#bfa15f]/15 last:border-0">
                            {name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal animation="fade-left" delayMs={240}>
                    <div className="luxury-card rounded-2xl p-6 sm:p-8 h-full">
                      <div className="text-center mb-4">
                        <h4 className="font-script text-3xl text-[#783832]">Bridesmaids</h4>
                        <p className="font-display text-[11px] uppercase tracking-wider text-[#8b685e]">
                          To accompany and celebrate with the bride
                        </p>
                      </div>
                      <ul className="space-y-2 text-center font-cormorant text-xl font-medium text-[#5a2722]">
                        {secondary.bridesmaids.map((name) => (
                          <li key={name} className="py-1 border-b border-[#bfa15f]/15 last:border-0">
                            {name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            )}

            {/* SECTION: SECONDARY SPONSORS & HONOR ATTENDANTS */}
            {(activeTab === "all" || activeTab === "attendants") && (
              <div className="space-y-8">
                {/* Candle, Veil, Cord */}
                <ScrollReveal animation="fade-up" delayMs={150}>
                  <div className="luxury-card rounded-3xl p-8 sm:p-10">
                    <div className="text-center mb-6">
                      <span className="font-display text-xs uppercase tracking-[0.3em] text-[#bfa15f] font-semibold">
                        Sacred Rites
                      </span>
                      <h3 className="font-script text-4xl text-[#783832] mt-1">Secondary Sponsors</h3>
                      <FloralDivider className="mt-2 scale-90" />
                    </div>

                    <div className="grid gap-6 sm:grid-cols-3 text-center">
                      <div className="p-4 rounded-2xl bg-[#fdf8f5] border border-[#bfa15f]/25">
                        <h5 className="font-cormorant text-2xl font-bold text-[#783832]">Candle</h5>
                        <p className="font-serif text-xs italic text-[#8b685e] mb-3">
                          {secondary.candle.description}
                        </p>
                        <ul className="font-serif text-sm font-medium text-[#5a2722] space-y-1">
                          {secondary.candle.names.map((n) => (
                            <li key={n}>{n}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#fdf8f5] border border-[#bfa15f]/25">
                        <h5 className="font-cormorant text-2xl font-bold text-[#783832]">Veil</h5>
                        <p className="font-serif text-xs italic text-[#8b685e] mb-3">
                          {secondary.veil.description}
                        </p>
                        <ul className="font-serif text-sm font-medium text-[#5a2722] space-y-1">
                          {secondary.veil.names.map((n) => (
                            <li key={n}>{n}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#fdf8f5] border border-[#bfa15f]/25">
                        <h5 className="font-cormorant text-2xl font-bold text-[#783832]">Cord</h5>
                        <p className="font-serif text-xs italic text-[#8b685e] mb-3">
                          {secondary.cord.description}
                        </p>
                        <ul className="font-serif text-sm font-medium text-[#5a2722] space-y-1">
                          {secondary.cord.names.map((n) => (
                            <li key={n}>{n}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Bearers, Mini Groom & Flower Girls */}
                <div className="grid gap-6 sm:grid-cols-3">
                  {/* Bearers */}
                  <ScrollReveal animation="fade-up" delayMs={100}>
                    <div className="luxury-card rounded-2xl p-6 text-center h-full">
                      <h4 className="font-script text-3xl text-[#783832] mb-3">Bearers</h4>
                      <div className="space-y-4">
                        {secondary.bearers.map((b) => (
                          <div key={b.role}>
                            <p className="font-display text-[11px] font-semibold uppercase tracking-wider text-[#8b685e]">
                              {b.role}
                            </p>
                            <p className="font-serif text-xs italic text-[#664338]/80">{b.symbol}</p>
                            <p className="font-cormorant text-lg font-bold text-[#5a2722] mt-0.5">
                              {b.names.join(", ")}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Mini Groom */}
                  <ScrollReveal animation="fade-up" delayMs={180}>
                    <div className="luxury-card rounded-2xl p-6 text-center flex flex-col justify-center h-full">
                      <span className="font-display text-xs uppercase tracking-[0.2em] text-[#bfa15f] font-semibold">
                        Honorary Little Gentleman
                      </span>
                      <h4 className="font-script text-3xl text-[#783832] mt-1 mb-2">Mini Groom</h4>
                      <p className="font-cormorant text-2xl font-bold text-[#5a2722]">
                        {secondary.miniGroom}
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Flower Girls */}
                  <ScrollReveal animation="fade-up" delayMs={240}>
                    <div className="luxury-card rounded-2xl p-6 text-center h-full">
                      <span className="font-display text-xs uppercase tracking-[0.2em] text-[#bfa15f] font-semibold">
                        Sweet Blossoms
                      </span>
                      <h4 className="font-script text-3xl text-[#783832] mt-1 mb-1">
                        {secondary.flowerGirls.role}
                      </h4>
                      <p className="font-serif text-xs italic text-[#8b685e] mb-3">
                        {secondary.flowerGirls.symbol}
                      </p>
                      <ul className="font-cormorant text-lg font-bold text-[#5a2722] space-y-1">
                        {secondary.flowerGirls.names.map((name) => (
                          <li key={name}>{name}</li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
