import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';

const lineage = [
  {
    ground: 'Army signal',
    work: 'Radio gear, field limits, bad assumptions, tired people, and plans meeting weather, distance, equipment, and time.',
    carried: 'A plan has to survive outside the briefing.',
  },
  {
    ground: 'Geography / GIS',
    work: 'Cities, networks, maps, land, movement, money, and people changing the answer once place gets involved.',
    carried: 'Every decision lives somewhere real.',
  },
  {
    ground: 'China sourcing',
    work: 'Factory visits, samples, vendors, customs, freight, telecom partners, late changes, and promises crossing time zones.',
    carried: 'A clean answer still has to pass through people, boxes, ports, and phones.',
  },
  {
    ground: 'Remote patient monitoring',
    work: 'Blood pressure devices, wireless connections, packaging, logistics, clinical workflows, compliance, support calls, and uptime.',
    carried: 'The device is only one piece of the promise.',
  },
  {
    ground: 'Public-sector maps',
    work: 'Certification flows, finance trackers, priority lists, inspection work, patient tracking, and delays with public consequences.',
    carried: 'A map has to help someone decide.',
  },
  {
    ground: 'Training / CI',
    work: 'Technical training, phased rollouts, standard work, operator readiness, and change inside production environments.',
    carried: 'People need a path they can actually use.',
  },
  {
    ground: 'GPI / gpi.db',
    work: 'Company records, daily notes, snapshots, maps, audits, client reads, and old observations kept close enough to argue with each other.',
    carried: 'The next read starts with the last one still on the table.',
  },
];

const proof = [
  ['17 cities', 'Public agencies, factories, classrooms, logistics networks, and client work.'],
  ['4 continents', 'Work shaped by countries, markets, and operating cultures moving at different speeds.'],
  ['4,500+ students', 'Curriculum and management training delivered across seven years in China.'],
  ['5,000+ devices', 'Remote blood pressure monitors taken from sourcing to deployment.'],
  ['99.7% uptime', 'Health-tech operations where a missed reading could turn into a real problem.'],
  ['City systems', 'Asset control, certification flows, priority tracking, finance tracking, and inspections.'],
  ['Supply chains', 'Dry, LTL, reefer, air, sea, customs, vendors, packaging, and production paths.'],
  ['Training plans', 'Role definition, course goals, deployment, readiness, and evaluation loops.'],
];

const AboutPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="About | GPI Studio"
        description="GPI Studio came from factories, city systems, sourcing work, training, health-tech operations, and years spent reading the gap between plans and real work."
      />

      <div className="gpi-page">
        <Navigation currentPage="about" />

        <main className="gpi-shell py-14 md:py-20">
          <section className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-start">
            <div>
              <p className="gpi-kicker">About</p>
              <h1 className="mt-4 text-5xl leading-none md:text-7xl">
                The studio came from standing inside the gap.
              </h1>
            </div>

            <div className="gpi-prose max-w-3xl">
              <p>
                I learned this work in the places where clean plans meet real days: factories, city offices, classrooms, warehouses, clinics, ports, support calls, and production floors.
              </p>
              <p className="mt-5">
                A sample looks fine until production has to repeat it. A map makes sense on the wall while the delay sits with one clerk, one form, one missing step. A device leaves a warehouse and becomes a promise to a patient.
              </p>
              <p className="mt-5">
                GPI Studio came from those reps. Find the person close to the break, pull the records near the story, compare the pattern against the tape wall, and make the next move easier to see.
              </p>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">Lineage</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  These are the old reps behind the current studio floor.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="gpi-table">
                  <thead>
                    <tr>
                      <th>Ground</th>
                      <th>Work</th>
                      <th>Carried forward</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lineage.map((item) => (
                      <tr key={item.ground}>
                        <td className="w-44 font-mono text-sm font-bold text-stone-950">{item.ground}</td>
                        <td className="text-sm leading-6 text-stone-800">{item.work}</td>
                        <td className="text-sm leading-6 text-stone-700">{item.carried}</td>
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
                <p className="gpi-kicker">Proof of work</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  The numbers are receipts. They keep the story tied to real consequences.
                </p>
              </div>

              <div className="grid gap-px border-y border-stone-300 bg-stone-300 md:grid-cols-2">
                {proof.map(([metric, detail]) => (
                  <div key={metric} className="bg-[#f7f2e8] p-5">
                    <div className="font-mono text-sm font-bold text-stone-950">{metric}</div>
                    <p className="mt-2 text-sm leading-6 text-stone-700">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">Now</p>
              </div>
              <div className="gpi-prose max-w-3xl">
                <p>
                  Now the work looks like a buyer calling the same supplier for the third time, a manager opening a tracker nobody else trusts, or an owner asking for a number and watching everyone get careful.
                </p>
                <p className="mt-5">
                  The studio stays with the thing in front of everyone first. Then the notes, records, maps, old reads, and nearby evidence come close enough to see which story holds up.
                </p>
                <p className="mt-5">
                  Sometimes the pressure needs a map. Sometimes a memo, company read, or clean stop. If nobody can use it, throw it away.
                </p>
              </div>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="flex flex-col gap-4 font-mono text-sm md:flex-row md:items-center">
              <Link className="gpi-link" href="/gpi-framework">Read the lens</Link>
              <Link className="gpi-link" href="/studio">Enter the studio</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AboutPage;
