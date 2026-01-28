import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import RelatedContent from '../../../components/RelatedContent';
import LexiconDiagnostic from '../../../components/LexiconDiagnostic';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const PhotoQualityDiscoveryPage: NextPage = () => {
  const photoQualityQuestions = [
    {
      id: 1,
      question: "Are you solving complex problems while ignoring obvious ones?",
      yesText: "COMPLEXITY BIAS",
      yesSubtext: "Missing the obvious for the sophisticated.",
      noText: "OBVIOUS FIRST",
      noSubtext: "Simple problems get simple fixes."
    },
    {
      id: 2,
      question: "Do you assume technical solutions for non-technical problems?",
      yesText: "HAMMER SYNDROME",
      yesSubtext: "Everything looks like a nail.",
      noText: "ROOT CAUSE THINKING",
      noSubtext: "Match solution to actual problem."
    },
    {
      id: 3,
      question: "Are you building features while basic functionality is broken?",
      yesText: "FOUNDATION NEGLECT",
      yesSubtext: "Decorating a crumbling house.",
      noText: "FOUNDATION FIRST",
      noSubtext: "Build on solid basics."
    },
    {
      id: 4,
      question: "Do you spend weeks analyzing instead of testing simple fixes?",
      yesText: "ANALYSIS PARALYSIS",
      yesSubtext: "Thinking replaces doing.",
      noText: "TEST AND LEARN",
      noSubtext: "Quick experiments beat long analysis."
    },
    {
      id: 5,
      question: "Are your smart team members overlooking embarrassingly simple solutions?",
      yesText: "INTELLECTUAL BLINDNESS",
      yesSubtext: "Too smart to see the obvious.",
      noText: "BEGINNER'S MIND",
      noSubtext: "Fresh eyes see simple truths."
    }
  ];

  const calculatePhotoQualityResults = (answers: Record<number, 'yes' | 'no'>) => {
    const yesCount = Object.values(answers).filter(answer => answer === 'yes').length;
    const score = Math.round((yesCount / photoQualityQuestions.length) * 100);
    
    let severity: 'low' | 'medium' | 'high' | 'critical';
    let title: string;
    let description: string;
    let recommendation: string;
    let interventionUrl: string | undefined;

    if (score <= 20) {
      severity = 'low';
      title = 'Obvious-First Mindset';
      description = 'You check simple solutions before complex ones. The obvious gets proper attention.';
      recommendation = 'Maintain this discipline. Help others see simple solutions they\'re missing.';
    } else if (score <= 40) {
      severity = 'medium';
      title = 'Occasional Complexity Bias';
      description = 'Sometimes you skip over obvious solutions for more sophisticated approaches.';
      recommendation = 'Build "obvious check" into your problem-solving process. Start simple.';
      interventionUrl = '/interventions/the-map';
    } else if (score <= 70) {
      severity = 'high';
      title = 'Active Complexity Bias';
      description = 'You systematically miss obvious solutions in favor of complex ones. Smart but inefficient.';
      recommendation = 'Force yourself to identify the simplest possible cause first. Test obvious before sophisticated.';
      interventionUrl = '/interventions/the-naming';
    } else {
      severity = 'critical';
      title = 'Chronic Obviousness Blindness';
      description = 'You cannot see simple solutions. Everything gets complex treatment regardless of actual complexity.';
      recommendation = 'Emergency simplicity training. Get outside perspective to identify obvious solutions.';
      interventionUrl = '/interventions/the-naming';
    }

    return { score, severity, title, description, recommendation, interventionUrl };
  };

  return (
    <>
      <SEOHead
        title="Photo Quality Discovery - The Obvious Thing Everyone Missed | IMAGINATION G"
        description="Photo Quality Discovery: When Airbnb's breakthrough wasn't technical innovation but noticing their photos sucked. The pattern of missing obvious solutions."
        ogType="article"
        ogImage="/images/og-answers.svg"
        article={{
          publishedTime: "2025-06-09T00:00:00Z",
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
              <div className="inline-block mb-8 text-yellow-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                PATTERN: PHOTO QUALITY DISCOVERY
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                PHOTO QUALITY DISCOVERY<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                When the breakthrough isn't innovation—it's noticing the obvious thing everyone missed.
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
                  Photo Quality Discovery is the pattern where breakthrough solutions are embarrassingly obvious—
                  but everyone was too focused on complex problems to notice. Named after Airbnb's discovery 
                  that their real problem wasn't technology or strategy: their photos just sucked.
                </p>
              </div>

              {/* TL;DR Box */}
              <div className="bg-black border-2 border-yellow-500 p-8 mb-12">
                <h3 className="text-xl font-black text-yellow-500 mb-4">TL;DR</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Smart teams miss obvious solutions for sophisticated ones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>The simple fix often has 10x more impact than complex strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Intelligence can create blindness to basic problems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Customers see obvious problems that teams are blind to</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Original Story */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">THE AIRBNB PHOTO STORY</h2>
              
              <div className="border border-yellow-500 p-8 mb-8">
                <h3 className="text-2xl font-black text-yellow-500 mb-4">THE SETUP</h3>
                <p className="text-zinc-300 mb-4">
                  Early Airbnb was struggling. Bookings were low. The team was brilliant—ex-Google engineers, 
                  Harvard MBAs, Silicon Valley veterans. They were optimizing algorithms, A/B testing features, 
                  analyzing user flows, building recommendation engines.
                </p>
                <p className="text-zinc-300">
                  Revenue was flat. Everyone assumed it was a technology problem, a market fit problem, 
                  a pricing problem, a trust problem. Sophisticated solutions for sophisticated problems.
                </p>
              </div>

              <div className="border border-green-500 p-8">
                <h3 className="text-2xl font-black text-green-500 mb-4">THE DISCOVERY</h3>
                <p className="text-zinc-300 mb-4">
                  One founder went to New York and visited actual Airbnb properties. 
                  The revelation was immediate and embarrassing:
                </p>
                <blockquote className="border-l-4 border-green-500 pl-6 italic text-lg text-green-300 mb-4">
                  "The photos sucked. Customers couldn't even really see what it is that you were paying for."
                </blockquote>
                <p className="text-zinc-300">
                  That was it. Not the algorithm. Not the pricing model. Not the market strategy. 
                  The photos were terrible, so people couldn't see what they were buying.
                </p>
              </div>

              <div className="bg-black border border-zinc-700 p-8 mt-8">
                <h3 className="text-xl font-black mb-4">THE IMPACT</h3>
                <p className="text-zinc-300">
                  They started offering professional photography to hosts. Revenue doubled immediately. 
                  Then tripled. The "complex platform scaling challenge" was solved by better pictures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Pattern */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">THE PHOTO QUALITY PATTERN</h2>
              
              <div className="space-y-8">
                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">WHY SMART TEAMS MISS OBVIOUS PROBLEMS</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">CAUSE 1</div>
                      <div>
                        <h4 className="font-bold mb-2">Intelligence Bias</h4>
                        <p className="text-zinc-400">Smart people assume complex problems require complex solutions. Simple feels beneath their capabilities.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">CAUSE 2</div>
                      <div>
                        <h4 className="font-bold mb-2">Sophistication Signaling</h4>
                        <p className="text-zinc-400">Teams want to show their expertise. "The photos suck" doesn't sound strategic enough.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">CAUSE 3</div>
                      <div>
                        <h4 className="font-bold mb-2">Proximity Blindness</h4>
                        <p className="text-zinc-400">You see your product constantly. The obvious problems become invisible through familiarity.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">CAUSE 4</div>
                      <div>
                        <h4 className="font-bold mb-2">Tool Obsession</h4>
                        <p className="text-zinc-400">When you have analytics tools, everything looks like a data problem that needs analysis.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="border border-red-600 p-6">
                    <h3 className="text-xl font-black mb-4 text-red-600">WHAT TEAMS USUALLY TRY</h3>
                    <ul className="space-y-2 text-zinc-400">
                      <li>• Advanced analytics implementation</li>
                      <li>• User experience optimization</li>
                      <li>• Machine learning recommendations</li>
                      <li>• Market research and segmentation</li>
                      <li>• Competitive analysis deep-dives</li>
                      <li>• Technical architecture overhauls</li>
                    </ul>
                  </div>
                  <div className="border border-green-600 p-6">
                    <h3 className="text-xl font-black mb-4 text-green-600">PHOTO QUALITY SOLUTIONS</h3>
                    <ul className="space-y-2 text-zinc-400">
                      <li>• The photos are blurry</li>
                      <li>• The copy has typos</li>
                      <li>• The site loads slowly</li>
                      <li>• The contact form is broken</li>
                      <li>• The product doesn't work as advertised</li>
                      <li>• The price is higher than competitors</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Examples */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">OTHER PHOTO QUALITY DISCOVERIES</h2>
              
              <div className="space-y-6">
                <div className="border border-zinc-800 p-6">
                  <h3 className="text-xl font-black mb-3 text-yellow-500">HASBRO'S TOY MARKETING</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-red-500 mb-2">COMPLEX STRATEGY</h4>
                      <p className="text-zinc-400 text-sm">Multi-million dollar campaigns targeting children with sophisticated psychological triggers and entertainment partnerships.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-500 mb-2">PHOTO QUALITY FIX</h4>
                      <p className="text-zinc-400 text-sm">Target the parents who actually buy the toys, not the kids who want them. Revenue doubled.</p>
                    </div>
                  </div>
                </div>

                <div className="border border-zinc-800 p-6">
                  <h3 className="text-xl font-black mb-3 text-yellow-500">STARTUP CUSTOMER ACQUISITION</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-red-500 mb-2">COMPLEX STRATEGY</h4>
                      <p className="text-zinc-400 text-sm">Growth hacking funnels, viral coefficient optimization, influencer partnerships, paid acquisition channels.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-500 mb-2">PHOTO QUALITY FIX</h4>
                      <p className="text-zinc-400 text-sm">The founder called existing customers to ask why they bought. Fixed those three reasons. 10x growth.</p>
                    </div>
                  </div>
                </div>

                <div className="border border-zinc-800 p-6">
                  <h3 className="text-xl font-black mb-3 text-yellow-500">RESTAURANT LOW RATINGS</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-red-500 mb-2">COMPLEX STRATEGY</h4>
                      <p className="text-zinc-400 text-sm">Menu redesign, chef training, ambiance overhaul, social media strategy, customer experience journey mapping.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-500 mb-2">PHOTO QUALITY FIX</h4>
                      <p className="text-zinc-400 text-sm">The bathroom was disgusting. Fixed the bathroom. Five-star reviews returned immediately.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detection Protocol */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12 text-green-500">PHOTO QUALITY DETECTION PROTOCOL</h2>
              
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 1</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Fresh Eyes Review</h4>
                    <p className="text-zinc-400">Get someone who's never seen your product to use it and record their experience. No coaching.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 2</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Stupid Questions Allowed</h4>
                    <p className="text-zinc-400">"What if the problem is just that [obvious thing]?" Ask the questions that feel too simple.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 3</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Physical Inspection</h4>
                    <p className="text-zinc-400">Go touch the actual thing. Use the actual product. Visit the actual location. Data lies, reality doesn't.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 4</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Test Obvious First</h4>
                    <p className="text-zinc-400">Before building complex solutions, test the simple fix. It takes 10% of the time and often works.</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-900 border border-yellow-500 p-8 mt-12">
                <h3 className="text-xl font-black mb-4 text-yellow-500">THE HUMILITY REQUIREMENT</h3>
                <p className="text-zinc-300">
                  Photo Quality Discovery requires admitting that the breakthrough might not showcase your sophistication. 
                  Sometimes the answer is embarrassingly simple. That's not a failure of intelligence—it's intelligence applied correctly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnostic Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <LexiconDiagnostic
                lexiconTerm="photo quality discovery"
                questions={photoQualityQuestions}
                calculateResults={calculatePhotoQualityResults}
                color="yellow"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">FIND YOUR PHOTO QUALITY</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Stop overthinking. Start looking for the obvious thing everyone missed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/interventions/the-map"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                AUDIT THE OBVIOUS
              </Link>
              <Link 
                href="/answers"
                className="border-2 border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors"
              >
                EXPLORE MORE PATTERNS
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
                  href: "/answers/glossary/contrarian-principle",
                  title: "The Contrarian Principle",
                  description: "When everyone thinks alike, everyone is likely to be wrong.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/boring-business-advantage",
                  title: "Boring Business Advantage",
                  description: "Why unsexy industries offer the best opportunities.",
                  color: "yellow"
                },
                {
                  href: "/answers/glossary/aesthetic-addiction",
                  title: "Aesthetic Addiction",
                  description: "When teams choose looking right over being right.",
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

export default PhotoQualityDiscoveryPage;