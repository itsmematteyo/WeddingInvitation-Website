import React from "react";

export function PetalGradients() {
  return (
    <svg aria-hidden="true" className="absolute w-0 h-0 overflow-hidden" style={{ position: "absolute", width: 0, height: 0 }}>
      <defs>
        {/* Gradient 1: Deep Crimson Velvet */}
        <linearGradient id="roseGradient1" x1="0%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#660e19" stopOpacity="1" />
          <stop offset="30%" stopColor="#a82333" stopOpacity="0.98" />
          <stop offset="70%" stopColor="#d6495a" stopOpacity="0.95" />
          <stop offset="95%" stopColor="#f3929e" stopOpacity="0.92" />
          <stop offset="100%" stopColor="#ffd4da" stopOpacity="0.95" />
        </linearGradient>

        {/* Gradient 2: Rich Dusty Rose */}
        <linearGradient id="roseGradient2" x1="20%" y1="100%" x2="80%" y2="0%">
          <stop offset="0%" stopColor="#7a1c25" stopOpacity="1" />
          <stop offset="35%" stopColor="#b63d4c" stopOpacity="0.98" />
          <stop offset="75%" stopColor="#df6876" stopOpacity="0.94" />
          <stop offset="100%" stopColor="#f8b6bf" stopOpacity="0.92" />
        </linearGradient>

        {/* Gradient 3: Soft Blush & Antique Mauve */}
        <linearGradient id="roseGradient3" x1="10%" y1="100%" x2="90%" y2="0%">
          <stop offset="0%" stopColor="#802a32" stopOpacity="1" />
          <stop offset="40%" stopColor="#c45462" stopOpacity="0.96" />
          <stop offset="80%" stopColor="#e88592" stopOpacity="0.93" />
          <stop offset="100%" stopColor="#fedae0" stopOpacity="0.96" />
        </linearGradient>

        {/* Petal Underbelly Shadow Gradient */}
        <linearGradient id="petalShadow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#40070e" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#851724" stopOpacity="0.2" />
        </linearGradient>

        {/* Petal Rim Highlight */}
        <linearGradient id="rimHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffd6dc" stopOpacity="0.1" />
        </linearGradient>

        {/* Petal Drop Filter */}
        <filter id="petalDepth" x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#540c15" floodOpacity="0.32" />
        </filter>
      </defs>
    </svg>
  );
}

// Variant A: Broad, velvety cupped rose petal with curved curled apex
export function BroadPetalSVG({ width = 36, height = 36 }: { width?: number; height?: number }) {
  return (
    <svg
      viewBox="0 0 44 48"
      width={width}
      height={height}
      style={{ filter: "url(#petalDepth)" }}
      className="overflow-visible"
    >
      {/* Base Petal Body */}
      <path
        d="M22 46 C12 44, 4 35, 3 24 C2 12, 10 3, 20 2 C21.5 2, 22.5 2, 24 2 C34 3, 42 12, 41 24 C40 35, 32 44, 22 46 Z"
        fill="url(#roseGradient1)"
      />

      {/* Inner Petal Concave Shadow (Giving 3D Volume) */}
      <path
        d="M22 43 C15 41, 8 33, 7 23 C6 14, 12 7, 20 6 C21.5 6, 22.5 6, 24 6 C32 7, 38 14, 37 23 C36 33, 29 41, 22 43 Z"
        fill="url(#petalShadow)"
        opacity="0.35"
      />

      {/* Curled Top Edge Fold (Realistic Lip of the Petal) */}
      <path
        d="M14 3 C18 1.5, 26 1.5, 30 3 C34 4.5, 37 8, 35 10 C32 8.5, 26 7, 22 7 C18 7, 12 8.5, 9 10 C7 8, 10 4.5, 14 3 Z"
        fill="url(#rimHighlight)"
      />

      {/* Subtle Vein Radiations */}
      <path
        d="M22 44 C22 34, 22 20, 22 6"
        fill="none"
        stroke="rgba(255, 255, 255, 0.22)"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M22 36 C18 28, 14 20, 10 14"
        fill="none"
        stroke="rgba(255, 255, 255, 0.16)"
        strokeWidth="0.6"
      />
      <path
        d="M22 36 C26 28, 30 20, 34 14"
        fill="none"
        stroke="rgba(255, 255, 255, 0.16)"
        strokeWidth="0.6"
      />
    </svg>
  );
}

// Variant B: Side-profile petal with elegant curl
export function CurledPetalSVG({ width = 34, height = 36 }: { width?: number; height?: number }) {
  return (
    <svg
      viewBox="0 0 40 46"
      width={width}
      height={height}
      style={{ filter: "url(#petalDepth)" }}
      className="overflow-visible"
    >
      {/* Back layer shadow */}
      <path
        d="M18 44 C10 42, 3 34, 4 23 C5 12, 14 4, 24 3 C31 2, 36 6, 37 12 C38 22, 28 42, 18 44 Z"
        fill="url(#roseGradient2)"
      />

      {/* Inside fold catch-light */}
      <path
        d="M18 42 C12 39, 7 31, 8 22 C9 14, 16 7, 23 6 C28 5, 33 8, 32 14 C30 24, 23 38, 18 42 Z"
        fill="url(#petalShadow)"
        opacity="0.38"
      />

      {/* Cupped curled margin */}
      <path
        d="M23 4 C28 5, 34 9, 36 14 C34 12, 29 9, 23 8 C18 8, 12 11, 9 15 C10 10, 15 5, 23 4 Z"
        fill="url(#rimHighlight)"
      />

      {/* Delicate vein */}
      <path
        d="M18 42 C18 30, 20 18, 22 7"
        fill="none"
        stroke="rgba(255, 255, 255, 0.2)"
        strokeWidth="0.7"
      />
    </svg>
  );
}

// Variant C: Fluted aerodynamic petal that twists in the air
export function FlutterPetalSVG({ width = 32, height = 40 }: { width?: number; height?: number }) {
  return (
    <svg
      viewBox="0 0 36 50"
      width={width}
      height={height}
      style={{ filter: "url(#petalDepth)" }}
      className="overflow-visible"
    >
      {/* Wavy aerodynamic body */}
      <path
        d="M18 48 C10 45, 4 37, 3 26 C2 15, 8 5, 18 2 C28 5, 34 15, 33 26 C32 37, 26 45, 18 48 Z"
        fill="url(#roseGradient3)"
      />

      {/* Depth shading */}
      <path
        d="M18 44 C12 41, 7 34, 6 25 C5 16, 10 7, 18 5 C26 7, 30 16, 29 25 C28 34, 24 41, 18 44 Z"
        fill="url(#petalShadow)"
        opacity="0.3"
      />

      {/* Top wavy tip rim highlight */}
      <path
        d="M11 4 C15 2, 21 2, 25 4 C28 6, 29 10, 26 8 C23 6, 17 6, 14 8 C11 10, 9 7, 11 4 Z"
        fill="url(#rimHighlight)"
      />

      {/* Center spinal vein */}
      <path
        d="M18 46 C18 32, 18 16, 18 4"
        fill="none"
        stroke="rgba(255, 255, 255, 0.22)"
        strokeWidth="0.7"
      />
    </svg>
  );
}
