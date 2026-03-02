/**
 * GPI Analyses - ISR from Notion
 * Pre-rendered at build time, revalidates every 30 minutes.
 */

import type { GetStaticProps, NextPage } from 'next';
import React, { useState } from 'react';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const GPI_CONTENT_DB = '2d8990ae-cd45-811a-b634-c11c51be4013';
const GPI_ANALYSES_DB = '7d636c92-c316-4bfc-9bc7-7899e575e19e';

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

interface Props {
  content: ContentItem[];
}

const seriesConfig: Record<string, { color: string; bg: string; icon: string; description: string }> = {
  'Weekly Smackdown': {
    color: 'text-red-500',
    bg: 'bg-red-950/30 border-red-900',
    icon: '⚔️',
    description: 'Head-to-head GPI comparisons',
  },
  'Transition Watch': {
    color: 'text-yellow-500',
    bg: 'bg-yellow-950/30 border-yellow-900',
    icon: '🔄',
    description: 'Companies attempting transformation',
  },
  'Calcification Alert': {
    color: 'text-orange-500',
    bg: 'bg-orange-950/30 border-orange-900',
    icon: '🚨',
    description: 'High-GPI particles in the news',
  },
  'Field Notes': {
    color: 'text-green-500',
    bg: 'bg-green-950/30 border-green-900',
    icon: '📡',
    description: 'How low-GPI companies stay fluid',
  },
  'Wildcard': {
    color: 'text-purple-500',
    bg: 'bg-purple-950/30 border-purple-900',
    icon: '🃏',
    description: 'Unexpected GPI scores',
  },
  'The Autopsy': {
    color: 'text-zinc-400',
    bg: 'bg-zinc-950/30 border-zinc-800',
    icon: '🪦',
    description: 'Forensic breakdown of dead companies',
  },
  'Vital Signs': {
    color: 'text-blue-500',
    bg: 'bg-blue-950/30 border-blue-900',
    icon: '🩺',
    description: 'Ongoing metabolic monitoring',
  },
};

const getStageColor = (stage: string) => {
  switch (stage) {
    case 'Field': return 'text-green-500 bg-green-950/50';
    case 'Transitioning': return 'text-yellow-500 bg-yellow-950/50';
    case 'Particle': return 'text-red-500 bg-red-950/50';
    default: return 'text-zinc-500 bg-zinc-900';
  }
};

