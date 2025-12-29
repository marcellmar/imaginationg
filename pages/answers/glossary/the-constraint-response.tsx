import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import RelatedContent from '../../../components/RelatedContent';
import LexiconDiagnostic from '../../../components/LexiconDiagnostic';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const ConstraintResponsePage: NextPage = () => {
  const [activeTab, setActiveTab] = useState('detection');

  const constraintQuestions = [
    {
      id: 1,
      question: "When you hit structural lock-in at work, what's your first instinct?",
      yesText: "BREAK THROUGH",
      yesSubtext: "Force the block, figure it out later.",
      noText: "ROUTE AROUND",
      noSubtext: "Find another path to field state."
    },
    {
      id: 2,
      question: "Do you get energized when everything seems impossible?",
      yesText: "PRESSURE AMPLIFIER",
      yesSubtext: "Opposition becomes fuel.",
      noText: "FLOW ADAPTER",
      noSubtext: "You adapt and move with it."
    },
    {
      id: 3,
      question: "When leadership says 'it can't be done,' do you hear a challenge?",
      yesText: "LOCK-IN BREAKER",
      yesSubtext: "Impossible just means interesting.",
      noText: "REALITY NAVIGATOR",
      noSubtext: "Maybe they're right, let's pivot."
    },
    {
      id: 4,
      question: "Would you rather have unlimited resources or interesting friction points?",
      yesText: "FRICTION SEEKER",
      yesSubtext: "Blocks make it fun.",
      noText: "RESOURCE OPTIMIZER",
      noSubtext: "Give me the tools first."
    },
    {
      id: 5,
      question: "When a project gets canceled, are you disappointed or relieved?",
      yesText: "MOMENTUM SEEKER",
      yesSubtext: "You were just building velocity.",
      noText: "EFFICIENCY SEEKER",
      noSubtext: "Good, that was creating friction."
    },
    {
      id: 6,
      question: "Do you work better under pressure or with plenty of time?",
      yesText: "PRESSURE CONVERTER",
      yesSubtext: "Deadlines reduce decision latency.",
      noText: "SPACE CREATOR",
      noSubtext: "Time reveals the real solution."
    },
    {
      id: 7,
      question: "When someone says 'that's not how we do things here,' do you get curious or frustrated?",
      yesText: "LOCK-IN CHALLENGER",
      yesSubtext: "Why not? Let's find out.",
      noText: "SYSTEM NAVIGATOR",
      noSubtext: "Okay, what's the real way?"
    },
    {
      id: 8,
      question: "Would you rather ship something messy or wait to make it perfect?",
      yesText: "VELOCITY FIRST",
      yesSubtext: "Done beats perfect. Ship for error correction.",
      noText: "QUALITY FIRST",
      noSubtext: "Quality creates sustainable momentum."
    },
    {
      id: 9,
      question: "When you're stuck, do you prefer to think it through alone or talk it out with others?",
      yesText: "INTERNAL PROCESSOR",
      yesSubtext: "Solo thinking time works.",
      noText: "EXTERNAL PROCESSOR",
      noSubtext: "Talking unlocks solutions."
    },
    {
      id: 10,
      question: "Do you prefer building new things or improving existing ones?",
      yesText: "FIELD CREATOR",
      yesSubtext: "Blank slate energizes you.",
      noText: "SYSTEM OPTIMIZER",
      noSubtext: "Moving existing systems toward field state."
    },
    {
      id: 11,
      question: "When facing a complex system, do you dive in or map it out first?",
      yesText: "DIVE & DISCOVER",
      yesSubtext: "Learn by doing. Fast error correction.",
      noText: "MAP & PLAN",
      noSubtext: "Understand before acting."
    },
    {
      id: 12,
      question: "Would you rather fix a broken process or build a new one from scratch?",
      yesText: "REBUILD RESPONSE",
      yesSubtext: "Fresh start, clean slate.",
      noText: "REPAIR RESPONSE",
      noSubtext: "Salvage what works."
    }
  ];

  const calculateConstraintResults = (answers: Record<number, 'yes' | 'no'>) => {
    const yesCount = Object.values(answers).filter(answer => answer === 'yes').length;
    const score = Math.round((yesCount / constraintQuestions.length) * 100);

    // Analyze specific patterns for better intervention matching
    const breakerResponses = [answers[1], answers[3], answers[7]].filter(a => a === 'yes').length;
    const buildResponses = [answers[8], answers[10], answers[12]].filter(a => a === 'yes').length;
    const mapResponses = [answers[11], answers[9]].filter(a => a === 'no').length;
    const energyResponses = [answers[2], answers[5]].filter(a => a === 'yes').length;

    let severity: 'low' | 'medium' | 'high' | 'critical';
    let title: string;
    let description: string;
    let recommendation: string;
    let interventionUrl: string | undefined;

    // Route based on dominant patterns, not just total score
    if (buildResponses >= 2 && score >= 50) {
      severity = 'low';
      title = 'Field Creator Response';
      description = 'You thrive on building new systems from scratch. Blank slates and fresh starts energize you. Best deployed on greenfield projects.';
      recommendation = 'Deploy on MVP development and new product launches. Your response pattern accelerates Knowledge Velocity.';
      interventionUrl = '/interventions/the-build';
    } else if (breakerResponses >= 2 && energyResponses >= 1) {
      severity = 'medium';
      title = 'Lock-In Breaker Response';
      description = 'You turn resistance into rocket fuel. The harder the structural lock-in, the more alive you feel breaking it.';
      recommendation = 'Deploy on stuck projects and crisis situations. Your pattern breaks through Decision Latency paralysis.';
      interventionUrl = '/interventions/the-override';
    } else if (mapResponses >= 1 && score <= 60) {
      severity = 'high';
      title = 'Strategic Navigator Response';
      description = 'You see the whole system before moving. Mapping and planning create your confidence and momentum toward field state.';
      recommendation = 'Excel at complex system design. Use mapping to reveal friction points before others see them.';
      interventionUrl = '/interventions/the-map';
    } else if (score >= 60) {
      severity = 'low';
      title = 'Adaptive Response';
      description = 'You read situations and adjust your approach. Multiple response modes make you organizationally effective across dimensions.';
      recommendation = 'Perfect for leadership roles. Help others identify their constraint response and deploy appropriately.';
      interventionUrl = '/interventions/the-naming';
    } else {
      severity = 'critical';
      title = 'Reflective Response';
      description = 'You work with systems instead of fighting them. Deep thinking and careful action prevent expensive mistakes.';
      recommendation = 'Focus on sustainable field-state transitions. Your thoughtful response pattern prevents dimension regression.';
      interventionUrl = '/interventions/the-naming';
    }

    return { score, severity, title, description, recommendation, interventionUrl };
  };

  return (
    <>
      <SEOHead
        title="The Constraint Response - How You Break Through Lock-In | IMAGINATION G"
        description="Your constraint response pattern determines how you break through Structural Lock-In. Affects Error Correction and Decision Latency dimensions. Identify your pattern, deploy it strategically."
        ogType="article"
        ogImage="/images/og-answers.svg"
        article={{
          publishedTime: "2025-06-05T00:00:00Z",
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
                Back to Friction Patterns
              </Link>

              {/* System Status Badge */}
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                GPI DIMENSION: STRUCTURAL LOCK-IN • ERROR CORRECTION
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                THE CONSTRAINT<br />RESPONSE<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-12 max-w-2xl">
                How you break through Structural Lock-In. Your pattern for navigating blocks.
                Affects Decision Latency and Error Correction dimensions.
              </p>

              {/* Portal Navigation */}
              <div className="border border-zinc-800 bg-zinc-950">
                <div className="flex border-b border-zinc-800 overflow-x-auto">
                  <button
                    onClick={() => setActiveTab('detection')}
                    className={`px-6 py-4 font-bold transition-colors whitespace-nowrap ${
                      activeTab === 'detection' 
                        ? 'bg-red-600 text-white' 
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                    }`}
                  >
                    DETECTION
                  </button>
                  <button
                    onClick={() => setActiveTab('identification')}
                    className={`px-6 py-4 font-bold transition-colors whitespace-nowrap ${
                      activeTab === 'identification' 
                        ? 'bg-red-600 text-white' 
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                    }`}
                  >
                    IDENTIFICATION
                  </button>
                  <button
                    onClick={() => setActiveTab('strategy')}
                    className={`px-6 py-4 font-bold transition-colors whitespace-nowrap ${
                      activeTab === 'strategy' 
                        ? 'bg-red-600 text-white' 
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                    }`}
                  >
                    STRATEGY
                  </button>
                  <button
                    onClick={() => setActiveTab('deployment')}
                    className={`px-6 py-4 font-bold transition-colors whitespace-nowrap ${
                      activeTab === 'deployment' 
                        ? 'bg-red-600 text-white' 
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                    }`}
                  >
                    DEPLOYMENT
                  </button>
                  <button
                    onClick={() => setActiveTab('related')}
                    className={`px-6 py-4 font-bold transition-colors whitespace-nowrap ${
                      activeTab === 'related' 
                        ? 'bg-red-600 text-white' 
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                    }`}
                  >
                    RELATED
                  </button>
                  <Link href="/answers" className="px-6 py-4 font-bold transition-colors whitespace-nowrap text-zinc-400 hover:text-white hover:bg-zinc-900">
                    PATTERN HUB
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portal Content Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              
              {/* DETECTION TAB */}
              {activeTab === 'detection' && (
                <div className="space-y-8">
                  <div className="bg-black border-2 border-red-600 p-8">
                    <h2 className="text-2xl font-black mb-4 text-red-600">CONSTRAINT RESPONSE DETECTION</h2>
                    <p className="text-lg leading-relaxed mb-6">
                      Your constraint response is how you handle Structural Lock-In. Some people break through walls. Others find the door.
                      Some absorb the hit and keep moving. Others use the wall as fuel.
                      Know your pattern, stop fighting it, start using it to move toward field state.
                    </p>

                    {/* Key Signals */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-zinc-700 p-4">
                        <h4 className="font-bold text-red-400 mb-2">Your Default Response</h4>
                        <p className="text-sm text-zinc-400">When you hit Structural Lock-In</p>
                      </div>
                      <div className="border border-zinc-700 p-4">
                        <h4 className="font-bold text-red-400 mb-2">Four Core Types</h4>
                        <p className="text-sm text-zinc-400">Break it, route around it, absorb it, use it as fuel</p>
                      </div>
                      <div className="border border-zinc-700 p-4">
                        <h4 className="font-bold text-red-400 mb-2">Pattern Recognition</h4>
                        <p className="text-sm text-zinc-400">Wrong response + wrong context = stuck in particle state</p>
                      </div>
                      <div className="border border-zinc-700 p-4">
                        <h4 className="font-bold text-red-400 mb-2">Dimension Impact</h4>
                        <p className="text-sm text-zinc-400">Right response reduces Decision Latency and enables Error Correction</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* IDENTIFICATION TAB */}
              {activeTab === 'identification' && (
                <div className="space-y-8">
                  <div className="bg-black border-2 border-red-600 p-8 mb-8">
                    <h2 className="text-2xl font-black mb-4 text-red-600">CONSTRAINT RESPONSE MATRIX</h2>
                    <p className="text-lg mb-6">
                      Four distinct response types. Each optimized for breaking different types of Structural Lock-In. Identify yours to deploy effectively toward field state.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border-2 border-red-600 p-6 bg-zinc-950 hover:border-red-400 transition-colors">
                      <h3 className="text-xl font-black text-red-600 mb-3">1. LOCK-IN BREAKER</h3>
                      <p className="text-zinc-400 mb-4">
                        You see a wall, you break through it. Fast, direct, sometimes messy. You force particle→field transitions.
                      </p>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-green-500 font-bold">Deploy For:</p>
                          <p className="text-zinc-500">High Decision Latency, urgent deadlines, breaking deadlocks</p>
                        </div>
                        <div>
                          <p className="text-red-500 font-bold">Avoid For:</p>
                          <p className="text-zinc-500">Politics, consensus-building, delicate negotiations</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-2 border-yellow-500 p-6 bg-zinc-950 hover:border-yellow-400 transition-colors">
                      <h3 className="text-xl font-black text-yellow-500 mb-3">2. FRICTION NAVIGATOR</h3>
                      <p className="text-zinc-400 mb-4">
                        You see a wall, you find the door. Creative, efficient, innovative. You map paths others don't see.
                      </p>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-green-500 font-bold">Deploy For:</p>
                          <p className="text-zinc-500">Knowledge Location issues, system design, finding new markets</p>
                        </div>
                        <div>
                          <p className="text-red-500 font-bold">Avoid For:</p>
                          <p className="text-zinc-500">High-pressure deadlines, direct confrontation</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-2 border-blue-500 p-6 bg-zinc-950 hover:border-blue-400 transition-colors">
                      <h3 className="text-xl font-black text-blue-500 mb-3">3. FLOW ADAPTER</h3>
                      <p className="text-zinc-400 mb-4">
                        You see a wall, you adapt to it. Flexible, resilient, diplomatic. You bend without breaking.
                      </p>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-green-500 font-bold">Deploy For:</p>
                          <p className="text-zinc-500">Talent Flow issues, team integration, long-term relationships</p>
                        </div>
                        <div>
                          <p className="text-red-500 font-bold">Avoid For:</p>
                          <p className="text-zinc-500">Situations requiring firm boundaries, urgent decisions</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-2 border-green-500 p-6 bg-zinc-950 hover:border-green-400 transition-colors">
                      <h3 className="text-xl font-black text-green-500 mb-3">4. PRESSURE CONVERTER</h3>
                      <p className="text-zinc-400 mb-4">
                        You see a wall, you use it as fuel. Competitive, driven, transformative. Opposition accelerates your velocity.
                      </p>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-green-500 font-bold">Deploy For:</p>
                          <p className="text-zinc-500">Knowledge Velocity issues, transformation projects, growth phases</p>
                        </div>
                        <div>
                          <p className="text-red-500 font-bold">Avoid For:</p>
                          <p className="text-zinc-500">Stable operations, collaborative environments, maintenance work</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STRATEGY TAB */}
              {activeTab === 'strategy' && (
                <div className="space-y-8">
                  <div className="bg-black border-2 border-yellow-500 p-8">
                    <h2 className="text-2xl font-black mb-4 text-yellow-500">CONSTRAINT RESPONSE STRATEGY</h2>
                    <p className="text-lg mb-6">
                      Understanding your response pattern transforms Structural Lock-In from obstacle to advantage. Deploy strategically for maximum GPI impact.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-white mb-3">INDIVIDUAL LEVERAGE</h4>
                        <ul className="space-y-2 text-zinc-400">
                          <li>• Choose dimension-matching roles</li>
                          <li>• Predict and avoid friction patterns</li>
                          <li>• Build response-aware partnerships</li>
                          <li>• Optimize toward field state</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-3">ORGANIZATIONAL DESIGN</h4>
                        <ul className="space-y-2 text-zinc-400">
                          <li>• Map team response composition</li>
                          <li>• Assign projects by dimension fit</li>
                          <li>• Prevent response conflicts</li>
                          <li>• Design for response diversity</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Strategic Applications */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-zinc-800 p-6 bg-zinc-950">
                      <h3 className="text-lg font-black mb-4 text-yellow-500">TEAM COMPOSITION</h3>
                      <ul className="space-y-2 text-zinc-400 text-sm">
                        <li>• Breaker + Navigator = Crisis innovation</li>
                        <li>• Adapter + Converter = Sustainable growth</li>
                        <li>• Diverse responses = Adaptive resilience</li>
                        <li>• Matched responses = Specialized power</li>
                      </ul>
                    </div>
                    <div className="border border-zinc-800 p-6 bg-zinc-950">
                      <h3 className="text-lg font-black mb-4 text-yellow-500">PROJECT ASSIGNMENT</h3>
                      <ul className="space-y-2 text-zinc-400 text-sm">
                        <li>• Match response to dimension friction</li>
                        <li>• Consider particle state severity</li>
                        <li>• Account for stakeholder sensitivity</li>
                        <li>• Plan for response rotation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* DEPLOYMENT TAB */}
              {activeTab === 'deployment' && (
                <div className="space-y-8">
                  <div className="bg-black border-2 border-red-600 p-8">
                    <h3 className="text-2xl font-black mb-4 text-red-600">CONSTRAINT RESPONSE DEPLOYMENT</h3>
                    <p className="text-lg mb-6">
                      Stop fighting your response pattern. Start using it to move dimensions toward field state.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-white mb-3">IMMEDIATE ACTIONS</h4>
                        <ul className="space-y-2 text-zinc-400">
                          <li>• Take the response diagnostic</li>
                          <li>• Map your constraint patterns</li>
                          <li>• Identify optimal deployment contexts</li>
                          <li>• Build response-aware teams</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-3">GPI INTEGRATIONS</h4>
                        <ul className="space-y-2 text-zinc-400">
                          <li>• Connect with GPI interventions</li>
                          <li>• Deploy on high-friction dimensions</li>
                          <li>• Monitor response effectiveness</li>
                          <li>• Re-measure after 30-90 days</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Deployment Framework */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black">DEPLOYMENT STEPS</h3>
                    <div className="space-y-3">
                      <div className="flex gap-4 items-start">
                        <div className="text-red-600 font-mono text-sm w-16 flex-shrink-0">STEP 1</div>
                        <div className="flex-1">
                          <h4 className="font-bold mb-1">Identify Particle Dimensions</h4>
                          <p className="text-zinc-400 text-sm">Map where friction is highest (GPI 7-10)</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="text-red-600 font-mono text-sm w-16 flex-shrink-0">STEP 2</div>
                        <div className="flex-1">
                          <h4 className="font-bold mb-1">Match Response to Dimension</h4>
                          <p className="text-zinc-400 text-sm">Deploy appropriate response pattern for the friction type</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="text-red-600 font-mono text-sm w-16 flex-shrink-0">STEP 3</div>
                        <div className="flex-1">
                          <h4 className="font-bold mb-1">Execute with Confidence</h4>
                          <p className="text-zinc-400 text-sm">Trust your constraint response pattern</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="text-red-600 font-mono text-sm w-16 flex-shrink-0">STEP 4</div>
                        <div className="flex-1">
                          <h4 className="font-bold mb-1">Re-measure GPI</h4>
                          <p className="text-zinc-400 text-sm">Track dimension movement toward field state</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Portal CTAs */}
                  <div className="text-center pt-8">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="#constraint-diagnostic"
                        className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors inline-block"
                      >
                        IDENTIFY YOUR RESPONSE
                      </a>
                      <Link
                        href="/interventions"
                        className="border-2 border-red-600 px-8 py-4 text-lg font-black hover:bg-red-600 transition-colors"
                      >
                        DEPLOY INTERVENTION
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* RELATED TAB */}
              {activeTab === 'related' && (
                <div className="space-y-8">
                  <div className="bg-black border-2 border-blue-500 p-8">
                    <h2 className="text-2xl font-black mb-4 text-blue-500">RELATED FRICTION PATTERNS</h2>
                    <p className="text-lg mb-6">
                      Constraint Response connects to other GPI patterns. Understanding these relationships creates deeper dimension mastery.
                    </p>
                  </div>

                  {/* Related Concepts Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Link href="/answers/glossary/the-friction-loop" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="text-xl font-black text-red-600 mb-3 group-hover:text-white transition-colors">
                        The Friction Loop
                      </h3>
                      <p className="text-zinc-400 mb-3">How friction feeds itself. Particle state acceleration patterns.</p>
                      <p className="text-sm text-zinc-600">
                        <strong>Connection:</strong> Wrong constraint response can create friction loops. Right response breaks the cycle.
                      </p>
                    </Link>

                    <Link href="/answers/glossary/the-hidden-drain" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="text-xl font-black text-red-600 mb-3 group-hover:text-white transition-colors">
                        The Hidden Drain
                      </h3>
                      <p className="text-zinc-400 mb-3">Invisible energy losses. Where capacity disappears.</p>
                      <p className="text-sm text-zinc-600">
                        <strong>Connection:</strong> Misaligned constraint response creates massive hidden drains. Right response eliminates energy waste.
                      </p>
                    </Link>

                    <Link href="/answers/glossary/the-momentum-effect" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="text-xl font-black text-red-600 mb-3 group-hover:text-white transition-colors">
                        The Momentum Effect
                      </h3>
                      <p className="text-zinc-400 mb-3">How velocity compounds. Field-state acceleration patterns.</p>
                      <p className="text-sm text-zinc-600">
                        <strong>Connection:</strong> Team response alignment creates momentum multiplication. Complementary responses compound force.
                      </p>
                    </Link>

                    <Link href="/answers/glossary/the-breaking-point" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="text-xl font-black text-red-600 mb-3 group-hover:text-white transition-colors">
                        The Breaking Point
                      </h3>
                      <p className="text-zinc-400 mb-3">Maximum pressure before transformation. Breakthrough moments.</p>
                      <p className="text-sm text-zinc-600">
                        <strong>Connection:</strong> Breaking points reveal authentic response pattern. Maximum pressure strips pretense.
                      </p>
                    </Link>
                  </div>

                  {/* Intervention Connections */}
                  <div className="bg-black border-2 border-green-500 p-8">
                    <h3 className="text-2xl font-black mb-4 text-green-500">GPI INTERVENTION CONNECTIONS</h3>
                    <p className="text-lg mb-6">
                      Constraint Response understanding enhances every GPI intervention. Deploy your response pattern through targeted interventions.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Link href="/interventions/the-naming" className="border border-zinc-700 p-4 hover:border-green-500 transition-colors">
                        <h4 className="font-bold text-green-400 mb-2">THE NAMING</h4>
                        <p className="text-sm text-zinc-400">Surface your true response pattern. Name your authentic constraint approach.</p>
                      </Link>

                      <Link href="/interventions/the-map" className="border border-zinc-700 p-4 hover:border-green-500 transition-colors">
                        <h4 className="font-bold text-green-400 mb-2">THE MAP</h4>
                        <p className="text-sm text-zinc-400">Map team response composition. Find connections that leverage response diversity.</p>
                      </Link>

                      <Link href="/interventions/the-build" className="border border-zinc-700 p-4 hover:border-green-500 transition-colors">
                        <h4 className="font-bold text-green-400 mb-2">THE BUILD</h4>
                        <p className="text-sm text-zinc-400">Deploy Field Creator response in MVP creation. Match response to ship velocity.</p>
                      </Link>

                      <Link href="/interventions/the-override" className="border border-zinc-700 p-4 hover:border-green-500 transition-colors">
                        <h4 className="font-bold text-green-400 mb-2">THE OVERRIDE</h4>
                        <p className="text-sm text-zinc-400">Break stuck patterns with response awareness. Deploy Lock-In Breaker mode.</p>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Diagnostic Section */}
        <section id="constraint-diagnostic" className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              {/* Diagnostic Header */}
              <div className="bg-black border-2 border-red-600 p-8 mb-8">
                <h2 className="text-2xl font-black mb-4 text-red-600">CONSTRAINT RESPONSE DIAGNOSTIC</h2>
                <p className="text-lg mb-6">
                  Discover your authentic response pattern. Twelve questions to reveal how you break through Structural Lock-In.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-zinc-700 p-4">
                    <h4 className="font-bold text-red-400 mb-2">Pattern Detection</h4>
                    <p className="text-sm text-zinc-400">How you naturally handle Structural Lock-In</p>
                  </div>
                  <div className="border border-zinc-700 p-4">
                    <h4 className="font-bold text-red-400 mb-2">Deployment Strategy</h4>
                    <p className="text-sm text-zinc-400">Optimize for your response type</p>
                  </div>
                </div>
              </div>

              {/* Diagnostic Component */}
              <LexiconDiagnostic
                lexiconTerm="constraint response"
                questions={constraintQuestions}
                calculateResults={calculateConstraintResults}
                color="red"
              />
            </div>
          </div>
        </section>


      </div>
    </>
  );
};

export default ConstraintResponsePage;