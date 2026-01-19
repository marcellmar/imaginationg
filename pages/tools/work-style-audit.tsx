import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { ArrowRight, ArrowLeft, Check, Target, Zap, Users, Clock } from 'lucide-react';

const WorkStyleAuditPage = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'questions' | 'results'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B'>>({});

  const questions = [
    {
      id: 1,
      title: "CONSTRAINT NAVIGATION",
      question: "When you hit a roadblock in a project, what's your first instinct?",
      optionA: {
        text: "Find a workaround or alternative path",
        label: "ADAPTIVE",
        style: "field"
      },
      optionB: {
        text: "Push through the proper channels and escalate",
        label: "SYSTEMATIC",
        style: "particle"
      }
    },
    {
      id: 2,
      title: "DECISION SPEED",
      question: "When making important decisions, you tend to:",
      optionA: {
        text: "Decide quickly with available information",
        label: "FAST DECIDER",
        style: "field"
      },
      optionB: {
        text: "Gather more data and get approvals first",
        label: "THOROUGH DECIDER",
        style: "particle"
      }
    },
    {
      id: 3,
      title: "WORK ORIENTATION",
      question: "You feel most energized when:",
      optionA: {
        text: "Creating visible value that users/customers see directly",
        label: "SIGNAL-ORIENTED",
        style: "signal"
      },
      optionB: {
        text: "Building systems that keep everything running smoothly",
        label: "STRUCTURE-ORIENTED",
        style: "structure"
      }
    },
    {
      id: 4,
      title: "ERROR RESPONSE",
      question: "When something goes wrong, you naturally:",
      optionA: {
        text: "Fix it immediately and adapt on the fly",
        label: "RAPID CORRECTOR",
        style: "field"
      },
      optionB: {
        text: "Document it and create processes to prevent recurrence",
        label: "SYSTEMATIC CORRECTOR",
        style: "particle"
      }
    },
    {
      id: 5,
      title: "KNOWLEDGE SHARING",
      question: "When you learn something valuable, you:",
      optionA: {
        text: "Share it immediately with whoever needs it",
        label: "KNOWLEDGE DISTRIBUTOR",
        style: "field"
      },
      optionB: {
        text: "Document it properly in the right channels",
        label: "KNOWLEDGE ORGANIZER",
        style: "particle"
      }
    }
  ];

  const handleAnswer = (answer: 'A' | 'B') => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: answer }));

    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentStep('results');
    }
  };

  const calculateWorkStyle = () => {
    let fieldScore = 0;
    let particleScore = 0;
    let signalScore = 0;
    let structureScore = 0;

    questions.forEach((q, index) => {
      const answer = answers[index + 1];
      if (answer) {
        const style = answer === 'A' ? q.optionA.style : q.optionB.style;
        if (style === 'field') fieldScore++;
        if (style === 'particle') particleScore++;
        if (style === 'signal') signalScore++;
        if (style === 'structure') structureScore++;
      }
    });

    const primaryOrientation = fieldScore >= particleScore ? 'field' : 'particle';
    const workType = signalScore >= structureScore ? 'signal' : 'structure';

    return {
      primaryOrientation,
      workType,
      fieldScore,
      particleScore,
      signalScore,
      structureScore
    };
  };

  const getStyleInfo = (orientation: string, workType: string) => {
    const styleData: Record<string, any> = {
      'field-signal': {
        name: "FIELD SIGNAL",
        subtitle: "The Fast Value Creator",
        description: "You thrive in adaptive environments where you can create visible impact quickly. You prefer direct customer contact and rapid iteration over long planning cycles.",
        strengths: ["Fast decision-making", "Direct value creation", "Adaptive problem-solving", "High visibility impact"],
        challenges: ["May skip important documentation", "Can frustrate structured teams", "Risk of unsustainable pace"],
        recommendations: [
          "Seek roles with direct customer/user contact",
          "Partner with Structure-oriented colleagues for sustainability",
          "Schedule brief documentation sessions after shipping",
          "Thrive in startups or innovation teams within larger orgs"
        ],
        gpiFit: "Best fit: Organizations with GPI scores 1-4 (Field to early Transition)"
      },
      'field-structure': {
        name: "FIELD STRUCTURE",
        subtitle: "The Agile Systems Builder",
        description: "You build systems and processes, but prefer doing so adaptively. You create structure without becoming rigid.",
        strengths: ["Flexible system design", "Process improvement", "Adaptive maintenance", "Balance of speed and stability"],
        challenges: ["Systems may lack formal documentation", "Can under-engineer for scale", "May resist necessary rigidity"],
        recommendations: [
          "Lead process improvement initiatives",
          "Focus on making existing systems more adaptive",
          "Document key decisions even if informally",
          "Help rigid organizations become more fluid"
        ],
        gpiFit: "Best fit: Transitioning organizations (GPI 4-6) needing to become more adaptive"
      },
      'particle-signal': {
        name: "PARTICLE SIGNAL",
        subtitle: "The Methodical Value Creator",
        description: "You create visible value but through structured, methodical approaches. You believe in doing things right the first time.",
        strengths: ["Quality-focused delivery", "Sustainable pace", "Reliable outcomes", "Scalable approaches"],
        challenges: ["May move too slowly for fast markets", "Can over-engineer solutions", "Risk of analysis paralysis"],
        recommendations: [
          "Seek roles requiring both quality and customer impact",
          "Lead projects where getting it right matters more than speed",
          "Partner with Field-oriented colleagues for velocity",
          "Thrive in regulated industries or enterprise contexts"
        ],
        gpiFit: "Best fit: Organizations with GPI 5-7 needing reliable execution"
      },
      'particle-structure': {
        name: "PARTICLE STRUCTURE",
        subtitle: "The System Architect",
        description: "You build and maintain robust systems through careful planning and process. You create stability and predictability.",
        strengths: ["Deep systems thinking", "Risk management", "Process excellence", "Organizational stability"],
        challenges: ["Can calcify processes unnecessarily", "May resist needed change", "Risk of over-documentation"],
        recommendations: [
          "Lead compliance, governance, or infrastructure",
          "Help organizations maintain stability during change",
          "Partner with Field-oriented leaders for innovation",
          "Recognize when structure becomes friction"
        ],
        gpiFit: "Best fit: Mature organizations (GPI 6-8) needing stability, but watch for calcification"
      }
    };

    const key = `${orientation}-${workType}`;
    return styleData[key] || styleData['field-signal'];
  };

  const restart = () => {
    setCurrentStep('intro');
    setCurrentQuestion(1);
    setAnswers({});
  };

  // INTRO SCREEN
  if (currentStep === 'intro') {
    return (
      <>
        <SEOHead
          title="5-Minute Work Style Audit - Find Your GPI Orientation | IMAGINATION G"
          description="Quick audit to identify your natural work style orientation and get specific recommendations for optimizing your approach."
          ogImage="/images/og-work-style-audit.svg"
        />

        <div className="min-h-screen bg-black text-white">
          <Navigation />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                WORK STYLE AUDIT: READY
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                5-MINUTE<br />WORK STYLE AUDIT<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-12 max-w-2xl">
                Discover your natural work orientation using the GPI Framework. Are you Field or Particle?
                Signal or Structure? Find out and get specific recommendations.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="border border-zinc-800 p-6 bg-zinc-950">
                  <h3 className="text-xl font-black mb-4 text-red-600">WHAT YOU'LL GET</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Check className="text-green-500" size={16} />
                      <span className="text-sm">Your Field vs Particle orientation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="text-green-500" size={16} />
                      <span className="text-sm">Your Signal vs Structure preference</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="text-green-500" size={16} />
                      <span className="text-sm">Specific optimization recommendations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="text-green-500" size={16} />
                      <span className="text-sm">Ideal organizational fit guidance</span>
                    </div>
                  </div>
                </div>

                <div className="border border-zinc-800 p-6 bg-zinc-950">
                  <h3 className="text-xl font-black mb-4 text-blue-600">THE GPI LENS</h3>
                  <div className="space-y-4 text-sm text-zinc-400">
                    <div>
                      <strong className="text-white">Field (GPI 1-3):</strong> Adaptive, fast, low friction
                    </div>
                    <div>
                      <strong className="text-white">Particle (GPI 7-10):</strong> Structured, controlled, high stability
                    </div>
                    <div>
                      <strong className="text-white">Signal Work:</strong> Creates visible value
                    </div>
                    <div>
                      <strong className="text-white">Structure Work:</strong> Maintains systems
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => setCurrentStep('questions')}
                  className="bg-red-600 px-12 py-6 text-2xl font-black hover:bg-red-700 transition-colors mb-4"
                >
                  START AUDIT
                </button>
                <p className="text-zinc-600 text-sm">
                  Takes 5 minutes. No email required.
                </p>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  // RESULTS SCREEN
  if (currentStep === 'results') {
    const { primaryOrientation, workType, fieldScore, particleScore } = calculateWorkStyle();
    const styleInfo = getStyleInfo(primaryOrientation, workType);

    return (
      <>
        <SEOHead
          title={`Your Work Style: ${styleInfo.name} | IMAGINATION G`}
          description={`${styleInfo.subtitle} - ${styleInfo.description}`}
        />

        <div className="min-h-screen bg-black text-white">
          <Navigation />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  WORK STYLE IDENTIFIED
                </div>

                <h1 className="text-4xl md:text-5xl font-black mb-6">
                  YOUR STYLE:<br />{styleInfo.name}<span className="text-red-600">.</span>
                </h1>

                <h2 className="text-2xl text-zinc-400 mb-8">{styleInfo.subtitle}</h2>
                <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
                  {styleInfo.description}
                </p>
              </div>

              {/* Orientation Breakdown */}
              <div className="bg-zinc-950 border border-zinc-800 p-8 mb-8">
                <h3 className="text-2xl font-black mb-6">YOUR ORIENTATION</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold">Field</span>
                      <span className="font-bold">Particle</span>
                    </div>
                    <div className="h-4 bg-zinc-800 rounded overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-500 to-red-500"
                        style={{ width: '100%' }}
                      />
                    </div>
                    <div className="flex justify-between text-sm text-zinc-500 mt-1">
                      <span>Adaptive, Fast</span>
                      <span>Structured, Controlled</span>
                    </div>
                    <div className="text-center mt-2">
                      <span className={`font-black text-lg ${primaryOrientation === 'field' ? 'text-green-500' : 'text-red-500'}`}>
                        You lean {primaryOrientation.toUpperCase()} ({primaryOrientation === 'field' ? fieldScore : particleScore}/4)
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold">Signal</span>
                      <span className="font-bold">Structure</span>
                    </div>
                    <div className="h-4 bg-zinc-800 rounded overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        style={{ width: '100%' }}
                      />
                    </div>
                    <div className="flex justify-between text-sm text-zinc-500 mt-1">
                      <span>Value Creation</span>
                      <span>System Maintenance</span>
                    </div>
                    <div className="text-center mt-2">
                      <span className={`font-black text-lg ${workType === 'signal' ? 'text-blue-500' : 'text-purple-500'}`}>
                        You lean {workType.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* GPI Fit */}
              <div className="bg-zinc-900 border-2 border-zinc-700 p-6 mb-8 text-center">
                <p className="text-lg font-bold">{styleInfo.gpiFit}</p>
              </div>

              {/* Strengths & Challenges */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="border border-green-500 p-8 bg-zinc-950">
                  <h3 className="text-xl font-black text-green-500 mb-6">YOUR STRENGTHS</h3>
                  <ul className="space-y-3">
                    {styleInfo.strengths.map((strength: string, index: number) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="text-green-500" size={16} />
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-red-500 p-8 bg-zinc-950">
                  <h3 className="text-xl font-black text-red-500 mb-6">WATCH OUT FOR</h3>
                  <ul className="space-y-3">
                    {styleInfo.challenges.map((challenge: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <Target className="text-red-500 mt-1" size={16} />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recommendations */}
              <div className="border-4 border-red-600 p-8 mb-8 bg-black">
                <h3 className="text-2xl font-black text-red-600 mb-6">OPTIMIZATION RECOMMENDATIONS</h3>
                <div className="space-y-4">
                  {styleInfo.recommendations.map((rec: string, index: number) => (
                    <div key={index} className="flex items-start gap-4 p-4 border border-zinc-800 bg-zinc-950">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-black">{index + 1}</span>
                      </div>
                      <span className="text-lg">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Options */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="border border-zinc-700 p-6 text-center">
                  <h4 className="font-black mb-2">UNDERSTAND GPI</h4>
                  <p className="text-sm text-zinc-400 mb-4">Deep dive into the GPI Framework</p>
                  <a
                    href="/answers/what-is-gpi"
                    className="text-red-600 hover:text-red-500 transition-colors text-sm font-bold"
                  >
                    READ GPI GUIDE
                  </a>
                </div>

                <div className="border border-zinc-700 p-6 text-center">
                  <h4 className="font-black mb-2">FULL DIAGNOSTIC</h4>
                  <p className="text-sm text-zinc-400 mb-4">Get your organization's GPI score</p>
                  <a
                    href="/diagnostic"
                    className="text-blue-600 hover:text-blue-500 transition-colors text-sm font-bold"
                  >
                    TAKE DIAGNOSTIC
                  </a>
                </div>

                <button
                  onClick={restart}
                  className="border border-zinc-700 p-6 text-center hover:border-zinc-500 transition-colors"
                >
                  <h4 className="font-black mb-2">RETAKE AUDIT</h4>
                  <p className="text-sm text-zinc-400">Run the assessment again</p>
                </button>
              </div>

              <div className="text-center text-zinc-500 text-sm">
                <p>
                  Your work style affects how well you fit with different organizational cultures.
                  Use this insight to find or create environments where you can thrive.
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

  return (
    <>
      <SEOHead
        title={`${currentQ.title} - Work Style Audit | IMAGINATION G`}
        description={currentQ.question}
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation />

        <section className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-sm text-zinc-500">QUESTION {currentQuestion} OF {questions.length}</span>
                  <div className="text-lg font-bold text-zinc-400">{currentQ.title}</div>
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
              <h3 className="text-2xl md:text-3xl font-black mb-8 leading-tight">
                {currentQ.question}
              </h3>
            </div>

            {/* Answer Options */}
            <div className="grid md:grid-cols-2 gap-6">
              <button
                onClick={() => handleAnswer('A')}
                className="group border-2 border-blue-600 p-8 hover:bg-blue-600 transition-all text-left"
              >
                <h4 className="text-2xl font-black text-blue-600 group-hover:text-black mb-3">
                  {currentQ.optionA.label}
                </h4>
                <p className="text-zinc-400 group-hover:text-black text-lg">
                  {currentQ.optionA.text}
                </p>
              </button>

              <button
                onClick={() => handleAnswer('B')}
                className="group border-2 border-green-600 p-8 hover:bg-green-600 transition-all text-left"
              >
                <h4 className="text-2xl font-black text-green-600 group-hover:text-black mb-3">
                  {currentQ.optionB.label}
                </h4>
                <p className="text-zinc-400 group-hover:text-black text-lg">
                  {currentQ.optionB.text}
                </p>
              </button>
            </div>

            {/* Progress indicator */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 text-sm text-zinc-500">
                <Clock size={16} />
                About {5 - currentQuestion + 1} minutes remaining
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WorkStyleAuditPage;
