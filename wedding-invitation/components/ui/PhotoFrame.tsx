import Image from "next/image";

type Props = {
  src?: string; // e.g. "/images/couple-1.jpg" — leave empty to show a placeholder
  alt: string;
  label?: string;
  className?: string; // sizing, e.g. "aspect-[3/2]"
  tone?: "dark" | "warm" | "green";
};

const tones = {
  dark: "from-neutral-900 to-neutral-700",
  warm: "from-[#e9c9bf] to-[#c99a96]",
  green: "from-[#8aa377] to-[#4f6b43]",
};

export default function PhotoFrame({ src, alt, label, className = "aspect-[3/2]", tone = "warm" }: Props) {
  return (
    <div className="border border-[var(--rose-ink)]/70 p-2">
      <div className={`relative w-full overflow-hidden ${className}`}>
        {src ? (
          <Image src={src} alt={alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        ) : (
          <div
            role="img"
            aria-label={alt}
            className={`absolute inset-0 grid place-items-center bg-gradient-to-br ${tones[tone]}`}
          >
            <span className="text-sm tracking-wide text-white/80">{label ?? "Photo placeholder"}</span>
          </div>
        )}
      </div>
    </div>
  );
}
