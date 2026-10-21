import React from "react";

// Symmetrical top floral garland (roses and olive leaves)
export function FloralHeaderGarland({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 320 50"
      className={`mx-auto h-8 w-64 sm:w-80 text-[#bfa15f] ${className}`}
      fill="none"
      stroke="currentColor"
    >
      {/* Central rose blossom motif */}
      <circle cx="160" cy="22" r="7" fill="#f7ebe4" stroke="#783832" strokeWidth="1.2" />
      <circle cx="160" cy="22" r="4" fill="#d9aba6" stroke="#783832" strokeWidth="1" />
      <path d="M157 20 C159 18, 161 18, 163 20" stroke="#783832" strokeWidth="1" strokeLinecap="round" />

      {/* Left side leaves and trailing stems */}
      <path d="M153 22 C135 22, 110 16, 80 20 C60 23, 40 18, 15 22" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M142 20 C138 14, 130 14, 128 19" fill="#d9aba6" fillOpacity="0.4" strokeWidth="1" />
      <path d="M120 22 C116 27, 108 26, 107 21" fill="#d9aba6" fillOpacity="0.4" strokeWidth="1" />
      <path d="M96 18 C92 12, 84 13, 83 18" fill="#d9aba6" fillOpacity="0.4" strokeWidth="1" />
      <path d="M68 21 C64 26, 56 25, 55 20" fill="#d9aba6" fillOpacity="0.4" strokeWidth="1" />
      <circle cx="100" cy="14" r="2.5" fill="#783832" />
      <circle cx="50" cy="17" r="2" fill="#783832" />

      {/* Right side leaves and trailing stems (mirrored) */}
      <path d="M167 22 C185 22, 210 16, 240 20 C260 23, 280 18, 305 22" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M178 20 C182 14, 190 14, 192 19" fill="#d9aba6" fillOpacity="0.4" strokeWidth="1" />
      <path d="M200 22 C204 27, 212 26, 213 21" fill="#d9aba6" fillOpacity="0.4" strokeWidth="1" />
      <path d="M224 18 C228 12, 236 13, 237 18" fill="#d9aba6" fillOpacity="0.4" strokeWidth="1" />
      <path d="M252 21 C256 26, 264 25, 265 20" fill="#d9aba6" fillOpacity="0.4" strokeWidth="1" />
      <circle cx="220" cy="14" r="2.5" fill="#783832" />
      <circle cx="270" cy="17" r="2" fill="#783832" />
    </svg>
  );
}

// Rich Botanical Corner Garland
export function FloralCornerGarland({
  position = "top-left",
  className = "",
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}) {
  const transform = {
    "top-left": "",
    "top-right": "scale-x-[-1]",
    "bottom-left": "scale-y-[-1]",
    "bottom-right": "scale-[-1]",
  }[position];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      className={`pointer-events-none w-20 h-20 sm:w-28 sm:h-28 text-[#bfa15f] ${transform} ${className}`}
      fill="none"
      stroke="currentColor"
    >
      {/* Corner Outer Border Lines */}
      <path d="M4 35 L4 4 L35 4" stroke="#bfa15f" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 28 L10 10 L28 10" stroke="#bfa15f" strokeWidth="0.8" strokeDasharray="2 2" />

      {/* Main Rose Blossom at corner center */}
      <circle cx="24" cy="24" r="10" fill="#fcf4f0" stroke="#783832" strokeWidth="1.2" />
      <circle cx="24" cy="24" r="6" fill="#d9aba6" stroke="#783832" strokeWidth="1" />
      <circle cx="24" cy="24" r="2.5" fill="#783832" />

      {/* Trailing Leaf Clusters */}
      <path d="M34 20 C42 16, 50 20, 52 28 C45 30, 37 26, 34 20 Z" fill="#d9aba6" fillOpacity="0.35" stroke="#783832" strokeWidth="1" />
      <path d="M20 34 C16 42, 20 50, 28 52 C30 45, 26 37, 20 34 Z" fill="#d9aba6" fillOpacity="0.35" stroke="#783832" strokeWidth="1" />

      {/* Secondary Rose Bud */}
      <ellipse cx="56" cy="18" rx="5" ry="7" fill="#f7ebe4" stroke="#783832" strokeWidth="1" transform="rotate(30 56 18)" />
      <ellipse cx="18" cy="56" rx="7" ry="5" fill="#f7ebe4" stroke="#783832" strokeWidth="1" transform="rotate(30 18 56)" />

      {/* Extended delicate tendrils */}
      <path d="M52 28 C64 34, 76 30, 88 40" stroke="#bfa15f" strokeWidth="1" strokeLinecap="round" />
      <path d="M28 52 C34 64, 30 76, 40 88" stroke="#bfa15f" strokeWidth="1" strokeLinecap="round" />
      <circle cx="70" cy="32" r="1.8" fill="#783832" />
      <circle cx="86" cy="38" r="2.2" fill="#d9aba6" stroke="#783832" strokeWidth="0.8" />
      <circle cx="32" cy="70" r="1.8" fill="#783832" />
      <circle cx="38" cy="86" r="2.2" fill="#d9aba6" stroke="#783832" strokeWidth="0.8" />
    </svg>
  );
}

