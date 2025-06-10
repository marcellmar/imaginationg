import Head from 'next/head';
import Link from 'next/link';
import LexiconDiagnostic from '../../../components/LexiconDiagnostic';

export default function FunctionAllergy() {
  const functionAllergyQuestions = [
    {
      id: 1,
      question: "Does your organization prioritize process over outcomes?",
      yesText: "PROCESS OBSESSION",
      yesSubtext: "Form over function.",
      noText: "OUTCOME FOCUSED",
      noSubtext: "Function over form."
    },
    {
      id: 2,
      question: "Do people get rewarded for following procedures rather than delivering results?",
      yesText: "PROCEDURE REWARDS",
      yesSubtext: "Compliance over delivery.",
      noText: "RESULT REWARDS",
      noSubtext: "Delivery over compliance."
    },
    {
      id: 3,
      question: "Are working solutions dismissed if they don't follow 'best practices'?",
      yesText: "ORTHODOXY OVER FUNCTION",
      yesSubtext: "Theory trumps reality.",
      noText: "FUNCTION OVER ORTHODOXY",
      noSubtext: "Reality trumps theory."
    },
    {
      id: 4,
      question: "Do teams spend more time planning than building?",
      yesText: "PLANNING ADDICTION",
      yesSubtext: "Preparation over production.",
      noText: "BUILDING FOCUS",
      noSubtext: "Production over preparation."
    },
    {
      id: 5,
      question: "Is 'doing it right' more important than getting it done?",
      yesText: "PERFECTION PARALYSIS",
      yesSubtext: "Perfect over functional.",
      noText: "FUNCTIONAL DELIVERY",
      noSubtext: "Done over perfect."
    }
  ];

  const calculateFunctionAllergyResults = (answers: Record<number, 'yes' | 'no'>) => {
    const yesCount = Object.values(answers).filter(answer => answer === 'yes').length;
    const score = Math.round((yesCount / functionAllergyQuestions.length) * 100);
    
    let severity: 'low' | 'medium' | 'high' | 'critical';
    let title: string;
    let description: string;
    let recommendation: string;
    let interventionUrl: string | undefined;

    if (score <= 20) {
      severity = 'low';
      title = 'Function-First Culture';
      description = 'Your organization prioritizes outcomes over process. Function drives decisions.';
      recommendation = 'Maintain this focus. Guard against process creep as you scale.';
    } else if (score <= 40) {
      severity = 'medium';
      title = 'Early Function Allergy';
      description = 'Some process is starting to trump function. Early correction can prevent full allergy.';
      recommendation = 'Reemphasize outcomes. Simplify processes that block delivery.';
      interventionUrl = '/interventions/first-blood-build';
    } else if (score <= 70) {
      severity = 'high';
      title = 'Active Function Allergy';
      description = 'Process has become more important than outcomes. Function is being systematically rejected.';
      recommendation = 'Emergency function restoration. Kill non-essential processes immediately.';
      interventionUrl = '/interventions/first-blood-build';
    } else {
      severity = 'critical';
      title = 'Terminal Function Allergy';
      description = 'Your organization cannot deliver function. Process theater has completely replaced outcomes.';
      recommendation = 'Complete organizational redesign. Function allergy is terminal without radical intervention.';
      interventionUrl = '/interventions/the-map';
    }

    return { score, severity, title, description, recommendation, interventionUrl };
  };

  return (
    <>
      <Head>
        <title>What is Function Allergy? | IMAGINATION G</title>
        <meta name="description" content="Function Allergy is the organizational immune response against delivering actual outcomes. The systemic rejection of functionality in favor of process, planning, and performance theater." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DefinedTerm",
              "name": "Function Allergy",
              "description": "The organizational immune response against delivering actual outcomes, causing systemic rejection of functionality in favor of process theater",
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
              FUNCTION ALLERGY
            </h1>
            <p className="text-xl text-zinc-400">
              Why organizations reject actual delivery
            </p>
          </div>

          {/* Definition */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-red-500">DEFINITION</h2>
            <div className="border-l-4 border-red-500 pl-6 mb-8">
              <p className="text-lg">
                <strong>Function Allergy</strong> is the organizational immune response against delivering actual outcomes. 
                It's the systemic rejection of functionality in favor of process, planning, and performance theater.
              </p>
            </div>
          </div>

          {/* The Allergic Response */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE ALLERGIC RESPONSE TO FUNCTION</h2>
            <div className="bg-zinc-900 border border-zinc-800 p-8">
              <p className="text-lg mb-4">
                <strong>Organizations develop Function Allergy when actual delivery threatens their comfortable dysfunction.</strong>
              </p>
              <p className="text-zinc-400 mb-4">
                Like a biological allergy, the organization perceives function as a threat and mobilizes 
                its immune system (bureaucracy, process, committees) to reject it.
              </p>
              <div className="border border-yellow-500 p-4 mt-4">
                <p className="text-sm text-yellow-400">
                  <strong>Warning:</strong> Function Allergy is often disguised as "quality control," "risk management," 
                  or "proper process." The organization doesn't recognize it's rejecting what it claims to want.
                </p>
              </div>
            </div>
          </div>

          {/* Allergy Triggers */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">WHAT TRIGGERS FUNCTION ALLERGY</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">SPEED OF DELIVERY</h3>
                <p className="text-sm text-zinc-400 mb-2">
                  Fast function delivery exposes dysfunction. When something ships quickly, 
                  it reveals how much time is wasted on non-functional activities.
                </p>
                <p className="text-xs text-zinc-600">
                  Allergic Response: "This is moving too fast," "We need to slow down," "What about process?"
                </p>
              </div>
              
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">SIMPLICITY OF SOLUTION</h3>
                <p className="text-sm text-zinc-400 mb-2">
                  Simple functional solutions threaten complex organizational structures. 
                  If problems are simple, why do we need so many layers?
                </p>
                <p className="text-xs text-zinc-600">
                  Allergic Response: "It can't be that simple," "We need to consider all factors," "This is too basic."
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">DIRECT ACCOUNTABILITY</h3>
                <p className="text-sm text-zinc-400 mb-2">
                  Function delivery requires someone to own outcomes. This threatens systems 
                  built on shared responsibility and plausible deniability.
                </p>
                <p className="text-xs text-zinc-600">
                  Allergic Response: "We need team consensus," "Everyone should be involved," "Shared ownership."
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">MEASURABLE OUTCOMES</h3>
                <p className="text-sm text-zinc-400 mb-2">
                  Functional delivery produces measurable results. This threatens roles 
                  justified by activity rather than outcomes.
                </p>
                <p className="text-xs text-zinc-600">
                  Allergic Response: "Success is hard to measure," "We need qualitative metrics," "It's about journey."
                </p>
              </div>
            </div>
          </div>

          {/* The Immune System Response */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE ORGANIZATIONAL IMMUNE SYSTEM</h2>
            <div className="space-y-6">
              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-red-500">ANTIBODY 1: PROCESS PROLIFERATION</h3>
                <p className="text-zinc-300 mb-3">
                  When function threatens to emerge, the organization produces more process to contain it. 
                  "We need approval workflows," "This requires review stages," "Let's add checkpoints."
                </p>
                <p className="text-sm text-zinc-500">
                  Function killer: Process becomes more important than outcome.
                </p>
              </div>
              
              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-500">ANTIBODY 2: COMPLEXITY INJECTION</h3>
                <p className="text-zinc-300 mb-3">
                  Simple functional solutions get infected with artificial complexity. 
                  "We need to consider edge cases," "What about scalability?" "This lacks sophistication."
                </p>
                <p className="text-sm text-zinc-500">
                  Function killer: Solution becomes too complex to implement.
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-500">ANTIBODY 3: TIMELINE INFLATION</h3>
                <p className="text-zinc-300 mb-3">
                  Fast function delivery gets delayed by artificial timelines. 
                  "We need time to do this right," "Rush jobs create problems," "Patience is wisdom."
                </p>
                <p className="text-sm text-zinc-500">
                  Function killer: Delivery delayed until momentum dies.
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-green-500">ANTIBODY 4: STAKEHOLDER MULTIPLICATION</h3>
                <p className="text-zinc-300 mb-3">
                  Clear ownership gets diluted with additional stakeholders. 
                  "We need input from everyone," "Who else should be involved?" "What about alignment?"
                </p>
                <p className="text-sm text-zinc-500">
                  Function killer: Too many voices, no clear decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Why Organizations Develop Function Allergy */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">WHY ORGANIZATIONS DEVELOP FUNCTION ALLERGY</h2>
            <div className="bg-red-900 border border-red-500 p-8">
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <strong>Function threatens hierarchy:</strong> Direct delivery bypasses layers of management
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <strong>Function exposes incompetence:</strong> When things work, dysfunction becomes obvious
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <strong>Function requires accountability:</strong> Someone must own outcomes and consequences
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <strong>Function threatens job security:</strong> If problems get solved, what's left to do?
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <strong>Function demands truth:</strong> Working solutions reveal buried signal about what's broken
                </li>
              </ul>
            </div>
          </div>

          {/* Symptoms of Function Allergy */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">DETECTING FUNCTION ALLERGY</h2>
            <div className="space-y-4">
              <div className="border border-yellow-500 p-6">
                <h3 className="font-bold text-yellow-500 mb-3">EARLY WARNING SIGNS</h3>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• "This solution seems too simple" for straightforward problems</li>
                  <li>• "We need to think through all implications" for obvious fixes</li>
                  <li>• "Let's make sure we're not missing anything" before clear action</li>
                  <li>• "What's the long-term strategy?" for immediate tactical needs</li>
                  <li>• "We should involve more stakeholders" for individual decisions</li>
                </ul>
              </div>
              
              <div className="border border-red-500 p-6">
                <h3 className="font-bold text-red-500 mb-3">CHRONIC FUNCTION ALLERGY</h3>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• No project ships without months of "preparation"</li>
                  <li>• Working prototypes get rejected for being "incomplete"</li>
                  <li>• Simple solutions require complex approval processes</li>
                  <li>• "Quality" always requires more time and process</li>
                  <li>• Function delivery is seen as "moving too fast"</li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Cost of Function Allergy */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE COST OF FUNCTION ALLERGY</h2>
            <div className="bg-zinc-900 border border-zinc-800 p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-red-500 mb-3">IMMEDIATE COSTS</h3>
                  <ul className="space-y-2 text-zinc-400 text-sm">
                    <li>• Projects that should take weeks take months</li>
                    <li>• Resources consumed by process instead of delivery</li>
                    <li>• Competitive advantage lost to faster-moving organizations</li>
                    <li>• Customer problems remain unsolved longer</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-red-500 mb-3">SYSTEMIC COSTS</h3>
                  <ul className="space-y-2 text-zinc-400 text-sm">
                    <li>• Function-oriented people leave for healthier organizations</li>
                    <li>• Process-oriented people multiply and reinforce allergy</li>
                    <li>• Innovation dies from complexity and delay</li>
                    <li>• Organization loses ability to respond to reality</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Common Function Allergy Patterns */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">COMMON FUNCTION ALLERGY PATTERNS</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-zinc-800 p-4">
                <h4 className="font-bold text-red-500 mb-2">The "Not Ready" Syndrome</h4>
                <p className="text-xs text-zinc-500">
                  Functional solutions perpetually need "more work" before deployment
                </p>
              </div>
              <div className="border border-zinc-800 p-4">
                <h4 className="font-bold text-red-500 mb-2">The "Consider Everything" Trap</h4>
                <p className="text-xs text-zinc-500">
                  Every functional decision requires analysis of infinite edge cases
                </p>
              </div>
              <div className="border border-zinc-800 p-4">
                <h4 className="font-bold text-red-500 mb-2">The "Perfect Process" Block</h4>
                <p className="text-xs text-zinc-500">
                  Function delivery delayed until ideal process is designed
                </p>
              </div>
              <div className="border border-zinc-800 p-4">
                <h4 className="font-bold text-red-500 mb-2">The "Stakeholder Spiral"</h4>
                <p className="text-xs text-zinc-500">
                  More people keep getting added who need to approve function
                </p>
              </div>
              <div className="border border-zinc-800 p-4">
                <h4 className="font-bold text-red-500 mb-2">The "Scope Creep Immunity"</h4>
                <p className="text-xs text-zinc-500">
                  Simple function gets infected with additional requirements
                </p>
              </div>
              <div className="border border-zinc-800 p-4">
                <h4 className="font-bold text-red-500 mb-2">The "Quality Hostage"</h4>
                <p className="text-xs text-zinc-500">
                  Function held hostage by ever-increasing quality standards
                </p>
              </div>
            </div>
          </div>

          {/* Treating Function Allergy */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-green-500">TREATING FUNCTION ALLERGY</h2>
            <p className="text-lg mb-6">
              Function Allergy requires <strong>systematic exposure therapy</strong> and immune system override.
            </p>
            <div className="border border-green-500 p-6">
              <h3 className="font-bold mb-3">The Function Exposure Protocol:</h3>
              <ol className="space-y-3 text-zinc-300">
                <li>1. <strong>Identify allergic responses:</strong> "We're rejecting function. Why?"</li>
                <li>2. <strong>Override immune system:</strong> "Ship function first, optimize process later"</li>
                <li>3. <strong>Force exposure:</strong> "Deliver one functional outcome every week"</li>
                <li>4. <strong>Document tolerance:</strong> "Track what happens when we ship function"</li>
                <li>5. <strong>Build immunity:</strong> "Function delivery becomes organizational habit"</li>
              </ol>
            </div>
          </div>

          {/* The Truth About Function */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE BURIED TRUTH ABOUT FUNCTION</h2>
            <div className="bg-black border border-zinc-700 p-8">
              <p className="text-lg mb-4 text-red-500">
                Most organizations are allergic to function because function reveals dysfunction.
              </p>
              <p className="text-zinc-300 mb-4">
                When you ship working solutions quickly, it becomes obvious how much organizational 
                activity contributes nothing to outcomes. Function is the enemy of bureaucracy.
              </p>
              <p className="text-zinc-400 italic">
                Organizations that cure Function Allergy become unstoppable. 
                Organizations that don't become irrelevant.
              </p>
            </div>
          </div>

          <LexiconDiagnostic
            lexiconTerm="function allergy"
            questions={functionAllergyQuestions}
            calculateResults={calculateFunctionAllergyResults}
            color="red"
          />

          {/* CTA */}
          <div className="border border-zinc-800 p-8 text-center">
            <h3 className="text-2xl font-black mb-4">Ready to Ship Function?</h3>
            <p className="text-zinc-400 mb-6">
              Cure your Function Allergy. Get the intervention that forces function delivery over process optimization.
            </p>
            <Link 
              href="/interventions/first-blood-build" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 transition-colors mr-4"
            >
              FORCE FUNCTION DELIVERY
            </Link>
            <Link 
              href="/diagnostic" 
              className="inline-block border border-red-500 text-red-500 hover:bg-red-500 hover:text-black font-bold py-3 px-8 transition-colors"
            >
              DETECT FUNCTION ALLERGY
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}