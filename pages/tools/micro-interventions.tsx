import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { Clock, Zap, Target, Users, RefreshCw, CheckCircle, ArrowRight, Calendar, Timer } from 'lucide-react';

const MicroInterventionsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('all');
  const [completedInterventions, setCompletedInterventions] = useState<string[]>([]);

  const categories = [
    { id: 'all', name: 'All', color: 'zinc' },
    { id: 'decision', name: 'Decision Speed', color: 'red' },
    { id: 'execution', name: 'Execution', color: 'green' },
    { id: 'clarity', name: 'Clarity', color: 'blue' },
    { id: 'energy', name: 'Energy', color: 'yellow' },
    { id: 'team', name: 'Team Dynamics', color: 'purple' }
  ];

  const timeframes = [
    { id: 'all', name: 'All Timeframes' },
    { id: '2min', name: '2 Minutes' },
    { id: '5min', name: '5 Minutes' },
    { id: '15min', name: '15 Minutes' },
    { id: '30min', name: '30 Minutes' }
  ];

  const microInterventions = [
    {
      id: 'binary-next',
      title: 'BINARY NEXT ACTION',
      category: 'decision',
      timeframe: '2min',
      description: 'Force your next action into YES/NO instead of "maybe later"',
      instructions: [
        'Look at your current task or decision',
        'Ask: "Will I do this right now - YES or NO?"',
        'If NO, ask: "Will I do this today - YES or NO?"',
        'If still NO, delete it or schedule for specific future date',
        'If YES, start immediately'
      ],
      impact: 'Eliminates decision debt and creates immediate clarity',
      frequency: 'Every time you feel stuck on "what to do next"'
    },
    {
      id: 'ship-something',
      title: 'SHIP SOMETHING VISIBLE',
      category: 'execution',
      timeframe: '15min',
      description: 'Create and ship one small thing that users/colleagues can see',
      instructions: [
        'Set 15-minute timer',
        'Pick the smallest possible improvement to existing work',
        'Build/write/create it (rough is fine)',
        'Ship it immediately - email, Slack, demo, deploy',
        'Get at least one person to acknowledge they saw it'
      ],
      impact: 'Builds shipping momentum and overcomes perfectionism',
      frequency: 'Daily, ideally before 11am'
    },
    {
      id: 'clarity-statement',
      title: 'ONE-SENTENCE CLARITY',
      category: 'clarity',
      timeframe: '5min',
      description: 'Force complex problems into single clear sentences',
      instructions: [
        'Write down the fuzzy problem/situation',
        'Rewrite in exactly one sentence (no "and" allowed)',
        'Read it out loud',
        'If it sounds unclear, rewrite until crystal clear',
        'Share with one other person to test understanding'
      ],
      impact: 'Cuts through complexity and creates shared understanding',
      frequency: 'Whenever facing confusing situations'
    },
    {
      id: 'energy-check',
      title: 'INSTANT ENERGY AUDIT',
      category: 'energy',
      timeframe: '2min',
      description: 'Quick check of what\'s draining vs energizing you right now',
      instructions: [
        'Rate your current energy: 1-5 scale',
        'Name what drained energy in last hour',
        'Name what gave energy in last hour',
        'Adjust next hour to favor energy-giving activities',
        'Set phone reminder to check again in 2 hours'
      ],
      impact: 'Builds energy awareness and prevents accumulating soreth',
      frequency: '3x daily: morning, afternoon, evening'
    },
    {
      id: 'friction-kill',
      title: 'FRICTION ELIMINATION',
      category: 'execution',
      timeframe: '5min',
      description: 'Remove one small friction point from your daily workflow',
      instructions: [
        'Notice what slowed you down in last task',
        'Identify the specific friction (tool, process, person)',
        'Fix it immediately if possible (bookmark, shortcut, message)',
        'If not fixable now, add to "friction log" for weekly review',
        'Test that friction is actually gone'
      ],
      impact: 'Compounds into major productivity gains over time',
      frequency: 'Once per work session'
    },
    {
      id: 'conflict-surface',
      title: 'SURFACE ONE TRUTH',
      category: 'team',
      timeframe: '15min',
      description: 'Name one thing everyone knows but no one is saying',
      instructions: [
        'Think about recent team tension or stuck situation',
        'Identify what everyone is thinking but not saying',
        'Write it as simple, factual statement',
        'Share with one team member: "I think we all know..."',
        'Ask: "Am I reading this right?"'
      ],
      impact: 'Breaks false harmony and creates productive conflict',
      frequency: 'Weekly team interactions'
    },
    {
      id: 'assumption-flip',
      title: 'ASSUMPTION FLIP',
      category: 'clarity',
      timeframe: '5min',
      description: 'Question one assumption you\'re making about current problem',
      instructions: [
        'Write down the problem you\'re working on',
        'List 3 assumptions you\'re making about it',
        'Pick the biggest assumption',
        'Ask: "What if the opposite were true?"',
        'Generate 2 alternative approaches based on opposite'
      ],
      impact: 'Reveals hidden constraints and opens new solution paths',
      frequency: 'When feeling stuck on solutions'
    },
    {
      id: 'momentum-micro',
      title: 'MOMENTUM MICRO-WIN',
      category: 'energy',
      timeframe: '15min',
      description: 'Create visible progress on stalled project',
      instructions: [
        'Pick project that feels stalled/overwhelming',
        'Find smallest possible step that creates visible progress',
        'Do only that step (resist expanding scope)',
        'Document the progress visibly (update status, demo)',
        'Schedule next micro-step for tomorrow'
      ],
      impact: 'Restarts momentum on stalled initiatives',
      frequency: 'Daily for any stalled project'
    },
    {
      id: 'nexel-match',
      title: 'QUICK NEXEL CHECK',
      category: 'team',
      timeframe: '2min',
      description: 'Match current task to person with right problem-solving style',
      instructions: [
        'Look at task you\'re about to assign/do',
        'Ask: "Does this need routing, breaking, connecting, or clarifying?"',
        'Think who on team naturally does that best',
        'Either delegate to them or ask for quick consultation',
        'Note the match for future similar tasks'
      ],
      impact: 'Optimizes task-person fit and team efficiency',
      frequency: 'Before starting any collaborative task'
    },
    {
      id: 'scope-cut',
      title: 'RUTHLESS SCOPE CUT',
      category: 'execution',
      timeframe: '5min',
      description: 'Cut scope of current project by 50% to ship faster',
      instructions: [
        'List all features/components of current project',
        'Force rank them 1-10 by impact',
        'Cut everything below rank 5',
        'For remaining items, identify "must have" vs "nice to have"',
        'Ship only "must have" version first'
      ],
      impact: 'Accelerates shipping and reveals what actually matters',
      frequency: 'Weekly project reviews'
    },
    {
      id: 'truth-question',
      title: 'UNCOMFORTABLE QUESTION',
      category: 'clarity',
      timeframe: '2min',
      description: 'Ask the question everyone is avoiding',
      instructions: [
        'Think about current team/project tension',
        'Identify the question no one wants to ask',
        'Write it down exactly as you\'d ask it',
        'Ask yourself: "What\'s the worst that happens if we address this?"',
        'Ask the question in next relevant meeting/conversation'
      ],
      impact: 'Surfaces buried issues before they become major problems',
      frequency: 'Whenever sensing unspoken tension'
    },
    {
      id: 'decision-deadline',
      title: 'DECISION DEADLINE',
      category: 'decision',
      timeframe: '2min',
      description: 'Force deadline on lingering decisions',
      instructions: [
        'Identify decision you\'ve been avoiding/delaying',
        'Set specific deadline (today, tomorrow, this week max)',
        'Define what "good enough" information looks like',
        'Commit to deciding by deadline with available info',
        'Schedule calendar block for decision time'
      ],
      impact: 'Eliminates decision debt and maintains momentum',
      frequency: 'Weekly decision review'
    }
  ];

  const filteredInterventions = microInterventions.filter(intervention => {
    const categoryMatch = selectedCategory === 'all' || intervention.category === selectedCategory;
    const timeMatch = selectedTimeframe === 'all' || intervention.timeframe === selectedTimeframe;
    return categoryMatch && timeMatch;
  });

  const markCompleted = (id: string) => {
    if (completedInterventions.includes(id)) {
      setCompletedInterventions(prev => prev.filter(item => item !== id));
    } else {
      setCompletedInterventions(prev => [...prev, id]);
    }
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'zinc';
  };

  const getTimeIcon = (timeframe: string) => {
    if (timeframe === '2min') return <Timer size={16} />;
    if (timeframe === '5min') return <Clock size={16} />;
    return <Calendar size={16} />;
  };

  return (
    <>
      <SEOHead
        title="Micro-Interventions Hub - Quick Daily Practices | IMAGINATION G"
        description="Quick 2-30 minute interventions for daily pattern breaking. Build momentum through small, consistent actions."
        ogImage="/images/og-micro-interventions.svg"
      />
      
      <div className="min-h-screen bg-black text-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                MICRO-INTERVENTIONS: READY
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                MICRO<br />INTERVENTIONS<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
                Quick 2-30 minute practices for daily pattern breaking. Build momentum through 
                small, consistent actions that compound into major improvements.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="border border-zinc-800 p-6 bg-zinc-950">
                  <Zap className="text-red-500 mx-auto mb-3" size={32} />
                  <h3 className="font-black mb-2">INSTANT IMPACT</h3>
                  <p className="text-sm text-zinc-400">See results immediately, build momentum daily</p>
                </div>
                
                <div className="border border-zinc-800 p-6 bg-zinc-950">
                  <RefreshCw className="text-green-500 mx-auto mb-3" size={32} />
                  <h3 className="font-black mb-2">COMPOUND EFFECT</h3>
                  <p className="text-sm text-zinc-400">Small actions compound into major pattern shifts</p>
                </div>
                
                <div className="border border-zinc-800 p-6 bg-zinc-950">
                  <Target className="text-blue-500 mx-auto mb-3" size={32} />
                  <h3 className="font-black mb-2">SPECIFIC TRIGGERS</h3>
                  <p className="text-sm text-zinc-400">Know exactly when and how to use each intervention</p>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-4 mb-6">
                <div>
                  <label className="block text-sm font-bold text-zinc-400 mb-2">CATEGORY</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-4 py-2 border-2 transition-colors text-sm font-bold ${
                          selectedCategory === category.id
                            ? `border-${category.color}-600 bg-${category.color}-950`
                            : 'border-zinc-800 hover:border-zinc-600'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-zinc-400 mb-2">TIME AVAILABLE</label>
                  <div className="flex flex-wrap gap-2">
                    {timeframes.map((timeframe) => (
                      <button
                        key={timeframe.id}
                        onClick={() => setSelectedTimeframe(timeframe.id)}
                        className={`px-4 py-2 border-2 transition-colors text-sm font-bold ${
                          selectedTimeframe === timeframe.id
                            ? 'border-red-600 bg-red-950'
                            : 'border-zinc-800 hover:border-zinc-600'
                        }`}
                      >
                        {timeframe.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center text-zinc-500 text-sm">
                Showing {filteredInterventions.length} of {microInterventions.length} interventions •{' '}
                {completedInterventions.length} completed today
              </div>
            </div>

            {/* Interventions Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredInterventions.map((intervention) => {
                const isCompleted = completedInterventions.includes(intervention.id);
                const categoryColor = getCategoryColor(intervention.category);
                
                return (
                  <div
                    key={intervention.id}
                    className={`border-2 p-8 bg-zinc-950 transition-all ${
                      isCompleted
                        ? 'border-green-600 bg-green-950'
                        : 'border-zinc-800 hover:border-zinc-600'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`px-2 py-1 border border-${categoryColor}-600 bg-${categoryColor}-950 text-xs font-mono`}>
                            {categories.find(c => c.id === intervention.category)?.name}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-zinc-500">
                            {getTimeIcon(intervention.timeframe)}
                            {intervention.timeframe}
                          </div>
                        </div>
                        <h3 className="text-xl font-black mb-2">{intervention.title}</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">{intervention.description}</p>
                      </div>
                      
                      <button
                        onClick={() => markCompleted(intervention.id)}
                        className={`ml-4 w-8 h-8 border-2 rounded-full flex items-center justify-center transition-colors ${
                          isCompleted
                            ? 'border-green-500 bg-green-500'
                            : 'border-zinc-600 hover:border-green-500'
                        }`}
                      >
                        {isCompleted && <CheckCircle className="text-black" size={16} />}
                      </button>
                    </div>

                    {/* Instructions */}
                    <div className="mb-6">
                      <h4 className="font-bold text-white mb-3">HOW TO DO IT:</h4>
                      <ol className="space-y-2">
                        {intervention.instructions.map((step, index) => (
                          <li key={index} className="flex items-start gap-3 text-sm text-zinc-300">
                            <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">
                              {index + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Impact & Frequency */}
                    <div className="space-y-4">
                      <div className="border border-zinc-700 p-3">
                        <h5 className="text-xs font-bold text-zinc-500 mb-1">IMPACT:</h5>
                        <p className="text-sm text-zinc-300">{intervention.impact}</p>
                      </div>
                      
                      <div className="border border-zinc-700 p-3">
                        <h5 className="text-xs font-bold text-zinc-500 mb-1">WHEN TO USE:</h5>
                        <p className="text-sm text-zinc-300">{intervention.frequency}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredInterventions.length === 0 && (
              <div className="text-center py-16">
                <p className="text-zinc-500 text-lg">No interventions match your current filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedTimeframe('all');
                  }}
                  className="mt-4 text-red-600 hover:text-red-500 transition-colors font-bold"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Daily Practice */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-8 text-center">BUILD A DAILY PRACTICE</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-black">1</span>
                </div>
                <h3 className="font-black mb-2">START SMALL</h3>
                <p className="text-sm text-zinc-400">Pick 1-2 interventions that fit your current stuck patterns</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-black">2</span>
                </div>
                <h3 className="font-black mb-2">SET TRIGGERS</h3>
                <p className="text-sm text-zinc-400">Link interventions to specific situations or times of day</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-black">3</span>
                </div>
                <h3 className="font-black mb-2">TRACK RESULTS</h3>
                <p className="text-sm text-zinc-400">Notice what changes after 1 week of consistent practice</p>
              </div>
            </div>

            <div className="border border-zinc-800 p-8 text-center">
              <h3 className="text-xl font-black mb-4">COMPLETED TODAY: {completedInterventions.length}</h3>
              <p className="text-zinc-400 mb-6">
                Consistency beats intensity. Small actions done daily create lasting pattern changes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setCompletedInterventions([])}
                  className="border-2 border-zinc-700 px-6 py-3 font-bold hover:border-zinc-500 transition-colors"
                >
                  RESET TODAY'S PROGRESS
                </button>
                <a
                  href="/tools"
                  className="bg-red-600 px-6 py-3 font-bold hover:bg-red-700 transition-colors inline-flex items-center gap-2"
                >
                  EXPLORE MORE TOOLS <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroInterventionsPage;