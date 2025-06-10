import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import RelatedContent from '../../../components/RelatedContent';
import LexiconDiagnostic from '../../../components/LexiconDiagnostic';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const PilorPage: NextPage = () => {
  const pilorQuestions = [
    {
      id: 1,
      question: "Do problems keep recurring despite multiple 'fixes'?",
      yesText: "RECURSIVE FAILURE",
      yesSubtext: "System optimizing for dysfunction.",
      noText: "CLEAN FIXES",
      noSubtext: "Problems stay solved."
    },
    {
      id: 2,
      question: "Do your solutions create new versions of the same problem?",
      yesText: "PROBLEM MUTATION",
      yesSubtext: "Failure evolving to survive.",
      noText: "ROOT RESOLUTION",
      noSubtext: "Core issues addressed."
    },
    {
      id: 3,
      question: "Does your organization resist changes that would actually work?",
      yesText: "DYSFUNCTION DEFENSE",
      yesSubtext: "System protecting its failure.",
      noText: "SOLUTION HUNGRY",
      noSubtext: "Change is welcomed."
    },
    {
      id: 4,
      question: "Do 'temporary' workarounds become permanent features?",
      yesText: "WORKAROUND CALCIFICATION",
      yesSubtext: "Band-aids become architecture.",
      noText: "PROPER SOLUTIONS",
      noSubtext: "Fixes address root causes."
    }
  ];

  const calculatePilorResults = (answers: Record<number, 'yes' | 'no'>) => {
    const yesCount = Object.values(answers).filter(answer => answer === 'yes').length;
    const score = Math.round((yesCount / pilorQuestions.length) * 100);
    
    let severity: 'low' | 'medium' | 'high' | 'critical';
    let title: string;
    let description: string;
    let recommendation: string;
    let interventionUrl: string | undefined;

    if (score <= 25) {
      severity = 'low';
      title = 'Healthy Problem Resolution';
      description = 'Your systems break failure loops effectively. Problems get solved and stay solved.';
      recommendation = 'Maintain this discipline. Document what makes your problem-solving effective.';
    } else if (score <= 50) {
      severity = 'medium';
      title = 'Early Pilor Signs';
      description = 'Some recursive patterns are emerging. Time to strengthen your problem-solving protocols.';
      recommendation = 'Focus on root cause analysis. Stop accepting workarounds as solutions.';
      interventionUrl = '/interventions/the-naming';
    } else if (score <= 75) {
      severity = 'high';
      title = 'Pilor Infection';
      description = 'Your organization is trapped in failure loops. Problems are becoming self-sustaining.';
      recommendation = 'Break the pattern. Map the failure loops and interrupt them systematically.';
      interventionUrl = '/interventions/the-map';
    } else {
      severity = 'critical';
      title = 'Terminal Pilor State';
      description = 'Your system has optimized for dysfunction. Failure has become organizational DNA.';
      recommendation = 'Complete system redesign required. Cannot fix from within current patterns.';
      interventionUrl = '/interventions/the-naming';
    }

    return { score, severity, title, description, recommendation, interventionUrl };
  };

  return (
    <>
      <SEOHead
        title="Pilor - Recursive Failure Loops | IMAGINATION G"
        description="Pilor is when systems optimize for their own dysfunction. Learn to recognize and break recursive failure loops that trap organizations in decline."
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
                Back to Answers
              </Link>

              {/* System Status Badge */}
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                LEXICON: PILOR
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                PILOR<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Recursive failure loops. When systems optimize for their own dysfunction.
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
                  Pilor (pee-lor) is a system state where failure becomes the optimization target. 
                  The organization unconsciously perfects its dysfunction, creating elegant mechanisms 
                  for consistent underperformance. Each iteration makes failure more efficient.
                </p>
              </div>

              {/* TL;DR Box */}
              <div className="bg-black border-2 border-yellow-500 p-8 mb-12">
                <h3 className="text-xl font-black text-yellow-500 mb-4">TL;DR</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Pilor = systems that perfect their own failure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Dysfunction becomes the hidden goal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Improvements make things worse</span>
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
              <h2 className="text-3xl font-black mb-12">THE ANATOMY OF PILOR</h2>
              
              <div className="space-y-8">
                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">STAGE 1: INITIAL FAILURE</h3>
                  <p className="text-zinc-400 mb-4">
                    A system fails. Normal response: create processes to prevent recurrence. 
                    But the cure contains the seeds of deeper dysfunction.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Signal:</strong> "We need better processes"<br />
                    <strong>Reality:</strong> Process becomes procrastination
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">STAGE 2: OPTIMIZATION BEGINS</h3>
                  <p className="text-zinc-400 mb-4">
                    The system starts optimizing around the failure. Workarounds become standard. 
                    Exception handling becomes the rule. Dysfunction gets infrastructure.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Signal:</strong> "That's just how we do things"<br />
                    <strong>Reality:</strong> Failure becomes culture
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">STAGE 3: RECURSIVE LOCK</h3>
                  <p className="text-zinc-400 mb-4">
                    Success now depends on dysfunction. Remove the failure pattern and the system 
                    collapses. People's jobs exist to manage problems that shouldn't exist.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Signal:</strong> "We can't change that—everything depends on it"<br />
                    <strong>Reality:</strong> Failure becomes load-bearing
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">STAGE 4: PERFECTED DYSFUNCTION</h3>
                  <p className="text-zinc-400 mb-4">
                    The system achieves maximum efficiency at failing. Every improvement makes 
                    failure more reliable. Success metrics measure dysfunction optimization.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Signal:</strong> "Our failure rate is very consistent"<br />
                    <strong>Reality:</strong> Failure becomes excellence
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
              <h2 className="text-3xl font-black mb-12">PILOR IN THE WILD</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-black mb-4 text-red-500">CORPORATE PILOR</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• Meetings to plan meetings</li>
                    <li>• Reports on why reports aren't done</li>
                    <li>• Hiring to fix hiring problems</li>
                    <li>• Process to manage process debt</li>
                    <li>• Innovation committees that prevent innovation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-4 text-red-500">STARTUP PILOR</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• Pivoting from pivots</li>
                    <li>• Growth hacks that prevent growth</li>
                    <li>• Features to fix feature bloat</li>
                    <li>• Fundraising to fund fundraising</li>
                    <li>• Scaling problems before product-market fit</li>
                  </ul>
                </div>
              </div>

              {/* Case Study Box */}
              <div className="bg-zinc-950 border border-zinc-800 p-8">
                <h3 className="text-xl font-black mb-6">CLASSIC PILOR CASE</h3>
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
                  <strong>The Pilor:</strong> They optimized the approval process instead of 
                  questioning why deployments needed approval.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Breaking Pilor Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">BREAKING PILOR LOOPS</h2>
              
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">RULE 1</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Never Optimize Dysfunction</h4>
                    <p className="text-zinc-400">If it shouldn't exist, don't make it better. Delete it.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">RULE 2</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Trace to Origin</h4>
                    <p className="text-zinc-400">Find the first failure. Everything else is recursion.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">RULE 3</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Shock the System</h4>
                    <p className="text-zinc-400">Gradual change strengthens pilor. Only disruption breaks it.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">RULE 4</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Accept Temporary Chaos</h4>
                    <p className="text-zinc-400">Breaking pilor creates mess. That's proof it's working.</p>
                  </div>
                </div>
              </div>

              {/* Warning Box */}
              <div className="bg-black border-l-4 border-red-600 p-8 mt-12">
                <h3 className="text-xl font-black mb-4 text-red-600">CRITICAL WARNING</h3>
                <p className="text-zinc-400">
                  Pilor systems defend themselves. They'll convince you that dysfunction is necessary, 
                  that failure is actually success, that the problem is the solution. The moment you 
                  start optimizing the failure, you've lost.
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
                lexiconTerm="pilor"
                questions={pilorQuestions}
                calculateResults={calculatePilorResults}
                color="red"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">ESCAPE YOUR PILOR</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Stop perfecting failure. Start breaking the loops that bind you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/interventions/the-map"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                MAP YOUR PILOR LOOPS
              </Link>
              <Link 
                href="/answers"
                className="border-2 border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors"
              >
                EXPLORE MORE CONCEPTS
              </Link>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <RelatedContent
              title="Related Concepts"
              items={[
                {
                  href: "/answers/glossary/strune",
                  title: "Strune Patterns",
                  description: "When movement creates resistance. The self-sabotage physics.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/quorr",
                  title: "Understanding Quorr",
                  description: "Technical debt disguised as features. Complexity serving no one.",
                  color: "yellow"
                },
                {
                  href: "/interventions/the-market-smackdown",
                  title: "Break Your Pilor",
                  description: "Market reality as system shock. Force the truth.",
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

export default PilorPage;