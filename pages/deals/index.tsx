import type { NextPage, GetServerSideProps } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { ArrowRight } from 'lucide-react';
import { getAllDeals, DealAnalysis } from '../../lib/deals-content';

interface DealsPageProps {
  deals: DealAnalysis[];
}

const getScoreColor = (score: number) => {
  if (score <= 3) return 'text-green-500';
  if (score <= 6.9) return 'text-yellow-500';
  return 'text-red-500';
};

const getDeltaColor = (delta: number) => {
  if (delta < 1.5) return 'text-green-500 bg-green-500/10 border-green-500/30';
  if (delta < 3) return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/30';
  return 'text-purple-500 bg-purple-500/10 border-purple-500/30';
};

const getDeltaLabel = (delta: number) => {
  if (delta < 1.5) return 'LOW FRICTION';
  if (delta < 3) return 'MODERATE FRICTION';
  return 'HIGH FRICTION';
};

const Deals: NextPage<DealsPageProps> = ({ deals }) => {
  return (
    <>
      <SEOHead
        title="M&A Deal Analyses | GPI Studio"
        description="M&A deals analyzed through the GPI lens. When two companies merge, their friction multiplies."
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="deals" />

        {/* Header */}
        <section className="pt-28 pb-12 px-6 border-b border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 mb-4">
              <span className="w-2 h-2 bg-purple-500 rounded-full" />
              M&A ANALYSIS
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              DEAL ANALYSES<span className="text-red-600">.</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              When two companies merge, their friction multiplies. We measure the collision.
            </p>
          </div>
        </section>

        {/* Deal Cards */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            {deals.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-zinc-500">No deal analyses yet.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {deals.map((deal) => (
                  <Link
                    key={deal.slug}
                    href={`/deals/${deal.slug}`}
                    className="block group"
                  >
                    <div className="border border-zinc-800 p-8 hover:border-purple-500/50 transition-all">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        {/* Left: Deal Info */}
                        <div className="flex-1">
                          <div className="text-xs font-mono text-purple-500 mb-2">DEAL ANALYSIS</div>
                          <h2 className="text-2xl md:text-3xl font-black mb-3 group-hover:text-purple-400 transition-colors">
                            {deal.title}
                          </h2>
                          <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
                            <span>{deal.dealValue}</span>
                            <span>Expected: {deal.expectedClose}</span>
                          </div>
                        </div>

                        {/* Right: GPI Matchup */}
                        <div className="flex items-center gap-4">
                          {deal.companies.map((company, i) => (
                            <div key={company.name} className="text-center">
                              <div className="text-xs text-zinc-500 mb-1">{company.name}</div>
                              <div className={`text-2xl font-black ${getScoreColor(company.gpiScore)}`}>
                                {company.gpiScore.toFixed(1)}
                              </div>
                            </div>
                          ))}

                          <div className={`px-4 py-3 border rounded-lg ${getDeltaColor(deal.gpiDelta)}`}>
                            <div className="text-xs font-mono opacity-70 mb-1">DELTA</div>
                            <div className="text-2xl font-black">{deal.gpiDelta.toFixed(1)}</div>
                          </div>
                        </div>
                      </div>

                      {/* Verdict Preview */}
                      <div className="mt-6 pt-6 border-t border-zinc-800 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className={`text-xs font-mono px-2 py-1 border rounded ${getDeltaColor(deal.gpiDelta)}`}>
                            {getDeltaLabel(deal.gpiDelta)}
                          </span>
                          <span className="text-sm text-zinc-400">
                            Verdict: <span className="text-yellow-500 font-bold">{deal.verdict}</span>
                          </span>
                        </div>
                        <span className="text-sm text-zinc-600 group-hover:text-purple-400 transition-colors flex items-center gap-1">
                          Read Analysis <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* How We Analyze */}
        <section className="py-12 px-6 border-t border-zinc-900 bg-zinc-950">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-black mb-6">HOW WE ANALYZE DEALS</h2>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="text-green-500 font-bold mb-2">LOW DELTA (0-1.5)</div>
                <p className="text-zinc-500">
                  Compatible operating speeds. Similar decision latency. Integration friction is low.
                </p>
              </div>
              <div>
                <div className="text-yellow-500 font-bold mb-2">MODERATE DELTA (1.5-3)</div>
                <p className="text-zinc-500">
                  One company faster than the other. Cultural integration will be bumpy.
                </p>
              </div>
              <div>
                <div className="text-purple-500 font-bold mb-2">HIGH DELTA (3+)</div>
                <p className="text-zinc-500">
                  Metabolic mismatch. The faster company risks calcification. The slower risks rejection.
                </p>
              </div>
            </div>
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

export const getServerSideProps: GetServerSideProps<DealsPageProps> = async () => {
  const deals = getAllDeals();

  return {
    props: {
      deals,
    },
  };
};

export default Deals;
