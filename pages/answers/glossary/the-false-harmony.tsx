import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import RelatedContent from '../../../components/RelatedContent';
import LexiconDiagnostic from '../../../components/LexiconDiagnostic';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const FalseHarmonyPage: NextPage = () => {
  const harmonyQuestions = [
    {
      id: 1,
      question: "Do difficult conversations get postponed in your organization?",
      yesText: "PARTICLE STATE COMFORT",
      yesSubtext: "Comfort over truth.",
      noText: "FIELD STATE CONFLICT",
      noSubtext: "Truth over comfort."
    },
    {
      id: 2,
      question: "Do people agree in meetings but resist in execution?",
      yesText: "FALSE CONSENSUS",
      yesSubtext: "Nodding without believing.",
      noText: "REAL ALIGNMENT",
      noSubtext: "Agreement through conflict."
    },
    {
      id: 3,
      question: "Are real problems discussed only in private conversations?",
      yesText: "SHADOW DISCOURSE",
      yesSubtext: "Truth lives in hallways.",
      noText: "OPEN DISCOURSE",
      noSubtext: "Truth lives in meetings."
    },
    {
      id: 4,
      question: "Does your team avoid giving each other hard feedback?",
      yesText: "ERROR CORRECTION BLOCKED",
      yesSubtext: "Kindness over growth.",
      noText: "ERROR CORRECTION ACTIVE",
      noSubtext: "Growth over comfort."
    },
    {
      id: 5,
      question: "Do failures get reframed as 'learning experiences' without accountability?",
      yesText: "ACCOUNTABILITY VOID",
      yesSubtext: "Everyone is a victim.",
      noText: "CLEAR OWNERSHIP",
      noSubtext: "Someone owns results."
    }
  ];

  const calculateHarmonyResults = (answers: Record<number, 'yes' | 'no'>) => {
    const yesCount = Object.values(answers).filter(answer => answer === 'yes').length;
    const score = Math.round((yesCount / harmonyQuestions.length) * 100);

    let severity: 'low' | 'medium' | 'high' | 'critical';
    let title: string;
    let description: string;
    let recommendation: string;
    let interventionUrl: string | undefined;

    if (score <= 20) {
      severity = 'low';
      title = 'Field State: Healthy Conflict Culture';
      description = 'Your organization handles difficult conversations well. Truth flows freely, and productive conflict drives Error Correction. GPI likely 1-3 on Error Correction dimension.';
      recommendation = 'Maintain this healthy dynamic. Watch for early signs of particle state comfort-seeking.';
    } else if (score <= 40) {
      severity = 'medium';
      title = 'Transition Zone: Early False Harmony';
      description = 'Some false harmony is creeping in. Error Correction is weakening. GPI likely 4-5 on Error Correction dimension.';
      recommendation = 'Create structured opportunities for difficult conversations. Normalize productive disagreement.';
      interventionUrl = '/interventions/the-naming';
    } else if (score <= 70) {
      severity = 'high';
      title = 'Particle State: Significant False Harmony';
      description = 'False harmony is damaging your organization. Real problems are hidden, Error Correction is blocked. GPI likely 6-8 on Error Correction dimension.';
      recommendation = 'Immediate intervention required. Break the comfort conspiracy through forced truth-telling.';
      interventionUrl = '/interventions/the-naming';
    } else {
      severity = 'critical';
      title = 'Terminal Particle State: False Harmony Lock-In';
      description = 'Your organization is addicted to false peace. Truth has been exiled and reality is the enemy. GPI 9-10 on Error Correction dimension.';
      recommendation = 'Emergency cultural intervention. Consider leadership changes if resistance is too strong.';
      interventionUrl = '/interventions/the-override';
    }

    return { score, severity, title, description, recommendation, interventionUrl };
  };

  return (
    <>
      <SEOHead
        title="The False Harmony - When Surface Agreement Masks Dysfunction | IMAGINATION G"
        description="The False Harmony is a particle state pattern where artificial agreement prevents Error Correction. Learn how comfort kills progress and how to restore truth flow."
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
                GPI DIMENSION: ERROR CORRECTION
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                THE FALSE<br />HARMONY<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Artificial harmony that masks real discord. The particle state pattern where comfort kills Error Correction.
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
                  The False Harmony is a particle state pattern where organizations choose surface agreement over
                  productive conflict. It is the organizational sedative - everyone agrees to pretend problems
                  do not exist. This false peace prevents the Error Correction necessary for field state operation.
                </p>
              </div>

              {/* TL;DR Box */}
              <div className="bg-black border-2 border-yellow-500 p-8 mb-12">
                <h3 className="text-xl font-black text-yellow-500 mb-4">TL;DR</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>False Harmony = particle state where agreement replaces truth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Blocks Error Correction (GPI 7-10 in this dimension)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Comfort becomes the hidden organizational goal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Breaking requires controlled conflict, not more consensus</span>
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
              <h2 className="text-3xl font-black mb-12">THE FALSE HARMONY SPECTRUM</h2>

              <div className="space-y-8">
                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">STAGE 1: SURFACE FALSE HARMONY (GPI 4-5)</h3>
                  <p className="text-zinc-400 mb-4">
                    Polite meetings where real issues stay unspoken. Everyone nods, nobody believes.
                    Error Correction begins to slow. The conspiracy of false agreement wastes time and trust.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Signal:</strong> "Great idea!" (nobody implements it)<br />
                    <strong>Dimension Impact:</strong> Error Correction weakening, Decision Latency increasing
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">STAGE 2: CULTURAL FALSE HARMONY (GPI 6-7)</h3>
                  <p className="text-zinc-400 mb-4">
                    "That's just our culture" becomes the excuse for dysfunction. Toxicity gets
                    rebranded as tradition. Problems become identity. Structural Lock-In begins.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Signal:</strong> "We're like a family here" (dysfunctional family)<br />
                    <strong>Dimension Impact:</strong> Talent Flow blocked, Knowledge Velocity declining
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">STAGE 3: STRATEGIC FALSE HARMONY (GPI 7-8)</h3>
                  <p className="text-zinc-400 mb-4">
                    False consensus on direction. Everyone pretends the strategy makes sense.
                    Nobody wants to be the one who "doesn't get it." Decision Latency compounds.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Signal:</strong> Head nods in meetings, chaos in execution<br />
                    <strong>Dimension Impact:</strong> Capital Intensity rising (resources burned on imaginary alignment)
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">STAGE 4: TERMINAL PARTICLE STATE (GPI 9-10)</h3>
                  <p className="text-zinc-400 mb-4">
                    The organization becomes addicted to false peace. Truth-tellers get expelled.
                    Reality becomes the enemy. Decline accelerates behind smiles. All dimensions in particle state.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Signal:</strong> "Everything's fine" while building burns<br />
                    <strong>Dimension Impact:</strong> System failure imminent across all dimensions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mechanics Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">HOW FALSE HARMONY KILLS GPI</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-black mb-4 text-yellow-500">THE COMFORT TRAP</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>Error Correction stops: problems never surface</li>
                    <li>Decision Latency spikes: avoiding conflict takes time</li>
                    <li>Knowledge Velocity collapses: truth cannot flow</li>
                    <li>Mediocrity becomes sacred: excellence threatens harmony</li>
                    <li>Innovation dies: new ideas create uncomfortable conversations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-4 text-yellow-500">THE TRUTH DECAY</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>Data gets massaged to avoid conflict</li>
                    <li>Feedback loops break completely</li>
                    <li>Reality distortion compounds daily</li>
                    <li>Decision-making loses ground truth</li>
                    <li>Organization goes operationally blind</li>
                  </ul>
                </div>
              </div>

              {/* Physics Visualization */}
              <div className="bg-zinc-950 border border-zinc-800 p-8">
                <h3 className="text-xl font-black mb-6">THE FALSE HARMONY EQUATION</h3>
                <div className="space-y-4 font-mono text-sm">
                  <div>FALSE HARMONY + TIME = INVISIBLE ROT</div>
                  <div className="text-red-600">x</div>
                  <div>CONFLICT AVOIDANCE = PROBLEM MULTIPLICATION</div>
                  <div className="text-red-600">=</div>
                  <div className="text-xl">SUDDEN CATASTROPHIC FAILURE (GPI 10)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breaking False Harmony Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">SHATTERING THE FALSE HARMONY</h2>

              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">PHASE 1</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Surface the Unspoken</h4>
                    <p className="text-zinc-400">Create safe spaces for dangerous truths. What everyone knows but will not say. Enable Error Correction.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">PHASE 2</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Normalize Productive Conflict</h4>
                    <p className="text-zinc-400">Teach the difference between conflict and combat. Make disagreement safe. Reduce Decision Latency.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">PHASE 3</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Reward Truth-Telling</h4>
                    <p className="text-zinc-400">Celebrate those who break false harmony. Create consequences for those who maintain it. Enable Talent Flow.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">PHASE 4</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Build Real Alignment</h4>
                    <p className="text-zinc-400">True harmony after conflict. Earned peace, not false peace. Field state through truth.</p>
                  </div>
                </div>
              </div>

              {/* Truth Box */}
              <div className="bg-black border-l-4 border-yellow-500 p-8 mt-12">
                <h3 className="text-xl font-black mb-4 text-yellow-500">THE FALSE HARMONY PARADOX</h3>
                <p className="text-zinc-400">
                  Organizations that cannot handle conflict cannot handle success. The same muscles
                  that navigate disagreement navigate growth. Kill conflict, kill capability.
                  Field state requires friction tolerance.
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
                lexiconTerm="false harmony"
                questions={harmonyQuestions}
                calculateResults={calculateHarmonyResults}
                color="yellow"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">BREAK YOUR FALSE HARMONY</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Stop pretending everything is fine. Start building field state through truth.
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
                  href: "/answers/glossary/the-decision-stall",
                  title: "The Decision Stall",
                  description: "When consensus prevents decisions. How agreement becomes paralysis.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/the-hidden-drain",
                  title: "The Hidden Drain",
                  description: "Hidden energy drains. The invisible tax on every action.",
                  color: "yellow"
                },
                {
                  href: "/interventions/the-naming",
                  title: "The Naming Intervention",
                  description: "Surface what your organization will not say. Break false harmony.",
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

export default FalseHarmonyPage;
