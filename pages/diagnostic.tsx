import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import { ArrowRight, ArrowLeft, Check, AlertTriangle, TrendingUp, Users } from 'lucide-react';

const DiagnosticPage = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'questions' | 'analysis' | 'results'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<number, 'yes' | 'no'>>({});
  const [analysisComplete, setAnalysisComplete] = useState(false);

  // Comprehensive diagnostic questions organized by pattern type
  const questions = [
    // DECISION PATTERNS (1-8)
    {
      id: 1,
      category: "DECISION PATTERNS",
      title: "AGENCY CHECK",
      question: "Did you make a significant business decision this week without seeking external validation?",
      yesText: "SELF-DIRECTED",
      yesSubtext: "Your internal signal is clear",
      noText: "VALIDATION-SEEKING",
      noSubtext: "Outsourcing your decision signal",
      pattern: "agency"
    },
    {
      id: 2,
      category: "DECISION PATTERNS", 
      title: "BINARY DISCIPLINE",
      question: "When faced with decisions, do you force them into YES/NO choices rather than maybe/later?",
      yesText: "BINARY THINKER",
      yesSubtext: "Decision velocity over consensus",
      noText: "MAYBE DEFAULTER",
      noSubtext: "Consensus over velocity",
      pattern: "binary-decisions"
    },
    {
      id: 3,
      category: "DECISION PATTERNS",
      title: "SPEED TEST", 
      question: "Do most business decisions happen within 24 hours of being raised?",
      yesText: "VELOCITY MODE",
      yesSubtext: "Speed is your strategy",
      noText: "COMMITTEE MODE", 
      noSubtext: "Process is your strategy",
      pattern: "speed"
    },
    {
      id: 4,
      category: "DECISION PATTERNS",
      title: "REVERSAL COURAGE",
      question: "Have you killed or reversed a previous decision this month when evidence changed?",
      yesText: "ADAPTIVE",
      yesSubtext: "Data over ego",
      noText: "COMMITTED", 
      noSubtext: "Consistency over adaptation",
      pattern: "adaptability"
    },
    {
      id: 5,
      category: "DECISION PATTERNS",
      title: "RISK TOLERANCE",
      question: "Do you make decisions with incomplete information rather than waiting for certainty?",
      yesText: "RISK TAKER",
      yesSubtext: "Move with partial data",
      noText: "CERTAINTY SEEKER",
      noSubtext: "Wait for complete picture",
      pattern: "risk-management"
    },
    {
      id: 6,
      category: "DECISION PATTERNS",
      title: "DELEGATION AUDIT",
      question: "Do you delegate decisions to the person closest to the problem rather than centralizing them?",
      yesText: "DISTRIBUTED",
      yesSubtext: "Context over hierarchy",
      noText: "CENTRALIZED",
      noSubtext: "Control over context",
      pattern: "delegation"
    },
    {
      id: 7,
      category: "DECISION PATTERNS",
      title: "BIAS AWARENESS",
      question: "When you change your mind, do you examine what bias led you astray?",
      yesText: "BIAS HUNTER",
      yesSubtext: "Learn from mistakes",
      noText: "PATTERN BLIND",
      noSubtext: "Repeat same errors",
      pattern: "bias-correction"
    },
    {
      id: 8,
      category: "DECISION PATTERNS",
      title: "DECISION DEBT",
      question: "Do you regularly revisit and kill decisions that are no longer serving you?",
      yesText: "DECISION JANITOR",
      yesSubtext: "Clean up old choices",
      noText: "DECISION HOARDER",
      noSubtext: "Keep broken choices",
      pattern: "decision-maintenance"
    },

    // EXECUTION PATTERNS (9-16)
    {
      id: 9,
      category: "EXECUTION PATTERNS",
      title: "BUILDING VS PLANNING",
      question: "Did you spend more time building/shipping than planning/strategizing this week?",
      yesText: "BUILDER MODE",
      yesSubtext: "Reality over theory",
      noText: "PLANNER MODE",
      noSubtext: "Theory over reality", 
      pattern: "execution-bias"
    },
    {
      id: 10,
      category: "EXECUTION PATTERNS",
      title: "SHIPPING DISCIPLINE",
      question: "Did you ship something visible to users/customers this week?",
      yesText: "SHIPPER",
      yesSubtext: "Done beats perfect",
      noText: "POLISHER",
      noSubtext: "Perfect beats done",
      pattern: "shipping"
    },
    {
      id: 11,
      category: "EXECUTION PATTERNS", 
      title: "PERMISSION INDEPENDENCE",
      question: "Can you ship improvements to your core product without anyone else's approval?",
      yesText: "AUTONOMOUS",
      yesSubtext: "You own your output",
      noText: "DEPENDENT",
      noSubtext: "Committees own your output",
      pattern: "autonomy"
    },
    {
      id: 12,
      category: "EXECUTION PATTERNS",
      title: "MOMENTUM CHECK",
      question: "Are you moving faster now than you were 3 months ago?",
      yesText: "ACCELERATING", 
      yesSubtext: "Momentum compounds",
      noText: "DECELERATING",
      noSubtext: "Friction compounds",
      pattern: "momentum"
    },
    {
      id: 13,
      category: "EXECUTION PATTERNS",
      title: "SCOPE DISCIPLINE",
      question: "Do you consistently ship smaller versions rather than waiting for the full vision?",
      yesText: "SCOPE CUTTER",
      yesSubtext: "Small beats never",
      noText: "SCOPE CREEPER",
      noSubtext: "Perfect beats real",
      pattern: "scope-management"
    },
    {
      id: 14,
      category: "EXECUTION PATTERNS",
      title: "FEEDBACK VELOCITY",
      question: "Do you get real user feedback within 48 hours of shipping something?",
      yesText: "FEEDBACK FAST",
      yesSubtext: "Learn immediately",
      noText: "FEEDBACK SLOW",
      noSubtext: "Learn eventually",
      pattern: "feedback-loops"
    },
    {
      id: 15,
      category: "EXECUTION PATTERNS",
      title: "ITERATION SPEED",
      question: "Can you implement user feedback and ship improvements within a week?",
      yesText: "RAPID ITERATION",
      yesSubtext: "Respond to reality",
      noText: "SLOW ITERATION",
      noSubtext: "Ignore reality",
      pattern: "iteration-cycles"
    },
    {
      id: 16,
      category: "EXECUTION PATTERNS",
      title: "EXECUTION DEBT",
      question: "Do you regularly kill features/projects that aren't working rather than optimizing them?",
      yesText: "EXECUTION JANITOR",
      yesSubtext: "Kill failed experiments",
      noText: "SUNK COST SLAVE",
      noSubtext: "Optimize failed experiments",
      pattern: "execution-maintenance"
    },

    // TRUTH PATTERNS (17-24)
    {
      id: 17,
      category: "TRUTH PATTERNS",
      title: "SACRED COW SLAUGHTER",
      question: "Have you challenged or changed a core assumption about your business this month?",
      yesText: "TRUTH SEEKER",
      yesSubtext: "Reality over comfort",
      noText: "COMFORT KEEPER", 
      noSubtext: "Comfort over reality",
      pattern: "truth-seeking"
    },
    {
      id: 18,
      category: "TRUTH PATTERNS",
      title: "CONFLICT COURAGE",
      question: "Did you have a productive disagreement that led to clarity this week?",
      yesText: "CONFLICT POSITIVE",
      yesSubtext: "Friction creates clarity",
      noText: "HARMONY KEEPER",
      noSubtext: "Silence preserves dysfunction",
      pattern: "conflict-clarity"
    },
    {
      id: 19,
      category: "TRUTH PATTERNS",
      title: "CLARITY STANDARD",
      question: "Can you explain your business model in one clear sentence?",
      yesText: "CRYSTAL CLEAR",
      yesSubtext: "Simplicity is power", 
      noText: "COMPLEX",
      noSubtext: "Complexity hides confusion",
      pattern: "clarity"
    },
    {
      id: 20,
      category: "TRUTH PATTERNS",
      title: "MARKET REALITY",
      question: "Are you profitable or do you have a clear path to profitability within 12 months?",
      yesText: "MARKET VALIDATED",
      yesSubtext: "Customers validate you",
      noText: "INVESTOR DEPENDENT",
      noSubtext: "VCs validate you",
      pattern: "market-reality"
    },
    {
      id: 21,
      category: "TRUTH PATTERNS",
      title: "CUSTOMER TRUTH",
      question: "Do you regularly talk to customers who've canceled or chosen competitors?",
      yesText: "TRUTH LISTENER",
      yesSubtext: "Learn from rejection",
      noText: "TRUTH AVOIDER",
      noSubtext: "Stay in echo chamber",
      pattern: "customer-truth"
    },
    {
      id: 22,
      category: "TRUTH PATTERNS",
      title: "FINANCIAL HONESTY",
      question: "Do you know your real unit economics and customer lifetime value?",
      yesText: "NUMBERS HONEST",
      yesSubtext: "Math doesn't lie",
      noText: "NUMBERS FUZZY",
      noSubtext: "Hope over math",
      pattern: "financial-truth"
    },
    {
      id: 23,
      category: "TRUTH PATTERNS",
      title: "TEAM TRUTH",
      question: "Do your team members openly disagree with you in meetings?",
      yesText: "TRUTH CULTURE",
      yesSubtext: "Disagreement is safe",
      noText: "YES-MAN CULTURE",
      noSubtext: "Agreement is required",
      pattern: "team-truth"
    },
    {
      id: 24,
      category: "TRUTH PATTERNS",
      title: "COMPETITIVE TRUTH",
      question: "Do you regularly study what competitors are doing better than you?",
      yesText: "COMPETITIVE LEARNER",
      yesSubtext: "Learn from winners",
      noText: "COMPETITIVE BLIND",
      noSubtext: "Ignore superior solutions",
      pattern: "competitive-truth"
    },

    // SYSTEM PATTERNS (25-32)
    {
      id: 25,
      category: "SYSTEM PATTERNS", 
      title: "MEETING PRODUCTIVITY",
      question: "Did your last 3 meetings result in immediate, specific actions being taken?",
      yesText: "MEETINGS = MOVEMENT",
      yesSubtext: "Talk creates action",
      noText: "MEETINGS = THEATER",
      noSubtext: "Talk replaces action",
      pattern: "meeting-efficiency"
    },
    {
      id: 26,
      category: "SYSTEM PATTERNS",
      title: "ENERGY AUDIT", 
      question: "Do you feel energized rather than drained after working on your core business activities?",
      yesText: "ENERGIZED",
      yesSubtext: "Aligned with natural flow",
      noText: "DRAINED",
      noSubtext: "Fighting your natural style",
      pattern: "energy-alignment"
    },
    {
      id: 27,
      category: "SYSTEM PATTERNS",
      title: "PROCESS DEBT",
      question: "Are your processes helping you move faster rather than slowing you down?",
      yesText: "PROCESS ACCELERATOR",
      yesSubtext: "Systems serve speed",
      noText: "PROCESS PRISONER",
      noSubtext: "Speed serves systems",
      pattern: "process-efficiency"
    },
    {
      id: 28,
      category: "SYSTEM PATTERNS",
      title: "TEAM NEXEL",
      question: "Do you match tasks to people's natural problem-solving styles rather than forcing everyone to work the same way?",
      yesText: "NEXEL ALIGNED",
      yesSubtext: "People work with their grain",
      noText: "ONE-SIZE-FITS-ALL",
      noSubtext: "People work against their grain", 
      pattern: "team-alignment"
    },
    {
      id: 29,
      category: "SYSTEM PATTERNS",
      title: "COMMUNICATION EFFICIENCY",
      question: "Do you default to async communication and avoid meetings for information sharing?",
      yesText: "ASYNC FIRST",
      yesSubtext: "Respect people's time",
      noText: "MEETING FIRST",
      noSubtext: "Steal people's time",
      pattern: "communication-systems"
    },
    {
      id: 30,
      category: "SYSTEM PATTERNS",
      title: "AUTOMATION BIAS",
      question: "Do you automate repetitive tasks rather than hiring people to do them?",
      yesText: "AUTOMATION FIRST",
      yesSubtext: "Systems scale infinitely",
      noText: "PEOPLE FIRST",
      noSubtext: "People scale linearly",
      pattern: "automation-systems"
    },
    {
      id: 31,
      category: "SYSTEM PATTERNS",
      title: "MEASUREMENT SYSTEMS",
      question: "Do you measure leading indicators (actions) rather than just lagging indicators (results)?",
      yesText: "LEADING FOCUSED",
      yesSubtext: "Control inputs",
      noText: "LAGGING FOCUSED",
      noSubtext: "Hope for outputs",
      pattern: "measurement-systems"
    },
    {
      id: 32,
      category: "SYSTEM PATTERNS",
      title: "SYSTEM MAINTENANCE",
      question: "Do you regularly audit and remove systems/tools that are no longer serving you?",
      yesText: "SYSTEM JANITOR",
      yesSubtext: "Kill broken systems",
      noText: "SYSTEM HOARDER",
      noSubtext: "Keep broken systems",
      pattern: "system-maintenance"
    }
  ];

  const handleAnswer = (answer: 'yes' | 'no') => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: answer }));
    
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentStep('analysis');
      // Simulate analysis time
      setTimeout(() => {
        setAnalysisComplete(true);
        setTimeout(() => {
          setCurrentStep('results');
        }, 1000);
      }, 3000);
    }
  };

  const restartDiagnostic = () => {
    setCurrentStep('intro');
    setCurrentQuestion(1);
    setAnswers({});
    setAnalysisComplete(false);
  };

  const calculateDetailedResults = () => {
    const patternAnalysis = {
      decisions: 0,
      execution: 0, 
      truth: 0,
      systems: 0
    };

    // Decision patterns (1-8)
    const decisionScore = [1,2,3,4,5,6,7,8].reduce((acc, q) => acc + (answers[q] === 'yes' ? 1 : 0), 0);
    patternAnalysis.decisions = (decisionScore / 8) * 100;

    // Execution patterns (9-16) 
    const executionScore = [9,10,11,12,13,14,15,16].reduce((acc, q) => acc + (answers[q] === 'yes' ? 1 : 0), 0);
    patternAnalysis.execution = (executionScore / 8) * 100;

    // Truth patterns (17-24)
    const truthScore = [17,18,19,20,21,22,23,24].reduce((acc, q) => acc + (answers[q] === 'yes' ? 1 : 0), 0);
    patternAnalysis.truth = (truthScore / 8) * 100;

    // System patterns (25-32)
    const systemScore = [25,26,27,28,29,30,31,32].reduce((acc, q) => acc + (answers[q] === 'yes' ? 1 : 0), 0);
    patternAnalysis.systems = (systemScore / 8) * 100;

    const overallScore = Object.values(patternAnalysis).reduce((a, b) => a + b, 0) / 4;
    const stuckScore = 100 - overallScore; // Invert for "stuck" percentage

    // Determine primary stuck pattern and intervention
    const weakestArea = Object.entries(patternAnalysis).reduce((min, [key, value]) => 
      value < min.value ? { area: key, value } : min, 
      { area: 'decisions', value: 100 }
    );

    let recommendedIntervention = '';
    let interventionUrl = '';
    let secondaryRecommendations = [];

    // Crisis-level dysfunction requiring emergency intervention
    if (overallScore < 25) {
      recommendedIntervention = 'THE OVERRIDE';
      interventionUrl = '/interventions/the-override';
      secondaryRecommendations = [
        { name: 'THE NAMING', url: '/interventions/the-naming', reason: 'Truth excavation for identity and clarity crisis' },
        { name: 'THE MAP', url: '/interventions/the-map', reason: 'Rebuild broken team and network relationships' },
        { name: 'Emergency consultation', url: '/interventions', reason: 'Custom intervention design for complex dysfunction' }
      ];
    } else if (weakestArea.area === 'truth' || patternAnalysis.truth < 50) {
      recommendedIntervention = 'THE NAMING';
      interventionUrl = '/interventions/the-naming';
      secondaryRecommendations = [
        { name: 'THE MAP', url: '/interventions/the-map', reason: 'Address relationship truth and team dynamics' },
        { name: 'THE MARKET SMACKDOWN', url: '/interventions/the-market-smackdown', reason: 'Get brutal market reality clarity' },
        { name: 'DIY Alternative: Nexel Audit', url: '/tools/nexel-audit', reason: 'Self-assessment for personal clarity' }
      ];
    } else if (weakestArea.area === 'systems' || patternAnalysis.systems < 50) {
      recommendedIntervention = 'THE OVERRIDE'; 
      interventionUrl = '/interventions/the-override';
      secondaryRecommendations = [
        { name: 'THE MAP', url: '/interventions/the-map', reason: 'Optimize team and network systems' },
        { name: 'THE BUILD', url: '/interventions/the-build', reason: 'Build systematic shipping processes' },
        { name: 'DIY Alternative: Energy Audit', url: '/tools/energy-audit', reason: 'Self-guided energy and system optimization' }
      ];
    } else if (weakestArea.area === 'execution' || patternAnalysis.execution < 50) {
      recommendedIntervention = 'THE BUILD';
      interventionUrl = '/interventions/the-build';
      secondaryRecommendations = [
        { name: 'THE OVERRIDE', url: '/interventions/the-override', reason: 'Break execution-blocking patterns' },
        { name: 'THE MARKET SMACKDOWN', url: '/interventions/the-market-smackdown', reason: 'Get clarity on what to build' },
        { name: 'DIY Alternative: Team Nexel Map', url: '/tools/team-nexel-map', reason: 'Optimize team execution alignment' }
      ];
    } else if (weakestArea.area === 'decisions' || patternAnalysis.decisions < 50) {
      recommendedIntervention = 'THE MARKET SMACKDOWN';
      interventionUrl = '/interventions/the-market-smackdown';
      secondaryRecommendations = [
        { name: 'THE NAMING', url: '/interventions/the-naming', reason: 'Get clarity on leadership and identity decisions' },
        { name: 'THE OVERRIDE', url: '/interventions/the-override', reason: 'Break decision paralysis patterns' },
        { name: 'DIY Alternative: Block Flip Exercise', url: '/tools/block-flip', reason: 'Self-guided decision reframing' }
      ];
    } else {
      recommendedIntervention = 'THE MAP';
      interventionUrl = '/interventions/the-map'; 
      secondaryRecommendations = [
        { name: 'THE BUILD', url: '/interventions/the-build', reason: 'Ship high-impact MVP for continued growth' },
        { name: 'THE MARKET SMACKDOWN', url: '/interventions/the-market-smackdown', reason: 'Strategic market expansion decisions' },
        { name: 'DIY Tools Hub', url: '/tools', reason: 'Self-guided optimization for high performers' }
      ];
    }

    return {
      patternAnalysis,
      overallScore: Math.round(overallScore),
      stuckScore: Math.round(stuckScore),
      weakestArea: weakestArea.area,
      recommendedIntervention,
      interventionUrl,
      secondaryRecommendations
    };
  };

  // INTRO SCREEN
  if (currentStep === 'intro') {
    return (
      <>
        <SEOHead
          title="Comprehensive Pattern Diagnostic | IMAGINATION G"
          description="32 binary questions across 4 pattern categories. Complete organizational health scan. Get matched to precise interventions."
          ogImage="/images/og-diagnostic.svg"
        />
        
        <div className="min-h-screen bg-black text-white">
          <Navigation currentPage="diagnostic" />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-4xl mx-auto">
                {/* System Status Badge */}
                <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  COMPREHENSIVE DIAGNOSTIC: READY
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                  COMPLETE<br />PATTERN SCAN<span className="text-red-600">.</span>
                </h1>
                
                <p className="text-xl text-zinc-400 mb-12 max-w-2xl">
                  32 binary questions across 4 critical pattern categories. 
                  Get a complete organizational health scan and precise intervention matching.
                </p>

                {/* What You'll Discover */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="border border-zinc-800 p-6 bg-zinc-950">
                    <h3 className="text-xl font-black mb-4 text-red-600">PATTERN CATEGORIES</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span>Decision Patterns (8 questions)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span>Execution Patterns (8 questions)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span>Truth Patterns (8 questions)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span>System Patterns (8 questions)</span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-zinc-800 p-6 bg-zinc-950">
                    <h3 className="text-xl font-black mb-4 text-blue-600">YOU'LL GET</h3>
                    <div className="space-y-3 text-zinc-400">
                      <div className="flex items-start gap-3">
                        <Check className="text-green-500 mt-1 flex-shrink-0" size={16} />
                        <span>Pattern health scores by category</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="text-green-500 mt-1 flex-shrink-0" size={16} />
                        <span>Primary intervention recommendation</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="text-green-500 mt-1 flex-shrink-0" size={16} />
                        <span>Secondary pathway options</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="text-green-500 mt-1 flex-shrink-0" size={16} />
                        <span>Integration with our portal system</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comparison with other options */}
                <div className="bg-black border-2 border-zinc-800 p-8 mb-12">
                  <h3 className="text-2xl font-black mb-6">HOW THIS COMPARES</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-red-600 text-white px-4 py-2 font-bold mb-3">DIAGNOSTIC</div>
                      <p className="text-sm text-zinc-400">32 questions, 4 categories</p>
                      <p className="text-sm text-zinc-400">Complete organizational scan</p>
                      <p className="text-sm font-bold text-white">Best for: Deep analysis</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-600 text-white px-4 py-2 font-bold mb-3">PATTERN DETECTION</div>
                      <p className="text-sm text-zinc-400">Problem-type → Filter selection</p>
                      <p className="text-sm text-zinc-400">Guided intervention matching</p>
                      <p className="text-sm font-bold text-white">Best for: Quick targeting</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-yellow-600 text-white px-4 py-2 font-bold mb-3">NEXEL DIAGNOSTIC</div>
                      <p className="text-sm text-zinc-400">12 questions on problem-solving</p>
                      <p className="text-sm text-zinc-400">Personal style assessment</p>
                      <p className="text-sm font-bold text-white">Best for: Individual insight</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <button
                    onClick={() => setCurrentStep('questions')}
                    className="bg-red-600 px-12 py-6 text-2xl font-black hover:bg-red-700 transition-colors mb-4"
                  >
                    START COMPREHENSIVE SCAN
                  </button>
                  <p className="text-zinc-600 text-sm mb-8">
                    Takes 6-8 minutes. No email required.
                  </p>

                  {/* Quick alternatives */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/start"
                      className="border-2 border-blue-600 px-6 py-3 font-bold hover:bg-blue-600 transition-colors"
                    >
                      Quick Pattern Detection →
                    </Link>
                    <Link 
                      href="/answers/glossary/nexel#nexel-diagnostic"
                      className="border-2 border-yellow-600 px-6 py-3 font-bold hover:bg-yellow-600 transition-colors"
                    >
                      Nexel Style Assessment →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  // ANALYSIS SCREEN
  if (currentStep === 'analysis') {
    return (
      <>
        <SEOHead
          title="Analyzing Your Patterns | IMAGINATION G"
          description="Processing your diagnostic results across all pattern categories."
        />
        
        <div className="min-h-screen bg-black text-white">
          <Navigation currentPage="diagnostic" />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-8 text-yellow-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                ANALYSIS: PROCESSING
              </div>

              <h1 className="text-4xl md:text-5xl font-black mb-12">
                ANALYZING YOUR<br />PATTERNS<span className="text-red-600">.</span>
              </h1>

              <div className="space-y-8 mb-12">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  <span className={analysisComplete ? 'text-green-400' : 'text-zinc-400'}>
                    {analysisComplete ? '✓' : '•'} Scanning decision patterns
                  </span>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span className={analysisComplete ? 'text-green-400' : 'text-zinc-400'}>
                    {analysisComplete ? '✓' : '•'} Analyzing execution patterns
                  </span>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span className={analysisComplete ? 'text-green-400' : 'text-zinc-400'}>
                    {analysisComplete ? '✓' : '•'} Evaluating truth patterns
                  </span>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                  <span className={analysisComplete ? 'text-green-400' : 'text-zinc-400'}>
                    {analysisComplete ? '✓' : '•'} Mapping system patterns
                  </span>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                  <span className={analysisComplete ? 'text-green-400' : 'text-zinc-400'}>
                    {analysisComplete ? '✓' : '•'} Matching intervention portals
                  </span>
                </div>
              </div>

              {analysisComplete && (
                <div className="text-green-400 text-lg font-bold">
                  Analysis complete. Preparing results...
                </div>
              )}
            </div>
          </section>
        </div>
      </>
    );
  }

  // RESULTS SCREEN
  if (currentStep === 'results') {
    const results = calculateDetailedResults();
    
    return (
      <>
        <SEOHead
          title="Your Complete Pattern Analysis | IMAGINATION G"
          description="Comprehensive pattern analysis results with intervention recommendations."
        />
        
        <div className="min-h-screen bg-black text-white">
          <Navigation currentPage="diagnostic" />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  ANALYSIS: COMPLETE
                </div>

                <h1 className="text-4xl md:text-5xl font-black mb-6">
                  YOUR PATTERN<br />ANALYSIS<span className="text-red-600">.</span>
                </h1>
              </div>

              {/* Overall Score */}
              <div className="bg-zinc-950 border border-zinc-800 p-8 mb-8 text-center">
                <h2 className="text-xl font-black mb-4 text-zinc-400">OVERALL PATTERN HEALTH</h2>
                <div className="text-6xl font-black mb-4">
                  {results.overallScore}%
                </div>
                <p className="text-xl text-zinc-400">
                  {results.overallScore >= 75 && "Excellent pattern health. Minor optimizations needed."}
                  {results.overallScore >= 50 && results.overallScore < 75 && "Good patterns with room for improvement."}
                  {results.overallScore >= 25 && results.overallScore < 50 && "Stuck patterns requiring intervention."}
                  {results.overallScore < 25 && "Critical pattern dysfunction. Immediate intervention needed."}
                </p>
              </div>

              {/* Pattern Category Breakdown */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="border border-red-500 p-6 bg-zinc-950">
                  <h3 className="font-black text-red-500 mb-2">DECISIONS</h3>
                  <div className="text-3xl font-black mb-2">{Math.round(results.patternAnalysis.decisions)}%</div>
                  <p className="text-sm text-zinc-400">
                    {results.patternAnalysis.decisions >= 75 ? "Strong decision velocity" :
                     results.patternAnalysis.decisions >= 50 ? "Some decision friction" :
                     "Decision paralysis detected"}
                  </p>
                </div>
                
                <div className="border border-green-500 p-6 bg-zinc-950">
                  <h3 className="font-black text-green-500 mb-2">EXECUTION</h3>
                  <div className="text-3xl font-black mb-2">{Math.round(results.patternAnalysis.execution)}%</div>
                  <p className="text-sm text-zinc-400">
                    {results.patternAnalysis.execution >= 75 ? "High execution velocity" :
                     results.patternAnalysis.execution >= 50 ? "Moderate execution gaps" :
                     "Execution bottlenecks detected"}
                  </p>
                </div>
                
                <div className="border border-yellow-500 p-6 bg-zinc-950">
                  <h3 className="font-black text-yellow-500 mb-2">TRUTH</h3>
                  <div className="text-3xl font-black mb-2">{Math.round(results.patternAnalysis.truth)}%</div>
                  <p className="text-sm text-zinc-400">
                    {results.patternAnalysis.truth >= 75 ? "High truth tolerance" :
                     results.patternAnalysis.truth >= 50 ? "Some truth avoidance" :
                     "Truth avoidance patterns detected"}
                  </p>
                </div>
                
                <div className="border border-blue-500 p-6 bg-zinc-950">
                  <h3 className="font-black text-blue-500 mb-2">SYSTEMS</h3>
                  <div className="text-3xl font-black mb-2">{Math.round(results.patternAnalysis.systems)}%</div>
                  <p className="text-sm text-zinc-400">
                    {results.patternAnalysis.systems >= 75 ? "Efficient systems" :
                     results.patternAnalysis.systems >= 50 ? "System inefficiencies" :
                     "System dysfunction detected"}
                  </p>
                </div>
              </div>

              {/* Primary Intervention Recommendation */}
              <div className="border-4 border-red-600 p-8 mb-8 text-center bg-black">
                <h2 className="text-2xl font-black text-red-600 mb-4">RECOMMENDED PROFESSIONAL INTERVENTION</h2>
                <h3 className="text-4xl font-black mb-6">{results.recommendedIntervention}</h3>
                <p className="text-xl text-zinc-400 mb-8">
                  Based on your pattern analysis ({results.weakestArea} weakest), this intervention will provide the most impact.
                </p>
                <Link 
                  href={results.interventionUrl}
                  className="inline-block bg-red-600 px-8 py-4 text-xl font-black hover:bg-red-700 transition-colors mb-4"
                >
                  BOOK {results.recommendedIntervention} →
                </Link>
              </div>

              {/* Secondary Recommendations */}
              <div className="bg-zinc-950 border border-zinc-800 p-8 mb-8">
                <h3 className="text-2xl font-black mb-6">SECONDARY PATHWAYS</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {results.secondaryRecommendations.map((rec, index) => (
                    <Link 
                      key={index}
                      href={rec.url}
                      className="border border-zinc-700 p-4 hover:border-zinc-500 transition-colors block"
                    >
                      <h4 className="font-bold text-white mb-2">{rec.name}</h4>
                      <p className="text-sm text-zinc-400">{rec.reason}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Action Options */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <Link 
                  href="/interventions"
                  className="border-2 border-zinc-700 p-6 text-center hover:border-zinc-500 transition-colors"
                >
                  <h4 className="font-black mb-2">VIEW ALL PORTALS</h4>
                  <p className="text-sm text-zinc-400">Explore intervention options</p>
                </Link>
                
                <Link 
                  href="/start"
                  className="border-2 border-blue-600 p-6 text-center hover:bg-blue-600 transition-colors"
                >
                  <h4 className="font-black mb-2">REFINE WITH FILTERS</h4>
                  <p className="text-sm text-zinc-400">Get more specific targeting</p>
                </Link>
                
                <button
                  onClick={restartDiagnostic}
                  className="border-2 border-zinc-700 p-6 text-center hover:border-zinc-500 transition-colors"
                >
                  <h4 className="font-black mb-2">RETAKE DIAGNOSTIC</h4>
                  <p className="text-sm text-zinc-400">Run analysis again</p>
                </button>
              </div>

              {/* Integration Links */}
              <div className="text-center text-zinc-500 text-sm">
                <p className="mb-4">
                  Share these results: Save this URL or take a screenshot of your pattern breakdown.
                </p>
                <p>
                  Ready for intervention? Book a pattern break session or start with our DIY tools.
                </p>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  // QUESTION SCREEN
  const currentQ = questions[currentQuestion - 1];
  const categoryProgress = questions.slice(0, currentQuestion).filter(q => q.category === currentQ.category).length;
  const categoryTotal = questions.filter(q => q.category === currentQ.category).length;
  
  return (
    <>
      <SEOHead
        title={`${currentQ.title} - Pattern Diagnostic | IMAGINATION G`}
        description={`${currentQ.category}: ${currentQ.question}`}
      />
      
      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="diagnostic" />

        <section className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Progress and Category */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-sm text-zinc-500">QUESTION {currentQuestion} OF {questions.length}</span>
                  <div className="text-lg font-bold text-zinc-400">{currentQ.category}</div>
                  <div className="text-sm text-zinc-600">{categoryProgress} of {categoryTotal} in this category</div>
                </div>
                <span className="text-sm text-zinc-500">{Math.round((currentQuestion / questions.length) * 100)}% COMPLETE</span>
              </div>
              <div className="h-2 bg-zinc-900 rounded">
                <div 
                  className="h-2 bg-red-600 rounded transition-all duration-300"
                  style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
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
                Previous Question
              </button>
            )}

            {/* Question */}
            <div className="text-center mb-12">
              <h2 className="text-xl font-black text-red-600 mb-4">{currentQ.title}</h2>
              <h3 className="text-2xl md:text-3xl font-black mb-8 leading-tight">
                {currentQ.question}
              </h3>
            </div>

            {/* Answer Options */}
            <div className="grid md:grid-cols-2 gap-6">
              <button
                onClick={() => handleAnswer('yes')}
                className="group border-2 border-green-600 p-8 hover:bg-green-600 transition-all text-left"
              >
                <h4 className="text-2xl font-black text-green-600 group-hover:text-black mb-3">
                  {currentQ.yesText}
                </h4>
                <p className="text-zinc-400 group-hover:text-black text-lg">
                  {currentQ.yesSubtext}
                </p>
              </button>

              <button
                onClick={() => handleAnswer('no')}
                className="group border-2 border-red-600 p-8 hover:bg-red-600 transition-all text-left"
              >
                <h4 className="text-2xl font-black text-red-600 group-hover:text-black mb-3">
                  {currentQ.noText}
                </h4>
                <p className="text-zinc-400 group-hover:text-black text-lg">
                  {currentQ.noSubtext}
                </p>
              </button>
            </div>

            {/* Category indicator */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 text-sm text-zinc-500">
                <div className={`w-3 h-3 rounded-full ${
                  currentQ.category === 'DECISION PATTERNS' ? 'bg-red-500' :
                  currentQ.category === 'EXECUTION PATTERNS' ? 'bg-green-500' :
                  currentQ.category === 'TRUTH PATTERNS' ? 'bg-yellow-500' :
                  'bg-blue-500'
                }`}></div>
                {currentQ.category} • Pattern: {currentQ.pattern}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DiagnosticPage;