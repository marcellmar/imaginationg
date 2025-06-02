import Head from 'next/head';
import Link from 'next/link';

export default function AnswersHub() {
  return (
    <>
      <Head>
        <title>Business Questions Answered | IMAGINATION G</title>
        <meta name="description" content="Get direct answers to your business questions. No fluff, no optimization theater - just brutal truth about signal amplification, override protocols, and business transformation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "name": "Business Questions Answered",
              "description": "Direct answers to business transformation questions",
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
          {/* Header */}
          <div className="mb-16">
            <Link href="/" className="text-red-500 text-sm font-bold mb-4 block">
              ← BACK TO IMAGINATION G
            </Link>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              ANSWERS
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              Business dysfunction decoded. No MBA speak. No optimization theater. 
              Just buried truths about why organizations fail and how signal gets corrupted.
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-8 mb-16">
            {/* Core Concepts */}
            <div className="border border-zinc-800 p-8">
              <h2 className="text-2xl font-black mb-4 text-red-500">CORE CONCEPTS</h2>
              <p className="text-zinc-400 mb-6">
                The fundamental forces that kill organizations. What others won't tell you.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <Link href="/answers/glossary/signal-corruption" className="block text-sm hover:text-red-500">
                  → Signal Corruption: Why good people amplify noise
                </Link>
                <Link href="/answers/glossary/function-allergy" className="block text-sm hover:text-red-500">
                  → Function Allergy: Why organizations reject delivery
                </Link>
                <Link href="/answers/glossary/aesthetic-addiction" className="block text-sm hover:text-red-500">
                  → Aesthetic Addiction: The optimization drug
                </Link>
                <Link href="/answers/glossary/consensus-trap" className="block text-sm hover:text-red-500">
                  → The Consensus Trap: How agreement kills truth
                </Link>
                <Link href="/answers/glossary/validation-industrial-complex" className="block text-sm hover:text-red-500">
                  → Validation Industrial Complex: The decision avoidance industry
                </Link>
                <Link href="/answers/glossary/agency-deficit-disorder" className="block text-sm hover:text-red-500">
                  → Agency Deficit Disorder: The real pandemic
                </Link>
              </div>
            </div>

            {/* System Dynamics */}
            <div className="border border-zinc-800 p-8">
              <h2 className="text-2xl font-black mb-4 text-yellow-500">SYSTEM DYNAMICS</h2>
              <p className="text-zinc-400 mb-6">
                How dysfunction spreads and truth degrades in organizations.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <Link href="/answers/glossary/signal-decay-theory" className="block text-sm hover:text-yellow-500">
                  → Signal Decay Theory: The mathematics of truth degradation
                </Link>
                <Link href="/answers/glossary/competence-paradox" className="block text-sm hover:text-yellow-500">
                  → The Competence Paradox: Why good people build bad systems
                </Link>
                <Link href="/answers/glossary/organizational-drift" className="block text-sm hover:text-yellow-500">
                  → Organizational Drift: Signal noise overwhelming truth
                </Link>
                <Link href="/answers/glossary/strategy-theater" className="block text-sm hover:text-yellow-500">
                  → Strategy Theater: Optimization performance without function
                </Link>
              </div>
            </div>

            {/* Signal Architecture */}
            <div className="border border-zinc-800 p-8">
              <h2 className="text-2xl font-black mb-4 text-green-500">SIGNAL ARCHITECTURE</h2>
              <p className="text-zinc-400 mb-6">
                How to amplify truth and deliver function in dysfunctional systems.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <Link href="/answers/glossary/movement-architecture" className="block text-sm hover:text-green-500">
                  → Signal Architecture: Truth amplification systems
                </Link>
                <Link href="/answers/glossary/clarity-catalyst" className="block text-sm hover:text-green-500">
                  → Signal Catalyst: Human signal amplification
                </Link>
                <Link href="/answers/guides/clarity-ritual" className="block text-sm hover:text-green-500">
                  → The Signal Ritual: Stop optimization theater forever
                </Link>
              </div>
            </div>
          </div>

          {/* Featured Insights */}
          <div className="mb-16">
            <h2 className="text-3xl font-black mb-8 text-center">BURIED TRUTHS MOST CONSULTANTS WON'T TELL YOU</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-red-500 p-6">
                <h3 className="font-bold text-red-500 mb-3">Why Good People Create Bad Systems</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  The most competent individuals often build the most dysfunctional organizations through complexity bias and dependency creation.
                </p>
                <Link href="/answers/glossary/competence-paradox" className="text-red-500 text-xs hover:underline">
                  → Read The Competence Paradox
                </Link>
              </div>
              
              <div className="border border-yellow-500 p-6">
                <h3 className="font-bold text-yellow-500 mb-3">The Mathematics of Truth Decay</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Truth systematically degrades as it moves through organizational layers. Signal Clarity = Original Truth × (0.7)^n
                </p>
                <Link href="/answers/glossary/signal-decay-theory" className="text-yellow-500 text-xs hover:underline">
                  → Read Signal Decay Theory
                </Link>
              </div>

              <div className="border border-green-500 p-6">
                <h3 className="font-bold text-green-500 mb-3">The Trillion-Dollar Avoidance Industry</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Entire industries exist to help organizations avoid decisions through external validation and consensus building.
                </p>
                <Link href="/answers/glossary/validation-industrial-complex" className="text-green-500 text-xs hover:underline">
                  → Read Validation Industrial Complex
                </Link>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="border border-zinc-800 p-8 text-center">
            <h3 className="text-2xl font-black mb-4">Ready to Surface Buried Truth?</h3>
            <p className="text-zinc-400 mb-6">
              Stop asking why your organization is broken. Start understanding how dysfunction actually works. Detect your signal patterns and get targeted interventions.
            </p>
            <Link 
              href="/diagnostic" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 transition-colors"
            >
              DETECT SIGNAL
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}