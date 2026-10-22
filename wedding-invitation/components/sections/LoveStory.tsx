import { wedding } from "@/data/wedding";
import ScriptHeading from "@/components/ui/ScriptHeading";
import PhotoFrame from "@/components/ui/PhotoFrame";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { FloralCornerGarland } from "@/components/ui/FloralBorders";
import { Heart } from "lucide-react";

export default function LoveStory() {
  return (
    <section id="story" className="scroll-mt-16 bg-[#faf5f0] px-4 sm:px-6 py-20 md:py-28 relative overflow-hidden">
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
            <ScriptHeading subtitle="Our Journey to Forever" divider>
              In God&apos;s Perfect Time
            </ScriptHeading>
          </ScrollReveal>

          {/* Biblical Quote Card */}
          <div className="mx-auto mt-8 max-w-2xl text-center">
            <ScrollReveal animation="zoom-in" delayMs={120}>
              <div className="relative rounded-2xl border border-[#bfa15f]/30 bg-white/80 p-6 sm:p-8 shadow-sm backdrop-blur-sm">
                <span className="font-cormorant italic text-xl sm:text-2xl text-[#5a2722] leading-relaxed block">
                  &ldquo;{wedding.biblicalVerse.text}&rdquo;
                </span>
                <span className="mt-3 block font-display text-xs uppercase tracking-[0.25em] text-[#bfa15f] font-semibold">
                  — {wedding.biblicalVerse.verse}
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Timeline Grid */}
          <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.1fr] items-start">
            {/* Couple Feature Frame */}
            <div className="order-2 lg:order-1 flex justify-center lg:sticky lg:top-28">
              <div className="w-full max-w-lg">
                <ScrollReveal animation="fade-right" delayMs={150}>
                  <PhotoFrame
                    src="/images/image-10.jpg"
                    alt="Kelvin and Janine sitting together under the evening sky"
                    label="Kelvin & Janine"
                    caption="Two Hearts United by Grace"
                    className="aspect-[3/4] min-h-[460px] sm:min-h-[560px]"
                    shape="arch"
                    objectPosition="object-[center_20%]"
                  />
                </ScrollReveal>
              </div>
            </div>

            {/* Milestone Story Steps */}
            <div className="order-1 lg:order-2 space-y-6">
              {wedding.loveStory.map((chapter, index) => (
                <ScrollReveal
                  key={chapter.title}
                  animation="fade-left"
                  delayMs={index * 130}
                >
                  <div className="group relative flex gap-4 rounded-2xl border border-[#bfa15f]/25 bg-white/90 p-5 sm:p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#bfa15f] hover:shadow-md hover:-translate-y-0.5">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f7ebe4] border border-[#bfa15f]/50 text-[#783832] shadow-inner group-hover:scale-110 transition-transform">
                        <Heart className="h-4 w-4 text-[#bfa15f] fill-[#d9aba6]" />
                      </div>
                      {index < wedding.loveStory.length - 1 && (
                        <div className="w-px grow bg-gradient-to-b from-[#bfa15f]/60 to-transparent my-2" />
                      )}
                    </div>

                    <div className="pt-1">
                      <span className="font-display text-[11px] font-semibold uppercase tracking-[0.25em] text-[#bfa15f]">
                        {chapter.year}
                      </span>
                      <h3 className="font-cormorant text-2xl font-semibold text-[#783832] mt-0.5">
                        {chapter.title}
                      </h3>
                      <p className="mt-1.5 font-serif text-sm sm:text-base leading-relaxed text-[#664338]">
                        {chapter.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
