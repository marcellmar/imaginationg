import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';

const plates = [
  {
    name: 'Quick Read',
    use: 'One call feels heavier than its size.',
    delivers: 'A short memo with the snag, red flags, next 2-3 options, and the part staying out of scope.',
    inputs: 'The call, useful links or docs, known constraints, and the date when waiting starts costing money.',
  },
  {
    name: 'Decision Map',
    use: 'Too many suppliers, handoffs, owners, risks, dates, or channel problems sit in one head.',
    delivers: 'A dependency diagram, notes behind it, likely paths, and a recommended next step.',
    inputs: 'Source docs, workflow or product context, vendors or partners, target call, and timing stress.',
  },
  {
    name: 'Next Move Plan',
    use: 'A build, sourcing path, pilot, rollout, or operating change needs a real scope.',
    delivers: 'A bounded plan with first plays, responsibilities, stop points, and client-owned pieces.',
    inputs: 'An existing note or enough context to define the ground without inflating the project.',
  },
];

const boundaries = [
  ['Bring a live question', 'The job needs a constraint, deadline, or repeating headache.'],
  ['Make the output usable', 'Memo, diagram, scope, stop sign, or next step.'],
  ['Leave with ownership', 'You get enough clarity to use the result without me nearby.'],
  ['Keep size honest', 'If the right answer is a small note or clean no, we keep it there.'],
];

const WorkPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Work | GPI Studio"
        description="Bring the messy business call, supplier risk, invoice problem, handoff, or timing issue. GPI Studio turns it into a usable next step."
        ogImage="/images/og/services.svg"
      />

      <div className="gpi-page">
        <Navigation currentPage="work" />

        <main>
          <section className="gpi-shell py-12 md:py-16">
            <div className="gpi-kicker mb-5">Work</div>
            <h1 className="max-w-4xl text-5xl font-bold leading-tight text-stone-950 md:text-7xl">
              Bring the call stuck in your head.
            </h1>
            <div className="mt-8 max-w-3xl gpi-prose text-stone-800">
              <p>
                Skip the pitch deck and send the plain version: supplier, invoice, customer, deadline, file, queue, tool, person.
              </p>
              <p className="mt-5">
                I listen for the moment where the story stops matching Tuesday: someone blames a vendor, someone softens a miss, someone calls a broken handoff normal because it has been around forever.
              </p>
              <p className="mt-5">
                My job is to make the snag visible enough for a memo, diagram, clean stop, or first step with edges.
              </p>
            </div>
          </section>

          <section className="gpi-rule">
            <div className="gpi-shell grid gap-8 py-12 md:grid-cols-[0.9fr_1.4fr] md:py-16">
              <div>
                <div className="gpi-kicker mb-3">The Way In</div>
                <h2 className="text-3xl font-bold leading-tight md:text-4xl">Keep the first call close to the headache.</h2>
              </div>
              <div className="gpi-prose text-stone-800">
                <p>
                  Name the thing causing drag: supplier choice, workflow mess, client issue, product path, team habit, or one person holding too many answers.
                </p>
                <p className="mt-5">
                  Then I pull nearby context and choose the smallest useful shape, which may be one page, a diagram, a plan, or a clean no.
                </p>
              </div>
            </div>
          </section>

          <section className="gpi-rule">
            <div className="gpi-shell grid gap-8 py-12 md:grid-cols-[0.9fr_1.4fr] md:py-16">
              <div>
                <div className="gpi-kicker mb-3">Working Rules</div>
                <h2 className="text-3xl font-bold leading-tight md:text-4xl">Enough truth for the next honest step.</h2>
              </div>
              <div>
                <p className="gpi-prose text-stone-800">
                  We learn only enough for the next honest step.
                </p>
                <table className="gpi-table mt-6 text-sm">
                  <tbody>
                    {boundaries.map(([name, detail]) => (
                      <tr key={name}>
                        <th>{name}</th>
                        <td>{detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="gpi-rule">
            <div className="gpi-shell grid gap-8 py-12 md:grid-cols-[0.9fr_1.4fr] md:py-16">
              <div>
                <div className="gpi-kicker mb-3">Intake</div>
                <h2 className="text-3xl font-bold leading-tight md:text-4xl">Send the version from Tuesday.</h2>
              </div>
              <div>
                <p className="gpi-prose text-stone-800">
                  A useful start is plain: call, hard part, clock, useful result.
                </p>
                <table className="gpi-table mt-6 text-sm">
                  <tbody>
                    <tr>
                      <th>Call</th>
                      <td>The thing you are trying to choose or see clearly.</td>
                    </tr>
                    <tr>
                      <th>Clock</th>
                      <td>The moment waiting starts getting expensive.</td>
                    </tr>
                    <tr>
                      <th>Ground</th>
                      <td>Supplier, process, product, channel, client, market, system, or team.</td>
                    </tr>
                    <tr>
                      <th>Context</th>
                      <td>Relevant links, docs, vendors, failed attempts, constraints, or known politics.</td>
                    </tr>
                    <tr>
                      <th>End state</th>
                      <td>The result making the memo, diagram, or plan worth acting on.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="gpi-rule">
            <div className="gpi-shell grid gap-8 py-12 md:grid-cols-[1fr_1.2fr] md:py-16">
              <div>
                <div className="gpi-kicker mb-3">Start Here</div>
                <h2 className="text-3xl font-bold leading-tight md:text-4xl">A few plain lines are enough.</h2>
              </div>
              <div>
                <div className="gpi-prose text-stone-800">
                  <p>
                    Send the plain version: the call, the hard part, and the thing people keep explaining but never quite fixing.
                  </p>
                  <p>
                    If the question is visible, start intake. If the drag is still hard to name, find the signal first.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <Link
                    href="/intake"
                    className="border border-stone-950 p-5 text-stone-950 transition-colors hover:bg-stone-950 hover:text-white"
                  >
                    <div className="font-mono text-xs font-bold uppercase">Ready to name it</div>
                    <div className="mt-3 text-xl font-bold">Start intake</div>
                    <p className="mt-2 text-sm leading-6 opacity-80">
                      Use this when a call, operating question, or next step needs a cleaner view.
                    </p>
                  </Link>

                  <Link
                    href="/diagnostic"
                    className="border border-stone-300 p-5 text-stone-950 transition-colors hover:border-stone-950"
                  >
                    <div className="font-mono text-xs font-bold uppercase text-stone-600">Still unclear</div>
                    <div className="mt-3 text-xl font-bold">Find the signal</div>
                    <p className="mt-2 text-sm leading-6 text-stone-700">
                      Use this when drag is clear and the name is missing.
                    </p>
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap gap-4 font-mono text-sm">
                  <Link href="/maps" className="gpi-link">See samples</Link>
                  <a className="gpi-link" href="mailto:marcus@gpi.studio">Email Marcus</a>
                </div>
              </div>
            </div>
          </section>

          <section className="gpi-rule">
            <div className="gpi-shell py-12 md:py-16">
              <div className="mb-8 max-w-3xl">
                <div className="gpi-kicker mb-3">Offers</div>
                <h2 className="text-3xl font-bold leading-tight md:text-5xl">Pick the shape the call can carry.</h2>
                <p className="mt-5 text-lg leading-8 text-stone-700">
                  A quick memo stays a memo, a diagram stays a diagram, and a plan needs stop points before spend climbs.
                </p>
              </div>
              <table className="gpi-table text-sm md:text-base">
                <thead>
                  <tr>
                    <th>Offer</th>
                    <th>Use when</th>
                    <th>Expect</th>
                    <th>Bring</th>
                  </tr>
                </thead>
                <tbody>
                  {plates.map((plate) => (
                    <tr key={plate.name}>
                      <td className="font-bold">{plate.name}</td>
                      <td>{plate.use}</td>
                      <td>{plate.delivers}</td>
                      <td>{plate.inputs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default WorkPage;
