import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import SEOHead from '../../components/SEOHead';

interface Dimension {
  label: string;
  short: string;
  score: number;
  note: string;
}

interface VitalSignsData {
  company: string;
  ticker?: string;
  gpiScore: number;
  stage: string;
  pattern: string;
  patternSummary: string;
  dimensions: Dimension[];
  criticalSignals: { label: string; detail: string }[];
  analysisDate: string;
}

// Static data — extend this as you add more companies
const vitalsData: Record<string, VitalSignsData> = {
  comcast: {
    company: 'Comcast',
    ticker: 'CMCSA',
    gpiScore: 6.95,
    stage: 'Particle',
    pattern: 'Controlled Decay',
    patternSummary: "Comcast isn't failing. It's managing decline deliberately, spinning off dead weight while protecting broadband. The Roberts family controls 33% of voting shares and has since 2002. The org moves at one person's pace, not the market's.",
    dimensions: [
      { label: 'Decision Latency', short: 'DL', score: 7, note: 'Family control + 894 executives' },
      { label: 'Error Correction', short: 'EC', score: 6, note: 'Versant spinoff took years' },
      { label: 'Knowledge Location', short: 'KL', score: 6, note: 'Siloed across business units' },
      { label: 'Structural Lock-In', short: 'SL', score: 9, note: 'Cable infrastructure, parks, studios' },
      { label: 'Talent Flow', short: 'TF', score: 6, note: 'Boys club culture, wage compression' },
      { label: 'Capital Intensity', short: 'CI', score: 9, note: 'Continuous infrastructure demands' },
      { label: 'Knowledge Velocity', short: 'KV', score: 6, note: 'Legacy systems, fragmented analytics' },
    ],
    criticalSignals: [
      {
        label: 'Structural Lock-In 9/10',
        detail: '$124B revenue tied to infrastructure that takes decades and billions to replace. Every strategic option runs through that constraint first.',
      },
      {
        label: 'Decision Latency 7/10',
        detail: 'One family, one CEO since 2002, 894 executives in the org. Decisions travel through all of it. The market moves faster than the approval chain.',
      },
    ],
    analysisDate: 'January 2026',
  },
};