const GPIAnalysesPage: NextPage<Props> = ({ content }) => {
  const [filter, setFilter] = useState<string | null>(null);

  const filtered = filter ? content.filter((c) => c.series === filter) : content;

  return (
    <>
      <SEOHead
        title="GPI Analyses | GPI Studio"
        description="66+ company analyses through the GPI lens. Smackdowns, Vital Signs, Autopsies. Who's calcifying. Who's not."
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="analyses" />

        {/* Hero */}
        <section className="pt-28 pb-12 px-6 border-b border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              66+ COMPANIES ANALYZED
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              GPI ANALYSES<span className="text-red-600">.</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              Weekly breakdowns of companies and industries through the Growing Pains Index lens.
              Who&apos;s calcifying? Who&apos;s transforming? Who&apos;s already field?
            </p>
          </div>
        </section>

        {/* Series Filter */}
        <section className="py-8 px-6 border-b border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setFilter(null)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === null
                    ? 'bg-white text-black'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white'
                }`}
              >
                ALL
              </button>
              {Object.entries(seriesConfig).map(([name, config]) => (
                <button
                  key={name}
                  onClick={() => setFilter(name)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    filter === name
                      ? `${config.bg} ${config.color} border`
                      : 'bg-zinc-900 text-zinc-400 hover:text-white'
                  }`}
                >
                  {config.icon} {name.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            {filtered.length === 0 ? (
              <div className="text-center py-20 border border-zinc-800 rounded-xl">
                <p className="text-4xl mb-4">📊</p>
                <h3 className="text-xl font-bold mb-2">No analyses yet</h3>
                <p className="text-zinc-500 max-w-md mx-auto">
                  {filter
                    ? `No ${filter} content published yet. Check back soon.`
                    : 'First analyses publishing soon. 66+ companies already scored.'}
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((item) => {
                  const config = seriesConfig[item.series] || seriesConfig['Wildcard'];
                  return (
                    <article
                      key={item.id}
                      className={`border rounded-xl overflow-hidden hover:border-zinc-700 transition-colors ${config.bg}`}
                    >
                      <div className="px-6 py-3 border-b border-zinc-800/50">
                        <span className={`text-xs font-bold ${config.color}`}>
                          {config.icon} {item.series.toUpperCase()}
                        </span>
                        {item.publishDate && (
                          <span className="text-xs text-zinc-600 ml-3">
                            {new Date(item.publishDate).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        )}
                      </div>

                      <div className="p-6">
                        <h2 className="text-xl font-bold mb-3 leading-tight">
                          {item.headline}
                        </h2>

                        {item.teaser && (
                          <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                            {item.teaser}
                          </p>
                        )}

                        {item.companies.length > 0 && (
                          <div className="space-y-2 mt-4">
                            {item.companies.map((company) => (
                              <div
                                key={company.id}
                                className="flex items-center justify-between bg-black/30 rounded-lg px-3 py-2"
                              >
                                <div>
                                  <span className="font-bold text-sm">{company.name}</span>
                                  <span className="text-zinc-600 text-xs ml-2">{company.sector}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className={`text-xs px-2 py-0.5 rounded ${getStageColor(company.stage)}`}>
                                    {company.stage}
                                  </span>
                                  <span className="font-mono font-bold text-sm">
                                    {company.gpiScore?.toFixed(1) || '—'}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {item.slug && (
                        <div className="px-6 py-3 border-t border-zinc-800/50">
                          <Link
                            href={`/insights/gpi-analyses/${item.slug}`}
                            className={`text-sm font-bold ${config.color} hover:underline`}
                          >
                            READ ANALYSIS →
                          </Link>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-black mb-4">CURIOUS ABOUT YOUR OWN SCORE?</h2>
            <p className="text-zinc-400 mb-8">
              32 questions. 7 dimensions. See where your organization&apos;s energy gets stuck.
            </p>
            <Link
              href="/diagnostic"
              className="inline-block bg-red-600 px-8 py-4 font-bold hover:bg-red-700 transition-colors"
            >
              TAKE THE DIAGNOSTIC
            </Link>
          </div>
        </section>

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

export const getStaticProps: GetStaticProps = async () => {
  if (!NOTION_API_KEY) {
    return { props: { content: [] }, revalidate: 1800 };
  }

  try {
    const response = await fetch(
      `https://api.notion.com/v1/databases/${GPI_CONTENT_DB}/query`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${NOTION_API_KEY}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2022-06-28',
        },
        body: JSON.stringify({
          filter: { property: 'Status', select: { equals: 'Published' } },
          sorts: [{ property: 'Publish Date', direction: 'descending' }],
        }),
      }
    );

    if (!response.ok) {
      return { props: { content: [] }, revalidate: 300 };
    }

    const data = await response.json();

    // Collect all company IDs
    const allCompanyIds = new Set<string>();
    for (const page of data.results) {
      for (const rel of page.properties['Featured Companies']?.relation || []) {
        allCompanyIds.add(rel.id);
      }
    }

    // Fetch company details in parallel
    const companiesMap = new Map<string, Company>();
    await Promise.all(
      Array.from(allCompanyIds).map(async (id) => {
        try {
          const res = await fetch(`https://api.notion.com/v1/pages/${id}`, {
            headers: {
              Authorization: `Bearer ${NOTION_API_KEY}`,
              'Notion-Version': '2022-06-28',
            },
          });
          if (res.ok) {
            const page = await res.json();
            const p = page.properties;
            companiesMap.set(id, {
              id,
              name: p.Name?.title?.[0]?.plain_text || 'Unknown',
              gpiScore: p['GPI Score']?.number || null,
              stage: p['Transformation Stage']?.select?.name || 'Unknown',
              sector: p.Sector?.select?.name || 'Unknown',
            });
          }
        } catch {
          // skip failed company fetches
        }
      })
    );

    const content: ContentItem[] = data.results.map((page: {
      id: string;
      properties: {
        Headline: { title: { plain_text: string }[] };
        Series: { select: { name: string } | null };
        'Publish Date': { date: { start: string } | null };
        Teaser: { rich_text: { plain_text: string }[] };
        Slug: { rich_text: { plain_text: string }[] };
        'Featured Companies': { relation: { id: string }[] };
      };
    }) => {
      const props = page.properties;
      const companyIds = props['Featured Companies']?.relation?.map((r) => r.id) || [];
      return {
        id: page.id,
        headline: props.Headline?.title?.[0]?.plain_text || '',
        series: props.Series?.select?.name || '',
        publishDate: props['Publish Date']?.date?.start || '',
        teaser: props.Teaser?.rich_text?.[0]?.plain_text || '',
        slug: props.Slug?.rich_text?.[0]?.plain_text || '',
        companies: companyIds.map((id) => companiesMap.get(id)).filter(Boolean) as Company[],
      };
    });

    return {
      props: { content },
      revalidate: 1800, // 30 minutes
    };
  } catch {
    return { props: { content: [] }, revalidate: 300 };
  }
};

export default GPIAnalysesPage;
