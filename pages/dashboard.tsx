import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import { 
  Activity, 
  AlertTriangle, 
  TrendingUp, 
  TrendingDown,
  RefreshCw,
  Settings,
  ChevronRight,
  Circle,
  AlertCircle
} from 'lucide-react';

// Types
interface IGMetric {
  metric_type: string;
  value: number;
  confidence: number;
  dimensions?: any;
  trend?: 'up' | 'down' | 'stable';
  change?: number;
}

interface Pattern {
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  recommendation: string;
}

interface DashboardData {
  current: IGMetric[];
  healthScore: number;
  patterns: Pattern[];
  lastUpdated: string;
}

// Metric metadata
const METRIC_INFO = {
  nexel: {
    name: 'Nexel',
    description: 'Behavioral identity marker',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    goodDirection: 'stable' // Depends on alignment
  },
  morrin: {
    name: 'Morrin',
    description: 'Post-choice momentum',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    goodDirection: 'up'
  },
  strune: {
    name: 'Strune',
    description: 'Self-generated resistance',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
    goodDirection: 'down'
  },
  pilor: {
    name: 'Pilor',
    description: 'Recursive failure depth',
    color: 'text-red-600',
    bgColor: 'bg-red-600/10',
    borderColor: 'border-red-600/20',
    goodDirection: 'down'
  },
  kithara: {
    name: 'Kithara',
    description: 'False harmony index',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    goodDirection: 'down'
  },
  soreth: {
    name: 'Soreth',
    description: 'Hidden energy drain',
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/20',
    goodDirection: 'down'
  },
  voxel: {
    name: 'Voxel',
    description: 'Reality alignment gap',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/20',
    goodDirection: 'down'
  },
  quorr: {
    name: 'Quorr',
    description: 'Complexity debt',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/20',
    goodDirection: 'down'
  },
  threnn: {
    name: 'Threnn',
    description: 'Momentum coefficient',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    goodDirection: 'up'
  },
  zelith: {
    name: 'Zelith',
    description: 'Pressure proximity',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20',
    goodDirection: 'down'
  }
};

