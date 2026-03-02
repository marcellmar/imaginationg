import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
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
      // fail silently, still show success to user
      setSubscribed(true);
    }
  };

  return (
    <>
      <SEOHead
        title="GPI Studio | Organizational Physics"
        description="Some companies move. Some companies calcify. We measure the difference. 101 company analyses across 7 dimensions."
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

        {/* Hero */}
        <section className="pt-28 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Copy */}
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 mb-6">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  ORGANIZATIONAL PHYSICS
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                  YOUR ORG HAS A<br />METABOLIC RATE<span className="text-red-600">.</span>
                </h1>

                <p className="text-xl text-zinc-400 mb-4 max-w-2xl">
                  Most friction doesn't show up on a P&L. It shows up in how long decisions take, whether mistakes get fixed or defended, whether your best people have room to move.
                </p>

                <p className="text-xl text-white font-bold">
                  We measure it.
                </p>
              </div>

              {/* Right: Calcification Graphic */}
              <div className="hidden lg:flex justify-center">
                <svg viewBox="0 0 400 300" className="w-full max-w-md">
                  <defs>
                    {/* Gradient from fluid green to calcified red */}
                    <linearGradient id="calcifyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22c55e" />
                      <stop offset="50%" stopColor="#eab308" />
                      <stop offset="100%" stopColor="#ef4444" />
                    </linearGradient>
                  </defs>

                  {/* Background subtle grid (the rigid structure forming) */}
                  <g opacity="0.1">
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                      <line key={`h${i}`} x1="50" y1={40 + i * 30} x2="350" y2={40 + i * 30} stroke="#ef4444" strokeWidth="1">
                        <animate attributeName="opacity" values="0;0.3;0" dur={`${4 + i * 0.2}s`} repeatCount="indefinite" />
                      </line>
                    ))}
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                      <line key={`v${i}`} x1={50 + i * 33} y1="40" x2={50 + i * 33} y2="260" stroke="#ef4444" strokeWidth="1">
                        <animate attributeName="opacity" values="0;0.3;0" dur={`${4.5 + i * 0.15}s`} repeatCount="indefinite" />
                      </line>
                    ))}
                  </g>

                  {/* Fluid particles that slow and crystallize */}
                  {[
                    { startX: 60, startY: 80, endX: 320, endY: 100, dur: 8, delay: 0 },
                    { startX: 70, startY: 120, endX: 300, endY: 130, dur: 9, delay: 0.5 },
                    { startX: 55, startY: 160, endX: 330, endY: 160, dur: 7, delay: 1 },
                    { startX: 80, startY: 200, endX: 290, endY: 190, dur: 10, delay: 1.5 },
                    { startX: 65, startY: 240, endX: 310, endY: 220, dur: 8.5, delay: 0.3 },
                  ].map((p, i) => (
                    <g key={i}>
                      {/* The particle */}
                      <circle r="6" fill="url(#calcifyGradient)">
                        <animate
                          attributeName="cx"
                          values={`${p.startX};${p.startX + (p.endX - p.startX) * 0.3};${p.startX + (p.endX - p.startX) * 0.5};${p.startX + (p.endX - p.startX) * 0.7};${p.endX}`}
                          keyTimes="0;0.3;0.5;0.7;1"
                          dur={`${p.dur}s`}
                          repeatCount="indefinite"
                          begin={`${p.delay}s`}
                        />
                        <animate
                          attributeName="cy"
                          values={`${p.startY};${p.startY + 10};${p.startY};${p.endY - 5};${p.endY}`}
                          keyTimes="0;0.3;0.5;0.7;1"
                          dur={`${p.dur}s`}
                          repeatCount="indefinite"
                          begin={`${p.delay}s`}
                        />
                        {/* Color shift from green to red */}
                        <animate
                          attributeName="fill"
                          values="#22c55e;#22c55e;#eab308;#ef4444;#ef4444"
                          keyTimes="0;0.3;0.5;0.8;1"
                          dur={`${p.dur}s`}
                          repeatCount="indefinite"
                          begin={`${p.delay}s`}
                        />
                        {/* Shape morph - circle to square-ish */}
                        <animate
                          attributeName="rx"
                          values="6;6;6;4;2"
                          keyTimes="0;0.3;0.5;0.8;1"
                          dur={`${p.dur}s`}
                          repeatCount="indefinite"
                          begin={`${p.delay}s`}
                        />
                      </circle>
                    </g>
                  ))}

                  {/* Additional flowing particles on left (healthy) */}
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <circle key={`flow${i}`} r="4" fill="#22c55e" opacity="0.6">
                      <animate
                        attributeName="cx"
                        values={`${40 + i * 5};${80 + i * 5};${40 + i * 5}`}
                        dur={`${1.5 + i * 0.2}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="cy"
                        values={`${70 + i * 35};${80 + i * 35};${70 + i * 35}`}
                        dur={`${1.2 + i * 0.15}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  ))}

                  {/* Crystallized/stuck particles on right */}
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <rect
                      key={`stuck${i}`}
                      x={320 + (i % 2) * 25}
                      y={60 + i * 35}
                      width="8"
                      height="8"
                      fill="#ef4444"
                      opacity="0.7"
                    >
                      <animate
                        attributeName="opacity"
                        values="0.4;0.8;0.4"
                        dur={`${2 + i * 0.3}s`}
                        repeatCount="indefinite"
                      />
                    </rect>
                  ))}

                  {/* Labels */}
                  <text x="60" y="280" fill="#22c55e" fontSize="10" fontFamily="monospace" opacity="0.7">FLUID</text>
                  <text x="320" y="280" fill="#ef4444" fontSize="10" fontFamily="monospace" opacity="0.7">CALCIFIED</text>

                  {/* Arrow showing direction */}
                  <path d="M 150 285 L 250 285" stroke="#52525b" strokeWidth="1" markerEnd="url(#arrowhead)" />
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#52525b" />
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* THIS JUST HAPPENED */}
        <section className="px-6 border-t border-red-900/50 bg-red-950/10">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/insights/netflix-let-paramount-win"
              className="flex items-center justify-between py-4 group"
            >
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-xs font-mono text-red-500">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                  THIS JUST HAPPENED
                </span>
                <span className="text-xs font-mono text-zinc-600">FEB 26, 2026</span>
                <span className="text-sm font-bold text-white group-hover:text-red-500 transition-colors">
                  Netflix Let Paramount Win. The GPI gap predicted it in December.
                </span>
              </div>
              <span className="text-xs font-mono text-red-500 group-hover:text-red-400 transition-colors whitespace-nowrap">
                READ →
              </span>
            </Link>
          </div>
        </section>

        {/* Latest Analyses */}
        <section className="py-12 px-6 border-t border-zinc-900 bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="text-xs font-mono text-zinc-600">LATEST ANALYSES</div>
              <Link href="/insights/gpi-analyses" className="text-xs font-mono text-red-500 hover:text-red-400">
                VIEW ALL →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[featuredContent, ...seriesContent.slice(0, 2)].filter(Boolean).map((item) => (
                item && (
                  <Link
                    key={item.id}
                    href={item.slug ? `/insights/gpi-analyses/${item.slug}` : '/insights/gpi-analyses'}
                    className="block group"
                  >
                    <div className="border border-zinc-800 p-6 h-full hover:border-red-600/50 transition-all bg-black">
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
                )
              ))}
              {/* Fallback if no content */}
              {!featuredContent && seriesContent.length === 0 && (
                <>
                  <Link href="/insights/gpi-analyses" className="block group">
                    <div className="border border-zinc-800 p-6 h-full hover:border-red-600/50 transition-all bg-black">
                      <div className="text-xs font-mono text-red-500 mb-3">WEEKLY SMACKDOWN</div>
                      <h3 className="font-bold mb-2 group-hover:text-red-500 transition-colors">
                        Head-to-Head GPI
                      </h3>
                      <p className="text-sm text-zinc-500">Two companies. Same lens. One moves, one doesn't.</p>
                    </div>
                  </Link>
                  <Link href="/insights/gpi-analyses" className="block group">
                    <div className="border border-zinc-800 p-6 h-full hover:border-orange-600/50 transition-all bg-black">
                      <div className="text-xs font-mono text-orange-500 mb-3">CALCIFICATION ALERT</div>
                      <h3 className="font-bold mb-2 group-hover:text-orange-500 transition-colors">
                        The Physics Say Trouble
                      </h3>
                      <p className="text-sm text-zinc-500">When the score tells you what the earnings call won't.</p>
                    </div>
                  </Link>
                  <Link href="/insights/gpi-analyses" className="block group">
                    <div className="border border-zinc-800 p-6 h-full hover:border-blue-600/50 transition-all bg-black">
                      <div className="text-xs font-mono text-blue-500 mb-3">VITAL SIGNS</div>
                      <h3 className="font-bold mb-2 group-hover:text-blue-500 transition-colors">
                        Reading the Monitors
                      </h3>
                      <p className="text-sm text-zinc-500">Metabolic stress before the market sees it.</p>
                    </div>
                  </Link>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Framework */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs font-mono text-zinc-600 mb-4">THE FRAMEWORK</div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-black mb-4">
                  SEVEN SIGNALS<span className="text-red-600">.</span>
                </h2>
                <p className="text-zinc-400 mb-8">
                  GPI doesn't measure sentiment or culture scores. It measures the physical properties of how an org moves. Seven dimensions. Each one tells you something about where energy is leaking.
                </p>
                <Link
                  href="/gpi-framework"
                  className="inline-flex items-center gap-2 text-white font-bold hover:text-red-500 transition-colors group"
                >
                  SEE THE FRAMEWORK
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="space-y-0">
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
                      className="flex items-center gap-3 py-3 border-b border-zinc-900 hover:border-red-900 group transition-colors"
                    >
                      <Icon size={14} className="text-zinc-600 group-hover:text-red-500 transition-colors flex-shrink-0" />
                      <span className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors">
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
        <section className="py-16 px-6 border-t border-zinc-900 bg-zinc-950">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Book Context */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen size={20} className="text-red-600" />
                  <span className="text-xs font-mono text-zinc-500">FROM THE UPCOMING BOOK</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                  THE GROWING<br />PAINS INDEX<span className="text-red-600">.</span>
                </h2>

                <p className="text-lg text-zinc-400 mb-4">
                  Calcification isn't dysfunction. It's the operating system that built you, running past its environment.
                </p>

                <p className="text-zinc-500 mb-4">
                  After scoring 100+ companies across seven dimensions, one pattern keeps appearing: the decisions that made the org work are the same ones making it not work. The playbook didn't fail. The terrain shifted. And nobody updated the playbook.
                </p>

                <p className="text-zinc-500 mb-8">
                  That's not a strategy problem. That's physics.
                </p>

                <Link
                  href="/insights"
                  className="inline-flex items-center gap-2 text-white font-bold hover:text-red-500 transition-colors group"
                >
                  READ THE INSIGHTS
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right: Featured Insight Card */}
              <Link href="/insights/invested-in-the-waste" className="block group">
                <div className="border-2 border-red-600/50 bg-black p-8 hover:border-red-600 transition-all relative overflow-hidden">
                  <div className="absolute top-4 right-4 opacity-20">
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
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono text-red-500 bg-red-500/10 px-2 py-1">FEATURED</span>
                      <span className="text-xs font-mono text-zinc-600">CHAPTER 2</span>
                    </div>

                    <h3 className="text-2xl font-black mb-3 group-hover:text-red-500 transition-colors">
                      You're Invested in the Waste
                      <ArrowRight className="inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                    </h3>

                    <p className="text-zinc-400 mb-4">
                      The gap between how things should work and how they actually work isn't dysfunction. It's a product. Someone is selling it.
                    </p>

                    <p className="text-red-500 font-bold">
                      That someone might be you.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom CTAs */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Newsletter */}
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="text-xs font-mono text-zinc-600 mb-2">WEEKLY ANALYSIS</div>
                <p className="text-zinc-400">Who's calcifying. Who's not. No spam.</p>
              </div>
              <div className="md:w-80">
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
                      className="bg-red-600 px-5 py-3 font-bold hover:bg-red-700 transition-colors whitespace-nowrap"
                    >
                      IN
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Diagnostic */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 pt-8 border-t border-zinc-900">
              <div className="flex-1">
                <div className="text-xs font-mono text-zinc-600 mb-2">SELF-DIAGNOSTIC</div>
                <p className="text-zinc-400">32 questions. 8 minutes. Know your score and your highest friction point.</p>
              </div>
              <Link
                href="/diagnostic"
                className="inline-flex items-center gap-2 border border-zinc-700 px-6 py-3 font-bold hover:border-red-600 hover:text-red-500 transition-colors group whitespace-nowrap"
              >
                TAKE THE DIAGNOSTIC
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Consult */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 pt-8 border-t border-zinc-900">
              <div className="flex-1">
                <div className="text-xs font-mono text-zinc-600 mb-2">LIVE SESSION</div>
                <p className="text-zinc-400">Want to run this on your org? One hour. I map the friction live. First session free.</p>
              </div>
              <Link
                href="/consult"
                className="inline-flex items-center gap-2 bg-red-600 px-6 py-3 font-bold hover:bg-red-700 transition-colors group whitespace-nowrap"
              >
                BOOK A SESSION
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

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
    // Fetch published content from GPI Content database
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

    // Count total companies in GPI Analyses database (paginate to get full count, exclude deals)
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
        // Count only companies, not deals
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
