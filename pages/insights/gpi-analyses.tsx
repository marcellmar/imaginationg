/**
 * Snapshots - ISR from Notion
 * Pre-rendered at build time, revalidates every 30 minutes.
 */

import type { GetStaticProps, NextPage } from 'next';
import React, { useState } from 'react';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { useScrollReveal } from '../../hooks/useScrollReveal';

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

const seriesConfig: Record<string, { description: string }> = {
  'Weekly Smackdown': { description: 'Head-to-head GPI comparisons' },
  'Transition Watch': { description: 'Companies attempting transformation' },
  'Calcification Alert': { description: 'High-GPI particles in the news' },
  'Field Notes': { description: 'How low-GPI companies stay fluid' },
  'Wildcard': { description: 'Unexpected GPI scores' },
  'The Autopsy': { description: 'Forensic breakdown of dead companies' },
  'Vital Signs': { description: 'Ongoing metabolic monitoring' },
};

const getScoreColor = (score: number | null) => {
  if (score === null) return 'text-stone-400';
  if (score <= 3) return 'text-stone-900';
  if (score <= 6.9) return 'text-stone-500';
  return 'text-red-600';
};

const SnapshotsPage: NextPage<Props> = ({ content }) => {
  useScrollReveal();
  const [filter, setFilter] = useState<string | null>(null);

  const filtered = filter ? content.filter((c) => c.series === filter) : content;

  return (
    <>
      <SEOHead
        title="Snapshots | GPI Studio"
        description="Company snapshots through the GPI lens. Smackdowns, Vital Signs, Autopsies. Who's calcifying. Who's not."
      />

      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Navigation currentPage="reads" />

        {/* Hero */}
        <section className="pt-36 pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-400 mb-8">
              <span className="w-2 h-2 bg-red-500 rounded-full" />
              LIVE READS
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.05] tracking-headline">
              SNAPSHOTS<span className="text-red-600">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-500 max-w-2xl leading-relaxed">
              Company and industry readouts through the Growing Pains Index lens.
              Who&apos;s calcifying? Who&apos;s transforming? Who&apos;s already field?
            </p>
          </div>
        </section>

        {/* Series Filter */}
        <section className="py-8 px-6 border-t border-stone-200">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 fade-up">
              <button
                onClick={() => setFilter(null)}
                className={`px-4 py-2 text-sm font-semibold transition-colors ${
                  filter === null
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-500 hover:text-stone-900 border border-stone-200'
                }`}
              >
                All
              </button>
              {Object.entries(seriesConfig).map(([name]) => (
                <button
                  key={name}
                  onClick={() => setFilter(name)}
                  className={`px-4 py-2 text-sm font-semibold transition-colors ${
                    filter === name
                      ? 'bg-stone-900 text-white'
                      : 'bg-stone-100 text-stone-500 hover:text-stone-900 border border-stone-200'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="py-24 px-6 border-t border-stone-200">
          <div className="max-w-4xl mx-auto">
            {filtered.length === 0 ? (
              <div className="text-center py-20 border border-stone-200 fade-up">
                <h3 className="text-xl font-bold mb-2">No snapshots yet</h3>
                <p className="text-stone-500 max-w-md mx-auto">
                  {filter
                    ? `No ${filter} content published yet. Check back soon.`
                    : 'First snapshots publishing soon.'}
                </p>
              </div>
            ) : (
              <div className="space-y-6 fade-up-stagger">
                {filtered.map((item) => (
                  <article
                    key={item.id}
                    className="fade-up border border-stone-200 hover:border-stone-400 transition-colors bg-white"
                  >
                    <div className="px-6 py-3 border-b border-stone-100 flex items-center justify-between">
                      <span className="text-xs font-mono text-stone-400">
                        {item.series.toUpperCase()}
                      </span>
                      {item.publishDate && (
                        <span className="text-xs text-stone-400">
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
                        <p className="text-stone-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                          {item.teaser}
                        </p>
                      )}

                      {item.companies.length > 0 && (
                        <div className="space-y-2 mt-4">
                          {item.companies.map((company) => (
                            <div
                              key={company.id}
                              className="flex items-center justify-between bg-stone-50 px-3 py-2"
                            >
                              <div>
                                <span className="font-bold text-sm">{company.name}</span>
                                <span className="text-stone-400 text-xs ml-2">{company.sector}</span>
                              </div>
                              <span className={`font-mono font-bold text-sm ${getScoreColor(company.gpiScore)}`}>
                                {company.gpiScore?.toFixed(1) || '\u2014'}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {item.slug && (
                      <div className="px-6 py-3 border-t border-stone-100">
                        <Link
                          href={`/insights/gpi-analyses/${item.slug}`}
                          className="text-sm font-semibold text-stone-900 hover:text-red-600 transition-colors"
                        >
                          Read snapshot →
                        </Link>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 border-t border-stone-200 bg-white">
          <div className="max-w-4xl mx-auto text-center fade-up">
            <h2 className="text-2xl font-black mb-4">CURIOUS ABOUT YOUR OWN SCORE?</h2>
            <p className="text-stone-500 mb-8">
              32 questions. 7 dimensions. See where your organization&apos;s energy gets stuck.
            </p>
            <Link
              href="/diagnostic"
              className="inline-block bg-stone-900 text-white px-8 py-4 font-semibold hover:bg-stone-800 transition-colors"
            >
              Find the signal
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
                <div className="text-xs font-mono text-stone-400 mb-4">READS</div>
                <div className="space-y-3">
                  <Link href="/insights" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Reads</Link>
                  <Link href="/insights/snapshots" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Snapshots</Link>
                  <Link href="/gpi-framework" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Lens</Link>
                </div>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-400 mb-4">STUDIO</div>
                <div className="space-y-3">
                  <Link href="/studio" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Studio</Link>
                  <Link href="/intake" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Intake</Link>
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

export default SnapshotsPage;
