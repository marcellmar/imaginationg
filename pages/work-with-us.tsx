import React, { useState } from 'react';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight, Package, GitBranch, Truck, Cpu, Send } from 'lucide-react';

const workCategories = [
  {
    icon: GitBranch,
    title: 'Process Improvement',
    desc: 'Your workflow works. It could work better. We map the friction, find where time and money leak, and rebuild the process so it stops fighting you.',
    examples: ['Operational audits', 'Workflow redesign', 'Bottleneck elimination', 'Quality system overhaul'],
  },
  {
    icon: Package,
    title: 'Prototyping & Product Development',
    desc: 'You have an idea for a physical product but no idea how to get from concept to something you can hold. We take it from napkin sketch to functional prototype.',
    examples: ['Concept development', 'Material selection', 'Prototype fabrication', 'Design for manufacturing'],
  },
  {
    icon: Truck,
    title: 'Supply Chain & Logistics',
    desc: 'Getting the thing made is half the problem. Getting it where it needs to go, at the right cost, on time, is the other half. We build that system.',
    examples: ['Vendor sourcing', 'Fulfillment design', 'Cost optimization', 'Inventory strategy'],
  },
  {
    icon: Cpu,
    title: 'Operational Builds',
    desc: 'Sometimes the answer is a new system, a new tool, or a new way of coordinating the pieces you already have. We build the thing that makes the other things work.',
    examples: ['Internal tools', 'Automation systems', 'Data infrastructure', 'Integration projects'],
  },
];

