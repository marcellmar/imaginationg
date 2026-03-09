/**
 * Individual GPI Analysis Page
 * Pre-rendered via getStaticPaths, revalidates every hour.
 */

import type { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import { ArticleGraphic } from '../../../components/ArticleGraphics';

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const GPI_CONTENT_DB = '2d8990ae-cd45-811a-b634-c11c51be4013';

const audioMap: Record<string, { src: string; duration: string; title: string }> = {
  'shadow-work-self-checkout-heist': {
    src: '/audio/shadow-work-heist.mp3',
    duration: '11:56',
    title: 'The $12 Billion Shadow Work Heist - Deep Dive',
  },
};

interface Company {
  id: string;
  name: string;
  gpiScore: number | null;
  stage: string;
  sector: string;
  decisionLatency?: number;
  errorCorrection?: number;
  knowledgeLocation?: number;
  talentFlow?: number;
  knowledgeVelocity?: number;
  structuralLockIn?: number;
  capitalIntensity?: number;
  frictionPoints: string[];
}

interface ContentBlock {
  id: string;
  type: string;
  content: {
    text: string;
    href?: string;
    bold?: boolean;
    italic?: boolean;
    code?: boolean;
  }[];
}

interface AnalysisContent {
  id: string;
  headline: string;
  series: string;
  publishDate: string;
  teaser: string;
  slug: string;
  companies: Company[];
  blocks: ContentBlock[];
}

interface Props {
  content: AnalysisContent;
}

const seriesConfig: Record<string, { color: string; bg: string; icon: string }> = {
  'Weekly Smackdown': { color: 'text-stone-600', bg: 'bg-white', icon: '⚔️' },
  'Transition Watch': { color: 'text-stone-600', bg: 'bg-white', icon: '🔄' },
  'Wildcard': { color: 'text-stone-600', bg: 'bg-white', icon: '🃏' },
  'Calcification Alert': { color: 'text-stone-600', bg: 'bg-white', icon: '🚨' },
  'Field Notes': { color: 'text-stone-600', bg: 'bg-white', icon: '📡' },
  'The Autopsy': { color: 'text-stone-500', bg: 'bg-white', icon: '🪦' },
  'Vital Signs': { color: 'text-stone-600', bg: 'bg-white', icon: '🩺' },
};

const getStageColor = (stage: string) => {
  switch (stage) {
    case 'Field': return 'text-stone-900 border-stone-400';
    case 'Transitioning': return 'text-stone-600 border-stone-300';
    case 'Particle': return 'text-stone-500 border-stone-200';
    default: return 'text-stone-500 border-stone-200';
  }
};

const GPIRadar = ({ company }: { company: Company }) => {
  const dimensions = [
    { key: 'decisionLatency', label: 'Decision', value: company.decisionLatency },
    { key: 'errorCorrection', label: 'Error Corr', value: company.errorCorrection },
    { key: 'knowledgeLocation', label: 'Knowledge', value: company.knowledgeLocation },
    { key: 'talentFlow', label: 'Talent', value: company.talentFlow },
    { key: 'knowledgeVelocity', label: 'Velocity', value: company.knowledgeVelocity },
    { key: 'structuralLockIn', label: 'Lock-In', value: company.structuralLockIn },
    { key: 'capitalIntensity', label: 'Capital', value: company.capitalIntensity },
  ];

  return (
    <div className="grid grid-cols-7 gap-1 text-center">
      {dimensions.map((dim) => (
        <div key={dim.key} className="flex flex-col items-center">
          <div
            className="w-8 h-24 bg-stone-100 rounded relative overflow-hidden"
            title={`${dim.label}: ${dim.value}/10`}
          >
            <div
              className="absolute bottom-0 left-0 right-0 bg-stone-400"
              style={{
                height: `${((dim.value || 0) / 10) * 100}%`,
                opacity: 0.12 + ((dim.value || 0) / 10) * 0.65,
              }}
            />
          </div>
          <span className="text-[10px] text-stone-500 mt-1">{dim.label}</span>
          <span className="text-xs font-mono font-bold">{dim.value || '—'}</span>
        </div>
      ))}
    </div>
  );
};

const RenderBlock = ({ block }: { block: ContentBlock }) => {
  const renderText = (content: ContentBlock['content']) => {
    return content.map((part, i) => {
      if (part.href) return <a key={i} href={part.href} className="text-amber-600 hover:underline">{part.text}</a>;
      if (part.bold) return <strong key={i}>{part.text}</strong>;
      if (part.italic) return <em key={i}>{part.text}</em>;
      if (part.code) return <code key={i} className="bg-stone-200 px-1 rounded">{part.text}</code>;
      return <span key={i}>{part.text}</span>;
    });
  };

  switch (block.type) {
    case 'paragraph':
      return <p className="text-stone-600 leading-relaxed mb-4">{renderText(block.content)}</p>;
    case 'heading_1':
      return <h1 className="text-3xl font-black mt-8 mb-4">{renderText(block.content)}</h1>;
    case 'heading_2':
      return <h2 className="text-2xl font-black mt-8 mb-4">{renderText(block.content)}</h2>;
    case 'heading_3':
      return <h3 className="text-xl font-bold mt-6 mb-3">{renderText(block.content)}</h3>;
    case 'bulleted_list_item':
      return <li className="text-stone-600 mb-2">{renderText(block.content)}</li>;
    case 'numbered_list_item':
      return <li className="text-stone-600 mb-2">{renderText(block.content)}</li>;
    case 'quote':
      return (
        <blockquote className="border-l border-stone-300 pl-6 py-2 my-6 text-xl text-stone-500 italic">
          {renderText(block.content)}
        </blockquote>
      );
    case 'callout':
      return (
        <div className="bg-stone-100 border border-stone-300 rounded-lg p-4 my-6">
          <p className="text-stone-700 font-medium">{renderText(block.content)}</p>
        </div>
      );
    case 'divider':
      return <hr className="border-stone-200 my-8" />;
    default:
      return null;
  }
};

const groupBlocks = (blocks: ContentBlock[]): (ContentBlock | ContentBlock[])[] => {
  const result: (ContentBlock | ContentBlock[])[] = [];
  let i = 0;
  while (i < blocks.length) {
    const block = blocks[i];
    if (block.type === 'bulleted_list_item' || block.type === 'numbered_list_item') {
      const group: ContentBlock[] = [block];
      while (i + 1 < blocks.length && blocks[i + 1].type === block.type) {
        i++;
        group.push(blocks[i]);
      }
      result.push(group);
    } else {
      result.push(block);
    }
    i++;
  }
  return result;
};

const AnalysisPage = ({ content }: Props) => {
  const config = seriesConfig[content.series] || seriesConfig['Wildcard'];

  return (
    <>
      <SEOHead
        title={`${content.headline} | GPI Analysis`}
        description={content.teaser}
      />

      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Navigation currentPage="insights" />

        {/* Hero */}
        <section className="pt-24 pb-8 px-6 border-b border-stone-200">
          <div className="max-w-4xl mx-auto">
            <Link href="/insights/gpi-analyses" className="text-stone-500 text-sm hover:text-stone-900 mb-6 inline-block">
              ← Back to GPI Analyses
            </Link>

            <div className="mb-8">
              <ArticleGraphic
                series={content.series}
                headline={content.headline}
                companies={content.companies}
              />
            </div>

            <div className="flex items-center gap-3 mb-4">
              {content.publishDate && (
                <span className="text-sm text-stone-500">
                  {new Date(content.publishDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight">
              {content.headline}
            </h1>

            {audioMap[content.slug] && (
              <div className="mb-6">
                <div className="text-xs font-mono text-stone-500 mb-2">LISTEN TO THIS ANALYSIS</div>
                <div className="bg-white border border-stone-200 rounded-lg p-3">
                  <audio controls className="w-full" style={{ height: '40px' }}>
                    <source src={audioMap[content.slug].src} type="audio/mpeg" />
                  </audio>
                  <div className="flex justify-between items-center mt-2 text-xs text-stone-500">
                    <span>{audioMap[content.slug].title}</span>
                    <span>{audioMap[content.slug].duration}</span>
                  </div>
                </div>
              </div>
            )}

            <p className="text-xl text-stone-500 leading-relaxed">{content.teaser}</p>
          </div>
        </section>

        {/* Featured Companies */}
        {content.companies.length > 0 && (
          <section className="py-8 px-6 border-b border-stone-200 bg-white">
            <div className="max-w-4xl mx-auto">
              {content.companies.map((company) => (
                <div key={company.id} className="mb-8 last:mb-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h2 className="text-2xl font-black">{company.name}</h2>
                      <p className="text-stone-500">{company.sector}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-4 py-2 border rounded-lg font-bold ${getStageColor(company.stage)}`}>
                        {company.stage}
                      </span>
                      <div className="text-center">
                        <div className="text-3xl font-black font-mono" style={{ color: 'rgba(234,179,8,0.82)' }}>{company.gpiScore?.toFixed(1)}</div>
                        <div className="text-xs text-stone-500">GPI SCORE</div>
                      </div>
                    </div>
                  </div>

                  <GPIRadar company={company} />

                  {company.frictionPoints.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {company.frictionPoints.map((point) => (
                        <span key={point} className="text-xs bg-stone-100 text-stone-500 px-3 py-1 rounded">
                          {point}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Content Blocks */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <article className="prose max-w-none">
              {groupBlocks(content.blocks).map((group, i) => {
                if (Array.isArray(group)) {
                  const type = group[0].type;
                  if (type === 'bulleted_list_item') {
                    return <ul key={i} className="list-disc ml-6 mb-4">{group.map(b => <RenderBlock key={b.id} block={b} />)}</ul>;
                  }
                  if (type === 'numbered_list_item') {
                    return <ol key={i} className="list-decimal ml-6 mb-4">{group.map(b => <RenderBlock key={b.id} block={b} />)}</ol>;
                  }
                }
                return <RenderBlock key={(group as ContentBlock).id} block={group as ContentBlock} />;
              })}
            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 border-t border-stone-200">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-black mb-4">CALCULATE YOUR OWN GPI</h2>
            <p className="text-stone-500 mb-8">
              See where your organization sits on the spectrum.
            </p>
            <Link
              href="/diagnostic"
              className="inline-block bg-stone-900 text-white px-8 py-4 font-bold hover:bg-stone-800 transition-colors"
            >
              START DIAGNOSTIC
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  if (!NOTION_API_KEY) return { paths: [], fallback: 'blocking' };

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
        }),
      }
    );

    const data = await response.json();
    const paths = data.results
      .map((page: { properties: { Slug: { rich_text: { plain_text: string }[] } } }) => {
        const slug = page.properties.Slug?.rich_text?.[0]?.plain_text;
        return slug ? { params: { slug } } : null;
      })
      .filter(Boolean);

    return { paths, fallback: 'blocking' };
  } catch {
    return { paths: [], fallback: 'blocking' };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  if (!NOTION_API_KEY) return { notFound: true };

  try {
    // Find the page by slug
    const searchResponse = await fetch(
      `https://api.notion.com/v1/databases/${GPI_CONTENT_DB}/query`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${NOTION_API_KEY}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2022-06-28',
        },
        body: JSON.stringify({
          filter: {
            and: [
              { property: 'Slug', rich_text: { equals: slug } },
              { property: 'Status', select: { equals: 'Published' } },
            ],
          },
        }),
      }
    );

    const searchData = await searchResponse.json();
    if (!searchData.results || searchData.results.length === 0) return { notFound: true };

    const page = searchData.results[0];
    const pageId = page.id;
    const props = page.properties;

    // Fetch blocks and companies in parallel
    const [blocksResponse, ...companyResponses] = await Promise.all([
      fetch(`https://api.notion.com/v1/blocks/${pageId}/children?page_size=100`, {
        headers: { Authorization: `Bearer ${NOTION_API_KEY}`, 'Notion-Version': '2022-06-28' },
      }),
      ...(props['Featured Companies']?.relation?.map((r: { id: string }) =>
        fetch(`https://api.notion.com/v1/pages/${r.id}`, {
          headers: { Authorization: `Bearer ${NOTION_API_KEY}`, 'Notion-Version': '2022-06-28' },
        })
      ) || []),
    ]);

    const blocksData = await blocksResponse.json();

    const companies: Company[] = await Promise.all(
      companyResponses.map(async (res) => {
        const companyData = await res.json();
        const p = companyData.properties;
        return {
          id: companyData.id,
          name: p.Name?.title?.[0]?.plain_text || 'Unknown',
          gpiScore: p['GPI Score']?.number || null,
          stage: p['Transformation Stage']?.select?.name || 'Unknown',
          sector: p.Sector?.select?.name || 'Unknown',
          decisionLatency: p['Decision Latency']?.number,
          errorCorrection: p['Error Correction']?.number,
          knowledgeLocation: p['Knowledge Location']?.number,
          talentFlow: p['Talent Flow']?.number,
          knowledgeVelocity: p['Knowledge Velocity']?.number,
          structuralLockIn: p['Structural Lock-In']?.number,
          capitalIntensity: p['Capital Intensity']?.number,
          frictionPoints: p['Key Friction Points']?.multi_select?.map((s: { name: string }) => s.name) || [],
        };
      })
    );

    interface NotionRichText {
      plain_text: string;
      href?: string | null;
      annotations?: { bold?: boolean; italic?: boolean; code?: boolean };
    }

    interface NotionBlock {
      id: string;
      type: string;
      [key: string]: unknown;
    }

    const transformRichText = (richText: NotionRichText[]) =>
      richText?.map((t) => ({
        text: t.plain_text,
        href: t.href || null,
        bold: t.annotations?.bold || false,
        italic: t.annotations?.italic || false,
        code: t.annotations?.code || false,
      })) || [];

    const blocks: ContentBlock[] = blocksData.results?.map((block: NotionBlock) => {
      const blockType = block.type;
      const blockContent = block[blockType] as { rich_text?: NotionRichText[] };
      return {
        id: block.id,
        type: blockType,
        content: transformRichText(blockContent?.rich_text || []),
      };
    }) || [];

    const content: AnalysisContent = {
      id: pageId,
      headline: props.Headline?.title?.[0]?.plain_text || '',
      series: props.Series?.select?.name || '',
      publishDate: props['Publish Date']?.date?.start || '',
      teaser: props.Teaser?.rich_text?.[0]?.plain_text || '',
      slug: props.Slug?.rich_text?.[0]?.plain_text || '',
      companies,
      blocks,
    };

    return {
      props: { content },
      revalidate: 3600, // 1 hour
    };
  } catch {
    return { notFound: true };
  }
};

export default AnalysisPage;
