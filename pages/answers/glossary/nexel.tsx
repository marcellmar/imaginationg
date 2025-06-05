import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import RelatedContent from '../../../components/RelatedContent';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const NexelPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Nexel - Behavioral Identity Marker | IMAGINATION G"
        description="Nexel is your behavioral identity marker—how you move through constraint. Discover your unique constraint navigation pattern and why it determines organizational outcomes."
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
                LEXICON: NEXEL
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                NEXEL<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Your behavioral identity marker. How you move through constraint.
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
                  Nexel (nex-el) is your unique constraint navigation pattern—the specific way you move through resistance. 
                  Every person and organization has a dominant nexel that determines how they respond to obstacles. 
                  It's not personality. It's behavioral physics.
                </p>
              </div>

              {/* TL;DR Box */}
              <div className="bg-black border-2 border-yellow-500 p-8 mb-12">
                <h3 className="text-xl font-black text-yellow-500 mb-4">TL;DR</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Your nexel = how you naturally move through constraint</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Four primary nexels: Piercer, Router, Absorber, Amplifier</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Determines success patterns in organizations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Can't be changed, only recognized and leveraged</span>
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
              <h2 className="text-3xl font-black mb-12">THE FOUR PRIMARY NEXELS</h2>
              
              <div className="space-y-8">
                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">1. PIERCER</h3>
                  <p className="text-zinc-400 mb-4">
                    Moves through constraint by direct confrontation. Breaks barriers rather than avoiding them.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Strength:</strong> Speed through obstacles<br />
                    <strong>Weakness:</strong> Leaves damage in wake
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">2. ROUTER</h3>
                  <p className="text-zinc-400 mb-4">
                    Finds alternative paths around constraint. Maps new territory rather than fighting existing barriers.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Strength:</strong> Efficiency and innovation<br />
                    <strong>Weakness:</strong> Can miss direct solutions
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">3. ABSORBER</h3>
                  <p className="text-zinc-400 mb-4">
                    Takes constraint into themselves, transforms it internally. Changes self rather than environment.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Strength:</strong> Adaptability and resilience<br />
                    <strong>Weakness:</strong> Can lose original purpose
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">4. AMPLIFIER</h3>
                  <p className="text-zinc-400 mb-4">
                    Uses constraint as fuel. Converts resistance into momentum. Grows stronger from opposition.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Strength:</strong> Turns weakness to strength<br />
                    <strong>Weakness:</strong> Needs conflict to thrive
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">WHY NEXEL MATTERS</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-black mb-4 text-yellow-500">FOR INDIVIDUALS</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• Stop fighting your nature</li>
                    <li>• Choose roles that match your nexel</li>
                    <li>• Build teams with complementary nexels</li>
                    <li>• Predict your failure patterns</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-4 text-yellow-500">FOR ORGANIZATIONS</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• Map organizational nexel composition</li>
                    <li>• Assign projects by nexel fit</li>
                    <li>• Prevent nexel conflicts</li>
                    <li>• Design systems for nexel diversity</li>
                  </ul>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="overflow-x-auto">
                <table className="w-full border border-zinc-800">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="p-4 text-left font-black">Nexel Type</th>
                      <th className="p-4 text-left font-black">Best Environment</th>
                      <th className="p-4 text-left font-black">Avoid</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-800">
                      <td className="p-4 text-red-600 font-bold">Piercer</td>
                      <td className="p-4">Crisis, turnarounds, breakthroughs</td>
                      <td className="p-4 text-zinc-500">Maintenance, consensus-building</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="p-4 text-red-600 font-bold">Router</td>
                      <td className="p-4">Innovation, new markets, exploration</td>
                      <td className="p-4 text-zinc-500">Rigid systems, direct conflict</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="p-4 text-red-600 font-bold">Absorber</td>
                      <td className="p-4">Change management, integration, healing</td>
                      <td className="p-4 text-zinc-500">Urgent deadlines, confrontation</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-red-600 font-bold">Amplifier</td>
                      <td className="p-4">Competition, transformation, growth</td>
                      <td className="p-4 text-zinc-500">Stable operations, peace-keeping</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">DISCOVER YOUR NEXEL</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Stop fighting your constraint navigation pattern. Start using it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/diagnostic"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                TAKE NEXEL ASSESSMENT
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
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <RelatedContent
              title="Related Concepts"
              items={[
                {
                  href: "/answers/glossary/morrin",
                  title: "Morrin State",
                  description: "Post-choice existence. When constraint becomes fuel.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/strune",
                  title: "Understanding Strune",
                  description: "When movement creates its own resistance. The pattern trap.",
                  color: "yellow"
                },
                {
                  href: "/interventions/the-naming",
                  title: "Surface Your Nexel",
                  description: "One session to identify your constraint navigation pattern.",
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

export default NexelPage;