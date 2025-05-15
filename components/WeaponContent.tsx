import React from 'react';
import { Check, AlertCircle, Target, Clock } from 'lucide-react';
import Link from 'next/link';

interface WeaponContentProps {
  weaponSlug: string;
}

const weaponData: Record<string, any> = {
  'clarity-catalyst-call': {
    outcomes: [
      "Your drift named and owned",
      "Your move clarified and committed", 
      "1-page Dream → Move → Build map",
      "90-day action plan with weekly targets",
      "Zero BS, all momentum"
    ],
    process: {
      title: "THE COLLISION",
      steps: [
        { time: "0-15 min", action: "You vomit your drift. We listen." },
        { time: "15-45 min", action: "We cut through the noise. Find the real block." },
        { time: "45-75 min", action: "Together, we build your move. No fluff. Just action." },
        { time: "75-90 min", action: "You leave with a map. We leave you alone." }
      ]
    },
    warning: "This isn't therapy. We won't hold your hand. We'll push you off the cliff and teach you to fly on the way down.",
    bestFor: [
      "Founders who are done lying to themselves",
      "Teams stuck in analysis paralysis", 
      "Leaders ready to bleed for their vision"
    ]
  },
  'ecosystem-map': {
    outcomes: [
      "Visual map of your dead connections",
      "5-10 collision points that will move you",
      "Introduction scripts that actually work",
      "Weekly connection targets",
      "No more networking BS"
    ],
    process: {
      title: "THE MAPPING",
      steps: [
        { time: "Day 1", action: "Audit your current network (spoiler: it's weak)" },
        { time: "Day 2-3", action: "Identify real players, not posers" },
        { time: "Day 4-5", action: "Map collision points and power moves" },
        { time: "Day 6-7", action: "Deliver your weapon. Go hunt." }
      ]
    },
    warning: "Your network isn't working because you're playing it safe. We'll show you how to collide with the right people.",
    bestFor: [
      "Isolated founders",
      "Companies entering new markets",
      "Leaders who need real allies, not LinkedIn connections"
    ]
  },
  'pre-market-signal-scan': {
    outcomes: [
      "Go | Wait | No-Go verdict (no maybes)",
      "3 market truths you've been avoiding",
      "Competitor movements mapped",
      "Customer pain points exposed",
      "Entry strategy or exit plan"
    ],
    process: {
      title: "THE SCAN",
      steps: [
        { time: "Day 1-2", action: "Deep market reconnaissance" },
        { time: "Day 3-4", action: "Customer pain point extraction" },
        { time: "Day 5-6", action: "Competitor weakness mapping" },
        { time: "Day 7", action: "Deliver the verdict. No sugar coating." }
      ]
    },
    warning: "The market doesn't care about your feelings. We'll tell you the truth, whether you like it or not.",
    bestFor: [
      "Pre-launch products",
      "Market expansion plans",
      "Founders who need a reality check"
    ]
  },
  'movement-sprint': {
    outcomes: [
      "30 days of forced momentum",
      "Weekly targets that hurt (in a good way)",
      "Daily check-ins (no hiding)",
      "Tangible results or your money back",
      "A taste of what moving feels like"
    ],
    process: {
      title: "THE SPRINT",
      steps: [
        { time: "Week 1", action: "Break the inertia. First moves." },
        { time: "Week 2", action: "Build momentum. No excuses." },
        { time: "Week 3", action: "Push harder. Feel the burn." },
        { time: "Week 4", action: "Sprint finish. New baseline established." }
      ]
    },
    warning: "This will hurt. You'll want to quit. We won't let you. That's the point.",
    bestFor: [
      "Chronic procrastinators",
      "Teams in drift mode",
      "Anyone who's tired of their own BS"
    ]
  },
  'mvp-jumpstart': {
    outcomes: [
      "Working prototype in 2-3 weeks",
      "Core features only (no feature creep)",
      "User-tested and battle-ready",
      "Launch plan included",
      "Your vision made real"
    ],
    process: {
      title: "THE BUILD",
      steps: [
        { time: "Days 1-3", action: "Strip to core. Kill your darlings." },
        { time: "Days 4-10", action: "Build fast. Break things. Fix them." },
        { time: "Days 11-16", action: "User testing. Real feedback. Iterate." },
        { time: "Days 17-21", action: "Polish, launch prep, and ship it." }
      ]
    },
    warning: "Perfect is the enemy of done. We build to ship, not to admire.",
    bestFor: [
      "Founders with too many ideas",
      "Teams needing validation",
      "Anyone sitting on a 'someday' project"
    ]
  }
};

