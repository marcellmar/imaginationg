import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const NotReadyPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Not Ready to Break Patterns | IMAGINATION G"
        description="Good luck with the optimization theater. When you're ready to actually fix the problem, we'll be here."
        ogImage="/images/og-not-ready.svg"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation />

        <section className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Link 
                href="/"
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
                Back to Reality
              </Link>
            </div>

            {/* System Status Badge */}
            <div className="inline-block mb-8 text-yellow-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
              <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
              OPTIMIZATION MODE: ACTIVE
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
              GOOD LUCK<br />WITH THAT<span className="text-red-600">.</span>
            </h1>
            
            <p className="text-xl text-zinc-400 mb-12 max-w-2xl">
              We get it. Sometimes you're not ready to break the pattern. 
              Sometimes you need more meetings about meetings first.
            </p>

            {/* Suggestion Cards */}
            <div className="space-y-8 mb-16">
              {/* Traditional Consulting Options */}
              <div className="border border-zinc-800 p-8 bg-zinc-950">
                <h2 className="text-2xl font-black mb-4 text-zinc-400">TRADITIONAL CONSULTING THEATER</h2>
                <p className="text-zinc-500 mb-6">
                  Since you're not ready for real intervention, here are some optimization-friendly alternatives:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-zinc-700 p-4">
                    <h3 className="font-bold text-zinc-400 mb-2">McKinsey & Company</h3>
                    <p className="text-sm text-zinc-600 mb-3">Strategy frameworks that justify the problem instead of fixing it.</p>
                    <a 
                      href="https://www.mckinsey.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-zinc-500 text-sm hover:text-zinc-400 transition-colors inline-flex items-center gap-1"
                    >
                      Visit Site <ExternalLink size={14} />
                    </a>
                  </div>
                  
                  <div className="border border-zinc-700 p-4">
                    <h3 className="font-bold text-zinc-400 mb-2">Deloitte Digital</h3>
                    <p className="text-sm text-zinc-600 mb-3">Digital transformation that transforms nothing but budgets.</p>
                    <a 
                      href="https://www.deloittedigital.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-zinc-500 text-sm hover:text-zinc-400 transition-colors inline-flex items-center gap-1"
                    >
                      Visit Site <ExternalLink size={14} />
                    </a>
                  </div>
                  
                  <div className="border border-zinc-700 p-4">
                    <h3 className="font-bold text-zinc-400 mb-2">BCG Digital Ventures</h3>
                    <p className="text-sm text-zinc-600 mb-3">Innovation labs that innovate everything except results.</p>
                    <a 
                      href="https://www.bcgdv.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-zinc-500 text-sm hover:text-zinc-400 transition-colors inline-flex items-center gap-1"
                    >
                      Visit Site <ExternalLink size={14} />
                    </a>
                  </div>
                  
                  <div className="border border-zinc-700 p-4">
                    <h3 className="font-bold text-zinc-400 mb-2">Accenture Interactive</h3>
                    <p className="text-sm text-zinc-600 mb-3">Customer experience optimization around broken experiences.</p>
                    <a 
                      href="https://www.accenture.com/us-en/services/interactive-index" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-zinc-500 text-sm hover:text-zinc-400 transition-colors inline-flex items-center gap-1"
                    >
                      Visit Site <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Self-Help Optimization */}
              <div className="border border-zinc-800 p-8 bg-zinc-950">
                <h2 className="text-2xl font-black mb-4 text-zinc-400">DIY OPTIMIZATION THEATER</h2>
                <p className="text-zinc-500 mb-6">
                  Prefer to optimize around problems yourself? These tools will help you do exactly that:
                </p>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center border border-zinc-700 p-4">
                    <div>
                      <h3 className="font-bold text-zinc-400">More Agile Ceremonies</h3>
                      <p className="text-sm text-zinc-600">Stand-ups, retros, and planning sessions. Add more meetings to fix meeting problems.</p>
                    </div>
                    <span className="text-zinc-600 text-sm">FREE</span>
                  </div>
                  
                  <div className="flex justify-between items-center border border-zinc-700 p-4">
                    <div>
                      <h3 className="font-bold text-zinc-400">Better Communication Tools</h3>
                      <p className="text-sm text-zinc-600">Slack, Teams, Notion. More tools to optimize around communication breakdowns.</p>
                    </div>
                    <span className="text-zinc-600 text-sm">$10-50/month</span>
                  </div>
                  
                  <div className="flex justify-between items-center border border-zinc-700 p-4">
                    <div>
                      <h3 className="font-bold text-zinc-400">OKR Frameworks</h3>
                      <p className="text-sm text-zinc-600">Objectives and Key Results. Measure everything except what matters.</p>
                    </div>
                    <span className="text-zinc-600 text-sm">TIME SINK</span>
                  </div>
                  
                  <div className="flex justify-between items-center border border-zinc-700 p-4">
                    <div>
                      <h3 className="font-bold text-zinc-400">Team Building Workshops</h3>
                      <p className="text-sm text-zinc-600">Trust falls and icebreakers. Build harmony around dysfunction.</p>
                    </div>
                    <span className="text-zinc-600 text-sm">$2,000+</span>
                  </div>
                </div>
              </div>

              {/* Reality Check */}
              <div className="bg-black border-2 border-red-600 p-8">
                <h2 className="text-2xl font-black mb-4 text-red-600">WHEN OPTIMIZATION FAILS</h2>
                <p className="text-lg mb-6">
                  When you've tried everything above and nothing works. When the meetings multiply. 
                  When the tools become the problem. When optimization becomes the stuck pattern itself.
                </p>
                <p className="text-zinc-400 mb-8">
                  That's when you'll be ready for actual intervention. That's when you'll stop optimizing around problems and start fixing them.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/start"
                    className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors text-center"
                  >
                    READY TO BREAK PATTERN
                  </Link>
                  <Link 
                    href="/diagnostic"
                    className="border-2 border-red-600 px-8 py-4 text-lg font-black hover:bg-red-600 transition-colors text-center"
                  >
                    DETECT YOUR STUCK PATTERN
                  </Link>
                </div>
              </div>
            </div>

            {/* Footer Message */}
            <div className="text-center border-t border-zinc-800 pt-8">
              <p className="text-zinc-500">
                We'll be here when you're ready to actually fix the problem.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NotReadyPage;