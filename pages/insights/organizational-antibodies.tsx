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

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="insights" />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <Link href="/insights" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8">
              <ArrowLeft size={16} />
              Back to Insights
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-mono text-red-600 bg-red-600/10 px-3 py-1 rounded">GPI FOUNDATIONS</span>
              <span className="text-xs text-zinc-500">9 min read</span>
              <span className="text-xs text-zinc-600">•</span>
              <span className="text-xs text-zinc-500">ERROR CORRECTION</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-[1.1]">
              ORGANIZATIONAL<br />ANTIBODIES<span className="text-red-600">.</span>
            </h1>

            <p className="text-2xl text-zinc-500 mb-8">
              Why Good Ideas Get Rejected
            </p>

            <p className="text-xl text-zinc-400 max-w-2xl">
              Your organization has an immune system. It protects against foreign capabilities, even beneficial ones. Understanding the antibody response predicts which changes will succeed.
            </p>

            {/* ANTIBODY VISUAL - Immune Response */}
            <div className="mt-16 flex justify-center">
              <div className="relative w-full max-w-md">
                <svg viewBox="0 0 300 200" className="w-full h-auto">
                  {/* Organization body */}
                  <ellipse cx="150" cy="100" rx="120" ry="80" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
                  <text x="150" y="170" textAnchor="middle" fill="#52525b" fontSize="10" fontFamily="monospace">THE ORGANIZATION</text>

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
                  <span className="text-xs font-mono text-zinc-600">4 antibody types attack foreign changes. Rejection is automatic.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8 px-6">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-invert prose-lg max-w-none">

              {/* The Core Insight */}
              <div className="border-l-4 border-red-600 pl-6 mb-12">
                <p className="text-xl text-zinc-300 italic mb-0">
                  "Antibodies don't reject change. They reject foreign metabolisms."
                </p>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">THE ORGANIZATIONAL IMMUNE SYSTEM</h2>

              <p className="text-zinc-400 mb-6">
                You've seen it happen. Someone proposes a better process, a smarter tool, a more efficient structure. The idea is clearly good. The evidence is strong. The benefits are obvious.
              </p>

              <p className="text-zinc-400 mb-6">
                And the organization kills it.
              </p>

              <p className="text-zinc-400 mb-6">
                Not through malice. Not through stupidity. Through something that functions exactly like an immune response. The organization detected a foreign object and rejected it.
              </p>

              <p className="text-zinc-400 mb-6">
                This isn't metaphor. It's organizational physics. And understanding it is the difference between changes that stick and changes that get expelled.
              </p>

              <div className="bg-zinc-950 border border-zinc-800 p-8 my-12">
                <h3 className="text-xl font-black text-red-600 mb-4">THE BIOLOGICAL PARALLEL</h3>
                <p className="text-zinc-400 mb-4">
                  When you receive an organ transplant, your immune system doesn't evaluate whether the new kidney is "better." It detects that the tissue is foreign and mobilizes to destroy it.
                </p>
                <p className="text-zinc-400">
                  Organizations work the same way. They don't evaluate whether new ideas are "better." They detect whether new ideas are metabolically compatible. If not, they reject them.
                </p>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">TYPES OF ORGANIZATIONAL ANTIBODIES</h2>

              <p className="text-zinc-400 mb-6">
                Not all rejection is the same. Different antibodies protect different aspects of the organizational status quo.
              </p>

              <div className="space-y-8 my-12">
                <div className="border border-zinc-800 p-8 bg-black">
                  <h3 className="text-xl font-black text-yellow-500 mb-4">PROCESS ANTIBODIES</h3>
                  <p className="text-zinc-500 text-sm mb-3">"We've always done it this way"</p>
                  <p className="text-zinc-400 mb-4">
                    <span className="text-white">Real function:</span> Protecting known workflows. When a process has been refined over years, any change introduces uncertainty. The antibody response isn't irrational. It's protecting against the chaos of relearning.
                  </p>
                  <p className="text-zinc-500 text-sm">
                    <span className="text-white">Example:</span> Company that rejected better software because training was "too disruptive."
                  </p>
                </div>

                <div className="border border-zinc-800 p-8 bg-black">
                  <h3 className="text-xl font-black text-yellow-500 mb-4">POWER ANTIBODIES</h3>
                  <p className="text-zinc-500 text-sm mb-3">"Who approved this change?"</p>
                  <p className="text-zinc-400 mb-4">
                    <span className="text-white">Real function:</span> Protecting hierarchical authority. When a change redistributes decision-making power, those losing power will fight it. Not because they're evil, but because power structures are survival structures.
                  </p>
                  <p className="text-zinc-500 text-sm">
                    <span className="text-white">Example:</span> Manager who blocked efficiency improvement that would have eliminated their department.
                  </p>
                </div>

                <div className="border border-zinc-800 p-8 bg-black">
                  <h3 className="text-xl font-black text-yellow-500 mb-4">IDENTITY ANTIBODIES</h3>
                  <p className="text-zinc-500 text-sm mb-3">"That's not who we are"</p>
                  <p className="text-zinc-400 mb-4">
                    <span className="text-white">Real function:</span> Protecting organizational self-concept. When a change threatens the story an organization tells about itself, the immune response is existential. Identity is the deepest layer of defense.
                  </p>
                  <p className="text-zinc-500 text-sm">
                    <span className="text-white">Example:</span> Law firm that rejected profitable remote work because "real lawyers work in the office."
                  </p>
                </div>

                <div className="border border-zinc-800 p-8 bg-black">
                  <h3 className="text-xl font-black text-yellow-500 mb-4">CAPABILITY ANTIBODIES</h3>
                  <p className="text-zinc-500 text-sm mb-3">"We don't have the skills for that"</p>
                  <p className="text-zinc-400 mb-4">
                    <span className="text-white">Real function:</span> Protecting against competency threats. When new capabilities would obsolete existing expertise, those with existing expertise perceive existential threat and respond accordingly.
                  </p>
                  <p className="text-zinc-500 text-sm">
                    <span className="text-white">Example:</span> IT department that blocked cloud migration to preserve relevance of on-premise expertise.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">THE ANTIBODY RESPONSE CYCLE</h2>

              <p className="text-zinc-400 mb-6">
                The immune response follows a predictable pattern. Recognizing where you are in the cycle tells you what comes next.
              </p>

              <div className="bg-zinc-950 border border-zinc-800 p-8 my-12">
                <div className="space-y-6">
                  <div className="flex gap-6">
                    <div className="text-red-600 font-mono text-lg w-8">1</div>
                    <div>
                      <h4 className="font-black mb-2">DETECTION</h4>
                      <p className="text-zinc-400">"Something foreign has entered." The organization becomes aware of the proposed change. Initial responses are informational, not defensive.</p>
                      <p className="text-zinc-600 text-sm mt-2">Timeline: Days to weeks</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="text-red-600 font-mono text-lg w-8">2</div>
                    <div>
                      <h4 className="font-black mb-2">THREAT ASSESSMENT</h4>
                      <p className="text-zinc-400">"Does this threaten our operation?" The organization evaluates which antibody types are triggered. Multiple types can activate simultaneously.</p>
                      <p className="text-zinc-600 text-sm mt-2">Timeline: Weeks to months</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="text-red-600 font-mono text-lg w-8">3</div>
                    <div>
                      <h4 className="font-black mb-2">MOBILIZATION</h4>
                      <p className="text-zinc-400">"Rally defenses." Active resistance begins. Meetings multiply. Objections surface. Resources get allocated to "studying the issue."</p>
                      <p className="text-zinc-600 text-sm mt-2">Timeline: Months</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="text-red-600 font-mono text-lg w-8">4</div>
                    <div>
                      <h4 className="font-black mb-2">REJECTION OR INTEGRATION</h4>
                      <p className="text-zinc-400">"Expel or adapt." Either the change is killed (most common) or the organization adapts enough to absorb it (rare without metabolic preparation).</p>
                      <p className="text-zinc-600 text-sm mt-2">Timeline: Months to years</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">GPI DIMENSION: ERROR CORRECTION</h2>

              <p className="text-zinc-400 mb-6">
                The Error Correction dimension measures how fast organizations learn from mistakes. But antibodies affect this directly: <span className="text-white font-bold">high antibody activity prevents error correction</span>.
              </p>

              <p className="text-zinc-400 mb-6">
                When antibodies reject changes, even improvements, the organization can't process feedback. It can't learn. It can't adapt. The immune system meant to protect becomes the mechanism of calcification.
              </p>

              <div className="bg-black border border-zinc-800 p-8 my-12">
                <h3 className="text-xl font-black mb-6">ERROR CORRECTION VS ANTIBODY STRENGTH</h3>
                <div className="space-y-3 font-mono text-sm">
                  <div><span className="text-green-500">GPI 1-3:</span> Weak antibodies. Changes absorbed quickly. Continuous adaptation.</div>
                  <div><span className="text-yellow-500">GPI 4-6:</span> Moderate antibodies. Some changes absorbed. Slower learning.</div>
                  <div><span className="text-red-500">GPI 7-10:</span> Strong antibodies. Most changes rejected. Learning stalled.</div>
                </div>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">WHY YOU CAN'T "OVERCOME" ANTIBODIES</h2>

              <p className="text-zinc-400 mb-6">
                The standard change management playbook says: communicate better, get executive sponsorship, demonstrate ROI, build coalitions.
              </p>

              <p className="text-zinc-400 mb-6">
                This is like telling someone with an organ transplant to "just convince their immune system" that the kidney is good.
              </p>

              <p className="text-zinc-400 mb-6">
                <span className="text-white font-bold">Antibodies don't respond to arguments. They respond to metabolic compatibility.</span>
              </p>

              <p className="text-zinc-400 mb-6">
                A particle state organization (GPI 7-10) will reject field state changes no matter how good the PowerPoint. The metabolic gap triggers rejection automatically. It's not about convincing. It's about building capability to process different metabolisms.
              </p>

              <div className="border-l-4 border-yellow-500 pl-6 my-12">
                <p className="text-xl text-zinc-300 italic mb-0">
                  "You can't transplant field state capabilities into particle state organizations without metabolic preparation. The rejection is automatic."
                </p>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">PREPARING THE IMMUNE SYSTEM</h2>

              <p className="text-zinc-400 mb-6">
                Real organ transplants require immunosuppression and careful matching. Organizational change requires the same:
              </p>

              <div className="bg-zinc-950 border border-zinc-800 p-8 my-12">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-black text-green-400 mb-2">METABOLIC MATCHING</h4>
                    <p className="text-zinc-400">Introduce changes that are close to current GPI. A GPI 8 organization can absorb GPI 7 changes more easily than GPI 3 changes. Build capability incrementally.</p>
                  </div>
                  <div>
                    <h4 className="font-black text-green-400 mb-2">CAPABILITY BUILDING</h4>
                    <p className="text-zinc-400">Before demanding transformation, build the infrastructure to support it. Train skills. Create small wins. Develop organizational muscle before running marathons.</p>
                  </div>
                  <div>
                    <h4 className="font-black text-green-400 mb-2">ANTIBODY IDENTIFICATION</h4>
                    <p className="text-zinc-400">Map which antibody types will activate. Design changes that minimize triggers. Sequence changes to build tolerance.</p>
                  </div>
                  <div>
                    <h4 className="font-black text-green-400 mb-2">METABOLIC QUARANTINE</h4>
                    <p className="text-zinc-400">Sometimes the best strategy is separation. Keep new capabilities isolated until the organization can absorb them. Incubation before integration.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">WHEN ANTIBODIES WIN</h2>

              <p className="text-zinc-400 mb-6">
                Most change initiatives fail. Not because the ideas are bad, but because antibodies are strong and no metabolic preparation occurred.
              </p>

              <p className="text-zinc-400 mb-6">
                When antibodies win:
              </p>

              <ul className="space-y-2 text-zinc-400 mb-6">
                <li>• The organization reinforces its particle state identity</li>
                <li>• Future change becomes harder (antibodies "remember" threats)</li>
                <li>• Change agents leave or are expelled</li>
                <li>• The organization celebrates "protecting culture"</li>
              </ul>

              <p className="text-zinc-400 mb-6">
                <span className="text-white font-bold">The hidden cost: every rejected improvement makes the next improvement less likely.</span> Antibodies don't just kill individual changes. They strengthen resistance to all future change.
              </p>

              <div className="bg-red-600/10 border border-red-600/30 p-8 my-12">
                <h3 className="text-xl font-black text-red-600 mb-4">KEY INSIGHT</h3>
                <p className="text-lg text-zinc-300">
                  Resistance to change isn't irrational. It's immunological. Understanding which antibodies are active, and building metabolic compatibility before introducing change, is the difference between transformation and rejection. The immune system can't be argued with. It must be prepared.
                </p>
              </div>

            </article>

            {/* Book Teaser */}
            <div className="border border-zinc-800 p-8 mt-16 flex items-center gap-6">
              <BookOpen size={48} className="text-zinc-600 flex-shrink-0" />
              <div>
                <p className="text-zinc-500 text-sm uppercase mb-1">From the upcoming book</p>
                <p className="text-xl font-black">The Growing Pains Index</p>
                <p className="text-zinc-400">Chapter 7: Organizational Antibodies</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">IDENTIFY YOUR ANTIBODIES</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Measure your organization's metabolic state. Understand which changes will be rejected and which can be absorbed.
            </p>
            <Link
              href="/diagnostic"
              className="inline-block bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
            >
              TAKE THE GPI DIAGNOSTIC
            </Link>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-16 px-6 bg-zinc-950">
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
