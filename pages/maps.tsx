import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';

const mapExamples = [
  {
    label: 'Supply Chain',
    title: 'Line keeps stopping.',
    image: '/images/maps/home-supply-chain-pressure-map-satori.png',
    alt: 'Sample GPI Studio pressure map for a supply-chain line stoppage',
    width: 640,
    height: 820,
    note: 'Output is down. Expedites are up. Every department can still explain its number. The map makes the team stop arguing about blame and put one owner on part readiness.',
  },
  {
    label: 'Deployment',
    title: 'Prototype works. Ownership gets expensive.',
    image: '/images/maps/arqaios-allie-deployment-path-2026-06-05.png',
    alt: 'ALLIE deployment path dependency map',
    width: 1800,
    height: 1200,
    note: 'A demo can make the room nod too early. The map keeps the ugly middle on the table: training, support, maintenance, control, and the bill after launch.',
  },
  {
    label: 'Company Read',
    title: 'Fast read before the room picks a story.',
    image: '/images/maps/crocs-company-baseball-card-sone-2026-06-05.png',
    alt: 'Crocs company card operating read',
    width: 1400,
    height: 1000,
    note: 'Not a profile. A quick operating read before a team falls in love with the easiest story.',
  },
  {
    label: 'Healthcare Admin',
    title: 'Visit is booked. Care still stalls.',
    image: '/images/maps/clinic-admin-map-satori.png',
    alt: 'Sample GPI Studio clinic admin map for scheduling, prior authorization, and payer callback friction',
    width: 1100,
    height: 760,
    note: 'The appointment exists, but the care is not ready. Code mismatch, wrong plan, missing note, payer callback, patient moved again. The map catches the chase before it becomes normal clinic work.',
  },
];

const pressureReads = [
  ['Clean number, dirty work', 'A metric improves while the floor feels heavier.'],
  ['Fast demo, slow ownership', 'A pilot works before the operating burden has a home.'],
  ['Many true stories, one stuck system', 'Every team is right inside its lane while the customer waits.'],
  ['Meeting gravity', 'The decision keeps coming back because no one owns the next cut.'],
];

const MapsPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Maps | GPI Studio"
        description="GPI maps put operating pressure on the table before it turns into another meeting."
        ogImage="/images/og/framework.png"
      />

      <div className="gpi-page">
        <Navigation currentPage="studio" />

        <main>
          <section className="gpi-shell py-12 md:py-16">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_0.7fr] lg:items-center">
              <div>
                <div className="gpi-kicker mb-5">Studio Floor</div>
                <h1 className="max-w-5xl text-5xl font-bold leading-tight text-stone-950 md:text-7xl">
                  The useful map usually annoys the room first.
                </h1>
                <p className="mt-8 max-w-3xl gpi-prose text-stone-800">
                  Good. That means it found the part people keep talking around. Public samples are cleaned up. Real maps carry names, waits, workarounds, half-owned decisions, vendor promises, missing proof, and the part no one wants to write in the status update.
                </p>
                <p className="mt-5 max-w-3xl gpi-prose text-stone-800">
                  If the map works, the next move gets smaller and less dramatic: one owner, one check, one stop, one path to test, one bad habit left on the table.
                </p>
              </div>

              <Image
                src="/images/maps/decision-drag-map-satori.png"
                alt="Sample GPI Studio decision drag map showing risk, data, politics, budget, and no clear owner"
                width={900}
                height={900}
                priority
                className="h-auto w-full"
              />
            </div>
          </section>

          <section className="gpi-rule">
            <div className="gpi-shell py-12 md:py-16">
              <div className="mb-8 max-w-3xl">
                <div className="gpi-kicker mb-3">Map Fuel</div>
                <h2 className="text-3xl font-bold md:text-5xl">Bring the thing with fingerprints on it.</h2>
                <p className="mt-5 text-lg leading-8 text-stone-700">
                  A good map usually starts from a screenshot, a queue, a late shipment, a stuck approval, a bad handoff, a rework pile, or a sentence the team keeps repeating.
                </p>
              </div>

              <table className="gpi-table text-sm md:text-base">
                <tbody>
                  {pressureReads.map(([name, text]) => (
                    <tr key={name}>
                      <th>{name}</th>
                      <td>{text}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="gpi-rule">
            <div className="gpi-shell grid gap-8 py-12 md:grid-cols-[1fr_1.3fr] md:py-16">
              <div>
                <div className="gpi-kicker mb-3">Maps</div>
                <h2 className="text-3xl font-bold leading-tight md:text-4xl">Not a deck. Not a dashboard. A working surface.</h2>
              </div>
              <div className="gpi-prose text-stone-800">
                <p>
                  A map gives the room a hard surface. Put the pressure down, mark the ugly part, leave with a move small enough to try before the next meeting.
                </p>
                <p>
                  Line is down again. Visit is booked, but care still stalls. Pilot looked good, but the work after launch has no home. The map makes the stuck part harder to dodge.
                </p>
              </div>
            </div>
          </section>

          <section className="gpi-rule">
            <div className="gpi-shell py-12 md:py-16">
              <div className="mb-8 max-w-3xl">
                <div className="gpi-kicker mb-3">Samples</div>
                <h2 className="text-3xl font-bold md:text-5xl">Four ways pressure shows up on the table.</h2>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                {mapExamples.map((example) => (
                  <article key={example.label} className="border-t border-stone-400 pt-5">
                    <div className="font-mono text-xs font-bold uppercase text-red-800">
                      {example.label}
                    </div>
                    <h3 className="mt-3 text-3xl font-bold leading-tight text-stone-950">
                      {example.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-stone-700">
                      {example.note}
                    </p>
                    <div className="mt-5 border border-stone-300 bg-stone-100 p-2">
                      <Image
                        src={example.image}
                        alt={example.alt}
                        width={example.width}
                        height={example.height}
                        className="h-auto w-full"
                      />
                    </div>
                  </article>
                ))}
              </div>
              <Link href="/studio" className="gpi-link mt-8 inline-block">Bring a decision to the studio</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default MapsPage;
