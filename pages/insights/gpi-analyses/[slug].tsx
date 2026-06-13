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

const audioMap: Record<string, { src: string; duration: string; title: string }> = {};

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
  'THE WTF FILES': { label: 'THE WTF FILES', href: '/insights/wtf-files' },
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

const linkBlock = (
  id: string,
  type: ContentBlock['type'],
  content: ContentBlock['content']
): ContentBlock => ({ id, type, content });

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
    teaser: `You sit in an EV for the first time and the car feels like the event: the screen, the acceleration, the charging story, the person at dinner explaining why this is the future.

Then a different kind of company shows up and makes the event feel ordinary. BYD's threat is not louder storytelling. It is the quiet removal of drama from the work Tesla made famous.`,
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
        'At work today, find one decision everyone still waits for the same person to bless. Move the context, authority, and risk boundary closer to the team doing the work. If speed depends on one person entering the room, the company is waiting well, not moving well.'
      ),
      textBlock(
        'local-bottom-2',
        'paragraph',
        `The useful test is boring on purpose: which team can make the hard work feel more ordinary by Friday?`
      ),
    ],
  };
};

const buildPillWarsRead = (): AnalysisContent | null => {
  const lilly = getSnapshotBySlug('eli-lilly');
  const novo = getSnapshotBySlug('novo-nordisk');

  if (!lilly || !novo) return null;

  return {
    id: 'local-eli-lilly-vs-novo-nordisk-pill-wars',
    headline: 'The Pill Wars: Eli Lilly vs Novo Nordisk',
    series: 'Weekly Smackdown',
    publishDate: '2026-06-08',
    teaser: `You are standing at the sink before coffee, reading the label like it is a contract: empty stomach, wait time, water rules, side effects, pharmacy refill, price.

That is where the pill war really lives. Novo got the first oral weight-loss GLP-1 out fast. Lilly built the cleaner daily habit. In a medicine people may take for years, the routine around the pill becomes part of the pill.`,
    slug: 'eli-lilly-vs-novo-nordisk-pill-wars',
    companies: [
      snapshotCompany(lilly, 'Pharmaceuticals / obesity care'),
      snapshotCompany(novo, 'Pharmaceuticals / obesity care'),
    ],
    blocks: [
      textBlock('pill-start-heading', 'heading_2', 'Start here'),
      textBlock(
        'pill-start-1',
        'paragraph',
        'The easy version says Lilly is winning and Novo is losing. The better read is messier. Novo still has the first oral obesity GLP-1 in the market, and the early prescription count is real. Lilly has the cleaner habit design, the stronger injectable engine, and a pipeline investors trust more.'
      ),
      textBlock(
        'pill-start-2',
        'paragraph',
        'The pill fight is really a daily-life fight. One medicine asks for an empty stomach and a wait before food or coffee. The other can be taken any time of day, without food or water rules. On paper, clinical weight loss carries the headline. In real life, the morning routine gets a vote.'
      ),
      textBlock(
        'pill-start-3',
        'paragraph',
        'Novo still knows this disease area deeply. Lilly is a giant company too, with factories, regulators, lawsuits, price pressure, and supply limits of its own. Lilly has momentum. Novo has proof people will actually pick up the pill.'
      ),
      textBlock(
        'pill-start-4',
        'paragraph',
        'So the read changes. Lilly has not finished Novo\'s lunch. Lilly is forcing Novo to eat faster, cheaper, and in public.'
      ),
      textBlock('pill-lilly-heading', 'heading_2', 'Eli Lilly'),
      textBlock('pill-lilly-pattern', 'paragraph', 'Lilly has the cleaner patient path.'),
      textBlock(
        'pill-lilly-read',
        'paragraph',
        'Mounjaro and Zepbound turned Lilly into the company everybody has to price against. Foundayo adds a different kind of pressure. The pill may not beat Novo on every clinical headline, but it removes a small daily tax. No empty-stomach rule. No 30-minute wait. For a medicine people may take for years, small friction can become the whole product.'
      ),
      textBlock('pill-novo-heading', 'heading_2', 'Novo Nordisk'),
      textBlock('pill-novo-pattern', 'paragraph', 'Novo still has the first pill people are actually filling.'),
      textBlock(
        'pill-novo-read',
        'paragraph',
        'Wegovy pill gave Novo a real counterpunch after a rough stretch. New CEO, restructuring, layoffs, and Lilly pressure all hit at once. The pill gives Novo a live lane back into the fight. The question is whether the company can turn an early launch into a durable habit before Lilly\'s easier routine catches up.'
      ),
      textBlock('pill-scoreboard-heading', 'heading_2', 'The scoreboard'),
      textBlock('pill-score-0', 'bulleted_list_item', 'Lilly: Q1 2026 revenue reached $19.8B, up 56%. The GLP-1 machine is no side business.'),
      textBlock('pill-score-1', 'bulleted_list_item', 'Lilly: Mounjaro brought in $8.7B in Q1 2026, and Zepbound brought in $4.16B. That is the cash engine under the pill story.'),
      textBlock('pill-score-2', 'bulleted_list_item', 'Lilly: Foundayo won FDA approval as an oral GLP-1 pill with no food or water restrictions. That is product design, not only chemistry.'),
      textBlock('pill-score-3', 'bulleted_list_item', 'Novo: 2025 sales reached DKK 309.1B, up 10% at constant exchange rates. This is a pressured company, not a weak one.'),
      textBlock('pill-score-4', 'bulleted_list_item', 'Novo: Wegovy pill passed 3 million prescriptions in just over five months, with most new starts coming from people new to GLP-1 therapy. The launch has teeth.'),
      textBlock('pill-score-5', 'bulleted_list_item', 'Novo: the company is carrying a leadership reset and 9,000 planned job cuts while trying to defend its best market. That is a hard turn at speed.'),
      textBlock('pill-working-heading', 'heading_2', 'Still working'),
      textBlock('pill-working-0', 'bulleted_list_item', 'Lilly has the stronger growth engine and a broader obesity pipeline behind the pill.'),
      textBlock('pill-working-1', 'bulleted_list_item', 'Foundayo fits a normal morning better than a pill with fasting rules.'),
      textBlock('pill-working-2', 'bulleted_list_item', 'Mounjaro and Zepbound give Lilly commercial muscle while the oral market opens.'),
      textBlock('pill-working-3', 'bulleted_list_item', 'Novo has real obesity trust, deep semaglutide knowledge, and first-mover proof in oral Wegovy.'),
      textBlock('pill-working-4', 'bulleted_list_item', 'Wegovy pill is bringing new GLP-1 patients into the market, not only switching old ones.'),
      textBlock('pill-working-5', 'bulleted_list_item', 'Novo still has global reach, manufacturing depth, and a direct line to prescribers.'),
      textBlock('pill-stuck-heading', 'heading_2', 'Still stuck'),
      textBlock('pill-stuck-0', 'bulleted_list_item', 'Lilly has to scale a new pill while the rest of its GLP-1 demand is already stretching capacity.'),
      textBlock('pill-stuck-1', 'bulleted_list_item', 'Lower realized prices are already showing up in Lilly\'s numbers. Volume is winning, but price is fighting back.'),
      textBlock('pill-stuck-2', 'bulleted_list_item', 'Foundayo still has to build trust against a known molecule with a head start.'),
      textBlock('pill-stuck-3', 'bulleted_list_item', 'Novo has the harder routine. The empty-stomach rule and wait time create daily drag.'),
      textBlock('pill-stuck-4', 'bulleted_list_item', 'The leadership reset and layoffs put Novo in repair mode while the market is moving faster.'),
      textBlock('pill-stuck-5', 'bulleted_list_item', 'CagriSema and other next-generation bets have to restore confidence after Lilly changed the comparison set.'),
      textBlock('pill-bottom-heading', 'heading_2', 'Bottom line'),
      textBlock(
        'pill-bottom-1',
        'paragraph',
        'At work today, pick one product or process people use repeatedly and map the first five minutes around it. The sale may happen in the pitch, but retention happens in the routine.'
      ),
      textBlock(
        'pill-bottom-2',
        'paragraph',
        'The move is simple: remove one tiny daily tax before adding another feature. In long-use markets, the easier habit often beats the louder claim.'
      ),
    ],
  };
};

