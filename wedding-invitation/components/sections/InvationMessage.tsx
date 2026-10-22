import { wedding } from "@/data/wedding";
import { CornerFlourish, FloralDivider, WaxSeal } from "@/components/ui/BotanicalMotifs";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PhotoFrame from "@/components/ui/PhotoFrame";

export default function InvitationMessage() {
  const { heading, lines } = wedding.invitation;

  return (
    <section id="invitation" className="scroll-mt-16 bg-watercolor px-4 sm:px-6 py-20 md:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal animation="flip-in" delayMs={50}>
          {/* Luxury Letterpress Invitation Suite */}
          <div className="relative rounded-3xl border border-[#bfa15f]/40 bg-white/90 p-8 sm:p-12 md:p-16 shadow-xl backdrop-blur-md">
            {/* Ornate Corner Flourishes */}
            <div className="absolute top-4 left-4">
              <CornerFlourish position="top-left" />
            </div>
            <div className="absolute top-4 right-4">
              <CornerFlourish position="top-right" />
            </div>
            <div className="absolute bottom-4 left-4">
              <CornerFlourish position="bottom-left" />
            </div>
            <div className="absolute bottom-4 right-4">
              <CornerFlourish position="bottom-right" />
            </div>

            <div className="mx-auto max-w-2xl text-center">
              {/* Wax Seal */}
              <div className="flex justify-center -mt-16 sm:-mt-20 mb-6">
                <ScrollReveal animation="zoom-in" delayMs={150}>
                  <WaxSeal className="hover:scale-105 transition-transform" />
                </ScrollReveal>
              </div>

              <ScrollReveal animation="fade-down" delayMs={100}>
                <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-[#8b685e]">
                  Official Nuptial Invitation
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delayMs={180}>
                <h2 className="font-script text-5xl sm:text-6xl text-[#783832] mt-2 mb-2 leading-tight">
                  {heading}
                </h2>
              </ScrollReveal>

              <ScrollReveal animation="zoom-in" delayMs={220}>
                <FloralDivider className="my-4" />
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delayMs={260}>
                <div className="mt-6 space-y-3 font-serif text-lg sm:text-xl leading-relaxed text-[#5a2722]">
                  {lines.map((line, i) => (
                    <p key={i} className="tracking-wide">
                      {line}
                    </p>
                  ))}
                </div>
              </ScrollReveal>

              {/* Featured Couple Photo Frame */}
              <div className="mt-8 mx-auto w-full max-w-md sm:max-w-lg md:max-w-xl">
                <ScrollReveal animation="zoom-in" delayMs={300}>
                  <PhotoFrame
                    src="/images/image-1.jpg"
                    alt="Kelvin and Janine"
                    label="Kelvin & Janine"
                    caption="Together in Holy Matrimony"
                    className="aspect-[3/2] min-h-[260px] sm:min-h-[340px] md:min-h-[380px]"
                    shape="soft-arch"
                    objectPosition="object-center"
                  />
                </ScrollReveal>
              </div>

              <ScrollReveal animation="fade-up" delayMs={340}>
                <div className="mt-8 pt-6 border-t border-[#bfa15f]/25">
                  <p className="font-script text-4xl text-[#783832]">
                    {wedding.groom} &amp; {wedding.bride}
                  </p>
                  <p className="mt-1 font-display text-xs uppercase tracking-[0.25em] text-[#8b685e]">
                    December 29, 2026 · San Pablo City
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
