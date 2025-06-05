import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import RelatedContent from '../../../components/RelatedContent';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const VoxelPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Voxel - Three-Dimensional Truth | IMAGINATION G"
        description="Voxel is the three-dimensional truth unit where reality meets perception meets action. Learn how to navigate the complete truth space of business decisions."
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
                LEXICON: VOXEL
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                VOXEL<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Three-dimensional truth unit. Where reality meets perception meets action.
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
                  Voxel (vox-el) is the smallest unit of complete truth in business—a three-dimensional 
                  space where objective reality, subjective perception, and actionable possibility intersect. 
                  Unlike flat data, voxels contain the full context needed for real decisions.
                </p>
              </div>

              {/* TL;DR Box */}
              <div className="bg-black border-2 border-yellow-500 p-8 mb-12">
                <h3 className="text-xl font-black text-yellow-500 mb-4">TL;DR</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Voxel = complete truth in 3D (reality + perception + action)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Flat data kills context, voxels preserve it</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Decisions need all three dimensions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Most organizations operate in 2D and wonder why they fail</span>
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
              <h2 className="text-3xl font-black mb-12">THE THREE DIMENSIONS</h2>
              
              <div className="space-y-8">
                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">X-AXIS: OBJECTIVE REALITY</h3>
                  <p className="text-zinc-400 mb-4">
                    What actually is. The measurable, verifiable, ground truth. Numbers, facts, 
                    physics. The universe doesn't care about your feelings dimension.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Examples:</strong> Revenue, user count, burn rate, market size<br />
                    <strong>Trap:</strong> Thinking this is the only dimension that matters
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">Y-AXIS: SUBJECTIVE PERCEPTION</h3>
                  <p className="text-zinc-400 mb-4">
                    How it's experienced. The human reality layer. Emotions, beliefs, narratives. 
                    The dimension where meaning lives and decisions actually happen.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Examples:</strong> Team morale, brand perception, confidence levels<br />
                    <strong>Trap:</strong> Dismissing this as "soft" or irrelevant
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">Z-AXIS: ACTIONABLE POSSIBILITY</h3>
                  <p className="text-zinc-400 mb-4">
                    What could be done. The potential energy dimension. Options, constraints, 
                    momentum vectors. Where strategy meets physics meets will.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Examples:</strong> Resource availability, skill gaps, time horizons<br />
                    <strong>Trap:</strong> Confusing possibility with probability
                  </p>
                </div>
              </div>

              {/* Visualization */}
              <div className="bg-zinc-950 border border-zinc-800 p-8 mt-12">
                <h3 className="text-xl font-black mb-6">VOXEL SPACE VISUALIZATION</h3>
                <div className="font-mono text-sm space-y-2">
                  <div>         PERCEPTION (Y)</div>
                  <div>                |</div>
                  <div>                |</div>
                  <div>                |_____ REALITY (X)</div>
                  <div>               /</div>
                  <div>              /</div>
                  <div>             /</div>
                  <div>      ACTION (Z)</div>
                  <div className="mt-4 text-zinc-400">
                    Each decision point exists somewhere in this space.
                    Flat thinking collapses one or more dimensions.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">VOXEL THINKING IN PRACTICE</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-black mb-4 text-green-500">2D THINKING (FAILS)</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• "The data says we should do X"</li>
                    <li>• "People feel Y, so let's do Y"</li>
                    <li>• "We can do Z, so we will"</li>
                    <li>• Single dimension dominates</li>
                    <li>• Context gets murdered</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-4 text-green-500">3D THINKING (WINS)</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• "Reality says X, perception is Y, we can do Z"</li>
                    <li>• "All three dimensions align at point A"</li>
                    <li>• "Dimension conflict reveals opportunity B"</li>
                    <li>• Complete context preserved</li>
                    <li>• Decisions match complexity</li>
                  </ul>
                </div>
              </div>

              {/* Example Box */}
              <div className="bg-black border border-zinc-800 p-8">
                <h3 className="text-xl font-black mb-4">VOXEL EXAMPLE: LAYOFF DECISION</h3>
                <div className="space-y-4 text-zinc-400">
                  <p><strong className="text-white">2D Analysis:</strong> "Numbers say cut 20% to extend runway"</p>
                  <p><strong className="text-white">Voxel Analysis:</strong></p>
                  <ul className="space-y-2 ml-6">
                    <li>• <strong>Reality:</strong> 6 months runway at current burn</li>
                    <li>• <strong>Perception:</strong> Team believes in mission, fears instability</li>
                    <li>• <strong>Action:</strong> Can cut 20%, or cut 10% + revenue sprint, or raise emergency round</li>
                  </ul>
                  <p className="text-sm text-yellow-500 mt-4">
                    The voxel reveals: 10% cut + transparent revenue sprint leverages all three dimensions. 
                    Pure numbers would have killed the company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">BUILDING VOXEL AWARENESS</h2>
              
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">HABIT 1</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Always Ask Three Questions</h4>
                    <p className="text-zinc-400">What's true? How's it felt? What's possible?</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">HABIT 2</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Map Dimension Conflicts</h4>
                    <p className="text-zinc-400">When dimensions disagree, innovation lives in the gap.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">HABIT 3</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Resist Dimension Collapse</h4>
                    <p className="text-zinc-400">Under pressure, we flatten to 2D. That's when we fail.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">HABIT 4</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Seek Voxel Alignment</h4>
                    <p className="text-zinc-400">Best decisions happen where all three dimensions converge.</p>
                  </div>
                </div>
              </div>

              {/* Insight Box */}
              <div className="bg-black border-l-4 border-yellow-500 p-8 mt-12">
                <h3 className="text-xl font-black mb-4 text-yellow-500">THE VOXEL ADVANTAGE</h3>
                <p className="text-zinc-400">
                  Organizations that think in voxels make decisions others can't even see. 
                  They navigate complexity like it's a three-dimensional map—because it is. 
                  While competitors crash in 2D, voxel thinkers find paths through impossible spaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">THINK IN VOXELS</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Stop making flat decisions in a three-dimensional world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services/clarity-catalyst-call"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                MAP YOUR VOXEL SPACE
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
                  href: "/answers/glossary/nexel",
                  title: "Your Nexel Pattern",
                  description: "How you navigate through three-dimensional decision space.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/zelith",
                  title: "The Zelith Point",
                  description: "When all dimensions reach maximum pressure. Breakthrough moment.",
                  color: "yellow"
                },
                {
                  href: "/interventions/the-map",
                  title: "Map Your Voxels",
                  description: "Visualize your organization's truth in three dimensions.",
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

export default VoxelPage;