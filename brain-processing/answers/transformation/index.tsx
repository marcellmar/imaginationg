import React, { useState } from 'react';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import RelatedContent from '../../../components/RelatedContent';
import { ArrowRight, Check } from 'lucide-react';

const TransformationFiltersPage = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filters = [
    {
      category: "BURIED TRUTH",
      options: [
        { id: "fear-revenue", label: "Fear of losing revenue", color: "red" },
        { id: "founder-identity", label: "Founder identity crisis", color: "red" },
        { id: "team-harmony", label: "False team harmony", color: "red" },
        { id: "market-reality", label: "Avoiding market reality", color: "red" },
        { id: "perfectionism", label: "Perfectionism paralysis", color: "red" }
      ]
    },
    {
      category: "DESIRED MOVEMENT",
      options: [
        { id: "ship-daily", label: "Ship daily or die", color: "green" },
        { id: "binary-decisions", label: "Binary decisions only", color: "green" },
        { id: "conflict-clarity", label: "Conflict creates clarity", color: "green" },
        { id: "ugly-beats", label: "Ugly beats perfect", color: "green" },
        { id: "speed-strategy", label: "Speed is strategy", color: "green" }
      ]
    },
    {
      category: "TRANSFORMATION STAGE",
      options: [
        { id: "pre-awareness", label: "Pre-awareness", color: "yellow" },
        { id: "awareness", label: "Awareness", color: "yellow" },
        { id: "consideration", label: "Consideration", color: "yellow" },
        { id: "decision", label: "Decision", color: "yellow" },
        { id: "action", label: "Action", color: "yellow" }
      ]
    }
  ];

  const toggleFilter = (filterId: string) => {
    setSelectedFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  const applyFilters = () => {
    // Store filters and redirect to interventions page
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('transformationFilters', JSON.stringify(selectedFilters));
      window.location.href = '/interventions';
    }
  };

  return (
    <>
      <SEOHead
        title="Transformation Filters - Name Your Truth | IMAGINATION G"
        description="Name what's buried. Choose your movement. Find your intervention. Binary choices only."
        ogImage="/images/og-default.jpg"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                {/* System Status Badge */}
                <div className="inline-block mb-8 text-yellow-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                  <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                  FILTER: ACTIVE
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                  NAME<br />YOUR<br />TRUTH<span className="text-red-600">.</span>
                </h1>
                
                <p className="text-xl text-zinc-400 mb-8">
                  Select what's buried. Choose your movement. Get your intervention.
                </p>

                {selectedFilters.length > 0 && (
                  <div className="mb-8">
                    <p className="text-sm text-zinc-500 mb-2">SELECTED: {selectedFilters.length}</p>
                    <button
                      onClick={clearFilters}
                      className="text-red-600 text-sm font-bold hover:text-red-500 transition-colors"
                    >
                      CLEAR ALL
                    </button>
                  </div>
                )}
              </div>

              <div className="space-y-8">
                {/* Philosophy */}
                <div className="border border-zinc-800 p-6">
                  <h3 className="text-lg font-black mb-3">THE FILTER PHILOSOPHY</h3>
                  <p className="text-zinc-400">
                    Every transformation starts with naming. What you can't name, you can't change. 
                    Binary choices reveal truth.
                  </p>
                </div>

                {/* Instructions */}
                <div className="border border-zinc-800 p-6">
                  <h3 className="text-lg font-black mb-3">HOW IT WORKS</h3>
                  <ol className="space-y-2 text-zinc-400">
                    <li>1. Select what's buried in your organization</li>
                    <li>2. Choose your desired movement state</li>
                    <li>3. Identify your transformation stage</li>
                    <li>4. Get matched to your intervention</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              {filters.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-black mb-8 text-zinc-400">{category.category}</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.options.map((option) => {
                      const isSelected = selectedFilters.includes(option.id);
                      return (
                        <button
                          key={option.id}
                          onClick={() => toggleFilter(option.id)}
                          className={`
                            p-6 border-2 transition-all text-left
                            ${isSelected 
                              ? `border-${option.color}-600 bg-zinc-950` 
                              : 'border-zinc-800 hover:border-zinc-600'
                            }
                          `}
                        >
                          <div className="flex items-start justify-between">
                            <span className={`font-bold ${isSelected ? `text-${option.color}-600` : ''}`}>
                              {option.label}
                            </span>
                            {isSelected && (
                              <Check className={`text-${option.color}-600 ml-2 flex-shrink-0`} size={20} />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Apply Filters CTA */}
            <div className="mt-16 text-center">
              <button
                onClick={applyFilters}
                disabled={selectedFilters.length === 0}
                className={`
                  inline-flex items-center gap-2 px-12 py-6 text-xl font-black transition-all
                  ${selectedFilters.length > 0
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
                  }
                `}
              >
                FIND YOUR INTERVENTION
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <RelatedContent
              title="Quick Paths"
              items={[
                {
                  href: "/diagnostic",
                  title: "SIGNAL DETECTION",
                  description: "19 binary questions. Find your noise source.",
                  color: "green"
                },
                {
                  href: "/interventions",
                  title: "ALL INTERVENTIONS",
                  description: "Skip filters. View all transformation options.",
                  color: "yellow"
                },
                {
                  href: "/interventions/the-naming",
                  title: "THE NAMING",
                  description: "Can't choose? Start here. Surface truth first.",
                  color: "red"
                }
              ]}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default TransformationFiltersPage;