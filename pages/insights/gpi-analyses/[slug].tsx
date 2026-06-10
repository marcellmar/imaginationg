/**
 * Individual GPI Analysis Page
 * Pre-rendered via getStaticPaths, revalidates every hour.
 */

import type { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import { getSnapshotBySlug, type CompanySnapshot } from '../../../lib/snapshots-content';

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

const seriesLane: Record<string, { label: string; href: string }> = {
  'Weekly Smackdown': { label: 'Smackdowns', href: '/insights/smackdowns' },
  'Transition Watch': { label: 'Vital Signs', href: '/insights/vital-signs' },
  'Wildcard': { label: 'Wildcards', href: '/insights/wildcards' },
  'Calcification Alert': { label: 'Calcification Alerts', href: '/insights/calcification-alerts' },
  'Field Notes': { label: 'Field Notes', href: '/insights/field-notes' },
  'The Autopsy': { label: 'Autopsies', href: '/insights/autopsies' },
  'Vital Signs': { label: 'Vital Signs', href: '/insights/vital-signs' },
};

const getStageColor = (stage: string) => {
  if (stage.startsWith('Field')) return 'text-stone-900 border-stone-400';
  if (stage.startsWith('Transitioning')) return 'text-stone-600 border-stone-300';
  if (stage.startsWith('Particle')) return 'text-stone-500 border-stone-200';
  return 'text-stone-500 border-stone-200';
};

const dimensions: Array<[string, keyof Company]> = [
  ['Decision Latency', 'decisionLatency'],
  ['Error Correction', 'errorCorrection'],
  ['Knowledge Location', 'knowledgeLocation'],
  ['Talent Flow', 'talentFlow'],
  ['Knowledge Velocity', 'knowledgeVelocity'],
  ['Structural Lock-In', 'structuralLockIn'],
  ['Capital Intensity', 'capitalIntensity'],
];

const CompanyComparison = ({ companies }: { companies: Company[] }) => {
  return (
    <div className="overflow-x-auto">
      <table className="gpi-table min-w-[680px]">
        <thead>
          <tr>
            <th>Read</th>
            {companies.map((company) => (
              <th key={company.id}>{company.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>State</th>
            {companies.map((company) => (
              <td key={company.id} className={`font-mono text-sm font-bold ${getStageColor(company.stage).split(' ')[0]}`}>
                {company.stage}
              </td>
            ))}
          </tr>
          <tr>
            <th>GPI</th>
            {companies.map((company) => (
              <td key={company.id} className="font-mono text-lg font-bold text-stone-950">
                {company.gpiScore?.toFixed(1) ?? 'n/a'}
              </td>
            ))}
          </tr>
          <tr>
            <th>Sector</th>
            {companies.map((company) => (
              <td key={company.id} className="text-sm leading-6 text-stone-700">
                {company.sector}
              </td>
            ))}
          </tr>
          {dimensions.map(([label, key]) => (
            <tr key={label}>
              <th>{label}</th>
              {companies.map((company) => (
                <td key={company.id} className="font-mono text-sm text-stone-700">
                  {company[key] ?? 'n/a'}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <th>Friction</th>
            {companies.map((company) => (
              <td key={company.id} className="text-sm leading-6 text-stone-700">
                {company.frictionPoints.length > 0 ? company.frictionPoints.join(', ') : 'n/a'}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const RenderBlock = ({ block }: { block: ContentBlock }) => {
  const renderText = (content: ContentBlock['content']) => {
    return content.map((part, i) => {
      if (part.href) return <a key={i} href={part.href} className="gpi-link">{part.text}</a>;
      if (part.bold) return <strong key={i}>{part.text}</strong>;
      if (part.italic) return <em key={i}>{part.text}</em>;
      if (part.code) return <code key={i} className="bg-stone-200 px-1">{part.text}</code>;
      return <span key={i}>{part.text}</span>;
    });
  };

  switch (block.type) {
    case 'paragraph':
      return <p className="mb-4 text-stone-700">{renderText(block.content)}</p>;
    case 'heading_1':
      return <h2 className="mb-3 mt-8 text-3xl font-bold leading-tight text-stone-950">{renderText(block.content)}</h2>;
    case 'heading_2':
      return <h2 className="mb-3 mt-7 text-2xl font-bold leading-tight text-stone-950">{renderText(block.content)}</h2>;
    case 'heading_3':
      return <h3 className="mb-2 mt-6 font-mono text-sm font-bold uppercase text-stone-950">{renderText(block.content)}</h3>;
    case 'bulleted_list_item':
      return <li className="mb-1.5 text-stone-700">{renderText(block.content)}</li>;
    case 'numbered_list_item':
      return <li className="mb-1.5 text-stone-700">{renderText(block.content)}</li>;
    case 'quote':
      return (
        <blockquote className="my-6 border-l border-stone-400 py-1 pl-5 text-xl leading-snug text-stone-950 md:text-2xl">
          {renderText(block.content)}
        </blockquote>
      );
    case 'callout':
      return (
        <div className="my-6 border border-stone-300 bg-[#fffaf0] p-5">
          <p className="font-medium text-stone-800">{renderText(block.content)}</p>
        </div>
      );
    case 'divider':
      return <hr className="my-7 border-stone-300" />;
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

const blockText = (block: ContentBlock) => block.content.map((part) => part.text).join('').trim();

const isHeading = (block: ContentBlock) =>
  block.type === 'heading_1' || block.type === 'heading_2' || block.type === 'heading_3';

const getReadSections = (blocks: ContentBlock[]) => {
  const sections: Array<{ title: string; blocks: (ContentBlock | ContentBlock[])[] }> = [];
  let current: { title: string; blocks: ContentBlock[] } = { title: 'The read', blocks: [] };

  blocks.forEach((block) => {
    if (isHeading(block)) {
      if (current.blocks.length > 0) {
        sections.push({ title: current.title, blocks: groupBlocks(current.blocks) });
      }
      current = { title: blockText(block) || 'The read', blocks: [] };
      return;
    }

    if (blockText(block) || block.type === 'divider') {
      current.blocks.push(block);
    }
  });

  if (current.blocks.length > 0) {
    sections.push({ title: current.title, blocks: groupBlocks(current.blocks) });
  }

  return sections;
};

const textBlock = (id: string, type: ContentBlock['type'], text: string): ContentBlock => ({
  id,
  type,
  content: [{ text }],
});

const snapshotDimension = (snapshot: CompanySnapshot, name: string) =>
  snapshot.dimensions.find((dimension) => dimension.dimension === name)?.score;

const snapshotCompany = (snapshot: CompanySnapshot, sector: string): Company => ({
  id: snapshot.slug,
  name: snapshot.name,
  gpiScore: snapshot.gpiScore,
  stage: snapshot.state,
  sector,
  decisionLatency: snapshotDimension(snapshot, 'Decision Latency'),
  errorCorrection: snapshotDimension(snapshot, 'Error Correction'),
  knowledgeLocation: snapshotDimension(snapshot, 'Knowledge Location'),
  talentFlow: snapshotDimension(snapshot, 'Talent Flow'),
  knowledgeVelocity: snapshotDimension(snapshot, 'Knowledge Velocity'),
  structuralLockIn: snapshotDimension(snapshot, 'Structural Lock-In'),
  capitalIntensity: snapshotDimension(snapshot, 'Capital Intensity'),
  frictionPoints: snapshot.friction,
});

const buildTeslaBydRead = (): AnalysisContent | null => {
  const tesla = getSnapshotBySlug('tesla');
  const byd = getSnapshotBySlug('byd');

  if (!tesla || !byd) return null;

  return {
    id: 'local-tesla-vs-byd',
    headline: 'Tesla vs BYD EV Wars',
    series: 'Weekly Smackdown',
    publishDate: tesla.analysisDate,
    teaser: 'I keep thinking about the first time EVs stopped feeling rare. For years, Tesla made the car feel like the event: the screen, the doors, the person explaining it at a dinner table. BYD is a different kind of threat. It makes the event disappear. At some point the car stops being the story, and the story becomes how fast the company can build another one.',
    slug: 'tesla-vs-byd-ev-wars',
    companies: [
      snapshotCompany(tesla, 'Electric vehicles / energy'),
      snapshotCompany(byd, 'Electric vehicles / batteries'),
    ],
    blocks: [
      textBlock('local-read-heading', 'heading_2', 'Start here'),
      textBlock(
        'local-read-1',
        'paragraph',
        'Think about two kitchens before the dinner rush. One has a famous chef in the window. Everybody knows his name. Every change runs through him. The other kitchen is quieter. Prep is done. Stations are stocked. The line cooks already know the next move. Tesla feels like the first kitchen. BYD feels like the second.'
      ),
      textBlock(
        'local-read-2',
        'paragraph',
        `The car market used to reward the company with the biggest story. Tesla owned that moment. It made EVs feel fast, expensive, strange, and inevitable. Now the fight is less romantic. Can the company keep building, changing, pricing, and shipping without turning every move into a public event?`
      ),
      textBlock(
        'local-read-3',
        'paragraph',
        'BYD is dangerous because it makes the hard part look ordinary. Battery work, factory work, model changes, and export plans are close enough to move together. BYD has flaws. It just has more ways to fix the day before the day gets away from it.'
      ),
      textBlock(
        'local-read-4',
        'paragraph',
        'Tesla can still surprise people. BYD can wear them down. Those are different kinds of power.'
      ),
      textBlock('local-tesla-heading', 'heading_2', 'Tesla'),
      textBlock('local-tesla-pattern', 'paragraph', 'Tesla still moves like Musk is supposed to be near the work.'),
      textBlock(
        'local-tesla-read',
        'paragraph',
        `The company still has the brand, the charging network, the software habit, and factories capable of doing hard things. Talent is there. Dependency is the issue. A company this large can't keep needing the same person to make the room feel awake.`
      ),
      textBlock('local-byd-heading', 'heading_2', 'BYD'),
      textBlock('local-byd-pattern', 'paragraph', 'BYD keeps more of the answer inside the operation.'),
      textBlock(
        'local-byd-read',
        'paragraph',
        `BYD has problems. Profit is under pressure. China is crowded. Going global will test the company in ways the home market never did. Still, BYD has more knobs to turn. Battery, factory, model, and market can move together instead of waiting for one big call.`
      ),
      textBlock('local-numbers-heading', 'heading_2', 'The scoreboard'),
      textBlock('local-tesla-number-0', 'bulleted_list_item', 'Tesla: 1,636,129 vehicles delivered in 2025. Still huge, but no longer setting the pace by itself.'),
      textBlock('local-tesla-number-1', 'bulleted_list_item', 'Tesla: 358,023 vehicles delivered in Q1 2026. The machine is moving, but the slack is visible.'),
      textBlock('local-tesla-number-2', 'bulleted_list_item', `Tesla: 46.7 GWh of energy storage deployed in 2025. The car story isn't the whole company.`),
      textBlock('local-byd-number-0', 'bulleted_list_item', `BYD: 4,602,436 vehicles sold in 2025. Not a hot streak. Operating tempo.`),
      textBlock('local-byd-number-1', 'bulleted_list_item', `BYD: 2,256,714 BEVs sold in 2025. The hybrid bridge didn't stop the pure EV push.`),
      textBlock('local-byd-number-2', 'bulleted_list_item', 'BYD: 1,046,083 overseas sales in 2025. The fight has left China.'),
      textBlock('local-works-heading', 'heading_2', 'Still working'),
      textBlock('local-tesla-help-0', 'bulleted_list_item', 'Tesla still owns the mental shortcut for electric cars.'),
      textBlock('local-tesla-help-1', 'bulleted_list_item', 'The charging network gives the brand a practical moat, more than a story moat.'),
      textBlock('local-tesla-help-2', 'bulleted_list_item', 'The company knows how to push software into a car after the sale.'),
      textBlock('local-byd-help-0', 'bulleted_list_item', 'BYD makes the battery, builds the car, and keeps more of the learning inside the house.'),
      textBlock('local-byd-help-1', 'bulleted_list_item', 'Factories can keep changing models without turning every change into a company-wide drama.'),
      textBlock('local-byd-help-2', 'bulleted_list_item', `A deep engineering bench means the company isn't waiting for one genius to translate the work.`),
      textBlock('local-stuck-heading', 'heading_2', 'Still stuck'),
      textBlock('local-tesla-drag-0', 'bulleted_list_item', `Tesla has too many big promises open at the same time. Cars, robotaxi, Optimus, AI, batteries, chips. Too many plates.`),
      textBlock('local-tesla-drag-1', 'bulleted_list_item', `Inventory hit 27 days in Q1 2026. It won't kill the company, but it says demand is no longer automatic.`),
      textBlock('local-tesla-drag-2', 'bulleted_list_item', `The founder is still the shortcut. Shortcuts help until the company gets too big to keep using them.`),
      textBlock('local-byd-drag-0', 'bulleted_list_item', 'China is crowded, and price wars can make even a strong company bleed margin.'),
      textBlock('local-byd-drag-1', 'bulleted_list_item', 'Going overseas means more than shipping cars. Service, trust, dealers, regulators, and culture all have to travel too.'),
      textBlock('local-byd-drag-2', 'bulleted_list_item', 'Q1 2026 profit fell hard. Growth is still there, but it is getting more expensive.'),
      textBlock('local-bottom-heading', 'heading_2', 'Bottom line'),
      textBlock(
        'local-bottom-1',
        'paragraph',
        'The lesson for other companies is pretty simple. A strong leader can get people moving, but the work still has to survive a normal Tuesday. If every hard decision needs the same person in the room, the company is not fast. It is waiting well.'
      ),
      textBlock(
        'local-bottom-2',
        'paragraph',
        `The better company is usually the one with less drama around the work.`
      ),
    ],
  };
};

const localAnalyses: Record<string, () => AnalysisContent | null> = {
  'tesla-vs-byd-ev-wars': buildTeslaBydRead,
};

const AnalysisPage = ({ content }: Props) => {
  const lane = seriesLane[content.series] || { label: content.series || 'Reads', href: '/insights' };
  const readSections = getReadSections(content.blocks);

  return (
    <>
      <SEOHead
        title={`${content.headline} | GPI Studio`}
        description={content.teaser}
        ogImage="/images/og/insights.png"
        ogType="article"
        article={{
          publishedTime: content.publishDate ? `${content.publishDate}T00:00:00Z` : undefined,
          author: 'Marcus Davis',
        }}
      />

      <div className="gpi-page">
        <Navigation currentPage="reads" />

        <main className="gpi-shell py-10 md:py-14">
          <section className="grid gap-7 md:grid-cols-[0.72fr_1.28fr] md:items-start">
            <div>
              <Link className="gpi-link font-mono text-sm" href={lane.href}>
                Back to {lane.label}
              </Link>
              <p className="gpi-kicker mt-5">{content.series || 'Read'}</p>
              {content.publishDate && (
                <p className="mt-2 font-mono text-sm text-stone-600">
                  {new Date(content.publishDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              )}
              <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">{content.headline}</h1>
            </div>

            <div className="gpi-prose max-w-3xl">
              <p className="text-xl leading-snug text-stone-950 md:text-2xl">{content.teaser}</p>
              {audioMap[content.slug] && (
                <div className="mt-6 border border-stone-300 bg-[#fffaf0] p-4">
                  <p className="gpi-kicker mb-3">Audio Read</p>
                  <audio controls className="w-full" style={{ height: '40px' }}>
                    <source src={audioMap[content.slug].src} type="audio/mpeg" />
                  </audio>
                  <div className="mt-2 flex justify-between gap-4 font-mono text-xs text-stone-600">
                    <span>{audioMap[content.slug].title}</span>
                    <span>{audioMap[content.slug].duration}</span>
                  </div>
                </div>
              )}
            </div>
          </section>

          {content.companies.length > 0 && (
            <section className="gpi-rule mt-8 pt-5">
              <div className="grid gap-6 md:grid-cols-[0.72fr_1.28fr]">
                <div>
                  <p className="gpi-kicker">Companies in the read</p>
                  <p className="mt-3 text-sm leading-6 text-stone-700">
                    Same lens. Different weight.
                  </p>
                </div>

                <CompanyComparison companies={content.companies} />
              </div>
            </section>
          )}

          <section className="gpi-rule mt-8 pt-5">
            <div className="grid gap-6 md:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="gpi-kicker">The Read</p>
                <p className="mt-3 text-sm leading-6 text-stone-700">
                  A fast read, with enough evidence to make the shape clear.
                </p>
              </div>

              <article className="grid gap-px border-y border-stone-300 bg-stone-300 md:grid-cols-2">
                {readSections.map((section) => {
                  const pairedCard = section.title === 'Still working' || section.title === 'Still stuck';
                  return (
                    <section key={section.title} className={`bg-[#f7f2e8] p-5 ${pairedCard ? '' : 'md:col-span-2'}`}>
                      <h2 className="text-lg font-bold leading-tight text-stone-950">{section.title}</h2>
                      <div className="mt-4 max-w-3xl text-[1.02rem] leading-7 text-stone-700">
                        {section.blocks.map((group, i) => {
                          if (Array.isArray(group)) {
                            const type = group[0].type;
                            if (type === 'bulleted_list_item') {
                              return <ul key={i} className="mb-4 ml-5 list-disc space-y-1.5">{group.map(b => <RenderBlock key={b.id} block={b} />)}</ul>;
                            }
                            if (type === 'numbered_list_item') {
                              return <ol key={i} className="mb-4 ml-5 list-decimal space-y-1.5">{group.map(b => <RenderBlock key={b.id} block={b} />)}</ol>;
                            }
                          }
                          return <RenderBlock key={(group as ContentBlock).id} block={group as ContentBlock} />;
                        })}
                      </div>
                    </section>
                  );
                })}
              </article>
            </div>
          </section>

          <section className="gpi-rule mt-9 pt-6">
            <div className="grid gap-6 md:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="gpi-kicker">Next</p>
              </div>
              <div className="flex flex-col gap-4 font-mono text-sm md:flex-row md:items-center">
                <Link className="gpi-link" href={lane.href}>More {lane.label}</Link>
                <Link className="gpi-link" href="/insights">All reads</Link>
                <Link className="gpi-link" href="/signal">Find the signal</Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const localPaths = Object.keys(localAnalyses).map((slug) => ({ params: { slug } }));

  if (!NOTION_API_KEY) return { paths: localPaths, fallback: 'blocking' };

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

    return { paths: [...localPaths, ...paths], fallback: 'blocking' };
  } catch {
    return { paths: localPaths, fallback: 'blocking' };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const localAnalysis = localAnalyses[slug]?.();

  if (localAnalysis) {
    return {
      props: { content: localAnalysis },
      revalidate: 3600,
    };
  }

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
