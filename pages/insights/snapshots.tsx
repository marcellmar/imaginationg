import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import type { CompanySnapshot } from '../../lib/snapshots-content';
import { getAllSnapshots } from '../../lib/snapshots-content';

interface SnapshotsPageProps {
  snapshots: CompanySnapshot[];
}

const stateOrder = ['Field', 'Transitioning', 'Particle'];

function stateBucket(state: string) {
  const lower = state.toLowerCase();
  if (lower.includes('field')) return 'Field';
  if (lower.includes('transition')) return 'Transitioning';
  return 'Particle';
}

function scoreColor(score: number) {
  if (score <= 3.5) return 'text-stone-950';
  if (score <= 6.9) return 'text-stone-600';
  return 'text-red-700';
}

const SnapshotsPage: NextPage<SnapshotsPageProps> = ({ snapshots }) => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) return snapshots;

    return snapshots.filter((snapshot) => {
      return [
        snapshot.name,
        snapshot.ticker || '',
        snapshot.state,
        snapshot.pattern,
      ].some((value) => value.toLowerCase().includes(cleanQuery));
    });
  }, [query, snapshots]);

  const grouped = useMemo(() => {
    const groups: Record<string, CompanySnapshot[]> = {
      Field: [],
      Transitioning: [],
      Particle: [],
    };

    for (const snapshot of filtered) {
      groups[stateBucket(snapshot.state)].push(snapshot);
    }

    for (const state of stateOrder) {
      groups[state].sort((a, b) => a.gpiScore - b.gpiScore || a.name.localeCompare(b.name));
    }

    return groups;
  }, [filtered]);

  return (
    <>
      <SEOHead
        title="Company Snapshots | GPI Studio"
        description="Company-only GPI snapshots: score, state, pattern, and the read behind the company."
        ogImage="/images/og/insights.png"
      />

      <div className="gpi-page">
        <Navigation currentPage="insights" />

        <main className="gpi-shell py-14 md:py-20">
          <section className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-start">
            <div>
              <p className="gpi-kicker">Snapshots</p>
              <h1 className="mt-4 text-5xl leading-none md:text-7xl">
                Company reads, not articles.
              </h1>
            </div>

            <div className="gpi-prose max-w-3xl">
              <p>
                This shelf is only for company snapshots: the score, the state, the
                pattern, and the read behind the company.
              </p>
              <p className="mt-5">
                Essays, field notes, alerts, and longer reads live in the other
                lanes. Snapshots stay company-first.
              </p>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">Find A Company</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  Search by company, ticker, state, or pattern.
                </p>
              </div>

              <div>
                <input
                  aria-label="Search company snapshots"
                  className="w-full border border-stone-300 bg-[#f7f2e8] px-4 py-3 font-mono text-sm text-stone-950 outline-none focus:border-stone-950"
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search snapshots"
                  type="search"
                  value={query}
                />
                <p className="mt-3 font-mono text-xs text-stone-600">
                  Showing {filtered.length} of {snapshots.length} company snapshots.
                </p>
              </div>
            </div>
          </section>

          {stateOrder.map((state) => {
            const stateSnapshots = grouped[state];
            if (stateSnapshots.length === 0) return null;

            return (
              <section className="gpi-rule mt-14 pt-8" key={state}>
                <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
                  <div>
                    <p className="gpi-kicker">{state}</p>
                    <p className="mt-3 text-sm leading-6 text-stone-700">
                      {stateSnapshots.length} company snapshot{stateSnapshots.length === 1 ? '' : 's'}.
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="gpi-table">
                      <thead>
                        <tr>
                          <th>Company</th>
                          <th>Score</th>
                          <th>State</th>
                          <th>Pattern</th>
                        </tr>
                      </thead>
                      <tbody>
                        {stateSnapshots.map((snapshot) => (
                          <tr key={snapshot.slug}>
                            <td className="w-52 font-mono text-sm font-bold text-stone-950">
                              <Link className="gpi-link" href={`/companies/${snapshot.slug}`}>
                                {snapshot.name}
                              </Link>
                              {snapshot.ticker && (
                                <div className="mt-1 text-xs font-normal text-stone-500">{snapshot.ticker}</div>
                              )}
                            </td>
                            <td className={`font-mono text-sm font-bold ${scoreColor(snapshot.gpiScore)}`}>
                              {snapshot.gpiScore.toFixed(1)}
                            </td>
                            <td className="text-sm leading-6 text-stone-700">{snapshot.state}</td>
                            <td className="text-sm leading-6 text-stone-700">{snapshot.pattern}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            );
          })}
        </main>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<SnapshotsPageProps> = async () => {
  const snapshots = getAllSnapshots().sort((a, b) => a.name.localeCompare(b.name));

  return {
    props: { snapshots },
  };
};

export default SnapshotsPage;
