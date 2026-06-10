import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { getSnapshotBySlug, CompanySnapshot } from '../../lib/snapshots-content';

interface CompanyPageProps {
  snapshot: CompanySnapshot | null;
}

const getScoreColor = (score: number) => {
  if (score <= 3.5) return 'text-stone-950';
  if (score <= 6.9) return 'text-stone-600';
  return 'text-red-700';
};

// Calculate state from score (source of truth)
const getStateFromScore = (score: number): string => {
  if (score <= 3.0) return 'Field';
  if (score < 7.0) return 'Transitioning';
  return 'Particle';
};

const getStateColor = (state: string) => {
  if (state.toLowerCase().includes('field')) return 'text-stone-950';
  if (state.toLowerCase().includes('particle')) return 'text-red-700';
  return 'text-stone-600';
};

const CompanyPage: NextPage<CompanyPageProps> = ({ snapshot }) => {
  if (!snapshot) {
    return (
      <div className="gpi-page">
        <Navigation currentPage="companies" />
        <div className="gpi-shell py-24">
          <h1 className="text-4xl font-bold">Company snapshot not found</h1>
          <p className="mt-4 text-stone-700">That company read is not available.</p>
          <Link href="/insights/snapshots" className="gpi-link mt-8 inline-block">
            Back to snapshots
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${snapshot.name} Company Snapshot | GPI Studio`}
        description={`${snapshot.name} company snapshot. GPI score ${snapshot.gpiScore}. ${snapshot.pattern}.`}
      />

      <div className="gpi-page">
        <Navigation currentPage="companies" />

        <main className="gpi-shell py-14 md:py-20">
          <section className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-start">
            <div>
              <Link href="/insights/snapshots" className="gpi-link font-mono text-sm">
                Back to snapshots
              </Link>
              <p className="gpi-kicker mt-8">Company Snapshot</p>
              <h1 className="mt-4 text-5xl leading-none md:text-7xl">{snapshot.name}</h1>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm text-stone-600">
                <span className={getStateColor(getStateFromScore(snapshot.gpiScore))}>
                  {getStateFromScore(snapshot.gpiScore)}
                </span>
                <span>{snapshot.gpiScore.toFixed(2)} GPI</span>
              {snapshot.ticker && (
                  <span>{snapshot.ticker}</span>
              )}
                <span>{snapshot.analysisDate}</span>
              </div>

              <div className="mt-8 gpi-prose max-w-3xl text-stone-800">
                <p>
                  This is a company read, not a full story about the company. The
                  point is to name the pattern, show what is helping, and show what
                  may slow the next move down.
                </p>
              </div>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">The Read</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  What the company appears to have learned, overlearned, or carried
                  forward.
                </p>
              </div>

              <div className="gpi-prose max-w-3xl">
                <h2 className="text-3xl font-bold leading-tight text-stone-950 md:text-4xl">{snapshot.pattern}</h2>
                <p className="mt-5">{snapshot.patternDescription}</p>
              </div>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">Scorecard</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  The score is not a grade. It is a read on how easily the company
                  can update and move.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="gpi-table">
                  <tbody>
                    <tr>
                      <th>GPI Score</th>
                      <td className={`font-mono text-xl font-bold ${getScoreColor(snapshot.gpiScore)}`}>
                        {snapshot.gpiScore.toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <th>State</th>
                      <td>{snapshot.state}</td>
                    </tr>
                    {snapshot.marketCap && (
                      <tr>
                        <th>Market Cap</th>
                        <td>{snapshot.marketCap}</td>
                      </tr>
                    )}
                    {snapshot.employees && (
                      <tr>
                        <th>Employees</th>
                        <td>{snapshot.employees.toLocaleString()}</td>
                      </tr>
                    )}
                    {snapshot.revenue && (
                      <tr>
                        <th>Revenue</th>
                        <td>{snapshot.revenue}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">The Read Checks</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  The seven places where a clean story usually runs into how the
                  company actually works.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="gpi-table">
                  <tbody>
                    {snapshot.dimensions.map((dim) => (
                      <tr key={dim.dimension}>
                        <td className="w-56 font-mono text-sm font-bold text-stone-950">{dim.dimension}</td>
                        <td className={`w-16 font-mono text-sm font-bold ${getScoreColor(dim.score)}`}>{dim.score}</td>
                        <td className="text-sm leading-6 text-stone-700">{dim.explanation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {snapshot.keyNumbers.length > 0 && (
            <section className="gpi-rule mt-14 pt-8">
              <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <p className="gpi-kicker">Numbers Worth Holding</p>
                  <p className="mt-3 text-sm leading-6 text-stone-700">
                    Most numbers can stay in the filing. These are the ones that shape the read.
                  </p>
                </div>

                <div className="grid gap-px border-y border-stone-300 bg-stone-300 md:grid-cols-2">
                  {snapshot.keyNumbers.map((num) => (
                    <div key={num} className="bg-[#f7f2e8] p-5 text-sm leading-6 text-stone-800">
                      {num}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          <section className="gpi-rule mt-14 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="gpi-kicker">Still Working / Still Stuck</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  The useful read is not whether the company is good or bad. It is
                  what helps it move and what keeps pulling it back.
                </p>
              </div>

              <div className="grid gap-px border-y border-stone-300 bg-stone-300 md:grid-cols-2">
                <div className="bg-[#f7f2e8] p-5">
                  <div className="font-mono text-sm font-bold text-stone-950">Still working</div>
                  <ul className="mt-4 space-y-3">
                    {snapshot.enablers.map((item) => (
                      <li key={item} className="text-sm leading-6 text-stone-700">{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#f7f2e8] p-5">
                  <div className="font-mono text-sm font-bold text-stone-950">Still stuck</div>
                  <ul className="mt-4 space-y-3">
                    {snapshot.friction.map((item) => (
                      <li key={item} className="text-sm leading-6 text-stone-700">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {snapshot.quotable && (
            <section className="gpi-rule mt-14 pt-8">
              <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <p className="gpi-kicker">The Line</p>
                </div>
                <blockquote className="max-w-3xl text-2xl leading-snug text-stone-950">
                  "{snapshot.quotable}"
                </blockquote>
              </div>
            </section>
          )}

          <section className="gpi-rule mt-14 pt-8">
            <div className="flex flex-col gap-4 font-mono text-sm md:flex-row md:items-center">
              <Link className="gpi-link" href="/insights/snapshots">All snapshots</Link>
              <Link className="gpi-link" href="/gpi-framework">Read the lens</Link>
              <Link className="gpi-link" href="/work">Turn a decision into a working session</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { getAllSnapshots } = await import('../../lib/snapshots-content');
  const snapshots = getAllSnapshots();
  const paths = snapshots.map((s) => ({ params: { slug: s.slug } }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<CompanyPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const snapshot = getSnapshotBySlug(slug);

  return {
    props: { snapshot },
    revalidate: 3600,
  };
};

export default CompanyPage;
