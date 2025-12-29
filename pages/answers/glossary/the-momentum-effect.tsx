import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import RelatedContent from '../../../components/RelatedContent';
import LexiconDiagnostic from '../../../components/LexiconDiagnostic';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const MomentumEffectPage: NextPage = () => {
  const momentumQuestions = [
    {
      id: 1,
      question: "Does success in one area accelerate success in others?",
      yesText: "MOMENTUM MULTIPLICATION",
      yesSubtext: "Wins compound across dimensions.",
      noText: "ISOLATED WINS",
      noSubtext: "Success stays siloed."
    },
    {
      id: 2,
      question: "Does your team's energy increase as you make progress?",
      yesText: "ENERGY AMPLIFICATION",
      yesSubtext: "Movement creates more movement.",
      noText: "ENERGY DEPLETION",
      noSubtext: "Progress drains capacity."
    },
    {
      id: 3,
      question: "Are decisions getting faster as you execute?",
      yesText: "DECISION VELOCITY RISING",
      yesSubtext: "Field state accelerating.",
      noText: "DECISION FRICTION GROWING",
      noSubtext: "Particle state emerging."
    },
    {
      id: 4,
      question: "Do small wins create larger opportunities?",
      yesText: "OPPORTUNITY COMPOUNDING",
      yesSubtext: "Success attracts more success.",
      noText: "LINEAR PROGRESS",
      noSubtext: "Each win is independent."
    },
    {
      id: 5,
      question: "Is your team aligned on direction without constant coordination?",
      yesText: "ALIGNMENT LOCK",
      yesSubtext: "Synchronized without meetings.",
      noText: "COORDINATION OVERHEAD",
      noSubtext: "Every move requires discussion."
    }
  ];

  const calculateMomentumResults = (answers: Record<number, 'yes' | 'no'>) => {
    const yesCount = Object.values(answers).filter(answer => answer === 'yes').length;
    const score = Math.round((yesCount / momentumQuestions.length) * 100);

    let severity: 'low' | 'medium' | 'high' | 'critical';
    let title: string;
    let description: string;
    let recommendation: string;
    let interventionUrl: string | undefined;

    if (score >= 80) {
      severity = 'low';
      title = 'Field State: Active Momentum Effect';
      description = 'Your organization has achieved momentum multiplication. Success compounds. Energy amplifies. GPI 1-3 across dimensions. Protect this state.';
      recommendation = 'Document what creates this. Protect the conditions. Scale carefully to avoid particle state creep.';
    } else if (score >= 60) {
      severity = 'medium';
      title = 'Transition Zone: Emerging Momentum';
      description = 'Some momentum multiplication present but not consistent. GPI likely 4-5. Room to strengthen field state conditions.';
      recommendation = 'Identify what breaks momentum. Remove friction sources. Strengthen alignment mechanisms.';
      interventionUrl = '/interventions/the-map';
    } else if (score >= 40) {
      severity = 'high';
      title = 'Particle State: Weak Momentum';
      description = 'Limited momentum multiplication. Wins do not compound. Energy depletes with effort. GPI likely 6-7. Significant friction present.';
      recommendation = 'Map the friction points. Address the highest-impact blockers. Create momentum rituals.';
      interventionUrl = '/interventions/the-override';
    } else {
      severity = 'critical';
      title = 'Terminal Particle State: Negative Momentum';
      description = 'Effort creates friction instead of progress. Success does not compound. Energy drains. GPI 8-10. Fundamental intervention required.';
      recommendation = 'Stop all non-essential activities. Reset to basics. Rebuild from field state conditions.';
      interventionUrl = '/interventions/the-override';
    }

    return { score, severity, title, description, recommendation, interventionUrl };
  };

  return (
    <>
      <SEOHead
        title="The Momentum Effect - How Velocity Compounds Toward Field State | IMAGINATION G"
        description="The Momentum Effect is when aligned systems multiply force exponentially. Learn how field state organizations create unstoppable velocity through momentum multiplication."
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
                GPI DIMENSION: KNOWLEDGE VELOCITY • DECISION LATENCY
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                THE MOMENTUM<br />EFFECT<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                When aligned systems multiply force. The field state pattern where 1+1 equals 10.
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
                  The Momentum Effect is the exponential force multiplication that occurs when systems align
                  in field state. It is not addition - it is multiplication. When true momentum kicks in,
                  small inputs create massive outputs. Success generates its own energy.
                  This is the opposite of particle state, where effort creates friction instead of progress.
                </p>
              </div>

              {/* TL;DR Box */}
              <div className="bg-black border-2 border-yellow-500 p-8 mb-12">
                <h3 className="text-xl font-black text-yellow-500 mb-4">TL;DR</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Momentum Effect = field state where wins multiply instead of add</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Requires alignment across GPI dimensions (all trending toward 1-3)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Small inputs create massive outputs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>The physics of unstoppable organizations</span>
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
              <h2 className="text-3xl font-black mb-12">THE MOMENTUM EQUATION</h2>

              <div className="space-y-8">
                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">PARTICLE STATE MOMENTUM (LINEAR)</h3>
                  <p className="text-zinc-400 mb-4">
                    Traditional particle state organizations add effort linearly. Ten people produce ten units of work.
                    Double the input, double the output. Predictable, limited, exhausting. GPI 7-10.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Formula:</strong> Output = Input x 1<br />
                    <strong>Reality:</strong> Actually less due to friction and coordination costs
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-green-500 mb-4">FIELD STATE MOMENTUM (EXPONENTIAL)</h3>
                  <p className="text-zinc-400 mb-4">
                    When systems achieve field state, output compounds. Each action amplifies the next.
                    Success creates more success. Movement generates its own energy. GPI 1-3.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Formula:</strong> Output = Input ^ Alignment<br />
                    <strong>Reality:</strong> 10x results with same resources
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-yellow-500 mb-4">THE ALIGNMENT FACTOR</h3>
                  <p className="text-zinc-400 mb-4">
                    The Momentum Effect requires three alignments: Direction (everyone moving same way),
                    Timing (movements synchronized), and Energy (no internal friction drain).
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Miss one:</strong> Linear growth at best (GPI 4-6)<br />
                    <strong>Hit all three:</strong> Exponential multiplication (GPI 1-3)
                  </p>
                </div>
              </div>

              {/* Physics Visualization */}
              <div className="bg-zinc-950 border border-zinc-800 p-8 mt-12">
                <h3 className="text-xl font-black mb-6">MOMENTUM MULTIPLICATION VISUALIZATION</h3>
                <div className="font-mono text-sm space-y-2">
                  <div className="text-red-500">PARTICLE STATE:  {'->'} {'<-'} ^ v = CANCEL OUT (GPI 7-10)</div>
                  <div className="text-zinc-600">Forces work against each other. Friction dominates.</div>
                  <div className="mt-4 text-yellow-500">TRANSITION:     {'->'} {'->'} v {'->'} = PARTIAL (GPI 4-6)</div>
                  <div className="text-zinc-600">Some alignment but friction still present.</div>
                  <div className="mt-4 text-green-500">FIELD STATE:    {'->->->->->->'} = MULTIPLY (GPI 1-3)</div>
                  <div className="text-zinc-400">Organization becomes self-propelling. Unstoppable.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">MOMENTUM EFFECT IN ACTION</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-black mb-4 text-green-500">STARTUP MOMENTUM (FIELD STATE)</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>Product-market fit clicks - Knowledge Velocity spikes</li>
                    <li>Team hits flow state - Decision Latency drops</li>
                    <li>Customers become evangelists - Talent Flow improves</li>
                    <li>Growth feeds growth - Capital Intensity decreases</li>
                    <li>Momentum becomes magnetic - Error Correction accelerates</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-4 text-green-500">MARKET MOMENTUM (FIELD STATE)</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>Timing meets technology - all dimensions align</li>
                    <li>Adoption hits critical mass - network effects activate</li>
                    <li>Structural Lock-In works FOR you now</li>
                    <li>Competition becomes irrelevant</li>
                    <li>Category gets redefined around you</li>
                  </ul>
                </div>
              </div>

              {/* Case Study Box */}
              <div className="bg-black border border-zinc-800 p-8">
                <h3 className="text-xl font-black mb-4">MOMENTUM EFFECT CASE STUDY: THE 10X TEAM</h3>
                <p className="text-zinc-400 mb-4">
                  <strong>Situation:</strong> 5-person team competing against 50-person incumbents
                </p>
                <p className="text-zinc-400 mb-4">
                  <strong>Field State Factors:</strong>
                </p>
                <ul className="space-y-2 ml-6 text-zinc-400">
                  <li>Perfect role alignment - Talent Flow GPI 1</li>
                  <li>Zero internal friction - No hidden drains</li>
                  <li>Shared clarity - Decision Latency GPI 1</li>
                  <li>Daily momentum rituals - Knowledge Velocity GPI 2</li>
                </ul>
                <p className="text-zinc-400 mt-4">
                  <strong>Result:</strong> Shipped more in 6 months than competitors in 2 years.
                  10x output with 10% headcount. Momentum Effect in pure form.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Momentum Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">ENGINEERING THE MOMENTUM EFFECT</h2>

              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">PHASE 1</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Eliminate Hidden Drains</h4>
                    <p className="text-zinc-400">Remove all energy losses. Map and eliminate friction points. Cannot multiply from negative. Reduce all GPI dimensions.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">PHASE 2</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Achieve Direction Alignment</h4>
                    <p className="text-zinc-400">Everyone moving toward same point. No divergence. Reduce Decision Latency to enable rapid alignment.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">PHASE 3</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Synchronize Timing</h4>
                    <p className="text-zinc-400">Actions coordinated. Rhythms matched. Pulses aligned. Increase Knowledge Velocity through shared cadence.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">PHASE 4</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Feed the Momentum</h4>
                    <p className="text-zinc-400">Small wins compound. Success rituals. Daily progress. Enable Error Correction to accelerate learning.</p>
                  </div>
                </div>
              </div>

              {/* Critical Warning */}
              <div className="bg-black border-l-4 border-red-600 p-8 mt-12">
                <h3 className="text-xl font-black mb-4 text-red-600">MOMENTUM EFFECT WARNING</h3>
                <p className="text-zinc-400">
                  The Momentum Effect is fragile in early stages. One misaligned element can collapse the entire
                  multiplication effect. A single dimension moving toward particle state can infect others.
                  Protect field state conditions zealously until momentum becomes self-sustaining.
                  Once achieved, the effect becomes nearly unstoppable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GPI Connection Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">GPI DIMENSIONS AND THE MOMENTUM EFFECT</h2>

              <div className="space-y-6">
                <div className="border border-zinc-800 p-6">
                  <h3 className="text-lg font-black text-green-500 mb-2">Decision Latency (GPI 1-3)</h3>
                  <p className="text-zinc-400 text-sm">Fast decisions enable rapid course correction. Momentum requires speed. Particle state decision-making kills momentum before it starts.</p>
                </div>

                <div className="border border-zinc-800 p-6">
                  <h3 className="text-lg font-black text-green-500 mb-2">Knowledge Velocity (GPI 1-3)</h3>
                  <p className="text-zinc-400 text-sm">Information flows freely. Learning compounds. What one person discovers, everyone can use immediately. Knowledge multiplication.</p>
                </div>

                <div className="border border-zinc-800 p-6">
                  <h3 className="text-lg font-black text-green-500 mb-2">Error Correction (GPI 1-3)</h3>
                  <p className="text-zinc-400 text-sm">Mistakes caught early. Course correction fast. Momentum is not about being perfect - it is about rapid recovery.</p>
                </div>

                <div className="border border-zinc-800 p-6">
                  <h3 className="text-lg font-black text-green-500 mb-2">Talent Flow (GPI 1-3)</h3>
                  <p className="text-zinc-400 text-sm">Right people in right roles. No friction from misalignment. Energy directed at output, not internal battles.</p>
                </div>

                <div className="border border-zinc-800 p-6">
                  <h3 className="text-lg font-black text-green-500 mb-2">Structural Lock-In (GPI 1-3)</h3>
                  <p className="text-zinc-400 text-sm">Flexibility preserved. Change possible. Momentum requires adaptation - rigid structures kill velocity.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnostic Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <LexiconDiagnostic
                lexiconTerm="momentum effect"
                questions={momentumQuestions}
                calculateResults={calculateMomentumResults}
                color="green"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">CREATE YOUR MOMENTUM EFFECT</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Stop adding effort linearly. Start multiplying momentum exponentially. Move to field state.
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
                  href: "/answers/glossary/the-first-signal",
                  title: "The First Signal",
                  description: "Where momentum begins. Initial market contact that enables field state.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/the-hidden-drain",
                  title: "The Hidden Drain",
                  description: "What kills momentum. Remove energy drains before attempting multiplication.",
                  color: "yellow"
                },
                {
                  href: "/interventions/the-override",
                  title: "The Override Intervention",
                  description: "30-day intervention to break particle state and enable momentum.",
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

export default MomentumEffectPage;
