/**
 * Book Section - The Growing Pains Index
 * Release excerpts along the way to June 2026 launch
 */

import React, { useState } from 'react';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';

// Chapter status type
type ChapterStatus = 'published' | 'coming_soon' | 'locked';

interface Chapter {
  number: number;
  title: string;
  subtitle?: string;
  status: ChapterStatus;
  slug?: string;
  keyLine?: string;
}

interface Part {
  number: string;
  title: string;
  subtitle: string;
  chapters: Chapter[];
}

const BookPage = () => {
  const bookParts: Part[] = [
    {
      number: 'I',
      title: 'THE TRAP',
      subtitle: 'Understanding the Physics',
      chapters: [
        {
          number: 1,
          title: 'Why Success Creates Rigidity',
          subtitle: 'The paradox: Every optimization creates a dependency',
          status: 'coming_soon',
          slug: 'chapter-1',
          keyLine: 'Success doesn\'t cause failure. The inability to unlearn success does.',
        },
        {
          number: 2,
          title: 'The Particle Phase',
          subtitle: 'When optimization becomes prison',
          status: 'locked',
          keyLine: 'Particle isn\'t bad. Particle that can\'t recognize itself is fatal.',
        },
        {
          number: 3,
          title: 'The Field Phase',
          subtitle: 'When connection creates chaos',
          status: 'locked',
          keyLine: 'Field isn\'t the opposite of particle. It\'s a different physics.',
        },
        {
          number: 4,
          title: 'The Spiral',
          subtitle: 'Why transformation isn\'t linear',
          status: 'locked',
          keyLine: 'You can\'t skip phases. You can only build the capability to spiral faster.',
        },
      ],
    },
    {
      number: 'II',
      title: 'THE LANGUAGE',
      subtitle: 'Seeing the Patterns',
      chapters: [
        {
          number: 5,
          title: 'GPI Scoring',
          subtitle: 'How to measure where you are',
          status: 'locked',
          keyLine: 'GPI doesn\'t measure what you\'re doing. It measures what you can do next.',
        },
        {
          number: 6,
          title: 'Metabolic Rate',
          subtitle: 'The speed of organizational change',
          status: 'locked',
          keyLine: 'Speed is a function of infrastructure. Change the infrastructure, change the speed.',
        },
        {
          number: 7,
          title: 'Organizational Antibodies',
          subtitle: 'Why good ideas get rejected',
          status: 'locked',
          keyLine: 'Antibodies don\'t reject change. They reject foreign metabolisms.',
        },
        {
          number: 8,
          title: 'Latent Capabilities',
          subtitle: 'Assets you have but don\'t use',
          status: 'locked',
          keyLine: 'You don\'t need more capacity. You need coordination infrastructure.',
        },
      ],
    },
    {
      number: 'III',
      title: 'THE MIRROR',
      subtitle: 'Case Studies',
      chapters: [
        {
          number: 9,
          title: 'The Transformation That Failed',
          subtitle: 'UPS: When capacity can\'t become connection',
          status: 'locked',
          keyLine: 'Infrastructure is destiny only if you let it be.',
        },
        {
          number: 10,
          title: 'The Transformation That Worked',
          subtitle: 'Amazon: Spiraling between phases',
          status: 'locked',
          keyLine: 'Transformation isn\'t choosing particle or field. It\'s building the capability to spiral.',
        },
        {
          number: 11,
          title: 'The Acquisition That Made Sense',
          subtitle: 'Amazon/Whole Foods: Metabolic compatibility',
          status: 'locked',
          keyLine: 'Acquisition success is metabolic compatibility, not strategic logic.',
        },
        {
          number: 12,
          title: 'The Acquisition That Didn\'t',
          subtitle: 'HP/Autonomy: Antibody rejection',
          status: 'locked',
          keyLine: 'You can\'t acquire capabilities your metabolism can\'t process.',
        },
      ],
    },
    {
      number: 'IV',
      title: 'THE DOOR',
      subtitle: 'What You Can Do',
      chapters: [
        {
          number: 13,
          title: 'If You\'re an Employee',
          subtitle: 'Recognizing when to leave',
          status: 'locked',
          keyLine: 'Organizations don\'t change because employees want them to.',
        },
        {
          number: 14,
          title: 'If You\'re a Manager',
          subtitle: 'Working within constraints',
          status: 'locked',
          keyLine: 'You can\'t transform the system. But you can prepare people.',
        },
        {
          number: 15,
          title: 'If You\'re an Executive',
          subtitle: 'Choosing feasible moves',
          status: 'locked',
          keyLine: 'You have power to choose direction. Physics determine what\'s achievable.',
        },
        {
          number: 16,
          title: 'If You\'re a Board Member',
          subtitle: 'Asking better questions',
          status: 'locked',
          keyLine: 'Boards that understand metabolic physics enable spiral. Boards that don\'t, prevent it.',
        },
      ],
    },
  ];

  const getStatusBadge = (status: ChapterStatus) => {
    switch (status) {
      case 'published':
        return (
          <span className="text-xs bg-green-900/50 text-green-400 px-2 py-1 rounded font-mono">
            READ NOW
          </span>
        );
      case 'coming_soon':
        return (
          <span className="text-xs bg-yellow-900/50 text-yellow-400 px-2 py-1 rounded font-mono">
            COMING SOON
          </span>
        );
      case 'locked':
        return (
          <span className="text-xs bg-zinc-800 text-zinc-500 px-2 py-1 rounded font-mono">
            LOCKED
          </span>
        );
    }
  };

  const getChapterIcon = (status: ChapterStatus) => {
    switch (status) {
      case 'published':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12 L11 15 L16 9" />
          </svg>
        );
      case 'coming_soon':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6 L12 12 L16 14" />
          </svg>
        );
      case 'locked':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11 L8 7 Q12 3, 16 7 L16 11" />
          </svg>
        );
    }
  };

  return (
    <>
      <SEOHead
        title="The Growing Pains Index | Book by Marcus Davis"
        description="Industries grow the way organisms grow. Signal in, adaptation, calcification, failure. This book is the map. Release: June 2026."
        ogImage="/images/og-book.svg"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation />

        {/* Hero */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              {/* Book badge */}
              <div className="inline-flex items-center gap-2 mb-8 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="text-zinc-400 text-sm font-mono">BOOK</span>
                <span className="text-zinc-600">|</span>
                <span className="text-zinc-500 text-sm font-mono">JUNE 2026</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-[1.1]">
                THE GROWING<br />PAINS INDEX<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl md:text-2xl text-zinc-500 font-mono mb-8">
                Not new. Just named.
              </p>

              <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-12">
                Industries grow the way organisms grow. They take in signal, metabolize it,
                adapt, thicken, calcify, and eventually fail. You've been working inside
                these phases without a map. <span className="text-white">This book is the map.</span>
              </p>

              {/* Progress Visual */}
              <div className="mb-16 p-8 bg-zinc-950 border border-zinc-800 rounded-xl">
                <svg viewBox="0 0 400 100" className="w-full max-w-lg mx-auto">
                  {/* Timeline bar */}
                  <rect x="20" y="45" width="360" height="10" fill="#27272a" rx="5" />

                  {/* Progress fill - animate based on chapters released */}
                  <rect x="20" y="45" width="22" height="10" fill="#22c55e" rx="5">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
                  </rect>

                  {/* Chapter markers */}
                  {[...Array(16)].map((_, i) => (
                    <g key={i}>
                      <circle
                        cx={20 + (i * 22.5)}
                        cy="50"
                        r="6"
                        fill={i === 0 ? '#eab308' : '#3f3f46'}
                        stroke={i === 0 ? '#eab308' : '#52525b'}
                        strokeWidth="2"
                      />
                      <text
                        x={20 + (i * 22.5)}
                        y="75"
                        textAnchor="middle"
                        fill={i === 0 ? '#eab308' : '#52525b'}
                        fontSize="8"
                      >
                        {i + 1}
                      </text>
                    </g>
                  ))}

                  {/* Part dividers */}
                  <text x="65" y="30" textAnchor="middle" fill="#52525b" fontSize="8">I</text>
                  <text x="155" y="30" textAnchor="middle" fill="#52525b" fontSize="8">II</text>
                  <text x="245" y="30" textAnchor="middle" fill="#52525b" fontSize="8">III</text>
                  <text x="335" y="30" textAnchor="middle" fill="#52525b" fontSize="8">IV</text>

                  {/* Labels */}
                  <text x="20" y="95" fill="#71717a" fontSize="8">START</text>
                  <text x="380" y="95" textAnchor="end" fill="#71717a" fontSize="8">JUNE 2026</text>
                </svg>
                <p className="text-center text-zinc-500 text-sm mt-4 font-mono">
                  0 / 16 CHAPTERS RELEASED
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Coordination Age - Background Context */}
        <section className="py-16 px-6 bg-zinc-950 border-y border-zinc-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-mono text-zinc-500 mb-4">THE CONTEXT</p>
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                WE'RE ENTERING THE<br /><span className="text-red-500">COORDINATION AGE</span>
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                In 1937, economist Ronald Coase asked why firms exist. His answer: because coordination
                costs make markets inefficient. For 90 years, that held true. <span className="text-white">It's about to stop being true.</span>
              </p>
            </div>

            {/* Connection → Coordination Visual */}
            <div className="p-8 bg-black border border-zinc-800 rounded-xl mb-12">
              <svg viewBox="0 0 400 160" className="w-full max-w-lg mx-auto">
                {/* Connection Age (Left) */}
                <text x="80" y="20" textAnchor="middle" fill="#71717a" fontSize="10" fontWeight="bold">CONNECTION AGE</text>
                <text x="80" y="35" textAnchor="middle" fill="#52525b" fontSize="8">Who you know</text>

                {/* Rigid hierarchy */}
                <rect x="55" y="50" width="50" height="25" fill="#ef4444" opacity="0.6" stroke="#ef4444" strokeWidth="1" />
                <rect x="40" y="80" width="35" height="20" fill="#ef4444" opacity="0.4" stroke="#ef4444" strokeWidth="1" />
                <rect x="85" y="80" width="35" height="20" fill="#ef4444" opacity="0.4" stroke="#ef4444" strokeWidth="1" />
                <rect x="25" y="105" width="25" height="15" fill="#ef4444" opacity="0.3" stroke="#ef4444" strokeWidth="1" />
                <rect x="55" y="105" width="25" height="15" fill="#ef4444" opacity="0.3" stroke="#ef4444" strokeWidth="1" />
                <rect x="85" y="105" width="25" height="15" fill="#ef4444" opacity="0.3" stroke="#ef4444" strokeWidth="1" />
                <rect x="115" y="105" width="25" height="15" fill="#ef4444" opacity="0.3" stroke="#ef4444" strokeWidth="1" />

                {/* Vertical lines */}
                <line x1="80" y1="75" x2="57" y2="80" stroke="#ef4444" strokeWidth="1" opacity="0.5" />
                <line x1="80" y1="75" x2="102" y2="80" stroke="#ef4444" strokeWidth="1" opacity="0.5" />
                <line x1="57" y1="100" x2="37" y2="105" stroke="#ef4444" strokeWidth="1" opacity="0.5" />
                <line x1="57" y1="100" x2="67" y2="105" stroke="#ef4444" strokeWidth="1" opacity="0.5" />
                <line x1="102" y1="100" x2="97" y2="105" stroke="#ef4444" strokeWidth="1" opacity="0.5" />
                <line x1="102" y1="100" x2="127" y2="105" stroke="#ef4444" strokeWidth="1" opacity="0.5" />

                <text x="80" y="140" textAnchor="middle" fill="#ef4444" fontSize="8">PARTICLE</text>
                <text x="80" y="152" textAnchor="middle" fill="#52525b" fontSize="7">Hierarchies, silos, friction</text>

                {/* Arrow / Transition */}
                <path d="M 160 85 L 240 85" stroke="#52525b" strokeWidth="2" strokeDasharray="4,4" />
                <polygon points="235,80 245,85 235,90" fill="#52525b" />
                <text x="200" y="75" textAnchor="middle" fill="#eab308" fontSize="9" fontWeight="bold">NOW</text>
                <circle cx="200" cy="85" r="8" fill="none" stroke="#eab308" strokeWidth="2">
                  <animate attributeName="r" values="6;12;6" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                </circle>

                {/* Coordination Age (Right) */}
                <text x="320" y="20" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">COORDINATION AGE</text>
                <text x="320" y="35" textAnchor="middle" fill="#52525b" fontSize="8">How well you coordinate</text>

                {/* Distributed network */}
                <circle cx="280" cy="70" r="8" fill="#22c55e" opacity="0.7">
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="320" cy="55" r="8" fill="#22c55e" opacity="0.7">
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" begin="0.3s" repeatCount="indefinite" />
                </circle>
                <circle cx="360" cy="70" r="8" fill="#22c55e" opacity="0.7">
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" begin="0.6s" repeatCount="indefinite" />
                </circle>
                <circle cx="290" cy="100" r="8" fill="#22c55e" opacity="0.7">
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" begin="0.9s" repeatCount="indefinite" />
                </circle>
                <circle cx="320" cy="90" r="8" fill="#22c55e" opacity="0.7">
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" begin="1.2s" repeatCount="indefinite" />
                </circle>
                <circle cx="350" cy="100" r="8" fill="#22c55e" opacity="0.7">
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" begin="1.5s" repeatCount="indefinite" />
                </circle>

                {/* Network connections */}
                <line x1="280" y1="70" x2="320" y2="55" stroke="#22c55e" strokeWidth="1" opacity="0.4" />
                <line x1="320" y1="55" x2="360" y2="70" stroke="#22c55e" strokeWidth="1" opacity="0.4" />
                <line x1="280" y1="70" x2="290" y2="100" stroke="#22c55e" strokeWidth="1" opacity="0.4" />
                <line x1="290" y1="100" x2="320" y2="90" stroke="#22c55e" strokeWidth="1" opacity="0.4" />
                <line x1="320" y1="90" x2="350" y2="100" stroke="#22c55e" strokeWidth="1" opacity="0.4" />
                <line x1="350" y1="100" x2="360" y2="70" stroke="#22c55e" strokeWidth="1" opacity="0.4" />
                <line x1="320" y1="55" x2="320" y2="90" stroke="#22c55e" strokeWidth="1" opacity="0.4" />
                <line x1="280" y1="70" x2="350" y2="100" stroke="#22c55e" strokeWidth="1" opacity="0.3" />
                <line x1="290" y1="100" x2="360" y2="70" stroke="#22c55e" strokeWidth="1" opacity="0.3" />

                {/* Data flowing */}
                <circle r="3" fill="#22c55e">
                  <animateMotion dur="2s" repeatCount="indefinite" path="M280,70 L320,55 L360,70 L350,100 L320,90 L290,100 L280,70" />
                </circle>

                <text x="320" y="128" textAnchor="middle" fill="#22c55e" fontSize="8">FIELD</text>
                <text x="320" y="140" textAnchor="middle" fill="#52525b" fontSize="7">Distributed, adaptive, flow</text>
              </svg>
            </div>

            {/* Why this matters now */}
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 border border-zinc-800 rounded-lg">
                <p className="text-3xl font-black text-red-500 mb-2">90</p>
                <p className="text-sm text-zinc-400">Years the old model held</p>
              </div>
              <div className="p-6 border border-zinc-800 rounded-lg">
                <p className="text-3xl font-black text-yellow-500 mb-2">→0</p>
                <p className="text-sm text-zinc-400">Coordination costs approaching zero</p>
              </div>
              <div className="p-6 border border-zinc-800 rounded-lg">
                <p className="text-3xl font-black text-green-500 mb-2">NOW</p>
                <p className="text-sm text-zinc-400">The transition is happening</p>
              </div>
            </div>

            <p className="text-center text-zinc-500 mt-8 max-w-2xl mx-auto">
              Every organization is somewhere on the spectrum from particle to field.
              Most don't know where they are. Most can't see where they need to go.
              <span className="text-white block mt-4">This book gives you the X-ray.</span>
            </p>
          </div>
        </section>

        {/* The Shift */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-mono text-zinc-500 mb-6 text-center">THE SHIFT</p>

            <div className="border-l-4 border-red-600 pl-8 py-4">
              <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed mb-6">
                You felt it before you had words for it.
              </p>

              <p className="text-lg text-zinc-400 leading-relaxed mb-4">
                The promotion that should've meant more autonomy gave you more meetings instead.
                The "efficiency tool" that added three steps to a two-step process.
                The reorg that solved nothing but reset everyone's calendar.
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                You're not burned out. You're not bad at your job. <span className="text-white">You're feeling the floor move.</span>
              </p>

              <p className="text-xl text-red-500 font-bold mb-6">
                The old game ended. Nobody announced it.
              </p>

              <p className="text-lg text-zinc-400 leading-relaxed mb-4">
                For 90 years, organizations ran on connection logic: who you know, what you control,
                how much friction you can monetize. That physics is collapsing. The new physics rewards
                coordination: how fast you adapt, how freely signal flows, how quickly you can unlearn
                what worked yesterday.
              </p>

              <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                Most organizations are still playing the old game. That's why everything feels like
                pushing wet cement uphill. You're operating in a system optimized for a world that
                no longer exists.
              </p>

              <p className="text-xl text-white font-bold">
                The shift isn't coming. You're already in it.
              </p>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-12 text-center">TABLE OF CONTENTS</h2>

              <div className="space-y-12">
                {bookParts.map((part) => (
                  <div key={part.number} className="border border-zinc-800 rounded-xl overflow-hidden">
                    {/* Part Header */}
                    <div className="bg-zinc-900 px-6 py-4 border-b border-zinc-800">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-black text-zinc-600">PART {part.number}</span>
                        <div>
                          <h3 className="text-xl font-bold">{part.title}</h3>
                          <p className="text-sm text-zinc-500">{part.subtitle}</p>
                        </div>
                      </div>
                    </div>

                    {/* Chapters */}
                    <div className="divide-y divide-zinc-800">
                      {part.chapters.map((chapter) => (
                        <div
                          key={chapter.number}
                          className={`px-6 py-4 ${
                            chapter.status === 'published'
                              ? 'hover:bg-zinc-900/50 cursor-pointer'
                              : chapter.status === 'coming_soon'
                              ? 'bg-yellow-950/10'
                              : 'opacity-60'
                          }`}
                        >
                          {chapter.status === 'published' && chapter.slug ? (
                            <Link href={`/book/${chapter.slug}`} className="block">
                              <ChapterRow chapter={chapter} getStatusBadge={getStatusBadge} getChapterIcon={getChapterIcon} />
                            </Link>
                          ) : (
                            <ChapterRow chapter={chapter} getStatusBadge={getStatusBadge} getChapterIcon={getChapterIcon} />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Conclusion */}
                <div className="border border-zinc-800 rounded-xl overflow-hidden opacity-60">
                  <div className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="5" y="11" width="14" height="10" rx="2" />
                          <path d="M8 11 L8 7 Q12 3, 16 7 L16 11" />
                        </svg>
                        <div>
                          <h3 className="font-bold">CONCLUSION: The Coordination Age</h3>
                          <p className="text-sm text-zinc-500">The paradigm shift from Connection to Coordination</p>
                        </div>
                      </div>
                      <span className="text-xs bg-zinc-800 text-zinc-500 px-2 py-1 rounded font-mono">
                        LOCKED
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Email Capture */}
        <EmailCapture />

        {/* About the Author */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 bg-zinc-900 rounded-full flex items-center justify-center shrink-0">
                <span className="text-3xl font-black text-zinc-700">M</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">MARCUS DAVIS</h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Two decades watching organizations calcify. Military logistics. Urban planning.
                  Supply chain operations. The pattern is always the same: signal in, adaptation,
                  calcification, failure.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  This book names what you've been sensing. It's the map you've been missing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-zinc-500 mb-6">Already sensing the floor shifting?</p>
            <Link
              href="/diagnostic"
              className="inline-block bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
            >
              CALCULATE YOUR GPI SCORE
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

// Email Capture Component
const EmailCapture = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'Book Page' }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        const data = await response.json();
        setErrorMessage(data.error || 'Something went wrong');
        setStatus('error');
      }
    } catch {
      setErrorMessage('Failed to subscribe. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section className="py-16 px-6 bg-zinc-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-black mb-4">GET CHAPTERS AS THEY DROP</h2>
        <p className="text-zinc-400 mb-8">
          Be the first to read each chapter as it's released. No spam. Just signal.
        </p>

        {status === 'success' ? (
          <div className="bg-green-900/30 border border-green-800 rounded-lg p-6 max-w-md mx-auto">
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12 L11 15 L16 9" />
            </svg>
            <p className="text-green-400 font-bold">You're in.</p>
            <p className="text-zinc-400 text-sm mt-2">Watch your inbox for Chapter 1.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-black border border-zinc-700 px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-600"
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-red-600 px-6 py-3 font-bold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'SUBSCRIBING...' : 'NOTIFY ME'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-red-500 text-sm mt-4">{errorMessage}</p>
        )}

        <p className="text-zinc-600 text-sm mt-6">
          ~45,000 words. 16 chapters. Your inbox, not a feed.
        </p>
      </div>
    </section>
  );
};

// Chapter Row Component
const ChapterRow = ({
  chapter,
  getStatusBadge,
  getChapterIcon
}: {
  chapter: Chapter;
  getStatusBadge: (status: ChapterStatus) => React.ReactNode;
  getChapterIcon: (status: ChapterStatus) => React.ReactNode;
}) => (
  <div className="flex items-start justify-between gap-4">
    <div className="flex items-start gap-4">
      <div className="mt-1">
        {getChapterIcon(chapter.status)}
      </div>
      <div>
        <div className="flex items-center gap-3 mb-1">
          <span className="text-zinc-500 font-mono text-sm">CH {chapter.number}</span>
          <h4 className="font-bold">{chapter.title}</h4>
        </div>
        {chapter.subtitle && (
          <p className="text-sm text-zinc-500 mb-2">{chapter.subtitle}</p>
        )}
        {chapter.keyLine && chapter.status !== 'locked' && (
          <p className="text-sm text-zinc-400 italic">"{chapter.keyLine}"</p>
        )}
      </div>
    </div>
    <div className="shrink-0">
      {getStatusBadge(chapter.status)}
    </div>
  </div>
);

export default BookPage;
