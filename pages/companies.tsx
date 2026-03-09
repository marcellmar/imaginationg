import type { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight, Search, X, Filter, ChevronDown } from 'lucide-react';
import { hasSnapshot, getSnapshotSlug } from '../lib/snapshots';

interface Company {
  id: string;
  name: string;
  gpiScore: number | null;
  stage: string;
  sector: string;
  ticker: string;
  employees: number | null;
  fortune500Rank: number | null;
}

interface CompaniesPageProps {
  companies: Company[];
  totalCount: number;
  sectors: string[];
}

const getScoreColor = (score: number | null) => {
  if (!score) return 'text-stone-500';
  if (score <= 3) return 'text-stone-900';
  if (score <= 6.9) return 'text-stone-500';
  return 'text-red-600';
};

const stageOrder = ['Field', 'Transitioning', 'Particle'];

const stageConfig: Record<string, { label: string; description: string }> = {
  'Field': {
    label: 'FIELD STATE',
    description: 'Fluid, adaptive, fast-moving',
  },
  'Transitioning': {
    label: 'TRANSITIONING',
    description: 'Mixed signals, could go either way',
  },
  'Particle': {
    label: 'PARTICLE STATE',
    description: 'Rigid, calcified, slow to change',
  },
};

const Companies: NextPage<CompaniesPageProps> = ({ companies, totalCount, sectors }) => {
  useScrollReveal();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState<string>('');
  const [selectedStages, setSelectedStages] = useState<string[]>(['Field', 'Transitioning', 'Particle']);
  const [gpiMin, setGpiMin] = useState<string>('');
  const [gpiMax, setGpiMax] = useState<string>('');
  const [snapshotOnly, setSnapshotOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const nameMatch = company.name.toLowerCase().includes(query);
        const tickerMatch = company.ticker?.toLowerCase().includes(query);
        if (!nameMatch && !tickerMatch) return false;
      }
      if (selectedSector && company.sector !== selectedSector) return false;
      const stage = company.stage || 'Particle';
      if (!selectedStages.includes(stage)) return false;
      if (gpiMin && company.gpiScore !== null && company.gpiScore < parseFloat(gpiMin)) return false;
      if (gpiMax && company.gpiScore !== null && company.gpiScore > parseFloat(gpiMax)) return false;
      if (snapshotOnly && !hasSnapshot(company.name)) return false;
      return true;
    });
  }, [companies, searchQuery, selectedSector, selectedStages, gpiMin, gpiMax, snapshotOnly]);

  const byState: Record<string, Company[]> = useMemo(() => {
    const grouped: Record<string, Company[]> = {
      'Field': [],
      'Transitioning': [],
      'Particle': [],
    };

    for (const company of filteredCompanies) {
      const state = company.stage || 'Particle';
      if (grouped[state]) {
        grouped[state].push(company);
      } else {
        grouped['Particle'].push(company);
      }
    }

    for (const state of stageOrder) {
      if (state === 'Field') {
        grouped[state].sort((a, b) => (a.gpiScore || 0) - (b.gpiScore || 0));
      } else {
        grouped[state].sort((a, b) => (a.gpiScore || 10) - (b.gpiScore || 10));
      }
    }

    return grouped;
  }, [filteredCompanies]);

  const toggleStage = (stage: string) => {
    setSelectedStages((prev) =>
      prev.includes(stage) ? prev.filter((s) => s !== stage) : [...prev, stage]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedSector('');
    setSelectedStages(['Field', 'Transitioning', 'Particle']);
    setGpiMin('');
    setGpiMax('');
    setSnapshotOnly(false);
  };

  const hasActiveFilters = searchQuery || selectedSector || selectedStages.length !== 3 || gpiMin || gpiMax || snapshotOnly;

  return (
    <>
      <SEOHead
        title="Company Analyses | GPI Studio"
        description="Companies analyzed across 7 dimensions of organizational physics. See who's fluid and who's calcified."
      />

      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Navigation />

        {/* Header */}
        <section className="pt-36 pb-12 px-6 border-b border-stone-200">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-400 mb-8">
              <span className="w-2 h-2 bg-red-500 rounded-full" />
              GPI DATABASE
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-headline">
              COMPANY DATABASE<span className="text-red-600">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-500 max-w-2xl mx-auto leading-relaxed">
              Same 7 dimensions. Same physics. Different scores. See who can move and who's stuck.
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-4 px-6 border-b border-stone-200 bg-white sticky top-16 z-40">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                <input
                  type="text"
                  placeholder="Search by name or ticker..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 px-10 py-2.5 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-400 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-900"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              <div className="relative">
                <select
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                  className="appearance-none bg-stone-50 border border-stone-200 px-4 py-2.5 pr-10 text-stone-900 focus:outline-none focus:border-stone-400 transition-colors cursor-pointer min-w-[180px]"
                >
                  <option value="">All Sectors</option>
                  {sectors.map((sector) => (
                    <option key={sector} value={sector}>
                      {sector}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" size={16} />
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-2.5 border transition-colors ${
                  showFilters || hasActiveFilters
                    ? 'bg-stone-100 border-stone-300 text-stone-900'
                    : 'bg-stone-50 border-stone-200 text-stone-500 hover:text-stone-900 hover:border-stone-300'
                }`}
              >
                <Filter size={16} />
                <span className="hidden sm:inline">Filters</span>
                {hasActiveFilters && (
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                )}
              </button>
            </div>

            {showFilters && (
              <div className="mt-4 pt-4 border-t border-stone-200">
                <div className="flex flex-wrap gap-6">
                  <div>
                    <div className="text-xs text-stone-400 mb-2 font-mono">STAGE</div>
                    <div className="flex gap-2">
                      {stageOrder.map((stage) => {
                        const isSelected = selectedStages.includes(stage);
                        return (
                          <button
                            key={stage}
                            onClick={() => toggleStage(stage)}
                            className={`px-3 py-1.5 text-sm border transition-colors ${
                              isSelected
                                ? 'text-stone-900 border-stone-900'
                                : 'text-stone-400 border-stone-300 hover:border-stone-400'
                            }`}
                          >
                            {stage}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-stone-400 mb-2 font-mono">GPI RANGE</div>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        placeholder="Min"
                        value={gpiMin}
                        onChange={(e) => setGpiMin(e.target.value)}
                        min="1"
                        max="10"
                        step="0.1"
                        className="w-20 bg-stone-50 border border-stone-200 px-3 py-1.5 text-stone-900 text-sm placeholder-stone-400 focus:outline-none focus:border-stone-400"
                      />
                      <span className="text-stone-300">to</span>
                      <input
                        type="number"
                        placeholder="Max"
                        value={gpiMax}
                        onChange={(e) => setGpiMax(e.target.value)}
                        min="1"
                        max="10"
                        step="0.1"
                        className="w-20 bg-stone-50 border border-stone-200 px-3 py-1.5 text-stone-900 text-sm placeholder-stone-400 focus:outline-none focus:border-stone-400"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-stone-400 mb-2 font-mono">OPTIONS</div>
                    <button
                      onClick={() => setSnapshotOnly(!snapshotOnly)}
                      className={`px-3 py-1.5 text-sm border transition-colors ${
                        snapshotOnly
                          ? 'text-stone-900 border-stone-900'
                          : 'text-stone-400 border-stone-300 hover:border-stone-400'
                      }`}
                    >
                      Snapshots only
                    </button>
                  </div>

                  {hasActiveFilters && (
                    <div className="flex items-end">
                      <button
                        onClick={clearFilters}
                        className="px-3 py-1.5 text-sm text-stone-400 hover:text-stone-900 transition-colors"
                      >
                        Clear all
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="mt-3 flex items-center justify-between text-sm">
              <div className="text-stone-500">
                {hasActiveFilters ? `${filteredCompanies.length} results` : ''}
              </div>
              <div className="hidden md:flex gap-4 text-xs">
                <span className="text-stone-900">Field</span>
                <span className="text-stone-500">Transitioning</span>
                <span className="text-red-600">Particle</span>
              </div>
            </div>
          </div>
        </section>

        {/* Companies by State */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            {filteredCompanies.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-stone-500 text-lg mb-4">No companies match your filters.</div>
                <button
                  onClick={clearFilters}
                  className="text-stone-900 hover:text-red-600 transition-colors font-medium"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              stageOrder.map((state) => {
                const config = stageConfig[state];
                const stateCompanies = byState[state];
                if (stateCompanies.length === 0) return null;

                return (
                  <div key={state} className="mb-12 fade-up">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-sm font-black tracking-widest text-stone-900">
                          {config.label}
                        </h2>
                        <p className="text-sm text-stone-400">{config.description}</p>
                      </div>
                      <div className="text-3xl font-black text-stone-300">
                        {stateCompanies.length}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {stateCompanies.map((company) => {
                        const snapshotSlug = getSnapshotSlug(company.name);
                        const cardContent = (
                          <div
                            className={`border border-stone-200 bg-white p-4 transition-colors ${
                              snapshotSlug ? 'hover:border-stone-400 cursor-pointer' : 'hover:border-stone-300'
                            }`}
                          >
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <div className="font-bold text-stone-900">{company.name}</div>
                                {company.ticker && (
                                  <div className="text-xs text-stone-400">{company.ticker}</div>
                                )}
                              </div>
                              <div className={`text-2xl font-black ${getScoreColor(company.gpiScore)}`}>
                                {company.gpiScore?.toFixed(1) || '—'}
                              </div>
                            </div>
                            <div className="flex items-center gap-2 mt-3">
                              <span className="text-xs text-stone-500">{company.sector}</span>
                              {company.fortune500Rank && (
                                <span className="text-xs text-stone-400">
                                  F500 #{company.fortune500Rank}
                                </span>
                              )}
                              {hasSnapshot(company.name) && (
                                <span className="text-xs text-stone-500 bg-stone-100 px-1.5 py-0.5">
                                  SNAPSHOT
                                </span>
                              )}
                            </div>
                          </div>
                        );

                        return snapshotSlug ? (
                          <Link key={company.id} href={`/companies/${snapshotSlug}`}>
                            {cardContent}
                          </Link>
                        ) : (
                          <div key={company.id}>{cardContent}</div>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 border-t border-stone-200 bg-white">
          <div className="max-w-4xl mx-auto text-center fade-up">
            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-headline">
              WANT YOUR COMPANY ANALYZED<span className="text-red-600">?</span>
            </h2>
            <p className="text-stone-500 mb-8">
              Get a full GPI breakdown across all 7 dimensions.
            </p>
            <Link
              href="/diagnostic"
              className="inline-flex items-center gap-2 bg-stone-900 px-8 py-4 text-sm font-semibold hover:bg-stone-800 transition-colors group text-white"
            >
              Start with the Diagnostic
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

export const getStaticProps: GetStaticProps<CompaniesPageProps> = async () => {
  const NOTION_API_KEY = process.env.NOTION_API_KEY;
  const GPI_ANALYSES_DB = '7d636c92-c316-4bfc-9bc7-7899e575e19e';

  const companies: Company[] = [];
  const sectorsSet = new Set<string>();

  if (!NOTION_API_KEY) {
    return { props: { companies, totalCount: 0, sectors: [] } };
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

          const sector = props.Sector?.select?.name || 'Other';
          sectorsSet.add(sector);

          companies.push({
            id: page.id,
            name,
            gpiScore: props['GPI Score']?.number || null,
            stage: props['Transformation Stage']?.select?.name || 'Unknown',
            sector,
            ticker: props.Ticker?.rich_text?.[0]?.plain_text || '',
            employees: props['Employee Count']?.number || null,
            fortune500Rank: props['Fortune 500 Rank']?.number || null,
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

  const sectors = Array.from(sectorsSet).sort();

  return {
    props: {
      companies,
      totalCount: companies.length,
      sectors,
    },
    revalidate: 60,
  };
};

export default Companies;
