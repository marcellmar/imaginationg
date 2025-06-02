import Head from 'next/head';
import Link from 'next/link';

export default function AestheticAddiction() {
  return (
    <>
      <Head>
        <title>What is Aesthetic Addiction? | IMAGINATION G</title>
        <meta name="description" content="Aesthetic Addiction is the compulsive optimization of appearance over function. The business drug that makes teams choose looking right over being right." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DefinedTerm",
              "name": "Aesthetic Addiction",
              "description": "The compulsive optimization of appearance over function, making teams choose looking right over being right",
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
              AESTHETIC ADDICTION
            </h1>
            <p className="text-xl text-zinc-400">
              The optimization drug that kills function
            </p>
          </div>

          {/* Definition */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-red-500">DEFINITION</h2>
            <div className="border-l-4 border-red-500 pl-6 mb-8">
              <p className="text-lg">
                <strong>Aesthetic Addiction</strong> is the compulsive optimization of appearance over function. 
                It's the business drug that makes teams choose looking right over being right, form over function, process over outcome.
              </p>
            </div>
          </div>

          {/* The Drug Effect */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">WHY AESTHETICS ARE ADDICTIVE</h2>
            <div className="bg-zinc-900 border border-zinc-800 p-8">
              <p className="text-lg mb-4">
                <strong>Aesthetics provide immediate psychological reward without functional risk.</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="border border-green-500 p-4">
                  <h3 className="font-bold text-green-500 mb-2">AESTHETIC HIGH</h3>
                  <ul className="space-y-1 text-sm text-zinc-400">
                    <li>• Immediate visual satisfaction</li>
                    <li>• Social approval from peers</li>
                    <li>• Sense of progress without delivery</li>
                    <li>• Control over appearance</li>
                    <li>• No risk of functional failure</li>
                  </ul>
                </div>
                <div className="border border-red-500 p-4">
                  <h3 className="font-bold text-red-500 mb-2">FUNCTION CRASH</h3>
                  <ul className="space-y-1 text-sm text-zinc-400">
                    <li>• Delayed or no delivery</li>
                    <li>• Reality doesn't match appearance</li>
                    <li>• Customers get aesthetic, not value</li>
                    <li>• Resources consumed without outcome</li>
                    <li>• Need more aesthetic fixes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Addiction Progression */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE ADDICTION PROGRESSION</h2>
            <div className="space-y-6">
              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-500">STAGE 1: FIRST HIT</h3>
                <p className="text-zinc-300 mb-3">
                  "Let's make this presentation look more professional." The aesthetic improvement gets praise. 
                  The dopamine hit from visual approval feels better than the anxiety of function delivery.
                </p>
                <p className="text-sm text-zinc-500">
                  Gateway drug: choosing format over content.
                </p>
              </div>
              
              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-500">STAGE 2: TOLERANCE BUILD</h3>
                <p className="text-zinc-300 mb-3">
                  Simple aesthetic fixes no longer satisfy. Need more complex optimization: better processes, 
                  cleaner frameworks, more sophisticated analyses. Function becomes secondary to form.
                </p>
                <p className="text-sm text-zinc-500">
                  Escalation: choosing process perfection over outcome delivery.
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-orange-500">STAGE 3: FUNCTIONAL DENIAL</h3>
                <p className="text-zinc-300 mb-3">
                  "Quality matters." "We need to do this right." "Process ensures success." 
                  Function becomes the enemy of aesthetics. Delivery deadlines become "arbitrary pressure."
                </p>
                <p className="text-sm text-zinc-500">
                  Rationalization: aesthetic obsession disguised as professionalism.
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-red-500">STAGE 4: CHRONIC ADDICTION</h3>
                <p className="text-zinc-300 mb-3">
                  The organization exists to optimize aesthetics. Function delivery is seen as "moving too fast" 
                  or "not considering all factors." Reality becomes the enemy of the aesthetic vision.
                </p>
                <p className="text-sm text-zinc-500">
                  Terminal stage: form has completely consumed function.
                </p>
              </div>
            </div>
          </div>

          {/* Common Aesthetic Drugs */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">COMMON AESTHETIC DRUGS</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">PRESENTATION PORN</h3>
                <p className="text-sm text-zinc-400 mb-2">
                  Obsessing over slide design, color schemes, font choices instead of message clarity or decision forcing.
                </p>
                <p className="text-xs text-zinc-600">
                  Drug hit: "This looks so professional." Function cost: Message gets buried in aesthetics.
                </p>
              </div>
              
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">PROCESS PERFECTION</h3>
                <p className="text-sm text-zinc-400 mb-2">
                  Endless optimization of workflows, procedures, frameworks instead of using imperfect processes to deliver function.
                </p>
                <p className="text-xs text-zinc-600">
                  Drug hit: "Our process is bulletproof." Function cost: Nothing ships while optimizing.
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">FRAMEWORK FETISH</h3>
                <p className="text-sm text-zinc-400 mb-2">
                  Collecting and implementing business frameworks for their intellectual elegance rather than practical utility.
                </p>
                <p className="text-xs text-zinc-600">
                  Drug hit: "We're so sophisticated." Function cost: Complexity kills execution.
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">BRAND OBSESSION</h3>
                <p className="text-sm text-zinc-400 mb-2">
                  Prioritizing visual identity, messaging consistency, brand guidelines over product utility or customer value.
                </p>
                <p className="text-xs text-zinc-600">
                  Drug hit: "We look amazing." Function cost: Beautiful packaging, broken product.
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">MEETING THEATER</h3>
                <p className="text-sm text-zinc-400 mb-2">
                  Choreographing perfect meetings with agendas, formats, facilitation instead of having necessary conversations.
                </p>
                <p className="text-xs text-zinc-600">
                  Drug hit: "That was well-run." Function cost: No decisions made, no problems solved.
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">DATA VISUALIZATION ADDICTION</h3>
                <p className="text-sm text-zinc-400 mb-2">
                  Creating beautiful dashboards, charts, reports instead of acting on the data you already have.
                </p>
                <p className="text-xs text-zinc-600">
                  Drug hit: "This tells the story perfectly." Function cost: Analysis paralysis, no action.
                </p>
              </div>
            </div>
          </div>

          {/* Why Organizations Enable Aesthetic Addiction */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">WHY ORGANIZATIONS ENABLE THE ADDICTION</h2>
            <div className="bg-red-900 border border-red-500 p-8">
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <strong>Aesthetic effort is visible:</strong> Stakeholders can see process improvements, presentations, frameworks
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <strong>Function delivery is invisible:</strong> Real work happens behind the scenes, gets no recognition
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <strong>Aesthetics feel safe:</strong> You can't fail at making something look good
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <strong>Function carries risk:</strong> Delivering actual outcomes exposes you to judgment
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <strong>Aesthetic addiction looks professional:</strong> Optimization theater masquerades as competence
                </li>
              </ul>
            </div>
          </div>

          {/* Aesthetic Addiction Signs */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">DETECTING AESTHETIC ADDICTION</h2>
            <div className="space-y-4">
              <div className="border border-yellow-500 p-6">
                <h3 className="font-bold text-yellow-500 mb-3">BEHAVIORAL SIGNS</h3>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• Teams spend more time discussing format than content</li>
                  <li>• Deadlines get missed because "it's not ready" (aesthetically)</li>
                  <li>• "Let's make this more polished" becomes default response</li>
                  <li>• Functional prototypes get rejected for being "too rough"</li>
                  <li>• Process improvement becomes permanent activity</li>
                </ul>
              </div>
              
              <div className="border border-red-500 p-6">
                <h3 className="font-bold text-red-500 mb-3">ORGANIZATIONAL SYMPTOMS</h3>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• Beautiful presentations, no decisions</li>
                  <li>• Perfect processes, no outcomes</li>
                  <li>• Sophisticated frameworks, simple problems unsolved</li>
                  <li>• Award-winning creative, failing business metrics</li>
                  <li>• Everyone busy optimizing, nothing shipped</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Breaking Aesthetic Addiction */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-green-500">BREAKING AESTHETIC ADDICTION</h2>
            <p className="text-lg mb-6">
              Aesthetic addiction can only be broken by <strong>forcing function delivery over form optimization</strong>.
            </p>
            <div className="border border-green-500 p-6">
              <h3 className="font-bold mb-3">The Function-First Protocol:</h3>
              <ol className="space-y-3 text-zinc-300">
                <li>1. <strong>Function deadline first:</strong> "This must deliver [specific outcome] by [date]"</li>
                <li>2. <strong>Aesthetic prohibition:</strong> "No optimization allowed until function is delivered"</li>
                <li>3. <strong>Ship ugly early:</strong> "Functional and ugly beats beautiful and broken"</li>
                <li>4. <strong>Aesthetic rationing:</strong> "10% time for aesthetics, 90% for function"</li>
                <li>5. <strong>Function accountability:</strong> "Success measured by outcome delivery, not appearance"</li>
              </ol>
            </div>
          </div>

          {/* The Truth About Aesthetics */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE BURIED TRUTH ABOUT AESTHETICS</h2>
            <div className="bg-black border border-zinc-700 p-8">
              <p className="text-lg mb-4 text-red-500">
                Most aesthetic obsession is fear disguised as professionalism.
              </p>
              <p className="text-zinc-300">
                People optimize appearance because they're afraid their function isn't good enough. 
                They choose form over function because functional failure feels more threatening than aesthetic criticism.
              </p>
              <p className="text-zinc-400 mt-4 italic">
                The truth: Function that works is more beautiful than form that doesn't.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="border border-zinc-800 p-8 text-center">
            <h3 className="text-2xl font-black mb-4">Ready to Choose Function Over Form?</h3>
            <p className="text-zinc-400 mb-6">
              Break your aesthetic addiction. Get the intervention that forces function delivery over optimization theater.
            </p>
            <Link 
              href="/weapons/first-blood-build" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 transition-colors mr-4"
            >
              SHIP FUNCTION FIRST
            </Link>
            <Link 
              href="/diagnostic" 
              className="inline-block border border-red-500 text-red-500 hover:bg-red-500 hover:text-black font-bold py-3 px-8 transition-colors"
            >
              DETECT AESTHETIC ADDICTION
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}