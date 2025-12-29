import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { ArrowRight, BookOpen } from 'lucide-react';

interface InsightCard {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  readTime: string;
  dimension: string;
  featured?: boolean;
  icon: React.ReactNode;
  color: string;
}

// Custom icons matching each article's visual
const GapIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <rect x="2" y="6" width="6" height="12" fill="currentColor" opacity="0.5" />
    <rect x="16" y="6" width="6" height="12" fill="currentColor" opacity="0.5" />
    <text x="12" y="14" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="bold">$</text>
  </svg>
);

const GridIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    {[0, 1, 2, 3].map((row) =>
      [0, 1, 2, 3].map((col) => (
        <rect
          key={`${row}-${col}`}
          x={3 + col * 5}
          y={3 + row * 5}
          width="4"
          height="4"
          fill="currentColor"
          opacity={row * 4 + col < 11 ? 1 : 0.3}
        />
      ))
    )}
  </svg>
);

const SpiralIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <path
      d="M12 20 C18 18, 18 14, 12 12 C6 10, 6 6, 12 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="12" cy="4" r="2" fill="currentColor" />
  </svg>
);

const FreezeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <circle cx="8" cy="12" r="4" fill="#22c55e" opacity="0.6" />
    <rect x="14" y="8" width="6" height="8" fill="currentColor" opacity="0.8" />
    <line x1="14" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="0.5" />
    <line x1="14" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="0.5" />
    <line x1="14" y1="14" x2="20" y2="14" stroke="currentColor" strokeWidth="0.5" />
  </svg>
);

const AntibodyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <circle cx="12" cy="12" r="4" fill="#22c55e" />
    <circle cx="6" cy="6" r="2" fill="currentColor" />
    <circle cx="18" cy="6" r="2" fill="currentColor" />
    <circle cx="6" cy="18" r="2" fill="currentColor" />
    <circle cx="18" cy="18" r="2" fill="currentColor" />
  </svg>
);

const HeartbeatIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <path
      d="M2 12 L6 12 L8 6 L10 18 L12 12 L14 12 L16 8 L18 16 L20 12 L22 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MergeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <circle cx="6" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="2" />
    <line x1="9" y1="8" x2="15" y2="16" stroke="currentColor" strokeWidth="2" strokeDasharray="2,2" />
  </svg>
);

