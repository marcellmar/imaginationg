import Head from 'next/head';
import Link from 'next/link';

export default function SignalDecayTheory() {
  return (
    <>
      <Head>
        <title>What is Signal Decay Theory? | IMAGINATION G</title>
        <meta name="description" content="Signal Decay Theory explains how truth systematically degrades as it moves through organizational layers. The mathematical certainty that clear signal becomes corrupted noise." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DefinedTerm",
              "name": "Signal Decay Theory",
              "description": "How truth systematically degrades as it moves through organizational layers, with mathematical certainty that clear signal becomes corrupted noise",
              "inDefinedTermSet": {
                "@type": "DefinedTermSet",
                "name": "Business Transformation Glossary",
                "publisher": {
                  "@type": "Organization",
                  "name": "IMAGINATION G",
                  "url": "https://www.imaginationg.studio"
                }
              }
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/answers" className="text-red-500 text-sm font-bold">
              BACK TO ANSWERS
            </Link>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              SIGNAL DECAY THEORY
            </h1>
            <p className="text-xl text-zinc-400">
              The mathematical certainty that truth becomes noise
            </p>
          </div>

          {/* Definition */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-red-500">DEFINITION</h2>
            <div className="border-l-4 border-red-500 pl-6 mb-8">
              <p className="text-lg">
                <strong>Signal Decay Theory</strong> explains how truth systematically degrades as it moves through organizational layers. 
                It's the mathematical certainty that clear signal becomes corrupted noise with each transmission.
              </p>
            </div>
          </div>

          {/* The Core Principle */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE DECAY EQUATION</h2>
            <div className="bg-zinc-900 border border-zinc-800 p-8">
              <div className="text-center mb-6">
                <p className="text-3xl font-mono text-red-500 mb-4">
                  Signal Clarity = Original Truth × (0.7)^n
                </p>
                <p className="text-sm text-zinc-400">
                  Where n = number of organizational layers the signal passes through
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="border border-green-500 p-4">
                  <h3 className="font-bold text-green-500">LAYER 0</h3>
                  <p className="text-2xl">100%</p>
                  <p className="text-xs text-zinc-500">Original signal</p>
                </div>
                <div className="border border-yellow-500 p-4">
                  <h3 className="font-bold text-yellow-500">LAYER 3</h3>
                  <p className="text-2xl">34%</p>
                  <p className="text-xs text-zinc-500">Severely degraded</p>
                </div>
                <div className="border border-red-500 p-4">
                  <h3 className="font-bold text-red-500">LAYER 5</h3>
                  <p className="text-2xl">17%</p>
                  <p className="text-xs text-zinc-500">Mostly noise</p>
                </div>
              </div>
              <p className="text-zinc-400 mt-4 text-center">
                <strong>The buried truth:</strong> By layer 5, signal is 83% corrupted.
              </p>
            </div>
          </div>

          {/* The Decay Mechanisms */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">HOW SIGNAL DECAYS</h2>
            <div className="space-y-6">
              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-red-500">TRANSLATION LOSS</h3>
                <p className="text-zinc-300 mb-3">
                  Each person interprets and retransmits based on their understanding, context, and agenda. 
                  "This customer will never pay" becomes "We should review pricing strategy."
                </p>
                <p className="text-sm text-zinc-500">
                  Decay factor: 10-20% signal loss per transmission.
                </p>
              </div>
              
              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-500">COMFORT FILTERING</h3>
                <p className="text-zinc-300 mb-3">
                  Uncomfortable truths get softened to reduce psychological threat. 
                  "Our product is fundamentally broken" becomes "We have some quality issues to address."
                </p>
                <p className="text-sm text-zinc-500">
                  Decay factor: 15-30% signal loss for uncomfortable truths.
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-500">POLITICAL OPTIMIZATION</h3>
                <p className="text-zinc-300 mb-3">
                  Signal gets modified to protect relationships and avoid conflict. 
                  "John is incompetent" becomes "John might benefit from additional support."
                </p>
                <p className="text-sm text-zinc-500">
                  Decay factor: 20-40% signal loss in politically sensitive areas.
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-green-500">ABSTRACTION INFLATION</h3>
                <p className="text-zinc-300 mb-3">
                  Concrete specifics become abstract generalities to sound more sophisticated. 
                  "Fix the checkout bug" becomes "Optimize the user experience journey."
                </p>
                <p className="text-sm text-zinc-500">
                  Decay factor: 25-50% signal loss through abstraction.
                </p>
              </div>
            </div>
          </div>

          {/* Real-World Signal Decay Examples */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">SIGNAL DECAY IN ACTION</h2>
            <div className="space-y-8">
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-4">EXAMPLE 1: CUSTOMER FEEDBACK DECAY</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-20 text-green-500 font-bold">LAYER 0:</span>
                    <span className="text-zinc-300">"Your app crashes every time I try to checkout. This is garbage."</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 text-yellow-500 font-bold">LAYER 1:</span>
                    <span className="text-zinc-300">"Customer experiencing some checkout issues."</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 text-orange-500 font-bold">LAYER 2:</span>
                    <span className="text-zinc-300">"Users reporting occasional checkout friction."</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 text-red-500 font-bold">LAYER 3:</span>
                    <span className="text-zinc-300">"Opportunity to optimize checkout experience."</span>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 mt-3">
                  Result: Critical bug becomes optimization opportunity.
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-4">EXAMPLE 2: PERFORMANCE ISSUE DECAY</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-20 text-green-500 font-bold">LAYER 0:</span>
                    <span className="text-zinc-300">"Sarah misses every deadline and produces low-quality work."</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 text-yellow-500 font-bold">LAYER 1:</span>
                    <span className="text-zinc-300">"Sarah is struggling with current workload and delivery standards."</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 text-orange-500 font-bold">LAYER 2:</span>
                    <span className="text-zinc-300">"Sarah could benefit from additional support and resources."</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 text-red-500 font-bold">LAYER 3:</span>
                    <span className="text-zinc-300">"We're exploring ways to better support our team members."</span>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 mt-3">
                  Result: Performance problem becomes support opportunity.
                </p>
              </div>
            </div>
          </div>

          {/* Factors That Accelerate Decay */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">DECAY ACCELERATION FACTORS</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">ORGANIZATIONAL FACTORS</h3>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• More management layers = faster decay</li>
                  <li>• Political sensitivity = increased filtering</li>
                  <li>• Blame culture = truth suppression</li>
                  <li>• Consensus requirements = signal dilution</li>
                  <li>• Remote communication = higher loss rate</li>
                </ul>
              </div>
              
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">HUMAN FACTORS</h3>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• Career protection instincts</li>
                  <li>• Relationship preservation needs</li>
                  <li>• Comfort zone maintenance</li>
                  <li>• Authority intimidation</li>
                  <li>• Cognitive overload effects</li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Half-Life of Truth */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE HALF-LIFE OF ORGANIZATIONAL TRUTH</h2>
            <div className="bg-red-900 border border-red-500 p-8">
              <p className="text-lg mb-4">
                <strong>Signal Decay follows radioactive decay principles:</strong>
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-center mb-6">
                <div className="border border-red-500 p-4">
                  <h3 className="font-bold text-red-500">24 HOURS</h3>
                  <p className="text-sm text-zinc-300">50% signal remaining</p>
                </div>
                <div className="border border-red-500 p-4">
                  <h3 className="font-bold text-red-500">1 WEEK</h3>
                  <p className="text-sm text-zinc-300">25% signal remaining</p>
                </div>
                <div className="border border-red-500 p-4">
                  <h3 className="font-bold text-red-500">1 MONTH</h3>
                  <p className="text-sm text-zinc-300">Signal effectively dead</p>
                </div>
              </div>
              <p className="text-zinc-300">
                The buried truth: Critical signals have a shelf life. 
                Without active amplification, truth dies naturally in organizational systems.
              </p>
            </div>
          </div>

          {/* Signal Decay Symptoms */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">DETECTING SIGNAL DECAY</h2>
            <div className="space-y-4">
              <div className="border border-yellow-500 p-6">
                <h3 className="font-bold text-yellow-500 mb-3">EARLY DECAY SIGNS</h3>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• Urgent issues become "opportunities to explore"</li>
                  <li>• Specific problems become general "areas of focus"</li>
                  <li>• Clear failures become "learning experiences"</li>
                  <li>• Individual accountability becomes "team challenges"</li>
                  <li>• Binary issues become "complex situations"</li>
                </ul>
              </div>
              
              <div className="border border-red-500 p-6">
                <h3 className="font-bold text-red-500 mb-3">ADVANCED DECAY</h3>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• Leadership completely disconnected from ground truth</li>
                  <li>• Decisions made on completely corrupted information</li>
                  <li>• Multiple layers of translation between problem and authority</li>
                  <li>• Truth-tellers bypass hierarchy to communicate directly</li>
                  <li>• Reality and organizational narrative completely diverged</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Preventing Signal Decay */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-green-500">PREVENTING SIGNAL DECAY</h2>
            <p className="text-lg mb-6">
              Signal preservation requires <strong>systematic amplification infrastructure</strong> and decay prevention protocols.
            </p>
            <div className="border border-green-500 p-6">
              <h3 className="font-bold mb-3">The Signal Preservation Protocol:</h3>
              <ol className="space-y-3 text-zinc-300">
                <li>1. <strong>Direct transmission:</strong> Truth goes directly to decision maker, no layers</li>
                <li>2. <strong>Signal documentation:</strong> Original truth preserved in exact words</li>
                <li>3. <strong>Translation prohibition:</strong> No softening, abstraction, or political optimization</li>
                <li>4. <strong>Decay detection:</strong> Compare transmitted signal to original truth</li>
                <li>5. <strong>Amplification systems:</strong> Multiple redundant truth channels</li>
              </ol>
            </div>
          </div>

          {/* Alternative Signal Architectures */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">SIGNAL PRESERVATION ARCHITECTURES</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-red-500 p-6">
                <h3 className="font-bold text-red-500 mb-4">HIERARCHICAL (BROKEN)</h3>
                <div className="text-center mb-4">
                  <div className="text-6xl">📱</div>
                  <div className="text-2xl">↓</div>
                  <div className="text-4xl">👨‍💼</div>
                  <div className="text-2xl">↓</div>
                  <div className="text-4xl">👨‍💼</div>
                  <div className="text-2xl">↓</div>
                  <div className="text-4xl">👨‍💼</div>
                  <div className="text-2xl">↓</div>
                  <div className="text-6xl">👑</div>
                </div>
                <p className="text-sm text-zinc-400">Signal degrades 30% per layer</p>
              </div>
              <div className="border border-green-500 p-6">
                <h3 className="font-bold text-green-500 mb-4">DIRECT (FUNCTIONAL)</h3>
                <div className="text-center mb-4">
                  <div className="text-6xl">📱</div>
                  <div className="text-4xl">⟶</div>
                  <div className="text-6xl">👑</div>
                </div>
                <p className="text-sm text-zinc-400 mt-8">Signal preserves 95%+ clarity</p>
              </div>
            </div>
          </div>

          {/* The Truth About Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE BURIED TRUTH ABOUT INFORMATION</h2>
            <div className="bg-black border border-zinc-700 p-8">
              <p className="text-lg mb-4 text-red-500">
                Most organizational "communication problems" are actually signal decay problems.
              </p>
              <p className="text-zinc-300 mb-4">
                The issue isn't that people can't communicate. The issue is that truth systematically 
                degrades as it moves through organizational structures designed to filter and soften reality.
              </p>
              <p className="text-zinc-400 italic">
                The longer the chain between truth and decision, the less truth survives.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="border border-zinc-800 p-8 text-center">
            <h3 className="text-2xl font-black mb-4">Ready to Preserve Signal Clarity?</h3>
            <p className="text-zinc-400 mb-6">
              Stop signal decay in your organization. Get the intervention that creates direct truth transmission channels.
            </p>
            <Link 
              href="/weapons/the-naming" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 transition-colors mr-4"
            >
              CREATE DIRECT SIGNAL CHANNELS
            </Link>
            <Link 
              href="/diagnostic" 
              className="inline-block border border-red-500 text-red-500 hover:bg-red-500 hover:text-black font-bold py-3 px-8 transition-colors"
            >
              DETECT SIGNAL DECAY
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}