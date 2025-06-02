import Head from 'next/head';
import Link from 'next/link';

export default function CompetenceParadox() {
  return (
    <>
      <Head>
        <title>What is the Competence Paradox? | IMAGINATION G</title>
        <meta name="description" content="The Competence Paradox explains why the most skilled individuals often create the most dysfunctional systems. How individual excellence becomes organizational dysfunction." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DefinedTerm",
              "name": "Competence Paradox",
              "description": "Why the most skilled individuals often create the most dysfunctional systems, turning individual excellence into organizational dysfunction",
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
              THE COMPETENCE PARADOX
            </h1>
            <p className="text-xl text-zinc-400">
              Why good people build bad systems
            </p>
          </div>

          {/* Definition */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-red-500">DEFINITION</h2>
            <div className="border-l-4 border-red-500 pl-6 mb-8">
              <p className="text-lg">
                <strong>The Competence Paradox</strong> explains why the most skilled individuals often create the most dysfunctional systems. 
                It's how individual excellence becomes organizational dysfunction through competence-driven complexity.
              </p>
            </div>
          </div>

          {/* The Paradox */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE CORE PARADOX</h2>
            <div className="bg-zinc-900 border border-zinc-800 p-8">
              <p className="text-lg mb-4">
                <strong>The better someone is at solving problems, the more complex problems they create for others.</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-green-500 p-4">
                  <h3 className="font-bold text-green-500 mb-2">INDIVIDUAL LEVEL</h3>
                  <ul className="space-y-1 text-sm text-zinc-400">
                    <li>• Brilliant problem solver</li>
                    <li>• Can handle complexity easily</li>
                    <li>• Sees sophisticated solutions</li>
                    <li>• Operates at high cognitive level</li>
                    <li>• Extremely capable</li>
                  </ul>
                </div>
                <div className="border border-red-500 p-4">
                  <h3 className="font-bold text-red-500 mb-2">SYSTEM LEVEL</h3>
                  <ul className="space-y-1 text-sm text-zinc-400">
                    <li>• Creates complex dependencies</li>
                    <li>• Builds systems only they understand</li>
                    <li>• Makes others feel incompetent</li>
                    <li>• Becomes single point of failure</li>
                    <li>• Organizationally destructive</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* How Competence Creates Dysfunction */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">HOW COMPETENCE CREATES DYSFUNCTION</h2>
            <div className="space-y-6">
              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-red-500">COMPLEXITY BIAS</h3>
                <p className="text-zinc-300 mb-3">
                  Competent people can handle complexity, so they don't simplify for others. 
                  They build systems that showcase their sophistication rather than solve problems simply.
                </p>
                <p className="text-sm text-zinc-500">
                  "Anyone should be able to understand this advanced framework I created."
                </p>
              </div>
              
              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-500">CURSE OF KNOWLEDGE</h3>
                <p className="text-zinc-300 mb-3">
                  They can't remember what it's like to not know what they know. 
                  They design for their own cognitive level, not for others.
                </p>
                <p className="text-sm text-zinc-500">
                  "This is obvious. Why can't everyone else see it?"
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-500">OPTIMIZATION OBSESSION</h3>
                <p className="text-zinc-300 mb-3">
                  They see inefficiencies everywhere and fix them with increasingly sophisticated solutions. 
                  Simple becomes complex in pursuit of perfection.
                </p>
                <p className="text-sm text-zinc-500">
                  "We could make this 15% more efficient with this new system..."
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-green-500">DEPENDENCY CREATION</h3>
                <p className="text-zinc-300 mb-3">
                  Their solutions require their continued involvement. 
                  They become indispensable while making everyone else dependent.
                </p>
                <p className="text-sm text-zinc-500">
                  "Just ask Sarah - she built the system, she'll know."
                </p>
              </div>
            </div>
          </div>

          {/* Types of Competence-Driven Dysfunction */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">COMPETENCE DYSFUNCTION PATTERNS</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">THE ARCHITECT</h3>
                <p className="text-sm text-zinc-400 mb-2">
                  Builds elegant, sophisticated systems that only they can maintain. 
                  Creates beautiful complexity that cripples the organization.
                </p>
                <p className="text-xs text-zinc-600">
                  Signal: "This is a masterpiece of engineering." Reality: No one else can touch it.
                </p>
              </div>
              
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">THE OPTIMIZER</h3>
                <p className="text-sm text-zinc-400 mb-2">
                  Constantly improves processes to theoretical perfection. 
                  Makes simple tasks require advanced degrees to understand.
                </p>
                <p className="text-xs text-zinc-600">
                  Signal: "This is 23% more efficient." Reality: It takes 300% longer to learn.
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">THE FRAMEWORK BUILDER</h3>
                <p className="text-sm text-zinc-400 mb-2">
                  Creates comprehensive methodologies for everything. 
                  Turns intuitive decisions into complex analytical processes.
                </p>
                <p className="text-xs text-zinc-600">
                  Signal: "This covers all edge cases." Reality: Simple becomes impossible.
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">THE PERFECTIONIST</h3>
                <p className="text-sm text-zinc-400 mb-2">
                  Sets quality standards so high that nothing ever ships. 
                  Makes "good enough" feel like failure.
                </p>
                <p className="text-xs text-zinc-600">
                  Signal: "This isn't ready yet." Reality: It never will be.
                </p>
              </div>
            </div>
          </div>

          {/* Why Organizations Enable This */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">WHY ORGANIZATIONS ENABLE COMPETENCE DYSFUNCTION</h2>
            <div className="bg-red-900 border border-red-500 p-8">
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <strong>Competence looks like leadership:</strong> Sophisticated solutions appear more professional
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <strong>Complexity intimidates criticism:</strong> Who argues with the expert's complex solution?
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <strong>Dependencies create security:</strong> Complex systems need the creator around
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <strong>Excellence addiction:</strong> Organizations mistake complexity for quality
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <strong>Simplicity looks amateur:</strong> Simple solutions seem "too easy" to be good
                </li>
              </ul>
            </div>
          </div>

          {/* The Hidden Costs */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE HIDDEN COSTS OF COMPETENCE DYSFUNCTION</h2>
            <div className="bg-zinc-900 border border-zinc-800 p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-red-500 mb-3">IMMEDIATE COSTS</h3>
                  <ul className="space-y-2 text-zinc-400 text-sm">
                    <li>• Others become dependent and demoralized</li>
                    <li>• Simple tasks become complex procedures</li>
                    <li>• Knowledge becomes hoarded, not shared</li>
                    <li>• Innovation dies from intimidation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-red-500 mb-3">SYSTEMIC COSTS</h3>
                  <ul className="space-y-2 text-zinc-400 text-sm">
                    <li>• Organization can't function without key people</li>
                    <li>• Complexity compounds until nothing works</li>
                    <li>• Team capability atrophies from dependence</li>
                    <li>• Competent people leave from frustration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Breaking the Competence Paradox */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-green-500">BREAKING THE COMPETENCE PARADOX</h2>
            <p className="text-lg mb-6">
              The solution requires <strong>competence constraint</strong> and systematic simplification protocols.
            </p>
            <div className="border border-green-500 p-6">
              <h3 className="font-bold mb-3">The Competence Constraint Protocol:</h3>
              <ol className="space-y-3 text-zinc-300">
                <li>1. <strong>Simplicity mandate:</strong> Solutions must be explainable to a 12-year-old</li>
                <li>2. <strong>Handoff requirement:</strong> Creator must teach solution to least technical person</li>
                <li>3. <strong>Dependency prohibition:</strong> No system can require original creator to operate</li>
                <li>4. <strong>Complexity tax:</strong> Each additional component requires explicit justification</li>
                <li>5. <strong>Function over sophistication:</strong> Working simply beats elegant complexity</li>
              </ol>
            </div>
          </div>

          {/* The Truth About Competence */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE BURIED TRUTH ABOUT COMPETENCE</h2>
            <div className="bg-black border border-zinc-700 p-8">
              <p className="text-lg mb-4 text-red-500">
                True competence is making complex things simple, not making simple things complex.
              </p>
              <p className="text-zinc-300 mb-4">
                The most competent person in the room should be able to explain their solution 
                so clearly that everyone else can understand and improve it. Competence that creates 
                dependency is actually organizational incompetence.
              </p>
              <p className="text-zinc-400 italic">
                The highest form of competence is making yourself unnecessary.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="border border-zinc-800 p-8 text-center">
            <h3 className="text-2xl font-black mb-4">Ready to Constrain Competence?</h3>
            <p className="text-zinc-400 mb-6">
              Break the competence dysfunction cycle. Get the intervention that turns individual excellence into organizational capability.
            </p>
            <Link 
              href="/weapons/the-naming" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 transition-colors mr-4"
            >
              CONSTRAIN COMPLEXITY
            </Link>
            <Link 
              href="/diagnostic" 
              className="inline-block border border-red-500 text-red-500 hover:bg-red-500 hover:text-black font-bold py-3 px-8 transition-colors"
            >
              DETECT COMPETENCE DYSFUNCTION
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}