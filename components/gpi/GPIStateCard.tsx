/**
 * GPIStateCard Component
 * Full state card with visual, traits, and industry examples
 */

import React from 'react';
import Link from 'next/link';
import { GPIState } from '../../lib/gpi-types';
import GPIStateVisual from './GPIStateVisual';

interface StateData {
  state: GPIState;
  title: string;
  subtitle: string;
  gpiRange: string;
  traits: string[];
  industries: string[];
  color: string;
  borderColor: string;
  bgGradient: string;
  href: string;
}

const STATE_DATA: Record<GPIState, StateData> = {
  particle: {
    state: 'particle',
    title: 'PARTICLE',
    subtitle: 'RIGID',
    gpiRange: '7-10',
    traits: [
      'Fixed nodes, fixed roles',
      'Information trapped in silos',
      'Change requires permission',
      'Slow metabolism',
      'Friction is a feature',
    ],
    industries: ['Healthcare', 'Government', 'Construction'],
    color: 'text-red-500',
    borderColor: 'border-red-600',
    bgGradient: 'from-red-950/50 to-black',
    href: '/gpi-framework/particle-state',
  },
  transitioning: {
    state: 'transitioning',
    title: 'CHAOS',
    subtitle: 'BREAKING',
    gpiRange: '4-6',
    traits: [
      'Old structures cracking',
      'New patterns emerging',
      'High turbulence',
      'Painful transition',
      'Opportunity in the cracks',
    ],
    industries: ['Retail', 'Logistics', 'Manufacturing'],
    color: 'text-yellow-500',
    borderColor: 'border-yellow-600',
    bgGradient: 'from-yellow-950/50 to-black',
    href: '/gpi-framework/transition-state',
  },
  field: {
    state: 'field',
    title: 'FIELD',
    subtitle: 'FLUID',
    gpiRange: '1-3',
    traits: [
      'Signal flows freely',
      'Roles adapt in real-time',
      'AI-coordinated systems',
      'Fast metabolism',
      'Friction is eliminated',
    ],
    industries: ['Tech', 'Finance', 'Media'],
    color: 'text-green-500',
    borderColor: 'border-green-600',
    bgGradient: 'from-green-950/50 to-black',
    href: '/gpi-framework/field-state',
  },
};

interface GPIStateCardProps {
  state: GPIState;
  clickable?: boolean;
  showVisual?: boolean;
  compact?: boolean;
}

const GPIStateCard: React.FC<GPIStateCardProps> = ({
  state,
  clickable = true,
  showVisual = true,
  compact = false,
}) => {
  const data = STATE_DATA[state];

  const cardContent = (
    <div
      className={`bg-gradient-to-b ${data.bgGradient} border ${data.borderColor} rounded-xl p-6 ${
        clickable ? 'hover:border-opacity-100 border-opacity-60 cursor-pointer transition-all hover:scale-[1.02]' : ''
      } ${compact ? 'p-4' : 'p-6'}`}
    >
      {/* Visual */}
      {showVisual && (
        <div className="flex justify-center mb-5">
          <GPIStateVisual state={state} size={compact ? 'sm' : 'md'} />
        </div>
      )}

      {/* Title */}
      <h3 className={`text-2xl font-black text-center ${data.color} ${compact ? 'text-xl' : 'text-2xl'}`}>
        {data.title}
      </h3>
      <p className={`text-center ${data.color} opacity-80 mb-4 ${compact ? 'text-sm' : ''}`}>
        {data.subtitle}
      </p>

      {/* GPI Range */}
      <div className="text-center mb-4">
        <span className="text-xl font-black">GPI {data.gpiRange}</span>
      </div>

      {/* Traits */}
      {!compact && (
        <ul className="space-y-2 mb-5">
          {data.traits.map((trait, i) => (
            <li key={i} className="flex items-start gap-2 text-zinc-400 text-sm">
              <span className={data.color}>■</span>
              <span>{trait}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Industries */}
      <div className={`border-t border-zinc-800 pt-4 text-center text-zinc-500 ${compact ? 'text-xs' : 'text-sm'}`}>
        {data.industries.join(' • ')}
      </div>

      {/* Click indicator */}
      {clickable && (
        <div className={`text-center mt-3 ${data.color} text-xs font-bold opacity-60`}>
          LEARN MORE →
        </div>
      )}
    </div>
  );

  if (clickable) {
    return <Link href={data.href}>{cardContent}</Link>;
  }

  return cardContent;
};

export default GPIStateCard;
export { STATE_DATA };
