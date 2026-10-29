import Image from "next/image";
import { Heart } from "lucide-react";

type Props = {
  src?: string | null;
  alt: string;
  label?: string;
  caption?: string;
  className?: string;
  shape?: "arch" | "rectangle" | "oval" | "soft-arch";
  objectPosition?: string;
  imageStyle?: React.CSSProperties;
  priority?: boolean;
};

export default function PhotoFrame({
  src = "/images/image-test.jpg",
  alt,
  label = "Kelvin & Janine",
  caption,
  className = "aspect-[3/4]",
  shape = "arch",
  objectPosition = "object-center",
  imageStyle,
  priority = false,
}: Props) {
  // Always default to test-image if src is empty or null
  const imageSrc = src || "/images/image-test.jpg";

  const shapeClass = {
    arch: "rounded-t-full rounded-b-2xl",
    "soft-arch": "rounded-t-[3rem] sm:rounded-t-[4rem] rounded-b-2xl",
    rectangle: "rounded-2xl sm:rounded-3xl",
    oval: "rounded-full",
  }[shape];

  return (
    <div className="group relative w-full">
      {/* Outer gilded border */}
      <div
        className={`relative p-2.5 sm:p-3 bg-white/80 shadow-lg backdrop-blur-sm border border-[#bfa15f]/40 ${shapeClass} transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-xl`}
        style={{
          boxShadow:
            "0 15px 35px -10px rgba(120, 56, 50, 0.15), 0 0 0 1px rgba(191, 161, 95, 0.25)",
        }}
      >
        <div
          className={`relative w-full overflow-hidden border border-[#bfa15f]/25 bg-gradient-to-b from-[#fdf8f5] to-[#f4ded4] ${className} ${shapeClass}`}
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={alt}
              fill
              priority={priority}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={`object-cover transition-transform duration-700 group-hover:scale-105 ${objectPosition}`}
              style={imageStyle}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none">
              {/* Decorative background vectors */}
              <div
                aria-hidden
                className="absolute inset-4 rounded-t-full border border-dashed border-[#bfa15f]/40"
              />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/80 border border-[#bfa15f]/50 flex items-center justify-center text-[#783832] shadow-sm mb-3">
                  <Heart className="w-5 h-5 text-[#bfa15f] fill-[#f4ded4]" />
                </div>
                <p className="font-script text-3xl sm:text-4xl text-[#783832] leading-tight">
                  {label}
                </p>
                <p className="mt-2 font-display text-[11px] uppercase tracking-[0.25em] text-[#8b685e]">
                  {caption || "In God's Perfect Time"}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-[#bfa15f]">
                  <span>✦</span>
                  <span className="font-display text-[10px] tracking-wider uppercase text-[#783832]/70">
                    Dec 29, 2026
                  </span>
                  <span>✦</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