const buildAgentWarsRead = (): AnalysisContent | null => {
  const openai = getSnapshotBySlug('openai');
  const anthropic = getSnapshotBySlug('anthropic');

  if (!openai || !anthropic) return null;

  return {
    id: 'local-openai-vs-anthropic-agent-wars',
    headline: 'The Agent Wars: OpenAI vs Anthropic',
    series: 'Weekly Smackdown',
    publishDate: '2026-06-10',
    teaser: `You are the person approving AI tools for a team that already found its favorites. One group wants ChatGPT because everyone knows it. The engineers want Claude because it lives closer to the code. Security wants logs, boundaries, and fewer surprises.

The web keeps writing this as a model race. Inside work, it is a permission race. OpenAI is building the biggest front door in AI. Anthropic is trying to own the moment a company finally lets an agent touch real work.`,
    slug: 'openai-vs-anthropic-agent-wars',
    companies: [
      snapshotCompany(openai, 'Frontier AI / consumer and enterprise platform'),
      snapshotCompany(anthropic, 'Frontier AI / enterprise agents and coding'),
    ],
    blocks: [
      textBlock('agent-start-heading', 'heading_2', 'Start here'),
      textBlock(
        'agent-start-1',
        'paragraph',
        'The easy version says OpenAI has scale and Anthropic has trust. The better read is sharper. OpenAI owns the default habit. Anthropic is moving into the places where default habit stops being enough: codebases, regulated teams, procurement, audit, containment, and partner-led rollout.'
      ),
      textBlock(
        'agent-start-2',
        'paragraph',
        'OpenAI is building the power grid. Anthropic is building the breaker box. One wants every person and company to walk through the same front door. The other wants the risk owner to say yes when the agent asks for access.'
      ),
      textBlock(
        'agent-start-3',
        'paragraph',
        'That makes this fight more contentious than model benchmarks. The winner may be the company that decides where agents are allowed to act.'
      ),
      textBlock('agent-openai-heading', 'heading_2', 'OpenAI'),
      textBlock('agent-openai-pattern', 'paragraph', 'OpenAI has the larger habit and the heavier machine.'),
      textBlock(
        'agent-openai-read',
        'paragraph',
        'ChatGPT is still the consumer default, and OpenAI keeps pushing toward a unified agent surface across chat, code, search, apps, and enterprise workflows. The strength is obvious: distribution. The drag is also obvious: the more OpenAI becomes infrastructure, the more every product move has to feed the compute flywheel.'
      ),
      textBlock('agent-anthropic-heading', 'heading_2', 'Anthropic'),
      textBlock('agent-anthropic-pattern', 'paragraph', 'Anthropic is making trust feel operational.'),
      textBlock(
        'agent-anthropic-read',
        'paragraph',
        'Claude Code, Claude Enterprise, and the partner network all point at the same wedge. Anthropic sells more than a model. It sells a way for companies to let a model near fragile work without pretending the risk disappeared. That is a quieter kind of distribution, but it travels deep.'
      ),
      textBlock('agent-scoreboard-heading', 'heading_2', 'The scoreboard'),
      textBlock('agent-score-0', 'bulleted_list_item', 'OpenAI: latest funding round closed with $122B in committed capital at an $852B post-money valuation.'),
      textBlock('agent-score-1', 'bulleted_list_item', 'OpenAI: ChatGPT is reported by OpenAI at more than 900M weekly active users, with enterprise on track toward parity with consumer revenue.'),
      textBlock('agent-score-2', 'bulleted_list_item', 'OpenAI: infrastructure now spans Microsoft, Oracle, AWS, CoreWeave, Google Cloud, NVIDIA, AMD, Broadcom, and data-center partners. That is reach and dependency at the same time.'),
      textBlock('agent-score-3', 'bulleted_list_item', 'Anthropic: Claude Enterprise is built around governance, data controls, audit, and regulated deployment. That is the enterprise buyer speaking.'),
      textBlock('agent-score-4', 'bulleted_list_item', 'Anthropic: more than 40,000 firms applied to the Claude Partner Network, and more than 10,000 consultants earned Claude certification.'),
      textBlock('agent-score-5', 'bulleted_list_item', 'VentureBeat reported Anthropic passed OpenAI in U.S. business adoption in April 2026, citing Ramp AI Index spending data. That is a workplace signal, not a hype signal.'),
      textBlock('agent-working-heading', 'heading_2', 'Still working'),
      textBlock('agent-working-0', 'bulleted_list_item', 'OpenAI has the default consumer habit and a massive developer surface.'),
      textBlock('agent-working-1', 'bulleted_list_item', 'Codex, ChatGPT, API, and enterprise products give OpenAI many doors into the same customer.'),
      textBlock('agent-working-2', 'bulleted_list_item', 'OpenAI has raised enough capital to chase frontier scale aggressively.'),
      textBlock('agent-working-3', 'bulleted_list_item', 'Anthropic has a clean wedge in coding, enterprise trust, and regulated work.'),
      textBlock('agent-working-4', 'bulleted_list_item', 'Claude Enterprise packages governance in a way security and procurement teams understand.'),
      textBlock('agent-working-5', 'bulleted_list_item', 'The partner network turns consultants into distribution without requiring every sale to come from Anthropic directly.'),
      textBlock('agent-stuck-heading', 'heading_2', 'Still stuck'),
      textBlock('agent-stuck-0', 'bulleted_list_item', 'OpenAI has to keep the compute flywheel spinning while capital commitments get heavier.'),
      textBlock('agent-stuck-1', 'bulleted_list_item', 'The more OpenAI touches, the more trust, safety, privacy, and product coherence have to move together.'),
      textBlock('agent-stuck-2', 'bulleted_list_item', 'OpenAI may own the front door while losing some deeper workplace decisions to narrower trusted tools.'),
      textBlock('agent-stuck-3', 'bulleted_list_item', 'Anthropic still faces brutal compute economics as Claude usage moves from chat to agents.'),
      textBlock('agent-stuck-4', 'bulleted_list_item', 'Safety positioning helps Anthropic win trust, but it also creates a sharper spotlight when capability outruns containment.'),
      textBlock('agent-stuck-5', 'bulleted_list_item', 'Partner-led distribution can get wide before the operating model gets easy to control.'),
      textBlock('agent-bottom-heading', 'heading_2', 'Bottom line'),
      textBlock(
        'agent-bottom-1',
        'paragraph',
        'At work today, stop asking which AI tool is smarter and ask which tool owns the permission moment. Who can touch the codebase, customer record, spreadsheet, contract, inbox, or production system? The tool that wins that yes will shape more work than the tool that wins the demo.'
      ),
      textBlock(
        'agent-bottom-2',
        'paragraph',
        'Then write down the boundary before you buy: what the agent can read, what it can change, who sees the log, and who owns the mistake. That is where the AI race enters your company.'
      ),
    ],
  };
};

const buildSpaceXIpoWatch = (): AnalysisContent | null => {
  const spacex = getSnapshotBySlug('spacex');

  if (!spacex) return null;

  return {
    id: 'local-spacex-ipo-public-gravity',
    headline: 'SpaceX IPO Watch: Selling The Failure Budget',
    series: 'Transition Watch',
    publishDate: '2026-06-12',
    teaser: `The engineer sees the fireball before the shareholder sees the explanation. That gap is the SpaceX business.

Starlink gives SpaceX cash. Falcon gives it trust. Government launches give it cover. Starship spends all three by breaking in public. The IPO turns that failure budget into something ordinary people can now buy without understanding what keeps it alive.`,
    slug: 'spacex-ipo-public-gravity',
    companies: [
      snapshotCompany(spacex, 'Aerospace / satellites / AI infrastructure'),
    ],
    blocks: [
      textBlock('spacex-start-heading', 'heading_2', 'Start here'),
      textBlock(
        'spacex-start-1',
        'paragraph',
        'The SpaceX story starts in the gap between the blast and the explanation. Most companies hide failure because customers, regulators, and investors read it as weakness. SpaceX built a business where visible failure can still be read as progress.'
      ),
      textBlock(
        'spacex-start-2',
        'paragraph',
        'That permission came from a stack. Falcon made the company credible. Starlink made it liquid. Defense work made it strategically useful. Starship then got room to be ugly because the rest of the company kept proving the machine was serious.'
      ),
      textBlock(
        'spacex-start-3',
        'paragraph',
        'The IPO changes the ownership of that ugliness. The failure budget used to sit inside a private mission company. Now it sits inside a public security that index funds, retail buyers, employees, analysts, and regulators all have to interpret at once.'
      ),
      textBlock('spacex-company-heading', 'heading_2', 'SpaceX'),
      textBlock('spacex-company-pattern', 'paragraph', 'SpaceX is selling shares in a learning curve that only works if failure stays usable.'),
      textBlock(
        'spacex-company-read',
        'paragraph',
        'The clean media read is rockets plus satellites plus Musk. The deeper read is permission. SpaceX has permission from customers to launch critical payloads, from users to depend on Starlink, from employees to work hot, from regulators to keep testing after mishaps, and now from shareholders to hold a stock tied to all of it. That permission is the scarce asset.'
      ),
      textBlock('spacex-score-heading', 'heading_2', 'The scoreboard'),
      textBlock('spacex-score-0', 'bulleted_list_item', 'SPCX listed on NASDAQ on June 12, 2026. The failure budget moved from private capital into public ownership.'),
      textBlock('spacex-score-1', 'bulleted_list_item', 'The IPO raised roughly $75B and closed near a $2.1T valuation. That is more than cash. It is advance payment for future tolerated mess.'),
      textBlock('spacex-score-2', 'bulleted_list_item', '2025 revenue was reported around $18.7B, with about $6.6B adjusted EBITDA. Starlink is the operating cushion that lets Starship stay experimental.'),
      textBlock('spacex-score-3', 'bulleted_list_item', 'Starlink passed 10M active customers, with current reports above 12M. That customer base turns SpaceX from launch shop into utility-like infrastructure.'),
      textBlock('spacex-score-4', 'bulleted_list_item', 'Flight 12 triggered an FAA-supervised mishap investigation. One event now lives as engineering data, regulatory file, and investor interpretation.'),
      textBlock('spacex-score-5', 'bulleted_list_item', 'The refreshed GPI score is 4.20. The operating core remains unusually adaptive, but the permission stack around it got heavier.'),
      textBlock('spacex-working-heading', 'heading_2', 'Still working'),
      textBlock('spacex-working-0', 'bulleted_list_item', 'Falcon gives SpaceX boring reliability in the part of the company that has to be boring.'),
      textBlock('spacex-working-1', 'bulleted_list_item', 'Starlink gives SpaceX recurring cash and a live customer network while Starship keeps learning.'),
      textBlock('spacex-working-2', 'bulleted_list_item', 'Shotwell gives the operating system a steadier hand than the public Musk story suggests.'),
      textBlock('spacex-working-3', 'bulleted_list_item', 'Vertical integration keeps the fix close to the break.'),
      textBlock('spacex-working-4', 'bulleted_list_item', 'Government launch work gives SpaceX strategic protection, not only revenue.'),
      textBlock('spacex-working-5', 'bulleted_list_item', 'Public capital lengthens the runway for bets that private tender rounds were already struggling to carry cleanly.'),
      textBlock('spacex-stuck-heading', 'heading_2', 'Still stuck'),
      textBlock('spacex-stuck-0', 'bulleted_list_item', 'Public owners may buy the upside of failure without having the stomach for failure itself.'),
      textBlock('spacex-stuck-1', 'bulleted_list_item', 'The $2.1T valuation pulls launch, telecom, defense, AI, and orbital compute into one expectation stack.'),
      textBlock('spacex-stuck-2', 'bulleted_list_item', 'xAI and X make the permission problem dirtier because they bring compute load, attention drain, and social-platform baggage into the read.'),
      textBlock('spacex-stuck-3', 'bulleted_list_item', 'Musk control keeps decisions fast and concentrates the permission risk in one person.'),
      textBlock('spacex-stuck-4', 'bulleted_list_item', 'Post-IPO liquidity can release talent exactly when the company needs people willing to live inside the pressure.'),
      textBlock('spacex-stuck-5', 'bulleted_list_item', 'Regulators can convert a learning event into calendar drag before the company has extracted the lesson.'),
      textBlock('spacex-bottom-heading', 'heading_2', 'Bottom line'),
      textBlock(
        'spacex-bottom-1',
        'paragraph',
        'At work today, name the permission budget behind the thing your team is trying to learn: who lets it be ugly, who keeps trusting you while it is ugly, who pays for the next attempt, and who can shut it down before the lesson reaches the floor.'
      ),
      textBlock(
        'spacex-bottom-2',
        'paragraph',
        'The IPO sells pieces of that permission structure to people who may only understand the upside. If the market learns to tolerate the blast because the fix keeps arriving, SpaceX stays strange and dangerous. If the company starts managing the blast for the market before the fix reaches the floor, the GPI score moves up.'
      ),
    ],
  };
};

