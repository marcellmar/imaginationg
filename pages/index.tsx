import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight, BookOpen, Clock, RotateCcw, MapPin, Lock, Users, Building2, Zap } from 'lucide-react';

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
  'Vital Signs': { color: 'text-blue-600', label: 'VITAL SIGNS' },
  'Calcification Alert': { color: 'text-orange-500', label: 'CALCIFICATION ALERT' },
  'The Autopsy': { color: 'text-stone-400', label: 'THE AUTOPSY' },
  'Field Notes': { color: 'text-green-600', label: 'FIELD NOTES' },
  'Transition Watch': { color: 'text-yellow-600', label: 'TRANSITION WATCH' },
  'Wildcard': { color: 'text-purple-600', label: 'WILDCARD' },
};

const Home: NextPage<HomeProps> = ({ featuredContent, seriesContent, totalAnalyses }) => {
  useScrollReveal();

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'GPI Studio' }),
      });
      if (!res.ok) throw new Error('Failed');
      setSubscribed(true);
      setEmail('');
    } catch {
      setSubscribed(true);
    }
  };

  return (
    <>
      <SEOHead
        title="GPI Studio | Organizational Physics"
        description="Some companies move. Some companies calcify. We measure the difference. Seven dimensions of organizational physics."
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

      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Navigation currentPage="home" />

        {/* Hero - Centered */}
        <section className="pt-36 pb-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-400 mb-8">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              ORGANIZATIONAL PHYSICS
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.05] tracking-headline">
              YOUR ORG HAS A<br />METABOLIC RATE<span className="text-red-600">.</span>
            </h1>

            <p className="text-xl md:text-2xl text-stone-500 mb-6 max-w-2xl mx-auto leading-relaxed">
              Most friction doesn't show up on a P&L. It shows up in how long decisions take, whether mistakes get fixed or defended, whether your best people have room to move.
            </p>

            <p className="text-xl md:text-2xl text-stone-900 font-semibold mb-10">
              We measure it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/diagnostic"
                className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-4 text-sm font-semibold hover:bg-stone-800 transition-colors group"
              >
                Take the Diagnostic
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/insights"
                className="inline-flex items-center justify-center gap-2 border border-stone-300 px-8 py-4 text-sm font-semibold text-stone-700 hover:border-stone-900 hover:text-stone-900 transition-colors"
              >
                See the Research
              </Link>
            </div>
          </div>
        </section>

        {/* News Banner */}
        <section className="px-6 border-t border-stone-200 bg-stone-100/60">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/insights/netflix-let-paramount-win"
              className="flex items-center justify-between py-4 group"
            >
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-xs font-mono text-red-600">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                  NEW
                </span>
                <span className="text-sm text-stone-700 group-hover:text-stone-900 transition-colors">
                  Netflix Let Paramount Win. The GPI gap predicted it in December.
                </span>
              </div>
              <ArrowRight size={14} className="text-stone-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
            </Link>
          </div>
        </section>

        {/* Latest Analyses */}
        <section className="py-20 px-6 border-t border-stone-200 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="fade-up flex items-center justify-between mb-10">
              <div className="text-xs font-mono text-stone-400">LATEST ANALYSES</div>
              <Link href="/insights/gpi-analyses" className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors">
                View all →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-5 fade-up-stagger">
              {[featuredContent, ...seriesContent.slice(0, 2)].filter(Boolean).map((item) => (
                item && (
                  <Link
                    key={item.id}
                    href={item.slug ? `/insights/gpi-analyses/${item.slug}` : '/insights/gpi-analyses'}
                    className="block group fade-up"
                  >
                    <div className="border border-stone-200 p-7 h-full hover:border-stone-400 transition-all bg-stone-50 hover:shadow-sm">
                      <div className={`text-xs font-mono ${seriesConfig[item.series]?.color || 'text-red-600'} mb-4`}>
                        {seriesConfig[item.series]?.label || item.series.toUpperCase()}
                      </div>
                      <h3 className="font-semibold mb-3 group-hover:text-stone-900 transition-colors leading-snug">
                        {item.headline}
                      </h3>
                      {item.teaser && (
                        <p className="text-sm text-stone-500 line-clamp-2 leading-relaxed">
                          {item.teaser}
                        </p>
                      )}
                    </div>
                  </Link>
                )
              ))}
              {!featuredContent && seriesContent.length === 0 && (
                <>
                  <Link href="/insights/gpi-analyses" className="block group fade-up">
                    <div className="border border-stone-200 p-7 h-full hover:border-stone-400 transition-all bg-stone-50 hover:shadow-sm">
                      <div className="text-xs font-mono text-red-600 mb-4">WEEKLY SMACKDOWN</div>
                      <h3 className="font-semibold mb-3 group-hover:text-stone-900 transition-colors">Head-to-Head GPI</h3>
                      <p className="text-sm text-stone-500">Two companies. Same lens. One moves, one doesn't.</p>
                    </div>
                  </Link>
                  <Link href="/insights/gpi-analyses" className="block group fade-up">
                    <div className="border border-stone-200 p-7 h-full hover:border-stone-400 transition-all bg-stone-50 hover:shadow-sm">
                      <div className="text-xs font-mono text-orange-500 mb-4">CALCIFICATION ALERT</div>
                      <h3 className="font-semibold mb-3 group-hover:text-stone-900 transition-colors">The Physics Say Trouble</h3>
                      <p className="text-sm text-stone-500">When the score tells you what the earnings call won't.</p>
                    </div>
                  </Link>
                  <Link href="/insights/gpi-analyses" className="block group fade-up">
                    <div className="border border-stone-200 p-7 h-full hover:border-stone-400 transition-all bg-stone-50 hover:shadow-sm">
                      <div className="text-xs font-mono text-blue-600 mb-4">VITAL SIGNS</div>
                      <h3 className="font-semibold mb-3 group-hover:text-stone-900 transition-colors">Reading the Monitors</h3>
                      <p className="text-sm text-stone-500">Metabolic stress before the market sees it.</p>
                    </div>
                  </Link>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Framework */}
        <section className="py-24 px-6 border-t border-stone-200">
          <div className="max-w-5xl mx-auto">
            <div className="fade-up text-xs font-mono text-stone-400 mb-4">THE FRAMEWORK</div>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="fade-up">
                <h2 className="text-3xl md:text-4xl font-black mb-5 tracking-headline">
                  SEVEN SIGNALS<span className="text-red-600">.</span>
                </h2>
                <p className="text-stone-500 mb-10 text-lg leading-relaxed">
                  GPI doesn't measure sentiment or culture scores. It measures the physical properties of how an org moves. Seven dimensions, each one telling you where energy is leaking.
                </p>
                <Link
                  href="/gpi-framework"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-red-600 transition-colors group"
                >
                  Explore the framework
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="space-y-0 fade-up">
                {[
                  { slug: 'decision-latency', name: 'Decision Latency', icon: Clock },
                  { slug: 'error-correction', name: 'Error Correction', icon: RotateCcw },
                  { slug: 'knowledge-location', name: 'Knowledge Location', icon: MapPin },
                  { slug: 'structural-lock-in', name: 'Structural Lock-In', icon: Lock },
                  { slug: 'talent-flow', name: 'Talent Flow', icon: Users },
                  { slug: 'capital-intensity', name: 'Capital Intensity', icon: Building2 },
                  { slug: 'knowledge-velocity', name: 'Knowledge Velocity', icon: Zap },
                ].map((dim, i) => {
                  const Icon = dim.icon;
                  return (
                    <Link
                      key={i}
                      href={`/gpi-framework/${dim.slug}`}
                      className="flex items-center gap-3 py-3.5 border-b border-stone-200 hover:border-stone-400 group transition-colors"
                    >
                      <Icon size={14} className="text-stone-400 group-hover:text-red-600 transition-colors flex-shrink-0" />
                      <span className="text-sm font-medium text-stone-600 group-hover:text-stone-900 transition-colors">
                        {dim.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Book Teaser + Featured Insight */}
        <section className="py-24 px-6 border-t border-stone-200 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="fade-up">
                <div className="flex items-center gap-3 mb-8">
                  <BookOpen size={18} className="text-red-600" />
                  <span className="text-xs font-mono text-stone-400">FROM THE UPCOMING BOOK</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight tracking-headline">
                  THE GROWING<br />PAINS INDEX<span className="text-red-600">.</span>
                </h2>

                <p className="text-lg text-stone-500 mb-5 leading-relaxed">
                  Calcification isn't dysfunction. It's the operating system that built you, running past its environment.
                </p>

                <p className="text-stone-400 mb-5 leading-relaxed">
                  Across every industry, one pattern keeps appearing: the decisions that made the org work are the same ones making it not work. The playbook didn't fail. The terrain shifted. And nobody updated the playbook.
                </p>

                <p className="text-stone-400 mb-10 leading-relaxed">
                  That's not a strategy problem. That's physics.
                </p>

                <Link
                  href="/insights"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-red-600 transition-colors group"
                >
                  Read the insights
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <Link href="/insights/invested-in-the-waste" className="block group fade-up">
                <div className="border border-stone-200 bg-stone-50 p-10 hover:border-stone-400 hover:shadow-sm transition-all relative overflow-hidden">
                  <div className="absolute top-6 right-6 opacity-10">
                    <svg width="80" height="80" viewBox="0 0 80 80">
                      <circle cx="40" cy="20" r="12" stroke="#ef4444" strokeWidth="2" fill="none" />
                      <line x1="40" y1="32" x2="20" y2="70" stroke="#ef4444" strokeWidth="2" />
                      <line x1="40" y1="32" x2="40" y2="70" stroke="#ef4444" strokeWidth="2" />
                      <line x1="40" y1="32" x2="60" y2="70" stroke="#ef4444" strokeWidth="2" />
                      <circle cx="20" cy="70" r="6" fill="#eab308" />
                      <circle cx="40" cy="70" r="6" fill="#3b82f6" />
                      <circle cx="60" cy="70" r="6" fill="#a855f7" />
                    </svg>
                  </div>

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-xs font-mono text-red-600">FEATURED</span>
                      <span className="text-xs font-mono text-stone-400">CHAPTER 2</span>
                    </div>

                    <h3 className="text-2xl font-black mb-4 group-hover:text-red-600 transition-colors tracking-headline">
                      You're Invested in the Waste
                      <ArrowRight className="inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
                    </h3>

                    <p className="text-stone-500 mb-5 leading-relaxed">
                      The gap between how things should work and how they actually work isn't dysfunction. It's a product. Someone is selling it.
                    </p>

                    <p className="text-red-600 font-semibold">
                      That someone might be you.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom CTAs */}
        <section className="py-24 px-6 border-t border-stone-200">
          <div className="max-w-4xl mx-auto space-y-16">

            {/* Newsletter */}
            <div className="fade-up flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="text-xs font-mono text-stone-400 mb-2">WEEKLY ANALYSIS</div>
                <p className="text-stone-500">Who's calcifying. Who's not. No spam.</p>
              </div>
              <div className="md:w-80">
                {subscribed ? (
                  <div className="text-green-600 font-semibold">You're in. Watch your inbox.</div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="flex-1 bg-white border border-stone-300 px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900 transition-colors"
                    />
                    <button
                      type="submit"
                      className="bg-stone-900 text-white px-5 py-3 text-sm font-semibold hover:bg-stone-800 transition-colors whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Diagnostic */}
            <div className="fade-up flex flex-col md:flex-row md:items-center gap-6 pt-10 border-t border-stone-200">
              <div className="flex-1">
                <div className="text-xs font-mono text-stone-400 mb-2">SELF-DIAGNOSTIC</div>
                <p className="text-stone-500">32 questions. 8 minutes. Know your score and your highest friction point.</p>
              </div>
              <Link
                href="/diagnostic"
                className="inline-flex items-center gap-2 border border-stone-300 px-6 py-3 text-sm font-semibold hover:border-stone-900 hover:text-stone-900 transition-colors group whitespace-nowrap"
              >
                Take the Diagnostic
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Consult */}
            <div className="fade-up flex flex-col md:flex-row md:items-center gap-6 pt-10 border-t border-stone-200">
              <div className="flex-1">
                <div className="text-xs font-mono text-stone-400 mb-2">LIVE SESSION</div>
                <p className="text-stone-500">Want to run this on your org? One hour. I map the friction live. First session free.</p>
              </div>
              <Link
                href="/consult"
                className="inline-flex items-center gap-2 bg-stone-900 text-white px-6 py-3 text-sm font-semibold hover:bg-stone-800 transition-colors group whitespace-nowrap"
              >
                Book a Session
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-stone-200 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
              <div>
                <div className="font-black text-sm mb-4">GPI<span className="text-red-600">.</span>STUDIO</div>
                <p className="text-sm text-stone-400 leading-relaxed">
                  Organizational physics.<br />
                  We measure where energy gets stuck.
                </p>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-400 mb-4">RESEARCH</div>
                <div className="space-y-3">
                  <Link href="/insights" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Insights</Link>
                  <Link href="/insights/gpi-analyses" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Analyses</Link>
                  <Link href="/gpi-framework" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Framework</Link>
                </div>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-400 mb-4">WORK</div>
                <div className="space-y-3">
                  <Link href="/diagnostic" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Diagnostic</Link>
                  <Link href="/consult" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Book a Session</Link>
                  <Link href="/work-with-us" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Work With Us</Link>
                </div>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-400 mb-4">COMPANY</div>
                <div className="space-y-3">
                  <Link href="/about" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">About</Link>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-stone-200 flex justify-between items-center text-xs text-stone-400">
              <div>© {new Date().getFullYear()} Imagination G LLC</div>
              <div className="font-mono">gpi.studio</div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
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
    const contentResponse: Response = await fetch(
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

      if (allContent.length > 0) {
        featuredContent = allContent[0];

        const seenSeries = new Set<string>();
        if (featuredContent.series) seenSeries.add(featuredContent.series);

        for (const item of allContent.slice(1)) {
          if (!seenSeries.has(item.series) && seriesContent.length < 3) {
            seriesContent.push(item);
            seenSeries.add(item.series);
          }
        }

        if (seriesContent.length < 3) {
          for (const item of allContent.slice(1)) {
            if (!seriesContent.includes(item) && seriesContent.length < 3) {
              seriesContent.push(item);
            }
          }
        }
      }
    }

    let hasMore = true;
    let startCursor: string | undefined = undefined;

    while (hasMore) {
      const analysesResponse: Response = await fetch(
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
        for (const page of analysesData.results) {
          const name = page.properties?.Name?.title?.[0]?.plain_text || '';
          if (!name.toLowerCase().includes('deal')) {
            totalAnalyses++;
          }
        }
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
    revalidate: 60,
  };
};

export default Home;
