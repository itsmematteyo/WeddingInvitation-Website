"use client";

import { useState } from "react";
import ScriptHeading from "@/components/ui/ScriptHeading";
import PhotoFrame from "@/components/ui/PhotoFrame";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { FloralCornerGarland } from "@/components/ui/FloralBorders";
import { X } from "lucide-react";

const photos = [
  {
    id: 1,
    src: "/images/image-test.jpg",
    alt: "Kelvin and Janine",
    caption: "Until I found you — Stephen Sanchez",
    shape: "rectangle" as const,
    label: "Kelvin & Janine",
  },
  {
    id: 2,
    src: "/images/image-test.jpg",
    alt: "Kelvin and Janine holding hands",
    caption: "Hand in hand towards tomorrow",
    shape: "arch" as const,
    label: "By Grace",
  },
  {
    id: 3,
    src: "/images/image-test.jpg",
    alt: "Kelvin and Janine engagement moment",
    caption: "The promise of a lifetime",
    shape: "rectangle" as const,
    label: "Our Yes",
  },
  {
    id: 4,
    src: "/images/image-test.jpg",
    alt: "Kelvin and Janine walking together",
    caption: "In God's perfect timing",
    shape: "arch" as const,
    label: "Two Hearts",
  },
  {
    id: 5,
    src: "/images/image-test.jpg",
    alt: "Kelvin and Janine laughter and joy",
    caption: "Joy that overflows",
    shape: "rectangle" as const,
    label: "Shared Joy",
  },
  {
    id: 6,
    src: "/images/image-test.jpg",
    alt: "Kelvin and Janine sweet embrace",
    caption: "December 29, 2026",
    shape: "arch" as const,
    label: "Pure Love",
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
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {photos.map((photo, idx) => (
              <ScrollReveal
                key={photo.id}
                animation="zoom-in"
                delayMs={idx * 100 + 100}
              >
                <div
                  onClick={() => setSelectedPhoto(photo)}
                  className="cursor-pointer transition-transform hover:scale-[1.02]"
                >
                  <PhotoFrame
                    src={photo.src}
                    alt={photo.alt}
                    label={photo.label}
                    caption={photo.caption}
                    shape={photo.shape}
                    className="aspect-[4/3]"
                  />
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
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-lg w-full rounded-3xl bg-[#fdf8f5] p-6 shadow-2xl border border-[#bfa15f]/50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 h-9 w-9 rounded-full bg-[#f7ebe4] text-[#783832] flex items-center justify-center hover:bg-[#783832] hover:text-white transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mt-2">
              <PhotoFrame
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                label={selectedPhoto.label}
                caption={selectedPhoto.caption}
                shape={selectedPhoto.shape}
                className="aspect-[4/3]"
              />
            </div>

            <div className="mt-4 text-center">
              <h4 className="font-cormorant text-2xl font-semibold text-[#783832]">
                {selectedPhoto.label}
              </h4>
              <p className="font-serif text-sm text-[#664338] mt-1 italic">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
