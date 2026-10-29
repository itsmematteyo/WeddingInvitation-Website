"use client";

import { useState } from "react";
import ScriptHeading from "@/components/ui/ScriptHeading";
import PhotoFrame from "@/components/ui/PhotoFrame";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { FloralCornerGarland } from "@/components/ui/FloralBorders";
import { X, ZoomIn } from "lucide-react";

const photos = [
  {
    id: 1,
    src: "/images/image-13.jpg",
    alt: "Kelvin and Janine walking under evening lights",
    caption: "Until I found you — Stephen Sanchez",
    shape: "rectangle" as const,
    label: "Evening Glow",
    aspect: "aspect-[3/2] min-h-[240px] sm:min-h-[280px]",
    objectPosition: "object-center",
  },
  {
    id: 2,
    src: "/images/image-5.jpg",
    alt: "Kelvin and Janine by the garden resort",
    caption: "Hand in hand towards tomorrow",
    shape: "soft-arch" as const,
    label: "By Grace",
    aspect: "aspect-[3/2] min-h-[240px] sm:min-h-[280px]",
    objectPosition: "object-[center_20%]",
  },
  {
    id: 3,
    src: "/images/image-7.jpg",
    alt: "Kelvin and Janine embracing amidst lush trees",
    caption: "The promise of a lifetime",
    shape: "rectangle" as const,
    label: "Our Yes",
    aspect: "aspect-[3/2] min-h-[240px] sm:min-h-[280px]",
    objectPosition: "object-center",
  },
  {
    id: 4,
    src: "/images/image-8.jpg",
    alt: "Kelvin and Janine along the cobblestone path",
    caption: "In God's perfect timing",
    shape: "soft-arch" as const,
    label: "Two Hearts",
    aspect: "aspect-[3/2] min-h-[240px] sm:min-h-[280px]",
    objectPosition: "object-[center_25%]",
  },
  {
    id: 5,
    src: "/images/image-11.jpg",
    alt: "Kelvin and Janine close embrace and laughter",
    caption: "Joy that overflows",
    shape: "rectangle" as const,
    label: "Shared Joy",
    aspect: "aspect-[3/2] min-h-[240px] sm:min-h-[280px]",
    objectPosition: "object-[center_20%]",
  },
  {
    id: 6,
    src: "/images/image-3.jpg",
    alt: "Kelvin and Janine hand with engagement ring",
    caption: "December 29, 2026",
    shape: "soft-arch" as const,
    label: "Pure Love",
    aspect: "aspect-[3/2] min-h-[240px] sm:min-h-[280px]",
    objectPosition: "object-center",
  },
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[0] | null>(null);

  return (
    <section id="gallery" className="scroll-mt-16 bg-[#faf5f0] px-4 sm:px-6 py-20 md:py-28 relative overflow-hidden">
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
            <ScriptHeading subtitle="Cherished Moments" divider>
              Moments of Us
            </ScriptHeading>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delayMs={100}>
            <p className="mx-auto mt-3 max-w-lg text-center font-serif text-base text-[#664338]">
              Glimpses of the laughter, prayer, and unconditional love that led us to this sacred milestone.
            </p>
          </ScrollReveal>

          {/* Gallery Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {photos.map((photo, idx) => (
              <ScrollReveal
                key={photo.id}
                animation="zoom-in"
                delayMs={idx * 100 + 100}
              >
                <div
                  onClick={() => setSelectedPhoto(photo)}
                  className="cursor-pointer transition-transform duration-300 hover:scale-[1.02] group/item relative"
                  title="Click to view full photo"
                >
                  <PhotoFrame
                    src={photo.src}
                    alt={photo.alt}
                    label={photo.label}
                    caption={photo.caption}
                    shape={photo.shape}
                    className={photo.aspect}
                    objectPosition={photo.objectPosition}
                  />

                  {/* Subtle hover expand pill */}
                  <div className="pointer-events-none absolute bottom-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 text-white/90 text-[11px] font-display uppercase tracking-wider backdrop-blur-sm opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 shadow-md">
                    <ZoomIn className="w-3.5 h-3.5 text-[#e0ca92]" />
                    <span>View</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-3 sm:p-6 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-3xl bg-[#fdf8f5] p-5 sm:p-8 shadow-2xl border-2 border-[#bfa15f]/60 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full bg-white/90 text-[#783832] border border-[#bfa15f]/40 flex items-center justify-center hover:bg-[#783832] hover:text-white transition-all shadow-md"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mt-1">
              <PhotoFrame
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                label={selectedPhoto.label}
                caption={selectedPhoto.caption}
                shape="rectangle"
                className="aspect-[3/2] max-h-[70vh] w-full"
                objectPosition={selectedPhoto.objectPosition}
              />
            </div>

            <div className="mt-5 text-center">
              <h4 className="font-cormorant text-2xl sm:text-3xl font-semibold text-[#783832]">
                {selectedPhoto.label}
              </h4>
              <p className="font-serif text-sm sm:text-base text-[#664338] mt-1.5 italic">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
