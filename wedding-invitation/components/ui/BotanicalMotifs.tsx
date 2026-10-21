import React from "react";

export function FloralDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#bfa15f]/60 to-[#bfa15f]" />
      <svg
        aria-hidden
        viewBox="0 0 48 24"
        className="h-5 w-10 text-[#bfa15f]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 12c-4-4-9-4-14-1 2 4 6 5 10 4" />
        <path d="M24 12c4-4 9-4 14-1-2 4-6 5-10 4" />
        <circle cx="24" cy="12" r="2.5" fill="currentColor" />
        <circle cx="16" cy="8" r="1.2" fill="currentColor" />
        <circle cx="32" cy="8" r="1.2" fill="currentColor" />
      </svg>
      <div className="h-px w-16 bg-gradient-to-l from-transparent via-[#bfa15f]/60 to-[#bfa15f]" />
    </div>
  );
}

export function MonogramCrest({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "w-16 h-16 text-lg",
    md: "w-24 h-24 text-2xl",
    lg: "w-32 h-32 text-3xl",
  };

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* Outer decorative ring */}
      <div
        className={`${sizeClasses[size]} relative rounded-full border border-[#bfa15f]/50 p-1 flex items-center justify-center bg-white/70 shadow-sm backdrop-blur-sm`}
      >
        <div className="w-full h-full rounded-full border border-dashed border-[#bfa15f]/70 flex items-center justify-center">
          <span className="font-script text-[#783832] font-semibold tracking-wider select-none">
            K &amp; J
          </span>
        </div>
      </div>
    </div>
  );
}

export function WaxSeal({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center w-20 h-20 rounded-full shadow-lg ${className}`}
      style={{
        background: "radial-gradient(circle at 35% 35%, #a44f47 0%, #783832 60%, #52201b 100%)",
        boxShadow: "0 8px 20px -4px rgba(82, 32, 27, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.3)",
      }}
    >
      <div className="w-16 h-16 rounded-full border border-[#e0b2ac]/40 flex flex-col items-center justify-center text-center">
        <span className="font-script text-white text-2xl drop-shadow-sm">K&amp;J</span>
        <span className="text-[8px] uppercase tracking-widest text-[#f5ddd4] font-display">2026</span>
      </div>
    </div>
  );
}

export function CornerFlourish({
  position = "top-left",
  className = "",
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}) {
  const rotation = {
    "top-left": "",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90",
  }[position];

  return (
    <svg
      aria-hidden
      viewBox="0 0 60 60"
      className={`h-12 w-12 text-[#bfa15f]/40 ${rotation} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M2 2c0 28 8 38 46 44M2 2c28 0 38 8 44 46" />
      <circle cx="22" cy="22" r="2" fill="currentColor" />
      <path d="M12 6c4 4 4 10 0 14M6 12c4 4 10 4 14 0" />
    </svg>
  );
}

export function RibbonBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-[0.2em] bg-[#f7ebe4] text-[#783832] border border-[#d9aba6]/50 shadow-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-[#bfa15f]" />
      {children}
    </span>
  );
}
