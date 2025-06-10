import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import RelatedContent from '../../../components/RelatedContent';
import LexiconDiagnostic from '../../../components/LexiconDiagnostic';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const NexelPage: NextPage = () => {
  const [activeTab, setActiveTab] = useState('detection');
  
  const nexelQuestions = [
    {
      id: 1,
      question: "When you hit a wall at work, what's your first instinct?",
      yesText: "PIERCER MODE",
      yesSubtext: "Break through, figure it out later.",
      noText: "ROUTER MODE",
      noSubtext: "Find another way around."
    },
    {
      id: 2,
      question: "Do you get energized when everything seems impossible?",
      yesText: "AMPLIFIER NEXEL",
      yesSubtext: "Opposition becomes fuel.",
      noText: "ABSORBER NEXEL",
      noSubtext: "You adapt and flow with it."
    },
    {
      id: 3,
      question: "When your boss says 'it can't be done,' do you hear a challenge?",
      yesText: "CHALLENGE SEEKER",
      yesSubtext: "Impossible just means interesting.",
      noText: "REALITY CHECKER",
      noSubtext: "Maybe they're right, let's pivot."
    },
    {
      id: 4,
      question: "Would you rather have unlimited resources or interesting problems?",
      yesText: "PROBLEM LOVER",
      yesSubtext: "Blocks make it fun.",
      noText: "RESOURCE OPTIMIZER",
      noSubtext: "Give me the tools first."
    },
    {
      id: 5,
      question: "When a project gets canceled, are you relieved or disappointed?",
      yesText: "MOMENTUM SEEKER",
      yesSubtext: "You were just getting started.",
      noText: "EFFICIENCY SEEKER",
      noSubtext: "Good, that was getting messy."
    },
    {
      id: 6,
      question: "Do you work better under pressure or with plenty of time?",
      yesText: "PRESSURE COOKER",
      yesSubtext: "Deadlines create clarity.",
      noText: "SPACE CREATOR",
      noSubtext: "Time reveals the real solution."
    },
    {
      id: 7,
      question: "When someone says 'that's not how we do things here,' do you get curious or frustrated?",
      yesText: "SYSTEM CHALLENGER",
      yesSubtext: "Why not? Let's find out.",
      noText: "SYSTEM NAVIGATOR",
      noSubtext: "Okay, what's the real way?"
    },
    {
      id: 8,
      question: "Would you rather ship something messy or wait to make it perfect?",
      yesText: "SHIP IT NEXEL",
      yesSubtext: "Done beats perfect.",
      noText: "CRAFT IT NEXEL",
      noSubtext: "Quality creates momentum."
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
      yesText: "CREATOR NEXEL",
      yesSubtext: "Blank slate energizes you.",
      noText: "OPTIMIZER NEXEL",
      noSubtext: "Making good things great."
    },
    {
      id: 11,
      question: "When facing a complex system, do you dive in or map it out first?",
      yesText: "DIVE & DISCOVER",
      yesSubtext: "Learn by doing.",
      noText: "MAP & PLAN",
      noSubtext: "Understand before acting."
    },
    {
      id: 12,
      question: "Would you rather fix a broken process or build a new one from scratch?",
      yesText: "BUILDER NEXEL",
      yesSubtext: "Fresh start, clean slate.",
      noText: "FIXER NEXEL",
      noSubtext: "Salvage what works."
    }
  ];

  const calculateNexelResults = (answers: Record<number, 'yes' | 'no'>) => {
    const yesCount = Object.values(answers).filter(answer => answer === 'yes').length;
    const score = Math.round((yesCount / nexelQuestions.length) * 100);
    
    // Analyze specific patterns for better intervention matching
    const pierceResponses = [answers[1], answers[3], answers[7]].filter(a => a === 'yes').length;
    const buildResponses = [answers[8], answers[10], answers[12]].filter(a => a === 'yes').length;
    const mapResponses = [answers[11], answers[9]].filter(a => a === 'no').length; // Strategic planners
    const energyResponses = [answers[2], answers[5]].filter(a => a === 'yes').length;
    
    let severity: 'low' | 'medium' | 'high' | 'critical';
    let title: string;
    let description: string;
    let recommendation: string;
    let interventionUrl: string | undefined;

    // Route based on dominant patterns, not just total score
    if (buildResponses >= 2 && score >= 50) {
      severity = 'low';
      title = 'Builder Nexel';
      description = 'You thrive on creating from scratch. New projects, fresh starts, and blank slates energize you most.';
      recommendation = 'Perfect for MVP development and new product launches. Start with rapid prototyping to find your flow.';
      interventionUrl = '/interventions/first-blood-build';
    } else if (pierceResponses >= 2 && energyResponses >= 1) {
      severity = 'medium';
      title = 'Breakthrough Nexel';
      description = 'You turn resistance into rocket fuel. The harder the problem, the more alive you feel solving it.';
      recommendation = 'Deploy on stuck projects and crisis situations. Your energy breaks through organizational paralysis.';
      interventionUrl = '/interventions/the-override';
    } else if (mapResponses >= 1 && score <= 60) {
      severity = 'high';
      title = 'Strategic Nexel';
      description = 'You see the whole system before moving. Planning and mapping create your confidence and momentum.';
      recommendation = 'Excel at complex system design. Use mapping to reveal optimal paths before others see them.';
      interventionUrl = '/interventions/the-map';
    } else if (score >= 60) {
      severity = 'low';
      title = 'Adaptive Force Nexel';
      description = 'You read situations and adjust your approach. Multiple nexel modes make you organizationally dangerous.';
      recommendation = 'Perfect for leadership roles. Help others identify their nexel and deploy appropriately.';
      interventionUrl = '/interventions/nexel-coaching';
    } else {
      severity = 'critical';
      title = 'Reflective Nexel';
      description = 'You work with systems instead of fighting them. Deep thinking and careful action are your superpowers.';
      recommendation = 'Focus on sustainable approaches. Your thoughtful nexel prevents expensive mistakes others make.';
      interventionUrl = '/interventions/the-naming';
    }

    return { score, severity, title, description, recommendation, interventionUrl };
  };

  return (
    <>
      <SEOHead
        title="Nexel - Behavioral Identity Marker | IMAGINATION G"
        description="Nexel is your behavioral identity marker—how you move through constraint. Discover your unique constraint navigation pattern and why it determines organizational outcomes."
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
                Back to Pattern Breakdown
              </Link>

              {/* System Status Badge */}
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                PORTAL: NEXEL
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                NEXEL<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-12 max-w-2xl">
                How you handle getting blocked. Your problem-solving DNA. Can't be changed, only recognized and used.
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
                    <h2 className="text-2xl font-black mb-4 text-red-600">NEXEL DETECTION</h2>
                    <p className="text-lg leading-relaxed mb-6">
                      Your nexel is how you handle being stuck. Some people break through walls. Others find the door. 
                      Some absorb the hit and keep moving. Others use the wall as fuel. 
                      Know your pattern, stop fighting it, start using it.
                    </p>
                    
                    {/* Key Signals */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-zinc-700 p-4">
                        <h4 className="font-bold text-red-400 mb-2">Your Default Response</h4>
                        <p className="text-sm text-zinc-400">When things get blocked</p>
                      </div>
                      <div className="border border-zinc-700 p-4">
                        <h4 className="font-bold text-red-400 mb-2">Four Core Types</h4>
                        <p className="text-sm text-zinc-400">Break it, route around it, absorb it, use it as fuel</p>
                      </div>
                      <div className="border border-zinc-700 p-4">
                        <h4 className="font-bold text-red-400 mb-2">Pattern Recognition</h4>
                        <p className="text-sm text-zinc-400">Wrong approach + wrong situation = stuck pattern</p>
                      </div>
                      <div className="border border-zinc-700 p-4">
                        <h4 className="font-bold text-red-400 mb-2">Energy Optimization</h4>
                        <p className="text-sm text-zinc-400">Fighting your nexel wastes energy. Using it creates momentum.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* IDENTIFICATION TAB */}
              {activeTab === 'identification' && (
                <div className="space-y-8">
                  <div className="bg-black border-2 border-red-600 p-8 mb-8">
                    <h2 className="text-2xl font-black mb-4 text-red-600">NEXEL IDENTIFICATION MATRIX</h2>
                    <p className="text-lg mb-6">
                      Four distinct nexel types. Each optimized for different blocks. Identify yours to deploy effectively.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border-2 border-red-600 p-6 bg-zinc-950 hover:border-red-400 transition-colors">
                      <h3 className="text-xl font-black text-red-600 mb-3">1. PIERCER</h3>
                      <p className="text-zinc-400 mb-4">
                        You see a wall, you break through it. Fast, direct, sometimes messy. You get results but may burn bridges.
                      </p>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-green-500 font-bold">Deploy For:</p>
                          <p className="text-zinc-500">Crisis situations, urgent deadlines, breaking deadlocks</p>
                        </div>
                        <div>
                          <p className="text-red-500 font-bold">Avoid For:</p>
                          <p className="text-zinc-500">Politics, consensus-building, delicate negotiations</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-2 border-yellow-500 p-6 bg-zinc-950 hover:border-yellow-400 transition-colors">
                      <h3 className="text-xl font-black text-yellow-500 mb-3">2. ROUTER</h3>
                      <p className="text-zinc-400 mb-4">
                        You see a wall, you find the door. Creative, efficient, innovative. You solve problems others don't see.
                      </p>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-green-500 font-bold">Deploy For:</p>
                          <p className="text-zinc-500">Innovation projects, system design, finding new markets</p>
                        </div>
                        <div>
                          <p className="text-red-500 font-bold">Avoid For:</p>
                          <p className="text-zinc-500">High-pressure deadlines, direct confrontation</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-2 border-blue-500 p-6 bg-zinc-950 hover:border-blue-400 transition-colors">
                      <h3 className="text-xl font-black text-blue-500 mb-3">3. ABSORBER</h3>
                      <p className="text-zinc-400 mb-4">
                        You see a wall, you adapt to it. Flexible, resilient, diplomatic. You bend without breaking.
                      </p>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-green-500 font-bold">Deploy For:</p>
                          <p className="text-zinc-500">Change management, team integration, long-term relationships</p>
                        </div>
                        <div>
                          <p className="text-red-500 font-bold">Avoid For:</p>
                          <p className="text-zinc-500">Situations requiring firm boundaries, urgent decisions</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-2 border-green-500 p-6 bg-zinc-950 hover:border-green-400 transition-colors">
                      <h3 className="text-xl font-black text-green-500 mb-3">4. AMPLIFIER</h3>
                      <p className="text-zinc-400 mb-4">
                        You see a wall, you use it as fuel. Competitive, driven, transformative. Opposition makes you stronger.
                      </p>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-green-500 font-bold">Deploy For:</p>
                          <p className="text-zinc-500">Competitive markets, transformation projects, growth phases</p>
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
                    <h2 className="text-2xl font-black mb-4 text-yellow-500">NEXEL DEPLOYMENT STRATEGY</h2>
                    <p className="text-lg mb-6">
                      Understanding your nexel transforms blocks from obstacle to advantage. Deploy strategically for maximum impact.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-white mb-3">INDIVIDUAL LEVERAGE</h4>
                        <ul className="space-y-2 text-zinc-400">
                          <li>• Choose problem-matching roles</li>
                          <li>• Predict and avoid failure patterns</li>
                          <li>• Build nexel-aware partnerships</li>
                          <li>• Optimize energy deployment</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-3">ORGANIZATIONAL DESIGN</h4>
                        <ul className="space-y-2 text-zinc-400">
                          <li>• Map team nexel composition</li>
                          <li>• Assign projects by problem fit</li>
                          <li>• Prevent nexel conflicts</li>
                          <li>• Design for nexel diversity</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Strategic Applications */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-zinc-800 p-6 bg-zinc-950">
                      <h3 className="text-lg font-black mb-4 text-yellow-500">TEAM COMPOSITION</h3>
                      <ul className="space-y-2 text-zinc-400 text-sm">
                        <li>• Piercer + Router = Crisis innovation</li>
                        <li>• Absorber + Amplifier = Sustainable growth</li>
                        <li>• Diverse nexels = Adaptive resilience</li>
                        <li>• Homogeneous nexels = Specialized power</li>
                      </ul>
                    </div>
                    <div className="border border-zinc-800 p-6 bg-zinc-950">
                      <h3 className="text-lg font-black mb-4 text-yellow-500">PROJECT ASSIGNMENT</h3>
                      <ul className="space-y-2 text-zinc-400 text-sm">
                        <li>• Match nexel to problem type</li>
                        <li>• Consider pressure level</li>
                        <li>• Account for stakeholder sensitivity</li>
                        <li>• Plan for nexel rotation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* DEPLOYMENT TAB */}
              {activeTab === 'deployment' && (
                <div className="space-y-8">
                  <div className="bg-black border-2 border-red-600 p-8">
                    <h3 className="text-2xl font-black mb-4 text-red-600">NEXEL DEPLOYMENT PROTOCOL</h3>
                    <p className="text-lg mb-6">
                      Stop fighting your problem-solving pattern. Start using it as your competitive advantage.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-white mb-3">IMMEDIATE ACTIONS</h4>
                        <ul className="space-y-2 text-zinc-400">
                          <li>• Take the nexel diagnostic</li>
                          <li>• Map your problem-solving patterns</li>
                          <li>• Identify optimal deployment contexts</li>
                          <li>• Build nexel-aware teams</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-3">PORTAL INTEGRATIONS</h4>
                        <ul className="space-y-2 text-zinc-400">
                          <li>• Connect with intervention portals</li>
                          <li>• Deploy in high-pressure situations</li>
                          <li>• Monitor nexel effectiveness</li>
                          <li>• Iterate based on outcomes</li>
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
                          <h4 className="font-bold mb-1">Identify Current Blocks</h4>
                          <p className="text-zinc-400 text-sm">Map what's stopping progress</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="text-red-600 font-mono text-sm w-16 flex-shrink-0">STEP 2</div>
                        <div className="flex-1">
                          <h4 className="font-bold mb-1">Match Nexel to Context</h4>
                          <p className="text-zinc-400 text-sm">Deploy appropriate problem-solving approach</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="text-red-600 font-mono text-sm w-16 flex-shrink-0">STEP 3</div>
                        <div className="flex-1">
                          <h4 className="font-bold mb-1">Execute with Confidence</h4>
                          <p className="text-zinc-400 text-sm">Trust your nexel pattern</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="text-red-600 font-mono text-sm w-16 flex-shrink-0">STEP 4</div>
                        <div className="flex-1">
                          <h4 className="font-bold mb-1">Monitor and Adjust</h4>
                          <p className="text-zinc-400 text-sm">Refine based on results</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Portal CTAs */}
                  <div className="text-center pt-8">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a 
                        href="#nexel-diagnostic"
                        className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors inline-block"
                      >
                        DETECT YOUR NEXEL
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
                    <h2 className="text-2xl font-black mb-4 text-blue-500">RELATED CONCEPTS</h2>
                    <p className="text-lg mb-6">
                      Nexel connects to other IG patterns. Understanding these relationships creates deeper pattern mastery.
                    </p>
                  </div>

                  {/* Related Concepts Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Link href="/answers/glossary/morrin" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="text-xl font-black text-red-600 mb-3 group-hover:text-white transition-colors">
                        Morrin State
                      </h3>
                      <p className="text-zinc-400 mb-3">Post-choice existence. When constraint becomes fuel.</p>
                      <p className="text-sm text-zinc-600">
                        <strong>Nexel Connection:</strong> Morrin is achieved when your nexel aligns perfectly with the problem. 
                        Post-choice clarity emerges from nexel mastery.
                      </p>
                    </Link>

                    <Link href="/answers/glossary/strune" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="text-xl font-black text-red-600 mb-3 group-hover:text-white transition-colors">
                        Understanding Strune
                      </h3>
                      <p className="text-zinc-400 mb-3">When movement creates its own resistance. The pattern trap.</p>
                      <p className="text-sm text-zinc-600">
                        <strong>Nexel Connection:</strong> Fighting your nexel creates strune. Using wrong nexel type 
                        multiplies resistance instead of breaking through.
                      </p>
                    </Link>

                    <Link href="/answers/glossary/soreth" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="text-xl font-black text-red-600 mb-3 group-hover:text-white transition-colors">
                        Soreth Drains
                      </h3>
                      <p className="text-zinc-400 mb-3">Hidden energy drains. The invisible tax on every action.</p>
                      <p className="text-sm text-zinc-600">
                        <strong>Nexel Connection:</strong> Misaligned nexel deployment creates massive soreth. 
                        Right nexel in right context eliminates energy waste.
                      </p>
                    </Link>

                    <Link href="/answers/glossary/threnn" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="text-xl font-black text-red-600 mb-3 group-hover:text-white transition-colors">
                        Threnn Multiplication
                      </h3>
                      <p className="text-zinc-400 mb-3">Momentum multiplication through aligned systems.</p>
                      <p className="text-sm text-zinc-600">
                        <strong>Nexel Connection:</strong> Team nexel alignment creates threnn. Complementary 
                        nexels multiply force instead of adding it.
                      </p>
                    </Link>

                    <Link href="/answers/glossary/voxel" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="text-xl font-black text-red-600 mb-3 group-hover:text-white transition-colors">
                        Voxel Navigation
                      </h3>
                      <p className="text-zinc-400 mb-3">Three-dimensional truth where reality meets perception meets action.</p>
                      <p className="text-sm text-zinc-600">
                        <strong>Nexel Connection:</strong> Your nexel determines how you navigate complex situations. 
                        Different types excel in different truth dimensions.
                      </p>
                    </Link>

                    <Link href="/answers/glossary/zelith" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="text-xl font-black text-red-600 mb-3 group-hover:text-white transition-colors">
                        Zelith Points
                      </h3>
                      <p className="text-zinc-400 mb-3">Maximum pressure before transformation. Breakthrough moment.</p>
                      <p className="text-sm text-zinc-600">
                        <strong>Nexel Connection:</strong> Zelith reveals true nexel. Maximum pressure strips away 
                        pretense and shows authentic problem-solving style.
                      </p>
                    </Link>
                  </div>

                  {/* Intervention Connections */}
                  <div className="bg-black border-2 border-green-500 p-8">
                    <h3 className="text-2xl font-black mb-4 text-green-500">INTERVENTION PORTAL CONNECTIONS</h3>
                    <p className="text-lg mb-6">
                      Nexel understanding enhances every intervention portal. Deploy your nexel through targeted portals.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <Link href="/interventions/the-naming" className="border border-zinc-700 p-4 hover:border-green-500 transition-colors">
                        <h4 className="font-bold text-green-400 mb-2">THE NAMING Portal</h4>
                        <p className="text-sm text-zinc-400">Surface your true nexel. Name your authentic problem-solving pattern.</p>
                      </Link>
                      
                      <Link href="/interventions/the-map" className="border border-zinc-700 p-4 hover:border-green-500 transition-colors">
                        <h4 className="font-bold text-green-400 mb-2">THE MAP Portal</h4>
                        <p className="text-sm text-zinc-400">Map team nexel composition. Find connections that leverage nexel diversity.</p>
                      </Link>
                      
                      <Link href="/interventions/the-build" className="border border-zinc-700 p-4 hover:border-green-500 transition-colors">
                        <h4 className="font-bold text-green-400 mb-2">THE BUILD Portal</h4>
                        <p className="text-sm text-zinc-400">Deploy Builder nexel in MVP creation. Match problem-solving approach to ship speed.</p>
                      </Link>
                      
                      <Link href="/interventions/the-override" className="border border-zinc-700 p-4 hover:border-green-500 transition-colors">
                        <h4 className="font-bold text-green-400 mb-2">THE OVERRIDE Portal</h4>
                        <p className="text-sm text-zinc-400">Break stuck patterns with nexel awareness. Stop fighting blocks, start using them.</p>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Diagnostic Section */}
        <section id="nexel-diagnostic" className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              {/* Diagnostic Header */}
              <div className="bg-black border-2 border-red-600 p-8 mb-8">
                <h2 className="text-2xl font-black mb-4 text-red-600">NEXEL DIAGNOSTIC PORTAL</h2>
                <p className="text-lg mb-6">
                  Discover your authentic problem-solving pattern. Twelve questions to reveal your nexel type.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-zinc-700 p-4">
                    <h4 className="font-bold text-red-400 mb-2">Pattern Detection</h4>
                    <p className="text-sm text-zinc-400">How you naturally handle blocks</p>
                  </div>
                  <div className="border border-zinc-700 p-4">
                    <h4 className="font-bold text-red-400 mb-2">Deployment Strategy</h4>
                    <p className="text-sm text-zinc-400">Optimize for your nexel type</p>
                  </div>
                </div>
              </div>

              {/* Diagnostic Component */}
              <LexiconDiagnostic
                lexiconTerm="nexel"
                questions={nexelQuestions}
                calculateResults={calculateNexelResults}
                color="red"
              />
            </div>
          </div>
        </section>


      </div>
    </>
  );
};

export default NexelPage;