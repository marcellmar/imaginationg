import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import RelatedContent from '../../../components/RelatedContent';
import LexiconDiagnostic from '../../../components/LexiconDiagnostic';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const HiddenDrainPage: NextPage = () => {
  const drainQuestions = [
    {
      id: 1,
      question: "Do simple tasks take longer than they should due to process overhead?",
      yesText: "PROCESS DRAIN",
      yesSubtext: "Hidden friction in workflow.",
      noText: "CLEAN EXECUTION",
      noSubtext: "Direct action possible."
    },
    {
      id: 2,
      question: "Does your energy drain even when you're not actively working?",
      yesText: "BACKGROUND DRAIN",
      yesSubtext: "System bleeding capacity.",
      noText: "ENERGY CONSERVED",
      noSubtext: "No unnecessary drain."
    },
    {
      id: 3,
      question: "Do you feel exhausted after meetings that accomplish little?",
      yesText: "MEETING DRAIN",
      yesSubtext: "Energy wasted on theater.",
      noText: "PRODUCTIVE ENGAGEMENT",
      noSubtext: "Energy well-invested."
    },
    {
      id: 4,
      question: "Are there invisible taxes on every decision you make?",
      yesText: "DECISION DRAIN",
      yesSubtext: "Hidden Decision Latency costs.",
      noText: "CLEAR CHOICES",
      noSubtext: "Decisions flow freely."
    },
    {
      id: 5,
      question: "Do you spend mental energy on things that don't create value?",
      yesText: "COGNITIVE DRAIN",
      yesSubtext: "Attention leaking away.",
      noText: "FOCUSED ENERGY",
      noSubtext: "Attention protected."
    }
  ];

  const calculateDrainResults = (answers: Record<number, 'yes' | 'no'>) => {
    const yesCount = Object.values(answers).filter(answer => answer === 'yes').length;
    const score = Math.round((yesCount / drainQuestions.length) * 100);

    let severity: 'low' | 'medium' | 'high' | 'critical';
    let title: string;
    let description: string;
    let recommendation: string;
    let interventionUrl: string | undefined;

    if (score <= 20) {
      severity = 'low';
      title = 'Clean Energy Systems';
      description = 'Your systems operate with minimal hidden drains. Energy flows efficiently to productive work. Field state characteristics present.';
      recommendation = 'Maintain this efficiency. Monitor for drain creep as you scale.';
    } else if (score <= 40) {
      severity = 'medium';
      title = 'Emerging Hidden Drains';
      description = 'Some energy is being lost to invisible friction. Early elimination can prevent compounding effects on GPI.';
      recommendation = 'Audit your energy flows. Identify and eliminate hidden taxes on productivity.';
      interventionUrl = '/interventions/the-map';
    } else if (score <= 70) {
      severity = 'high';
      title = 'Significant Drain Infection';
      description = 'Hidden energy drains are substantial. Most capacity goes to feeding the system rather than productive work. GPI likely 7-8.';
      recommendation = 'Emergency drain elimination. Map all energy drains and eliminate non-essential ones immediately.';
      interventionUrl = '/interventions/the-map';
    } else {
      severity = 'critical';
      title = 'Terminal Drain State';
      description = 'Your system exists primarily to feed itself. Almost all energy goes to maintaining overhead rather than creating value. GPI likely 9-10.';
      recommendation = 'Complete system redesign required. Current structure is optimized for drains, not output.';
      interventionUrl = '/interventions/the-override';
    }

    return { score, severity, title, description, recommendation, interventionUrl };
  };

  return (
    <>
      <SEOHead
        title="The Hidden Drain - Invisible Energy Losses | IMAGINATION G"
        description="The Hidden Drain represents invisible energy losses in systems—the tax on every action that compounds particle state. Learn to identify and eliminate these silent productivity killers."
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
                THE HIDDEN<br />DRAIN<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Invisible energy losses in systems. The silent tax that compounds particle state and slows Knowledge Velocity.
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
                  The Hidden Drain is the aggregate of invisible energy losses that tax every action
                  in a system. It's not friction you can see—it's the thousand micro-resistances
                  that make simple things exhausting and complex things impossible.
                </p>
              </div>

              {/* TL;DR Box */}
              <div className="bg-black border-2 border-yellow-500 p-8 mb-12">
                <h3 className="text-xl font-black text-yellow-500 mb-4">TL;DR</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Hidden drains = invisible energy vampires accelerating particle state</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Death by a thousand tiny cuts to Knowledge Velocity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Makes everything 10x harder than necessary</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Compounds silently until GPI reaches critical levels</span>
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
              <h2 className="text-3xl font-black mb-12">TYPES OF HIDDEN DRAINS</h2>

              <div className="space-y-8">
                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">COGNITIVE DRAIN</h3>
                  <p className="text-zinc-400 mb-4">
                    Mental energy losses from context switching, unclear priorities, decision fatigue.
                    Every unmade decision, every ambiguous goal, every interruption compounds Decision Latency.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Examples:</strong> Slack notifications, unclear ownership, "quick questions"<br />
                    <strong>GPI Impact:</strong> +1-2 points on Decision Latency dimension
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">PROCESS DRAIN</h3>
                  <p className="text-zinc-400 mb-4">
                    Hidden taxes in workflows. The three approvals that could be one. The form that
                    asks for information you already provided. The meeting before the meeting.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Examples:</strong> Duplicate data entry, permission loops, status updates<br />
                    <strong>GPI Impact:</strong> +2-3 points on Structural Lock-In dimension
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">EMOTIONAL DRAIN</h3>
                  <p className="text-zinc-400 mb-4">
                    Energy lost to organizational politics, unresolved conflicts, political navigation.
                    The exhaustion of pretending, managing egos, walking on eggshells.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Examples:</strong> Office politics, passive aggression, trust deficits<br />
                    <strong>GPI Impact:</strong> +2-4 points on Talent Flow dimension (causes exodus)
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">TECHNICAL DRAIN</h3>
                  <p className="text-zinc-400 mb-4">
                    System inefficiencies that tax every interaction. Slow tools, broken integrations,
                    manual workarounds for automated failures. Digital quicksand.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Examples:</strong> Legacy systems, tool sprawl, "temporary" fixes<br />
                    <strong>GPI Impact:</strong> Exponential as systems interconnect
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detection Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">HIDDEN DRAIN DETECTION</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-black mb-4 text-red-500">INDIVIDUAL SIGNALS</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• Exhausted but can't point to big tasks</li>
                    <li>• Simple things feel overwhelming</li>
                    <li>• Procrastination on "easy" items</li>
                    <li>• Energy crashes without clear cause</li>
                    <li>• Work feels like swimming in molasses</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-4 text-red-500">SYSTEM SIGNALS</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• Everything takes 3x estimated time</li>
                    <li>• High activity, low Knowledge Velocity</li>
                    <li>• People burn out doing "normal" work</li>
                    <li>• Simple changes require heroic effort</li>
                    <li>• Success feels unsustainable</li>
                  </ul>
                </div>
              </div>

              {/* Measurement Box */}
              <div className="bg-zinc-950 border border-zinc-800 p-8">
                <h3 className="text-xl font-black mb-6">THE DRAIN MULTIPLIER</h3>
                <div className="space-y-4">
                  <p className="text-zinc-400">
                    <strong>Actual effort = Base effort × (1 + Drain coefficient)</strong>
                  </p>
                  <p className="text-zinc-400">
                    Most organizations operate with a Drain coefficient between 2x and 5x.
                    This means every hour of "real work" requires 3-6 hours of total effort.
                  </p>
                  <p className="text-sm text-red-600">
                    <strong>GPI insight:</strong> Reducing Hidden Drains by 50% doubles effective capacity
                    without hiring, without overtime, without burnout. GPI drops 1-2 points.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Elimination Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">DRAIN ELIMINATION PROTOCOL</h2>

              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 1</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Energy Audit</h4>
                    <p className="text-zinc-400">Track where energy actually goes vs. where value is created. Map Knowledge Velocity blockers.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 2</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Identify Vampires</h4>
                    <p className="text-zinc-400">Find the processes, people, and systems that drain without giving. These are your particle state accelerators.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 3</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Ruthless Elimination</h4>
                    <p className="text-zinc-400">Delete before optimizing. Question before accepting. Move toward field state.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 4</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Protect the Gains</h4>
                    <p className="text-zinc-400">Drains grow back. Build Error Correction systems to keep them out. Re-measure GPI at 30/60/90 days.</p>
                  </div>
                </div>
              </div>

              {/* Warning Box */}
              <div className="bg-black border-l-4 border-red-600 p-8 mt-12">
                <h3 className="text-xl font-black mb-4 text-red-600">DRAIN LAW</h3>
                <p className="text-zinc-400">
                  Hidden Drains are attracted to success. The more you achieve, the more energy vampires appear.
                  Organizations that don't actively fight drains will eventually be consumed by them,
                  no matter how successful they appear. GPI will silently climb toward particle state.
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
                lexiconTerm="hidden drain"
                questions={drainQuestions}
                calculateResults={calculateDrainResults}
                color="yellow"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">ELIMINATE YOUR HIDDEN DRAINS</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Stop bleeding energy into the void. Start moving toward field state without invisible resistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/interventions/the-map"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                MAP YOUR ENERGY DRAINS
              </Link>
              <Link
                href="/answers"
                className="border-2 border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors"
              >
                EXPLORE MORE PATTERNS
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
                  description: "Surface agreement hiding energy drains. The comfort trap.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/the-momentum-effect",
                  title: "The Momentum Effect",
                  description: "Velocity multiplication. The opposite of Hidden Drains.",
                  color: "yellow"
                },
                {
                  href: "/interventions/the-map",
                  title: "Drain Elimination Mapping",
                  description: "5 days to expose where your energy is leaking.",
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

export default HiddenDrainPage;
