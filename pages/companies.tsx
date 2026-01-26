import type { NextPage, GetServerSideProps } from 'next';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

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
}

const getScoreColor = (score: number | null) => {
  if (!score) return 'text-zinc-500';
  if (score <= 3) return 'text-green-500';
  if (score <= 6.9) return 'text-yellow-500';
  return 'text-red-500';
};

const getStageColor = (stage: string) => {
  if (stage === 'Field') return 'text-green-500 bg-green-500/10';
  if (stage === 'Transitioning') return 'text-yellow-500 bg-yellow-500/10';
  if (stage === 'Particle') return 'text-red-500 bg-red-500/10';
  return 'text-zinc-500 bg-zinc-500/10';
};

const Companies: NextPage<CompaniesPageProps> = ({ companies, totalCount }) => {
  // Group by sector
  const bySector: Record<string, Company[]> = {};
  for (const company of companies) {
    const sector = company.sector || 'Other';
    if (!bySector[sector]) bySector[sector] = [];
    bySector[sector].push(company);
  }

  // Sort sectors by company count
  const sortedSectors = Object.keys(bySector).sort(
    (a, b) => bySector[b].length - bySector[a].length
  );

  return (
    <>
      <SEOHead
        title="Company Analyses | GPI Studio"
        description={`${totalCount} companies analyzed across 7 dimensions of organizational physics. See who's fluid and who's calcified.`}
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="companies" />

        {/* Header */}
        <section className="pt-28 pb-12 px-6 border-b border-zinc-900">
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 mb-4">
              <span className="w-2 h-2 bg-red-500 rounded-full" />
              GPI DATABASE
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              {totalCount} COMPANIES ANALYZED<span className="text-red-600">.</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              Same 7 dimensions. Same physics. Different scores. See who can move and who's stuck.
            </p>
          </div>
        </section>

        {/* Legend */}
        <section className="py-6 px-6 border-b border-zinc-900 bg-zinc-950">
          <div className="max-w-6xl mx-auto flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-zinc-400">Field (1.0-3.0)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="text-zinc-400">Transitioning (3.1-6.9)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-zinc-400">Particle (7.0-10.0)</span>
            </div>
          </div>
        </section>

        {/* Companies by Sector */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            {sortedSectors.map((sector) => (
              <div key={sector} className="mb-12">
                <h2 className="text-xs font-mono text-zinc-600 mb-4 uppercase tracking-wider">
                  {sector} ({bySector[sector].length})
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {bySector[sector]
                    .sort((a, b) => (a.gpiScore || 10) - (b.gpiScore || 10))
                    .map((company) => (
                      <div
                        key={company.id}
                        className="border border-zinc-800 p-4 hover:border-zinc-700 transition-colors"
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
                          <span className={`text-xs font-mono px-2 py-0.5 ${getStageColor(company.stage)}`}>
                            {company.stage?.toUpperCase() || 'UNKNOWN'}
                          </span>
                          {company.fortune500Rank && (
                            <span className="text-xs text-zinc-600">
                              F500 #{company.fortune500Rank}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
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

  if (!NOTION_API_KEY) {
    return { props: { companies, totalCount: 0 } };
  }

  try {
    let hasMore = true;
    let startCursor: string | undefined = undefined;

    while (hasMore) {
      const response = await fetch(
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
          companies.push({
            id: page.id,
            name: props.Name?.title?.[0]?.plain_text || 'Unknown',
            gpiScore: props['GPI Score']?.number || null,
            stage: props['Transformation Stage']?.select?.name || 'Unknown',
            sector: props.Sector?.select?.name || 'Other',
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

  return {
    props: {
      companies,
      totalCount: companies.length,
    },
  };
};

export default Companies;
