import Image from "next/image";
import { wedding } from "@/data/wedding";

// Put a photo at public/images/hero.jpg and set HERO_SRC to "/images/hero.jpg" to use it.
const HERO_SRC: string | null = null;

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center justify-center overflow-hidden">
      {HERO_SRC ? (
        <Image src={HERO_SRC} alt="Kelvin and Janine" fill priority className="object-cover" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-[#9db08a] via-[#7f9770] to-[#5b7550]" />
      )}
      <div className="absolute inset-0 bg-white/45" aria-hidden />

      <div className="relative px-6 text-center">
        <h1 className="font-script text-cocoa text-7xl leading-[0.95] md:text-9xl">
          {wedding.groom} &amp;
          <br />
          <span className="ml-16 md:ml-32">{wedding.bride}</span>
        </h1>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-cocoa md:text-base">
          {wedding.tagline}
        </p>
        <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-cocoa md:text-base">
          {wedding.dateLabel} <span className="mx-2">|</span> Golden Rich
        </p>
        <p className="text-sm font-semibold uppercase tracking-widest text-cocoa md:text-base">
          Saint Francis Subd., Brgy. San Francisco San Pablo City
        </p>
      </div>
    </section>
  );
}
