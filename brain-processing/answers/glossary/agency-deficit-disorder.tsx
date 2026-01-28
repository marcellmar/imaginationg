import Head from 'next/head';
import Link from 'next/link';
import LexiconDiagnostic from '../../../components/LexiconDiagnostic';

export default function AgencyDeficitDisorder() {
  const agencyQuestions = [
    {
      id: 1,
      question: "Do you seek external validation before making important decisions?",
      yesText: "VALIDATION DEPENDENT",
      yesSubtext: "Outsourced decision making.",
      noText: "INTERNAL AUTHORITY",
      noSubtext: "Self-directed decisions."
    },
    {
      id: 2,
      question: "Do you need permission to act on obvious opportunities?",
      yesText: "PERMISSION TRAPPED",
      yesSubtext: "Agency held hostage.",
      noText: "OPPORTUNITY SEIZED",
      noSubtext: "Agency activated."
    },
    {
      id: 3,
      question: "Do you defer to committees instead of taking ownership?",
      yesText: "COMMITTEE REFUGE",
      yesSubtext: "Avoiding responsibility.",
      noText: "OWNERSHIP SEIZED",
      noSubtext: "Responsibility embraced."
    },
    {
      id: 4,
      question: "Do you wait for more data instead of acting on available truth?",
      yesText: "ANALYSIS PARALYSIS",
      yesSubtext: "Data replacing agency.",
      noText: "TRUTH ACTION",
      noSubtext: "Acting on available signal."
    },
    {
      id: 5,
      question: "Do you avoid decisions that might upset stakeholders?",
      yesText: "STAKEHOLDER PARALYSIS",
      yesSubtext: "Others' comfort over action.",
      noText: "STAKEHOLDER OVERRIDE",
      noSubtext: "Action over comfort."
    }
  ];

  const calculateAgencyResults = (answers: Record<number, 'yes' | 'no'>) => {
    const yesCount = Object.values(answers).filter(answer => answer === 'yes').length;
    const score = Math.round((yesCount / agencyQuestions.length) * 100);
    
    let severity: 'low' | 'medium' | 'high' | 'critical';
    let title: string;
    let description: string;
    let recommendation: string;
    let interventionUrl: string | undefined;

    if (score <= 20) {
      severity = 'low';
      title = 'Strong Internal Agency';
      description = 'You maintain strong self-direction and decision-making capability. Agency is intact.';
      recommendation = 'Protect this independence. Watch for external pressures that could erode agency.';
    } else if (score <= 40) {
      severity = 'medium';
      title = 'Agency Erosion Beginning';
      description = 'Some decision-making capability is being outsourced. Early intervention can prevent further erosion.';
      recommendation = 'Reclaim decision authority. Practice making choices without external validation.';
      interventionUrl = '/interventions/thirty-day-drift-break';
    } else if (score <= 70) {
      severity = 'high';
      title = 'Significant Agency Deficit';
      description = 'Most decisions require external approval. Your agency has been systematically outsourced.';
      recommendation = 'Emergency agency restoration. Take back decision-making authority immediately.';
      interventionUrl = '/interventions/first-blood-build';
    } else {
      severity = 'critical';
      title = 'Complete Agency Collapse';
      description = 'You cannot act without permission. Agency has been completely externalized.';
      recommendation = 'Full agency reconstruction required. May need to exit systems that captured your agency.';
      interventionUrl = '/interventions/the-naming';
    }

    return { score, severity, title, description, recommendation, interventionUrl };
  };

  return (
    <>
      <Head>
        <title>What is Agency Deficit Disorder? | IMAGINATION G</title>
        <meta name="description" content="Agency Deficit Disorder is the systematic erosion of internal decision-making capability. The epidemic of outsourced agency that makes organizations unable to act on their own signal." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="mb-8">
            <Link href="/answers" className="text-red-500 text-sm font-bold">← BACK TO ANSWERS</Link>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-6">AGENCY DEFICIT DISORDER</h1>
            <p className="text-xl text-zinc-400">The real pandemic killing organizations</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-red-500">DEFINITION</h2>
            <div className="border-l-4 border-red-500 pl-6 mb-8">
              <p className="text-lg">
                <strong>Agency Deficit Disorder</strong> is the systematic erosion of internal decision-making capability. 
                It's the epidemic of outsourced agency that makes organizations unable to act on their own signal.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">THE AGENCY EPIDEMIC</h2>
            <div className="bg-zinc-900 border border-zinc-800 p-8">
              <p className="text-lg mb-4">
                <strong>Most organizational dysfunction stems from one source: the systematic destruction of internal agency.</strong>
              </p>
              <p className="text-zinc-400">
                Organizations have become so dependent on external validation, expert consultation, and consensus building 
                that they've lost the ability to trust their own signal and act decisively.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6">AGENCY DEFICIT SYMPTOMS</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">EARLY STAGE</h3>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• "Let's get an expert opinion on this"</li>
                  <li>• "We should research best practices"</li>
                  <li>• "What do other companies do?"</li>
                  <li>• "We need more data to decide"</li>
                </ul>
              </div>
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">TERMINAL STAGE</h3>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• Cannot make any decision internally</li>
                  <li>• Paralyzed without external input</li>
                  <li>• Internal signal completely atrophied</li>
                  <li>• Becomes consultant-dependent organism</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-black mb-6 text-green-500">RESTORING AGENCY</h2>
            <div className="border border-green-500 p-6">
              <h3 className="font-bold mb-3">The Agency Recovery Protocol:</h3>
              <ol className="space-y-3 text-zinc-300">
                <li>1. <strong>External input prohibition:</strong> Make decisions with internal signal only</li>
                <li>2. <strong>Signal amplification:</strong> Trust what you already know</li>
                <li>3. <strong>Decision velocity:</strong> Choose quickly based on available information</li>
                <li>4. <strong>Outcome ownership:</strong> Live with consequences of your choices</li>
                <li>5. <strong>Agency exercise:</strong> Make daily decisions to rebuild capability</li>
              </ol>
            </div>
          </div>

          <LexiconDiagnostic
            lexiconTerm="agency deficit disorder"
            questions={agencyQuestions}
            calculateResults={calculateAgencyResults}
            color="red"
          />

          <div className="border border-zinc-800 p-8 text-center">
            <h3 className="text-2xl font-black mb-4">Ready to Restore Agency?</h3>
            <p className="text-zinc-400 mb-6">
              Break external dependency. Get the intervention that rebuilds internal decision-making capability.
            </p>
            <Link href="/interventions/the-naming" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 transition-colors mr-4">
              REBUILD AGENCY
            </Link>
            <Link href="/diagnostic" className="inline-block border border-red-500 text-red-500 hover:bg-red-500 hover:text-black font-bold py-3 px-8 transition-colors">
              DETECT AGENCY DEFICIT
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}