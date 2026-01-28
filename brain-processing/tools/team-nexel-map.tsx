import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { Users, ArrowRight, ArrowLeft, Target, Zap, RefreshCw, Network, CheckCircle, Plus, X, Download } from 'lucide-react';

const TeamNexelMapPage = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'setup' | 'assessment' | 'mapping' | 'results'>('intro');
  const [teamMembers, setTeamMembers] = useState<Array<{id: string, name: string, role: string}>>([]);
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
  const [nexelResults, setNexelResults] = useState<Record<string, {nexel: string, scores: Record<string, number>}>>({});
  const [teamName, setTeamName] = useState('');

  const nexelTypes = [
    {
      id: 'kithara',
      name: 'KITHARA',
      subtitle: 'The Router',
      description: 'Finds alternative paths around constraints',
      strengths: ['Creative problem-solving', 'Adaptability', 'Resource optimization'],
      challenges: ['May avoid direct confrontation', 'Can overcomplicate simple solutions'],
      bestFor: ['Innovation projects', 'Process optimization', 'Crisis navigation'],
      color: 'blue'
    },
    {
      id: 'morrin',
      name: 'MORRIN',
      subtitle: 'The Breaker',
      description: 'Pushes through barriers with force and persistence',
      strengths: ['Decisive action', 'Barrier breaking', 'Momentum creation'],
      challenges: ['May miss subtle solutions', 'Can create unnecessary conflict'],
      bestFor: ['Execution challenges', 'Deadline pressure', 'Breaking deadlocks'],
      color: 'red'
    },
    {
      id: 'pilor',
      name: 'PILOR',
      subtitle: 'The Connector',
      description: 'Links people, ideas, and resources together',
      strengths: ['Relationship building', 'Pattern recognition', 'System thinking'],
      challenges: ['May delay decisions for consensus', 'Can get lost in complexity'],
      bestFor: ['Team coordination', 'Strategic planning', 'Stakeholder alignment'],
      color: 'green'
    },
    {
      id: 'zelith',
      name: 'ZELITH',
      subtitle: 'The Clarifier',
      description: 'Cuts through confusion to find core truth',
      strengths: ['Problem definition', 'Clear communication', 'Priority setting'],
      challenges: ['May oversimplify complex issues', 'Can be seen as rigid'],
      bestFor: ['Requirements gathering', 'Decision frameworks', 'Communication'],
      color: 'yellow'
    }
  ];

  const assessmentQuestions = [
    {
      id: 1,
      scenario: "RESOURCE CONSTRAINT",
      situation: "Your team needs to deliver a project but lacks a critical skill/resource",
      options: [
        { nexel: 'kithara', text: 'Find creative workarounds or alternative approaches', points: 3 },
        { nexel: 'morrin', text: 'Push harder with existing resources to make it work', points: 2 },
        { nexel: 'pilor', text: 'Network to find people who can help or collaborate', points: 3 },
        { nexel: 'zelith', text: 'Clarify exactly what\'s needed and negotiate scope', points: 2 }
      ]
    },
    {
      id: 2,
      scenario: "CONFLICTING REQUIREMENTS",
      situation: "Two stakeholders want completely different outcomes from the same project",
      options: [
        { nexel: 'kithara', text: 'Design a solution that creatively satisfies both', points: 2 },
        { nexel: 'morrin', text: 'Force a decision and move forward quickly', points: 2 },
        { nexel: 'pilor', text: 'Facilitate conversations until they find common ground', points: 3 },
        { nexel: 'zelith', text: 'Define clear criteria for choosing between options', points: 3 }
      ]
    },
    {
      id: 3,
      scenario: "TECHNICAL ROADBLOCK",
      situation: "Your team hits a technical problem that\'s blocking all progress",
      options: [
        { nexel: 'kithara', text: 'Explore completely different technical approaches', points: 3 },
        { nexel: 'morrin', text: 'Dedicate more time/people to solve the current approach', points: 3 },
        { nexel: 'pilor', text: 'Bring in external expertise or form partnerships', points: 2 },
        { nexel: 'zelith', text: 'Clearly define the problem and research proven solutions', points: 2 }
      ]
    },
    {
      id: 4,
      scenario: "TEAM COORDINATION",
      situation: "Multiple team members are working on overlapping tasks inefficiently",
      options: [
        { nexel: 'kithara', text: 'Redesign the workflow to eliminate overlaps', points: 2 },
        { nexel: 'morrin', text: 'Assign clear ownership and push for execution', points: 2 },
        { nexel: 'pilor', text: 'Create systems for better communication and coordination', points: 3 },
        { nexel: 'zelith', text: 'Define roles and responsibilities crystal clearly', points: 3 }
      ]
    },
    {
      id: 5,
      scenario: "URGENT DEADLINE",
      situation: "A critical deadline moved up by 50% and scope hasn\'t changed",
      options: [
        { nexel: 'kithara', text: 'Find faster methods or shortcuts to achieve the same goal', points: 2 },
        { nexel: 'morrin', text: 'Rally the team to work harder/longer to hit the deadline', points: 3 },
        { nexel: 'pilor', text: 'Coordinate with other teams to get additional support', points: 2 },
        { nexel: 'zelith', text: 'Negotiate scope reduction based on clear priorities', points: 3 }
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

  const handleAnswerSelect = (questionId: number, selectedOption: any) => {
    const currentMember = teamMembers[currentMemberIndex];
    if (!currentMember) return;

    const currentScores = nexelResults[currentMember.id]?.scores || {
      kithara: 0, morrin: 0, pilor: 0, zelith: 0
    };

    const newScores = { ...currentScores };
    newScores[selectedOption.nexel] += selectedOption.points;

    setNexelResults(prev => ({
      ...prev,
      [currentMember.id]: {
        nexel: '',
        scores: newScores
      }
    }));

    // Move to next question or next member
    if (questionId < assessmentQuestions.length) {
      // Continue with current member
    } else {
      // Determine nexel for current member
      const topNexel = Object.entries(newScores).reduce((a, b) => 
        newScores[a[0]] > newScores[b[0]] ? a : b
      )[0];

      setNexelResults(prev => ({
        ...prev,
        [currentMember.id]: {
          nexel: topNexel,
          scores: newScores
        }
      }));

      // Move to next member or results
      if (currentMemberIndex < teamMembers.length - 1) {
        setCurrentMemberIndex(currentMemberIndex + 1);
      } else {
        setCurrentStep('mapping');
      }
    }
  };

  const calculateTeamComposition = () => {
    const nexelCounts = { kithara: 0, morrin: 0, pilor: 0, zelith: 0 };
    const membersByNexel: Record<string, Array<{name: string, role: string}>> = {
      kithara: [], morrin: [], pilor: [], zelith: []
    };

    teamMembers.forEach(member => {
      const result = nexelResults[member.id];
      if (result) {
        nexelCounts[result.nexel as keyof typeof nexelCounts]++;
        membersByNexel[result.nexel].push({ name: member.name, role: member.role });
      }
    });

    return { nexelCounts, membersByNexel };
  };

  const getTaskRecommendations = () => {
    const { nexelCounts } = calculateTeamComposition();
    const total = teamMembers.length;
    
    const recommendations = [];

    if (nexelCounts.kithara / total >= 0.4) {
      recommendations.push({
        type: 'strength',
        title: 'INNOVATION POWERHOUSE',
        description: 'Your team excels at creative problem-solving and finding novel approaches.',
        tasks: ['Research & development', 'Process innovation', 'Crisis navigation', 'Product design']
      });
    }

    if (nexelCounts.morrin / total >= 0.4) {
      recommendations.push({
        type: 'strength',
        title: 'EXECUTION MACHINE',
        description: 'Your team can break through barriers and deliver under pressure.',
        tasks: ['Critical deadlines', 'Implementation projects', 'Performance optimization', 'Change management']
      });
    }

    if (nexelCounts.pilor / total >= 0.4) {
      recommendations.push({
        type: 'strength',
        title: 'COLLABORATION HUB',
        description: 'Your team builds bridges and creates alignment across stakeholders.',
        tasks: ['Cross-functional projects', 'Stakeholder management', 'Strategic planning', 'Partnership development']
      });
    }

    if (nexelCounts.zelith / total >= 0.4) {
      recommendations.push({
        type: 'strength',
        title: 'CLARITY ENGINE',
        description: 'Your team excels at cutting through complexity and defining clear paths.',
        tasks: ['Requirements gathering', 'Process documentation', 'Decision frameworks', 'Quality assurance']
      });
    }

    // Gap analysis
    if (nexelCounts.kithara === 0) {
      recommendations.push({
        type: 'gap',
        title: 'INNOVATION GAP',
        description: 'Consider adding creative problem-solvers for novel challenges.',
        solution: 'Hire Kithara-type contributors or train team in creative thinking methods'
      });
    }

    if (nexelCounts.morrin === 0) {
      recommendations.push({
        type: 'gap',
        title: 'EXECUTION GAP',
        description: 'May struggle with barrier-breaking and urgent delivery.',
        solution: 'Add direct action-takers or establish clear escalation processes'
      });
    }

    return recommendations;
  };

  // INTRO SCREEN
  if (currentStep === 'intro') {
    return (
      <>
        <SEOHead
          title="Team Nexel Map - Collaborative Assessment Tool | IMAGINATION G"
          description="Map your team's collective problem-solving styles. Optimize task assignments and identify team composition gaps."
          ogImage="/images/og-team-nexel-map.svg"
        />
        
        <div className="min-h-screen bg-black text-white">
          <Navigation />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                TEAM NEXEL MAP: READY
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                TEAM NEXEL<br />MAP<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-12 max-w-2xl">
                Map your team's collective problem-solving DNA. Discover each member's nexel type, 
                optimize task assignments, and identify team composition gaps.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="border border-zinc-800 p-6 bg-zinc-950">
                  <h3 className="text-xl font-black mb-4 text-red-600">WHAT YOU'LL MAP</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Users className="text-blue-500" size={16} />
                      <span className="text-sm">Each team member's nexel type</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="text-green-500" size={16} />
                      <span className="text-sm">Optimal task-person matching</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Network className="text-purple-500" size={16} />
                      <span className="text-sm">Team composition analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="text-yellow-500" size={16} />
                      <span className="text-sm">Collaboration optimization strategies</span>
                    </div>
                  </div>
                </div>

                <div className="border border-zinc-800 p-6 bg-zinc-950">
                  <h3 className="text-xl font-black mb-4 text-blue-600">4 NEXEL TYPES</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-bold text-blue-400">KITHARA:</span> Creative routers who find alternative paths
                    </div>
                    <div>
                      <span className="font-bold text-red-400">MORRIN:</span> Direct breakers who push through barriers
                    </div>
                    <div>
                      <span className="font-bold text-green-400">PILOR:</span> System connectors who link everything together
                    </div>
                    <div>
                      <span className="font-bold text-yellow-400">ZELITH:</span> Clear clarifiers who cut through confusion
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
                    <h4 className="font-bold mb-2">MAP TYPES</h4>
                    <p className="text-zinc-400">Visualize team nexel composition</p>
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
          title="Team Setup - Nexel Mapping | IMAGINATION G"
          description="Add your team members for nexel assessment"
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
    const memberResults = nexelResults[currentMember?.id];
    const currentQuestionIndex = memberResults ? 
      Math.max(0, Object.keys(memberResults.scores || {}).length) : 0;
    const currentQuestion = assessmentQuestions[currentQuestionIndex];

    if (!currentMember || !currentQuestion) {
      setCurrentStep('mapping');
      return null;
    }

    return (
      <>
        <SEOHead
          title={`Assessing ${currentMember.name} - Team Nexel Map | IMAGINATION G`}
          description={`Nexel assessment for ${currentMember.name}`}
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
                      MEMBER {currentMemberIndex + 1} OF {teamMembers.length} • QUESTION {currentQuestionIndex + 1} OF {assessmentQuestions.length}
                    </span>
                    <div className="text-lg font-bold text-zinc-400">{currentMember.name}</div>
                    <div className="text-sm text-zinc-600">{currentMember.role}</div>
                  </div>
                  <span className="text-sm text-zinc-500">
                    {Math.round(((currentMemberIndex * assessmentQuestions.length + currentQuestionIndex) / (teamMembers.length * assessmentQuestions.length)) * 100)}% COMPLETE
                  </span>
                </div>
                <div className="h-2 bg-zinc-900 rounded">
                  <div 
                    className="h-2 bg-red-600 rounded transition-all duration-300"
                    style={{ width: `${((currentMemberIndex * assessmentQuestions.length + currentQuestionIndex) / (teamMembers.length * assessmentQuestions.length)) * 100}%` }}
                  />
                </div>
              </div>

              {/* Scenario */}
              <div className="text-center mb-12">
                <div className="inline-block mb-6 text-yellow-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                  {currentQuestion.scenario}
                </div>

                <h2 className="text-2xl md:text-3xl font-black mb-8 leading-tight">
                  {currentQuestion.situation}
                </h2>

                <p className="text-zinc-400 mb-8">
                  How would <strong>{currentMember.name}</strong> most likely approach this situation?
                </p>
              </div>

              {/* Options */}
              <div className="grid gap-4">
                {currentQuestion.options.map((option, index) => {
                  const nexelType = nexelTypes.find(n => n.id === option.nexel);
                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(currentQuestion.id, option)}
                      className={`group border-2 border-${nexelType?.color}-600 p-6 hover:bg-${nexelType?.color}-600 transition-all text-left`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`px-3 py-1 border border-${nexelType?.color}-600 bg-${nexelType?.color}-950 text-xs font-mono flex-shrink-0`}>
                          {nexelType?.name}
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
    const { nexelCounts, membersByNexel } = calculateTeamComposition();

    return (
      <>
        <SEOHead
          title="Team Composition Analysis | IMAGINATION G"
          description="Analyzing your team's nexel composition and generating optimization recommendations"
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
                  {teamName.toUpperCase()}<br />NEXEL MAP<span className="text-red-600">.</span>
                </h1>
              </div>

              {/* Team Composition Overview */}
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {nexelTypes.map((type) => {
                  const count = nexelCounts[type.id as keyof typeof nexelCounts];
                  const percentage = Math.round((count / teamMembers.length) * 100);
                  return (
                    <div key={type.id} className={`border-2 border-${type.color}-600 p-6 bg-${type.color}-950`}>
                      <div className="text-center mb-4">
                        <h3 className={`text-xl font-black text-${type.color}-400 mb-2`}>{type.name}</h3>
                        <div className="text-3xl font-black">{count}</div>
                        <div className="text-sm text-zinc-400">{percentage}% of team</div>
                      </div>
                      
                      {membersByNexel[type.id].length > 0 && (
                        <div className="space-y-2">
                          {membersByNexel[type.id].map((member, index) => (
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
  const { nexelCounts, membersByNexel } = calculateTeamComposition();
  const recommendations = getTaskRecommendations();

  return (
    <>
      <SEOHead
        title={`${teamName} Team Nexel Analysis Results | IMAGINATION G`}
        description="Complete team nexel analysis with task optimization and composition recommendations"
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
                Complete nexel analysis with task assignments and team optimization strategies
              </p>
            </div>

            {/* Team Strengths & Gaps */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {recommendations.filter(r => r.type === 'strength').map((rec, index) => (
                <div key={index} className="border-2 border-green-600 p-8 bg-green-950">
                  <h3 className="text-2xl font-black text-green-400 mb-4">{rec.title}</h3>
                  <p className="text-green-200 mb-6">{rec.description}</p>
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

              {recommendations.filter(r => r.type === 'gap').map((rec, index) => (
                <div key={index} className="border-2 border-red-600 p-8 bg-red-950">
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
                {nexelTypes.map((type) => {
                  const members = membersByNexel[type.id];
                  return (
                    <div key={type.id} className="border border-zinc-700 p-4">
                      <h3 className={`font-black text-${type.color}-400 mb-3`}>
                        {type.name} ({members.length})
                      </h3>
                      
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
                          {type.bestFor.map((task, index) => (
                            <div key={index} className="text-xs text-zinc-400">• {task}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Individual Nexel Details */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {teamMembers.map((member) => {
                const result = nexelResults[member.id];
                const nexelType = nexelTypes.find(n => n.id === result?.nexel);
                if (!nexelType) return null;

                return (
                  <div key={member.id} className={`border border-${nexelType.color}-600 p-6 bg-${nexelType.color}-950`}>
                    <div className="mb-4">
                      <h3 className="font-black text-white">{member.name}</h3>
                      <div className="text-sm text-zinc-400">{member.role}</div>
                      <div className={`text-lg font-black text-${nexelType.color}-400 mt-2`}>
                        {nexelType.name} - {nexelType.subtitle}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-xs font-bold text-zinc-400 mb-2">STRENGTHS:</h4>
                      <div className="space-y-1">
                        {nexelType.strengths.map((strength, index) => (
                          <div key={index} className="text-xs">• {strength}</div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-zinc-400 mb-2">CHALLENGES:</h4>
                      <div className="space-y-1">
                        {nexelType.challenges.map((challenge, index) => (
                          <div key={index} className="text-xs text-zinc-500">• {challenge}</div>
                        ))}
                      </div>
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
                    <li>• Match upcoming projects to team nexel strengths</li>
                    <li>• Cross-train team members in complementary nexel approaches</li>
                    <li>• Create nexel-diverse project teams for complex challenges</li>
                    <li>• Document and share individual nexel insights with team</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-black text-white mb-3">TEAM DEVELOPMENT:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Schedule monthly nexel-focused retrospectives</li>
                    <li>• Hire or train to fill identified nexel gaps</li>
                    <li>• Create mentorship pairs across different nexel types</li>
                    <li>• Use nexel insights for better conflict resolution</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Export and Next Steps */}
            <div className="grid md:grid-cols-3 gap-6">
              <button
                onClick={() => {
                  // Implement team report download
                  const reportData = { teamName, teamMembers, nexelResults, recommendations };
                  console.log('Team Nexel Report:', reportData);
                }}
                className="border border-zinc-700 p-6 text-center hover:border-zinc-500 transition-colors"
              >
                <Download className="mx-auto mb-3" size={24} />
                <h4 className="font-black mb-2">DOWNLOAD REPORT</h4>
                <p className="text-sm text-zinc-400">Get PDF summary for team sharing</p>
              </button>
              
              <a
                href="/tools/micro-interventions"
                className="border border-blue-600 p-6 text-center hover:bg-blue-600 transition-colors"
              >
                <Target className="mx-auto mb-3" size={24} />
                <h4 className="font-black mb-2">TEAM INTERVENTIONS</h4>
                <p className="text-sm text-zinc-400">Daily practices for nexel optimization</p>
              </a>
              
              <button
                onClick={() => {
                  setCurrentStep('intro');
                  setTeamMembers([]);
                  setNexelResults({});
                  setCurrentMemberIndex(0);
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

export default TeamNexelMapPage;