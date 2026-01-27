import type { NextPage, GetServerSideProps } from 'next';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
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
  if (!score) return 'text-zinc-500';
  if (score <= 3) return 'text-green-500';
  if (score <= 6.9) return 'text-yellow-500';
  return 'text-red-500';
};

const stageOrder = ['Field', 'Transitioning', 'Particle'];

const stageConfig: Record<string, { label: string; description: string; color: string; bgColor: string }> = {
  'Field': {
    label: 'FIELD STATE',
    description: 'Fluid, adaptive, fast-moving',
    color: 'text-green-500',
    bgColor: 'border-green-500/30',
  },
  'Transitioning': {
    label: 'TRANSITIONING',
    description: 'Mixed signals, could go either way',
    color: 'text-yellow-500',
    bgColor: 'border-yellow-500/30',
  },
  'Particle': {
    label: 'PARTICLE STATE',
    description: 'Rigid, calcified, slow to change',
    color: 'text-red-500',
    bgColor: 'border-red-500/30',
  },
};

const Companies: NextPage<CompaniesPageProps> = ({ companies, totalCount, sectors }) => {
  // Search and filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState<string>('');
  const [selectedStages, setSelectedStages] = useState<string[]>(['Field', 'Transitioning', 'Particle']);
  const [gpiMin, setGpiMin] = useState<string>('');
  const [gpiMax, setGpiMax] = useState<string>('');
  const [snapshotOnly, setSnapshotOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Filter companies
  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      // Text search (name or ticker)
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const nameMatch = company.name.toLowerCase().includes(query);
        const tickerMatch = company.ticker?.toLowerCase().includes(query);
        if (!nameMatch && !tickerMatch) return false;
      }

      // Sector filter
      if (selectedSector && company.sector !== selectedSector) return false;

      // Stage filter
      const stage = company.stage || 'Particle';
      if (!selectedStages.includes(stage)) return false;

      // GPI range filter
      if (gpiMin && company.gpiScore !== null && company.gpiScore < parseFloat(gpiMin)) return false;
      if (gpiMax && company.gpiScore !== null && company.gpiScore > parseFloat(gpiMax)) return false;

      // Snapshot filter
      if (snapshotOnly && !hasSnapshot(company.name)) return false;

      return true;
    });
  }, [companies, searchQuery, selectedSector, selectedStages, gpiMin, gpiMax, snapshotOnly]);

  // Group filtered companies by state
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

    // Sort each state by GPI score
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
        description={`${totalCount} companies analyzed across 7 dimensions of organizational physics. See who's fluid and who's calcified.`}
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="companies" />

        {/* Header */}
        <section className="pt-28 pb-8 px-6 border-b border-zinc-900">
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 mb-4">
              <span className="w-2 h-2 bg-red-500 rounded-full" />
              GPI DATABASE
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              {totalCount} COMPANIES<span className="text-red-600">.</span>{' '}
              <span className="text-zinc-500">AND COUNTING.</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              Same 7 dimensions. Same physics. Different scores. See who can move and who's stuck.
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-4 px-6 border-b border-zinc-900 bg-zinc-950 sticky top-16 z-40">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar Row */}
            <div className="flex flex-col md:flex-row gap-3">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                <input
                  type="text"
                  placeholder="Search by name or ticker..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded px-10 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Sector Dropdown */}
              <div className="relative">
                <select
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                  className="appearance-none bg-zinc-900 border border-zinc-800 rounded px-4 py-2.5 pr-10 text-white focus:outline-none focus:border-zinc-600 transition-colors cursor-pointer min-w-[180px]"
                >
                  <option value="">All Sectors</option>
                  {sectors.map((sector) => (
                    <option key={sector} value={sector}>
                      {sector}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" size={16} />
              </div>

              {/* Filter Toggle Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-2.5 border rounded transition-colors ${
                  showFilters || hasActiveFilters
                    ? 'bg-zinc-800 border-zinc-700 text-white'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                <Filter size={16} />
                <span className="hidden sm:inline">Filters</span>
                {hasActiveFilters && (
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                )}
              </button>
            </div>

            {/* Expanded Filters */}
            {showFilters && (
              <div className="mt-4 pt-4 border-t border-zinc-800">
                <div className="flex flex-wrap gap-6">
                  {/* Stage Filter */}
                  <div>
                    <div className="text-xs text-zinc-500 mb-2 font-mono">STAGE</div>
                    <div className="flex gap-2">
                      {stageOrder.map((stage) => {
                        const config = stageConfig[stage];
                        const isSelected = selectedStages.includes(stage);
                        return (
                          <button
                            key={stage}
                            onClick={() => toggleStage(stage)}
                            className={`px-3 py-1.5 text-sm rounded border transition-colors ${
                              isSelected
                                ? `${config.color} ${config.bgColor} border-current`
                                : 'text-zinc-500 border-zinc-700 hover:border-zinc-600'
                            }`}
                          >
                            {stage}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* GPI Range */}
                  <div>
                    <div className="text-xs text-zinc-500 mb-2 font-mono">GPI RANGE</div>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        placeholder="Min"
                        value={gpiMin}
                        onChange={(e) => setGpiMin(e.target.value)}
                        min="1"
                        max="10"
                        step="0.1"
                        className="w-20 bg-zinc-900 border border-zinc-800 rounded px-3 py-1.5 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-zinc-600"
                      />
                      <span className="text-zinc-600">—</span>
                      <input
                        type="number"
                        placeholder="Max"
                        value={gpiMax}
                        onChange={(e) => setGpiMax(e.target.value)}
                        min="1"
                        max="10"
                        step="0.1"
                        className="w-20 bg-zinc-900 border border-zinc-800 rounded px-3 py-1.5 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-zinc-600"
                      />
                    </div>
                  </div>

                  {/* Snapshot Only */}
                  <div>
                    <div className="text-xs text-zinc-500 mb-2 font-mono">OPTIONS</div>
                    <button
                      onClick={() => setSnapshotOnly(!snapshotOnly)}
                      className={`px-3 py-1.5 text-sm rounded border transition-colors ${
                        snapshotOnly
                          ? 'text-cyan-500 border-cyan-500/50 bg-cyan-500/10'
                          : 'text-zinc-500 border-zinc-700 hover:border-zinc-600'
                      }`}
                    >
                      Snapshots only
                    </button>
                  </div>

                  {/* Clear Filters */}
                  {hasActiveFilters && (
                    <div className="flex items-end">
                      <button
                        onClick={clearFilters}
                        className="px-3 py-1.5 text-sm text-zinc-500 hover:text-white transition-colors"
                      >
                        Clear all
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Results Count */}
            <div className="mt-3 flex items-center justify-between text-sm">
              <div className="text-zinc-500">
                Showing <span className="text-white font-medium">{filteredCompanies.length}</span> of {totalCount} companies
              </div>
              {/* Quick Legend */}
              <div className="hidden md:flex gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-zinc-500">Field</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-yellow-500" />
                  <span className="text-zinc-500">Transitioning</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-zinc-500">Particle</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Companies by State */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            {filteredCompanies.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-zinc-500 text-lg mb-4">No companies match your filters.</div>
                <button
                  onClick={clearFilters}
                  className="text-red-500 hover:text-red-400 transition-colors"
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
                  <div key={state} className={`mb-12 p-6 border ${config.bgColor} rounded-lg`}>
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className={`text-lg font-black ${config.color}`}>
                          {config.label}
                        </h2>
                        <p className="text-sm text-zinc-500">{config.description}</p>
                      </div>
                      <div className={`text-3xl font-black ${config.color}`}>
                        {stateCompanies.length}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {stateCompanies.map((company) => {
                        const snapshotSlug = getSnapshotSlug(company.name);
                        const cardContent = (
                          <div
                            className={`border border-zinc-800 bg-black/50 p-4 transition-colors ${
                              snapshotSlug ? 'hover:border-cyan-500/50 cursor-pointer' : 'hover:border-zinc-700'
                            }`}
                          >
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <div className="font-bold text-white">{company.name}</div>
                                {company.ticker && (
                                  <div className="text-xs text-zinc-600">{company.ticker}</div>
                                )}
                              </div>
                              <div className={`text-2xl font-black ${getScoreColor(company.gpiScore)}`}>
                                {company.gpiScore?.toFixed(1) || '—'}
                              </div>
                            </div>
                            <div className="flex items-center gap-2 mt-3">
                              <span className="text-xs text-zinc-500">{company.sector}</span>
                              {company.fortune500Rank && (
                                <span className="text-xs text-zinc-600">
                                  F500 #{company.fortune500Rank}
                                </span>
                              )}
                              {hasSnapshot(company.name) && (
                                <span className="text-xs text-cyan-500 bg-cyan-500/10 px-1.5 py-0.5 rounded">
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
        <section className="py-12 px-6 border-t border-zinc-900 bg-zinc-950">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-black mb-4">WANT YOUR COMPANY ANALYZED?</h2>
            <p className="text-zinc-500 mb-6">
              Get a full GPI breakdown across all 7 dimensions.
            </p>
            <Link
              href="/diagnostic"
              className="inline-flex items-center gap-2 bg-red-600 px-6 py-3 font-bold hover:bg-red-700 transition-colors"
            >
              START WITH THE DIAGNOSTIC
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-zinc-900">
          <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-zinc-600">
            <div>GPI.STUDIO</div>
            <div>© IMAGINATION G LLC</div>
          </div>
        </footer>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<CompaniesPageProps> = async () => {
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

          // Skip deals - they have their own page
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

  // Sort sectors alphabetically
  const sectors = Array.from(sectorsSet).sort();

  return {
    props: {
      companies,
      totalCount: companies.length,
      sectors,
    },
  };
};

export default Companies;
