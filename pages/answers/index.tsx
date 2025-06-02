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
              Your business questions answered. No fluff. No optimization theater. 
              Just brutal truth about what's buried and how to surface it.
            </p>
          </div>

          {/* Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Glossary */}
            <div className="border border-zinc-800 p-8">
              <h2 className="text-2xl font-black mb-4 text-red-500">GLOSSARY</h2>
              <p className="text-zinc-400 mb-6">
                Understand the terminology that matters. We define what others avoid saying.
              </p>
              <div className="space-y-3">
                <Link href="/answers/glossary/organizational-drift" className="block text-sm hover:text-red-500">
                  → What is Organizational Drift?
                </Link>
                <Link href="/answers/glossary/movement-architecture" className="block text-sm hover:text-red-500">
                  → What is Movement Architecture?
                </Link>
                <Link href="/answers/glossary/clarity-catalyst" className="block text-sm hover:text-red-500">
                  → What is a Clarity Catalyst?
                </Link>
                <Link href="/answers/glossary/strategy-theater" className="block text-sm hover:text-red-500">
                  → What is Strategy Theater?
                </Link>
              </div>
            </div>

            {/* Guides */}
            <div className="border border-zinc-800 p-8">
              <h2 className="text-2xl font-black mb-4 text-green-500">GUIDES</h2>
              <p className="text-zinc-400 mb-6">
                Step-by-step breakdowns of how to actually move forward.
              </p>
              <div className="space-y-3">
                <Link href="/answers/guides/clarity-ritual" className="block text-sm hover:text-green-500">
                  → The Clarity Ritual: Stop Strategy Theater Forever
                </Link>
                <Link href="/answers/guides/diagnose-drift" className="block text-sm hover:text-green-500">
                  → How to Diagnose Organizational Drift (Coming Soon)
                </Link>
                <Link href="/answers/guides/30-day-movement" className="block text-sm hover:text-green-500">
                  → The 30-Day Movement Sprint (Coming Soon)
                </Link>
              </div>
            </div>

            {/* Comparisons */}
            <div className="border border-zinc-800 p-8">
              <h2 className="text-2xl font-black mb-4 text-blue-500">COMPARISONS</h2>
              <p className="text-zinc-400 mb-6">
                See the difference between what works and what doesn't.
              </p>
              <div className="space-y-3">
                <Link href="/answers/compare/consultant-vs-catalyst" className="block text-sm hover:text-blue-500">
                  → Consultant vs Catalyst
                </Link>
                <Link href="/answers/compare/planning-vs-movement" className="block text-sm hover:text-blue-500">
                  → Planning vs Movement (Coming Soon)
                </Link>
              </div>
            </div>

            {/* Philosophy */}
            <div className="border border-zinc-800 p-8">
              <h2 className="text-2xl font-black mb-4 text-yellow-500">PHILOSOPHY</h2>
              <p className="text-zinc-400 mb-6">
                The brutal truth about business transformation.
              </p>
              <div className="space-y-3">
                <Link href="/answers/philosophy/why-consulting-fails" className="block text-sm hover:text-yellow-500">
                  → Why Traditional Consulting Fails
                </Link>
                <Link href="/answers/philosophy/movement-manifesto" className="block text-sm hover:text-yellow-500">
                  → The Movement Manifesto
                </Link>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="border border-zinc-800 p-8 text-center">
            <h3 className="text-2xl font-black mb-4">Signal Still Buried?</h3>
            <p className="text-zinc-400 mb-6">
              Detect your signal clarity. Get your prescribed intervention. Stop optimizing and start overriding.
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