const InsightsPage: NextPage = () => {
  const insights: InsightCard[] = [
    {
      slug: 'why-success-creates-rigidity',
      title: 'Why Success Creates Rigidity',
      subtitle: 'The Trap No One Sees Coming',
      description: 'Organizations don\'t fail because they stop doing what made them successful. They fail because they can\'t stop doing it.',
      readTime: '8 min read',
      dimension: 'ALL DIMENSIONS',
      featured: true,
      icon: <FreezeIcon />,
      color: 'red'
    },
    {
      slug: 'friction-is-margin',
      title: 'Friction Is Margin',
      subtitle: 'The Economics of Dysfunction',
      description: 'That delay, that complexity, that confusion? Not a bug. It\'s someone\'s business model. The gap is the product.',
      readTime: '7 min read',
      dimension: 'STRUCTURAL LOCK-IN',
      icon: <GapIcon />,
      color: 'green'
    },
    {
      slug: 'organizational-antibodies',
      title: 'Organizational Antibodies',
      subtitle: 'Why Good Ideas Get Rejected',
      description: 'Your organization has an immune system. It protects against foreign capabilities, even beneficial ones.',
      readTime: '9 min read',
      dimension: 'ERROR CORRECTION',
      icon: <AntibodyIcon />,
      color: 'purple'
    },
    {
      slug: 'the-spiral-model',
      title: 'The Spiral Model',
      subtitle: 'Why Transformation Isn\'t Linear',
      description: 'You can\'t jump from particle to field. You spiral, revisiting particle thinking at higher levels of field capability.',
      readTime: '10 min read',
      dimension: 'TRANSFORMATION',
      icon: <SpiralIcon />,
      color: 'cyan'
    },
    {
      slug: 'latent-capabilities',
      title: 'Latent Capabilities',
      subtitle: 'Assets You Have But Don\'t Use',
      description: 'Most organizations have far more capability than they deploy. The constraint isn\'t capacity. It\'s coordination infrastructure.',
      readTime: '8 min read',
      dimension: 'KNOWLEDGE LOCATION',
      icon: <GridIcon />,
      color: 'yellow'
    },
    {
      slug: 'metabolic-rate',
      title: 'Metabolic Rate',
      subtitle: 'The Speed of Organizational Change',
      description: 'Every organization has a metabolic rate that determines how fast it can process change. Mismatched rates predict integration failure.',
      readTime: '9 min read',
      dimension: 'ALL DIMENSIONS',
      icon: <HeartbeatIcon />,
      color: 'orange'
    },
    {
      slug: 'the-acquisition-trap',
      title: 'The Acquisition Trap',
      subtitle: 'Why Strategic Logic Isn\'t Enough',
      description: 'HP wrote off $8.8B. Amazon created billions. The difference wasn\'t strategy. It was metabolic math.',
      readTime: '10 min read',
      dimension: 'CASE STUDY',
      icon: <MergeIcon />,
      color: 'blue'
    }
  ];

  const featuredInsight = insights.find(i => i.featured);
  const otherInsights = insights.filter(i => !i.featured);

  return (
    <>
      <SEOHead
        title="Insights - Organizational Physics & GPI Framework | IMAGINATION G"
        description="Deep dives into organizational physics. Why success creates rigidity, friction as margin, organizational antibodies, and the spiral model of transformation."
        ogImage="/images/og-insights.svg"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="insights" />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* System Status Badge */}
                <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  GPI INSIGHTS
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                  THE PHYSICS OF<br />ORGANIZATIONS<span className="text-red-600">.</span>
                </h1>

                <p className="text-xl text-zinc-400 mb-8 max-w-xl">
                  Why organizations behave the way they do. GPI patterns, metabolic rates, and the forces that determine whether you transform or calcify.
                </p>

                {/* Book teaser */}
                <div className="inline-flex items-center gap-3 text-sm text-zinc-500 border border-zinc-800 px-4 py-2 rounded">
                  <BookOpen size={16} />
                  <span>From <span className="text-white">The Growing Pains Index</span> (2026)</span>
                </div>
              </div>

              {/* MAIN VISUAL - Flow vs Friction */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <svg viewBox="0 0 300 200" className="w-full h-auto">
                    {/* Background */}
                    <rect x="0" y="0" width="300" height="200" fill="#09090b" rx="8" />

                    {/* Dividing line */}
                    <line x1="150" y1="20" x2="150" y2="180" stroke="#27272a" strokeWidth="1" strokeDasharray="4,4" />

                    {/* FRICTION SIDE - Left */}
                    <text x="75" y="35" textAnchor="middle" fill="#ef4444" fontSize="10" fontFamily="monospace">FRICTION</text>

                    {/* Barriers */}
                    <rect x="40" y="50" width="3" height="120" fill="#ef4444" opacity="0.6" />
                    <rect x="70" y="60" width="3" height="100" fill="#ef4444" opacity="0.5" />
                    <rect x="100" y="50" width="3" height="120" fill="#ef4444" opacity="0.6" />

                    {/* Stuck particles */}
                    <circle cx="35" cy="80" r="6" fill="#ef4444" opacity="0.7">
                      <animate attributeName="cx" values="35;38;35" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="36" cy="110" r="5" fill="#ef4444" opacity="0.6">
                      <animate attributeName="cx" values="36;39;36" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="65" cy="90" r="6" fill="#ef4444" opacity="0.7">
                      <animate attributeName="cx" values="65;68;65" dur="1.8s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="66" cy="130" r="5" fill="#ef4444" opacity="0.5">
                      <animate attributeName="cx" values="66;69;66" dur="2.2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="95" cy="100" r="6" fill="#ef4444" opacity="0.6">
                      <animate attributeName="cx" values="95;98;95" dur="2.3s" repeatCount="indefinite" />
                    </circle>

                    {/* FLOW SIDE - Right */}
                    <text x="225" y="35" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace">FLOW</text>

                    {/* Flowing particles */}
                    {[0, 1, 2, 3, 4].map((i) => (
                      <circle key={i} r="6" fill="#22c55e" opacity="0.7">
                        <animate
                          attributeName="cx"
                          values="160;280;160"
                          dur={`${2 + i * 0.4}s`}
                          repeatCount="indefinite"
                          begin={`${i * 0.5}s`}
                        />
                        <animate
                          attributeName="cy"
                          values={`${60 + i * 25};${70 + i * 22};${60 + i * 25}`}
                          dur={`${2 + i * 0.4}s`}
                          repeatCount="indefinite"
                          begin={`${i * 0.5}s`}
                        />
                      </circle>
                    ))}

                    {/* Flow lines */}
                    <path d="M 160 70 Q 200 65, 240 70 Q 270 75, 280 70" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.3" />
                    <path d="M 160 100 Q 200 95, 240 100 Q 270 105, 280 100" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.3" />
                    <path d="M 160 130 Q 200 125, 240 130 Q 270 135, 280 130" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.3" />

                    {/* Labels */}
                    <text x="75" y="185" textAnchor="middle" fill="#52525b" fontSize="8" fontFamily="monospace">GPI 7-10</text>
                    <text x="225" y="185" textAnchor="middle" fill="#52525b" fontSize="8" fontFamily="monospace">GPI 1-3</text>
                  </svg>

                  <div className="text-center mt-4">
                    <span className="text-xs font-mono text-zinc-600">Energy flows or it doesn't. GPI measures where it gets stuck.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Insight */}
        {featuredInsight && (
          <section className="py-8 px-6">
            <div className="max-w-7xl mx-auto">
              <Link
                href={`/insights/${featuredInsight.slug}`}
                className="block group"
              >
                <div className="border-2 border-red-600 p-8 md:p-12 hover:bg-red-600/5 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-mono text-red-600 bg-red-600/10 px-3 py-1 rounded">FEATURED</span>
                    <span className="text-xs font-mono text-zinc-600">{featuredInsight.dimension}</span>
                    <span className="text-xs text-zinc-600">{featuredInsight.readTime}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black mb-2 group-hover:text-red-600 transition-colors">
                    {featuredInsight.title}
                    <ArrowRight className="inline ml-3" size={28} />
                  </h2>
                  <p className="text-xl text-zinc-500 mb-4">{featuredInsight.subtitle}</p>
                  <p className="text-lg text-zinc-400 max-w-3xl">{featuredInsight.description}</p>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Other Insights Grid */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherInsights.map((insight) => {
                const colorClasses: Record<string, string> = {
                  red: 'bg-red-600/10 text-red-500 group-hover:bg-red-600 group-hover:text-white',
                  green: 'bg-green-600/10 text-green-500 group-hover:bg-green-600 group-hover:text-white',
                  purple: 'bg-purple-600/10 text-purple-500 group-hover:bg-purple-600 group-hover:text-white',
                  cyan: 'bg-cyan-600/10 text-cyan-500 group-hover:bg-cyan-600 group-hover:text-white',
                  blue: 'bg-blue-600/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white',
                  orange: 'bg-orange-600/10 text-orange-500 group-hover:bg-orange-600 group-hover:text-white',
                  yellow: 'bg-yellow-600/10 text-yellow-500 group-hover:bg-yellow-600 group-hover:text-black',
                };
                const borderClasses: Record<string, string> = {
                  red: 'hover:border-red-600',
                  green: 'hover:border-green-600',
                  purple: 'hover:border-purple-600',
                  cyan: 'hover:border-cyan-600',
                  blue: 'hover:border-blue-600',
                  orange: 'hover:border-orange-600',
                  yellow: 'hover:border-yellow-600',
                };
                return (
                  <Link
                    key={insight.slug}
                    href={`/insights/${insight.slug}`}
                    className={`group border border-zinc-800 p-8 ${borderClasses[insight.color]} transition-all bg-zinc-950 relative overflow-hidden`}
                  >
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-lg ${colorClasses[insight.color]} flex items-center justify-center mb-4 transition-all`}>
                      {insight.icon}
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono text-zinc-600">{insight.dimension}</span>
                      <span className="text-xs text-zinc-700">•</span>
                      <span className="text-xs text-zinc-600">{insight.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-black mb-2 group-hover:text-white transition-colors">
                      {insight.title}
                      <ArrowRight className="inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                    </h3>
                    <p className="text-sm text-zinc-500 mb-3">{insight.subtitle}</p>
                    <p className="text-zinc-400">{insight.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">MEASURE YOUR ORGANIZATIONAL PHYSICS</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Reading about GPI is one thing. Measuring your organization is another.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/diagnostic"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                TAKE THE GPI DIAGNOSTIC
              </Link>
              <Link
                href="/answers"
                className="border-2 border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors"
              >
                EXPLORE FRICTION PATTERNS
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InsightsPage;
