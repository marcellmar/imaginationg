import Head from 'next/head';
import Link from 'next/link';

export default function ClarityRitual() {
  return (
    <>
      <Head>
        <title>The Clarity Ritual: Stop Strategy Theater Forever | IMAGINATION G</title>
        <meta name="description" content="The Clarity Ritual is a recurring, high-voltage system that forces confrontation, not consensus. Your frontline weapon against strategy theater and organizational drift." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "The Clarity Ritual",
              "description": "A recurring system to prevent strategy theater and force organizational movement",
              "totalTime": "PT30M",
              "supply": ["Leadership team", "Binary decision framework", "Accountability system"],
              "tool": ["Timer", "Decision log", "Action tracker"],
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Set the Voltage",
                  "text": "Create time pressure and eliminate escape routes"
                },
                {
                  "@type": "HowToStep", 
                  "name": "Force the Confrontation",
                  "text": "Name what everyone is avoiding"
                },
                {
                  "@type": "HowToStep",
                  "name": "Demand the Decision",
                  "text": "Binary choice with immediate consequences"
                },
                {
                  "@type": "HowToStep",
                  "name": "Lock in Accountability",
                  "text": "Public commitment with specific deadlines"
                }
              ],
              "publisher": {
                "@type": "Organization",
                "name": "IMAGINATION G",
                "url": "https://www.imaginationg.studio"
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
              ← BACK TO ANSWERS
            </Link>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              THE CLARITY RITUAL
            </h1>
            <p className="text-xl text-zinc-400">
              Your frontline weapon against strategy theater
            </p>
          </div>

          {/* Definition */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-red-500">WHAT IS THE CLARITY RITUAL?</h2>
            <div className="border-l-4 border-red-500 pl-6 mb-8">
              <p className="text-lg">
                <strong>The Clarity Ritual</strong> is a recurring, high-voltage pulse that forces confrontation, not consensus. 
                It's your systematic defense against <Link href="/answers/glossary/strategy-theater" className="text-red-500 hover:underline">strategy theater</Link> 
                and <Link href="/answers/glossary/organizational-drift" className="text-red-500 hover:underline">organizational drift</Link>.
              </p>
            </div>
          </div>

          {/* The Problem */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE PROBLEM IT SOLVES</h2>
            <div className="bg-zinc-900 border border-zinc-800 p-8">
              <p className="text-lg mb-4">
                <strong>Strategy theater creeps in slowly.</strong> One "let's schedule another meeting" becomes ten. 
                One "we need more input" becomes perpetual analysis paralysis.
              </p>
              <ul className="space-y-2 text-zinc-400">
                <li>• Teams avoid hard decisions by creating more planning sessions</li>
                <li>• Leaders postpone difficult conversations by demanding more data</li>
                <li>• Organizations choose comfortable consensus over uncomfortable progress</li>
                <li>• Important decisions die in committee while competitors move</li>
              </ul>
            </div>
          </div>

          {/* The Four Phases */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE FOUR PHASES OF THE CLARITY RITUAL</h2>
            
            {/* Phase 1 */}
            <div className="mb-8 border border-red-500 p-8">
              <h3 className="text-2xl font-bold mb-4 text-red-500">PHASE 1: SET THE VOLTAGE</h3>
              <p className="text-lg mb-4">Create time pressure and eliminate escape routes</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3 text-white">Time Constraints:</h4>
                  <ul className="space-y-1 text-sm text-zinc-400">
                    <li>• 30 minutes maximum duration</li>
                    <li>• No extensions, no exceptions</li>
                    <li>• Countdown timer visible to all</li>
                    <li>• Decision deadline announced upfront</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-white">Escape Route Elimination:</h4>
                  <ul className="space-y-1 text-sm text-zinc-400">
                    <li>• Ban "let's table this"</li>
                    <li>• No "we need more research"</li>
                    <li>• Prohibit "let's form a working group"</li>
                    <li>• Eliminate "everyone needs to weigh in"</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="mb-8 border border-yellow-500 p-8">
              <h3 className="text-2xl font-bold mb-4 text-yellow-500">PHASE 2: FORCE THE CONFRONTATION</h3>
              <p className="text-lg mb-4">Name what everyone is avoiding</p>
              
              <div className="space-y-4">
                <div className="border border-zinc-700 p-4">
                  <h4 className="font-bold mb-2 text-yellow-500">The Truth Question:</h4>
                  <p className="text-zinc-300">"What decision are we avoiding and why are we avoiding it?"</p>
                </div>
                <div className="border border-zinc-700 p-4">
                  <h4 className="font-bold mb-2 text-yellow-500">The Fear Question:</h4>
                  <p className="text-zinc-300">"What are we afraid will happen if we decide this today?"</p>
                </div>
                <div className="border border-zinc-700 p-4">
                  <h4 className="font-bold mb-2 text-yellow-500">The Cost Question:</h4>
                  <p className="text-zinc-300">"What is not deciding costing us right now?"</p>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="mb-8 border border-blue-500 p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-500">PHASE 3: DEMAND THE DECISION</h3>
              <p className="text-lg mb-4">Binary choice with immediate consequences</p>
              
              <div className="bg-black border border-zinc-700 p-6 mb-4">
                <h4 className="font-bold mb-3 text-blue-500">The Binary Framework:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-green-500 p-4">
                    <h5 className="font-bold text-green-500 mb-2">YES means:</h5>
                    <p className="text-sm text-zinc-400">Specific action, owner assigned, deadline set</p>
                  </div>
                  <div className="border border-red-500 p-4">
                    <h5 className="font-bold text-red-500 mb-2">NO means:</h5>
                    <p className="text-sm text-zinc-400">Topic is dead, never discussed again</p>
                  </div>
                </div>
              </div>
              
              <div className="border border-zinc-700 p-4">
                <h4 className="font-bold mb-2 text-blue-500">Banned Responses:</h4>
                <ul className="space-y-1 text-sm text-zinc-400">
                  <li>• "It depends"</li>
                  <li>• "Let's explore both options"</li>
                  <li>• "We need more time to think"</li>
                  <li>• "What does everyone else think?"</li>
                </ul>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="mb-8 border border-green-500 p-8">
              <h3 className="text-2xl font-bold mb-4 text-green-500">PHASE 4: LOCK IN ACCOUNTABILITY</h3>
              <p className="text-lg mb-4">Public commitment with specific deadlines</p>
              
              <div className="space-y-4">
                <div className="border border-zinc-700 p-4">
                  <h4 className="font-bold mb-2 text-green-500">Decision Documentation:</h4>
                  <p className="text-sm text-zinc-400 mb-2">Record in real-time:</p>
                  <ul className="space-y-1 text-xs text-zinc-500">
                    <li>• What was decided (exact wording)</li>
                    <li>• Who owns the outcome</li>
                    <li>• Specific deadline for completion</li>
                    <li>• Consequences for missing deadline</li>
                  </ul>
                </div>
                <div className="border border-zinc-700 p-4">
                  <h4 className="font-bold mb-2 text-green-500">Public Commitment:</h4>
                  <p className="text-sm text-zinc-400">Decision owner states publicly: "I commit to [specific action] by [specific date]. If I miss this deadline, [specific consequence]."</p>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Schedule */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">IMPLEMENTATION SCHEDULE</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">WEEKLY RITUAL</h3>
                <p className="text-sm text-zinc-400 mb-3">For teams in active drift</p>
                <ul className="space-y-1 text-xs text-zinc-500">
                  <li>• Same day, same time</li>
                  <li>• 30 minutes maximum</li>
                  <li>• Mandatory attendance</li>
                  <li>• No agenda except decisions</li>
                </ul>
              </div>
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-yellow-500 mb-3">MONTHLY RITUAL</h3>
                <p className="text-sm text-zinc-400 mb-3">For maintenance mode</p>
                <ul className="space-y-1 text-xs text-zinc-500">
                  <li>• Strategic decisions only</li>
                  <li>• Executive team required</li>
                  <li>• No status updates allowed</li>
                  <li>• Decisions only</li>
                </ul>
              </div>
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-green-500 mb-3">EMERGENCY RITUAL</h3>
                <p className="text-sm text-zinc-400 mb-3">When strategy theater emerges</p>
                <ul className="space-y-1 text-xs text-zinc-500">
                  <li>• Called by anyone</li>
                  <li>• 24-hour notice maximum</li>
                  <li>• Single decision focus</li>
                  <li>• Crisis intervention mode</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Warning Signs */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-red-500">WHEN TO TRIGGER AN EMERGENCY RITUAL</h2>
            <div className="bg-red-900 border border-red-500 p-8">
              <h3 className="text-xl font-bold mb-4">Strategy Theater Alert Signals:</h3>
              <ul className="space-y-2 text-zinc-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  Someone suggests "forming a working group"
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  Meeting scheduled to plan another meeting
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  "We need more stakeholder input" for a decision you've discussed 3+ times
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  Framework evaluation session scheduled
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  Anyone says "let's table this for now"
                </li>
              </ul>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">SUCCESS METRICS</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-green-500 p-6">
                <h3 className="font-bold text-green-500 mb-3">LEADING INDICATORS</h3>
                <ul className="space-y-1 text-sm text-zinc-400">
                  <li>• Decisions per ritual session</li>
                  <li>• Time from discussion to decision</li>
                  <li>• Number of "banned phrases" caught</li>
                  <li>• Percentage of binary outcomes</li>
                </ul>
              </div>
              <div className="border border-green-500 p-6">
                <h3 className="font-bold text-green-500 mb-3">LAGGING INDICATORS</h3>
                <ul className="space-y-1 text-sm text-zinc-400">
                  <li>• Strategic initiatives completed</li>
                  <li>• Revenue impact from decisions</li>
                  <li>• Employee engagement scores</li>
                  <li>• Competitive response time</li>
                </ul>
              </div>
            </div>
          </div>

          {/* The IMAGINATION G Way */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE IMAGINATION G CLARITY RITUAL</h2>
            <div className="border border-red-500 p-8">
              <h3 className="text-xl font-bold mb-4">We don't facilitate. We detonate.</h3>
              <p className="text-lg mb-6">
                Our Clarity Ritual isn't a meeting. It's a controlled explosion that forces breakthrough. 
                No consensus-building. No stakeholder alignment. Just confrontational clarity that produces decisions.
              </p>
              <div className="bg-black border border-zinc-700 p-6">
                <h4 className="font-bold mb-2 text-red-500">What We Bring:</h4>
                <ul className="space-y-1 text-sm text-zinc-400">
                  <li>• External pressure that internal teams can't generate</li>
                  <li>• Permission to confront what everyone's avoiding</li>
                  <li>• Binary decision frameworks that eliminate escape routes</li>
                  <li>• Immediate accountability systems that force follow-through</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="border border-zinc-800 p-8 text-center">
            <h3 className="text-2xl font-black mb-4">Ready to Install Your Clarity Ritual?</h3>
            <p className="text-zinc-400 mb-6">
              Stop letting strategy theater kill your momentum. Get the confrontational clarity session that installs your decision-forcing system.
            </p>
            <Link 
              href="/weapons/the-naming" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 transition-colors mr-4"
            >
              INSTALL THE RITUAL
            </Link>
            <Link 
              href="/diagnostic" 
              className="inline-block border border-red-500 text-red-500 hover:bg-red-500 hover:text-black font-bold py-3 px-8 transition-colors"
            >
              DIAGNOSE STRATEGY THEATER
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}