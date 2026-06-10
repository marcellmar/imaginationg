import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';

const plates = [
  ['Quick Read', 'One call feels bigger than its size.', 'Short memo, red flags, next choices, clean stop if needed.'],
  ['Decision Map', 'Too many vendors, approvals, files, names, dates.', 'Diagram, notes behind it, likely paths, first move.'],
  ['Next Move Plan', 'A pilot, build, sourcing path, or operating change needs edges.', 'Bounded plan, owner list, stop points, source packet.'],
];

const Home: NextPage = () => {
  return (
    <>
      <SEOHead
        title="GPI Studio | Where plans meet the floor."
        description="GPI Studio starts with the person close to the problem, then checks records, audits, diagrams, and the Russell 1000 corpus."
        ogImage="/images/og/home.png"
      />

      <Head>
        <meta name="theme-color" content="#f7f2e8" />
      </Head>

      <div className="gpi-page">
        <Navigation currentPage="home" />

        <main>
          <section className="gpi-shell py-12 md:py-16">
            <div className="gpi-kicker mb-5">GPI Studio</div>
            <h1 className="max-w-4xl text-5xl font-bold leading-tight text-stone-950 md:text-7xl">
              We start where the plan hits the person doing the work.
            </h1>
            <div className="mt-8 max-w-3xl gpi-prose text-stone-800">
              <p>
                A printer gets a file from a good customer at 4:18 p.m. The color looks fine on their screen, wrong on the press, and the person who can fix it left early for a school pickup.
              </p>
              <p className="mt-5">
                Sales promised tomorrow. Production needs a clean file. Accounting sees margin slipping by the minute. The owner only hears the machine sitting quiet while everyone acts polite.
              </p>
              <p className="mt-5">
                We start there, then compare the loose pieces against the Russell 1000 corpus: filings, snapshots, audits, client memos, old notes. The pattern usually shows up before the pitch does.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm">
              <Link href="/insights" className="gpi-link">Read</Link>
              <Link href="/gpi-framework" className="gpi-link">Lens</Link>
              <Link href="/maps" className="gpi-link">Maps</Link>
              <Link href="/signal" className="gpi-link">Signal</Link>
              <Link href="/work" className="gpi-link">Work</Link>
            </div>
          </section>

          <section className="gpi-rule">
            <div className="gpi-shell grid gap-8 py-10 md:grid-cols-[1.1fr_1.4fr] md:py-14">
              <div>
                <div className="gpi-kicker mb-3">Start Point</div>
                <p className="text-2xl leading-snug text-stone-950">
                  Bring the part people already know is off.
                </p>
              </div>
              <div className="gpi-prose text-stone-800">
                <p>
                  In the print shop, nobody needs a workshop to know the job is going sideways. The press is quiet, sales is checking the clock, and the customer still thinks tomorrow is fine.
                </p>
                <p className="mt-5">
                  The useful answer is probably sitting with the person who has seen this file problem before.
                </p>
                <p className="mt-5">
                  We start there, then follow the mess back through the inbox, estimate, handoff, schedule, and machine time.
                </p>
              </div>
            </div>
          </section>

          <section className="gpi-rule">
            <div className="gpi-shell py-12 md:py-16">
              <div className="mb-8 max-w-3xl">
                <div className="gpi-kicker mb-3">Comparison Set</div>
                <h2 className="text-3xl font-bold leading-tight md:text-5xl">Small shop, bigger pattern.</h2>
                <p className="mt-5 text-lg leading-8 text-stone-700">
                  The print owner sees one quiet press. Public companies leave bigger footprints when the same kind of delay spreads through approvals, staffing, contracts, systems, or old bets.
                </p>
                <p className="mt-5 text-lg leading-8 text-stone-700">
                  We check those footprints before calling the problem simple. Sometimes the shop needs a cleaner handoff. Sometimes the file is only where the deeper wait finally showed up.
                </p>
              </div>

              <table className="gpi-table text-sm md:text-base">
                <tbody>
                  <tr>
                    <th>Universe</th>
                    <td>The Russell 1000, used as evidence instead of loose reference.</td>
                  </tr>
                  <tr>
                    <th>Count</th>
                    <td>1,160 snapshots, with second passes when early material looked thin.</td>
                  </tr>
                  <tr>
                    <th>Checks</th>
                    <td>Weak items get marked before they become client-facing.</td>
                  </tr>
                  <tr>
                    <th>Use</th>
                    <td>Stronger cases become memos, diagrams, stop signs, or sourcing paths.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="gpi-rule">
            <div className="gpi-shell py-12 md:py-16">
              <div className="mb-8 max-w-3xl">
                <div className="gpi-kicker mb-3">Work With Us</div>
                <h2 className="text-3xl font-bold md:text-5xl">Leave with the smallest useful shape.</h2>
                <p className="mt-5 text-lg leading-8 text-stone-700">
                  Send the messy version: timing, money, people, document, customer, system, risk. The rough parts usually hold the clue.
                </p>
                <p className="mt-5 text-lg leading-8 text-stone-700">
                  We turn the loose pieces into one page, diagram, memo, source packet, or clean no. No ceremony needed.
                </p>
              </div>

              <table className="gpi-table text-sm md:text-base">
                <thead>
                  <tr>
                    <th>Offer</th>
                    <th>Use when</th>
                    <th>Expect</th>
                  </tr>
                </thead>
                <tbody>
                  {plates.map(([name, use, expect]) => (
                    <tr key={name}>
                      <td className="font-bold">{name}</td>
                      <td>{use}</td>
                      <td>{expect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm">
                <Link href="/intake" className="gpi-link">Start intake</Link>
                <Link href="/maps" className="gpi-link">See samples</Link>
                <a className="gpi-link" href="mailto:marcus@gpi.studio">Email Marcus</a>
              </div>
            </div>
          </section>
        </main>

        <footer className="gpi-rule">
          <div className="gpi-shell flex flex-col gap-3 py-8 font-mono text-xs text-stone-600 md:flex-row md:items-center md:justify-between">
            <div>marcus@gpi.studio</div>
            <div>marcus@gpi.studio · gpi.studio</div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