const companyCard = (
  id: string,
  name: string,
  sector: string,
  gpiScore: number,
  stage: string,
  scores: Pick<Company, 'decisionLatency' | 'errorCorrection' | 'knowledgeLocation' | 'talentFlow' | 'knowledgeVelocity' | 'structuralLockIn' | 'capitalIntensity'>,
  frictionPoints: string[]
): Company => ({
  id,
  name,
  sector,
  gpiScore,
  stage,
  frictionPoints,
  ...scores,
});

const article = (
  id: string,
  headline: string,
  series: string,
  publishDate: string,
  teaser: string,
  slug: string,
  companies: Company[],
  blocks: ContentBlock[]
): AnalysisContent => ({ id, headline, series, publishDate, teaser, slug, companies, blocks });

const buildAllbirdsWtfFile = (): AnalysisContent => article(
  'local-allbirds-newbird-ai-wtf-file',
  'Allbirds Put Its Logo On A Server Rack',
  'THE WTF FILES',
  '2026-06-10',
  `You look down and see Allbirds by a door. Soft shoe. Climate promise. Office sneaker. A brand built for people who wanted buying shoes to feel a little less dirty.

Then filing hits the table. Shoe business sold. GPU rentals next. NewBird AI. Same public shell, new costume, zero chill. A sneaker company just walked into the AI compute line and acted like it had been invited.`,
  'allbirds-newbird-ai-wtf-file',
  [
    companyCard('allbirds', 'Allbirds / NewBird AI', 'Footwear shell / AI compute infrastructure', 8.2, 'Particle', {
      decisionLatency: 8,
      errorCorrection: 9,
      knowledgeLocation: 8,
      talentFlow: 8,
      knowledgeVelocity: 7,
      structuralLockIn: 8,
      capitalIntensity: 9,
    }, ['Brand sale', 'Identity collapse', 'AI category chase', 'Convertible financing', 'GPU capital load']),
  ],
  [
    textBlock('allbirds-wtf-heading', 'heading_2', 'WTF'),
    textBlock('allbirds-wtf-1', 'paragraph', 'Allbirds agreed to sell footwear brand and related assets for $39M, then announced a $50M convertible financing facility tied to a new AI compute plan. Old public shoe company kept shell. Shoe business out. NewBird AI in.'),
    textBlock('allbirds-smell-heading', 'heading_2', 'You heard that right.'),
    textBlock('allbirds-smell-1', 'paragraph', 'A shoe company sells shoes, keeps shell, and buys an AI costume. Which customer follows? Which store skill survives? Which product habit helps run GPUs? Which part of wool-sneaker trust becomes uptime?'),
    textBlock('allbirds-smell-2', 'paragraph', 'If a brand can lose its business and still pitch a hotter market, is the company selling compute or selling a second chance for the ticker? If old muscle stays behind, is this a pivot or a costume change with financing attached?'),
    textBlock('allbirds-pain-heading', 'heading_2', 'Now what?'),
    textBlock('allbirds-pain-0', 'bulleted_list_item', 'Door one: NewBird actually finds cheap compute access, rents it well, and becomes a tiny AI landlord. Strange, but possible.'),
    textBlock('allbirds-pain-1', 'bulleted_list_item', 'Door two: financing story runs hotter than operating reality. Press release gets oxygen. Customer pipeline stays thin.'),
    textBlock('allbirds-pain-2', 'bulleted_list_item', 'Door three: shoe brand survives somewhere else, public shell drifts, and old Allbirds becomes a trivia question for bubble historians.'),
    textBlock('allbirds-pain-3', 'bulleted_list_item', 'Door four: this becomes a template. More tired public companies discover a hot category costume and call it transformation.'),
    textBlock('allbirds-move-heading', 'heading_2', 'Don\'t buy the costume'),
    textBlock('allbirds-move-1', 'paragraph', 'This week, if a tired business shows up wearing a hot new word, slow down. Make it point to one old advantage still alive under the new outfit. Customer. Skill. Channel. Margin. Operator. Pick one.'),
    textBlock('allbirds-move-2', 'paragraph', 'If it can only point to vibes, deck language, and a market everyone suddenly wants to be in, keep your wallet in your pocket.'),
  ]
);

const buildPorscheTransitionWatch = (): AnalysisContent => article(
  'local-porsche-new-ceo-transition-watch',
  'Porsche Transition Watch: The New CEO Gets One Clean Job',
  'Transition Watch',
  '2026-06-08',
  `You are standing in a Porsche showroom, already sold on the badge, and still something feels off. The car still looks expensive. The salesperson still knows the script. But the confidence has a lag in it now, like the company is answering last year's question with this year's price tag.

That is the part most coverage misses: operating delay eventually becomes a customer sensation. People do not need to read an org chart to feel one. When the company takes too long to decide, the product starts carrying that hesitation for it.`,
  'porsche-new-ceo-transition-watch',
  [
    companyCard('porsche', 'Porsche', 'Automotive / premium vehicles', 6.4, 'Transitioning', {
      decisionLatency: 6,
      errorCorrection: 7,
      knowledgeLocation: 6,
      talentFlow: 6,
      knowledgeVelocity: 6,
      structuralLockIn: 7,
      capitalIntensity: 7,
    }, ['VW Group gravity', 'EV strategy reversal', 'China weakness', 'Job cuts', 'Capital-heavy product pivots']),
  ],
  [
    textBlock('porsche-start-heading', 'heading_2', 'Start here'),
    textBlock('porsche-start-1', 'paragraph', 'Porsche has a new boss, but the real question sits below the nameplate. Can the company make decisions like a focused premium carmaker while living inside a much larger parent system?'),
    textBlock('porsche-start-2', 'paragraph', 'The old Porsche formula was simple: protect the badge, deepen the engineering, keep volume disciplined, and let margins do the talking. That formula got harder when EV timing, China demand, software, and VW complexity all arrived at once.'),
    textBlock('porsche-start-3', 'paragraph', 'Michael Leiters gives Porsche a cleaner center of gravity. He knows the product. He knows the culture. The test is whether he can make the operating system faster, not only the story cleaner.'),
    textBlock('porsche-pressure-heading', 'heading_2', 'The pressure'),
    textBlock('porsche-pressure-1', 'paragraph', 'This is a transition watch because Porsche still has real strengths. The brand still means something. The customer base still has money. The engineering bench still knows the work. But premium confidence can turn into delay when the market asks for a different answer.'),
    textBlock('porsche-score-heading', 'heading_2', 'The scoreboard'),
    textBlock('porsche-score-0', 'bulleted_list_item', 'Operating margin fell from the old high-margin story into a much tighter 2025 setup. That changes the room.'),
    textBlock('porsche-score-1', 'bulleted_list_item', 'China weakness exposed how much premium demand can shift when local competitors improve.'),
    textBlock('porsche-score-2', 'bulleted_list_item', 'The EV plan moved from confidence to course correction. That costs money and trust.'),
    textBlock('porsche-score-3', 'bulleted_list_item', 'Planned job cuts show the company is trying to remove weight while still protecting craft.'),
    textBlock('porsche-score-4', 'bulleted_list_item', 'VW Group ownership gives scale, platforms, and purchasing power, but it also adds overhead.'),
    textBlock('porsche-score-5', 'bulleted_list_item', 'The new CEO gives Porsche one clear accountable center after the split-leadership drag.'),
    textBlock('porsche-working-heading', 'heading_2', 'Still working'),
    textBlock('porsche-working-0', 'bulleted_list_item', 'The Porsche badge still carries trust that most automakers would pay anything to own.'),
    textBlock('porsche-working-1', 'bulleted_list_item', 'Leiters has product credibility, not only executive polish.'),
    textBlock('porsche-working-2', 'bulleted_list_item', 'Hybrid flexibility fits the customer better than forcing one clean EV story too early.'),
    textBlock('porsche-stuck-heading', 'heading_2', 'Still stuck'),
    textBlock('porsche-stuck-0', 'bulleted_list_item', 'VW Group complexity still sits around the company.'),
    textBlock('porsche-stuck-1', 'bulleted_list_item', 'Every product pivot is expensive in a capital-heavy car business.'),
    textBlock('porsche-stuck-2', 'bulleted_list_item', 'China will be harder to win back than it was to lose.'),
    textBlock('porsche-bottom-heading', 'heading_2', 'Bottom line'),
    textBlock('porsche-bottom-1', 'paragraph', 'At work today, pick one customer complaint that keeps coming back and trace the delay behind it. Count every approval, handoff, and meeting between the signal and the fix. The real owner is the first person who can remove one of those steps this week.'),
  ]
);

