import Head from 'next/head';
import Link from 'next/link';

export default function ConsensusTrap() {
  return (
    <>
      <Head>
        <title>What is the Consensus Trap? | IMAGINATION G</title>
        <meta name="description" content="The Consensus Trap is when the pursuit of agreement systematically destroys truth and prevents optimal decisions. How collective comfort kills individual signal." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DefinedTerm",
              "name": "Consensus Trap",
              "description": "When the pursuit of agreement systematically destroys truth and prevents optimal decisions, making collective comfort more important than individual signal",
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
              THE CONSENSUS TRAP
            </h1>
            <p className="text-xl text-zinc-400">
              How agreement becomes the enemy of truth
            </p>
          </div>

          {/* Definition */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-red-500">DEFINITION</h2>
            <div className="border-l-4 border-red-500 pl-6 mb-8">
              <p className="text-lg">
                <strong>The Consensus Trap</strong> is when the pursuit of agreement systematically destroys truth and prevents optimal decisions. 
                It's the organizational disease that makes collective comfort more important than individual signal.
              </p>
            </div>
          </div>

          {/* The Paradox */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE CONSENSUS PARADOX</h2>
            <div className="bg-zinc-900 border border-zinc-800 p-8">
              <p className="text-lg mb-4">
                <strong>The more people you need to agree, the less likely you are to find truth.</strong>
              </p>
              <p className="text-zinc-400 mb-4">
                Truth is often uncomfortable, polarizing, and demands action. Consensus requires comfort, 
                compromise, and delay. These forces are fundamentally opposed.
              </p>
              <div className="border border-yellow-500 p-4 mt-4">
                <p className="text-sm text-yellow-400">
                  <strong>The Buried Truth:</strong> Organizations pursue consensus not to make better decisions, 
                  but to avoid making decisions at all.
                </p>
              </div>
            </div>
          </div>

          {/* How Consensus Kills Truth */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">HOW CONSENSUS SYSTEMATICALLY KILLS TRUTH</h2>
            <div className="space-y-6">
              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-red-500">STAGE 1: SIGNAL DILUTION</h3>
                <p className="text-zinc-300 mb-3">
                  Individual clarity gets watered down to accommodate everyone's comfort level. 
                  "This customer will never pay" becomes "We should explore pricing strategies."
                </p>
                <p className="text-sm text-zinc-500">
                  Truth killer: Sharp signal becomes fuzzy noise to avoid disagreement.
                </p>
              </div>
              
              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-500">STAGE 2: TRUTH AVERAGING</h3>
                <p className="text-zinc-300 mb-3">
                  Opposing viewpoints get averaged into meaningless compromise. 
                  "This won't work" + "This is perfect" = "This needs some adjustments."
                </p>
                <p className="text-sm text-zinc-500">
                  Truth killer: Reality doesn't average. Either something works or it doesn't.
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-500">STAGE 3: MINORITY SIGNAL SUPPRESSION</h3>
                <p className="text-zinc-300 mb-3">
                  The person with clearest signal gets pressured to "get on board" with group comfort. 
                  Truth becomes "not being collaborative."
                </p>
                <p className="text-sm text-zinc-500">
                  Truth killer: Social pressure overrides factual accuracy.
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-green-500">STAGE 4: COMFORTABLE LIES</h3>
                <p className="text-zinc-300 mb-3">
                  The group settles on a version of reality that makes everyone feel good but solves nothing. 
                  Consensus achieved, truth buried.
                </p>
                <p className="text-sm text-zinc-500">
                  Truth killer: Collective delusion becomes organizational policy.
                </p>
              </div>
            </div>
          </div>

          {/* Why Consensus Appeals to Organizations */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">WHY ORGANIZATIONS CHOOSE CONSENSUS OVER TRUTH</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">PSYCHOLOGICAL SAFETY THEATER</h3>
                <p className="text-sm text-zinc-400">
                  Consensus feels "inclusive" and "respectful." Truth feels "harsh" and "divisive." 
                  Organizations choose feeling good over being right.
                </p>
              </div>
              
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">ACCOUNTABILITY DIFFUSION</h3>
                <p className="text-sm text-zinc-400">
                  If everyone agrees, no one is responsible for failure. 
                  Consensus creates plausible deniability for bad decisions.
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">DECISION AVOIDANCE</h3>
                <p className="text-sm text-zinc-400">
                  Building consensus takes time and postpones difficult choices. 
                  "Getting alignment" becomes a way to delay action indefinitely.
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">LEADERSHIP ABDICATION</h3>
                <p className="text-sm text-zinc-400">
                  Leaders avoid the burden of making tough calls by outsourcing decisions to "the group." 
                  Consensus becomes leadership avoidance.
                </p>
              </div>
            </div>
          </div>

          {/* The Consensus Industrial Complex */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE CONSENSUS INDUSTRIAL COMPLEX</h2>
            <div className="bg-red-900 border border-red-500 p-8">
              <p className="text-lg mb-4">
                Entire industries exist to help organizations avoid truth through consensus-building.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-red-500 mb-3">CONSENSUS PRODUCTS</h3>
                  <ul className="space-y-1 text-sm text-zinc-400">
                    <li>• Facilitation services</li>
                    <li>• Alignment workshops</li>
                    <li>• Stakeholder engagement platforms</li>
                    <li>• Consensus decision-making frameworks</li>
                    <li>• Team building retreats</li>
                    <li>• Collaborative planning tools</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-red-500 mb-3">CONSENSUS RHETORIC</h3>
                  <ul className="space-y-1 text-sm text-zinc-400">
                    <li>• "Let's get everyone on the same page"</li>
                    <li>• "We need buy-in from all stakeholders"</li>
                    <li>• "Consensus drives commitment"</li>
                    <li>• "Inclusive decision-making"</li>
                    <li>• "Building shared understanding"</li>
                    <li>• "Democratic leadership"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* When Consensus Becomes Dangerous */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">WHEN CONSENSUS BECOMES DANGEROUS</h2>
            <div className="space-y-4">
              <div className="border border-yellow-500 p-6">
                <h3 className="font-bold text-yellow-500 mb-3">CRISIS SITUATIONS</h3>
                <p className="text-sm text-zinc-400 mb-2">
                  When urgent action is required, consensus-building kills response speed. 
                  "Let's make sure everyone agrees before we respond to this crisis."
                </p>
                <p className="text-xs text-zinc-600">
                  Reality: Crises don't wait for consensus. Truth doesn't need permission.
                </p>
              </div>
              
              <div className="border border-red-500 p-6">
                <h3 className="font-bold text-red-500 mb-3">EXPERTISE SITUATIONS</h3>
                <p className="text-sm text-zinc-400 mb-2">
                  When one person clearly knows the answer, consensus dilutes expertise with ignorance. 
                  "Let's get input from everyone, including non-experts."
                </p>
                <p className="text-xs text-zinc-600">
                  Reality: Truth isn't democratic. Competence isn't distributed equally.
                </p>
              </div>

              <div className="border border-orange-500 p-6">
                <h3 className="font-bold text-orange-500 mb-3">MORAL SITUATIONS</h3>
                <p className="text-sm text-zinc-400 mb-2">
                  When ethical action is required, consensus can enable wrongdoing. 
                  "Well, if everyone agrees it's okay, then it must be fine."
                </p>
                <p className="text-xs text-zinc-600">
                  Reality: Right and wrong don't depend on agreement.
                </p>
              </div>
            </div>
          </div>

          {/* Consensus Trap Symptoms */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">DETECTING THE CONSENSUS TRAP</h2>
            <div className="space-y-4">
              <div className="border border-yellow-500 p-6">
                <h3 className="font-bold text-yellow-500 mb-3">WARNING SIGNALS</h3>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• "We need everyone to agree before we move forward"</li>
                  <li>• "Let's find a solution that works for everyone"</li>
                  <li>• "We should hear from all stakeholders first"</li>
                  <li>• "Consensus is important for buy-in"</li>
                  <li>• "We need to build alignment across the organization"</li>
                </ul>
              </div>
              
              <div className="border border-red-500 p-6">
                <h3 className="font-bold text-red-500 mb-3">ADVANCED CONSENSUS ADDICTION</h3>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• No decision can be made without group approval</li>
                  <li>• Individual expertise gets overruled by group comfort</li>
                  <li>• Truth-tellers labeled as "not collaborative"</li>
                  <li>• Decisions get delayed indefinitely "building consensus"</li>
                  <li>• Obvious solutions rejected because "not everyone agrees"</li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Hidden Cost of Consensus */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE HIDDEN COST OF CONSENSUS</h2>
            <div className="bg-zinc-900 border border-zinc-800 p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-red-500 mb-3">SPEED COSTS</h3>
                  <ul className="space-y-2 text-zinc-400 text-sm">
                    <li>• Decisions take 10x longer to reach</li>
                    <li>• Opportunities missed while building alignment</li>
                    <li>• Crisis response delayed for group comfort</li>
                    <li>• Market timing lost to consensus timelines</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-red-500 mb-3">QUALITY COSTS</h3>
                  <ul className="space-y-2 text-zinc-400 text-sm">
                    <li>• Best solutions compromised for agreement</li>
                    <li>• Expert knowledge diluted by group opinion</li>
                    <li>• Truth sacrificed for psychological comfort</li>
                    <li>• Optimal choices become suboptimal compromises</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Breaking the Consensus Trap */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-green-500">BREAKING THE CONSENSUS TRAP</h2>
            <p className="text-lg mb-6">
              Escape requires <strong>systematic signal amplification</strong> over group comfort optimization.
            </p>
            <div className="border border-green-500 p-6">
              <h3 className="font-bold mb-3">The Truth-Over-Agreement Protocol:</h3>
              <ol className="space-y-3 text-zinc-300">
                <li>1. <strong>Signal identification:</strong> "Who has the clearest signal on this decision?"</li>
                <li>2. <strong>Consensus prohibition:</strong> "We optimize for truth, not agreement"</li>
                <li>3. <strong>Expertise amplification:</strong> "The person who knows decides"</li>
                <li>4. <strong>Minority signal protection:</strong> "Dissent is data, not disloyalty"</li>
                <li>5. <strong>Comfort rejection:</strong> "If everyone's comfortable, we're probably wrong"</li>
              </ol>
            </div>
          </div>

          {/* The Truth About Leadership */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE BURIED TRUTH ABOUT LEADERSHIP</h2>
            <div className="bg-black border border-zinc-700 p-8">
              <p className="text-lg mb-4 text-red-500">
                Leadership means choosing truth over comfort, not consensus over conflict.
              </p>
              <p className="text-zinc-300 mb-4">
                Real leaders amplify signal even when it's unpopular. They protect truth-tellers, 
                not group feelings. They choose optimal decisions over comfortable agreements.
              </p>
              <p className="text-zinc-400 italic">
                The moment you make consensus the goal, truth becomes the casualty.
              </p>
            </div>
          </div>

          {/* Consensus vs. Consultation */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">CONSENSUS VS. CONSULTATION</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-red-500 p-6">
                <h3 className="font-bold text-red-500 mb-4">CONSENSUS (BROKEN)</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• Everyone must agree before action</li>
                  <li>• Minority signal gets suppressed</li>
                  <li>• Truth gets compromised for comfort</li>
                  <li>• Decisions take forever</li>
                  <li>• No one accountable for outcomes</li>
                  <li>• Optimal solutions avoided</li>
                </ul>
              </div>
              <div className="border border-green-500 p-6">
                <h3 className="font-bold text-green-500 mb-4">CONSULTATION (FUNCTIONAL)</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• Input gathered, one person decides</li>
                  <li>• All signals considered, best amplified</li>
                  <li>• Truth prioritized over comfort</li>
                  <li>• Decisions made quickly</li>
                  <li>• Clear accountability for outcomes</li>
                  <li>• Optimal solutions implemented</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="border border-zinc-800 p-8 text-center">
            <h3 className="text-2xl font-black mb-4">Ready to Choose Truth Over Agreement?</h3>
            <p className="text-zinc-400 mb-6">
              Escape the Consensus Trap. Get the intervention that amplifies signal over group comfort.
            </p>
            <Link 
              href="/weapons/the-naming" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 transition-colors mr-4"
            >
              AMPLIFY TRUTH OVER COMFORT
            </Link>
            <Link 
              href="/diagnostic" 
              className="inline-block border border-red-500 text-red-500 hover:bg-red-500 hover:text-black font-bold py-3 px-8 transition-colors"
            >
              DETECT CONSENSUS ADDICTION
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}