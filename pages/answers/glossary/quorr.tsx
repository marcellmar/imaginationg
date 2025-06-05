import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import RelatedContent from '../../../components/RelatedContent';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const QuorrPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Quorr - Technical Debt as Features | IMAGINATION G"
        description="Quorr is technical debt disguised as features—complexity that serves no one. Learn to identify and eliminate these organizational parasites."
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
                LEXICON: QUORR
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                QUORR<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Technical debt disguised as features. Complexity that serves no one.
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
                  Quorr (kwor) is complexity masquerading as capability. It's when technical debt, 
                  process bloat, and feature creep get rebranded as "robust solutions." Every quorr 
                  makes your system harder to use while pretending to make it better.
                </p>
              </div>

              {/* TL;DR Box */}
              <div className="bg-black border-2 border-yellow-500 p-8 mb-12">
                <h3 className="text-xl font-black text-yellow-500 mb-4">TL;DR</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Quorr = complexity pretending to be features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Makes everything worse while looking impressive</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Users suffer, developers suffer, nobody wins</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>The art of solving problems that don't exist</span>
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
              <h2 className="text-3xl font-black mb-12">ANATOMY OF QUORR</h2>
              
              <div className="space-y-8">
                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">FEATURE QUORR</h3>
                  <p className="text-zinc-400 mb-4">
                    Features nobody asked for solving problems nobody has. Edge cases become 
                    core features. Options multiply until choosing becomes impossible.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Example:</strong> 47 export formats when everyone uses CSV<br />
                    <strong>Cost:</strong> 10x maintenance, 0.1x usage
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">ARCHITECTURE QUORR</h3>
                  <p className="text-zinc-400 mb-4">
                    Over-engineered solutions for simple problems. Microservices for a todo app. 
                    Enterprise patterns for startup scale. Resume-driven development.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Example:</strong> Kubernetes cluster for 100 daily users<br />
                    <strong>Cost:</strong> 50x complexity, -5x velocity
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">PROCESS QUORR</h3>
                  <p className="text-zinc-400 mb-4">
                    Workflows that create more work than they prevent. Approval chains that 
                    take longer than the task. Documentation nobody reads for code nobody runs.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Example:</strong> 5-step deployment process for static site<br />
                    <strong>Cost:</strong> Death by thousand procedures
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">INTEGRATION QUORR</h3>
                  <p className="text-zinc-400 mb-4">
                    Tools integrated with tools integrated with tools. Data flowing through 
                    seven systems to move from A to B. Rube Goldberg machines everywhere.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Example:</strong> Slack → Zapier → Airtable → API → Database → Email<br />
                    <strong>Cost:</strong> Fragility multiplied by complexity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detection Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">QUORR DETECTION CHECKLIST</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-black mb-4 text-red-500">PRODUCT QUORR SIGNALS</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• Features with single-digit usage</li>
                    <li>• Settings pages with 100+ options</li>
                    <li>• "Power user" features that power users hate</li>
                    <li>• Documentation longer than codebase</li>
                    <li>• Edge cases driving core design</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-4 text-red-500">TECHNICAL QUORR SIGNALS</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• More abstraction layers than features</li>
                    <li>• Config files configuring config files</li>
                    <li>• "Future-proofing" present problems</li>
                    <li>• Frameworks to manage frameworks</li>
                    <li>• Solutions looking for problems</li>
                  </ul>
                </div>
              </div>

              {/* Real Example Box */}
              <div className="bg-zinc-950 border border-zinc-800 p-8">
                <h3 className="text-xl font-black mb-6">REAL QUORR HORROR STORY</h3>
                <p className="text-zinc-400 mb-4">
                  <strong>The Request:</strong> "We need user authentication"
                </p>
                <p className="text-zinc-400 mb-4">
                  <strong>The Quorr:</strong> Custom OAuth provider, SAML integration, biometric support, 
                  blockchain identity verification, AI-powered fraud detection, decentralized user storage, 
                  quantum-resistant encryption.
                </p>
                <p className="text-zinc-400 mb-4">
                  <strong>The Result:</strong> 18 months later, users still can't log in reliably. 
                  Original developer quit. Nobody understands the system.
                </p>
                <p className="text-sm text-red-600">
                  <strong>The Truth:</strong> They needed email + password. That's it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Elimination Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">THE QUORR ELIMINATION PROTOCOL</h2>
              
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">LAW 1</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Question Before Building</h4>
                    <p className="text-zinc-400">"Who asked for this?" If the answer is "nobody," stop.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">LAW 2</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Measure Before Keeping</h4>
                    <p className="text-zinc-400">If less than 20% use it, it's quorr. Delete it.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">LAW 3</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Simplify Before Scaling</h4>
                    <p className="text-zinc-400">Make it work for 10 before architecting for 10,000.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">LAW 4</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Default to No</h4>
                    <p className="text-zinc-400">Every feature is guilty until proven innocent.</p>
                  </div>
                </div>
              </div>

              {/* The Quorr Test */}
              <div className="bg-black border-l-4 border-yellow-500 p-8 mt-12">
                <h3 className="text-xl font-black mb-4 text-yellow-500">THE QUORR TEST</h3>
                <p className="text-zinc-400 mb-4">
                  Can you explain it to a new user in one sentence? If not, it's quorr.
                </p>
                <p className="text-zinc-400 mb-4">
                  Would you build it again knowing what you know now? If not, it's quorr.
                </p>
                <p className="text-zinc-400">
                  Does it make the happy path harder? If yes, it's quorr.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">ELIMINATE YOUR QUORR</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Stop building complexity. Start delivering value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services/mvp-jumpstart"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                BUILD WITHOUT QUORR
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
                  href: "/answers/glossary/pilor",
                  title: "Pilor Loops",
                  description: "When systems optimize for their own dysfunction. Quorr's cousin.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/soreth",
                  title: "Soreth Drains",
                  description: "Hidden energy costs. What quorr does to your team.",
                  color: "yellow"
                },
                {
                  href: "/interventions/first-blood-build",
                  title: "First Blood Build",
                  description: "Ship the opposite of quorr. Pure user value, zero bloat.",
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

export default QuorrPage;