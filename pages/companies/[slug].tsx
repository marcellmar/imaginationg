import type { NextPage, GetServerSideProps } from 'next';
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

const getStateColor = (state: string) => {
  if (state.toLowerCase().includes('field')) return 'bg-green-500/20 text-green-500 border-green-500/50';
  if (state.toLowerCase().includes('particle')) return 'bg-red-500/20 text-red-500 border-red-500/50';
  return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/50';
};

const CompanyPage: NextPage<CompanyPageProps> = ({ snapshot }) => {
  if (!snapshot) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="companies" />
        <div className="pt-32 text-center px-6">
          <h1 className="text-4xl font-black mb-4">404</h1>
          <p className="text-zinc-500 mb-8">Company snapshot not found</p>
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

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="companies" />

        {/* Back Link */}
        <section className="pt-24 px-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/companies" className="text-zinc-500 text-sm hover:text-white inline-block mb-6">
              ← Back to Companies
            </Link>
          </div>
        </section>

        {/* Header */}
        <section className="pb-8 px-6 border-b border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`text-xs font-mono px-2 py-1 border rounded ${getStateColor(snapshot.state)}`}>
                {snapshot.state.toUpperCase()}
              </span>
              {snapshot.ticker && (
                <span className="text-xs font-mono text-zinc-500">{snapshot.ticker}</span>
              )}
              <span className="text-xs text-zinc-600">Analysis: {snapshot.analysisDate}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-4">{snapshot.name}</h1>

            <div className="flex items-center gap-6">
              <div>
                <div className="text-xs text-zinc-500 mb-1">GPI SCORE</div>
                <div className={`text-5xl font-black ${getScoreColor(snapshot.gpiScore)}`}>
                  {snapshot.gpiScore.toFixed(2)}
                </div>
              </div>

              <div className="text-sm text-zinc-500">
                {snapshot.marketCap && <div>Market Cap: {snapshot.marketCap}</div>}
                {snapshot.employees && <div>Employees: {snapshot.employees.toLocaleString()}</div>}
                {snapshot.revenue && <div>Revenue: {snapshot.revenue}</div>}
              </div>
            </div>
          </div>
        </section>

        {/* Pattern */}
        <section className="py-8 px-6 border-b border-zinc-900 bg-zinc-950">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs font-mono text-red-500 mb-2">THE PATTERN</div>
            <h2 className="text-2xl font-black mb-4">{snapshot.pattern}</h2>
            <p className="text-zinc-300 leading-relaxed">{snapshot.patternDescription}</p>
          </div>
        </section>

        {/* Dimension Scores */}
        <section className="py-8 px-6 border-b border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs font-mono text-zinc-500 mb-6">DIMENSION SCORES</div>

            <div className="space-y-4">
              {snapshot.dimensions.map((dim) => (
                <div key={dim.dimension} className="border border-zinc-800 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-bold text-white">{dim.dimension}</div>
                    <div className={`text-2xl font-black ${getScoreColor(dim.score)}`}>
                      {dim.score}
                    </div>
                  </div>
                  <p className="text-sm text-zinc-400">{dim.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Numbers */}
        <section className="py-8 px-6 border-b border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs font-mono text-zinc-500 mb-6">KEY NUMBERS</div>
            <div className="grid md:grid-cols-2 gap-3">
              {snapshot.keyNumbers.map((num, i) => (
                <div key={i} className="bg-zinc-900/50 p-3 text-sm">
                  {num}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transformation Signals */}
        <section className="py-8 px-6 border-b border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs font-mono text-zinc-500 mb-6">TRANSFORMATION SIGNALS</div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-green-500 font-bold mb-3">ENABLERS</div>
                <ul className="space-y-2">
                  {snapshot.enablers.map((e, i) => (
                    <li key={i} className="text-sm text-zinc-300 flex items-start gap-2">
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
                    <li key={i} className="text-sm text-zinc-300 flex items-start gap-2">
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
          <section className="py-8 px-6 border-b border-zinc-900 bg-zinc-950">
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-xl text-zinc-300 italic border-l-4 border-red-600 pl-6">
                "{snapshot.quotable}"
              </blockquote>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl font-black mb-4">WANT YOUR COMPANY ANALYZED?</h2>
            <p className="text-zinc-500 mb-6">
              Get a full GPI breakdown across all 7 dimensions.
            </p>
            <Link
              href="/diagnostic"
              className="inline-flex items-center gap-2 bg-red-600 px-6 py-3 font-bold hover:bg-red-700 transition-colors"
            >
              START WITH THE DIAGNOSTIC
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-zinc-900">
          <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-zinc-600">
            <div>GPI.STUDIO</div>
            <div>© IMAGINATION G LLC</div>
          </div>
        </footer>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<CompanyPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const snapshot = getSnapshotBySlug(slug);

  return {
    props: {
      snapshot,
    },
  };
};

export default CompanyPage;
