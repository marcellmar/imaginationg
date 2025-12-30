import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import { GPIRadarChart } from '../components/gpi';
import { ArrowLeft } from 'lucide-react';
import {
  calculateFullGPI,
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
    { id: 1, dimension: "DECISION_LATENCY" as DimensionKey, question: "Did you make a significant decision this week without seeking external validation?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 2, dimension: "DECISION_LATENCY" as DimensionKey, question: "When faced with decisions, do you force them into YES/NO rather than maybe/later?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 3, dimension: "DECISION_LATENCY" as DimensionKey, question: "Do most decisions happen within 24 hours of being raised?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 4, dimension: "ERROR_CORRECTION" as DimensionKey, question: "Have you killed or reversed a decision this month when evidence changed?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 5, dimension: "DECISION_LATENCY" as DimensionKey, question: "Do you make decisions with incomplete information rather than waiting for certainty?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 6, dimension: "STRUCTURAL_LOCKIN" as DimensionKey, question: "Do you delegate decisions to the person closest to the problem?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 7, dimension: "ERROR_CORRECTION" as DimensionKey, question: "When you change your mind, do you examine what bias led you astray?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 8, dimension: "DECISION_LATENCY" as DimensionKey, question: "Do you regularly revisit and kill decisions that no longer serve you?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 9, dimension: "KNOWLEDGE_VELOCITY" as DimensionKey, question: "Did you spend more time building than planning this week?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 10, dimension: "KNOWLEDGE_VELOCITY" as DimensionKey, question: "Did you ship something visible to users this week?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 11, dimension: "KNOWLEDGE_VELOCITY" as DimensionKey, question: "Can you ship improvements without anyone else's approval?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 12, dimension: "TALENT_FLOW" as DimensionKey, question: "Are you moving faster now than 3 months ago?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 13, dimension: "KNOWLEDGE_VELOCITY" as DimensionKey, question: "Do you ship smaller versions rather than waiting for the full vision?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 14, dimension: "KNOWLEDGE_VELOCITY" as DimensionKey, question: "Do you get real user feedback within 48 hours of shipping?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 15, dimension: "KNOWLEDGE_VELOCITY" as DimensionKey, question: "Can you implement feedback and ship improvements within a week?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 16, dimension: "TALENT_FLOW" as DimensionKey, question: "Do you regularly kill features that aren't working?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 17, dimension: "KNOWLEDGE_LOCATION" as DimensionKey, question: "Have you challenged a core assumption about your business this month?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 18, dimension: "ERROR_CORRECTION" as DimensionKey, question: "Did you have a productive disagreement that led to clarity this week?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 19, dimension: "KNOWLEDGE_LOCATION" as DimensionKey, question: "Can you explain your business model in one sentence?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 20, dimension: "ERROR_CORRECTION" as DimensionKey, question: "Are you profitable or have a clear path within 12 months?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 21, dimension: "KNOWLEDGE_LOCATION" as DimensionKey, question: "Do you talk to customers who've canceled or chosen competitors?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 22, dimension: "KNOWLEDGE_LOCATION" as DimensionKey, question: "Do you know your real unit economics and customer lifetime value?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 23, dimension: "KNOWLEDGE_LOCATION" as DimensionKey, question: "Do team members openly disagree with you in meetings?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 24, dimension: "KNOWLEDGE_LOCATION" as DimensionKey, question: "Do you study what competitors do better than you?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 25, dimension: "STRUCTURAL_LOCKIN" as DimensionKey, question: "Did your last 3 meetings result in immediate actions?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 26, dimension: "STRUCTURAL_LOCKIN" as DimensionKey, question: "Do you feel energized after working on core activities?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 27, dimension: "STRUCTURAL_LOCKIN" as DimensionKey, question: "Are your processes helping you move faster?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 28, dimension: "STRUCTURAL_LOCKIN" as DimensionKey, question: "Do you match tasks to people's natural problem-solving styles?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 29, dimension: "CAPITAL_INTENSITY" as DimensionKey, question: "Do you default to async communication over meetings?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 30, dimension: "CAPITAL_INTENSITY" as DimensionKey, question: "Do you automate repetitive tasks rather than hiring?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 31, dimension: "CAPITAL_INTENSITY" as DimensionKey, question: "Do you measure leading indicators, not just lagging ones?", yes: "Yes", no: "No", fieldAnswer: true },
    { id: 32, dimension: "STRUCTURAL_LOCKIN" as DimensionKey, question: "Do you regularly remove systems that no longer serve you?", yes: "Yes", no: "No", fieldAnswer: true },
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
          stage: getStateLabel(gpiResults.state),
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
          title="GPI Diagnostic | IMAGINATION G"
          description="Measure your Growing Pains Index. 32 questions. 7 dimensions. See where energy gets stuck."
        />
        <div className="min-h-screen bg-black text-white">
          <Navigation currentPage="diagnostic" />
          <section className="pt-20 pb-16 px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 mb-6">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  DIAGNOSTIC READY
                </div>
                <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                  GPI DIAGNOSTIC
                </h1>
                <p className="text-zinc-500">
                  32 questions. 7 dimensions. Where does energy get stuck?
                </p>
              </div>

              {/* Industry Selection */}
              <div className="bg-zinc-950 border border-zinc-800 p-6 mb-8">
                <div className="text-xs font-mono text-zinc-600 mb-3">SELECT INDUSTRY</div>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full bg-black border border-zinc-700 p-3 text-white"
                >
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
                <div className="text-xs text-zinc-600 mt-2">For benchmark comparison</div>
              </div>

              {/* Scale Preview */}
              <div className="bg-zinc-950 border border-zinc-800 p-6 mb-8">
                <div className="text-xs font-mono text-zinc-600 mb-4">GPI SCALE</div>
                <div className="relative h-3 bg-zinc-900 rounded-full mb-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full" />
                </div>
                <div className="flex justify-between text-xs font-mono">
                  <div>
                    <span className="text-green-500">1</span>
                    <span className="text-zinc-600 ml-1">Flow</span>
                  </div>
                  <div>
                    <span className="text-red-500">10</span>
                    <span className="text-zinc-600 ml-1">Friction</span>
                  </div>
                </div>
              </div>

              {/* Start */}
              <div className="text-center">
                <button
                  onClick={() => setCurrentStep('questions')}
                  className="bg-red-600 px-10 py-4 font-black hover:bg-red-700 transition-colors"
                >
                  START DIAGNOSTIC
                </button>
                <p className="text-zinc-600 text-xs mt-4">~8 minutes. No email required.</p>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  // ANALYSIS
  if (currentStep === 'analysis') {
    const dims = getOrderedDimensions();
    return (
      <>
        <SEOHead title="Calculating GPI | IMAGINATION G" description="Processing diagnostic results." />
        <div className="min-h-screen bg-black text-white">
          <Navigation currentPage="diagnostic" />
          <section className="pt-20 pb-16 px-6">
            <div className="max-w-md mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-yellow-500 mb-8">
                <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                PROCESSING
              </div>
              <h1 className="text-2xl font-black mb-12">CALCULATING GPI</h1>
              <div className="space-y-3 text-left mb-8">
                {dims.map((dim, i) => (
                  <div key={dim.key} className="flex items-center gap-3 text-sm">
                    <div className={`w-2 h-2 rounded-full transition-colors ${analysisStep > i ? 'bg-green-500' : 'bg-zinc-700'}`} />
                    <span className={analysisStep > i ? 'text-zinc-400' : 'text-zinc-600'}>
                      {dim.label}
                    </span>
                    {analysisStep > i && <span className="text-green-500 text-xs">done</span>}
                  </div>
                ))}
                <div className="flex items-center gap-3 text-sm">
                  <div className={`w-2 h-2 rounded-full transition-colors ${analysisStep > 7 ? 'bg-green-500' : 'bg-zinc-700'}`} />
                  <span className={analysisStep > 7 ? 'text-zinc-400' : 'text-zinc-600'}>Composite score</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className={`w-2 h-2 rounded-full transition-colors ${analysisStep > 8 ? 'bg-green-500' : 'bg-zinc-700'}`} />
                  <span className={analysisStep > 8 ? 'text-zinc-400' : 'text-zinc-600'}>Industry comparison</span>
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
          title={`GPI: ${gpiResults.overall} | IMAGINATION G`}
          description={`Your Growing Pains Index is ${gpiResults.overall}. ${stateLabel}.`}
        />
        <div className="min-h-screen bg-black text-white">
          <Navigation currentPage="diagnostic" />
          <section className="pt-20 pb-16 px-6">
            <div className="max-w-5xl mx-auto">

              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-green-500 mb-4">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  ANALYSIS COMPLETE
                </div>
                <h1 className="text-2xl font-black">YOUR GPI RESULTS</h1>
              </div>

              {/* Main Display: Score + Radar */}
              <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">

                {/* Score */}
                <div className="flex flex-col items-center lg:items-end">
                  <div className="bg-zinc-950 border border-zinc-800 p-8 w-full max-w-sm">
                    <div className="text-xs font-mono text-zinc-600 mb-4">GROWING PAINS INDEX</div>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span
                        className="text-7xl font-black tabular-nums"
                        style={{ color: stateColor === 'green' ? '#22c55e' : stateColor === 'yellow' ? '#eab308' : '#ef4444' }}
                      >
                        {gpiResults.overall}
                      </span>
                      <span className="text-2xl text-zinc-700">/10</span>
                    </div>
                    <div className="text-sm font-bold mb-4" style={{ color: stateColor === 'green' ? '#22c55e' : stateColor === 'yellow' ? '#eab308' : '#ef4444' }}>
                      {stateLabel.toUpperCase()}
                    </div>
                    <div className="relative h-2 bg-zinc-900 rounded-full mb-4">
                      <div
                        className="absolute top-0 left-0 h-full rounded-full"
                        style={{
                          width: `${(gpiResults.overall / 10) * 100}%`,
                          backgroundColor: stateColor === 'green' ? '#22c55e' : stateColor === 'yellow' ? '#eab308' : '#ef4444'
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-green-600">FLOW</span>
                      <span className="text-red-600">FRICTION</span>
                    </div>
                  </div>

                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-4 w-full max-w-sm">
                    <div className="bg-zinc-950 border border-zinc-800 p-4 text-center">
                      <div className="text-xs text-zinc-600 mb-1">PERCENTILE</div>
                      <div className="text-2xl font-black">{gpiResults.industryComparison.percentile}th</div>
                    </div>
                    <div className="bg-zinc-950 border border-zinc-800 p-4 text-center">
                      <div className="text-xs text-zinc-600 mb-1">VS INDUSTRY</div>
                      <div className={`text-2xl font-black ${gpiResults.industryComparison.position === 'above' ? 'text-green-500' : gpiResults.industryComparison.position === 'below' ? 'text-red-500' : 'text-yellow-500'}`}>
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
                  <div className="text-xs font-mono text-zinc-600 mt-2 text-center lg:text-left">
                    HOVER FOR DETAILS
                  </div>
                </div>
              </div>

              {/* Dimension Breakdown */}
              <div className="bg-zinc-950 border border-zinc-800 p-6 mb-8">
                <div className="text-xs font-mono text-zinc-600 mb-4">DIMENSION BREAKDOWN</div>
                <div className="space-y-3">
                  {gpiResults.dimensions
                    .sort((a, b) => b.score - a.score)
                    .map((dim) => {
                      const isWeakest = dim.dimension === gpiResults.weakestDimension;
                      const isStrongest = dim.dimension === gpiResults.strongestDimension;
                      return (
                        <div key={dim.dimension} className="flex items-center gap-4">
                          <div className="w-32 text-xs font-bold truncate">
                            {dim.label}
                            {isWeakest && <span className="text-red-500 ml-1">*</span>}
                            {isStrongest && <span className="text-green-500 ml-1">*</span>}
                          </div>
                          <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${(dim.score / 10) * 100}%`,
                                backgroundColor: dim.score <= 3 ? '#22c55e' : dim.score <= 6 ? '#eab308' : '#ef4444'
                              }}
                            />
                          </div>
                          <div className="w-8 text-right text-sm font-mono">
                            {dim.score}
                          </div>
                        </div>
                      );
                    })}
                </div>
                <div className="flex gap-4 mt-4 text-xs text-zinc-600">
                  <span><span className="text-red-500">*</span> highest friction</span>
                  <span><span className="text-green-500">*</span> lowest friction</span>
                </div>
              </div>

              {/* Recommendation */}
              {gpiResults.weakestDimension && (
                <div className="border border-zinc-800 p-6 mb-8">
                  <div className="text-xs font-mono text-zinc-600 mb-2">START HERE</div>
                  <div className="text-lg font-black mb-2">
                    {GPI_DIMENSIONS[gpiResults.weakestDimension].label}
                  </div>
                  <p className="text-sm text-zinc-500 mb-4">
                    Your highest friction dimension. Reducing this score will have the biggest impact.
                  </p>
                  <Link
                    href={`/actions/${gpiResults.weakestDimension === 'DECISION_LATENCY' ? 'decision-speed' :
                           gpiResults.weakestDimension === 'ERROR_CORRECTION' ? 'error-loops' :
                           gpiResults.weakestDimension === 'KNOWLEDGE_LOCATION' ? 'knowledge-flow' :
                           gpiResults.weakestDimension === 'STRUCTURAL_LOCKIN' ? 'unlock-structure' :
                           gpiResults.weakestDimension === 'TALENT_FLOW' ? 'talent-mobility' :
                           gpiResults.weakestDimension === 'CAPITAL_INTENSITY' ? 'capital-efficiency' :
                           'velocity-boost'}`}
                    className="inline-block bg-red-600 px-6 py-3 font-black hover:bg-red-700 transition-colors"
                  >
                    VIEW ACTION GUIDE
                  </Link>
                </div>
              )}

              {/* Save Results */}
              {!saved && (
                <div className="bg-zinc-950 border border-zinc-800 p-6 mb-8 text-center">
                  <div className="text-xs font-mono text-zinc-600 mb-2">SAVE YOUR RESULTS</div>
                  <p className="text-sm text-zinc-500 mb-4">
                    Get your results emailed to you. Track your progress over time.
                  </p>
                  <button
                    onClick={() => setShowSaveModal(true)}
                    className="bg-red-600 px-6 py-3 font-black hover:bg-red-700 transition-colors"
                  >
                    EMAIL MY RESULTS
                  </button>
                </div>
              )}

              {saved && (
                <div className="bg-green-950/30 border border-green-800 p-6 mb-8 text-center">
                  <div className="text-green-500 font-bold mb-2">Results saved and emailed!</div>
                  <p className="text-sm text-zinc-500">Check your inbox for your full GPI breakdown.</p>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/actions"
                  className="border border-zinc-700 px-6 py-3 font-bold hover:border-zinc-500 transition-colors"
                >
                  ALL ACTION GUIDES
                </Link>
                <Link
                  href="/gpi-framework"
                  className="border border-zinc-700 px-6 py-3 font-bold hover:border-zinc-500 transition-colors"
                >
                  UNDERSTAND GPI
                </Link>
                <button
                  onClick={restartDiagnostic}
                  className="border border-zinc-700 px-6 py-3 font-bold hover:border-zinc-500 transition-colors"
                >
                  RETAKE
                </button>
              </div>

              <p className="text-center text-zinc-600 text-xs mt-8">
                Retake in 90 days to measure change.
              </p>

              {/* Save Modal */}
              {showSaveModal && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
                  <div className="bg-zinc-950 border border-zinc-800 p-8 max-w-md w-full">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-black">SAVE YOUR RESULTS</h3>
                      <button
                        onClick={() => setShowSaveModal(false)}
                        className="text-zinc-600 hover:text-white text-2xl"
                      >
                        &times;
                      </button>
                    </div>

                    <form onSubmit={handleSaveResults} className="space-y-4">
                      <div>
                        <label className="block text-xs font-mono text-zinc-600 mb-2">NAME *</label>
                        <input
                          type="text"
                          required
                          value={saveForm.name}
                          onChange={(e) => setSaveForm({ ...saveForm, name: e.target.value })}
                          className="w-full bg-black border border-zinc-700 p-3 text-white focus:border-red-600 outline-none"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-zinc-600 mb-2">EMAIL *</label>
                        <input
                          type="email"
                          required
                          value={saveForm.email}
                          onChange={(e) => setSaveForm({ ...saveForm, email: e.target.value })}
                          className="w-full bg-black border border-zinc-700 p-3 text-white focus:border-red-600 outline-none"
                          placeholder="you@company.com"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-zinc-600 mb-2">COMPANY</label>
                        <input
                          type="text"
                          value={saveForm.company}
                          onChange={(e) => setSaveForm({ ...saveForm, company: e.target.value })}
                          className="w-full bg-black border border-zinc-700 p-3 text-white focus:border-red-600 outline-none"
                          placeholder="Your company"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-zinc-600 mb-2">CITY</label>
                        <input
                          type="text"
                          value={saveForm.city}
                          onChange={(e) => setSaveForm({ ...saveForm, city: e.target.value })}
                          className="w-full bg-black border border-zinc-700 p-3 text-white focus:border-red-600 outline-none"
                          placeholder="Your city"
                        />
                      </div>

                      <div className="flex items-center gap-3 pt-2">
                        <input
                          type="checkbox"
                          id="sendEmail"
                          checked={sendEmail}
                          onChange={(e) => setSendEmail(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                        <label htmlFor="sendEmail" className="text-sm text-zinc-400">
                          Email me my results
                        </label>
                      </div>

                      {saveError && (
                        <div className="text-red-500 text-sm">{saveError}</div>
                      )}

                      <button
                        type="submit"
                        disabled={saving}
                        className="w-full bg-red-600 py-4 font-black hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {saving ? 'SAVING...' : 'SAVE RESULTS'}
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </>
    );
  }

  // QUESTIONS
  const currentQ = questions[currentQuestion - 1];
  const progress = (currentQuestion / questions.length) * 100;

  return (
    <>
      <SEOHead
        title={`Question ${currentQuestion} | GPI Diagnostic`}
        description={currentQ.question}
      />
      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="diagnostic" />
        <section className="pt-20 pb-16 px-6">
          <div className="max-w-xl mx-auto">

            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between text-xs font-mono text-zinc-600 mb-2">
                <span>{currentQuestion} / {questions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-1 bg-zinc-900 rounded-full">
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
                className="flex items-center gap-2 text-zinc-600 hover:text-zinc-400 transition-colors text-sm mb-8"
              >
                <ArrowLeft size={16} />
                Back
              </button>
            )}

            {/* Question */}
            <div className="mb-12">
              <div className="text-xs font-mono text-zinc-600 mb-4">
                {GPI_DIMENSIONS[currentQ.dimension].label}
              </div>
              <h2 className="text-xl md:text-2xl font-black leading-tight">
                {currentQ.question}
              </h2>
            </div>

            {/* Answers */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleAnswer('yes')}
                className="border-2 border-green-600 p-6 hover:bg-green-600 transition-all text-center font-black text-lg"
              >
                YES
              </button>
              <button
                onClick={() => handleAnswer('no')}
                className="border-2 border-red-600 p-6 hover:bg-red-600 transition-all text-center font-black text-lg"
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
