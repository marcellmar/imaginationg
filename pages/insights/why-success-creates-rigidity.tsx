import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import RelatedContent from '../../components/RelatedContent';
import { ArrowLeft, BookOpen } from 'lucide-react';

const WhySuccessCreatesRigidityPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Why Success Creates Rigidity | GPI Studio"
        description="Organizations don't fail because they stop doing what made them successful. They fail because they can't stop."
        ogType="article"
        ogImage="/images/og-insights.svg"
        article={{
          publishedTime: "2025-01-15T00:00:00Z",
          author: "Marcus Davis"
        }}
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="insights" />

        {/* Hero */}
        <section className="pt-24 pb-12 px-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/insights" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-8 text-sm">
              <ArrowLeft size={14} />
              Back to Insights
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-mono text-red-600 bg-red-600/10 px-3 py-1">CHAPTER 1</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-[1.1]">
              WHY SUCCESS CREATES RIGIDITY<span className="text-red-600">.</span>
            </h1>

            <p className="text-xl text-zinc-400 max-w-2xl">
              Organizations don't fail because they stop doing what made them successful. They fail because they can't stop.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-8 px-6">
          <div className="max-w-3xl mx-auto space-y-16">

            {/* Opening Story */}
            <div className="space-y-4 text-zinc-300">
              <p>I had a great football game once. High school. Group home kid. Foster care system.</p>
              <p>I played out of my mind. We won. Everyone went home.</p>
              <p>I sat on the steps outside the stadium, alone, watching my teammates drive off with their families. Watching the lights go out.</p>
              <p className="text-white text-xl font-bold pt-4">Success isn't what you think it is. Success is what you optimize for. And what you optimize for becomes what traps you.</p>
            </div>

            {/* Goodwill Section */}
            <div className="border-l-2 border-red-600 pl-6 space-y-4">
              <h2 className="text-xs font-mono text-red-500 mb-4">THE GOODWILL PROBLEM</h2>
              <p className="text-zinc-300">2005. I was a GIS analyst. Goodwill wanted to enter urban Chicago. My team identified nine precision locations with demographic support and growth trajectories.</p>
              <p className="text-zinc-300">They tested one. Madison and Halsted. It worked. Still one of their best-performing stores.</p>
              <p className="text-white text-2xl font-black py-4">Then they stopped.</p>
              <p className="text-zinc-300">One store. Out of nine. With a model that could scale nationally.</p>
            </div>

            {/* Quote Box */}
            <div className="bg-zinc-950 border border-zinc-800 p-8">
              <p className="text-2xl text-white italic">"It may have been too good. Pissed some people off."</p>
              <p className="text-zinc-500 text-sm mt-4">My boss, when I asked what happened</p>
            </div>

            {/* Infrastructure */}
            <div className="space-y-4 text-zinc-300">
              <p>Goodwill had been successful for decades. That success had become <span className="text-white font-bold">infrastructure</span>.</p>
              <p>Careers built on the old approach. Budgets justified by existing process. A real estate team whose judgment we'd just replaced with data.</p>
              <p className="text-white">Optimization creates dependency. Dependency creates defenders. Defenders become particles.</p>
            </div>

            {/* 19 Years Callout */}
            <div className="text-center py-8">
              <p className="text-6xl font-black text-red-600">19</p>
              <p className="text-xl text-zinc-400 mt-2">years to do what the data said in 2005</p>
              <p className="text-sm text-zinc-600 mt-4">Goodwill opened in Avondale in 2024. One of our nine locations.</p>
            </div>

            {/* Field & Particle */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-950/20 border border-green-900/50 p-6">
                <p className="text-green-500 font-bold text-sm mb-2">FIELD SYSTEMS</p>
                <p className="text-zinc-300">Information flows freely. Decisions happen where knowledge is. Energy passes through without getting stuck.</p>
              </div>
              <div className="bg-red-950/20 border border-red-900/50 p-6">
                <p className="text-red-500 font-bold text-sm mb-2">PARTICLE SYSTEMS</p>
                <p className="text-zinc-300">Departments bounce off each other. Information gets trapped. Every handoff loses energy to friction.</p>
              </div>
            </div>

            <p className="text-zinc-400 text-center">Success creates mass. Mass creates gravity. Gravity pulls everything into fixed orbits.</p>

            {/* Christensen Quote */}
            <div className="border-l-2 border-yellow-500 pl-6">
              <p className="text-xl text-white italic">"Good management was the most powerful reason they failed."</p>
              <p className="text-zinc-500 text-sm mt-2">Clayton Christensen, The Innovator's Dilemma</p>
            </div>

            {/* Tesla Example */}
            <div className="space-y-4 text-zinc-300">
              <p>Tesla built the EV revolution. BYD is winning it.</p>
              <p>In 2025, BYD passed Tesla in global sales. Not because Tesla failed. Because Tesla succeeded so thoroughly the success calcified.</p>
              <p>Same two car models drive 95% of volume. Same founder-centric decisions that enabled rapid innovation now create bottlenecks.</p>
              <p className="text-white font-bold">Tesla isn't dying. It's calcifying.</p>
            </div>

            {/* Era Shift */}
            <div className="bg-zinc-950 border border-zinc-800 p-8 space-y-4">
              <h2 className="text-xs font-mono text-zinc-500 mb-4">THE ERA SHIFT</h2>
              <p className="text-zinc-300"><span className="text-white font-bold">1995-2025: Connection Era.</span> Success meant who you knew. What networks you belonged to. How much access you had.</p>
              <p className="text-zinc-300"><span className="text-white font-bold">2025+: Coordination Era.</span> Everyone's connected now. The moat became the ocean. What's scarce is the ability to move together.</p>
              <p className="text-red-500 font-bold text-lg pt-4">When Slack went down for a few hours, productivity went up 5%.</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-zinc-900 p-6">
                <p className="text-4xl font-black text-red-500">52%</p>
                <p className="text-zinc-500 text-sm mt-2">Fortune 500 from 2000 are gone</p>
              </div>
              <div className="bg-zinc-900 p-6">
                <p className="text-4xl font-black text-red-500">70%</p>
                <p className="text-zinc-500 text-sm mt-2">Digital transformations fail</p>
              </div>
            </div>

            {/* Pattern */}
            <div className="space-y-4 text-zinc-300">
              <h2 className="text-xs font-mono text-zinc-500 mb-4">THE PATTERN EVERYWHERE</h2>
              <p><span className="text-white font-bold">Healthcare:</span> Prior authorization delays care for 93% of physicians. 82% of denials get overturned on appeal. The system pays anyway, four out of five times.</p>
              <p><span className="text-white font-bold">Enterprise software:</span> Average large company has 371 applications. Half unused. Try to consolidate. Watch the implementation partners, integration vendors, and internal teams fight back.</p>
              <p className="text-white pt-4">Every successful solution became someone's job. Every job became identity. Every identity became a particle defending its position.</p>
            </div>

            {/* Toffler Quote */}
            <div className="border-l-2 border-cyan-500 pl-6">
              <p className="text-xl text-white italic">"The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn."</p>
              <p className="text-zinc-500 text-sm mt-2">Alvin Toffler</p>
            </div>

            {/* The Question */}
            <div className="text-center py-8 space-y-4">
              <p className="text-2xl font-black text-white">The question isn't "how do I fix my organization."</p>
              <p className="text-zinc-400">Most can't be fixed from inside. Particles too defended. Mass too great.</p>
              <p className="text-xl text-white font-bold pt-4">The question is: what do you do with this knowledge?</p>
            </div>

            {/* Closing */}
            <div className="bg-red-600/10 border border-red-600/30 p-8 space-y-4">
              <p className="text-zinc-300">That kid on the stadium steps didn't fail. He succeeded at the wrong game.</p>
              <p className="text-white font-bold text-xl">Your organization is that kid.</p>
              <p className="text-zinc-300">Built for connection when connection was hard. Successful at everything that mattered in 1995, 2005, maybe 2015.</p>
              <p className="text-zinc-300">The game changed. The infrastructure didn't.</p>
              <p className="text-red-500 font-bold text-xl pt-4">The dysfunction is the success. You're drowning in it.</p>
            </div>

            {/* Book Teaser */}
            <div className="border border-zinc-800 p-6 flex items-center gap-6">
              <BookOpen size={32} className="text-zinc-600 flex-shrink-0" />
              <div>
                <p className="text-zinc-500 text-xs uppercase">From the book</p>
                <p className="text-lg font-black">The Growing Pains Index</p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-black mb-4">MEASURE YOUR RIGIDITY</h3>
            <p className="text-zinc-500 mb-8">32 questions. See where success became constraint.</p>
            <Link
              href="/diagnostic"
              className="inline-block bg-red-600 px-8 py-4 font-bold hover:bg-red-700 transition-colors"
            >
              TAKE THE DIAGNOSTIC
            </Link>
          </div>
        </section>

        {/* Related */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-4xl mx-auto">
            <RelatedContent
              title="Continue Reading"
              items={[
                {
                  href: "/insights/friction-is-margin",
                  title: "Friction Is Margin",
                  description: "Why inefficiency is profitable for someone.",
                  color: "red"
                },
                {
                  href: "/insights/organizational-antibodies",
                  title: "Organizational Antibodies",
                  description: "Why good ideas get rejected.",
                  color: "yellow"
                },
                {
                  href: "/insights/the-spiral-model",
                  title: "The Spiral Model",
                  description: "Why transformation isn't linear.",
                  color: "cyan"
                }
              ]}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default WhySuccessCreatesRigidityPage;
