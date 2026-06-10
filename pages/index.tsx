import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';

const floorWork = [
  ['Bring the pressure', 'The messy issue comes in raw: delay, reorg, AI rollout, customer friction, vendor confusion, stalled decision.'],
  ['Break down the tape', 'We pull apart handoffs, incentives, old bets, missing owners, and the places where the work keeps losing speed.'],
  ['Run the reps', 'The read gets worked into a map, memo, source packet, stop sign, or next move small enough to use.'],
  ['Leave with a move', 'One owner, one decision, one path to test, one bad path to avoid before the week gets away.'],
];

const Home: NextPage = () => {
  return (
    <>
      <SEOHead
        title="GPI Studio | Growing pains leave signals."
        description="GPI Studio reads growing pains before they harden into operating problems. Public company reads, decision maps, and consulting work from the same studio floor."
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
              Growing pains aren't random. They leave signals.
            </h1>
            <div className="mt-8 max-w-3xl gpi-prose text-stone-800">
              <p>
                You feel it before the report catches up. The team is busy, the calendar is full, the tool stack looks modern, and the same decision still keeps circling the table.
              </p>
              <p className="mt-5">
                This is the studio floor. GPI watches companies under pressure, breaks down the tape, names the growing pain, and turns the read into a decision you can use before the system hardens.
              </p>
              <p className="mt-5">
                The public reads are the reps. The consulting work is the film session on your own operating problem: where the signal is, what it means, and what to do next.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm uppercase">
              <Link href="/intake" className="gpi-link">Bring a growing pain</Link>
              <Link href="/insights" className="gpi-link">Read the tape</Link>
              <Link href="/studio" className="gpi-link">Enter the studio</Link>
            </div>
          </section>

          <section className="gpi-rule">
            <div className="gpi-shell grid gap-8 py-10 md:grid-cols-[1.1fr_1.4fr] md:py-14">
              <div>
                <div className="gpi-kicker mb-3">Training Camp</div>
                <p className="text-2xl leading-snug text-stone-950">
                  The studio is where rough signals get worked until they can carry weight.
                </p>
              </div>
              <div className="gpi-prose text-stone-800">
                <p>
                  Every week, the studio studies real companies in motion: layoffs, pricing fights, AI agents, leadership changes, broken acquisitions, strange customer friction, and quiet operating drag.
                </p>
                <p className="mt-5">
                  It works like film. Pause the play. Watch the handoff. Check who had the ball. Look for the moment the system started protecting itself instead of moving the work.
                </p>
                <p className="mt-5">
                  The work has one job: build sharper eyes for the moment your own company starts feeling heavy.
                </p>
              </div>
            </div>
          </section>

          <section className="gpi-rule">
            <div className="gpi-shell py-12 md:py-16">
              <div className="mb-8 max-w-3xl">
                <div className="gpi-kicker mb-3">The Index</div>
                <h2 className="text-3xl font-bold leading-tight md:text-5xl">GPI means Growing Pains Index.</h2>
                <p className="mt-5 text-lg leading-8 text-stone-700">
                  Growing pains show up before the obvious failure: a slow decision, a repeated mistake, knowledge trapped in one person, talent boxed out of the hard work, a past bet making the next move expensive.
                </p>
                <p className="mt-5 text-lg leading-8 text-stone-700">
                  The index comes from more than 1,100 company reads. The studio uses the evidence pile like game tape, so a client problem gets compared against real patterns instead of one person's hunch.
                </p>
                <p className="mt-5 text-lg leading-8 text-stone-700">
                  Lower friction means the company can still learn, move, and correct. Higher friction means the organization may be turning its own weight into a wall.
                </p>
              </div>

              <table className="gpi-table text-sm md:text-base">
                <tbody>
                  <tr>
                    <th>Database</th>
                    <td>1,100-plus company reads across public markets, sectors, failures, pivots, and pressure points.</td>
                  </tr>
                  <tr>
                    <th>Signal</th>
                    <td>The part of work still hurting after everyone gets smarter and busier.</td>
                  </tr>
                  <tr>
                    <th>Lens</th>
                    <td>Seven pressure points: decisions, errors, knowledge, talent, lock-in, capital, and learning speed.</td>
                  </tr>
                  <tr>
                    <th>Use</th>
                    <td>A clearer read, a sharper map, or a next move while there is still space to turn.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="gpi-rule">
            <div className="gpi-shell py-12 md:py-16">
              <div className="mb-8 max-w-3xl">
                <div className="gpi-kicker mb-3">Work With The Studio</div>
                <h2 className="text-3xl font-bold md:text-5xl">Bring the pressure. Grind it into a move.</h2>
                <p className="mt-5 text-lg leading-8 text-stone-700">
                  The studio runs like a floor process. The rough thing comes in, gets watched from every angle, gets worked against the GPI lens, and leaves with a move someone can actually make.
                </p>
                <p className="mt-5 text-lg leading-8 text-stone-700">
                  The light at the end is usually smaller than people want at first: one decision moved closer to the work, one hidden tradeoff named, one bad path avoided.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-4">
                {floorWork.map(([name, description], index) => (
                  <div key={name} className="border-t border-stone-400 pt-4">
                    <div className="font-mono text-xs font-bold uppercase text-stone-500">
                      Rep {index + 1}
                    </div>
                    <h3 className="mt-3 text-2xl font-bold leading-tight text-stone-950">
                      {name}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-stone-700">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm uppercase">
                <Link href="/intake" className="gpi-link">Bring the pressure</Link>
                <Link href="/studio" className="gpi-link">See the studio floor</Link>
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