const buildCitigroupBoraBora = (): AnalysisContent => article(
  'local-citigroup-project-bora-bora',
  'Citigroup Project Bora Bora: Fewer Layers, Fewer Hiding Places',
  'Transition Watch',
  '2026-06-08',
  `You have the answer, but the answer still has to travel. One meeting prepares the room. Another meeting protects the room. A committee blesses the room. By the time the decision arrives, everyone can say they touched it and nobody has to say they owned it.

That is why Citi's flattening is more interesting than a normal restructuring story. It made delay more visible before it made the bank braver. Sometimes the first real transformation is taking away the architecture that lets nobody be responsible.`,
  'citigroup-project-bora-bora',
  [
    companyCard('citigroup', 'Citigroup', 'Banking / financial services', 5.05, 'Transitioning', {
      decisionLatency: 5,
      errorCorrection: 5,
      knowledgeLocation: 6,
      talentFlow: 5,
      knowledgeVelocity: 5,
      structuralLockIn: 6,
      capitalIntensity: 6,
    }, ['Regulatory overhead', 'Legacy systems', 'Global complexity', 'Committee memory', 'Execution fatigue']),
  ],
  [
    textBlock('citi-start-heading', 'heading_2', 'Start here'),
    textBlock('citi-start-1', 'paragraph', 'Project Bora Bora is interesting because it attacked structure before culture. Citi skipped the poster version of speed and removed places where decisions went to sit down.'),
    textBlock('citi-start-2', 'paragraph', 'The old Citi problem was not a lack of smart people. It was too many rooms, layers, checks, side channels, and inherited systems between the work and the answer.'),
    textBlock('citi-start-3', 'paragraph', 'A bank will never move like a startup. That is fine. The goal is a bank with fewer unnecessary waits.'),
    textBlock('citi-pressure-heading', 'heading_2', 'The pressure'),
    textBlock('citi-pressure-1', 'paragraph', 'Banking has real friction for good reasons. Regulators, capital requirements, risk controls, and trust all slow the room down. The extra friction is the part Citi had to cut.'),
    textBlock('citi-score-heading', 'heading_2', 'The scoreboard'),
    textBlock('citi-score-0', 'bulleted_list_item', 'Management layers moved from 13 to 8. That is a structural change, not a mood change.'),
    textBlock('citi-score-1', 'bulleted_list_item', 'Roughly 60 committees were eliminated. Fewer committees means fewer places for ownership to dissolve.'),
    textBlock('citi-score-2', 'bulleted_list_item', 'About 20,000 roles were cut during the simplification push. The cost is real.'),
    textBlock('citi-score-3', 'bulleted_list_item', 'The stock response showed investors believed the delay tax was finally being addressed.'),
    textBlock('citi-score-4', 'bulleted_list_item', 'Global banking still carries regulatory and systems drag that flattening will never erase.'),
    textBlock('citi-score-5', 'bulleted_list_item', 'The next test is whether new committees quietly grow back.'),
    textBlock('citi-working-heading', 'heading_2', 'Still working'),
    textBlock('citi-working-0', 'bulleted_list_item', 'Fraser changed the shape of the organization, not only the language.'),
    textBlock('citi-working-1', 'bulleted_list_item', 'Fewer layers make accountability easier to find.'),
    textBlock('citi-working-2', 'bulleted_list_item', 'The bank now has a cleaner way to judge whether decisions are moving.'),
    textBlock('citi-stuck-heading', 'heading_2', 'Still stuck'),
    textBlock('citi-stuck-0', 'bulleted_list_item', 'Legacy systems still keep old complexity alive.'),
    textBlock('citi-stuck-1', 'bulleted_list_item', 'Global regulation creates friction no org chart can delete.'),
    textBlock('citi-stuck-2', 'bulleted_list_item', 'After a cleanup, the organization can start rebuilding the very drag it removed.'),
    textBlock('citi-bottom-heading', 'heading_2', 'Bottom line'),
    textBlock('citi-bottom-1', 'paragraph', 'At work today, take one stalled decision and write down every room it still has to visit. If more than one person can block it but nobody clearly owns it, you are looking at shelter for delay, not an alignment problem.'),
  ]
);

const buildChevronCalcificationAlert = (): AnalysisContent => article(
  'local-chevron-layoffs-calcification-alert',
  "Chevron Calcification Alert: Cutting Heads Isn't Simplification",
  'Calcification Alert',
  '2026-06-08',
  `You are the person on the site who knows which valve sticks, which shortcut keeps the shift alive, and which weird local habit prevents a bad day from becoming a shutdown. Then the decision moves to a hub that has cleaner dashboards and less dirt under its nails.

The dangerous part starts when centralization quietly separates knowledge from authority. In heavy work, the most expensive distance is the distance between the person who knows and the person allowed to decide.`,
  'chevron-layoffs-calcification-alert',
  [
    companyCard('chevron', 'Chevron', 'Energy / oil and gas', 6.5, 'Transitioning', {
      decisionLatency: 7,
      errorCorrection: 7,
      knowledgeLocation: 7,
      talentFlow: 8,
      knowledgeVelocity: 6,
      structuralLockIn: 8,
      capitalIntensity: 9,
    }, ['Workforce cuts', 'Centralization', 'Local knowledge loss', 'Oil infrastructure lock-in', 'Energy-transition pressure']),
  ],
  [
    textBlock('chevron-start-heading', 'heading_2', 'Start here'),
    textBlock('chevron-start-1', 'paragraph', 'A calcification alert shows up when a company responds to pressure by becoming more rigid. Chevron is cutting people and centralizing work. The cost line may improve before the learning line gets worse.'),
    textBlock('chevron-start-2', 'paragraph', 'Oil and gas already runs on heavy assets. Wells, refineries, pipelines, safety rules, and long planning cycles create real lock-in. When local knowledge leaves, the structure has even less room to bend.'),
    textBlock('chevron-start-3', 'paragraph', 'The risk is simple: the company may remove the people who know where the real problems live.'),
    textBlock('chevron-pattern-heading', 'heading_2', 'The pattern'),
    textBlock('chevron-pattern-1', 'paragraph', 'Centralization often sounds like simplification from headquarters. From the worksite, it can feel like the answer moved farther away.'),
    textBlock('chevron-score-heading', 'heading_2', 'The scoreboard'),
    textBlock('chevron-score-0', 'bulleted_list_item', 'Chevron has targeted a major workforce reduction by the end of 2026.'),
    textBlock('chevron-score-1', 'bulleted_list_item', 'The savings target sits around $2B to $3B. That is a cost story before it is a capability story.'),
    textBlock('chevron-score-2', 'bulleted_list_item', 'Headquarters moved from California to Texas, shifting the center of gravity.'),
    textBlock('chevron-score-3', 'bulleted_list_item', 'Shared services and engineering hubs move more work away from local operating context.'),
    textBlock('chevron-score-4', 'bulleted_list_item', 'Digital twins and AI can help, but they will never replace trust from people close to the asset.'),
    textBlock('chevron-score-5', 'bulleted_list_item', 'The energy transition keeps changing the terrain while the asset base stays heavy.'),
    textBlock('chevron-working-heading', 'heading_2', 'Still working'),
    textBlock('chevron-working-0', 'bulleted_list_item', 'Chevron still has scale, cash flow, and deep operating knowledge.'),
    textBlock('chevron-working-1', 'bulleted_list_item', 'Hubs can reduce duplicate work when the process is truly repeatable.'),
    textBlock('chevron-working-2', 'bulleted_list_item', 'Digital operations can improve visibility if field judgment stays connected.'),
    textBlock('chevron-stuck-heading', 'heading_2', 'Still stuck'),
    textBlock('chevron-stuck-0', 'bulleted_list_item', 'Cutting people is easier than removing the friction that made the work slow.'),
    textBlock('chevron-stuck-1', 'bulleted_list_item', 'Central hubs can hide the cost of lost local knowledge.'),
    textBlock('chevron-stuck-2', 'bulleted_list_item', 'A capital-heavy company pays dearly when it learns late.'),
    textBlock('chevron-bottom-heading', 'heading_2', 'Bottom line'),
    textBlock('chevron-bottom-1', 'paragraph', 'At work today, before moving work into a shared service, name the local judgment that disappears with it. Then name the person who replaces that judgment under pressure. If no one can name that person, the savings case is missing the cost that will show up later.'),
  ]
);

const buildForeverLayoffs = (): AnalysisContent => article(
  'local-forever-layoffs-institutionalized-uncertainty',
  'Forever Layoffs: The Slow Bleed Became the System',
  'Calcification Alert',
  '2026-06-08',
  `You refresh Slack after another quiet reorg note and try to read the calendar like weather. Is the next meeting normal, or is it about you? The work is still there, but the room has stopped breathing normally.

That is the piece the spreadsheet misses. Repeated small cuts do not only remove cost. They install a background process in every employee's head. People start managing personal risk before they manage the work.`,
  'forever-layoffs-institutionalized-uncertainty',
  [],
  [
    textBlock('layoffs-start-heading', 'heading_2', 'Start here'),
    textBlock('layoffs-start-1', 'paragraph', 'Forever layoffs are what happens when companies stop treating job cuts as a hard reset and start using them like a weekly adjustment knob. Nobody gets one clean moment to understand the new shape. Everyone just keeps waiting.'),
    textBlock('layoffs-start-2', 'paragraph', 'That uncertainty has a cost. People protect themselves. They share less. They document less. They stop taking risks. The company may get smaller while the fear gets bigger.'),
    textBlock('layoffs-start-3', 'paragraph', 'A calcification alert shows up when the organization keeps cutting but the way work moves stays the same.'),
    textBlock('layoffs-pattern-heading', 'heading_2', 'The pattern'),
    textBlock('layoffs-pattern-1', 'paragraph', 'The new layoff model avoids the big headline by spreading pain into smaller batches. It lowers public heat, but it raises internal fog. People can survive a bad week. Living inside a permanent maybe is different.'),
    textBlock('layoffs-score-heading', 'heading_2', 'The scoreboard'),
    textBlock('layoffs-score-0', 'bulleted_list_item', 'Small-batch cuts have become a normal operating move across large companies.'),
    textBlock('layoffs-score-1', 'bulleted_list_item', 'AI is often named as the reason, even when the old structure stays untouched.'),
    textBlock('layoffs-score-2', 'bulleted_list_item', 'Hiring plans shrink while workload often stays put. That pushes more work onto survivors.'),
    textBlock('layoffs-score-3', 'bulleted_list_item', 'Employee trust falls faster than process complexity.'),
    textBlock('layoffs-score-4', 'bulleted_list_item', 'The market may reward lower cost before it sees the knowledge loss.'),
    textBlock('layoffs-score-5', 'bulleted_list_item', 'The deeper signal is whether decision paths get shorter after the cuts.'),
    textBlock('layoffs-working-heading', 'heading_2', 'Still working'),
    textBlock('layoffs-working-0', 'bulleted_list_item', 'Some companies really do need to stop funding stale work.'),
    textBlock('layoffs-working-1', 'bulleted_list_item', 'Smaller teams can move faster when decision rights move with them.'),
    textBlock('layoffs-working-2', 'bulleted_list_item', 'AI can remove handoff work when the process is redesigned around it.'),
    textBlock('layoffs-stuck-heading', 'heading_2', 'Still stuck'),
    textBlock('layoffs-stuck-0', 'bulleted_list_item', 'Most cuts remove people faster than they remove approvals.'),
    textBlock('layoffs-stuck-1', 'bulleted_list_item', 'Fear slows learning because people stop telling the full truth.'),
    textBlock('layoffs-stuck-2', 'bulleted_list_item', 'A company can get leaner on paper and heavier in practice.'),
    textBlock('layoffs-bottom-heading', 'heading_2', 'Bottom line'),
    textBlock('layoffs-bottom-1', 'paragraph', 'At work today, if your team lost people, remove one approval, meeting, or handoff before assigning the leftover work. If the headcount changed but the work path stayed the same, the team got a harder version of the same maze.'),
  ]
);

