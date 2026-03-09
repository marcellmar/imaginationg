import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import RelatedContent from '../../components/RelatedContent';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const MetabolicRatePage: NextPage = () => {
  useScrollReveal();
  return (
    <>
      <SEOHead
        title="Metabolic Rate - The Speed of Organizational Change | GPI Studio"
        description="Every organization has a metabolic rate that determines how fast it can process change. Mismatched rates predict integration failure."
        ogType="article"
        ogImage="/images/og/metabolic-rate.png"
        article={{
          publishedTime: "2025-01-15T00:00:00Z",
          author: "Marcus Davis"
        }}
      />

      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Navigation currentPage="insights" />

        {/* Hero Section */}
        <section className="pt-36 pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <Link href="/insights" className="fade-up inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors mb-8">
              <ArrowLeft size={16} />
              Back to Insights
            </Link>

            {/* Meta */}
            <div className="fade-up flex items-center gap-4 mb-6">
              <span className="text-xs font-mono text-stone-500 border border-stone-200 px-3 py-1">GPI FOUNDATIONS</span>
              <span className="text-xs text-stone-500">9 min read</span>
              <span className="text-xs text-stone-400">•</span>
              <span className="text-xs text-stone-500">ALL DIMENSIONS</span>
            </div>

            <h1 className="fade-up text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-[1.1] tracking-headline">
              METABOLIC<br />RATE<span className="text-red-600">.</span>
            </h1>

            <p className="fade-up text-2xl text-stone-500 mb-8">
              The Speed of Organizational Change
            </p>

            <p className="fade-up text-xl text-stone-500 max-w-2xl">
              Every organization has a metabolic rate that determines how fast it can process change. Mismatched metabolic rates predict integration failure.
            </p>

            {/* METABOLIC RATE VISUAL - Heartbeat Comparison */}
            <div className="mt-16 flex justify-center">
              <div className="flex gap-8">
                {/* Fast Metabolism - Hummingbird */}
                <div className="flex flex-col items-center">
                  <div className="w-48 h-24 bg-white border border-stone-900/50 rounded overflow-hidden relative">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                      {/* Fast heartbeat line */}
                      <path
                        d="M0,50 L15,50 L20,20 L25,80 L30,50 L45,50 L50,20 L55,80 L60,50 L75,50 L80,20 L85,80 L90,50 L105,50 L110,20 L115,80 L120,50 L135,50 L140,20 L145,80 L150,50 L165,50 L170,20 L175,80 L180,50 L200,50"
                        fill="none"
                        stroke="#1c1917"
                        strokeWidth="2"
                      >
                        <animate
                          attributeName="d"
                          values="M0,50 L15,50 L20,20 L25,80 L30,50 L45,50 L50,20 L55,80 L60,50 L75,50 L80,20 L85,80 L90,50 L105,50 L110,20 L115,80 L120,50 L135,50 L140,20 L145,80 L150,50 L165,50 L170,20 L175,80 L180,50 L200,50;
                                 M-30,50 L-15,50 L-10,20 L-5,80 L0,50 L15,50 L20,20 L25,80 L30,50 L45,50 L50,20 L55,80 L60,50 L75,50 L80,20 L85,80 L90,50 L105,50 L110,20 L115,80 L120,50 L135,50 L140,20 L145,80 L150,50 L170,50"
                          dur="0.4s"
                          repeatCount="indefinite"
                        />
                      </path>
                    </svg>
                    <div className="absolute top-2 left-2 text-xs font-mono text-stone-900">GPI 1-3</div>
                    <div className="absolute bottom-2 right-2 text-xs font-mono text-stone-900">1200 BPM</div>
                  </div>
                  <span className="text-xs font-mono text-stone-900 mt-3">FAST METABOLISM</span>
                  <span className="text-[10px] text-stone-400">Weekly cycles. Continuous adaptation.</span>
                </div>

                {/* Slow Metabolism - Elephant */}
                <div className="flex flex-col items-center">
                  <div className="w-48 h-24 bg-white border border-red-600/50 rounded overflow-hidden relative">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                      {/* Slow heartbeat line */}
                      <path
                        d="M0,50 L70,50 L80,25 L90,75 L100,50 L200,50"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="2"
                      >
                        <animate
                          attributeName="d"
                          values="M0,50 L70,50 L80,25 L90,75 L100,50 L200,50;
                                 M-100,50 L-30,50 L-20,25 L-10,75 L0,50 L100,50"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </path>
                    </svg>
                    <div className="absolute top-2 left-2 text-xs font-mono text-red-500">GPI 7-10</div>
                    <div className="absolute bottom-2 right-2 text-xs font-mono text-red-400">30 BPM</div>
                  </div>
                  <span className="text-xs font-mono text-red-500 mt-3">SLOW METABOLISM</span>
                  <span className="text-[10px] text-stone-400">Quarterly cycles. Planned changes.</span>
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="text-center mt-6">
              <span className="text-xs font-mono text-stone-400">Neither is wrong. They're different metabolisms for different contexts.</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8 px-6">
          <div className="max-w-3xl mx-auto space-y-16">

            {/* Opening */}
            <div className="space-y-4 text-stone-600">
              <p>A hummingbird's heart beats 1,200 times per minute. An elephant's beats 30 times.</p>
              <p>Neither is wrong. They're different metabolisms optimized for different contexts.</p>
              <p className="text-stone-900 text-xl font-bold pt-4">Organizations work the same way.</p>
            </div>

            {/* Quote */}
            <div className="bg-white border border-stone-200 p-8">
              <p className="text-2xl text-stone-900 italic">"Speed is a function of infrastructure. Change the infrastructure, change the speed."</p>
            </div>

            {/* What it measures */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-stone-100 p-4">
                <p className="text-stone-900 font-bold text-sm">Signal Processing</p>
                <p className="text-stone-500 text-sm">How fast does information flow? Hours? Quarters?</p>
              </div>
              <div className="bg-stone-100 p-4">
                <p className="text-stone-900 font-bold text-sm">Decision Velocity</p>
                <p className="text-stone-500 text-sm">How quickly are decisions made?</p>
              </div>
              <div className="bg-stone-100 p-4">
                <p className="text-stone-900 font-bold text-sm">Adaptation Speed</p>
                <p className="text-stone-500 text-sm">How fast can you change direction?</p>
              </div>
              <div className="bg-stone-100 p-4">
                <p className="text-stone-900 font-bold text-sm">Learning Velocity</p>
                <p className="text-stone-500 text-sm">How quickly do insights become action?</p>
              </div>
            </div>

            {/* GPI by metabolism */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono text-stone-500 mb-4">METABOLIC RATE BY GPI</h2>
              <div className="border-l-4 border-stone-900 pl-6 py-2">
                <p className="text-stone-900 font-mono text-sm">GPI 1-3: FAST METABOLISM</p>
                <p className="text-stone-500 text-sm">Weekly/daily cycles. Continuous adaptation. High energy cost.</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-6 py-2">
                <p className="text-yellow-500 font-mono text-sm">GPI 4-6: MEDIUM METABOLISM</p>
                <p className="text-stone-500 text-sm">Monthly cycles. Periodic adaptation. Balanced energy.</p>
              </div>
              <div className="border-l-4 border-red-600 pl-6 py-2">
                <p className="text-red-600 font-mono text-sm">GPI 7-10: SLOW METABOLISM</p>
                <p className="text-stone-500 text-sm">Quarterly/annual cycles. Planned change. High inertia.</p>
              </div>
            </div>

            {/* Acquisition comparison */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-stone-100 border border-stone-900/50 p-6">
                <p className="text-stone-900 font-bold text-sm mb-2">DISNEY + PIXAR</p>
                <p className="text-stone-600 text-sm mb-2">GPI gap: 2.2 points</p>
                <p className="text-stone-500 text-sm">Brain Trust spread. 19 years. $100B+ value.</p>
              </div>
              <div className="bg-red-950/20 border border-red-900/50 p-6">
                <p className="text-red-500 font-bold text-sm mb-2">HP + AUTONOMY</p>
                <p className="text-stone-600 text-sm mb-2">GPI gap: 4.7 points</p>
                <p className="text-stone-500 text-sm">Integration failed. $8.8B writedown.</p>
              </div>
            </div>

            {/* Google YouTube callout */}
            <div className="border-l-2 border-cyan-500 pl-6">
              <p className="text-stone-600"><span className="text-stone-900 font-bold">Google + YouTube:</span> GPI gap of 0.2 points. Near-identical metabolisms. $1.65B to ~$400B in 19 years.</p>
            </div>

            {/* 3-Point Rule */}
            <div className="bg-white border border-stone-200 p-8">
              <h2 className="text-xs font-mono text-stone-500 mb-6">THE 3-POINT RULE</h2>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between"><span>0-2 point gap</span><span className="text-stone-900">Standard integration</span></div>
                <div className="flex justify-between"><span>3-4 point gap</span><span className="text-yellow-400">Quarantine required</span></div>
                <div className="flex justify-between"><span>5+ point gap</span><span className="text-red-400">Maintain separate</span></div>
                <div className="flex justify-between"><span>6+ point gap</span><span className="text-red-600">Reconsider entirely</span></div>
              </div>
            </div>

            {/* Shift capacity */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono text-stone-500 mb-4">METABOLIC SHIFT CAPACITY</h2>
              <p><span className="text-stone-900 font-bold">1-2 points:</span> <span className="text-stone-500">1-2 years. Process optimization.</span></p>
              <p><span className="text-stone-900 font-bold">2-3 points:</span> <span className="text-stone-500">3-5 years. Structural change.</span></p>
              <p><span className="text-stone-900 font-bold">4+ points:</span> <span className="text-stone-500">5-10 years. Complete transformation.</span></p>
              <p className="text-stone-500 text-sm pt-4">Organizations claiming 5 points in 18 months? Lying or delusional. Crash diets don't work.</p>
            </div>

            {/* Metabolic Debt */}
            <div className="border-l-2 border-yellow-500 pl-6 space-y-4">
              <p className="text-xl text-stone-900 italic">"You can borrow speed from the future by running people harder. But you can't borrow it forever."</p>
              <p className="text-stone-500">The interest on metabolic debt is paid in errors, burnout, and organizational fragility.</p>
            </div>

            {/* Fast vs Slow */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-950/20 border border-red-900/50 p-6">
                <p className="text-red-500 font-bold text-sm mb-2">SLOW METABOLISM FITS</p>
                <p className="text-stone-600 text-sm">Regulated industries. Safety-critical ops. Long-cycle businesses. Mature markets.</p>
              </div>
              <div className="bg-stone-100 border border-stone-900/50 p-6">
                <p className="text-stone-900 font-bold text-sm mb-2">FAST METABOLISM FITS</p>
                <p className="text-stone-600 text-sm">Technology. Consumer markets. Early-stage ventures. Disrupted industries.</p>
              </div>
            </div>

            {/* Closing */}
            <div className="bg-red-50 border border-red-200 p-8 space-y-4">
              <p className="text-stone-900 font-bold text-2xl">Metabolic rate is infrastructure, not effort.</p>
              <p className="text-stone-600">You can't speed up a slow organization by working harder. You have to change the systems that determine speed.</p>
              <p className="text-red-500 font-bold text-xl pt-4">Change the infrastructure, change the metabolism.</p>
            </div>

            {/* Book Teaser */}
            <div className="border border-stone-200 p-8 flex items-center gap-6">
              <BookOpen size={48} className="text-stone-400 flex-shrink-0" />
              <div>
                <p className="text-stone-500 text-sm uppercase mb-1">From the upcoming book</p>
                <p className="text-xl font-black">The Growing Pains Index</p>
                <p className="text-stone-500">Chapter 7: The Speed Gap</p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-stone-200">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">MEASURE YOUR METABOLIC RATE</h3>
            <p className="text-xl text-stone-500 mb-8 max-w-2xl mx-auto">
              19 questions reveal your GPI across all dimensions. See your organizational metabolism.
            </p>
            <Link
              href="/diagnostic"
              className="inline-block bg-red-600 text-white px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
            >
              TAKE THE GPI DIAGNOSTIC
            </Link>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-24 px-6 bg-white border-t border-stone-200">
          <div className="max-w-7xl mx-auto">
            <RelatedContent
              title="Continue Reading"
              items={[
                {
                  href: "/insights/the-spiral-model",
                  title: "The Spiral Model",
                  description: "How organizations evolve through metabolic phases. The pattern of transformation.",
                  color: "red"
                },
                {
                  href: "/insights/organizational-antibodies",
                  title: "Organizational Antibodies",
                  description: "Why metabolic mismatches trigger rejection. The immune system at work.",
                  color: "yellow"
                },
                {
                  href: "/answers/glossary/the-decision-stall",
                  title: "The Decision Stall",
                  description: "When decision velocity drops to zero. The symptom of metabolic failure.",
                  color: "green"
                }
              ]}
            />
          </div>
        </section>

        <footer className="py-16 px-6 border-t border-stone-200">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
              <div>
                <div className="font-black text-sm mb-4">GPI<span className="text-red-600">.</span>STUDIO</div>
                <p className="text-sm text-stone-400 leading-relaxed">Organizational physics.<br />We measure where energy gets stuck.</p>
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
              <div>&copy; {new Date().getFullYear()} Imagination G LLC</div>
              <div className="font-mono">gpi.studio</div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MetabolicRatePage;
