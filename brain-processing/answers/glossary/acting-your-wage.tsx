import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import RelatedContent from '../../../components/RelatedContent';
import LexiconDiagnostic from '../../../components/LexiconDiagnostic';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const ActingYourWagePage: NextPage = () => {
  const actingWageQuestions = [
    {
      id: 1,
      question: "Are you expected to do work beyond your job description without additional pay?",
      yesText: "SCOPE CREEP",
      yesSubtext: "Exploitation disguised as opportunity.",
      noText: "CLEAR BOUNDARIES",
      noSubtext: "Pay matches expectations."
    },
    {
      id: 2,
      question: "Do you feel guilty for not working overtime or weekends?",
      yesText: "GUILT PROGRAMMING",
      yesSubtext: "Psychological manipulation active.",
      noText: "HEALTHY BOUNDARIES",
      noSubtext: "No guilt about fair exchange."
    },
    {
      id: 3,
      question: "Are new hires making more than loyal long-term employees?",
      yesText: "LOYALTY PENALTY",
      yesSubtext: "Staying costs more than leaving.",
      noText: "MERIT COMPENSATION",
      noSubtext: "Experience is rewarded."
    },
    {
      id: 4,
      question: "Is 'going above and beyond' an expectation rather than exceptional?",
      yesText: "BASELINE INFLATION",
      yesSubtext: "Exceptional became minimum.",
      noText: "REALISTIC STANDARDS",
      noSubtext: "Above and beyond is actually above."
    },
    {
      id: 5,
      question: "Do you work harder for the same pay as people who do less?",
      yesText: "PERFORMANCE PUNISHMENT",
      yesSubtext: "Excellence creates more work.",
      noText: "FAIR DISTRIBUTION",
      noSubtext: "Work matches compensation."
    }
  ];

  const calculateActingWageResults = (answers: Record<number, 'yes' | 'no'>) => {
    const yesCount = Object.values(answers).filter(answer => answer === 'yes').length;
    const score = Math.round((yesCount / actingWageQuestions.length) * 100);
    
    let severity: 'low' | 'medium' | 'high' | 'critical';
    let title: string;
    let description: string;
    let recommendation: string;
    let interventionUrl: string | undefined;

    if (score <= 20) {
      severity = 'low';
      title = 'Fair Exchange Established';
      description = 'Your compensation matches your contribution. Boundaries are respected and maintained.';
      recommendation = 'Maintain these boundaries. Help others establish similar fair exchanges.';
    } else if (score <= 40) {
      severity = 'medium';
      title = 'Exploitation Creeping In';
      description = 'Some signs of unfair exchange. Scope is expanding beyond compensation.';
      recommendation = 'Clarify expectations. Document scope creep and address compensation gaps.';
      interventionUrl = '/interventions/the-naming';
    } else if (score <= 70) {
      severity = 'high';
      title = 'Active Exploitation Pattern';
      description = 'Significant imbalance between contribution and compensation. Being taken advantage of.';
      recommendation = 'Time to act your wage. Set firm boundaries and align effort with compensation.';
      interventionUrl = '/interventions/the-naming';
    } else {
      severity = 'critical';
      title = 'Systematic Exploitation';
      description = 'You are being extensively exploited. Working far beyond your compensation level.';
      recommendation = 'Emergency boundary setting or exit planning. Current situation is unsustainable.';
      interventionUrl = '/interventions/the-naming';
    }

    return { score, severity, title, description, recommendation, interventionUrl };
  };

  return (
    <>
      <SEOHead
        title="Acting Your Wage - The Anti-Exploitation Movement | IMAGINATION G"
        description="Acting Your Wage is the rational response to workplace exploitation - matching effort to compensation. Learn why this movement is reshaping work expectations."
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
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                MOVEMENT: ACTING YOUR WAGE
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                ACTING YOUR WAGE<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                The rational response to workplace exploitation. Why matching effort to compensation is revolutionary.
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
                  Acting Your Wage means doing exactly the work you're being paid for—no more, no less. 
                  It's not laziness. It's a rational response to decades of employers expecting more 
                  value than they're willing to compensate.
                </p>
              </div>

              {/* TL;DR Box */}
              <div className="bg-black border-2 border-yellow-500 p-8 mb-12">
                <h3 className="text-xl font-black text-yellow-500 mb-4">TL;DR</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Minimum wage = minimum effort (not laziness, economics)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Response to "loyalty penalty" where staying costs money</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Rejecting the "family" manipulation in corporate culture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Boundaries as business logic, not rebellion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Movement Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">WHY THE MOVEMENT EXISTS</h2>
              
              <div className="space-y-8">
                <div className="border border-red-600 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">THE EXPLOITATION PATTERN</h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="border border-zinc-700 p-4">
                        <h4 className="font-bold text-red-500 mb-2">WHAT EMPLOYERS SAY</h4>
                        <ul className="space-y-1 text-zinc-400 text-sm">
                          <li>• "We're a family here"</li>
                          <li>• "Go above and beyond"</li>
                          <li>• "Other opportunities await"</li>
                          <li>• "Passion over paycheck"</li>
                          <li>• "Team player mentality"</li>
                        </ul>
                      </div>
                      <div className="border border-zinc-700 p-4">
                        <h4 className="font-bold text-red-500 mb-2">WHAT EMPLOYEES EXPERIENCE</h4>
                        <ul className="space-y-1 text-zinc-400 text-sm">
                          <li>• Families don't pay each other</li>
                          <li>• Extra work, same compensation</li>
                          <li>• Opportunities never materialize</li>
                          <li>• Passion doesn't pay rent</li>
                          <li>• Team loses, individual pays</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">THE THIRTEEN-CENT RAISE REALITY</h3>
                  <blockquote className="border-l-4 border-yellow-500 pl-6 italic text-zinc-300 mb-4">
                    "Got a 13-cent raise after 2 years while new hires make 12 cents more than me."
                  </blockquote>
                  <p className="text-zinc-400">
                    This isn't an isolated story. It's a systematic pattern where loyalty is punished 
                    and job-hopping is the only path to fair compensation. Acting Your Wage is the 
                    rational response to this broken system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Economics */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">THE BUSINESS LOGIC</h2>
              
              <div className="space-y-8">
                <div className="bg-zinc-950 border border-zinc-800 p-8">
                  <h3 className="text-xl font-black mb-6 text-green-500">RATIONAL ECONOMIC BEHAVIOR</h3>
                  <div className="space-y-4">
                    <p className="text-zinc-300">
                      <strong>Input = Output:</strong> If you pay for 40 hours of basic work, 
                      you get 40 hours of basic work. Expecting more is expecting charity.
                    </p>
                    <p className="text-zinc-300">
                      <strong>Market Rate:</strong> If other companies pay more for the same role, 
                      why would a rational person give extra effort for less money?
                    </p>
                    <p className="text-zinc-300">
                      <strong>Opportunity Cost:</strong> Every extra hour given for free is an hour 
                      not spent finding better compensation or developing personal skills.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="border border-zinc-800 p-6">
                    <h3 className="text-xl font-black mb-4 text-red-600">TRADITIONAL MINDSET</h3>
                    <ul className="space-y-2 text-zinc-400">
                      <li>• Prove your worth through extra work</li>
                      <li>• Loyalty will be rewarded eventually</li>
                      <li>• Going above shows initiative</li>
                      <li>• Company success = personal success</li>
                      <li>• Work ethic is moral virtue</li>
                    </ul>
                  </div>
                  <div className="border border-zinc-800 p-6">
                    <h3 className="text-xl font-black mb-4 text-green-600">ACTING YOUR WAGE</h3>
                    <ul className="space-y-2 text-zinc-400">
                      <li>• Worth is proven through compensation</li>
                      <li>• Loyalty must be mutual and rewarded</li>
                      <li>• Initiative requires investment in outcomes</li>
                      <li>• Company profits ≠ employee benefits</li>
                      <li>• Work is economic exchange, not identity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">HOW TO ACT YOUR WAGE</h2>
              
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 1</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Calculate Your Actual Hourly Rate</h4>
                    <p className="text-zinc-400">Include overtime, "just quick questions," weekend emails. Most people work 20% more than they're paid for.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 2</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Define Your Scope Precisely</h4>
                    <p className="text-zinc-400">What exactly are you being paid to do? Everything else is scope creep and requires additional compensation.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 3</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Set Communication Boundaries</h4>
                    <p className="text-zinc-400">Work hours = work communication. Personal time = personal time. Emergency = actual emergency.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 4</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Practice Strategic Politeness</h4>
                    <p className="text-zinc-400">"I'd be happy to take on that project. What should I deprioritize to make room for it?"</p>
                  </div>
                </div>
              </div>

              <div className="bg-black border border-yellow-500 p-8 mt-12">
                <h3 className="text-xl font-black mb-4 text-yellow-500">THE GUILT OVERRIDE</h3>
                <p className="text-zinc-300">
                  Feeling guilty about acting your wage? That's decades of programming talking. 
                  You're not being lazy—you're being rational. Companies act their wage with employees all the time. 
                  They call it "business decisions."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What This Isn't */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">WHAT ACTING YOUR WAGE IS NOT</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-red-600 p-6">
                  <h3 className="text-xl font-black mb-4 text-red-600">MISCONCEPTIONS</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>❌ Being lazy or unprofessional</li>
                    <li>❌ Doing poor quality work</li>
                    <li>❌ Refusing all extra tasks</li>
                    <li>❌ Having bad attitude</li>
                    <li>❌ Not caring about outcomes</li>
                  </ul>
                </div>
                <div className="border border-green-600 p-6">
                  <h3 className="text-xl font-black mb-4 text-green-600">REALITY</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>✅ Maintaining professional boundaries</li>
                    <li>✅ Delivering exactly what's contracted</li>
                    <li>✅ Negotiating scope and compensation</li>
                    <li>✅ Having realistic expectations</li>
                    <li>✅ Caring about fair exchange</li>
                  </ul>
                </div>
              </div>

              <div className="bg-zinc-950 border border-zinc-700 p-8 mt-8">
                <h3 className="text-xl font-black mb-4">THE PARADOX</h3>
                <p className="text-zinc-300">
                  Organizations that pay fairly rarely worry about people "acting their wage" 
                  because the wage reflects the full value they want. It's only exploitative 
                  employers who fear this movement—because they depend on underpaid overperformance.
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
                lexiconTerm="acting your wage"
                questions={actingWageQuestions}
                calculateResults={calculateActingWageResults}
                color="green"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">ESTABLISH FAIR EXCHANGE</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Stop giving more than you receive. Start matching effort to compensation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/interventions/the-naming"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                DEFINE YOUR BOUNDARIES
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
                  href: "/answers/glossary/thirteen-cent-raise",
                  title: "The Thirteen-Cent Raise",
                  description: "When loyalty becomes financial liability. The loyalty penalty pattern.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/pet-to-threat",
                  title: "Pet-to-Threat Pattern",
                  description: "Why competent employees become threatening to insecure managers.",
                  color: "yellow"
                },
                {
                  href: "/answers/glossary/vacation-guilt",
                  title: "Vacation Guilt Syndrome",
                  description: "The psychological manipulation that prevents real time off.",
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

export default ActingYourWagePage;