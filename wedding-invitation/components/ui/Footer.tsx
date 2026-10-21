import { wedding } from "@/data/wedding";

export default function Footer() {
  return (
    <footer className="bg-section-rose px-6 py-10 text-center">
      <p className="font-script text-4xl text-rose-ink">
        {wedding.groom} &amp; {wedding.bride}
      </p>
      <p className="mt-2 font-sans text-sm text-rose-ink">
        {wedding.dateLabel} · San Pablo City
      </p>
    </footer>
  );
}
