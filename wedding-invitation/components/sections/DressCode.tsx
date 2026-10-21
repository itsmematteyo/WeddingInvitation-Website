import { wedding } from "@/data/wedding";
import ScriptHeading from "@/components/ui/ScriptHeading";

export default function DressCode() {
  const { intro, palette } = wedding.dressCode;
  return (
    <section id="dress-code" className="scroll-mt-16 bg-section-rose px-6 py-16 md:py-20">
      <div className="mx-auto max-w-4xl text-rose-ink">
        <ScriptHeading divider>Dress Code</ScriptHeading>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg">{intro}</p>

        <div className="mt-8 grid items-center gap-8 md:grid-cols-[1fr_auto]">
          {/* Replace with attire illustrations in public/images */}
          <div
            role="img"
            aria-label="Attire illustration placeholder"
            className="grid h-52 place-items-center rounded border border-dashed border-rose-ink/40 text-sm"
          >
            Attire illustration (ladies and gentlemen)
          </div>

          <ul className="w-full space-y-2 md:w-56">
            {palette.map((c) => (
              <li
                key={c.hex}
                className="rounded-md px-3 py-1.5 text-sm text-cocoa shadow-sm"
                style={{ backgroundColor: c.hex }}
              >
                <span className="block font-semibold leading-tight">{c.name}</span>
                <span className="block text-[10px] opacity-70">{c.hex}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 text-center">
          <h3 className="font-script text-3xl">A note on Gifts</h3>
          <p className="mx-auto mt-2 max-w-md text-lg">{wedding.giftNote}</p>
        </div>
      </div>
    </section>
  );
}
