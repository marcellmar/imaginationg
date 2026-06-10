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
const snapshotFilters = ['All', ...stateOrder];
const pageSize = 30;

type SnapshotFilter = typeof snapshotFilters[number];

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
  const [stateFilter, setStateFilter] = useState<SnapshotFilter>('All');
  const [visibleCount, setVisibleCount] = useState(pageSize);

  const filtered = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();

    return snapshots.filter((snapshot) => {
      const matchesState = stateFilter === 'All' || stateBucket(snapshot.state) === stateFilter;
      const matchesQuery = !cleanQuery || [
        snapshot.name,
        snapshot.ticker || '',
        snapshot.state,
        snapshot.pattern,
      ].some((value) => value.toLowerCase().includes(cleanQuery));

      return matchesState && matchesQuery;
    }).sort((a, b) => a.gpiScore - b.gpiScore || a.name.localeCompare(b.name));
  }, [query, snapshots, stateFilter]);

  const counts = useMemo(() => {
    const result: Record<SnapshotFilter, number> = {
      All: snapshots.length,
      Field: 0,
      Transitioning: 0,
      Particle: 0,
    };

    for (const snapshot of snapshots) {
      result[stateBucket(snapshot.state)] += 1;
    }

    return result;
  }, [snapshots]);

  const visibleSnapshots = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <>
      <SEOHead
        title="Company Snapshots | GPI Studio"
        description="The GPI Studio company tape wall: scores, states, tickers, and operating patterns from the snapshot database."
        ogImage="/images/og/insights.png"
      />

      <div className="gpi-page">
        <Navigation currentPage="insights" />

        <main className="gpi-shell py-14 md:py-20">
          <section className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-start">
            <div>
              <p className="gpi-kicker">Snapshots</p>
              <h1 className="mt-4 text-5xl leading-none md:text-7xl">
                Company tape, ready to pull.
              </h1>
            </div>

            <div className="gpi-prose max-w-3xl">
              <p>
                When a live problem comes in, the studio needs comparison fast. These snapshots are the tape wall: score, state, ticker, pressure, and the operating pattern behind the company.
              </p>
              <p className="mt-5">
                Search first, then pull the company read. The long essays live in the other lanes. This shelf stays built for quick pattern recognition.
              </p>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">Find A Company</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  Start narrow. Search a name, ticker, state, or pattern.
                </p>
              </div>

              <div>
                <input
                  aria-label="Search company snapshots"
                  className="w-full border border-stone-300 bg-[#f7f2e8] px-4 py-3 font-mono text-sm text-stone-950 outline-none focus:border-stone-950"
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setVisibleCount(pageSize);
                  }}
                  placeholder="BYD, UNH, healthcare, Field..."
                  type="search"
                  value={query}
                />
                <div className="mt-4 flex flex-wrap gap-2">
                  {snapshotFilters.map((filter) => (
                    <button
                      className={`border px-3 py-2 font-mono text-xs font-bold uppercase ${
                        stateFilter === filter
                          ? 'border-stone-950 bg-stone-950 text-[#f7f2e8]'
                          : 'border-stone-300 text-stone-700 hover:border-stone-950 hover:text-stone-950'
                      }`}
                      key={filter}
                      onClick={() => {
                        setStateFilter(filter);
                        setVisibleCount(pageSize);
                      }}
                      type="button"
                    >
                      {filter} {counts[filter]}
                    </button>
                  ))}
                </div>
                <p className="mt-3 font-mono text-xs text-stone-600">
                  Showing {visibleSnapshots.length} of {filtered.length} matching snapshots.
                </p>
              </div>
            </div>
          </section>

          <section className="gpi-rule mt-10 pt-6">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">Company Tape</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  The first screen stays short. Pull more only when the search needs it.
                </p>
              </div>

              <div>
                <div className="overflow-x-auto">
                  <table className="gpi-table">
                    <thead>
                      <tr>
                        <th>Company</th>
                        <th>Ticker</th>
                        <th>GPI</th>
                        <th>State</th>
                        <th>Pattern</th>
                      </tr>
                    </thead>
                    <tbody>
                      {visibleSnapshots.map((snapshot) => (
                        <tr key={snapshot.slug}>
                          <td className="w-52 font-mono text-sm font-bold text-stone-950">
                            <Link className="gpi-link" href={`/companies/${snapshot.slug}`}>
                              {snapshot.name}
                            </Link>
                          </td>
                          <td className="font-mono text-sm text-stone-700">{snapshot.ticker}</td>
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

                {visibleSnapshots.length === 0 && (
                  <p className="mt-4 text-sm text-stone-700">No matching company tape found.</p>
                )}

                {hasMore && (
                  <button
                    className="mt-6 border border-stone-300 px-4 py-3 font-mono text-xs font-bold uppercase text-stone-700 hover:border-stone-950 hover:text-stone-950"
                    onClick={() => setVisibleCount((count) => count + pageSize)}
                    type="button"
                  >
                    Pull {Math.min(pageSize, filtered.length - visibleCount)} more
                  </button>
                )}
              </div>
            </div>
          </section>
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
