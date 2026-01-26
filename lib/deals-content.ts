/**
 * Deal Analysis Content
 * Local storage for M&A deal analyses
 */

export interface DealAnalysis {
  slug: string;
  title: string;
  dealValue: string;
  expectedClose: string;
  analysisDate: string;
  companies: {
    name: string;
    gpiScore: number;
    state: string;
    characteristic: string;
  }[];
  gpiDelta: number;
  sections: {
    title: string;
    content: string;
  }[];
  verdict: string;
  verdictDetail: string;
}

export const dealsContent: Record<string, DealAnalysis> = {
  'netflix-wbd-deal-analysis': {
    slug: 'netflix-wbd-deal-analysis',
    title: 'Netflix + WBD Deal Prediction Analysis',
    dealValue: '$82.7B enterprise value ($72B equity)',
    expectedClose: 'Q3 2026',
    analysisDate: '2026-01-16',
    companies: [
      { name: 'Netflix', gpiScore: 3.25, state: 'Field', characteristic: 'Culture as infrastructure' },
      { name: 'WBD', gpiScore: 7.05, state: 'Particle', characteristic: 'Debt-driven dissolution' },
    ],
    gpiDelta: 3.8,
    sections: [
      {
        title: 'What Netflix Is Actually Acquiring',
        content: `**Going to Netflix:**
- Warner Bros. Pictures (film studio)
- HBO + HBO Max (prestige content + streaming)
- Warner Bros. Television
- DC Studios + DC Entertainment
- Warner Bros. Gaming Studios
- Film and television libraries (Batman, Harry Potter, Friends, etc.)

**Spinning Off Separately (Discovery Global):**
- CNN
- TNT Sports (US)
- Discovery networks
- Free-to-air European channels
- Discovery+ streaming
- Bleacher Report
- Most of the $33B debt`,
      },
      {
        title: 'Integration Speed: SLOW OR FAIL',
        content: `The 3.8 point GPI delta is dangerous. Netflix (3.25) cannot absorb WBD assets (7.05) without risking calcification.

**Prediction:** If Netflix attempts rapid cultural integration, forcing No Rules Rules on WB Studios, the talent exodus will accelerate. WB Studios has a prestige film culture. Netflix has an algorithm-driven content culture. These are different organisms.

**Recommended:** Non-integration strategy. Keep WB Studios as a semi-autonomous unit. Let Ted Sarandos (content) manage the relationship while Greg Peters (tech/product) focuses on platform integration. The content pipelines can merge. The cultures should not.`,
      },
      {
        title: 'HBO Brand: PROTECT AT ALL COSTS',
        content: `HBO is the crown jewel. Its brand equity is built on prestige curation, not volume. Netflix's strategy has been volume (600+ original titles per year).

**Prediction:** If Netflix applies its volume strategy to HBO, the brand will degrade within 18 months. HBO's value is that it says no. Netflix's value is that it says yes.

**Recommended:** Operate HBO as a distinct tier or brand within Netflix. "HBO on Netflix" as a premium collection. Do not flood HBO with mid-tier Netflix originals. Protect the curatorial function.`,
      },
      {
        title: 'DC Intellectual Property: HIGH RISK',
        content: `DC has underperformed for a decade. James Gunn and Peter Safran are attempting a reset with the new DCU. Netflix acquiring DC mid-reset is chaotic.

**Prediction:** Netflix will be tempted to accelerate DC content production. This would repeat the mistake that damaged DC in the first place. The GPI framework suggests patience: let the Gunn/Safran plan execute for 2-3 years before attempting optimization.

**Recommended:** Hands-off approach to DC for minimum 24 months post-close.`,
      },
      {
        title: 'Content Library: IMMEDIATE VALUE',
        content: `The Warner Bros. library (Friends, Harry Potter, Batman catalog, classic films) is instantly accretive to Netflix. No cultural integration required. Just licensing deals moving in-house.

**Prediction:** This is where Netflix wins immediately. Within 6 months of close, subscriber retention should improve as Netflix becomes the permanent home for WB catalog.`,
      },
      {
        title: 'Zaslav Transition: FRICTION',
        content: `David Zaslav is reportedly joining Netflix post-deal. Zaslav is a cost-cutter who ran Discovery like a lean operation. Netflix pays top-of-market and has no bonuses. These philosophies conflict.

**Prediction:** Zaslav either adapts to Netflix culture or exits within 18 months. His cost-cutting instincts will clash with Netflix's talent-density approach.`,
      },
      {
        title: 'Talent Retention: CRITICAL',
        content: `WB Studios has experienced massive brain drain since the 2022 merger. The remaining talent is exhausted and uncertain.

**Prediction:** Post-close, Netflix must signal stability immediately. Top-of-market pay. Long-term projects. No more content cancellations for tax write-offs. The Batgirl shadow hangs over WBD.

**Recommended:** Within 30 days of close, announce a 3-year content plan for WB Studios with guaranteed funding.`,
      },
      {
        title: '3-Year GPI Trajectory Forecast',
        content: `**Year 1 (2027):** Netflix GPI drifts to 3.5-4.0
- Integration challenges surface
- Some cultural friction
- Content library value realized
- Subscriber growth from WB catalog

**Year 2 (2028):** Decision point
- If non-integration maintained: GPI stabilizes 3.5-3.8
- If integration forced: GPI accelerates to 4.5-5.0
- HBO brand either protected or diluted
- DC content plan succeeds or fails

**Year 3 (2029):** New equilibrium
- Best case: GPI 3.5 (Field-Transitioning border)
- Base case: GPI 4.0-4.5 (Solid Transitioning)
- Worst case: GPI 5.5+ (Calcification begins)`,
      },
      {
        title: 'The Pattern: Organ Transplant',
        content: `This acquisition is not a merger. It is an organ transplant. Netflix is receiving WB Studios and HBO like a transplant recipient receives a heart. The body (Netflix) must accept the organ (WBD assets) without rejecting it or being overwhelmed by it.

**Success requires:**
- Immunosuppression: Netflix must temporarily suppress its culture instincts to prevent rejection
- Gradual integration: Blood supply (cash flow, data systems) first, then nervous system (decision processes), then muscles (execution)
- Long recovery: Full metabolic alignment takes 3-5 years minimum

**Failure modes:**
- Rejection: Netflix culture attacks WBD assets, talent flees
- Infection: WBD particle-state infects Netflix, calcification spreads
- Organ failure: WBD assets underperform due to neglect or mismanagement`,
      },
    ],
    verdict: 'CAUTIOUSLY OPTIMISTIC',
    verdictDetail: `Netflix has the metabolic capacity to absorb WBD assets without calcifying, but only if leadership maintains discipline. The deal succeeds if Netflix treats it as an organ transplant requiring years of careful integration. The deal fails if Netflix treats it as a merger requiring rapid cultural unification.

**GPI Prediction:** Netflix ends 2029 between GPI 3.5 and 4.5, depending on integration approach. Anything above 5.0 indicates the deal has damaged Netflix's field-state metabolism.`,
  },
};

export const getDealBySlug = (slug: string): DealAnalysis | null => {
  return dealsContent[slug] || null;
};

export const getAllDeals = (): DealAnalysis[] => {
  return Object.values(dealsContent);
};
