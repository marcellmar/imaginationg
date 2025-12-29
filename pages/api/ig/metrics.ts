import type { NextApiRequest, NextApiResponse } from 'next';

// Types for IG metrics
interface IGMetric {
  metric_type: 'nexel' | 'morrin' | 'strune' | 'pilor' | 'kithara' | 'soreth' | 'voxel' | 'quorr' | 'threnn' | 'zelith';
  value: number;
  confidence?: number;
  dimensions?: Record<string, any>;
  timestamp?: string;
}

interface MetricsResponse {
  success: boolean;
  data?: any;
  error?: string;
}

// Mock database for demo (replace with real DB connection)
const mockMetrics: Record<string, IGMetric[]> = {
  'demo-org-1': [
    { metric_type: 'nexel', value: 0.65, confidence: 0.85, dimensions: { type: 'router' } },
    { metric_type: 'morrin', value: 0.3, confidence: 0.9, dimensions: { state: 'pre-morrin' } },
    { metric_type: 'strune', value: 0.72, confidence: 0.88, dimensions: { type: 'process' } },
    { metric_type: 'pilor', value: 0.45, confidence: 0.92, dimensions: { depth: 2 } },
    { metric_type: 'kithara', value: 0.68, confidence: 0.75, dimensions: { type: 'leadership' } },
    { metric_type: 'soreth', value: 0.55, confidence: 0.8, dimensions: { drain_type: 'communication' } },
    { metric_type: 'voxel', value: 0.6, confidence: 0.82, dimensions: { gap: 'perception-reality' } },
    { metric_type: 'quorr', value: 0.7, confidence: 0.9, dimensions: { type: 'product' } },
    { metric_type: 'threnn', value: 0.35, confidence: 0.78, dimensions: { direction: 'negative' } },
    { metric_type: 'zelith', value: 0.25, confidence: 0.95, dimensions: { proximity: 'distant' } }
  ]
};

// Helper function to generate time-series data
function generateTimeSeriesData(baseMetrics: IGMetric[], days: number = 30) {
  const now = new Date();
  const timeSeries: any[] = [];
  
  for (let i = days; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    baseMetrics.forEach(metric => {
      // Add some variation to make it realistic
      const variation = (Math.random() - 0.5) * 0.2;
      const value = Math.max(0, Math.min(1, metric.value + variation));
      
      timeSeries.push({
        ...metric,
        value,
        timestamp: date.toISOString(),
        time: date.toISOString()
      });
    });
  }
  
  return timeSeries;
}

// Calculate IG health score
function calculateHealthScore(metrics: IGMetric[]) {
  const weights = {
    strune: -0.15,
    pilor: -0.15,
    kithara: -0.1,
    soreth: -0.1,
    voxel: -0.1,
    quorr: -0.1,
    zelith: -0.2,
    threnn: 0.1, // Positive threnn is good
    morrin: 0.05, // Being in morrin state is slightly positive
    nexel: 0 // Neutral, depends on alignment
  };
  
  let score = 1; // Start with perfect health
  
  metrics.forEach(metric => {
    const weight = weights[metric.metric_type] || 0;
    score += metric.value * weight;
  });
  
  return Math.max(0, Math.min(1, score));
}

// Detect patterns and generate alerts
function detectPatterns(metrics: IGMetric[]) {
  const patterns = [];
  
  // High Strune detection
  const strune = metrics.find(m => m.metric_type === 'strune');
  if (strune && strune.value > 0.7) {
    patterns.push({
      type: 'high_strune',
      severity: 'high',
      message: 'Process resistance is critically high',
      recommendation: 'Consider First Blood Build intervention'
    });
  }
  
  // Pilor loop detection
  const pilor = metrics.find(m => m.metric_type === 'pilor');
  if (pilor && pilor.value > 0.6) {
    patterns.push({
      type: 'pilor_loop',
      severity: 'medium',
      message: 'Recursive failure patterns detected',
      recommendation: 'The Naming session recommended'
    });
  }
  
  // Zelith proximity warning
  const zelith = metrics.find(m => m.metric_type === 'zelith');
  if (zelith && zelith.value > 0.7) {
    patterns.push({
      type: 'zelith_approach',
      severity: 'critical',
      message: 'System approaching critical pressure point',
      recommendation: 'Immediate intervention required'
    });
  }
  
  return patterns;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MetricsResponse>
) {
  const { method, query, body } = req;
  
  // For demo purposes, using mock data
  // In production, this would connect to the database
  const organizationId = query.organizationId as string || 'demo-org-1';
  
  switch (method) {
    case 'GET':
      try {
        const timeRange = query.timeRange as string || '30d';
        const metricType = query.metricType as string;
        
        // Get base metrics
        let metrics = mockMetrics[organizationId] || mockMetrics['demo-org-1'];
        
        // Filter by metric type if specified
        if (metricType) {
          metrics = metrics.filter(m => m.metric_type === metricType);
        }
        
        // Generate time series data based on time range
        const days = timeRange === '7d' ? 7 : timeRange === '90d' ? 90 : 30;
        const timeSeries = generateTimeSeriesData(metrics, days);
        
        // Calculate current health score
        const healthScore = calculateHealthScore(metrics);
        
        // Detect patterns
        const patterns = detectPatterns(metrics);
        
        res.status(200).json({
          success: true,
          data: {
            current: metrics,
            timeSeries,
            healthScore,
            patterns,
            lastUpdated: new Date().toISOString()
          }
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          error: 'Failed to fetch metrics'
        });
      }
      break;
      
    case 'POST':
      try {
        // Validate the metric data
        const newMetric = body as IGMetric;
        
        if (!newMetric.metric_type || !newMetric.value) {
          return res.status(400).json({
            success: false,
            error: 'Missing required fields: metric_type and value'
          });
        }
        
        // In production, save to database
        // For demo, just return success
        res.status(201).json({
          success: true,
          data: {
            ...newMetric,
            timestamp: new Date().toISOString(),
            id: Math.random().toString(36).substr(2, 9)
          }
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          error: 'Failed to save metric'
        });
      }
      break;
      
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).json({
        success: false,
        error: `Method ${method} Not Allowed`
      });
  }
}