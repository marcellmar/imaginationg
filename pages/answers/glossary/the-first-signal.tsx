import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import RelatedContent from '../../../components/RelatedContent';
import LexiconDiagnostic from '../../../components/LexiconDiagnostic';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const FirstSignalPage: NextPage = () => {
  const signalQuestions = [
    {
      id: 1,
      question: "Have you received real market feedback (payment, rejection, feature request)?",
      yesText: "SIGNAL RECEIVED",
      yesSubtext: "Reality contact established.",
      noText: "SIGNAL PENDING",
      noSubtext: "Still operating on theory."
    },
    {
      id: 2,
      question: "Are you waiting to ship until something is 'ready'?",
      yesText: "PERFECTION TRAP",
      yesSubtext: "Avoiding Error Correction data.",
      noText: "SHIPPING MINDSET",
      noSubtext: "Learning through market contact."
    },
    {
      id: 3,
      question: "Have you charged money for what you're building?",
      yesText: "TRUTH SIGNAL",
      yesSubtext: "Payment reveals real value.",
      noText: "VALIDATION PENDING",
      noSubtext: "Free feedback lies."
    },
    {
      id: 4,
      question: "Do you know specifically why someone said no?",
      yesText: "REJECTION DATA",
      yesSubtext: "Clear Error Correction signal.",
      noText: "AVOIDING REJECTION",
      noSubtext: "Staying in comfortable theory."
    }
  ];

  const calculateSignalResults = (answers: Record<number, 'yes' | 'no'>) => {
    const yesCount = Object.values(answers).filter(answer => answer === 'yes').length;
    const answerArray = Object.values(answers);

    // More nuanced scoring based on which questions were answered yes
    let severity: 'low' | 'medium' | 'high' | 'critical';
    let title: string;
    let description: string;
    let recommendation: string;
    let interventionUrl: string | undefined;

    if (yesCount >= 3) {
      severity = 'low';
      title = 'Field State: Signal Received';
      description = 'You have real market contact. Error Correction is possible. Knowledge Velocity can accelerate based on actual data, not theory.';
      recommendation = 'Keep shipping. Increase signal frequency. Build on the truth you are receiving.';
    } else if (yesCount === 2) {
      severity = 'medium';
      title = 'Transition Zone: Partial Signal';
      description = 'Some market contact, but not enough for reliable Error Correction. Knowledge Velocity limited by incomplete data.';
      recommendation = 'Ship faster. Charge money. Seek rejection. Get more first signals to reduce uncertainty.';
      interventionUrl = '/interventions/the-build';
    } else if (yesCount === 1) {
      severity = 'high';
      title = 'Particle State: Weak Signal';
      description = 'Minimal market contact. Operating mostly on assumption. Error Correction blocked by lack of data.';
      recommendation = 'Stop perfecting. Start shipping. One honest rejection beats ten polite maybes.';
      interventionUrl = '/interventions/the-build';
    } else {
      severity = 'critical';
      title = 'Terminal Particle State: No Signal';
      description = 'Zero market contact. Pure theory mode. No Error Correction possible. Building for ego instead of reality.';
      recommendation = 'Emergency market contact needed. Ship something today, even if embarrassing.';
      interventionUrl = '/interventions/the-build';
    }

    const score = Math.round((yesCount / signalQuestions.length) * 100);
    return { score, severity, title, description, recommendation, interventionUrl };
  };

  return (
    <>
      <SEOHead
        title="The First Signal - Early Market Contact for Error Correction | IMAGINATION G"
        description="The First Signal is initial market contact that enables Error Correction. Learn why shipping ugly beats perfecting pretty and how first signals create Knowledge Velocity."
        ogType="article"
        ogImage="/images/og-answers.svg"
        article={{
          publishedTime: "2025-06-05T00:00:00Z",
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
                GPI DIMENSION: ERROR CORRECTION • KNOWLEDGE VELOCITY
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                THE FIRST<br />SIGNAL<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Initial market contact that enables Error Correction. The moment theory meets reality.
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
                  The First Signal is initial market contact that proves your idea can survive reality.
                  It is not about perfection - it is about establishing Error Correction capability.
                  The first paying customer. The first real rejection. The first truth that cannot be theorized away.
                  Before first signal, you are in particle state. After, you can move toward field state.
                </p>
              </div>

              {/* TL;DR Box */}
              <div className="bg-black border-2 border-yellow-500 p-8 mb-12">
                <h3 className="text-xl font-black text-yellow-500 mb-4">TL;DR</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>First Signal = first real market contact that enables Error Correction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Without it: particle state, pure theory, no Knowledge Velocity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Ugly that ships beats pretty that does not</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Creates momentum that planning never can</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">WHY FIRST SIGNAL MATTERS FOR GPI</h2>

              <div className="space-y-8">
                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">ERROR CORRECTION ACTIVATION</h3>
                  <p className="text-zinc-400 mb-4">
                    Before first signal, everything is theory. Error Correction is impossible because
                    there are no errors to correct - only assumptions. After first signal, you have data.
                    Not projections. Not assumptions. Actual market response to actual offering.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>GPI Impact:</strong> Error Correction dimension moves from particle state (no data) to field state (active correction)
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">KNOWLEDGE VELOCITY IGNITION</h3>
                  <p className="text-zinc-400 mb-4">
                    First signal breaks the perfection paralysis. Once you ship ugly and survive,
                    shipping becomes easier. Each iteration builds on real feedback, not imagined fears.
                    Knowledge Velocity accelerates with each signal.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>GPI Impact:</strong> Knowledge Velocity rises as learning compounds from real market data
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">STRUCTURAL LOCK-IN PREVENTION</h3>
                  <p className="text-zinc-400 mb-4">
                    First signal kills the fantasy version of your product before you build too much of it.
                    What remains is what actually works. This prevents Structural Lock-In to the wrong approach.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>GPI Impact:</strong> Structural Lock-In prevented by early reality contact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">TYPES OF FIRST SIGNAL</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-black mb-4 text-green-500">VALID FIRST SIGNALS</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>First paying customer (strongest signal)</li>
                    <li>First public rejection with reason</li>
                    <li>First feature request from actual user</li>
                    <li>First competitor response to your presence</li>
                    <li>First refund request with feedback</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-4 text-red-500">FALSE FIRST SIGNALS</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>Friends saying "cool idea" (politeness, not signal)</li>
                    <li>Investor interest without money (flattery)</li>
                    <li>Internal testing results (echo chamber)</li>
                    <li>Survey responses (hypothetical behavior)</li>
                    <li>Advisor feedback (theory, not market)</li>
                  </ul>
                </div>
              </div>

              {/* Formula Box */}
              <div className="bg-zinc-950 border-2 border-red-600 p-8 mt-12">
                <h3 className="text-xl font-black mb-4 text-red-600">THE FIRST SIGNAL FORMULA</h3>
                <p className="text-lg font-mono text-center">
                  Minimum Viable Offering x Maximum Market Contact = First Signal
                </p>
                <p className="text-center text-zinc-400 mt-4">
                  Ship at 30% ready to strangers who might pay. That is first signal territory.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">GETTING YOUR FIRST SIGNAL</h2>

              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">RULE 1</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Ship at 30% Ready</h4>
                    <p className="text-zinc-400">If you are not embarrassed, you waited too long. Perfection prevents Error Correction.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">RULE 2</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Charge Money Immediately</h4>
                    <p className="text-zinc-400">Free users lie. Paying customers tell truth. Payment is the purest signal.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">RULE 3</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Seek Rejection, Not Validation</h4>
                    <p className="text-zinc-400">One honest "no" beats ten polite "maybes". Rejection is Error Correction data.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">RULE 4</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Measure Signal, Not Vanity</h4>
                    <p className="text-zinc-400">Revenue, refunds, and reasons. Everything else is comfort metrics that hide truth.</p>
                  </div>
                </div>
              </div>

              {/* Warning Box */}
              <div className="bg-black border-l-4 border-yellow-500 p-8 mt-12">
                <h3 className="text-xl font-black mb-4 text-yellow-500">THE SIGNAL DELAY COST</h3>
                <p className="text-zinc-400">
                  Every day without first signal is a day building on assumptions.
                  Structural Lock-In increases. Error Correction becomes more expensive.
                  Knowledge Velocity stalls at zero. The longer you wait, the harder it is to change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnostic Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <LexiconDiagnostic
                lexiconTerm="first signal"
                questions={signalQuestions}
                calculateResults={calculateSignalResults}
                color="red"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">GET YOUR FIRST SIGNAL</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Stop polishing. Start shipping. Enable Error Correction through market contact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/diagnostic"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                MEASURE YOUR GPI
              </Link>
              <Link
                href="/interventions"
                className="border-2 border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors"
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
                  href: "/answers/glossary/the-momentum-effect",
                  title: "The Momentum Effect",
                  description: "How first signal compounds into sustained velocity. Field state acceleration.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/the-breaking-point",
                  title: "The Breaking Point",
                  description: "Maximum pressure before transformation. Where first signal becomes breakthrough.",
                  color: "yellow"
                },
                {
                  href: "/interventions/the-build",
                  title: "The Build Intervention",
                  description: "Ship fast, get signal. The intervention for first signal acquisition.",
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

export default FirstSignalPage;
