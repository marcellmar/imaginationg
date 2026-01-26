import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import RelatedContent from '../../components/RelatedContent';
import { ArrowLeft, BookOpen } from 'lucide-react';

const InvestedInTheWastePage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="You're Invested in the Waste | IMAGINATION G"
        description="The gap between how things should work and how they actually work isn't an accident. It's a product. Someone is selling it. That someone might be you."
        ogType="article"
        ogImage="/images/og-insights.svg"
        article={{
          publishedTime: "2025-01-26T00:00:00Z",
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
              <span className="text-xs font-mono text-red-600 bg-red-600/10 px-3 py-1 rounded">FEATURED</span>
              <span className="text-xs text-zinc-500">7 min read</span>
              <span className="text-xs text-zinc-600">•</span>
              <span className="text-xs text-zinc-500">STRUCTURAL LOCK-IN</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-[1.1]">
              YOU'RE INVESTED<br />IN THE WASTE<span className="text-red-600">.</span>
            </h1>

            <p className="text-2xl text-zinc-500 mb-8">
              And the system made you that way.
            </p>

            <p className="text-xl text-zinc-400 max-w-2xl">
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
                    <div className="w-24 h-24 bg-zinc-900 border-2 border-red-600 rounded-full flex items-center justify-center relative z-10">
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
                      <span className="text-[10px] text-zinc-600">Friction funds</span>
                      <span className="text-[10px] text-zinc-600">your retirement</span>
                    </div>

                    {/* Professional */}
                    <div className="flex flex-col items-center">
                      <div className="w-1 h-8 bg-gradient-to-b from-red-600 to-blue-500" />
                      <div className="w-16 h-16 bg-blue-500/20 border border-blue-500/50 rounded flex items-center justify-center">
                        <span className="text-blue-500 text-xl">57%</span>
                      </div>
                      <span className="text-xs font-mono text-blue-500 mt-2">JOB</span>
                      <span className="text-[10px] text-zinc-600">Time spent on</span>
                      <span className="text-[10px] text-zinc-600">coordination</span>
                    </div>

                    {/* Psychological */}
                    <div className="flex flex-col items-center">
                      <div className="w-1 h-8 bg-gradient-to-b from-red-600 to-purple-500" />
                      <div className="w-16 h-16 bg-purple-500/20 border border-purple-500/50 rounded flex items-center justify-center">
                        <span className="text-purple-500 text-xl">ID</span>
                      </div>
                      <span className="text-xs font-mono text-purple-500 mt-2">IDENTITY</span>
                      <span className="text-[10px] text-zinc-600">Built on mastering</span>
                      <span className="text-[10px] text-zinc-600">the complexity</span>
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div className="text-center mt-8">
                  <span className="text-xs font-mono text-zinc-600">Three investments. Three reasons the system has you.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8 px-6">
          <div className="max-w-3xl mx-auto space-y-16">

            {/* Opening */}
            <div className="space-y-4 text-zinc-300">
              <p>In Saudi Arabia, I used to watch the news.</p>
              <p>Every night, American broadcasts said we weren't flying spy missions over Iraq.</p>
              <p>Then I'd walk outside and watch the U-2 planes take off.</p>
              <p className="text-white text-xl font-bold pt-4">The gap between what's said and what's real isn't an accident. It's a product.</p>
            </div>

            {/* Quote */}
            <div className="bg-zinc-950 border border-zinc-800 p-8">
              <p className="text-2xl text-white italic">"Someone is always selling the gap."</p>
            </div>

            {/* The Coordinator Class */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono text-zinc-500 mb-4">THE COORDINATOR CLASS</h2>
              <p className="text-zinc-300">The last thirty years created a new kind of worker. Not the people who make things. Not the people who sell things.</p>
              <p className="text-white font-bold text-xl">The people who make sure the people who make things can talk to the people who sell things.</p>
              <div className="grid grid-cols-3 gap-2 mt-6 text-center">
                <div className="bg-zinc-900 p-3">
                  <p className="text-zinc-400 text-xs">Project Managers</p>
                </div>
                <div className="bg-zinc-900 p-3">
                  <p className="text-zinc-400 text-xs">Scrum Masters</p>
                </div>
                <div className="bg-zinc-900 p-3">
                  <p className="text-zinc-400 text-xs">Business Analysts</p>
                </div>
                <div className="bg-zinc-900 p-3">
                  <p className="text-zinc-400 text-xs">Program Managers</p>
                </div>
                <div className="bg-zinc-900 p-3">
                  <p className="text-zinc-400 text-xs">Integration Specialists</p>
                </div>
                <div className="bg-zinc-900 p-3">
                  <p className="text-zinc-400 text-xs">Change Managers</p>
                </div>
              </div>
              <p className="text-zinc-500 text-sm pt-4">Thirty years ago, most of these titles didn't exist. Now they're entire career tracks.</p>
            </div>

            {/* Big Numbers */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-zinc-950 border border-zinc-800 p-6 text-center">
                <p className="text-5xl font-black text-yellow-500">35%</p>
                <p className="text-zinc-400 text-sm mt-2">of middle manager time</p>
                <p className="text-zinc-600 text-xs">spent on internal coordination</p>
              </div>
              <div className="bg-zinc-950 border border-zinc-800 p-6 text-center">
                <p className="text-5xl font-black text-blue-500">57%</p>
                <p className="text-zinc-400 text-sm mt-2">of knowledge worker time</p>
                <p className="text-zinc-600 text-xs">communication vs. actual work</p>
              </div>
            </div>

            {/* The Question */}
            <div className="border-l-2 border-red-600 pl-6 space-y-4">
              <p className="text-xl text-white">Ask yourself this:</p>
              <p className="text-2xl text-white font-bold italic">If someone built a tool that did your job perfectly, instantly, for free, would you celebrate?</p>
              <p className="text-zinc-400">Be honest.</p>
            </div>

            {/* The Translations */}
            <div className="bg-zinc-950 border border-zinc-800 p-8">
              <h2 className="text-xs font-mono text-zinc-500 mb-6">WHAT PEOPLE SAY VS. WHAT IT MEANS</h2>
              <div className="space-y-4">
                <div className="border-b border-zinc-800 pb-4">
                  <p className="text-zinc-300">"My job is about relationships."</p>
                  <p className="text-zinc-500 text-sm italic">Translation: The system is so fragmented that human diplomacy holds it together.</p>
                </div>
                <div className="border-b border-zinc-800 pb-4">
                  <p className="text-zinc-300">"You can't automate judgment."</p>
                  <p className="text-zinc-500 text-sm italic">Translation: The system requires constant human intervention to function.</p>
                </div>
                <div>
                  <p className="text-zinc-300">"I add value in the gray areas."</p>
                  <p className="text-zinc-500 text-sm italic">Translation: There are so many gray areas that navigating them is a career.</p>
                </div>
              </div>
            </div>

            {/* The Three Investments Preview */}
            <div className="space-y-6">
              <h2 className="text-xs font-mono text-zinc-500 mb-4">THE THREE INVESTMENTS</h2>

              <div className="bg-yellow-950/20 border border-yellow-900/50 p-6">
                <p className="text-yellow-500 font-bold text-sm mb-2">FINANCIAL</p>
                <p className="text-zinc-300 text-sm">Open your retirement account. Look at what you own. Healthcare stocks. Banks. Enterprise software vendors whose complexity justifies coordinator jobs.</p>
                <p className="text-zinc-500 text-xs mt-2">Your retirement literally depends on friction continuing.</p>
              </div>

              <div className="bg-blue-950/20 border border-blue-900/50 p-6">
                <p className="text-blue-500 font-bold text-sm mb-2">PROFESSIONAL</p>
                <p className="text-zinc-300 text-sm">How many hours do you spend creating value versus coordinating? How many meetings are about work versus doing work?</p>
                <p className="text-zinc-500 text-xs mt-2">More than half your job is managing friction between particles.</p>
              </div>

              <div className="bg-purple-950/20 border border-purple-900/50 p-6">
                <p className="text-purple-500 font-bold text-sm mb-2">PSYCHOLOGICAL</p>
                <p className="text-zinc-300 text-sm">The workarounds. The unwritten rules. The "how things actually work around here." That knowledge took years. It's your competitive advantage.</p>
                <p className="text-zinc-500 text-xs mt-2">And it's worthless in a simpler system.</p>
              </div>
            </div>

            {/* The Shift */}
            <div className="border-l-2 border-yellow-500 pl-6 space-y-4">
              <p className="text-zinc-300">The Connection Era is ending. The infrastructure built for expensive connection is becoming friction.</p>
              <p className="text-white font-bold text-xl">The thing that made you valuable is becoming the thing that makes you replaceable.</p>
            </div>

            {/* Teaser Close */}
            <div className="bg-red-600/10 border border-red-600/30 p-8 space-y-4">
              <p className="text-white font-bold text-2xl">You didn't choose to be invested in the waste.</p>
              <p className="text-zinc-300">The system enrolled you. Made you complicit without asking permission.</p>
              <p className="text-zinc-300">Understanding this isn't blame. It's the first step toward seeing clearly.</p>
              <p className="text-red-500 font-bold text-xl pt-4">The full chapter goes deeper. Much deeper.</p>
            </div>

            {/* Book Teaser */}
            <div className="border border-zinc-800 p-8 flex items-center gap-6">
              <BookOpen size={48} className="text-zinc-600 flex-shrink-0" />
              <div>
                <p className="text-zinc-500 text-sm uppercase mb-1">From the upcoming book</p>
                <p className="text-xl font-black">The Growing Pains Index</p>
                <p className="text-zinc-400">Chapter 2: You're Invested in the Waste</p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">SEE YOUR INVESTMENTS</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              The GPI diagnostic reveals where you're structurally locked in. See the friction you're protecting.
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
      </div>
    </>
  );
};

export default InvestedInTheWastePage;
