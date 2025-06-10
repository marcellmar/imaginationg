import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import RelatedContent from '../../../components/RelatedContent';
import LexiconDiagnostic from '../../../components/LexiconDiagnostic';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const CalendarBattleshipPage: NextPage = () => {
  const battleshipQuestions = [
    {
      id: 1,
      question: "Do you spend more hours in meetings than doing actual work?",
      yesText: "MEETING OVERLOAD",
      yesSubtext: "Calendar has conquered productivity.",
      noText: "WORK PROTECTED",
      noSubtext: "Meetings serve work, not replace it."
    },
    {
      id: 2,
      question: "Are you scheduling meetings to schedule other meetings?",
      yesText: "RECURSIVE SCHEDULING",
      yesSubtext: "Meta-meeting infection detected.",
      noText: "DIRECT COMMUNICATION",
      noSubtext: "Decisions happen without ceremony."
    },
    {
      id: 3,
      question: "Do people attend meetings where they contribute nothing?",
      yesText: "MEETING THEATER",
      yesSubtext: "Performance over participation.",
      noText: "PURPOSE-DRIVEN ATTENDANCE",
      noSubtext: "Only necessary voices present."
    },
    {
      id: 4,
      question: "Are back-to-back meetings preventing any real thinking time?",
      yesText: "CALENDAR SUFFOCATION",
      yesSubtext: "No space between thoughts.",
      noText: "THINKING SPACE PROTECTED",
      noSubtext: "Calendar allows for reflection."
    },
    {
      id: 5,
      question: "Do meetings end without clear decisions or next steps?",
      yesText: "MEETING PURGATORY",
      yesSubtext: "Discussion without resolution.",
      noText: "DECISION FORCING",
      noSubtext: "Meetings create forward motion."
    }
  ];

  const calculateBattleshipResults = (answers: Record<number, 'yes' | 'no'>) => {
    const yesCount = Object.values(answers).filter(answer => answer === 'yes').length;
    const score = Math.round((yesCount / battleshipQuestions.length) * 100);
    
    let severity: 'low' | 'medium' | 'high' | 'critical';
    let title: string;
    let description: string;
    let recommendation: string;
    let interventionUrl: string | undefined;

    if (score <= 20) {
      severity = 'low';
      title = 'Calendar Under Control';
      description = 'Your meetings serve productivity rather than consuming it. Time is protected for actual work.';
      recommendation = 'Maintain this discipline. Resist meeting creep as you scale.';
    } else if (score <= 40) {
      severity = 'medium';
      title = 'Meeting Drift Beginning';
      description = 'Calendar battleship is starting to form. Some meetings are consuming productive time without clear value.';
      recommendation = 'Audit meeting necessity. Cancel recurring meetings that don\'t force decisions.';
      interventionUrl = '/interventions/the-map';
    } else if (score <= 70) {
      severity = 'high';
      title = 'Active Calendar Battleship';
      description = 'Meetings have become the primary activity. Actual work happens in the margins between discussions.';
      recommendation = 'Emergency meeting detox. Cancel all non-essential meetings for one week.';
      interventionUrl = '/interventions/the-naming';
    } else {
      severity = 'critical';
      title = 'Terminal Meeting Infection';
      description = 'Your calendar is 100% meetings. Work has been eliminated by the act of discussing work.';
      recommendation = 'Complete calendar reset required. Meetings have consumed the organization.';
      interventionUrl = '/interventions/the-naming';
    }

    return { score, severity, title, description, recommendation, interventionUrl };
  };

  return (
    <>
      <SEOHead
        title="Calendar Battleship - When Meetings Kill Work | IMAGINATION G"
        description="Calendar Battleship is when your calendar becomes a war zone where meetings kill actual work. Learn to recognize and defeat this productivity destroyer."
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
                Back to Answers
              </Link>

              {/* System Status Badge */}
              <div className="inline-block mb-8 text-red-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></span>
                REALITY: CALENDAR BATTLESHIP
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                CALENDAR BATTLESHIP<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                When meetings become the enemy of actual work. The productivity killer hiding in plain sight.
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
                  Calendar Battleship is when your schedule becomes a war zone where meetings systematically 
                  destroy the time needed for actual work. Like the game, you're firing blind at productivity 
                  while meetings sink every hour that could create value.
                </p>
              </div>

              {/* TL;DR Box */}
              <div className="bg-black border-2 border-yellow-500 p-8 mb-12">
                <h3 className="text-xl font-black text-yellow-500 mb-4">TL;DR</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Meetings multiplying faster than work gets done</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Back-to-back schedule = no thinking time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Discussing work replaces doing work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Calendar becomes enemy of productivity</span>
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
              <h2 className="text-3xl font-black mb-12">THE CALENDAR BATTLESHIP REALITY</h2>
              
              <div className="space-y-8">
                <div className="border border-red-600 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">THE STATISTICS THAT KILL</h3>
                  <div className="space-y-4 text-zinc-400">
                    <p>• <strong>Executives:</strong> 23 hours/week in meetings (vs. 10 hours in 1960s)</p>
                    <p>• <strong>67% of professionals:</strong> Spend too much time in meetings</p>
                    <p>• <strong>Meeting growth:</strong> 8-10% annually, productivity growth: 1%</p>
                    <p>• <strong>Real work time:</strong> Happens before 9am or after 6pm</p>
                    <p>• <strong>Calendar density:</strong> Average of 3 minutes between meetings</p>
                  </div>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">WHAT PEOPLE ACTUALLY SAY</h3>
                  <div className="space-y-4">
                    <blockquote className="border-l-4 border-yellow-500 pl-6 italic text-zinc-300">
                      "I'm coming home hysterical every day because I spent 8 hours in meetings and couldn't get any real work done."
                    </blockquote>
                    <blockquote className="border-l-4 border-yellow-500 pl-6 italic text-zinc-300">
                      "Meetings where work goes to die. We discuss the work instead of doing the work."
                    </blockquote>
                    <blockquote className="border-l-4 border-yellow-500 pl-6 italic text-zinc-300">
                      "Calendar battleship - just firing meetings randomly hoping something gets hit."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Battleship Metaphor */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">WHY "BATTLESHIP"?</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-zinc-800 p-6">
                  <h3 className="text-xl font-black mb-4 text-red-600">IN THE GAME</h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• Fire blind at invisible targets</li>
                    <li>• Hit or miss with no real strategy</li>
                    <li>• Waste ammunition on empty water</li>
                    <li>• Victory by elimination, not creation</li>
                    <li>• Game ends when everything is sunk</li>
                  </ul>
                </div>
                <div className="border border-zinc-800 p-6">
                  <h3 className="text-xl font-black mb-4 text-red-600">IN YOUR CALENDAR</h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• Schedule meetings hoping something sticks</li>
                    <li>• No clear target or outcome</li>
                    <li>• Waste time on pointless discussions</li>
                    <li>• Success by attendance, not results</li>
                    <li>• Game ends when productivity is dead</li>
                  </ul>
                </div>
              </div>

              <div className="bg-black border border-zinc-700 p-8 mt-12">
                <h3 className="text-xl font-black mb-4 text-yellow-500">THE BATTLESHIP PATTERN</h3>
                <p className="text-zinc-400">
                  Just like in Battleship, you can't see what you're hitting. You schedule meeting after meeting, 
                  hoping one will solve the problem. But each meeting sinks a little more of your team's capacity 
                  to do actual work. Eventually, you've sunk all the productivity and only meetings remain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meeting Types */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">TYPES OF BATTLESHIP MEETINGS</h2>
              
              <div className="space-y-6">
                <div className="border border-zinc-800 p-6">
                  <h3 className="text-xl font-black mb-3 text-red-600">THE RECURSIVE MEETING</h3>
                  <p className="text-zinc-400 mb-3">
                    "Let's schedule a meeting to discuss what we'll discuss in the next meeting."
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Time killed:</strong> Exponential. Each meta-meeting spawns 3 more meetings.
                  </p>
                </div>

                <div className="border border-zinc-800 p-6">
                  <h3 className="text-xl font-black mb-3 text-red-600">THE THEATER MEETING</h3>
                  <p className="text-zinc-400 mb-3">
                    Everyone attends but only 2 people speak. The other 8 are audience to avoid FOMO.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Time killed:</strong> 8 people × 1 hour = 8 hours of life gone forever.
                  </p>
                </div>

                <div className="border border-zinc-800 p-6">
                  <h3 className="text-xl font-black mb-3 text-red-600">THE STATUS MEETING</h3>
                  <p className="text-zinc-400 mb-3">
                    Round-robin of updates that could have been a Slack message. No decisions made.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Time killed:</strong> Weekly recurring. Death by a thousand status cuts.
                  </p>
                </div>

                <div className="border border-zinc-800 p-6">
                  <h3 className="text-xl font-black mb-3 text-red-600">THE PLANNING MEETING</h3>
                  <p className="text-zinc-400 mb-3">
                    Planning when to plan. Discussing how to discuss. Preparing to prepare.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Time killed:</strong> Infinite regress. Never actually reaches the work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12 text-green-500">DEFEATING CALENDAR BATTLESHIP</h2>
              
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">RULE 1</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Default to No Meeting</h4>
                    <p className="text-zinc-400">Every meeting must justify why it can't be an email or async decision.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">RULE 2</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Protected Work Blocks</h4>
                    <p className="text-zinc-400">Schedule 4-hour blocks for actual work. Meetings cannot break these.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">RULE 3</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Decision Forcing Function</h4>
                    <p className="text-zinc-400">Every meeting must end with specific decisions and owners. No decision = failed meeting.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">RULE 4</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Meeting Cost Transparency</h4>
                    <p className="text-zinc-400">Calculate real cost: hourly rate × attendees × time. Make the destruction visible.</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-900 border border-green-500 p-8 mt-12">
                <h3 className="text-xl font-black mb-4 text-green-500">THE NUCLEAR OPTION</h3>
                <p className="text-zinc-300">
                  Cancel all recurring meetings for one week. See what actually breaks vs. what was just habit. 
                  You'll discover 80% of meetings were theater, not necessity.
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
                lexiconTerm="calendar battleship"
                questions={battleshipQuestions}
                calculateResults={calculateBattleshipResults}
                color="red"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">RECLAIM YOUR CALENDAR</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Stop letting meetings murder productivity. Take back time for actual work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/interventions/the-naming"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                AUDIT YOUR MEETINGS
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
                  href: "/answers/glossary/meeting-mud",
                  title: "Meeting Mud",
                  description: "Where decisions go to die. The swamp that swallows progress.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/soreth",
                  title: "Soreth Drains",
                  description: "Hidden energy vampires in your systems. Meeting overhead is peak soreth.",
                  color: "yellow"
                },
                {
                  href: "/interventions/the-map",
                  title: "Map Your Time Killers",
                  description: "Identify what's actually consuming your productive capacity.",
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

export default CalendarBattleshipPage;