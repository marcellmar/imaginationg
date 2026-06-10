import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';

const states = [
  {
    score: '1-3',
    name: 'Field State',
    route: '/gpi-framework/field-state',
    read: 'People close to the shelf, counter, line, or inbox can still change the day.',
    useful: 'Good ground for a fast read, small fix, or clean first rep.',
  },
  {
    score: '4-6',
    name: 'Transitioning',
    route: '/gpi-framework/transition-state',
    read: 'The old answer still helps in places, then slows the work without warning.',
    useful: 'A map can show which habit still helps and which one adds drag.',
  },
  {
    score: '7-10',
    name: 'Particle State',
    route: '/gpi-framework/particle-state',
    read: 'Small changes pass through contracts, layers, assets, and old promises.',
    useful: 'Start narrow, then protect the move from theater.',
  },
];

const dimensions = [
  ['Decision Latency', '/gpi-framework/decision-latency', 'We look for the wait between seeing trouble and changing the day.'],
  ['Error Correction', '/gpi-framework/error-correction', 'We watch whether mistakes get fixed, repeated, hidden, or quietly accepted.'],
  ['Knowledge Location', '/gpi-framework/knowledge-location', 'We find where truth sits: system, crew, file, vendor, manager, or one head.'],
  ['Structural Lock-In', '/gpi-framework/structural-lock-in', 'We check which old promises make a cleaner direction expensive.'],
  ['Talent Flow', '/gpi-framework/talent-flow', 'We look for capable people blocked from hard problems.'],
  ['Capital Intensity', '/gpi-framework/capital-intensity', 'We check plants, stores, tools, debt, inventory, and infrastructure before calling a turn easy.'],
  ['Knowledge Velocity', '/gpi-framework/knowledge-velocity', 'We watch new information become shared understanding, then changed behavior.'],
];

const terrain = [
  ['Grasslands', 'Open ground, fast penalties for waiting.', 'Tech, AI, fast fashion'],
  ['Jungles', 'Growth hiding waste inside busy work.', 'Healthcare, pharma, retail'],
  ['Highlands', 'Strong advantage with costly climbs.', 'TSMC, Costco, luxury'],
  ['Swamps', 'Motion making the job heavier.', 'Utilities, Oracle, SAP'],
  ['Rivers', 'Ground shifting under the crew while work continues.', 'EV, AI infrastructure, energy transition'],
  ['Deserts', 'Old resource base drying up while habits stay proud.', 'Print media, coal, late retail'],
];

const operatingQuestions = [
  ['Old win', 'Which past success still gets a vote?'],
  ['Heavy belief', 'Which once-useful belief now slows the place down?'],
  ['Early clue', 'Which signal shows up before reports catch it?'],
  ['Bad handoff', 'Which approval layer, asset, contract, or habit adds drag?'],
  ['Truth keeper', 'Which person, team, file, or vendor gets called first?'],
  ['Outside ground', 'Which market pace, scarcity, crowding, or nearby shift changed the floor?'],
  ['Reachable step', 'Which map, packet, branch logic, protocol refresh, or stop helps first?'],
];

const lensUses = [
  ['Find the signal', 'Someone saw the shopper pause, the invoice stall, the machine wait, or the customer leave.'],
  ['Pull the tape', 'The 1,100-company database gives the pressure a comparison set before the story gets too clean.'],
  ['Name the old win', 'We look for the move people still defend because it once saved the day.'],
  ['Pick a first rep', 'Small enough to try, clear enough to change behavior.'],
];

const publishingLanes = [
  ['/insights/snapshots', 'Snapshots', 'Short company reads from the floor-level angle.'],
  ['/insights/growing-pains', 'Growing Pains', 'Longer pieces on good firms getting stuck.'],
  ['/insights/vital-signs', 'Vital Signs', 'Small watches when behavior starts shifting.'],
  ['/insights/behind-the-map', 'Behind the Map', 'Messy situations turned into usable diagrams.'],
  ['/insights', 'Reads', 'Notes, observations, and public working reads.'],
];

const FrameworkPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Lens | GPI Studio"
        description="The GPI lens reads growing pains against more than 1,100 company examples, then turns pressure into a usable next move."
        ogImage="/images/og/framework.png"
      />

      <div className="gpi-page">
        <Navigation currentPage="framework" />

        <main className="gpi-shell py-14 md:py-20">
          <section className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-start">
            <div>
              <p className="gpi-kicker">Lens</p>
              <h1 className="mt-4 text-5xl leading-none md:text-7xl">
                The lens turns growing pain into something you can work.
              </h1>
            </div>

            <div className="gpi-prose max-w-3xl">
              <p>
                You already know when the system feels heavy. The same approval comes back, the same handoff misses, the same customer gets patient in the bad way.
              </p>
              <p className="mt-5">
                The lens gives the heaviness a shape. It asks where the delay starts, where the truth lives, which old win still gets a vote, and which part of the company can still move.
              </p>
              <p className="mt-5">
                The 1,100-company database is the tape wall behind the work. Public companies leave big tracks when growing pains harden into bureaucracy, lock-in, slow correction, or wasted talent.
              </p>
              <p className="mt-5">
                GPI uses those tracks to read your pressure without turning it into a sermon. The aim is a clearer view, then one move close enough to the work to use today.
              </p>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">First Pass</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  The first pass keeps the read close to the work.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="gpi-table">
                  <tbody>
                    {lensUses.map(([use, detail]) => (
                      <tr key={use}>
                        <td className="w-56 font-mono text-sm font-bold text-stone-950">{use}</td>
                        <td className="text-sm leading-6 text-stone-700">{detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">Score</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  A number helps people hold the read. The useful part is still the delay, walkaway, repeated mistake, and piece of the business slowing the day.
                </p>
              </div>

              <div>
                <div className="grid grid-cols-3 border-y border-stone-300 font-mono text-xs font-bold text-stone-700">
                  <div className="border-r border-stone-300 p-3">1 fluid</div>
                  <div className="border-r border-stone-300 p-3 text-center">5 mixed signals</div>
                  <div className="p-3 text-right">10 stuck</div>
                </div>
                <div className="mt-5 overflow-x-auto">
                  <table className="gpi-table">
                    <thead>
                      <tr>
                        <th>Score</th>
                        <th>State</th>
                        <th>Read</th>
                        <th>Use</th>
                      </tr>
                    </thead>
                    <tbody>
                      {states.map((state) => (
                        <tr key={state.name}>
                          <td className="font-mono text-sm font-bold text-stone-950">{state.score}</td>
                          <td className="font-mono text-sm font-bold text-stone-950">
                            <Link className="gpi-link" href={state.route}>{state.name}</Link>
                          </td>
                          <td className="text-sm leading-6 text-stone-700">{state.read}</td>
                          <td className="text-sm leading-6 text-stone-700">{state.useful}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">Break Points</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  These are the drills. Most clean plans break in one of these places.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="gpi-table">
                  <thead>
                  <tr>
                    <th>Dimension</th>
                    <th>Check</th>
                  </tr>
                  </thead>
                  <tbody>
                    {dimensions.map(([name, route, question]) => (
                      <tr key={name}>
                        <td className="w-56 font-mono text-sm font-bold text-stone-950">
                          <Link className="gpi-link" href={route}>{name}</Link>
                        </td>
                        <td className="text-sm leading-6 text-stone-700">{question}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">Ground</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  The same move behaves differently on different ground.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="gpi-table">
                  <thead>
                    <tr>
                      <th>Biome</th>
                      <th>Meaning</th>
                      <th>Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    {terrain.map(([biome, physics, examples]) => (
                      <tr key={biome}>
                        <td className="font-mono text-sm font-bold text-stone-950">{biome}</td>
                        <td className="text-sm leading-6 text-stone-700">{physics}</td>
                        <td className="text-sm leading-6 text-stone-700">{examples}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">Clock</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  Two firms can chase one buyer while running on different clocks.
                </p>
              </div>

              <div className="grid gap-px border-y border-stone-300 bg-stone-300 md:grid-cols-2">
                <div className="bg-[#f7f2e8] p-5">
                  <div className="font-mono text-sm font-bold text-stone-950">Moves by flow</div>
                  <p className="mt-2 text-sm leading-6 text-stone-700">
                    Wins by keeping lines moving: volume, speed, distribution, replacement, replenishment. Busy days can hide weak craft for a while.
                  </p>
                  <p className="mt-3 font-mono text-xs text-stone-600">
                    McDonald's / Shein / Amazon retail / fast fashion
                  </p>
                </div>
                <div className="bg-[#f7f2e8] p-5">
                  <div className="font-mono text-sm font-bold text-stone-950">Moves by moat</div>
                  <p className="mt-2 text-sm leading-6 text-stone-700">
                    Wins by protecting quality, trust, scarcity, craft, durability, hard-earned advantage. Trouble starts when an old answer stays in charge after demand changes.
                  </p>
                  <p className="mt-3 font-mono text-xs text-stone-600">
                    Ferrari / TSMC / Berkshire / Costco / luxury goods
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">Questions We Carry</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  These questions keep the read from getting too polished too early.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="gpi-table">
                  <tbody>
                    {operatingQuestions.map(([question, note]) => (
                      <tr key={question}>
                        <td className="w-64 font-mono text-sm font-bold text-stone-950">{question}</td>
                        <td className="text-sm leading-6 text-stone-700">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">Public Shelf</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  The studio keeps publishing reps so the lens stays sharp.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="gpi-table">
                  <tbody>
                    {publishingLanes.map(([href, lane, use]) => (
                      <tr key={lane}>
                        <td className="w-64 font-mono text-sm font-bold text-stone-950">
                          <Link className="gpi-link" href={href}>{lane}</Link>
                        </td>
                        <td className="text-sm leading-6 text-stone-700">{use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="flex flex-col gap-4 font-mono text-sm md:flex-row md:items-center">
              <Link className="gpi-link" href="/insights">See reads</Link>
              <Link className="gpi-link" href="/studio">Bring a hard call</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default FrameworkPage;