const WeaponContent: React.FC<WeaponContentProps> = ({ weaponSlug }) => {
  const content = weaponData[weaponSlug];

  if (!content) {
    return <div>Weapon data not found</div>;
  }

  return (
    <div className="space-y-16">
      {/* Diagnostic CTA */}
      <div className="bg-zinc-900 border-l-4 border-orange-500 p-8">
        <div className="flex items-start gap-4">
          <AlertCircle className="text-orange-500 flex-shrink-0 mt-1" size={24} />
          <div>
            <h3 className="text-xl font-bold mb-2">NOT SURE THIS IS YOUR WEAPON?</h3>
            <p className="text-zinc-300 mb-4">Take the 60-second drift diagnostic. Find out if you're moving or just lying to yourself.</p>
            <Link 
              href="/diagnostic"
              className="inline-block bg-orange-500 text-black px-6 py-3 font-bold hover:bg-orange-400 transition-all"
            >
              TAKE THE DIAGNOSTIC
            </Link>
          </div>
        </div>
      </div>

      {/* Outcomes */}
      <div>
        <h2 className="text-3xl font-bold mb-8">WHAT YOU GET</h2>
        <div className="grid grid-cols-1 gap-4">
          {content.outcomes.map((outcome, index) => (
            <div key={index} className="flex items-start gap-4">
              <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
              <p className="text-lg text-zinc-300">{outcome}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div>
        <h2 className="text-3xl font-bold mb-8">{content.process.title}</h2>
        <div className="space-y-6">
          {content.process.steps.map((step, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="text-zinc-500 font-mono text-sm w-24 flex-shrink-0">{step.time}</div>
              <div className="flex-1">
                <p className="text-lg">{step.action}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Warning */}
      <div className="bg-zinc-900 border-l-4 border-red-500 p-8">
        <div className="flex items-start gap-4">
          <AlertCircle className="text-red-500 flex-shrink-0 mt-1" size={24} />
          <div>
            <h3 className="text-xl font-bold mb-2">FAIR WARNING</h3>
            <p className="text-zinc-300">{content.warning}</p>
          </div>
        </div>
      </div>

      {/* Best For */}
      <div>
        <h2 className="text-3xl font-bold mb-8">BEST FOR</h2>
        <div className="grid grid-cols-1 gap-4">
          {content.bestFor.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <Target className="text-orange-500 mt-1 flex-shrink-0" size={20} />
              <p className="text-lg text-zinc-300">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pt-12">
        <p className="text-2xl mb-8">Ready to stop drifting?</p>
        <a
          href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-8 py-4 text-xl font-medium hover:bg-gray-200 transition-all inline-block"
        >
          LOCK AND LOAD
        </a>
      </div>

      {/* Alternative Diagnostic CTA */}
      <div className="mt-16 text-center border-t border-zinc-800 pt-16">
        <p className="text-xl text-zinc-500 mb-4">Still not convinced this is your weapon?</p>
        <Link 
          href="/diagnostic"
          className="text-red-500 underline hover:text-red-400 transition-colors text-lg"
        >
          Take the diagnostic and get prescribed the right weapon
        </Link>
      </div>
    </div>
  );
};

export default WeaponContent;