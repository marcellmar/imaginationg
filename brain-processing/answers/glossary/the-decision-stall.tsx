import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import RelatedContent from '../../../components/RelatedContent';
import LexiconDiagnostic from '../../../components/LexiconDiagnostic';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const DecisionStallPage: NextPage = () => {
  const decisionQuestions = [
    {
      id: 1,
      question: "Do decisions get delayed to include more stakeholders?",
      yesText: "INCLUSION PARALYSIS",
      yesSubtext: "Everyone must agree.",
      noText: "DECISIVE AUTHORITY",
      noSubtext: "Someone owns the call."
    },
    {
      id: 2,
      question: "Do dissenting voices get silenced for 'team unity'?",
      yesText: "ERROR CORRECTION BLOCKED",
      yesSubtext: "Comfort over truth.",
      noText: "PROTECTED DISSENT",
      noSubtext: "Truth over comfort."
    },
    {
      id: 3,
      question: "Are controversial ideas avoided to maintain harmony?",
      yesText: "KNOWLEDGE VELOCITY COLLAPSE",
      yesSubtext: "Safety over breakthrough.",
      noText: "TRUTH SEEKING",
      noSubtext: "Breakthrough over safety."
    },
    {
      id: 4,
      question: "Do meetings end without clear decisions to avoid conflict?",
      yesText: "DECISION LATENCY SPIKE",
      yesSubtext: "Maybe is the default.",
      noText: "BINARY CHOICES",
      noSubtext: "Yes or no is the default."
    }
  ];

  const calculateDecisionResults = (answers: Record<number, 'yes' | 'no'>) => {
    const yesCount = Object.values(answers).filter(answer => answer === 'yes').length;
    const score = Math.round((yesCount / decisionQuestions.length) * 100);

    let severity: 'low' | 'medium' | 'high' | 'critical';
    let title: string;
    let description: string;
    let recommendation: string;
    let interventionUrl: string | undefined;

    if (score <= 25) {
      severity = 'low';
      title = 'Field State: Healthy Decision Culture';
      description = 'Your organization makes decisions efficiently. Truth matters more than comfort. GPI Decision Latency likely 1-3.';
      recommendation = 'Maintain this decisiveness. Guard against consensus creep during scaling.';
    } else if (score <= 50) {
      severity = 'medium';
      title = 'Transition Zone: Decision Drift';
      description = 'Some truth is being sacrificed for agreement. Decision quality is declining. GPI Decision Latency likely 4-5.';
      recommendation = 'Clarify decision authority. Protect dissenting voices. Set decision deadlines.';
      interventionUrl = '/interventions/the-naming';
    } else if (score <= 75) {
      severity = 'high';
      title = 'Particle State: Active Decision Stall';
      description = 'Agreement has become more important than accuracy. Error Correction is blocked. GPI Decision Latency likely 6-8.';
      recommendation = 'Break the consensus addiction. Assign decision owners. Reward truth-telling.';
      interventionUrl = '/interventions/the-override';
    } else {
      severity = 'critical';
      title = 'Terminal Particle State: Decision Paralysis';
      description = 'Your organization cannot make decisions that upset anyone. Truth has been exiled. GPI Decision Latency 9-10.';
      recommendation = 'Emergency intervention. Replace consensus with clear authority structures.';
      interventionUrl = '/interventions/the-override';
    }

    return { score, severity, title, description, recommendation, interventionUrl };
  };

  return (
    <>
      <SEOHead
        title="The Decision Stall - When Consensus Prevents Action | IMAGINATION G"
        description="The Decision Stall is a particle state pattern where pursuit of agreement systematically destroys truth and prevents decisions. Learn how consensus kills Decision Velocity."
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
                GPI DIMENSION: DECISION LATENCY
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                THE DECISION<br />STALL<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                When consensus prevents action. The particle state pattern where agreement becomes the enemy of truth.
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
                  The Decision Stall is a particle state pattern where the pursuit of agreement systematically
                  destroys truth and prevents optimal decisions. It is the organizational disease that makes
                  collective comfort more important than individual signal, causing massive Decision Latency.
                </p>
              </div>

              {/* TL;DR Box */}
              <div className="bg-black border-2 border-yellow-500 p-8 mb-12">
                <h3 className="text-xl font-black text-yellow-500 mb-4">TL;DR</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Decision Stall = particle state where consensus replaces decision</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Causes Decision Latency (GPI 7-10 in this dimension)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>The more people who must agree, the less likely truth survives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Breaking requires decision authority, not better consensus process</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Paradox Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">THE DECISION STALL PARADOX</h2>

              <div className="bg-zinc-900 border border-zinc-800 p-8">
                <p className="text-lg mb-4">
                  <strong>The more people you need to agree, the less likely you are to find truth.</strong>
                </p>
                <p className="text-zinc-400 mb-4">
                  Truth is often uncomfortable, polarizing, and demands action. Consensus requires comfort,
                  compromise, and delay. These forces are fundamentally opposed. Decision Latency rises
                  with every stakeholder added.
                </p>
                <div className="border border-yellow-500 p-4 mt-4">
                  <p className="text-sm text-yellow-400">
                    <strong>The Hidden Truth:</strong> Organizations pursue consensus not to make better decisions,
                    but to avoid making decisions at all. Consensus is particle state disguised as collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Decision Stall Kills Truth */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">HOW THE DECISION STALL KILLS GPI</h2>

              <div className="space-y-6">
                <div className="border border-zinc-800 p-6">
                  <h3 className="text-xl font-bold mb-3 text-red-500">STAGE 1: SIGNAL DILUTION (GPI 4-5)</h3>
                  <p className="text-zinc-300 mb-3">
                    Individual clarity gets watered down to accommodate everyone's comfort level.
                    "This customer will never pay" becomes "We should explore pricing strategies."
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>GPI Impact:</strong> Knowledge Velocity begins declining. Decision Latency increasing.
                  </p>
                </div>

                <div className="border border-zinc-800 p-6">
                  <h3 className="text-xl font-bold mb-3 text-yellow-500">STAGE 2: TRUTH AVERAGING (GPI 5-6)</h3>
                  <p className="text-zinc-300 mb-3">
                    Opposing viewpoints get averaged into meaningless compromise.
                    "This will not work" + "This is perfect" = "This needs some adjustments."
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>GPI Impact:</strong> Error Correction failing. Reality does not average.
                  </p>
                </div>

                <div className="border border-zinc-800 p-6">
                  <h3 className="text-xl font-bold mb-3 text-orange-500">STAGE 3: MINORITY SIGNAL SUPPRESSION (GPI 7-8)</h3>
                  <p className="text-zinc-300 mb-3">
                    The person with clearest signal gets pressured to "get on board" with group comfort.
                    Truth becomes "not being collaborative."
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>GPI Impact:</strong> Talent Flow blocked. Best thinkers silenced or leave.
                  </p>
                </div>

                <div className="border border-zinc-800 p-6">
                  <h3 className="text-xl font-bold mb-3 text-red-600">STAGE 4: COMFORTABLE LIES (GPI 9-10)</h3>
                  <p className="text-zinc-300 mb-3">
                    The group settles on a version of reality that makes everyone feel good but solves nothing.
                    Consensus achieved, truth buried, particle state complete.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>GPI Impact:</strong> All dimensions in particle state. Collective delusion becomes policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Organizations Choose Consensus */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">WHY ORGANIZATIONS CHOOSE STALL OVER DECISION</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-zinc-800 p-6">
                  <h3 className="font-bold text-red-500 mb-3">PSYCHOLOGICAL SAFETY THEATER</h3>
                  <p className="text-sm text-zinc-400">
                    Consensus feels "inclusive" and "respectful." Truth feels "harsh" and "divisive."
                    Organizations choose feeling good over being right. Decision Latency is the price.
                  </p>
                </div>

                <div className="border border-zinc-800 p-6">
                  <h3 className="font-bold text-red-500 mb-3">ACCOUNTABILITY DIFFUSION</h3>
                  <p className="text-sm text-zinc-400">
                    If everyone agrees, no one is responsible for failure.
                    Consensus creates plausible deniability. Structural Lock-In through shared blame.
                  </p>
                </div>

                <div className="border border-zinc-800 p-6">
                  <h3 className="font-bold text-red-500 mb-3">DECISION AVOIDANCE</h3>
                  <p className="text-sm text-zinc-400">
                    Building consensus takes time and postpones difficult choices.
                    "Getting alignment" becomes particle state excuse for not acting.
                  </p>
                </div>

                <div className="border border-zinc-800 p-6">
                  <h3 className="font-bold text-red-500 mb-3">LEADERSHIP ABDICATION</h3>
                  <p className="text-sm text-zinc-400">
                    Leaders avoid the burden of making tough calls by outsourcing decisions to "the group."
                    Consensus becomes leadership avoidance dressed as democracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Hidden Cost */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">THE HIDDEN COST OF THE DECISION STALL</h2>

              <div className="bg-zinc-900 border border-zinc-800 p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-red-500 mb-3">SPEED COSTS (Decision Latency)</h3>
                    <ul className="space-y-2 text-zinc-400 text-sm">
                      <li>Decisions take 10x longer to reach</li>
                      <li>Opportunities missed while building alignment</li>
                      <li>Crisis response delayed for group comfort</li>
                      <li>Market timing lost to consensus timelines</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-red-500 mb-3">QUALITY COSTS (Error Correction)</h3>
                    <ul className="space-y-2 text-zinc-400 text-sm">
                      <li>Best solutions compromised for agreement</li>
                      <li>Expert knowledge diluted by group opinion</li>
                      <li>Truth sacrificed for psychological comfort</li>
                      <li>Optimal choices become suboptimal compromises</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breaking the Decision Stall */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12 text-green-500">BREAKING THE DECISION STALL</h2>

              <div className="border border-green-500 p-6 mb-8">
                <h3 className="font-bold mb-3">The Truth-Over-Agreement Protocol:</h3>
                <ol className="space-y-3 text-zinc-300">
                  <li>1. <strong>Signal identification:</strong> "Who has the clearest signal on this decision?"</li>
                  <li>2. <strong>Consensus prohibition:</strong> "We optimize for truth, not agreement"</li>
                  <li>3. <strong>Expertise amplification:</strong> "The person who knows decides"</li>
                  <li>4. <strong>Minority signal protection:</strong> "Dissent is data, not disloyalty"</li>
                  <li>5. <strong>Comfort rejection:</strong> "If everyone's comfortable, we're probably wrong"</li>
                </ol>
              </div>

              {/* Consultation vs Consensus */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-red-500 p-6">
                  <h3 className="font-bold text-red-500 mb-4">CONSENSUS (PARTICLE STATE)</h3>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li>Everyone must agree before action</li>
                    <li>Minority signal gets suppressed</li>
                    <li>Truth gets compromised for comfort</li>
                    <li>Decisions take forever</li>
                    <li>No one accountable for outcomes</li>
                    <li>Optimal solutions avoided</li>
                  </ul>
                </div>
                <div className="border border-green-500 p-6">
                  <h3 className="font-bold text-green-500 mb-4">CONSULTATION (FIELD STATE)</h3>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li>Input gathered, one person decides</li>
                    <li>All signals considered, best amplified</li>
                    <li>Truth prioritized over comfort</li>
                    <li>Decisions made quickly</li>
                    <li>Clear accountability for outcomes</li>
                    <li>Optimal solutions implemented</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnostic */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <LexiconDiagnostic
                lexiconTerm="decision stall"
                questions={decisionQuestions}
                calculateResults={calculateDecisionResults}
                color="yellow"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">BREAK YOUR DECISION STALL</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Choose truth over agreement. Move from particle state to field state decision-making.
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
                  href: "/answers/glossary/the-false-harmony",
                  title: "The False Harmony",
                  description: "Surface agreement masking dysfunction. How comfort prevents Error Correction.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/the-meeting-loop",
                  title: "The Meeting Loop",
                  description: "When meetings replace decisions. How Discussion becomes the activity.",
                  color: "yellow"
                },
                {
                  href: "/interventions/the-naming",
                  title: "The Naming Intervention",
                  description: "Surface truth over comfort. Break the consensus addiction.",
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

export default DecisionStallPage;
