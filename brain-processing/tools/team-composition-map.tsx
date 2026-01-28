import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { Users, ArrowRight, ArrowLeft, Target, Zap, RefreshCw, Network, CheckCircle, Plus, X, Download } from 'lucide-react';

const TeamCompositionMapPage = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'setup' | 'assessment' | 'mapping' | 'results'>('intro');
  const [teamMembers, setTeamMembers] = useState<Array<{id: string, name: string, role: string}>>([]);
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
  const [styleResults, setStyleResults] = useState<Record<string, {
    style: string,
    fieldScore: number,
    particleScore: number,
    signalScore: number,
    structureScore: number
  }>>({});
  const [teamName, setTeamName] = useState('');

  // GPI-aligned work styles
  const workStyles = [
    {
      id: 'field-signal',
      name: 'FAST VALUE CREATOR',
      orientation: 'Field',
      workType: 'Signal',
      description: 'Moves quickly to create visible value. Thrives in adaptive environments.',
      strengths: ['Rapid iteration', 'Direct impact', 'Innovation under pressure'],
      challenges: ['May skip documentation', 'Can burn out without structure'],
      bestFor: ['Product launches', 'Crisis response', 'MVP development', 'Customer-facing work'],
      color: 'green',
      gpiFit: 'Best fit: Organizations with GPI 1-4 (Field to early Transition)'
    },
    {
      id: 'field-structure',
      name: 'AGILE SYSTEMS BUILDER',
      orientation: 'Field',
      workType: 'Structure',
      description: 'Builds flexible systems that enable others. Creates low-friction infrastructure.',
      strengths: ['Scalable solutions', 'Enabling others', 'Adaptive architecture'],
      challenges: ['May over-engineer for flexibility', 'Can struggle with rigid requirements'],
      bestFor: ['Platform development', 'Process optimization', 'Team enablement', 'Tool selection'],
      color: 'blue',
      gpiFit: 'Best fit: Organizations with GPI 2-5 (Field to mid-Transition)'
    },
    {
      id: 'particle-signal',
      name: 'METHODICAL VALUE CREATOR',
      orientation: 'Particle',
      workType: 'Signal',
      description: 'Creates value through careful, systematic approaches. Quality over speed.',
      strengths: ['Thorough execution', 'Risk mitigation', 'Stakeholder management'],
      challenges: ['May slow down urgent work', 'Can over-analyze before acting'],
      bestFor: ['Compliance projects', 'High-stakes delivery', 'Enterprise sales', 'Regulated industries'],
      color: 'yellow',
      gpiFit: 'Best fit: Organizations with GPI 5-8 (mid-Transition to Particle)'
    },
    {
      id: 'particle-structure',
      name: 'SYSTEM ARCHITECT',
      orientation: 'Particle',
      workType: 'Structure',
      description: 'Designs robust systems with clear processes. Values stability and predictability.',
      strengths: ['Documentation', 'Process design', 'Long-term thinking'],
      challenges: ['May resist rapid change', 'Can over-systematize'],
      bestFor: ['Governance frameworks', 'Quality systems', 'Security protocols', 'Training programs'],
      color: 'red',
      gpiFit: 'Best fit: Organizations with GPI 6-10 (late-Transition to Particle)'
    }
  ];

  const assessmentQuestions = [
    {
      id: 1,
      scenario: "RESOURCE CONSTRAINT",
      situation: "Your team needs to deliver a project but lacks a critical skill or resource",
      options: [
        { text: 'Find creative workarounds or alternative paths', orientation: 'field', workType: 'signal', points: 3 },
        { text: 'Build a reusable solution others can leverage later', orientation: 'field', workType: 'structure', points: 3 },
        { text: 'Network through proper channels to get the resources', orientation: 'particle', workType: 'signal', points: 3 },
        { text: 'Document the gap and establish a process to prevent it', orientation: 'particle', workType: 'structure', points: 3 }
      ]
    },
    {
      id: 2,
      scenario: "CONFLICTING REQUIREMENTS",
      situation: "Two stakeholders want completely different outcomes from the same project",
      options: [
        { text: 'Quickly prototype both approaches and let results decide', orientation: 'field', workType: 'signal', points: 3 },
        { text: 'Design a flexible system that can serve both needs', orientation: 'field', workType: 'structure', points: 3 },
        { text: 'Facilitate a structured decision-making process', orientation: 'particle', workType: 'signal', points: 3 },
        { text: 'Define clear criteria and governance for choosing', orientation: 'particle', workType: 'structure', points: 3 }
      ]
    },
    {
      id: 3,
      scenario: "TECHNICAL ROADBLOCK",
      situation: "Your team hits a technical problem that is blocking all progress",
      options: [
        { text: 'Try multiple quick experiments to find what works', orientation: 'field', workType: 'signal', points: 3 },
        { text: 'Research and implement a flexible architecture pattern', orientation: 'field', workType: 'structure', points: 3 },
        { text: 'Engage the right experts through established channels', orientation: 'particle', workType: 'signal', points: 3 },
        { text: 'Document the problem thoroughly and follow escalation process', orientation: 'particle', workType: 'structure', points: 3 }
      ]
    },
    {
      id: 4,
      scenario: "TEAM COORDINATION",
      situation: "Multiple team members are working on overlapping tasks inefficiently",
      options: [
        { text: 'Have a quick sync and divide work based on momentum', orientation: 'field', workType: 'signal', points: 3 },
        { text: 'Create lightweight tools that make coordination automatic', orientation: 'field', workType: 'structure', points: 3 },
        { text: 'Assign clear ownership and communicate responsibilities', orientation: 'particle', workType: 'signal', points: 3 },
        { text: 'Define roles, responsibilities, and handoff processes', orientation: 'particle', workType: 'structure', points: 3 }
      ]
    },
    {
      id: 5,
      scenario: "URGENT DEADLINE",
      situation: "A critical deadline moved up by 50% and scope has not changed",
      options: [
        { text: 'Focus on highest-impact items and ship fast', orientation: 'field', workType: 'signal', points: 3 },
        { text: 'Find tools or automation that can accelerate delivery', orientation: 'field', workType: 'structure', points: 3 },
        { text: 'Negotiate scope based on clear priority criteria', orientation: 'particle', workType: 'signal', points: 3 },
        { text: 'Document trade-offs and get formal approval for changes', orientation: 'particle', workType: 'structure', points: 3 }
      ]
    }
  ];

  const addTeamMember = () => {
    const newMember = {
      id: Date.now().toString(),
      name: '',
      role: ''
    };
    setTeamMembers([...teamMembers, newMember]);
  };

  const updateTeamMember = (id: string, field: 'name' | 'role', value: string) => {
    setTeamMembers(prev => prev.map(member =>
      member.id === id ? { ...member, [field]: value } : member
    ));
  };

  const removeTeamMember = (id: string) => {
    setTeamMembers(prev => prev.filter(member => member.id !== id));
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerSelect = (selectedOption: any) => {
    const currentMember = teamMembers[currentMemberIndex];
    if (!currentMember) return;

    const currentScores = styleResults[currentMember.id] || {
      style: '',
      fieldScore: 0,
      particleScore: 0,
      signalScore: 0,
      structureScore: 0
    };

    const newScores = { ...currentScores };

    if (selectedOption.orientation === 'field') {
      newScores.fieldScore += selectedOption.points;
    } else {
      newScores.particleScore += selectedOption.points;
    }

    if (selectedOption.workType === 'signal') {
      newScores.signalScore += selectedOption.points;
    } else {
      newScores.structureScore += selectedOption.points;
    }

    // Check if this is the last question for current member
    if (currentQuestion < assessmentQuestions.length - 1) {
      setStyleResults(prev => ({
        ...prev,
        [currentMember.id]: newScores
      }));
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Determine style for current member
      const orientation = newScores.fieldScore >= newScores.particleScore ? 'field' : 'particle';
      const workType = newScores.signalScore >= newScores.structureScore ? 'signal' : 'structure';
      newScores.style = `${orientation}-${workType}`;

      setStyleResults(prev => ({
        ...prev,
        [currentMember.id]: newScores
      }));

      // Move to next member or results
      if (currentMemberIndex < teamMembers.length - 1) {
        setCurrentMemberIndex(currentMemberIndex + 1);
        setCurrentQuestion(0);
      } else {
        setCurrentStep('mapping');
      }
    }
  };

  const calculateTeamComposition = () => {
    const styleCounts: Record<string, number> = {
      'field-signal': 0,
      'field-structure': 0,
      'particle-signal': 0,
      'particle-structure': 0
    };
    const membersByStyle: Record<string, Array<{name: string, role: string}>> = {
      'field-signal': [],
      'field-structure': [],
      'particle-signal': [],
      'particle-structure': []
    };

    teamMembers.forEach(member => {
      const result = styleResults[member.id];
      if (result && result.style) {
        styleCounts[result.style]++;
        membersByStyle[result.style].push({ name: member.name, role: member.role });
      }
    });

    return { styleCounts, membersByStyle };
  };

  const getTeamAnalysis = () => {
    const { styleCounts } = calculateTeamComposition();
    const total = teamMembers.length;

    const analysis = [];

    // Calculate field vs particle balance
    const fieldCount = styleCounts['field-signal'] + styleCounts['field-structure'];
    const particleCount = styleCounts['particle-signal'] + styleCounts['particle-structure'];
    const signalCount = styleCounts['field-signal'] + styleCounts['particle-signal'];
    const structureCount = styleCounts['field-structure'] + styleCounts['particle-structure'];

    // Field-heavy team
    if (fieldCount / total >= 0.6) {
      analysis.push({
        type: 'strength',
        title: 'ADAPTIVE TEAM',
        description: 'Your team excels at rapid response and creative problem-solving. Low friction, high speed.',
        tasks: ['Innovation projects', 'Crisis response', 'MVP development', 'Market pivots'],
        gpiFit: 'Best suited for Field organizations (GPI 1-4)'
      });
    }

    // Particle-heavy team
    if (particleCount / total >= 0.6) {
      analysis.push({
        type: 'strength',
        title: 'SYSTEMATIC TEAM',
        description: 'Your team excels at structured execution and process design. High reliability, clear handoffs.',
        tasks: ['Compliance projects', 'Quality systems', 'Process optimization', 'Governance'],
        gpiFit: 'Best suited for Particle organizations (GPI 7-10)'
      });
    }

    // Signal-heavy team
    if (signalCount / total >= 0.6) {
      analysis.push({
        type: 'strength',
        title: 'VALUE-FOCUSED TEAM',
        description: 'Your team gravitates toward creating visible, direct impact. Output over process.',
        tasks: ['Product delivery', 'Customer-facing work', 'Revenue generation', 'Visible wins']
      });
    }

    // Structure-heavy team
    if (structureCount / total >= 0.6) {
      analysis.push({
        type: 'strength',
        title: 'INFRASTRUCTURE TEAM',
        description: 'Your team excels at enabling others and building lasting systems.',
        tasks: ['Platform development', 'Tool creation', 'Documentation', 'Training programs']
      });
    }

    // Gap analysis
    if (fieldCount === 0) {
      analysis.push({
        type: 'gap',
        title: 'ADAPTABILITY GAP',
        description: 'Team may struggle with rapid pivots or ambiguous situations.',
        solution: 'Consider adding Field-oriented team members or training in adaptive methods'
      });
    }

    if (particleCount === 0) {
      analysis.push({
        type: 'gap',
        title: 'STRUCTURE GAP',
        description: 'Team may struggle with documentation, processes, and long-term planning.',
        solution: 'Consider adding Particle-oriented team members or establishing clearer processes'
      });
    }

    if (signalCount === 0) {
      analysis.push({
        type: 'gap',
        title: 'DELIVERY GAP',
        description: 'Team may over-invest in infrastructure at the expense of visible output.',
        solution: 'Ensure some team members focus on direct value creation'
      });
    }

    if (structureCount === 0) {
      analysis.push({
        type: 'gap',
        title: 'SUSTAINABILITY GAP',
        description: 'Team may ship fast but leave technical debt and poor documentation.',
        solution: 'Ensure some team members focus on enabling work and documentation'
      });
    }

    return analysis;
  };

  // INTRO SCREEN
  if (currentStep === 'intro') {
    return (
      <>
        <SEOHead
          title="Team Composition Map - GPI Work Style Assessment | IMAGINATION G"
          description="Map your team's collective work styles using the GPI Framework. Optimize task assignments based on Field/Particle orientation and Signal/Structure focus."
          ogImage="/images/og-team-map.svg"
        />

        <div className="min-h-screen bg-black text-white">
          <Navigation />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                TEAM COMPOSITION MAP: READY
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                TEAM<br />COMPOSITION<br />MAP<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-12 max-w-2xl">
                Map your team's collective work styles using the GPI Framework. Discover each member's
                orientation, optimize task assignments, and identify team composition gaps.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="border border-zinc-800 p-6 bg-zinc-950">
                  <h3 className="text-xl font-black mb-4 text-red-600">WHAT YOU'LL MAP</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Users className="text-blue-500" size={16} />
                      <span className="text-sm">Each member's Field vs Particle orientation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="text-green-500" size={16} />
                      <span className="text-sm">Signal vs Structure work type preferences</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Network className="text-purple-500" size={16} />
                      <span className="text-sm">Team composition and GPI organizational fit</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="text-yellow-500" size={16} />
                      <span className="text-sm">Task assignment optimization strategies</span>
                    </div>
                  </div>
                </div>

                <div className="border border-zinc-800 p-6 bg-zinc-950">
                  <h3 className="text-xl font-black mb-4 text-blue-600">4 WORK STYLES</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-bold text-green-400">FAST VALUE CREATOR:</span> Field + Signal. Quick wins, direct impact.
                    </div>
                    <div>
                      <span className="font-bold text-blue-400">AGILE SYSTEMS BUILDER:</span> Field + Structure. Flexible infrastructure.
                    </div>
                    <div>
                      <span className="font-bold text-yellow-400">METHODICAL VALUE CREATOR:</span> Particle + Signal. Careful delivery.
                    </div>
                    <div>
                      <span className="font-bold text-red-400">SYSTEM ARCHITECT:</span> Particle + Structure. Robust processes.
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 p-8 mb-12">
                <h3 className="text-xl font-black mb-4">HOW IT WORKS</h3>
                <div className="grid md:grid-cols-4 gap-6 text-sm">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-black">1</span>
                    </div>
                    <h4 className="font-bold mb-2">ADD TEAM</h4>
                    <p className="text-zinc-400">List your team members and their roles</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-black">2</span>
                    </div>
                    <h4 className="font-bold mb-2">ASSESS EACH</h4>
                    <p className="text-zinc-400">5 scenarios per team member</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-black">3</span>
                    </div>
                    <h4 className="font-bold mb-2">MAP STYLES</h4>
                    <p className="text-zinc-400">Visualize team composition</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-black">4</span>
                    </div>
                    <h4 className="font-bold mb-2">OPTIMIZE</h4>
                    <p className="text-zinc-400">Get task assignments and gap analysis</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => setCurrentStep('setup')}
                  className="bg-red-600 px-12 py-6 text-2xl font-black hover:bg-red-700 transition-colors mb-4"
                >
                  MAP YOUR TEAM
                </button>
                <p className="text-zinc-600 text-sm">
                  Takes 15-25 minutes depending on team size. Results can be saved and shared.
                </p>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  // SETUP SCREEN
  if (currentStep === 'setup') {
    return (
      <>
        <SEOHead
          title="Team Setup - Composition Mapping | IMAGINATION G"
          description="Add your team members for work style assessment"
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
                  Back to Overview
                </button>

                <h1 className="text-4xl font-black mb-6">
                  TEAM<br />SETUP<span className="text-red-600">.</span>
                </h1>

                <p className="text-xl text-zinc-400 mb-8">
                  Add your team members. Each person will be assessed through 5 problem-solving scenarios.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-bold text-zinc-400 mb-2">TEAM NAME</label>
                  <input
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="e.g., Product Team, Engineering, Marketing..."
                    className="w-full p-4 bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-black">TEAM MEMBERS</h2>
                    <button
                      onClick={addTeamMember}
                      className="flex items-center gap-2 bg-red-600 px-4 py-2 text-sm font-bold hover:bg-red-700 transition-colors"
                    >
                      <Plus size={16} />
                      ADD MEMBER
                    </button>
                  </div>

                  <div className="space-y-4">
                    {teamMembers.map((member, index) => (
                      <div key={member.id} className="border border-zinc-800 p-4 bg-zinc-950">
                        <div className="flex items-center gap-4">
                          <div className="flex-1 grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-bold text-zinc-500 mb-1">NAME</label>
                              <input
                                type="text"
                                value={member.name}
                                onChange={(e) => updateTeamMember(member.id, 'name', e.target.value)}
                                placeholder="Team member name"
                                className="w-full p-2 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-600 focus:border-red-600 focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-zinc-500 mb-1">ROLE</label>
                              <input
                                type="text"
                                value={member.role}
                                onChange={(e) => updateTeamMember(member.id, 'role', e.target.value)}
                                placeholder="Role or function"
                                className="w-full p-2 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-600 focus:border-red-600 focus:outline-none"
                              />
                            </div>
                          </div>
                          <button
                            onClick={() => removeTeamMember(member.id)}
                            className="p-2 text-zinc-500 hover:text-red-500 transition-colors"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </div>
                    ))}

                    {teamMembers.length === 0 && (
                      <div className="border-2 border-dashed border-zinc-800 p-8 text-center">
                        <p className="text-zinc-500 mb-4">No team members added yet</p>
                        <button
                          onClick={addTeamMember}
                          className="bg-red-600 px-6 py-3 font-bold hover:bg-red-700 transition-colors"
                        >
                          ADD FIRST MEMBER
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {teamMembers.length > 0 && (
                  <div className="border border-zinc-800 p-6 bg-zinc-950">
                    <h3 className="font-bold mb-3">ASSESSMENT PREVIEW</h3>
                    <p className="text-sm text-zinc-400 mb-4">
                      Each team member will be assessed individually through 5 problem-solving scenarios.
                      The assessment takes about 3-5 minutes per person.
                    </p>
                    <div className="text-sm text-zinc-500">
                      <div>• Total assessment time: {teamMembers.length * 4} minutes (estimated)</div>
                      <div>• {teamMembers.length} team members</div>
                      <div>• 5 scenarios each</div>
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <button
                    onClick={() => {
                      if (teamMembers.length > 0 && teamMembers.every(m => m.name && m.role)) {
                        setCurrentStep('assessment');
                      }
                    }}
                    disabled={teamMembers.length === 0 || !teamMembers.every(m => m.name && m.role) || !teamName}
                    className={`px-8 py-4 text-lg font-black transition-colors ${
                      teamMembers.length > 0 && teamMembers.every(m => m.name && m.role) && teamName
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
                    }`}
                  >
                    START TEAM ASSESSMENT →
                  </button>
                  {(teamMembers.length === 0 || !teamMembers.every(m => m.name && m.role) || !teamName) && (
                    <p className="text-zinc-500 text-sm mt-2">
                      Complete team name and all member details to continue
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  // ASSESSMENT SCREEN
  if (currentStep === 'assessment') {
    const currentMember = teamMembers[currentMemberIndex];
    const question = assessmentQuestions[currentQuestion];

    if (!currentMember || !question) {
      setCurrentStep('mapping');
      return null;
    }

    const totalQuestions = teamMembers.length * assessmentQuestions.length;
    const completedQuestions = currentMemberIndex * assessmentQuestions.length + currentQuestion;
    const progressPercent = Math.round((completedQuestions / totalQuestions) * 100);

    return (
      <>
        <SEOHead
          title={`Assessing ${currentMember.name} - Team Composition Map | IMAGINATION G`}
          description={`Work style assessment for ${currentMember.name}`}
        />

        <div className="min-h-screen bg-black text-white">
          <Navigation />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-4xl mx-auto">
              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-sm text-zinc-500">
                      MEMBER {currentMemberIndex + 1} OF {teamMembers.length} • QUESTION {currentQuestion + 1} OF {assessmentQuestions.length}
                    </span>
                    <div className="text-lg font-bold text-zinc-400">{currentMember.name}</div>
                    <div className="text-sm text-zinc-600">{currentMember.role}</div>
                  </div>
                  <span className="text-sm text-zinc-500">
                    {progressPercent}% COMPLETE
                  </span>
                </div>
                <div className="h-2 bg-zinc-900 rounded">
                  <div
                    className="h-2 bg-red-600 rounded transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Scenario */}
              <div className="text-center mb-12">
                <div className="inline-block mb-6 text-yellow-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                  {question.scenario}
                </div>

                <h2 className="text-2xl md:text-3xl font-black mb-8 leading-tight">
                  {question.situation}
                </h2>

                <p className="text-zinc-400 mb-8">
                  How would <strong>{currentMember.name}</strong> most likely approach this situation?
                </p>
              </div>

              {/* Options */}
              <div className="grid gap-4">
                {question.options.map((option, index) => {
                  const orientationLabel = option.orientation === 'field' ? 'FIELD' : 'PARTICLE';
                  const workTypeLabel = option.workType === 'signal' ? 'SIGNAL' : 'STRUCTURE';
                  const colorClass = option.orientation === 'field'
                    ? (option.workType === 'signal' ? 'green' : 'blue')
                    : (option.workType === 'signal' ? 'yellow' : 'red');

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(option)}
                      className={`group border-2 border-${colorClass}-600 p-6 hover:bg-${colorClass}-600 transition-all text-left`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`px-2 py-1 border border-${colorClass}-600 bg-zinc-950 text-xs font-mono flex-shrink-0`}>
                          {orientationLabel} + {workTypeLabel}
                        </div>
                        <div className="flex-1">
                          <p className="text-lg group-hover:text-black transition-colors">
                            {option.text}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 text-center text-zinc-500 text-sm">
                Choose the approach that best matches {currentMember.name}'s natural problem-solving style
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  // MAPPING SCREEN (intermediate step showing team composition)
  if (currentStep === 'mapping') {
    const { styleCounts, membersByStyle } = calculateTeamComposition();

    return (
      <>
        <SEOHead
          title="Team Composition Analysis | IMAGINATION G"
          description="Analyzing your team's work style composition and generating optimization recommendations"
        />

        <div className="min-h-screen bg-black text-white">
          <Navigation />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  MAPPING COMPLETE
                </div>

                <h1 className="text-4xl md:text-5xl font-black mb-6">
                  {teamName.toUpperCase()}<br />COMPOSITION MAP<span className="text-red-600">.</span>
                </h1>
              </div>

              {/* Team Composition Overview */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {workStyles.map((style) => {
                  const count = styleCounts[style.id] || 0;
                  const percentage = teamMembers.length > 0 ? Math.round((count / teamMembers.length) * 100) : 0;
                  return (
                    <div key={style.id} className={`border-2 border-${style.color}-600 p-6 bg-zinc-950`}>
                      <div className="text-center mb-4">
                        <h3 className={`text-lg font-black text-${style.color}-400 mb-1`}>{style.name}</h3>
                        <div className="text-xs text-zinc-500 mb-2">{style.orientation} + {style.workType}</div>
                        <div className="text-3xl font-black">{count}</div>
                        <div className="text-sm text-zinc-400">{percentage}% of team</div>
                      </div>

                      {membersByStyle[style.id]?.length > 0 && (
                        <div className="space-y-2">
                          {membersByStyle[style.id].map((member, index) => (
                            <div key={index} className="text-xs bg-black bg-opacity-50 p-2 rounded">
                              <div className="font-bold">{member.name}</div>
                              <div className="text-zinc-400">{member.role}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="text-center">
                <button
                  onClick={() => setCurrentStep('results')}
                  className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
                >
                  VIEW OPTIMIZATION RECOMMENDATIONS →
                </button>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  // RESULTS SCREEN
  const { styleCounts, membersByStyle } = calculateTeamComposition();
  const analysis = getTeamAnalysis();

  return (
    <>
      <SEOHead
        title={`${teamName} Team Composition Analysis Results | IMAGINATION G`}
        description="Complete team work style analysis with task optimization and composition recommendations"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation />

        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Team Overview */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-black mb-6">
                {teamName.toUpperCase()}<br />OPTIMIZATION<span className="text-red-600">.</span>
              </h1>
              <p className="text-xl text-zinc-400">
                Complete work style analysis with task assignments and team optimization strategies
              </p>
            </div>

            {/* Team Strengths & Gaps */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {analysis.filter(r => r.type === 'strength').map((rec, index) => (
                <div key={index} className="border-2 border-green-600 p-8 bg-zinc-950">
                  <h3 className="text-2xl font-black text-green-400 mb-4">{rec.title}</h3>
                  <p className="text-green-200 mb-4">{rec.description}</p>
                  {rec.gpiFit && (
                    <p className="text-sm text-green-300 mb-4 italic">{rec.gpiFit}</p>
                  )}
                  <div>
                    <h4 className="font-bold text-white mb-3">OPTIMAL TASKS:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {rec.tasks?.map((task, taskIndex) => (
                        <div key={taskIndex} className="text-sm bg-green-900 bg-opacity-50 p-2 rounded">
                          {task}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {analysis.filter(r => r.type === 'gap').map((rec, index) => (
                <div key={index} className="border-2 border-red-600 p-8 bg-zinc-950">
                  <h3 className="text-2xl font-black text-red-400 mb-4">{rec.title}</h3>
                  <p className="text-red-200 mb-6">{rec.description}</p>
                  <div>
                    <h4 className="font-bold text-white mb-3">RECOMMENDED ACTION:</h4>
                    <p className="text-sm bg-red-900 bg-opacity-50 p-3 rounded">
                      {rec.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Task Assignment Matrix */}
            <div className="bg-zinc-950 border border-zinc-800 p-8 mb-12">
              <h2 className="text-2xl font-black mb-6">TASK ASSIGNMENT MATRIX</h2>
              <div className="grid lg:grid-cols-4 gap-6">
                {workStyles.map((style) => {
                  const members = membersByStyle[style.id] || [];
                  return (
                    <div key={style.id} className="border border-zinc-700 p-4">
                      <h3 className={`font-black text-${style.color}-400 mb-1`}>
                        {style.name} ({members.length})
                      </h3>
                      <p className="text-xs text-zinc-500 mb-3">{style.orientation} + {style.workType}</p>

                      <div className="mb-4">
                        <h4 className="text-xs font-bold text-zinc-500 mb-2">TEAM MEMBERS:</h4>
                        {members.length > 0 ? (
                          <div className="space-y-1">
                            {members.map((member, index) => (
                              <div key={index} className="text-xs">
                                <div className="font-bold">{member.name}</div>
                                <div className="text-zinc-500">{member.role}</div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-xs text-zinc-600 italic">No team members</div>
                        )}
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-zinc-500 mb-2">BEST FOR:</h4>
                        <div className="space-y-1">
                          {style.bestFor.map((task, index) => (
                            <div key={index} className="text-xs text-zinc-400">• {task}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Individual Style Details */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {teamMembers.map((member) => {
                const result = styleResults[member.id];
                const style = workStyles.find(s => s.id === result?.style);
                if (!style) return null;

                return (
                  <div key={member.id} className={`border border-${style.color}-600 p-6 bg-zinc-950`}>
                    <div className="mb-4">
                      <h3 className="font-black text-white">{member.name}</h3>
                      <div className="text-sm text-zinc-400">{member.role}</div>
                      <div className={`text-lg font-black text-${style.color}-400 mt-2`}>
                        {style.name}
                      </div>
                      <div className="text-xs text-zinc-500">{style.orientation} + {style.workType}</div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-xs font-bold text-zinc-400 mb-2">STRENGTHS:</h4>
                      <div className="space-y-1">
                        {style.strengths.map((strength, index) => (
                          <div key={index} className="text-xs">• {strength}</div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-xs font-bold text-zinc-400 mb-2">CHALLENGES:</h4>
                      <div className="space-y-1">
                        {style.challenges.map((challenge, index) => (
                          <div key={index} className="text-xs text-zinc-500">• {challenge}</div>
                        ))}
                      </div>
                    </div>

                    <div className="text-xs text-zinc-500 italic border-t border-zinc-800 pt-3 mt-3">
                      {style.gpiFit}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Items */}
            <div className="bg-black border-4 border-red-600 p-8 mb-8">
              <h2 className="text-2xl font-black text-red-600 mb-6">IMMEDIATE ACTION ITEMS</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-black text-white mb-3">TASK OPTIMIZATION:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Match upcoming projects to team work style strengths</li>
                    <li>• Pair Field and Particle team members for balanced execution</li>
                    <li>• Ensure Signal and Structure work gets proper coverage</li>
                    <li>• Use GPI fit guidance when assigning to client projects</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-black text-white mb-3">TEAM DEVELOPMENT:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Schedule monthly retrospectives on work style dynamics</li>
                    <li>• Hire or train to fill identified composition gaps</li>
                    <li>• Create mentorship pairs across different work styles</li>
                    <li>• Use work style insights for better conflict resolution</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Export and Next Steps */}
            <div className="grid md:grid-cols-3 gap-6">
              <button
                onClick={() => {
                  const reportData = { teamName, teamMembers, styleResults, analysis };
                  console.log('Team Composition Report:', reportData);
                }}
                className="border border-zinc-700 p-6 text-center hover:border-zinc-500 transition-colors"
              >
                <Download className="mx-auto mb-3" size={24} />
                <h4 className="font-black mb-2">DOWNLOAD REPORT</h4>
                <p className="text-sm text-zinc-400">Get PDF summary for team sharing</p>
              </button>

              <a
                href="/diagnostic"
                className="border border-blue-600 p-6 text-center hover:bg-blue-600 transition-colors"
              >
                <Target className="mx-auto mb-3" size={24} />
                <h4 className="font-black mb-2">FULL GPI DIAGNOSTIC</h4>
                <p className="text-sm text-zinc-400">Assess your organization's GPI score</p>
              </a>

              <button
                onClick={() => {
                  setCurrentStep('intro');
                  setTeamMembers([]);
                  setStyleResults({});
                  setCurrentMemberIndex(0);
                  setCurrentQuestion(0);
                  setTeamName('');
                }}
                className="border border-zinc-700 p-6 text-center hover:border-zinc-500 transition-colors"
              >
                <RefreshCw className="mx-auto mb-3" size={24} />
                <h4 className="font-black mb-2">MAP ANOTHER TEAM</h4>
                <p className="text-sm text-zinc-400">Assess different team composition</p>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TeamCompositionMapPage;