// Side Trailing Floral Border Strip
export function FloralSideBorder({ side = "left" }: { side?: "left" | "right" }) {
  const isRight = side === "right";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-y-0 ${
        isRight ? "right-0" : "left-0"
      } hidden 2xl:flex flex-col justify-around w-16 opacity-40 z-10 overflow-hidden`}
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 60 180"
          className={`w-14 h-44 text-[#783832] ${isRight ? "scale-x-[-1]" : ""}`}
          fill="none"
          stroke="currentColor"
        >
          {/* Main meandering stem */}
          <path d="M10 0 C25 45, 5 90, 20 135 C30 160, 15 175, 10 180" stroke="#bfa15f" strokeWidth="1.2" strokeLinecap="round" />

          {/* Leaf pairs */}
          <path d="M16 40 C32 30, 42 42, 34 52 C24 50, 18 45, 16 40 Z" fill="#d9aba6" fillOpacity="0.4" stroke="#783832" strokeWidth="0.8" />
          <path d="M12 95 C28 85, 38 97, 30 107 C20 105, 14 100, 12 95 Z" fill="#d9aba6" fillOpacity="0.4" stroke="#783832" strokeWidth="0.8" />

          {/* Rose blossom */}
          <circle cx="20" cy="70" r="6" fill="#fdf8f5" stroke="#783832" strokeWidth="1" />
          <circle cx="20" cy="70" r="3.5" fill="#d9aba6" />
          <circle cx="20" cy="145" r="5" fill="#fdf8f5" stroke="#783832" strokeWidth="1" />
          <circle cx="20" cy="145" r="2.8" fill="#d9aba6" />
        </svg>
      ))}
    </div>
  );
}

// Classical Embossed Stationery Groove Border Container
export function StationeryGrooveFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-3xl p-2 sm:p-3 border border-[#bfa15f]/40 shadow-xl bg-gradient-to-b from-[#fdfbf9] to-[#fbf5f0] ${className}`}
      style={{
        boxShadow:
          "inset 0 0 0 3px #f7efe7, inset 0 0 0 4.5px rgba(191, 161, 95, 0.35), 0 20px 45px -15px rgba(120, 56, 50, 0.12)",
      }}
    >
      {/* Corner floral flourishes */}
      <div className="absolute top-2 left-2 z-10">
        <FloralCornerGarland position="top-left" />
      </div>
      <div className="absolute top-2 right-2 z-10">
        <FloralCornerGarland position="top-right" />
      </div>
      <div className="absolute bottom-2 left-2 z-10">
        <FloralCornerGarland position="bottom-left" />
      </div>
      <div className="absolute bottom-2 right-2 z-10">
        <FloralCornerGarland position="bottom-right" />
      </div>

      <div className="relative z-0 p-4 sm:p-8">{children}</div>
    </div>
  );
}