const buildBlendedWorkforce = (): AnalysisContent => article(
  'local-blended-workforce-ai-teammates',
  'Blended Workforce: Your Next Teammate May Be Software',
  'Field Notes',
  '2026-06-08',
  `You open the morning queue and half the work has already moved while you slept. Drafts are waiting. Tickets are sorted. Exceptions are flagged. A few decisions only need a human thumbprint, and a few mistakes already look very confident.

AI teammates do not enter a clean workplace. They enter your real one. That is why they expose the mess before they fix it: unclear owners, fake approvals, bad handoffs, and decisions nobody wanted to own in the first place.`,
  'blended-workforce-ai-teammates',
  [],
  [
    textBlock('blended-start-heading', 'heading_2', 'Start here'),
    textBlock('blended-start-1', 'paragraph', 'A blended workforce is a work system where some teammates have judgment, some have memory, some have speed, and some have no pulse. The hard part is deciding who gets to act, who checks the work, and who owns the miss.'),
    textBlock('blended-start-2', 'paragraph', 'Most companies will add AI agents to old org charts and wonder why the speed never shows up. The agent can move fast. The approval chain around it still moves like a hallway line.'),
    textBlock('blended-start-3', 'paragraph', 'The useful question goes beyond whether AI can do a task. Can the organization absorb faster work without turning it back into meetings?'),
    textBlock('blended-signal-heading', 'heading_2', 'The signal'),
    textBlock('blended-signal-1', 'paragraph', 'The first good blended teams will feel less like automation and more like a clean kitchen. Prep work done early. Repeated work handled quietly. Humans spending more time on judgment, exceptions, and taste.'),
    textBlock('blended-score-heading', 'heading_2', 'The scoreboard'),
    textBlock('blended-score-0', 'bulleted_list_item', 'Enterprise apps are moving toward embedded agents as a normal feature, not a special lab project.'),
    textBlock('blended-score-1', 'bulleted_list_item', 'More routine decisions will be made by software inside human-set boundaries.'),
    textBlock('blended-score-2', 'bulleted_list_item', 'Managers will start coordinating digital workers along with human workers.'),
    textBlock('blended-score-3', 'bulleted_list_item', 'The old job description will lose ground to the work chart: task, context, owner, tool, check.'),
    textBlock('blended-score-4', 'bulleted_list_item', 'Companies with clear data and clean decision rights will get more value from agents.'),
    textBlock('blended-score-5', 'bulleted_list_item', 'Companies with messy handoffs will automate confusion first.'),
    textBlock('blended-working-heading', 'heading_2', 'Still working'),
    textBlock('blended-working-0', 'bulleted_list_item', 'Agents can remove repetitive coordination work that drains human attention.'),
    textBlock('blended-working-1', 'bulleted_list_item', 'Humans can spend more time on judgment when the routine work is handled.'),
    textBlock('blended-working-2', 'bulleted_list_item', 'Teams with clear boundaries can let software act without turning reckless.'),
    textBlock('blended-stuck-heading', 'heading_2', 'Still stuck'),
    textBlock('blended-stuck-0', 'bulleted_list_item', 'Old approval chains can swallow any speed the agent creates.'),
    textBlock('blended-stuck-1', 'bulleted_list_item', 'Nobody wants to own an AI mistake if governance is fuzzy.'),
    textBlock('blended-stuck-2', 'bulleted_list_item', 'Bad data turns fast tools into fast mess.'),
    textBlock('blended-bottom-heading', 'heading_2', 'Bottom line'),
    textBlock('blended-bottom-1', 'paragraph', 'At work today, choose one AI-assisted workflow and write down four things: human owner, agent boundary, error check, escalation path. If any box is fuzzy, do not scale the tool yet. You are about to automate confusion.'),
  ]
);

const buildCoordinationAge = (): AnalysisContent => article(
  'local-the-one-percent-coordination-age',
  'The One Percent: Signals From the Coordination Age',
  'Field Notes',
  '2026-06-08',
  `You already know the answer, but the answer has to climb. First your manager translates it. Then their manager softens it. Then another room asks for context you had at the beginning. Somewhere else, a smaller company just uses the answer.

The coordination age is a route race more than a tools race. The rare organizations look faster because they built shorter paths between judgment and action, so the work finds the right person, agent, or team before the moment goes stale.`,
  'the-one-percent-coordination-age',
  [],
  [
    textBlock('coord-start-heading', 'heading_2', 'Start here'),
    textBlock('coord-start-1', 'paragraph', 'The coordination age is the moment when the scarce thing stops being information and starts being clean movement. Who knows? Who decides? Who acts? Who checks? The best organizations make those paths short.'),
    textBlock('coord-start-2', 'paragraph', 'Most companies still run on inherited hierarchy. The work climbs the ladder, waits for a meeting, gets translated, loses context, then comes back down as a decision. That used to be normal overhead. Now it is a competitive tax.'),
    textBlock('coord-start-3', 'paragraph', 'The one percent is building around outcomes, not boxes. The route the work takes carries more weight than the org chart.'),
    textBlock('coord-signal-heading', 'heading_2', 'The signal'),
    textBlock('coord-signal-1', 'paragraph', 'AI agents make coordination visible. If the company already knows how to share context, agents add speed. If the company hoards context, agents mostly produce more tickets, dashboards, and status noise.'),
    textBlock('coord-score-heading', 'heading_2', 'The scoreboard'),
    textBlock('coord-score-0', 'bulleted_list_item', 'Industrial hierarchy still dominates most organizations.'),
    textBlock('coord-score-1', 'bulleted_list_item', 'Agile and digital models helped, but many kept the same approval habits underneath.'),
    textBlock('coord-score-2', 'bulleted_list_item', 'A small minority is moving toward networked teams, shared context, and faster edge decisions.'),
    textBlock('coord-score-3', 'bulleted_list_item', 'AI work capacity is expanding faster than management systems can adapt.'),
    textBlock('coord-score-4', 'bulleted_list_item', 'The job of management shifts from supervising effort to designing the conditions for clean action.'),
    textBlock('coord-score-5', 'bulleted_list_item', 'The laggards will confuse tool adoption with coordination improvement.'),
    textBlock('coord-working-heading', 'heading_2', 'Still working'),
    textBlock('coord-working-0', 'bulleted_list_item', 'Networked teams can pull knowledge to the work instead of routing everything upward.'),
    textBlock('coord-working-1', 'bulleted_list_item', 'AI agents can lower the cost of coordination when context is shared.'),
    textBlock('coord-working-2', 'bulleted_list_item', 'Outcome-based work makes the org less dependent on title and territory.'),
    textBlock('coord-stuck-heading', 'heading_2', 'Still stuck'),
    textBlock('coord-stuck-0', 'bulleted_list_item', 'Most companies still protect authority by controlling information flow.'),
    textBlock('coord-stuck-1', 'bulleted_list_item', 'Middle layers often survive by translating work that should be visible already.'),
    textBlock('coord-stuck-2', 'bulleted_list_item', 'Tools will never fix a company that punishes people for acting with context.'),
    textBlock('coord-bottom-heading', 'heading_2', 'Bottom line'),
    textBlock('coord-bottom-1', 'paragraph', 'At work today, take one recurring decision and move the needed context to the person closest to the work. If the decision still has to climb after that, your tool stack may be modern, but your coordination system is still old.'),
  ]
);

