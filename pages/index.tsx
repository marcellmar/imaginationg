import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';

const floorWork = [
  ['Bring the pressure', 'The messy issue comes in raw: delay, reorg, AI rollout, customer friction, vendor confusion, stalled decision.'],
  ['Break down the tape', 'We pull apart handoffs, incentives, old bets, missing owners, and the places where the work keeps losing speed.'],
  ['Run the reps', 'The read gets worked into a map, memo, source packet, stop sign, or next move small enough to use.'],
  ['Leave with a move', 'One owner, one decision, one path to test, one bad path to avoid before the week gets away.'],
];

const indexNotes = [
  ['Database', '1,100-plus company reads across public markets, sectors, failures, pivots, and pressure points.'],
  ['Signal', 'The part of work still hurting after everyone gets smarter and busier.'],
  ['Lens', 'Seven pressure points: decisions, errors, knowledge, talent, lock-in, capital, and learning speed.'],
  ['Use', 'A clearer read, a sharper map, or a next move while there is still space to turn.'],
];

const Home: NextPage = () => {
  return (
    <>
      <SEOHead
        title="GPI Studio | Growing pains leave signals."
        description="GPI Studio reads growing pains before they harden into operating problems. Public company reads, decision maps, and consulting work from the same studio floor."
        ogImage="/images/og/home-growing-pains.png"
      />

      <Head>
        <meta name="theme-color" content="#f7f2e8" />
      </Head>

      <div className="gpi-page">
        <Navigation currentPage="home" />

        <main>
          <section className="gpi-shell py-12 md:py-16">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_0.62fr] lg:items-center">
              <div>
                <div className="gpi-kicker mb-5">GPI Studio</div>
                <h1 className="max-w-4xl text-5xl font-bold leading-tight text-stone-950 md:text-7xl">
                  Growing pains aren't random. They leave signals.
                </h1>
                <div className="mt-8 max-w-2xl gpi-prose text-stone-800">
                  <p>
                    Bring the messy operating pressure: stalled decision, AI rollout, reorg drag, customer friction.
                  </p>
                  <p className="mt-5">
                    GPI Studio breaks down the tape and turns the read into a move small enough to use this week.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm uppercase">
                  <Link href="/intake" className="gpi-link">Bring a growing pain</Link>
                  <Link href="/insights" className="gpi-link">Read the tape</Link>
                  <Link href="/studio" className="gpi-link">Enter the studio</Link>
                </div>
              </div>

              <div className="mx-auto w-full max-w-[360px] lg:max-w-[390px]">
                <Image
                  src="/images/maps/home-supply-chain-pressure-map-satori.png"
                  alt="Sample GPI Studio pressure map for a supply-chain line stoppage"
                  width={640}
                  height={820}
                  priority
                  className="h-auto w-full"
                />
              </div>
            </div>

            <div className="mt-10 max-w-5xl border-y border-stone-300 py-5">
              <div className="mb-5 font-mono text-xs font-bold uppercase text-red-800">
                On The Tape
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <Link
                  href="/insights/gpi-analyses/openai-vs-anthropic-agent-wars"
                  className="block border-t border-stone-300 pt-4 text-stone-950 transition-colors hover:border-stone-950"
                >
                  <div className="font-mono text-xs font-bold uppercase text-stone-600">
                    Smackdown
                  </div>
                  <div className="mt-3 text-2xl font-bold leading-tight">
                    The Agent Wars: OpenAI vs Anthropic
                  </div>
                  <p className="mt-3 text-base leading-7 text-stone-700">
                    Your team wants the speed, but the first real question is permission. Who lets the agent touch the work, who owns the miss, and which tasks are too expensive to break?
                  </p>
                  <div className="mt-4 font-mono text-sm font-bold uppercase text-stone-700">
                    Read the smackdown
                  </div>
                </Link>

                <Link
                  href="/insights/gpi-analyses/agent-receipts-workplace-trust"
                  className="block border-t border-stone-300 pt-4 text-stone-950 transition-colors hover:border-stone-950"
                >
                  <div className="font-mono text-xs font-bold uppercase text-stone-600">
                    Field Note
                  </div>
                  <div className="mt-3 text-2xl font-bold leading-tight">
                    Agent Receipts
                  </div>
                  <p className="mt-3 text-base leading-7 text-stone-700">
                    Finance will ask what the agent changed, who approved it, and why the answer moved. If the trail is missing, trust turns into another meeting.
                  </p>
                  <div className="mt-4 font-mono text-sm font-bold uppercase text-stone-700">
                    Read the field note
                  </div>
                </Link>
              </div>
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
            <div className="gpi-shell grid gap-10 py-12 lg:grid-cols-[1.35fr_0.85fr] lg:items-start md:py-16">
              <div>
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

                <div className="grid gap-5 md:grid-cols-2">
                  {indexNotes.map(([name, detail]) => (
                    <div key={name} className="border-t border-stone-400 pt-4">
                      <div className="font-mono text-xs font-bold uppercase text-stone-500">
                        {name}
                      </div>
                      <p className="mt-3 text-lg leading-8 text-stone-800">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-stone-400 pt-5 lg:mt-1">
                <div className="gpi-kicker mb-3">Use The Index</div>
                <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                  Start with the pressure point.
                </h2>
                <div className="gpi-prose mt-5 text-stone-800">
                  <p>
                    Thirty-two questions turn the broad feeling into a first read: decision drag, error cleanup, trapped knowledge, talent stuck in the wrong place, old commitments, capital weight, or slow learning.
                  </p>
                  <p className="mt-5">
                    Not the whole answer. Just enough to know which part of the system deserves the first look.
                  </p>
                  <Link href="/diagnostic" className="gpi-link mt-6 inline-block">
                    Find the pressure point
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="gpi-rule">
            <div className="gpi-shell py-12 md:py-16">
              <div className="mb-8 max-w-3xl">
                <div className="gpi-kicker mb-3">Work With The Studio</div>
                <h2 className="text-3xl font-bold md:text-5xl">Bring the pressure. Grind it into a move.</h2>
                <p className="mt-5 text-lg leading-8 text-stone-700">
                  The studio runs like a floor process. The rough thing comes in, gets watched from every angle, gets worked against the GPI lens, and leaves with a move the owner can actually make.
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
