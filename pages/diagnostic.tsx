import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import { GPIRadarChart } from '../components/gpi';
import { ArrowLeft, Zap, Clock, Brain, Users, Gauge, Lock, DollarSign, Lightbulb } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  calculateFullGPI,
  getStateLabel,
  getStateColor,
  GPI_DIMENSIONS,
  getOrderedDimensions,
} from '../lib/gpi-calculator';
import { getIndustryList } from '../lib/gpi-industry-benchmarks';
import { getQuestionExample } from '../lib/gpi-industry-examples';
import type { DiagnosticAnswer, GPIFullResult, DimensionKey } from '../lib/gpi-types';

// Dimension interpretations based on score
const getDimensionInsight = (dimension: DimensionKey, score: number): { text: string; subtext: string } => {
  const insights: Record<DimensionKey, { low: { text: string; subtext: string }; mid: { text: string; subtext: string }; high: { text: string; subtext: string } }> = {
    DECISION_LATENCY: {
      low: { text: "Decisions happen at the speed of information", subtext: "Authority sits close to the problem. No approval chain between signal and action." },
      mid: { text: "Some decisions flow, some stall", subtext: "Smaller calls move fast. Anything significant starts traveling upward and slowing down." },
      high: { text: "Decisions are metabolically expensive", subtext: "Every choice passes through layers adding time without adding value. The org burns energy just to move." }
    },
    ERROR_CORRECTION: {
      low: { text: "The system catches its own mistakes", subtext: "Wrong turns surface fast. There's no political cost to reversing, so reversals happen." },
      mid: { text: "Visible errors get fixed. Hidden ones don't.", subtext: "The org corrects what it can see. What's buried in process or protected by seniority compounds." },
      high: { text: "Sunk cost has veto power", subtext: "Mistakes become commitments. Changing course reads as admitting failure, so the org defends what isn't working." }
    },
    KNOWLEDGE_LOCATION: {
      low: { text: "The right person knows and is reachable", subtext: "Operational knowledge is distributed and findable. Nobody's head is the single point of failure." },
      mid: { text: "Knowledge clusters around people and teams", subtext: "Some information moves freely. Some of it lives in relationships and informal networks with limited access." },
      high: { text: "Knowledge is a currency here", subtext: "Information concentrates where it protects status. Silos aren't accidents, they're architecture. The org can't see itself clearly from inside." }
    },
    KNOWLEDGE_VELOCITY: {
      low: { text: "Signal reaches decision-makers before it decays", subtext: "What the front line sees, leadership hears quickly. Bad news travels as fast as good news." },
      mid: { text: "Information moves, but it gets filtered", subtext: "Some signal gets through intact. Some gets softened, reframed, or timed for political convenience before it arrives." },
      high: { text: "Leadership is running on old data", subtext: "By the time information reaches the people who need it, context has shifted. Decisions get made on what was true, not what is." }
    },
    TALENT_FLOW: {
      low: { text: "People move toward the hardest problems", subtext: "Strong performers go where they're needed. Titles don't outweigh outcomes." },
      mid: { text: "Mobility exists but org charts create drag", subtext: "People can move, but there's friction. The structure shapes who goes where more than the work does." },
      high: { text: "Roles outlast their usefulness", subtext: "People serve positions, not problems. The best performers eventually see higher leverage somewhere else." }
    },
    STRUCTURAL_LOCKIN: {
      low: { text: "The structure bends when reality requires it", subtext: "Pivoting doesn't require a reorganization. Process is a tool, not a law." },
      mid: { text: "Some structure helps. Some structure just persists.", subtext: "Certain processes earn their place. Others exist because dismantling them is harder than tolerating them." },
      high: { text: "The org is metabolically committed to its current form", subtext: "Changing how work gets done means changing the org itself. Expensive, slow, and politically dangerous. So it mostly doesn't happen." }
    },
    CAPITAL_INTENSITY: {
      low: { text: "Resources follow results", subtext: "Spending is tied to outcomes. Money moves when the work moves. Budgets aren't defended, they're allocated." },
      mid: { text: "Some spending is strategic. Some is inertia.", subtext: "Resources go to the right places often enough. But some capital is locked in legacy commitments waiting for a fresh look." },
      high: { text: "Budget cycles shape strategy more than strategy shapes budgets", subtext: "Capital is territorial. Defending last year's allocation takes as much energy as doing the work. Efficiency is a threat to the people who benefit from the current structure." }
    }
  };

  const level = score <= 3 ? 'low' : score <= 6 ? 'mid' : 'high';
  return insights[dimension][level];
};

