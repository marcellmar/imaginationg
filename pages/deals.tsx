import type { NextPage, GetServerSideProps } from 'next';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import { ArrowRight } from 'lucide-react';

interface Deal {
  id: string;
  name: string;
  gpiScore: number | null;
  stage: string;
  sector: string;
  ticker: string;
}

interface DealsPageProps {
  deals: Deal[];
}

const getScoreColor = (score: number | null) => {
  if (!score) return 'text-zinc-500';
  if (score <= 3) return 'text-green-500';
  if (score <= 6.9) return 'text-yellow-500';
  return 'text-red-500';
};

const getVerdict = (score: number | null) => {
  if (!score) return { label: 'ANALYZING', color: 'text-zinc-500', bg: 'bg-zinc-500/10' };
  if (score <= 3) return { label: 'HIGH SYNERGY', color: 'text-green-500', bg: 'bg-green-500/10' };
  if (score <= 6.9) return { label: 'MIXED SIGNALS', color: 'text-yellow-500', bg: 'bg-yellow-500/10' };
  return { label: 'FRICTION RISK', color: 'text-red-500', bg: 'bg-red-500/10' };
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
          <div className="max-w-6xl mx-auto">
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
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            {deals.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-zinc-500">No deal analyses yet.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {deals.map((deal) => {
                  const verdict = getVerdict(deal.gpiScore);
                  return (
                    <div
                      key={deal.id}
                      className="border border-zinc-800 p-8 hover:border-purple-500/50 transition-colors"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex-1">
                          <div className="text-xs font-mono text-purple-500 mb-2">DEAL ANALYSIS</div>
                          <h2 className="text-2xl md:text-3xl font-black mb-3">{deal.name}</h2>
                          <div className="flex items-center gap-3">
                            <span className={`text-xs font-mono px-3 py-1 ${verdict.bg} ${verdict.color}`}>
                              {verdict.label}
                            </span>
                            {deal.sector && (
                              <span className="text-xs text-zinc-600">{deal.sector}</span>
                            )}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className={`text-5xl font-black ${getScoreColor(deal.gpiScore)}`}>
                            {deal.gpiScore?.toFixed(1) || '—'}
                          </div>
                          <div className="text-xs text-zinc-500 mt-1">COMBINED GPI</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Context */}
        <section className="py-12 px-6 border-t border-zinc-900 bg-zinc-950">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-black mb-6">HOW WE ANALYZE DEALS</h2>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="text-green-500 font-bold mb-2">HIGH SYNERGY (1-3)</div>
                <p className="text-zinc-500">
                  Compatible operating speeds. Similar decision latency. Integration friction is low.
                </p>
              </div>
              <div>
                <div className="text-yellow-500 font-bold mb-2">MIXED SIGNALS (3.1-6.9)</div>
                <p className="text-zinc-500">
                  One company faster than the other. Cultural integration will be bumpy.
                </p>
              </div>
              <div>
                <div className="text-red-500 font-bold mb-2">FRICTION RISK (7-10)</div>
                <p className="text-zinc-500">
                  Calcified meets calcified. Bureaucracy squared. Integration nightmare ahead.
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
  const NOTION_API_KEY = process.env.NOTION_API_KEY;
  const GPI_ANALYSES_DB = '7d636c92-c316-4bfc-9bc7-7899e575e19e';

  const deals: Deal[] = [];

  if (!NOTION_API_KEY) {
    return { props: { deals } };
  }

  try {
    const response = await fetch(
      `https://api.notion.com/v1/databases/${GPI_ANALYSES_DB}/query`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${NOTION_API_KEY}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2022-06-28',
        },
        body: JSON.stringify({
          page_size: 100,
          filter: {
            property: 'Name',
            title: {
              contains: 'Deal',
            },
          },
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();

      for (const page of data.results) {
        const props = page.properties;
        deals.push({
          id: page.id,
          name: props.Name?.title?.[0]?.plain_text || 'Unknown',
          gpiScore: props['GPI Score']?.number || null,
          stage: props['Transformation Stage']?.select?.name || 'Unknown',
          sector: props.Sector?.select?.name || '',
          ticker: props.Ticker?.rich_text?.[0]?.plain_text || '',
        });
      }
    }
  } catch (error) {
    console.error('Error fetching deals:', error);
  }

  return {
    props: {
      deals,
    },
  };
};

export default Deals;
