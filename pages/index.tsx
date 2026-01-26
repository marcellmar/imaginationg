import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import { GPISpectrumHero } from '../components/GPIHeroGraphic';
import { ArrowRight } from 'lucide-react';

interface Company {
  id: string;
  name: string;
  gpiScore: number | null;
  stage: string;
  sector: string;
}

interface ContentItem {
  id: string;
  headline: string;
  series: string;
  publishDate: string;
  teaser: string;
  slug: string;
  companies: Company[];
}

interface HomeProps {
  featuredContent: ContentItem | null;
  seriesContent: ContentItem[];
  totalAnalyses: number;
}

const seriesConfig: Record<string, { color: string; label: string }> = {
  'Weekly Smackdown': { color: 'text-red-500', label: 'WEEKLY SMACKDOWN' },
  'Vital Signs': { color: 'text-blue-500', label: 'VITAL SIGNS' },
  'Calcification Alert': { color: 'text-orange-500', label: 'CALCIFICATION ALERT' },
  'The Autopsy': { color: 'text-zinc-400', label: 'THE AUTOPSY' },
  'Field Notes': { color: 'text-green-500', label: 'FIELD NOTES' },
  'Transition Watch': { color: 'text-yellow-500', label: 'TRANSITION WATCH' },
  'Wildcard': { color: 'text-purple-500', label: 'WILDCARD' },
};

const getScoreColor = (score: number | null) => {
  if (!score) return 'text-zinc-500';
  if (score <= 3) return 'text-green-500';
  if (score <= 6.9) return 'text-yellow-500';
  return 'text-red-500';
};

const getStageLabel = (stage: string) => {
  if (stage === 'Field') return 'FIELD';
  if (stage === 'Transitioning') return 'TRANSITIONING';
  if (stage === 'Particle') return 'PARTICLE';
  return stage.toUpperCase();
};

