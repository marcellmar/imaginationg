import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import RelatedContent from '../../components/RelatedContent';
import { ArrowLeft, BookOpen } from 'lucide-react';

const OrganizationalAntibodiesPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Organizational Antibodies - Why Good Ideas Get Rejected | IMAGINATION G"
        description="Your organization has an immune system that protects against foreign capabilities, even beneficial ones. Understanding the antibody response."
        ogType="article"
        ogImage="/images/og-insights.svg"
        article={{
          publishedTime: "2025-01-15T00:00:00Z",
          author: "Marcus Davis"
        }}
      />

      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Navigation currentPage="insights" />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <Link href="/insights" className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors mb-8">
              <ArrowLeft size={16} />
              Back to Insights
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-mono text-red-600 bg-red-50 px-3 py-1 rounded">GPI FOUNDATIONS</span>
              <span className="text-xs text-stone-500">9 min read</span>
              <span className="text-xs text-stone-400">•</span>
              <span className="text-xs text-stone-500">ERROR CORRECTION</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-[1.1]">
              ORGANIZATIONAL<br />ANTIBODIES<span className="text-red-600">.</span>
            </h1>

            <p className="text-2xl text-stone-500 mb-8">
              Why Good Ideas Get Rejected
            </p>

            <p className="text-xl text-stone-500 max-w-2xl">
              Your organization has an immune system. It protects against foreign capabilities, even beneficial ones. Understanding the antibody response predicts which changes will succeed.
            </p>

            {/* ANTIBODY VISUAL - Immune Response */}
            <div className="mt-16 flex justify-center">
              <div className="relative w-full max-w-md">
                <svg viewBox="0 0 300 200" className="w-full h-auto">
                  {/* Organization body */}
                  <ellipse cx="150" cy="100" rx="120" ry="80" fill="#f5f5f4" stroke="#d6d3d1" strokeWidth="2" />
                  <text x="150" y="170" textAnchor="middle" fill="#a8a29e" fontSize="10" fontFamily="monospace">THE ORGANIZATION</text>

                  {/* New idea entering - green circle */}
                  <circle cx="150" cy="100" r="15" fill="#22c55e">
                    <animate attributeName="r" values="12;15;12" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <text x="150" y="104" textAnchor="middle" fill="black" fontSize="8" fontWeight="bold">NEW</text>

                  {/* Antibodies attacking from all sides */}
                  {/* Process Antibody - top */}
                  <g>
                    <circle cx="150" cy="40" r="12" fill="#eab308">
                      <animate attributeName="cy" values="35;55;35" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                    <text x="150" y="20" textAnchor="middle" fill="#eab308" fontSize="7" fontFamily="monospace">PROCESS</text>
                  </g>

                  {/* Power Antibody - right */}
                  <g>
                    <circle cx="220" cy="100" r="12" fill="#ef4444">
                      <animate attributeName="cx" values="225;195;225" dur="1.8s" repeatCount="indefinite" />
                    </circle>
                    <text x="255" y="103" fill="#ef4444" fontSize="7" fontFamily="monospace">POWER</text>
                  </g>

                  {/* Identity Antibody - bottom */}
                  <g>
                    <circle cx="150" cy="160" r="12" fill="#a855f7">
                      <animate attributeName="cy" values="165;145;165" dur="1.6s" repeatCount="indefinite" />
                    </circle>
                    <text x="150" y="185" textAnchor="middle" fill="#a855f7" fontSize="7" fontFamily="monospace">IDENTITY</text>
                  </g>

                  {/* Capability Antibody - left */}
                  <g>
                    <circle cx="80" cy="100" r="12" fill="#f97316">
                      <animate attributeName="cx" values="75;105;75" dur="1.7s" repeatCount="indefinite" />
                    </circle>
                    <text x="35" y="103" fill="#f97316" fontSize="7" fontFamily="monospace">CAPABILITY</text>
                  </g>

                  {/* Attack lines - dashed, animating toward center */}
                  <line x1="150" y1="55" x2="150" y2="85" stroke="#eab308" strokeWidth="1" strokeDasharray="3,3">
                    <animate attributeName="stroke-dashoffset" values="0;-12" dur="0.5s" repeatCount="indefinite" />
                  </line>
                  <line x1="195" y1="100" x2="165" y2="100" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,3">
                    <animate attributeName="stroke-dashoffset" values="0;-12" dur="0.5s" repeatCount="indefinite" />
                  </line>
                  <line x1="150" y1="145" x2="150" y2="115" stroke="#a855f7" strokeWidth="1" strokeDasharray="3,3">
                    <animate attributeName="stroke-dashoffset" values="0;-12" dur="0.5s" repeatCount="indefinite" />
                  </line>
                  <line x1="105" y1="100" x2="135" y2="100" stroke="#f97316" strokeWidth="1" strokeDasharray="3,3">
                    <animate attributeName="stroke-dashoffset" values="0;-12" dur="0.5s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* Caption */}
                <div className="text-center mt-4">
                  <span className="text-xs font-mono text-stone-400">4 antibody types attack foreign changes. Rejection is automatic.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8 px-6">
          <div className="max-w-3xl mx-auto space-y-16">

            {/* Opening */}
            <div className="space-y-4 text-stone-600">
              <p>You've seen it happen. Someone proposes a better process, a smarter tool, a more efficient structure. The idea is clearly good. The evidence is strong.</p>
              <p className="text-stone-900 text-2xl font-black py-4">And the organization kills it.</p>
              <p>Not through malice. Not through stupidity. Through something that functions exactly like an immune response.</p>
            </div>

            {/* Quote */}
            <div className="bg-white border border-stone-200 p-8">
              <p className="text-2xl text-stone-900 italic">"Antibodies don't reject change. They reject foreign metabolisms."</p>
            </div>

            {/* Biological parallel */}
            <div className="border-l-2 border-red-600 pl-6 space-y-4">
              <h2 className="text-xs font-mono text-red-500 mb-4">THE BIOLOGICAL PARALLEL</h2>
              <p className="text-stone-600">When you receive an organ transplant, your immune system doesn't evaluate whether the new kidney is "better."</p>
              <p className="text-stone-600">It detects that the tissue is foreign and mobilizes to destroy it.</p>
              <p className="text-stone-900 font-bold">Organizations work the same way.</p>
            </div>

            {/* 4 Antibody Types - Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-950/20 border border-yellow-900/50 p-6">
                <p className="text-yellow-500 font-bold text-sm mb-2">PROCESS ANTIBODIES</p>
                <p className="text-stone-500 text-xs mb-3">"We've always done it this way"</p>
                <p className="text-stone-600 text-sm">Protecting known workflows. Change introduces chaos of relearning.</p>
              </div>
              <div className="bg-red-950/20 border border-red-900/50 p-6">
                <p className="text-red-500 font-bold text-sm mb-2">POWER ANTIBODIES</p>
                <p className="text-stone-500 text-xs mb-3">"Who approved this change?"</p>
                <p className="text-stone-600 text-sm">Protecting hierarchical authority. Power structures are survival structures.</p>
              </div>
              <div className="bg-purple-950/20 border border-purple-900/50 p-6">
                <p className="text-purple-500 font-bold text-sm mb-2">IDENTITY ANTIBODIES</p>
                <p className="text-stone-500 text-xs mb-3">"That's not who we are"</p>
                <p className="text-stone-600 text-sm">Protecting self-concept. Identity is the deepest defense layer.</p>
              </div>
              <div className="bg-orange-950/20 border border-orange-900/50 p-6">
                <p className="text-orange-500 font-bold text-sm mb-2">CAPABILITY ANTIBODIES</p>
                <p className="text-stone-500 text-xs mb-3">"We don't have the skills"</p>
                <p className="text-stone-600 text-sm">Protecting against competency threats. Existing expertise feels existential threat.</p>
              </div>
            </div>

            {/* Response Cycle */}
            <div className="bg-white border border-stone-200 p-8">
              <h2 className="text-xs font-mono text-stone-500 mb-6">THE RESPONSE CYCLE</h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="text-red-600 font-mono text-lg">1</span>
                  <div>
                    <p className="text-stone-900 font-bold">DETECTION</p>
                    <p className="text-stone-500 text-sm">"Something foreign has entered." Days to weeks.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-red-600 font-mono text-lg">2</span>
                  <div>
                    <p className="text-stone-900 font-bold">THREAT ASSESSMENT</p>
                    <p className="text-stone-500 text-sm">"Does this threaten our operation?" Weeks to months.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-red-600 font-mono text-lg">3</span>
                  <div>
                    <p className="text-stone-900 font-bold">MOBILIZATION</p>
                    <p className="text-stone-500 text-sm">"Rally defenses." Meetings multiply. Objections surface. Months.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-red-600 font-mono text-lg">4</span>
                  <div>
                    <p className="text-stone-900 font-bold">REJECTION OR INTEGRATION</p>
                    <p className="text-stone-500 text-sm">"Expel or adapt." Usually expelled. Months to years.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* GPI vs Antibody Strength */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono text-stone-500 mb-4">ANTIBODY STRENGTH BY GPI</h2>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex items-center gap-4"><span className="text-green-500">GPI 1-3:</span> <span className="text-stone-500">Weak antibodies. Changes absorbed. Continuous adaptation.</span></div>
                <div className="flex items-center gap-4"><span className="text-yellow-500">GPI 4-6:</span> <span className="text-stone-500">Moderate antibodies. Some changes absorbed. Slower learning.</span></div>
                <div className="flex items-center gap-4"><span className="text-red-500">GPI 7-10:</span> <span className="text-stone-500">Strong antibodies. Most changes rejected. Learning stalled.</span></div>
              </div>
            </div>

            {/* The Problem */}
            <div className="border-l-2 border-yellow-500 pl-6 space-y-4">
              <p className="text-xl text-stone-900 italic">"You can't transplant field state capabilities into particle state organizations without metabolic preparation."</p>
              <p className="text-stone-500">The rejection is automatic.</p>
            </div>

            {/* Why arguments don't work */}
            <div className="space-y-4 text-stone-600">
              <p>The standard change management playbook: communicate better, get executive sponsorship, demonstrate ROI, build coalitions.</p>
              <p>This is like telling someone with an organ transplant to "just convince their immune system" that the kidney is good.</p>
              <p className="text-stone-900 font-bold text-xl pt-4">Antibodies don't respond to arguments. They respond to metabolic compatibility.</p>
            </div>

            {/* Preparation strategies */}
            <div className="bg-white border border-stone-200 p-8">
              <h2 className="text-xs font-mono text-stone-500 mb-6">PREPARING THE IMMUNE SYSTEM</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-green-400 font-bold mb-2">METABOLIC MATCHING</p>
                  <p className="text-stone-500 text-sm">Introduce changes close to current GPI. Build incrementally.</p>
                </div>
                <div>
                  <p className="text-green-400 font-bold mb-2">CAPABILITY BUILDING</p>
                  <p className="text-stone-500 text-sm">Build infrastructure first. Small wins before marathons.</p>
                </div>
                <div>
                  <p className="text-green-400 font-bold mb-2">ANTIBODY IDENTIFICATION</p>
                  <p className="text-stone-500 text-sm">Map which types will activate. Sequence to build tolerance.</p>
                </div>
                <div>
                  <p className="text-green-400 font-bold mb-2">METABOLIC QUARANTINE</p>
                  <p className="text-stone-500 text-sm">Keep new capabilities isolated until absorption is possible.</p>
                </div>
              </div>
            </div>

            {/* When antibodies win */}
            <div className="space-y-4 text-stone-600">
              <h2 className="text-xs font-mono text-stone-500 mb-4">WHEN ANTIBODIES WIN</h2>
              <p>• The organization reinforces its particle state identity</p>
              <p>• Future change becomes harder (antibodies "remember" threats)</p>
              <p>• Change agents leave or are expelled</p>
              <p>• The organization celebrates "protecting culture"</p>
            </div>

            {/* Closing */}
            <div className="bg-red-50 border border-red-200 p-8 space-y-4">
              <p className="text-stone-900 font-bold text-2xl">Every rejected improvement makes the next improvement less likely.</p>
              <p className="text-stone-600">Antibodies don't just kill individual changes. They strengthen resistance to all future change.</p>
              <p className="text-red-500 font-bold text-xl pt-4">The immune system can't be argued with. It must be prepared.</p>
            </div>

            {/* Book Teaser */}
            <div className="border border-stone-200 p-8 flex items-center gap-6">
              <BookOpen size={48} className="text-stone-400 flex-shrink-0" />
              <div>
                <p className="text-stone-500 text-sm uppercase mb-1">From the upcoming book</p>
                <p className="text-xl font-black">The Growing Pains Index</p>
                <p className="text-stone-500">Chapter 8: Antibodies</p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-stone-200">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">IDENTIFY YOUR ANTIBODIES</h3>
            <p className="text-xl text-stone-500 mb-8 max-w-2xl mx-auto">
              Measure your organization's metabolic state. Understand which changes will be rejected and which can be absorbed.
            </p>
            <Link
              href="/diagnostic"
              className="inline-block bg-red-600 text-white px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
            >
              TAKE THE GPI DIAGNOSTIC
            </Link>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <RelatedContent
              title="Continue Reading"
              items={[
                {
                  href: "/insights/the-spiral-model",
                  title: "The Spiral Model",
                  description: "Why transformation isn't linear. You can't skip phases. You spiral.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/the-false-harmony",
                  title: "The False Harmony",
                  description: "When agreement masks avoidance. The antibody that looks like consensus.",
                  color: "yellow"
                },
                {
                  href: "/answers/glossary/the-constraint-response",
                  title: "The Constraint Response",
                  description: "How you break through Structural Lock-In. Your pattern for change.",
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

export default OrganizationalAntibodiesPage;
