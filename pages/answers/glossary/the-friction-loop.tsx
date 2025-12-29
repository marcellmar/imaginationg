import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import RelatedContent from '../../../components/RelatedContent';
import LexiconDiagnostic from '../../../components/LexiconDiagnostic';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const FrictionLoopPage: NextPage = () => {
  const frictionQuestions = [
    {
      id: 1,
      question: "Do problems keep recurring despite multiple 'fixes'?",
      yesText: "RECURSIVE FRICTION",
      yesSubtext: "System optimizing for particle state.",
      noText: "CLEAN RESOLUTION",
      noSubtext: "Problems stay solved."
    },
    {
      id: 2,
      question: "Do your solutions create new versions of the same problem?",
      yesText: "FRICTION MUTATION",
      yesSubtext: "Friction evolving to survive.",
      noText: "ROOT RESOLUTION",
      noSubtext: "Core issues addressed."
    },
    {
      id: 3,
      question: "Does your organization resist changes that would reduce friction?",
      yesText: "PARTICLE DEFENSE",
      yesSubtext: "System protecting its dysfunction.",
      noText: "FIELD SEEKING",
      noSubtext: "Change is welcomed."
    },
    {
      id: 4,
      question: "Do 'temporary' workarounds become permanent features?",
      yesText: "WORKAROUND CALCIFICATION",
      yesSubtext: "Band-aids become Structural Lock-In.",
      noText: "PROPER SOLUTIONS",
      noSubtext: "Fixes address root causes."
    }
  ];

  const calculateFrictionResults = (answers: Record<number, 'yes' | 'no'>) => {
    const yesCount = Object.values(answers).filter(answer => answer === 'yes').length;
    const score = Math.round((yesCount / frictionQuestions.length) * 100);

    let severity: 'low' | 'medium' | 'high' | 'critical';
    let title: string;
    let description: string;
    let recommendation: string;
    let interventionUrl: string | undefined;

    if (score <= 25) {
      severity = 'low';
      title = 'Healthy Error Correction';
      description = 'Your systems break friction loops effectively. Problems get solved and stay solved. Field state characteristics present.';
      recommendation = 'Maintain this discipline. Document what makes your problem-solving effective.';
    } else if (score <= 50) {
      severity = 'medium';
      title = 'Early Friction Loop Signs';
      description = 'Some recursive patterns emerging. Decision Latency may be increasing. Time to strengthen Error Correction protocols.';
      recommendation = 'Focus on root cause analysis. Stop accepting workarounds as solutions.';
      interventionUrl = '/interventions/the-naming';
    } else if (score <= 75) {
      severity = 'high';
      title = 'Active Friction Loop';
      description = 'Your organization is trapped in recursive friction. Structural Lock-In is accelerating. GPI likely 7-9.';
      recommendation = 'Break the pattern. Map friction loops and interrupt them systematically.';
      interventionUrl = '/interventions/the-map';
    } else {
      severity = 'critical';
      title = 'Terminal Particle State';
      description = 'Your system has optimized for friction. Dysfunction has become organizational DNA. GPI likely 9-10.';
      recommendation = 'Complete system redesign required. Cannot fix from within current patterns.';
      interventionUrl = '/interventions/the-override';
    }

    return { score, severity, title, description, recommendation, interventionUrl };
  };

  return (
    <>
      <SEOHead
        title="The Friction Loop - How Dysfunction Feeds Itself | IMAGINATION G"
        description="The Friction Loop is when systems optimize for their own dysfunction, accelerating toward particle state. Learn to recognize and break recursive friction patterns."
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
                GPI DIMENSION: ERROR CORRECTION • STRUCTURAL LOCK-IN
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                THE FRICTION<br />LOOP<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Recursive friction patterns. When systems optimize for their own dysfunction and accelerate toward particle state.
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
                  The Friction Loop is a system state where friction becomes the optimization target.
                  The organization unconsciously perfects its dysfunction, creating elegant mechanisms
                  for consistent friction. Each iteration makes particle state more stable.
                </p>
              </div>

              {/* TL;DR Box */}
              <div className="bg-black border-2 border-yellow-500 p-8 mb-12">
                <h3 className="text-xl font-black text-yellow-500 mb-4">TL;DR</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Friction loops = systems that perfect their own dysfunction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Particle state becomes the hidden goal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Improvements can make things worse</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Breaking requires system shock, not iteration</span>
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
              <h2 className="text-3xl font-black mb-12">ANATOMY OF THE FRICTION LOOP</h2>

              <div className="space-y-8">
                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">STAGE 1: INITIAL FRICTION</h3>
                  <p className="text-zinc-400 mb-4">
                    A system creates friction. Normal response: add processes to prevent recurrence.
                    But the cure contains seeds of deeper particle state.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Signal:</strong> "We need better processes"<br />
                    <strong>Reality:</strong> Process becomes Decision Latency
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">STAGE 2: FRICTION OPTIMIZATION</h3>
                  <p className="text-zinc-400 mb-4">
                    The system starts optimizing around the friction. Workarounds become standard.
                    Exception handling becomes the rule. Dysfunction gets infrastructure.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Signal:</strong> "That's just how we do things"<br />
                    <strong>Reality:</strong> Friction becomes Structural Lock-In
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">STAGE 3: RECURSIVE LOCK</h3>
                  <p className="text-zinc-400 mb-4">
                    Success now depends on dysfunction. Remove the friction pattern and the system
                    collapses. People's jobs exist to manage problems that shouldn't exist.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Signal:</strong> "We can't change that—everything depends on it"<br />
                    <strong>Reality:</strong> Friction becomes load-bearing
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">STAGE 4: TERMINAL PARTICLE STATE</h3>
                  <p className="text-zinc-400 mb-4">
                    The system achieves maximum efficiency at creating friction. Every improvement makes
                    friction more reliable. Success metrics measure dysfunction optimization.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Signal:</strong> "Our failure rate is very consistent"<br />
                    <strong>Reality:</strong> Friction becomes excellence (GPI 9-10)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">FRICTION LOOPS IN THE WILD</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-black mb-4 text-red-500">CORPORATE FRICTION LOOPS</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• Meetings to plan meetings (Decision Latency)</li>
                    <li>• Reports on why reports aren't done</li>
                    <li>• Hiring to fix hiring problems (Talent Flow)</li>
                    <li>• Process to manage process debt</li>
                    <li>• Innovation committees that prevent innovation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-4 text-red-500">STARTUP FRICTION LOOPS</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• Pivoting from pivots (Knowledge Velocity)</li>
                    <li>• Growth hacks that prevent growth</li>
                    <li>• Features to fix feature bloat</li>
                    <li>• Fundraising to fund fundraising (Capital Intensity)</li>
                    <li>• Scaling problems before product-market fit</li>
                  </ul>
                </div>
              </div>

              {/* Case Study Box */}
              <div className="bg-zinc-950 border border-zinc-800 p-8">
                <h3 className="text-xl font-black mb-6">CLASSIC FRICTION LOOP CASE</h3>
                <p className="text-zinc-400 mb-4">
                  <strong>Company X</strong> had slow deployments. They added approval processes.
                  Deployments got slower. They added automation to speed up approvals.
                  This created more edge cases needing more approvals.
                </p>
                <p className="text-zinc-400 mb-4">
                  <strong>Five years later:</strong> 47-step deployment process. 11 full-time
                  employees managing deployment. Average deployment time: 6 weeks.
                </p>
                <p className="text-sm text-red-600">
                  <strong>The Friction Loop:</strong> They optimized the approval process instead of
                  questioning why deployments needed approval. GPI: 9.2 (Structural Lock-In).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Breaking Loops Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">BREAKING FRICTION LOOPS</h2>

              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">RULE 1</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Never Optimize Friction</h4>
                    <p className="text-zinc-400">If it shouldn't exist, don't make it better. Delete it. Move toward field state.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">RULE 2</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Trace to Origin</h4>
                    <p className="text-zinc-400">Find the first friction point. Everything else is recursion.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">RULE 3</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Shock the System</h4>
                    <p className="text-zinc-400">Gradual change strengthens friction loops. Only disruption breaks them.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">RULE 4</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Accept Temporary Chaos</h4>
                    <p className="text-zinc-400">Breaking friction loops creates mess. That's proof Error Correction is working.</p>
                  </div>
                </div>
              </div>

              {/* Warning Box */}
              <div className="bg-black border-l-4 border-red-600 p-8 mt-12">
                <h3 className="text-xl font-black mb-4 text-red-600">CRITICAL WARNING</h3>
                <p className="text-zinc-400">
                  Friction loops defend themselves. They'll convince you that dysfunction is necessary,
                  that particle state is actually field state, that the problem is the solution. The moment you
                  start optimizing the friction, you've lost.
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
                lexiconTerm="friction loop"
                questions={frictionQuestions}
                calculateResults={calculateFrictionResults}
                color="red"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">BREAK YOUR FRICTION LOOPS</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Stop perfecting dysfunction. Start moving toward field state.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/interventions/the-map"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                MAP YOUR FRICTION LOOPS
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
                  href: "/answers/glossary/the-hidden-drain",
                  title: "The Hidden Drain",
                  description: "Invisible energy losses that compound friction loop effects.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/the-slow-calcification",
                  title: "The Slow Calcification",
                  description: "How friction loops harden into permanent Structural Lock-In.",
                  color: "yellow"
                },
                {
                  href: "/interventions/the-override",
                  title: "Break Your Friction Loop",
                  description: "30-day intervention to force Error Correction and break patterns.",
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

export default FrictionLoopPage;
