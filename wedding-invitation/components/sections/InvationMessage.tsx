import { wedding } from "@/data/wedding";
import PhotoFrame from "@/components/ui/PhotoFrame";

export default function InvitationMessage() {
  const { heading, lines } = wedding.invitation;
  return (
    <section id="invitation" className="scroll-mt-16 bg-watercolor px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div className="text-center text-cocoa">
          <h2 className="text-lg uppercase tracking-wide md:text-xl">{heading}</h2>
          <p className="mt-6 text-lg leading-8 md:text-xl">
            {lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
        <PhotoFrame alt="Kelvin and Janine seated back to back" label="Couple photo (landscape)" tone="dark" className="aspect-[4/3]" />
      </div>
    </section>
  );
}
