import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';

const mapFamilies = [
  ['Path / timeline', 'The real path of the work, the waits, and the gates carrying the decision.'],
  ['Dependency / ownership map', 'Control, outside control, and the handoffs most likely to get risky.'],
  ['Company card', 'A compact read on terrain, pressure, useful moves, danger moves, and what to watch next.'],
  ['Scenario cube', 'A way to compare speed, cost, control, risk, and learning before the room falls in love with one path.'],
  ['Decision tree', 'The branch logic, consequences, and stop points that should be named before the decision hardens.'],
  ['Operating weather', 'A living read on pressure, delay, demand, risk, and capacity across the work.'],
];

const MapsPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Maps | GPI Studio"
        description="GPI maps make the shape of a decision visible."
        ogImage="/images/og/framework.png"
      />

      <div className="gpi-page">
        <Navigation currentPage="maps" />

        <main>
          <section className="gpi-shell py-12 md:py-16">
            <div className="gpi-kicker mb-5">Maps</div>
            <h1 className="max-w-4xl text-5xl font-bold leading-tight text-stone-950 md:text-7xl">
              A map gives the room something real to point at.
            </h1>
            <p className="mt-8 max-w-3xl gpi-prose text-stone-800">
              Most hard decisions feel foggy because the shape is still hidden. The path is in one person&apos;s head. The risk is in another person&apos;s spreadsheet. The ownership line is somewhere nobody wants to say out loud.
            </p>
            <p className="mt-5 max-w-3xl gpi-prose text-stone-800">
              A GPI map puts enough of that on the table to make the next move cleaner.
            </p>
          </section>

          <section className="gpi-rule">
            <div className="gpi-shell py-12 md:py-16">
              <div className="mb-8">
                <div className="gpi-kicker mb-3">Proof</div>
                <h2 className="text-3xl font-bold md:text-5xl">Examples from the working system.</h2>
              </div>

              <div className="space-y-12">
                <figure>
                  <div className="border border-stone-300 bg-stone-100 p-2">
                    <Image
                      src="/images/maps/arqaios-allie-deployment-path-2026-06-05.png"
                      alt="ALLIE deployment path dependency map"
                      width={1800}
                      height={1200}
                      className="h-auto w-full"
                    />
                  </div>
                  <figcaption className="mt-3 font-mono text-xs leading-6 text-stone-600">
                    Dependency map. The useful question was not whether the supplier could move fast. It was what the client would own after the prototype worked.
                  </figcaption>
                </figure>

                <figure>
                  <div className="border border-stone-300 bg-stone-100 p-2">
                    <Image
                      src="/images/maps/crocs-company-baseball-card-sone-2026-06-05.png"
                      alt="Crocs company baseball card operating read"
                      width={1400}
                      height={1000}
                      className="h-auto w-full"
                    />
                  </div>
                  <figcaption className="mt-3 font-mono text-xs leading-6 text-stone-600">
                    Company card. Not a profile. A quick operating read: terrain, health, pressure, useful move, danger move, and what to watch.
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>

          <section className="gpi-rule">
            <div className="gpi-shell py-12 md:py-16">
              <div className="mb-8 max-w-3xl">
                <div className="gpi-kicker mb-3">Map families</div>
                <h2 className="text-3xl font-bold md:text-5xl">The map changes with the question.</h2>
              </div>

              <table className="gpi-table text-sm md:text-base">
                <tbody>
                  {mapFamilies.map(([name, text]) => (
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
                <div className="gpi-kicker mb-3">Private by default</div>
                <h2 className="text-3xl font-bold leading-tight md:text-4xl">The most useful map is usually not public.</h2>
              </div>
              <div className="gpi-prose text-stone-800">
                <p>
                  The public examples are cleaned up. Real client maps usually include the uncomfortable parts: ownership gaps, vendor dependence, timing risk, political constraints, and the move nobody wants to name too early.
                </p>
                <p>
                  That is why the map works. It lets the room look at the same thing without pretending the decision is cleaner than it is.
                </p>
                <Link href="/work" className="gpi-link">Bring a decision to the work</Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default MapsPage;
