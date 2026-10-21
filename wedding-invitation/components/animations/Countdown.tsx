"use client";

import { useEffect, useState } from "react";

type Props = { target: string };

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms / 3_600_000) % 24),
    minutes: Math.floor((ms / 60_000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown({ target }: Props) {
  // Start null so server and client render the same markup (no hydration mismatch).
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    const end = new Date(target).getTime();
    setT(diff(end));
    const id = setInterval(() => setT(diff(end)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const cells = [
    { label: "Days", value: t ? String(t.days) : "--", accent: false },
    { label: "Hours", value: t ? pad(t.hours) : "--", accent: false },
    { label: "Minutes", value: t ? pad(t.minutes) : "--", accent: false },
    { label: "Seconds", value: t ? pad(t.seconds) : "--", accent: true },
  ];

  return (
    <div role="timer" aria-label="Countdown to the wedding" className="text-center">
      <p className="font-sans text-sm font-semibold text-[#3f5b9a]">My countdown</p>
      <div className="mt-1 flex items-start justify-center gap-2 md:gap-3">
        {cells.map((c, i) => (
          <div key={c.label} className="flex items-start gap-2 md:gap-3">
            <div>
              <div
                className={`font-sans text-4xl tabular-nums md:text-5xl ${c.accent ? "text-red-600" : "text-black"}`}
              >
                {c.value}
              </div>
              <div className="font-sans text-[10px] uppercase text-black md:text-xs">{c.label}</div>
            </div>
            {i < cells.length - 1 && <span className="font-sans text-4xl text-black md:text-5xl">:</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
