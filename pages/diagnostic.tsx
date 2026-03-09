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
      high: { text: "Decisions are metabolically expensive", subtext: "Every choice passes through layers that add time without adding value. The org burns energy just to move." }
    },
    ERROR_CORRECTION: {
      low: { text: "The system catches its own mistakes", subtext: "Wrong turns surface fast. There's no political cost to reversing, so reversals happen." },
      mid: { text: "Visible errors get fixed. Hidden ones don't.", subtext: "The org corrects what it can see. What's buried in process or protected by seniority compounds." },
      high: { text: "Sunk cost has veto power", subtext: "Mistakes become commitments. Changing course reads as admitting failure, so the org defends what isn't working." }
    },
    KNOWLEDGE_LOCATION: {
      low: { text: "The right person knows and is reachable", subtext: "Operational knowledge is distributed and findable. Nobody's head is the single point of failure." },
      mid: { text: "Knowledge clusters around people and teams", subtext: "Some information moves freely. Some of it lives in relationships and informal networks that not everyone can access." },
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
      high: { text: "Roles outlast their usefulness", subtext: "People serve positions, not problems. The best performers eventually calculate that their leverage is higher somewhere else." }
    },
    STRUCTURAL_LOCKIN: {
      low: { text: "The structure bends when reality requires it", subtext: "Pivoting doesn't require a reorganization. Process is a tool, not a law." },
      mid: { text: "Some structure helps. Some structure just persists.", subtext: "Certain processes earn their place. Others exist because dismantling them is harder than tolerating them." },
      high: { text: "The org is metabolically committed to its current form", subtext: "Changing how work gets done requires changing the org itself. That's expensive, slow, and politically dangerous. So it mostly doesn't happen." }
    },
    CAPITAL_INTENSITY: {
      low: { text: "Resources follow results", subtext: "Spending is tied to outcomes. Money moves when the work moves. Budgets aren't defended, they're allocated." },
      mid: { text: "Some spending is strategic. Some is inertia.", subtext: "Resources go to the right places often enough. But some capital is locked in legacy commitments that haven't been reconsidered." },
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
  const [saveError, setSaveError] = useState<string | null>(null);

  const industries = getIndustryList();

  // 32 diagnostic questions
  const questions = [
    // DECISION_LATENCY (5)
    { id: 1, dimension: "DECISION_LATENCY" as DimensionKey, question: "Did your team make a meaningful decision this week without waiting for approval from above?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 2, dimension: "DECISION_LATENCY" as DimensionKey, question: "Have you seen a decision sit unmade for more than a week because no one was sure who owned it?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 3, dimension: "DECISION_LATENCY" as DimensionKey, question: "Can your team commit $10,000 or more without requiring senior approval?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 4, dimension: "DECISION_LATENCY" as DimensionKey, question: "In your org, does a typical decision require sign-off from more than three people?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 5, dimension: "DECISION_LATENCY" as DimensionKey, question: "When a problem surfaces, does your team act on it within 24 hours more often than not?", yes: "Yes", no: "No", fieldAnswer: true },
    // ERROR_CORRECTION (5)
    { id: 6, dimension: "ERROR_CORRECTION" as DimensionKey, question: "Has your org publicly reversed or killed a major initiative in the last 6 months?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 7, dimension: "ERROR_CORRECTION" as DimensionKey, question: "Are there projects in your org that everyone knows are failing but no one is killing?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 8, dimension: "ERROR_CORRECTION" as DimensionKey, question: "When new evidence contradicts a decision, does your org change course quickly?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 9, dimension: "ERROR_CORRECTION" as DimensionKey, question: "Has a 'we've already invested too much to stop' argument ever kept a dead project alive in your org?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 10, dimension: "ERROR_CORRECTION" as DimensionKey, question: "Do you actively seek out the people who disagree with your current strategy?", yes: "Yes", no: "No", fieldAnswer: true },
    // KNOWLEDGE_LOCATION (5)
    { id: 11, dimension: "KNOWLEDGE_LOCATION" as DimensionKey, question: "If your three most critical people left tomorrow, would their knowledge leave with them?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 12, dimension: "KNOWLEDGE_LOCATION" as DimensionKey, question: "Do you regularly find out about decisions that affect your work after they've already been made?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 13, dimension: "KNOWLEDGE_LOCATION" as DimensionKey, question: "Can you clearly explain why your top competitor is winning or losing right now?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 14, dimension: "KNOWLEDGE_LOCATION" as DimensionKey, question: "Is there information in your org that certain people protect and others can't easily access?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 15, dimension: "KNOWLEDGE_LOCATION" as DimensionKey, question: "Do team members openly challenge leadership's assumptions in regular meetings?", yes: "Yes", no: "No", fieldAnswer: true },
    // KNOWLEDGE_VELOCITY (4)
    { id: 16, dimension: "KNOWLEDGE_VELOCITY" as DimensionKey, question: "In your org, does bad news reach leadership faster than good news?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 17, dimension: "KNOWLEDGE_VELOCITY" as DimensionKey, question: "Has your org been caught off guard by something front-line employees saw coming for months?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 18, dimension: "KNOWLEDGE_VELOCITY" as DimensionKey, question: "Do the people making decisions have real-time access to what people doing the work actually know?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 19, dimension: "KNOWLEDGE_VELOCITY" as DimensionKey, question: "Does it typically take more than a month for a market shift to change your team's priorities?", yes: "Yes", no: "No", fieldAnswer: false },
    // TALENT_FLOW (4)
    { id: 20, dimension: "TALENT_FLOW" as DimensionKey, question: "Do your best performers consistently move toward your org's most important problems?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 21, dimension: "TALENT_FLOW" as DimensionKey, question: "Is there someone in your org who everyone knows is in the wrong role but stays anyway?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 22, dimension: "TALENT_FLOW" as DimensionKey, question: "Have you lost strong performers in the last year because they couldn't get things done here?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 23, dimension: "TALENT_FLOW" as DimensionKey, question: "Does promotion in your org correlate more with tenure and relationships than with results?", yes: "Yes", no: "No", fieldAnswer: false },
    // STRUCTURAL_LOCKIN (5)
    { id: 24, dimension: "STRUCTURAL_LOCKIN" as DimensionKey, question: "Could your team fundamentally change how it operates within 90 days if the market required it?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 25, dimension: "STRUCTURAL_LOCKIN" as DimensionKey, question: "Are there processes in your org that exist mainly because they've always existed?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 26, dimension: "STRUCTURAL_LOCKIN" as DimensionKey, question: "Does your technology infrastructure actively limit what you can do strategically?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 27, dimension: "STRUCTURAL_LOCKIN" as DimensionKey, question: "Do recurring meetings stay on the calendar year after year without being reconsidered?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 28, dimension: "STRUCTURAL_LOCKIN" as DimensionKey, question: "When your org tries something genuinely new, does the existing structure actively resist it?", yes: "Yes", no: "No", fieldAnswer: false },
    // CAPITAL_INTENSITY (4)
    { id: 29, dimension: "CAPITAL_INTENSITY" as DimensionKey, question: "Do departments in your org spend aggressively at year-end primarily to protect next year's budget?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 30, dimension: "CAPITAL_INTENSITY" as DimensionKey, question: "Is your budget process primarily about defending last year's allocations rather than funding this year's priorities?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 31, dimension: "CAPITAL_INTENSITY" as DimensionKey, question: "In a typical week, do your meetings consume more time than the decisions they produce can justify?", yes: "Yes", no: "No", fieldAnswer: false },
    { id: 32, dimension: "CAPITAL_INTENSITY" as DimensionKey, question: "Are your best resources (people, money, attention) visibly going toward your org's most important problems?", yes: "Yes", no: "No", fieldAnswer: true },
  ];

  const handleAnswer = (answer: 'yes' | 'no') => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: answer }));
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentStep('analysis');
      runAnalysis();
    }
  };

  const runAnalysis = () => {
    const steps = 9;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setAnalysisStep(step);
      if (step >= steps) {
        clearInterval(interval);
        const diagnosticAnswers: DiagnosticAnswer[] = Object.entries(answers).map(([qId, answer]) => {
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

      if (!response.ok) {
        throw new Error('Failed to save');
      }

      setSaved(true);
      setShowSaveModal(false);
    } catch (error) {
      setSaveError('Failed to save results. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  // INTRO
  if (currentStep === 'intro') {
    return (
      <>
        <SEOHead
          title="GPI Diagnostic | GPI Studio"
          description="Measure your Growing Pains Index. 32 questions. 7 dimensions. See where energy gets stuck."
        />
        <div className="min-h-screen bg-stone-50 text-stone-900">
          <Navigation currentPage="diagnostic" />
          <section className="pt-36 pb-24 px-6">
            <div className="max-w-3xl mx-auto">

              {/* Hero */}
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-400 mb-8 fade-up">
                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                  DIAGNOSTIC READY
                </div>
                <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6 fade-up">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-headline flex-1">
                    YOUR ORG HAS A<br />
                    <span className="text-red-600">METABOLIC RATE.</span>
                  </h1>
                  <div className="border border-stone-300 p-4 md:w-64 shrink-0">
                    <div className="text-xs font-mono text-stone-500 mb-2">SELECT YOUR INDUSTRY</div>
                    <select
                      value={selectedIndustry}
                      onChange={(e) => setSelectedIndustry(e.target.value)}
                      className="w-full bg-stone-50 text-stone-900 text-sm py-1 focus:outline-none"
                    >
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                    <p className="text-xs text-stone-400 mt-2">Used to benchmark your results.</p>
                  </div>
                </div>
                <p className="text-xl md:text-2xl text-stone-500 max-w-2xl leading-relaxed fade-up">
                  Most friction isn't visible on a P&L. It shows up in how long decisions take, whether mistakes get fixed or defended, and whether your best people have room to move. This measures all of it. 32 questions. 8 minutes.
                </p>
              </div>

              {/* Scale */}
              <div className="bg-white border border-stone-200 p-6 mb-8 fade-up">
                <div className="text-xs font-mono text-stone-400 mb-4">THE SCALE</div>
                <div className="relative h-4 bg-stone-100 rounded-full mb-3 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-stone-300 via-stone-500 to-stone-900" />
                </div>
                <div className="flex justify-between text-sm">
                  <div>
                    <span className="text-stone-900 font-bold">1-3</span>
                    <span className="text-stone-400 ml-2">Field — energy flows</span>
                  </div>
                  <div>
                    <span className="text-stone-500 font-bold">4-6</span>
                    <span className="text-stone-400 ml-2">Transitioning</span>
                  </div>
                  <div>
                    <span className="text-red-600 font-bold">7-10</span>
                    <span className="text-stone-400 ml-2">Particle — energy stuck</span>
                  </div>
                </div>
                <p className="text-xs text-stone-400 mt-4">This is a read, not a grade. A high score in the right environment isn't a failure. It's information about where you are and what it costs you to move from here.</p>
              </div>

              {/* The 7 Dimensions Preview */}
              <div className="bg-white border border-stone-200 p-6 mb-8 fade-up">
                <div className="text-xs font-mono text-stone-400 mb-6">SEVEN DIMENSIONS OF ORGANIZATIONAL FRICTION</div>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <Clock size={15} className="text-stone-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-stone-900 font-bold">Decision Latency</span>
                      <p className="text-stone-500 text-sm mt-0.5">Every layer between signal and action is a tax. Most orgs don't know how much they're paying.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Zap size={15} className="text-stone-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-stone-900 font-bold">Error Correction</span>
                      <p className="text-stone-500 text-sm mt-0.5">Mistakes aren't the problem. Mistakes that compound for years because no one can say the project is dead, that's the problem.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Brain size={15} className="text-stone-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-stone-900 font-bold">Knowledge Location</span>
                      <p className="text-stone-500 text-sm mt-0.5">If it lives in someone's head and they leave, it's gone. If it lives in a doc no one can find, same result.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Lock size={15} className="text-stone-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-stone-900 font-bold">Structural Lock-In</span>
                      <p className="text-stone-500 text-sm mt-0.5">Not just technology. Org charts, vendor contracts, legacy processes. Anything that makes changing direction expensive.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users size={15} className="text-stone-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-stone-900 font-bold">Talent Flow</span>
                      <p className="text-stone-500 text-sm mt-0.5">Stuck people do stuck work. When mobility inside the org is low, the best performers calculate that their leverage is higher somewhere else.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <DollarSign size={15} className="text-stone-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-stone-900 font-bold">Capital Intensity</span>
                      <p className="text-stone-500 text-sm mt-0.5">Every dollar locked in physical assets is a dollar that can't move. High capital intensity means strategy gets shaped by what you already built.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Gauge size={15} className="text-stone-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-stone-900 font-bold">Knowledge Velocity</span>
                      <p className="text-stone-500 text-sm mt-0.5">The gap between knowing something works better and actually doing it better. That gap is the metabolism.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Start */}
              <div className="text-center fade-up">
                <button
                  onClick={() => setCurrentStep('questions')}
                  className="bg-stone-900 text-white px-12 py-5 font-semibold text-lg hover:bg-stone-800 transition-colors"
                >
                  Start Diagnostic
                </button>
                <p className="text-stone-400 text-sm mt-4">32 yes/no questions. No email required to see results.</p>
              </div>

              {/* Trust Element */}
              <div className="mt-12 text-center border-t border-stone-200 pt-8 fade-up">
                <p className="text-stone-400 text-sm">
                  Patterns drawn from analysis of 500+ organizations across 40+ industries.
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-16 px-6 border-t border-stone-200">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
                <div>
                  <div className="font-black text-sm mb-4">GPI<span className="text-red-600">.</span>STUDIO</div>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    Organizational physics.<br />
                    We measure where energy gets stuck.
                  </p>
                </div>
                <div>
                  <div className="text-xs font-mono text-stone-400 mb-4">RESEARCH</div>
                  <div className="space-y-3">
                    <Link href="/insights" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Insights</Link>
                    <Link href="/insights/gpi-analyses" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Analyses</Link>
                    <Link href="/gpi-framework" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Framework</Link>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-mono text-stone-400 mb-4">WORK</div>
                  <div className="space-y-3">
                    <Link href="/diagnostic" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Diagnostic</Link>
                    <Link href="/consult" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Book a Session</Link>
                    <Link href="/work-with-us" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Work With Us</Link>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-mono text-stone-400 mb-4">COMPANY</div>
                  <div className="space-y-3">
                    <Link href="/about" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">About</Link>
                  </div>
                </div>
              </div>
              <div className="pt-8 border-t border-stone-200 flex justify-between items-center text-xs text-stone-400">
                <div>&copy; {new Date().getFullYear()} Imagination G LLC</div>
                <div className="font-mono">gpi.studio</div>
              </div>
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
        <SEOHead title="Calculating GPI | GPI Studio" description="Processing diagnostic results." />
        <div className="min-h-screen bg-stone-50 text-stone-900">
          <Navigation currentPage="diagnostic" />
          <section className="pt-28 pb-16 px-6">
            <div className="max-w-md mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-400 mb-8">
                <span className="w-2 h-2 bg-stone-400 rounded-full animate-pulse" />
                PROCESSING
              </div>
              <h1 className="text-2xl font-black mb-12">CALCULATING GPI</h1>
              <div className="space-y-3 text-left mb-8">
                {dims.map((dim, i) => (
                  <div key={dim.key} className="flex items-center gap-3 text-sm">
                    <div className={`w-2 h-2 rounded-full transition-colors ${analysisStep > i ? 'bg-stone-900' : 'bg-stone-300'}`} />
                    <span className={analysisStep > i ? 'text-stone-500' : 'text-stone-400'}>
                      {dim.label}
                    </span>
                    {analysisStep > i && <span className="text-stone-500 text-xs">done</span>}
                  </div>
                ))}
                <div className="flex items-center gap-3 text-sm">
                  <div className={`w-2 h-2 rounded-full transition-colors ${analysisStep > 7 ? 'bg-stone-900' : 'bg-stone-300'}`} />
                  <span className={analysisStep > 7 ? 'text-stone-500' : 'text-stone-400'}>Composite score</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className={`w-2 h-2 rounded-full transition-colors ${analysisStep > 8 ? 'bg-stone-900' : 'bg-stone-300'}`} />
                  <span className={analysisStep > 8 ? 'text-stone-500' : 'text-stone-400'}>Industry comparison</span>
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
        <div className="min-h-screen bg-stone-50 text-stone-900">
          <Navigation currentPage="diagnostic" />
          <section className="pt-36 pb-24 px-6">
            <div className="max-w-5xl mx-auto">

              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-400 mb-4">
                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                  ANALYSIS COMPLETE
                </div>
                <h1 className="text-2xl font-black">YOUR GPI RESULTS</h1>
              </div>

              {/* Main Display: Score + Radar */}
              <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">

                {/* Score */}
                <div className="flex flex-col items-center lg:items-end">
                  <div className="bg-white border border-stone-200 p-8 w-full max-w-sm">
                    <div className="text-xs font-mono text-stone-400 mb-4">GROWING PAINS INDEX</div>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span
                        className="text-7xl font-black tabular-nums"
                        style={{ color: stateColor === 'green' ? '#1c1917' : stateColor === 'yellow' ? '#78716c' : '#dc2626' }}
                      >
                        {gpiResults.overall}
                      </span>
                      <span className="text-2xl text-stone-400">/10</span>
                    </div>
                    <div className="text-sm font-bold mb-4" style={{ color: stateColor === 'green' ? '#1c1917' : stateColor === 'yellow' ? '#78716c' : '#dc2626' }}>
                      {stateLabel.toUpperCase()}
                    </div>
                    <div className="relative h-2 bg-stone-100 rounded-full mb-4">
                      <div
                        className="absolute top-0 left-0 h-full rounded-full"
                        style={{
                          width: `${(gpiResults.overall / 10) * 100}%`,
                          backgroundColor: stateColor === 'green' ? '#1c1917' : stateColor === 'yellow' ? '#78716c' : '#dc2626'
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-stone-900">FLOW</span>
                      <span className="text-stone-400">FRICTION</span>
                    </div>
                  </div>

                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-4 w-full max-w-sm">
                    <div className="bg-white border border-stone-200 p-4 text-center">
                      <div className="text-xs text-stone-400 mb-1">PERCENTILE</div>
                      <div className="text-2xl font-black">{gpiResults.industryComparison.percentile}th</div>
                    </div>
                    <div className="bg-white border border-stone-200 p-4 text-center">
                      <div className="text-xs text-stone-400 mb-1">VS INDUSTRY</div>
                      <div className={`text-2xl font-black ${gpiResults.industryComparison.position === 'above' ? 'text-red-600' : gpiResults.industryComparison.position === 'below' ? 'text-stone-900' : 'text-stone-500'}`}>
                        {gpiResults.industryComparison.position === 'above' ? 'BETTER' : gpiResults.industryComparison.position === 'below' ? 'WORSE' : 'AVG'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Radar Chart */}
                <div className="flex flex-col items-center lg:items-start">
                  <GPIRadarChart
                    dimensions={radarDimensions}
                    size={340}
                    showLabels={true}
                    showValues={true}
                    highlightWeakest={true}
                    animated={true}
                  />
                  <div className="text-xs font-mono text-stone-400 mt-2 text-center lg:text-left">
                    HOVER FOR DETAILS
                  </div>
                </div>
              </div>

              {/* Dimension Breakdown with Insights */}
              <div className="bg-white border border-stone-200 p-6 mb-8">
                <div className="text-xs font-mono text-stone-400 mb-6">DIMENSION BREAKDOWN</div>
                <div className="space-y-6">
                  {gpiResults.dimensions
                    .sort((a, b) => b.score - a.score)
                    .map((dim) => {
                      const isWeakest = dim.dimension === gpiResults.weakestDimension;
                      const isStrongest = dim.dimension === gpiResults.strongestDimension;
                      const insight = getDimensionInsight(dim.dimension, dim.score);
                      const scoreColor = dim.score <= 3 ? '#1c1917' : dim.score <= 6 ? '#78716c' : '#dc2626';

                      return (
                        <div key={dim.dimension} className={`p-4 border ${isWeakest ? 'border-red-200 bg-red-50/30' : isStrongest ? 'border-stone-400 bg-stone-100' : 'border-stone-200 bg-stone-50'}`}>
                          {/* Header Row */}
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold">
                                {dim.label}
                              </span>
                              {isWeakest && <span className="text-xs bg-red-50 text-red-600 px-2 py-0.5">HIGHEST FRICTION</span>}
                              {isStrongest && <span className="text-xs bg-stone-200 text-stone-600 px-2 py-0.5">LOWEST FRICTION</span>}
                            </div>
                            <div className="text-2xl font-black font-mono" style={{ color: scoreColor }}>
                              {dim.score}
                            </div>
                          </div>

                          {/* Progress Bar */}
                          <div className="h-2 bg-stone-200 rounded-full overflow-hidden mb-3">
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{
                                width: `${(dim.score / 10) * 100}%`,
                                backgroundColor: scoreColor
                              }}
                            />
                          </div>

                          {/* Insight Text */}
                          <div>
                            <div className="text-sm font-bold" style={{ color: scoreColor }}>
                              {insight.text}
                            </div>
                            <div className="text-xs text-stone-500 mt-1">
                              {insight.subtext}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>

              {/* Highest friction callout */}
              {gpiResults.weakestDimension && (
                <div className="border border-stone-200 p-6 mb-8">
                  <div className="text-xs font-mono text-stone-400 mb-2">HIGHEST FRICTION</div>
                  <div className="text-lg font-black mb-2">
                    {GPI_DIMENSIONS[gpiResults.weakestDimension].label}
                  </div>
                  <p className="text-sm text-stone-500">
                    This is where the org burns the most energy for the least movement. Fix this first or everything else runs uphill.
                  </p>
                </div>
              )}

              {/* Consult CTA */}
              <div className="border border-stone-300 bg-white p-6 mb-8">
                <div className="text-xs font-mono text-stone-400 mb-3">NEXT STEP</div>
                <h3 className="text-xl font-black mb-2">
                  Bring this to a live session.
                </h3>
                <p className="text-sm text-stone-500 mb-2">
                  One hour. You share context on the org. I run GPI on it live and show you exactly where the friction is coming from and what to do about it.
                </p>
                {gpiResults.weakestDimension && (
                  <p className="text-sm text-stone-500 mb-5">
                    Your highest friction is <span className="text-stone-900 font-bold">{GPI_DIMENSIONS[gpiResults.weakestDimension].label}</span>. That's where we'd start.
                  </p>
                )}
                <a
                  href={`/consult?gpi=${gpiResults.overall}&dim=${gpiResults.weakestDimension}`}
                  className="inline-block bg-stone-900 text-white px-8 py-3 font-semibold hover:bg-stone-800 transition-colors"
                >
                  Book a Session
                </a>
                <p className="text-xs text-stone-400 mt-3">First session free. No pitch.</p>
              </div>

              {/* Save Results */}
              {!saved && (
                <div className="bg-white border border-stone-200 p-6 mb-8 text-center">
                  <div className="text-xs font-mono text-stone-400 mb-2">SAVE YOUR RESULTS</div>
                  <p className="text-sm text-stone-500 mb-4">
                    Get the full breakdown emailed. Share it with whoever needs to see it.
                  </p>
                  <button
                    onClick={() => setShowSaveModal(true)}
                    className="bg-stone-900 text-white px-6 py-3 font-semibold hover:bg-stone-800 transition-colors"
                  >
                    Email My Results
                  </button>
                </div>
              )}

              {saved && (
                <div className="bg-stone-100 border border-stone-300 p-6 mb-8 text-center">
                  <div className="text-stone-900 font-bold mb-2">Results saved and emailed!</div>
                  <p className="text-sm text-stone-500">Check your inbox for your full GPI breakdown.</p>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/gpi-framework"
                  className="border border-stone-300 px-6 py-3 font-bold hover:border-stone-400 transition-colors"
                >
                  UNDERSTAND GPI
                </Link>
                <button
                  onClick={restartDiagnostic}
                  className="border border-stone-300 px-6 py-3 font-bold hover:border-stone-400 transition-colors"
                >
                  RETAKE
                </button>
              </div>

              <p className="text-center text-stone-400 text-xs mt-8">
                Retake in 90 days to measure change.
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-16 px-6 border-t border-stone-200">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
                <div>
                  <div className="font-black text-sm mb-4">GPI<span className="text-red-600">.</span>STUDIO</div>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    Organizational physics.<br />
                    We measure where energy gets stuck.
                  </p>
                </div>
                <div>
                  <div className="text-xs font-mono text-stone-400 mb-4">RESEARCH</div>
                  <div className="space-y-3">
                    <Link href="/insights" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Insights</Link>
                    <Link href="/insights/gpi-analyses" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Analyses</Link>
                    <Link href="/gpi-framework" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Framework</Link>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-mono text-stone-400 mb-4">WORK</div>
                  <div className="space-y-3">
                    <Link href="/diagnostic" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Diagnostic</Link>
                    <Link href="/consult" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Book a Session</Link>
                    <Link href="/work-with-us" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Work With Us</Link>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-mono text-stone-400 mb-4">COMPANY</div>
                  <div className="space-y-3">
                    <Link href="/about" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">About</Link>
                  </div>
                </div>
              </div>
              <div className="pt-8 border-t border-stone-200 flex justify-between items-center text-xs text-stone-400">
                <div>&copy; {new Date().getFullYear()} Imagination G LLC</div>
                <div className="font-mono">gpi.studio</div>
              </div>
            </div>
          </footer>

          {/* Save Modal */}
          {showSaveModal && (
            <div className="fixed inset-0 bg-stone-900/80 flex items-center justify-center z-50 p-6">
              <div className="bg-white border border-stone-200 p-8 max-w-md w-full">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-black">SAVE YOUR RESULTS</h3>
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
                      Email me my results
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
                    {saving ? 'Saving...' : 'Save Results'}
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
        title={`Question ${currentQuestion} | GPI Diagnostic`}
        description={currentQ.question}
      />
      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Navigation currentPage="diagnostic" />
        <section className="pt-28 pb-16 px-6">
          <div className="max-w-xl mx-auto">

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
                className="flex items-center gap-2 text-stone-400 hover:text-stone-500 transition-colors text-sm mb-8"
              >
                <ArrowLeft size={16} />
                Back
              </button>
            )}

            {/* Question */}
            <div className="mb-8">
              <div className="text-xs font-mono text-stone-400 mb-4">
                {GPI_DIMENSIONS[currentQ.dimension].label}
              </div>
              <h2 className="text-xl md:text-2xl font-black leading-tight">
                {currentQ.question}
              </h2>
            </div>

            {/* Industry-Specific Example */}
            {(() => {
              const example = getQuestionExample(currentQ.id, selectedIndustry);
              if (!example) return null;
              return (
                <div className="bg-stone-100/50 border border-stone-200 p-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Lightbulb size={18} className="text-stone-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs font-mono text-stone-400 mb-1">
                        IN {selectedIndustry.toUpperCase()}
                      </div>
                      <p className="text-sm text-stone-500">
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
                className="border-2 border-stone-900 p-6 hover:bg-stone-900 hover:text-white transition-all text-center font-black text-lg"
              >
                YES
              </button>
              <button
                onClick={() => handleAnswer('no')}
                className="border-2 border-stone-400 p-6 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all text-center font-black text-lg"
              >
                NO
              </button>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};

export default DiagnosticPage;
