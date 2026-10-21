import React from "react";

export default function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 my-4 ${className}`}>
      <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#bfa15f]/60 to-[#bfa15f]" />
      <span className="text-[#bfa15f] text-sm">✦</span>
      <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent via-[#bfa15f]/60 to-[#bfa15f]" />
    </div>
  );
}
