/**
 * Individual GPI Analysis Page
 * Dynamic route that fetches content from Notion
 */

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';

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

const seriesConfig: Record<string, { color: string; bg: string; icon: string }> = {
  'Weekly Smackdown': { color: 'text-red-500', bg: 'bg-red-950/30', icon: '⚔️' },
  'Transition Watch': { color: 'text-yellow-500', bg: 'bg-yellow-950/30', icon: '🔄' },
  'Wildcard': { color: 'text-purple-500', bg: 'bg-purple-950/30', icon: '🃏' },
  'Calcification Alert': { color: 'text-orange-500', bg: 'bg-orange-950/30', icon: '🚨' },
  'Field Notes': { color: 'text-green-500', bg: 'bg-green-950/30', icon: '📡' },
};

const getStageColor = (stage: string) => {
  switch (stage) {
    case 'Field': return 'text-green-500 border-green-500';
    case 'Transitioning': return 'text-yellow-500 border-yellow-500';
    case 'Particle': return 'text-red-500 border-red-500';
    default: return 'text-zinc-500 border-zinc-500';
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
            className="w-8 h-24 bg-zinc-900 rounded relative overflow-hidden"
            title={`${dim.label}: ${dim.value}/10`}
          >
            <div
              className={`absolute bottom-0 left-0 right-0 ${
                (dim.value || 0) <= 3 ? 'bg-green-500' :
                (dim.value || 0) <= 6 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ height: `${((dim.value || 0) / 10) * 100}%` }}
            />
          </div>
          <span className="text-[10px] text-zinc-500 mt-1">{dim.label}</span>
          <span className="text-xs font-mono font-bold">{dim.value || '—'}</span>
        </div>
      ))}
    </div>
  );
};

const RenderBlock = ({ block }: { block: ContentBlock }) => {
  const renderText = (content: ContentBlock['content']) => {
    return content.map((part, i) => {
      let element = <span key={i}>{part.text}</span>;

      if (part.bold) element = <strong key={i}>{part.text}</strong>;
      if (part.italic) element = <em key={i}>{part.text}</em>;
      if (part.code) element = <code key={i} className="bg-zinc-800 px-1 rounded">{part.text}</code>;
      if (part.href) element = <a key={i} href={part.href} className="text-red-500 hover:underline">{part.text}</a>;

      return element;
    });
  };

  switch (block.type) {
    case 'paragraph':
      return <p className="text-zinc-300 leading-relaxed mb-4">{renderText(block.content)}</p>;
    case 'heading_1':
      return <h1 className="text-3xl font-black mt-8 mb-4">{renderText(block.content)}</h1>;
    case 'heading_2':
      return <h2 className="text-2xl font-black mt-8 mb-4">{renderText(block.content)}</h2>;
    case 'heading_3':
      return <h3 className="text-xl font-bold mt-6 mb-3">{renderText(block.content)}</h3>;
    case 'bulleted_list_item':
      return <li className="text-zinc-300 ml-6 mb-2 list-disc">{renderText(block.content)}</li>;
    case 'numbered_list_item':
      return <li className="text-zinc-300 ml-6 mb-2 list-decimal">{renderText(block.content)}</li>;
    case 'quote':
      return (
        <blockquote className="border-l-4 border-red-600 pl-6 py-2 my-6 text-xl text-zinc-400 italic">
          {renderText(block.content)}
        </blockquote>
      );
    default:
      return null;
  }
};

const AnalysisPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [content, setContent] = useState<AnalysisContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchContent = async () => {
      try {
        const response = await fetch(`/api/gpi-content/${slug}`);
        if (!response.ok) {
          if (response.status === 404) {
            setError('Analysis not found');
          } else {
            setError('Failed to load analysis');
          }
          return;
        }
        const data = await response.json();
        setContent(data);
      } catch (err) {
        setError('Failed to load analysis');
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-2 border-zinc-700 border-t-red-600 rounded-full animate-spin" />
          <p className="text-zinc-500 mt-4">Loading analysis...</p>
        </div>
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="insights" />
        <div className="pt-32 text-center px-6">
          <h1 className="text-4xl font-black mb-4">404</h1>
          <p className="text-zinc-500 mb-8">{error || 'Analysis not found'}</p>
          <Link href="/insights/gpi-analyses" className="text-red-500 hover:underline">
            ← Back to GPI Analyses
          </Link>
        </div>
      </div>
    );
  }

  const config = seriesConfig[content.series] || seriesConfig['Wildcard'];

  return (
    <>
      <SEOHead
        title={`${content.headline} | GPI Analysis`}
        description={content.teaser}
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="insights" />

        {/* Hero */}
        <section className="pt-24 pb-8 px-6 border-b border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <Link href="/insights/gpi-analyses" className="text-zinc-500 text-sm hover:text-white mb-6 inline-block">
              ← Back to GPI Analyses
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className={`text-sm font-bold px-3 py-1 rounded ${config.bg} ${config.color}`}>
                {config.icon} {content.series.toUpperCase()}
              </span>
              {content.publishDate && (
                <span className="text-sm text-zinc-500">
                  {new Date(content.publishDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">
              {content.headline}
            </h1>

            <p className="text-xl text-zinc-400 leading-relaxed">
              {content.teaser}
            </p>
          </div>
        </section>

        {/* Featured Companies */}
        {content.companies.length > 0 && (
          <section className="py-8 px-6 border-b border-zinc-900 bg-zinc-950">
            <div className="max-w-4xl mx-auto">
              {content.companies.map((company) => (
                <div key={company.id} className="mb-8 last:mb-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h2 className="text-2xl font-black">{company.name}</h2>
                      <p className="text-zinc-500">{company.sector}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-4 py-2 border rounded-lg font-bold ${getStageColor(company.stage)}`}>
                        {company.stage}
                      </span>
                      <div className="text-center">
                        <div className="text-3xl font-black font-mono">{company.gpiScore?.toFixed(1)}</div>
                        <div className="text-xs text-zinc-500">GPI SCORE</div>
                      </div>
                    </div>
                  </div>

                  {/* Dimension Bars */}
                  <GPIRadar company={company} />

                  {/* Friction Points */}
                  {company.frictionPoints.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {company.frictionPoints.map((point) => (
                        <span key={point} className="text-xs bg-zinc-900 text-zinc-400 px-3 py-1 rounded">
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
            <article className="prose prose-invert max-w-none">
              {content.blocks.map((block) => (
                <RenderBlock key={block.id} block={block} />
              ))}
            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-black mb-4">CALCULATE YOUR OWN GPI</h2>
            <p className="text-zinc-400 mb-8">
              See where your organization sits on the spectrum.
            </p>
            <Link
              href="/diagnostic"
              className="inline-block bg-red-600 px-8 py-4 font-bold hover:bg-red-700 transition-colors"
            >
              START DIAGNOSTIC
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default AnalysisPage;
