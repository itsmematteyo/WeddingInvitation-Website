"use client";

import { useEffect, useState } from "react";
import { FloralDivider } from "../ui/BotanicalMotifs";

type Props = { target: string };

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms / 3_600_000) % 24),
    minutes: Math.floor((ms / 60_000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
    isPassed: ms <= 0,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown({ target }: Props) {
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    const end = new Date(target).getTime();
    const immediate = setTimeout(() => setT(diff(end)), 0);
    const id = setInterval(() => setT(diff(end)), 1000);
    return () => {
      clearTimeout(immediate);
      clearInterval(id);
    };
  }, [target]);

  const units = [
    { label: "Days", value: t ? String(t.days) : "--" },
    { label: "Hours", value: t ? pad(t.hours) : "--" },
    { label: "Minutes", value: t ? pad(t.minutes) : "--" },
    { label: "Seconds", value: t ? pad(t.seconds) : "--", isSec: true },
  ];

  return (
    <div
      role="timer"
      aria-label="Countdown to Kelvin and Janine's Wedding"
      className="mx-auto max-w-2xl text-center"
    >
      <div className="mb-4">
        <span className="font-display text-xs uppercase tracking-[0.3em] text-[#783832] font-semibold">
          Counting Down to Forever
        </span>
        <FloralDivider className="mt-2 scale-90" />
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6">
        {units.map((u) => (
          <div
            key={u.label}
            className="group relative flex flex-col items-center justify-center rounded-2xl border border-[#bfa15f]/40 bg-white/85 p-3.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#bfa15f] hover:shadow-md sm:p-5"
          >
            {/* Top gold corner accent */}
            <span className="absolute top-1.5 left-1.5 h-1.5 w-1.5 rounded-full bg-[#bfa15f]/40" />
            <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[#bfa15f]/40" />

            <div className="font-cormorant text-3xl font-semibold tracking-tight text-[#783832] sm:text-5xl md:text-6xl tabular-nums">
              {u.value}
            </div>

            <div className="mt-1 font-display text-[10px] font-medium uppercase tracking-[0.2em] text-[#8b685e] sm:text-xs">
              {u.label}
            </div>

            {u.isSec && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[#bfa15f] animate-pulse" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
