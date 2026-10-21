import { wedding } from "@/data/wedding";
import Countdown from "@/components/animations/Countdown";

export default function Rsvp() {
  const { deadline, contactPerson, phone, phoneHref, altContact } = wedding.rsvp;
  return (
    <section className="bg-section-rose relative overflow-hidden px-6 py-14 md:py-20">
      {/* Line-art florals: replace with custom decor in public/decor */}
      <div aria-hidden className="absolute -left-10 top-1/3 h-48 w-48 rounded-full border border-rose-ink/20" />
      <div aria-hidden className="absolute -right-10 top-0 h-56 w-56 rounded-full border border-rose-ink/20" />

      <div className="relative mx-auto max-w-xl text-center text-rose-soft">
        <h2 className="font-script text-5xl">RSVP</h2>
        <p className="mt-3 text-lg leading-7">
          We have reserved <span className="inline-block w-10 border-b border-current" aria-label="blank" /> seat/s
          <br />
          in your honor. Kindly respond by
          <br />
          {deadline}. Message me at{" "}
          <a href={phoneHref} className="underline underline-offset-2">
            {phone}
          </a>
          <br />
          Contact Person: {contactPerson}
          <br />
          {altContact}
        </p>

        <div className="mt-10">
          <Countdown target={wedding.isoDateTime} />
        </div>
      </div>
    </section>
  );
}
