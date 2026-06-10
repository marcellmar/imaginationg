import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { getAllSnapshots } from '../../lib/snapshots-content';

interface Company {
  id: string;
  name: string;
  gpiScore: number | null;
  stage: string;
  sector: string;
  ticker: string;
}

interface InsightsPageProps {
  companies: Company[];
  totalCompanies: number;
}

const series = [
  ['/insights/snapshots', 'Snapshots', 'Company reads from the 1,100-plus record pile: state, pressure, next question.'],
  ['/insights/growing-pains', 'Growing Pains', 'Longer reads on good systems getting heavy before the clean report admits it.'],
  ['/insights/field-notes', 'Field Notes', 'Small observations while the thought still has dirt on it.'],
  ['/insights/vital-signs', 'Vital Signs', 'Early signs a company may be changing before the market finds clean language.'],
  ['/insights/smackdowns', 'Smackdowns', 'Two companies under the same pressure, with the operating difference made plain.'],
  ['/insights/calcification-alerts', 'Calcification Alerts', 'Moments when an old habit starts turning into a wall.'],
  ['/insights/autopsies', 'Autopsies', 'After something breaks, look for the warning signs sitting in plain sight.'],
  ['/insights/wildcards', 'Wildcards', 'Odd reads on familiar systems. The kind of thing you remember later in line at a store.'],
  ['/insights/behind-the-map', 'Behind the Map', 'Notes, sources, screenshots, and the path into a usable read.'],
];

const getScoreLabel = (score: number | null) => {
  if (score === null || Number.isNaN(score)) return 'n/a';
  return score.toFixed(1);
};

function stateBucket(state: string) {
  const lower = state.toLowerCase();
  if (lower.includes('field')) return 'Field';
  if (lower.includes('transition')) return 'Transitioning';
  return 'Particle';
}

const InsightsPage: NextPage<InsightsPageProps> = ({ companies, totalCompanies }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCompanies = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const source = query
      ? companies.filter((company) => {
          return (
            company.name.toLowerCase().includes(query) ||
            company.ticker.toLowerCase().includes(query) ||
            company.sector.toLowerCase().includes(query)
          );
        })
      : companies;

    return source.slice(0, query ? 30 : 14);
  }, [companies, searchQuery]);

  const visibleTotal = totalCompanies || companies.length;

  return (
    <>
      <SEOHead
        title="Reads | GPI Studio"
        description="The public training floor for GPI Studio: company reads, field notes, smackdowns, and growing pain signals from the 1,100-company evidence base."
        ogImage="/images/og/insights.png"
      />

      <div className="gpi-page">
        <Navigation currentPage="reads" />

        <main className="gpi-shell py-14 md:py-20">
          <section className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-start">
            <div>
              <p className="gpi-kicker">Reads</p>
              <h1 className="mt-4 text-5xl leading-none md:text-7xl">
                The reads are the reps.
              </h1>
            </div>

            <div className="gpi-prose max-w-3xl">
              <p>
                You learn the studio by watching the work. A company cuts people, a drug launch changes the morning routine, an AI agent touches a real workflow, a customer gets asked to do unpaid labor.
              </p>
              <p className="mt-5">
                Each read is a rep against the same question: where is the growing pain, what signal showed up early, and what would someone do with the read at work today?
              </p>
              <p className="mt-5">
                The 1,100-plus company database is the tape wall. The public reads are how the studio keeps its eyes sharp before a client brings a live problem to the floor.
              </p>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">Public Reps</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  Pick the lane closest to the pressure in front of you.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {series.slice(0, 4).map(([href, lane, use], index) => (
                  <Link key={lane} className="group border-t border-stone-400 pt-4" href={href}>
                    <div className="font-mono text-xs font-bold uppercase text-stone-500">
                      Rep {index + 1}
                    </div>
                    <h2 className="mt-3 text-2xl font-bold leading-tight text-stone-950 group-hover:text-red-800">
                      {lane}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-stone-700">
                      {use}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">Pressure Lanes</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  Some pieces get written while the story still feels wet. The useful read often arrives before the language gets polished.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {series.slice(4).map(([href, lane, use], index) => (
                  <Link key={lane} className="group border-t border-stone-400 pt-4" href={href}>
                    <div className="font-mono text-xs font-bold uppercase text-stone-500">
                      Drill {index + 1}
                    </div>
                    <h2 className="mt-3 text-2xl font-bold leading-tight text-stone-950 group-hover:text-red-800">
                      {lane}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-stone-700">
                      {use}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">Snapshots</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  Search the company tape by name, ticker, or sector. Clean public pages open first. The rest still help as comparison points while the corpus keeps getting shaped.
                </p>
              </div>

              <div>
                <div className="mb-4 flex items-center gap-3 border-y border-stone-300 py-3">
                  <label className="font-mono text-xs font-bold uppercase text-stone-600" htmlFor="company-search">
                    Search
                  </label>
                  <input
                    id="company-search"
                    type="text"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Crocs, Mistral, healthcare, ticker..."
                    className="w-full bg-transparent font-mono text-sm outline-none placeholder:text-stone-500"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="font-mono text-xs text-red-700 underline underline-offset-2"
                    >
                      clear
                    </button>
                  )}
                </div>

                <div className="overflow-x-auto">
                  <table className="gpi-table">
                    <thead>
                      <tr>
                        <th>Company</th>
                        <th>Ticker</th>
                        <th>Sector</th>
                        <th>GPI</th>
                        <th>Stage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredCompanies.map((company) => {
                        return (
                          <tr key={company.id}>
                            <td className="font-mono text-sm font-bold text-stone-950">
                              <Link className="gpi-link" href={`/companies/${company.id}`}>
                                {company.name}
                              </Link>
                            </td>
                            <td className="font-mono text-sm text-stone-700">{company.ticker || '-'}</td>
                            <td className="text-sm text-stone-700">{company.sector || 'Other'}</td>
                            <td className="font-mono text-sm text-stone-950">{getScoreLabel(company.gpiScore)}</td>
                            <td className="text-sm text-stone-700">{company.stage || 'Unknown'}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {filteredCompanies.length === 0 && (
                  <p className="mt-4 text-sm text-stone-700">No matching companies found.</p>
                )}

                <div className="mt-5 font-mono text-xs text-stone-600">
                  Showing {filteredCompanies.length} of {visibleTotal || companies.length || 'many'} company records.
                </div>
              </div>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="flex flex-col gap-4 font-mono text-sm md:flex-row md:items-center">
              <Link className="gpi-link" href="/insights/snapshots">Open snapshots</Link>
              <Link className="gpi-link" href="/studio">Enter the studio</Link>
              <Link className="gpi-link" href="/intake">Bring a growing pain</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<InsightsPageProps> = async () => {
  const companies: Company[] = getAllSnapshots()
    .map((snapshot) => ({
      id: snapshot.slug,
      name: snapshot.name,
      gpiScore: snapshot.gpiScore,
      stage: stateBucket(snapshot.state),
      sector: snapshot.pattern || 'Company snapshot',
      ticker: snapshot.ticker || '',
    }))
    .sort((a, b) => {
      const scoreA = a.gpiScore ?? 10;
      const scoreB = b.gpiScore ?? 10;
      return scoreA - scoreB || a.name.localeCompare(b.name);
    });

  return {
    props: {
      companies,
      totalCompanies: companies.length,
    },
  };
};

export default InsightsPage;
