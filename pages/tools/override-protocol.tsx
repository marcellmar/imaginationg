import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { AlertTriangle, ArrowRight, ArrowLeft, Zap, Clock, Target, CheckCircle, X, RefreshCw, Download, Play } from 'lucide-react';

const OverrideProtocolPage = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'assessment' | 'protocol' | 'execution' | 'debrief'>('intro');
  const [crisisType, setCrisisType] = useState('');
  const [urgencyLevel, setUrgencyLevel] = useState<number>(0);
  const [currentProtocolStep, setCurrentProtocolStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [protocolData, setProtocolData] = useState<any>({});
  const [executionTime, setExecutionTime] = useState<Date | null>(null);

  const crisisTypes = [
    {
      id: 'deadline-crisis',
      title: 'DEADLINE CRISIS',
      description: 'Critical deadline moved up, scope unchanged, team paralyzed',
      indicators: [
        'Impossible timeline with no scope negotiation',
        'Team working longer hours but making less progress',
        'Quality discussions have stopped',
        'Everyone knows it won\'t work but no one will say it'
      ],
      urgencyFactors: ['Timeline', 'Revenue impact', 'Team burnout risk'],
      color: 'red'
    },
    {
      id: 'technical-deadlock',
      title: 'TECHNICAL DEADLOCK',
      description: 'Critical technical problem blocking all progress',
      indicators: [
        'Core system/process completely broken',
        'Multiple failed attempts at solutions',
        'Team expertise insufficient for problem',
        'Workarounds creating more problems'
      ],
      urgencyFactors: ['System downtime', 'Customer impact', 'Technical debt'],
      color: 'orange'
    },
    {
      id: 'team-breakdown',
      title: 'TEAM BREAKDOWN',
      description: 'Team dynamics have collapsed, productivity near zero',
      indicators: [
        'Open conflict or complete silence in meetings',
        'Key team members threatening to quit',
        'Blame cycles instead of problem solving',
        'Leadership credibility destroyed'
      ],
      urgencyFactors: ['Talent retention', 'Project continuity', 'Morale impact'],
      color: 'purple'
    },
    {
      id: 'market-emergency',
      title: 'MARKET EMERGENCY',
      description: 'External market forces demanding immediate pivot',
      indicators: [
        'Competitor launched game-changing feature',
        'Customer demands shifted dramatically',
        'Funding/revenue threatened by market change',
        'Current strategy obviously obsolete'
      ],
      urgencyFactors: ['Competitive position', 'Revenue protection', 'Strategic relevance'],
      color: 'yellow'
    },
    {
      id: 'execution-paralysis',
      title: 'EXECUTION PARALYSIS',
      description: 'Team stuck in planning/analysis loop, unable to act',
      indicators: [
        'Endless meetings with no decisions',
        'Analysis paralysis on every choice',
        'Fear of making wrong decision',
        'Perfect plan required before any action'
      ],
      urgencyFactors: ['Opportunity cost', 'Momentum loss', 'Competitive timing'],
      color: 'blue'
    }
  ];

  const protocolPhases = [
    {
      phase: 1,
      title: 'EMERGENCY STOP',
      duration: '10 minutes',
      objective: 'Halt current dysfunction and create space for breakthrough',
      actions: [
        {
          id: 'stop-all',
          title: 'STOP ALL CURRENT ACTIVITIES',
          description: 'Immediately halt meetings, current work streams, and planning sessions',
          timeBox: '2 min',
          mandatory: true
        },
        {
          id: 'gather-core',
          title: 'GATHER CORE DECISION MAKERS',
          description: 'Assemble only people who can make binding decisions (max 5 people)',
          timeBox: '5 min',
          mandatory: true
        },
        {
          id: 'declare-override',
          title: 'DECLARE OVERRIDE STATE',
          description: 'Explicitly announce suspension of normal processes until crisis resolved',
          timeBox: '3 min',
          mandatory: true
        }
      ]
    },
    {
      phase: 2,
      title: 'TRUTH EXTRACTION',
      duration: '20 minutes',
      objective: 'Surface brutal facts everyone knows but no one is saying',
      actions: [
        {
          id: 'fact-dump',
          title: 'BRUTAL FACT DUMP',
          description: 'Everyone states one uncomfortable truth about the situation. No debate, just facts.',
          timeBox: '10 min',
          mandatory: true
        },
        {
          id: 'failure-admission',
          title: 'FAILURE ADMISSION',
          description: 'Explicitly acknowledge what isn\'t working and why previous solutions failed',
          timeBox: '5 min',
          mandatory: true
        },
        {
          id: 'constraint-mapping',
          title: 'CONSTRAINT MAPPING',
          description: 'Identify the 2-3 hardest constraints that cannot be negotiated',
          timeBox: '5 min',
          mandatory: true
        }
      ]
    },
    {
      phase: 3,
      title: 'BINARY FORCING',
      duration: '15 minutes',
      objective: 'Force decisions into YES/NO choices, eliminate maybe/later',
      actions: [
        {
          id: 'core-question',
          title: 'DEFINE CORE QUESTION',
          description: 'Reduce entire crisis to one binary question that must be answered',
          timeBox: '5 min',
          mandatory: true
        },
        {
          id: 'option-generation',
          title: 'GENERATE 2 VIABLE OPTIONS',
          description: 'Create exactly 2 realistic paths forward. No more, no less.',
          timeBox: '7 min',
          mandatory: true
        },
        {
          id: 'decision-forcing',
          title: 'FORCE IMMEDIATE DECISION',
          description: 'Choose option within timeframe. No further analysis allowed.',
          timeBox: '3 min',
          mandatory: true
        }
      ]
    },
    {
      phase: 4,
      title: 'RAPID EXECUTION',
      duration: '30 minutes',
      objective: 'Immediate implementation with tight feedback loops',
      actions: [
        {
          id: 'task-assignment',
          title: 'ASSIGN IMMEDIATE TASKS',
          description: 'Give each person specific actions to complete in next 2 hours',
          timeBox: '10 min',
          mandatory: true
        },
        {
          id: 'communication-blast',
          title: 'COMMUNICATION BLAST',
          description: 'Inform all stakeholders of decision and override state',
          timeBox: '10 min',
          mandatory: true
        },
        {
          id: 'checkpoint-schedule',
          title: 'SCHEDULE TIGHT CHECKPOINTS',
          description: 'Set 2-hour, 8-hour, and 24-hour progress reviews',
          timeBox: '10 min',
          mandatory: true
        }
      ]
    },
    {
      phase: 5,
      title: 'PATTERN PREVENTION',
      duration: '15 minutes',
      objective: 'Prevent same crisis from recurring',
      actions: [
        {
          id: 'root-cause',
          title: 'IDENTIFY ROOT PATTERN',
          description: 'Name the underlying pattern that created this crisis',
          timeBox: '5 min',
          mandatory: true
        },
        {
          id: 'early-warning',
          title: 'INSTALL EARLY WARNING',
          description: 'Create specific signals to catch this pattern before crisis level',
          timeBox: '5 min',
          mandatory: true
        },
        {
          id: 'process-update',
          title: 'UPDATE STANDARD PROCESS',
          description: 'Modify normal operating procedures to prevent recurrence',
          timeBox: '5 min',
          mandatory: true
        }
      ]
    }
  ];

  const startProtocol = () => {
    setExecutionTime(new Date());
    setCurrentStep('protocol');
    setCurrentProtocolStep(1);
  };

  const completeAction = (phaseIndex: number, actionId: string) => {
    const stepKey = `${phaseIndex}-${actionId}`;
    if (!completedSteps.includes(phaseIndex)) {
      setCompletedSteps([...completedSteps, phaseIndex]);
    }
    
    // Store action completion data
    setProtocolData((prev: any) => ({
      ...prev,
      [stepKey]: {
        completed: true,
        timestamp: new Date(),
        phase: phaseIndex + 1
      }
    }));
  };

  const advancePhase = () => {
    if (currentProtocolStep < protocolPhases.length) {
      setCurrentProtocolStep(currentProtocolStep + 1);
    } else {
      setCurrentStep('execution');
    }
  };

  const getCurrentPhase = () => protocolPhases[currentProtocolStep - 1];

  const calculateTimeElapsed = () => {
    if (!executionTime) return '0 min';
    const now = new Date();
    const diff = Math.floor((now.getTime() - executionTime.getTime()) / 60000);
    return `${diff} min`;
  };

  // INTRO SCREEN
  if (currentStep === 'intro') {
    return (
      <>
        <SEOHead
          title="Override Protocol - Crisis Breakthrough Process | IMAGINATION G"
          description="Emergency pattern breaking protocol for when teams are completely stuck. Systematic crisis resolution in 90 minutes."
          ogImage="/images/og-override-protocol.svg"
        />
        
        <div className="min-h-screen bg-black text-white">
          <Navigation />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-8 text-red-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></span>
                OVERRIDE PROTOCOL: STANDBY
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                OVERRIDE<br />PROTOCOL<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-12 max-w-2xl">
                Emergency pattern breaking for crisis situations. When teams are completely stuck 
                and normal processes have failed, the Override Protocol forces breakthrough in 90 minutes.
              </p>

              <div className="bg-red-950 border-2 border-red-600 p-8 mb-12">
                <h2 className="text-2xl font-black text-red-400 mb-4">⚠️ WARNING: EMERGENCY USE ONLY</h2>
                <div className="space-y-3 text-red-200">
                  <p>The Override Protocol temporarily suspends normal team processes and decision-making.</p>
                  <p>Use only when:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Crisis situation with immediate consequences</li>
                    <li>Normal problem-solving has completely failed</li>
                    <li>Team is paralyzed or in destructive patterns</li>
                    <li>You have authority to override standard processes</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="border border-zinc-800 p-6 bg-zinc-950">
                  <h3 className="text-xl font-black mb-4 text-red-600">PROTOCOL OVERVIEW</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-xs font-black">1</div>
                      <div>
                        <div className="font-bold">EMERGENCY STOP</div>
                        <div className="text-zinc-400">Halt dysfunction, gather decision makers</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-xs font-black">2</div>
                      <div>
                        <div className="font-bold">TRUTH EXTRACTION</div>
                        <div className="text-zinc-400">Surface brutal facts and failures</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-xs font-black">3</div>
                      <div>
                        <div className="font-bold">BINARY FORCING</div>
                        <div className="text-zinc-400">Force YES/NO decisions</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-xs font-black">4</div>
                      <div>
                        <div className="font-bold">RAPID EXECUTION</div>
                        <div className="text-zinc-400">Immediate implementation</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-xs font-black">5</div>
                      <div>
                        <div className="font-bold">PATTERN PREVENTION</div>
                        <div className="text-zinc-400">Prevent recurrence</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-zinc-800 p-6 bg-zinc-950">
                  <h3 className="text-xl font-black mb-4 text-blue-600">SUCCESS METRICS</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Target className="text-green-500" size={16} />
                      <span className="text-sm">Decision made within 90 minutes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="text-yellow-500" size={16} />
                      <span className="text-sm">Immediate action initiated</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="text-blue-500" size={16} />
                      <span className="text-sm">2-hour progress checkpoint completed</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <RefreshCw className="text-purple-500" size={16} />
                      <span className="text-sm">Prevention measures installed</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => setCurrentStep('assessment')}
                  className="bg-red-600 px-12 py-6 text-2xl font-black hover:bg-red-700 transition-colors mb-4"
                >
                  ASSESS CRISIS SITUATION
                </button>
                <p className="text-zinc-600 text-sm">
                  <AlertTriangle className="inline mr-1" size={14} />
                  This will initiate emergency protocol assessment
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
    return (
      <>
        <SEOHead
          title="Crisis Assessment - Override Protocol | IMAGINATION G"
          description="Assess your crisis situation to determine appropriate override response"
        />
        
        <div className="min-h-screen bg-black text-white">
          <Navigation />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <button
                  onClick={() => setCurrentStep('intro')}
                  className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6"
                >
                  <ArrowLeft size={20} />
                  Back to Protocol Overview
                </button>

                <h1 className="text-4xl font-black mb-6">
                  CRISIS<br />ASSESSMENT<span className="text-red-600">.</span>
                </h1>
                
                <p className="text-xl text-zinc-400 mb-8">
                  Identify your crisis type and urgency level to calibrate the override response.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-black mb-6">SELECT CRISIS TYPE</h2>
                  <div className="grid gap-4">
                    {crisisTypes.map((crisis) => (
                      <button
                        key={crisis.id}
                        onClick={() => setCrisisType(crisis.id)}
                        className={`p-6 border-2 transition-all text-left ${
                          crisisType === crisis.id
                            ? `border-${crisis.color}-600 bg-${crisis.color}-950`
                            : 'border-zinc-800 hover:border-zinc-600'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className={`text-xl font-black mb-2 ${
                              crisisType === crisis.id ? `text-${crisis.color}-400` : 'text-white'
                            }`}>
                              {crisis.title}
                            </h3>
                            <p className="text-zinc-400 mb-4">{crisis.description}</p>
                          </div>
                          <div className={`w-6 h-6 border-2 rounded-full flex items-center justify-center ${
                            crisisType === crisis.id 
                              ? `border-${crisis.color}-600 bg-${crisis.color}-600`
                              : 'border-zinc-600'
                          }`}>
                            {crisisType === crisis.id && <CheckCircle className="text-black" size={16} />}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-bold text-white mb-2">CRISIS INDICATORS:</h4>
                          <ul className="space-y-1 text-sm text-zinc-400">
                            {crisis.indicators.map((indicator, index) => (
                              <li key={index}>• {indicator}</li>
                            ))}
                          </ul>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {crisisType && (
                  <div>
                    <h2 className="text-2xl font-black mb-6">URGENCY LEVEL (1-5)</h2>
                    <div className="grid grid-cols-5 gap-4">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <button
                          key={level}
                          onClick={() => setUrgencyLevel(level)}
                          className={`p-6 border-2 transition-all text-center ${
                            urgencyLevel === level
                              ? 'border-red-600 bg-red-950'
                              : 'border-zinc-800 hover:border-zinc-600'
                          }`}
                        >
                          <div className="text-3xl font-black mb-2">{level}</div>
                          <div className="text-sm">
                            {level === 1 && 'Low'}
                            {level === 2 && 'Moderate'}
                            {level === 3 && 'High'}
                            {level === 4 && 'Critical'}
                            {level === 5 && 'Emergency'}
                          </div>
                        </button>
                      ))}
                    </div>
                    
                    <div className="mt-6 bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="font-bold mb-3">URGENCY CALIBRATION:</h3>
                      <div className="text-sm text-zinc-400 space-y-2">
                        <div><strong>1-2:</strong> Can wait days/weeks - consider standard problem-solving</div>
                        <div><strong>3:</strong> Needs resolution within days - Override Protocol appropriate</div>
                        <div><strong>4:</strong> Needs resolution within hours - Override Protocol recommended</div>
                        <div><strong>5:</strong> Needs resolution immediately - Override Protocol essential</div>
                      </div>
                    </div>
                  </div>
                )}

                {crisisType && urgencyLevel > 0 && (
                  <div className="border-4 border-red-600 p-8 bg-red-950">
                    <h3 className="text-2xl font-black text-red-400 mb-4">PROTOCOL READINESS</h3>
                    <div className="mb-6">
                      <p className="text-red-200 mb-4">
                        Crisis Type: <strong>{crisisTypes.find(c => c.id === crisisType)?.title}</strong>
                      </p>
                      <p className="text-red-200 mb-4">
                        Urgency Level: <strong>{urgencyLevel}/5</strong>
                      </p>
                    </div>

                    {urgencyLevel >= 3 ? (
                      <div>
                        <p className="text-red-200 mb-6">
                          Override Protocol is <strong>RECOMMENDED</strong> for this crisis level.
                          Estimated completion time: 90 minutes.
                        </p>
                        <button
                          onClick={startProtocol}
                          className="bg-red-600 px-8 py-4 text-xl font-black hover:bg-red-700 transition-colors"
                        >
                          <Play className="inline mr-2" size={20} />
                          INITIATE OVERRIDE PROTOCOL
                        </button>
                      </div>
                    ) : (
                      <div>
                        <p className="text-yellow-200 mb-6">
                          This crisis level may not require full Override Protocol. 
                          Consider using standard problem-solving tools first.
                        </p>
                        <div className="flex gap-4">
                          <button
                            onClick={startProtocol}
                            className="border-2 border-red-600 px-6 py-3 font-bold hover:bg-red-600 transition-colors"
                          >
                            PROCEED WITH OVERRIDE
                          </button>
                          <a
                            href="/tools"
                            className="border-2 border-zinc-600 px-6 py-3 font-bold hover:border-zinc-400 transition-colors"
                          >
                            USE STANDARD TOOLS
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  // PROTOCOL EXECUTION SCREEN
  if (currentStep === 'protocol') {
    const currentPhase = getCurrentPhase();
    const phaseIndex = currentProtocolStep - 1;
    const isPhaseComplete = completedSteps.includes(phaseIndex);

    return (
      <>
        <SEOHead
          title={`${currentPhase.title} - Override Protocol | IMAGINATION G`}
          description={`Executing ${currentPhase.title} phase of Override Protocol`}
        />
        
        <div className="min-h-screen bg-black text-white">
          <Navigation />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-4xl mx-auto">
              {/* Protocol Header */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="inline-block mb-2 text-red-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                      <span className="inline-block w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></span>
                      OVERRIDE ACTIVE • {calculateTimeElapsed()} ELAPSED
                    </div>
                    <div className="text-lg font-bold text-zinc-400">
                      PHASE {currentPhase.phase} OF {protocolPhases.length}
                    </div>
                  </div>
                  <div className="text-right text-sm text-zinc-500">
                    Target: {currentPhase.duration}
                  </div>
                </div>
                
                <div className="h-2 bg-zinc-900 rounded mb-4">
                  <div 
                    className="h-2 bg-red-600 rounded transition-all duration-300"
                    style={{ width: `${(currentProtocolStep / protocolPhases.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Current Phase */}
              <div className="mb-8">
                <h1 className="text-4xl font-black mb-4">
                  {currentPhase.title}<span className="text-red-600">.</span>
                </h1>
                <p className="text-xl text-zinc-400 mb-6">{currentPhase.objective}</p>

                <div className="bg-red-950 border border-red-600 p-6 mb-8">
                  <h3 className="font-black text-red-400 mb-3">TIME BOX: {currentPhase.duration}</h3>
                  <p className="text-red-200">
                    Complete all actions within this timeframe. Do not extend for perfection.
                  </p>
                </div>
              </div>

              {/* Phase Actions */}
              <div className="space-y-6">
                {currentPhase.actions.map((action, actionIndex) => {
                  const actionKey = `${phaseIndex}-${action.id}`;
                  const isCompleted = protocolData[actionKey]?.completed;

                  return (
                    <div
                      key={action.id}
                      className={`border-2 p-6 transition-all ${
                        isCompleted
                          ? 'border-green-600 bg-green-950'
                          : 'border-zinc-800 hover:border-zinc-600'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`px-2 py-1 text-xs font-mono border ${
                              action.mandatory ? 'border-red-600 bg-red-950' : 'border-yellow-600 bg-yellow-950'
                            }`}>
                              {action.mandatory ? 'MANDATORY' : 'OPTIONAL'}
                            </div>
                            <div className="text-xs text-zinc-500">{action.timeBox}</div>
                          </div>
                          <h3 className="text-xl font-black mb-2">{action.title}</h3>
                          <p className="text-zinc-400 text-sm">{action.description}</p>
                        </div>
                        
                        <button
                          onClick={() => completeAction(phaseIndex, action.id)}
                          disabled={isCompleted}
                          className={`ml-4 w-12 h-12 border-2 rounded-full flex items-center justify-center transition-colors ${
                            isCompleted
                              ? 'border-green-500 bg-green-500'
                              : 'border-zinc-600 hover:border-green-500'
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle className="text-black" size={20} />
                          ) : (
                            <div className="w-6 h-6 border-2 border-zinc-600 rounded-full"></div>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Phase Controls */}
              <div className="mt-8 flex justify-between items-center">
                <div className="text-sm text-zinc-500">
                  {currentPhase.actions.filter(a => a.mandatory).length} mandatory actions • 
                  {Object.keys(protocolData).filter(k => k.startsWith(`${phaseIndex}-`)).length} completed
                </div>
                
                <div className="flex gap-4">
                  {currentProtocolStep > 1 && (
                    <button
                      onClick={() => setCurrentProtocolStep(currentProtocolStep - 1)}
                      className="border-2 border-zinc-700 px-6 py-3 font-bold hover:border-zinc-500 transition-colors"
                    >
                      ← PREVIOUS PHASE
                    </button>
                  )}
                  
                  <button
                    onClick={advancePhase}
                    className="bg-red-600 px-8 py-3 font-bold hover:bg-red-700 transition-colors"
                  >
                    {currentProtocolStep < protocolPhases.length ? 'NEXT PHASE →' : 'BEGIN EXECUTION →'}
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  // EXECUTION TRACKING SCREEN
  if (currentStep === 'execution') {
    return (
      <>
        <SEOHead
          title="Protocol Execution - Override Protocol | IMAGINATION G"
          description="Track execution and progress of Override Protocol decisions"
        />
        
        <div className="min-h-screen bg-black text-white">
          <Navigation />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  PROTOCOL COMPLETE • EXECUTION PHASE
                </div>

                <h1 className="text-4xl md:text-5xl font-black mb-6">
                  EXECUTION<br />TRACKING<span className="text-red-600">.</span>
                </h1>
                
                <p className="text-xl text-zinc-400 mb-8">
                  Override Protocol completed in {calculateTimeElapsed()}. Now tracking execution and results.
                </p>
              </div>

              {/* Execution Dashboard */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="border border-green-600 p-6 bg-green-950">
                  <h3 className="font-black text-green-400 mb-4">PROTOCOL STATUS</h3>
                  <div className="space-y-2 text-sm">
                    <div>Phases Completed: {completedSteps.length}/{protocolPhases.length}</div>
                    <div>Execution Time: {calculateTimeElapsed()}</div>
                    <div>Crisis Type: {crisisTypes.find(c => c.id === crisisType)?.title}</div>
                    <div>Urgency Level: {urgencyLevel}/5</div>
                  </div>
                </div>

                <div className="border border-yellow-600 p-6 bg-yellow-950">
                  <h3 className="font-black text-yellow-400 mb-4">NEXT CHECKPOINTS</h3>
                  <div className="space-y-2 text-sm">
                    <div>✓ 2-Hour Review: [Schedule now]</div>
                    <div>• 8-Hour Review: [Pending]</div>
                    <div>• 24-Hour Review: [Pending]</div>
                    <div>• Pattern Analysis: [Pending]</div>
                  </div>
                </div>

                <div className="border border-blue-600 p-6 bg-blue-950">
                  <h3 className="font-black text-blue-400 mb-4">SUCCESS METRICS</h3>
                  <div className="space-y-2 text-sm">
                    <div>Decision Made: ✓</div>
                    <div>Action Initiated: [Track]</div>
                    <div>Team Aligned: [Measure]</div>
                    <div>Progress Visible: [Validate]</div>
                  </div>
                </div>
              </div>

              {/* Protocol Summary */}
              <div className="bg-zinc-950 border border-zinc-800 p-8 mb-12">
                <h2 className="text-2xl font-black mb-6">PROTOCOL EXECUTION SUMMARY</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {protocolPhases.map((phase, index) => {
                    const isCompleted = completedSteps.includes(index);
                    return (
                      <div key={phase.phase} className={`p-4 border ${
                        isCompleted ? 'border-green-600 bg-green-950' : 'border-zinc-700'
                      }`}>
                        <h3 className={`font-black mb-2 ${
                          isCompleted ? 'text-green-400' : 'text-zinc-400'
                        }`}>
                          {phase.title}
                        </h3>
                        <p className="text-sm text-zinc-400 mb-3">{phase.objective}</p>
                        <div className="text-xs text-zinc-500">
                          {phase.actions.length} actions • Target: {phase.duration}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Items */}
              <div className="bg-black border-4 border-red-600 p-8 mb-8">
                <h2 className="text-2xl font-black text-red-600 mb-6">IMMEDIATE ACTION ITEMS</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-black text-white mb-3">NEXT 2 HOURS:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Execute assigned immediate tasks</li>
                      <li>• Communicate decision to all stakeholders</li>
                      <li>• Begin implementation of chosen solution</li>
                      <li>• Schedule 2-hour progress review</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-black text-white mb-3">NEXT 24 HOURS:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Measure early results and indicators</li>
                      <li>• Adjust implementation based on feedback</li>
                      <li>• Install early warning systems</li>
                      <li>• Document lessons learned</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Navigation Options */}
              <div className="grid md:grid-cols-4 gap-4">
                <button
                  onClick={() => setCurrentStep('debrief')}
                  className="border border-zinc-700 p-6 text-center hover:border-zinc-500 transition-colors"
                >
                  <Target className="mx-auto mb-3" size={24} />
                  <h4 className="font-black mb-2">CONDUCT DEBRIEF</h4>
                  <p className="text-sm text-zinc-400">Analyze protocol effectiveness</p>
                </button>
                
                <button
                  onClick={() => {
                    // Implement export functionality
                    const reportData = { crisisType, urgencyLevel, protocolData, executionTime };
                    console.log('Override Protocol Report:', reportData);
                  }}
                  className="border border-blue-600 p-6 text-center hover:bg-blue-600 transition-colors"
                >
                  <Download className="mx-auto mb-3" size={24} />
                  <h4 className="font-black mb-2">EXPORT REPORT</h4>
                  <p className="text-sm text-zinc-400">Save protocol execution log</p>
                </button>
                
                <a
                  href="/tools/micro-interventions"
                  className="border border-green-600 p-6 text-center hover:bg-green-600 transition-colors"
                >
                  <Zap className="mx-auto mb-3" size={24} />
                  <h4 className="font-black mb-2">DAILY PRACTICES</h4>
                  <p className="text-sm text-zinc-400">Prevent future crises</p>
                </a>
                
                <button
                  onClick={() => {
                    setCurrentStep('intro');
                    setCrisisType('');
                    setUrgencyLevel(0);
                    setCurrentProtocolStep(1);
                    setCompletedSteps([]);
                    setProtocolData({});
                    setExecutionTime(null);
                  }}
                  className="border border-zinc-700 p-6 text-center hover:border-zinc-500 transition-colors"
                >
                  <RefreshCw className="mx-auto mb-3" size={24} />
                  <h4 className="font-black mb-2">RESET PROTOCOL</h4>
                  <p className="text-sm text-zinc-400">Prepare for new crisis</p>
                </button>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  // DEBRIEF SCREEN
  return (
    <>
      <SEOHead
        title="Protocol Debrief - Override Protocol | IMAGINATION G"
        description="Analyze Override Protocol effectiveness and extract learnings"
      />
      
      <div className="min-h-screen bg-black text-white">
        <Navigation />

        <section className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-black mb-6">
              PROTOCOL<br />DEBRIEF<span className="text-red-600">.</span>
            </h1>
            
            <p className="text-xl text-zinc-400 mb-12">
              Analyze protocol effectiveness and extract learnings for future crisis prevention.
            </p>

            <div className="space-y-8">
              {/* Implementation coming in future phase */}
              <div className="border border-zinc-800 p-8 bg-zinc-950 text-center">
                <h3 className="text-xl font-black mb-4">DEBRIEF MODULE</h3>
                <p className="text-zinc-400 mb-6">
                  Comprehensive debrief analysis will be available in the next phase of development.
                  For now, use the execution tracking to monitor results.
                </p>
                <button
                  onClick={() => setCurrentStep('execution')}
                  className="bg-red-600 px-6 py-3 font-bold hover:bg-red-700 transition-colors"
                >
                  RETURN TO EXECUTION TRACKING
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OverrideProtocolPage;