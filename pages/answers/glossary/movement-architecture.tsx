import Head from 'next/head';
import Link from 'next/link';

export default function MovementArchitecture() {
  return (
    <>
      <Head>
        <title>What is Movement Architecture? | IMAGINATION G</title>
        <meta name="description" content="Movement Architecture is the systematic design of organizational transformation through binary decisions and forced progress. Learn how it stops drift and creates momentum." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DefinedTerm",
              "name": "Movement Architecture",
              "description": "The systematic design of organizational transformation through binary decisions and forced progress",
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
              MOVEMENT ARCHITECTURE
            </h1>
            <p className="text-xl text-zinc-400">
              The antidote to organizational drift
            </p>
          </div>

          {/* Definition */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-green-500">DEFINITION</h2>
            <div className="border-l-4 border-green-500 pl-6 mb-8">
              <p className="text-lg">
                <strong>Movement Architecture</strong> is the systematic design of organizational transformation 
                through binary decisions and forced progress. It's how you build momentum instead of just staying busy.
              </p>
            </div>
          </div>

          {/* Core Principles */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">CORE PRINCIPLES</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-green-500 mb-3">Binary Decisions</h3>
                <p className="text-sm text-zinc-400">
                  Every choice is YES or NO. No "maybe," no "let's circle back," no committee votes.
                </p>
              </div>
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-green-500 mb-3">Forced Progress</h3>
                <p className="text-sm text-zinc-400">
                  Systems that make standing still impossible. Motion becomes the default state.
                </p>
              </div>
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-green-500 mb-3">Confrontational Clarity</h3>
                <p className="text-sm text-zinc-400">
                  Brutal honesty about what's broken, who's responsible, and what must change immediately.
                </p>
              </div>
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-green-500 mb-3">Prescribed Weapons</h3>
                <p className="text-sm text-zinc-400">
                  Specific tools deployed based on your exact problem, not generic "best practices."
                </p>
              </div>
            </div>
          </div>

          {/* The Framework */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE FRAMEWORK</h2>
            <div className="space-y-8">
              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-4 text-red-500">1. DIAGNOSE</h3>
                <p className="text-zinc-300 mb-4">
                  Identify exactly where your organization is stuck. No sugarcoating, no diplomatic language.
                </p>
                <div className="text-sm text-zinc-500">
                  Tools: <Link href="/diagnostic" className="text-red-500 hover:underline">Drift Diagnostic</Link>, 
                  <Link href="/weapons/the-naming" className="text-red-500 hover:underline ml-2">The Naming</Link>
                </div>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-4 text-yellow-500">2. DECIDE</h3>
                <p className="text-zinc-300 mb-4">
                  Make binary choices that eliminate drift patterns. Cut off escape routes back to comfortable inaction.
                </p>
                <div className="text-sm text-zinc-500">
                  Tools: <Link href="/weapons/the-map" className="text-yellow-500 hover:underline">The Map</Link>, 
                  Binary Decision Frameworks
                </div>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-4 text-green-500">3. DEPLOY</h3>
                <p className="text-zinc-300 mb-4">
                  Execute with prescribed weapons designed for your specific pattern of dysfunction.
                </p>
                <div className="text-sm text-zinc-500">
                  Tools: <Link href="/weapons/thirty-day-drift-break" className="text-green-500 hover:underline">30-Day Drift Break</Link>, 
                  <Link href="/weapons/first-blood-build" className="text-green-500 hover:underline ml-2">First Blood Build</Link>
                </div>
              </div>
            </div>
          </div>

          {/* vs Traditional Approaches */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">VS. TRADITIONAL CONSULTING</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-red-500 p-6">
                <h3 className="font-bold text-red-500 mb-4">TRADITIONAL CONSULTING</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• Assessment → Strategy → Implementation</li>
                  <li>• 3-6 month planning phases</li>
                  <li>• Consensus-building workshops</li>
                  <li>• "Change management" theater</li>
                  <li>• Risk mitigation focus</li>
                  <li>• Generic best practices</li>
                </ul>
              </div>
              <div className="border border-green-500 p-6">
                <h3 className="font-bold text-green-500 mb-4">MOVEMENT ARCHITECTURE</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• Diagnose → Decide → Deploy</li>
                  <li>• 1-week decision cycles</li>
                  <li>• Binary choice frameworks</li>
                  <li>• Confrontational catalyst sessions</li>
                  <li>• Momentum amplification focus</li>
                  <li>• Prescribed, specific weapons</li>
                </ul>
              </div>
            </div>
          </div>

          {/* When You Need It */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">WHEN YOU NEED MOVEMENT ARCHITECTURE</h2>
            <div className="bg-zinc-900 border border-zinc-800 p-8">
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  Your team is busy but nothing meaningful is getting done
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  Meetings produce more meetings instead of decisions
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  "Strategic initiatives" have been in progress for months with no visible results
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  You're losing talent to competitors who move faster
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  Previous consultants left you with beautiful documents and no actual change
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="border border-zinc-800 p-8 text-center">
            <h3 className="text-2xl font-black mb-4">Ready to Build Movement Architecture?</h3>
            <p className="text-zinc-400 mb-6">
              Start with diagnosis. Get your prescribed weapon. Begin moving in 48 hours.
            </p>
            <Link 
              href="/diagnostic" 
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 transition-colors mr-4"
            >
              DIAGNOSE YOUR DRIFT
            </Link>
            <Link 
              href="/ig-complete-flow" 
              className="inline-block border border-green-500 text-green-500 hover:bg-green-500 hover:text-black font-bold py-3 px-8 transition-colors"
            >
              SEE THE COMPLETE FLOW
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}