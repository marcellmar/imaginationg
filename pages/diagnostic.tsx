import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import { ArrowRight, ArrowLeft, Check, AlertTriangle, TrendingUp, Users } from 'lucide-react';
import {
  calculateFullGPI,
  getGPIState,
  getStateLabel,
  getStateColor,
  GPI_DIMENSIONS,
  getOrderedDimensions,
} from '../lib/gpi-calculator';
import { getIndustryList } from '../lib/gpi-industry-benchmarks';
import type { DiagnosticAnswer, GPIFullResult, DimensionKey } from '../lib/gpi-types';

const DiagnosticPage = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'questions' | 'analysis' | 'results'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<number, 'yes' | 'no'>>({});
  const [selectedIndustry, setSelectedIndustry] = useState<string>('Technology/Software');
  const [analysisStep, setAnalysisStep] = useState(0);
  const [gpiResults, setGpiResults] = useState<GPIFullResult | null>(null);

  // Industry list for selection
  const industries = getIndustryList();

  // Comprehensive diagnostic questions organized by pattern type
  // Each question maps to a GPI dimension
  const questions = [
    // DECISION PATTERNS (1-8) - Maps to DECISION_LATENCY
    {
      id: 1,
      category: "DECISION PATTERNS",
      dimension: "DECISION_LATENCY" as DimensionKey,
      title: "AGENCY CHECK",
      question: "Did you make a significant business decision this week without seeking external validation?",
      yesText: "SELF-DIRECTED",
      yesSubtext: "Your internal signal is clear",
      noText: "VALIDATION-SEEKING",
      noSubtext: "Outsourcing your decision signal",
      fieldAnswer: true
    },
    {
      id: 2,
      category: "DECISION PATTERNS",
      dimension: "DECISION_LATENCY" as DimensionKey,
      title: "BINARY DISCIPLINE",
      question: "When faced with decisions, do you force them into YES/NO choices rather than maybe/later?",
      yesText: "BINARY THINKER",
      yesSubtext: "Decision velocity over consensus",
      noText: "MAYBE DEFAULTER",
      noSubtext: "Consensus over velocity",
      fieldAnswer: true
    },
    {
      id: 3,
      category: "DECISION PATTERNS",
      dimension: "DECISION_LATENCY" as DimensionKey,
      title: "SPEED TEST",
      question: "Do most business decisions happen within 24 hours of being raised?",
      yesText: "VELOCITY MODE",
      yesSubtext: "Speed is your strategy",
      noText: "COMMITTEE MODE",
      noSubtext: "Process is your strategy",
      fieldAnswer: true
    },
    {
      id: 4,
      category: "DECISION PATTERNS",
      dimension: "ERROR_CORRECTION" as DimensionKey,
      title: "REVERSAL COURAGE",
      question: "Have you killed or reversed a previous decision this month when evidence changed?",
      yesText: "ADAPTIVE",
      yesSubtext: "Data over ego",
      noText: "COMMITTED",
      noSubtext: "Consistency over adaptation",
      fieldAnswer: true
    },
    {
      id: 5,
      category: "DECISION PATTERNS",
      dimension: "DECISION_LATENCY" as DimensionKey,
      title: "RISK TOLERANCE",
      question: "Do you make decisions with incomplete information rather than waiting for certainty?",
      yesText: "RISK TAKER",
      yesSubtext: "Move with partial data",
      noText: "CERTAINTY SEEKER",
      noSubtext: "Wait for complete picture",
      fieldAnswer: true
    },
    {
      id: 6,
      category: "DECISION PATTERNS",
      dimension: "STRUCTURAL_LOCKIN" as DimensionKey,
      title: "DELEGATION AUDIT",
      question: "Do you delegate decisions to the person closest to the problem rather than centralizing them?",
      yesText: "DISTRIBUTED",
      yesSubtext: "Context over hierarchy",
      noText: "CENTRALIZED",
      noSubtext: "Control over context",
      fieldAnswer: true
    },
    {
      id: 7,
      category: "DECISION PATTERNS",
      dimension: "ERROR_CORRECTION" as DimensionKey,
      title: "BIAS AWARENESS",
      question: "When you change your mind, do you examine what bias led you astray?",
      yesText: "BIAS HUNTER",
      yesSubtext: "Learn from mistakes",
      noText: "PATTERN BLIND",
      noSubtext: "Repeat same errors",
      fieldAnswer: true
    },
    {
      id: 8,
      category: "DECISION PATTERNS",
      dimension: "DECISION_LATENCY" as DimensionKey,
      title: "DECISION DEBT",
      question: "Do you regularly revisit and kill decisions that are no longer serving you?",
      yesText: "DECISION JANITOR",
      yesSubtext: "Clean up old choices",
      noText: "DECISION HOARDER",
      noSubtext: "Keep broken choices",
      fieldAnswer: true
    },

    // EXECUTION PATTERNS (9-16) - Maps to KNOWLEDGE_VELOCITY
    {
      id: 9,
      category: "EXECUTION PATTERNS",
      dimension: "KNOWLEDGE_VELOCITY" as DimensionKey,
      title: "BUILDING VS PLANNING",
      question: "Did you spend more time building/shipping than planning/strategizing this week?",
      yesText: "BUILDER MODE",
      yesSubtext: "Reality over theory",
      noText: "PLANNER MODE",
      noSubtext: "Theory over reality",
      fieldAnswer: true
    },
    {
      id: 10,
      category: "EXECUTION PATTERNS",
      dimension: "KNOWLEDGE_VELOCITY" as DimensionKey,
      title: "SHIPPING DISCIPLINE",
      question: "Did you ship something visible to users/customers this week?",
      yesText: "SHIPPER",
      yesSubtext: "Done beats perfect",
      noText: "POLISHER",
      noSubtext: "Perfect beats done",
      fieldAnswer: true
    },
    {
      id: 11,
      category: "EXECUTION PATTERNS",
      dimension: "KNOWLEDGE_VELOCITY" as DimensionKey,
      title: "PERMISSION INDEPENDENCE",
      question: "Can you ship improvements to your core product without anyone else's approval?",
      yesText: "AUTONOMOUS",
      yesSubtext: "You own your output",
      noText: "DEPENDENT",
      noSubtext: "Committees own your output",
      fieldAnswer: true
    },
    {
      id: 12,
      category: "EXECUTION PATTERNS",
      dimension: "TALENT_FLOW" as DimensionKey,
      title: "MOMENTUM CHECK",
      question: "Are you moving faster now than you were 3 months ago?",
      yesText: "ACCELERATING",
      yesSubtext: "Momentum compounds",
      noText: "DECELERATING",
      noSubtext: "Friction compounds",
      fieldAnswer: true
    },
    {
      id: 13,
      category: "EXECUTION PATTERNS",
      dimension: "KNOWLEDGE_VELOCITY" as DimensionKey,
      title: "SCOPE DISCIPLINE",
      question: "Do you consistently ship smaller versions rather than waiting for the full vision?",
      yesText: "SCOPE CUTTER",
      yesSubtext: "Small beats never",
      noText: "SCOPE CREEPER",
      noSubtext: "Perfect beats real",
      fieldAnswer: true
    },
    {
      id: 14,
      category: "EXECUTION PATTERNS",
      dimension: "KNOWLEDGE_VELOCITY" as DimensionKey,
      title: "FEEDBACK VELOCITY",
      question: "Do you get real user feedback within 48 hours of shipping something?",
      yesText: "FEEDBACK FAST",
      yesSubtext: "Learn immediately",
      noText: "FEEDBACK SLOW",
      noSubtext: "Learn eventually",
      fieldAnswer: true
    },
    {
      id: 15,
      category: "EXECUTION PATTERNS",
      dimension: "KNOWLEDGE_VELOCITY" as DimensionKey,
      title: "ITERATION SPEED",
      question: "Can you implement user feedback and ship improvements within a week?",
      yesText: "RAPID ITERATION",
      yesSubtext: "Respond to reality",
      noText: "SLOW ITERATION",
      noSubtext: "Ignore reality",
      fieldAnswer: true
    },
    {
      id: 16,
      category: "EXECUTION PATTERNS",
      dimension: "TALENT_FLOW" as DimensionKey,
      title: "EXECUTION DEBT",
      question: "Do you regularly kill features/projects that aren't working rather than optimizing them?",
      yesText: "EXECUTION JANITOR",
      yesSubtext: "Kill failed experiments",
      noText: "SUNK COST SLAVE",
      noSubtext: "Optimize failed experiments",
      fieldAnswer: true
    },

    // TRUTH PATTERNS (17-24) - Maps to KNOWLEDGE_LOCATION
    {
      id: 17,
      category: "TRUTH PATTERNS",
      dimension: "KNOWLEDGE_LOCATION" as DimensionKey,
      title: "SACRED COW SLAUGHTER",
      question: "Have you challenged or changed a core assumption about your business this month?",
      yesText: "TRUTH SEEKER",
      yesSubtext: "Reality over comfort",
      noText: "COMFORT KEEPER",
      noSubtext: "Comfort over reality",
      fieldAnswer: true
    },
    {
      id: 18,
      category: "TRUTH PATTERNS",
      dimension: "ERROR_CORRECTION" as DimensionKey,
      title: "CONFLICT COURAGE",
      question: "Did you have a productive disagreement that led to clarity this week?",
      yesText: "CONFLICT POSITIVE",
      yesSubtext: "Friction creates clarity",
      noText: "HARMONY KEEPER",
      noSubtext: "Silence preserves dysfunction",
      fieldAnswer: true
    },
    {
      id: 19,
      category: "TRUTH PATTERNS",
      dimension: "KNOWLEDGE_LOCATION" as DimensionKey,
      title: "CLARITY STANDARD",
      question: "Can you explain your business model in one clear sentence?",
      yesText: "CRYSTAL CLEAR",
      yesSubtext: "Simplicity is power",
      noText: "COMPLEX",
      noSubtext: "Complexity hides confusion",
      fieldAnswer: true
    },
    {
      id: 20,
      category: "TRUTH PATTERNS",
      dimension: "ERROR_CORRECTION" as DimensionKey,
      title: "MARKET REALITY",
      question: "Are you profitable or do you have a clear path to profitability within 12 months?",
      yesText: "MARKET VALIDATED",
      yesSubtext: "Customers validate you",
      noText: "INVESTOR DEPENDENT",
      noSubtext: "VCs validate you",
      fieldAnswer: true
    },
    {
      id: 21,
      category: "TRUTH PATTERNS",
      dimension: "KNOWLEDGE_LOCATION" as DimensionKey,
      title: "CUSTOMER TRUTH",
      question: "Do you regularly talk to customers who've canceled or chosen competitors?",
      yesText: "TRUTH LISTENER",
      yesSubtext: "Learn from rejection",
      noText: "TRUTH AVOIDER",
      noSubtext: "Stay in echo chamber",
      fieldAnswer: true
    },
    {
      id: 22,
      category: "TRUTH PATTERNS",
      dimension: "KNOWLEDGE_LOCATION" as DimensionKey,
      title: "FINANCIAL HONESTY",
      question: "Do you know your real unit economics and customer lifetime value?",
      yesText: "NUMBERS HONEST",
      yesSubtext: "Math doesn't lie",
      noText: "NUMBERS FUZZY",
      noSubtext: "Hope over math",
      fieldAnswer: true
    },
    {
      id: 23,
      category: "TRUTH PATTERNS",
      dimension: "KNOWLEDGE_LOCATION" as DimensionKey,
      title: "TEAM TRUTH",
      question: "Do your team members openly disagree with you in meetings?",
      yesText: "TRUTH CULTURE",
      yesSubtext: "Disagreement is safe",
      noText: "YES-MAN CULTURE",
      noSubtext: "Agreement is required",
      fieldAnswer: true
    },
    {
      id: 24,
      category: "TRUTH PATTERNS",
      dimension: "KNOWLEDGE_LOCATION" as DimensionKey,
      title: "COMPETITIVE TRUTH",
      question: "Do you regularly study what competitors are doing better than you?",
      yesText: "COMPETITIVE LEARNER",
      yesSubtext: "Learn from winners",
      noText: "COMPETITIVE BLIND",
      noSubtext: "Ignore superior solutions",
      fieldAnswer: true
    },

    // SYSTEM PATTERNS (25-32) - Maps to STRUCTURAL_LOCKIN, CAPITAL_INTENSITY
    {
      id: 25,
      category: "SYSTEM PATTERNS",
      dimension: "STRUCTURAL_LOCKIN" as DimensionKey,
      title: "MEETING PRODUCTIVITY",
      question: "Did your last 3 meetings result in immediate, specific actions being taken?",
      yesText: "MEETINGS = MOVEMENT",
      yesSubtext: "Talk creates action",
      noText: "MEETINGS = THEATER",
      noSubtext: "Talk replaces action",
      fieldAnswer: true
    },
    {
      id: 26,
      category: "SYSTEM PATTERNS",
      dimension: "STRUCTURAL_LOCKIN" as DimensionKey,
      title: "ENERGY AUDIT",
      question: "Do you feel energized rather than drained after working on your core business activities?",
      yesText: "ENERGIZED",
      yesSubtext: "Aligned with natural flow",
      noText: "DRAINED",
      noSubtext: "Fighting your natural style",
      fieldAnswer: true
    },
    {
      id: 27,
      category: "SYSTEM PATTERNS",
      dimension: "STRUCTURAL_LOCKIN" as DimensionKey,
      title: "PROCESS DEBT",
      question: "Are your processes helping you move faster rather than slowing you down?",
      yesText: "PROCESS ACCELERATOR",
      yesSubtext: "Systems serve speed",
      noText: "PROCESS PRISONER",
      noSubtext: "Speed serves systems",
      fieldAnswer: true
    },
    {
      id: 28,
      category: "SYSTEM PATTERNS",
      dimension: "STRUCTURAL_LOCKIN" as DimensionKey,
      title: "TEAM NEXEL",
      question: "Do you match tasks to people's natural problem-solving styles rather than forcing everyone to work the same way?",
      yesText: "NEXEL ALIGNED",
      yesSubtext: "People work with their grain",
      noText: "ONE-SIZE-FITS-ALL",
      noSubtext: "People work against their grain",
      fieldAnswer: true
    },
    {
      id: 29,
      category: "SYSTEM PATTERNS",
      dimension: "CAPITAL_INTENSITY" as DimensionKey,
      title: "COMMUNICATION EFFICIENCY",
      question: "Do you default to async communication and avoid meetings for information sharing?",
      yesText: "ASYNC FIRST",
      yesSubtext: "Respect people's time",
      noText: "MEETING FIRST",
      noSubtext: "Steal people's time",
      fieldAnswer: true
    },
    {
      id: 30,
      category: "SYSTEM PATTERNS",
      dimension: "CAPITAL_INTENSITY" as DimensionKey,
      title: "AUTOMATION BIAS",
      question: "Do you automate repetitive tasks rather than hiring people to do them?",
      yesText: "AUTOMATION FIRST",
      yesSubtext: "Systems scale infinitely",
      noText: "PEOPLE FIRST",
      noSubtext: "People scale linearly",
      fieldAnswer: true
    },
    {
      id: 31,
      category: "SYSTEM PATTERNS",
      dimension: "CAPITAL_INTENSITY" as DimensionKey,
      title: "MEASUREMENT SYSTEMS",
      question: "Do you measure leading indicators (actions) rather than just lagging indicators (results)?",
      yesText: "LEADING FOCUSED",
      yesSubtext: "Control inputs",
      noText: "LAGGING FOCUSED",
      noSubtext: "Hope for outputs",
      fieldAnswer: true
    },
    {
      id: 32,
      category: "SYSTEM PATTERNS",
      dimension: "STRUCTURAL_LOCKIN" as DimensionKey,
      title: "SYSTEM MAINTENANCE",
      question: "Do you regularly audit and remove systems/tools that are no longer serving you?",
      yesText: "SYSTEM JANITOR",
      yesSubtext: "Kill broken systems",
      noText: "SYSTEM HOARDER",
      noSubtext: "Keep broken systems",
      fieldAnswer: true
    }
  ];

  const handleAnswer = (answer: 'yes' | 'no') => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: answer }));

    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Start analysis
      setCurrentStep('analysis');
      runAnalysis();
    }
  };

  const runAnalysis = () => {
    // Simulate step-by-step analysis
    const steps = 9; // 7 dimensions + composite + industry
    let step = 0;

    const interval = setInterval(() => {
      step++;
      setAnalysisStep(step);

      if (step >= steps) {
        clearInterval(interval);

        // Convert answers to DiagnosticAnswer format
        const diagnosticAnswers: DiagnosticAnswer[] = Object.entries(answers).map(([qId, answer]) => {
          const question = questions.find(q => q.id === parseInt(qId));
          return {
            questionId: parseInt(qId),
            answer: answer === 'yes' ? question?.fieldAnswer ?? true : !(question?.fieldAnswer ?? true)
          };
        });

        // Calculate GPI
        const results = calculateFullGPI(diagnosticAnswers, selectedIndustry);
        setGpiResults(results);

        setTimeout(() => {
          setCurrentStep('results');
        }, 500);
      }
    }, 400);
  };

  const restartDiagnostic = () => {
    setCurrentStep('intro');
    setCurrentQuestion(1);
    setAnswers({});
    setAnalysisStep(0);
    setGpiResults(null);
  };

  // Get dimension color for UI
  const getDimensionColor = (dimension: DimensionKey): string => {
    const colors: Record<DimensionKey, string> = {
      DECISION_LATENCY: 'red',
      KNOWLEDGE_LOCATION: 'blue',
      ERROR_CORRECTION: 'green',
      STRUCTURAL_LOCKIN: 'purple',
      TALENT_FLOW: 'yellow',
      CAPITAL_INTENSITY: 'orange',
      KNOWLEDGE_VELOCITY: 'cyan',
    };
    return colors[dimension] || 'zinc';
  };

  // INTRO SCREEN
  if (currentStep === 'intro') {
    return (
      <>
        <SEOHead
          title="GPI Diagnostic - Measure Your Organizational Physics | IMAGINATION G"
          description="Calculate your Growing Pains Index across 7 dimensions. 32 questions reveal your GPI score from 1 (field state) to 10 (particle state). Free organizational physics assessment."
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
                  GPI DIAGNOSTIC: READY
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                  MEASURE YOUR<br />ORGANIZATIONAL<br />PHYSICS<span className="text-red-600">.</span>
                </h1>

                <p className="text-xl text-zinc-400 mb-12 max-w-2xl">
                  32 binary questions across 7 dimensions. Get your GPI score from 1 (field state - adaptive)
                  to 10 (particle state - rigid). Compare to industry benchmarks.
                </p>

                {/* Industry Selection */}
                <div className="bg-zinc-950 border border-zinc-800 p-8 mb-8">
                  <h3 className="text-xl font-bold mb-4">SELECT YOUR INDUSTRY</h3>
                  <p className="text-zinc-400 mb-6">
                    We'll compare your GPI to industry benchmarks.
                  </p>
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="w-full bg-black border border-zinc-700 p-4 text-white text-lg"
                  >
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                </div>

                {/* What You'll Get */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="border border-zinc-800 p-6 bg-zinc-950">
                    <h3 className="text-xl font-black mb-4 text-red-600">7 DIMENSIONS</h3>
                    <div className="space-y-2 text-sm">
                      {getOrderedDimensions().map((dim) => (
                        <div key={dim.key} className="flex items-center gap-3">
                          <div className={`w-2 h-2 bg-${getDimensionColor(dim.key)}-500 rounded-full`}></div>
                          <span className="text-zinc-400">{dim.label}</span>
                          <span className="text-zinc-600 text-xs">({Math.round(dim.weight * 100)}%)</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border border-zinc-800 p-6 bg-zinc-950">
                    <h3 className="text-xl font-black mb-4 text-blue-600">YOU'LL GET</h3>
                    <div className="space-y-3 text-zinc-400">
                      <div className="flex items-start gap-3">
                        <Check className="text-green-500 mt-1 flex-shrink-0" size={16} />
                        <span>Overall GPI score (1-10 scale)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="text-green-500 mt-1 flex-shrink-0" size={16} />
                        <span>Dimension-by-dimension breakdown</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="text-green-500 mt-1 flex-shrink-0" size={16} />
                        <span>Industry percentile ranking</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="text-green-500 mt-1 flex-shrink-0" size={16} />
                        <span>Matched intervention recommendations</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* GPI Scale Preview */}
                <div className="bg-black border-2 border-zinc-800 p-8 mb-12">
                  <h3 className="text-2xl font-black mb-6 text-center">THE GPI SCALE</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-center">
                      <div className="text-3xl font-black text-green-500">1-3</div>
                      <div className="text-sm text-zinc-400">Field State</div>
                      <div className="text-xs text-zinc-600">Adaptive</div>
                    </div>
                    <div className="flex-1 h-2 mx-4 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded"></div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-red-500">7-10</div>
                      <div className="text-sm text-zinc-400">Particle State</div>
                      <div className="text-xs text-zinc-600">Rigid</div>
                    </div>
                  </div>
                  <p className="text-center text-zinc-500 text-sm">
                    Lower is better. Field-state organizations adapt faster and grow more efficiently.
                  </p>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setCurrentStep('questions')}
                    className="bg-red-600 px-12 py-6 text-2xl font-black hover:bg-red-700 transition-colors mb-4"
                  >
                    CALCULATE YOUR GPI
                  </button>
                  <p className="text-zinc-600 text-sm">
                    Takes 6-8 minutes. No email required.
                  </p>
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
    const dimensions = getOrderedDimensions();

    return (
      <>
        <SEOHead
          title="Calculating Your GPI | IMAGINATION G"
          description="Processing your diagnostic results across 7 dimensions."
        />

        <div className="min-h-screen bg-black text-white">
          <Navigation currentPage="diagnostic" />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-8 text-yellow-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                CALCULATING GPI
              </div>

              <h1 className="text-4xl md:text-5xl font-black mb-12">
                MEASURING YOUR<br />ORGANIZATIONAL<br />PHYSICS<span className="text-red-600">.</span>
              </h1>

              <div className="space-y-6 mb-12 text-left max-w-md mx-auto">
                {dimensions.map((dim, index) => (
                  <div key={dim.key} className="flex items-center gap-4">
                    <div className={`w-4 h-4 rounded-full ${analysisStep > index ? 'bg-green-500' : 'bg-zinc-700 animate-pulse'}`}></div>
                    <span className={analysisStep > index ? 'text-green-400' : 'text-zinc-400'}>
                      {analysisStep > index ? '✓' : '•'} Calculating {dim.label}
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-4">
                  <div className={`w-4 h-4 rounded-full ${analysisStep > 7 ? 'bg-green-500' : 'bg-zinc-700 animate-pulse'}`}></div>
                  <span className={analysisStep > 7 ? 'text-green-400' : 'text-zinc-400'}>
                    {analysisStep > 7 ? '✓' : '•'} Generating composite GPI score
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`w-4 h-4 rounded-full ${analysisStep > 8 ? 'bg-green-500' : 'bg-zinc-700 animate-pulse'}`}></div>
                  <span className={analysisStep > 8 ? 'text-green-400' : 'text-zinc-400'}>
                    {analysisStep > 8 ? '✓' : '•'} Comparing to {selectedIndustry} benchmarks
                  </span>
                </div>
              </div>

              {analysisStep >= 9 && (
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
  if (currentStep === 'results' && gpiResults) {
    const stateColor = getStateColor(gpiResults.state);
    const stateLabel = getStateLabel(gpiResults.state);

    return (
      <>
        <SEOHead
          title={`Your GPI: ${gpiResults.overall} - ${stateLabel} | IMAGINATION G`}
          description={`Your Growing Pains Index is ${gpiResults.overall}. ${stateLabel} organization with ${gpiResults.industryComparison.percentile}th percentile in ${selectedIndustry}.`}
        />

        <div className="min-h-screen bg-black text-white">
          <Navigation currentPage="diagnostic" />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  GPI ANALYSIS COMPLETE
                </div>

                <h1 className="text-4xl md:text-5xl font-black mb-6">
                  YOUR GPI<br />RESULTS<span className="text-red-600">.</span>
                </h1>
              </div>

              {/* Main Score Display */}
              <div className="bg-zinc-950 border-2 border-zinc-800 p-8 mb-8 text-center">
                <h2 className="text-xl font-black mb-4 text-zinc-400">YOUR GROWING PAINS INDEX</h2>
                <div className={`text-8xl font-black mb-4 text-${stateColor}-500`}>
                  {gpiResults.overall}
                </div>
                <div className={`inline-block border-2 border-${stateColor}-500 px-6 py-2 font-black text-${stateColor}-500 text-xl mb-6`}>
                  {stateLabel.toUpperCase()}
                </div>

                {/* GPI Spectrum Bar */}
                <div className="max-w-2xl mx-auto mb-6">
                  <div className="relative h-4 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded">
                    <div
                      className="absolute top-0 w-1 h-6 bg-white -mt-1 rounded"
                      style={{ left: `${((gpiResults.overall - 1) / 9) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-zinc-500 mt-2">
                    <span>1 (Field)</span>
                    <span>5 (Transition)</span>
                    <span>10 (Particle)</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="border border-zinc-800 p-6 bg-zinc-950 text-center">
                  <div className="text-zinc-500 text-xs mb-2">METABOLIC RATE</div>
                  <div className="text-4xl font-black text-cyan-500">{gpiResults.metabolicRate}x</div>
                  <div className="text-sm text-zinc-400">
                    {gpiResults.metabolicRate >= 7 ? 'High velocity' : gpiResults.metabolicRate >= 4 ? 'Moderate velocity' : 'Low velocity'}
                  </div>
                </div>

                <div className="border border-zinc-800 p-6 bg-zinc-950 text-center">
                  <div className="text-zinc-500 text-xs mb-2">INDUSTRY PERCENTILE</div>
                  <div className="text-4xl font-black text-blue-500">{gpiResults.industryComparison.percentile}th</div>
                  <div className="text-sm text-zinc-400">
                    vs. {selectedIndustry}
                  </div>
                </div>

                <div className="border border-zinc-800 p-6 bg-zinc-950 text-center">
                  <div className="text-zinc-500 text-xs mb-2">PLATEAU RISK</div>
                  <div className={`text-4xl font-black ${gpiResults.plateauRisk >= 60 ? 'text-red-500' : gpiResults.plateauRisk >= 40 ? 'text-yellow-500' : 'text-green-500'}`}>
                    {gpiResults.plateauRisk}%
                  </div>
                  <div className="text-sm text-zinc-400">
                    {gpiResults.monthsToStagnation ? `~${gpiResults.monthsToStagnation} months to ceiling` : 'Low risk'}
                  </div>
                </div>
              </div>

              {/* Plateau Warning */}
              {gpiResults.plateauRisk >= 40 && (
                <div className="bg-yellow-500/10 border border-yellow-500 p-6 mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="text-yellow-500" size={24} />
                    <span className="font-bold text-yellow-500 text-lg">PLATEAU WARNING</span>
                  </div>
                  <p className="text-zinc-300">
                    Organizations at GPI {gpiResults.overall} typically hit performance ceilings within {gpiResults.monthsToStagnation || 18} months.
                    Your {GPI_DIMENSIONS[gpiResults.weakestDimension].label} score is the primary constraint.
                  </p>
                </div>
              )}

              {/* Dimension Breakdown */}
              <div className="bg-zinc-950 border border-zinc-800 p-8 mb-8">
                <h3 className="text-2xl font-black mb-6">DIMENSION BREAKDOWN</h3>
                <div className="space-y-4">
                  {gpiResults.dimensions
                    .sort((a, b) => b.score - a.score)
                    .map((dim) => {
                      const isWeakest = dim.dimension === gpiResults.weakestDimension;
                      const isStrongest = dim.dimension === gpiResults.strongestDimension;
                      return (
                        <div key={dim.dimension} className="flex items-center gap-4">
                          <div className="w-40 text-sm font-bold">
                            {dim.label}
                            {isWeakest && <span className="text-red-500 ml-2">(weakest)</span>}
                            {isStrongest && <span className="text-green-500 ml-2">(strongest)</span>}
                          </div>
                          <div className="flex-1 h-4 bg-zinc-800 rounded overflow-hidden">
                            <div
                              className={`h-full ${dim.score <= 3 ? 'bg-green-500' : dim.score <= 6 ? 'bg-yellow-500' : 'bg-red-500'}`}
                              style={{ width: `${(dim.score / 10) * 100}%` }}
                            ></div>
                          </div>
                          <div className="w-12 text-right font-mono font-bold">
                            {dim.score}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>

              {/* Recommended Interventions */}
              {gpiResults.recommendedInterventions.length > 0 && (
                <div className="border-4 border-red-600 p-8 mb-8 bg-black">
                  <h2 className="text-2xl font-black text-red-600 mb-6">RECOMMENDED INTERVENTIONS</h2>
                  <p className="text-zinc-400 mb-6">
                    Based on your weakest dimension ({GPI_DIMENSIONS[gpiResults.weakestDimension].label}),
                    these interventions will have the highest impact:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {gpiResults.recommendedInterventions.map((intervention, index) => (
                      <Link
                        key={intervention}
                        href={`/interventions/${intervention.toLowerCase().replace(/\s+/g, '-').replace('the-', '')}`}
                        className={`border-2 p-6 hover:bg-zinc-900 transition-colors ${index === 0 ? 'border-red-600' : 'border-zinc-700'}`}
                      >
                        <h4 className="text-xl font-black mb-2">{intervention}</h4>
                        {index === 0 && (
                          <span className="text-xs text-red-500 font-mono">PRIMARY RECOMMENDATION</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Industry Comparison */}
              <div className="bg-zinc-950 border border-zinc-800 p-8 mb-8">
                <h3 className="text-2xl font-black mb-6">INDUSTRY COMPARISON</h3>
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-sm text-zinc-500 mb-2">YOUR GPI</div>
                    <div className="text-4xl font-black">{gpiResults.overall}</div>
                  </div>
                  <div className="text-4xl text-zinc-600">vs</div>
                  <div className="text-center">
                    <div className="text-sm text-zinc-500 mb-2">{selectedIndustry.toUpperCase()} AVG</div>
                    <div className="text-4xl font-black text-zinc-500">{gpiResults.industryComparison.industryAverage}</div>
                  </div>
                  <div className="flex-1 text-right">
                    <div className={`text-2xl font-black ${gpiResults.industryComparison.position === 'above' ? 'text-green-500' : gpiResults.industryComparison.position === 'below' ? 'text-red-500' : 'text-yellow-500'}`}>
                      {gpiResults.industryComparison.position === 'above' ? 'BETTER THAN AVERAGE' :
                       gpiResults.industryComparison.position === 'below' ? 'BELOW AVERAGE' : 'AT AVERAGE'}
                    </div>
                    <div className="text-zinc-400">
                      {gpiResults.industryComparison.percentile}th percentile in your industry
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Options */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <Link
                  href="/interventions"
                  className="border-2 border-zinc-700 p-6 text-center hover:border-zinc-500 transition-colors"
                >
                  <h4 className="font-black mb-2">VIEW ALL INTERVENTIONS</h4>
                  <p className="text-sm text-zinc-400">Explore all options</p>
                </Link>

                <Link
                  href="/gpi-framework"
                  className="border-2 border-blue-600 p-6 text-center hover:bg-blue-600 transition-colors"
                >
                  <h4 className="font-black mb-2">LEARN GPI FRAMEWORK</h4>
                  <p className="text-sm text-zinc-400">Understand the methodology</p>
                </Link>

                <button
                  onClick={restartDiagnostic}
                  className="border-2 border-zinc-700 p-6 text-center hover:border-zinc-500 transition-colors"
                >
                  <h4 className="font-black mb-2">RETAKE DIAGNOSTIC</h4>
                  <p className="text-sm text-zinc-400">Run analysis again</p>
                </button>
              </div>

              {/* Share hint */}
              <div className="text-center text-zinc-500 text-sm">
                <p>
                  Save this URL or screenshot your results. Retake in 90 days to measure improvement.
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
  const dimension = GPI_DIMENSIONS[currentQ.dimension];

  return (
    <>
      <SEOHead
        title={`${currentQ.title} - GPI Diagnostic | IMAGINATION G`}
        description={`${dimension.label}: ${currentQ.question}`}
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="diagnostic" />

        <section className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Progress and Dimension */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-sm text-zinc-500">QUESTION {currentQuestion} OF {questions.length}</span>
                  <div className="inline-block ml-4 bg-zinc-900 border border-zinc-700 px-3 py-1 text-xs font-mono">
                    {dimension.label} ({Math.round(dimension.weight * 100)}%)
                  </div>
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

            {/* Dimension indicator */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 text-sm text-zinc-500">
                <span>Measuring: {dimension.label}</span>
                <span className="text-zinc-700">|</span>
                <span>{dimension.description}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DiagnosticPage;
