import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { ArrowRight, ArrowLeft, Zap, Battery, AlertTriangle, TrendingDown, TrendingUp, Clock, Target } from 'lucide-react';

const EnergyAuditPage = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'assessment' | 'tracking' | 'results'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [energyScores, setEnergyScores] = useState<Record<string, number>>({});
  const [trackingPeriod, setTrackingPeriod] = useState('');

  const energyCategories = [
    {
      id: 'meetings',
      name: 'MEETINGS',
      description: 'Time spent in meetings, calls, and group discussions',
      questions: [
        'Do you leave most meetings feeling energized vs. drained?',
        'Are your meetings focused and outcome-driven vs. meandering?',
        'Do you have enough meeting-free time for deep work?'
      ]
    },
    {
      id: 'tasks',
      name: 'DAILY TASKS',
      description: 'Core work activities and responsibilities',
      questions: [
        'Do your daily tasks align with your natural strengths?',
        'Are you spending time on high-impact vs. busywork activities?',
        'Do you have clear priorities vs. everything feeling urgent?'
      ]
    },
    {
      id: 'environment',
      name: 'WORK ENVIRONMENT',
      description: 'Physical and digital workspace factors',
      questions: [
        'Is your workspace conducive to focused work?',
        'Are your tools and systems helping vs. hindering productivity?',
        'Do you have control over your work environment and schedule?'
      ]
    },
    {
      id: 'people',
      name: 'INTERACTIONS',
      description: 'Energy from team members, customers, and stakeholders',
      questions: [
        'Do your regular interactions energize vs. drain you?',
        'Are team dynamics positive and collaborative?',
        'Do you feel supported vs. isolated in your work?'
      ]
    },
    {
      id: 'projects',
      name: 'PROJECTS',
      description: 'Larger initiatives and ongoing work streams',
      questions: [
        'Are you working on projects that excite and motivate you?',
        'Do your projects have clear purpose and visible impact?',
        'Are project timelines realistic vs. constantly stressful?'
      ]
    },
    {
      id: 'growth',
      name: 'LEARNING & GROWTH',
      description: 'Development opportunities and skill building',
      questions: [
        'Are you learning new things that interest you?',
        'Do you have opportunities for professional growth?',
        'Are you challenged appropriately vs. bored or overwhelmed?'
      ]
    }
  ];

  const handleEnergyScore = (categoryId: string, score: number) => {
    setEnergyScores(prev => ({ ...prev, [categoryId]: score }));
    
    if (currentQuestion < energyCategories.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentStep('tracking');
    }
  };

  const calculateResults = () => {
    const totalScore = Object.values(energyScores).reduce((sum, score) => sum + score, 0);
    const averageScore = totalScore / energyCategories.length;
    
    const energyDrains = energyCategories.filter(cat => energyScores[cat.id] <= 2);
    const energySources = energyCategories.filter(cat => energyScores[cat.id] >= 4);
    const neutralAreas = energyCategories.filter(cat => energyScores[cat.id] === 3);

    return {
      totalScore,
      averageScore,
      energyDrains,
      energySources,
      neutralAreas,
      healthLevel: averageScore >= 4 ? 'high' : averageScore >= 3 ? 'moderate' : 'low'
    };
  };

  const getSorethRecommendations = (drains: any[]) => {
    const recommendations: Record<string, string[]> = {
      meetings: [
        'Audit all recurring meetings - kill 30% of them',
        'Institute "no-meeting" blocks for deep work',
        'Set strict meeting agendas and time limits',
        'Move to async communication where possible'
      ],
      tasks: [
        'Delegate or eliminate low-impact busywork',
        'Batch similar tasks together',
        'Focus on 3 highest-impact activities daily',
        'Automate repetitive processes'
      ],
      environment: [
        'Create distraction-free workspace zones',
        'Upgrade tools that cause friction',
        'Negotiate flexible work arrangements',
        'Establish clear boundaries and availability'
      ],
      people: [
        'Limit time with energy-draining individuals',
        'Seek out energizing collaborators',
        'Address team conflicts directly',
        'Build stronger support networks'
      ],
      projects: [
        'Realign projects with personal interests',
        'Negotiate more meaningful work assignments',
        'Set realistic timelines and expectations',
        'Celebrate small wins and progress'
      ],
      growth: [
        'Carve out learning time weekly',
        'Seek mentorship and new challenges',
        'Take on stretch assignments',
        'Join communities of practice'
      ]
    };

    return drains.flatMap(drain => recommendations[drain.id] || []);
  };

  const restart = () => {
    setCurrentStep('intro');
    setCurrentQuestion(1);
    setEnergyScores({});
    setTrackingPeriod('');
  };

  // INTRO SCREEN
  if (currentStep === 'intro') {
    return (
      <>
        <SEOHead
          title="Energy Audit Tracker - Personal Soreth Detection | IMAGINATION G"
          description="Track and optimize your energy patterns. Detect soreth (energy drains) and build sustainable high-performance habits."
          ogImage="/images/og-energy-audit.svg"
        />
        
        <div className="min-h-screen bg-black text-white">
          <Navigation />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                ENERGY AUDIT: READY
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                ENERGY AUDIT<br />TRACKER<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-12 max-w-2xl">
                Detect your personal soreth patterns - the invisible energy drains killing your momentum. 
                Track, analyze, and optimize your energy for sustainable high performance.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="border border-zinc-800 p-6 bg-zinc-950">
                  <h3 className="text-xl font-black mb-4 text-red-600">WHAT IS SORETH?</h3>
                  <p className="text-zinc-400 mb-4">
                    Soreth is the accumulated drag from systems, people, and activities that drain your energy 
                    without adding value. It's invisible but measurable.
                  </p>
                  <div className="space-y-2 text-sm text-zinc-500">
                    <div>• Unproductive meetings</div>
                    <div>• Misaligned tasks</div>
                    <div>• Toxic interactions</div>
                    <div>• Broken systems</div>
                    <div>• Overwhelming environments</div>
                  </div>
                </div>

                <div className="border border-zinc-800 p-6 bg-zinc-950">
                  <h3 className="text-xl font-black mb-4 text-blue-600">WHAT YOU'LL GET</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Battery className="text-green-500" size={16} />
                      <span className="text-sm">Personal energy pattern analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="text-red-500" size={16} />
                      <span className="text-sm">Soreth detection across 6 categories</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="text-purple-500" size={16} />
                      <span className="text-sm">Specific optimization recommendations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="text-blue-500" size={16} />
                      <span className="text-sm">Weekly tracking system</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 p-8 mb-12">
                <h3 className="text-xl font-black mb-4">6 ENERGY CATEGORIES</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  {energyCategories.map((category) => (
                    <div key={category.id} className="border border-zinc-700 p-3">
                      <h4 className="font-bold text-white mb-1">{category.name}</h4>
                      <p className="text-zinc-500">{category.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <button
                  onClick={() => setCurrentStep('assessment')}
                  className="bg-red-600 px-12 py-6 text-2xl font-black hover:bg-red-700 transition-colors mb-4"
                >
                  START ENERGY AUDIT
                </button>
                <p className="text-zinc-600 text-sm">
                  <Clock className="inline mr-1" size={14} />
                  Takes 5-7 minutes. Results saved locally.
                </p>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  // ASSESSMENT SCREEN
  if (currentStep === 'assessment') {
    const currentCategory = energyCategories[currentQuestion - 1];
    
    return (
      <>
        <SEOHead
          title={`${currentCategory.name} Energy Assessment | IMAGINATION G`}
          description={`Evaluating your energy levels for ${currentCategory.name.toLowerCase()}`}
        />
        
        <div className="min-h-screen bg-black text-white">
          <Navigation />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-4xl mx-auto">
              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-sm text-zinc-500">CATEGORY {currentQuestion} OF {energyCategories.length}</span>
                    <div className="text-lg font-bold text-zinc-400">{currentCategory.name}</div>
                  </div>
                  <span className="text-sm text-zinc-500">{Math.round((currentQuestion / energyCategories.length) * 100)}% COMPLETE</span>
                </div>
                <div className="h-2 bg-zinc-900 rounded">
                  <div 
                    className="h-2 bg-red-600 rounded transition-all duration-300"
                    style={{ width: `${(currentQuestion / energyCategories.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Back Button */}
              {currentQuestion > 1 && (
                <button
                  onClick={() => setCurrentQuestion(currentQuestion - 1)}
                  className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
                >
                  <ArrowLeft size={20} />
                  Previous Category
                </button>
              )}

              {/* Category Assessment */}
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-black mb-4">
                  {currentCategory.name}
                </h2>
                <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                  {currentCategory.description}
                </p>

                <div className="bg-zinc-950 border border-zinc-800 p-6 mb-8 text-left">
                  <h3 className="font-bold mb-4">CONSIDER THESE ASPECTS:</h3>
                  <ul className="space-y-2">
                    {currentCategory.questions.map((question, index) => (
                      <li key={index} className="text-sm text-zinc-400">• {question}</li>
                    ))}
                  </ul>
                </div>

                <h3 className="text-xl font-black mb-6">
                  HOW DOES {currentCategory.name} AFFECT YOUR ENERGY?
                </h3>
              </div>

              {/* Energy Scale */}
              <div className="grid grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5].map((score) => (
                  <button
                    key={score}
                    onClick={() => handleEnergyScore(currentCategory.id, score)}
                    className="group border-2 border-zinc-800 p-6 hover:border-red-600 transition-all text-center"
                  >
                    <div className="mb-4">
                      {score === 1 && <TrendingDown className="text-red-500 mx-auto" size={32} />}
                      {score === 2 && <Battery className="text-orange-500 mx-auto" size={32} />}
                      {score === 3 && <Zap className="text-yellow-500 mx-auto" size={32} />}
                      {score === 4 && <TrendingUp className="text-green-500 mx-auto" size={32} />}
                      {score === 5 && <Zap className="text-blue-500 mx-auto" size={32} />}
                    </div>
                    
                    <div className="text-2xl font-black mb-2">{score}</div>
                    
                    <div className="text-sm">
                      {score === 1 && 'MAJOR DRAIN'}
                      {score === 2 && 'DRAINING'}
                      {score === 3 && 'NEUTRAL'}
                      {score === 4 && 'ENERGIZING'}
                      {score === 5 && 'MAJOR SOURCE'}
                    </div>
                    
                    <div className="text-xs text-zinc-500 mt-2">
                      {score === 1 && 'Actively drains energy'}
                      {score === 2 && 'Mildly draining'}
                      {score === 3 && 'No strong effect'}
                      {score === 4 && 'Gives me energy'}
                      {score === 5 && 'Major energy boost'}
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8 text-center text-zinc-500 text-sm">
                Think about this category over the past 2 weeks. What's your honest assessment?
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  // TRACKING SCREEN
  if (currentStep === 'tracking') {
    return (
      <>
        <SEOHead
          title="Energy Tracking Setup | IMAGINATION G"
          description="Set up your ongoing energy tracking system."
        />
        
        <div className="min-h-screen bg-black text-white">
          <Navigation />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-black mb-6">
                TRACKING<br />SETUP<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-8">
                Now that we have your baseline, let's set up ongoing tracking to catch soreth patterns early.
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-black mb-4">TRACKING FREQUENCY</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {['Daily (5 min)', 'Weekly (15 min)', 'Bi-weekly (20 min)'].map((period) => (
                      <button
                        key={period}
                        onClick={() => setTrackingPeriod(period)}
                        className={`p-6 border-2 transition-colors ${
                          trackingPeriod === period
                            ? 'border-red-600 bg-red-950'
                            : 'border-zinc-800 hover:border-zinc-600'
                        }`}
                      >
                        <h3 className="font-bold mb-2">{period}</h3>
                        <p className="text-sm text-zinc-400">
                          {period.includes('Daily') && 'Quick energy check-ins'}
                          {period.includes('Weekly') && 'Comprehensive weekly review'}
                          {period.includes('Bi-weekly') && 'Deeper pattern analysis'}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-zinc-950 border border-zinc-800 p-8">
                  <h3 className="text-xl font-black mb-4">TRACKING TIPS</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-sm text-zinc-400">
                    <div>
                      <h4 className="font-bold text-white mb-2">BE HONEST</h4>
                      <p>Track actual energy levels, not what you think they should be.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">LOOK FOR PATTERNS</h4>
                      <p>Notice trends over time rather than day-to-day fluctuations.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">ACT ON INSIGHTS</h4>
                      <p>Use data to make actual changes, not just collect information.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">ADJUST AS NEEDED</h4>
                      <p>Modify tracking frequency based on what works for you.</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setCurrentStep('results')}
                    disabled={!trackingPeriod}
                    className={`px-8 py-4 text-lg font-black transition-colors ${
                      trackingPeriod
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
                    }`}
                  >
                    VIEW MY RESULTS →
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  // RESULTS SCREEN
  const results = calculateResults();
  const recommendations = getSorethRecommendations(results.energyDrains);
  
  return (
    <>
      <SEOHead
        title="Your Energy Audit Results | IMAGINATION G"
        description="Personal energy analysis and soreth detection results with optimization recommendations."
      />
      
      <div className="min-h-screen bg-black text-white">
        <Navigation />

        <section className="pt-24 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                AUDIT COMPLETE
              </div>

              <h1 className="text-4xl md:text-5xl font-black mb-6">
                YOUR ENERGY<br />ANALYSIS<span className="text-red-600">.</span>
              </h1>
            </div>

            {/* Overall Score */}
            <div className="bg-zinc-950 border border-zinc-800 p-8 mb-8 text-center">
              <h2 className="text-xl font-black mb-4 text-zinc-400">OVERALL ENERGY HEALTH</h2>
              <div className="text-6xl font-black mb-4">
                {results.averageScore.toFixed(1)}/5
              </div>
              <p className="text-xl text-zinc-400">
                {results.healthLevel === 'high' && "Strong energy management. Focus on optimizing high-performers."}
                {results.healthLevel === 'moderate' && "Moderate energy health. Clear optimization opportunities."}
                {results.healthLevel === 'low' && "Significant soreth detected. Immediate intervention needed."}
              </p>
            </div>

            {/* Category Breakdown */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {results.energyDrains.length > 0 && (
                <div className="border border-red-500 p-6 bg-red-950">
                  <h3 className="font-black text-red-400 mb-4">ENERGY DRAINS</h3>
                  <div className="space-y-2">
                    {results.energyDrains.map((drain) => (
                      <div key={drain.id} className="flex justify-between">
                        <span className="text-sm">{drain.name}</span>
                        <span className="text-sm font-bold">{energyScores[drain.id]}/5</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {results.neutralAreas.length > 0 && (
                <div className="border border-yellow-500 p-6 bg-yellow-950">
                  <h3 className="font-black text-yellow-400 mb-4">NEUTRAL AREAS</h3>
                  <div className="space-y-2">
                    {results.neutralAreas.map((neutral) => (
                      <div key={neutral.id} className="flex justify-between">
                        <span className="text-sm">{neutral.name}</span>
                        <span className="text-sm font-bold">{energyScores[neutral.id]}/5</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {results.energySources.length > 0 && (
                <div className="border border-green-500 p-6 bg-green-950">
                  <h3 className="font-black text-green-400 mb-4">ENERGY SOURCES</h3>
                  <div className="space-y-2">
                    {results.energySources.map((source) => (
                      <div key={source.id} className="flex justify-between">
                        <span className="text-sm">{source.name}</span>
                        <span className="text-sm font-bold">{energyScores[source.id]}/5</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Recommendations */}
            {recommendations.length > 0 && (
              <div className="border-4 border-red-600 p-8 mb-8 bg-black">
                <h2 className="text-2xl font-black text-red-600 mb-6">SORETH ELIMINATION PLAN</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {recommendations.slice(0, 6).map((rec, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 border border-zinc-800 bg-zinc-950">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs font-black">{index + 1}</span>
                      </div>
                      <span className="text-sm">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tracking Setup Summary */}
            <div className="bg-zinc-950 border border-zinc-800 p-8 mb-8">
              <h3 className="text-2xl font-black mb-4">YOUR TRACKING PLAN</h3>
              <p className="text-zinc-400 mb-4">
                You've chosen {trackingPeriod} tracking. Here's how to maintain momentum:
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-bold text-white mb-2">WEEKLY FOCUS</h4>
                  <p className="text-zinc-400">Pick one energy drain to improve each week.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">TRACK CHANGES</h4>
                  <p className="text-zinc-400">Re-assess categories that were previously draining.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">CELEBRATE WINS</h4>
                  <p className="text-zinc-400">Notice and reinforce energy improvements.</p>
                </div>
              </div>
            </div>

            {/* Action Options */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="border border-zinc-700 p-6 text-center">
                <h4 className="font-black mb-2">LEARN ABOUT SORETH</h4>
                <p className="text-sm text-zinc-400 mb-4">Deep dive into energy management theory</p>
                <a 
                  href="/answers/glossary/soreth"
                  className="text-red-600 hover:text-red-500 transition-colors text-sm font-bold"
                >
                  READ SORETH GUIDE →
                </a>
              </div>
              
              <div className="border border-zinc-700 p-6 text-center">
                <h4 className="font-black mb-2">TEAM ENERGY AUDIT</h4>
                <p className="text-sm text-zinc-400 mb-4">Assess your team's collective energy</p>
                <a 
                  href="/tools/team-nexel-matching"
                  className="text-blue-600 hover:text-blue-500 transition-colors text-sm font-bold"
                >
                  AUDIT TEAM ENERGY →
                </a>
              </div>
              
              <button
                onClick={restart}
                className="border border-zinc-700 p-6 text-center hover:border-zinc-500 transition-colors"
              >
                <h4 className="font-black mb-2">RETAKE IN 30 DAYS</h4>
                <p className="text-sm text-zinc-400">Track your optimization progress</p>
              </button>
            </div>

            <div className="text-center text-zinc-500 text-sm">
              <p>
                Energy management is a skill. Track consistently, optimize systematically, 
                and watch your sustainable performance improve.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EnergyAuditPage;