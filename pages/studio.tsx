import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';

const studioPath = [
  ['Catch the signal', 'Start with the repeat pain: slow call, protected miss, bad handoff, customer drag, vendor fog, or team habit.'],
  ['Map the pressure', 'Put the path, owner, wait, cost, old promise, and tradeoff where everyone can point at the same thing.'],
  ['Work the move', 'Turn the read into a memo, map, source packet, stop sign, or next step small enough to use this week.'],
];

const mapFamilies = [
  ['Path / timeline', 'The real route of the work, the waits, and the gates carrying the decision.'],
  ['Dependency / ownership map', 'Who controls what, who waits on whom, and which handoff can get expensive.'],
  ['Company card', 'A compact read on terrain, pressure, useful moves, danger moves, and what to watch next.'],
  ['Decision tree', 'The branch logic, consequences, and stop points to name before the choice hardens.'],
];

const outputs = [
  ['Pressure read', 'What keeps repeating, where the energy leak sits, and why the surface story feels too clean.'],
  ['Signal map', 'The path, owner, constraint, and risk laid out so the team can argue with the same evidence.'],
  ['Next move', 'One useful move, one owner, one test, and one path to avoid before the week gets away.'],
  ['Language', 'A cleaner way to name the issue so Monday morning skips the same debate.'],
];

const StudioPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Studio | GPI Studio"
        description="Bring the live growing pain. GPI Studio catches the signal, maps the pressure, and works it into a move someone can use."
        ogImage="/images/og/services.svg"
      />

      <div className="gpi-page">
        <Navigation currentPage="studio" />

        <main>
          <section className="gpi-shell py-12 md:py-16">
            <div className="gpi-kicker mb-5">Studio</div>
            <h1 className="max-w-4xl text-5xl font-bold leading-tight text-stone-950 md:text-7xl">
              Bring the pressure. Work the map.
            </h1>
            <div className="mt-8 max-w-3xl gpi-prose text-stone-800">
              <p>
                You already know the feeling. The team keeps moving, the calendar stays full, the dashboard has plenty of color, and the same hard thing keeps walking back into the day.
              </p>
              <p className="mt-5">
                The studio starts there. Send the plain version: supplier, invoice, customer, deadline, file, queue, tool, team habit, or stuck call. The rough parts usually carry the signal.
              </p>
              <p className="mt-5">
                Then we catch the signal, map the pressure, and work the move until it has handles: one clean read, one owner, one next step, one bad path avoided.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm uppercase">
              <Link href="/intake" className="gpi-link">Bring a growing pain</Link>
              <Link href="/signal" className="gpi-link">Find the signal</Link>
              <a className="gpi-link" href="mailto:marcus@gpi.studio">Email Marcus</a>
            </div>
          </section>

          <section className="gpi-rule">
            <div className="gpi-shell grid gap-8 py-12 md:grid-cols-[0.9fr_1.4fr] md:py-16">
              <div>
                <div className="gpi-kicker mb-3">How The Floor Works</div>
                <h2 className="text-3xl font-bold leading-tight md:text-4xl">Signal, map, move. Same floor, three reps.</h2>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {studioPath.map(([name, detail], index) => (
                  <div key={name} className="border-t border-stone-400 pt-4">
                    <div className="font-mono text-xs font-bold uppercase text-stone-500">Rep {index + 1}</div>
                    <h3 className="mt-3 text-2xl font-bold leading-tight text-stone-950">{name}</h3>
                    <p className="mt-3 text-base leading-7 text-stone-700">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="gpi-rule">
            <div className="gpi-shell grid gap-8 py-12 md:grid-cols-[0.9fr_1.4fr] md:py-16">
              <div>
                <div className="gpi-kicker mb-3">Signal</div>
                <h2 className="text-3xl font-bold leading-tight md:text-4xl">Start where the work keeps spending energy.</h2>
              </div>
              <div className="gpi-prose text-stone-800">
                <p>
                  Signal is the first rep. It points to the part of the system carrying the most drag: decision latency, error correction, knowledge location, talent flow, structural lock-in, capital intensity, or knowledge velocity.
                </p>
                <p className="mt-5">
                  Use it when the pressure is real but the name is fuzzy. The score helps you see where to start before the work gets turned into another broad discussion.
                </p>
                <Link href="/signal" className="gpi-link">Find the signal</Link>
              </div>
            </div>
          </section>

          <section className="gpi-rule">
            <div className="gpi-shell grid gap-8 py-12 md:grid-cols-[0.9fr_1.4fr] md:py-16">
              <div>
                <div className="gpi-kicker mb-3">Maps</div>
                <h2 className="text-3xl font-bold leading-tight md:text-4xl">A map gives the team something real to point at.</h2>
              </div>
              <div>
                <div className="grid gap-5 md:grid-cols-2">
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
                      Dependency map. What the client owns after the prototype works.
                    </figcaption>
                  </figure>

                  <figure>
                    <div className="border border-stone-300 bg-stone-100 p-2">
                      <Image
                        src="/images/maps/crocs-company-baseball-card-sone-2026-06-05.png"
                        alt="Crocs company card operating read"
                        width={1400}
                        height={1000}
                        className="h-auto w-full"
                      />
                    </div>
                    <figcaption className="mt-3 font-mono text-xs leading-6 text-stone-600">
                      Company card. Terrain, pressure, useful move, danger move, and what to watch.
                    </figcaption>
                  </figure>
                </div>

                <table className="gpi-table mt-8 text-sm">
                  <tbody>
                    {mapFamilies.map(([name, text]) => (
                      <tr key={name}>
                        <th>{name}</th>
                        <td>{text}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Link href="/maps" className="gpi-link mt-6 inline-block">See more map samples</Link>
              </div>
            </div>
          </section>

          <section className="gpi-rule">
            <div className="gpi-shell grid gap-8 py-12 md:grid-cols-[0.9fr_1.4fr] md:py-16">
              <div>
                <div className="gpi-kicker mb-3">What You Leave With</div>
                <h2 className="text-3xl font-bold leading-tight md:text-4xl">Usable output beats a heavy deck.</h2>
              </div>
              <div>
                <table className="gpi-table text-sm">
                  <tbody>
                    {outputs.map(([name, detail]) => (
                      <tr key={name}>
                        <th>{name}</th>
                        <td>{detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm uppercase">
                  <Link href="/intake" className="gpi-link">Bring the pressure</Link>
                  <Link href="/gpi-framework" className="gpi-link">Read the lens</Link>
                  <Link href="/insights" className="gpi-link">Read the tape</Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default StudioPage;
