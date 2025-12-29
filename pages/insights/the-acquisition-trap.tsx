import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import RelatedContent from '../../components/RelatedContent';
import { ArrowLeft, BookOpen } from 'lucide-react';

const TheAcquisitionTrapPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="The Acquisition Trap - Why Strategic Logic Isn't Enough | IMAGINATION G"
        description="HP paid $11B for Autonomy and wrote off $8.8B. Amazon paid $13.7B for Whole Foods and created billions in value. The difference wasn't strategy. It was metabolic math."
        ogType="article"
        ogImage="/images/og-insights.svg"
        article={{
          publishedTime: "2025-01-15T00:00:00Z",
          author: "Marcus Davis"
        }}
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="insights" />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <Link href="/insights" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8">
              <ArrowLeft size={16} />
              Back to Insights
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-mono text-red-600 bg-red-600/10 px-3 py-1 rounded">CASE STUDY</span>
              <span className="text-xs text-zinc-500">10 min read</span>
              <span className="text-xs text-zinc-600">•</span>
              <span className="text-xs text-zinc-500">ALL DIMENSIONS</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-[1.1]">
              THE ACQUISITION<br />TRAP<span className="text-red-600">.</span>
            </h1>

            <p className="text-2xl text-zinc-500 mb-8">
              Why Strategic Logic Isn't Enough
            </p>

            <p className="text-xl text-zinc-400 max-w-2xl">
              HP paid $11B for Autonomy and wrote off $8.8B. Amazon paid $13.7B for Whole Foods and created billions in value. The difference wasn't strategy. It was metabolic math.
            </p>

            {/* ACQUISITION VISUAL - GPI Gap Comparison */}
            <div className="mt-16 flex justify-center">
              <div className="flex flex-col md:flex-row gap-8 w-full max-w-2xl">
                {/* HP + Autonomy - FAILURE */}
                <div className="flex-1 border border-red-600/50 bg-zinc-950 p-6">
                  <div className="text-center mb-4">
                    <span className="text-xs font-mono text-red-600">FAILURE</span>
                    <h3 className="text-lg font-black">HP + AUTONOMY</h3>
                  </div>

                  {/* GPI Gap Visualization */}
                  <div className="relative h-40 flex items-center justify-center">
                    <svg viewBox="0 0 120 140" className="w-full h-full">
                      {/* GPI Scale */}
                      <line x1="60" y1="10" x2="60" y2="130" stroke="#3f3f46" strokeWidth="2" />

                      {/* Scale labels */}
                      <text x="70" y="15" fill="#52525b" fontSize="8" fontFamily="monospace">GPI 1</text>
                      <text x="70" y="135" fill="#52525b" fontSize="8" fontFamily="monospace">GPI 10</text>

                      {/* HP position - GPI 7.8 */}
                      <circle cx="60" cy="98" r="12" fill="#ef4444" />
                      <text x="30" y="102" fill="#ef4444" fontSize="8" fontWeight="bold">HP 7.8</text>

                      {/* Autonomy position - GPI 3.1 */}
                      <circle cx="60" cy="39" r="12" fill="#22c55e" />
                      <text x="75" y="43" fill="#22c55e" fontSize="8" fontWeight="bold">AUTO 3.1</text>

                      {/* Gap indicator */}
                      <line x1="40" y1="39" x2="40" y2="98" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,2">
                        <animate attributeName="stroke-dashoffset" values="0;-12" dur="1s" repeatCount="indefinite" />
                      </line>
                      <text x="10" y="70" fill="#ef4444" fontSize="10" fontWeight="bold">4.7 GAP</text>
                    </svg>
                  </div>

                  <div className="text-center mt-2">
                    <span className="text-2xl font-black text-red-600">-$8.8B</span>
                    <p className="text-xs text-zinc-600 mt-1">Gap too wide. Rejection automatic.</p>
                  </div>
                </div>

                {/* Amazon + Whole Foods - SUCCESS */}
                <div className="flex-1 border border-green-600/50 bg-zinc-950 p-6">
                  <div className="text-center mb-4">
                    <span className="text-xs font-mono text-green-600">SUCCESS</span>
                    <h3 className="text-lg font-black">AMAZON + WHOLE FOODS</h3>
                  </div>

                  {/* GPI Gap Visualization */}
                  <div className="relative h-40 flex items-center justify-center">
                    <svg viewBox="0 0 120 140" className="w-full h-full">
                      {/* GPI Scale */}
                      <line x1="60" y1="10" x2="60" y2="130" stroke="#3f3f46" strokeWidth="2" />

                      {/* Scale labels */}
                      <text x="70" y="15" fill="#52525b" fontSize="8" fontFamily="monospace">GPI 1</text>
                      <text x="70" y="135" fill="#52525b" fontSize="8" fontFamily="monospace">GPI 10</text>

                      {/* Whole Foods position - GPI 6.1 */}
                      <circle cx="60" cy="77" r="12" fill="#eab308" />
                      <text x="75" y="81" fill="#eab308" fontSize="8" fontWeight="bold">WF 6.1</text>

                      {/* Amazon position - GPI 3.2 */}
                      <circle cx="60" cy="40" r="12" fill="#22c55e" />
                      <text x="30" y="44" fill="#22c55e" fontSize="8" fontWeight="bold">AMZN 3.2</text>

                      {/* Gap indicator - smaller, bridgeable */}
                      <line x1="80" y1="40" x2="80" y2="77" stroke="#22c55e" strokeWidth="2">
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                      </line>
                      <text x="85" y="60" fill="#22c55e" fontSize="10" fontWeight="bold">2.9</text>
                    </svg>
                  </div>

                  <div className="text-center mt-2">
                    <span className="text-2xl font-black text-green-600">+$B</span>
                    <p className="text-xs text-zinc-600 mt-1">Gap bridgeable. Integration possible.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="text-center mt-6">
              <span className="text-xs font-mono text-zinc-600">The math predicted both outcomes before the deals closed.</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8 px-6">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-invert prose-lg max-w-none">

              {/* The Core Insight */}
              <div className="border-l-4 border-red-600 pl-6 mb-12">
                <p className="text-xl text-zinc-300 italic mb-0">
                  "Acquisition success is metabolic compatibility, not strategic logic."
                </p>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">TWO ACQUISITIONS, TWO OUTCOMES</h2>

              <p className="text-zinc-400 mb-6">
                In 2011, HP acquired Autonomy for $11 billion. By 2012, they'd written off $8.8 billion. The deal became a case study in acquisition failure, triggering lawsuits, executive departures, and years of recrimination.
              </p>

              <p className="text-zinc-400 mb-6">
                In 2017, Amazon acquired Whole Foods for $13.7 billion. Within months, they'd integrated Prime benefits, reduced prices, and begun transforming grocery delivery. The deal created billions in value.
              </p>

              <p className="text-zinc-400 mb-6">
                Both acquisitions had strategic logic. Both had executive support. Both had integration plans. One worked. One didn't.
              </p>

              <p className="text-zinc-400 mb-6">
                <span className="text-white font-bold">The difference wasn't strategy. It was metabolic compatibility.</span>
              </p>

              <h2 className="text-2xl font-black mt-12 mb-6">THE HP/AUTONOMY DISASTER</h2>

              <div className="bg-zinc-950 border border-red-600/30 p-8 my-12">
                <h3 className="text-xl font-black text-red-600 mb-6">THE METABOLIC MISMATCH</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-white font-bold mb-2">HP (GPI ~7.8)</p>
                    <ul className="text-zinc-400 text-sm space-y-1">
                      <li>• Decision cycles: Quarterly</li>
                      <li>• Knowledge: Siloed in divisions</li>
                      <li>• Change speed: Annual planning</li>
                      <li>• Culture: Process-driven</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-white font-bold mb-2">Autonomy (GPI ~3.1)</p>
                    <ul className="text-zinc-400 text-sm space-y-1">
                      <li>• Decision cycles: Weekly</li>
                      <li>• Knowledge: Distributed across teams</li>
                      <li>• Change speed: Continuous</li>
                      <li>• Culture: Innovation-driven</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-zinc-800">
                  <p className="text-red-400 font-mono text-center">METABOLIC GAP: 4.7 POINTS</p>
                </div>
              </div>

              <p className="text-zinc-400 mb-6">
                The strategic logic was sound: HP needed software capabilities to pivot from hardware. Autonomy had AI-powered search technology. On paper, perfect fit.
              </p>

              <p className="text-zinc-400 mb-6">
                But HP was deep particle state. Autonomy was fast field state. The gap was 4.7 GPI points. Beyond the threshold where integration is possible.
              </p>

              <h3 className="text-xl font-black mt-8 mb-4">THE ANTIBODY RESPONSE</h3>

              <div className="bg-black border border-zinc-800 p-8 my-8">
                <div className="space-y-4">
                  <div>
                    <p className="text-white font-bold">Months 1-3: Detection</p>
                    <p className="text-zinc-500 text-sm">HP managers assigned to "integrate" Autonomy. Autonomy teams confused by HP processes. Friction dismissed as "expected adjustment."</p>
                  </div>
                  <div>
                    <p className="text-white font-bold">Months 4-9: Threat Assessment</p>
                    <p className="text-zinc-500 text-sm">HP systems couldn't accommodate Autonomy workflows. Financial reporting became battleground. Both sides concluded the other "doesn't get it."</p>
                  </div>
                  <div>
                    <p className="text-white font-bold">Months 10-18: Immune Response</p>
                    <p className="text-zinc-500 text-sm">HP middle management mobilized to "bring discipline." Autonomy leadership resisted "bureaucracy." Key talent started leaving.</p>
                  </div>
                  <div>
                    <p className="text-white font-bold">Months 19+: Rejection</p>
                    <p className="text-zinc-500 text-sm">Fraud allegations emerged. $8.8 billion writedown. Acquisition declared failure. Both organizations damaged.</p>
                  </div>
                </div>
              </div>

              <p className="text-zinc-400 mb-6">
                The fraud allegations (later disputed) were partly real, partly antibody response. When integration fails, the immune system finds reasons to reject. The story becomes "they deceived us" rather than "we were metabolically incompatible."
              </p>

              <h2 className="text-2xl font-black mt-12 mb-6">THE AMAZON/WHOLE FOODS SUCCESS</h2>

              <div className="bg-zinc-950 border border-green-500/30 p-8 my-12">
                <h3 className="text-xl font-black text-green-500 mb-6">THE METABOLIC MATCH</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-white font-bold mb-2">Amazon (GPI ~3.2)</p>
                    <ul className="text-zinc-400 text-sm space-y-1">
                      <li>• Decision cycles: Days to weeks</li>
                      <li>• Knowledge: Distributed, data-driven</li>
                      <li>• Change speed: Continuous</li>
                      <li>• Culture: Customer-obsessed</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-white font-bold mb-2">Whole Foods (GPI ~6.1)</p>
                    <ul className="text-zinc-400 text-sm space-y-1">
                      <li>• Decision cycles: Monthly</li>
                      <li>• Knowledge: Store-level expertise</li>
                      <li>• Change speed: Seasonal</li>
                      <li>• Culture: Quality-obsessed</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-zinc-800">
                  <p className="text-green-400 font-mono text-center">METABOLIC GAP: 2.9 POINTS</p>
                </div>
              </div>

              <p className="text-zinc-400 mb-6">
                The gap was 2.9 points. Within the integrable range. But there's more to the story.
              </p>

              <h3 className="text-xl font-black mt-8 mb-4">WHAT AMAZON DID DIFFERENTLY</h3>

              <div className="bg-black border border-zinc-800 p-8 my-8">
                <div className="space-y-6">
                  <div>
                    <p className="text-white font-bold">Year 1: Respect the Metabolism</p>
                    <p className="text-zinc-500 text-sm">Amazon didn't immediately impose their systems. They learned Whole Foods operations. Identified where coordination could add value without disruption. Built trust before demanding change.</p>
                  </div>
                  <div>
                    <p className="text-white font-bold">Year 2: Coordination Layer</p>
                    <p className="text-zinc-500 text-sm">Added Amazon technology to Whole Foods processes. Inventory management, pricing optimization, delivery integration. Enhanced rather than replaced.</p>
                  </div>
                  <div>
                    <p className="text-white font-bold">Year 3+: Mutual Evolution</p>
                    <p className="text-zinc-500 text-sm">Whole Foods influenced Amazon fresh strategy. Amazon influenced Whole Foods cost structure. Two-way learning, not one-way imposition.</p>
                  </div>
                </div>
              </div>

              <p className="text-zinc-400 mb-6">
                The result: Whole Foods GPI dropped to around 5.3. Faster, more adaptive. But still recognizably Whole Foods. The metabolism shifted without triggering rejection.
              </p>

              <h2 className="text-2xl font-black mt-12 mb-6">THE METABOLIC MATH</h2>

              <p className="text-zinc-400 mb-6">
                The pattern across hundreds of acquisitions is consistent:
              </p>

              <div className="bg-zinc-950 border border-zinc-800 p-8 my-12">
                <h3 className="text-xl font-black mb-6">ACQUISITION SUCCESS BY GPI GAP</h3>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                    <span>0-2 point gap</span>
                    <span className="text-green-400">~80% integration success</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                    <span>3-4 point gap</span>
                    <span className="text-yellow-400">~50% success (requires quarantine strategy)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                    <span>5+ point gap</span>
                    <span className="text-red-400">~20% success (maintain separate)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>6+ point gap</span>
                    <span className="text-red-600">~5% success (don't attempt)</span>
                  </div>
                </div>
              </div>

              <p className="text-zinc-400 mb-6">
                HP's 4.7-point gap put them in the danger zone. Amazon's 2.9-point gap was workable. The math predicted the outcome before the deal closed.
              </p>

              <h2 className="text-2xl font-black mt-12 mb-6">WHAT DUE DILIGENCE MISSES</h2>

              <p className="text-zinc-400 mb-6">
                Traditional due diligence examines financials, legal exposure, market position, technology assets. All important. All insufficient.
              </p>

              <p className="text-zinc-400 mb-6">
                <span className="text-white font-bold">Metabolic due diligence asks different questions:</span>
              </p>

              <div className="bg-black border border-zinc-800 p-8 my-12">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="text-red-600 font-mono">01</span>
                    <div>
                      <p className="text-white font-bold">What's the GPI gap?</p>
                      <p className="text-zinc-500 text-sm">Measure both organizations. Calculate the distance. Know what you're dealing with.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-red-600 font-mono">02</span>
                    <div>
                      <p className="text-white font-bold">What antibodies will activate?</p>
                      <p className="text-zinc-500 text-sm">Process antibodies? Power antibodies? Identity antibodies? Map the immune response before triggering it.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-red-600 font-mono">03</span>
                    <div>
                      <p className="text-white font-bold">What's the realistic integration timeline?</p>
                      <p className="text-zinc-500 text-sm">Multiply the consultant's estimate by 3. For 4+ point gaps, think years not months.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-red-600 font-mono">04</span>
                    <div>
                      <p className="text-white font-bold">Do we have metabolic bridge infrastructure?</p>
                      <p className="text-zinc-500 text-sm">Can you operate at multiple speeds? Or will you force one metabolism on the other?</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">THE THREE STRATEGIES</h2>

              <p className="text-zinc-400 mb-6">
                When metabolic gaps exist, three strategies can work:
              </p>

              <div className="space-y-6 my-12">
                <div className="border border-zinc-800 p-6">
                  <h3 className="text-xl font-black text-green-500 mb-3">STRATEGY 1: INTEGRATION</h3>
                  <p className="text-zinc-500 text-sm mb-2">For gaps under 3 points</p>
                  <p className="text-zinc-400">Blend the organizations. Adopt best practices from both. Accept 2-3 year timeline. Build coordination infrastructure that bridges the gap.</p>
                </div>

                <div className="border border-zinc-800 p-6">
                  <h3 className="text-xl font-black text-yellow-500 mb-3">STRATEGY 2: QUARANTINE</h3>
                  <p className="text-zinc-500 text-sm mb-2">For gaps of 3-5 points</p>
                  <p className="text-zinc-400">Keep acquired company separate. Don't integrate operations. Build bridges slowly. Accept 5+ year timeline before meaningful integration.</p>
                </div>

                <div className="border border-zinc-800 p-6">
                  <h3 className="text-xl font-black text-red-500 mb-3">STRATEGY 3: PORTFOLIO</h3>
                  <p className="text-zinc-500 text-sm mb-2">For gaps over 5 points</p>
                  <p className="text-zinc-400">Operate as separate entities indefinitely. Extract value through shared customers or resources. Never attempt integration. Accept different metabolisms forever.</p>
                </div>
              </div>

              <p className="text-zinc-400 mb-6">
                HP tried Strategy 1 with a Strategy 3 gap. Failure was predictable. Amazon executed Strategy 1 with a Strategy 1 gap. Success was predictable.
              </p>

              <h2 className="text-2xl font-black mt-12 mb-6">THE BOARD QUESTION</h2>

              <p className="text-zinc-400 mb-6">
                Before any acquisition approval, boards should ask one question:
              </p>

              <div className="border-l-4 border-yellow-500 pl-6 my-12">
                <p className="text-xl text-zinc-300 italic mb-0">
                  "What's the GPI gap, and which integration strategy matches it?"
                </p>
              </div>

              <p className="text-zinc-400 mb-6">
                If the answer is "we'll figure it out" or "culture will blend," the deal should be questioned. Strategic logic is necessary but not sufficient. Metabolic math determines success.
              </p>

              <div className="bg-red-600/10 border border-red-600/30 p-8 my-12">
                <h3 className="text-xl font-black text-red-600 mb-4">KEY INSIGHT</h3>
                <p className="text-lg text-zinc-300">
                  $8.8 billion in value destroyed because HP didn't measure metabolic compatibility. Billions in value created because Amazon did. The difference isn't luck. It's physics. Measure the gap before you sign the check. Match the strategy to the metabolism. Strategic logic without metabolic math is expensive fantasy.
                </p>
              </div>

            </article>

            {/* Book Teaser */}
            <div className="border border-zinc-800 p-8 mt-16 flex items-center gap-6">
              <BookOpen size={48} className="text-zinc-600 flex-shrink-0" />
              <div>
                <p className="text-zinc-500 text-sm uppercase mb-1">From the upcoming book</p>
                <p className="text-xl font-black">The Growing Pains Index</p>
                <p className="text-zinc-400">Chapters 11-12: Acquisition Case Studies</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">MEASURE YOUR METABOLIC POSITION</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Before you acquire, integrate, or partner: know your GPI. Know the gap.
            </p>
            <Link
              href="/diagnostic"
              className="inline-block bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
            >
              TAKE THE GPI DIAGNOSTIC
            </Link>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-16 px-6 bg-zinc-950">
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
      </div>
    </>
  );
};

export default TheAcquisitionTrapPage;
