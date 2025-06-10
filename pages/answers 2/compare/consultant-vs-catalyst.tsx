import Head from 'next/head';
import Link from 'next/link';

export default function ConsultantVsCatalyst() {
  return (
    <>
      <Head>
        <title>Consultant vs Catalyst: What's the Difference? | IMAGINATION G</title>
        <meta name="description" content="Consultants analyze and recommend. Catalysts confront and force reactions. Learn why traditional consulting fails and how catalysts create immediate change through confrontation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Consultant vs Catalyst Comparison",
              "description": "Detailed comparison between traditional consulting and catalyst approach to business transformation",
              "publisher": {
                "@type": "Organization",
                "name": "IMAGINATION G",
                "url": "https://www.imaginationg.studio"
              },
              "about": [
                {
                  "@type": "Thing",
                  "name": "Business Consulting"
                },
                {
                  "@type": "Thing", 
                  "name": "Clarity Catalyst"
                }
              ]
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/answers" className="text-red-500 text-sm font-bold">
              ← BACK TO ANSWERS
            </Link>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              CONSULTANT VS CATALYST
            </h1>
            <p className="text-xl text-zinc-400">
              Why traditional consulting fails and catalysts succeed
            </p>
          </div>

          {/* Core Difference */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-red-500">THE FUNDAMENTAL DIFFERENCE</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-yellow-500 p-8">
                <h3 className="text-2xl font-bold mb-4 text-yellow-500">CONSULTANTS</h3>
                <p className="text-lg mb-4">Study the problem</p>
                <p className="text-zinc-400">
                  Consultants are observers. They analyze your situation, create reports, 
                  and recommend solutions. They stand outside your business looking in.
                </p>
              </div>
              <div className="border border-red-500 p-8">
                <h3 className="text-2xl font-bold mb-4 text-red-500">CATALYSTS</h3>
                <p className="text-lg mb-4">Force the reaction</p>
                <p className="text-zinc-400">
                  Catalysts are chemical agents. They enter your system and create reactions 
                  that wouldn't happen otherwise. They force breakthrough by confrontation.
                </p>
              </div>
            </div>
          </div>

          {/* Side-by-Side Comparison */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">DETAILED COMPARISON</h2>
            
            {/* Approach */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-500">APPROACH</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-zinc-800 p-6">
                  <h4 className="font-bold text-yellow-500 mb-3">CONSULTANT APPROACH</h4>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li>• Conduct comprehensive assessment</li>
                    <li>• Gather stakeholder input</li>
                    <li>• Analyze data and trends</li>
                    <li>• Research best practices</li>
                    <li>• Build consensus through workshops</li>
                    <li>• Create detailed implementation plan</li>
                  </ul>
                </div>
                <div className="border border-zinc-800 p-6">
                  <h4 className="font-bold text-red-500 mb-3">CATALYST APPROACH</h4>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li>• Identify what you're avoiding</li>
                    <li>• Confront the uncomfortable truth</li>
                    <li>• Force binary decisions</li>
                    <li>• Prescribe specific weapons</li>
                    <li>• Create immediate accountability</li>
                    <li>• Make standing still impossible</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-500">TIMELINE</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-zinc-800 p-6">
                  <h4 className="font-bold text-yellow-500 mb-3">CONSULTANT TIMELINE</h4>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li>• Week 1-4: Discovery and assessment</li>
                    <li>• Week 5-8: Analysis and research</li>
                    <li>• Week 9-12: Strategy development</li>
                    <li>• Week 13-16: Presentation and buy-in</li>
                    <li>• Week 17+: Implementation planning</li>
                    <li>• Month 6+: Maybe something happens</li>
                  </ul>
                </div>
                <div className="border border-zinc-800 p-6">
                  <h4 className="font-bold text-red-500 mb-3">CATALYST TIMELINE</h4>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li>• Hour 1: Diagnose what's broken</li>
                    <li>• Hour 2: Name what you're avoiding</li>
                    <li>• Hour 3: Force the decision</li>
                    <li>• Day 1: Implement prescribed weapon</li>
                    <li>• Week 1: Visible momentum created</li>
                    <li>• Month 1: Transformation measurable</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Deliverables */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-500">DELIVERABLES</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-zinc-800 p-6">
                  <h4 className="font-bold text-yellow-500 mb-3">CONSULTANT DELIVERABLES</h4>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li>• 50+ slide strategy presentation</li>
                    <li>• Executive summary document</li>
                    <li>• Detailed implementation roadmap</li>
                    <li>• Risk assessment matrix</li>
                    <li>• Change management framework</li>
                    <li>• Training materials and processes</li>
                  </ul>
                </div>
                <div className="border border-zinc-800 p-6">
                  <h4 className="font-bold text-red-500 mb-3">CATALYST DELIVERABLES</h4>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li>• One brutal truth about what's broken</li>
                    <li>• Binary decision framework</li>
                    <li>• Prescribed weapon for your problem</li>
                    <li>• Immediate action steps</li>
                    <li>• Forced accountability system</li>
                    <li>• Measurable momentum in 30 days</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Why Consulting Fails */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-red-500">WHY TRADITIONAL CONSULTING FAILS</h2>
            <div className="space-y-6">
              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-500">1. THEY DON'T LIVE WITH THE CONSEQUENCES</h3>
                <p className="text-zinc-300">
                  Consultants leave after the presentation. They don't have to execute their recommendations 
                  or face the fallout when things don't work. Easy to recommend hard things when you won't be there to do them.
                </p>
              </div>
              
              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-500">2. THEY SELL COMFORT, NOT CHANGE</h3>
                <p className="text-zinc-300">
                  Consulting is a service business. Happy clients pay more bills. So consultants tell you what 
                  you want to hear, not what you need to face. Change is uncomfortable. Comfort doesn't create change.
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-500">3. THEY MISTAKE ANALYSIS FOR ACTION</h3>
                <p className="text-zinc-300">
                  More research feels like progress. Deeper analysis seems thorough. But analysis paralysis 
                  is still paralysis. While you're studying the problem, competitors are solving it.
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-500">4. THEY NEED YOU TO STAY BROKEN</h3>
                <p className="text-zinc-300">
                  If consultants actually fixed your problems, they'd lose a client. Their business model 
                  requires ongoing dysfunction. Catalysts succeed when you don't need them anymore.
                </p>
              </div>
            </div>
          </div>

          {/* When to Use Each */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">WHEN TO USE CONSULTANTS VS CATALYSTS</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-yellow-500 p-6">
                <h3 className="font-bold text-yellow-500 mb-4">USE CONSULTANTS WHEN:</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• You need specialized technical expertise</li>
                  <li>• You're entering a new market you don't understand</li>
                  <li>• You need extra hands for execution</li>
                  <li>• You want validation for decisions already made</li>
                  <li>• You need someone to blame if things go wrong</li>
                </ul>
              </div>
              <div className="border border-red-500 p-6">
                <h3 className="font-bold text-red-500 mb-4">USE CATALYSTS WHEN:</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• You know what needs to happen but can't do it</li>
                  <li>• You're stuck in analysis paralysis</li>
                  <li>• Your team avoids hard conversations</li>
                  <li>• Previous consultants left you with plans, not results</li>
                  <li>• You need someone to force the breakthrough</li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Catalyst Advantage */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-green-500">THE CATALYST ADVANTAGE</h2>
            <div className="bg-zinc-900 border border-green-500 p-8">
              <h3 className="text-xl font-bold mb-4">Catalysts don't sell you comfort. They sell you change.</h3>
              <div className="space-y-4 text-zinc-300">
                <p>
                  <strong>Consultants ask:</strong> "What do you think the problem is?"<br />
                  <strong>Catalysts state:</strong> "Here's what's actually broken."
                </p>
                <p>
                  <strong>Consultants suggest:</strong> "You might want to consider..."<br />
                  <strong>Catalysts demand:</strong> "You will decide this by Friday."
                </p>
                <p>
                  <strong>Consultants leave:</strong> "Good luck with implementation!"<br />
                  <strong>Catalysts force:</strong> "We're starting now. Here's your weapon."
                </p>
              </div>
            </div>
          </div>

          {/* Real Examples */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">REAL-WORLD EXAMPLES</h2>
            <div className="space-y-6">
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold mb-3 text-blue-500">SCENARIO: Team Productivity Crisis</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-yellow-500 mb-2">Consultant Response:</h4>
                    <p className="text-sm text-zinc-400">
                      "Let's conduct a comprehensive productivity audit, survey team members, 
                      analyze workflow patterns, and develop a change management strategy."
                    </p>
                    <p className="text-xs text-zinc-500 mt-2">Timeline: 8-12 weeks</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-500 mb-2">Catalyst Response:</h4>
                    <p className="text-sm text-zinc-400">
                      "Your team isn't unproductive - they're avoiding work because you haven't 
                      fired the person everyone knows needs to go. Fire them today."
                    </p>
                    <p className="text-xs text-zinc-500 mt-2">Timeline: 1 conversation</p>
                  </div>
                </div>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold mb-3 text-blue-500">SCENARIO: Strategic Direction Uncertainty</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-yellow-500 mb-2">Consultant Response:</h4>
                    <p className="text-sm text-zinc-400">
                      "We need to gather stakeholder input, analyze market conditions, 
                      review competitive landscape, and facilitate strategic planning workshops."
                    </p>
                    <p className="text-xs text-zinc-500 mt-2">Timeline: 12-16 weeks</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-500 mb-2">Catalyst Response:</h4>
                    <p className="text-sm text-zinc-400">
                      "You know exactly what direction to go - you're just scared to bet everything on it. 
                      Choose by tomorrow or your competitors will choose for you."
                    </p>
                    <p className="text-xs text-zinc-500 mt-2">Timeline: 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="border border-zinc-800 p-8 text-center">
            <h3 className="text-2xl font-black mb-4">Ready to Stop Consulting and Start Catalyzing?</h3>
            <p className="text-zinc-400 mb-6">
              No more analysis. No more planning. Get the confrontational clarity session that forces breakthrough.
            </p>
            <Link 
              href="/weapons/the-naming" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 transition-colors mr-4"
            >
              GET A CATALYST SESSION
            </Link>
            <Link 
              href="/diagnostic" 
              className="inline-block border border-red-500 text-red-500 hover:bg-red-500 hover:text-black font-bold py-3 px-8 transition-colors"
            >
              DIAGNOSE WHAT'S BROKEN
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}