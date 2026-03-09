import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { ArrowRight } from 'lucide-react';

interface InsightCard {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  icon: React.ReactNode;
  color: string;
  date?: string;
  live?: boolean;
}

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

const InvestmentIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
    <line x1="12" y1="12" x2="6" y2="20" stroke="currentColor" strokeWidth="2" />
    <line x1="12" y1="12" x2="12" y2="20" stroke="currentColor" strokeWidth="2" />
    <line x1="12" y1="12" x2="18" y2="20" stroke="currentColor" strokeWidth="2" />
    <circle cx="6" cy="20" r="2" fill="#eab308" />
    <circle cx="12" cy="20" r="2" fill="#3b82f6" />
    <circle cx="18" cy="20" r="2" fill="#a855f7" />
  </svg>
);

const NetflixIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    <circle cx="12" cy="6" r="2" fill="currentColor" opacity="0.9" />
    <circle cx="12" cy="13" r="2" fill="currentColor" opacity="0.7" />
    <circle cx="12" cy="18" r="2" fill="#eab308" opacity="0.9" />
    <line x1="8" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <line x1="8" y1="18" x2="16" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.5" />
  </svg>
);

const InsightsPage: NextPage = () => {
  const insights: InsightCard[] = [
    {
      slug: 'netflix-let-paramount-win',
      title: 'Netflix Let Paramount Win',
      subtitle: 'Feb 26, 2026',
      description: 'Paramount paid $110.9B for Warner Bros. Discovery. Netflix walked with $2.8B and a 13% stock jump. The GPI gap predicted this in December.',
      tag: 'LIVE ANALYSIS',
      icon: <NetflixIcon />,
      color: 'red',
      live: true,
    },
    {
      slug: 'invested-in-the-waste',
      title: "You're Invested in the Waste",
      subtitle: 'The System Made You That Way',
      description: "The gap between how things should work and how they actually work isn't dysfunction. It's a product. Someone is selling it.",
      tag: 'STRUCTURAL LOCK-IN',
      icon: <InvestmentIcon />,
      color: 'red',
    },
    {
      slug: 'the-acquisition-trap',
      title: 'The Acquisition Trap',
      subtitle: 'Strategic Logic Is Never Enough',
      description: 'HP wrote off $8.8B. Amazon created billions. The difference was metabolic math, not strategy.',
      tag: 'CASE STUDY',
      icon: <MergeIcon />,
      color: 'blue',
    },
    {
      slug: 'why-success-creates-rigidity',
      title: 'Success Creates Rigidity',
      subtitle: 'The Trap No One Sees Coming',
      description: "Organizations don't fail because they stop doing what made them successful. They fail because they can't stop doing it.",
      tag: 'ALL DIMENSIONS',
      icon: <FreezeIcon />,
      color: 'red',
    },
    {
      slug: 'friction-is-margin',
      title: 'Friction Is Margin',
      subtitle: 'The Economics of Dysfunction',
      description: "That delay, that complexity, that confusion? Not a bug. It's someone's business model.",
      tag: 'STRUCTURAL LOCK-IN',
      icon: <GapIcon />,
      color: 'green',
    },
    {
      slug: 'organizational-antibodies',
      title: 'Organizational Antibodies',
      subtitle: 'Good Ideas Get Rejected',
      description: 'Your organization has an immune system. It protects against foreign capabilities, even beneficial ones.',
      tag: 'ERROR CORRECTION',
      icon: <AntibodyIcon />,
      color: 'purple',
    },
    {
      slug: 'metabolic-rate',
      title: 'Metabolic Rate',
      subtitle: 'The Speed of Organizational Change',
      description: 'Every organization has a metabolic rate that determines how fast it can process change. Mismatched rates predict integration failure.',
      tag: 'ALL DIMENSIONS',
      icon: <HeartbeatIcon />,
      color: 'orange',
    },
    {
      slug: 'the-spiral-model',
      title: 'The Spiral Model',
      subtitle: 'Transformation Moves in Spirals',
      description: "You can't jump from particle to field. You spiral, revisiting particle thinking at higher levels of field capability.",
      tag: 'TRANSFORMATION',
      icon: <SpiralIcon />,
      color: 'cyan',
    },
    {
      slug: 'latent-capabilities',
      title: 'Latent Capabilities',
      subtitle: 'Assets You Have But Never Use',
      description: "Most organizations have far more capability than they deploy. The constraint isn't capacity. It's coordination infrastructure.",
      tag: 'KNOWLEDGE LOCATION',
      icon: <GridIcon />,
      color: 'yellow',
    },
  ];

  const featured = insights[0];
  const rest = insights.slice(1);

  return (
    <>
      <SEOHead
        title="Insights | IMAGINATION G"
        description="Live analyses, case studies, and organizational physics. GPI patterns, metabolic rates, and the forces that determine whether you transform or calcify."
        ogImage="/images/og-insights.svg"
      />

      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Navigation currentPage="insights" />

        {/* Hero */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                  THE PHYSICS OF<br />ORGANIZATIONS<span className="text-red-600">.</span>
                </h1>
                <p className="text-xl text-stone-500 max-w-xl">
                  Live analyses, case studies, and the patterns that determine whether an org transforms or calcifies.
                </p>
              </div>

              {/* Flow vs Friction visual */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <svg viewBox="0 0 300 200" className="w-full h-auto">
                    <rect x="0" y="0" width="300" height="200" fill="#fafaf9" rx="8" />
                    <line x1="150" y1="20" x2="150" y2="180" stroke="#27272a" strokeWidth="1" strokeDasharray="4,4" />
                    <text x="75" y="35" textAnchor="middle" fill="#ef4444" fontSize="10" fontFamily="monospace">FRICTION</text>
                    <rect x="40" y="50" width="3" height="120" fill="#ef4444" opacity="0.6" />
                    <rect x="70" y="60" width="3" height="100" fill="#ef4444" opacity="0.5" />
                    <rect x="100" y="50" width="3" height="120" fill="#ef4444" opacity="0.6" />
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
                    <text x="225" y="35" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace">FLOW</text>
                    {[0, 1, 2, 3, 4].map((i) => (
                      <circle key={i} r="6" fill="#22c55e" opacity="0.7">
                        <animate attributeName="cx" values="160;280;160" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" begin={`${i * 0.5}s`} />
                        <animate attributeName="cy" values={`${60 + i * 25};${70 + i * 22};${60 + i * 25}`} dur={`${2 + i * 0.4}s`} repeatCount="indefinite" begin={`${i * 0.5}s`} />
                      </circle>
                    ))}
                    <path d="M 160 70 Q 200 65, 240 70 Q 270 75, 280 70" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.3" />
                    <path d="M 160 100 Q 200 95, 240 100 Q 270 105, 280 100" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.3" />
                    <path d="M 160 130 Q 200 125, 240 130 Q 270 135, 280 130" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.3" />
                    <text x="75" y="185" textAnchor="middle" fill="#a8a29e" fontSize="8" fontFamily="monospace">GPI 7-10</text>
                    <text x="225" y="185" textAnchor="middle" fill="#a8a29e" fontSize="8" fontFamily="monospace">GPI 1-3</text>
                  </svg>
                  <div className="text-center mt-4">
                    <span className="text-xs font-mono text-stone-400">Energy flows or it doesn't. GPI measures where it gets stuck.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured + Content Series side by side */}
        <section className="py-8 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4">

            {/* Live Analysis */}
            <Link href={`/insights/${featured.slug}`} className="block group">
              <div className="border-2 border-red-600 p-8 hover:bg-red-50 transition-all h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center gap-1.5 text-xs font-mono text-red-500">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                    LIVE ANALYSIS
                  </span>
                  <span className="text-xs text-stone-400">Feb 26, 2026</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black mb-3 group-hover:text-red-500 transition-colors">
                  {featured.title}
                  <ArrowRight className="inline ml-2" size={22} />
                </h2>
                <p className="text-stone-500 text-sm">{featured.description}</p>
              </div>
            </Link>

            {/* GPI Content Series */}
            <Link href="/insights/gpi-analyses" className="block group">
              <div className="border border-stone-200 bg-white p-8 hover:border-stone-400 transition-all h-full">
                <div className="text-xs font-mono text-stone-500 mb-4">GPI CONTENT SERIES</div>
                <h2 className="text-2xl md:text-3xl font-black mb-3 group-hover:text-red-500 transition-colors">
                  SMACKDOWNS. AUTOPSIES. VITAL SIGNS.
                  <ArrowRight className="inline ml-2" size={22} />
                </h2>
                <p className="text-stone-500 text-sm mb-6">Real companies. Real scores. Head-to-head comparisons, forensic breakdowns, and metabolic monitoring.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs px-3 py-1.5 bg-red-50 text-red-600 border border-red-200">⚔️ SMACKDOWN</span>
                  <span className="text-xs px-3 py-1.5 bg-white text-stone-500 border border-stone-200">🪦 AUTOPSY</span>
                  <span className="text-xs px-3 py-1.5 bg-blue-50 text-blue-600 border border-blue-200">🩺 VITAL SIGNS</span>
                  <span className="text-xs px-3 py-1.5 bg-yellow-50 text-yellow-600 border border-yellow-200">🔄 TRANSITION</span>
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* Grid */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((insight) => {
                const colorClasses: Record<string, string> = {
                  red: 'bg-red-50 text-red-500 group-hover:bg-red-600 group-hover:text-stone-900',
                  green: 'bg-green-50 text-green-500 group-hover:bg-green-600 group-hover:text-stone-900',
                  purple: 'bg-purple-50 text-purple-500 group-hover:bg-purple-600 group-hover:text-stone-900',
                  cyan: 'bg-cyan-50 text-cyan-500 group-hover:bg-cyan-600 group-hover:text-stone-900',
                  blue: 'bg-blue-50 text-blue-500 group-hover:bg-blue-600 group-hover:text-stone-900',
                  orange: 'bg-orange-50 text-orange-500 group-hover:bg-orange-600 group-hover:text-stone-900',
                  yellow: 'bg-yellow-50 text-yellow-500 group-hover:bg-yellow-600 group-hover:text-black',
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
                    className={`group border border-stone-200 p-8 ${borderClasses[insight.color]} transition-all bg-white relative overflow-hidden`}
                  >
                    <div className={`w-12 h-12 rounded-lg ${colorClasses[insight.color]} flex items-center justify-center mb-4 transition-all`}>
                      {insight.icon}
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono text-stone-400">{insight.tag}</span>
                    </div>
                    <h3 className="text-2xl font-black mb-2 group-hover:text-stone-900 transition-colors">
                      {insight.title}
                      <ArrowRight className="inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                    </h3>
                    <p className="text-sm text-stone-500 mb-3">{insight.subtitle}</p>
                    <p className="text-stone-500 text-sm">{insight.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 border-t border-stone-200">
          <div className="max-w-7xl mx-auto">
            <p className="text-stone-500 mb-2 text-sm font-mono">32 QUESTIONS. NOT A GRADE. A READ.</p>
            <h3 className="text-3xl font-black mb-6">KNOW YOUR SCORE<span className="text-red-600">.</span></h3>
            <Link
              href="/diagnostic"
              className="inline-flex items-center gap-2 bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors group text-white"
            >
              TAKE THE GPI DIAGNOSTIC
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default InsightsPage;
