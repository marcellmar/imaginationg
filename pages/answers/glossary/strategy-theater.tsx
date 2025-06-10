import Head from 'next/head';
import Link from 'next/link';
import LexiconDiagnostic from '../../../components/LexiconDiagnostic';

export default function StrategyTheater() {
  const strategyTheaterQuestions = [
    {
      id: 1,
      question: "Do you spend more time planning than executing?",
      yesText: "PLANNING ADDICTION",
      yesSubtext: "Analysis over action.",
      noText: "EXECUTION FOCUSED",
      noSubtext: "Action over analysis."
    },
    {
      id: 2,
      question: "Do strategy sessions rarely result in immediate next steps?",
      yesText: "DISCUSSION THEATER",
      yesSubtext: "Talk without commitment.",
      noText: "ACTION MEETINGS",
      noSubtext: "Every meeting ends with moves."
    },
    {
      id: 3,
      question: "Are your frameworks more complex than your results?",
      yesText: "FRAMEWORK FETISH",
      yesSubtext: "Process over progress.",
      noText: "SIMPLE SYSTEMS",
      noSubtext: "Results over process."
    },
    {
      id: 4,
      question: "Do you create strategies but struggle with implementation?",
      yesText: "EXECUTION GAP",
      yesSubtext: "Plans without power.",
      noText: "SEAMLESS FLOW",
      noSubtext: "Strategy becomes reality."
    },
    {
      id: 5,
      question: "Do consultants create more presentations than internal teams create value?",
      yesText: "CONSULTANT THEATER",
      yesSubtext: "Outsourced thinking.",
      noText: "INTERNAL VELOCITY",
      noSubtext: "Team owns strategy."
    }
  ];

  const calculateTheaterResults = (answers: Record<number, 'yes' | 'no'>) => {
    const yesCount = Object.values(answers).filter(answer => answer === 'yes').length;
    const score = Math.round((yesCount / strategyTheaterQuestions.length) * 100);
    
    let severity: 'low' | 'medium' | 'high' | 'critical';
    let title: string;
    let description: string;
    let recommendation: string;
    let interventionUrl: string | undefined;

    if (score <= 20) {
      severity = 'low';
      title = 'Action-Oriented Culture';
      description = 'Your organization maintains strong execution discipline. Strategy serves action, not the reverse.';
      recommendation = 'Maintain this discipline. Watch for strategy creep during growth phases.';
    } else if (score <= 40) {
      severity = 'medium';
      title = 'Planning Bias Emerging';
      description = 'Some strategy theater is creeping in. Still manageable but needs attention.';
      recommendation = 'Reduce meeting duration, increase action requirements. Every strategy session must end with concrete next steps.';
      interventionUrl = '/interventions/first-blood-build';
    } else if (score <= 70) {
      severity = 'high';
      title = 'Strategy Theater Infection';
      description = 'Planning has become a substitute for action. Your organization is stuck in discussion loops.';
      recommendation = 'Immediate execution discipline required. Kill all strategy sessions for 30 days. Focus on shipping.';
      interventionUrl = '/interventions/first-blood-build';
    } else {
      severity = 'critical';
      title = 'Pure Strategy Theater';
      description = 'Your organization has become a strategy performance. Action is secondary to planning aesthetics.';
      recommendation = 'Emergency intervention. Replace all planning with building. Consultant detox required.';
      interventionUrl = '/interventions/the-map';
    }

    return { score, severity, title, description, recommendation, interventionUrl };
  };

  return (
    <>
      <Head>
        <title>What is Strategy Theater? | IMAGINATION G</title>
        <meta name="description" content="Strategy Theater is the elaborate performance of planning without intention to act. It's busy work disguised as strategy - meetings, frameworks, and documents that avoid real decisions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DefinedTerm",
              "name": "Strategy Theater",
              "description": "The elaborate performance of planning without intention to act - busy work disguised as strategy that avoids real decisions",
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
              STRATEGY THEATER
            </h1>
            <p className="text-xl text-zinc-400">
              The elaborate performance of planning without intention to act
            </p>
          </div>

          {/* Definition */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-red-500">DEFINITION</h2>
            <div className="border-l-4 border-red-500 pl-6 mb-8">
              <p className="text-lg">
                <strong>Strategy Theater</strong> is the elaborate performance of planning without intention to act. 
                It's busy work disguised as strategy - meetings, frameworks, and documents that avoid real decisions.
              </p>
            </div>
          </div>

          {/* Signs of Strategy Theater */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">SIGNS YOU'RE PERFORMING STRATEGY THEATER</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">THE ENDLESS LOOP</h3>
                <p className="text-sm text-zinc-400 mb-2">• "Let's schedule another planning session"</p>
                <p className="text-sm text-zinc-400 mb-2">• "We need more stakeholder input"</p>
                <p className="text-sm text-zinc-400">• "Let's create a working group"</p>
              </div>
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">THE DOCUMENT FACTORY</h3>
                <p className="text-sm text-zinc-400 mb-2">• 50-slide strategy decks</p>
                <p className="text-sm text-zinc-400 mb-2">• SWOT analyses that sit in drawers</p>
                <p className="text-sm text-zinc-400">• Mission statements no one remembers</p>
              </div>
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">THE CONSENSUS TRAP</h3>
                <p className="text-sm text-zinc-400 mb-2">• "Everyone needs to be aligned"</p>
                <p className="text-sm text-zinc-400 mb-2">• "Let's get buy-in from all departments"</p>
                <p className="text-sm text-zinc-400">• "We can't move until everyone agrees"</p>
              </div>
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">THE FRAMEWORK ADDICTION</h3>
                <p className="text-sm text-zinc-400 mb-2">• New methodology every quarter</p>
                <p className="text-sm text-zinc-400 mb-2">• Training on planning processes</p>
                <p className="text-sm text-zinc-400">• Frameworks to choose frameworks</p>
              </div>
            </div>
          </div>

          {/* Why Strategy Theater Happens */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">WHY STRATEGY THEATER HAPPENS</h2>
            <div className="space-y-6">
              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-500">FEAR OF BEING WRONG</h3>
                <p className="text-zinc-300">
                  More planning feels safer than acting. If you're still strategizing, 
                  you can't fail yet. It's procrastination dressed up as diligence.
                </p>
              </div>
              
              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-500">AVOIDING HARD CHOICES</h3>
                <p className="text-zinc-300">
                  Real strategy requires saying no to good opportunities. Strategy theater 
                  keeps all options open by never actually choosing anything.
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-500">LOOKING IMPORTANT</h3>
                <p className="text-zinc-300">
                  Strategy theater feels productive. You're in meetings, creating documents, 
                  having important conversations. It looks like leadership.
                </p>
              </div>
            </div>
          </div>

          {/* The Real Cost */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE REAL COST OF STRATEGY THEATER</h2>
            <div className="bg-zinc-900 border border-zinc-800 p-8">
              <h3 className="text-xl font-bold mb-4 text-red-500">While You're Planning, Competitors Are Moving</h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  Your best employees leave for companies that actually decide things
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  Market opportunities expire while you're building consensus
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  Customer problems go unsolved while you perfect your framework
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  Revenue stagnates despite "strategic focus"
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  Leadership becomes a joke - all talk, no action
                </li>
              </ul>
            </div>
          </div>

          {/* Strategy vs Strategy Theater */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">REAL STRATEGY VS STRATEGY THEATER</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-red-500 p-6">
                <h3 className="font-bold text-red-500 mb-4">STRATEGY THEATER</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• Months of planning sessions</li>
                  <li>• Perfect presentation decks</li>
                  <li>• Comprehensive SWOT analyses</li>
                  <li>• Stakeholder alignment workshops</li>
                  <li>• Detailed implementation timelines</li>
                  <li>• Risk mitigation frameworks</li>
                  <li>• Change management processes</li>
                </ul>
              </div>
              <div className="border border-green-500 p-6">
                <h3 className="font-bold text-green-500 mb-4">REAL STRATEGY</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• Binary decisions in one session</li>
                  <li>• Clear "No" list created</li>
                  <li>• Three priorities maximum</li>
                  <li>• Owner assigned to each priority</li>
                  <li>• Weekly progress checkpoints</li>
                  <li>• Immediate action steps</li>
                  <li>• Results visible in 30 days</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How to Stop Strategy Theater */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-green-500">HOW TO STOP STRATEGY THEATER</h2>
            <div className="space-y-4 text-zinc-300">
              <div className="border border-green-500 p-6">
                <h3 className="font-bold mb-3 text-green-500">1. SET A DECISION DEADLINE</h3>
                <p className="text-sm">
                  "We will decide on our three priorities by Friday at 3 PM. No extensions. No more input needed."
                </p>
              </div>
              <div className="border border-green-500 p-6">
                <h3 className="font-bold mb-3 text-green-500">2. BAN THESE PHRASES</h3>
                <p className="text-sm">
                  "Let's table this," "We need more research," "Let's form a committee," "Everyone needs to weigh in."
                </p>
              </div>
              <div className="border border-green-500 p-6">
                <h3 className="font-bold mb-3 text-green-500">3. FORCE BINARY CHOICES</h3>
                <p className="text-sm">
                  Every decision is YES or NO. No "maybe," no "let's explore," no "it depends." Choose or lose.
                </p>
              </div>
            </div>
          </div>

          {/* The IMAGINATION G Antidote */}
          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE IMAGINATION G ANTIDOTE</h2>
            <div className="border border-red-500 p-8">
              <h3 className="text-xl font-bold mb-4">We kill strategy theater with signal amplification.</h3>
              <p className="text-lg mb-6">
                No frameworks. No consensus-building. No 12-week strategic planning processes. 
                We surface what's buried, force the override, and prescribe the intervention.
              </p>
              <div className="bg-black border border-zinc-700 p-6">
                <h4 className="font-bold mb-2 text-red-500">THE NAMING Session:</h4>
                <p className="text-sm text-zinc-400">
                  60 minutes. One room. We name the lie you're telling yourself about why you can't decide. 
                  Then you decide.
                </p>
              </div>
            </div>
          </div>

          {/* Diagnostic */}
          <LexiconDiagnostic
            lexiconTerm="strategy theater"
            questions={strategyTheaterQuestions}
            calculateResults={calculateTheaterResults}
            color="red"
          />

          {/* CTA */}
          <div className="border border-zinc-800 p-8 text-center">
            <h3 className="text-2xl font-black mb-4">Done with the Performance?</h3>
            <p className="text-zinc-400 mb-6">
              Stop performing strategy. Start amplifying signal. Get the intervention that ends the theater.
            </p>
            <Link 
              href="/interventions/the-naming" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 transition-colors mr-4"
            >
              DEPLOY INTERVENTION
            </Link>
            <Link 
              href="/answers/glossary/organizational-drift" 
              className="inline-block border border-red-500 text-red-500 hover:bg-red-500 hover:text-black font-bold py-3 px-8 transition-colors"
            >
              UNDERSTAND SIGNAL NOISE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}