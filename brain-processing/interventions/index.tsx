import type { NextPage } from 'next';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { DimensionKey } from '../../lib/gpi-types';

interface InterventionData {
  name: string;
  price: string;
  duration: string;
  description: string;
  url: string;
  badge: string;
  gpiTargets: DimensionKey[];
  recommendedGPI: number;
  expectedImprovement: number;
}

const InterventionsPage: NextPage = () => {
  const [flowData, setFlowData] = useState<{drift: string, move: string} | null>(null);

  useEffect(() => {
    // Check for flow data from IG Complete Flow
    if (typeof window !== 'undefined') {
      const storedFlowData = sessionStorage.getItem('flowData');
      if (storedFlowData) {
        try {
          const data = JSON.parse(storedFlowData);
          if (data.fromFlow) {
            setFlowData({ drift: data.drift, move: data.move });
            sessionStorage.removeItem('flowData'); // Clear after reading
          }
        } catch (error) {
          console.error('Error parsing flow data:', error);
        }
      }
    }
  }, []);

  const interventions: InterventionData[] = [
    {
      name: 'THE NAMING',
      price: '$750',
      duration: '90 Minutes. Complete Clarity.',
      description: 'Move Decision Latency from particle to field. Surface the signal you\'ve been building around. One session, complete clarity.',
      url: '/interventions/the-naming',
      badge: 'PORTAL',
      gpiTargets: ['DECISION_LATENCY', 'KNOWLEDGE_LOCATION'],
      recommendedGPI: 7.0,
      expectedImprovement: 0.5
    },
    {
      name: 'THE MAP',
      price: '$1,500',
      duration: '5 Days. Clear Connections.',
      description: 'Target Knowledge Location dimension. Expose where information gets stuck. Map friction points. Move toward field-state flow.',
      url: '/interventions/the-map',
      badge: 'PORTAL',
      gpiTargets: ['KNOWLEDGE_LOCATION', 'TALENT_FLOW'],
      recommendedGPI: 6.0,
      expectedImprovement: 0.8
    },
    {
      name: 'THE MARKET SMACKDOWN',
      price: '$2,250',
      duration: '72 Hours. GO/NO-GO.',
      description: 'GO/NO-GO on products, services, or upgrades. Evaluate product-market fit and capital requirements. Ship it or kill it.',
      url: '/interventions/the-market-smackdown',
      badge: 'PORTAL',
      gpiTargets: ['DECISION_LATENCY', 'CAPITAL_INTENSITY'],
      recommendedGPI: 5.0,
      expectedImprovement: 1.0
    },
    {
      name: 'THE OVERRIDE',
      price: '$3,000',
      duration: '30 Days. Pattern Broken.',
      description: 'Break Structural Lock-In. Daily pattern interrupts via Teams. Force Error Correction. Move from particle rigidity to field adaptation.',
      badge: 'PORTAL',
      url: '/interventions/the-override',
      gpiTargets: ['STRUCTURAL_LOCKIN', 'ERROR_CORRECTION'],
      recommendedGPI: 7.0,
      expectedImprovement: 1.5
    },
    {
      name: 'THE BUILD',
      price: '$4,500',
      duration: '4 Weeks. MVP or Kill.',
      description: 'Accelerate Knowledge Velocity. Enable Error Correction loops. Ship to users, learn fast. Field-state operations in weeks.',
      badge: 'PORTAL',
      url: '/interventions/the-build',
      gpiTargets: ['KNOWLEDGE_VELOCITY', 'ERROR_CORRECTION'],
      recommendedGPI: 6.0,
      expectedImprovement: 1.2
    }
  ];

  const dimensionLabels: Record<DimensionKey, string> = {
    DECISION_LATENCY: 'Decision Latency',
    KNOWLEDGE_LOCATION: 'Knowledge Location',
    ERROR_CORRECTION: 'Error Correction',
    STRUCTURAL_LOCKIN: 'Structural Lock-In',
    TALENT_FLOW: 'Talent Flow',
    CAPITAL_INTENSITY: 'Capital Intensity',
    KNOWLEDGE_VELOCITY: 'Knowledge Velocity',
  };

  return (
    <>
      <SEOHead
        title="GPI-Targeted Interventions | IMAGINATION G"
        description="Interventions matched to your GPI dimensions. Target decision latency, structural lock-in, knowledge velocity. Measure organizational physics, deploy targeted fixes."
        ogImage="/images/og-services.svg"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="interventions" />

        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              {/* Hero */}
              <div className="mb-16 text-center">
                {/* System Status Badge */}
                <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  GPI-TARGETED INTERVENTIONS
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                  MOVE FROM PARTICLE<br />TO FIELD STATE<span className="text-red-600">.</span>
                </h1>
                <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
                  Each intervention targets specific GPI dimensions. Measure → intervene → re-measure. Track your movement toward field state.
                </p>

                {/* Quick GPI reference */}
                <div className="inline-flex items-center gap-4 text-sm mb-8">
                  <span className="text-zinc-500">GPI Scale:</span>
                  <span className="text-green-500">1-3 Field</span>
                  <span className="text-zinc-700">|</span>
                  <span className="text-yellow-500">4-6 Transition</span>
                  <span className="text-zinc-700">|</span>
                  <span className="text-red-500">7-10 Particle</span>
                </div>

                {/* Dimension explanation */}
                <div className="bg-zinc-950 border border-zinc-800 p-6 text-left max-w-2xl mx-auto">
                  <h3 className="text-sm font-bold text-red-600 mb-3">HOW GPI INTERVENTIONS WORK</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-zinc-400">
                    <div>
                      <p className="text-white mb-1">1. Measure your GPI</p>
                      <p>19 questions reveal dimension scores</p>
                    </div>
                    <div>
                      <p className="text-white mb-1">2. Identify particle dimensions</p>
                      <p>Find where friction is highest (7-10)</p>
                    </div>
                    <div>
                      <p className="text-white mb-1">3. Deploy targeted intervention</p>
                      <p>Each intervention moves specific dimensions</p>
                    </div>
                    <div>
                      <p className="text-white mb-1">4. Re-measure after 30-90 days</p>
                      <p>Track movement toward field state</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Flow Data Display */}
              {flowData && (
                <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
                  <div className="bg-zinc-950 border border-zinc-800 p-6">
                    <p className="text-zinc-500 text-sm uppercase mb-2">BURIED TRUTH:</p>
                    <p className="text-xl">{flowData.drift}</p>
                  </div>
                  <div className="bg-zinc-950 border border-zinc-800 p-6">
                    <p className="text-zinc-500 text-sm uppercase mb-2">OVERRIDE PATH:</p>
                    <p className="text-xl">{flowData.move}</p>
                  </div>
                </div>
              )}
              
              {/* Interventions Grid */}
              <div className="space-y-8">
                {interventions.map((intervention, index) => (
                  <div key={index} className="group border border-zinc-800 p-8 hover:border-red-600 transition-all">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <h2 className="text-2xl md:text-3xl font-black">{intervention.name}</h2>
                          {intervention.badge && (
                            <span className="text-xs font-bold text-red-600 border border-red-600 px-2 py-1 rounded">
                              {intervention.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-lg text-zinc-400 mb-4">{intervention.description}</p>
                        <p className="text-sm text-zinc-600 mb-4">{intervention.duration}</p>

                        {/* GPI Targeting */}
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className="text-xs text-zinc-500 uppercase">Targets:</span>
                          {intervention.gpiTargets.map((target) => (
                            <span
                              key={target}
                              className="text-xs font-mono bg-red-600/20 text-red-400 px-2 py-1 rounded"
                            >
                              {dimensionLabels[target]}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-3 text-xs">
                          <span className="text-zinc-500">
                            Recommended when <span className="font-mono text-yellow-400">GPI &gt; {intervention.recommendedGPI}</span>
                          </span>
                          <span className="text-zinc-500">
                            Expected: <span className="font-mono text-green-400">-{intervention.expectedImprovement} points</span>
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <span className="text-3xl font-black">{intervention.price}</span>
                        <Link
                          href={intervention.url}
                          className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
                        >
                          DEPLOY →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-20 text-center border-t border-zinc-900 pt-16">
                <p className="text-xl text-zinc-400 mb-4">Not sure which dimensions are in particle state?</p>
                <p className="text-zinc-500 mb-8">Take the GPI diagnostic to see exactly where friction is highest. 19 binary questions. Your organizational state, measured.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/diagnostic"
                    className="inline-block bg-red-600 px-8 py-4 text-xl font-black hover:bg-red-700 transition-colors"
                  >
                    MEASURE YOUR GPI →
                  </Link>
                  <Link
                    href="/framework"
                    className="inline-block border border-zinc-700 px-8 py-4 text-xl font-black hover:border-zinc-500 transition-colors"
                  >
                    UNDERSTAND THE FRAMEWORK
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InterventionsPage;