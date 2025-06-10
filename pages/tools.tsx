import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import { ArrowRight, Clock, Target, Zap, Users, CheckCircle, ExternalLink, RefreshCw, AlertTriangle } from 'lucide-react';

const ToolsPage: NextPage = () => {
  const diyTools = [
    {
      id: 'nexel-audit',
      title: '5-MINUTE NEXEL AUDIT',
      subtitle: 'Find Your Problem-Solving Style',
      description: 'Quick assessment to identify your natural nexel pattern and get optimization recommendations.',
      timeCommitment: '5 minutes',
      difficulty: 'Beginner',
      category: 'Self-Assessment',
      outcomes: [
        'Nexel pattern identified',
        'Strengths and challenges clear',
        'Specific optimization tactics'
      ],
      href: '/tools/nexel-audit',
      color: 'blue',
      icon: Target
    },
    {
      id: 'team-nexel-map',
      title: 'TEAM NEXEL MAP',
      subtitle: 'Collaborative Assessment Tool',
      description: 'Map your team\'s collective problem-solving DNA. Optimize task assignments and identify composition gaps.',
      timeCommitment: '15-25 minutes',
      difficulty: 'Intermediate',
      category: 'Team Dynamics',
      outcomes: [
        'Team nexel composition mapped',
        'Optimal task assignments identified',
        'Team gaps and strengths clear'
      ],
      href: '/tools/team-nexel-map',
      color: 'purple',
      icon: Users
    },
    {
      id: 'block-flip',
      title: 'BLOCK FLIP EXERCISE',
      subtitle: 'Team Problem-Solving Reframe',
      description: 'Flip stuck problems upside down to unlock breakthrough solutions with your team.',
      timeCommitment: '20-30 minutes',
      difficulty: 'Intermediate',
      category: 'Team Dynamics',
      outcomes: [
        'Mental constraints broken',
        'Alternative solution angles found',
        'Team creative energy boosted'
      ],
      href: '/tools/block-flip',
      color: 'purple',
      icon: RefreshCw
    },
    {
      id: 'energy-audit',
      title: 'ENERGY AUDIT TRACKER',
      subtitle: 'Personal Soreth Detection',
      description: 'Track and optimize your energy patterns. Detect soreth drains and build sustainable performance.',
      timeCommitment: '5-7 minutes',
      difficulty: 'Beginner',
      category: 'Energy Management',
      outcomes: [
        'Energy drains identified',
        'Soreth patterns detected',
        'Optimization recommendations'
      ],
      href: '/tools/energy-audit',
      color: 'yellow',
      icon: Zap
    },
    {
      id: 'micro-interventions',
      title: 'MICRO-INTERVENTIONS HUB',
      subtitle: 'Quick Daily Practices',
      description: 'Library of 2-30 minute practices for daily pattern breaking and momentum building.',
      timeCommitment: '2-30 minutes',
      difficulty: 'Beginner',
      category: 'Daily Practice',
      outcomes: [
        'Daily momentum built',
        'Patterns broken consistently',
        'Compound improvements'
      ],
      href: '/tools/micro-interventions',
      color: 'green',
      icon: Clock
    },
    {
      id: 'override-protocol',
      title: 'OVERRIDE PROTOCOL',
      subtitle: 'Crisis Breakthrough Process',
      description: 'Emergency pattern breaking for when teams are completely stuck. Systematic crisis resolution in 90 minutes.',
      timeCommitment: '90 minutes',
      difficulty: 'Advanced',
      category: 'Crisis Management',
      outcomes: [
        'Crisis resolved systematically',
        'Emergency decisions made',
        'Team paralysis broken'
      ],
      href: '/tools/override-protocol',
      color: 'red',
      icon: AlertTriangle
    }
  ];

  const categories = ['All', 'Self-Assessment', 'Team Dynamics', 'Energy Management', 'Daily Practice', 'Crisis Management'];

  return (
    <>
      <SEOHead
        title="DIY Tools Hub - Self-Guided Interventions | IMAGINATION G"
        description="Complete toolkit for breaking stuck patterns yourself. Ship faster, decide clearer, align teams better. No meetings required."
        ogImage="/images/og-tools.svg"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="tools" />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-16">
              {/* System Status Badge */}
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                DIY TOOLS: READY
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                FIX IT<br />YOURSELF<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
                Self-guided interventions for breaking stuck patterns. Ship faster, decide clearer, 
                align teams better. No consultants required.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  href="/start"
                  className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
                >
                  GET TOOL RECOMMENDATIONS
                </Link>
                <Link 
                  href="/diagnostic"
                  className="border-2 border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors"
                >
                  TAKE FULL DIAGNOSTIC
                </Link>
              </div>
            </div>

            {/* Tool Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 border border-zinc-700 hover:border-zinc-500 transition-colors text-sm font-bold"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Tools Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {diyTools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.id}
                    href={tool.href}
                    className="group border border-zinc-800 p-8 hover:border-red-600 transition-all bg-zinc-950 hover:bg-black"
                  >
                    {/* Tool Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-3 border-2 border-${tool.color}-600 bg-${tool.color}-950`}>
                        <Icon className={`text-${tool.color}-600`} size={24} />
                      </div>
                      <div className="text-right text-xs text-zinc-500">
                        <div className="font-mono">{tool.timeCommitment}</div>
                        <div>{tool.difficulty}</div>
                      </div>
                    </div>

                    {/* Tool Content */}
                    <div className="mb-6">
                      <div className="text-xs font-mono text-zinc-500 mb-2">{tool.category.toUpperCase()}</div>
                      <h3 className="text-xl font-black mb-2 group-hover:text-red-600 transition-colors">
                        {tool.title}
                      </h3>
                      <h4 className="text-sm font-bold text-zinc-400 mb-4">{tool.subtitle}</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        {tool.description}
                      </p>
                    </div>

                    {/* Outcomes */}
                    <div className="mb-6">
                      <h5 className="text-xs font-bold text-zinc-500 mb-3">YOU'LL GET:</h5>
                      <ul className="space-y-2">
                        {tool.outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-zinc-600">
                            <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={12} />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-zinc-500">
                        START NOW
                      </span>
                      <ArrowRight 
                        className="text-red-600 group-hover:text-red-400 transition-colors" 
                        size={20} 
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* How DIY Tools Work */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8 text-center">HOW DIY TOOLS WORK</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-black">1</span>
                  </div>
                  <h3 className="font-black mb-2">IDENTIFY PATTERN</h3>
                  <p className="text-sm text-zinc-400">Use our diagnostic or pattern detection to find your stuck pattern.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-black">2</span>
                  </div>
                  <h3 className="font-black mb-2">DEPLOY TOOL</h3>
                  <p className="text-sm text-zinc-400">Follow the step-by-step intervention. No guesswork, just action.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-black">3</span>
                  </div>
                  <h3 className="font-black mb-2">MEASURE RESULTS</h3>
                  <p className="text-sm text-zinc-400">Track progress with built-in metrics. Know if it's working.</p>
                </div>
              </div>

              <div className="border border-zinc-800 p-8 text-center">
                <h3 className="text-xl font-black mb-4">WHEN TO UPGRADE TO PROFESSIONAL</h3>
                <p className="text-zinc-400 mb-6">
                  DIY tools work for 70% of stuck patterns. If you're still stuck after 2 weeks, 
                  you need professional intervention to break deeper organizational dysfunction.
                </p>
                <Link 
                  href="/interventions"
                  className="inline-flex items-center gap-2 border-2 border-red-600 px-6 py-3 font-bold hover:bg-red-600 transition-colors"
                >
                  VIEW PROFESSIONAL INTERVENTIONS <ExternalLink size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black mb-6">READY TO FIX IT YOURSELF?</h2>
            <p className="text-xl text-zinc-400 mb-8">
              Don't know where to start? Let our diagnostic match you to the right tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/start"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                GET MATCHED TO TOOLS
              </Link>
              <Link 
                href="/diagnostic"
                className="border-2 border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors"
              >
                FULL PATTERN ANALYSIS
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ToolsPage;