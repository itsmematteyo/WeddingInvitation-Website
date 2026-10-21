import { parents, principalSponsors, secondary as s } from "@/data/sponsors";
import { wedding } from "@/data/wedding";
import ScriptHeading from "@/components/ui/ScriptHeading";

function Group({ title, names }: { title: string; names: readonly string[] }) {
  return (
    <div className="text-center">
      <h4 className="font-sans text-base font-semibold text-rose-ink">{title}</h4>
      <ul className="mt-1 font-serif text-base font-medium leading-7 text-rose-ink">
        {names.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

type Side = { label: string; names: readonly string[] };

function Pair({ left, right }: { left: Side; right: Side }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {[left, right].map((side) => (
        <div key={side.label} className="text-center">
          <h4 className="font-serif text-base uppercase text-rose-ink">{side.label}</h4>
          <ul className="mt-1 font-serif text-base font-medium leading-7 text-rose-ink">
            {side.names.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function Entourage() {
  return (
    <section id="entourage" className="scroll-mt-16 bg-watercolor relative px-6 py-20 md:py-28">
      {/* Floral border strip: replace with custom decor art in public/decor */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#b87a74] to-transparent md:w-14"
      />

      <div className="mx-auto max-w-4xl space-y-12">
        {/* Parents */}
        <div>
          <ScriptHeading divider>
            {wedding.groomSurname} - {wedding.brideSurname}
          </ScriptHeading>
          <p className="mt-2 text-center font-serif text-lg font-semibold uppercase text-rose-ink">Nuptial</p>
          <div className="mt-6">
            <Pair
              left={{ label: "Parents of the Groom", names: parents.groom }}
              right={{ label: "Parents of the Bride", names: parents.bride }}
            />
          </div>
        </div>

        {/* Principal sponsors */}
        <div>
          <ScriptHeading>Principal Sponsors</ScriptHeading>
          <p className="mt-1 text-center font-sans text-base font-semibold text-rose-ink">To stand as witness to our vows</p>
          <div className="mx-auto mt-4 grid max-w-xl gap-x-10 font-serif text-base font-medium leading-7 text-rose-ink sm:grid-cols-2">
            <ul className="sm:text-right">
              {principalSponsors.map((p) => (
                <li key={p.male}>{p.male}</li>
              ))}
            </ul>
            <ul>
              {principalSponsors.map((p) => (
                <li key={p.female}>{p.female}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Secondary sponsors */}
        <div className="space-y-8">
          <div>
            <ScriptHeading>Secondary Sponsors</ScriptHeading>
            <p className="mt-1 text-center font-sans text-base font-semibold text-rose-ink">To assist us in our needs</p>
          </div>

          <Pair
            left={{ label: "Best Man", names: [s.bestMan] }}
            right={{ label: "Maid of Honor", names: [s.maidOfHonor] }}
          />

          <p className="text-center font-sans text-base font-semibold text-rose-ink">To guide us in our way ahead</p>
          <Pair
            left={{ label: "Groomsmen", names: s.groomsmen }}
            right={{ label: "Bridesmaids", names: s.bridesmaids }}
          />

          <Group title="To light our path" names={s.candle} />

          <div className="grid gap-6 sm:grid-cols-2">
            <Group title="To clothe us as one" names={s.veil} />
            <Group title="To bind us together" names={s.cord} />
          </div>

          {s.bearers.map((b) => (
            <Group key={b.role} title={b.role} names={b.names} />
          ))}

          <div className="text-center">
            <h4 className="font-serif text-base uppercase text-rose-ink">Mini Groom</h4>
            <p className="font-serif text-base font-medium text-rose-ink">{s.miniGroom}</p>
          </div>

          <Group title="To shower our aisle with flowers" names={s.flowerGirls} />
        </div>
      </div>
    </section>
  );
}
