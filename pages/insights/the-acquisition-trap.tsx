import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import RelatedContent from '../../components/RelatedContent';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const TheAcquisitionTrapPage: NextPage = () => {
  useScrollReveal();

  return (
    <>
      <SEOHead
        title="The Acquisition Trap - Why Strategic Logic Isn't Enough | GPI Studio"
        description="HP paid $11B for Autonomy and wrote off $8.8B. Amazon paid $13.7B for Whole Foods and created billions in value. The difference wasn't strategy. It was metabolic math."
        ogType="article"
        ogImage="/images/og-insights.svg"
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
              <span className="text-xs font-mono text-stone-500 border border-stone-200 px-3 py-1">CASE STUDY</span>
              <span className="text-xs text-stone-500">10 min read</span>
              <span className="text-xs text-stone-400">•</span>
              <span className="text-xs text-stone-500">ALL DIMENSIONS</span>
            </div>

            <h1 className="fade-up text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-[1.1] tracking-headline">
              THE ACQUISITION<br />TRAP<span className="text-red-600">.</span>
            </h1>

            <p className="fade-up text-2xl text-stone-500 mb-8">
              Why Strategic Logic Isn't Enough
            </p>

            <p className="fade-up text-xl text-stone-500 max-w-2xl">
              HP paid $11B for Autonomy and wrote off $8.8B. Amazon paid $13.7B for Whole Foods and created billions in value. The difference wasn't strategy. It was metabolic math.
            </p>

            {/* ACQUISITION VISUAL - GPI Gap Comparison */}
            <div className="mt-16 flex justify-center">
              <div className="flex flex-col md:flex-row gap-8 w-full max-w-2xl">
                {/* HP + Autonomy - FAILURE */}
                <div className="flex-1 border border-red-500 bg-white p-6">
                  <div className="text-center mb-4">
                    <span className="text-xs font-mono text-red-600">FAILURE</span>
                    <h3 className="text-lg font-black">HP + AUTONOMY</h3>
                  </div>

                  {/* GPI Gap Visualization */}
                  <div className="relative h-40 flex items-center justify-center">
                    <svg viewBox="0 0 120 140" className="w-full h-full">
                      {/* GPI Scale */}
                      <line x1="60" y1="10" x2="60" y2="130" stroke="#d6d3d1" strokeWidth="2" />

                      {/* Scale labels */}
                      <text x="70" y="15" fill="#a8a29e" fontSize="8" fontFamily="monospace">GPI 1</text>
                      <text x="70" y="135" fill="#a8a29e" fontSize="8" fontFamily="monospace">GPI 10</text>

                      {/* HP position - GPI 7.8 */}
                      <circle cx="60" cy="98" r="12" fill="#ef4444" />
                      <text x="30" y="102" fill="#ef4444" fontSize="8" fontWeight="bold">HP 7.8</text>

                      {/* Autonomy position - GPI 3.1 */}
                      <circle cx="60" cy="39" r="12" fill="#1c1917" />
                      <text x="75" y="43" fill="#1c1917" fontSize="8" fontWeight="bold">AUTO 3.1</text>

                      {/* Gap indicator */}
                      <line x1="40" y1="39" x2="40" y2="98" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,2">
                        <animate attributeName="stroke-dashoffset" values="0;-12" dur="1s" repeatCount="indefinite" />
                      </line>
                      <text x="10" y="70" fill="#ef4444" fontSize="10" fontWeight="bold">4.7 GAP</text>
                    </svg>
                  </div>

                  <div className="text-center mt-2">
                    <span className="text-2xl font-black text-red-600">-$8.8B</span>
                    <p className="text-xs text-stone-400 mt-1">Gap too wide. Rejection automatic.</p>
                  </div>
                </div>

                {/* Amazon + Whole Foods - SUCCESS */}
                <div className="flex-1 border border-stone-900/50 bg-white p-6">
                  <div className="text-center mb-4">
                    <span className="text-xs font-mono text-stone-900">SUCCESS</span>
                    <h3 className="text-lg font-black">AMAZON + WHOLE FOODS</h3>
                  </div>

                  {/* GPI Gap Visualization */}
                  <div className="relative h-40 flex items-center justify-center">
                    <svg viewBox="0 0 120 140" className="w-full h-full">
                      {/* GPI Scale */}
                      <line x1="60" y1="10" x2="60" y2="130" stroke="#d6d3d1" strokeWidth="2" />

                      {/* Scale labels */}
                      <text x="70" y="15" fill="#a8a29e" fontSize="8" fontFamily="monospace">GPI 1</text>
                      <text x="70" y="135" fill="#a8a29e" fontSize="8" fontFamily="monospace">GPI 10</text>

                      {/* Whole Foods position - GPI 6.1 */}
                      <circle cx="60" cy="77" r="12" fill="#eab308" />
                      <text x="75" y="81" fill="#eab308" fontSize="8" fontWeight="bold">WF 6.1</text>

                      {/* Amazon position - GPI 3.2 */}
                      <circle cx="60" cy="40" r="12" fill="#1c1917" />
                      <text x="30" y="44" fill="#1c1917" fontSize="8" fontWeight="bold">AMZN 3.2</text>

                      {/* Gap indicator - smaller, bridgeable */}
                      <line x1="80" y1="40" x2="80" y2="77" stroke="#1c1917" strokeWidth="2">
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                      </line>
                      <text x="85" y="60" fill="#1c1917" fontSize="10" fontWeight="bold">2.9</text>
                    </svg>
                  </div>

                  <div className="text-center mt-2">
                    <span className="text-2xl font-black text-stone-900">+$B</span>
                    <p className="text-xs text-stone-400 mt-1">Gap bridgeable. Integration possible.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="text-center mt-6">
              <span className="text-xs font-mono text-stone-400">The math predicted both outcomes before the deals closed.</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8 px-6">
          <div className="max-w-3xl mx-auto space-y-16">

            {/* Opening */}
            <div className="space-y-4 text-stone-600">
              <p>HP acquired Autonomy for $11 billion. Wrote off $8.8 billion.</p>
              <p>Amazon acquired Whole Foods for $13.7 billion. Created billions in value.</p>
              <p>Both had strategic logic. Both had executive support. Both had integration plans.</p>
              <p className="text-stone-900 text-xl font-bold pt-4">The difference wasn't strategy. It was metabolic compatibility.</p>
            </div>

            {/* Quote */}
            <div className="bg-white border border-stone-200 p-8">
              <p className="text-2xl text-stone-900 italic">"Acquisition success is metabolic compatibility, not strategic logic."</p>
            </div>

            {/* Big Numbers */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-red-950/30 border border-red-900/50 p-6">
                <p className="text-4xl font-black text-red-500">$8.8B</p>
                <p className="text-stone-500 text-sm mt-2">HP/Autonomy writedown</p>
                <p className="text-red-400 text-xs mt-1">4.7 point gap</p>
              </div>
              <div className="bg-green-950/30 border border-green-900/50 p-6">
                <p className="text-4xl font-black text-stone-900">+$B</p>
                <p className="text-stone-500 text-sm mt-2">Amazon/WF value created</p>
                <p className="text-green-400 text-xs mt-1">2.9 point gap</p>
              </div>
            </div>

            {/* HP Autonomy Mismatch */}
            <div className="border-l-2 border-red-600 pl-6 space-y-4">
              <h2 className="text-xs font-mono text-red-500 mb-4">HP + AUTONOMY: THE MISMATCH</h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-red-400 font-bold">HP (GPI 7.8)</p>
                  <p className="text-stone-500">Quarterly decisions. Siloed. Annual planning. Process-driven.</p>
                </div>
                <div>
                  <p className="text-green-400 font-bold">Autonomy (GPI 3.1)</p>
                  <p className="text-stone-500">Weekly decisions. Distributed. Continuous. Innovation-driven.</p>
                </div>
              </div>
            </div>

            {/* Antibody Response */}
            <div className="bg-white border border-stone-200 p-8">
              <h2 className="text-xs font-mono text-stone-500 mb-6">THE ANTIBODY RESPONSE</h2>
              <div className="space-y-3 text-sm">
                <p><span className="text-stone-900 font-bold">Months 1-3:</span> <span className="text-stone-500">Detection. Friction dismissed as "expected adjustment."</span></p>
                <p><span className="text-stone-900 font-bold">Months 4-9:</span> <span className="text-stone-500">Threat assessment. Both sides: "They don't get it."</span></p>
                <p><span className="text-stone-900 font-bold">Months 10-18:</span> <span className="text-stone-500">Immune response. Key talent leaving.</span></p>
                <p><span className="text-stone-900 font-bold">Months 19+:</span> <span className="text-stone-500">Rejection. $8.8B writedown. Fraud allegations.</span></p>
              </div>
            </div>

            {/* Amazon Whole Foods */}
            <div className="border-l-2 border-stone-900 pl-6 space-y-4">
              <h2 className="text-xs font-mono text-stone-900 mb-4">AMAZON + WHOLE FOODS: THE MATCH</h2>
              <p className="text-stone-600"><span className="text-stone-900 font-bold">Year 1:</span> Respect the metabolism. Learn before changing. Build trust.</p>
              <p className="text-stone-600"><span className="text-stone-900 font-bold">Year 2:</span> Coordination layer. Enhance, don't replace.</p>
              <p className="text-stone-600"><span className="text-stone-900 font-bold">Year 3+:</span> Mutual evolution. Two-way learning.</p>
              <p className="text-stone-500 text-sm pt-2">Result: Whole Foods GPI dropped to 5.3. Faster, but still recognizable.</p>
            </div>

            {/* Success Rates */}
            <div className="bg-white border border-stone-200 p-8">
              <h2 className="text-xs font-mono text-stone-500 mb-6">ACQUISITION SUCCESS BY GPI GAP</h2>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between"><span>0-2 point gap</span><span className="text-green-400">~80% success</span></div>
                <div className="flex justify-between"><span>3-4 point gap</span><span className="text-yellow-400">~50% success</span></div>
                <div className="flex justify-between"><span>5+ point gap</span><span className="text-red-400">~20% success</span></div>
                <div className="flex justify-between"><span>6+ point gap</span><span className="text-red-600">~5% success</span></div>
              </div>
            </div>

            {/* Due Diligence Questions */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono text-stone-500 mb-4">METABOLIC DUE DILIGENCE</h2>
              <div className="space-y-3">
                <div className="flex gap-4 items-start">
                  <span className="text-red-600 font-mono">01</span>
                  <p className="text-stone-600"><span className="text-stone-900 font-bold">What's the GPI gap?</span> Measure both. Calculate the distance.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-red-600 font-mono">02</span>
                  <p className="text-stone-600"><span className="text-stone-900 font-bold">What antibodies will activate?</span> Map the immune response first.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-red-600 font-mono">03</span>
                  <p className="text-stone-600"><span className="text-stone-900 font-bold">Realistic timeline?</span> Multiply consultant estimates by 3.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-red-600 font-mono">04</span>
                  <p className="text-stone-600"><span className="text-stone-900 font-bold">Bridge infrastructure?</span> Can you operate at multiple speeds?</p>
                </div>
              </div>
            </div>

            {/* Three Strategies */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border border-green-900/50 p-4">
                <p className="text-stone-900 font-bold text-sm mb-2">INTEGRATION</p>
                <p className="text-stone-500 text-xs mb-1">Gaps under 3 points</p>
                <p className="text-stone-500 text-sm">Blend. 2-3 year timeline.</p>
              </div>
              <div className="border border-yellow-900/50 p-4">
                <p className="text-yellow-500 font-bold text-sm mb-2">QUARANTINE</p>
                <p className="text-stone-500 text-xs mb-1">Gaps 3-5 points</p>
                <p className="text-stone-500 text-sm">Keep separate. 5+ years.</p>
              </div>
              <div className="border border-red-900/50 p-4">
                <p className="text-red-500 font-bold text-sm mb-2">PORTFOLIO</p>
                <p className="text-stone-500 text-xs mb-1">Gaps over 5 points</p>
                <p className="text-stone-500 text-sm">Never integrate.</p>
              </div>
            </div>

            {/* Board Question */}
            <div className="border-l-2 border-yellow-500 pl-6">
              <p className="text-xl text-stone-900 italic">"What's the GPI gap, and which integration strategy matches it?"</p>
              <p className="text-stone-500 mt-4">If the answer is "we'll figure it out," question the deal.</p>
            </div>

            {/* Closing */}
            <div className="bg-red-50 border border-red-200 p-8 space-y-4">
              <p className="text-stone-900 font-bold text-2xl">$8.8 billion destroyed because HP didn't measure metabolic compatibility.</p>
              <p className="text-stone-600">Billions created because Amazon did. The difference isn't luck.</p>
              <p className="text-red-500 font-bold text-xl pt-4">It's physics. Measure the gap before you sign the check.</p>
            </div>

            {/* Book Teaser */}
            <div className="border border-stone-200 p-8 flex items-center gap-6">
              <BookOpen size={48} className="text-stone-400 flex-shrink-0" />
              <div>
                <p className="text-stone-500 text-sm uppercase mb-1">From the upcoming book</p>
                <p className="text-xl font-black">The Growing Pains Index</p>
                <p className="text-stone-500">Chapters 12-13: Whole Foods & HP/Autonomy</p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-stone-200">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">MEASURE YOUR METABOLIC POSITION</h3>
            <p className="text-xl text-stone-500 mb-8 max-w-2xl mx-auto">
              Before you acquire, integrate, or partner: know your GPI. Know the gap.
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
                  href: "/insights/metabolic-rate",
                  title: "Metabolic Rate",
                  description: "The speed of organizational change. Why some can integrate and others can't.",
                  color: "red"
                },
                {
                  href: "/insights/organizational-antibodies",
                  title: "Organizational Antibodies",
                  description: "The immune response that kills acquisitions. How rejection actually works.",
                  color: "yellow"
                },
                {
                  href: "/insights/the-spiral-model",
                  title: "The Spiral Model",
                  description: "How organizations evolve through phases. Building integration capability.",
                  color: "green"
                }
              ]}
            />
          </div>
        </section>
        <footer className="py-16 px-6 border-t border-stone-200">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
              <div><div className="font-black text-sm mb-4">GPI<span className="text-red-600">.</span>STUDIO</div><p className="text-sm text-stone-400 leading-relaxed">Organizational physics.<br />We measure where energy gets stuck.</p></div>
              <div><div className="text-xs font-mono text-stone-400 mb-4">RESEARCH</div><div className="space-y-3"><Link href="/insights" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Insights</Link><Link href="/insights/gpi-analyses" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Analyses</Link><Link href="/gpi-framework" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Framework</Link></div></div>
              <div><div className="text-xs font-mono text-stone-400 mb-4">WORK</div><div className="space-y-3"><Link href="/diagnostic" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Diagnostic</Link><Link href="/consult" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Book a Session</Link><Link href="/work-with-us" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Work With Us</Link></div></div>
              <div><div className="text-xs font-mono text-stone-400 mb-4">COMPANY</div><div className="space-y-3"><Link href="/about" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">About</Link></div></div>
            </div>
            <div className="pt-8 border-t border-stone-200 flex justify-between items-center text-xs text-stone-400"><div>&copy; {new Date().getFullYear()} Imagination G LLC</div><div className="font-mono">gpi.studio</div></div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TheAcquisitionTrapPage;
