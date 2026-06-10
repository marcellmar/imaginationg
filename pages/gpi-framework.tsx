import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';

const states = [
  {
    score: '1-3',
    name: 'Field State',
    route: '/gpi-framework/field-state',
    read: 'The person close to the shelf, counter, line, or inbox can still change the day.',
    useful: 'Good for a rough pass, fast note, or fix small enough to try.',
  },
  {
    score: '4-6',
    name: 'Transitioning',
    route: '/gpi-framework/transition-state',
    read: 'The old answer still works in places, then slows the work without warning.',
    useful: 'A map can show which habit still helps and which one drags.',
  },
  {
    score: '7-10',
    name: 'Particle State',
    route: '/gpi-framework/particle-state',
    read: 'Small changes pass through contracts, layers, assets, and old promises.',
    useful: 'Start narrow, or the fix becomes theater.',
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
  ['Find the person', 'Someone saw the shopper pause, the invoice stall, the machine wait, or the customer leave.'],
  ['Name the old win', 'We look for the move people still defend because it once saved the day.'],
  ['Listen for the excuse', 'The repeated line usually points to the drag people learned to protect.'],
  ['Pick a first step', 'Small enough to try, clear enough to change behavior.'],
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
        description="The GPI lens starts with the pain people work around, then checks old lessons, current pressure, and the next usable step."
        ogImage="/images/og/framework.png"
      />

      <div className="gpi-page">
        <Navigation currentPage="framework" />

        <main className="gpi-shell py-14 md:py-20">
          <section className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-start">
            <div>
              <p className="gpi-kicker">Lens</p>
              <h1 className="mt-4 text-5xl leading-none md:text-7xl">
                We start with the person who watched it happen.
              </h1>
            </div>

            <div className="gpi-prose max-w-3xl">
              <p>
                A man stands at a rental car counter after a delayed flight. He booked online, prepaid, gave his license twice, and still watches the clerk hunt through three screens while the line behind him gets quiet.
              </p>
              <p className="mt-5">
                The clerk knows which screen lies. The manager knows which fleet count runs stale after 6 p.m. The customer only knows his kid is waiting at baggage claim and the brand now feels slower than the trip.
              </p>
              <p className="mt-5">
                Inside the company, someone already knows where the promise breaks. Maybe branch operations, pricing, fleet, product, or support. Someone has watched the same customer smile politely, take the keys, and never come back.
              </p>
              <p className="mt-5">
                We would find the branch person first. Before another app refresh, loyalty push, dashboard, or new leader explains the turnaround, find the person who knows where the wait begins.
              </p>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">First Pass</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  We start where the choice actually happened.
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
                  A number helps people hold the read. We still care more about the pause, walkaway, delay, and part of the business forcing people to wait.
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
                  Clean plans usually break in the same few places.
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
                  A company can look strong on paper while the ground under the worker changes.
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
                  We use these when the story sounds clean but daily friction keeps showing up.
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
                  The work becomes something small enough to use: memo, map, watch note, or company read.
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
              <Link className="gpi-link" href="/maps">See diagrams</Link>
              <Link className="gpi-link" href="/work">Bring a hard call</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default FrameworkPage;
