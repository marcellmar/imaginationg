import Head from 'next/head';
import Link from 'next/link';

export default function SignalCorruption() {
  return (
    <>
      <Head>
        <title>What is Signal Corruption? | IMAGINATION G</title>
        <meta name="description" content="Signal Corruption is when good people systematically amplify noise to avoid confronting buried truth. The invisible force that turns competent individuals into optimization addicts." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DefinedTerm",
              "name": "Signal Corruption",
              "description": "When good people systematically amplify noise to avoid confronting buried truth, turning competent individuals into optimization addicts",
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
              ← BACK TO ANSWERS
            </Link>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              SIGNAL CORRUPTION
            </h1>
            <p className="text-xl text-zinc-400">
              Why good people amplify noise
            </p>
          </div>

          {/* Definition */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-red-500">DEFINITION</h2>
            <div className="border-l-4 border-red-500 pl-6 mb-8">
              <p className="text-lg">
                <strong>Signal Corruption</strong> is when good people systematically amplify noise to avoid confronting buried truth. 
                It's the invisible force that turns competent individuals into optimization addicts who mistake activity for agency.
              </p>
            </div>
          </div>

          {/* The Hidden Truth */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE BURIED TRUTH</h2>
            <div className="bg-zinc-900 border border-zinc-800 p-8">
              <p className="text-lg mb-4">
                Most business dysfunction isn't caused by bad people or broken systems. 
                It's caused by <strong>good people corrupting signal to avoid psychological discomfort.</strong>
              </p>
              <p className="text-zinc-400">
                They know what needs to happen. They know what's broken. They know who's not performing. 
                But surfacing that signal feels dangerous, so they optimize noise instead.
              </p>
            </div>
          </div>

          {/* How Signal Gets Corrupted */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE CORRUPTION PROCESS</h2>
            <div className="space-y-6">
              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-red-500">STAGE 1: SIGNAL DETECTION</h3>
                <p className="text-zinc-300 mb-3">
                  Someone detects buried truth: "This project will fail," "This person isn't performing," "This strategy won't work."
                </p>
                <p className="text-sm text-zinc-500">
                  The signal is clear, accurate, and actionable.
                </p>
              </div>
              
              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-500">STAGE 2: DISCOMFORT RESPONSE</h3>
                <p className="text-zinc-300 mb-3">
                  The signal carrier feels psychological threat: "What if I'm wrong?" "What if people get upset?" "What if there are consequences?"
                </p>
                <p className="text-sm text-zinc-500">
                  Fear overrides function. Comfort becomes more important than truth.
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-500">STAGE 3: NOISE AMPLIFICATION</h3>
                <p className="text-zinc-300 mb-3">
                  Instead of surfacing signal, they generate noise: "Let's gather more data," "We need stakeholder input," "Let's optimize the process."
                </p>
                <p className="text-sm text-zinc-500">
                  Noise feels productive while avoiding the uncomfortable truth.
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-green-500">STAGE 4: CORRUPTION CRYSTALLIZATION</h3>
                <p className="text-zinc-300 mb-3">
                  The noise becomes institutional. "We need to be thorough," "We value process," "We're data-driven."
                </p>
                <p className="text-sm text-zinc-500">
                  Signal corruption is now the culture. Truth becomes the enemy.
                </p>
              </div>
            </div>
          </div>

          {/* Why Good People Corrupt Signal */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">WHY GOOD PEOPLE CORRUPT SIGNAL</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">PSYCHOLOGICAL SAFETY ADDICTION</h3>
                <p className="text-sm text-zinc-400">
                  They mistake comfort for safety. Truth feels threatening to relationships, 
                  so they choose noise that keeps everyone comfortable and nothing functional.
                </p>
              </div>
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">OUTCOME AVOIDANCE</h3>
                <p className="text-sm text-zinc-400">
                  If you never surface the signal, you never have to deal with consequences. 
                  Noise generation becomes a way to postpone difficult decisions indefinitely.
                </p>
              </div>
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">COMPETENCE THEATER</h3>
                <p className="text-sm text-zinc-400">
                  Generating sophisticated noise (frameworks, analyses, processes) looks like competence. 
                  Simple signal amplification looks too easy, too risky.
                </p>
              </div>
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">INSTITUTIONAL VALIDATION</h3>
                <p className="text-sm text-zinc-400">
                  Organizations reward noise generation (reports, meetings, initiatives) more than 
                  signal amplification (direct truth, binary decisions, function delivery).
                </p>
              </div>
            </div>
          </div>

          {/* The Cost */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE REAL COST OF SIGNAL CORRUPTION</h2>
            <div className="bg-red-900 border border-red-500 p-8">
              <h3 className="text-xl font-bold mb-4 text-red-500">Signal corruption destroys organizations from within</h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <strong>Truth carriers leave:</strong> People who surface signal get labeled "difficult" and marginalized
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <strong>Noise carriers rise:</strong> People who generate sophisticated optimization theater get promoted
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <strong>Function dies:</strong> Nothing real gets delivered because no real decisions get made
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <strong>Agency atrophies:</strong> Teams lose the ability to act on internal signal
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <strong>Competitors override:</strong> While you optimize noise, others amplify signal and win
                </li>
              </ul>
            </div>
          </div>

          {/* Signs of Signal Corruption */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">DETECTING SIGNAL CORRUPTION</h2>
            <div className="space-y-4">
              <div className="border border-yellow-500 p-6">
                <h3 className="font-bold text-yellow-500 mb-3">EARLY WARNING SIGNALS</h3>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• "We need more research" for problems you already understand</li>
                  <li>• "Let's get everyone's input" before obvious decisions</li>
                  <li>• "We should be thorough" when speed is required</li>
                  <li>• "We're being strategic" when you're avoiding action</li>
                  <li>• "Let's optimize this process" instead of killing broken systems</li>
                </ul>
              </div>
              
              <div className="border border-red-500 p-6">
                <h3 className="font-bold text-red-500 mb-3">ADVANCED CORRUPTION</h3>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• Truth-tellers are labeled "not collaborative"</li>
                  <li>• Meetings exist to schedule more meetings</li>
                  <li>• "Data-driven" means "decision-avoiding"</li>
                  <li>• Process improvement becomes permanent process</li>
                  <li>• Everyone knows what's wrong but no one says it</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Breaking Signal Corruption */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-green-500">BREAKING THE CORRUPTION CYCLE</h2>
            <p className="text-lg mb-6">
              Signal corruption can only be broken by <strong>systematic signal amplification</strong> that makes noise generation impossible.
            </p>
            <div className="border border-green-500 p-6">
              <h3 className="font-bold mb-3">The Override Protocol:</h3>
              <ol className="space-y-3 text-zinc-300">
                <li>1. <strong>Name the corruption:</strong> "We're generating noise to avoid this signal: [specific truth]"</li>
                <li>2. <strong>Force binary choice:</strong> "Do we surface this signal or bury it? No optimization allowed."</li>
                <li>3. <strong>Assign signal ownership:</strong> "Who owns amplifying this specific signal to function delivery?"</li>
                <li>4. <strong>Install override deadline:</strong> "Signal gets amplified by [date] or we kill the topic forever."</li>
              </ol>
            </div>
          </div>

          {/* CTA */}
          <div className="border border-zinc-800 p-8 text-center">
            <h3 className="text-2xl font-black mb-4">Ready to Stop Corrupting Signal?</h3>
            <p className="text-zinc-400 mb-6">
              Detect where your organization amplifies noise to avoid truth. Get the intervention that breaks signal corruption cycles.
            </p>
            <Link 
              href="/weapons/the-naming" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 transition-colors mr-4"
            >
              SURFACE BURIED SIGNAL
            </Link>
            <Link 
              href="/diagnostic" 
              className="inline-block border border-red-500 text-red-500 hover:bg-red-500 hover:text-black font-bold py-3 px-8 transition-colors"
            >
              DETECT SIGNAL CORRUPTION
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}