const buildMicrosoftSoftLayoff = (): AnalysisContent | null => {
  const microsoft = getSnapshotBySlug('microsoft');
  return article(
    'local-microsoft-soft-layoff-rto-mandate',
    'The Soft Layoff: Microsoft RTO and the Friction Tax',
    'Wildcard',
    '2026-06-08',
    `You are at the kitchen table doing commute math for a job that was already getting done: gas, trains, childcare, lost focus, three office days, and the quiet question of whether the company wants collaboration or attrition.

Return-to-office can be a workplace policy. It can also be a sorting mechanism. The clever version never says layoff. It just changes the deal until some people leave on their own.`,
    'microsoft-soft-layoff-rto-mandate',
    microsoft ? [snapshotCompany(microsoft, 'Software / cloud / AI')] : [],
    [
      textBlock('ms-start-heading', 'heading_2', 'Start here'),
      textBlock('ms-start-1', 'paragraph', 'The soft layoff works because it changes the deal without calling it a layoff. Commute more. Lose flexibility. Rearrange childcare. Spend more time proving presence. Some people leave. The severance bill stays lower.'),
      textBlock('ms-start-2', 'paragraph', 'Microsoft has a real speed problem to solve in AI. Nadella has said big-company size can become a disadvantage. The question is whether RTO removes friction or simply moves it onto employees.'),
      textBlock('ms-start-3', 'paragraph', 'If the approval layers stay, fewer people in the same slow system will not create startup speed. It creates tired people.'),
      textBlock('ms-pattern-heading', 'heading_2', 'The pattern'),
      textBlock('ms-pattern-1', 'paragraph', 'A wildcard read names the thing everyone feels but the memo avoids. The RTO policy may be written as culture. It can still behave like headcount pressure.'),
      textBlock('ms-score-heading', 'heading_2', 'The scoreboard'),
      textBlock('ms-score-0', 'bulleted_list_item', 'The mandate asks many employees near an office to return three days a week.'),
      textBlock('ms-score-1', 'bulleted_list_item', 'Microsoft already cut thousands of roles during the AI reset.'),
      textBlock('ms-score-2', 'bulleted_list_item', 'Executives across industries have admitted RTO can help push voluntary quits.'),
      textBlock('ms-score-3', 'bulleted_list_item', 'AI competition rewards speed, context, and small-team judgment.'),
      textBlock('ms-score-4', 'bulleted_list_item', 'A commute fixes none of the approval paths by itself.'),
      textBlock('ms-score-5', 'bulleted_list_item', 'The real metric is whether teams can decide faster after the mandate.'),
      textBlock('ms-working-heading', 'heading_2', 'Still working'),
      textBlock('ms-working-0', 'bulleted_list_item', 'Microsoft still has Azure, enterprise trust, and deep AI distribution.'),
      textBlock('ms-working-1', 'bulleted_list_item', 'Some work benefits from people building context in the same room.'),
      textBlock('ms-working-2', 'bulleted_list_item', 'Nadella is at least naming the speed gap honestly.'),
      textBlock('ms-stuck-heading', 'heading_2', 'Still stuck'),
      textBlock('ms-stuck-0', 'bulleted_list_item', 'Presence can become a substitute for fixing decision rights.'),
      textBlock('ms-stuck-1', 'bulleted_list_item', 'Voluntary exits can drain the exact people with better options.'),
      textBlock('ms-stuck-2', 'bulleted_list_item', 'A big company can shrink and still stay slow.'),
      textBlock('ms-bottom-heading', 'heading_2', 'Bottom line'),
      textBlock('ms-bottom-1', 'paragraph', 'At work today, test any office mandate against three outcomes: fewer decision layers, shorter build cycles, cleaner handoffs. If the policy only adds presence, the company moved friction onto employees and called it culture.'),
    ]
  );
};

const buildSubscriptionHeist = (): AnalysisContent => article(
  'local-subscription-heist-forgetfulness-business-model',
  'Subscription Heist: Forgetting Became a Business Model',
  'Wildcard',
  '2026-06-08',
  `You scan a bank statement and find three little charges you meant to cancel months ago. None is big enough to start a fight. Together, they have been quietly eating lunch money.

The subscription game is won in the tiny gap between intention and attention. A company can keep charging long after the relationship has gone cold if leaving requires more focus than staying.`,
  'subscription-heist-forgetfulness-business-model',
  [],
  [
    textBlock('sub-start-heading', 'heading_2', 'Start here'),
    textBlock('sub-start-1', 'paragraph', 'The subscription economy found a quiet gap between what people intend to use and what people keep paying for. That gap can be design, timing, friction, and human memory doing the work.'),
    textBlock('sub-start-2', 'paragraph', 'Sign-up is smooth. Cancellation is where the stairs appear. Extra screens. Hidden settings. Retention offers. Login loops. A phone call for the thing that took one click to start.'),
    textBlock('sub-start-3', 'paragraph', 'Once you see it, your bank statement starts looking like a map of tiny abandoned decisions.'),
    textBlock('sub-pattern-heading', 'heading_2', 'The pattern'),
    textBlock('sub-pattern-1', 'paragraph', 'This is a wildcard because the pattern travels. Streaming, apps, software, gyms, newsletters, delivery plans, cloud storage. The business wins when leaving takes more attention than staying.'),
    textBlock('sub-score-heading', 'heading_2', 'The scoreboard'),
    textBlock('sub-score-0', 'bulleted_list_item', 'Free trials depend on the gap between intention and calendar memory.'),
    textBlock('sub-score-1', 'bulleted_list_item', 'Many cancellation flows are still harder than sign-up flows.'),
    textBlock('sub-score-2', 'bulleted_list_item', 'Dark-pattern enforcement is increasing, which means the terrain is getting more expensive.'),
    textBlock('sub-score-3', 'bulleted_list_item', 'Households often underestimate what recurring charges really cost.'),
    textBlock('sub-score-4', 'bulleted_list_item', 'The strongest subscription businesses earn loyalty. The weaker ones tax attention.'),
    textBlock('sub-score-5', 'bulleted_list_item', 'The key test is whether a customer can leave as easily as they joined.'),
    textBlock('sub-working-heading', 'heading_2', 'Still working'),
    textBlock('sub-working-0', 'bulleted_list_item', 'Subscriptions can be honest when the value is active and obvious.'),
    textBlock('sub-working-1', 'bulleted_list_item', 'Recurring revenue helps companies plan, invest, and support customers.'),
    textBlock('sub-working-2', 'bulleted_list_item', 'Easy cancellation can build trust that keeps good customers longer.'),
    textBlock('sub-stuck-heading', 'heading_2', 'Still stuck'),
    textBlock('sub-stuck-0', 'bulleted_list_item', 'Many companies still treat cancellation friction like retention.'),
    textBlock('sub-stuck-1', 'bulleted_list_item', 'Forgotten charges create revenue without creating relationship.'),
    textBlock('sub-stuck-2', 'bulleted_list_item', 'The more regulators look, the less profitable confusion becomes.'),
    textBlock('sub-bottom-heading', 'heading_2', 'Bottom line'),
    textBlock('sub-bottom-1', 'paragraph', 'At work today, run your own cancellation or offboarding flow from a fresh browser window and count the steps. If leaving takes more effort than joining, you are training customers to distrust the next thing you sell them.'),
  ]
);

const buildShadowWork = (): AnalysisContent => article(
  'local-shadow-work-self-checkout-heist',
  'Shadow Work: You Are the Cashier Now',
  'Wildcard',
  '2026-06-08',
  `You are holding a bag of apples, trying to remember the produce code while the machine scolds you for an unexpected item. The line is moving, sort of. The job has changed hands, and nobody announced the transfer.

Self-checkout is a labor story with a machine in the middle and a convenience label on top. The store gets a new cost structure, and the customer gets a blinking screen unless some of that value comes back.`,
  'shadow-work-self-checkout-heist',
  [],
  [
    textBlock('shadow-start-heading', 'heading_2', 'Start here'),
    textBlock('shadow-start-1', 'paragraph', 'Shadow work is the unpaid labor companies move onto customers. It feels normal because each task is small. Scan the groceries. Print the boarding pass. Troubleshoot the chatbot. Build the furniture. Enter the data.'),
    textBlock('shadow-start-2', 'paragraph', 'Self-checkout is the cleanest example because the old job is visible. There used to be a cashier. Now there is you, a machine, and one employee watching several lanes.'),
    textBlock('shadow-start-3', 'paragraph', 'The company calls it self-service. The sharper read is that service became your job.'),
    textBlock('shadow-pattern-heading', 'heading_2', 'The pattern'),
    textBlock('shadow-pattern-1', 'paragraph', 'The trick is making the transfer feel like control. You move at your own pace. You bag things your way. You feel active. Meanwhile the labor cost moved from payroll into the customer line.'),
    textBlock('shadow-score-heading', 'heading_2', 'The scoreboard'),
    textBlock('shadow-score-0', 'bulleted_list_item', 'One employee can supervise several self-checkout machines.'),
    textBlock('shadow-score-1', 'bulleted_list_item', 'Retailers save labor cost while customers often pay the same shelf price.'),
    textBlock('shadow-score-2', 'bulleted_list_item', 'Shrink and scanning errors rise, but the labor math can still look attractive.'),
    textBlock('shadow-score-3', 'bulleted_list_item', 'Some retailers have pulled back where the customer pain or theft cost got too high.'),
    textBlock('shadow-score-4', 'bulleted_list_item', 'The pattern now shows up in banking, travel, healthcare intake, and customer support.'),
    textBlock('shadow-score-5', 'bulleted_list_item', 'The real question is whether the saved labor cost returns to the customer or stays with the company.'),
    textBlock('shadow-working-heading', 'heading_2', 'Still working'),
    textBlock('shadow-working-0', 'bulleted_list_item', 'Self-checkout can be faster for a small basket when the system works.'),
    textBlock('shadow-working-1', 'bulleted_list_item', 'Some customers like control over bagging and pace.'),
    textBlock('shadow-working-2', 'bulleted_list_item', 'Stores can redeploy labor when the design is honest and staffed well.'),
    textBlock('shadow-stuck-heading', 'heading_2', 'Still stuck'),
    textBlock('shadow-stuck-0', 'bulleted_list_item', 'The machine often scolds the customer for doing a job they were never trained to do.'),
    textBlock('shadow-stuck-1', 'bulleted_list_item', 'Labor savings rarely show up as lower prices in a way shoppers can see.'),
    textBlock('shadow-stuck-2', 'bulleted_list_item', 'A bad self-service system turns customers into unpaid support staff.'),
    textBlock('shadow-bottom-heading', 'heading_2', 'Bottom line'),
    textBlock('shadow-bottom-1', 'paragraph', 'At work today, look at one self-service flow and ask what the customer gets back for doing the work: lower price, faster service, better control, or no visible return. No visible return means the convenience story is covering a margin grab.'),
  ]
);

