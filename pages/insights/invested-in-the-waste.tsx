import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import RelatedContent from '../../components/RelatedContent';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const InvestedInTheWastePage: NextPage = () => {
  useScrollReveal();
  return (
    <>
      <SEOHead
        title="You're Invested in the Waste | GPI Studio"
        description="The gap between how things should work and how they actually work isn't an accident. It's a product. Someone is selling it. That someone might be you."
        ogType="article"
        ogImage="/images/og/invested-in-the-waste.png"
        article={{
          publishedTime: "2025-01-26T00:00:00Z",
          author: "Marcus Davis"
        }}
      />

      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Navigation currentPage="insights" />

        {/* Hero Section */}
        <section className="pt-36 pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <Link href="/insights" className="fade-up inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors mb-8">
              <ArrowLeft size={16} />
              Back to Insights
            </Link>

            {/* Meta */}
            <div className="fade-up flex items-center gap-4 mb-6">
              <span className="text-xs font-mono text-stone-500 border border-stone-200 px-3 py-1">FEATURED</span>
              <span className="text-xs text-stone-500">7 min read</span>
              <span className="text-xs text-stone-400">•</span>
              <span className="text-xs text-stone-500">STRUCTURAL LOCK-IN</span>
            </div>

            <h1 className="fade-up text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-[1.1] tracking-headline">
              YOU'RE INVESTED<br />IN THE WASTE<span className="text-red-600">.</span>
            </h1>

            <p className="fade-up text-2xl text-stone-500 mb-8">
              And the system made you that way.
            </p>

            <p className="fade-up text-xl text-stone-500 max-w-2xl">
              The gap between how things should work and how they actually work isn't dysfunction. It's a product. Someone is selling it. Someone is buying it. That someone might be you.
            </p>

            {/* THREE INVESTMENTS VISUAL */}
            <div className="mt-16 flex justify-center">
              <div className="relative">
                {/* Central "YOU" node */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    {/* Pulsing rings around YOU */}
                    <div className="absolute inset-0 w-24 h-24 border border-red-600/30 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                    <div className="absolute inset-0 w-24 h-24 border border-red-600/20 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />

                    {/* YOU circle */}
                    <div className="w-24 h-24 bg-stone-100 border-2 border-red-600 rounded-full flex items-center justify-center relative z-10">
                      <span className="text-red-600 font-black text-lg">YOU</span>
                    </div>
                  </div>

                  {/* Three investment chains */}
                  <div className="flex gap-12 mt-8">
                    {/* Financial */}
                    <div className="flex flex-col items-center">
                      <div className="w-1 h-8 bg-gradient-to-b from-red-600 to-yellow-500" />
                      <div className="w-16 h-16 bg-yellow-500/20 border border-yellow-500/50 rounded flex items-center justify-center">
                        <span className="text-yellow-500 text-2xl">$</span>
                      </div>
                      <span className="text-xs font-mono text-yellow-500 mt-2">401(k)</span>
                      <span className="text-[10px] text-stone-400">Friction funds</span>
                      <span className="text-[10px] text-stone-400">your retirement</span>
                    </div>

                    {/* Professional */}
                    <div className="flex flex-col items-center">
                      <div className="w-1 h-8 bg-gradient-to-b from-red-600 to-blue-500" />
                      <div className="w-16 h-16 bg-blue-500/20 border border-blue-500/50 rounded flex items-center justify-center">
                        <span className="text-blue-500 text-xl">57%</span>
                      </div>
                      <span className="text-xs font-mono text-blue-500 mt-2">JOB</span>
                      <span className="text-[10px] text-stone-400">Time spent on</span>
                      <span className="text-[10px] text-stone-400">coordination</span>
                    </div>

                    {/* Psychological */}
                    <div className="flex flex-col items-center">
                      <div className="w-1 h-8 bg-gradient-to-b from-red-600 to-purple-500" />
                      <div className="w-16 h-16 bg-purple-500/20 border border-purple-500/50 rounded flex items-center justify-center">
                        <span className="text-purple-500 text-xl">ID</span>
                      </div>
                      <span className="text-xs font-mono text-purple-500 mt-2">IDENTITY</span>
                      <span className="text-[10px] text-stone-400">Built on mastering</span>
                      <span className="text-[10px] text-stone-400">the complexity</span>
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div className="text-center mt-8">
                  <span className="text-xs font-mono text-stone-400">Three investments. Three reasons the system has you.</span>
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
              <p>In Saudi Arabia, I used to watch the news.</p>
              <p>Every night, American broadcasts said we weren't flying spy missions over Iraq.</p>
              <p>Then I'd walk outside and watch the U-2 planes take off.</p>
              <p className="text-stone-900 text-xl font-bold pt-4">The gap between what's said and what's real isn't an accident. It's a product.</p>
            </div>

            {/* Quote */}
            <div className="bg-white border border-stone-200 p-8">
              <p className="text-2xl text-stone-900 italic">"Someone is always selling the gap."</p>
            </div>

            {/* The Coordinator Class */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono text-stone-500 mb-4">THE COORDINATOR CLASS</h2>
              <p className="text-stone-600">The last thirty years created a new kind of worker. Not the people who make things. Not the people who sell things.</p>
              <p className="text-stone-900 font-bold text-xl">The people who make sure the people who make things can talk to the people who sell things.</p>
              <div className="grid grid-cols-3 gap-2 mt-6 text-center">
                <div className="bg-stone-100 p-3">
                  <p className="text-stone-500 text-xs">Project Managers</p>
                </div>
                <div className="bg-stone-100 p-3">
                  <p className="text-stone-500 text-xs">Scrum Masters</p>
                </div>
                <div className="bg-stone-100 p-3">
                  <p className="text-stone-500 text-xs">Business Analysts</p>
                </div>
                <div className="bg-stone-100 p-3">
                  <p className="text-stone-500 text-xs">Program Managers</p>
                </div>
                <div className="bg-stone-100 p-3">
                  <p className="text-stone-500 text-xs">Integration Specialists</p>
                </div>
                <div className="bg-stone-100 p-3">
                  <p className="text-stone-500 text-xs">Change Managers</p>
                </div>
              </div>
              <p className="text-stone-500 text-sm pt-4">Thirty years ago, most of these titles didn't exist. Now they're entire career tracks.</p>
            </div>

            {/* Big Numbers */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white border border-stone-200 p-6 text-center">
                <p className="text-5xl font-black text-yellow-500">35%</p>
                <p className="text-stone-500 text-sm mt-2">of middle manager time</p>
                <p className="text-stone-400 text-xs">spent on internal coordination</p>
              </div>
              <div className="bg-white border border-stone-200 p-6 text-center">
                <p className="text-5xl font-black text-blue-500">57%</p>
                <p className="text-stone-500 text-sm mt-2">of knowledge worker time</p>
                <p className="text-stone-400 text-xs">communication vs. actual work</p>
              </div>
            </div>

            {/* The Question */}
            <div className="border-l-2 border-red-600 pl-6 space-y-4">
              <p className="text-xl text-stone-900">Ask yourself this:</p>
              <p className="text-2xl text-stone-900 font-bold italic">If someone built a tool that did your job perfectly, instantly, for free, would you celebrate?</p>
              <p className="text-stone-500">Be honest.</p>
            </div>

            {/* The Translations */}
            <div className="bg-white border border-stone-200 p-8">
              <h2 className="text-xs font-mono text-stone-500 mb-6">WHAT PEOPLE SAY VS. WHAT IT MEANS</h2>
              <div className="space-y-4">
                <div className="border-b border-stone-200 pb-4">
                  <p className="text-stone-600">"My job is about relationships."</p>
                  <p className="text-stone-500 text-sm italic">Translation: The system is so fragmented that human diplomacy holds it together.</p>
                </div>
                <div className="border-b border-stone-200 pb-4">
                  <p className="text-stone-600">"You can't automate judgment."</p>
                  <p className="text-stone-500 text-sm italic">Translation: The system requires constant human intervention to function.</p>
                </div>
                <div>
                  <p className="text-stone-600">"I add value in the gray areas."</p>
                  <p className="text-stone-500 text-sm italic">Translation: There are so many gray areas that navigating them is a career.</p>
                </div>
              </div>
            </div>

            {/* The Three Investments Preview */}
            <div className="space-y-6">
              <h2 className="text-xs font-mono text-stone-500 mb-4">THE THREE INVESTMENTS</h2>

              <div className="bg-yellow-950/20 border border-yellow-900/50 p-6">
                <p className="text-yellow-500 font-bold text-sm mb-2">FINANCIAL</p>
                <p className="text-stone-600 text-sm">Open your retirement account. Look at what you own. Healthcare stocks. Banks. Enterprise software vendors whose complexity justifies coordinator jobs.</p>
                <p className="text-stone-500 text-xs mt-2">Your retirement literally depends on friction continuing.</p>
              </div>

              <div className="bg-blue-950/20 border border-blue-900/50 p-6">
                <p className="text-blue-500 font-bold text-sm mb-2">PROFESSIONAL</p>
                <p className="text-stone-600 text-sm">How many hours do you spend creating value versus coordinating? How many meetings are about work versus doing work?</p>
                <p className="text-stone-500 text-xs mt-2">More than half your job is managing friction between particles.</p>
              </div>

              <div className="bg-purple-950/20 border border-purple-900/50 p-6">
                <p className="text-purple-500 font-bold text-sm mb-2">PSYCHOLOGICAL</p>
                <p className="text-stone-600 text-sm">The workarounds. The unwritten rules. The "how things actually work around here." That knowledge took years. It's your competitive advantage.</p>
                <p className="text-stone-500 text-xs mt-2">And it's worthless in a simpler system.</p>
              </div>
            </div>

            {/* The Shift */}
            <div className="border-l-2 border-yellow-500 pl-6 space-y-4">
              <p className="text-stone-600">The Connection Era is ending. The infrastructure built for expensive connection is becoming friction.</p>
              <p className="text-stone-900 font-bold text-xl">The thing that made you valuable is becoming the thing that makes you replaceable.</p>
            </div>

            {/* Teaser Close */}
            <div className="bg-red-50 border border-red-200 p-8 space-y-4">
              <p className="text-stone-900 font-bold text-2xl">You didn't choose to be invested in the waste.</p>
              <p className="text-stone-600">The system enrolled you. Made you complicit without asking permission.</p>
              <p className="text-stone-600">Understanding this isn't blame. It's the first step toward seeing clearly.</p>
              <p className="text-red-500 font-bold text-xl pt-4">The full chapter goes deeper. Much deeper.</p>
            </div>

            {/* Book Teaser */}
            <div className="border border-stone-200 p-8 flex items-center gap-6">
              <BookOpen size={48} className="text-stone-400 flex-shrink-0" />
              <div>
                <p className="text-stone-500 text-sm uppercase mb-1">From the upcoming book</p>
                <p className="text-xl font-black">The Growing Pains Index</p>
                <p className="text-stone-500">Chapter 2: You're Invested in the Waste</p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-stone-200">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">SEE YOUR INVESTMENTS</h3>
            <p className="text-xl text-stone-500 mb-8 max-w-2xl mx-auto">
              The GPI diagnostic reveals where you're structurally locked in. See the friction you're protecting.
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
        <section className="py-24 px-6 bg-white border-t border-stone-200">
          <div className="max-w-7xl mx-auto">
            <RelatedContent
              title="Continue Reading"
              items={[
                {
                  href: "/insights/why-success-creates-rigidity",
                  title: "Why Success Creates Rigidity",
                  description: "Chapter 1. How the things that work become the things that hold you back.",
                  color: "red"
                },
                {
                  href: "/insights/friction-is-margin",
                  title: "Friction Is Margin",
                  description: "The economics behind organizational waste. Someone profits from the gap.",
                  color: "yellow"
                },
                {
                  href: "/insights/the-spiral-model",
                  title: "The Spiral Model",
                  description: "Chapter 5. The pattern of organizational evolution. You can't skip phases.",
                  color: "green"
                }
              ]}
            />
          </div>
        </section>

        <footer className="py-16 px-6 border-t border-stone-200">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
              <div><div className="font-black text-sm mb-4">GPI<span className="text-red-600">.</span>STUDIO</div><p className="text-sm text-stone-400 leading-relaxed">Organizational physics.<br />We measure where energy gets stuck.</p></div>
              <div><div className="text-xs font-mono text-stone-400 mb-4">RESEARCH</div><div className="space-y-3"><Link href="/insights" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Insights</Link><Link href="/insights/gpi-analyses" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Analyses</Link><Link href="/gpi-framework" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Framework</Link></div></div>
              <div><div className="text-xs font-mono text-stone-400 mb-4">WORK</div><div className="space-y-3"><Link href="/diagnostic" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Diagnostic</Link><Link href="/consult" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Book a Session</Link><Link href="/work-with-us" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Work With Us</Link></div></div>
              <div><div className="text-xs font-mono text-stone-400 mb-4">COMPANY</div><div className="space-y-3"><Link href="/about" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">About</Link></div></div>
            </div>
            <div className="pt-8 border-t border-stone-200 flex justify-between items-center text-xs text-stone-400"><div>&copy; {new Date().getFullYear()} Imagination G LLC</div><div className="font-mono">gpi.studio</div></div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default InvestedInTheWastePage;
