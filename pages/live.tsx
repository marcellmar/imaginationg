import type { NextPage } from 'next';
import Head from 'next/head';
import SEOHead from '../components/SEOHead';
import { useState } from 'react';
import { GPIRadarChart } from '../components/gpi';
import type { DimensionScore, DimensionKey } from '../lib/gpi-types';

const DIMENSIONS = [
  { key: 'dl', label: 'Decision Latency', short: 'DL' },
  { key: 'ec', label: 'Error Correction', short: 'EC' },
  { key: 'kl', label: 'Knowledge Location', short: 'KL' },
  { key: 'sl', label: 'Structural Lock-In', short: 'SL' },
  { key: 'tf', label: 'Talent Flow', short: 'TF' },
  { key: 'ci', label: 'Capital Intensity', short: 'CI' },
  { key: 'kv', label: 'Knowledge Velocity', short: 'KV' },
];

const WEIGHTS: Record<string, number> = {
  dl: 0.20, ec: 0.20, kl: 0.15, sl: 0.15, tf: 0.10, ci: 0.10, kv: 0.10,
};

const KEY_TO_DIMENSION: Record<string, DimensionKey> = {
  dl: 'DECISION_LATENCY',
  ec: 'ERROR_CORRECTION',
  kl: 'KNOWLEDGE_LOCATION',
  sl: 'STRUCTURAL_LOCKIN',
  tf: 'TALENT_FLOW',
  ci: 'CAPITAL_INTENSITY',
  kv: 'KNOWLEDGE_VELOCITY',
};

function calcGPI(scores: Record<string, number>): number {
  return parseFloat(Object.entries(WEIGHTS).reduce((sum, [k, w]) => sum + (scores[k] || 0) * w, 0).toFixed(2));
}

function getStage(gpi: number): string {
  if (gpi <= 3.0) return 'Field';
  if (gpi <= 6.9) return 'Transitioning';
  return 'Particle';
}

function scoreColor(score: number): string {
  if (score <= 3) return '#1c1917';
  if (score <= 6) return '#78716c';
  return '#dc2626';
}

function stageColor(stage: string): string {
  if (stage === 'Field') return '#1c1917';
  if (stage === 'Transitioning') return '#78716c';
  return '#dc2626';
}

interface Signal { label: string; detail: string; }

const inputStyle: React.CSSProperties = {
  width: '100%', background: '#e7e5e4', border: '1px solid #d6d3d1',
  padding: '8px 10px', color: '#1c1917', fontSize: 13, marginBottom: 8,
  fontFamily: 'inherit',
};

const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: 10, letterSpacing: 2, color: '#a8a29e',
  textTransform: 'uppercase' as const, marginBottom: 6,
};

