import type { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { ArrowRight, Search, X } from 'lucide-react';
import { hasSnapshot, getSnapshotSlug } from '../../lib/snapshots';

interface InsightCard {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  date?: string;
  live?: boolean;
}

interface Company {
  id: string;
  name: string;
  gpiScore: number | null;
  stage: string;
  sector: string;
  ticker: string;
}

interface InsightsPageProps {
  companies: Company[];
  totalCompanies: number;
}

const getScoreColor = (score: number | null) => {
  if (!score) return 'text-stone-500';
  if (score <= 3) return 'text-stone-900';
  if (score <= 6.9) return 'text-stone-500';
  return 'text-red-600';
};

const InsightsPage: NextPage<InsightsPageProps> = ({ companies, totalCompanies }) => {
  useScrollReveal();

  const [searchQuery, setSearchQuery] = useState('');

  const filteredCompanies = useMemo(() => {
    if (!searchQuery) return companies.slice(0, 12);
    const query = searchQuery.toLowerCase();
    return companies.filter((c) => {
      const nameMatch = c.name.toLowerCase().includes(query);
      const tickerMatch = c.ticker?.toLowerCase().includes(query);
      return nameMatch || tickerMatch;
    }).slice(0, 24);
  }, [companies, searchQuery]);

  const fieldCount = companies.filter(c => c.stage === 'Field').length;
  const transitionCount = companies.filter(c => c.stage === 'Transitioning').length;
  const particleCount = companies.filter(c => c.stage === 'Particle').length;

  const insights: InsightCard[] = [
    {
      slug: 'netflix-let-paramount-win',
      title: 'Netflix Let Paramount Win',
      subtitle: 'Feb 26, 2026',
      description: 'Paramount paid $110.9B for Warner Bros. Discovery. Netflix walked with $2.8B and a 13% stock jump. The GPI gap predicted this in December.',
      tag: 'LIVE ANALYSIS',
      live: true,
    },
    {
      slug: 'invested-in-the-waste',
      title: "You're Invested in the Waste",
      subtitle: 'The System Made You That Way',
      description: "The gap between how things should work and how they actually work isn't dysfunction. It's a product. Someone is selling it.",
      tag: 'STRUCTURAL LOCK-IN',
    },
    {
      slug: 'the-acquisition-trap',
      title: 'The Acquisition Trap',
      subtitle: 'Strategic Logic Is Never Enough',
      description: 'HP wrote off $8.8B. Amazon created billions. The difference was metabolic math, not strategy.',
      tag: 'CASE STUDY',
    },
    {
      slug: 'why-success-creates-rigidity',
      title: 'Success Creates Rigidity',
      subtitle: 'The Trap No One Sees Coming',
      description: "Organizations don't fail because they stop doing what made them successful. They fail because they can't stop doing it.",
      tag: 'ALL DIMENSIONS',
    },
    {
      slug: 'friction-is-margin',
      title: 'Friction Is Margin',
      subtitle: 'The Economics of Dysfunction',
      description: "That delay, that complexity, that confusion? Not a bug. It's someone's business model.",
      tag: 'STRUCTURAL LOCK-IN',
    },
    {
      slug: 'organizational-antibodies',
      title: 'Organizational Antibodies',
      subtitle: 'Good Ideas Get Rejected',
      description: 'Your organization has an immune system. It protects against foreign capabilities, even beneficial ones.',
      tag: 'ERROR CORRECTION',
    },
    {
      slug: 'metabolic-rate',
      title: 'Metabolic Rate',
      subtitle: 'The Speed of Organizational Change',
      description: 'Every organization has a metabolic rate that determines how fast it can process change. Mismatched rates predict integration failure.',
      tag: 'ALL DIMENSIONS',
    },
    {
      slug: 'the-spiral-model',
      title: 'The Spiral Model',
      subtitle: 'Transformation Moves in Spirals',
      description: "You can't jump from particle to field. You spiral, revisiting particle thinking at higher levels of field capability.",
      tag: 'TRANSFORMATION',
    },
    {
      slug: 'latent-capabilities',
      title: 'Latent Capabilities',
      subtitle: 'Assets You Have But Never Use',
      description: "Most organizations have far more capability than they deploy. The constraint isn't capacity. It's coordination infrastructure.",
      tag: 'KNOWLEDGE LOCATION',
    },
  ];

  const featured = insights[0];
  const rest = insights.slice(1);

  return (
    <>
      <SEOHead
        title="Insights | GPI Studio"
        description="Live analyses, case studies, and organizational physics. GPI patterns, metabolic rates, and the forces that determine whether you transform or calcify."
        ogImage="/images/og/insights.png"
      />

      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Navigation currentPage="insights" />

        {/* Hero */}
        <section className="pt-36 pb-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-400 mb-8">
              <span className="w-2 h-2 bg-red-500 rounded-full" />
              RESEARCH
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.05] tracking-headline">
              THE PHYSICS OF<br />ORGANIZATIONS<span className="text-red-600">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-500 max-w-2xl mx-auto leading-relaxed">
              Live analyses, case studies, and the patterns that determine whether an org transforms or calcifies.
            </p>
          </div>
        </section>

        {/* Featured + Content Series */}
        <section className="py-8 px-6 border-t border-stone-200">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 fade-up-stagger">

            {/* Live Analysis */}
            <Link href={`/insights/${featured.slug}`} className="block group fade-up">
              <div className="border border-stone-300 p-8 hover:border-stone-400 transition-all h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center gap-1.5 text-xs font-mono text-red-500">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                    LIVE ANALYSIS
                  </span>
                  <span className="text-xs text-stone-400">Feb 26, 2026</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black mb-3 group-hover:text-red-600 transition-colors tracking-headline">
                  {featured.title}
                  <ArrowRight className="inline ml-2" size={20} />
                </h2>
                <p className="text-stone-500 text-sm leading-relaxed">{featured.description}</p>
              </div>
            </Link>

            {/* GPI Content Series */}
            <Link href="/insights/gpi-analyses" className="block group fade-up">
              <div className="border border-stone-200 bg-white p-8 hover:border-stone-400 transition-all h-full">
                <div className="text-xs font-mono text-stone-400 mb-4">GPI CONTENT SERIES</div>
                <h2 className="text-2xl md:text-3xl font-black mb-3 group-hover:text-red-600 transition-colors tracking-headline">
                  Smackdowns. Autopsies. Vital Signs.
                  <ArrowRight className="inline ml-2" size={20} />
                </h2>
                <p className="text-stone-500 text-sm mb-6 leading-relaxed">Real companies. Real scores. Head-to-head comparisons, forensic breakdowns, and metabolic monitoring.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs px-3 py-1.5 bg-stone-100 text-stone-600 border border-stone-200">Smackdown</span>
                  <span className="text-xs px-3 py-1.5 bg-stone-100 text-stone-600 border border-stone-200">Autopsy</span>
                  <span className="text-xs px-3 py-1.5 bg-stone-100 text-stone-600 border border-stone-200">Vital Signs</span>
                  <span className="text-xs px-3 py-1.5 bg-stone-100 text-stone-600 border border-stone-200">Transition</span>
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* Company Database */}
        <section className="py-24 px-6 border-t border-stone-200 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 fade-up">
              <div>
                <div className="text-xs font-mono text-stone-400 mb-2">GPI DATABASE</div>
                <h2 className="text-3xl md:text-4xl font-black tracking-headline">
                  COMPANIES SCORED<span className="text-red-600">.</span>
                </h2>
                <p className="text-stone-500 text-sm mt-2">Search by name or ticker to see how they measure.</p>
              </div>

              <div className="relative md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
                <input
                  type="text"
                  placeholder="Search by name or ticker..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 px-9 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-900"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 fade-up">
              {filteredCompanies.map((company) => {
                const snapshotSlug = getSnapshotSlug(company.name);

                const inner = (
                  <div className="border border-stone-200 p-4 hover:border-stone-400 transition-colors bg-stone-50 h-full">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-bold text-sm text-stone-900">{company.name}</div>
                        <div className="text-xs text-stone-400 mt-0.5">
                          {company.ticker && <span>{company.ticker} · </span>}
                          {company.sector}
                        </div>
                      </div>
                      <div className={`text-lg font-black ${getScoreColor(company.gpiScore)}`}>
                        {company.gpiScore?.toFixed(1) || '—'}
                      </div>
                    </div>
                  </div>
                );

                return snapshotSlug ? (
                  <Link key={company.id} href={`/companies/${snapshotSlug}`}>
                    {inner}
                  </Link>
                ) : (
                  <div key={company.id}>{inner}</div>
                );
              })}
            </div>

            {!searchQuery && companies.length > 12 && (
              <div className="mt-6 text-center">
                <Link
                  href="/companies"
                  className="text-sm font-bold text-stone-500 hover:text-stone-900 transition-colors"
                >
                  VIEW ALL COMPANIES →
                </Link>
              </div>
            )}

            {searchQuery && filteredCompanies.length === 0 && (
              <div className="text-center py-8 text-stone-400">
                No companies match "{searchQuery}"
              </div>
            )}
          </div>
        </section>

        {/* Concept Grid */}
        <section className="py-24 px-6 border-t border-stone-200">
          <div className="max-w-4xl mx-auto">
            <div className="fade-up text-xs font-mono text-stone-400 mb-2">FROM THE FRAMEWORK</div>
            <h2 className="fade-up text-3xl md:text-4xl font-black mb-12 tracking-headline">CONCEPTS<span className="text-red-600">.</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 fade-up-stagger">
              {rest.map((insight) => (
                <Link
                  key={insight.slug}
                  href={`/insights/${insight.slug}`}
                  className="group border border-stone-200 p-7 hover:border-stone-400 hover:shadow-sm transition-all bg-white fade-up"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-stone-400">{insight.tag}</span>
                  </div>
                  <h3 className="text-xl font-black mb-2 group-hover:text-red-600 transition-colors">
                    {insight.title}
                    <ArrowRight className="inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                  </h3>
                  <p className="text-sm text-stone-500 mb-2">{insight.subtitle}</p>
                  <p className="text-stone-500 text-sm leading-relaxed">{insight.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 border-t border-stone-200 bg-white">
          <div className="max-w-4xl mx-auto text-center fade-up">
            <p className="text-stone-400 mb-3 text-sm font-mono">32 QUESTIONS. NOT A GRADE. A READ.</p>
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-headline">
              KNOW YOUR SCORE<span className="text-red-600">.</span>
            </h2>
            <Link
              href="/diagnostic"
              className="inline-flex items-center gap-2 bg-stone-900 px-8 py-4 text-sm font-semibold hover:bg-stone-800 transition-colors group text-white"
            >
              Take the Diagnostic
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-stone-200">
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

export const getStaticProps: GetStaticProps<InsightsPageProps> = async () => {
  const NOTION_API_KEY = process.env.NOTION_API_KEY;
  const GPI_ANALYSES_DB = '7d636c92-c316-4bfc-9bc7-7899e575e19e';

  const companies: Company[] = [];

  if (!NOTION_API_KEY) {
    return { props: { companies, totalCompanies: 0 } };
  }

  try {
    let hasMore = true;
    let startCursor: string | undefined = undefined;

    while (hasMore) {
      const response: Response = await fetch(
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
            sorts: [{ property: 'GPI Score', direction: 'ascending' }],
            ...(startCursor && { start_cursor: startCursor }),
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();

        for (const page of data.results) {
          const props = page.properties;
          const name = props.Name?.title?.[0]?.plain_text || 'Unknown';
          if (name.toLowerCase().includes('deal')) continue;

          companies.push({
            id: page.id,
            name,
            gpiScore: props['GPI Score']?.number || null,
            stage: props['Transformation Stage']?.select?.name || 'Unknown',
            sector: props.Sector?.select?.name || 'Other',
            ticker: props.Ticker?.rich_text?.[0]?.plain_text || '',
          });
        }

        hasMore = data.has_more;
        startCursor = data.next_cursor;
      } else {
        hasMore = false;
      }
    }
  } catch (error) {
    console.error('Error fetching companies:', error);
  }

  return {
    props: {
      companies,
      totalCompanies: companies.length,
    },
    revalidate: 60,
  };
};

export default InsightsPage;
