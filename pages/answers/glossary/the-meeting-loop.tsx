import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import RelatedContent from '../../../components/RelatedContent';
import LexiconDiagnostic from '../../../components/LexiconDiagnostic';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const MeetingLoopPage: NextPage = () => {
  const meetingQuestions = [
    {
      id: 1,
      question: "Do you spend more hours in meetings than doing actual work?",
      yesText: "DECISION LATENCY SPIKE",
      yesSubtext: "Calendar has conquered productivity.",
      noText: "WORK PROTECTED",
      noSubtext: "Meetings serve work, not replace it."
    },
    {
      id: 2,
      question: "Are you scheduling meetings to schedule other meetings?",
      yesText: "RECURSIVE PARTICLE STATE",
      yesSubtext: "Meta-meeting infection detected.",
      noText: "FIELD STATE FLOW",
      noSubtext: "Decisions happen without ceremony."
    },
    {
      id: 3,
      question: "Do people attend meetings where they contribute nothing?",
      yesText: "STRUCTURAL LOCK-IN",
      yesSubtext: "Performance over participation.",
      noText: "PURPOSE-DRIVEN FLOW",
      noSubtext: "Only necessary voices present."
    },
    {
      id: 4,
      question: "Are back-to-back meetings preventing any real thinking time?",
      yesText: "KNOWLEDGE VELOCITY COLLAPSE",
      yesSubtext: "No space between thoughts.",
      noText: "THINKING SPACE PROTECTED",
      noSubtext: "Calendar allows for reflection."
    },
    {
      id: 5,
      question: "Do meetings end without clear decisions or next steps?",
      yesText: "ERROR CORRECTION BLOCKED",
      yesSubtext: "Discussion without resolution.",
      noText: "DECISION FORCING",
      noSubtext: "Meetings create forward motion."
    }
  ];

  const calculateMeetingResults = (answers: Record<number, 'yes' | 'no'>) => {
    const yesCount = Object.values(answers).filter(answer => answer === 'yes').length;
    const score = Math.round((yesCount / meetingQuestions.length) * 100);

    let severity: 'low' | 'medium' | 'high' | 'critical';
    let title: string;
    let description: string;
    let recommendation: string;
    let interventionUrl: string | undefined;

    if (score <= 20) {
      severity = 'low';
      title = 'Field State: Meeting Discipline';
      description = 'Your meetings serve productivity rather than consuming it. Time is protected for actual work. GPI Decision Latency likely 1-3.';
      recommendation = 'Maintain this discipline. Resist meeting creep as you scale. Monitor for particle state drift.';
    } else if (score <= 40) {
      severity = 'medium';
      title = 'Transition Zone: Meeting Drift';
      description = 'The Meeting Loop is starting to form. Some meetings are consuming productive time without clear value. GPI Decision Latency likely 4-5.';
      recommendation = 'Audit meeting necessity. Cancel recurring meetings that do not force decisions. Protect Knowledge Velocity.';
      interventionUrl = '/interventions/the-map';
    } else if (score <= 70) {
      severity = 'high';
      title = 'Particle State: Active Meeting Loop';
      description = 'Meetings have become the primary activity. Actual work happens in the margins between discussions. GPI Decision Latency likely 6-8.';
      recommendation = 'Emergency meeting detox. Cancel all non-essential meetings for one week. Break the Structural Lock-In.';
      interventionUrl = '/interventions/the-override';
    } else {
      severity = 'critical';
      title = 'Terminal Particle State: Meeting Infection';
      description = 'Your calendar is 100% meetings. Work has been eliminated by the act of discussing work. GPI Decision Latency 9-10.';
      recommendation = 'Complete calendar reset required. Meetings have consumed the organization. Immediate intervention needed.';
      interventionUrl = '/interventions/the-override';
    }

    return { score, severity, title, description, recommendation, interventionUrl };
  };

  return (
    <>
      <SEOHead
        title="The Meeting Loop - How Meetings Kill Decision Velocity | IMAGINATION G"
        description="The Meeting Loop is a particle state pattern where discussions replace decisions. Learn how meeting culture creates Decision Latency and blocks Error Correction."
        ogType="article"
        ogImage="/images/og-answers.svg"
        article={{
          publishedTime: "2025-06-09T00:00:00Z",
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
                THE MEETING<br />LOOP<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                When meetings become the enemy of actual work. The particle state pattern where discussing replaces doing.
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
                  The Meeting Loop is a particle state pattern where your calendar becomes a friction machine.
                  Meetings spawn meetings. Discussion replaces decision. The organization optimizes for
                  attendance over output. Decision Latency spikes while Error Correction collapses.
                </p>
              </div>

              {/* TL;DR Box */}
              <div className="bg-black border-2 border-yellow-500 p-8 mb-12">
                <h3 className="text-xl font-black text-yellow-500 mb-4">TL;DR</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Meeting Loop = particle state where discussion replaces decision</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Causes massive Decision Latency (GPI 7-10 in this dimension)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Blocks Error Correction by preventing action</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Breaking requires calendar reset, not optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">THE MEETING LOOP PARTICLE STATE</h2>

              <div className="space-y-8">
                <div className="border border-red-600 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">THE GPI IMPACT</h3>
                  <div className="space-y-4 text-zinc-400">
                    <p><strong>Decision Latency:</strong> Every decision requires a meeting, which requires scheduling, which requires availability coordination. Days become weeks.</p>
                    <p><strong>Knowledge Velocity:</strong> Information trapped in meetings instead of flowing through systems. Knowledge dies in calendars.</p>
                    <p><strong>Error Correction:</strong> Cannot course-correct because the next meeting is not until Thursday. Problems compound while waiting for discussion.</p>
                    <p><strong>Talent Flow:</strong> Best performers leave because they cannot actually produce. Meeting tolerance becomes a hiring filter.</p>
                  </div>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">THE PARTICLE STATE STATISTICS</h3>
                  <div className="space-y-4">
                    <blockquote className="border-l-4 border-yellow-500 pl-6 italic text-zinc-300">
                      "Executives: 23 hours/week in meetings (vs. 10 hours in 1960s)"
                    </blockquote>
                    <blockquote className="border-l-4 border-yellow-500 pl-6 italic text-zinc-300">
                      "Meeting growth: 8-10% annually. Productivity growth: 1%."
                    </blockquote>
                    <blockquote className="border-l-4 border-yellow-500 pl-6 italic text-zinc-300">
                      "Average calendar density: 3 minutes between meetings. Zero time for field state work."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meeting Types */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">ANATOMY OF THE MEETING LOOP</h2>

              <div className="space-y-6">
                <div className="border border-zinc-800 p-6">
                  <h3 className="text-xl font-black mb-3 text-red-600">STAGE 1: THE RECURSIVE MEETING</h3>
                  <p className="text-zinc-400 mb-3">
                    "Let's schedule a meeting to discuss what we'll discuss in the next meeting."
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>GPI Impact:</strong> Decision Latency multiplies. Each meta-meeting spawns 3 more meetings.
                  </p>
                </div>

                <div className="border border-zinc-800 p-6">
                  <h3 className="text-xl font-black mb-3 text-red-600">STAGE 2: THE THEATER MEETING</h3>
                  <p className="text-zinc-400 mb-3">
                    Everyone attends but only 2 people speak. The other 8 are audience to avoid FOMO.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>GPI Impact:</strong> Structural Lock-In hardens. Attendance becomes mandatory even without value.
                  </p>
                </div>

                <div className="border border-zinc-800 p-6">
                  <h3 className="text-xl font-black mb-3 text-red-600">STAGE 3: THE STATUS MEETING</h3>
                  <p className="text-zinc-400 mb-3">
                    Round-robin of updates that could have been a Slack message. No decisions made.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>GPI Impact:</strong> Knowledge Velocity collapses. Information moves at meeting speed instead of system speed.
                  </p>
                </div>

                <div className="border border-zinc-800 p-6">
                  <h3 className="text-xl font-black mb-3 text-red-600">STAGE 4: TERMINAL PARTICLE STATE</h3>
                  <p className="text-zinc-400 mb-3">
                    The calendar is full. Work happens in margins. Thinking time: zero.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>GPI Impact:</strong> All dimensions particle state. Organization cannot function without meetings but cannot function with them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12 text-green-500">BREAKING THE MEETING LOOP</h2>

              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">RULE 1</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Default to No Meeting</h4>
                    <p className="text-zinc-400">Every meeting must justify why it cannot be an email or async decision. Reduce Decision Latency.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">RULE 2</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Protected Field State Blocks</h4>
                    <p className="text-zinc-400">Schedule 4-hour blocks for actual work. Meetings cannot break these. Protect Knowledge Velocity.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">RULE 3</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Decision Forcing Function</h4>
                    <p className="text-zinc-400">Every meeting must end with specific decisions and owners. No decision = failed meeting. Enable Error Correction.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">RULE 4</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Meeting Cost Transparency</h4>
                    <p className="text-zinc-400">Calculate real cost: hourly rate x attendees x time. Make the particle state drain visible.</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-900 border border-green-500 p-8 mt-12">
                <h3 className="text-xl font-black mb-4 text-green-500">THE OVERRIDE OPTION</h3>
                <p className="text-zinc-300">
                  Cancel all recurring meetings for one week. See what actually breaks vs. what was just Structural Lock-In.
                  You will discover 80% of meetings were theater, not necessity. This is the fastest path to field state.
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
                lexiconTerm="meeting loop"
                questions={meetingQuestions}
                calculateResults={calculateMeetingResults}
                color="red"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">BREAK YOUR MEETING LOOP</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Stop optimizing meetings. Start eliminating them. Move from particle state to field state.
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
                  href: "/answers/glossary/the-friction-loop",
                  title: "The Friction Loop",
                  description: "How dysfunction feeds itself. Systems that optimize for their own particle state.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/the-hidden-drain",
                  title: "The Hidden Drain",
                  description: "Invisible energy losses. Where capacity disappears without detection.",
                  color: "yellow"
                },
                {
                  href: "/interventions/the-override",
                  title: "The Override Intervention",
                  description: "30-day intervention to force field state. Break stuck patterns.",
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

export default MeetingLoopPage;
