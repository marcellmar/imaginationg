import Head from 'next/head';
import Link from 'next/link';

export default function ClarityCatalyst() {
  return (
    <>
      <Head>
        <title>What is a Clarity Catalyst? | IMAGINATION G</title>
        <meta name="description" content="A Clarity Catalyst forces breakthrough by confronting what you're avoiding. Unlike coaches or consultants, catalysts create chemical reactions that produce immediate change." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DefinedTerm",
              "name": "Clarity Catalyst",
              "description": "A professional who forces breakthrough by confronting what you're avoiding, creating immediate change through confrontational truth-telling",
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
              CLARITY CATALYST
            </h1>
            <p className="text-xl text-zinc-400">
              The human chemical reaction that forces breakthrough
            </p>
          </div>

          {/* Definition */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-red-500">DEFINITION</h2>
            <div className="border-l-4 border-red-500 pl-6 mb-8">
              <p className="text-lg">
                <strong>A Clarity Catalyst</strong> forces breakthrough by confronting what you're avoiding. 
                Unlike coaches or consultants, catalysts create chemical reactions that produce immediate change.
              </p>
            </div>
          </div>

          {/* What Makes a Catalyst Different */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">NOT A COACH. NOT A CONSULTANT. A CATALYST.</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-blue-500 mb-3">COACHES</h3>
                <p className="text-sm text-zinc-400 mb-3">Ask questions</p>
                <p className="text-sm text-zinc-400 mb-3">Guide discovery</p>
                <p className="text-sm text-zinc-400">Support growth</p>
              </div>
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-yellow-500 mb-3">CONSULTANTS</h3>
                <p className="text-sm text-zinc-400 mb-3">Analyze problems</p>
                <p className="text-sm text-zinc-400 mb-3">Recommend solutions</p>
                <p className="text-sm text-zinc-400">Create reports</p>
              </div>
              <div className="border border-red-500 p-6">
                <h3 className="font-bold text-red-500 mb-3">CATALYSTS</h3>
                <p className="text-sm text-zinc-400 mb-3">Force reactions</p>
                <p className="text-sm text-zinc-400 mb-3">Confront truth</p>
                <p className="text-sm text-zinc-400">Create movement</p>
              </div>
            </div>
          </div>

          {/* How Catalysts Work */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">HOW CLARITY CATALYSTS WORK</h2>
            <div className="space-y-6">
              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-red-500">1. IDENTIFY THE LIE</h3>
                <p className="text-zinc-300">
                  What story are you telling yourself about why you're stuck? 
                  A catalyst names the lie everyone's pretending not to see.
                </p>
              </div>
              
              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-500">2. FORCE THE REACTION</h3>
                <p className="text-zinc-300">
                  Catalysts don't facilitate. They confront. They create pressure that makes 
                  continuing the current pattern impossible.
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-green-500">3. PRESCRIBE THE WEAPON</h3>
                <p className="text-zinc-300">
                  No generic advice. Catalysts prescribe specific actions based on your exact 
                  pattern of avoidance and dysfunction.
                </p>
              </div>
            </div>
          </div>

          {/* When You Need a Catalyst */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">WHEN YOU NEED A CLARITY CATALYST</h2>
            <div className="bg-zinc-900 border border-zinc-800 p-8">
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  You've had the same conversation about change for months
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  Your team knows what needs to happen but "can't find time"
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  You're hiring more consultants to analyze problems you already understand
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  Everyone agrees change is needed but no one wants to go first
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  You're burning cash on "strategic initiatives" that never launch
                </li>
              </ul>
            </div>
          </div>

          {/* The IMAGINATION G Approach */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE IMAGINATION G CATALYST APPROACH</h2>
            <div className="border border-red-500 p-8">
              <h3 className="text-xl font-bold mb-4">We don't facilitate. We detonate.</h3>
              <p className="text-lg mb-6">
                Our clarity catalyst sessions force the conversation you've been avoiding. 
                In 60 minutes, we name what's broken, why you're avoiding it, and what weapon you need to fix it.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2 text-red-500">Traditional Approach:</h4>
                  <p className="text-sm text-zinc-400">
                    "Let's explore your feelings about change and build consensus through workshops."
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-green-500">Catalyst Approach:</h4>
                  <p className="text-sm text-zinc-400">
                    "You're lying about being ready for change. Here's what you're really avoiding and here's your weapon."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Catalyst Effect */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE CATALYST EFFECT</h2>
            <div className="space-y-4 text-zinc-300">
              <p>
                <strong>Before Catalyst:</strong> "We need to think more about this strategic direction..."
              </p>
              <p>
                <strong>After Catalyst:</strong> "We're implementing the decision tomorrow. Here's who owns what."
              </p>
              <div className="border-l-4 border-green-500 pl-6 mt-8">
                <p className="text-lg">
                  A catalyst doesn't change your mind. A catalyst makes continuing to avoid the truth impossible.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="border border-zinc-800 p-8 text-center">
            <h3 className="text-2xl font-black mb-4">Ready for the Reaction?</h3>
            <p className="text-zinc-400 mb-6">
              Stop managing the problem. Stop planning the solution. Get the catalyst session that forces breakthrough.
            </p>
            <Link 
              href="/weapons/the-naming" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 transition-colors mr-4"
            >
              BOOK THE NAMING
            </Link>
            <Link 
              href="/diagnostic" 
              className="inline-block border border-red-500 text-red-500 hover:bg-red-500 hover:text-black font-bold py-3 px-8 transition-colors"
            >
              DIAGNOSE YOUR DRIFT FIRST
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}