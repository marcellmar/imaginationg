import Head from 'next/head';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import RelatedContent from '../../../components/RelatedContent';

export default function OrganizationalDrift() {
  return (
    <>
      <SEOHead
        title="What is Organizational Drift? | IMAGINATION G"
        description="Organizational drift is signal noise overwhelming buried truth, leading to optimization over override. Learn to detect and amplify signal."
        ogType="article"
        ogImage="/images/og-answers.svg"
        article={{
          publishedTime: "2025-01-01T00:00:00Z",
          author: "IMAGINATION G"
        }}
      />
      
      <Head>
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
            <p className="text-xl text-zinc-400 mb-4">
              Signal noise overwhelming buried truth
            </p>
            <div className="border border-blue-500 p-4">
              <p className="text-sm text-zinc-300">
                📊 <strong>Research-Based Analysis Available:</strong> This page provides a quick overview. 
                For comprehensive research findings, methodology, and case studies, see our 
                <Link href="/answers/glossary/organizational-drift-research" className="text-blue-500 hover:underline">
                  complete research analysis
                </Link> (6,000+ words, peer-reviewed methodology).
              </p>
            </div>
          </div>

          {/* Definition */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-red-500">DEFINITION</h2>
            <div className="border-l-4 border-red-500 pl-6 mb-8">
              <p className="text-lg">
                <strong>Organizational Drift</strong> is signal noise overwhelming buried truth, 
                leading to optimization over override. It's when your team optimizes aesthetics but avoids agency.
              </p>
            </div>
          </div>

          {/* Signs */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">SIGNS YOUR SIGNAL IS BURIED</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">Optimization Theater</h3>
                <p className="text-sm text-zinc-400">
                  Endless optimization sessions that avoid override decisions
                </p>
              </div>
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">Signal Suppression</h3>
                <p className="text-sm text-zinc-400">
                  Calendar full of noise amplification that buries truth
                </p>
              </div>
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">Aesthetics Over Agency</h3>
                <p className="text-sm text-zinc-400">
                  Perfecting appearance instead of amplifying function
                </p>
              </div>
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">Validation Seeking</h3>
                <p className="text-sm text-zinc-400">
                  Avoiding internal signal by outsourcing decisions
                </p>
              </div>
            </div>
          </div>

          {/* Why It Happens */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">WHY SIGNAL GETS BURIED</h2>
            <div className="space-y-4 text-zinc-300">
              <p>
                <strong>Fear of Truth:</strong> Teams choose optimization noise over signal clarity
              </p>
              <p>
                <strong>Lack of Override:</strong> Everything becomes conditional instead of binary
              </p>
              <p>
                <strong>External Validation:</strong> Outsourcing signal to people who don't live with function
              </p>
              <p>
                <strong>Consensus Addiction:</strong> No one owns the signal, so no one amplifies truth
              </p>
            </div>
          </div>

          {/* The Cost */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE REAL COST</h2>
            <div className="bg-zinc-900 border border-zinc-800 p-8">
              <p className="text-lg mb-4">
                Buried signal doesn't just slow you down - it kills function while you optimize aesthetics.
              </p>
              <ul className="space-y-2 text-zinc-400">
                <li>• Top talent leaves for companies that amplify signal</li>
                <li>• Competitors override while you optimize</li>
                <li>• Agency dies in consensus meetings</li>
                <li>• Function stagnates despite aesthetic effort</li>
                <li>• Company culture becomes noise over signal</li>
              </ul>
            </div>
          </div>

          {/* Solution */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-green-500">THE ANTIDOTE</h2>
            <p className="text-lg mb-6">
              <Link href="/answers/glossary/movement-architecture" className="text-green-500 hover:underline">
                Signal Architecture
              </Link> - the systematic amplification of buried truth through override protocols and function delivery.
            </p>
            <div className="border border-green-500 p-6">
              <h3 className="font-bold mb-3">Three Steps to Amplify Signal:</h3>
              <ol className="space-y-2 text-zinc-300">
                <li>1. <strong>Detect:</strong> Identify exactly where signal is buried</li>
                <li>2. <strong>Override:</strong> Make binary choices that surface truth</li>
                <li>3. <strong>Deploy:</strong> Take immediate action with prescribed interventions</li>
              </ol>
            </div>
          </div>

          {/* CTA */}
          <div className="border border-zinc-800 p-8 text-center">
            <h3 className="text-2xl font-black mb-4">Ready to Amplify Signal?</h3>
            <p className="text-zinc-400 mb-6">
              Take our signal detection to see exactly where truth is buried in your organization.
            </p>
            <Link 
              href="/diagnostic" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 transition-colors mr-4"
            >
              DETECT SIGNAL
            </Link>
            <Link 
              href="/answers/glossary/movement-architecture" 
              className="inline-block border border-green-500 text-green-500 hover:bg-green-500 hover:text-black font-bold py-3 px-8 transition-colors"
            >
              LEARN SIGNAL ARCHITECTURE
            </Link>
          </div>
          
          {/* Related Content */}
          <RelatedContent
            title="Continue Your Signal Journey"
            items={[
              {
                href: "/answers/glossary/signal-decay-theory",
                title: "Signal Decay Theory",
                description: "The mathematics of how truth degrades through organizational layers.",
                color: "red"
              },
              {
                href: "/answers/glossary/strategy-theater",
                title: "Strategy Theater",
                description: "Optimization performance without function. The ultimate signal killer.",
                color: "yellow"
              },
              {
                href: "/answers/glossary/clarity-catalyst",
                title: "Clarity Catalyst",
                description: "Human signal amplification. The antidote to organizational drift.",
                color: "green"
              }
            ]}
          />
        </div>
      </div>
    </>
  );
}