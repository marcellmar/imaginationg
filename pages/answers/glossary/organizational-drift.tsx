import Head from 'next/head';
import Link from 'next/link';

export default function OrganizationalDrift() {
  return (
    <>
      <Head>
        <title>What is Organizational Drift? | IMAGINATION G</title>
        <meta name="description" content="Organizational drift is the gradual loss of momentum and purpose in businesses, leading to stagnation despite activity. Learn how to diagnose and stop it." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DefinedTerm",
              "name": "Organizational Drift",
              "description": "The gradual loss of momentum and purpose in businesses, leading to stagnation despite constant activity",
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
              ORGANIZATIONAL DRIFT
            </h1>
            <p className="text-xl text-zinc-400">
              The silent killer of business momentum
            </p>
          </div>

          {/* Definition */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-red-500">DEFINITION</h2>
            <div className="border-l-4 border-red-500 pl-6 mb-8">
              <p className="text-lg">
                <strong>Organizational Drift</strong> is the gradual loss of momentum and purpose in businesses, 
                leading to stagnation despite constant activity. It's when your team is busy but not moving forward.
              </p>
            </div>
          </div>

          {/* Signs */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">SIGNS YOU'RE DRIFTING</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">Strategy Theater</h3>
                <p className="text-sm text-zinc-400">
                  Endless planning sessions that produce documents, not results
                </p>
              </div>
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">Meeting Addiction</h3>
                <p className="text-sm text-zinc-400">
                  Calendar full of status updates that never lead to decisions
                </p>
              </div>
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">Analysis Paralysis</h3>
                <p className="text-sm text-zinc-400">
                  Gathering more data instead of acting on what you already know
                </p>
              </div>
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">Comfort Zone Camping</h3>
                <p className="text-sm text-zinc-400">
                  Avoiding hard decisions by focusing on easy, safe tasks
                </p>
              </div>
            </div>
          </div>

          {/* Why It Happens */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">WHY IT HAPPENS</h2>
            <div className="space-y-4 text-zinc-300">
              <p>
                <strong>Fear of Failure:</strong> Teams choose safe busyness over risky progress
              </p>
              <p>
                <strong>Lack of Binary Decisions:</strong> Everything becomes a "maybe" or "let's discuss more"
              </p>
              <p>
                <strong>Consultant Dependency:</strong> Outsourcing decisions to people who don't live with consequences
              </p>
              <p>
                <strong>Committee Thinking:</strong> No one person owns the outcome, so no one forces movement
              </p>
            </div>
          </div>

          {/* The Cost */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE REAL COST</h2>
            <div className="bg-zinc-900 border border-zinc-800 p-8">
              <p className="text-lg mb-4">
                Organizational drift doesn't just slow you down - it kills your business while you're watching.
              </p>
              <ul className="space-y-2 text-zinc-400">
                <li>• Top talent leaves for companies that actually move</li>
                <li>• Competitors capture market share while you plan</li>
                <li>• Innovation dies in committee meetings</li>
                <li>• Revenue stagnates despite increased effort</li>
                <li>• Company culture becomes cynical and disengaged</li>
              </ul>
            </div>
          </div>

          {/* Solution */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-green-500">THE ANTIDOTE</h2>
            <p className="text-lg mb-6">
              <Link href="/answers/glossary/movement-architecture" className="text-green-500 hover:underline">
                Movement Architecture
              </Link> - the systematic design of organizational transformation through binary decisions and forced progress.
            </p>
            <div className="border border-green-500 p-6">
              <h3 className="font-bold mb-3">Three Steps to Stop Drifting:</h3>
              <ol className="space-y-2 text-zinc-300">
                <li>1. <strong>Diagnose:</strong> Identify exactly where you're stuck</li>
                <li>2. <strong>Decide:</strong> Make binary choices that force movement</li>
                <li>3. <strong>Deploy:</strong> Take immediate action with prescribed weapons</li>
              </ol>
            </div>
          </div>

          {/* CTA */}
          <div className="border border-zinc-800 p-8 text-center">
            <h3 className="text-2xl font-black mb-4">Ready to Stop Drifting?</h3>
            <p className="text-zinc-400 mb-6">
              Take our 60-second diagnostic to see exactly where your organization is stuck.
            </p>
            <Link 
              href="/diagnostic" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 transition-colors mr-4"
            >
              DIAGNOSE YOUR DRIFT
            </Link>
            <Link 
              href="/answers/glossary/movement-architecture" 
              className="inline-block border border-green-500 text-green-500 hover:bg-green-500 hover:text-black font-bold py-3 px-8 transition-colors"
            >
              LEARN MOVEMENT ARCHITECTURE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}