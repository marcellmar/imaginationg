import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import RelatedContent from '../../../components/RelatedContent';
import LexiconDiagnostic from '../../../components/LexiconDiagnostic';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const SlowCalcificationPage: NextPage = () => {
  const calcificationQuestions = [
    {
      id: 1,
      question: "Do you have more meetings than last quarter with fewer decisions?",
      yesText: "DECISION LATENCY EXPANDING",
      yesSubtext: "Particle state accelerating.",
      noText: "EFFICIENT ACTION",
      noSubtext: "Field state maintained."
    },
    {
      id: 2,
      question: "Is your team working harder but delivering less impact?",
      yesText: "EFFORT WITHOUT OUTPUT",
      yesSubtext: "Motion without progress.",
      noText: "LEVERAGE MAINTAINED",
      noSubtext: "Effort creates results."
    },
    {
      id: 3,
      question: "Do initiatives launch with fanfare but quietly disappear?",
      yesText: "STRUCTURAL LOCK-IN FORMING",
      yesSubtext: "Launch energy, no finish energy.",
      noText: "COMPLETION CULTURE",
      noSubtext: "What starts, finishes."
    },
    {
      id: 4,
      question: "Has your organization's purpose become harder to explain?",
      yesText: "CLARITY DECAY",
      yesSubtext: "Mission eroding.",
      noText: "CRYSTAL CLEAR",
      noSubtext: "Purpose drives everything."
    },
    {
      id: 5,
      question: "Do you feel busy but struggle to identify concrete achievements?",
      yesText: "KNOWLEDGE VELOCITY COLLAPSE",
      yesSubtext: "Activity without accomplishment.",
      noText: "CLEAR WINS",
      noSubtext: "Progress is measurable."
    },
    {
      id: 6,
      question: "Are decisions taking longer than they used to?",
      yesText: "PARTICLE STATE HARDENING",
      yesSubtext: "Calcification spreading.",
      noText: "DECISION VELOCITY",
      noSubtext: "Speed is maintained."
    }
  ];

  const calculateCalcificationResults = (answers: Record<number, 'yes' | 'no'>) => {
    const yesCount = Object.values(answers).filter(answer => answer === 'yes').length;
    const score = Math.round((yesCount / calcificationQuestions.length) * 100);

    let severity: 'low' | 'medium' | 'high' | 'critical';
    let title: string;
    let description: string;
    let recommendation: string;
    let interventionUrl: string | undefined;

    if (score <= 20) {
      severity = 'low';
      title = 'Field State: Strong Momentum';
      description = 'Your organization maintains clear direction and efficient execution. Calcification is minimal. GPI likely 1-3 across dimensions.';
      recommendation = 'Continue monitoring. Build systems to maintain field state during growth.';
    } else if (score <= 40) {
      severity = 'medium';
      title = 'Transition Zone: Early Calcification';
      description = 'Some particle state drift is detectable. You have time to course-correct before it compounds. GPI likely 4-5 on Structural Lock-In.';
      recommendation = 'Focus on Decision Velocity and outcome measurement. Eliminate low-value activities.';
      interventionUrl = '/interventions/the-map';
    } else if (score <= 70) {
      severity = 'high';
      title = 'Particle State: Significant Calcification';
      description = 'Organizational momentum is seriously compromised. Activity is high but achievement is low. GPI likely 6-8 on Structural Lock-In.';
      recommendation = 'Immediate intervention needed. Stop all non-essential work and refocus on core outcomes.';
      interventionUrl = '/interventions/the-override';
    } else {
      severity = 'critical';
      title = 'Terminal Particle State: Full Calcification';
      description = 'Your organization is in pure motion without progress. Emergency intervention required. GPI 9-10 on Structural Lock-In.';
      recommendation = 'Full organizational audit and restructure needed. Consider leadership changes.';
      interventionUrl = '/interventions/the-override';
    }

    return { score, severity, title, description, recommendation, interventionUrl };
  };

  return (
    <>
      <SEOHead
        title="The Slow Calcification - How Organizations Harden Into Particle State | IMAGINATION G"
        description="The Slow Calcification is the gradual hardening of organizations into particle state. Learn how Structural Lock-In develops and how to reverse it before it becomes permanent."
        ogType="article"
        ogImage="/images/og-answers.svg"
        article={{
          publishedTime: "2025-01-01T00:00:00Z",
          author: "IMAGINATION G"
        }}
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <Link href="/answers" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8">
                <ArrowLeft size={16} />
                Back to Friction Patterns
              </Link>

              {/* System Status Badge */}
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                GPI DIMENSION: STRUCTURAL LOCK-IN
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                THE SLOW<br />CALCIFICATION<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Gradual hardening into particle state. How organizations lose their ability to adapt without noticing.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Answer Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <div className="bg-zinc-950 border border-zinc-800 p-8 mb-12">
                <h2 className="text-2xl font-black mb-4 text-red-600">QUICK ANSWER</h2>
                <p className="text-lg leading-relaxed">
                  The Slow Calcification is the gradual transition from field state to particle state
                  that happens so slowly organizations do not notice. Each small decision that chooses
                  comfort over capability hardens the structure. By the time calcification is visible,
                  Structural Lock-In is often complete.
                </p>
              </div>

              {/* TL;DR Box */}
              <div className="bg-black border-2 border-yellow-500 p-8 mb-12">
                <h3 className="text-xl font-black text-yellow-500 mb-4">TL;DR</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Slow Calcification = invisible drift from field state to particle state</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Creates Structural Lock-In (GPI 7-10 in this dimension)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Happens through thousands of small decisions, not one big one</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Reversal requires systematic intervention, not incremental change</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Signs Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">SIGNS OF SLOW CALCIFICATION</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-zinc-800 p-6">
                  <h3 className="font-bold text-red-500 mb-3">Decision Latency Creep</h3>
                  <p className="text-sm text-zinc-400">
                    Decisions that once took hours now take weeks. GPI rising in Decision Latency dimension.
                  </p>
                </div>
                <div className="border border-zinc-800 p-6">
                  <h3 className="font-bold text-red-500 mb-3">Knowledge Location Fragmentation</h3>
                  <p className="text-sm text-zinc-400">
                    Information trapped in silos. Nobody knows where anything is or who owns what.
                  </p>
                </div>
                <div className="border border-zinc-800 p-6">
                  <h3 className="font-bold text-red-500 mb-3">Error Correction Failure</h3>
                  <p className="text-sm text-zinc-400">
                    Mistakes compound because correction mechanisms have calcified into bureaucracy.
                  </p>
                </div>
                <div className="border border-zinc-800 p-6">
                  <h3 className="font-bold text-red-500 mb-3">Talent Flow Blockage</h3>
                  <p className="text-sm text-zinc-400">
                    Best people leave. Hiring focuses on "fit" over capability. Mediocrity becomes standard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Calcification Process */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">THE CALCIFICATION PROCESS</h2>

              <div className="space-y-8">
                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">STAGE 1: FIELD STATE (GPI 1-3)</h3>
                  <p className="text-zinc-400 mb-4">
                    Organization operates with high velocity. Decisions fast. Information flows freely.
                    Error Correction happens automatically. Talent moves to where it is needed.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Signal:</strong> "We move fast and fix things"<br />
                    <strong>Reality:</strong> True agility and adaptability
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-yellow-500 mb-4">STAGE 2: TRANSITION (GPI 4-6)</h3>
                  <p className="text-zinc-400 mb-4">
                    Small frictions accumulate. "Just this once" becomes standard practice.
                    Workarounds become workflows. Process starts to replace judgment.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Signal:</strong> "That's just how we do things now"<br />
                    <strong>Reality:</strong> Calcification beginning, still reversible
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-orange-500 mb-4">STAGE 3: PARTICLE STATE (GPI 7-8)</h3>
                  <p className="text-zinc-400 mb-4">
                    Structural Lock-In visible. Changes require permission chains.
                    Innovation threatened because it challenges calcified structures.
                    Knowledge trapped. Decisions stalled.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Signal:</strong> "We can't change that - everything depends on it"<br />
                    <strong>Reality:</strong> Significant intervention required
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">STAGE 4: TERMINAL PARTICLE STATE (GPI 9-10)</h3>
                  <p className="text-zinc-400 mb-4">
                    Complete Structural Lock-In. Organization cannot adapt to external change.
                    All energy goes to maintaining existing structures. No capacity for growth.
                    Collapse becomes matter of time.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Signal:</strong> "We've always done it this way"<br />
                    <strong>Reality:</strong> Fundamental restructure or death
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Real Cost */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">THE REAL COST OF CALCIFICATION</h2>

              <div className="bg-zinc-900 border border-zinc-800 p-8">
                <p className="text-lg mb-6">
                  Calcification does not just slow you down - it kills capability while maintaining the appearance of function.
                </p>
                <ul className="space-y-3 text-zinc-400">
                  <li><strong>Talent Flow:</strong> Top performers leave for organizations with field state. GPI dimension rises.</li>
                  <li><strong>Knowledge Velocity:</strong> Competitors with field state learn and adapt faster. You fall behind.</li>
                  <li><strong>Capital Intensity:</strong> Resources consumed maintaining particle state instead of creating value.</li>
                  <li><strong>Decision Latency:</strong> Market opportunities pass while waiting for approval chains.</li>
                  <li><strong>Error Correction:</strong> Mistakes compound because correction mechanisms have calcified.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12 text-green-500">REVERSING CALCIFICATION</h2>

              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 1</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Measure Your GPI</h4>
                    <p className="text-zinc-400">Identify exactly where particle state has taken hold. Which dimensions are calcified?</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 2</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Map the Lock-In</h4>
                    <p className="text-zinc-400">Find the Structural Lock-In points. What would break if you changed it? Usually less than you think.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 3</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Override the Particle State</h4>
                    <p className="text-zinc-400">Targeted interventions on highest-GPI dimensions. Move toward field state systematically.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 4</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Protect the Field State</h4>
                    <p className="text-zinc-400">Build systems that maintain fluidity. Monitor for calcification signals. Re-measure regularly.</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-900 border border-green-500 p-8 mt-12">
                <h3 className="text-xl font-black mb-4 text-green-500">THE INTERVENTION APPROACH</h3>
                <p className="text-zinc-300">
                  Calcification cannot be reversed through incremental improvement.
                  It requires intervention - targeted force applied to specific dimensions
                  to break Structural Lock-In and restore field state operation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnostic */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <LexiconDiagnostic
                lexiconTerm="slow calcification"
                questions={calcificationQuestions}
                calculateResults={calculateCalcificationResults}
                color="red"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">REVERSE YOUR CALCIFICATION</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Stop the slow hardening into particle state. Restore field state operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/diagnostic"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 transition-colors"
              >
                MEASURE YOUR GPI
              </Link>
              <Link
                href="/interventions"
                className="border-2 border-zinc-700 hover:border-zinc-500 text-white font-bold py-4 px-8 transition-colors"
              >
                DEPLOY INTERVENTION
              </Link>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <RelatedContent
              title="Related Friction Patterns"
              items={[
                {
                  href: "/answers/glossary/the-friction-loop",
                  title: "The Friction Loop",
                  description: "How calcification accelerates. Systems optimizing for their own dysfunction.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/the-breaking-point",
                  title: "The Breaking Point",
                  description: "Where calcification either breaks or transforms. Maximum pressure moments.",
                  color: "yellow"
                },
                {
                  href: "/interventions/the-override",
                  title: "The Override Intervention",
                  description: "30-day intervention to break Structural Lock-In and restore field state.",
                  color: "green"
                }
              ]}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default SlowCalcificationPage;
