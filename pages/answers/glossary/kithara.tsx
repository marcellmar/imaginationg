import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import RelatedContent from '../../../components/RelatedContent';
import LexiconDiagnostic from '../../../components/LexiconDiagnostic';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const KitharaPage: NextPage = () => {
  const kitharaQuestions = [
    {
      id: 1,
      question: "Do difficult conversations get postponed in your organization?",
      yesText: "HARMONY PRESERVED",
      yesSubtext: "Comfort over truth.",
      noText: "CONFLICT ENGAGED",
      noSubtext: "Truth over comfort."
    },
    {
      id: 2,
      question: "Do people agree in meetings but resist in execution?",
      yesText: "FALSE CONSENSUS",
      yesSubtext: "Nodding without believing.",
      noText: "REAL ALIGNMENT",
      noSubtext: "Agreement through conflict."
    },
    {
      id: 3,
      question: "Are real problems discussed only in private conversations?",
      yesText: "SHADOW DISCOURSE",
      yesSubtext: "Truth lives in hallways.",
      noText: "OPEN DISCOURSE",
      noSubtext: "Truth lives in meetings."
    },
    {
      id: 4,
      question: "Does your team avoid giving each other hard feedback?",
      yesText: "FEEDBACK AVOIDANCE",
      yesSubtext: "Kindness over growth.",
      noText: "TRUTH TELLING",
      noSubtext: "Growth over comfort."
    },
    {
      id: 5,
      question: "Do failures get reframed as 'learning experiences' without accountability?",
      yesText: "SOFT ACCOUNTABILITY",
      yesSubtext: "Everyone's a victim.",
      noText: "CLEAR OWNERSHIP",
      noSubtext: "Someone owns results."
    }
  ];

  const calculateKitharaResults = (answers: Record<number, 'yes' | 'no'>) => {
    const yesCount = Object.values(answers).filter(answer => answer === 'yes').length;
    const score = Math.round((yesCount / kitharaQuestions.length) * 100);
    
    let severity: 'low' | 'medium' | 'high' | 'critical';
    let title: string;
    let description: string;
    let recommendation: string;
    let interventionUrl: string | undefined;

    if (score <= 20) {
      severity = 'low';
      title = 'Healthy Conflict Culture';
      description = 'Your organization handles difficult conversations well. Truth flows freely, and productive conflict drives innovation.';
      recommendation = 'Maintain this healthy dynamic. Watch for early signs of comfort-seeking behavior.';
    } else if (score <= 40) {
      severity = 'medium';
      title = 'Early Kithara Warning Signs';
      description = 'Some false harmony is creeping in. You still have time to course-correct before it becomes cultural.';
      recommendation = 'Create structured opportunities for difficult conversations. Normalize productive disagreement.';
      interventionUrl = '/interventions/the-naming';
    } else if (score <= 70) {
      severity = 'high';
      title = 'Significant Kithara Infection';
      description = 'False harmony is damaging your organization. Real problems are hidden, and innovation is suffering.';
      recommendation = 'Immediate intervention required. Break the comfort conspiracy through forced truth-telling.';
      interventionUrl = '/interventions/the-naming';
    } else {
      severity = 'critical';
      title = 'Terminal Kithara State';
      description = 'Your organization is addicted to false peace. Truth has been exiled and reality is the enemy.';
      recommendation = 'Emergency cultural intervention. Consider leadership changes if resistance is too strong.';
      interventionUrl = '/interventions/the-naming';
    }

    return { score, severity, title, description, recommendation, interventionUrl };
  };

  return (
    <>
      <SEOHead
        title="Kithara - False Harmony | IMAGINATION G"
        description="Kithara is false harmony that prevents truth. Discover how comfort kills progress and why artificial peace destroys real alignment."
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
                Back to Answers
              </Link>

              {/* System Status Badge */}
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                LEXICON: KITHARA
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                KITHARA<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                False harmony that prevents truth. The comfort that kills progress.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Answer Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <div className="bg-zinc-950 border border-zinc-800 p-8 mb-12">
                <h2 className="text-2xl font-black mb-4 text-red-600">QUICK ANSWER</h2>
                <p className="text-lg leading-relaxed">
                  Kithara (ki-thar-ah) is artificial harmony that masks real discord. It's the 
                  organizational sedative—everyone agrees to pretend problems don't exist. 
                  This false peace prevents the productive conflict necessary for breakthrough.
                </p>
              </div>

              {/* TL;DR Box */}
              <div className="bg-black border-2 border-yellow-500 p-8 mb-12">
                <h3 className="text-xl font-black text-yellow-500 mb-4">TL;DR</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Kithara = fake harmony hiding real problems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Comfort becomes organizational cancer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Truth dies in the name of "getting along"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Breaking it requires controlled conflict</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">THE KITHARA SPECTRUM</h2>
              
              <div className="space-y-8">
                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">SURFACE KITHARA</h3>
                  <p className="text-zinc-400 mb-4">
                    Polite meetings where real issues stay unspoken. Everyone nods, nobody believes. 
                    The conspiracy of false agreement that wastes time and trust.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Symptoms:</strong> "Great idea!" (nobody implements it)<br />
                    <strong>Cost:</strong> Slow death by politeness
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">CULTURAL KITHARA</h3>
                  <p className="text-zinc-400 mb-4">
                    "That's just our culture" becomes the excuse for dysfunction. Toxicity gets 
                    rebranded as tradition. Problems become identity.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Symptoms:</strong> "We're like a family here" (dysfunctional family)<br />
                    <strong>Cost:</strong> Talent exodus, innovation death
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">STRATEGIC KITHARA</h3>
                  <p className="text-zinc-400 mb-4">
                    False consensus on direction. Everyone pretends the strategy makes sense. 
                    Nobody wants to be the one who "doesn't get it."
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Symptoms:</strong> Head nods in meetings, chaos in execution<br />
                    <strong>Cost:</strong> Resources burned on imaginary alignment
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">TERMINAL KITHARA</h3>
                  <p className="text-zinc-400 mb-4">
                    The organization becomes addicted to false peace. Truth-tellers get expelled. 
                    Reality becomes the enemy. Decline accelerates behind smiles.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Symptoms:</strong> "Everything's fine" while building burns<br />
                    <strong>Cost:</strong> Complete organizational failure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mechanics Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">HOW KITHARA KILLS</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-black mb-4 text-yellow-500">THE COMFORT TRAP</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• Difficult conversations get postponed forever</li>
                    <li>• Problems compound in darkness</li>
                    <li>• Innovation requires conflict—gets none</li>
                    <li>• Mediocrity becomes sacred</li>
                    <li>• Excellence threatens harmony</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-4 text-yellow-500">THE TRUTH DECAY</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• Data gets massaged to avoid conflict</li>
                    <li>• Feedback loops break</li>
                    <li>• Reality distortion compounds</li>
                    <li>• Decision-making loses ground truth</li>
                    <li>• Organization goes blind</li>
                  </ul>
                </div>
              </div>

              {/* Physics Visualization */}
              <div className="bg-zinc-950 border border-zinc-800 p-8">
                <h3 className="text-xl font-black mb-6">THE KITHARA EQUATION</h3>
                <div className="space-y-4 font-mono text-sm">
                  <div>FALSE HARMONY + TIME = INVISIBLE ROT</div>
                  <div className="text-red-600">×</div>
                  <div>CONFLICT AVOIDANCE = PROBLEM MULTIPLICATION</div>
                  <div className="text-red-600">=</div>
                  <div className="text-xl">SUDDEN CATASTROPHIC FAILURE</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breaking Kithara Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">SHATTERING THE FALSE HARMONY</h2>
              
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">PHASE 1</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Surface the Unspoken</h4>
                    <p className="text-zinc-400">Create safe spaces for dangerous truths. What everyone knows but won't say.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">PHASE 2</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Normalize Productive Conflict</h4>
                    <p className="text-zinc-400">Teach the difference between conflict and combat. Make disagreement safe.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">PHASE 3</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Reward Truth-Telling</h4>
                    <p className="text-zinc-400">Celebrate those who break kithara. Punish those who maintain it.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">PHASE 4</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Build Real Alignment</h4>
                    <p className="text-zinc-400">True harmony after conflict. Earned peace, not false peace.</p>
                  </div>
                </div>
              </div>

              {/* Truth Box */}
              <div className="bg-black border-l-4 border-yellow-500 p-8 mt-12">
                <h3 className="text-xl font-black mb-4 text-yellow-500">THE KITHARA PARADOX</h3>
                <p className="text-zinc-400">
                  Organizations that can't handle conflict can't handle success. The same muscles 
                  that navigate disagreement navigate growth. Kill conflict, kill capability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnostic Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <LexiconDiagnostic
                lexiconTerm="kithara"
                questions={kitharaQuestions}
                calculateResults={calculateKitharaResults}
                color="yellow"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">BREAK YOUR KITHARA</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Stop pretending everything's fine. Start building real strength through truth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services/clarity-catalyst-call"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                SURFACE THE TRUTH
              </Link>
              <Link 
                href="/answers"
                className="border-2 border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors"
              >
                EXPLORE MORE CONCEPTS
              </Link>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <RelatedContent
              title="Related Concepts"
              items={[
                {
                  href: "/answers/glossary/strategy-theater",
                  title: "Strategy Theater",
                  description: "Performance without progress. When planning prevents doing.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/soreth",
                  title: "Understanding Soreth",
                  description: "Hidden energy drains. The invisible tax on every action.",
                  color: "yellow"
                },
                {
                  href: "/interventions/the-naming",
                  title: "Name Your Kithara",
                  description: "Surface what your organization won't say.",
                  color: "green"
                }
              ]}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default KitharaPage;