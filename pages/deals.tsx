import type { NextPage, GetServerSideProps } from 'next';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import { ArrowRight } from 'lucide-react';
import { getAllDeals, DealAnalysis } from '../lib/deals-content';

interface DealsPageProps {
  deals: DealAnalysis[];
}

const getScoreColor = (score: number) => {
  if (score <= 3) return 'text-green-500';
  if (score <= 6.9) return 'text-yellow-500';
  return 'text-red-500';
};

const getStateColor = (state: string) => {
  if (state === 'Field') return 'bg-green-500/20 text-green-500 border-green-500/50';
  if (state === 'Transitioning') return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/50';
  return 'bg-red-500/20 text-red-500 border-red-500/50';
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

        {/* Deals */}
        {deals.map((deal) => (
          <article key={deal.slug} className="border-b border-zinc-900">
            {/* Deal Header */}
            <section className="py-12 px-6 bg-zinc-950">
              <div className="max-w-4xl mx-auto">
                <div className="text-xs font-mono text-purple-500 mb-3">DEAL ANALYSIS</div>
                <h2 className="text-3xl md:text-4xl font-black mb-6">{deal.title}</h2>

                <div className="flex flex-wrap gap-6 text-sm text-zinc-400 mb-8">
                  <div>
                    <span className="text-zinc-600">Deal Value:</span>{' '}
                    <span className="text-white font-bold">{deal.dealValue}</span>
                  </div>
                  <div>
                    <span className="text-zinc-600">Expected Close:</span>{' '}
                    <span className="text-white font-bold">{deal.expectedClose}</span>
                  </div>
                  <div>
                    <span className="text-zinc-600">Analysis Date:</span>{' '}
                    <span className="text-white">{deal.analysisDate}</span>
                  </div>
                </div>

                {/* GPI Matchup */}
                <div className="grid md:grid-cols-3 gap-4">
                  {deal.companies.map((company, i) => (
                    <div
                      key={company.name}
                      className={`border rounded-lg p-6 ${getStateColor(company.state)}`}
                    >
                      <div className="text-xs font-mono opacity-70 mb-2">{company.state.toUpperCase()}</div>
                      <div className="text-2xl font-black text-white mb-1">{company.name}</div>
                      <div className={`text-4xl font-black ${getScoreColor(company.gpiScore)}`}>
                        {company.gpiScore.toFixed(2)}
                      </div>
                      <div className="text-sm mt-2 opacity-80">{company.characteristic}</div>
                    </div>
                  ))}

                  {/* GPI Delta */}
                  <div className="border border-purple-500/50 bg-purple-500/10 rounded-lg p-6">
                    <div className="text-xs font-mono text-purple-400 mb-2">GPI DELTA</div>
                    <div className="text-4xl font-black text-purple-400">
                      {deal.gpiDelta.toFixed(1)}
                    </div>
                    <div className="text-sm text-purple-300 mt-2">
                      {deal.gpiDelta >= 3 ? 'Significant metabolic mismatch' :
                       deal.gpiDelta >= 1.5 ? 'Moderate friction expected' :
                       'Compatible operating speeds'}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Analysis Sections */}
            <section className="py-12 px-6">
              <div className="max-w-4xl mx-auto space-y-12">
                {deal.sections.map((section, i) => (
                  <div key={i}>
                    <h3 className="text-xl font-black mb-4 text-white">
                      {section.title}
                    </h3>
                    <div className="prose prose-invert max-w-none">
                      {section.content.split('\n\n').map((para, j) => {
                        if (para.startsWith('**') && para.includes(':**')) {
                          // Bold label paragraph
                          const parts = para.split(':**');
                          return (
                            <p key={j} className="text-zinc-300 leading-relaxed mb-4">
                              <strong className="text-white">{parts[0].replace(/\*\*/g, '')}:</strong>
                              {parts[1]?.replace(/\*\*/g, '')}
                            </p>
                          );
                        } else if (para.startsWith('- ')) {
                          // List
                          return (
                            <ul key={j} className="text-zinc-300 mb-4 ml-4">
                              {para.split('\n').map((item, k) => (
                                <li key={k} className="mb-1">
                                  {item.replace(/^- /, '').replace(/\*\*/g, '')}
                                </li>
                              ))}
                            </ul>
                          );
                        } else {
                          return (
                            <p key={j} className="text-zinc-300 leading-relaxed mb-4">
                              {para.replace(/\*\*/g, '')}
                            </p>
                          );
                        }
                      })}
                    </div>
                  </div>
                ))}

                {/* Verdict */}
                <div className="border-2 border-yellow-500/50 bg-yellow-500/5 rounded-lg p-8">
                  <div className="text-xs font-mono text-yellow-500 mb-3">VERDICT</div>
                  <div className="text-2xl font-black text-yellow-500 mb-4">{deal.verdict}</div>
                  <div className="text-zinc-300 leading-relaxed whitespace-pre-line">
                    {deal.verdictDetail.replace(/\*\*/g, '')}
                  </div>
                </div>
              </div>
            </section>
          </article>
        ))}

        {/* Empty State */}
        {deals.length === 0 && (
          <section className="py-24 px-6 text-center">
            <p className="text-zinc-500">No deal analyses yet.</p>
          </section>
        )}

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
                <div className="text-red-500 font-bold mb-2">HIGH DELTA (3+)</div>
                <p className="text-zinc-500">
                  Metabolic mismatch. The faster company risks calcification. The slower company risks rejection.
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
