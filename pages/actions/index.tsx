import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { ArrowRight } from 'lucide-react';

const ActionsPage: NextPage = () => {
  const actions = [
    { name: 'DECISION SPEED', dimension: 'Decision Latency', url: '/actions/decision-speed' },
    { name: 'ERROR LOOPS', dimension: 'Error Correction', url: '/actions/error-loops' },
    { name: 'KNOWLEDGE FLOW', dimension: 'Knowledge Location', url: '/actions/knowledge-flow' },
    { name: 'UNLOCK STRUCTURE', dimension: 'Structural Lock-In', url: '/actions/unlock-structure' },
    { name: 'TALENT MOBILITY', dimension: 'Talent Flow', url: '/actions/talent-mobility' },
    { name: 'CAPITAL EFFICIENCY', dimension: 'Capital Intensity', url: '/actions/capital-efficiency' },
    { name: 'VELOCITY BOOST', dimension: 'Knowledge Velocity', url: '/actions/velocity-boost' }
  ];

  return (
    <>
      <SEOHead
        title="GPI Action Guides | IMAGINATION G"
        description="Free action guides for each GPI dimension. DIY playbooks for organizational friction."
        ogImage="/images/og-services.svg"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="actions" />

        <section className="pt-24 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              ACTION GUIDES<span className="text-red-600">.</span>
            </h1>

            <p className="text-xl text-zinc-400 mb-12">
              One guide per GPI dimension. Find your highest score and start there.
            </p>

            {/* Actions List */}
            <div className="space-y-3">
              {actions.map((action, index) => (
                <Link
                  key={index}
                  href={action.url}
                  className="group flex items-center justify-between border border-zinc-800 p-5 hover:border-zinc-600 transition-all"
                >
                  <div>
                    <h2 className="text-lg font-black group-hover:text-red-500 transition-colors">
                      {action.name}
                    </h2>
                    <span className="text-sm text-zinc-500">{action.dimension}</span>
                  </div>
                  <ArrowRight size={20} className="text-zinc-600 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 pt-8 border-t border-zinc-900 text-center">
              <p className="text-zinc-500 mb-6">Don't know your scores?</p>
              <Link
                href="/diagnostic"
                className="inline-flex items-center gap-2 text-white font-black hover:text-red-500 transition-colors group"
              >
                TAKE THE DIAGNOSTIC
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ActionsPage;
