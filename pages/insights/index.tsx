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
}

const InsightsPage: NextPage = () => {
  const insights: InsightCard[] = [
    {
      slug: 'why-success-creates-rigidity',
      title: 'Why Success Creates Rigidity',
      subtitle: 'The Trap No One Sees Coming',
      description: 'Organizations don\'t fail because they stop doing what made them successful. They fail because they can\'t stop doing it.',
      readTime: '8 min read',
      dimension: 'ALL DIMENSIONS',
      featured: true
    },
    {
      slug: 'friction-is-margin',
      title: 'Friction Is Margin',
      subtitle: 'The Economics of Dysfunction',
      description: 'That delay, that complexity, that confusion? Not a bug. It\'s someone\'s business model. The gap is the product.',
      readTime: '7 min read',
      dimension: 'STRUCTURAL LOCK-IN'
    },
    {
      slug: 'organizational-antibodies',
      title: 'Organizational Antibodies',
      subtitle: 'Why Good Ideas Get Rejected',
      description: 'Your organization has an immune system. It protects against foreign capabilities, even beneficial ones.',
      readTime: '9 min read',
      dimension: 'ERROR CORRECTION'
    },
    {
      slug: 'the-spiral-model',
      title: 'The Spiral Model',
      subtitle: 'Why Transformation Isn\'t Linear',
      description: 'You can\'t jump from particle to field. You spiral, revisiting particle thinking at higher levels of field capability.',
      readTime: '10 min read',
      dimension: 'TRANSFORMATION'
    },
    {
      slug: 'latent-capabilities',
      title: 'Latent Capabilities',
      subtitle: 'Assets You Have But Don\'t Use',
      description: 'Most organizations have far more capability than they deploy. The constraint isn\'t capacity. It\'s coordination infrastructure.',
      readTime: '8 min read',
      dimension: 'KNOWLEDGE LOCATION'
    },
    {
      slug: 'metabolic-rate',
      title: 'Metabolic Rate',
      subtitle: 'The Speed of Organizational Change',
      description: 'Every organization has a metabolic rate that determines how fast it can process change. Mismatched rates predict integration failure.',
      readTime: '9 min read',
      dimension: 'ALL DIMENSIONS'
    },
    {
      slug: 'the-acquisition-trap',
      title: 'The Acquisition Trap',
      subtitle: 'Why Strategic Logic Isn\'t Enough',
      description: 'HP wrote off $8.8B. Amazon created billions. The difference wasn\'t strategy. It was metabolic math.',
      readTime: '10 min read',
      dimension: 'CASE STUDY'
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
            <div className="max-w-4xl">
              {/* System Status Badge */}
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                GPI INSIGHTS: ORGANIZATIONAL PHYSICS
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                THE PHYSICS OF<br />ORGANIZATIONS<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Deep explorations of why organizations behave the way they do. GPI patterns, metabolic rates, and the forces that determine whether you transform or calcify.
              </p>

              {/* Book teaser */}
              <div className="inline-flex items-center gap-3 text-sm text-zinc-500 border border-zinc-800 px-4 py-2 rounded">
                <BookOpen size={16} />
                <span>Excerpts from <span className="text-white">The Growing Pains Index</span> (Coming 2026)</span>
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
              {otherInsights.map((insight) => (
                <Link
                  key={insight.slug}
                  href={`/insights/${insight.slug}`}
                  className="group border border-zinc-800 p-8 hover:border-red-600 transition-all bg-zinc-950"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-zinc-600">{insight.dimension}</span>
                    <span className="text-xs text-zinc-700">•</span>
                    <span className="text-xs text-zinc-600">{insight.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-2 group-hover:text-red-600 transition-colors">
                    {insight.title}
                    <ArrowRight className="inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                  </h3>
                  <p className="text-sm text-zinc-500 mb-3">{insight.subtitle}</p>
                  <p className="text-zinc-400">{insight.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">MEASURE YOUR ORGANIZATIONAL PHYSICS</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Reading about GPI is one thing. Measuring your organization is another. 19 binary questions reveal your particle-field position.
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