const Home: NextPage<HomeProps> = ({ featuredContent, seriesContent, totalAnalyses }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to actual newsletter service
    setSubscribed(true);
  };

  return (
    <>
      <SEOHead
        title="GPI Studio | Organizational Physics"
        description="Some companies move. Some companies calcify. We measure the difference. 66+ company analyses across 7 dimensions."
        ogImage="/images/og-home.svg"
      />

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://gpi.studio/#organization",
              "name": "GPI Studio",
              "url": "https://gpi.studio",
              "logo": "https://gpi.studio/logo.png",
              "description": "Organizational physics. We measure where energy gets stuck.",
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="home" />

        {/* Hero - Concept Forward */}
        <section className="pt-28 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              ORGANIZATIONAL PHYSICS
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
              SOME COMPANIES MOVE<span className="text-red-600">.</span><br />
              SOME COMPANIES CALCIFY<span className="text-red-600">.</span>
            </h1>

            <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
              We measure the difference. {totalAnalyses > 0 ? `${totalAnalyses} companies scored.` : 'Companies scored.'} 7 dimensions. The pattern is clear.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/insights/gpi-analyses"
                className="inline-flex items-center gap-2 bg-red-600 px-6 py-3 font-bold hover:bg-red-700 transition-colors group"
              >
                SEE THE ANALYSES
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/gpi-framework"
                className="inline-flex items-center gap-2 border border-zinc-700 px-6 py-3 font-bold hover:border-zinc-500 transition-colors"
              >
                UNDERSTAND THE FRAMEWORK
              </Link>
            </div>

            {/* GPI Spectrum Visualization */}
            <GPISpectrumHero />
          </div>
        </section>

        {/* Featured Analysis - From Notion */}
        {featuredContent && (
          <section className="py-12 px-6 border-t border-zinc-900">
            <div className="max-w-4xl mx-auto">
              <div className="text-xs font-mono text-zinc-600 mb-6">LATEST ANALYSIS</div>

              <Link href={featuredContent.slug ? `/insights/gpi-analyses/${featuredContent.slug}` : '/insights/gpi-analyses'} className="block group">
                <div className="border border-zinc-800 p-8 hover:border-red-600/50 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-mono ${seriesConfig[featuredContent.series]?.color || 'text-red-500'} bg-red-500/10 px-2 py-1`}>
                      {seriesConfig[featuredContent.series]?.label || featuredContent.series.toUpperCase()}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-black mb-4 group-hover:text-red-500 transition-colors">
                    {featuredContent.headline}
                  </h2>

                  {featuredContent.teaser && (
                    <p className="text-zinc-400 mb-6 max-w-2xl">
                      {featuredContent.teaser}
                    </p>
                  )}

                  {featuredContent.companies.length > 0 && (
                    <div className="flex items-center gap-6 text-sm">
                      {featuredContent.companies.slice(0, 2).map((company) => (
                        <div key={company.id} className="flex items-center gap-3">
                          <span className="text-zinc-600">{company.name}</span>
                          <span className={`font-bold ${getScoreColor(company.gpiScore)}`}>
                            {company.gpiScore?.toFixed(1) || '—'}
                          </span>
                          <span className={`text-xs ${getScoreColor(company.gpiScore)}`}>
                            {getStageLabel(company.stage)}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Content Series - From Notion */}
        {seriesContent.length > 0 && (
          <section className="py-12 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-xs font-mono text-zinc-600 mb-6">CONTENT SERIES</div>

              <div className="grid md:grid-cols-3 gap-4">
                {seriesContent.slice(0, 3).map((item) => (
                  <Link
                    key={item.id}
                    href={item.slug ? `/insights/gpi-analyses/${item.slug}` : '/insights/gpi-analyses'}
                    className="block group"
                  >
                    <div className="border border-zinc-800 p-6 h-full hover:border-red-600/50 transition-all">
                      <div className={`text-xs font-mono ${seriesConfig[item.series]?.color || 'text-red-500'} mb-3`}>
                        {seriesConfig[item.series]?.label || item.series.toUpperCase()}
                      </div>
                      <h3 className="font-bold mb-2 group-hover:text-red-500 transition-colors">
                        {item.headline}
                      </h3>
                      {item.teaser && (
                        <p className="text-sm text-zinc-500 line-clamp-2">
                          {item.teaser}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* The Proof */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl md:text-7xl font-black text-red-600 mb-4">{totalAnalyses || '—'}</div>
            <div className="text-xl font-bold mb-4">COMPANIES ANALYZED</div>
            <p className="text-zinc-500 mb-8 max-w-lg mx-auto">
              Fortune 500s. Retailers. Media giants. Tech. Same 7 dimensions. Same physics. Different scores.
            </p>
            <Link
              href="/companies"
              className="inline-flex items-center gap-2 text-red-500 font-bold hover:text-red-400 transition-colors group"
            >
              SEE ALL COMPANIES
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* The Framework - Brief */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-black mb-6">
                  WHY SOME COMPANIES CAN'T MOVE<span className="text-red-600">.</span>
                </h2>
                <p className="text-zinc-400 mb-4">
                  Organizations calcify. Decision latency increases. Error correction slows. Knowledge gets stuck in silos.
                </p>
                <p className="text-zinc-400 mb-6">
                  GPI measures where energy gets trapped. Seven dimensions. One score. The physics of your organization.
                </p>
                <Link
                  href="/gpi-framework"
                  className="inline-flex items-center gap-2 text-white font-bold hover:text-red-500 transition-colors group"
                >
                  UNDERSTAND THE FRAMEWORK
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* 7 Dimensions - Compact */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: 'Decision Latency', desc: 'Speed to yes' },
                  { name: 'Error Correction', desc: 'Speed to fix' },
                  { name: 'Knowledge Location', desc: 'Where expertise lives' },
                  { name: 'Structural Lock-In', desc: 'Process rigidity' },
                  { name: 'Talent Flow', desc: 'Movement to impact' },
                  { name: 'Capital Intensity', desc: 'Cost to validate' },
                  { name: 'Knowledge Velocity', desc: 'Learning spread' },
                ].map((dim, i) => (
                  <div key={i} className="bg-zinc-900/50 p-3">
                    <div className="text-xs font-bold text-white">{dim.name}</div>
                    <div className="text-xs text-zinc-600">{dim.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter - Primary Conversion */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-black mb-4">GET THE ANALYSIS</h2>
            <p className="text-zinc-500 mb-8">
              Weekly breakdowns. Who's calcifying. Who's not. No spam. Just physics.
            </p>

            {subscribed ? (
              <div className="text-green-500 font-bold">You're in. Watch your inbox.</div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 bg-zinc-900 border border-zinc-800 px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600"
                />
                <button
                  type="submit"
                  className="bg-red-600 px-6 py-3 font-bold hover:bg-red-700 transition-colors"
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Diagnostic - Secondary CTA */}
        <section className="py-12 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-zinc-600 text-sm mb-4">
              Curious about your own organization?
            </p>
            <Link
              href="/diagnostic"
              className="inline-flex items-center gap-2 text-white font-bold hover:text-red-500 transition-colors"
            >
              TAKE THE DIAGNOSTIC
              <ArrowRight size={16} />
            </Link>
            <p className="text-zinc-700 text-xs mt-2">
              32 questions. 7 dimensions. Free.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto flex justify-between items-center text-sm text-zinc-600">
            <div>GPI.STUDIO</div>
            <div>© IMAGINATION G LLC</div>
          </div>
        </footer>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const NOTION_API_KEY = process.env.NOTION_API_KEY;
  const GPI_CONTENT_DB = '2d8990ae-cd45-811a-b634-c11c51be4013';
  const GPI_ANALYSES_DB = '7d636c92-c316-4bfc-9bc7-7899e575e19e';

  let featuredContent: ContentItem | null = null;
  let seriesContent: ContentItem[] = [];
  let totalAnalyses = 0;

  if (!NOTION_API_KEY) {
    return { props: { featuredContent, seriesContent, totalAnalyses } };
  }

  try {
    // Fetch published content from GPI Content database
    const contentResponse = await fetch(
      `https://api.notion.com/v1/databases/${GPI_CONTENT_DB}/query`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${NOTION_API_KEY}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2022-06-28',
        },
        body: JSON.stringify({
          filter: { property: 'Status', select: { equals: 'Published' } },
          sorts: [{ property: 'Publish Date', direction: 'descending' }],
          page_size: 10,
        }),
      }
    );

    if (contentResponse.ok) {
      const contentData = await contentResponse.json();

      // Transform content (no company linking needed)
      const allContent: ContentItem[] = contentData.results.map((page: any) => {
        const props = page.properties;
        return {
          id: page.id,
          headline: props.Headline?.title?.[0]?.plain_text || '',
          series: props.Series?.select?.name || '',
          publishDate: props['Publish Date']?.date?.start || '',
          teaser: props.Teaser?.rich_text?.[0]?.plain_text || '',
          slug: props.Slug?.rich_text?.[0]?.plain_text || '',
          companies: [],
        };
      });

      // Set featured (most recent) and series content (next 3 different series)
      if (allContent.length > 0) {
        featuredContent = allContent[0];

        // Get unique series for the cards
        const seenSeries = new Set<string>();
        if (featuredContent.series) seenSeries.add(featuredContent.series);

        for (const item of allContent.slice(1)) {
          if (!seenSeries.has(item.series) && seriesContent.length < 3) {
            seriesContent.push(item);
            seenSeries.add(item.series);
          }
        }

        // If not enough unique series, fill with remaining
        if (seriesContent.length < 3) {
          for (const item of allContent.slice(1)) {
            if (!seriesContent.includes(item) && seriesContent.length < 3) {
              seriesContent.push(item);
            }
          }
        }
      }
    }

    // Count total companies in GPI Analyses database (paginate to get full count)
    let hasMore = true;
    let startCursor: string | undefined = undefined;

    while (hasMore) {
      const analysesResponse = await fetch(
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
            ...(startCursor && { start_cursor: startCursor }),
          }),
        }
      );

      if (analysesResponse.ok) {
        const analysesData = await analysesResponse.json();
        totalAnalyses += analysesData.results.length;
        hasMore = analysesData.has_more;
        startCursor = analysesData.next_cursor;
      } else {
        hasMore = false;
      }
    }

  } catch (error) {
    console.error('Error fetching Notion content:', error);
  }

  return {
    props: {
      featuredContent,
      seriesContent,
      totalAnalyses,
    },
  };
};

export default Home;
