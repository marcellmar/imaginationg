import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { getSnapshotBySlug, CompanySnapshot } from '../../lib/snapshots-content';

interface CompanyPageProps {
  snapshot: CompanySnapshot | null;
}

const getScoreColor = (score: number) => {
  if (score <= 3) return 'text-green-500';
  if (score <= 6.9) return 'text-yellow-500';
  return 'text-red-500';
};

// Calculate state from score (source of truth)
const getStateFromScore = (score: number): string => {
  if (score <= 3.0) return 'Field';
  if (score < 7.0) return 'Transitioning';
  return 'Particle';
};

const getStateColor = (state: string) => {
  if (state.toLowerCase().includes('field')) return 'bg-green-50 text-green-500 border-green-300';
  if (state.toLowerCase().includes('particle')) return 'bg-red-50 text-red-500 border-red-300';
  return 'bg-yellow-50 text-yellow-500 border-yellow-300';
};

const CompanyPage: NextPage<CompanyPageProps> = ({ snapshot }) => {
  if (!snapshot) {
    return (
      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Navigation currentPage="companies" />
        <div className="pt-32 text-center px-6">
          <h1 className="text-4xl font-black mb-4">404</h1>
          <p className="text-stone-500 mb-8">Company snapshot not found</p>
          <Link href="/companies" className="text-red-500 hover:underline">
            ← Back to Companies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${snapshot.name} GPI Analysis | GPI Studio`}
        description={`${snapshot.name} GPI Score: ${snapshot.gpiScore}. ${snapshot.pattern}. Full analysis across 7 dimensions.`}
      />

      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Navigation currentPage="companies" />

        {/* Back Link */}
        <section className="pt-24 px-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/companies" className="text-stone-500 text-sm hover:text-stone-900 inline-block mb-6">
              ← Back to Companies
            </Link>
          </div>
        </section>

        {/* Header */}
        <section className="pb-8 px-6 border-b border-stone-200">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`text-xs font-mono px-2 py-1 border rounded ${getStateColor(getStateFromScore(snapshot.gpiScore))}`}>
                {getStateFromScore(snapshot.gpiScore).toUpperCase()}
              </span>
              {snapshot.ticker && (
                <span className="text-xs font-mono text-stone-500">{snapshot.ticker}</span>
              )}
              <span className="text-xs text-stone-400">Analysis: {snapshot.analysisDate}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-4">{snapshot.name}</h1>

            <div className="flex items-center gap-6">
              <div>
                <div className="text-xs text-stone-500 mb-1">GPI SCORE</div>
                <div className={`text-5xl font-black ${getScoreColor(snapshot.gpiScore)}`}>
                  {snapshot.gpiScore.toFixed(2)}
                </div>
              </div>

              <div className="text-sm text-stone-500">
                {snapshot.marketCap && <div>Market Cap: {snapshot.marketCap}</div>}
                {snapshot.employees && <div>Employees: {snapshot.employees.toLocaleString()}</div>}
                {snapshot.revenue && <div>Revenue: {snapshot.revenue}</div>}
              </div>
            </div>
          </div>
        </section>

        {/* Pattern */}
        <section className="py-8 px-6 border-b border-stone-200 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs font-mono text-red-500 mb-2">THE PATTERN</div>
            <h2 className="text-2xl font-black mb-4">{snapshot.pattern}</h2>
            <p className="text-stone-600 leading-relaxed">{snapshot.patternDescription}</p>
          </div>
        </section>

        {/* Dimension Scores */}
        <section className="py-8 px-6 border-b border-stone-200">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs font-mono text-stone-500 mb-6">DIMENSION SCORES</div>

            <div className="space-y-4">
              {snapshot.dimensions.map((dim) => (
                <div key={dim.dimension} className="border border-stone-200 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-bold text-stone-900">{dim.dimension}</div>
                    <div className={`text-2xl font-black ${getScoreColor(dim.score)}`}>
                      {dim.score}
                    </div>
                  </div>
                  <p className="text-sm text-stone-500">{dim.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Numbers */}
        <section className="py-8 px-6 border-b border-stone-200">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs font-mono text-stone-500 mb-6">KEY NUMBERS</div>
            <div className="grid md:grid-cols-2 gap-3">
              {snapshot.keyNumbers.map((num, i) => (
                <div key={i} className="bg-stone-100 p-3 text-sm">
                  {num}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transformation Signals */}
        <section className="py-8 px-6 border-b border-stone-200">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs font-mono text-stone-500 mb-6">TRANSFORMATION SIGNALS</div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-green-500 font-bold mb-3">ENABLERS</div>
                <ul className="space-y-2">
                  {snapshot.enablers.map((e, i) => (
                    <li key={i} className="text-sm text-stone-600 flex items-start gap-2">
                      <span className="text-green-500 mt-1">+</span>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-red-500 font-bold mb-3">FRICTION</div>
                <ul className="space-y-2">
                  {snapshot.friction.map((f, i) => (
                    <li key={i} className="text-sm text-stone-600 flex items-start gap-2">
                      <span className="text-red-500 mt-1">−</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quotable */}
        {snapshot.quotable && (
          <section className="py-8 px-6 border-b border-stone-200 bg-white">
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-xl text-stone-600 italic border-l-4 border-red-600 pl-6">
                "{snapshot.quotable}"
              </blockquote>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl font-black mb-4">WANT YOUR COMPANY ANALYZED?</h2>
            <p className="text-stone-500 mb-6">
              Get a full GPI breakdown across all 7 dimensions.
            </p>
            <Link
              href="/diagnostic"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 font-bold hover:bg-red-700 transition-colors"
            >
              START WITH THE DIAGNOSTIC
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-stone-200">
          <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-stone-400">
            <div>GPI.STUDIO</div>
            <div>© IMAGINATION G LLC</div>
          </div>
        </footer>
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
