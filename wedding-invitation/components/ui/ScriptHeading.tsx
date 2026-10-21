import React from "react";
import { FloralDivider } from "./BotanicalMotifs";
import { FloralHeaderGarland } from "./FloralBorders";

type Props = {
  children: React.ReactNode;
  subtitle?: string;
  as?: "h1" | "h2" | "h3";
  divider?: boolean;
  garland?: boolean;
  className?: string;
  light?: boolean;
};

export default function ScriptHeading({
  children,
  subtitle,
  as: Tag = "h2",
  divider = false,
  garland = true,
  className = "",
  light = false,
}: Props) {
  return (
    <div className="text-center relative">
      {garland && (
        <div className="mb-2">
          <FloralHeaderGarland className="scale-90 opacity-80" />
        </div>
      )}
      {subtitle && (
        <p className="mb-1 font-display text-xs font-semibold uppercase tracking-[0.25em] text-[#8b685e]">
          {subtitle}
        </p>
      )}
      <Tag
        className={`font-script text-5xl md:text-6xl lg:text-7xl leading-[1.1] ${
          light ? "text-white drop-shadow-sm" : "text-[#783832]"
        } ${className}`}
      >
        {children}
      </Tag>
      {divider && <FloralDivider className="mt-3" />}
    </div>
  );
}
