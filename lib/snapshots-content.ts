// Parsed snapshot content from local brain
// Structure matches the markdown snapshot format

export interface DimensionScore {
  dimension: string;
  score: number;
  explanation: string;
}

export interface CompanySnapshot {
  slug: string;
  name: string;
  analysisDate: string;
  gpiScore: number;
  state: string;
  ticker?: string;
  marketCap?: string;
  employees?: number;
  revenue?: string;
  founded?: number;
  dimensions: DimensionScore[];
  pattern: string;
  patternDescription: string;
  keyNumbers: string[];
  enablers: string[];
  friction: string[];
  quotable?: string;
  sources?: { title: string; url: string }[];
}

export const snapshotsContent: Record<string, CompanySnapshot> = {
  'disney': {
    slug: 'disney',
    name: 'Disney',
    analysisDate: '2026-01-16',
    gpiScore: 6.7,
    state: 'Transitioning (upper)',
    ticker: 'DIS',
    marketCap: '~$204B',
    employees: 231000,
    revenue: '$94.4B (FY2025)',
    founded: 1923,
    dimensions: [
      { dimension: 'Decision Latency', score: 7, explanation: 'Massive bureaucracy across Parks, Studios, Streaming, ESPN, Linear TV. Iger return needed to undo Chapek-era mistakes.' },
      { dimension: 'Error Correction', score: 6, explanation: 'Disney+ finally profitable after 3+ years. Correction capacity exists but cycle is slow. Layoffs reactive.' },
      { dimension: 'Knowledge Location', score: 7, explanation: 'Highly centralized. Imagineering has autonomy but major decisions require executive approval.' },
      { dimension: 'Structural Lock-In', score: 7, explanation: 'Parks require massive capital. ESPN decline (cord-cutting) creates strategic tension. IP exploitation limits risk-taking.' },
      { dimension: 'Talent Flow', score: 6, explanation: 'Internal politics per Glassdoor. Layoffs without retention effort. "Political and toxic" culture in areas.' },
      { dimension: 'Capital Intensity', score: 8, explanation: 'Parks, cruise ships, content production. Treasure cruise line adds fixed costs. Content arms race.' },
      { dimension: 'Knowledge Velocity', score: 6, explanation: 'Siloed divisions (ESPN, Marvel, Pixar, Parks). Knowledge trapped in silos despite IP synergy.' },
    ],
    pattern: 'Managed Decline of Empire',
    patternDescription: 'Disney is too big and too capital-intensive to truly transform. Now optimizing for profitability within existing structure rather than reinvention. The dual burden: Streaming pivot worked but created content costs ON TOP OF infrastructure costs. Parks are both strength (unique moat) and weakness (capital anchor). Unlike Netflix (3.25), Disney cannot move fast because physical assets and linear TV anchor it to legacy operations.',
    keyNumbers: [
      'Streaming profit: $336M (finally profitable)',
      'Disney+ subscribers: 126M globally',
      'Cost savings target: $7.5B',
      'Jobs eliminated since 2023: 8,000+',
      'Iger compensation: $41.1M (30% increase)',
      '5-year market cap CAGR: -6.32%',
    ],
    enablers: [
      'Streaming profitable',
      'Strong IP portfolio (Marvel, Star Wars, Pixar, Disney Animation)',
      'Parks recovery post-COVID',
      'Iger stability',
      'Cost discipline improving',
    ],
    friction: [
      'ESPN decline (cord-cutting accelerating)',
      'Parks/cruise capital requirements',
      'Internal politics at SVP+ level',
      'CEO succession uncertainty (2026)',
      'Massive bureaucracy',
    ],
    quotable: 'Disney is optimizing for profitability within its existing structure rather than reinventing itself. The streaming pivot worked, but the parks, cruise ships, and linear TV create gravitational pull that Netflix will never feel.',
  },

  'netflix': {
    slug: 'netflix',
    name: 'Netflix',
    analysisDate: '2026-01-16',
    gpiScore: 3.25,
    state: 'Field',
    ticker: 'NFLX',
    marketCap: '~$380B',
    employees: 13000,
    revenue: '$39B (FY2025)',
    founded: 1997,
    dimensions: [
      { dimension: 'Decision Latency', score: 3, explanation: 'Flat org. "Context not control" culture. Decisions pushed to informed employees. No committees for most decisions.' },
      { dimension: 'Error Correction', score: 3, explanation: 'Killed Qwikster in 23 days. Password sharing crackdown succeeded after initial resistance. Ad tier pivot within 12 months.' },
      { dimension: 'Knowledge Location', score: 3, explanation: 'Radical transparency. Information flows freely. The "Netflix Culture Deck" codified knowledge sharing.' },
      { dimension: 'Structural Lock-In', score: 4, explanation: 'No physical infrastructure. Content library is the main lock-in, but can be adjusted annually.' },
      { dimension: 'Talent Flow', score: 3, explanation: '"Keeper test" ensures high performers. Generous severance. No "brilliant jerks." Top of market pay.' },
      { dimension: 'Capital Intensity', score: 4, explanation: 'Content spend is high ($17B) but flexible year-to-year unlike physical assets.' },
      { dimension: 'Knowledge Velocity', score: 3, explanation: 'A/B testing culture. Data-driven decisions. Algorithm improvements compound.' },
    ],
    pattern: 'Culture as Infrastructure',
    patternDescription: 'Netflix built organizational software (culture) instead of organizational hardware (bureaucracy). The culture deck is their operating system. This is why they can move fast at scale. The "no rules" approach works because they hired adults and gave them context. Low GPI is not luck, it is architecture.',
    keyNumbers: [
      'Subscribers: 301M+ globally',
      'Content spend: $17B annually',
      'Revenue per employee: $3M',
      'Ad tier: 70M+ MAU (fastest growing)',
      'Password crackdown: +13M subscribers Q2 2024',
      'Market cap 5Y CAGR: +18%',
    ],
    enablers: [
      'No physical assets to maintain',
      'Culture that attracts talent',
      'Data/algorithm advantage',
      'Global scale with local content',
      'Ad tier growth runway',
    ],
    friction: [
      'Content cost inflation',
      'Competition for talent',
      'Saturation in core markets',
      'Live sports absent (for now)',
      'Founder transition (Hastings stepped back)',
    ],
    quotable: 'Netflix built organizational software instead of organizational hardware. The culture deck is their operating system. Low GPI is not luck, it is architecture.',
  },

  'tesla': {
    slug: 'tesla',
    name: 'Tesla',
    analysisDate: '2026-01-13',
    gpiScore: 6.8,
    state: 'Transitioning (upper)',
    ticker: 'TSLA',
    marketCap: '~$800B',
    employees: 140000,
    revenue: '$97B (FY2025)',
    founded: 2003,
    dimensions: [
      { dimension: 'Decision Latency', score: 5, explanation: 'Musk can decide instantly. But organization increasingly bureaucratic. Factory decisions fast, corporate slow.' },
      { dimension: 'Error Correction', score: 6, explanation: 'Cybertruck delays (years). FSD promises vs reality. But manufacturing iteration is excellent.' },
      { dimension: 'Knowledge Location', score: 7, explanation: 'Musk-dependent. Key decisions require his attention. Brain drain to SpaceX, xAI, etc.' },
      { dimension: 'Structural Lock-In', score: 8, explanation: 'Gigafactories are massive fixed assets. Supercharger network. Vertical integration.' },
      { dimension: 'Talent Flow', score: 7, explanation: 'High turnover. Musk style polarizing. Best talent often leaves for other Musk ventures.' },
      { dimension: 'Capital Intensity', score: 8, explanation: 'Factories, battery production, robotaxi development. Massive capex requirements.' },
      { dimension: 'Knowledge Velocity', score: 7, explanation: 'Siloed between auto, energy, AI. Over-the-air updates are bright spot.' },
    ],
    pattern: 'Founder-Dependent Calcification',
    patternDescription: 'Tesla succeeded because Musk could override bureaucracy. Now the organization is calcifying around that dependency. The company moves fast when Musk is engaged, slowly when he is not. This is unsustainable at scale. Compare to BYD (3.4) which built systems, not dependence.',
    keyNumbers: [
      'Deliveries: 1.8M vehicles (2025)',
      'Energy storage: 15 GWh deployed',
      'Superchargers: 50,000+ globally',
      'R&D spend: $4B annually',
      'Musk time split: Tesla, SpaceX, xAI, X, Neuralink',
      'Stock volatility: 3x S&P average',
    ],
    enablers: [
      'Brand strength',
      'Supercharger network moat',
      'Manufacturing innovation (gigacasting)',
      'Software/OTA advantage',
      'Energy business growth',
    ],
    friction: [
      'Musk distraction/dependency',
      'China competition (BYD)',
      'Aging Model 3/Y lineup',
      'FSD liability overhang',
      'Talent retention issues',
    ],
    quotable: 'Tesla succeeded because Musk could override bureaucracy. Now the organization is calcifying around that dependency. The company moves fast when Musk is engaged, slowly when he is not.',
  },

  'amazon': {
    slug: 'amazon',
    name: 'Amazon',
    analysisDate: '2026-01-16',
    gpiScore: 3.55,
    state: 'Transitioning (lower)',
    ticker: 'AMZN',
    marketCap: '~$2.1T',
    employees: 1500000,
    revenue: '$620B (FY2025)',
    founded: 1994,
    dimensions: [
      { dimension: 'Decision Latency', score: 3, explanation: 'Two-pizza teams. "Disagree and commit." Single-threaded leaders. Day 1 culture still enforced.' },
      { dimension: 'Error Correction', score: 3, explanation: 'Fire Phone killed fast. Constant experimentation. "Failure and invention are inseparable twins."' },
      { dimension: 'Knowledge Location', score: 4, explanation: '6-page memos force clarity. But scale creates silos. AWS vs Retail friction.' },
      { dimension: 'Structural Lock-In', score: 4, explanation: 'Fulfillment centers are fixed but provide moat. AWS infrastructure is the business.' },
      { dimension: 'Talent Flow', score: 4, explanation: 'Up or out culture. High bar hiring. But warehouse turnover is 150%+.' },
      { dimension: 'Capital Intensity', score: 4, explanation: 'Massive capex but generates cash. AWS margins fund experiments.' },
      { dimension: 'Knowledge Velocity', score: 3, explanation: 'Internal tech sharing. AWS born from internal tools. Data obsession.' },
    ],
    pattern: 'Scale Without Calcification',
    patternDescription: 'Amazon maintains startup metabolism at trillion-dollar scale through deliberate mechanisms: two-pizza teams, 6-page memos, single-threaded ownership. Bezos built the operating system before he needed it. The "Day 1" philosophy is not a slogan, it is enforcement against entropy.',
    keyNumbers: [
      'AWS revenue: $100B+ annually',
      'Prime members: 200M+ globally',
      'Fulfillment centers: 1,000+',
      'Same-day delivery cities: 90+',
      'R&D spend: $85B (most in world)',
      'Two-pizza teams: thousands',
    ],
    enablers: [
      'AWS cash generation',
      'Prime flywheel',
      'Logistics moat',
      'Day 1 culture enforcement',
      'Willingness to cannibalize',
    ],
    friction: [
      'Antitrust pressure',
      'Labor relations',
      'Scale itself (1.5M employees)',
      'AWS growth deceleration',
      'Jassy vs Bezos leadership style',
    ],
    quotable: 'Amazon maintains startup metabolism at trillion-dollar scale through deliberate mechanisms. Bezos built the operating system before he needed it.',
  },

  'boeing': {
    slug: 'boeing',
    name: 'Boeing',
    analysisDate: '2026-01-19',
    gpiScore: 7.75,
    state: 'Particle',
    ticker: 'BA',
    marketCap: '~$120B',
    employees: 170000,
    revenue: '$78B (FY2025)',
    founded: 1916,
    dimensions: [
      { dimension: 'Decision Latency', score: 8, explanation: 'Multiple fatal decisions took years to address. 737 MAX grounding lasted 20 months. Safety culture eroded over decades.' },
      { dimension: 'Error Correction', score: 9, explanation: 'MCAS failures killed 346 people. Door plug blowout in 2024. Whistleblower retaliation. Errors compound.' },
      { dimension: 'Knowledge Location', score: 8, explanation: 'Engineering expertise hollowed out. Outsourced to suppliers. McDonnell Douglas finance culture won.' },
      { dimension: 'Structural Lock-In', score: 8, explanation: 'Defense contracts, supplier dependencies, union agreements, regulatory oversight all limit options.' },
      { dimension: 'Talent Flow', score: 7, explanation: 'Engineers leaving. Reputation damaged. Hard to recruit safety-focused talent when safety is compromised.' },
      { dimension: 'Capital Intensity', score: 8, explanation: 'Aircraft development costs $10B+. Factories are fixed. R&D cycles are decades.' },
      { dimension: 'Knowledge Velocity', score: 7, explanation: 'Siloed between commercial, defense, space. Lessons not shared. Safety learnings lost.' },
    ],
    pattern: 'The Engineering Culture That Finance Ate',
    patternDescription: 'Boeing was once an engineering company that happened to have accountants. The McDonnell Douglas merger inverted this. Cost-cutting replaced safety culture. Stock buybacks replaced R&D. The 737 MAX disasters were not anomalies, they were the system working as redesigned. This is what happens when you optimize for quarterly earnings in an industry where errors kill people.',
    keyNumbers: [
      '737 MAX deaths: 346 people',
      'Stock buybacks (2013-2019): $43B',
      'Quality escapes (2024): 400+',
      'CEO turnover: 3 in 5 years',
      'Market share vs Airbus: declining',
      'Cash burn (2024): $8B',
    ],
    enablers: [
      'Defense contracts provide floor',
      'Duopoly with Airbus (no alternatives)',
      'Existing order backlog',
      'New CEO from outside',
      'FAA forcing changes',
    ],
    friction: [
      'Destroyed safety culture',
      'Engineering brain drain',
      'Supplier quality issues',
      'Union tensions',
      'Criminal liability overhang',
      'Customer trust erosion',
    ],
    quotable: 'Boeing was once an engineering company that happened to have accountants. The McDonnell Douglas merger inverted this. The 737 MAX disasters were not anomalies, they were the system working as redesigned.',
  },

  'nvidia': {
    slug: 'nvidia',
    name: 'NVIDIA',
    analysisDate: '2026-01-18',
    gpiScore: 3.55,
    state: 'Transitioning (lower)',
    ticker: 'NVDA',
    marketCap: '~$3T',
    employees: 30000,
    revenue: '$130B (FY2025)',
    founded: 1993,
    dimensions: [
      { dimension: 'Decision Latency', score: 3, explanation: 'Jensen Huang maintains founder control. "No 1:1s" policy forces group decisions. Flat structure despite scale.' },
      { dimension: 'Error Correction', score: 3, explanation: 'Pivoted from gaming to AI before market saw it. Crypto mining bust absorbed quickly. Continuous architecture iteration.' },
      { dimension: 'Knowledge Location', score: 4, explanation: 'Jensen is the knowledge hub but pushes context down. CUDA ecosystem is institutional knowledge.' },
      { dimension: 'Structural Lock-In', score: 4, explanation: 'Fabless model provides flexibility. TSMC dependency is risk but not rigidity.' },
      { dimension: 'Talent Flow', score: 3, explanation: 'Top AI talent wants to work here. Stock appreciation helps retention. "Founders mentality" culture.' },
      { dimension: 'Capital Intensity', score: 4, explanation: 'Fabless means low capex. R&D is the spend, which is flexible.' },
      { dimension: 'Knowledge Velocity', score: 4, explanation: 'CUDA platform creates learning loops. Developer ecosystem compounds. Architecture generations every 2 years.' },
    ],
    pattern: 'The Founder\'s Flat',
    patternDescription: 'Jensen Huang built a company where the founder can still touch every major decision without creating bottlenecks. The "no 1:1s" policy forces information into the open. The CUDA ecosystem is a moat that compounds. NVIDIA succeeded not by building hardware but by building a platform that makes switching costs astronomical.',
    keyNumbers: [
      'Data center revenue: $100B+ (FY2025)',
      'Gross margin: 75%+',
      'CUDA developers: 4M+',
      'AI training market share: 80%+',
      'R&D spend: $10B annually',
      'Revenue per employee: $4.3M',
    ],
    enablers: [
      'AI demand explosion',
      'CUDA moat (20 years of ecosystem)',
      'Jensen leadership',
      'Fabless flexibility',
      'Software + hardware integration',
    ],
    friction: [
      'China export restrictions',
      'Customer concentration (hyperscalers)',
      'AMD/Intel competition',
      'Custom silicon threat (Google TPU, Amazon)',
      'Jensen key-man risk',
    ],
    quotable: 'NVIDIA succeeded not by building hardware but by building a platform that makes switching costs astronomical. The CUDA ecosystem is a moat that compounds.',
  },

  'walmart': {
    slug: 'walmart',
    name: 'Walmart',
    analysisDate: '2026-01-18',
    gpiScore: 4.65,
    state: 'Transitioning',
    ticker: 'WMT',
    marketCap: '~$600B',
    employees: 2100000,
    revenue: '$680B (FY2025)',
    founded: 1962,
    dimensions: [
      { dimension: 'Decision Latency', score: 5, explanation: 'Store managers have real authority. But corporate decisions slower. Doug McMillon pushes speed.' },
      { dimension: 'Error Correction', score: 4, explanation: 'Jet.com acquisition failed but learned from it. E-commerce pivot working. Walmart+ growing.' },
      { dimension: 'Knowledge Location', score: 5, explanation: 'Bentonville HQ still central but technology enabling store-level intelligence.' },
      { dimension: 'Structural Lock-In', score: 5, explanation: '4,700 US stores are fixed but also advantage (last-mile fulfillment).' },
      { dimension: 'Talent Flow', score: 5, explanation: 'Tech talent improving. But frontline turnover high. Two workforces.' },
      { dimension: 'Capital Intensity', score: 5, explanation: 'Stores are capex but generate cash. Automation investments ongoing.' },
      { dimension: 'Knowledge Velocity', score: 4, explanation: 'Data advantage from scale. Supply chain intelligence. But silos between digital/physical.' },
    ],
    pattern: 'Scale as Transformation Platform',
    patternDescription: 'Walmart is using its physical footprint as an advantage rather than fighting it. Stores become fulfillment centers. Parking lots become pickup zones. The same scale that should calcify them is being repurposed. This is rare: usually physical assets become anchors. Walmart is making them accelerants.',
    keyNumbers: [
      'US stores: 4,700+',
      'E-commerce growth: 20%+ annually',
      'Walmart+ members: 25M+',
      'Pickup/delivery orders: 50%+ of e-commerce',
      'Same-day delivery reach: 80% of US',
      'Automation investment: $14B (3 years)',
    ],
    enablers: [
      'Physical footprint as fulfillment network',
      'Grocery anchor (65% of revenue)',
      'Advertising business ($4B+)',
      'McMillon leadership continuity',
      'Scale cost advantages',
    ],
    friction: [
      'Amazon competition',
      'Labor costs rising',
      'Store refresh capex',
      'International struggles',
      '2.1M employees to transform',
    ],
    quotable: 'Walmart is using its physical footprint as an advantage rather than fighting it. The same scale that should calcify them is being repurposed.',
  },

  'apple': {
    slug: 'apple',
    name: 'Apple',
    analysisDate: '2026-01-18',
    gpiScore: 4.30,
    state: 'Transitioning',
    ticker: 'AAPL',
    marketCap: '~$3.5T',
    employees: 164000,
    revenue: '$400B (FY2025)',
    founded: 1976,
    dimensions: [
      { dimension: 'Decision Latency', score: 4, explanation: 'Tim Cook runs tight ship. But iPhone dependency means careful iteration. Big bets are rare.' },
      { dimension: 'Error Correction', score: 4, explanation: 'Butterfly keyboard fixed (eventually). Car project killed after $10B. Slow but eventual.' },
      { dimension: 'Knowledge Location', score: 4, explanation: 'Functional org structure keeps knowledge in silos by design. Services group growing.' },
      { dimension: 'Structural Lock-In', score: 5, explanation: 'iPhone is 50%+ of revenue. Ecosystem lock-in is the business model.' },
      { dimension: 'Talent Flow', score: 4, explanation: 'Still attracts top talent. But "innovation" culture questioned. Jony Ive left.' },
      { dimension: 'Capital Intensity', score: 4, explanation: 'Capex is supplier-funded largely. Services high margin. Hardware supply chain mastery.' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'Silos by design limit cross-pollination. But integration is the product.' },
    ],
    pattern: 'Iteration Machine at the Crossroads',
    patternDescription: 'Apple perfected iterative improvement. Each iPhone slightly better. Each Mac slightly faster. But this machine struggles with category creation. The car is dead. The headset is niche. AI is late. When the core product (iPhone) saturates, the iteration machine needs a new target. Apple Intelligence is the bet.',
    keyNumbers: [
      'iPhone revenue: $200B+ annually',
      'Services revenue: $100B+ annually',
      'Installed base: 2.2B active devices',
      'R&D spend: $30B annually',
      'Gross margin: 45%+',
      'Car project cost: $10B (cancelled)',
    ],
    enablers: [
      'Ecosystem lock-in',
      'Services growth',
      'Brand premium',
      'Supply chain mastery',
      'Cash generation ($100B+ annually)',
    ],
    friction: [
      'iPhone saturation',
      'China market risk',
      'AI catch-up mode',
      'Regulatory pressure (App Store)',
      'Post-Jobs innovation questions',
    ],
    quotable: 'Apple perfected iterative improvement. But this machine struggles with category creation. When the core product saturates, the iteration machine needs a new target.',
  },

  'meta': {
    slug: 'meta',
    name: 'Meta',
    analysisDate: '2026-01-18',
    gpiScore: 4.25,
    state: 'Transitioning',
    ticker: 'META',
    marketCap: '~$1.4T',
    employees: 72000,
    revenue: '$160B (FY2025)',
    founded: 2004,
    dimensions: [
      { dimension: 'Decision Latency', score: 4, explanation: 'Zuckerberg controls. Can make big bets fast (Reality Labs). But org growing bureaucratic.' },
      { dimension: 'Error Correction', score: 4, explanation: '"Year of Efficiency" worked. Metaverse pivot adjusted (not abandoned). Threads launched fast.' },
      { dimension: 'Knowledge Location', score: 4, explanation: 'Zuckerberg-centric but pushing AI across org. Reality Labs siloed.' },
      { dimension: 'Structural Lock-In', score: 4, explanation: 'Ad model is the lock-in. But proven ability to pivot (mobile, Stories, Reels).' },
      { dimension: 'Talent Flow', score: 5, explanation: 'Layoffs reset. AI talent competitive with Google/OpenAI. Reality Labs brain drain.' },
      { dimension: 'Capital Intensity', score: 5, explanation: 'Reality Labs burns $15B+ annually. AI infrastructure massive. Ads fund everything.' },
      { dimension: 'Knowledge Velocity', score: 4, explanation: 'Open source strategy (Llama) spreads knowledge. But family of apps still somewhat siloed.' },
    ],
    pattern: 'The Expensive Pivot',
    patternDescription: 'Meta is betting $15B+ annually that the metaverse matters while simultaneously winning at AI. Zuckerberg has the control and cash to sustain expensive pivots. The "Year of Efficiency" proved the company can cut when needed. The question: is Reality Labs a visionary bet or an expensive distraction?',
    keyNumbers: [
      'Daily active users: 3.2B across apps',
      'Reality Labs losses: $15B+ annually',
      'AI capex: $40B+ (2025)',
      'Llama downloads: 700M+',
      'Headcount cut: 21,000 (2023)',
      'Revenue per employee: $2.2M',
    ],
    enablers: [
      'Ad business cash generation',
      'Zuckerberg control (voting shares)',
      'AI model leadership (Llama)',
      '3B+ user base',
      'Proven pivot ability',
    ],
    friction: [
      'Reality Labs cash burn',
      'TikTok competition (Reels)',
      'Regulatory overhang',
      'Apple ATT impact (recovering)',
      'Reputation/trust issues',
    ],
    quotable: 'Meta is betting $15B+ annually that the metaverse matters while simultaneously winning at AI. The "Year of Efficiency" proved the company can cut when needed.',
  },

  'microsoft': {
    slug: 'microsoft',
    name: 'Microsoft',
    analysisDate: '2026-01-18',
    gpiScore: 4.65,
    state: 'Transitioning',
    ticker: 'MSFT',
    marketCap: '~$3T',
    employees: 228000,
    revenue: '$260B (FY2025)',
    founded: 1975,
    dimensions: [
      { dimension: 'Decision Latency', score: 5, explanation: 'Nadella transformed culture but scale creates friction. Cloud decisions fast, legacy slower.' },
      { dimension: 'Error Correction', score: 4, explanation: 'Windows Phone killed. LinkedIn pivoted. Azure grew from internal need. Can correct, not always fast.' },
      { dimension: 'Knowledge Location', score: 5, explanation: '"One Microsoft" reduced silos but 228K employees means knowledge pockets.' },
      { dimension: 'Structural Lock-In', score: 5, explanation: 'Enterprise relationships are moat and lock-in. Office 365 stickiness. Azure switching costs.' },
      { dimension: 'Talent Flow', score: 4, explanation: 'AI talent competitive. Copilot team growing. But size means politics.' },
      { dimension: 'Capital Intensity', score: 5, explanation: 'Azure capex massive. But generates returns. Activision was $69B.' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'GitHub, LinkedIn data advantages. But cross-product integration still evolving.' },
    ],
    pattern: 'Conscious Mass Reduction',
    patternDescription: 'Nadella took a calcifying giant and made it move again. Not by shrinking but by changing the culture. "Growth mindset" replaced "know-it-all" culture. The OpenAI partnership was a company that knew it needed outside innovation. Microsoft proves mass does not have to mean slow if leadership actively fights entropy.',
    keyNumbers: [
      'Azure revenue: $100B+ run rate',
      'Office 365 subscribers: 400M+',
      'GitHub developers: 100M+',
      'OpenAI investment: $13B',
      'Copilot revenue: $10B+ run rate',
      'Gaming revenue: $25B+ (with Activision)',
    ],
    enablers: [
      'Azure growth engine',
      'OpenAI partnership',
      'Enterprise relationships',
      'Nadella leadership',
      'Copilot AI integration',
    ],
    friction: [
      '228K employees to align',
      'Cloud competition (AWS, Google)',
      'Antitrust (Activision scrutiny)',
      'OpenAI governance drama',
      'Legacy product maintenance',
    ],
    quotable: 'Nadella took a calcifying giant and made it move again. Not by shrinking but by changing the culture. Microsoft proves mass does not have to mean slow if leadership actively fights entropy.',
  },

  'alphabet': {
    slug: 'alphabet',
    name: 'Alphabet (Google)',
    analysisDate: '2026-01-18',
    gpiScore: 4.55,
    state: 'Transitioning',
    ticker: 'GOOGL',
    marketCap: '~$2T',
    employees: 180000,
    revenue: '$350B (FY2025)',
    founded: 1998,
    dimensions: [
      { dimension: 'Decision Latency', score: 5, explanation: 'Consensus culture slows decisions. AI competition forced faster movement. Gemini launched under pressure.' },
      { dimension: 'Error Correction', score: 4, explanation: 'Killed Google+ (eventually). Stadia dead. But many products linger. Gemini image issues fixed fast.' },
      { dimension: 'Knowledge Location', score: 4, explanation: 'Research talent strong. But AI researchers leaving for startups. Knowledge walks out door.' },
      { dimension: 'Structural Lock-In', score: 5, explanation: 'Search ads fund everything. YouTube locked in. Cloud growing but not dominant.' },
      { dimension: 'Talent Flow', score: 5, explanation: 'AI talent war with OpenAI, Anthropic (founders left Google). Still attracts but retention harder.' },
      { dimension: 'Capital Intensity', score: 5, explanation: 'AI infrastructure massive. YouTube content costs. But ads fund everything.' },
      { dimension: 'Knowledge Velocity', score: 4, explanation: 'Research published but productization slow. "Transformer" invented here, OpenAI commercialized it.' },
    ],
    pattern: 'The AI-Awakened Giant',
    patternDescription: 'Google invented the transformer architecture that powers ChatGPT. Then watched OpenAI commercialize it. This is the research-to-product gap that consensus culture creates. The AI threat woke them up. Gemini and AI integration are the response. The question: can a company this size move fast enough when the threat is existential?',
    keyNumbers: [
      'Search market share: 90%+',
      'YouTube daily views: 1B+ hours',
      'Cloud revenue: $40B+ annually',
      'AI researchers: 4,000+',
      'Transformer paper citations: 100,000+',
      'Antitrust fines (EU): $10B+ total',
    ],
    enablers: [
      'Search ads cash machine',
      'AI research depth',
      'YouTube moat',
      'Cloud growth',
      'Android ecosystem',
    ],
    friction: [
      'OpenAI/Microsoft threat',
      'Consensus culture',
      'Antitrust pressure',
      'AI talent departures',
      'Product graveyard reputation',
    ],
    quotable: 'Google invented the transformer architecture that powers ChatGPT. Then watched OpenAI commercialize it. This is the research-to-product gap that consensus culture creates.',
  },
};

export function getSnapshotBySlug(slug: string): CompanySnapshot | null {
  return snapshotsContent[slug.toLowerCase()] || null;
}

export function getSnapshotByName(name: string): CompanySnapshot | null {
  const slug = name.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  // Try direct match first
  if (snapshotsContent[slug]) return snapshotsContent[slug];

  // Try common variations
  const variations: Record<string, string> = {
    'warner-bros-discovery': 'wbd',
    'at-t': 'att',
    'procter-gamble': 'procter-gamble',
    'dicks-sporting-goods': 'dicks-sporting-goods',
  };

  if (variations[slug]) return snapshotsContent[variations[slug]] || null;

  // Search by name
  for (const snapshot of Object.values(snapshotsContent)) {
    if (snapshot.name.toLowerCase() === name.toLowerCase()) {
      return snapshot;
    }
  }

  return null;
}

export function getAllSnapshots(): CompanySnapshot[] {
  return Object.values(snapshotsContent);
}