const WorkWithUsPage = () => {
  useScrollReveal();

  const [form, setForm] = useState({ name: '', email: '', category: '', details: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/work-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        console.error('Submission failed');
      }
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Work With Us | Imagination G"
        description="You dream, we build, together. Process improvement, prototyping, supply chain, and operational builds. From head to hands."
      />

      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Navigation currentPage="work" />

        {/* Hero */}
        <section className="pt-36 pb-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-400 mb-8">
              <span className="w-2 h-2 bg-red-500 rounded-full" />
              IMAGINATION G
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.05] tracking-headline">
              YOU DREAM<span className="text-red-600">.</span><br />
              WE BUILD<span className="text-red-600">.</span><br />
              TOGETHER<span className="text-red-600">.</span>
            </h1>

            <p className="text-xl md:text-2xl text-stone-500 mb-4 max-w-2xl mx-auto leading-relaxed">
              Some people know exactly what they need built. Others know something is broken but can't name the part. Both are fine.
            </p>

            <p className="text-lg text-stone-400">
              From head to hands.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-24 px-6 border-t border-stone-200 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="fade-up text-xs font-mono text-stone-400 mb-2">WHAT WE BUILD</div>
            <h2 className="fade-up text-3xl md:text-4xl font-black mb-12 tracking-headline">
              FOUR WAYS IN<span className="text-red-600">.</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6 fade-up-stagger">
              {workCategories.map((cat) => (
                <div key={cat.title} className="fade-up border border-stone-200 p-7 hover:border-stone-400 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <cat.icon size={16} className="text-stone-400 flex-shrink-0" />
                    <h3 className="font-semibold text-stone-900">{cat.title}</h3>
                  </div>
                  <p className="text-stone-500 text-sm mb-4 leading-relaxed">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="text-xs bg-stone-100 text-stone-500 px-2 py-1">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-6 border-t border-stone-200">
          <div className="max-w-4xl mx-auto">
            <div className="fade-up text-xs font-mono text-stone-400 mb-2">THE PROCESS</div>
            <h2 className="fade-up text-3xl md:text-4xl font-black mb-12 tracking-headline">
              SIMPLE<span className="text-red-600">.</span>
            </h2>

            <div className="space-y-0 fade-up">
              {[
                { num: '01', title: 'You tell us what you need.', desc: 'Or what you think you need. We start with a conversation, not a contract.' },
                { num: '02', title: 'We scope it together.', desc: 'Timeline, cost, materials, constraints. Nothing moves until you sign off on the plan.' },
                { num: '03', title: 'We build it.', desc: 'Prototypes, processes, systems. You see progress as it happens, not at a reveal meeting six months later.' },
                { num: '04', title: 'You own it.', desc: 'Everything we build, you keep. The documentation, the vendor relationships, the know-how. No dependency by design.' },
              ].map((step) => (
                <div key={step.num} className="flex gap-6 py-6 border-b border-stone-200 last:border-0">
                  <div className="text-stone-400 font-mono font-bold text-sm w-8 flex-shrink-0 pt-0.5">{step.num}</div>
                  <div>
                    <div className="font-semibold text-stone-900 mb-1">{step.title}</div>
                    <p className="text-stone-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-24 px-6 border-t border-stone-200 bg-white">
          <div className="max-w-2xl mx-auto">
            <div className="fade-up text-xs font-mono text-stone-400 mb-2">START A CONVERSATION</div>
            <h2 className="fade-up text-3xl md:text-4xl font-black mb-3 tracking-headline">
              TELL US WHAT YOU'RE WORKING ON<span className="text-red-600">.</span>
            </h2>
            <p className="fade-up text-stone-500 mb-10">
              No pitch deck required. Just tell us what you're trying to do.
            </p>

            {submitted ? (
              <div className="fade-up border border-stone-200 p-10 text-center">
                <h3 className="text-2xl font-black mb-3">Got it.</h3>
                <p className="text-stone-500">We'll be in touch within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 fade-up">
                <div>
                  <label className="block text-xs tracking-widest text-stone-500 uppercase mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full bg-stone-50 border border-stone-300 px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-900"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest text-stone-500 uppercase mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full bg-stone-50 border border-stone-300 px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-900"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest text-stone-500 uppercase mb-2">What are you looking for?</label>
                  <select
                    value={form.category}
                    onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                    className="w-full bg-stone-50 border border-stone-300 px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-900 appearance-none"
                  >
                    <option value="">Pick one (or don't)</option>
                    <option value="process">Process Improvement</option>
                    <option value="prototype">Prototyping & Product Development</option>
                    <option value="supply-chain">Supply Chain & Logistics</option>
                    <option value="operational">Operational Builds</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-widest text-stone-500 uppercase mb-2">Tell us more</label>
                  <textarea
                    rows={5}
                    value={form.details}
                    onChange={e => setForm(f => ({ ...f, details: e.target.value }))}
                    className="w-full bg-stone-50 border border-stone-300 px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-900 resize-none"
                    placeholder="What are you trying to build, fix, or figure out?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 bg-stone-900 px-8 py-4 text-sm font-semibold hover:bg-stone-800 transition-colors group text-white disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Start the Conversation'}
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-stone-200">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
              <div>
                <div className="font-black text-sm mb-4">GPI<span className="text-red-600">.</span>STUDIO</div>
                <p className="text-sm text-stone-400 leading-relaxed">
                  Organizational physics.<br />
                  We measure where energy gets stuck.
                </p>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-400 mb-4">RESEARCH</div>
                <div className="space-y-3">
                  <Link href="/insights" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Insights</Link>
                  <Link href="/insights/gpi-analyses" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Analyses</Link>
                  <Link href="/gpi-framework" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Framework</Link>
                </div>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-400 mb-4">WORK</div>
                <div className="space-y-3">
                  <Link href="/diagnostic" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Diagnostic</Link>
                  <Link href="/consult" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Book a Session</Link>
                  <Link href="/work-with-us" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Work With Us</Link>
                </div>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-400 mb-4">COMPANY</div>
                <div className="space-y-3">
                  <Link href="/about" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">About</Link>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-stone-200 flex justify-between items-center text-xs text-stone-400">
              <div>© {new Date().getFullYear()} Imagination G LLC</div>
              <div className="font-mono">gpi.studio</div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default WorkWithUsPage;
