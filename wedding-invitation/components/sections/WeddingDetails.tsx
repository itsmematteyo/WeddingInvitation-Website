import { wedding } from "@/data/wedding";
import PhotoFrame from "@/components/ui/PhotoFrame";
import ScriptHeading from "@/components/ui/ScriptHeading";

function PinIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 32" className="h-9 w-7 shrink-0 text-rose-ink" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.2 0 11.7 0 20.5 12 32 12 32s12-11.5 12-20.3C24 5.2 18.6 0 12 0zm0 16.5a4.8 4.8 0 110-9.6 4.8 4.8 0 010 9.6z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg aria-hidden viewBox="0 0 32 32" className="h-9 w-9 shrink-0 text-rose-ink" fill="currentColor">
      <path d="M8 0h3v4h10V0h3v4h5a3 3 0 013 3v22a3 3 0 01-3 3H3a3 3 0 01-3-3V7a3 3 0 013-3h5V0zM3 12v17h26V12H3zm4 3h4v3H7v-3zm7 0h4v3h-4v-3zm7 0h4v3h-4v-3zM7 21h4v3H7v-3zm7 0h4v3h-4v-3z" />
    </svg>
  );
}

export default function WeddingDetails() {
  return (
    <section id="details" className="scroll-mt-16 bg-section-rose px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.1fr]">
        <PhotoFrame alt="Kelvin and Janine embracing" label="Couple photo (portrait)" className="aspect-[2/3]" />

        <div className="text-cocoa">
          <ScriptHeading divider>Wedding Details</ScriptHeading>

          <div className="mt-8 flex gap-4">
            <PinIcon />
            <div>
              <h3 className="font-serif text-xl font-semibold text-rose-ink">Ceremony and Reception</h3>
              <ul className="mt-2 list-disc space-y-3 pl-6 text-xl leading-snug marker:text-rose-ink">
                {wedding.venues.map((v) => (
                  <li key={v.name}>
                    {v.name} {v.city}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <CalendarIcon />
            <div>
              <h3 className="font-serif text-xl font-semibold text-rose-ink">Date and Time</h3>
              <p className="mt-2 text-xl">
                <span className="uppercase">{wedding.dayLabel}</span>, {wedding.dateLabel}, {wedding.timeLabel}
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-rose-ink">
            {wedding.arrivalNote}
          </p>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <PhotoFrame alt="Couple detail" label="Photo" tone="dark" className="aspect-[4/3]" />
            <PhotoFrame alt="Couple at the park" label="Photo" tone="green" className="aspect-[4/3]" />
            <PhotoFrame alt="Couple under the trees" label="Photo" tone="green" className="aspect-[4/3]" />
          </div>
        </div>
      </div>
    </section>
  );
}
