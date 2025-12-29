import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';

const Home: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Measure Your Organizational Physics with GPI | IMAGINATION G"
        description="Calculate your Growing Pains Index across 7 dimensions. GPI scores 1-10 reveal organizational friction. Diagnostic exposure, not consulting theater."
        ogImage="/images/og-home.svg"
      />

      <Head>
        {/* Schema.org markup for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.imaginationg.studio/#organization",
              "name": "IMAGINATION G",
              "url": "https://www.imaginationg.studio",
              "logo": "https://www.imaginationg.studio/logo.png",
              "description": "GPI diagnostic measures organizational physics across 7 dimensions. From particle state to field state.",
              "sameAs": [
                "https://twitter.com/imaginationg",
                "https://linkedin.com/company/imaginationg"
              ],
              "slogan": "Measure your organizational physics.",
              "knowsAbout": [
                "Growing Pains Index",
                "Organizational Physics",
                "GPI Diagnostic",
                "Business Interventions",
                "Field State vs Particle State"
              ],
              "offers": {
                "@type": "AggregateOffer",
                "name": "GPI Diagnostic & Interventions",
                "description": "Measure organizational physics and targeted interventions"
              }
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Navigation Bar */}
        <Navigation currentPage="home" />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              {/* Left Column - Main Content */}
              <div>
                {/* System Status Badge */}
                <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  GPI DIAGNOSTIC: READY
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                  MEASURE YOUR<br />ORGANIZATIONAL<br />PHYSICS<span className="text-red-600">.</span>
                </h1>

                <p className="text-xl text-zinc-400 mb-8 max-w-xl">
                  We X-ray your organization across 7 dimensions. GPI scores from 1 (field state) to 10 (particle state). What you do with it is your business.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link href="/diagnostic" className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors text-center">
                    CALCULATE YOUR GPI
                  </Link>
                  <Link href="/gpi-framework" className="border-2 border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors text-center">
                    LEARN THE FRAMEWORK
                  </Link>
                </div>
              </div>

              {/* Right Column - GPI Preview */}
              <div className="space-y-6">
                {/* GPI Scale Preview */}
                <div className="bg-zinc-950 border border-zinc-800 p-8">
                  <h3 className="text-xl font-black mb-6 text-center">THE GPI SCALE</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-500 font-bold">1</span>
                    <span className="text-red-500 font-bold">10</span>
                  </div>
                  <div className="h-3 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded mb-4"></div>
                  <div className="grid grid-cols-3 text-center text-sm">
                    <div>
                      <div className="text-green-500 font-bold">FIELD</div>
                      <div className="text-zinc-500">Adaptive</div>
                    </div>
                    <div>
                      <div className="text-yellow-500 font-bold">TRANSITION</div>
                      <div className="text-zinc-500">Mixed</div>
                    </div>
                    <div>
                      <div className="text-red-500 font-bold">PARTICLE</div>
                      <div className="text-zinc-500">Rigid</div>
                    </div>
                  </div>
                </div>

                {/* Dimension Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-zinc-800 p-4 hover:border-red-600 transition-colors">
                    <h3 className="font-black text-red-600 mb-1 text-sm">DECISION LATENCY</h3>
                    <p className="text-xs text-zinc-500">20% weight</p>
                  </div>
                  <div className="border border-zinc-800 p-4 hover:border-red-600 transition-colors">
                    <h3 className="font-black text-red-600 mb-1 text-sm">ERROR CORRECTION</h3>
                    <p className="text-xs text-zinc-500">20% weight</p>
                  </div>
                  <div className="border border-zinc-800 p-4 hover:border-red-600 transition-colors">
                    <h3 className="font-black text-red-600 mb-1 text-sm">KNOWLEDGE LOCATION</h3>
                    <p className="text-xs text-zinc-500">15% weight</p>
                  </div>
                  <div className="border border-zinc-800 p-4 hover:border-red-600 transition-colors">
                    <h3 className="font-black text-red-600 mb-1 text-sm">STRUCTURAL LOCK-IN</h3>
                    <p className="text-xs text-zinc-500">15% weight</p>
                  </div>
                </div>

                <div className="bg-zinc-950 border border-zinc-800 p-6">
                  <p className="text-lg font-bold mb-3">We measure, not prescribe.</p>
                  <p className="text-zinc-400 text-sm">
                    GPI diagnostic across 7 dimensions. Like an X-ray for organizational physics.
                    We expose the structure. What you do with it is your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Comparison Teaser */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-black mb-8">INDUSTRY BENCHMARKS</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="border border-zinc-800 p-4">
                  <div className="text-2xl font-black text-green-500">1.5</div>
                  <div className="text-sm text-zinc-400">Tech/Software</div>
                </div>
                <div className="border border-zinc-800 p-4">
                  <div className="text-2xl font-black text-yellow-500">6.0</div>
                  <div className="text-sm text-zinc-400">Logistics</div>
                </div>
                <div className="border border-zinc-800 p-4">
                  <div className="text-2xl font-black text-red-500">7.5</div>
                  <div className="text-sm text-zinc-400">Education</div>
                </div>
                <div className="border border-zinc-800 p-4">
                  <div className="text-2xl font-black text-red-500">9.0</div>
                  <div className="text-sm text-zinc-400">Government</div>
                </div>
              </div>
              <p className="text-zinc-500 mb-6">
                Lower GPI = more adaptive. Where does your organization sit?
              </p>
              <Link
                href="/diagnostic"
                className="inline-block border-2 border-red-600 px-8 py-4 font-black hover:bg-red-600 transition-colors"
              >
                FIND OUT YOUR GPI
              </Link>
            </div>
          </div>
        </section>

        {/* What GPI Reveals */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-black mb-8 text-center">WHAT YOUR GPI REVEALS</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-zinc-800 p-6 bg-black">
                  <h3 className="font-black text-xl mb-3">METABOLIC RATE</h3>
                  <p className="text-zinc-400 text-sm">
                    How fast your organization processes change. High metabolic rate = rapid adaptation.
                  </p>
                </div>
                <div className="border border-zinc-800 p-6 bg-black">
                  <h3 className="font-black text-xl mb-3">PLATEAU RISK</h3>
                  <p className="text-zinc-400 text-sm">
                    When you'll hit performance ceilings. Organizations above GPI 7.0 plateau within 18 months.
                  </p>
                </div>
                <div className="border border-zinc-800 p-6 bg-black">
                  <h3 className="font-black text-xl mb-3">WEAK DIMENSIONS</h3>
                  <p className="text-zinc-400 text-sm">
                    Which of the 7 dimensions constrain you most. Targeted intervention matching.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-black mb-6">
              32 QUESTIONS. 7 DIMENSIONS. YOUR GPI.
            </h2>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Free diagnostic. No email required. Get your organizational physics assessment in under 10 minutes.
            </p>
            <Link
              href="/diagnostic"
              className="inline-block bg-red-600 px-12 py-6 text-2xl font-black hover:bg-red-700 transition-colors"
            >
              CALCULATE YOUR GPI
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