const LivePage: NextPage = () => {
  const [company, setCompany] = useState('');
  const [ticker, setTicker] = useState('');
  const [pattern, setPattern] = useState('');
  const [patternSummary, setPatternSummary] = useState('');
  const [scores, setScores] = useState<Record<string, number>>(
    Object.fromEntries(DIMENSIONS.map(d => [d.key, 5]))
  );
  const [notes, setNotes] = useState<Record<string, string>>(
    Object.fromEntries(DIMENSIONS.map(d => [d.key, '']))
  );
  const [signals, setSignals] = useState<Signal[]>([
    { label: '', detail: '' },
    { label: '', detail: '' },
  ]);

  const gpi = calcGPI(scores);
  const stage = getStage(gpi);
  const today = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const radarDimensions: DimensionScore[] = DIMENSIONS.map(d => ({
    dimension: KEY_TO_DIMENSION[d.key],
    score: scores[d.key],
    label: d.label,
    weight: WEIGHTS[d.key],
  }));

  return (
    <>
      <SEOHead
        title="GPI Live Calculator | GPI Studio"
        description="Build a live GPI scorecard. Score any company across 7 dimensions of organizational friction, see the radar chart, and export a print-ready report."
      />
      <Head>
        <style>{`
          @media print {
            .no-print { display: none !important; }
            body { background: #fafaf9 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          }
          @page { size: letter; margin: 0.5in; }
          * { box-sizing: border-box; }
          body { margin: 0; padding: 0; background: #fafaf9; }
          input:focus, textarea:focus { border-color: #1c1917 !important; outline: none; }
          input[type=range] { cursor: pointer; }
        `}</style>
      </Head>

      <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>

        {/* LEFT inputs */}
        <div className="no-print" style={{ width: 360, minWidth: 360, background: '#f5f5f4', borderRight: '1px solid #e7e5e4', padding: '28px 20px', overflowY: 'auto', height: '100vh', position: 'sticky', top: 0 }}>
          <p style={{ margin: '0 0 24px', fontSize: 10, letterSpacing: 3, color: '#a8a29e', textTransform: 'uppercase' }}>GPI LIVE</p>

          <label style={labelStyle}>Company</label>
          <input value={company} onChange={e => setCompany(e.target.value)} placeholder="Comcast" style={inputStyle} />

          <label style={labelStyle}>Ticker</label>
          <input value={ticker} onChange={e => setTicker(e.target.value)} placeholder="CMCSA" style={{ ...inputStyle, marginBottom: 24 }} />

          <p style={{ margin: '0 0 14px', fontSize: 10, letterSpacing: 3, color: '#a8a29e', textTransform: 'uppercase' }}>Dimension Scores</p>
          {DIMENSIONS.map(d => (
            <div key={d.key} style={{ marginBottom: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                <span style={{ fontSize: 11, color: '#78716c' }}>{d.label}</span>
                <span style={{ fontSize: 16, fontWeight: 900, color: scoreColor(scores[d.key]) }}>{scores[d.key]}</span>
              </div>
              <input
                type="range" min={1} max={10} step={1}
                value={scores[d.key]}
                onChange={e => setScores(s => ({ ...s, [d.key]: Number(e.target.value) }))}
                style={{ width: '100%', accentColor: scoreColor(scores[d.key]), marginBottom: 4 }}
              />
              <input
                value={notes[d.key]}
                onChange={e => setNotes(n => ({ ...n, [d.key]: e.target.value }))}
                placeholder="Note..."
                style={{ ...inputStyle, fontSize: 11, padding: '4px 8px', color: '#a8a29e', marginBottom: 0 }}
              />
            </div>
          ))}

          <p style={{ margin: '24px 0 14px', fontSize: 10, letterSpacing: 3, color: '#a8a29e', textTransform: 'uppercase' }}>Pattern</p>
          <input value={pattern} onChange={e => setPattern(e.target.value)} placeholder="Controlled Decay" style={inputStyle} />
          <textarea value={patternSummary} onChange={e => setPatternSummary(e.target.value)} placeholder="What this pattern means..." rows={3} style={{ ...inputStyle, resize: 'vertical' as const, marginBottom: 24 }} />

          <p style={{ margin: '0 0 14px', fontSize: 10, letterSpacing: 3, color: '#a8a29e', textTransform: 'uppercase' }}>Critical Signals</p>
          {signals.map((s, i) => (
            <div key={i} style={{ borderLeft: `3px solid ${i === 0 ? '#ef4444' : '#f97316'}`, paddingLeft: 10, marginBottom: 14 }}>
              <input
                value={s.label}
                onChange={e => setSignals(arr => arr.map((x, j) => j === i ? { ...x, label: e.target.value } : x))}
                placeholder="Signal..."
                style={{ ...inputStyle, fontWeight: 600, marginBottom: 4 }}
              />
              <textarea
                value={s.detail}
                onChange={e => setSignals(arr => arr.map((x, j) => j === i ? { ...x, detail: e.target.value } : x))}
                placeholder="What it means..."
                rows={2}
                style={{ ...inputStyle, fontSize: 11, resize: 'vertical' as const }}
              />
            </div>
          ))}

          <button
            onClick={() => window.print()}
            style={{ width: '100%', background: '#1c1917', color: '#fafaf9', border: 'none', padding: 14, fontWeight: 900, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer', marginTop: 8 }}
          >
            DOWNLOAD PDF
          </button>
        </div>

        {/* RIGHT card preview */}
        <div style={{ flex: 1, padding: '48px 40px', background: '#fafaf9', overflowY: 'auto' }}>
          <div style={{ maxWidth: 680, margin: '0 auto', color: '#1c1917' }}>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32, borderBottom: '1px solid #222', paddingBottom: 24 }}>
              <div>
                <p style={{ margin: '0 0 6px', fontSize: 10, letterSpacing: 3, color: '#a8a29e', textTransform: 'uppercase' }}>GPI VITAL SIGNS</p>
                <h1 style={{ margin: '0 0 4px', fontSize: 36, fontWeight: 900, lineHeight: 1, color: company ? '#1c1917' : '#d6d3d1' }}>
                  {company || 'Company Name'}
                </h1>
                {ticker && <p style={{ margin: 0, fontSize: 12, color: '#a8a29e', letterSpacing: 1 }}>{ticker}</p>}
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 52, fontWeight: 900, lineHeight: 1, color: scoreColor(gpi), transition: 'color 0.2s' }}>{gpi.toFixed(2)}</div>
                <div style={{ fontSize: 10, letterSpacing: 2, color: stageColor(stage), textTransform: 'uppercase', marginTop: 4 }}>{stage}</div>
              </div>
            </div>

            <div style={{ marginBottom: 32 }}>
              <p style={{ margin: '0 0 8px', fontSize: 10, letterSpacing: 3, color: '#a8a29e', textTransform: 'uppercase' }}>THE PATTERN</p>
              <h2 style={{ margin: '0 0 10px', fontSize: 22, fontWeight: 900, color: pattern ? '#1c1917' : '#d6d3d1' }}>{pattern || 'Pattern Name'}</h2>
              <p style={{ margin: 0, fontSize: 14, color: patternSummary ? '#78716c' : '#d6d3d1', lineHeight: 1.6 }}>{patternSummary || 'Description appears here...'}</p>
            </div>

            <div style={{ marginBottom: 32, display: 'flex', justifyContent: 'center' }}>
              <GPIRadarChart
                dimensions={radarDimensions}
                size={300}
                showLabels={true}
                showValues={true}
                highlightWeakest={true}
                animated={false}
              />
            </div>

            <div style={{ marginBottom: 32 }}>
              <p style={{ margin: '0 0 16px', fontSize: 10, letterSpacing: 3, color: '#a8a29e', textTransform: 'uppercase' }}>DIMENSION SCORES</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px' }}>
                {DIMENSIONS.map(d => (
                  <div key={d.key} style={{ borderBottom: '1px solid #e7e5e4', paddingBottom: 10 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
                      <span style={{ fontSize: 12, color: '#44403c', fontWeight: 600 }}>{d.label}</span>
                      <span style={{ fontSize: 20, fontWeight: 900, color: scoreColor(scores[d.key]), transition: 'color 0.15s' }}>{scores[d.key]}</span>
                    </div>
                    <div style={{ height: 3, background: '#e7e5e4', marginBottom: 4 }}>
                      <div style={{ height: 3, width: `${scores[d.key] * 10}%`, background: scoreColor(scores[d.key]), transition: 'width 0.15s, background 0.15s' }} />
                    </div>
                    <p style={{ margin: 0, fontSize: 11, color: '#a8a29e' }}>{notes[d.key] || '\u00A0'}</p>
                  </div>
                ))}
              </div>
            </div>

            {signals.some(s => s.label) && (
              <div style={{ marginBottom: 32 }}>
                <p style={{ margin: '0 0 16px', fontSize: 10, letterSpacing: 3, color: '#a8a29e', textTransform: 'uppercase' }}>CRITICAL SIGNALS</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {signals.filter(s => s.label).map((s, i) => (
                    <div key={i} style={{ borderLeft: `3px solid ${i === 0 ? '#ef4444' : '#f97316'}`, paddingLeft: 14 }}>
                      <p style={{ margin: '0 0 4px', fontSize: 13, fontWeight: 700 }}>{s.label}</p>
                      <p style={{ margin: 0, fontSize: 12, color: '#78716c', lineHeight: 1.5 }}>{s.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={{ borderTop: '1px solid #e7e5e4', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ margin: 0, fontSize: 10, color: '#a8a29e', letterSpacing: 2, textTransform: 'uppercase' }}>GPI.STUDIO</p>
              <p style={{ margin: 0, fontSize: 10, color: '#a8a29e' }}>{today}</p>
              <p style={{ margin: 0, fontSize: 10, color: '#d6d3d1' }}>Growing Pains Index &trade;</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default LivePage;
