"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import {
  PetalGradients,
  BroadPetalSVG,
  CurledPetalSVG,
  FlutterPetalSVG,
} from "./RealisticPetals";

interface RealisticPetal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  swayX: number;
  variant: "broad" | "curled" | "flutter";
  animClass: string;
}

export default function PetalRain() {
  const [petals, setPetals] = useState<RealisticPetal[]>([]);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // Generate 22 realistic petals with varied 3D tumbling styles
    const items: RealisticPetal[] = Array.from({ length: 22 }).map((_, i) => {
      const variants: ("broad" | "curled" | "flutter")[] = ["broad", "curled", "flutter"];
      const anims = ["petal-anim-1", "petal-anim-2", "petal-anim-3"];

      return {
        id: i,
        left: Math.floor(Math.random() * 95),
        // Negative delay so petals are already mid-flight across the viewport immediately on load
        delay: -(Math.random() * 14),
        duration: 9 + Math.random() * 9, // 9s to 18s duration
        size: 26 + Math.random() * 18, // 26px to 44px realistic size
        swayX: (Math.random() - 0.5) * 140, // Horizontal natural sway
        variant: variants[i % variants.length],
        animClass: anims[i % anims.length],
      };
    });

    const timer = setTimeout(() => {
      setPetals(items);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* SVG Multi-stop Gradients Definition in DOM */}
      <PetalGradients />

      {/* Floating Petals Toggle Indicator (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setEnabled(!enabled)}
          type="button"
          aria-label={enabled ? "Disable realistic petals" : "Enable realistic petals"}
          title={enabled ? "Disable falling petals" : "Enable falling petals"}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-[11px] font-display uppercase tracking-widest transition-all duration-300 shadow-md border backdrop-blur-md ${
            enabled
              ? "bg-white/95 text-[#783832] border-[#bfa15f]/60 hover:bg-[#f7ebe4]"
              : "bg-white/60 text-[#8b685e] border-gray-200 hover:bg-white"
          }`}
        >
          <Sparkles
            className={`w-3.5 h-3.5 ${
              enabled ? "text-[#c83e4d] animate-pulse" : "text-gray-400"
            }`}
          />
          <span className="hidden sm:inline">Petals: {enabled ? "ON" : "OFF"}</span>
        </button>
      </div>

      {/* 3D Falling Petals Viewport */}
      {enabled && (
        <div
          aria-hidden="true"
          className="petal-3d-viewport pointer-events-none fixed inset-0 z-30 overflow-hidden"
        >
          {petals.map((p) => (
            <span
              key={p.id}
              className={`absolute -top-14 block ${p.animClass}`}
              style={
                {
                  left: `${p.left}%`,
                  animationDuration: `${p.duration}s`,
                  animationDelay: `${p.delay}s`,
                  "--sway-x": `${p.swayX}px`,
                } as React.CSSProperties
              }
            >
              {p.variant === "broad" && (
                <BroadPetalSVG width={p.size} height={p.size} />
              )}
              {p.variant === "curled" && (
                <CurledPetalSVG width={p.size * 0.9} height={p.size} />
              )}
              {p.variant === "flutter" && (
                <FlutterPetalSVG width={p.size * 0.85} height={p.size * 1.1} />
              )}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