const Dashboard: NextPage = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [autoRefresh, setAutoRefresh] = useState(true);

  // Fetch dashboard data
  const fetchData = async () => {
    try {
      const response = await fetch('/api/ig/metrics?organizationId=demo-org-1');
      if (!response.ok) throw new Error('Failed to fetch data');
      
      const result = await response.json();
      if (result.success) {
        setData(result.data);
        setError(null);
      } else {
        throw new Error(result.error);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  // Initial load and auto-refresh
  useEffect(() => {
    fetchData();
    
    if (autoRefresh) {
      const interval = setInterval(fetchData, 30000); // Refresh every 30 seconds
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  // Get severity color
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-600/10';
      case 'high': return 'text-orange-500 bg-orange-500/10';
      case 'medium': return 'text-yellow-500 bg-yellow-500/10';
      case 'low': return 'text-green-500 bg-green-500/10';
      default: return 'text-zinc-400 bg-zinc-400/10';
    }
  };

  // Get health score color
  const getHealthColor = (score: number) => {
    if (score >= 0.8) return 'text-green-500';
    if (score >= 0.6) return 'text-yellow-500';
    if (score >= 0.4) return 'text-orange-500';
    return 'text-red-600';
  };

  return (
    <>
      <SEOHead
        title="IG Behavioral Physics Dashboard | IMAGINATION G"
        description="Real-time monitoring of organizational behavioral physics. Track Nexel, Morrin, Strune, and other IG metrics."
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation />

        {/* Header */}
        <section className="pt-24 pb-8 px-6 border-b border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-black mb-2">
                  BEHAVIORAL PHYSICS DASHBOARD<span className="text-red-600">.</span>
                </h1>
                <p className="text-zinc-400">Real-time organizational truth detection</p>
              </div>
              
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setAutoRefresh(!autoRefresh)}
                  className={`flex items-center gap-2 px-4 py-2 border rounded-lg transition-colors ${
                    autoRefresh 
                      ? 'border-green-500 text-green-500' 
                      : 'border-zinc-700 text-zinc-400 hover:border-zinc-500'
                  }`}
                >
                  <RefreshCw size={16} className={autoRefresh ? 'animate-spin' : ''} />
                  Auto-refresh: {autoRefresh ? 'ON' : 'OFF'}
                </button>
                
                <button className="p-2 border border-zinc-700 rounded-lg hover:border-zinc-500 transition-colors">
                  <Settings size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {loading ? (
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <RefreshCw className="animate-spin mx-auto mb-4" size={48} />
              <p className="text-zinc-400">Loading behavioral data...</p>
            </div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <AlertCircle className="text-red-600 mx-auto mb-4" size={48} />
              <p className="text-red-600">{error}</p>
              <button 
                onClick={fetchData}
                className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        ) : data && (
          <>
            {/* Health Score */}
            <section className="py-8 px-6">
              <div className="max-w-7xl mx-auto">
                <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-black mb-2">ORGANIZATIONAL HEALTH SCORE</h2>
                      <p className="text-zinc-400">Composite behavioral physics assessment</p>
                    </div>
                    <div className="text-right">
                      <div className={`text-5xl font-black ${getHealthColor(data.healthScore)}`}>
                        {Math.round(data.healthScore * 100)}%
                      </div>
                      <p className="text-sm text-zinc-400 mt-1">
                        Last updated: {new Date(data.lastUpdated).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                  
                  {/* Health bar */}
                  <div className="mt-6 h-4 bg-zinc-900 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-1000 ${
                        data.healthScore >= 0.8 ? 'bg-green-500' :
                        data.healthScore >= 0.6 ? 'bg-yellow-500' :
                        data.healthScore >= 0.4 ? 'bg-orange-500' :
                        'bg-red-600'
                      }`}
                      style={{ width: `${data.healthScore * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Active Patterns */}
            {data.patterns.length > 0 && (
              <section className="py-8 px-6">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-2xl font-black mb-6">ACTIVE PATTERNS</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {data.patterns.map((pattern, idx) => (
                      <div 
                        key={idx}
                        className="bg-zinc-950 border border-zinc-800 rounded-lg p-6"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-black">{pattern.message}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getSeverityColor(pattern.severity)}`}>
                            {pattern.severity.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-zinc-400 text-sm mb-4">{pattern.recommendation}</p>
                        <button className="flex items-center gap-2 text-red-600 font-bold text-sm hover:text-red-500 transition-colors">
                          View Intervention Options <ChevronRight size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Metrics Grid */}
            <section className="py-8 px-6">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-black mb-6">BEHAVIORAL METRICS</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.current.map((metric) => {
                    const info = METRIC_INFO[metric.metric_type as keyof typeof METRIC_INFO];
                    if (!info) return null;
                    
                    return (
                      <div 
                        key={metric.metric_type}
                        className={`bg-zinc-950 border ${info.borderColor} rounded-lg p-6`}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className={`font-black text-lg ${info.color}`}>
                              {info.name}
                            </h3>
                            <p className="text-zinc-400 text-sm">{info.description}</p>
                          </div>
                          <Activity className={info.color} size={24} />
                        </div>
                        
                        <div className="flex items-end justify-between">
                          <div>
                            <div className="text-3xl font-black">
                              {(metric.value * 100).toFixed(1)}%
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-zinc-500">
                                Confidence: {(metric.confidence * 100).toFixed(0)}%
                              </span>
                              {metric.trend && (
                                metric.trend === 'up' ? 
                                  <TrendingUp size={14} className="text-green-500" /> :
                                  <TrendingDown size={14} className="text-red-500" />
                              )}
                            </div>
                          </div>
                          
                          {/* Mini chart placeholder */}
                          <div className="flex items-end gap-1 h-12">
                            {[...Array(5)].map((_, i) => (
                              <div 
                                key={i}
                                className={`w-2 ${info.bgColor} rounded-t`}
                                style={{ height: `${20 + Math.random() * 80}%` }}
                              />
                            ))}
                          </div>
                        </div>
                        
                        {metric.dimensions && (
                          <div className="mt-4 pt-4 border-t border-zinc-800">
                            <div className="text-xs text-zinc-500">
                              {Object.entries(metric.dimensions).map(([key, value]) => (
                                <div key={key} className="flex justify-between">
                                  <span>{key}:</span>
                                  <span className="text-zinc-400">{String(value)}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Status Bar */}
            <section className="py-8 px-6 border-t border-zinc-900">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between text-sm text-zinc-400">
                  <div className="flex items-center gap-6">
                    <span className="flex items-center gap-2">
                      <Circle className="text-green-500 fill-green-500" size={8} />
                      System Active
                    </span>
                    <span>Demo Organization</span>
                    <span>Free Tier</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span>30-day history</span>
                    <span>Real-time monitoring</span>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </>
  );
};

export default Dashboard;