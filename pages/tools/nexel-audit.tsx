import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { ArrowRight, ArrowLeft, Check, Target, Zap, Users, Clock } from 'lucide-react';

const NexelAuditPage = () => {
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
        label: "ROUTER",
        nexel: "kithara"
      },
      optionB: {
        text: "Push through and break down the barrier",
        label: "BREAKER", 
        nexel: "morrin"
      }
    },
    {
      id: 2,
      title: "INFORMATION PROCESSING",
      question: "How do you prefer to understand complex problems?",
      optionA: {
        text: "Break it into smaller, interconnected pieces",
        label: "CONNECTOR",
        nexel: "nexel"
      },
      optionB: {
        text: "See the whole pattern and work backwards",
        label: "SYNTHESIZER",
        nexel: "voxel"
      }
    },
    {
      id: 3,
      title: "DECISION TIMING",
      question: "When making important decisions, you tend to:",
      optionA: {
        text: "Decide quickly with available information",
        label: "RAPID DECIDER",
        nexel: "pilor"
      },
      optionB: {
        text: "Gather more data until patterns emerge",
        label: "PATTERN WAITER",
        nexel: "quorr"
      }
    },
    {
      id: 4,
      title: "PROBLEM DEPTH",
      question: "When facing team conflicts, you naturally:",
      optionA: {
        text: "Address surface issues and move forward",
        label: "SURFACE SOLVER",
        nexel: "strune"
      },
      optionB: {
        text: "Dig into underlying patterns and root causes",
        label: "DEPTH SEEKER",
        nexel: "soreth"
      }
    },
    {
      id: 5,
      title: "ENERGY MANAGEMENT",
      question: "You feel most energized when:",
      optionA: {
        text: "Building momentum through quick wins",
        label: "MOMENTUM BUILDER",
        nexel: "threnn"
      },
      optionB: {
        text: "Creating clarity in complex situations",
        label: "CLARITY CREATOR",
        nexel: "zelith"
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

  const calculateNexel = () => {
    const nexelCounts: Record<string, number> = {};
    
    questions.forEach((q, index) => {
      const answer = answers[index + 1];
      if (answer) {
        const nexel = answer === 'A' ? q.optionA.nexel : q.optionB.nexel;
        nexelCounts[nexel] = (nexelCounts[nexel] || 0) + 1;
      }
    });

    const primaryNexel = Object.entries(nexelCounts).reduce((a, b) => 
      nexelCounts[a[0]] > nexelCounts[b[0]] ? a : b
    )[0];

    return { primaryNexel, distribution: nexelCounts };
  };

  const getNexelInfo = (nexel: string) => {
    const nexelData: Record<string, any> = {
      kithara: {
        name: "KITHARA",
        subtitle: "The Router",
        description: "You navigate around constraints rather than through them. Natural pathfinder.",
        strengths: ["Alternative thinking", "Flexibility", "Creative problem-solving"],
        challenges: ["May avoid necessary conflicts", "Can over-complicate simple solutions"],
        recommendations: [
          "Practice direct confrontation exercises",
          "Set 'breakthrough not bypass' goals",
          "Lead projects requiring innovative solutions"
        ]
      },
      morrin: {
        name: "MORRIN", 
        subtitle: "The Breaker",
        description: "You push through barriers with force and determination. Natural breakthrough artist.",
        strengths: ["Persistence", "Direct action", "Barrier elimination"],
        challenges: ["May miss easier paths", "Can create unnecessary friction"],
        recommendations: [
          "Practice patience and path assessment",
          "Delegate routing tasks to others", 
          "Focus on high-impact breakthrough opportunities"
        ]
      },
      nexel: {
        name: "NEXEL",
        subtitle: "The Connector", 
        description: "You see systems and connections others miss. Natural pattern linker.",
        strengths: ["Systems thinking", "Integration", "Relationship mapping"],
        challenges: ["Can over-analyze", "May paralyzed by complexity"],
        recommendations: [
          "Set time limits for analysis",
          "Practice 'good enough' decisions",
          "Lead integration and systems projects"
        ]
      },
      voxel: {
        name: "VOXEL",
        subtitle: "The Synthesizer",
        description: "You see wholes before parts. Natural big-picture thinker.",
        strengths: ["Holistic view", "Pattern recognition", "Strategic thinking"],
        challenges: ["May miss important details", "Can struggle with implementation"],
        recommendations: [
          "Partner with detail-oriented team members",
          "Create implementation checklists",
          "Focus on vision and strategy roles"
        ]
      },
      pilor: {
        name: "PILOR",
        subtitle: "The Rapid Decider",
        description: "You make decisions quickly with available information. Natural velocity creator.",
        strengths: ["Decision speed", "Action bias", "Momentum building"],
        challenges: ["May miss critical information", "Can create decision debt"],
        recommendations: [
          "Build 'minimum viable information' standards",
          "Schedule decision review cycles",
          "Lead fast-moving projects and initiatives"
        ]
      },
      quorr: {
        name: "QUORR", 
        subtitle: "The Pattern Waiter",
        description: "You wait for patterns to emerge before deciding. Natural quality assurer.",
        strengths: ["Thorough analysis", "Quality decisions", "Risk mitigation"],
        challenges: ["Can slow team velocity", "May over-analyze"],
        recommendations: [
          "Set decision deadlines",
          "Practice 'minimum viable pattern' recognition",
          "Focus on high-stakes, complex decisions"
        ]
      },
      strune: {
        name: "STRUNE",
        subtitle: "The Surface Solver", 
        description: "You address visible problems and keep things moving. Natural efficiency driver.",
        strengths: ["Quick resolution", "Practical solutions", "Team momentum"],
        challenges: ["May miss root causes", "Problems can resurface"],
        recommendations: [
          "Schedule deep-dive sessions monthly",
          "Partner with depth-seekers for complex issues",
          "Focus on operational excellence roles"
        ]
      },
      soreth: {
        name: "SORETH",
        subtitle: "The Depth Seeker",
        description: "You dig into root causes and underlying patterns. Natural dysfunction detector.",
        strengths: ["Root cause analysis", "Pattern detection", "Sustainable solutions"],
        challenges: ["Can slow immediate progress", "May over-complicate simple issues"],
        recommendations: [
          "Balance depth with velocity",
          "Set 'good enough for now' standards",
          "Lead culture change and transformation projects"
        ]
      },
      threnn: {
        name: "THRENN",
        subtitle: "The Momentum Builder",
        description: "You build energy through quick wins and visible progress. Natural motivation driver.", 
        strengths: ["Energy creation", "Quick wins", "Team motivation"],
        challenges: ["May sacrifice long-term for short-term", "Can burn out teams"],
        recommendations: [
          "Balance quick wins with strategic moves",
          "Schedule sustainability check-ins",
          "Focus on launch and startup phases"
        ]
      },
      zelith: {
        name: "ZELITH",
        subtitle: "The Clarity Creator",
        description: "You create understanding in complex situations. Natural confusion eliminator.",
        strengths: ["Clarity creation", "Communication", "Understanding building"],
        challenges: ["May over-explain", "Can slow decision velocity"],
        recommendations: [
          "Practice concise communication",
          "Set clarity targets with time limits",
          "Lead transformation and change initiatives"
        ]
      }
    };

    return nexelData[nexel] || nexelData.kithara;
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
          title="5-Minute Nexel Audit - Find Your Problem-Solving Style | IMAGINATION G"
          description="Quick audit to identify your natural problem-solving pattern (nexel) and get specific recommendations for optimizing your approach."
          ogImage="/images/og-nexel-audit.svg"
        />
        
        <div className="min-h-screen bg-black text-white">
          <Navigation />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                NEXEL AUDIT: READY
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                5-MINUTE<br />NEXEL AUDIT<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-12 max-w-2xl">
                Discover your natural problem-solving pattern (nexel) and get specific recommendations 
                for optimizing your approach to challenges.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="border border-zinc-800 p-6 bg-zinc-950">
                  <h3 className="text-xl font-black mb-4 text-red-600">WHAT YOU'LL GET</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Check className="text-green-500" size={16} />
                      <span className="text-sm">Your primary nexel identification</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="text-green-500" size={16} />
                      <span className="text-sm">Strengths and challenge areas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="text-green-500" size={16} />
                      <span className="text-sm">Specific optimization recommendations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="text-green-500" size={16} />
                      <span className="text-sm">Team collaboration insights</span>
                    </div>
                  </div>
                </div>

                <div className="border border-zinc-800 p-6 bg-zinc-950">
                  <h3 className="text-xl font-black mb-4 text-blue-600">HOW IT WORKS</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-black">1</span>
                      </div>
                      <span className="text-sm text-zinc-400">5 binary choice questions</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-black">2</span>
                      </div>
                      <span className="text-sm text-zinc-400">Instant nexel pattern analysis</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-black">3</span>
                      </div>
                      <span className="text-sm text-zinc-400">Personalized recommendations</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <button
                  onClick={() => setCurrentStep('questions')}
                  className="bg-red-600 px-12 py-6 text-2xl font-black hover:bg-red-700 transition-colors mb-4"
                >
                  START NEXEL AUDIT
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
    const { primaryNexel, distribution } = calculateNexel();
    const nexelInfo = getNexelInfo(primaryNexel);
    
    return (
      <>
        <SEOHead
          title={`Your Nexel: ${nexelInfo.name} | IMAGINATION G`}
          description={`${nexelInfo.subtitle} - ${nexelInfo.description}`}
        />
        
        <div className="min-h-screen bg-black text-white">
          <Navigation />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  NEXEL IDENTIFIED
                </div>

                <h1 className="text-4xl md:text-5xl font-black mb-6">
                  YOUR NEXEL:<br />{nexelInfo.name}<span className="text-red-600">.</span>
                </h1>
                
                <h2 className="text-2xl text-zinc-400 mb-8">{nexelInfo.subtitle}</h2>
                <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
                  {nexelInfo.description}
                </p>
              </div>

              {/* Pattern Distribution */}
              <div className="bg-zinc-950 border border-zinc-800 p-8 mb-8">
                <h3 className="text-2xl font-black mb-6">PATTERN DISTRIBUTION</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {Object.entries(distribution).map(([nexel, count]) => (
                    <div key={nexel} className="text-center">
                      <div className="text-2xl font-black">{count}</div>
                      <div className="text-xs text-zinc-500">{nexel.toUpperCase()}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strengths & Challenges */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="border border-green-500 p-8 bg-zinc-950">
                  <h3 className="text-xl font-black text-green-500 mb-6">YOUR STRENGTHS</h3>
                  <ul className="space-y-3">
                    {nexelInfo.strengths.map((strength: string, index: number) => (
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
                    {nexelInfo.challenges.map((challenge: string, index: number) => (
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
                  {nexelInfo.recommendations.map((rec: string, index: number) => (
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
                  <h4 className="font-black mb-2">LEARN MORE ABOUT NEXELS</h4>
                  <p className="text-sm text-zinc-400 mb-4">Deep dive into your problem-solving pattern</p>
                  <a 
                    href="/answers/glossary/nexel"
                    className="text-red-600 hover:text-red-500 transition-colors text-sm font-bold"
                  >
                    READ NEXEL GUIDE →
                  </a>
                </div>
                
                <div className="border border-zinc-700 p-6 text-center">
                  <h4 className="font-black mb-2">TEAM NEXEL MATCHING</h4>
                  <p className="text-sm text-zinc-400 mb-4">Optimize your team's problem-solving</p>
                  <a 
                    href="/tools/team-nexel-matching"
                    className="text-blue-600 hover:text-blue-500 transition-colors text-sm font-bold"
                  >
                    AUDIT YOUR TEAM →
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
                  Want to understand how your nexel affects your team dynamics? 
                  Try our <strong>Team Nexel Matching</strong> tool next.
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
        title={`${currentQ.title} - Nexel Audit | IMAGINATION G`}
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

export default NexelAuditPage;