const buildAndurilTransitionWatch = (): AnalysisContent => article(
  'local-anduril-arsenal-transition-watch',
  'Anduril Transition Watch: The Startup Won the Room',
  'Transition Watch',
  '2026-06-10',
  `You are a program lead inside a defense office, and the old buying path feels like trying to move a piano through a hallway. Then a newer company walks in with software, drones, factory language, and a promise that the weapon can move more like a product.

Anduril's real test starts after the applause. A startup can win attention by moving faster than the primes. It keeps the advantage only if Pentagon scale, factory buildout, contracts, security rules, and middle-management gravity fail to turn it into the thing it was built to embarrass.`,
  'anduril-arsenal-transition-watch',
  [
    companyCard('anduril-industries', 'Anduril Industries', 'Aerospace / defense technology', 4.8, 'Transitioning', {
      decisionLatency: 4,
      errorCorrection: 5,
      knowledgeLocation: 5,
      talentFlow: 4,
      knowledgeVelocity: 4,
      structuralLockIn: 5,
      capitalIntensity: 7,
    }, ['High capital intensity', 'Bureaucratic approval chains', 'Contract concentration', 'Factory scale-up', 'Acquisition complexity']),
  ],
  [
    textBlock('anduril-start-heading', 'heading_2', 'Start here'),
    textBlock('anduril-start-1', 'paragraph', 'Anduril is moving from insurgent defense-tech story into prime-contractor territory. The Army gave it a contract framework worth up to $20B over 10 years, and Arsenal-1 is supposed to turn the company from prototype shop into production muscle.'),
    textBlock('anduril-start-2', 'paragraph', 'That is the moment to watch. The company has proved it can make old procurement look slow. Now it has to prove that a new procurement path stays fast after the paperwork, factory floor, and government review cycle all get inside the company.'),
    textBlock('anduril-start-3', 'paragraph', 'Vital Signs asks whether the body is changing in time. Anduril still looks alive, but the weight on the frame just got much heavier.'),
    textBlock('anduril-pressure-heading', 'heading_2', 'The pressure'),
    textBlock('anduril-pressure-1', 'paragraph', 'The defense market wants speed, volume, and software rhythm at the same time. That is a hard combination. Missiles, drones, sensors, command systems, and compliance all have to move together without turning every decision into a federal relay race.'),
    textBlock('anduril-score-heading', 'heading_2', 'The scoreboard'),
    textBlock('anduril-score-0', 'bulleted_list_item', 'The Army enterprise contract has a potential ceiling of $20B and consolidates current and future commercial solutions into one buying path.'),
    textBlock('anduril-score-1', 'bulleted_list_item', 'The contract is designed to reduce administrative cost and speed delivery to soldiers and government users. That is a procurement signal, not only a revenue signal.'),
    textBlock('anduril-score-2', 'bulleted_list_item', 'Anduril also signed a framework agreement in May 2026 to scale production of the surface-launched Barracuda-500M.'),
    textBlock('anduril-score-3', 'bulleted_list_item', 'Arsenal-1 is expected to bring 4,000-plus direct jobs in Ohio and create a factory system around autonomous weapons.'),
    textBlock('anduril-score-4', 'bulleted_list_item', 'Capital intensity is the main drag. Software speed gets harder when the answer has to leave a factory.'),
    textBlock('anduril-score-5', 'bulleted_list_item', 'The GPI read sits at 4.8: promising movement, with real risk from government approval chains and manufacturing scale.'),
    textBlock('anduril-working-heading', 'heading_2', 'Still working'),
    textBlock('anduril-working-0', 'bulleted_list_item', 'Anduril keeps product, software, autonomy, and manufacturing closer together than many legacy defense models.'),
    textBlock('anduril-working-1', 'bulleted_list_item', 'The Army contract gives buyers a cleaner path than dozens of scattered procurement actions.'),
    textBlock('anduril-working-2', 'bulleted_list_item', 'The company still has founder energy and a clear enemy: slow defense acquisition.'),
    textBlock('anduril-stuck-heading', 'heading_2', 'Still stuck'),
    textBlock('anduril-stuck-0', 'bulleted_list_item', 'Government scale can turn a fast supplier into a process manager.'),
    textBlock('anduril-stuck-1', 'bulleted_list_item', 'Factory volume creates problems a software demo never has to solve.'),
    textBlock('anduril-stuck-2', 'bulleted_list_item', 'A company built to fight bureaucracy can start carrying bureaucracy once the contracts get large enough.'),
    textBlock('anduril-bottom-heading', 'heading_2', 'Bottom line'),
    textBlock('anduril-bottom-1', 'paragraph', 'At work today, look at the fastest vendor, team, or project in your world and ask what will slow it down once it becomes important. Name the approval, compliance, staffing, or production step that arrives with scale, then design the guardrail before the speed story becomes a process story.'),
  ]
);

const buildUnitedHealthCalcificationAlert = (): AnalysisContent | null => {
  const unitedhealth = getSnapshotBySlug('unitedhealth');

  return article(
    'local-unitedhealth-risk-adjustment-calcification-alert',
    'UnitedHealth Calcification Alert: The Coding Machine Got Too Good',
    'Calcification Alert',
    '2026-06-10',
    `You are a patient at the kitchen counter with a benefits letter, a portal password, and a bill that reads like it was written for someone else. Somewhere far away, a diagnosis code moved through a system you will never see, and that code may decide money, access, and trust.

UnitedHealth's warning sign is bigger than one investigation. The company sits at the place where care, claims, pharmacy, data, software, and reimbursement all touch. When that machine learns to optimize itself before the patient can understand it, scale stops looking like efficiency and starts looking like fog.`,
    'unitedhealth-risk-adjustment-calcification-alert',
    unitedhealth ? [snapshotCompany(unitedhealth, 'Healthcare / insurance / care delivery')] : [
      companyCard('unitedhealth', 'UnitedHealth Group', 'Healthcare / insurance / care delivery', 7.0, 'Transitioning', {
        decisionLatency: 8,
        errorCorrection: 7,
        knowledgeLocation: 6,
        talentFlow: 7,
        knowledgeVelocity: 7,
        structuralLockIn: 8,
        capitalIntensity: 5,
      }, ['Litigation exposure', 'Trust erosion', 'Regulatory pressure', 'Decision latency', 'Structural lock-in']),
    ],
    [
      textBlock('uhg-start-heading', 'heading_2', 'Start here'),
      textBlock('uhg-start-1', 'paragraph', 'A calcification alert shows up when the system gets better at protecting its own logic than explaining itself to the people inside it. UnitedHealth has the classic shape: enormous scale, deep data, multiple businesses, and a public trust problem.'),
      textBlock('uhg-start-2', 'paragraph', 'The Medicare Advantage scrutiny makes the GPI issue easier to see. Risk adjustment is supposed to match payment to patient complexity. The danger starts when coding becomes a profit engine that patients, doctors, regulators, and even internal teams struggle to see clearly.'),
      textBlock('uhg-start-3', 'paragraph', 'The company may be improving parts of the machine. The warning is that the machine itself has become too hard to inspect from the outside.'),
      textBlock('uhg-pattern-heading', 'heading_2', 'The pattern'),
      textBlock('uhg-pattern-1', 'paragraph', 'Healthcare calcification rarely looks like a single bad call. It looks like layers of incentives, documentation, vendor systems, clinical workflows, legal review, and reimbursement rules turning into a maze where everyone can point to a process.'),
      textBlock('uhg-score-heading', 'heading_2', 'The scoreboard'),
      textBlock('uhg-score-0', 'bulleted_list_item', 'UnitedHealth disclosed in July 2025 that it was complying with formal civil and criminal Justice Department requests tied to Medicare program issues.'),
      textBlock('uhg-score-1', 'bulleted_list_item', 'A January 2026 Senate Judiciary Committee investigation accused the company of aggressively using risk adjustment to increase Medicare Advantage reimbursement. UnitedHealth disputed the characterization.'),
      textBlock('uhg-score-2', 'bulleted_list_item', 'The company owns both insurance and Optum care, data, pharmacy, and services assets. That creates reach and internal complexity at the same time.'),
      textBlock('uhg-score-3', 'bulleted_list_item', 'GPI marks decision latency and structural lock-in as high-risk dimensions. In plain terms: big machine, slow correction.'),
      textBlock('uhg-score-4', 'bulleted_list_item', 'Independent reviews and board actions may help, but they have to make the machine more legible, not only more defensible.'),
      textBlock('uhg-score-5', 'bulleted_list_item', 'The core test is whether patients and clinicians can understand the logic that affects care and payment.'),
      textBlock('uhg-working-heading', 'heading_2', 'Still working'),
      textBlock('uhg-working-0', 'bulleted_list_item', 'UnitedHealth has data, reach, and care assets that could reduce waste when incentives line up with patients.'),
      textBlock('uhg-working-1', 'bulleted_list_item', 'The company has launched third-party reviews of policies, practices, and performance metrics.'),
      textBlock('uhg-working-2', 'bulleted_list_item', 'Scale can help healthcare when the organization uses it to simplify the patient path.'),
      textBlock('uhg-stuck-heading', 'heading_2', 'Still stuck'),
      textBlock('uhg-stuck-0', 'bulleted_list_item', 'Risk adjustment rewards documentation in ways normal patients will never see.'),
      textBlock('uhg-stuck-1', 'bulleted_list_item', 'Vertical integration creates power, but it also creates suspicion when the money path gets hard to trace.'),
      textBlock('uhg-stuck-2', 'bulleted_list_item', 'Legal compliance alone will not rebuild trust if the everyday experience still feels unreadable.'),
      textBlock('uhg-bottom-heading', 'heading_2', 'Bottom line'),
      textBlock('uhg-bottom-1', 'paragraph', 'At work today, find one process where the team can defend the rule but the customer would struggle to understand it. Rewrite the rule in customer language, then compare that plain version with how the process actually behaves. The gap is where trust is leaking.'),
    ]
  );
};

const buildAgentReceipts = (): AnalysisContent => article(
  'local-agent-receipts-workplace-trust',
  'Agent Receipts: The New Trust Layer at Work',
  'Field Notes',
  '2026-06-10',
  `You come back from lunch and the agent says the vendor issue is handled. The email went out, the ticket changed, the spreadsheet has new numbers, and the meeting note sounds confident. Now you have a stranger kind of work: approving an outcome when you missed the path.

That is why the next useful AI habit is the receipt. The question is shifting from whether an agent can act to whether its action leaves a trail a human can read, challenge, reverse, and trust under pressure.`,
  'agent-receipts-workplace-trust',
  [],
  [
    textBlock('receipt-start-heading', 'heading_2', 'Start here'),
    textBlock('receipt-start-1', 'paragraph', 'Agent work needs a receipt the same way expense work needs a receipt. A result alone is too thin. People need to know what was touched, what source was used, what boundary was followed, and who owns the next call.'),
    textBlock('receipt-start-2', 'paragraph', 'This is the business surface Marcus has been circling in the seeds: agent-legible companies expose clean offerings, prices, policies, status, and handoffs. Inside the workplace, agent-legible work exposes the same thing back to the team.'),
    textBlock('receipt-start-3', 'paragraph', 'Dashboards show gauges. Guidance tells you what the road is doing. Receipts tell you what already happened while the software had its hands on the wheel.'),
    textBlock('receipt-signal-heading', 'heading_2', 'The signal'),
    textBlock('receipt-signal-1', 'paragraph', 'The first agent failures will often look like small confidence gaps. Nobody knows which customer record changed. Nobody knows whether the source was fresh. Nobody knows whether the exception got escalated or buried. The output may be correct, but the room still hesitates.'),
    textBlock('receipt-score-heading', 'heading_2', 'The scoreboard'),
    textBlock('receipt-score-0', 'bulleted_list_item', 'More work will happen between meetings, outside a human typing every step.'),
    textBlock('receipt-score-1', 'bulleted_list_item', 'Managers will need audit trails that read like work notes, not system logs.'),
    textBlock('receipt-score-2', 'bulleted_list_item', 'The best agent workflows will show input, source, action, boundary, exception, owner, and rollback path.'),
    textBlock('receipt-score-3', 'bulleted_list_item', 'Teams without receipts will create new status meetings to rebuild trust manually.'),
    textBlock('receipt-score-4', 'bulleted_list_item', 'Agent adoption will stall fastest where nobody wants to own the invisible step.'),
    textBlock('receipt-score-5', 'bulleted_list_item', 'The receipt becomes the handoff between machine speed and human judgment.'),
    textBlock('receipt-working-heading', 'heading_2', 'Still working'),
    textBlock('receipt-working-0', 'bulleted_list_item', 'Agents can remove tedious coordination if their work arrives with context.'),
    textBlock('receipt-working-1', 'bulleted_list_item', 'A clear receipt lets a human review faster without redoing the whole task.'),
    textBlock('receipt-working-2', 'bulleted_list_item', 'Good receipt design turns AI from magic box into accountable teammate.'),
    textBlock('receipt-stuck-heading', 'heading_2', 'Still stuck'),
    textBlock('receipt-stuck-0', 'bulleted_list_item', 'Most teams still ask for outputs while ignoring the trail behind them.'),
    textBlock('receipt-stuck-1', 'bulleted_list_item', 'System logs are too technical for normal review, while summaries can hide the risky step.'),
    textBlock('receipt-stuck-2', 'bulleted_list_item', 'No receipt means trust has to be rebuilt by conversation every time.'),
    textBlock('receipt-bottom-heading', 'heading_2', 'Bottom line'),
    textBlock('receipt-bottom-1', 'paragraph', 'At work today, pick one AI-assisted task and require a receipt with seven lines: input, source, decision boundary, action taken, exception found, human owner, rollback path. If the agent leaves no trail, keep it in draft mode.'),
  ]
);

const buildAiAnswerTax = (): AnalysisContent => article(
  'local-ai-answer-tax-zero-click-web',
  'The AI Answer Tax: When the Web Gets Read Without a Visit',
  'Wildcard',
  '2026-06-10',
  `You search for a repair question, a hotel rule, a medication side effect, or a product comparison, and the answer appears before you ever touch the site that earned it. For you, it feels convenient. For the business behind the answer, the front door just got moved across the street.

The web is entering a new toll road. AI systems still need pages, reviews, guides, prices, recipes, docs, and reporting, but the visit is no longer guaranteed. The tax is paid by anyone whose work gets consumed upstream while the customer relationship stays somewhere else.`,
  'ai-answer-tax-zero-click-web',
  [],
  [
    textBlock('answer-tax-start-heading', 'heading_2', 'Start here'),
    textBlock('answer-tax-start-1', 'paragraph', 'The old internet bargain was simple enough: make something useful, get discovered, earn a visit, maybe earn trust or money. AI answers break that bargain by separating usefulness from the visit.'),
    textBlock('answer-tax-start-2', 'paragraph', 'Cloudflare has been warning about the crawl-to-click gap: AI systems can consume large amounts of content while sending little traffic back. Google AI summaries and AI Mode make that fight sharper because search sits between the reader and almost everyone else.'),
    textBlock('answer-tax-start-3', 'paragraph', 'The wildcard read is that every company with useful public information is now a publisher, whether it likes that label or not. Product pages, help centers, pricing pages, support docs, menus, spec sheets, and reviews are all feedstock.'),
    textBlock('answer-tax-pattern-heading', 'heading_2', 'The pattern'),
    textBlock('answer-tax-pattern-1', 'paragraph', 'The AI answer tax hits when a third-party interface captures the demand your content created. The customer gets an answer. The platform gets the session. Your business gets less chance to build trust, explain nuance, correct errors, or convert interest into action.'),
    textBlock('answer-tax-score-heading', 'heading_2', 'The scoreboard'),
    textBlock('answer-tax-score-0', 'bulleted_list_item', 'Cloudflare reported that training activity drove nearly 80% of AI bot traffic in mid-2025 while publisher referrals weakened.'),
    textBlock('answer-tax-score-1', 'bulleted_list_item', 'Cloudflare has pushed crawler separation so site owners can distinguish search indexing from AI use.'),
    textBlock('answer-tax-score-2', 'bulleted_list_item', 'The UK competition fight around Google AI results shows regulators are treating AI search as a market-power issue, not only a product feature.'),
    textBlock('answer-tax-score-3', 'bulleted_list_item', 'Small businesses face the same pattern as media companies: their best explanations may train or feed answer engines before a customer ever sees their brand.'),
    textBlock('answer-tax-score-4', 'bulleted_list_item', 'Blocking every crawler protects control but may reduce discovery. Allowing everything preserves reach but weakens leverage.'),
    textBlock('answer-tax-score-5', 'bulleted_list_item', 'The new question is which facts should travel freely and which facts need a path back to the business.'),
    textBlock('answer-tax-working-heading', 'heading_2', 'Still working'),
    textBlock('answer-tax-working-0', 'bulleted_list_item', 'AI answers can help customers solve easy questions faster.'),
    textBlock('answer-tax-working-1', 'bulleted_list_item', 'Agent-readable pages can make buying, booking, support, and comparison smoother.'),
    textBlock('answer-tax-working-2', 'bulleted_list_item', 'Clear public information still builds trust when the answer points back to the source.'),
    textBlock('answer-tax-stuck-heading', 'heading_2', 'Still stuck'),
    textBlock('answer-tax-stuck-0', 'bulleted_list_item', 'Many businesses have no map of which pages create demand versus which pages merely answer it.'),
    textBlock('answer-tax-stuck-1', 'bulleted_list_item', 'AI summaries can strip out context, caveats, and calls to action.'),
    textBlock('answer-tax-stuck-2', 'bulleted_list_item', 'A company can lose the visit long before it realizes it lost the relationship.'),
    textBlock('answer-tax-bottom-heading', 'heading_2', 'Bottom line'),
    textBlock('answer-tax-bottom-1', 'paragraph', 'At work today, list your five most useful public pages and mark each one as answer, trust, or transaction. For each answer page, add a stronger next step, a clearer source claim, and a reason for the reader or agent to come back to you before acting.'),
  ]
);

const localAnalyses: Record<string, () => AnalysisContent | null> = {
  'allbirds-newbird-ai-wtf-file': buildAllbirdsWtfFile,
  'spacex-ipo-public-gravity': buildSpaceXIpoWatch,
  'tesla-vs-byd-ev-wars': buildTeslaBydRead,
  'eli-lilly-vs-novo-nordisk-pill-wars': buildPillWarsRead,
  'openai-vs-anthropic-agent-wars': buildAgentWarsRead,
  'anduril-arsenal-transition-watch': buildAndurilTransitionWatch,
  'porsche-new-ceo-transition-watch': buildPorscheTransitionWatch,
  'citigroup-project-bora-bora': buildCitigroupBoraBora,
  'unitedhealth-risk-adjustment-calcification-alert': buildUnitedHealthCalcificationAlert,
  'chevron-layoffs-calcification-alert': buildChevronCalcificationAlert,
  'forever-layoffs-institutionalized-uncertainty': buildForeverLayoffs,
  'agent-receipts-workplace-trust': buildAgentReceipts,
  'blended-workforce-ai-teammates': buildBlendedWorkforce,
  'the-one-percent-coordination-age': buildCoordinationAge,
  'ai-answer-tax-zero-click-web': buildAiAnswerTax,
  'microsoft-soft-layoff-rto-mandate': buildMicrosoftSoftLayoff,
  'subscription-heist-forgetfulness-business-model': buildSubscriptionHeist,
  'shadow-work-self-checkout-heist': buildShadowWork,
};

const AnalysisPage = ({ content }: Props) => {
  const lane = seriesLane[content.series] || { label: content.series || 'Reads', href: '/insights' };
  const readSections = getReadSections(content.blocks);
  const companyBlock =
    content.series === 'THE WTF FILES'
      ? { label: 'File subject', note: 'Public shell. New costume.' }
      : { label: 'Companies in the read', note: 'Same lens. Different weight.' };

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
              {content.teaser.split('\n\n').map((paragraph, index) => (
                <p key={index} className={`${index > 0 ? 'mt-4' : ''} text-xl leading-snug text-stone-950 md:text-2xl`}>
                  {paragraph}
                </p>
              ))}
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
                  <p className="gpi-kicker">{companyBlock.label}</p>
                  <p className="mt-3 text-sm leading-6 text-stone-700">
                    {companyBlock.note}
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
                <Link className="gpi-link" href="/studio">Bring the pressure</Link>
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