interface Props {
  data: VitalSignsData | null;
  slug: string;
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

const VitalsPage: NextPage<Props> = ({ data, slug }) => {
  if (!data) {
    return (
      <div style={{ background: '#fafaf9', color: '#1c1917', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#a8a29e' }}>No vital signs found for "{slug}".</p>
      </div>
    );
  }

  const handlePrint = () => window.print();

  return (
    <>
      <SEOHead
        title={`${data.company} Vital Signs | GPI Studio`}
        description={`GPI vital signs for ${data.company}. Score: ${data.gpiScore}/10. Stage: ${data.stage}. Pattern: ${data.pattern}. 7-dimension organizational diagnostic.`}
      />
      <Head>
        <style>{`
          @media print {
            .no-print { display: none !important; }
            body { background: #fafaf9 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            .card { page-break-inside: avoid; }
          }
          @page { size: letter; margin: 0.5in; }
          * { box-sizing: border-box; }
          body { margin: 0; padding: 0; background: #fafaf9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
        `}</style>
      </Head>

      {/* Print button */}
      <div className="no-print" style={{ position: 'fixed', top: 20, right: 24, zIndex: 100 }}>
        <button
          onClick={handlePrint}
          style={{
            background: '#fff', color: '#000', border: 'none', padding: '10px 20px',
            fontWeight: 900, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          DOWNLOAD PDF
        </button>
        <a
          href="/"
          style={{
            display: 'inline-block', marginLeft: 12, color: '#a8a29e', fontSize: 11,
            letterSpacing: 2, textTransform: 'uppercase', textDecoration: 'none',
          }}
        >
          ← GPI.STUDIO
        </a>
      </div>

      {/* Card */}
      <div className="card" style={{ maxWidth: 760, margin: '0 auto', padding: '48px 40px', color: '#1c1917' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 36, borderBottom: '1px solid #e7e5e4', paddingBottom: 28 }}>
          <div>
            <p style={{ margin: '0 0 6px', fontSize: 10, letterSpacing: 3, color: '#a8a29e', textTransform: 'uppercase' }}>GPI VITAL SIGNS</p>
            <h1 style={{ margin: '0 0 4px', fontSize: 36, fontWeight: 900, lineHeight: 1 }}>{data.company}</h1>
            {data.ticker && <p style={{ margin: 0, fontSize: 12, color: '#a8a29e', letterSpacing: 1 }}>{data.ticker}</p>}
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 52, fontWeight: 900, lineHeight: 1, color: scoreColor(data.gpiScore) }}>
              {data.gpiScore.toFixed(1)}
            </div>
            <div style={{ fontSize: 10, letterSpacing: 2, color: stageColor(data.stage), textTransform: 'uppercase', marginTop: 4 }}>
              {data.stage}
            </div>
          </div>
        </div>

        {/* Pattern */}
        <div style={{ marginBottom: 36 }}>
          <p style={{ margin: '0 0 8px', fontSize: 10, letterSpacing: 3, color: '#a8a29e', textTransform: 'uppercase' }}>THE PATTERN</p>
          <h2 style={{ margin: '0 0 12px', fontSize: 22, fontWeight: 900 }}>{data.pattern}</h2>
          <p style={{ margin: 0, fontSize: 14, color: '#78716c', lineHeight: 1.6 }}>{data.patternSummary}</p>
        </div>

        {/* Dimensions */}
        <div style={{ marginBottom: 36 }}>
          <p style={{ margin: '0 0 16px', fontSize: 10, letterSpacing: 3, color: '#a8a29e', textTransform: 'uppercase' }}>DIMENSION SCORES</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px' }}>
            {data.dimensions.map(d => (
              <div key={d.short} style={{ borderBottom: '1px solid #e7e5e4', paddingBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
                  <span style={{ fontSize: 12, color: '#44403c', fontWeight: 600 }}>{d.label}</span>
                  <span style={{ fontSize: 20, fontWeight: 900, color: scoreColor(d.score) }}>{d.score}</span>
                </div>
                {/* Score bar */}
                <div style={{ height: 3, background: '#e7e5e4', marginBottom: 4 }}>
                  <div style={{ height: 3, width: `${d.score * 10}%`, background: scoreColor(d.score) }} />
                </div>
                <p style={{ margin: 0, fontSize: 11, color: '#a8a29e' }}>{d.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Critical signals */}
        <div style={{ marginBottom: 36 }}>
          <p style={{ margin: '0 0 16px', fontSize: 10, letterSpacing: 3, color: '#a8a29e', textTransform: 'uppercase' }}>CRITICAL SIGNALS</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {data.criticalSignals.map((s, i) => (
              <div key={i} style={{ borderLeft: `3px solid ${i === 0 ? '#ef4444' : '#f97316'}`, paddingLeft: 14 }}>
                <p style={{ margin: '0 0 4px', fontSize: 13, fontWeight: 700, color: '#1c1917' }}>{s.label}</p>
                <p style={{ margin: 0, fontSize: 12, color: '#78716c', lineHeight: 1.5 }}>{s.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ borderTop: '1px solid #e7e5e4', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ margin: 0, fontSize: 10, color: '#a8a29e', letterSpacing: 2, textTransform: 'uppercase' }}>GPI.STUDIO</p>
          <p style={{ margin: 0, fontSize: 10, color: '#a8a29e' }}>{data.analysisDate}</p>
          <p style={{ margin: 0, fontSize: 10, color: '#d6d3d1' }}>Growing Pains Index &trade;</p>
        </div>

      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(vitalsData).map(slug => ({ params: { slug } }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const data = vitalsData[slug] || null;
  return { props: { data, slug }, revalidate: 3600 };
};

export default VitalsPage;
