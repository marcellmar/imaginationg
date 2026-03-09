import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import RelatedContent from '../../components/RelatedContent';
import { ArrowLeft } from 'lucide-react';

const NetflixLetParamountWinPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Netflix Let Paramount Win | IMAGINATION G"
        description="Paramount paid $110.9B for Warner Bros. Discovery. Netflix walked with $2.8B and a 13% stock jump. The GPI gap predicted this in December."
        ogType="article"
        ogImage="/images/og-insights.svg"
        article={{
          publishedTime: "2026-02-26T00:00:00Z",
          author: "Marcus Davis"
        }}
      />

      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Navigation currentPage="insights" />

        {/* Hero */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/insights" className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors mb-8">
              <ArrowLeft size={16} />
              Back to Insights
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-mono text-red-600 bg-red-50 px-3 py-1">LIVE ANALYSIS</span>
              <span className="text-xs text-stone-500">Feb 26, 2026</span>
              <span className="text-xs text-stone-400">•</span>
              <span className="text-xs text-stone-500">GPI · ACQUISITIONS · METABOLIC COMPATIBILITY</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
              NETFLIX LET<br />PARAMOUNT WIN<span className="text-red-600">.</span>
            </h1>

            <p className="text-xl text-stone-500 max-w-2xl mb-4">
              Paramount paid $110.9B for Warner Bros. Discovery. Netflix walked with a $2.8B termination fee and a 13% stock jump. The GPI gap predicted this in December.
            </p>

            <p className="text-lg text-stone-900 font-bold">
              Paramount won the bid. Netflix kept its metabolism.
            </p>

            {/* GPI Gap Visual */}
            <div className="mt-16 max-w-2xl">
              <div className="text-xs font-mono text-stone-400 mb-4">THE GPI GAP</div>
              <div className="bg-white border border-stone-200 p-8">
                <svg viewBox="0 0 400 160" className="w-full">
                  {/* Scale bar */}
                  <defs>
                    <linearGradient id="scaleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22c55e" />
                      <stop offset="40%" stopColor="#eab308" />
                      <stop offset="100%" stopColor="#ef4444" />
                    </linearGradient>
                  </defs>

                  <rect x="40" y="70" width="320" height="8" fill="url(#scaleGrad)" rx="4" opacity="0.4" />

                  {/* Scale labels */}
                  <text x="40" y="95" fill="#78716c" fontSize="8" fontFamily="monospace">1</text>
                  <text x="196" y="95" fill="#78716c" fontSize="8" fontFamily="monospace">5</text>
                  <text x="352" y="95" fill="#78716c" fontSize="8" fontFamily="monospace">10</text>

                  {/* Netflix marker at 2.2 */}
                  {/* position: 40 + (2.2-1)/9 * 320 = 40 + 42.7 = 82.7 */}
                  <line x1="83" y1="50" x2="83" y2="90" stroke="#22c55e" strokeWidth="2" />
                  <circle cx="83" cy="74" r="8" fill="#22c55e" />
                  <text x="83" y="40" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">NETFLIX</text>
                  <text x="83" y="30" textAnchor="middle" fill="#22c55e" fontSize="9" fontFamily="monospace">GPI 2.2</text>

                  {/* WBD marker at 7.4 */}
                  {/* position: 40 + (7.4-1)/9 * 320 = 40 + 227.6 = 267.6 */}
                  <line x1="268" y1="50" x2="268" y2="90" stroke="#ef4444" strokeWidth="2" />
                  <circle cx="268" cy="74" r="8" fill="#ef4444" />
                  <text x="268" y="40" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">WBD</text>
                  <text x="268" y="30" textAnchor="middle" fill="#ef4444" fontSize="9" fontFamily="monospace">GPI 7.4</text>

                  {/* Gap bracket */}
                  <line x1="83" y1="115" x2="268" y2="115" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,3" />
                  <line x1="83" y1="110" x2="83" y2="120" stroke="#ef4444" strokeWidth="1.5" />
                  <line x1="268" y1="110" x2="268" y2="120" stroke="#ef4444" strokeWidth="1.5" />
                  <text x="175" y="135" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="bold" fontFamily="monospace">5.2 GAP</text>
                  <text x="175" y="150" textAnchor="middle" fill="#a8a29e" fontSize="8" fontFamily="monospace">PORTFOLIO ZONE — NEVER INTEGRATE</text>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-8 px-6">
          <div className="max-w-3xl mx-auto space-y-16">

            {/* Opening */}
            <div className="space-y-4 text-stone-600">
              <p>Netflix announced a deal to buy Warner Bros. Discovery in December 2025. $82.7B. The content library math worked at that price.</p>
              <p>Then Paramount Skydance came in at $110.9B. WBD's board took the better offer. Netflix declined to raise. They walked away with $2.8B in termination fees and a stock price 13% higher than before the deal existed.</p>
              <p className="text-stone-900 text-xl font-bold pt-4">The market wasn't consoling Netflix. It was relieved.</p>
            </div>

            {/* Quote */}
            <div className="bg-white border border-stone-200 p-8">
              <p className="text-2xl text-stone-900 italic">"At the price required to match Paramount's offer, the deal is no longer financially attractive."</p>
              <p className="text-stone-500 text-sm mt-3">Netflix, February 26, 2026</p>
            </div>

            {/* The bid made sense section */}
            <div>
              <div className="text-xs font-mono text-stone-500 mb-6">THE $82.7B THESIS</div>
              <div className="space-y-4 text-stone-600">
                <p>HBO. DC. The Warner theatrical relationships. At $82.7B, Netflix was buying a content engine with 100 years of IP, a premium cable brand that still commands subscriber loyalty, and a studio system that knows how to make awards-season films.</p>
                <p>The thesis held at that number. Not because the integration would be easy. Because the content value justified the metabolic cost of absorbing it.</p>
                <p>At $110.9B, the math breaks. You're not just paying for the content anymore. You're paying a $28B premium to absorb an org that has a 5.2-point GPI gap with you, a post-merger culture that never finished integrating Time Warner and Discovery, and decision chains that run quarterly reports through eight layers before anyone acts on them.</p>
              </div>
            </div>

            {/* Key numbers */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white border border-stone-200 p-5">
                <p className="text-3xl font-black text-red-500">5.2</p>
                <p className="text-stone-500 text-xs mt-2">GPI point gap</p>
                <p className="text-stone-400 text-xs mt-1">Portfolio zone. Never integrate.</p>
              </div>
              <div className="bg-white border border-stone-200 p-5">
                <p className="text-3xl font-black text-stone-900">$2.8B</p>
                <p className="text-stone-500 text-xs mt-2">Netflix termination fee</p>
                <p className="text-stone-400 text-xs mt-1">Paid by Paramount to Netflix</p>
              </div>
              <div className="bg-white border border-stone-200 p-5">
                <p className="text-3xl font-black text-green-500">+13%</p>
                <p className="text-stone-500 text-xs mt-2">Netflix stock on exit</p>
                <p className="text-stone-400 text-xs mt-1">Market's verdict</p>
              </div>
            </div>

            {/* The metabolic incompatibility */}
            <div>
              <div className="text-xs font-mono text-stone-500 mb-6">THE PRICE WHERE PHYSICS BREAKS</div>
              <div className="space-y-4 text-stone-600">
                <p>Netflix operates with a GPI of 2.2. Decisions happen close to data. The algorithm learns faster than any editorial team can plan. Knowledge velocity is measured in hours, not quarters.</p>
                <p>WBD sits at 7.4. Three years after the Time Warner-Discovery merger closed, both legacy organizations are still running competing operating systems. Best practices from HBO don't reach the Discovery side. Leadership operates on filtered reports, not signal. The post-merger org promised to simplify and hasn't.</p>
                <p>A 5.2-point gap falls in what the acquisition research calls the portfolio zone: you can own it, you can extract value from it, but you don't try to fold it into your operating culture. The gap is too wide. You don't raise WBD's metabolism by owning it. You lower Netflix's.</p>
              </div>
            </div>

            {/* Dimension breakdown */}
            <div className="bg-white border border-stone-200 p-8">
              <div className="text-xs font-mono text-stone-500 mb-6">DIMENSION MISMATCH</div>
              <div className="space-y-4">
                {[
                  { dim: 'Decision Latency', netflix: '1.8', wbd: '8.1', note: 'Netflix acts on data in days. WBD runs approval chains that take quarters.' },
                  { dim: 'Knowledge Velocity', netflix: '2.0', wbd: '7.6', note: 'WBD\'s best practices are still trapped in legacy org silos from both legacy companies.' },
                  { dim: 'Structural Lock-In', netflix: '1.5', wbd: '7.9', note: 'Linear TV infrastructure, studio overhead, theatrical window contracts. None of it moves fast.' },
                  { dim: 'Capital Intensity', netflix: '2.2', wbd: '7.2', note: 'WBD\'s balance sheet is infrastructure-heavy. Netflix is content investment at scale, not asset accumulation.' },
                ].map((row, i) => (
                  <div key={i} className="border-b border-stone-200 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-stone-900">{row.dim}</span>
                      <div className="flex gap-4 text-xs font-mono">
                        <span className="text-green-500">Netflix {row.netflix}</span>
                        <span className="text-red-500">WBD {row.wbd}</span>
                      </div>
                    </div>
                    <p className="text-xs text-stone-500">{row.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The stock tells the story */}
            <div>
              <div className="text-xs font-mono text-stone-500 mb-6">+13% IS THE WHOLE ANALYSIS</div>
              <div className="space-y-4 text-stone-600">
                <p>When Netflix announced it wouldn't raise the bid, its stock jumped 13% in a day. The prior day it had already gained 10%. The market wasn't reacting to Netflix "losing." It was reacting to Netflix refusing to pay a premium for a problem.</p>
                <p>The $2.8B termination fee is the cleanest possible outcome. Netflix spent months in due diligence, learned exactly what WBD's calcification looks like from the inside, got paid $2.8B to walk away, and retained its own metabolic identity.</p>
                <p>Paramount now owns a 5.2-point GPI gap. They'll spend the next decade finding out what that costs.</p>
              </div>
            </div>

            {/* The r-K angle */}
            <div className="border-l-2 border-red-600 pl-6 space-y-4">
              <div className="text-xs font-mono text-red-500 mb-2">THE R-K MISMATCH</div>
              <p className="text-stone-600">Netflix is a K-strategist in a digital winner-take-most biome: efficient, margin-driven, optimized for subscriber retention and content ROI. Every decision runs through a data loop. It's built for a world where speed of learning compounds.</p>
              <p className="text-stone-600">WBD is an r-strategist from a linear TV biome that's shrinking. It produces a lot, bets broadly, and relies on theatrical releases and cable bundles that are declining as a category. The org evolved for abundance in a world moving toward scarcity.</p>
              <p className="text-stone-600">Merging them doesn't accelerate WBD into Netflix's biome. It drags Netflix back toward WBD's. The slower metabolism wins by default because the heavier infrastructure dominates the operating decisions.</p>
            </div>

            {/* Closing */}
            <div className="bg-red-50 border border-red-200 p-8 space-y-4">
              <p className="text-stone-900 font-bold text-2xl">The $2.8B termination fee is the cheapest outcome Netflix could have gotten from this deal.</p>
              <p className="text-stone-600">At $82.7B the content thesis was real. At $110.9B Netflix was being asked to buy the infrastructure, the org chart, the approval chains, and two competing cultures that haven't resolved since 2022. They measured the gap. They said no.</p>
              <p className="text-red-500 font-bold text-xl pt-2">Paramount won the bid. The physics will decide the rest.</p>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <p className="text-stone-500 mb-2 text-sm font-mono">THE ACQUISITION MATH WORKS FOR ANY DEAL</p>
            <p className="text-xl font-black mb-6">Know your GPI before you sign.</p>
            <Link
              href="/diagnostic"
              className="inline-block bg-red-600 text-white px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
            >
              TAKE THE GPI DIAGNOSTIC
            </Link>
          </div>
        </section>

        {/* Related */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <RelatedContent
              title="Continue Reading"
              items={[
                {
                  href: "/insights/the-acquisition-trap",
                  title: "The Acquisition Trap",
                  description: "HP paid $11B for Autonomy and wrote off $8.8B. Amazon paid $13.7B for Whole Foods and created billions in value. The GPI gap predicted both.",
                  color: "red"
                },
                {
                  href: "/insights/metabolic-rate",
                  title: "Metabolic Rate",
                  description: "The speed of organizational change. The physics of integration.",
                  color: "yellow"
                },
                {
                  href: "/insights/organizational-antibodies",
                  title: "Organizational Antibodies",
                  description: "The immune response that kills acquisitions.",
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

export default NetflixLetParamountWinPage;