const DiagnosticPage = () => {
  useScrollReveal();
  const [currentStep, setCurrentStep] = useState<'intro' | 'questions' | 'analysis' | 'results'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<number, 'yes' | 'no'>>({});
  const [selectedIndustry, setSelectedIndustry] = useState<string>('Technology/Software');
  const [analysisStep, setAnalysisStep] = useState(0);
  const [gpiResults, setGpiResults] = useState<GPIFullResult | null>(null);

  // Save results form state
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [saveForm, setSaveForm] = useState({ name: '', email: '', city: '', company: '' });
  const [sendEmail, setSendEmail] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [savedEmail, setSavedEmail] = useState('');
  const [saveError, setSaveError] = useState<string | null>(null);

  const industries = getIndustryList();

  // 32 diagnostic questions
  const questions = [
    // DECISION_LATENCY (5)
    { id: 1, dimension: "DECISION_LATENCY" as DimensionKey, question: "When a real problem shows up, can the people closest to it make the call?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 2, dimension: "DECISION_LATENCY" as DimensionKey, question: "Do decisions often sit for a week because no one is sure who owns them?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 3, dimension: "DECISION_LATENCY" as DimensionKey, question: "Can your team spend meaningful money without turning it into a senior-leadership event?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 4, dimension: "DECISION_LATENCY" as DimensionKey, question: "Does a normal decision need more than three people to bless it?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 5, dimension: "DECISION_LATENCY" as DimensionKey, question: "When something breaks, does the first useful move usually happen within 24 hours?", yes: "Yes", no: "No", fieldAnswer: true },
    // ERROR_CORRECTION (5)
    { id: 6, dimension: "ERROR_CORRECTION" as DimensionKey, question: "Has your org killed or reversed a meaningful initiative in the last six months?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 7, dimension: "ERROR_CORRECTION" as DimensionKey, question: "Is there a project everyone knows is failing, but it keeps getting protected?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 8, dimension: "ERROR_CORRECTION" as DimensionKey, question: "When the evidence changes, does the plan change quickly too?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 9, dimension: "ERROR_CORRECTION" as DimensionKey, question: "Does 'we already spent too much' keep bad work alive?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 10, dimension: "ERROR_CORRECTION" as DimensionKey, question: "Do the people who disagree with the plan get heard before the plan hardens?", yes: "Yes", no: "No", fieldAnswer: true },
    // KNOWLEDGE_LOCATION (5)
    { id: 11, dimension: "KNOWLEDGE_LOCATION" as DimensionKey, question: "If your three most important operators left, would key knowledge leave with them?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 12, dimension: "KNOWLEDGE_LOCATION" as DimensionKey, question: "Do people find out about decisions affecting their work after the decision is already made?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 13, dimension: "KNOWLEDGE_LOCATION" as DimensionKey, question: "Can people find the current version of how the work is supposed to happen?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 14, dimension: "KNOWLEDGE_LOCATION" as DimensionKey, question: "Do certain people control information others need to do the work?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 15, dimension: "KNOWLEDGE_LOCATION" as DimensionKey, question: "Can frontline knowledge reach leadership without being softened first?", yes: "Yes", no: "No", fieldAnswer: true },
    // KNOWLEDGE_VELOCITY (4)
    { id: 16, dimension: "KNOWLEDGE_VELOCITY" as DimensionKey, question: "Does bad news travel as fast as good news?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 17, dimension: "KNOWLEDGE_VELOCITY" as DimensionKey, question: "Has leadership been surprised by something the front line saw coming?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 18, dimension: "KNOWLEDGE_VELOCITY" as DimensionKey, question: "Do decision-makers see the work as it is now, not as it looked last month?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 19, dimension: "KNOWLEDGE_VELOCITY" as DimensionKey, question: "Does a market or customer shift take more than a month to change priorities?", yes: "Yes", no: "No", fieldAnswer: false },
    // TALENT_FLOW (4)
    { id: 20, dimension: "TALENT_FLOW" as DimensionKey, question: "Do strong people move toward the hardest problems?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 21, dimension: "TALENT_FLOW" as DimensionKey, question: "Is someone clearly in the wrong role, but the system keeps them there?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 22, dimension: "TALENT_FLOW" as DimensionKey, question: "Have strong people left because they could not get useful work done here?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 23, dimension: "TALENT_FLOW" as DimensionKey, question: "Do tenure and relationships outrank results when people move up?", yes: "Yes", no: "No", fieldAnswer: false },
    // STRUCTURAL_LOCKIN (5)
    { id: 24, dimension: "STRUCTURAL_LOCKIN" as DimensionKey, question: "Could your team change how it works within 90 days if reality required it?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 25, dimension: "STRUCTURAL_LOCKIN" as DimensionKey, question: "Do processes survive mostly because they have always been there?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 26, dimension: "STRUCTURAL_LOCKIN" as DimensionKey, question: "Do old systems or vendor choices block moves the business now needs to make?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 27, dimension: "STRUCTURAL_LOCKIN" as DimensionKey, question: "Do recurring meetings stay on the calendar after their original purpose is gone?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 28, dimension: "STRUCTURAL_LOCKIN" as DimensionKey, question: "When something new enters the business, does the existing structure push it back into the old shape?", yes: "Yes", no: "No", fieldAnswer: false },
    // CAPITAL_INTENSITY (4)
    { id: 29, dimension: "CAPITAL_INTENSITY" as DimensionKey, question: "Does year-end spending happen mainly to protect next year's budget?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 30, dimension: "CAPITAL_INTENSITY" as DimensionKey, question: "Is the budget conversation more about defending old allocations than funding current priorities?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 31, dimension: "CAPITAL_INTENSITY" as DimensionKey, question: "Do facilities, equipment, contracts, or inventory force decisions before strategy does?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 32, dimension: "CAPITAL_INTENSITY" as DimensionKey, question: "Are money, people, and attention visibly moving toward the most important work?", yes: "Yes", no: "No", fieldAnswer: true },
  ];

  const handleAnswer = (answer: 'yes' | 'no') => {
    const nextAnswers = { ...answers, [currentQuestion]: answer };
    setAnswers(nextAnswers);
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentStep('analysis');
      runAnalysis(nextAnswers);
    }
  };

  const runAnalysis = (answersSnapshot = answers) => {
    const steps = 9;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setAnalysisStep(step);
      if (step >= steps) {
        clearInterval(interval);
        const diagnosticAnswers: DiagnosticAnswer[] = Object.entries(answersSnapshot).map(([qId, answer]) => {
          const question = questions.find(q => q.id === parseInt(qId));
          return {
            questionId: parseInt(qId),
            answer: answer === 'yes' ? question?.fieldAnswer ?? true : !(question?.fieldAnswer ?? true)
          };
        });
        const results = calculateFullGPI(diagnosticAnswers, selectedIndustry);
        setGpiResults(results);
        setTimeout(() => setCurrentStep('results'), 500);
      }
    }, 350);
  };

  const restartDiagnostic = () => {
    setCurrentStep('intro');
    setCurrentQuestion(1);
    setAnswers({});
    setAnalysisStep(0);
    setGpiResults(null);
    setShowSaveModal(false);
    setSaveForm({ name: '', email: '', city: '', company: '' });
    setSaved(false);
    setSavedEmail('');
    setSaveError(null);
  };

  const handleSaveResults = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!gpiResults || !saveForm.name || !saveForm.email) return;

    setSaving(true);
    setSaveError(null);

    try {
      const response = await fetch('/api/diagnostic-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: saveForm.name,
          email: saveForm.email,
          city: saveForm.city,
          company: saveForm.company,
          gpiScore: gpiResults.overall,
          stage: gpiResults.state === 'field' ? 'Field' : gpiResults.state === 'transitioning' ? 'Transitioning' : 'Particle',
          dimensions: {
            decisionLatency: gpiResults.dimensions.find(d => d.dimension === 'DECISION_LATENCY')?.score || 0,
            errorCorrection: gpiResults.dimensions.find(d => d.dimension === 'ERROR_CORRECTION')?.score || 0,
            knowledgeLocation: gpiResults.dimensions.find(d => d.dimension === 'KNOWLEDGE_LOCATION')?.score || 0,
            talentFlow: gpiResults.dimensions.find(d => d.dimension === 'TALENT_FLOW')?.score || 0,
            knowledgeVelocity: gpiResults.dimensions.find(d => d.dimension === 'KNOWLEDGE_VELOCITY')?.score || 0,
            structuralLockIn: gpiResults.dimensions.find(d => d.dimension === 'STRUCTURAL_LOCKIN')?.score || 0,
            capitalIntensity: gpiResults.dimensions.find(d => d.dimension === 'CAPITAL_INTENSITY')?.score || 0,
          },
          industry: selectedIndustry,
          sendEmail,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.error || 'Failed to send');
      }

      setSavedEmail(data?.emailTo || saveForm.email);
      setSaved(true);
      setShowSaveModal(false);
    } catch (error) {
      setSaveError(error instanceof Error ? error.message : 'Failed to send the read. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  // INTRO
  if (currentStep === 'intro') {
    return (
      <>
        <SEOHead
          title="Signal | GPI Studio"
          description="A short first rep for finding where work slows down, repeats, or gets protected by the system."
        />
        <div className="gpi-page">
          <Navigation currentPage="studio" />
          <section className="gpi-shell py-14 md:py-20">
            <div className="max-w-4xl">

              {/* Hero */}
              <div className="mb-12">
                <div className="gpi-kicker mb-6 fade-up">
                  Signal
                </div>
                <div className="grid gap-8 md:grid-cols-[1.1fr_0.65fr] md:items-start fade-up">
                  <div>
                    <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-headline md:text-6xl">
                      Find the first place the work is spending energy.
                    </h1>
                    <div className="gpi-prose mt-6 max-w-2xl text-stone-800">
                      <p>
                        Most growing pains start quietly. A decision keeps circling back, a mistake gets protected, a workaround becomes normal, or the person with the answer stays too far from the work.
                      </p>
                      <p>
                        Signal gives you a first rep. It points to the part of the system using the most energy, then gives you a cleaner place to start.
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-stone-300 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                    <div className="text-xs font-mono font-bold uppercase text-stone-600 mb-2">Industry context</div>
                    <select
                      value={selectedIndustry}
                      onChange={(e) => setSelectedIndustry(e.target.value)}
                      className="w-full border-b border-stone-400 bg-transparent py-2 text-sm text-stone-950 focus:outline-none"
                    >
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                    <p className="text-sm text-stone-600 mt-3">
                      Used as a comparison point. The useful part is still the pattern inside your own system.
                    </p>
                    <div className="mt-6 border-t border-stone-300 pt-4 text-sm text-stone-700">
                      32 yes/no questions. No email required to see the read.
                    </div>
                  </div>
                </div>
              </div>

              {/* Scale */}
              <div className="gpi-rule py-8 fade-up">
                <div className="grid gap-6 md:grid-cols-[0.7fr_1.3fr]">
                  <div>
                    <div className="gpi-kicker mb-3">Reading The Score</div>
                    <p className="text-stone-700">
                      Lower scores mean the work can still move. Higher scores mean the current structure is charging a toll.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="border-t border-stone-300 pt-3">
                      <div className="font-mono text-sm font-bold text-stone-950">1-3</div>
                      <div className="mt-1 font-bold">Field</div>
                      <p className="mt-2 text-sm text-stone-600">Signal reaches action without much ceremony.</p>
                    </div>
                    <div className="border-t border-stone-300 pt-3">
                      <div className="font-mono text-sm font-bold text-stone-700">4-6</div>
                      <div className="mt-1 font-bold">Transition</div>
                      <p className="mt-2 text-sm text-stone-600">Some things move. Some things keep returning to the old shape.</p>
                    </div>
                    <div className="border-t border-stone-300 pt-3">
                      <div className="font-mono text-sm font-bold text-red-700">7-10</div>
                      <div className="mt-1 font-bold">Particle</div>
                      <p className="mt-2 text-sm text-stone-600">The system is spending energy defending its current form.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* The 7 Dimensions Preview */}
              <div className="gpi-rule py-8 fade-up">
                  <div className="gpi-kicker mb-6">Seven places friction hides</div>
                <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
                  <div className="flex items-start gap-4">
                    <Clock size={15} className="text-stone-500 mt-1 shrink-0" />
                    <div>
                      <span className="font-bold">Decision Latency</span>
                      <p className="text-stone-600 text-sm mt-1">How far a signal has to travel before someone can act on it.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Zap size={15} className="text-stone-500 mt-1 shrink-0" />
                    <div>
                      <span className="font-bold">Error Correction</span>
                      <p className="text-stone-600 text-sm mt-1">Whether the system can admit a wrong turn before it becomes identity.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Brain size={15} className="text-stone-500 mt-1 shrink-0" />
                    <div>
                      <span className="font-bold">Knowledge Location</span>
                      <p className="text-stone-600 text-sm mt-1">Where the real operating knowledge lives, and who can reach it.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Gauge size={15} className="text-stone-500 mt-1 shrink-0" />
                    <div>
                      <span className="font-bold">Knowledge Velocity</span>
                      <p className="text-stone-600 text-sm mt-1">How quickly reality moves from the edge of the work to the people making calls.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users size={15} className="text-stone-500 mt-1 shrink-0" />
                    <div>
                      <span className="font-bold">Talent Flow</span>
                      <p className="text-stone-600 text-sm mt-1">Whether strong people can move toward the hardest problems.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Lock size={15} className="text-stone-500 mt-1 shrink-0" />
                    <div>
                      <span className="font-bold">Structural Lock-In</span>
                      <p className="text-stone-600 text-sm mt-1">The habits, contracts, tools, and meetings keeping the old shape alive.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <DollarSign size={15} className="text-stone-500 mt-1 shrink-0" />
                    <div>
                      <span className="font-bold">Capital Intensity</span>
                      <p className="text-stone-600 text-sm mt-1">How much yesterday's spending controls today's choices.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Start */}
              <div className="gpi-rule py-8 fade-up">
                <button
                  onClick={() => setCurrentStep('questions')}
                  className="bg-stone-950 text-white px-7 py-4 font-semibold hover:bg-stone-800 transition-colors"
                >
                  Find the signal
                </button>
                <p className="text-stone-600 text-sm mt-4">
                  Answer from how the business actually works, not how the process says it works.
                </p>
              </div>
            </div>
          </section>

          <footer className="gpi-rule">
            <div className="gpi-shell flex flex-col gap-3 py-8 font-mono text-xs text-stone-600 md:flex-row md:items-center md:justify-between">
              <div>GPI Studio. Operating intelligence for companies in motion.</div>
              <div>marcus@gpi.studio · gpi.studio</div>
            </div>
          </footer>
        </div>
      </>
    );
  }

  // ANALYSIS
  if (currentStep === 'analysis') {
    const dims = getOrderedDimensions();
    return (
      <>
        <SEOHead title="Reading The Signal | GPI Studio" description="Reading your signal answers." />
        <div className="gpi-page">
          <Navigation currentPage="studio" />
          <section className="gpi-shell py-14 md:py-20">
            <div className="max-w-md">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-600 mb-8">
                <span className="w-2 h-2 bg-stone-400 rounded-full animate-pulse" />
                Reading the pattern
              </div>
              <h1 className="text-3xl font-bold mb-12">Turning answers into a first read.</h1>
              <div className="space-y-3 text-left mb-8">
                {dims.map((dim, i) => (
                  <div key={dim.key} className="flex items-center gap-3 text-sm">
                    <div className={`w-2 h-2 rounded-full transition-colors ${analysisStep > i ? 'bg-stone-900' : 'bg-stone-300'}`} />
                    <span className={analysisStep > i ? 'text-stone-700' : 'text-stone-500'}>
                      {dim.label}
                    </span>
                    {analysisStep > i && <span className="text-stone-500 text-xs">read</span>}
                  </div>
                ))}
                <div className="flex items-center gap-3 text-sm">
                  <div className={`w-2 h-2 rounded-full transition-colors ${analysisStep > 7 ? 'bg-stone-900' : 'bg-stone-300'}`} />
                  <span className={analysisStep > 7 ? 'text-stone-700' : 'text-stone-500'}>Overall read</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className={`w-2 h-2 rounded-full transition-colors ${analysisStep > 8 ? 'bg-stone-900' : 'bg-stone-300'}`} />
                  <span className={analysisStep > 8 ? 'text-stone-700' : 'text-stone-500'}>Industry context</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  // RESULTS
  if (currentStep === 'results' && gpiResults) {
    const stateColor = getStateColor(gpiResults.state);
    const stateLabel = getStateLabel(gpiResults.state);
    const sortedDimensions = [...gpiResults.dimensions].sort((a, b) => b.score - a.score);
    const weakestLabel = gpiResults.weakestDimension ? GPI_DIMENSIONS[gpiResults.weakestDimension].label : null;
    const strongestLabel = gpiResults.strongestDimension ? GPI_DIMENSIONS[gpiResults.strongestDimension].label : null;
    const resultRead = {
      field: {
        title: 'The work still has space to move.',
        body: 'Your answers point to a system where signal can still reach action. The risk is assuming today\'s ease will survive the next layer of growth.',
      },
      transitioning: {
        title: 'The business is between shapes.',
        body: 'Some parts of the work can move. Other parts keep returning to the old pattern. This is the moment where a few honest changes can prevent the system from hardening around yesterday\'s solution.',
      },
      particle: {
        title: 'The current shape is charging a toll.',
        body: 'Your answers point to a system spending too much energy preserving how work already happens. The first move is seeing which constraint is making movement expensive.',
      },
    }[gpiResults.state];

    // Prepare radar chart data
    const radarDimensions = gpiResults.dimensions.map(d => ({
      dimension: d.dimension,
      score: d.score,
      label: d.label,
      weight: GPI_DIMENSIONS[d.dimension].weight,
    }));

    return (
      <>
        <SEOHead
          title={`GPI: ${gpiResults.overall} | GPI Studio`}
          description={`Your Growing Pains Index is ${gpiResults.overall}. ${stateLabel}.`}
        />
        <div className="gpi-page">
          <Navigation currentPage="studio" />
          <section className="gpi-shell py-14 md:py-20">
            <div className="max-w-5xl">

              {/* Header */}
              <div className="mb-10">
                <div className="gpi-kicker mb-4">
                  First read
                </div>
                <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-headline md:text-5xl">
                  Here is where the work is spending energy.
                </h1>
              </div>

              <section className="gpi-rule py-8">
                <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
                  <div>
                    <div className="text-xs font-mono font-bold uppercase text-stone-600">Growing Pains Index</div>
                    <div className="mt-4 flex items-end gap-3">
                      <span
                        className="font-mono text-7xl font-bold tabular-nums leading-none md:text-8xl"
                        style={{ color: stateColor === 'green' ? '#1c1917' : stateColor === 'yellow' ? '#57534e' : '#991b1b' }}
                      >
                        {gpiResults.overall}
                      </span>
                      <span className="pb-2 font-mono text-lg text-stone-600">/ 10</span>
                    </div>
                    <div className="mt-4 font-mono text-sm font-bold uppercase text-stone-700">
                      {stateLabel}
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-4 border-t border-stone-300 pt-4 text-sm">
                      <div>
                        <div className="font-mono text-xs uppercase text-stone-600">Peer context</div>
                        <div className="mt-1 font-bold">{gpiResults.industryComparison.percentile}th percentile</div>
                      </div>
                      <div>
                        <div className="font-mono text-xs uppercase text-stone-600">Relative friction</div>
                        <div className="mt-1 font-bold">
                          {gpiResults.industryComparison.position === 'above' ? 'More than peers' : gpiResults.industryComparison.position === 'below' ? 'Less than peers' : 'In range'}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                      {resultRead.title}
                    </h2>
                    <div className="gpi-prose mt-5 text-stone-800">
                      <p>{resultRead.body}</p>
                      {weakestLabel && (
                        <p>
                          The first place to look is <span className="font-bold text-stone-950">{weakestLabel}</span>. That is where movement appears most expensive right now.
                        </p>
                      )}
                      {strongestLabel && (
                        <p>
                          The clearest existing movement is <span className="font-bold text-stone-950">{strongestLabel}</span>. Keep it close. It is evidence of what the system can already do.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </section>

              <section className="gpi-rule py-8">
                <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
                  <div>
                    <div className="gpi-kicker mb-4">Dimension read</div>
                    <div className="overflow-x-auto">
                      <table className="gpi-table">
                        <thead>
                          <tr>
                            <th>Dimension</th>
                            <th>Score</th>
                            <th>Read</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sortedDimensions.map((dim) => {
                            const isWeakest = dim.dimension === gpiResults.weakestDimension;
                            const isStrongest = dim.dimension === gpiResults.strongestDimension;
                            const insight = getDimensionInsight(dim.dimension, dim.score);

                            return (
                              <tr key={dim.dimension}>
                                <td>
                                  <div className="font-bold">{dim.label}</div>
                                  {isWeakest && <div className="mt-1 font-mono text-xs uppercase text-red-800">Start here</div>}
                                  {isStrongest && <div className="mt-1 font-mono text-xs uppercase text-stone-600">Existing movement</div>}
                                </td>
                                <td className="font-mono font-bold tabular-nums">{dim.score}</td>
                                <td>
                                  <div className="font-bold">{insight.text}</div>
                                  <div className="mt-1 text-sm text-stone-600">{insight.subtext}</div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="border-t border-stone-300 pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                    <div className="gpi-kicker mb-4">Shape of the read</div>
                    <GPIRadarChart
                      dimensions={radarDimensions}
                      size={300}
                      showLabels={true}
                      showValues={true}
                      highlightWeakest={true}
                      animated={true}
                    />
                    <p className="mt-4 text-sm text-stone-600">
                      The shape tells you more than the score. A single spike can explain more than the average.
                    </p>
                  </div>
                </div>
              </section>

              {/* Intake CTA */}
              <section className="gpi-rule py-8">
                <div className="grid gap-8 md:grid-cols-[1fr_0.75fr]">
                  <div>
                    <div className="gpi-kicker mb-3">Intake path</div>
                    <h3 className="text-2xl font-bold mb-3">
                      Bring the pressure to the studio floor.
                    </h3>
                    <p className="text-stone-700">
                      Signal names the pattern. Intake adds the real context: what keeps repeating, what decision is stuck, and what the business is asking you to see clearly.
                    </p>
                    {weakestLabel && (
                      <p className="mt-3 text-stone-700">
                        The session would start with <span className="font-bold text-stone-950">{weakestLabel}</span>, then work outward.
                      </p>
                    )}
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={`/intake?gpi=${gpiResults.overall}&dim=${gpiResults.weakestDimension}`}
                        className="bg-stone-950 px-6 py-3 text-sm font-semibold text-white hover:bg-stone-800 transition-colors"
                      >
                        Start intake
                      </a>
                      <Link
                        href="/gpi-framework"
                        className="border border-stone-300 px-6 py-3 text-sm font-semibold hover:border-stone-500 transition-colors"
                      >
                        Read the lens
                      </Link>
                      <button
                        onClick={restartDiagnostic}
                        className="border border-stone-300 px-6 py-3 text-sm font-semibold hover:border-stone-500 transition-colors"
                      >
                        Retake
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-stone-300 pt-5 md:border-l md:border-t-0 md:pl-7 md:pt-0">
                    <div className="gpi-kicker mb-3">Keep the read</div>
                    {!saved ? (
                      <>
                        <p className="text-sm text-stone-700">
                          Send the breakdown to yourself if you want to return to it later or share it with someone inside the work.
                        </p>
                        <button
                          onClick={() => setShowSaveModal(true)}
                          className="mt-5 border border-stone-400 px-5 py-3 text-sm font-semibold hover:border-stone-950 transition-colors"
                        >
                          Email the read
                        </button>
                      </>
                    ) : (
                      <p className="text-sm text-stone-700">
                        The breakdown has been sent to {savedEmail || 'the email you entered'}.
                      </p>
                    )}
                  </div>
                </div>
              </section>
            </div>
          </section>

          <footer className="gpi-rule">
            <div className="gpi-shell flex flex-col gap-3 py-8 font-mono text-xs text-stone-600 md:flex-row md:items-center md:justify-between">
              <div>GPI Studio. Operating intelligence for companies in motion.</div>
              <div>marcus@gpi.studio · gpi.studio</div>
            </div>
          </footer>

          {/* Save Modal */}
          {showSaveModal && (
            <div className="fixed inset-0 bg-stone-900/80 flex items-center justify-center z-50 p-6">
              <div className="bg-white border border-stone-200 p-8 max-w-md w-full">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-black">Keep the read</h3>
                  <button
                    onClick={() => setShowSaveModal(false)}
                    className="text-stone-400 hover:text-stone-900 text-2xl"
                  >
                    &times;
                  </button>
                </div>

                <form onSubmit={handleSaveResults} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-stone-400 mb-2">NAME *</label>
                    <input
                      type="text"
                      required
                      value={saveForm.name}
                      onChange={(e) => setSaveForm({ ...saveForm, name: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 p-3 text-stone-900 focus:border-stone-900 outline-none"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-stone-400 mb-2">EMAIL *</label>
                    <input
                      type="email"
                      required
                      value={saveForm.email}
                      onChange={(e) => setSaveForm({ ...saveForm, email: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 p-3 text-stone-900 focus:border-stone-900 outline-none"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-stone-400 mb-2">COMPANY</label>
                    <input
                      type="text"
                      value={saveForm.company}
                      onChange={(e) => setSaveForm({ ...saveForm, company: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 p-3 text-stone-900 focus:border-stone-900 outline-none"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-stone-400 mb-2">CITY</label>
                    <input
                      type="text"
                      value={saveForm.city}
                      onChange={(e) => setSaveForm({ ...saveForm, city: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 p-3 text-stone-900 focus:border-stone-900 outline-none"
                      placeholder="Your city"
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="sendEmail"
                      checked={sendEmail}
                      onChange={(e) => setSendEmail(e.target.checked)}
                      className="w-4 h-4 accent-stone-900"
                    />
                    <label htmlFor="sendEmail" className="text-sm text-stone-500">
                      Email me the read
                    </label>
                  </div>

                  {saveError && (
                    <div className="text-red-600 text-sm">{saveError}</div>
                  )}

                  <button
                    type="submit"
                    disabled={saving}
                    className="w-full bg-stone-900 text-white py-4 font-semibold hover:bg-stone-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {saving ? 'Sending...' : 'Send the Read'}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }

  // QUESTIONS
  const currentQ = questions[currentQuestion - 1];
  const progress = (currentQuestion / questions.length) * 100;
  const partialAnswers: DiagnosticAnswer[] = Object.entries(answers).map(([qId, answer]) => {
    const question = questions.find(q => q.id === parseInt(qId));
    return {
      questionId: parseInt(qId),
      answer: answer === 'yes' ? question?.fieldAnswer ?? true : !(question?.fieldAnswer ?? true),
    };
  });
  const partialGPI = partialAnswers.length > 0 ? calculateFullGPI(partialAnswers, selectedIndustry) : null;
  const liveColor = partialGPI
    ? (partialGPI.overall <= 3 ? '#1c1917' : partialGPI.overall <= 6 ? '#78716c' : '#dc2626')
    : '#a8a29e';

  return (
    <>
      <SEOHead
        title={`Question ${currentQuestion} | Signal`}
        description={currentQ.question}
      />
      <div className="gpi-page">
        <Navigation currentPage="studio" />
        <section className="gpi-shell py-14 md:py-20">
          <div className="max-w-xl">

            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between items-center text-xs font-mono text-stone-400 mb-2">
                <span>{currentQuestion} / {questions.length}</span>
                {partialGPI && (
                  <span
                    className="text-sm font-black tabular-nums transition-colors duration-300"
                    style={{ color: liveColor }}
                  >
                    GPI {partialGPI.overall}
                  </span>
                )}
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-1 bg-stone-100 rounded-full">
                <div
                  className="h-1 bg-red-600 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Back */}
            {currentQuestion > 1 && (
              <button
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
                className="flex items-center gap-2 text-stone-600 hover:text-stone-950 transition-colors text-sm mb-8"
              >
                <ArrowLeft size={16} />
                Back
              </button>
            )}

            {/* Question */}
            <div className="mb-8">
              <div className="gpi-kicker mb-4">
                {GPI_DIMENSIONS[currentQ.dimension].label}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                {currentQ.question}
              </h2>
            </div>

            {/* Industry-Specific Example */}
            {(() => {
              const example = getQuestionExample(currentQ.id, selectedIndustry);
              if (!example) return null;
              return (
                <div className="border-l border-stone-300 pl-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Lightbulb size={18} className="text-stone-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs font-mono text-stone-600 mb-1">
                        In {selectedIndustry}
                      </div>
                      <p className="text-sm text-stone-700">
                        {example}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Answers */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleAnswer('yes')}
                className="border border-stone-950 p-5 hover:bg-stone-950 hover:text-white transition-all text-center font-bold text-lg"
              >
                Yes
              </button>
              <button
                onClick={() => handleAnswer('no')}
                className="border border-stone-400 p-5 hover:bg-stone-950 hover:text-white hover:border-stone-950 transition-all text-center font-bold text-lg"
              >
                No
              </button>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};

export default DiagnosticPage;
