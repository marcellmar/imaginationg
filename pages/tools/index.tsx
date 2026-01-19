/**
 * GPI Tools - Diagnostic instruments
 */

import React from 'react';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { ArrowRight, User, Users, Gauge, Scan, Search, Radio, Zap } from 'lucide-react';

interface Tool {
  id: string;
  name: string;
  description: string;
  time: string;
  href: string;
  icon: React.ReactNode;
  color: string;
}

const ToolsPage = () => {
  const primaryTool = {
    id: 'diagnostic',
    name: 'GPI DIAGNOSTIC',
    description: '32 questions across 7 dimensions. Complete organizational friction assessment with industry benchmarks.',
    time: '~8 min',
    href: '/diagnostic',
  };

  const personalTools: Tool[] = [
    {
      id: 'career-positioning',
      name: 'CAREER POSITIONING',
      description: 'Role type + industry phase = your trajectory. Find your quadrant.',
      time: '~3 min',
      href: '/tools/career-positioning',
      icon: <User size={20} />,
      color: 'yellow',
    },
  ];

  const teamTools: Tool[] = [
    {
      id: 'energy-audit',
      name: 'FRICTION AUDIT',
      description: 'Find where friction drains energy. Meetings, processes, handoffs. Remember: friction is margin.',
      time: '~4 min',
      href: '/tools/energy-audit',
      icon: <Zap size={20} />,
      color: 'green',
    },
  ];

  const frictionScans: Tool[] = [
    {
      id: 'stuck-scan',
      name: 'STUCK SCAN',
      description: 'X-ray a stuck situation. Identify the friction type and locate the blockage.',
      time: '~6 min',
      href: '/tools/override-protocol',
      icon: <Scan size={20} />,
      color: 'red',
    },
    {
      id: 'blocker-detector',
      name: 'BLOCKER DETECTOR',
      description: 'Scan for hidden resistance. Surface what is actually stopping movement.',
      time: '~4 min',
      href: '/tools/block-flip',
      icon: <Search size={20} />,
      color: 'purple',
    },
    {
      id: 'friction-radar',
      name: 'FRICTION RADAR',
      description: 'Detect micro-friction in daily operations. Find the small drags that compound.',
      time: '~3 min',
      href: '/tools/micro-interventions',
      icon: <Radio size={20} />,
      color: 'cyan',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; text: string; bg: string }> = {
      yellow: { border: 'border-yellow-600', text: 'text-yellow-500', bg: 'bg-yellow-500/10' },
      blue: { border: 'border-blue-600', text: 'text-blue-500', bg: 'bg-blue-500/10' },
      green: { border: 'border-green-600', text: 'text-green-500', bg: 'bg-green-500/10' },
      red: { border: 'border-red-600', text: 'text-red-500', bg: 'bg-red-500/10' },
      purple: { border: 'border-purple-600', text: 'text-purple-500', bg: 'bg-purple-500/10' },
      cyan: { border: 'border-cyan-600', text: 'text-cyan-500', bg: 'bg-cyan-500/10' },
      orange: { border: 'border-orange-600', text: 'text-orange-500', bg: 'bg-orange-500/10' },
    };
    return colors[color] || colors.yellow;
  };

  const ToolCard = ({ tool }: { tool: Tool }) => {
    const colors = getColorClasses(tool.color);
    return (
      <Link
        href={tool.href}
        className={`block border border-zinc-800 hover:${colors.border} p-5 transition-all group`}
      >
        <div className="flex items-start gap-4">
          <div className={`p-2 ${colors.bg} ${colors.text} rounded-lg`}>
            {tool.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-white group-hover:text-white truncate">
                {tool.name}
              </h3>
            </div>
            <p className="text-sm text-zinc-500 mb-2 line-clamp-2">
              {tool.description}
            </p>
            <span className="text-xs text-zinc-600">{tool.time}</span>
          </div>
          <ArrowRight
            size={18}
            className="text-zinc-700 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
          />
        </div>
      </Link>
    );
  };

  return (
    <>
      <SEOHead
        title="Tools | IMAGINATION G"
        description="Diagnostic tools for measuring organizational friction. GPI diagnostic, career positioning, and friction audit."
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="tools" />

        <section className="pt-20 pb-16 px-6">
          <div className="max-w-3xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 mb-6">
                <Gauge size={14} />
                DIAGNOSTIC INSTRUMENTS
              </div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
                TOOLS
              </h1>
              <p className="text-zinc-500 max-w-lg mx-auto">
                Measure friction. Find leverage points. Move faster.
              </p>
            </div>

            {/* Primary Tool - Full GPI */}
            <div className="mb-12">
              <Link
                href={primaryTool.href}
                className="block border-2 border-red-600 bg-red-950/20 hover:bg-red-950/40 p-6 transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-xl font-black text-red-500">
                        {primaryTool.name}
                      </h2>
                      <span className="text-xs font-mono text-red-500 bg-red-500/20 px-2 py-0.5 rounded">
                        FULL ASSESSMENT
                      </span>
                    </div>
                    <p className="text-zinc-400 mb-3">
                      {primaryTool.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-zinc-600">{primaryTool.time}</span>
                      <span className="text-xs text-zinc-600">•</span>
                      <span className="text-xs text-zinc-600">7 dimensions</span>
                      <span className="text-xs text-zinc-600">•</span>
                      <span className="text-xs text-zinc-600">32 questions</span>
                    </div>
                  </div>
                  <div className="bg-red-600 p-3 group-hover:bg-red-500 transition-colors">
                    <ArrowRight size={24} />
                  </div>
                </div>
              </Link>
            </div>

            {/* Personal Tools */}
            <div className="mb-8">
              <h2 className="text-xs font-mono text-zinc-600 mb-4 flex items-center gap-2">
                <User size={14} />
                PERSONAL POSITIONING
              </h2>
              <div className="space-y-3">
                {personalTools.map(tool => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </div>

            {/* Team Tools */}
            <div className="mb-8">
              <h2 className="text-xs font-mono text-zinc-600 mb-4 flex items-center gap-2">
                <Users size={14} />
                TEAM DIAGNOSTICS
              </h2>
              <div className="space-y-3">
                {teamTools.map(tool => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </div>

            {/* Friction Scans - Coming Soon */}
            <div className="mb-12">
              <h2 className="text-xs font-mono text-zinc-600 mb-4 flex items-center gap-2">
                <Scan size={14} />
                FRICTION SCANS
                <span className="text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded text-[10px]">
                  COMING SOON
                </span>
              </h2>
              <div className="space-y-3 opacity-50">
                {frictionScans.map(tool => {
                  const colors = getColorClasses(tool.color);
                  return (
                    <div
                      key={tool.id}
                      className="block border border-zinc-800 p-5 cursor-not-allowed"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-2 ${colors.bg} ${colors.text} rounded-lg`}>
                          {tool.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-zinc-500 truncate">
                              {tool.name}
                            </h3>
                          </div>
                          <p className="text-sm text-zinc-600 mb-2 line-clamp-2">
                            {tool.description}
                          </p>
                          <span className="text-xs text-zinc-700">{tool.time}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-xs text-zinc-600 mt-3 text-center">
                These scans are being calibrated. Check back soon.
              </p>
            </div>

            {/* Scale Reference */}
            <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl">
              <div className="text-xs font-mono text-zinc-600 mb-4">GPI SCALE REFERENCE</div>
              <div className="relative h-2 bg-zinc-900 rounded-full mb-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500" />
              </div>
              <div className="flex justify-between text-xs">
                <div>
                  <span className="font-mono text-green-500">1-3</span>
                  <span className="text-zinc-600 ml-2">Field</span>
                </div>
                <div>
                  <span className="font-mono text-yellow-500">4-6</span>
                  <span className="text-zinc-600 ml-2">Transition</span>
                </div>
                <div>
                  <span className="font-mono text-red-500">7-10</span>
                  <span className="text-zinc-600 ml-2">Particle</span>
                </div>
              </div>
            </div>

            {/* Framework Link */}
            <div className="mt-8 text-center">
              <Link
                href="/gpi-framework"
                className="text-zinc-500 hover:text-white transition-colors text-sm inline-flex items-center gap-2"
              >
                Learn how the GPI framework works <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};

export default ToolsPage;
