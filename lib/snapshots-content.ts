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
    analysisDate: '2026-06-08',
    gpiScore: 6.8,
    state: 'Transitioning (upper)',
    ticker: 'TSLA',
    marketCap: '~$800B',
    employees: 140000,
    revenue: '$97B (FY2025)',
    founded: 2003,
    dimensions: [
      { dimension: 'Decision Latency', score: 5, explanation: 'Tesla can still make big calls quickly when founder attention is close to the work. The problem is uneven speed: factory decisions and software pushes can move fast while broader company decisions wait for the signal.' },
      { dimension: 'Error Correction', score: 6, explanation: 'Manufacturing iteration is still real, and Q1 2026 deliveries recovered year over year. But Cybertruck delays, FSD promise gaps, vehicle inventory buildup, and aging core models show correction loops that take longer when the issue sits outside the factory floor.' },
      { dimension: 'Knowledge Location', score: 7, explanation: 'Too much important knowledge and judgment still concentrates around Musk. That gave Tesla force early. At this size, it creates a bottleneck.' },
      { dimension: 'Structural Lock-In', score: 8, explanation: 'Gigafactories, Superchargers, battery production, vehicle platforms, and robotaxi bets are heavy commitments. They give Tesla power, but they also make wrong turns expensive.' },
      { dimension: 'Talent Flow', score: 7, explanation: 'Tesla still attracts strong builders, but the operating style is polarizing. When talent leaves, the company loses more than headcount. It loses stored judgment.' },
      { dimension: 'Capital Intensity', score: 8, explanation: 'Factories, battery production, charging infrastructure, AI compute, robotaxi, Optimus, battery materials, and chip-fab ambitions require large bets before the market fully proves the answer.' },
      { dimension: 'Knowledge Velocity', score: 7, explanation: 'Over-the-air updates move knowledge into products quickly. But auto, energy, AI, and robotics do not always share learning cleanly across the company.' },
    ],
    pattern: 'Founder-Dependent Calcification',
    patternDescription: 'Tesla still moves with unusual force, but too much of that movement depends on founder attention. The company built speed by letting Musk override normal bureaucracy. That worked until Tesla became too large, too capital-heavy, and too exposed to wait on one person\'s signal. The 2025 and Q1 2026 numbers show both sides of the read: Tesla still has enormous operating power, but the company is carrying more simultaneous bets than one center of gravity can easily hold.',
    keyNumbers: [
      '2025 deliveries: 1,636,129 vehicles',
      'Q1 2026 deliveries: 358,023 vehicles',
      '2025 energy storage deployments: 46.7 GWh',
      'Q1 2026 revenue: $22.4B',
      'Q1 2026 Supercharger connectors: 79,918',
      'Musk time split: Tesla, SpaceX, xAI, X, Neuralink',
    ],
    enablers: [
      'Brand strength',
      'Supercharger network moat',
      'Manufacturing innovation (gigacasting)',
      'Software/OTA advantage',
      'Energy business growth',
    ],
    friction: [
      'Founder attention dependency',
      'China competition (BYD)',
      'AI, Robotaxi, Optimus, battery, and chip-fab commitments competing for capital and attention',
      '27 days of vehicle inventory in Q1 2026',
      'FSD and robotaxi execution risk',
      'Talent retention issues',
    ],
    quotable: 'Tesla is not slow. It is uneven. The company moves fast when founder attention is close to the work and slower when the system has to wait.',
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
    gpiScore: 5.2,
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
    gpiScore: 4.3,
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
    patternDescription: 'Meta is betting $15B+ annually on the metaverse while simultaneously winning at AI. Zuckerberg has the control and cash to sustain expensive pivots. The "Year of Efficiency" proved the company can cut when needed. The question: is Reality Labs a visionary bet or an expensive distraction?',
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
    quotable: 'Meta is betting $15B+ annually on the metaverse while simultaneously winning at AI. The "Year of Efficiency" proved the company can cut when needed.',
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

  'byd': {
    slug: 'byd',
    name: 'BYD',
    analysisDate: '2026-06-08',
    gpiScore: 3.8,
    state: 'Field',
    marketCap: '~$124B',
    employees: 968900,
    revenue: '$117.84B TTM',
    founded: 1995,
    dimensions: [
      { dimension: 'Decision Latency', score: 3, explanation: 'BYD can move model updates, battery changes, and factory ramps without waiting on one central heroic call. The decision path is closer to the work.' },
      { dimension: 'Error Correction', score: 3, explanation: 'When pure EV demand softened, BYD leaned into hybrids and overseas growth. The 2026 profit pressure is real, but the company adjusts through product flow, exports, and operating cadence instead of waiting for one rescue move.' },
      { dimension: 'Knowledge Location', score: 4, explanation: 'Vertical integration keeps knowledge inside the company, but not trapped in one person. Engineering, battery, and manufacturing knowledge reinforce each other.' },
      { dimension: 'Structural Lock-In', score: 4, explanation: 'BYD is integrated, but the integration is modular. Blade Battery, shared platforms, and retoolable factories make the structure lighter than it looks.' },
      { dimension: 'Talent Flow', score: 3, explanation: 'The company has a massive engineering base and keeps adding capacity. Overseas culture friction is real, but the core operating system still moves.' },
      { dimension: 'Capital Intensity', score: 4, explanation: 'BYD carries real manufacturing weight, and price wars are pressuring profit. But labor flexibility, modularity, platform reuse, and battery depth keep capital from turning into a cage.' },
      { dimension: 'Knowledge Velocity', score: 3, explanation: 'New models, battery updates, charging advances, and overseas ramps move quickly because the learning loop sits inside the operating system.' },
    ],
    pattern: 'Vertical Integration for Speed, Not Control',
    patternDescription: 'BYD put speed into the operating architecture. Batteries, factories, model updates, engineering depth, and modular integration reinforce each other instead of waiting for one heroic decision loop. The 2025 volume and overseas numbers are strong, but the Q1 2026 profit drop belongs in the read. The read is not that BYD is frictionless. The read is that BYD has more places inside the system where it can adjust.',
    keyNumbers: [
      '2025 sales: 4,602,436 vehicles',
      '2025 BEV sales: 2,256,714 vehicles',
      '2025 overseas sales: 1,046,083 vehicles, up about 151%',
      '2025 revenue: CNY 803.97B',
      'Q1 2026 net profit: CNY 4.09B, down 55.4%',
      '120,000 engineers',
    ],
    enablers: [
      'Vertical integration built for speed',
      'Blade Battery platform reuse',
      'Megawatt fast-charging (1,000kW)',
      'Global factory network: Thailand, Hungary, Turkey, Brazil',
      '$26.65B cumulative R&D investment',
    ],
    friction: [
      'China domestic market saturation',
      'Overseas management culture challenges (Glassdoor 3.0/5)',
      'EU/US tariff barriers and political risk',
      'Profit pressure from price wars and softer Q1 2026 earnings',
    ],
    quotable: 'BYD did not beat Tesla by being cheaper alone. It built an operating system that can keep updating while the market moves.',
  },

  'costco': {
    slug: 'costco',
    name: 'Costco',
    analysisDate: '2026-01-18',
    gpiScore: 3.85,
    state: 'Transitioning (lower)',
    ticker: 'COST',
    marketCap: '~$419B',
    employees: 341000,
    revenue: '$280.39B TTM',
    founded: 1983,
    dimensions: [
      { dimension: 'Decision Latency', score: 4, explanation: 'Matrix structure with centralized strategy but regional autonomy. CEO engages directly with frontline.' },
      { dimension: 'Error Correction', score: 4, explanation: 'Core model works, so no dramatic pivots needed. AI demand forecasting saved $100M in bakery waste.' },
      { dimension: 'Knowledge Location', score: 3, explanation: '76% managers promoted from within. 6% turnover compounds knowledge. 98%+ in-stock levels.' },
      { dimension: 'Structural Lock-In', score: 4, explanation: '876+ warehouses is significant footprint, but model is simple and replicable. Kirkland gives supply chain control.' },
      { dimension: 'Talent Flow', score: 3, explanation: 'Superpower: 6-8% turnover vs 60% industry. 94% retention after year one. 76% managers started hourly.' },
      { dimension: 'Capital Intensity', score: 5, explanation: 'Massive physical footprint (150K sq ft warehouses). But $822K revenue/employee shows efficiency.' },
      { dimension: 'Knowledge Velocity', score: 4, explanation: 'AI provides real-time inventory signals. Digital wallet increased checkout speeds 20%.' },
    ],
    pattern: 'The Sufficiency Model at Scale',
    patternDescription: 'Costco demonstrates that not every company needs constant transformation. When your model works, when employees stay, when customers return, when margins are healthy, the goal is not disruption but disciplined execution. This is the anti-transformation case study, proving that cultural infrastructure can be more durable than technological infrastructure.',
    keyNumbers: [
      '876+ warehouses globally',
      '6% employee turnover (vs 60% industry)',
      '76% managers promoted from within',
      '60%+ domestic warehouse club market share',
      '$822K revenue per employee',
      'Glassdoor: 3.9/5.0, 72% recommend',
    ],
    enablers: [
      'Industry-leading employee retention',
      '76% internal promotion preserves culture',
      'AI demand forecasting saves $100M+',
      'Simple, replicable model',
      'Kirkland private label control',
      'Membership model creates loyalty',
    ],
    friction: [
      'Centralized strategic decision-making',
      '876+ warehouse footprint creates capital intensity',
      'Matrix structure adds layers',
      'Physical retail limits full digital pivot',
    ],
    quotable: 'When your turnover is 6% in an industry averaging 60%, you are not stuck in the past. You have found something others cannot replicate.',
  },

  'intel': {
    slug: 'intel',
    name: 'Intel',
    analysisDate: '2026-01-20',
    gpiScore: 7.0,
    state: 'Particle',
    ticker: 'INTC',
    marketCap: '~$242B',
    employees: 88400,
    revenue: '$53.43B TTM',
    founded: 1968,
    dimensions: [
      { dimension: 'Decision Latency', score: 7, explanation: 'CEO forced out Dec 2024, interim co-CEO structure creates friction, years late to AI wave.' },
      { dimension: 'Error Correction', score: 7, explanation: '35,500 layoffs as primary adaptation instead of strategic pivots. Failed to kill underperforming bets early.' },
      { dimension: 'Knowledge Location', score: 6, explanation: 'Engineering expertise siloed from market decisions. NVIDIA partnership needed for AI knowledge.' },
      { dimension: 'Structural Lock-In', score: 8, explanation: 'Massive fab infrastructure ($10-20B per fab), cannot pivot to fabless model.' },
      { dimension: 'Talent Flow', score: 6, explanation: 'No raises for 1.5 years, benefits cut, survivor anxiety from 32% headcount reduction.' },
      { dimension: 'Capital Intensity', score: 9, explanation: 'Semiconductor fabs among most capital-intensive businesses. $10-20B per fab.' },
      { dimension: 'Knowledge Velocity', score: 6, explanation: 'Engineering can ship, but strategic knowledge filtered. Interim structure adds handoffs.' },
    ],
    pattern: 'Mass as Destiny',
    patternDescription: 'Intel spent decades accumulating organizational and capital mass that once ensured dominance but now ensures inertia. The company cannot abandon its fabs, cannot match NVIDIA AI ecosystem, and cannot stop cutting people. Even if Intel builds the best chip, it arrives years after the market already chose NVIDIA for AI and TSMC for manufacturing.',
    keyNumbers: [
      '35,500 layoffs in less than 2 years',
      '$5B NVIDIA partnership',
      '18A process ahead of TSMC 2nm',
      'Forward P/E: 108.68 (priced for perfection)',
      'No raises for 1.5 years',
      'Interim co-CEO structure',
    ],
    enablers: [
      '18A Process lead over TSMC',
      'NVIDIA Partnership creates AI access',
      'Core Ultra Series 3 competitive',
      'US Manufacturing government support',
      'Stock momentum (130% gain)',
    ],
    friction: [
      'Layoffs as primary adaptation',
      'CEO forced out, interim structure',
      'No raises for 1.5 years',
      'Massive capital lock-in ($10-20B per fab)',
      'Missed mobile, GPUs, AI markets',
      'Benefits clawed back',
    ],
    quotable: 'Intel sits at 7.0, the exact threshold where organizations cross from transitioning to particle. The direction of travel is clear.',
  },

  'ups': {
    slug: 'ups',
    name: 'UPS',
    analysisDate: '2026-01-16',
    gpiScore: 6.8,
    state: 'Transitioning (upper)',
    ticker: 'UPS',
    marketCap: '~$92B',
    employees: 490000,
    revenue: '$89.5B TTM',
    founded: 1907,
    dimensions: [
      { dimension: 'Decision Latency', score: 7, explanation: '28 committees previously involved in funding decisions. Functional structure with centralized control.' },
      { dimension: 'Error Correction', score: 6, explanation: 'Amazon dependency persisted for years before aggressive correction. Layoffs as primary adaptation.' },
      { dimension: 'Knowledge Location', score: 6, explanation: 'Heavy AI investment (ORION, digital twins). But 119 years of institutional knowledge lives in people.' },
      { dimension: 'Structural Lock-In', score: 8, explanation: '$9B automation commitment. 490,000 employees with 5-year union contract. Massive physical infrastructure.' },
      { dimension: 'Talent Flow', score: 6, explanation: 'Strong promote-from-within culture. But union seniority rewards tenure over skill.' },
      { dimension: 'Capital Intensity', score: 9, explanation: 'Extremely capital-intensive: physical logistics network, $9B automation, union wage commitments.' },
      { dimension: 'Knowledge Velocity', score: 6, explanation: 'ORION provides real-time route optimization. But scale creates lag.' },
    ],
    pattern: 'Layoffs as Transformation',
    patternDescription: 'UPS is attempting transformation through subtraction rather than metabolic change. Cut 48,000 jobs. Close 200 facilities. Reduce Amazon volume by 50%. The assumption: shrink the particle mass and what remains will be nimbler. The problem: the underlying metabolism has not changed. They are making a smaller particle, not a field.',
    keyNumbers: [
      '48,000+ jobs cut in 2025',
      '200 facilities closing by 2028',
      '$9B automation investment',
      '340,000 Teamsters members',
      '50%+ Amazon volume reduction',
      'Market cap down 14% YoY',
    ],
    enablers: [
      'Carol Tomé as first external CEO',
      '"Better not bigger" strategy',
      '$9B automation modernizes operations',
      'ORION and AI tools',
      'Reducing Amazon dependency',
    ],
    friction: [
      '5-year Teamsters contract through 2028',
      '119 years of institutional culture',
      'Physical infrastructure path dependency',
      'Functional org structure maintains silos',
      'Layoffs creating knowledge loss',
    ],
    quotable: 'UPS is cutting 48,000 jobs but not changing how decisions get made. They are shrinking the particle, not transforming it.',
  },

  'fedex': {
    slug: 'fedex',
    name: 'FedEx',
    analysisDate: '2026-01-18',
    gpiScore: 5.8,
    state: 'Transitioning',
    ticker: 'FDX',
    marketCap: '~$73.9B',
    employees: 500000,
    revenue: '$88.6B TTM',
    founded: 1971,
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: 'Only 2nd CEO ever, 500K employees, multi-year transformation timelines.' },
      { dimension: 'Error Correction', score: 5, explanation: 'Network 2.0 closing 30% facilities, but layoffs as primary mechanism.' },
      { dimension: 'Knowledge Location', score: 5, explanation: '2 petabytes data, digital twin, but "miscommunication" in Glassdoor.' },
      { dimension: 'Structural Lock-In', score: 7, explanation: 'Decades of Express/Ground separation, massive physical infrastructure.' },
      { dimension: 'Talent Flow', score: 6, explanation: 'CEO rose internally, 57% recommend, but "too many managers."' },
      { dimension: 'Capital Intensity', score: 7, explanation: 'Double UPS aircraft, extensive warehouses, actively rightsizing.' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: '100B transactions, real-time tracking, but org hierarchy slows flow.' },
    ],
    pattern: 'Transformation Through Separation',
    patternDescription: 'FedEx is becoming more unified by splitting apart. The Freight spin-off removes a business model mismatch, while Network 2.0 finally integrates Express and Ground. The parallel separation-and-integration approach is a bet that you can lower GPI by removing what does not belong while unifying what should have been together all along.',
    keyNumbers: [
      'Freight spin-off: June 1, 2026',
      'Network 2.0: closing 30% distribution centers',
      'DRIVE program: $4B cost reductions by FY2027',
      '40%+ sortation automated',
      '100B+ transactions/year',
      'Only 2nd CEO in history',
    ],
    enablers: [
      'Network 2.0 integrating Express and Ground',
      'DRIVE program on track for $4B savings',
      '40%+ sortation automation',
      'Freight spin-off removing mismatch',
      'Stock outperforming UPS',
    ],
    friction: [
      'Layoffs as primary error correction',
      'Decades of Express/Ground cultural silos',
      'Massive physical infrastructure',
      '"Too many managers" in reviews',
      'Founder culture persists',
    ],
    quotable: 'FedEx at 5.8 sits exactly 1.0 point below UPS at 6.8, and the gap explains the stock performance difference.',
  },

  'target': {
    slug: 'target',
    name: 'Target',
    analysisDate: '2026-01-18',
    gpiScore: 5.3,
    state: 'Transitioning',
    ticker: 'TGT',
    marketCap: '~$50B',
    employees: 440000,
    revenue: '$105.24B TTM',
    founded: 1902,
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: 'Too many layers and overlapping work slowed decisions per CEO diagnosis. Managers cut 3x harder than ICs.' },
      { dimension: 'Error Correction', score: 5, explanation: 'Using layoffs as blunt error correction. 18 months of paralysis before action.' },
      { dimension: 'Knowledge Location', score: 5, explanation: 'Store Companion GenAI and ChatGPT Enterprise pushing knowledge out, but corporate silos persist.' },
      { dimension: 'Structural Lock-In', score: 5, explanation: '2,000 stores create rigidity, but stores-as-hubs strategy provides omnichannel flexibility.' },
      { dimension: 'Talent Flow', score: 5, explanation: 'Fiddelke 22-year intern-to-CEO shows mobility possible. Glassdoor 3.4/5 shows favoritism complaints.' },
      { dimension: 'Capital Intensity', score: 6, explanation: '$5B annual capex, 2,000 stores, stock down 50%+ from all-time high.' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'AI investments accelerating flow, but 18 months struggling with obvious problems.' },
    ],
    pattern: 'Cutting Through the Cheap Chic',
    patternDescription: 'Target represents the mid-GPI retailer that built its brand on being faster and more stylish than Walmart, but allowed organizational complexity to erode that advantage. Growth creates complexity, complexity slows response, and eventually the only visible lever is headcount reduction.',
    keyNumbers: [
      '1,800 corporate roles cut (8% of HQ)',
      'Stock down 50%+ from 2021 high',
      '2,000 stores nationwide',
      'ChatGPT Enterprise to 18,000 employees',
      'Managers cut 3x harder than ICs',
      'CEO transition: Fiddelke taking over Feb 2026',
    ],
    enablers: [
      'Store Companion GenAI to all stores',
      'ChatGPT Enterprise (92% satisfaction)',
      'Stores-as-hubs omnichannel flexibility',
      'Fiddelke succession showing mobility',
      '$5B capital investment plan',
    ],
    friction: [
      '18 months of decision paralysis',
      'Too many layers and overlapping work',
      'Middle management bloat',
      'Stock down 50%+ from all-time high',
      'Using layoffs as primary correction',
    ],
    quotable: 'The complexity we have created over time has been holding us back. Too many layers and overlapping work have slowed decisions.',
  },

  'ford': {
    slug: 'ford',
    name: 'Ford',
    analysisDate: '2026-01-19',
    gpiScore: 5.9,
    state: 'Transitioning',
    ticker: 'F',
    marketCap: '~$55B',
    employees: 171000,
    revenue: '$189.6B TTM',
    founded: 1903,
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: 'Traditional hierarchy with 171K employees creates inertia, took years of EV losses to pivot.' },
      { dimension: 'Error Correction', score: 5, explanation: 'Lost $13B on EVs before course-correcting, layoffs as primary adaptation mechanism.' },
      { dimension: 'Knowledge Location', score: 5, explanation: 'New vehicle brain centralizing systems, but "who you know" culture persists.' },
      { dimension: 'Structural Lock-In', score: 7, explanation: '$19.5B pivot charge shows enormous switching costs, UAW contracts limit flexibility.' },
      { dimension: 'Talent Flow', score: 6, explanation: '8+ years to Supervisor, RTO mandate bungled, declining Glassdoor rating.' },
      { dimension: 'Capital Intensity', score: 8, explanation: 'Massive manufacturing footprint, $176B enterprise value, pivots cost billions.' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'AI assistant and telematics improving flow, but years of EV losses before correction.' },
    ],
    pattern: 'Stranded Capacity',
    patternDescription: 'Ford built factories, hired workers, and invested billions for an EV future that did not arrive on schedule. Now the company has stranded capacity at facilities designed for high EV volumes, stranded talent in the form of laid-off workers, and stranded capital in the form of $19.5B in write-downs.',
    keyNumbers: [
      'Model e losses: $13B since 2023',
      '$19.5B special charges for pivot',
      'Hybrid sales up 22% YoY',
      'EV sales down 14% YoY',
      'F-Series: 828,832 units (best-selling truck)',
      '11,000 layoffs in 2025',
    ],
    enablers: [
      'Jim Farley decisive leadership',
      'New in-house vehicle brain architecture',
      'AI assistant to 8M customers',
      'Strong hybrid sales momentum',
      'F-Series cash flow stability',
    ],
    friction: [
      'Stranded EV capacity',
      'Multi-year layoff cycle (11,000+ more projected)',
      'UAW contracts constraining flexibility',
      'RTO mandate bungled',
      '"Who you know" culture persisting',
    ],
    quotable: 'Ford is correcting, but through headcount cuts rather than process changes. Even a 122-year-old company can move fast enough to bet on the future, but a capital-intensive manufacturer cannot pivot without massive financial pain.',
  },

  'blockbuster': {
    slug: 'blockbuster',
    name: 'Blockbuster',
    analysisDate: '2026-01-19',
    gpiScore: 8.55,
    state: 'Particle (Dead)',
    employees: 84300,
    revenue: '$6.1B (Peak 2004)',
    founded: 1985,
    dimensions: [
      { dimension: 'Decision Latency', score: 9, explanation: '6 years to respond to Netflix. Rejected $50M acquisition in 2000. Board politics killed online pivot in 2007.' },
      { dimension: 'Error Correction', score: 9, explanation: 'Unprofitable since 1997. Knew Netflix threat for decade. Shut down Total Access when it was winning.' },
      { dimension: 'Knowledge Location', score: 8, explanation: '9,000 stores, zero field intelligence reaching HQ. CEO laughed at Netflix offer.' },
      { dimension: 'Structural Lock-In', score: 9, explanation: 'Physical stores with leases. $900M debt. Late fees as revenue model could not be eliminated.' },
      { dimension: 'Talent Flow', score: 7, explanation: 'Antioco trying to adapt, Icahn ousted him. Keyes doubled down on brick-and-mortar.' },
      { dimension: 'Capital Intensity', score: 9, explanation: 'Massive physical infrastructure. Netflix digital, Blockbuster locked in atoms.' },
      { dimension: 'Knowledge Velocity', score: 8, explanation: 'Management did not understand streaming. 6 years behind market.' },
    ],
    pattern: 'The Textbook GPI Death',
    patternDescription: 'Blockbuster is the textbook GPI death. Success creates rigidity: 9,000 stores became 9,000 anchors. Late fees were margin: 16% of revenue from customer friction. Board politics killed adaptation: Antioco was right, got fired anyway. Debt accelerated death: $900M made pivoting impossible.',
    keyNumbers: [
      'Peak stores: 9,094 (2004)',
      'Late fees: $800M (16% of revenue)',
      'Rejected $50M Netflix offer (2000)',
      'Sold to Dish for $320M (2011)',
      'Debt at spinoff: $905M',
      'Time to respond to Netflix: 6 years',
    ],
    enablers: [
      'None remaining',
    ],
    friction: [
      '6 years to respond to Netflix',
      '$50M acquisition rejection',
      'Board politics (Icahn ousting Antioco)',
      '$900M debt load',
      '9,000 physical stores with leases',
      'Late fees as revenue dependency',
    ],
    quotable: 'Blockbuster GPI crossed 7.0 around 2004. They were dead. They just did not know it yet. The financials said healthy. The GPI said hospice.',
  },

  'comcast': {
    slug: 'comcast',
    name: 'Comcast',
    analysisDate: '2026-01-16',
    gpiScore: 6.95,
    state: 'Transitioning (upper)',
    ticker: 'CMCSA',
    marketCap: '~$172B',
    employees: 182000,
    revenue: '$124B',
    dimensions: [
      { dimension: 'Decision Latency', score: 7, explanation: 'Family control creates structural bottleneck, 894 executives.' },
      { dimension: 'Error Correction', score: 6, explanation: 'Versant spinoff shows adaptation, but took years.' },
      { dimension: 'Knowledge Location', score: 6, explanation: 'Siloed business units, internal confusion.' },
      { dimension: 'Structural Lock-In', score: 9, explanation: 'Massive cable infrastructure, theme parks, studios.' },
      { dimension: 'Talent Flow', score: 6, explanation: 'Boys club culture, wage compression, offshoring.' },
      { dimension: 'Capital Intensity', score: 9, explanation: 'Infrastructure-heavy, continuous capital demands.' },
      { dimension: 'Knowledge Velocity', score: 6, explanation: 'Legacy systems, fragmented analytics.' },
    ],
    pattern: 'Controlled Decay',
    patternDescription: 'Comcast is managing decline rather than driving transformation. The Versant spinoff is not innovation. It is amputation: cutting off the gangrenous limb (declining cable networks) to save the body (broadband + streaming). This is a valid survival strategy but it is not transformation.',
    keyNumbers: [
      '894 executives',
      'Brian Roberts: 33% voting control, CEO since 2002',
      'Four years of layoffs',
      '182,000 employees across silos',
      'Versant spinoff removing cable networks',
    ],
    enablers: [
      'Versant spinoff shedding calcified assets',
      'Peacock streaming platform',
      'Broadband infrastructure valuable',
      'Universal Studios content library',
      'Strong cash flow',
    ],
    friction: [
      'Family control creates bottleneck',
      '182,000 employees across silos',
      'Legacy cable demands continuous capital',
      'Four years of layoffs damage knowledge',
      'Boys club culture limits mobility',
    ],
    quotable: 'When one person controls 33% of voting power, the organization metabolism is bounded by that person decision speed and risk tolerance.',
  },

  'progressive': {
    slug: 'progressive',
    name: 'Progressive',
    analysisDate: '2026-01-19',
    gpiScore: 3.85,
    state: 'Transitioning (lower)',
    ticker: 'PGR',
    marketCap: '~$127B',
    employees: 66308,
    revenue: '$85.2B TTM',
    founded: 1937,
    dimensions: [
      { dimension: 'Decision Latency', score: 4, explanation: 'CEO rose from claims rep to CEO; 3-year strategic cycles; 80 executives suggest some layers.' },
      { dimension: 'Error Correction', score: 4, explanation: 'AI delivers 15% faster claims, 9% better pricing; but uses layoffs as adaptation.' },
      { dimension: 'Knowledge Location', score: 3, explanation: '14B+ miles of data in ML systems; 6+ bots democratize access; data flows through systems not fiefdoms.' },
      { dimension: 'Structural Lock-In', score: 4, explanation: 'Three clear segments allow focused adaptation; digital-first approach; but 66K employees create structural weight.' },
      { dimension: 'Talent Flow', score: 5, explanation: 'CEO story is powerful but Glassdoor cites limited advancement paths; external hires favored for business roles.' },
      { dimension: 'Capital Intensity', score: 3, explanation: 'Asset-light insurance model; no factories; $2.2B ICT spend is digital-focused and scalable.' },
      { dimension: 'Knowledge Velocity', score: 4, explanation: 'Real-time Snapshot data; AI photo damage assessment; but 3-year planning cycles slow some flow.' },
    ],
    pattern: 'Data as Moat',
    patternDescription: 'Progressive turned a commodity business into a technology play by betting early on telematics. While competitors priced risk using demographic tables, Progressive built a 14-billion-mile dataset that continuously improves its pricing accuracy. The company proves that even in a legacy industry, whoever owns the data owns the market.',
    keyNumbers: [
      'Snapshot: 14B+ miles collected',
      '9% more accurate risk pricing',
      '15% faster claims with AI',
      '#2 U.S. auto insurer',
      '$2.2B annual ICT spending',
      'Glassdoor: 3.9/5.0, 75% recommend',
    ],
    enablers: [
      'Snapshot telematics: 14B+ miles',
      '9% pricing accuracy advantage',
      'AI-powered claims (15% faster)',
      'CEO with 36-year tenure',
      '$2.2B annual ICT investment',
    ],
    friction: [
      'Processing outsourcing to India',
      'Micromanagement culture',
      'Limited career advancement paths',
      'External hires favored',
      '20% of Snapshot users see rate increases',
    ],
    quotable: 'Progressive proves you can be a legacy insurer and still move like a tech company, with 14 billion miles of telematics data powering real-time risk assessment.',
  },

  'salesforce': {
    slug: 'salesforce',
    name: 'Salesforce',
    analysisDate: '2026-01-20',
    gpiScore: 4.35,
    state: 'Transitioning',
    ticker: 'CRM',
    marketCap: '~$224B',
    employees: 72682,
    revenue: '$40.31B TTM',
    founded: 1999,
    dimensions: [
      { dimension: 'Decision Latency', score: 5, explanation: 'Quarterly product releases show cadence but 72,682 employees create layers. CEO deeply involved indicates centralized authority.' },
      { dimension: 'Error Correction', score: 4, explanation: 'Fast pivot to Agentforce ($540M ARR, 330% growth) shows adaptation. However, 5,000 layoffs and $330M restructuring.' },
      { dimension: 'Knowledge Location', score: 4, explanation: 'Agentforce encoding 3.2 trillion tokens shows distributed knowledge systems. But Glassdoor mentions siloed divisions.' },
      { dimension: 'Structural Lock-In', score: 5, explanation: 'SaaS model allows product pivots, but 72,682 employees across multiple clouds create complexity.' },
      { dimension: 'Talent Flow', score: 5, explanation: 'Internal mobility possible when mandated (4,000 support to sales). Glassdoor concerns about promotion transparency.' },
      { dimension: 'Capital Intensity', score: 3, explanation: 'Pure SaaS, asset-light. $40.3B revenue without physical assets. Can pivot without stranded capital.' },
      { dimension: 'Knowledge Velocity', score: 4, explanation: 'AI dashboards and quarterly releases show regular but not real-time information flow.' },
    ],
    pattern: 'AI as Operating System Upgrade',
    patternDescription: 'Salesforce is betting that AI agents can reduce organizational friction faster than traditional restructuring. Instead of removing layers, the company is automating through them. The question is whether you can code your way around calcification without addressing the organizational mass creating it.',
    keyNumbers: [
      'Agentforce: 3.2 trillion tokens processed',
      'Agentforce ARR: $540M (330% growth)',
      '21.7% global CRM market share',
      '150,000+ customers',
      '5,000 layoffs in 2025',
      '$330M restructuring budget',
    ],
    enablers: [
      'Agentforce platform (3.2T tokens, $540M ARR)',
      'SaaS architecture enabling rapid pivots',
      'Workforce rebalancing capability',
      '21.7% CRM market share',
      'Strong employer brand (4.1/5 Glassdoor)',
    ],
    friction: [
      '72,682 employees creating latency',
      'Layoffs as primary adaptation',
      'Glassdoor: bureaucracy, constant pivoting',
      'Product division silos',
      'Centralized decision authority',
    ],
    quotable: 'Salesforce is trying to become fluid by teaching software to navigate particle behavior. You cannot automate around approval chains if those chains still control budget and strategy.',
  },

  'home-depot': {
    slug: 'home-depot',
    name: 'Home Depot',
    analysisDate: '2026-01-18',
    gpiScore: 4.65,
    state: 'Transitioning',
    ticker: 'HD',
    marketCap: '~$378B',
    employees: 470100,
    revenue: '$166.18B TTM',
    founded: 1978,
    dimensions: [
      { dimension: 'Decision Latency', score: 5, explanation: 'Bold strategic moves ($18.25B SRS acquisition, Google AI partnership) but scale creates implementation lag.' },
      { dimension: 'Error Correction', score: 4, explanation: 'Pivoting from DIY to pro market, actively restructuring supply chain, closing underperforming DCs.' },
      { dimension: 'Knowledge Location', score: 4, explanation: 'Heavy AI investment (Magic Apron, Gemini Enterprise, Rilla coaching) but channel silos persist.' },
      { dimension: 'Structural Lock-In', score: 5, explanation: '4,300+ physical locations but using M&A (SRS, GMS) to add modular capabilities.' },
      { dimension: 'Talent Flow', score: 5, explanation: 'CEO promoted from within (20 years), good Glassdoor scores, but frontline stress on hours.' },
      { dimension: 'Capital Intensity', score: 6, explanation: 'Highly capital intensive but deploying aggressively on transformation.' },
      { dimension: 'Knowledge Velocity', score: 4, explanation: 'Real-time AI coaching scaling nationally, but retail cycles create natural limits.' },
    ],
    pattern: 'Scale as Transformation Platform',
    patternDescription: 'Home Depot demonstrates that massive scale can be leveraged for transformation rather than being a barrier to it. Where most retailers calcify, Home Depot uses scale to make bold bets: the largest acquisition in company history, first-mover AI deployments, and aggressive supply chain restructuring.',
    keyNumbers: [
      'SRS acquisition: $18.25B',
      '4,300+ locations (stores + SRS)',
      'Pro business: 50% of revenue',
      'TAM expanded $50B via SRS',
      'Glassdoor: 3.8/5.0, 71% recommend',
      'Stock down 11% YTD 2025 (housing headwinds)',
    ],
    enablers: [
      'Google Cloud AI partnership (Gemini Enterprise)',
      'Magic Apron AI scaling nationally',
      'SRS acquisition expanding pro reach',
      'CEO Ted Decker with 20 years context',
      'Pro business at 50% diversifies from DIY',
    ],
    friction: [
      'Housing market headwinds',
      '4,300+ physical locations create inertia',
      'Public market pressure during downturn',
      'Integration complexity from acquisitions',
      'Frontline workforce stress',
    ],
    quotable: 'Scale does not have to mean calcification. Home Depot is proving that culture and strategy can outrun size.',
  },

  'gm': {
    slug: 'gm',
    name: 'General Motors',
    analysisDate: '2026-01-19',
    gpiScore: 5.9,
    state: 'Transitioning',
    ticker: 'GM',
    marketCap: '~$76B',
    employees: 162000,
    revenue: '$187.4B',
    founded: 1908,
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: 'Glassdoor cites "approval from multiple teams for small changes," but Barra consolidated leadership enables strategic pivots.' },
      { dimension: 'Error Correction', score: 5, explanation: 'Taking $7.6B in EV write-downs shows adaptation, but relies on layoffs rather than process change.' },
      { dimension: 'Knowledge Location', score: 5, explanation: 'Building "data factory" with NVIDIA digital twins, but four brand divisions create natural silos.' },
      { dimension: 'Structural Lock-In', score: 7, explanation: '116-year legacy, billions in factory infrastructure, $7.6B write-down shows cost of direction change.' },
      { dimension: 'Talent Flow', score: 6, explanation: 'UAW structure limits flexibility, Glassdoor shows "declining trust in leadership."' },
      { dimension: 'Capital Intensity', score: 8, explanation: 'Manufacturing requires massive physical assets, every pivot costs billions.' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'Ultifi platform enables OTA updates, but "lack of transparency" persists per Glassdoor.' },
    ],
    pattern: 'The Detroit Paradox',
    patternDescription: 'GM is simultaneously too big to pivot quickly and too profitable to fail slowly. Record profits ($14.9B), record stock (+55%), and U.S. sales leadership mean no burning platform forces transformation. Yet $7.6B in EV write-downs reveals the cost of moving slower than the market.',
    keyNumbers: [
      'EV write-downs: $7.6B in 2025',
      'EV sales: 169,887 units (+48% YoY)',
      'ICT spending: $10.9B annually',
      'Stock: +55% in 2025',
      '2024 profit: $14.9B (record)',
      '116 years old',
    ],
    enablers: [
      'Mary Barra leadership continuity',
      '$10.9B annual ICT spending',
      'Ultifi software platform',
      'Google Gemini integration (2026)',
      'Record profitability provides capital',
    ],
    friction: [
      '116-year legacy creating lock-in',
      '162,000 employees and four divisions',
      'UAW union structure limiting flexibility',
      'Capital intensity: every pivot costs billions',
      'Reliance on layoffs as adaptation',
    ],
    quotable: 'The Detroit Paradox: too big to pivot quickly, too profitable to fail slowly.',
  },

  'ibm': {
    slug: 'ibm',
    name: 'IBM',
    analysisDate: '2026-01-20',
    gpiScore: 6.35,
    state: 'Transitioning (upper)',
    ticker: 'IBM',
    marketCap: '~$285B',
    employees: 270300,
    revenue: '$65.4B TTM',
    founded: 1911,
    dimensions: [
      { dimension: 'Decision Latency', score: 7, explanation: 'Layoffs in small chunks to avoid WARN act, multiple management layers across 270K+ employees.' },
      { dimension: 'Error Correction', score: 6, explanation: 'Using layoffs as primary adaptation (9,000 cuts), but AI business doubled.' },
      { dimension: 'Knowledge Location', score: 6, explanation: 'Siloed divisions visible in names (SoftLayer, Neudesic, Cloud Classic vs new Cloud).' },
      { dimension: 'Structural Lock-In', score: 7, explanation: '115 years old, still integrating $34B Red Hat, cannot sunset Cloud Classic cleanly.' },
      { dimension: 'Talent Flow', score: 7, explanation: '25% cut rate in Cloud Classic, forever layoffs pattern, relocation disguised as policy.' },
      { dimension: 'Capital Intensity', score: 5, explanation: 'Mixed model: software/consulting (asset-light) vs infrastructure (asset-heavy). $15B+ FCF.' },
      { dimension: 'Knowledge Velocity', score: 6, explanation: '270K employees and siloed divisions slow info flow, org changes via manager invites.' },
    ],
    pattern: 'Buying Speed You Cannot Build',
    patternDescription: 'IBM is trying to purchase transformation velocity through acquisitions ($34B Red Hat, $11B Confluent) and AI platforms rather than reducing the organizational mass that slows everything down. The pattern repeats: buy the new thing, run it in parallel with the old thing, cut the old thing headcount slowly, declare progress.',
    keyNumbers: [
      'AI business: $9.5B (doubled from $5B)',
      'Red Hat acquisition: $34B',
      'Confluent acquisition: $11B (mid-2026)',
      '9,000 layoffs announced',
      '115 years old',
      'Market cap +40.57% in one year',
    ],
    enablers: [
      'AI business doubled from $5B to $9.5B',
      'Watsonx AI platform gaining traction',
      '$11B Confluent acquisition',
      '$15B+ free cash flow',
      'Arvind Krishna focus on cloud/AI',
    ],
    friction: [
      'Forever layoffs: 9,000 cuts avoiding WARN act',
      'Cloud Classic vs new Cloud structure',
      'Siloed divisions creating barriers',
      '$34B Red Hat integration still ongoing',
      '115 years of technical debt',
    ],
    quotable: 'You can buy agility but you cannot build it when you are carrying 115 years of mass.',
  },

  'oracle': {
    slug: 'oracle',
    name: 'Oracle',
    analysisDate: '2026-01-20',
    gpiScore: 6.4,
    state: 'Transitioning (upper)',
    ticker: 'ORCL',
    marketCap: '~$549B',
    employees: 162000,
    revenue: '$61.01B TTM',
    founded: 1977,
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: 'Co-CEO structure adds coordination overhead. Restructuring only 50% spent after six months.' },
      { dimension: 'Error Correction', score: 7, explanation: 'Layoffs as primary adaptation (10,000-20,000 cuts). Three waves instead of strategic pivots.' },
      { dimension: 'Knowledge Location', score: 5, explanation: '600+ AI agents suggest distributed knowledge. But 162,000 employees with acquisition debt create silos.' },
      { dimension: 'Structural Lock-In', score: 7, explanation: '$50B capex commits to infrastructure path. Cannot exit legacy on-premises.' },
      { dimension: 'Talent Flow', score: 6, explanation: 'Layoffs via Zoom destroy trust. Command-and-control limits mobility. 68% recommendation rate.' },
      { dimension: 'Capital Intensity', score: 8, explanation: '$50B projected capex is extreme. $500B joint venture with OpenAI/SoftBank.' },
      { dimension: 'Knowledge Velocity', score: 6, explanation: 'Fast in product (817% multicloud growth). Slow in org (restructuring execution).' },
    ],
    pattern: 'Infrastructure Arms Race',
    patternDescription: 'Oracle is betting its future on a capital-intensive infrastructure buildout to compete with hyperscalers, precisely when organizational mass makes strategic pivots nearly impossible. The company that built its empire on flexible database software is now locked into a $50B annual capex commitment.',
    keyNumbers: [
      'Capex: $50B projected for FY2026',
      'Layoffs: 10,000-20,000 in 2026',
      'OpenAI partnership: $500B joint venture',
      'IaaS growth: 68%',
      'Multicloud database: +817% YoY',
      'Cloud revenue: $8B (up 34%)',
    ],
    enablers: [
      '600+ AI agents deployed',
      '$300B OpenAI commitment',
      'IaaS growth at 68%',
      'Database 26ai innovation',
      '$523B performance obligations',
    ],
    friction: [
      'Layoffs as primary adaptation (10K-20K cuts)',
      '$50B capex locks into infrastructure path',
      'Command-and-control culture',
      'Cannot exit legacy on-premises',
      'Acquisition integration debt',
    ],
    quotable: 'Oracle is spending $50 billion on infrastructure while laying off 20,000 people. That is not transformation. That is trading one rigidity for another.',
  },

  'att': {
    slug: 'att',
    name: 'AT&T',
    analysisDate: '2026-01-16',
    gpiScore: 7.55,
    state: 'Particle',
    ticker: 'T',
    marketCap: '~$170B',
    employees: 141000,
    revenue: '~$122B',
    founded: 1983,
    dimensions: [
      { dimension: 'Decision Latency', score: 8, explanation: '350-to-9 office consolidation, top-down RTO mandate, geographic chokepoints.' },
      { dimension: 'Error Correction', score: 7, explanation: 'Layoffs as primary mechanism, RTO backfired but pushed forward anyway.' },
      { dimension: 'Knowledge Location', score: 7, explanation: 'Siloed divisions, 45% workforce cuts taking institutional knowledge.' },
      { dimension: 'Structural Lock-In', score: 8, explanation: 'Massive physical infrastructure, billions to reconfigure.' },
      { dimension: 'Talent Flow', score: 7, explanation: 'Layoffs dominant, RTO designed to trigger attrition.' },
      { dimension: 'Capital Intensity', score: 9, explanation: 'Telecom infrastructure, constant 5G/fiber capex required.' },
      { dimension: 'Knowledge Velocity', score: 7, explanation: '141K employees across divisions, RTO signals digital systems insufficient.' },
    ],
    pattern: 'Shrinking to Survive',
    patternDescription: 'AT&T transformation strategy is amputation: cut employees, cut offices, cut costs. The company has shed 45% of its workforce in five years while trying to maintain the same infrastructure footprint. This is not transformation, it is managed decline.',
    keyNumbers: [
      '115,000 employees cut (5 years)',
      'Office consolidation: 350 to 9',
      'Cost reduction target: $8B',
      'Wireless: 74M postpaid, 17M prepaid',
      'Fortune 500 rank dropped 5 spots',
      'Revenue per employee: $868K',
    ],
    enablers: [
      'Revenue per employee up 7%',
      '9-office consolidation reduces costs',
      '$8B cost reduction execution',
      'Wireless segment (70% revenue) stable',
      'Acquiring Lumen Quantum Fiber',
    ],
    friction: [
      '115,000 employees cut signals distress',
      'RTO mandate backfired (no desks, parking)',
      'Third place in wireless',
      'DirecTV sold at massive loss',
      'Layoffs as primary adaptation',
    ],
    quotable: 'AT&T cut 115,000 employees in five years. That is not transformation, that is amputation.',
  },

  'verizon': {
    slug: 'verizon',
    name: 'Verizon',
    analysisDate: '2026-01-16',
    gpiScore: 7.05,
    state: 'Particle',
    ticker: 'VZ',
    employees: 85000,
    dimensions: [
      { dimension: 'Decision Latency', score: 7, explanation: 'New CEO making fast cuts, reactive not proactive.' },
      { dimension: 'Error Correction', score: 7, explanation: 'Executing layoffs efficiently, core business eroding.' },
      { dimension: 'Knowledge Location', score: 7, explanation: 'Losing institutional knowledge with mass layoffs.' },
      { dimension: 'Structural Lock-In', score: 8, explanation: 'Heavy legacy infrastructure, union workforce.' },
      { dimension: 'Talent Flow', score: 6, explanation: 'Reacting to competition, not leading.' },
      { dimension: 'Capital Intensity', score: 7, explanation: 'Killing workforce without killing root costs.' },
      { dimension: 'Knowledge Velocity', score: 7, explanation: 'Calcified processes maintained while people cut.' },
    ],
    pattern: 'Managed Decline',
    patternDescription: 'Verizon is executing the "shrink to profitability" playbook: cut costs faster than revenue declines. This can work for a decade but it is not transformation. The $20M reskilling fund versus $1.8B in severance tells you where the real investment is going.',
    keyNumbers: [
      'Layoffs: 15,000 (15% of workforce)',
      'Severance charges: $1.8B (Q4 2025)',
      'Expected savings: $3-4B annually',
      '$20M reskilling vs $1.8B severance',
      'New CEO from PayPal',
    ],
    enablers: [
      'New leadership making hard decisions',
      'Fiber/5G infrastructure investments',
    ],
    friction: [
      'Mass layoffs destroy institutional knowledge',
      'T-Mobile continues market share gains',
      '"Age of AI" rhetoric without AI-native strategy',
      'Turnaround CEO pattern suggests more cuts',
    ],
    quotable: '$20M reskilling fund vs $1.8B severance = 1:90 ratio. That is not transformation, that is PR.',
  },

  'berkshire-hathaway': {
    slug: 'berkshire-hathaway',
    name: 'Berkshire Hathaway',
    analysisDate: '2026-01-19',
    gpiScore: 3.75,
    state: 'Transitioning (lower)',
    ticker: 'BRK.A',
    marketCap: '~$1.064T',
    employees: 392400,
    revenue: '$372B',
    founded: 1839,
    dimensions: [
      { dimension: 'Decision Latency', score: 3, explanation: '27-person HQ, "delegation just short of abdication," subsidiaries make all operational decisions autonomously.' },
      { dimension: 'Error Correction', score: 4, explanation: 'Subsidiaries self-correct (GEICO cut 7,700 jobs), but holding company slow to exit investment mistakes.' },
      { dimension: 'Knowledge Location', score: 3, explanation: 'Knowledge distributed to where it is needed, no bureaucratic filtering, each subsidiary is independent.' },
      { dimension: 'Structural Lock-In', score: 4, explanation: 'Conglomerate structure enables flexibility, but capital-intensive subsidiaries create constraints.' },
      { dimension: 'Talent Flow', score: 4, explanation: 'Long tenure rewarded (Abel groomed 25 years), no up-or-out, but Glassdoor notes "low opportunities."' },
      { dimension: 'Capital Intensity', score: 5, explanation: 'HQ is asset-light but subsidiaries mixed, insurance float is strategic advantage.' },
      { dimension: 'Knowledge Velocity', score: 4, explanation: 'Monthly reporting (not real-time), information flows when needed not continuously.' },
    ],
    pattern: 'The Anti-Bureaucracy Empire',
    patternDescription: 'Berkshire Hathaway is the largest proof of concept for minimal organizational friction. While other trillion-dollar companies employ thousands at headquarters, Berkshire runs on 27 people and monthly financial reports. Trust replaces oversight. Accountability replaces approval chains.',
    keyNumbers: [
      'HQ staff: 27 employees in Omaha',
      'Cash and T-bills: $350B+',
      'Insurance float: ~$176B',
      '90+ subsidiaries across 50+ industries',
      '19.9% compounded annual return (1964-2024)',
      'Glassdoor: 4.3/5.0, 77% recommend',
    ],
    enablers: [
      'Extreme decentralization eliminates friction',
      '$350B+ cash provides acquisition flexibility',
      '$176B insurance float as interest-free capital',
      '25-year succession planning',
      'Diversification across 90+ subsidiaries',
    ],
    friction: [
      'Post-Buffett uncertainty',
      'GEICO losing share to Progressive',
      'Finding "elephants" large enough at $1T+ scale',
      'Capital-intensive subsidiaries limit agility',
      'Leadership departures (Todd Combs to JPMorgan)',
    ],
    quotable: '27 people managing $1 trillion is either the purest expression of organizational fluidity or a governance risk hiding in plain sight.',
  },

  'mars': {
    slug: 'mars',
    name: 'Mars, Incorporated',
    analysisDate: '2026-01-20',
    gpiScore: 5.65,
    state: 'Transitioning (upper)',
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: 'Glassdoor consistent: "Decisions take forever," "frustratingly slow," "unclear who is accountable." Network-driven culture concentrates decisions within key networks rather than distributing authority. Kellanova integration adds 50,000+ associates to already slow architecture. Avoided calling layoffs "layoffs" to dodge severance—decision took weeks to communicate.' },
      { dimension: 'Error Correction', score: 6, explanation: '3rd major layoff in 5 years despite 20%+ earnings. This is reactive cost optimization, not proactive adaptation. Kellanova signals strategic direction, but integration execution reveals friction. Territory Sales Manager role destabilized. Error correction operates on quarterly/annual cycles, not continuous iteration.' },
      { dimension: 'Knowledge Location', score: 5, explanation: '18-month-old AI working group shows distributed capability. Manufacturing AI/ML demonstrates technical knowledge distribution. But "network driven rather than hierarchical" means knowledge concentrated in key networks, not widely available. Microsoft partnership exists but execution centralized through corporate working group.' },
      { dimension: 'Structural Lock-In', score: 6, explanation: '$36B Kellanova acquisition adds massive integration complexity. 315 executives suggest substantial management overhead. 150,000 employees across CPG and integrated snacking brands. Chicago remains HQ for expanded snacking business—preserving dual-HQ structure (McLean + Chicago).' },
      { dimension: 'Talent Flow', score: 6, explanation: 'Multiple restructurings, "associates being let go following FTC approval," outsourcing to India across functions. 85% would recommend to friend is decent, but layoffs during high earnings signal optimization over growth. Territory Sales Manager "no longer a stable position."' },
      { dimension: 'Capital Intensity', score: 5, explanation: '$2B manufacturing investment through 2026 shows significant physical infrastructure. CPG model requires substantial production facilities (80 globally). But brand value (M&M\'S, Snickers, Pedigree, etc.) provides leverage. Private ownership allows patient capital.' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'AI in manufacturing (predictive maintenance, quality control), marketing (GenAI for communications, translation). Microsoft partnership for digital transformation. But 10 responsible AI principles and corporate working group suggest centralized governance rather than distributed execution.' }
    ],
    pattern: '"Integration as Calcification Test"',
    patternDescription: 'Mars is betting that private ownership\'s patient capital can absorb acquisition scale without inheriting public-company rigidity. The test is already underway. Kellanova brought 50,000 people trained in one cultural OS (publicly-traded quarterly cadence) into another (family-owned collaborative deliberation). The question isn\'t whether Mars can integrate Kellanova. It\'s whether Mars can integrate Kellanova without becoming Kellanova\'s worst habits. The 2-3 week notification windows for reorganization, the semantic gymnastics around "not calling layoffs layoffs," the outsourcing without strategic clarity—these are symptoms of a system that\'s adding structure faster than it\'s adding clarity. Mars doesn\'t have a performance problem. It has a decision architecture problem. And $36B in acquisit',
    keyNumbers: [

    ],
    enablers: [
      'Private ownership',
      'Manufacturing modernization',
      'Digital transformation',
      'Brand strength',
      'AI governance',
      'Market position'
    ],
    friction: [
      'Decision latency culture',
      'Integration complexity',
      'Layoff cycles',
      'Network-driven opacity',
      '315 executives',
      'Collaborative paralysis'
    ],
  },

  'dominion-energy': {
    slug: 'dominion-energy',
    name: 'Dominion Energy',
    analysisDate: '2026-01-20',
    gpiScore: 6.8,
    state: 'Transitioning (upper)',
    marketCap: '$52.20',
    dimensions: [
      { dimension: 'Decision Latency', score: 7, explanation: 'Every rate increase requires state commission approval. Federal stop-work order required litigation and court injunction to restart $11.2B offshore wind project. Decisions move at regulatory speed, not market speed.' },
      { dimension: 'Error Correction', score: 6, explanation: 'Quick legal response to federal challenges, but 16.95% workforce cut suggests reactive cost-cutting. No evidence of killing failed projects. Offshore wind continues despite cost escalations.' },
      { dimension: 'Knowledge Location', score: 6, explanation: 'Three regulated segments (VA, SC, Contracted Energy), no shared platforms. Knowledge in people, not systems. Serving AI industry but no internal AI adoption visible.' },
      { dimension: 'Structural Lock-In', score: 8, explanation: '$50.1B capex locked into multi-decade depreciation. 176 offshore wind turbines. Can\'t exit regulated territories. Every pivot requires stranded asset calculations and regulatory approval.' },
      { dimension: 'Talent Flow', score: 6, explanation: 'Traditional utility career paths. COO retirement with internal succession. Limited mobility, people leave rather than redeploy. Glassdoor cites limited career growth.' },
      { dimension: 'Capital Intensity', score: 9, explanation: '$50.1B capex over 5 years. $11.2B single project. Revenue per employee $1.08M reflects asset leverage. Can\'t change direction without stranded assets.' },
      { dimension: 'Knowledge Velocity', score: 6, explanation: 'Quarterly earnings cycles, regulatory filing cadence. No real-time dashboards. Glassdoor reviews cite poor and disengaged management, suggesting information filtering.' }
    ],
    pattern: 'Infrastructure as Destiny',
    patternDescription: 'When you own 176 offshore wind turbines and commit $50B to grid infrastructure, you don\'t adapt to market signals. You adapt the market to your depreciation schedule. The AI boom is a gift, driving 5% annual demand growth. But Dominion can only respond one way: build more infrastructure, file for more rate increases, and wait for regulatory approval. They\'re powering the future while trapped in the physics of the past.',
    keyNumbers: [
      'Revenue: $15.81B (TTM), up 8.36% YoY',
      'Employees: 14,700 (down 16.95% from 2024)',
      'Founded: 1983 (incorporated), HQ: Richmond, Virginia',
      'Structure: Public company, NYSE: D',
      'Leadership: Robert M. Blue, Chairman, President and CEO (since April 2021)',
      'Market Cap: $52.20 billion',
      'Fortune 500 Rank: #216',
      'Customers: 2.8M electricity (VA/NC), 500K gas (SC)'
    ],
    enablers: [
      'AI Data Center Positioning',
      'Offshore Wind Execution',
      'Legal Agility',
      'Capital Access',
      'Regulatory Support',
      'Revenue Growth'
    ],
    friction: [
      'Regulatory Dependency',
      'Federal Vulnerability',
      'Workforce Reduction',
      'Capital Intensity Trap',
      'Management Issues',
      'Information Silos'
    ],
    quotable: 'You can\'t pivot when you own 176 offshore wind turbines.',
  },

  'rtx': {
    slug: 'rtx',
    name: 'RTX Corporation (Raytheon)',
    analysisDate: '2026-01-19',
    gpiScore: 6.55,
    state: 'Transitioning (upper)',
    marketCap: '$270.7B',
    dimensions: [
      { dimension: 'Decision Latency', score: 7, explanation: '186K employees, three segments, government contract delays, "least responsive" per Trump' },
      { dimension: 'Error Correction', score: 6, explanation: '$950M settlement for years-long fraud, powder metal defect ongoing, three-year monitor required' },
      { dimension: 'Knowledge Location', score: 6, explanation: '"Siloed operations" cited in restructuring, post-merger cultures still distinct' },
      { dimension: 'Structural Lock-In', score: 7, explanation: '$217B backlog path dependency, 20-year DOD contracts, capital-intensive manufacturing' },
      { dimension: 'Talent Flow', score: 6, explanation: '"Promotions non-existent" per Glassdoor, need to "push hard" for advancement' },
      { dimension: 'Capital Intensity', score: 8, explanation: 'Aerospace manufacturing inherently capital-heavy, single defect drains $1B+ annually' },
      { dimension: 'Knowledge Velocity', score: 6, explanation: 'Weekly meetings "rehash status," but AI investments (CADS, BBN) show acceleration attempts' }
    ],
    pattern: 'Organizational Pattern',
    patternDescription: '',
    keyNumbers: [
      'Revenue: $80.7B (2025)',
      'Market Cap: $270.7B (January 2026)',
      'Employees: 186,000',
      'Founded: 1922, HQ: Arlington, VA',
      'Structure: Public (NYSE: RTX), formed 2020 merger',
      'CEO: Christopher T. Calio (Chairman and CEO since 2025)',
      'Fortune 500: #54, Fortune Global 500: #153',
      'Backlog: $217B (60% commercial, 40% defense)'
    ],
    enablers: [
      'New CEO Christopher Calio with fresh perspective',
      'Reorganization from 4 to 3 segments reduces silos',
      'AI identified as core transformative technology',
      '$217B backlog funds transformation',
      '60/40 commercial-defense diversification',
      'AI-powered CADS system shows product innovation'
    ],
    friction: [
      '$950M+ settlement reveals systemic compliance failures',
      'Powder metal defect draining $1.1-1.3B annually',
      'Presidential pressure on buybacks and production',
      'Three post-merger cultures still not integrated',
      'Glassdoor',
      'Government contracts create structural latency'
    ],
    quotable: 'The defense giant that merged its way to scale now carries the compliance costs of that complexity.',
  },

  'kenvue': {
    slug: 'kenvue',
    name: 'Kenvue',
    analysisDate: '2026-01-20',
    gpiScore: 5.4,
    state: 'Transitioning (upper)',
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: 'Workforce reduction took 18 months from announcement to execution, still unwinding J&J transition service agreement' },
      { dimension: 'Error Correction', score: 6, explanation: 'CEO swap and brand portfolio review show willingness to adapt, but layoffs are primary mechanism with $550M restructuring costs over two years' },
      { dimension: 'Knowledge Location', score: 5, explanation: 'Microsoft Azure AI partnership is forward-looking, but Glassdoor cites complicated systems and onboarding challenges from J&J legacy transition' },
      { dimension: 'Structural Lock-In', score: 5, explanation: 'Asset-light brands provide flexibility, but $550M restructuring costs and 5-year Microsoft partnership create dependencies' },
      { dimension: 'Talent Flow', score: 6, explanation: 'Multiple layoff rounds (880 total), Glassdoor 3.3/5.0 for career opportunities, 62% recommend to friend, external hires for CEO and CFO' },
      { dimension: 'Capital Intensity', score: 4, explanation: 'Consumer health brands are intellectual property heavy, not manufacturing heavy, can divest underperforming products (Clean & Clear, Maui Moisture)' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'AI tools piloted but not deployed, Glassdoor mentions analysis paralysis and overly complicated systems' }
    ],
    pattern: 'Organizational Pattern',
    patternDescription: '',
    keyNumbers: [
      'Revenue: $15.0B TTM (December 2025), $15.45B FY2024',
      'Employees: 22,000 (down from ~23,000 pre-restructuring)',
      'Founded: February 23, 2022 (named Kenvue September 2022, IPO May 2023)',
      'Headquarters: Summit, New Jersey',
      'Structure: Public (NYSE: KVUE), $32.1B market cap',
      'CEO: Kirk Perry (appointed November 2, 2025, former P&G/Google exec)',
      'Previous CEO: Thibaut Mongon (departed July 2025)',
      'CFO: Amit Banati (joined May 2025 from Kellanova)'
    ],
    enablers: [
      'Microsoft 5-year AI partnership with Azure, digital twins, Copilot tools piloted across supply chain and content creation',
      'New CEO Kirk Perry brings 30 years CPG and tech transformation experience from P&G, Google, Circana',
      'Asset-light brand portfolio (Tylenol, Neutrogena, Listerine, Band-Aid) provides strategic flexibility',
      'Cost optimization program targeting $350M annual savings by 2026',
      'Portfolio rationalization underway, exploring sale of underperforming brands (Clean and Clear, Maui Moisture)',
      'New CFO Amit Banati from Kellanova brings external financial discipline'
    ],
    friction: [
      'Multiple layoff rounds (880 total, 4%) indicate cost-cutting as primary adaptation mechanism, not process redesign',
      'Restructuring costs of $550M over two years (2024-2025) show high organizational friction',
      'Still unwinding J&J transition service agreement years after May 2023 spinoff, indicating path dependence',
      'Glassdoor 3.6/5.0 with complaints about complicated systems, analysis paralysis, onboarding challenges',
      'Low employee recommendation rate (62%) and career opportunity score (3.3/5.0) signal talent flow issues',
      'CEO transition after only two years (Mongon July 2023 to July 2025) indicates strategic misalignment'
    ],
    quotable: 'Two years out of the J&J nest and Kenvue is still figuring out how to fly.',
  },

  'procter-gamble': {
    slug: 'procter-gamble',
    name: 'Procter & Gamble',
    analysisDate: '2026-01-19',
    gpiScore: 5.45,
    state: 'Transitioning (upper)',
    marketCap: '$338B',
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: '5-SBU structure with separate CEOs, 26 executives, 6 regional presidents creates multiple decision layers' },
      { dimension: 'Error Correction', score: 5, explanation: '7,000 layoffs show willingness to adapt, but reactive to pressure; greenwashing lawsuits addressed defensively' },
      { dimension: 'Knowledge Location', score: 5, explanation: 'Heavy AI investment (Project Genie, insightsPG, Consumer 360) but SBU and geographic structure creates silos' },
      { dimension: 'Structural Lock-In', score: 6, explanation: '109K employees, 100+ manufacturing sites, $1B+ to restructure; change is expensive' },
      { dimension: 'Talent Flow', score: 5, explanation: 'Good Glassdoor scores (4.0 career), but awards flattening individual performance recognition' },
      { dimension: 'Capital Intensity', score: 6, explanation: 'Manufacturing company with 100+ physical sites; strategic pivots mean writing off capacity' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'AI tools accelerating (12% productivity gain), but US sales decline surprised market showing filtered info' }
    ],
    pattern: 'The Institutional Metabolism',
    patternDescription: 'P&G at 5.45 represents a company where 187 years of success created the organizational mass that now constrains it. They are not calcified. They are not agile. They are institutional: moving at the speed that institutions move, adapting at the pace that institutions adapt. The restructuring, AI investments, and leadership transition are all correct responses. The question is whether institutional change speed can match market change speed.',
    keyNumbers: [
      'Revenue: $84.9B TTM (Q1 FY2026: $22.4B, +3% YoY)',
      'Employees: 109,000 (7,000 non-manufacturing cuts planned over 2 years)',
      'Founded: 1837, HQ: Cincinnati, Ohio',
      'Structure: Public (NYSE: PG), traded since 1890',
      'Leadership: Shailesh Jejurikar (CEO, Jan 2026), Jon Moeller (Executive Chairman)',
      'Market Cap: $338B (38th globally)',
      'Fortune 500 Rank: #51',
      'Glassdoor: 4.1/5.0, 82% recommend'
    ],
    enablers: [
      'Heavy AI investment',
      'Microsoft partnership digitizing 100+ manufacturing sites with IIoT and digital twins',
      '69-year dividend increase streak demonstrates transformation funding stability',
      '23.2% operating margin (highest in CPG) provides financial cushion',
      'New CEO brings fresh mandate while Moeller maintains continuity',
      'GenAI driving 12% productivity gains (Harvard study)'
    ],
    friction: [
      '5-SBU structure with separate CEOs creates category silos',
      'Historical culture described as slow, conformist and risk-averse',
      'Greenwashing lawsuits show sustainability messaging-reality gap',
      'Compensation structure flattens individual performance incentives',
      'US sales decline surprised market, suggesting information filtering',
      'Two-year restructuring timeline vs. market speed of change'
    ],
    quotable: 'P&G built brands, manufacturing, and distribution for a different era. The AI investments and restructuring are attempts to accelerate without destroying what works.',
  },

  'lockheed-martin': {
    slug: 'lockheed-martin',
    name: 'Lockheed Martin',
    analysisDate: '2026-01-19',
    gpiScore: 6.65,
    state: 'Transitioning (upper)',
    marketCap: '$133.7B',
    dimensions: [
      { dimension: 'Decision Latency', score: 7, explanation: 'Multi-layered approval chains involving Pentagon, Congress, JPO. Block 4 delay from 2026 to 2030s demonstrates cascade effect.' },
      { dimension: 'Error Correction', score: 7, explanation: 'TR-3 upgrade 3 years late. Received on-time bonuses while delivering late. 800+ deficiencies still open. Layoffs as primary adaptation.' },
      { dimension: 'Knowledge Location', score: 5, explanation: 'AI Factory (10,000 engineers) and LMText Navigator show sharing intent, but security clearances create compartmentalization.' },
      { dimension: 'Structural Lock-In', score: 8, explanation: '$485B in F-35 sunk costs. Single customer (Pentagon). Cannot pivot from core programs. 1995 merger still shapes structure.' },
      { dimension: 'Talent Flow', score: 5, explanation: 'Good engagement (84% recommend) but limited mobility due to clearances. "Raises 2-3%" complaints. Leaders promoted from within.' },
      { dimension: 'Capital Intensity', score: 8, explanation: 'Massive manufacturing infrastructure. Long depreciation cycles. PAC-3 capacity increase took years. Cannot repurpose F-35 lines.' },
      { dimension: 'Knowledge Velocity', score: 6, explanation: 'AI accelerating internal flow (10x productivity for data scientists). But $3.5B losses arrived as "surprises." 4,000+ missing parts accumulated.' }
    ],
    pattern: 'Organizational Pattern',
    patternDescription: '',
    keyNumbers: [
      'Revenue: $73.4B TTM (Q3 2025)',
      'Market Cap: $133.7B (up 19.48% YoY)',
      'Employees: 121,000',
      'Founded: March 15, 1995 (Lockheed + Martin Marietta merger)',
      'HQ: North Bethesda, Maryland',
      'Stock: LMT (NYSE), Fortune 500 Rank #57',
      'CEO: Jim Taiclet (since March 2021)',
      'F-35 Deliveries: 191 in 2025 (record), 1,300 total to 12 nations'
    ],
    enablers: [
      'AI Factory serving 10,000+ engineers',
      'LMText Navigator deployed enterprise-wide',
      'IBM Granite LLM integration',
      '$20M annual cost savings from centralized data science',
      'Record 191 F-35 deliveries in 2025',
      'New CIO Maria Demaree elevating AI as strategic priority'
    ],
    friction: [
      'F-35 Block 4 delayed to mid-2030s ($6B+ overruns)',
      'TR-3 upgrade 3 years late',
      '$3.5B classified program losses in 2025',
      '4,000+ missing parts, 52 aircraft idle',
      'GAO found on-time bonuses paid for late deliveries',
      'Investor class action lawsuit pending'
    ],
    quotable: 'The company exists to build weapons systems that take decades to develop, require absolute security, and serve a single customer who cannot easily switch suppliers. This creates structural lock-in by design.',
  },

  'pixar': {
    slug: 'pixar',
    name: 'Pixar Animation Studios',
    analysisDate: '2026-01-26',
    gpiScore: 3.2,
    state: 'Transitioning (upper)',
    employees: 1233,
    revenue: '$232M (2026), down from $770M peak (2024)',
    founded: 1986,
    dimensions: [
      { dimension: 'Decision Latency', score: 5, explanation: 'The Braintrust model is legendary - candid feedback flows freely, directors retain authority, iterative process is embedded. But Pixar is a subsidiary. Strategic decisions (streaming vs theatrical, budget, slate) flow through Disney corporate. The 2024 pivot from streaming content back to theatrical features was Bob Iger\'s mandate, not Pixar\'s choice. Creative decisions move fast. Strategic decisions bottleneck through Burbank.' },
      { dimension: 'Error Correction', score: 6, explanation: 'Strong iterative culture. "All our movies suck at first" is embedded philosophy. Elemental recovered from $29M opening to $496M global through word-of-mouth. But at the portfolio level, error correction is slow. Elio\'s $21M opening (worst in Pixar history) follows a pattern: no successful new theatrical IP launch since Coco in 2017. That\'s 8 years of failing to launch original franchises theatrically. Inside Out 2\'s $1.69B success masks the deeper problem - only sequels work now.' },
      { dimension: 'Knowledge Location', score: 5, explanation: 'The Braintrust embeds knowledge in people, not documents. Creative expertise concentrates in long-tenured directors (Docter, Stanton, Unkrich). But Glassdoor reviews cite "entrenched, conservative decision-making" and "pervasive fear of change." Knowledge stays with the same names. The upcoming slate (Toy Story 5: Stanton, Incredibles 3: Sohn, Coco 2: Unkrich) is the same directors cycling through franchise sequels.' },
      { dimension: 'Structural Lock-In', score: 7, explanation: 'Triple lock-in: 1. **Corporate**: Disney controls budget, slate, strategy. Pixar can\'t greenlight its own films. 2. **Franchise**: 4 of 5 announced films are sequels (Toy Story 5, Incredibles 3, Coco 2, plus Minions-style dependence). Only Hoppers and Gatto are original. 3. **Cost Structure**: $250M budget for Elio vs Illumination\'s $70M. Less margin for failure, more pressure to play safe.' },
      { dimension: 'Talent Flow', score: 6, explanation: 'Glassdoor: "extremely limited opportunities for career advancement," "no training, professional development, or upward mobility," "very low salary especially for positions held predominantly by women." Pay is below market for Bay Area. The 14% layoffs (175 people, May 2024) were deep cuts. But the brand still attracts creative talent. 73% would recommend to a friend. The work is meaningful, even if the career paths are blocked.' },
      { dimension: 'Capital Intensity', score: 7, explanation: 'Animation is inherently capital-intensive, but Pixar\'s budgets are industry-highest. $250M for Elio vs $70M for Illumination films. Inside Out 2 worked ($1.69B on ~$200M budget). Elio didn\'t ($21M opening on $250M budget). When you spend $250M, you need $600M+ just to break even. Illumination can fail cheaply. Pixar can\'t.' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'The Braintrust spreads creative knowledge within films. But organization-wide, Glassdoor reviews cite "unstructured organizational structure with ambiguous roles," "zero transparency from all leadership levels," and "departments allergic to accountability." Knowledge moves well within projects, but the broader organization has friction.' }
    ],
    pattern: 'Creative Subsidiary Trap',
    patternDescription: 'Pixar built the most effective creative process in animation history. The Braintrust. Iterative development. Candor culture. Directors with authority. These are legitimately excellent. But Pixar doesn\'t control its own destiny. - Disney controls the budget - Disney controls the slate - Disney controls the strategy - Disney decides streaming vs theatrical - Disney mandates the layoffs The Braintrust can make Toy Story 5 excellent. It can\'t decide whether Pixar should make Toy Story 5 at all. The creative process is Field-state. The strategic position is Particle-state. This is the subsidiary trap: exceptional execution capability trapped inside corporate control structure. The same pattern hits studio divisions, acquired startups, and any creative unit absorbed into a larger parent. 8 years',
    keyNumbers: [
      '$1.69B - Inside Out 2 global box office (2024)',
      '$21M - Elio opening weekend, worst in Pixar history (2025)',
      '14% - Workforce reduction in May 2024 layoffs',
      '8 years - Since last successful original theatrical franchise launch (Coco, 2017)',
      '4 of 5 - Upcoming announced films that are sequels',
      '$250M - Elio budget vs $70M typical Illumination budget'
    ],
    enablers: [
      'Braintrust model - Candid feedback, director authority, iterative process',
      'Brand equity - Pixar name still means quality to audiences',
      'Talent magnetism - Creative people want to work there despite low pay',
      'Inside Out 2 success - Proved theatrical animation still works when executed well'
    ],
    friction: [
      'Disney control - Strategic decisions made in Burbank, not Emeryville',
      'Sequel dependence - Can\'t launch new IP theatrically, relies on existing franchises',
      'Cost structure - $250M budgets leave no room for experimentation',
      'Talent stagnation - Same directors, limited advancement, below-market pay',
      'Original IP drought - 8 years without new theatrical franchise success'
    ],
    quotable: 'Pixar has the best creative process in animation. It just doesn\'t control what that process gets applied to. The Braintrust can make any film excellent. Disney decides which films get made. That\'s the gap between creative capability and strategic agency.',
  },

  'elevance': {
    slug: 'elevance',
    name: 'Elevance Health',
    analysisDate: '2026-01-19',
    gpiScore: 5.35,
    state: 'Transitioning (upper)',
    marketCap: '$83.31B',
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: '104,200 employees, 14-state BCBS structure, star ratings lawsuit reveals litigation over adaptation' },
      { dimension: 'Error Correction', score: 5, explanation: '$1B+ penalties, $12.88M mental health settlement, but did exit unprofitable PDP market' },
      { dimension: 'Knowledge Location', score: 5, explanation: 'Sydney Health (25% growth), HealthOS, 60K using AI tools, but Glassdoor cites siloed divisions' },
      { dimension: 'Structural Lock-In', score: 6, explanation: 'BCBS Association structure locks geographic footprint, Carelon integration adds complexity' },
      { dimension: 'Talent Flow', score: 5, explanation: '3.4 Glassdoor, good benefits, but 160+ reviews cite constant reorgs, ~10K layoffs ongoing' },
      { dimension: 'Capital Intensity', score: 5, explanation: 'Services-focused but $hundreds of millions in tech investment, regulatory requirements add friction' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'AI tools accelerate flow, but 22.5% income drop in Q3 caused 12% stock crash (surprises)' }
    ],
    pattern: 'Technology as Triage',
    patternDescription: 'Elevance represents the healthcare insurer caught between regulatory pressure, margin compression, and organizational mass. The pattern: use AI investments as the transformation narrative while using layoffs as the actual adaptation mechanism. Sydney Health, HealthOS, Spark, and OpenAI partnerships signal genuine technology commitment. But the ~10,000 rolling layoffs, the star ratings lawsuit arguing basic math, and $1B in cumulative fines suggest an organization that fights its environment rather than adapting to it.',
    keyNumbers: [
      'Revenue: $194.82B TTM (December 2025), up 11.93% YoY',
      'Employees: 104,200 (rolling layoffs affecting ~10,000)',
      'Founded: 1944, HQ: Indianapolis, Indiana',
      'Structure: Public (NYSE: ELV), largest for-profit BCBS licensee in 14 states',
      'Leadership: Gail Boudreaux, CEO since 2017',
      'Market Cap: $83.31B (January 2026)',
      'Fortune 500: #20 (2024)',
      'Medical Members: 46 million (109 million total consumers)'
    ],
    enablers: [
      'Sydney Health app with 25% usage growth and AI virtual assistant',
      'HealthOS platform centralizing clinical and operational data',
      '60,000+ associates using AI productivity tools',
      'OpenAI partnership for employee AI certification training',
      'Spark internal toolkit for document analysis and automation',
      'Strategic exit from unprofitable PDP market segment'
    ],
    friction: [
      'Rolling layoffs affecting ~10,000 employees',
      '$1.048B cumulative penalties across 572 violations',
      'Lost Medicare Advantage star ratings lawsuit (basic math dispute)',
      '14-state BCBS structure creating coordination overhead',
      '125 basis point Medicaid margin decline expected in 2026',
      'Securities class action lawsuit pending'
    ],
    quotable: 'The star ratings lawsuit is a GPI diagnostic in microcosm: doubling down on a losing position rather than accepting reality and adjusting.',
  },

  'pepsico': {
    slug: 'pepsico',
    name: 'PepsiCo',
    analysisDate: '2026-01-19',
    gpiScore: 4.85,
    state: 'Transitioning (upper)',
    marketCap: '$202.08B',
    dimensions: [
      { dimension: 'Decision Latency', score: 5, explanation: 'Traditional hierarchy, but Elliott pressure accelerated decisions within months; Texoma pilot shows silos being addressed' },
      { dimension: 'Error Correction', score: 5, explanation: 'Closing underperforming plants and cutting 20% SKUs shows correction; but needed activist pressure to act; layoffs as primary mechanism' },
      { dimension: 'Knowledge Location', score: 4, explanation: 'Digital twin partnership creating "single intelligent ecosystem" with real-time data from all operations; unusual AI investment for CPG' },
      { dimension: 'Structural Lock-In', score: 5, explanation: 'Diversified portfolio provides flexibility vs pure-play competitors; but 319K employees and merger legacy create switching costs' },
      { dimension: 'Talent Flow', score: 5, explanation: '3.8/5 Glassdoor, 74% recommend; internal promotions visible; but weak work-life balance (3.2/5), management cited as con' },
      { dimension: 'Capital Intensity', score: 6, explanation: 'Heavy manufacturing footprint; digital twin aims to reduce CapEx 10-15%; closing facilities costs money before saving it' },
      { dimension: 'Knowledge Velocity', score: 4, explanation: 'AI enabling real-time ops visibility; can test thousands of layouts; but 319K employees create natural information delays' }
    ],
    pattern: 'Technology as Transformation Lever',
    patternDescription: 'PepsiCo is inverting the typical transformation playbook. Rather than restructuring the organization first and then deploying technology, they\'re using AI-powered digital twins to force operational change. If technology can detect 90% of issues in simulation before reaching the warehouse floor, the company can move faster despite its mass. Elliott provided the external catalyst. Siemens/NVIDIA provides the mechanism. Early pilots show the bet working: 20% throughput, 10-15% CapEx reduction.',
    keyNumbers: [
      'Revenue: $92.36B TTM (January 2026)',
      'Employees: 319,000 (revenue per employee: $289,549)',
      'Market Cap: $202.08B (down 3.38% YoY)',
      'Founded: June 8, 1965, HQ: Purchase, New York',
      'CEO: Ramon Laguarta (since 2018)',
      'Fortune 500 Rank: #41',
      'Structure: Public (NASDAQ: PEP), diversified food (58%) and beverage (42%)',
      'Glassdoor: 3.8/5.0 overall, 74% recommend, 63% positive outlook'
    ],
    enablers: [
      'Industry-first digital twin partnership with Siemens and NVIDIA at enterprise scale',
      'Early pilot results',
      '90% of operational issues detectable in simulation before implementation',
      'Diversified portfolio provides strategic flexibility vs pure-play competitors',
      'Strong brand portfolio with category leadership (Lay\'s, Doritos, Gatorade)',
      'Leadership restructure with focused accountability'
    ],
    friction: [
      'Required activist pressure to force strategic changes',
      'Layoffs as primary adaptation mechanism',
      'Glassdoor',
      '319,000 employees creates organizational mass',
      'High capital intensity in manufacturing footprint',
      'Merger legacy from 60 years of integrations'
    ],
    quotable: 'PepsiCo needed a $4B activist stake to do what physics suggested years ago: cut the SKUs that weren\'t pulling their weight.',
  },

  'stellantis': {
    slug: 'stellantis',
    name: 'Stellantis N.V.',
    analysisDate: '2026-01-19',
    gpiScore: 6.3,
    state: 'Transitioning (upper)',
    marketCap: '$31.6B',
    dimensions: [
      { dimension: 'Decision Latency', score: 7, explanation: '14-brand, three-continent structure requires decisions to navigate multiple regions, union agreements, and legacy brand considerations. Tavares EV strategy persisted for years before 70% profit collapse forced correction.' },
      { dimension: 'Error Correction', score: 6, explanation: 'Eventually corrects but slowly. CEO resigned after internal friction with board. Uses layoffs as primary adaptation mechanism (3,200+ at peak). Q4 2025 showed first sales growth in two years.' },
      { dimension: 'Knowledge Location', score: 5, explanation: '14 brands across three continents creates natural silos. Glassdoor top complaint: "lack of guidance from management." Investing in Mistral AI and digital twins to centralize knowledge.' },
      { dimension: 'Structural Lock-In', score: 7, explanation: 'Merger created permanent complexity. Cannot easily exit brands, regions, or legacy commitments. UAW agreements constrain flexibility. $13B US expansion deepens lock-in.' },
      { dimension: 'Talent Flow', score: 6, explanation: 'Glassdoor 3.7/5.0. Massive layoffs disrupt normal talent flow. New leadership bringing in fresh talent (Ciancia from Mercedes-Benz) but churn creates friction.' },
      { dimension: 'Capital Intensity', score: 8, explanation: 'Inherently capital-intensive automotive manufacturing. $13B US expansion largest in 100-year history. Factories span multiple continents with high fixed costs and union labor.' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: '70% profit drop surprised markets, suggesting filtered information at senior levels. Manufacturing AI reducing quality issues 40%. Information moves faster at factory level than corporate level.' }
    ],
    pattern: 'Merger Complexity Trap',
    patternDescription: 'Stellantis represents the archetypal case of a mega-merger creating organizational mass that overwhelms any synergy benefits. The FCA-PSA combination was supposed to create scale advantages. Instead, it created a 14-brand, three-continent, dual-culture entity that cannot pivot, cannot simplify, and cannot respond to market changes faster than more focused competitors.',
    keyNumbers: [
      'Revenue: EUR 156.9B (2024), down 17% YoY',
      'Employees: 248,243 globally',
      'Founded: January 16, 2021 (FCA + PSA merger)',
      'Headquarters: Hoofddorp, Netherlands (CEO operates from Auburn Hills, Michigan)',
      'Market Cap: $31.6B (down 38% since 2021 formation)',
      'CEO: Antonio Filosa (since May 2025)',
      'Brands: 14 (Jeep, Ram, Dodge, Chrysler, Fiat, Peugeot, Citroen, Alfa Romeo, Maserati, Opel, Vauxhall, Lancia, DS, Abarth)',
      'Net Profit: Down 70% in 2024'
    ],
    enablers: [
      'New CEO with 25-year company tenure brings insider credibility for change',
      'Streamlined leadership',
      'AI manufacturing investments delivering measurable results (40% quality improvement)',
      'Mistral AI partnership moving to enterprise-wide deployment',
      'Q4 2025 sales growth breaking two-year decline pattern',
      'Strong brand portfolio with Jeep and Ram anchoring US strategy'
    ],
    friction: [
      '14 brands create inherent complexity and cannibalization risk',
      'Post-merger culture integration still incomplete after five years',
      'Market cap down 38% since formation',
      'Layoffs as primary adaptation mechanism damages institutional knowledge',
      'Glassdoor complaints about "lack of guidance from management" (149 reviews)',
      'Union agreements (UAW) constrain workforce flexibility'
    ],
    quotable: '14 brands is not a portfolio, it\'s a complexity tax.',
  },

  'ge-vernova': {
    slug: 'ge-vernova',
    name: 'GE Vernova',
    analysisDate: '2026-01-20',
    gpiScore: 6.3,
    state: 'Transitioning (upper)',
    ticker: 'GEV',
    marketCap: '$170B',
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: 'Three segment CEOs enable some distribution, but offshore wind bled for years before action. Capital allocation quick, operational decisions slow.' },
      { dimension: 'Error Correction', score: 7, explanation: 'Layoffs are the primary adaptation mechanism. Years of offshore wind losses before restructuring. No evidence of fast pivots or experimentation.' },
      { dimension: 'Knowledge Location', score: 5, explanation: 'Deploying Gen AI agents, cloud with AWS, APM, and digital twins. But three-segment structure creates silos. "Finance is a one-man show."' },
      { dimension: 'Structural Lock-In', score: 7, explanation: 'Inherited GE Power, Renewable, Digital, and Financial Services. 80-GW backlog into 2029. Offshore wind can\'t be quickly exited. GE legacy systems.' },
      { dimension: 'Talent Flow', score: 6, explanation: '4% headcount reduction via layoffs, not strategic reshaping. Roles contracted out to cheaper labor markets. No internal mobility evidence.' },
      { dimension: 'Capital Intensity', score: 8, explanation: 'Manufactures turbines and electrification equipment. Massive infrastructure, long-cycle sales, service contracts. Not asset-light.' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'AI and cloud migration should help, but 76,800 across 100+ countries creates latency. Three-segment structure filters info. AI tools still rolling out.' }
    ],
    pattern: 'The Spin-Off Paradox',
    patternDescription: 'GE Vernova was created to escape GE legacy mass, but inherited the organizational DNA, structural commitments, and cultural behaviors that made GE slow. The spin unlocked financial flexibility (doubled dividend, $10B buyback), but operational flexibility remains constrained by 80-GW backlog commitments, capital-intensive manufacturing, and layoffs-as-adaptation behavior. AI tools and cloud migration are on the roadmap, but the error correction pattern (years of offshore wind losses before action) suggests culture change lags structural change. The company has the architecture for fluidity but not yet the operating system.',
    keyNumbers: [
      'Revenue: $37.67B TTM (2024: $34.93B, 2023: $33.23B)',
      'Market Cap: $170B (varies $169B-$185B)',
      'Employees: 76,800 (down 4% YoY from 80,000)',
      'Founded: February 28, 2023 (incorporated April 2, 2024)',
      'HQ: Cambridge, Massachusetts',
      'Stock Ticker: GEV (NYSE)',
      'CEO: Scott Strazik (appointed April 2024)',
      'Gas Turbine Backlog: 80 GW stretching into 2029'
    ],
    enablers: [
      'AI Data Center Demand',
      'Gen AI Deployment',
      'Cloud Migration',
      'Segment Growth',
      'Financial Flexibility',
      'Digital Twin and APM Technology'
    ],
    friction: [
      'Layoffs as Primary Correction',
      'Offshore Wind Losses',
      'GE Legacy Culture',
      '80-GW Backlog Lock-In',
      'Knowledge Silos',
      'Capital Intensity'
    ],
    quotable: 'When your primary adaptation mechanism is layoffs, not strategic pivots, you are calcifying.',
  },

  'xpo': {
    slug: 'xpo',
    name: 'XPO, Inc.',
    analysisDate: '2026-01-19',
    gpiScore: 4.2,
    state: 'Transitioning (lower)',
    marketCap: '$18.1B',
    dimensions: [
      { dimension: 'Decision Latency', score: 4, explanation: 'XPO Connect automates 99.7% of load matching; spinoffs eliminated cross-unit coordination; lean executive team under Harik' },
      { dimension: 'Error Correction', score: 4, explanation: 'Strategic unbundling via GXO/RXO spinoffs; capitalized on Yellow bankruptcy; settlements handled pragmatically' },
      { dimension: 'Knowledge Location', score: 3, explanation: '$3B+ digital investment moved knowledge into centralized AI systems; machine learning selects carriers in real-time' },
      { dimension: 'Structural Lock-In', score: 5, explanation: 'LTL requires terminals, trucks, trailers; 30% excess door capacity is both runway and sunk cost; European operations add complexity' },
      { dimension: 'Talent Flow', score: 5, explanation: 'Glassdoor 3.5/5.0 at industry average; mixed reviews on micromanagement vs career opportunity; training gaps noted' },
      { dimension: 'Capital Intensity', score: 5, explanation: 'Asset-heavy LTL business; Yellow acquisition expanded physical footprint; moderating CapEx because build-out is complete' },
      { dimension: 'Knowledge Velocity', score: 4, explanation: 'AI-led scheduling uses real-time data; XPO Connect provides end-to-end visibility; asymmetric info flow per Glassdoor' }
    ],
    pattern: 'The Focused Operator',
    patternDescription: 'XPO represents a rare case of a serial acquirer who learned that addition by subtraction creates more value than empire-building. Brad Jacobs built a $16B conglomerate through dozens of acquisitions, then methodically dismantled it to reveal a pure-play LTL carrier. The spinoffs were not admissions of failure but recognition that different businesses required different organizational physics. The pattern shows that sometimes the path to lower GPI runs through amputation rather than transformation.',
    keyNumbers: [
      'Revenue: $8.06B TTM (2.83% YoY growth in Q3 2025)',
      'Market Cap: $18.1B (117.38M shares outstanding)',
      'Employees: 38,000 (down from peak after spinoffs)',
      'Founded: May 1989 (acquired by Brad Jacobs September 2011)',
      'Headquarters: Greenwich, Connecticut',
      'Stock: XPO (NYSE), listed June 2012',
      'Fortune 500 Rank: #190 (led transportation sector for 5 consecutive years)',
      'Leadership: Mario Harik (Chairman and CEO since December 2025)'
    ],
    enablers: [
      'Technology-first leadership',
      'Strategic simplification',
      'AI integration',
      'Excess capacity',
      'Opportunistic acquisition',
      'Clean leadership transition'
    ],
    friction: [
      'Asset-heavy business model',
      'Front-line employee experience',
      'Compliance history',
      'Driver classification issues',
      'Training gaps',
      'Layoffs as adaptation'
    ],
    quotable: '99.7% of load matching decisions happen without humans. XPO proves you can automate decisions faster than you can change the culture that makes them.',
  },

  'northrop-grumman': {
    slug: 'northrop-grumman',
    name: 'Northrop Grumman',
    analysisDate: '2026-01-19',
    gpiScore: 6.5,
    state: 'Transitioning (upper)',
    dimensions: [
      { dimension: 'Decision Latency', score: 7, explanation: '97K employees, 25+ executives, 87% government revenue dictates procurement-driven timelines. Sentinel flight test slipped 2+ years.' },
      { dimension: 'Error Correction', score: 7, explanation: 'Sentinel breached Nunn-McCurdy at 81% cost overrun. Layoffs as primary adaptation. But Digital Pathfinder achieves <1% rework.' },
      { dimension: 'Knowledge Location', score: 5, explanation: '$2B digital ecosystem connects design-manufacturing-testing. NVIDIA Omniverse deployed. But classification requirements create inherent silos.' },
      { dimension: 'Structural Lock-In', score: 7, explanation: 'Sentinel cabling assumption failed, requiring thousands of miles new fiber. B-21 needs infrastructure at 3 bases. Facility closures take 9+ months.' },
      { dimension: 'Talent Flow', score: 6, explanation: '3.9 Glassdoor, 78% recommend. But 3-year cliff vesting, 2.5% "awful" raises, limited advancement, degree over merit emphasis.' },
      { dimension: 'Capital Intensity', score: 8, explanation: '$2B+ digital infrastructure. B-21 at $700M/aircraft, $10.3B FY2026. Sentinel at $125B+. Congress added $2.5B risk reduction.' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'NVIDIA Omniverse enables real-time simulation. Digital twins predict integration. But Sentinel cost breach not self-identified.' }
    ],
    pattern: 'Organizational Pattern',
    patternDescription: '',
    keyNumbers: [
      'Revenue: $40.9B TTM (2025)',
      'Employees: 97,000',
      'Founded: 1939, HQ: Falls Church, Virginia',
      'Structure: Public (NYSE: NOC), ~$93B market cap',
      'Leadership: Kathy Warden, Chair, CEO and President since 2019',
      'Fortune 500 Rank: #110',
      'Government Revenue: 87% federal, 12% international',
      'P/E Ratio: 23.94, Dividend Yield: 1.3%'
    ],
    enablers: [
      '$2B+ digital ecosystem connecting design, manufacturing, testing',
      'Digital Pathfinder achieving <1% rework vs 15-20% industry average',
      'NVIDIA Omniverse partnership for AI spacecraft operations',
      'AI-designed spacecraft propulsion (physics AI foundation models)',
      'Digital twins predicting integration challenges',
      'B-21 flight testing matching simulation predictions'
    ],
    friction: [
      'Sentinel 81% cost overrun triggering Nunn-McCurdy breach',
      'Cabling reuse assumption failure not caught until mid-program',
      'Layoffs as primary adaptation mechanism (1,500 cut)',
      '9+ month facility closure timelines',
      '3-year stock vesting cliff',
      '2.5% average raises ("awful" per Glassdoor)'
    ],
    quotable: 'Northrop Grumman proves you can innovate at the edge while remaining anchored at the core.',
  },

  'cvs': {
    slug: 'cvs',
    name: 'CVS Health',
    analysisDate: '2026-01-19',
    gpiScore: 5.75,
    state: 'Transitioning (upper)',
    marketCap: '$102B',
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: 'M-form divisional structure with 218 executives creates layers. Aetna ACA exit took years despite losses. Leadership consolidating (CEO now Chairman).' },
      { dimension: 'Error Correction', score: 6, explanation: 'Four-year ACA error before exit. Layoffs primary mechanism (5,000+ jobs). Exits business lines rather than fixes them. $1B AI savings shows some learning.' },
      { dimension: 'Knowledge Location', score: 5, explanation: 'Consolidated 4 care management systems to 1. Still 40% specialty Rx via paper/fax. $20B tech bet to create "single digital interface" proves current siloing.' },
      { dimension: 'Structural Lock-In', score: 6, explanation: '$69B Aetna debt persists 7 years. 9,000+ locations, 300K employees make pivot expensive. 1,500+ apps migrated to Azure reveals legacy lock-in.' },
      { dimension: 'Talent Flow', score: 5, explanation: '3.2/5.0 Glassdoor, 44% recommend. HR rated 2.8/5.0. Burnout complaints. "No bumping rights" in layoffs. Some divisional mobility exists.' },
      { dimension: 'Capital Intensity', score: 7, explanation: 'Asset-heavy: 9,000+ retail, 1,200+ clinics, distribution infrastructure. $69B acquisition debt. $20B tech commitment. High pivot costs.' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: '"Slow pace of information flow" noted. AI improving: 90 min/day nurse savings, 30% call center reduction. Four systems consolidated to one.' }
    ],
    pattern: 'Technology as Integration Substitute',
    patternDescription: 'CVS is betting that AI can achieve what seven years of post-acquisition integration could not. Rather than restructure the organization, they are building a technology layer on top of the divisions, hoping software can create connections that management structure did not. This is revealing: when organization cannot adapt, overlay technology. It may work, or it may be the most expensive bandage in healthcare history.',
    keyNumbers: [
      'Revenue: $394B TTM (Q3 2025), 6.82% YoY growth',
      'Market Cap: $102B (January 2026), up 83.5% in one year',
      'Employees: 300,000 across all 50 states, Puerto Rico, Brazil',
      'Founded: 1963 in Lowell, MA as Consumer Value Stores',
      'Headquarters: Woonsocket, Rhode Island',
      'Fortune 500 Rank: #5 (2025), up from #6',
      'CEO: David Joyner (since October 2024), also Chairman (since January 2026)',
      'Stock: CVS (NYSE), trading at $80.70, near 52-week high of $85.15'
    ],
    enablers: [
      '$20B technology investment over 10 years',
      'AI-native platform built with AI at core, not bolted on',
      '$1B already saved through AI efficiency',
      'Leadership consolidation',
      'Microsoft Azure partnership for cloud modernization',
      'Care management systems consolidated from four to one'
    ],
    friction: [
      'Seven years post-Aetna, integration still incomplete',
      'Layoffs as primary adaptation mechanism',
      'Aetna ACA losses persisted four years before exit',
      '3.2/5.0 Glassdoor with burnout complaints',
      'M-form structure creates decision paralysis',
      '40% specialty prescriptions still paper/fax'
    ],
    quotable: 'CVS bought integration and got complexity. Now they are spending $20B more hoping software can do what strategy could not.',
  },

  'hewlett-packard-enterprise': {
    slug: 'hewlett-packard-enterprise',
    name: 'Hewlett Packard Enterprise',
    analysisDate: '2026-01-20',
    gpiScore: 5.85,
    state: 'Transitioning (upper)',
    marketCap: '$32.2B',
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: '18-month layoff timeline, slow Juniper integration, board approvals for cost-cutting, "show-me story" from Goldman' },
      { dimension: 'Error Correction', score: 6, explanation: 'Layoffs as primary adaptation, tariff impact hit before action, AI deployment alongside cuts not instead of' },
      { dimension: 'Knowledge Location', score: 5, explanation: 'GreenLake platform centralizing, AI agents in finance, but Juniper integration creating silos, 250 PoCs not scaled' },
      { dimension: 'Structural Lock-In', score: 6, explanation: '$14B Juniper taking year to integrate, hardware-heavy model despite GreenLake, HQ move shows flexibility but slow' },
      { dimension: 'Talent Flow', score: 6, explanation: 'Career opportunities rated 3.7/5 (lowest), 5% workforce cut, localized layoffs, advancement concerns' },
      { dimension: 'Capital Intensity', score: 7, explanation: 'Hardware business (servers, networking, AI infrastructure), $14B acquisition, owns GreenLake infrastructure' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'AI agents and GreenLake Intelligence in development, but 67K employees create filtering, tariff surprise suggests gaps' }
    ],
    pattern: 'The Split That Didn\'t Solve It',
    patternDescription: 'HPE was born from the 2015 HP split, a bet that smaller meant faster. Eleven years later, the company has 67,000 employees and still reaches for layoffs when margins compress. The Juniper acquisition is the latest attempt to buy transformation, shifting to higher-margin networking. But integration takes 18 months, and when tariffs hit, the response is arithmetic, not architecture. HPE has the tools (GreenLake, AI agents, agentic operations) but deploys them alongside cost-cutting, not instead of it. Structural changes designed for agility get absorbed by organizational mass.',
    keyNumbers: [
      'Revenue: $34.3B (TTM, October 2025)',
      'Employees: 67,000 (down from 61,000 in Oct 2024 due to Juniper, then cutting 2,500 over 18 months)',
      'Founded: November 1, 2015 (split from HP Inc.), HQ: Spring, Texas',
      'Structure: Public company, NYSE: HPE',
      'Leadership: Antonio Neri, President and CEO (since February 2018)',
      'Market Cap: $32.2B (January 2026)',
      'Fortune 500 Rank: 122',
      'Glassdoor: 4.0/5.0 (20,885 reviews), 83% recommend to friend, 66% positive outlook'
    ],
    enablers: [
      'Juniper Networks acquisition ($14B, July 2025) positions as #2 in enterprise networking, higher-margin business',
      'GreenLake platform shift from product to as-a-service model, reducing customer capital intensity',
      'GreenLake Intelligence (agentic AI operations framework) provides multi-cloud, multi-vendor visibility',
      'AI agents deployed in finance (Deloitte/Nvidia partnership) automating processes',
      '250 AI proof-of-concept trials showing experimentation culture',
      'AI revenue projected $7.4B (21% of total) in FY2026, significant growth'
    ],
    friction: [
      'Layoffs as primary error correction (2,500 jobs, 5%) instead of structural change',
      'Tariff impact reactive not proactive, margins hit before action',
      'Juniper integration taking over a year to reach 50% EBIT contribution',
      '18-month cost reduction timeline shows bureaucratic cycles',
      '67,000 employees create organizational mass, multiple management layers',
      'Career opportunities rating 3.7/5 indicates talent flow challenges'
    ],
    quotable: 'Juniper Networks was supposed to be the transformation lever. The 2,500 layoffs say otherwise.',
  },

  'coca-cola': {
    slug: 'coca-cola',
    name: 'Coca-Cola',
    analysisDate: '2026-01-19',
    gpiScore: 5.05,
    state: 'Transitioning (upper)',
    marketCap: '$303B',
    dimensions: [
      { dimension: 'Decision Latency', score: 5, explanation: 'CEO succession announced 4 months in advance, restructuring in "phases or waves," $1.1B deal took 2 years to reach production' },
      { dimension: 'Error Correction', score: 5, explanation: 'Proactive transformation, not reactive crisis; added 10+ billion-dollar brands under Quincey; surgical 2.5% layoffs vs 15-20% at peers' },
      { dimension: 'Knowledge Location', score: 5, explanation: '$1.1B Microsoft partnership to integrate fragmented digital network; bottler digital twins provide near-real-time visibility' },
      { dimension: 'Structural Lock-In', score: 6, explanation: 'Franchised bottler network creates coordination complexity; locked into beverages (unlike PepsiCo diversification)' },
      { dimension: 'Talent Flow', score: 5, explanation: '30-year internal ladder to CEO (Braun, Quincey); Glassdoor 3.8/5 for career opportunities; geographic rotation pattern' },
      { dimension: 'Capital Intensity', score: 4, explanation: 'Asset-light model (brands, not production); 6x revenue-to-market-cap multiple shows brand value dominates' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'Azure OpenAI deployed, digital twins operational, but agentic pilots only graduating to production in early 2026' }
    ],
    pattern: 'The Brand Empire Transformation',
    patternDescription: 'Coca-Cola represents a company that owns the most recognized brand on Earth and now has to figure out how to make that brand think at AI speed. Asset-light structure enables flexibility, but franchise network complexity creates coordination drag. The $1.1B Microsoft bet is not about technology. It is about whether software can accelerate a 134-year-old organization faster than carbonated muscle memory can slow it down.',
    keyNumbers: [
      'Revenue: $47.66B TTM (5% quarterly growth)',
      'Market Cap: $303B (41st most valuable globally)',
      'Employees: 69,700 (75 layoffs planned, 2.5% of HQ)',
      'Founded: 1892, Atlanta, Georgia',
      'Stock: KO (NYSE), Dividend King since 1920',
      'Fortune 500 Rank: 87',
      'CEO: Henrique Braun (effective March 31, 2026)',
      'Executive Chairman: James Quincey (March 2026)'
    ],
    enablers: [
      '$1.1B Microsoft partnership with Azure and OpenAI integration',
      'First-ever CDO role created with enterprise-wide integration mandate',
      'Proactive CEO succession planning (9-year tenure, orderly transition)',
      'Asset-light model enables faster pivots than manufacturing-heavy peers',
      'Digital twin technology showing measurable results (20% energy, 9% water savings)',
      'Strong employee sentiment (81% recommend, 74% positive outlook)'
    ],
    friction: [
      'Franchised bottler network creates coordination complexity across independent entities',
      'Restructuring in "phases or waves" signals institutional caution, not agility',
      'Pure beverage focus constrains diversification options (unlike PepsiCo)',
      '30-year internal ladder for CEO suggests closed leadership pipeline',
      'AI production deployment still months away despite $1.1B investment',
      'Macroeconomic swings, commodity costs, and water security acknowledged as AI offset risks'
    ],
    quotable: 'The brand is the moat. The question is whether the operating system behind it can evolve.',
  },

  'arthur-j-gallagher': {
    slug: 'arthur-j-gallagher',
    name: 'Arthur J. Gallagher & Co.',
    analysisDate: '2026-01-19',
    gpiScore: 4.15,
    state: 'Transitioning (lower)',
    marketCap: '$65',
    dimensions: [
      { dimension: 'Decision Latency', score: 4, explanation: 'Family control enables fast strategic decisions; 48 acquisitions in 2024. But 56K employees and VP micromanagement slow the middle.' },
      { dimension: 'Error Correction', score: 4, explanation: '2023 restructuring shows willingness to cut ($7.2M charge, 300 layoffs). AI investments real (GAIA cuts delivery 80%). Correction is operational, not cultural.' },
      { dimension: 'Knowledge Location', score: 4, explanation: 'GAIA centralizes analytics in cloud. Gallagher Drive provides real-time intelligence. But Glassdoor reveals siloed departments with no structured onboarding.' },
      { dimension: 'Structural Lock-In', score: 5, explanation: '600+ acquisitions create permanent integration complexity. Each deal brings legacy systems, cultures, comp structures. AssuredPartners adds $2.9B revenue and integration debt.' },
      { dimension: 'Talent Flow', score: 5, explanation: 'Glassdoor 3.5/5.0. Rigid pay system requiring 91% audit score for raises. Family at top three positions may limit non-family advancement.' },
      { dimension: 'Capital Intensity', score: 3, explanation: 'Asset-light insurance brokerage model. $13B revenue with 56K employees = $232K per head. Digital-first AI strategy reduces physical needs.' },
      { dimension: 'Knowledge Velocity', score: 4, explanation: 'GAIA cuts delivery times 80%. NLP/ML streamline claims triage. But 600+ acquired companies means 600+ legacy information pathways being rationalized.' }
    ],
    pattern: 'The Acquisition Federation',
    patternDescription: 'Gallagher has built a fourth global brokerage through relentless M&A execution, completing 600+ deals and adding 48 in 2024 alone. The family dynasty at the top moves fast, but each acquisition brings its own systems, cultures, and integration debt. AI platforms like GAIA and Gallagher Drive are the answer to a question that acquisitions created: how do you unify an empire built from hundreds of independent kingdoms?',
    keyNumbers: [
      'Revenue: $13.02B TTM (January 2026), up 20% YoY',
      'Employees: 56,000 globally',
      'Founded: 1927, Rolling Meadows, Illinois',
      'Structure: Public (NYSE: AJG), family-led dynasty',
      'Leadership: J. Patrick Gallagher Jr. (CEO 30 years), Thomas J. Gallagher (President), Patrick M. Gallagher (COO)',
      'Market Cap: $65-79B',
      'US Market Share: 4.4% (tied with Marsh, behind Aon at 6.9%)',
      'Global Rank: 3rd largest insurance broker by revenue'
    ],
    enablers: [
      'Family control enables fast strategic decisions without board politics',
      'GAIA platform cutting delivery times by 80%',
      'Asset-light model allows cheaper pivots than capital-intensive competitors',
      'Middle-market focus provides agility advantages over enterprise brokers',
      'Proven M&A execution machine with 600+ completed deals',
      '6-8% organic growth guidance shows underlying business strength'
    ],
    friction: [
      '600+ acquisitions create permanent integration complexity',
      'Pockets of toxic workplace culture reported on Glassdoor',
      'Rigid pay system requiring 91% audit score for raises',
      'VP micromanagement in some departments',
      'Family control may limit non-family executive advancement',
      'No structured onboarding or training in some areas'
    ],
    quotable: 'Gallagher acquires faster than it integrates. The top moves at field speed while the middle absorbs acquisition after acquisition.',
  },

  'broadcom': {
    slug: 'broadcom',
    name: 'Broadcom Inc.',
    analysisDate: '2026-01-20',
    gpiScore: 5.45,
    state: 'Transitioning (upper)',
    ticker: 'AVGO',
    marketCap: '$1.67',
    dimensions: [
      { dimension: 'Decision Latency', score: 5, explanation: '19-year CEO creates centralized decision-making, but VMware integration shows execution capability. Decisions concentrate upward, not at the edge.' },
      { dimension: 'Error Correction', score: 6, explanation: 'Primary mechanism is layoffs (3,014 total cuts post-VMware). Constant restructuring per Glassdoor suggests churn rather than course correction. China threat caught them off guard.' },
      { dimension: 'Knowledge Location', score: 5, explanation: '90% ASIC share and 80% Ethernet share show deep technical moats. But Glassdoor mentions political promotion dynamics and VMware integration creating siloed divisions.' },
      { dimension: 'Structural Lock-In', score: 6, explanation: '$69B VMware acquisition created permanent dual-structure complexity. Employee count opacity, constant restructuring, locked into subscription model. Reconfiguring would be costly and slow.' },
      { dimension: 'Talent Flow', score: 7, explanation: '49% recommend rate (below 50% threshold), 3.3/5 Glassdoor rating. Constant restructuring creating fear culture. Political layoffs of technical sales engineers. Firmly particle range.' },
      { dimension: 'Capital Intensity', score: 4, explanation: 'Fabless semiconductor design is capital-light. VMware software is capital-efficient. Can pivot without long depreciation cycles, but VMware integration adds operational complexity cost.' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'AI revenue doubling YoY shows fast market feedback. But China regulatory threat surprised them (4.2% stock drop). Glassdoor mentions fairness issues suggesting filtered information flows.' }
    ],
    pattern: 'The AI Windfall Masking Mass',
    patternDescription: 'Broadcom has the hottest product in tech right now (custom AI accelerators), with a $73 billion backlog and 100% YoY growth creating a revenue tailwind that hides organizational problems. But underneath the stock rally is a company that just added $69 billion in complexity with VMware and is using layoffs as its error correction mechanism. The market sees the AI windfall. The GPI sees the mass accumulation. When your culture is eroding (49% recommend rate) and your response to integration challenges is cutting 3,000+ people, you\'re not transforming, you\'re calcifying while the money still flows.',
    keyNumbers: [
      'Revenue: $63.88B TTM (January 2026), up from $54.52B in 2024',
      'Market Cap: $1.67 trillion (7th most valuable company globally)',
      'Employees: 37,000 (post-VMware, varying reports from 33,000-37,000)',
      'Founded: 1961 as HP Associates, Broadcom name from 1991',
      'Headquarters: Palo Alto, California',
      'CEO: Hock E. Tan (19.75 years tenure, appointed March 2006)',
      'Stock Ticker: AVGO (NASDAQ)',
      'Fortune 500 Rank: 134'
    ],
    enablers: [
      '90% share in custom ASICs, 80% in high-speed Ethernet, $73B backlog',
      'AI semiconductor revenue expected to hit $8.2B in Q1 2026 (up 100% YoY)',
      'Hyperscaler partnerships',
      'VMware subscription model creating predictable recurring revenue',
      'Fabless model enabling strategic flexibility',
      'Wi-Fi 8 platform launch (January 2026)'
    ],
    friction: [
      'VMware integration drag ($69B acquisition, employee count opacity)',
      'Layoffs as primary adaptation (2,767 post-VMware, 247 more in Dec 2025/Jan 2026)',
      'Culture erosion (3.3/5 Glassdoor, 49% recommend, constant restructuring)',
      'Work-life balance and management issues per Glassdoor',
      'Political talent flows (fairness concerns in promotions, political layoffs)',
      'China regulatory threat (Beijing targeting VMware in SOEs, 4.2% stock drop)'
    ],
    quotable: 'The market sees the AI windfall. The GPI sees the mass accumulation.',
  },

  'dicks-sporting-goods': {
    slug: 'dicks-sporting-goods',
    name: 'Dick\'s Sporting Goods',
    analysisDate: '2025-12-25',
    gpiScore: 6.0,
    state: 'Transitioning (upper)',
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: '0.20' },
      { dimension: 'Knowledge Location', score: 5, explanation: '0.15' },
      { dimension: 'Error Correction', score: 5, explanation: '0.20' },
      { dimension: 'Structural Lock-In', score: 7, explanation: '0.15' },
      { dimension: 'Talent Flow', score: 6, explanation: '0.10' },
      { dimension: 'Capital Intensity', score: 7, explanation: '0.10' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: '0.10' }
    ],
    pattern: 'Organizational Pattern',
    patternDescription: '',
    keyNumbers: [

    ],
    enablers: [

    ],
    friction: [

    ],
  },

  'southern-company': {
    slug: 'southern-company',
    name: 'Southern Company',
    analysisDate: '2026-01-20',
    gpiScore: 6.55,
    state: 'Transitioning (upper)',
    ticker: 'SO',
    marketCap: '$95.51B',
    dimensions: [
      { dimension: 'Decision Latency', score: 7, explanation: 'Regulated utility with Board → CEO → Management Council (247 execs) → 28,600 employees. Data center response was extending coal plants (regulatory approval process, not market speed).' },
      { dimension: 'Error Correction', score: 6, explanation: 'Coal extensions = doubling down on fossil fuel instead of accelerating clean transition. AI pilots show experimentation, but Glassdoor declining 3% suggests not correcting employee satisfaction erosion.' },
      { dimension: 'Knowledge Location', score: 5, explanation: 'Deploying AI platforms (digital twins, meter hub, customer lakehouse) to centralize data, but 247 execs and vertically integrated structure create silos. Pilots not yet enterprise-wide.' },
      { dimension: 'Structural Lock-In', score: 8, explanation: 'Owns 44 GW rate-regulated capacity, extending coal plants, vertically integrated across generation/transmission/distribution/gas. $166B EV on $28.9B revenue = massive fixed asset base.' },
      { dimension: 'Talent Flow', score: 5, explanation: 'Traditional utility careers, recent COO from within. Pension/401k = tenure-based comp. 80% recommend but declining ratings. No layoffs = stability but no talent refresh.' },
      { dimension: 'Capital Intensity', score: 9, explanation: 'Utility sector = highest capital intensity. $166B EV, 30-50 year plant depreciation cycles. Every strategic decision measured in billions and multi-year timelines.' },
      { dimension: 'Knowledge Velocity', score: 6, explanation: 'AI platforms improving operational data flow, but regulatory reporting is quarterly/annual. Glassdoor decline while company reports growth suggests leadership feedback lag.' }
    ],
    pattern: 'Regulated Rigidity with AI Aspiration',
    patternDescription: 'Southern represents the utility business model encountering the AI era: capital-intensive infrastructure that can\'t pivot meeting demand for energy from technologies built to move fast. The company is extending coal plants to power data centers while deploying AI to optimize operations it structurally cannot transform. This is optimization within constraints, not escape from constraints.',
    keyNumbers: [
      'Revenue: $28.91B trailing twelve months (2025)',
      'Employees: 28,600',
      'Market Cap: $95.51B (January 2026)',
      'Enterprise Value: $166B',
      'Founded: November 9, 1945, Headquarters: Atlanta, Georgia',
      'Stock Ticker: SO (NYSE)',
      'Fortune 500 Rank: 119',
      'Leadership: Christopher C. Womack (Chairman, President, CEO), Stanley W. Connally Jr. (EVP, COO since Jan 2025), David P. Poroch (EVP, CFO)'
    ],
    enablers: [
      'AI platform deployment (digital twins, Meter Intelligence Hub, customer lakehouse, regulatory AI)',
      'Data center growth (8 GW contracts, 50+ GW pipeline, 8% annual growth forecast)',
      'PowerSecure partnership (152 MW delivered since Aug 2024)',
      'Strong financials ($95.5B market cap, 7% EPS growth)',
      'Employee stability (80% recommend, no layoffs)',
      'Market leadership (ranks 1st in quality, pricing, service vs competitors)'
    ],
    friction: [
      'Coal plant extensions (locking in fossil fuel for another decade)',
      'Capital intensity trap ($166B EV on $28.9B revenue)',
      'Regulatory pacing (state commission approvals create month-long cycles)',
      'Executive layering (247 execs, new COO layer added)',
      'Declining employee sentiment (Glassdoor down 3%, "harshly underpaid" comments)',
      'Vertically integrated lock-in (can\'t spin off divisions)'
    ],
    quotable: 'Utilities don\'t pivot, they file rate cases.',
  },

  'cigna': {
    slug: 'cigna',
    name: 'The Cigna Group',
    analysisDate: '2026-01-19',
    gpiScore: 5.35,
    state: 'Transitioning (upper)',
    marketCap: '$74.5B',
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: '16-year CEO tenure, C-suite reshuffling needed 6 years post-merger to consolidate authority' },
      { dimension: 'Error Correction', score: 5, explanation: 'Rebate-free model shift shows adaptability, but data breach went undetected for over a year' },
      { dimension: 'Knowledge Location', score: 5, explanation: 'Evernorth data pipeline enables AI, but Glassdoor cites finger-pointing culture and silos' },
      { dimension: 'Structural Lock-In', score: 6, explanation: '$67B merger still being integrated, legacy PBM model constrained until 2028 transition' },
      { dimension: 'Talent Flow', score: 6, explanation: '3+ years of layoffs, declining Glassdoor, office politics over performance' },
      { dimension: 'Capital Intensity', score: 4, explanation: 'Services-based model with 15.5% ROE, relatively capital-light vs vertically integrated peers' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'AI tools (80%+ satisfaction) accelerate flow, but micromanagement and merger complexity slow it' }
    ],
    pattern: 'Merger Hangover',
    patternDescription: 'Cigna made a $67B bet on vertical integration with Express Scripts, and six years later they are still trying to digest it. Big acquisition creates complexity, complexity requires restructuring, restructuring means layoffs, layoffs damage culture, damaged culture slows integration, slow integration triggers more restructuring. Breaking this cycle requires either a pause (unlikely) or technology that bypasses organizational resistance (the AI bet).',
    keyNumbers: [
      'Revenue: $247.1B (2024), up 27% YoY',
      'Net Income: $3.4B (2024), down 34% YoY',
      'Market Cap: $74.5B (January 2026)',
      'Employees: 73,500 (after multiple rounds of layoffs)',
      'Fortune 500 Rank: #13 (2025), Connecticut\'s largest company',
      'Founded: 1792 (INA) / 1982 merger creating Cigna',
      'Headquarters: Bloomfield, Connecticut',
      'CEO: David Cordani (since 2009, 16 years)'
    ],
    enablers: [
      'Rebate-free pharmacy model transition by 2028',
      'AI Center of Enablement with cross-functional governance',
      'AI member assistant with 80%+ satisfaction',
      'Cancer early detection AI (22-27 days earlier)',
      'COO consolidation creating unified authority',
      'Capital-light service model (15.5% ROE)'
    ],
    friction: [
      '3+ years of continuous layoffs',
      'Express Scripts integration still incomplete after 6 years',
      'Glassdoor 3.6/5.0 (declining), finger-pointing culture',
      'Data breach undiscovered Oct 2024-Nov 2025',
      'DOJ Medicare Advantage fraud lawsuit ($1.4B alleged)',
      'Algorithm-based claim denial controversy ($500K CA fine)'
    ],
    quotable: 'Cigna is essentially performing open-heart surgery while running a marathon.',
  },

  'unitedhealth': {
    slug: 'unitedhealth',
    name: 'UnitedHealth Group',
    analysisDate: '2026-01-18',
    gpiScore: 6,
    state: 'Transitioning (upper)',
    marketCap: '$314.19B',
    dimensions: [
      { dimension: 'Decision Latency', score: 7, explanation: '400K employees, massive leadership churn 2025, committee-driven Medicare response' },
      { dimension: 'Error Correction', score: 6, explanation: 'AI denial scandal persisted despite 90% error rate, defamation lawyers vs. reform' },
      { dimension: 'Knowledge Location', score: 5, explanation: '1,000 AI apps and United AI Studio, but siloed divisions, fragmented Optum systems' },
      { dimension: 'Structural Lock-In', score: 7, explanation: 'Vertical integration creates interdependencies, Medicare dependency, legacy systems' },
      { dimension: 'Talent Flow', score: 6, explanation: 'Metric-driven surveillance culture, keystroke monitoring, veteran layoffs' },
      { dimension: 'Capital Intensity', score: 4, explanation: 'Insurance/services relatively asset-light, but clinic network and AI investments' },
      { dimension: 'Knowledge Velocity', score: 6, explanation: 'AI tools improving frontline speed, but medical cost surprises show filtering' }
    ],
    pattern: 'Mass Under Fire',
    patternDescription: 'UnitedHealth represents the paradox of scale in healthcare: big enough to dominate but too big to adapt. The same vertical integration that made them America\'s largest health company creates the structural lock-in that makes transformation painful. When problems emerge, the organization responds with particle behaviors: lawyers instead of reform, layoffs instead of redesign, leadership churn instead of strategic clarity.',
    keyNumbers: [
      'Revenue: $435.15B TTM (2026), up from $400.27B in 2024',
      'Market Cap: $314.19B (down 31.69% YoY, lost $288B in one month)',
      'Employees: 400,000 (30,000 offered buyouts in early 2026)',
      'Founded: 1977, HQ: Eden Prairie, Minnesota',
      'Structure: Public (NYSE: UNH), P/E 18x vs. 5-year average 25x',
      'Leadership: CEO Stephen Hemsley (returned 2025), CFO Wayne DeVeydt (since Aug 2025)',
      'Fortune 500 Rank: #3 (up from #4)',
      'Members: 51 million globally'
    ],
    enablers: [
      '1,000 AI applications in production across claims, transcription, customer service',
      'United AI Studio platform with AI Review Board governance',
      '20,000 engineers using AI tools, 60 million lines of AI-validated code',
      '$1 billion projected AI cost savings by 2026',
      'Smart Choice tool saving members $123 per provider visit',
      'Rural Payment Acceleration Pilot (30 to 15 day Medicare payment)'
    ],
    friction: [
      'CEO assassination and public backlash against insurance industry',
      'Federal criminal investigation for possible Medicare fraud',
      'AI claims denial scandal with 90% error rate persisting despite lawsuits',
      '30,000 employee buyout program, layoffs as primary adaptation mechanism',
      '"Historically high" medical costs surprised leadership, information flow gaps',
      'Massive leadership churn in 2025 (CEO, CFO, Optum CEO, division CEOs)'
    ],
    quotable: 'The largest healthcare company in America is in crisis mode. A CEO assassination, federal fraud investigations, $288 billion in lost market value, and 30,000 employee buyouts reveal an organization where mass has become a liability.',
  },

  'state-farm': {
    slug: 'state-farm',
    name: 'State Farm',
    analysisDate: '2026-01-19',
    gpiScore: 5.45,
    state: 'Transitioning (upper)',
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: 'Mutual structure requires board consensus, agent network of 19,200+ adds complexity, "State Farm nice" culture avoids conflict' },
      { dimension: 'Error Correction', score: 6, explanation: 'Oklahoma racketeering lawsuit alleges systematic claims denial program, AM Best downgrade from A++ to A+, voluntary exit first since 2017' },
      { dimension: 'Knowledge Location', score: 5, explanation: '326 AI patents and digital knowledge assistant deployed, but agent network creates silos and high turnover means knowledge walks out' },
      { dimension: 'Structural Lock-In', score: 6, explanation: 'Mutual structure limits capital flexibility, cannot pivot to direct-to-consumer like GEICO, 102 years of legacy processes' },
      { dimension: 'Talent Flow', score: 5, explanation: '55% recommend on Glassdoor, high turnover cited, training compressed from 1 year to 6 months, CEO is 30-year veteran' },
      { dimension: 'Capital Intensity', score: 4, explanation: 'Insurance is asset-light vs manufacturing, but mutual structure limits capital access, $7.5B wildfire exposure' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'Digital knowledge assistant and Salesforce deployed, but reviews say "not keeping up with trends," outsourcing fragments knowledge' }
    ],
    pattern: 'The Good Neighbor Paradox',
    patternDescription: 'State Farm promises to be "like a good neighbor," but lawsuits tell a different story. The company invests in transformation tools while maintaining the behaviors of rigidity. The "State Farm nice" culture prevents the difficult decisions transformation requires. The mutual structure that protects from short-term pressure also insulates from urgent correction signals.',
    keyNumbers: [
      'Revenue: $123B (2024), up from $104.2B in 2023',
      'Employees: 65,000 (13,000 at Bloomington HQ)',
      'Founded: June 1922, Bloomington, Illinois',
      'Structure: Mutual (policyholder-owned, not publicly traded)',
      'Leadership: Jon Farney, President and CEO (June 2024)',
      'Fortune 500 Rank: #36 (2025)',
      'Net Worth: $143.2B (2021)',
      'Market Share: 16.78% (largest US auto insurer)'
    ],
    enablers: [
      '326 AI patents filed since 2014, industry-leading',
      '$1.66B venture funding deployed',
      'New CDIO Joe Park from Yum Brands',
      'Digital knowledge assistant for contact centers',
      'Underwriting/billing automation rolling out',
      'Market position (16.78% share) provides scale'
    ],
    friction: [
      'Oklahoma racketeering lawsuit ("Hail Focus Initiative")',
      'LA County wildfire claims investigation',
      'AM Best downgrade from A++ to A+',
      'Glassdoor declining 4% YoY, only 55% recommend',
      'High turnover, most leave within first year',
      '"Unbearable metrics" and micromanagement'
    ],
    quotable: 'State Farm has 326 AI patents but faces a racketeering lawsuit for systematic claims denial. The gap between innovation investment and operational reality is the whole story.',
  },

  'general-dynamics': {
    slug: 'general-dynamics',
    name: 'General Dynamics',
    analysisDate: '2026-01-19',
    gpiScore: 5.6,
    state: 'Transitioning (upper)',
    marketCap: '$99B',
    dimensions: [
      { dimension: 'Decision Latency', score: 5, explanation: 'Four autonomous segments, but embedded in government procurement cycles' },
      { dimension: 'Error Correction', score: 5, explanation: 'Delivers where Boeing fails, but uses layoffs as primary adaptation (97 WARN notices)' },
      { dimension: 'Knowledge Location', score: 5, explanation: 'GDIT building AI infrastructure, but four segments have different cultures' },
      { dimension: 'Structural Lock-In', score: 7, explanation: 'Decades-long submarine and tank programs, cannot exit without destroying business' },
      { dimension: 'Talent Flow', score: 5, explanation: 'Mission Systems 4.0 Glassdoor vs parent 3.3, severe submarine welder shortage' },
      { dimension: 'Capital Intensity', score: 8, explanation: 'Nuclear shipyards, Gulfstream plants, tank facilities cannot be repurposed' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'DOGMA system and AI partnerships, but security classification limits sharing' }
    ],
    pattern: 'Execution Anchor',
    patternDescription: 'GD succeeds precisely because it cannot move quickly. In a world where Boeing fumbles, GD delivers. The same capital intensity and structural lock-in that limit flexibility also create barriers competitors cannot breach. Nuclear submarine construction is not a business you enter. GD has anchored itself to essential programs, and that anchor is both burden and competitive moat.',
    keyNumbers: [
      'Revenue: $51.5B TTM (Q3 2025), up 11.85% YoY',
      'Employees: 117,000',
      'Founded: 1952, HQ: Reston, Virginia',
      'Structure: Public (NYSE: GD)',
      'Leadership: Phebe Novakovic, Chairman and CEO (since 2013)',
      'Market Cap: $99B (January 2026)',
      'Fortune 500 Rank: #89',
      'Backlog: $109.8B'
    ],
    enablers: [
      'Federated structure with segment presidents enables local decision-making',
      'GDIT AI investment (AWS, Google Cloud, Centers of Excellence)',
      '$1.5 trillion defense supercycle provides unprecedented demand visibility',
      'Program execution track record vs Boeing gives competitive advantage',
      '31-year dividend growth streak demonstrates consistent capital allocation',
      'Gulfstream aerospace growth (30% YoY) shows commercial diversification'
    ],
    friction: [
      'Capital intensity (8/10) limits strategic pivots',
      'Structural lock-in (7/10) from decades-long programs',
      'Labor shortage for specialized nuclear submarine talent',
      'Supply chain bottlenecks for large castings and forgings',
      'Layoffs as error correction mechanism (97 WARN notices, 10,847 affected)',
      'Siloed business units with different cultures (3.3 vs 4.0 Glassdoor)'
    ],
    quotable: 'General Dynamics proves that capital intensity and government dependence do not doom a company to calcification, but its $95B backlog is both moat and anchor.',
  },

  'allstate': {
    slug: 'allstate',
    name: 'Allstate Corporation',
    analysisDate: '2026-01-19',
    gpiScore: 5.55,
    state: 'Transitioning (upper)',
    marketCap: '$54.8B',
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: '18-year CEO tenure, command and control culture, agent comp changes announced 1+ year ahead' },
      { dimension: 'Error Correction', score: 6, explanation: 'Annual layoffs as adaptation, litigate-then-settle pattern on data privacy lawsuits' },
      { dimension: 'Knowledge Location', score: 5, explanation: 'Cloud-first since 2019, AI copilot standardizing knowledge, but agent network creates silos' },
      { dimension: 'Structural Lock-In', score: 6, explanation: '93-year-old company, agent network investment, National General integration ongoing' },
      { dimension: 'Talent Flow', score: 6, explanation: '53% recommend on Glassdoor, annual layoffs creating fear, slow career progression' },
      { dimension: 'Capital Intensity', score: 4, explanation: 'Asset-light insurance model, cloud reducing infrastructure, $1.19M revenue per employee' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'Gen AI accelerating specific channels (43-sec claims), but hierarchy slows human layers' }
    ],
    pattern: 'Layoffs as Error Correction',
    patternDescription: 'Allstate exemplifies organizations that mistake workforce reduction for organizational adaptation. The company runs annual layoff cycles while simultaneously investing billions in AI and cloud transformation. The technology is getting faster; the culture is getting more fearful. This creates a two-speed organization: digital processes moving at 43-second speed, human processes paralyzed by job insecurity. You cannot achieve fluidity through fear.',
    keyNumbers: [
      'Revenue: $66.2B TTM (December 2025), up 12.3% from 2023',
      'Market Cap: $54.8B (January 2026)',
      'Employees: 55,400 (Q1 2024: 8% workforce reduction)',
      'Founded: April 17, 1931 (as part of Sears, Roebuck & Co.)',
      'Headquarters: Northbrook, Illinois',
      'CEO: Tom Wilson (since 2007, Chair since 2008)',
      'Fortune 500 Rank: #79 (2019 reference)',
      'Stock: ALL (NYSE), PE Ratio 6.75, EPS $30.85'
    ],
    enablers: [
      'Cloud-first transformation since 2019 (AWS, Google BigQuery, Azure multicloud)',
      'AI copilot deployed to all 14,000 claims investigators',
      'Claims filing time reduced from 4 minutes to 43 seconds',
      '40% of business processes digitized',
      'ALLI AI system for customer interactions launched',
      'BCG partnership tripled prediction model performance'
    ],
    friction: [
      'Annual layoff cycles (8% in Q1 2024 alone)',
      'Multiple data privacy lawsuits',
      'Litigate-then-settle pattern',
      'Command and control management culture',
      'Agent compensation restructuring threatening smaller agencies',
      'National General acquisition integration still ongoing 5+ years later'
    ],
    quotable: 'Claims time dropped 82%, but Glassdoor reviews still warn about slow career progression. The technology is improving; the organizational health is not.',
  },

  'nextera-energy': {
    slug: 'nextera-energy',
    name: 'NextEra Energy',
    analysisDate: '2026-01-20',
    gpiScore: 5.9,
    state: 'Transitioning (upper)',
    marketCap: '$167B',
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: 'Traditional utility hierarchy with CEO, subsidiary CEOs, EVPs, multi-state regulatory coordination. Google partnership shows strategic agility, but core operations remain bureaucratic.' },
      { dimension: 'Error Correction', score: 5, explanation: 'Annual layoffs and Accelerate 3.0 initiatives suggest using headcount cuts as primary adaptation. But strategic pivot to AI data centers and Symmetry acquisition show real course correction capability. Mixed.' },
      { dimension: 'Knowledge Location', score: 5, explanation: 'Google Cloud AI tools (TimesFM 2.5, WeatherNext 2) deploying enterprise-wide by mid-2026. But dual structure (FPL regulated, Energy Resources competitive) creates legacy silos. Transitioning.' },
      { dimension: 'Structural Lock-In', score: 7, explanation: 'Utility business model means massive infrastructure (power plants, transmission, distribution) with decade-plus commitments. Gigawatt data centers with dedicated generation represent billions in capital. Cannot pivot without stranding assets.' },
      { dimension: 'Talent Flow', score: 6, explanation: 'Internal promotions exist (Bores to FPL President). But 59.7 hour weeks, 3.5/5 work-life balance, annual layoff cycles create churn and uncertainty. Glassdoor mentions "no job security."' },
      { dimension: 'Capital Intensity', score: 8, explanation: 'Fundamentally capital-intensive infrastructure business. Building power plants, acquiring gas suppliers (Symmetry), developing renewables, constructing data centers. 30-50 year asset lives, high fixed costs, long depreciation.' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'AI tools for real-time equipment monitoring and predictive maintenance launching mid-2026. But currently traditional quarterly reporting cadence and regulatory filing schedules. Improving but not field-state yet.' }
    ],
    pattern: 'Software Overlay on Hardware Reality',
    patternDescription: 'NextEra is trying to use AI and software partnerships to accelerate an organization fundamentally constrained by physics. Google Cloud can give them real-time equipment monitoring and predictive maintenance, but it cannot change the fact that power plants take years to build, transmission lines require regulatory approval, and capital commitments span decades. The AI tools address knowledge velocity and decision latency at the operational edge, but the core business model remains capital-intensive infrastructure with regulatory oversight. They are betting software can compress the decision-to-action cycle even when the actions themselves remain bound by construction timelines and approval processes. High capital intensity (8) meets improving knowledge velocity (5 trending down). This is wh',
    keyNumbers: [
      'Revenue: $26.3B (LTM, up 0.2% YoY)',
      'Market Cap: $167B (January 2026, largest utility globally)',
      'Employees: 16,800 across US and Canada',
      'Founded: 1925, HQ: Juno Beach, Florida',
      'Structure: Public company (NYSE: NEE)',
      'Leadership: John W. Ketchum (Chairman, President, CEO)',
      'Fortune 500 Rank: #117 by market cap',
      'Glassdoor: 3.9/5, 71% recommend'
    ],
    enablers: [
      'Google Cloud enterprise-wide AI deployment with TimesFM 2.5, WeatherNext 2, and power flow modeling',
      'First commercial AI grid management product launching mid-2026 via Google Cloud Marketplace',
      'Strategic pivot to AI data center power demand, raising 2026 EPS guidance based on market shift',
      'Multi-gigawatt data center partnerships with Google and positioning for sustained growth',
      'Symmetry Energy acquisition (Q1 2026) expanding into gas supply to support data center demand',
      'Largest renewable energy infrastructure developer position enabling clean energy data center pitch'
    ],
    friction: [
      'Annual layoff cycles (5% in 2024, rumored 35-40% Houston cuts in 2026) creating employee uncertainty',
      '"Accelerate 3.0" restructuring initiatives perceived as recurring headcount reductions rather than strategic transformation',
      'Work-life balance rated 3.5/5 with employees reporting 59.7 hour average weeks in some groups',
      'Glassdoor reviews mentioning "no job security" and "every year job cuts" despite strong financial performance',
      'Massive capital intensity ($167B market cap utility with gigawatt-scale infrastructure) limiting strategic flexibility',
      'Multi-state regulated operations requiring coordination with state utility commissions slowing decision-making'
    ],
    quotable: 'The largest utility by market cap is betting Google can do what physics cannot: make gigawatt-scale infrastructure move at software speed.',
  },

  'duke-energy': {
    slug: 'duke-energy',
    name: 'Duke Energy',
    analysisDate: '2026-01-20',
    gpiScore: 6.65,
    state: 'Transitioning (upper)',
    marketCap: '$90.35B',
    dimensions: [
      { dimension: 'Decision Latency', score: 7, explanation: 'Multi-month regulatory approvals across seven states, annual decision cycles for major moves' },
      { dimension: 'Error Correction', score: 6, explanation: 'Three rounds of layoffs in three years using same playbook, coal exit takes until 2035' },
      { dimension: 'Knowledge Location', score: 5, explanation: 'AWS partnership codifying knowledge but fighting 122 years of utility silos across seven states' },
      { dimension: 'Structural Lock-In', score: 8, explanation: '$100B sunk in 40-60 year infrastructure, nuclear reactors, regulated service territories by law' },
      { dimension: 'Talent Flow', score: 6, explanation: '4.0/5 Glassdoor, limited advancement per reviews, 40-year tenures, layoff churn not healthy flow' },
      { dimension: 'Capital Intensity', score: 9, explanation: '$19B/year average capex, nuclear reactors cost billions, can\'t SaaS electricity distribution' },
      { dimension: 'Knowledge Velocity', score: 6, explanation: 'AWS cuts simulation from weeks to 15 minutes, but 26K employees and quarterly rhythms slow it back down' }
    ],
    pattern: 'Capital as Transformation Substitute',
    patternDescription: 'Duke Energy is trying to spend its way out of organizational inertia. They\'ve invested $100B in the last decade and are planning $190B more over the next ten years. The AWS partnership brings cutting-edge AI. The nuclear expansion signals long-term strategic thinking. But the organization itself, measured by decision latency, error correction, and talent flow, moves at utility speed while the market demands tech speed.',
    keyNumbers: [
      'Revenue: $31.66B (TTM, up 4.8% YoY)',
      'Employees: 26,413',
      'Founded: 1904, HQ: Charlotte, North Carolina',
      'Structure: Public company (NYSE: DUK)',
      'Leadership: Harry Sideris, CEO (since April 2025)',
      'Market Cap: $90.35B (January 2026)',
      'Fortune 500 Rank: 150',
      'Glassdoor: 4.0/5.0, 75% recommend to a friend'
    ],
    enablers: [
      'AWS partnership reducing grid simulation from weeks to 15 minutes using generative AI',
      'Nuclear expansion with small modular reactor permit applications',
      'AI integration across grid operations (DISTRIBUTECH 2026 presentations)',
      'Serving fastest-growing US region (Southern states, data center boom)',
      '$190B capital plan, largest regulated investment in industry',
      '13 gigawatts of new generation coming online through 2030'
    ],
    friction: [
      'Layoffs as primary adaptation tool (third round in three years)',
      'Regulatory latency across seven state jurisdictions',
      '$100B infrastructure lock-in with 40-60 year depreciation',
      'Coal exit not until 2035 (three decades after climate risk clear)',
      'Glassdoor notes limited career mobility and routine work',
      'Annual decision cycles when market moves quarterly'
    ],
    quotable: 'Duke Energy is betting $190B that you can buy your way out of particle state. The grid is modernizing. The org chart is not.',
  },

  'general-motors': {
    slug: 'general-motors',
    name: 'General Motors',
    analysisDate: '2026-01-19',
    gpiScore: 5.9,
    state: 'Transitioning (upper)',
    marketCap: '$76B',
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: 'Glassdoor cites "approval from multiple teams for small changes," but Barra\'s consolidated leadership enables strategic pivots' },
      { dimension: 'Error Correction', score: 5, explanation: 'Taking $7.6B in EV write-downs shows adaptation, but relies on layoffs rather than process change' },
      { dimension: 'Knowledge Location', score: 5, explanation: 'Building "data factory" with NVIDIA digital twins, but four brand divisions create natural silos' },
      { dimension: 'Structural Lock-In', score: 7, explanation: '116-year legacy, billions in factory infrastructure, $7.6B write-down shows cost of direction change' },
      { dimension: 'Talent Flow', score: 6, explanation: 'UAW structure limits flexibility, Glassdoor shows "declining trust in leadership"' },
      { dimension: 'Capital Intensity', score: 8, explanation: 'Manufacturing requires massive physical assets, every pivot costs billions' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'Ultifi platform enables OTA updates, but "lack of transparency" persists per Glassdoor' }
    ],
    pattern: 'The Detroit Paradox',
    patternDescription: 'GM is simultaneously too big to pivot quickly and too profitable to fail slowly. Record profits ($14.9B), record stock (+55%), and U.S. sales leadership mean no burning platform forces transformation. Yet $7.6B in EV write-downs reveals the cost of moving slower than the market. The company can see the software-defined future clearly but must drag the weight of a century of steel to get there.',
    keyNumbers: [
      'Revenue: $187.4B (2024), up 9.08% YoY',
      'Employees: 162,000 ($1.16M revenue per employee)',
      'Market Cap: $76B (NYSE: GM)',
      'Fortune 500 Rank: #6',
      'Founded: September 16, 1908 in Detroit, Michigan',
      'Structure: Public company, four brand divisions',
      'Leadership: Mary Barra, Chair and CEO since 2014',
      '2025 Projected Net Profit: $12-13B (after record $14.9B in 2024)'
    ],
    enablers: [
      'Mary Barra as Chair/CEO since 2014-2016 provides leadership continuity',
      '$10.9B annual ICT spending building digital infrastructure',
      'Ultifi software platform enabling vehicle-as-platform model',
      'Google Gemini integration (2026) bringing external AI',
      'NVIDIA Omniverse digital twins reducing manufacturing cycles',
      'Record profitability provides transformation capital'
    ],
    friction: [
      '116-year legacy creating structural lock-in across dozens of facilities',
      '162,000 employees and four brand divisions create complexity',
      'Process inconsistency "from team to team"',
      'Glassdoor',
      'UAW union structure limiting talent flexibility',
      'Capital intensity'
    ],
    quotable: 'GM is betting $10.9B in annual tech spending can drag 116 years of steel into a software-defined future.',
  },

  'qualcomm': {
    slug: 'qualcomm',
    name: 'Qualcomm',
    analysisDate: '2026-01-20',
    gpiScore: 4.75,
    state: 'Transitioning (upper)',
    marketCap: '$176B',
    dimensions: [
      { dimension: 'Decision Latency', score: 5, explanation: 'Fast tech execution (9% PC share in 18 months), but activist pressure needed to spur restructuring, hierarchical in some divisions' },
      { dimension: 'Error Correction', score: 5, explanation: 'Recognized Apple problem and pivoted hard to automotive/PC/robotics, but layoffs are primary adaptation tool, not process redesign' },
      { dimension: 'Knowledge Location', score: 4, explanation: 'IP licensing core business (distributed), but Glassdoor cites too many internal tools and legacy systems creating silos' },
      { dimension: 'Structural Lock-In', score: 5, explanation: 'Fabless model reduces capital lock-in, entering new markets successfully, but public company quarterly pressure and legacy mobile dependency' },
      { dimension: 'Talent Flow', score: 5, explanation: '78% recommend but promotions slow and opaque, morale down 5% over 12 months, layoff churn not healthy mobility' },
      { dimension: 'Capital Intensity', score: 4, explanation: 'Fabless model is asset-light, but heavy R&D required, $2.5B acquisition shows flexibility, IP licensing high-margin' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'Fast product launches (CES 2026), but internal tools create friction, hierarchical filtering in some teams' }
    ],
    pattern: 'Diversification Under Pressure',
    patternDescription: 'Qualcomm had to be pushed to transform. The Apple revenue loss and activist investor letter forced the restructuring. But once in motion, the company executes well. They\'re entering new markets (automotive, PC, robotics) with real products and real partnerships, not PowerPoints. The GPI shows the tension. Fast tech development, slower organizational reconfiguration. They\'re betting technology velocity can compensate for institutional inertia. At 4.75, the bet is working, but it\'s not physics-defying.',
    keyNumbers: [
      'Revenue: $44.3B (FY2025), up 13.7%',
      'Employees: 49,000',
      'Founded: 1985, HQ: San Diego, CA',
      'Structure: Public (NASDAQ: QCOM)',
      'Leadership: Cristiano Amon, CEO (since June 2021)',
      'Market Cap: $176B (Jan 2026)',
      'Fortune 500 Rank: #137',
      'Glassdoor: 3.9/5.0, 78% recommend, down 5% over 12 months'
    ],
    enablers: [
      '9% PC market share captured in 18 months (aggressive market entry)',
      '400 million vehicles with Snapdragon Digital Chassis (massive automotive footprint)',
      'CES 2026 robotics initiative (Dragonwing IQ10 processors, $1T market projection by 2040)',
      'Five IoT acquisitions expanding capabilities (Arduino, Edge Impulse, Augentix, Focus.AI, Foundries.io)',
      '$2.5B Alphawave acquisition pending (UK connectivity chips)',
      'Strong partnerships with Google, Toyota, Leapmotor'
    ],
    friction: [
      'Layoffs as primary adaptation mechanism (226 workers cut Nov 2024, more planned 2026)',
      'Activist investor pressure required to spur restructuring (not internal initiative)',
      'Glassdoor rating down 5% over 12 months (employee morale dropping)',
      'Promotions slow and opaque (political vs merit-based)',
      'Too many internal tools and legacy systems (knowledge silos)',
      'Hierarchical decision-making in some divisions'
    ],
    quotable: 'The company that powers every smartphone is betting it can power everything else. At 4.75, the bet is working, but the physics of a 49,000-person public company are real.',
  },

  'accenture': {
    slug: 'accenture',
    name: 'Accenture',
    analysisDate: '2026-01-20',
    gpiScore: 4.45,
    state: 'Transitioning (lower)',
    marketCap: '$177.5',
    dimensions: [
      { dimension: 'Decision Latency', score: 5, explanation: 'CEO can execute major moves quickly (Faculty acquisition, $865M restructuring), but 784,000 employees across 120 countries still require multiple approval layers. Glassdoor 3.6/5.0 culture rating suggests mixed autonomy.' },
      { dimension: 'Error Correction', score: 4, explanation: 'Aggressive workforce rebalancing (22,000 layoffs in 2025) while training 550,000 on AI. CEO explicitly exiting workers who cannot reskill. Acquiring AI-native firms (Faculty). AI talent grew from 40,000 to 77,000 in two years. Forced adaptation, not organic.' },
      { dimension: 'Knowledge Location', score: 4, explanation: 'Training 550,000 on gen AI shows scale distribution capability. Faculty acquisition brings 400 specialists. Glassdoor 4.0/5.0 diversity suggests openness. But consulting traditionally has partner knowledge hoarding. New AI specialist class (77,000) may create new silos.' },
      { dimension: 'Structural Lock-In', score: 5, explanation: 'Can execute $865M restructuring and integrate acquisitions. Public company creates quarterly earnings pressure. 784,000 employees in 120+ countries = massive coordination costs. Can shift service lines but changing how everyone works is like turning a container ship.' },
      { dimension: 'Talent Flow', score: 5, explanation: 'Layoffs create forced churn, not organic mobility. Consulting up-or-out model is rigidity disguised as movement. Training 70,000 in agentic AI shows some internal mobility. Glassdoor 3.6/5.0 career opportunities. Exec team averages 24 years tenure (low top turnover).' },
      { dimension: 'Capital Intensity', score: 3, explanation: 'Asset-light services business. Can pivot to new service lines without massive capex. Acquisitions (Faculty $1B+) buy talent, not factories. 22,000 layoffs in one year proves workforce is scalable. Variable-cost heavy (salaries) vs fixed-cost (infrastructure).' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'Training 550,000 shows push at scale, but 784,000 across 120 countries creates lag. Glassdoor 3.7/5.0 suggests moderate transparency. Large consulting firms filter info through layers (analysts to partners to execs). AI platforms should accelerate but adoption in progress.' }
    ],
    pattern: 'Organizational Pattern',
    patternDescription: '',
    keyNumbers: [
      'Revenue: $70.72 billion TTM (January 2026), $69.67 billion fiscal 2025',
      'Employees: 784,000 as of Q1 FY2026 (down from 779,000 at FY2025 year-end)',
      'Founded: 1989 (as Andersen Consulting), rebranded 2001',
      'Headquarters: Dublin, Ireland',
      'Structure: Public company (ACN on NYSE since 2001, IPO at $14.50)',
      'Leadership: Julie Sweet, Chair & CEO (since September 2019)',
      'Market cap: $177.5 billion (January 2026)',
      'Fortune 500 rank: #279'
    ],
    enablers: [
      'Massive AI reskilling',
      'AI talent growth',
      'Strategic acquisitions',
      'Decisive leadership',
      'Gartner recognition',
      'Asset-light model'
    ],
    friction: [
      'Organizational mass',
      'Layoffs as primary adaptation',
      'Executive tenure',
      'Public market pressure',
      'Below-market growth',
      'Traditional consulting model'
    ],
    quotable: 'Accenture is laying off 22,000 people while training 550,000 on AI. The question is whether the institution can transform faster than its clients need it to.',
  },


  'amd': {
    slug: 'amd',
    name: 'AMD',
    analysisDate: '2026-01-26',
    gpiScore: 4.05,
    state: 'Transitioning (lower)',
    marketCap: '$422.76B',
    dimensions: [
      { dimension: 'Decision Latency', score: 4, explanation: 'Lisa Su provides decisive leadership. Gaming collapse (69%) met with swift 4% layoffs and full AI pivot. CES 2026 showed ambitious roadmap.' },
      { dimension: 'Error Correction', score: 4, explanation: 'Transformed from near-bankruptcy to $422B. Willing to exit failing segments. ZT Systems acquisition shows proactive capability building.' },
      { dimension: 'Knowledge Location', score: 4, explanation: 'Engineering-driven culture with MIT PhD CEO. Best Places to Work 4 years running. Open tech (FSR 3). Some size-related coordination challenges.' },
      { dimension: 'Structural Lock-In', score: 5, explanation: 'Fabless model provides flexibility. But locked into TSMC dependency and x86 licensing with Intel. Multi-segment portfolio creates complexity.' },
      { dimension: 'Talent Flow', score: 4, explanation: 'Glassdoor 4.0/5.0, 83% recommend. Strong benefits. Promotes technical excellence. Competing with Nvidia for AI talent.' },
      { dimension: 'Capital Intensity', score: 3, explanation: 'Fabless = low capital intensity. R&D focused, no owned fabs. Can pivot without write-downs. Revenue per employee $1.14M.' },
      { dimension: 'Knowledge Velocity', score: 4, explanation: 'Transparent product roadmaps. Lisa Su keynotes show direct communication. 82% positive business outlook on Glassdoor.' }
    ],
    pattern: 'The Fabless Pivot Machine',
    patternDescription: 'AMD proves that semiconductor companies do not have to be Particle-state. The conventional wisdom says chip companies need massive capital, decade-long product cycles, and glacial decision-making. AMD rejected that model. By spinning off GlobalFoundries, staying engineering-focused under a technical CEO, and maintaining the willingness to exit failing segments, AMD became the most agile major semiconductor company in the world.',
    keyNumbers: [
      'Revenue: $32B TTM (up 31.83% YoY)',
      'Market Cap: $422.76B (25th globally)',
      'Employees: 28,000',
      'Founded: May 1, 1969, HQ: Santa Clara, CA',
      'Structure: Public (NASDAQ: AMD)',
      'Leadership: Dr. Lisa Su, CEO (since October 2014)',
      'Fortune 500 Rank: #167 (2025)',
      'Stock Performance: Up 76% over past 12 months'
    ],
    enablers: [
      'Fabless model enables pivots without factory write-downs',
      'Lisa Su leadership provides 10+ years of strategic consistency',
      'Engineering-driven culture with technical CEO (MIT PhD)',
      'Strong Glassdoor scores (4.0/5.0, 83% recommend)',
      'CES 2026 roadmap shows clear AI vision (Helios, MI455X, MI500)',
      'Strategic acquisitions ($4.9B ZT Systems) rather than reactive cuts'
    ],
    friction: [
      'TSMC dependency creates supply chain risk and capacity constraints',
      'x86 licensing with Intel limits some strategic flexibility',
      'Nvidia dominance in high-end AI GPUs creates constant competitive pressure',
      'Gaming segment decline (69%) requires careful portfolio management',
      'Company size (28,000 employees) makes cross-functional coordination harder',
      'Talent competition with Nvidia for AI engineers intensifying'
    ],
    quotable: 'AMD at 4.05 vs Intel at 7.0 is not just a scoring difference. It is the difference between a company that can transform and one that cannot.',
  },


  'publix': {
    slug: 'publix',
    name: 'Publix',
    analysisDate: '2026-01-27',
    gpiScore: 5.1,
    state: 'Transitioning (upper)',
    dimensions: [

    ],
    pattern: 'Ownership as Operating System',
    patternDescription: 'Publix reveals how ownership structure becomes organizational physics. 80% employee ownership through ESOP transforms 260,000 workers into stakeholders with multi-decade time horizons. This creates field-state characteristics (no quarterly pressure, long-term thinking, rapid talent redeployment without layoffs) inside particle-state infrastructure (1,431 stores, regional lock-in, capital intensity). The pattern: ownership alignment enables operational agility within strategic commitment. The 95-year no-layoff policy is not benevolence but physics. Employee owners vote with accumulated stock value, creating governance structures that prioritize stability over pivots. When Atlanta stores closed December 2025, workers transferred to nearby locations rather than terminated because the system o',
    keyNumbers: [
      'Revenue: $59.7B (2024), up 4.6% from $57.1B (2023)',
      'Net earnings: $4.6B (2024), up 6.6% year-over-year',
      'Employees: 260,000 associates (largest employee-owned company in US)',
      'Stores: 1,431 locations across 8 Southeast states (FL, GA, AL, TN, SC, NC, VA, KY)',
      'Employee ownership: 80% ESOP structure, private company',
      'Founded: 1930 by George W. Jenkins in Winter Haven, Florida',
      'Headquarters: Lakeland, Florida',
      'Net margin: 7.7% (typical for grocery retail)'
    ],
    enablers: [
      'Employee ownership (80% ESOP) aligns 260,000 associates with long-term value creation rather than quarterly pressure',
      '95-year no-layoff policy enables rapid talent redeployment without termination friction, proven in Dec 2025 Atlanta store closures',
      'Strong financial performance ($59.7B revenue, $4.6B net earnings up 6.6%) funds strategic investments without external capital dependency',
      'Private ownership eliminates quarterly earnings theater and enables multi-year strategic planning horizon',
      '$50M tech campus investment in AI, automation, and retail media shows commitment to digital transformation while preserving physical retail model',
      'Regional dominance in Southeast (1,431 stores across 8 states) creates operational density and market power in core geography'
    ],
    friction: [
      'ESOP governance structure requires employee approval for major strategic shifts, creating democratic stability but strategic friction for rapid transformation',
      '1,431 stores represent $10B+ real estate lock-in, January 2026 $130.4M shopping center acquisition deepens rather than reduces physical commitment',
      'Internal promotion culture (100% executive team promoted from within) preserves institutional knowledge but limits external perspectives and industry cross-pollination',
      'Regional limitation to 8 Southeast states prevents national scale, competing against Walmart and Kroger with broader geographic reach',
      'Removal of retail bonuses from hourly associates (2025-2026) creates front-line morale friction, Glassdoor rating declined 2% over last 12 months',
      '7.7% net margin typical for grocery retail limits financial flexibility compared to higher-margin technology or software businesses'
    ],
    quotable: 'The 95-year no-layoff policy is not benevolence but physics. Employee owners vote with accumulated stock value, creating governance structures that prioritize stability over pivots.',
  },

  'revolut': {
    slug: 'revolut',
    name: 'Revolut',
    analysisDate: '2026-01-27',
    gpiScore: 3.1,
    state: 'Transitioning (lower)',
    dimensions: [
      { dimension: 'Decision Latency', score: 3, explanation: 'CEO pivots strategy in days (US acquisition reversal), regional CEOs enable local decisions, but regulatory delays (UK license: 3 years) and growing hierarchy create friction' },
      { dimension: 'Error Correction', score: 3, explanation: 'Fast pivots when errors surface (US strategy reversal, Mexico licensing lessons), AI/ML enables rapid iteration, but performance culture may suppress bad news, fraud volume (80 reports/day) hints at scale challenges' },
      { dimension: 'Knowledge Location', score: 4, explanation: 'Bengaluru hub centralizes 68% of processes, remote-first distributes geographically, but critical regulatory knowledge sits with leadership, unclear how much regional learning transfers globally' },
      { dimension: 'Structural Lock-In', score: 2, explanation: 'Zero branches, cloud-native, digital-only model enables rapid market pivots (Canada exit 2022), regulatory licenses create only constraint' },
      { dimension: 'Talent Flow', score: 3, explanation: 'Strong inbound flow (hiring 1,700 while industry cuts), remote-first attracts talent, but performance culture creates churn (50+ pressured to leave), limited executive mobility with stable C-suite' },
      { dimension: 'Capital Intensity', score: 4, explanation: 'Profitable with strong margins (35%), no physical infrastructure, but banking licenses require regulatory capital, each market needs capitalized entities, Google Cloud multi-year commitment' },
      { dimension: 'Knowledge Velocity', score: 3, explanation: 'AI models deploy globally (68% of processes), remote-first enables digital knowledge flow, but regional CEO structures create potential silos, coordination overhead across 15,117 employees in 40 countries' }
    ],
    pattern: 'Scaling Without Sclerosis',
    patternDescription: 'Revolut is running the most dangerous race in business: hypergrowth without calcification. From 2015 to 2026, the company scaled from zero to $75B valuation, 65M customers, 15,117 employees, and 40+ countries while maintaining a GPI of 3.1. Most companies calcify hard by this stage (traditional banks sit at 7-9). Revolut\'s playbook is architectural. No branches means no real estate anchor. Cloud-native means no legacy tech debt. Remote-first means no geographic talent constraints. AI-powered operations mean human judgment gets augmented, not replaced. But here\'s the tell: regional CEO structures are appearing. The UK license took three years. Performance culture is burning talent. These are early calcification signals. The company is at an inflection point. The 100M customer target by 2027',
    keyNumbers: [
      'Valuation: $75B (November 2025 secondary sale)',
      'Revenue: $4.0B in 2024, up 72% YoY',
      'Profit: $1.4B pre-tax in 2024, up 149% YoY (35% margin)',
      'Employees: 15,117',
      'Customers: 65M+ globally (targeting 100M by mid-2027)',
      'Markets: 40+ countries',
      'Founded: July 2015',
      'Headquarters: London (7 Westferry Circus, Canary Wharf)'
    ],
    enablers: [
      'Cloud-native architecture with zero physical infrastructure (Google Cloud partnership)',
      'Remote-first culture (60-day work-from-anywhere, no RTO mandate while Wall Street forces office returns)',
      'AI/ML deployment at scale (68% of processes powered by Bengaluru-built models)',
      'Rapid strategic pivots (US acquisition to standalone license in days)',
      'Profitable at scale ($1.4B pre-tax profit on $4B revenue, 35% margin)',
      'Market exit willingness (abandoned Canada 2022, pivoted US strategy 2026)'
    ],
    friction: [
      'Regulatory approval delays (UK banking license',
      'Regional CEO fragmentation (half-dozen country CEOs, potential knowledge silos)',
      'Performance culture churn (50+ employees pressured to leave, Glassdoor concerns)',
      'Scale complexity (15,117 employees across 40 countries creates coordination overhead)',
      'Regulatory capital requirements (each market needs capitalized entities)',
      'Knowledge centralization in Bengaluru hub (68% dependency creates single point risk)'
    ],
    quotable: 'Revolut is running the most dangerous race in business: hypergrowth without calcification. A 3.1 today could be 4.5 in two years if regional silos calcify, or 2.8 if they crack the global coordination problem.',
  },

  'saks-global': {
    slug: 'saks-global',
    name: 'Saks Global',
    analysisDate: '2026-01-27',
    gpiScore: 8.75,
    state: 'Particle',
    dimensions: [
      { dimension: 'Decision Latency', score: 9, explanation: '18-month vendor payment backlog acknowledged but not addressed, CEO transitions chaos (Metrick out, Baker in, van Raemdonck in within 3 weeks), decisions in real estate time not retail time' },
      { dimension: 'Error Correction', score: 9, explanation: '$2.7B acquisition created immediate liquidity crisis, vendor payment promises broken twice, revenue declines not met with rapid pivots, same playbook through bankruptcy' },
      { dimension: 'Knowledge Location', score: 8, explanation: '30-year CEO Metrick knowledge walked out, 550 corporate layoffs eliminated institutional knowledge, failed merger integration after 12+ months, siloed systems' },
      { dimension: 'Structural Lock-In', score: 9, explanation: '70 full-line stores with long-term leases, $4.7B debt trap, $100M interest payments, physical luxury retail capital intensity, could not pivot to asset-light' },
      { dimension: 'Talent Flow', score: 8, explanation: '3 CEOs in 3 weeks, 550 layoffs (3% workforce), Glassdoor 3.3/5 with 56% recommend, compensation satisfaction down 15%, toxic leadership mentions' },
      { dimension: 'Capital Intensity', score: 9, explanation: '$4.7B debt burden, $100M missed interest payment, $410M free cash flow deficit, luxury inventory capital requirements, duplicative backend systems' },
      { dimension: 'Knowledge Velocity', score: 9, explanation: 'AI homepage success (7% revenue lift) not replicated, failed systems integration 12+ months post-acquisition, vendor payment approvals took months, market intelligence not translated to action' }
    ],
    pattern: 'Death by Leveraged Acquisition',
    patternDescription: 'Saks Global is a case study in what happens when you buy a competitor with debt you cannot service and then discover you lack the organizational capacity to integrate what you purchased. The $2.7B Neiman Marcus acquisition in December 2024 was financed almost entirely with borrowed capital, creating a $4.7B debt burden that the combined business fundamentally could not support. Revenue was declining (16% at Saks, 10% at Neiman Marcus), not growing. Margins were contracting, not expanding. The acquisition did not create synergies. It created compounded dysfunction. Two calcified organizations merged into one that could not make decisions, could not correct errors, and could not move knowledge fast enough to compete. The pattern is visible in the timeline: acquisition close in December 2024,',
    keyNumbers: [
      '$2.7B Neiman Marcus acquisition (December 2024)',
      '$4.7B total debt burden',
      '$100M interest payment missed (December 2025)',
      '$410M free cash flow deficit',
      '$1.75B DIP financing secured during bankruptcy',
      '16% revenue decline at Saks Fifth Avenue YoY',
      '10% revenue decline at Neiman Marcus/Bergdorf YoY',
      '$6.8B annual revenue (Saks Fifth Avenue)'
    ],
    enablers: [
      'AI personalization technology delivered measurable results (7% revenue increase, 10% conversion improvement)',
      'CTO Mike Hite and cross-functional tech team demonstrated rapid execution capability (homepage launch in under 6 months)',
      'Portfolio of iconic luxury brands (Saks Fifth Avenue, Neiman Marcus, Bergdorf Goodman) with strong customer recognition',
      'Headless commerce framework separating backend from frontend enables faster innovation cycles',
      'Off-price formats (Saks OFF 5TH, Last Call) provide potential growth channels outside traditional luxury',
      '$1.75B in committed DIP financing provides runway for restructuring under bankruptcy protection'
    ],
    friction: [
      '$4.7B debt burden from leveraged Neiman Marcus acquisition creates unsustainable capital structure',
      '18-month vendor payment crisis destroyed supplier relationships and created inventory shortages',
      'Failed post-merger integration 12+ months after acquisition, systems still not consolidated',
      'Leadership instability (3 CEOs in 3 weeks) signals governance breakdown and strategic paralysis',
      '70 full-line stores with long-term lease commitments (Simon Property suing for $7M unpaid rent)',
      'Market share losses to Nordstrom and Bloomingdale\'s while Saks revenue fell 16% YoY'
    ],
    quotable: 'Thirteen months from deal close to Chapter 11. The debt was the immediate cause of death. The organizational calcification is what prevented any course correction before it was too late.',
  },


  'winco-foods': {
    slug: 'winco-foods',
    name: 'Winco Foods',
    analysisDate: '2026-01-27',
    gpiScore: 3.6,
    state: 'Transitioning (lower)',
    dimensions: [
      { dimension: 'Decision Latency', score: 3, explanation: 'Employee ownership creates extraordinary alignment. 20,000 employee-owners with 20% annual stock gifts have direct skin in the game. Lean model eliminates public company layers. Internal CEO succession (Grant Haag) maintains continuity. 5+ store expansions in 2026 shows decisiveness. Private structure means no quarterly earnings theater.' },
      { dimension: 'Error Correction', score: 3, explanation: '<1% spoilage rate is industry-leading proof of fast error detection. Moving up 10 spots to #4 in customer preference rankings shows market responsiveness. Employee-owners benefit directly from fixing problems. 6 in-house distribution centers enable quick inventory adjustments. Rapid expansion shows confidence in replicating operational excellence.' },
      { dimension: 'Knowledge Location', score: 2, explanation: 'Frontline ownership means knowledge lives with operators. 18% annual returns since 1986 create powerful retention. Store employees who understand local needs directly own outcomes. 6-DC model decentralizes logistics knowledge. Internal CEO promotion preserves institutional memory. Limited tech adoption suggests human-centered knowledge that stays with long-tenured employees.' },
      { dimension: 'Structural Lock-In', score: 6, explanation: 'Grocery retail physics: 142 stores require real estate, 6 DCs need infrastructure, perishable inventory creates operational constraints. But no debt, no franchise model, full location control. In-house distribution gives more flexibility than competitors. Score reflects unavoidable retail capital requirements, not organizational calcification.' },
      { dimension: 'Talent Flow', score: 2, explanation: '20% annual stock contribution creates golden handcuffs. 18% annual returns compound over careers. Internal CEO promotion shows talent pipeline. Stable C-suite with long tenures indicates low churn. ESOP model self-selects for commitment. Growth from $8.5B to $9.8B without headcount bloat suggests talent optimization.' },
      { dimension: 'Capital Intensity', score: 7, explanation: 'Highest dimension: 142 stores need buildings, parking, utilities. 6 DCs demand warehouse space and refrigeration. Perishable inventory ties up working capital. Each new store requires $10M+ upfront. Bulk food section needs specialized fixtures. But in-house distribution is more capital-efficient than third-party. No debt means capital intensity doesn\'t create fragility.' },
      { dimension: 'Knowledge Velocity', score: 3, explanation: 'In-house distribution creates fast store-to-supply-chain feedback. <1% spoilage requires real-time inventory intelligence. Employee ownership accelerates information sharing. Limited tech means velocity comes from human networks (faster for tacit knowledge, slower for codified processes). 6-DC model allows regional learning without central bottlenecks. 10-spot customer ranking jump shows ability to absorb market feedback.' }
    ],
    pattern: 'Ownership as Operating System',
    patternDescription: 'WinCo Foods proves that employee ownership isn\'t just an HR perk but a fundamental operating advantage. By converting to 100% ESOP in 1985, the company embedded ownership incentives into every decision layer. The result is a $9.8B grocery chain that operates with startup agility despite retail\'s capital intensity. The 3.6 GPI reflects the tension between ownership-driven advantages (Decision Latency 3, Error Correction 3, Knowledge Location 2) and retail\'s unavoidable constraints (Capital Intensity 7). The <1% spoilage rate and 10% cost advantage aren\'t just efficiency metrics—they\'re proof that ownership changes how people see problems. When frontline employees own 20% of their annual salary in stock contributions, waste becomes personal. The 20,000 employee-owners don\'t clock in and out.',
    keyNumbers: [
      '$9.8B revenue (2024), up from $8.5B (2022) - 15% growth in 2 years',
      '20,000 employee-owners, each receiving 20% annual stock contribution',
      '18% annual returns to ESOP participants since 1986 (40 years)',
      '142 stores across 10 western states (CA, ID, NV, OR, WA, AZ, TX, UT, OK, MT)',
      '6 in-house distribution centers providing supply chain control',
      '<1% spoilage rate (industry average 3-5%)',
      '10% lower cost structure vs competitors',
      '#4 in Dunnhumby Retailer Preference Index 2025 (up 10 spots from 2024)'
    ],
    enablers: [
      '100% employee ownership (ESOP since 1985) aligns incentives across all 20,000 employees',
      '18% annual returns to employee-owners since 1986 create wealth-building loyalty and retention',
      'In-house distribution (6 centers) provides supply chain control and faster feedback loops',
      '<1% spoilage rate demonstrates operational excellence and rapid error correction capabilities',
      '10% lower cost structure vs competitors enables aggressive pricing without margin sacrifice',
      'Private ownership eliminates quarterly earnings pressure and short-term activist demands'
    ],
    friction: [
      'Capital intensity (7/10) requires significant upfront investment for each new store and distribution center',
      '142 physical stores create structural lock-in and limit geographic pivot speed compared to digital models',
      'Limited digital transformation lags competitors (basic e-commerce only, no sophisticated omnichannel)',
      'Glassdoor rating down 4% YoY suggests growth pains in scaling culture beyond founding cohort',
      'Western US concentration (10 states) limits geographic diversification and exposes to regional economic shocks',
      'ESOP vesting schedule creates talent lock-in that could trap disengaged employees who stay for benefits'
    ],
    quotable: 'When 20,000 employees own 20% of their salary in stock, waste isn\'t a policy problem. It\'s personal.',
  },

  'walgreens-boots-alliance': {
    slug: 'walgreens-boots-alliance',
    name: 'Walgreens Boots Alliance',
    analysisDate: '2026-01-26',
    gpiScore: 7.55,
    state: 'Particle',
    dimensions: [
      { dimension: 'Decision Latency', score: 8, explanation: 'Decade-long healthcare pivot failed, PE now forces rapid cost-cutting but operational complexity across 5 companies remains' },
      { dimension: 'Error Correction', score: 8, explanation: '$6B+ VillageMD loss took years to acknowledge, PE strip-and-flip model passes errors to next owner' },
      { dimension: 'Knowledge Location', score: 7, explanation: '311K employees across fragmented 5-company structure, communications team gutted, 70% IT offshore planned' },
      { dimension: 'Structural Lock-In', score: 8, explanation: '$13.3B debt, 8,000+ stores with long-term leases, 10-year AmerisourceBergen deal, legacy retail model' },
      { dimension: 'Talent Flow', score: 7, explanation: 'Glassdoor 3.2, 42% recommend, holiday pay cut, mass layoffs, 70K+ jobs at risk if Staples playbook repeats' },
      { dimension: 'Capital Intensity', score: 8, explanation: '70.9% LBO debt, S&P BB- rating, 5.5x leverage 2025, legal settlements draining cash' },
      { dimension: 'Knowledge Velocity', score: 6, explanation: 'Azure cloud, TCS partnership, ~100 AI products, but PE cost-cutting threatens innovation investment' }
    ],
    pattern: 'The PE Hospice',
    patternDescription: 'Walgreens exemplifies the PE Hospice pattern. A once-dominant company, unable to self-correct strategic errors, becomes too calcified for public markets but too valuable to disappear. Private equity steps in not to transform but to manage the decline. Sycamore Partners is not saving Walgreens. They are extracting remaining value before the patient expires. The 70.9% debt financing tells you everything. This is not investment capital. This is extraction capital. The company will be stripped of saleable assets (Boots IPO, healthcare unit sales), squeezed for cash (holiday pay cuts, layoffs, store closures), and either re-listed as a smaller shell or allowed to fade. The pattern is identical to what Sycamore did to Staples. The employees know it. The 37% positive business outlook is not pessi',
    keyNumbers: [
      '$154.58B TTM revenue (Dec 2025)',
      '$13.3B debt load post-LBO',
      '70.9% debt financing vs 41% industry average',
      '311,000 employees',
      '8,000+ US stores (1,200 closures planned by 2027)',
      'Fortune 500 Rank: 18',
      '20% US prescription market share',
      '75% of Americans live within 5 miles of a Walgreens'
    ],
    enablers: [
      'Microsoft Azure cloud infrastructure provides modern data foundation',
      'TCS partnership brings AI/ML managed services capabilities',
      '~100 in-house AI products already built and deployed',
      '8,000+ store footprint provides unmatched last-mile access (75% of Americans within 5 miles)',
      '20% US prescription market share provides scale advantages',
      'Boots UK remains profitable with potential IPO path (2026-2027)'
    ],
    friction: [
      '$13.3B debt load from 70.9% LBO financing constrains all strategic options',
      'PE strip-and-flip model prioritizes extraction over transformation',
      '1,200 store closures by 2027 signals retreat not restructuring',
      'Mass layoffs destroying institutional knowledge (80+ corporate, 70% IT offshore)',
      'PBM margin compression continues to erode core pharmacy profitability',
      'Five-way company split creates coordination complexity and knowledge silos'
    ],
    quotable: 'Sycamore is not saving Walgreens. They are extracting remaining value before the patient expires.',
  },

  'rite-aid': {
    slug: 'rite-aid',
    name: 'Rite Aid',
    analysisDate: '2026-01-26',
    gpiScore: 8.85,
    state: 'Particle',
    marketCap: '$36.76',
    dimensions: [
      { dimension: 'Decision Latency', score: 9, explanation: 'Failed Walgreens/Albertsons mergers, 8 months between emergence and second bankruptcy' },
      { dimension: 'Error Correction', score: 10, explanation: '$2B debt elimination failed to fix anything, in-stock rates kept falling' },
      { dimension: 'Knowledge Location', score: 8, explanation: 'Corporate-store disconnect in Glassdoor reviews, FTC facial recognition ban' },
      { dimension: 'Structural Lock-In', score: 9, explanation: '99% McKesson dependency, physical retail model incompatible with healthcare transformation' },
      { dimension: 'Talent Flow', score: 8, explanation: '33% recommend rate, 1,100+ corporate layoffs, severance packages not paid' },
      { dimension: 'Capital Intensity', score: 9, explanation: '$4B debt at 13x leverage, needed $400-450M EBITDA just to survive' },
      { dimension: 'Knowledge Velocity', score: 8, explanation: 'Google Cloud and Adobe partnerships never delivered, inventory systems failed' }
    ],
    pattern: 'The Debt Surgery Fallacy',
    patternDescription: 'Rite Aid proves that financial restructuring cannot fix organizational calcification. The company eliminated $2 billion in debt in its first bankruptcy, received $2.5 billion in exit financing, hired a new CEO, and emerged as a private company with a stated commitment to transformation. Eight months later, it filed for bankruptcy again and liquidated entirely. This is the Debt Surgery Fallacy: the belief that removing financial pressure will create space for transformation. It will not. When a company scores 8.85 on the GPI, the calcification is structural. The debt was a symptom. The inability to make decisions, correct errors, or move information was the disease. Walgreens and CVS faced the same market pressures but transformed their business models because their organizational physics a',
    keyNumbers: [
      'GPI Score: 8.85 (Particle, highest in database)',
      'Error Correction: 10/10 (maximum calcification)',
      'Revenue: $23.47 billion (historical peak)',
      'Debt: $4 billion at 13x leverage',
      'Interest Expense: $261 million annually',
      'Market Cap: $36.76 million (pre-delisting)',
      'Employees: 47,000 at peak, now 0',
      'Stores: 2,300 in 2023, 0 by October 2025'
    ],
    enablers: [
      'Emergence from first bankruptcy eliminated $2 billion in debt',
      'New CEO Matt Schroeder (former CFO) had institutional knowledge',
      '$2.5 billion in exit financing provided runway',
      'Technology partnerships with Google Cloud and Adobe were in place',
      'Strong pharmacy brand recognition in regional markets',
      'CVS and Walgreens store closures created potential market opportunities'
    ],
    friction: [
      'Vendor relationships never normalized after first emergence (40% of deposits not returned)',
      '99% dependency on single supplier (McKesson) created catastrophic vulnerability',
      'Over 1,600 opioid lawsuits with no clear resolution path',
      'In-stock rates collapsed from 89% to 55% and could not be reversed',
      'Physical retail model incompatible with healthcare service transformation',
      'FTC facial recognition ban damaged AI/technology credibility'
    ],
    quotable: 'Rite Aid did not fail because of debt. It failed because its organizational physics made transformation impossible. The debt was a symptom.',
  },

  'chick-fil-a': {
    slug: 'chick-fil-a',
    name: 'Chick Fil A',
    analysisDate: '2026-01-27',
    gpiScore: 3.9,
    state: 'Transitioning (lower)',
    dimensions: [
      { dimension: 'Decision Latency', score: 3, explanation: 'Private ownership eliminates quarterly pressure, owner-operator model distributes tactical decisions, but hierarchical corporate structure centralizes strategic direction' },
      { dimension: 'Error Correction', score: 3, explanation: 'Converting 425 licensed locations shows structural correction, 11-year ACSI rating consistency, AI food safety monitoring, but methodical not agile' },
      { dimension: 'Knowledge Location', score: 4, explanation: 'Owner-operator model pushes operational knowledge to franchisees, but tight corporate control and enterprise analytics centralize strategic knowledge' },
      { dimension: 'Structural Lock-In', score: 5, explanation: 'Sunday closure and founder\'s contract are non-negotiable cultural covenants, 2,730 physical locations create capital lock-in, but flexibility within constraints' },
      { dimension: 'Talent Flow', score: 3, explanation: 'Remarkable Futures scholarships (177 graduates in 2024), strong Glassdoor ratings (4.1/5 corporate, 3.9/5 restaurants), but QSR industry gravity and family succession limits' },
      { dimension: 'Capital Intensity', score: 7, explanation: '2,730 brick-and-mortar locations, $150M distribution centers, supply chain infrastructure, physical product delivery model' },
      { dimension: 'Knowledge Velocity', score: 4, explanation: 'Enterprise analytics since 2017, AI/ML adoption (NLP, 3D cameras, robotics), but physical infrastructure constrains propagation speed (425-location conversion takes years)' }
    ],
    pattern: 'Covenant Economics',
    patternDescription: 'Chick-fil-A proves that intentional constraints can become competitive advantages when execution is relentless. The Sunday closure and private ownership covenant create structural rigidity but also insulate from pressures that destabilize competitors. Most QSR chains chase every revenue opportunity and answer to quarterly earnings. Chick-fil-A forfeits Sunday sales and external capital to protect cultural coherence. The result: $9.3M average unit volumes (nearly double competitors) while closed 52 days per year. The owner-operator model distributes knowledge to franchisees who live in their communities, not MBAs rotating through district manager roles. This is disciplined growth within boundaries, not growth at all costs. The GPI of 3.9 reflects the tension between cultural lock-in and ope',
    keyNumbers: [
      '$22.7B systemwide sales (2024), 3rd largest QSR by U.S. sales',
      '2,730 locations added 154 units in 2024',
      '$9.3M average unit volume per non-mall location (nearly 2x competitors)',
      '425 licensed locations converting to owner-operator model over several years',
      '14% potential revenue forfeited via Sunday closure (52 days/year)',
      '140,000 employees (estimates range 140K-170K)',
      '177 employees graduated debt-free in 2024 via Remarkable Futures scholarships',
      '11 consecutive years at 83 ACSI customer satisfaction rating'
    ],
    enablers: [
      'Private ownership shields from quarterly earnings pressure and activist shareholders',
      'Owner-operator model distributes operational knowledge and accountability to franchisees',
      'Enterprise analytics group (2017) and AI adoption (NLP, ML, robotics) modernize operations',
      'Remarkable Futures scholarship program (177 debt-free graduates in 2024) builds talent loyalty',
      'Strong customer satisfaction (11 consecutive years at 83 ACSI) creates feedback loops',
      'Generational CEO succession (Andrew Truett Cathy 2025) maintains cultural continuity without upheaval'
    ],
    friction: [
      'Sunday closure forfeits 14% of potential revenue, a structural constraint baked into brand DNA',
      'Founder\'s contract prevents IPO in perpetuity, eliminating access to public capital markets',
      'Physical real estate model (2,730 locations) creates capital intensity and knowledge propagation delays',
      'Licensed location conversion takes several years, showing implementation constrained by physical infrastructure',
      'Hierarchical corporate structure centralizes strategic decisions despite distributed operations',
      'Family succession limits external leadership talent at executive level'
    ],
    quotable: 'Some constraints are load-bearing walls, not removable partitions. Chick-fil-A turned Sunday closure into a competitive advantage by making culture non-negotiable.',
  },

  'databricks': {
    slug: 'databricks',
    name: 'Databricks',
    analysisDate: '2026-01-27',
    gpiScore: 3.3,
    state: 'Transitioning (lower)',
    dimensions: [
      { dimension: 'Decision Latency', score: 3, explanation: 'Monthly product releases, 16 acquisitions, CEO sets aggressive targets, BUT IPO prep adding approval layers' },
      { dimension: 'Error Correction', score: 4, explanation: 'Positive free cash flow shows discipline, RTO policy adjusted based on data, some restructuring ongoing' },
      { dimension: 'Knowledge Location', score: 3, explanation: 'Apache Spark founders, open source DNA, 4.0/5 culture rating, BUT platform requires Spark expertise' },
      { dimension: 'Structural Lock-In', score: 4, explanation: 'Cloud-native multi-cloud architecture, BUT 8K employees, $7B debt, new office commitment late 2026' },
      { dimension: 'Talent Flow', score: 3, explanation: 'Hiring 3K in 2025, 82% recommend, top comp packages, BUT RTO stricter than competitors, sales culture friction' },
      { dimension: 'Capital Intensity', score: 5, explanation: 'Software company with low physical assets, BUT cloud infra costs high, $4B+ funding rounds, $50K-200K customer spend' },
      { dimension: 'Knowledge Velocity', score: 3, explanation: 'Monthly releases, Data+AI Summit, 10 academic papers, open source feedback loops, Toyota enterprise adoption' }
    ],
    pattern: 'Hypergrowth at the Field-Transition Boundary',
    patternDescription: 'Databricks represents a company caught between two states. The 3.3 GPI score places it at the boundary between Field (1.0-3.0) and Transitioning (3.1-6.9). This is the exact moment where hypergrowth unicorns either preserve their agility or calcify under their own mass. The company still ships like a startup. Monthly product releases. Aggressive M&A (16 acquisitions). Open source velocity through Apache Spark, Delta Lake, and MLflow. But the structure is arriving. The $7B debt load. The 8,000-employee headcount. The IPO preparation adding governance layers. The critical question: can Databricks go public without losing the Field-state characteristics that made it valuable? The RTO policy shift (from 1-day to 3-day office requirement) and organizational restructuring suggest the answer is a',
    keyNumbers: [
      '$134B valuation (Dec 2025, Series L funding)',
      '$4.8B annualized revenue run-rate (Q3 2025)',
      '55%+ year-over-year growth',
      '8,000 employees (hiring 3,000 more in 2025)',
      '$7B total debt access ($1.8B raised Jan 2026)',
      '$1B+ AI product revenue run-rate',
      '16 acquisitions completed',
      'Positive free cash flow'
    ],
    enablers: [
      'Open source DNA (Apache Spark, Delta Lake, MLflow) maintains knowledge velocity',
      'Monthly product releases demonstrate fast shipping culture',
      'Private company structure enables fast decisions without public market pressure',
      'Founder-led (Ali Ghodsi since 2013) provides strategic continuity',
      'Acquisition-driven growth (16 acquisitions) accelerates capability building',
      'Multi-cloud architecture (AWS, Azure, GCP) provides infrastructure flexibility'
    ],
    friction: [
      'IPO preparation adding governance layers and approval processes',
      '$7B debt load constrains financial flexibility pre-IPO',
      'Scaling to 8,000+ employees creates organizational mass',
      'Platform complexity (Spark expertise required) creates customer friction',
      'RTO policy shift (1-day to 3-day) signals cultural tightening',
      'High capital intensity ($50K-200K+ annual customer spend) limits addressable market'
    ],
    quotable: 'The 3.3 GPI is the score of a company in motion. Direction of travel tells you more than current position.',
  },

  'in-n-out-burger': {
    slug: 'in-n-out-burger',
    name: 'In N Out Burger',
    analysisDate: '2026-01-27',
    gpiScore: 3.25,
    state: 'Transitioning (lower)',
    dimensions: [
      { dimension: 'Decision Latency', score: 3, explanation: 'Family-owned, 7-member executive team, no board bureaucracy, store managers have real authority' },
      { dimension: 'Error Correction', score: 3, explanation: '#2 Glassdoor ranking, 91% recommend rate, servant leadership model creates psychological safety' },
      { dimension: 'Knowledge Location', score: 3, explanation: '$100K+ store managers, limited menu means everyone knows system, vertical integration keeps knowledge accessible' },
      { dimension: 'Structural Lock-In', score: 4, explanation: '$125.5M TN distribution center, vertical integration locks in supply chain, but private ownership allows reconfiguration' },
      { dimension: 'Talent Flow', score: 2, explanation: 'Strongest dimension: 91% recommend rate, structured career paths, no layoffs, internal promotion culture' },
      { dimension: 'Capital Intensity', score: 5, explanation: 'No-franchising model requires owning all real estate, 6 distribution centers, but zero debt pressure' },
      { dimension: 'Knowledge Velocity', score: 3, explanation: 'Limited menu accelerates learning, fresh daily ingredients create tight feedback loops, 7-member exec team' }
    ],
    pattern: 'Strategic Constraints as Organizational Enablers',
    patternDescription: 'In-N-Out reveals a counterintuitive GPI pattern where deliberate constraints preserve fluidity at scale. The limited menu (burgers, fries, shakes), no-franchising rule, and controlled geographic expansion are not growth limitations but calcification preventions. Each constraint reduces organizational complexity. Limited menu means everyone knows the system, no franchising eliminates franchise agreement bureaucracy, controlled growth prevents supply chain overextension. The vertical integration strategy (own distribution, dedicated beef supplier) trades capital intensity for decision speed, paying upfront to eliminate vendor negotiation friction later. Family ownership removes shareholder quarterly pressures, allowing long-term optimization. The result is a 3.25 GPI at $2.1B revenue and 400',
    keyNumbers: [
      '$2.1B annual revenue (Technomic 2024)',
      '42,000 employees across 400+ locations',
      '#2 Best Places to Work 2026 (4.5/5 Glassdoor rating)',
      '91% of employees recommend to a friend',
      '83% positive business outlook',
      'Store managers earn $100K+ with structured career progression',
      'Family-owned since 1948 (Lynsi Snyder, 4th generation owner)',
      'Zero debt pressure, no franchising'
    ],
    enablers: [
      'Family ownership eliminates shareholder pressure and board bureaucracy',
      'Limited menu (burgers, fries, shakes) accelerates learning and reduces complexity',
      'Store managers earning $100K+ with real decision authority distribute power to edges',
      '#2 Best Places to Work ranking (4.5/5, 91% recommend) generates organic talent flow',
      'Vertical integration (own distribution, Harris Ranch beef) enables rapid supply chain adjustments',
      'Fresh daily ingredients create tight feedback loops and immediate error visibility'
    ],
    friction: [
      'No-franchising model requires owning all real estate and equipment (capital intensive)',
      '$125.5M Tennessee distribution center locks in long-term geographic commitments',
      'Controlled growth model (only expand near distribution hubs) limits expansion speed',
      'Vertical integration reduces flexibility compared to asset-light franchise models',
      'Limited menu constrains revenue diversification (no breakfast, coffee, chicken offerings)',
      'Fresh ingredient model requires higher working capital than frozen/processed alternatives'
    ],
    quotable: 'In-N-Out operates at 3.25 GPI with the agility of companies 1/10th its size: strategic constraints preserve fluidity at scale.',
  },

  '3m': {
    slug: '3m',
    name: '3M',
    analysisDate: '2026-01-26',
    gpiScore: 6.0,
    state: 'Transitioning (upper)',
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: '3M Excellence system targeting bureaucracy, but 122-year legacy and 220 plants slow rewiring' },
      { dimension: 'Error Correction', score: 6, explanation: 'Major corrections executed (Solventum spin, settlements) but pattern of reactive layoffs every 6-9 months' },
      { dimension: 'Knowledge Location', score: 5, explanation: 'Deep materials science expertise, AI tools democratizing knowledge, but fragmented across 220 plants' },
      { dimension: 'Structural Lock-In', score: 7, explanation: 'Massive manufacturing infrastructure, $12.5B debt, multi-year settlement payments constraining flexibility' },
      { dimension: 'Talent Flow', score: 5, explanation: 'Decent Glassdoor ratings but six years of layoffs eroded trust, RTO mandate risks agile talent' },
      { dimension: 'Capital Intensity', score: 8, explanation: '$15B procurement, $1.5B capex, settlement payments pull cash through 2027' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'Product launches up 68%, AI investment improving, but from low baseline and legacy systems' }
    ],
    pattern: 'The Heavyweight Pivot',
    patternDescription: '3M represents a specific transformation archetype: the capital-heavy industrial trying to pivot with mass weighing down every turn. Picture a freight ship attempting to match the maneuverability of a speedboat. The ship has advantages: cargo capacity, durability, reach. But when the market changes direction, the physics are unforgiving. 3M cannot simply "become agile" because its value proposition requires manufacturing infrastructure. You cannot make Post-it Notes in a WeWork. The pattern here is not whether transformation will succeed or fail. It is about the physics of transformation at scale. CEO Brown is doing the right things: installing operational discipline, shedding non-core businesses, investing in AI, accelerating product launches. But each decision takes longer to implement ac',
    keyNumbers: [
      '$89.3B market cap',
      '$24.9B revenue (FY 2025)',
      '61,500 employees',
      '220 manufacturing plants worldwide',
      '100+ distribution centers globally',
      'Fortune 500 Rank: #87',
      'Founded: 1902 (122 years old)',
      '$12.5B long-term debt'
    ],
    enablers: [
      'New CEO with aerospace-defense operational discipline bringing urgency and accountability',
      '3M Excellence operating system explicitly targeting bureaucracy reduction',
      'AI investment in customer-facing tools (Ask 3M) and operational intelligence (Edge AI)',
      'Product launch velocity recovering',
      'Major restructuring 90% complete, reducing organizational complexity',
      'Margin expansion proving operational improvements are taking hold (23.4% adjusted operating margin)'
    ],
    friction: [
      '$12.5B long-term debt constraining strategic flexibility',
      'Multi-year settlement payments',
      '220 manufacturing plants create massive infrastructure maintenance burden',
      'Six years of layoffs every 6-9 months have eroded employee trust',
      '4-day RTO mandate signals control-preference that may lose agile talent',
      'PFAS exit requires capital investment in manufacturing changes, not strategic growth'
    ],
    quotable: '3M at 6.0 is a heavyweight trying to box like a middleweight. The mass is real.',
  },

  'caterpillar': {
    slug: 'caterpillar',
    name: 'Caterpillar',
    analysisDate: '2026-01-26',
    gpiScore: 5.85,
    state: 'Transitioning (upper)',
    dimensions: [
      { dimension: 'Decision Latency', score: 5, explanation: 'Executive decisiveness on CES announcements, but 113K employees create layers' },
      { dimension: 'Error Correction', score: 5, explanation: 'Restructuring cycles show willingness to adjust, but corrections are reactive' },
      { dimension: 'Knowledge Location', score: 6, explanation: 'Helios platform democratizes data, but 5-day RTO pulls knowledge to offices' },
      { dimension: 'Structural Lock-In', score: 7, explanation: 'Global manufacturing, dealer network, unions, $40B backlog create rigidity' },
      { dimension: 'Talent Flow', score: 6, explanation: 'Solid Glassdoor ratings, but layoff cycles and RTO mandate create friction' },
      { dimension: 'Capital Intensity', score: 8, explanation: 'Heavy equipment manufacturing requires massive capital, 201% debt-to-equity' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'AI transformation accelerating but physical product cycles remain slow' }
    ],
    pattern: 'The Century-Old Startup',
    patternDescription: 'Caterpillar represents a rare breed: the legacy industrial giant genuinely attempting digital transformation rather than just talking about it. At CES 2026, CEO Joe Creed did not show up with PowerPoint slides about innovation. He showed up with working AI products, an NVIDIA partnership, and a $25M commitment to workforce development. This is the pattern of the Century-Old Startup, a company with enough mass and momentum that it cannot fail quickly, but also enough self-awareness to recognize that standing still means slow death. The 30 years of autonomous mining experience gives them credibility that other industrial companies lack. The 1.6 million connected assets and 16 petabytes of data give them raw material for AI that tech companies cannot replicate. But the 113,000 employees, the ',
    keyNumbers: [
      '$292-303B market capitalization (January 2026)',
      '$64.8B revenue (2024)',
      '113,000 employees globally',
      '1.6 million connected assets on Helios platform',
      '16 petabytes of equipment data',
      '$40 billion order backlog',
      '$30B invested in R&D over 20 years',
      '62% stock appreciation in 12 months'
    ],
    enablers: [
      '30+ years autonomous mining experience provides genuine AI/autonomy foundation',
      '1.6 million connected assets generating 16 petabytes of data on Helios platform',
      'NVIDIA partnership for AI-enhanced manufacturing and customer solutions',
      'Cat AI Assistant unifies digital ecosystem into conversational interface',
      '$25M workforce development investment signals talent commitment',
      'New CEO Joe Creed brings fresh leadership energy with digital vision'
    ],
    friction: [
      '113,000 employees across global operations creates decision layer complexity',
      '201% debt-to-equity ratio constrains financial agility',
      '5-day RTO mandate reduces access to tech talent needed for transformation',
      'Complex supply chain with thousands of components creates delay cascades',
      'Union relationships and collective bargaining add labor rigidity',
      '$40B order backlog locks production patterns for years'
    ],
    quotable: 'Caterpillar is trying to install a Tesla engine in a Ford frame. The question is whether the frame can handle the power.',
  },

  'cardinal-health': {
    slug: 'cardinal-health',
    name: 'Cardinal Health',
    analysisDate: '2026-01-26',
    gpiScore: 6.15,
    state: 'Transitioning (upper)',
    ticker: 'CAH',
    marketCap: '$49.5B',
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: '48K employees, 5 segments, leadership restructuring shows decisiveness but scale creates approval chains' },
      { dimension: 'Error Correction', score: 6, explanation: 'AI Center of Excellence, aggressive tariff mitigation, GMPD Improvement Plan, but physical constraints slow pivots' },
      { dimension: 'Knowledge Location', score: 6, explanation: 'Knowledge fragmented across 5 segments, AI/Kafka investments improving but integration takes time' },
      { dimension: 'Structural Lock-In', score: 7, explanation: 'Physical infrastructure, $7.7B debt, negative equity, opioid settlements, nuclear pharmacy licensing' },
      { dimension: 'Talent Flow', score: 6, explanation: 'Glassdoor 3.7/5, 67% recommend, but constant restructuring and CHRO retiring create uncertainty' },
      { dimension: 'Capital Intensity', score: 7, explanation: 'Distribution centers, warehouses, cold chain, automation equipment, acquisitions totaling $3.9B' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'AI Center of Excellence, Kafka streaming, IBM/Google partnerships, but physical operations set ceiling' }
    ],
    pattern: 'Infrastructure Scale Paradox',
    patternDescription: 'Cardinal Health embodies the infrastructure scale paradox. The company moves $234B in pharmaceuticals and medical supplies annually. That scale creates market power, supplier leverage, and operational efficiency. But the same scale creates organizational mass. Knowledge fragments across five segments. Decisions require coordination across 48,000 employees. Physical assets lock in capital that cannot easily pivot. CEO Jason Hollar understood the problem. His ruthless prioritization exited countries, sold non-core portfolios, eliminated leadership roles. But the core model remains: distribution requires physical infrastructure that cannot be digitized away. You can add AI to optimize inventory. You cannot eliminate the warehouse. The company is trying to use digital transformation to break t',
    keyNumbers: [
      'Market Cap: $49.5B (52-week high $215.48, January 2026)',
      'Revenue: $234.31B TTM, Q1 FY26 $64B (+22% YoY)',
      'Employees: ~48,000 globally across 30+ countries',
      'Fortune 500 Rank: #14 (2025)',
      'Ticker: CAH (NYSE)',
      'Founded: 1971 (as Cardinal Foods)',
      'Headquarters: 7000 Cardinal Place, Dublin, OH 43017',
      'CEO: Jason M. Hollar (since September 2022)'
    ],
    enablers: [
      'AI Center of Excellence operational since 2021 with dedicated leadership (Anagha Vyas)',
      'Kafka/Confluent Cloud data streaming modernization for real-time analytics',
      'Strategic acquisitions expanding specialty footprint (Solaris, GI Alliance, ADSG totaling $3.9B)',
      'CEO Hollar\'s ruthless prioritization and portfolio simplification',
      'Strong financial performance (Q1 FY26 revenue +22%, raised EPS guidance to $10+)',
      'Nuclear pharmacy network (130+ locations) provides competitive moat'
    ],
    friction: [
      'Tariff exposure ($200-300M impact) requiring layoffs and supplier diversification',
      'Capital-intensive model with $7.7B debt and negative shareholder equity',
      'OptumRx contract loss shows customer concentration vulnerability',
      'Opioid settlement obligations and DOJ investigation overhang',
      'CHRO retiring February 2026 (24-year tenure) creates leadership knowledge gap',
      'Constant restructuring creates employee uncertainty (layoff headcount not disclosed)'
    ],
    quotable: 'Cardinal Health at GPI 6.15 is a company fighting its own physics. The fundamentals are strong. The constraints are real.',
  },

  'honeywell': {
    slug: 'honeywell',
    name: 'Honeywell',
    analysisDate: '2026-01-26',
    gpiScore: 5.85,
    state: 'Transitioning (upper)',
    marketCap: '$149.68B',
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: 'Three-way split shows capability but required activist pressure. 102K employees, four segments create layers.' },
      { dimension: 'Error Correction', score: 5, explanation: 'Proactive digital transformation, app consolidation, supply chain investment. But aerospace supply base still fragmented.' },
      { dimension: 'Knowledge Location', score: 6, explanation: 'Four segments with distinct expertise. Data strategy centralizing but physical separation fragments knowledge post-split.' },
      { dimension: 'Structural Lock-In', score: 7, explanation: 'Aerospace platform lifecycles, industrial equipment embedded for decades. Conglomerate structure itself was lock-in.' },
      { dimension: 'Talent Flow', score: 5, explanation: 'Glassdoor 4.1 strong but no-remote policy drives attrition. 51% feel insecure, Intelligrated subsidiary at 3.1.' },
      { dimension: 'Capital Intensity', score: 7, explanation: 'Industrial manufacturing requires capital but lighter than heavy industry. Strong FCF funds transformation.' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'AI-first commitment, Quantinuum IPO, Google partnership. But 102K employees slow propagation.' }
    ],
    pattern: 'Conglomerate Unbundling',
    patternDescription: 'Honeywell represents the conglomerate unbundling pattern. For decades, the thesis was that diverse industrial businesses under one roof created synergies: shared R&D, cross-selling, financial flexibility. But markets increasingly value focus. Elliott Management bet $5 billion that Honeywell was worth more as three pieces than as one whole. The company agreed. This pattern plays out across legacy industrials. GE split into three. 3M spun off healthcare. Johnson & Johnson separated consumer health. The physics of conglomerates changed: what once provided resilience now creates friction. Decisions slow because they must account for multiple business contexts. Knowledge silos prevent cross-pollination that was supposed to be the advantage. Talent struggles to see career paths across unrelated ',
    keyNumbers: [
      'Market Cap: $149.68B (up 12% YTD 2026)',
      'Revenue: $40.67B TTM (up from $38.49B in 2024)',
      'Employees: 102,000 globally',
      'Fortune 500 Rank: #114 (2024)',
      'Stock: HON (NASDAQ), up 12% in early 2026',
      'CEO Tenure: Vimal Kapur since 2023, Chairman 2024, 35+ years at company',
      'Glassdoor: 4.1/5.0 (84% recommend, 75% positive business outlook)',
      'Separation Costs: $1.5-2B estimated for three-way split'
    ],
    enablers: [
      'Three-way split decision shows willingness to break structural lock-in (Aerospace, Automation, Materials)',
      'Data strategy consolidation (4,500 apps to 1,000) creates foundation for AI-driven knowledge velocity',
      'Leadership stability (Vimal Kapur, 35+ years, CEO 2023, Chairman 2024) with clear succession (James Currier for Aerospace)',
      'Strong free cash flow ($5.2-5.6B expected 2025) funds transformation without dilutive equity',
      'AI-first commitment (Davos 2026, Quantinuum IPO, Google Cloud partnership, physical AI vision)',
      'Record backlogs and 11 consecutive quarters of double-digit aerospace output growth'
    ],
    friction: [
      'Activist pressure required to break conglomerate structure (Elliott Management $5B stake preceded decision)',
      'No-remote policy driving talent attrition and sentiment issues (IP address monitoring, mandatory 5-day office)',
      'Aerospace supply chain "still very fragmented" with lack of resiliency in mechanical supply base',
      'Margin compression (16.9% operating margin Q3 2025, down 220 bps) during restructuring',
      'Separation costs of $1.5-2B create near-term drag on financial performance',
      'Post-split entities may each face same physics problems at smaller scale'
    ],
    quotable: 'Elliott Management bet $5 billion that Honeywell was worth more as three pieces than as one whole. The company agreed. That\'s not transformation. That\'s capitulation with upside.',
  },

  'tenet-healthcare': {
    slug: 'tenet-healthcare',
    name: 'Tenet Healthcare',
    analysisDate: '2026-01-26',
    gpiScore: 6.05,
    state: 'Transitioning (upper)',
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: 'Rapid portfolio transformation, but dodged 2026 guidance questions on investor calls' },
      { dimension: 'Error Correction', score: 5, explanation: 'Strong strategic pivots, slower clinical quality corrections (Leapfrog lawsuit)' },
      { dimension: 'Knowledge Location', score: 6, explanation: 'Global business center expanding, but healthcare requires distributed expertise' },
      { dimension: 'Structural Lock-In', score: 7, explanation: '49 hospitals, $12.6B debt, Medicaid dependency create constraints' },
      { dimension: 'Talent Flow', score: 6, explanation: 'Stable C-suite, but Glassdoor 3.0/5 with 38% recommend rate' },
      { dimension: 'Capital Intensity', score: 8, explanation: '$875-975M annual capex, shifting to lower-intensity ASC model' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'Commure AI deployment, regulatory environment slows adoption' }
    ],
    pattern: 'The Pivot Paradox',
    patternDescription: 'Tenet Healthcare exemplifies what we call the Pivot Paradox: a company actively transforming its business model while still carrying the structural weight of its previous identity. The company is simultaneously one of the most aggressive portfolio transformers in healthcare and one of the most capital-intensive operators in the industry. This creates a unique tension where the direction of travel is clearly positive, but the current state still reflects legacy constraints. The pivot from hospitals to ASCs is working. The numbers prove it. But Tenet cannot fully escape the gravity of 49 hospitals, $12.6B in debt, and the regulatory complexity of healthcare. The paradox is that the transformation creates confidence, but the remaining structure creates risk. Investors must decide whether to b',
    keyNumbers: [
      '$21.74B market cap',
      '$20.85B TTM revenue (2026)',
      '98,000 employees',
      '49 hospitals across 8 states',
      '520+ ambulatory surgery centers (ASCs) across 38 states',
      'Fortune 500 Rank: #96',
      'Leverage reduced from 6x to 2.30x EBITDA over 7 years',
      '$12.6B total debt, 145% debt-to-equity ratio'
    ],
    enablers: [
      'Aggressive portfolio transformation with 14 hospital divestitures and 70 ASC additions in 2024',
      'Leverage reduced from 6x to 2.30x EBITDA over 7 years, creating financial flexibility',
      'Global business center scaling to 10-12 service lines including clinical analytics',
      'Commure AI partnership with year-long embedded engineering for customized deployment',
      'USPI model with 520+ ASCs creates distributed, lower-capital-intensity operations',
      'Contract labor costs reduced from 2.8% to 2.1%, indicating operational discipline'
    ],
    friction: [
      '$12.6B debt load with 145% debt-to-equity ratio constrains strategic options',
      'Medicaid supplemental payments of $1.1-1.2B annually create government dependency',
      'Glassdoor 3.0/5 rating with 38% recommend rate signals frontline talent challenges',
      'Leapfrog Group lawsuit indicates unresolved patient safety rating disputes',
      'ACA subsidy expiration risk could impact payer mix and uncompensated care',
      'Leadership reluctance to provide 2026 guidance signals policy uncertainty concerns'
    ],
    quotable: 'Tenet is executing one of the most aggressive portfolio transformations in healthcare. 14 hospitals out, 70 ASCs in, in a single year. This is not theater.',
  },

  'commonspirit-health': {
    slug: 'commonspirit-health',
    name: 'CommonSpirit Health',
    analysisDate: '2026-01-26',
    gpiScore: 6.4,
    state: 'Transitioning (upper)',
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: 'Large healthcare systems don\'t move fast. 138 hospitals across 24 states. Every clinical protocol change needs buy-in from regional divisions. CEO announced divestitures at JPM 2026, but timeframe measured in quarters. Non-profit governance adds approval layers.' },
      { dimension: 'Error Correction', score: 6, explanation: '$165M Q1 operating loss signals pivot toward divestitures and AI. But error correction constrained by patient safety regulations, labor agreements, Catholic health directives. Can\'t A/B test hospital workflows. 242 AI tools deployed but adoption across 160,000 employees takes years.' },
      { dimension: 'Knowledge Location', score: 6, explanation: 'Post-merger integration still happening 7 years later. CHI and Dignity Health had different EMR systems, protocols, processes. Knowledge sits in regional silos. Google Cloud partnership aims to centralize data, but healthcare knowledge is sticky.' },
      { dimension: 'Structural Lock-In', score: 8, explanation: '138 hospitals are not movable assets. Real estate, equipment, labor contracts, community health obligations create structural gravity. Catholic health mission adds ethical layer, can\'t just close hospitals serving vulnerable populations.' },
      { dimension: 'Talent Flow', score: 6, explanation: 'Glassdoor 3.5/5.0, 64% would recommend. Healthcare workers have options. Reviews mention burnout, staffing shortages, post-merger culture clashes. Mission helps retention but doesn\'t fix structural workforce issues.' },
      { dimension: 'Capital Intensity', score: 8, explanation: '138 hospitals, 2,300+ care sites. MRI machines, surgical suites, emergency departments, ICUs. Constant capital investment needed. $40B revenue sounds big until you realize thin margins. $165M Q1 operating loss shows capital-heavy reality.' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: '242 AI tools are the bright spot. Clinical decision support, predictive analytics, automated documentation. Google Cloud partnership. But knowledge velocity constrained by regulation and safety protocols. Can\'t move fast and break things with patients. Best practices spread through journals, not Slack.' }
    ],
    pattern: 'Mission-Driven Scale Paradox',
    patternDescription: 'CommonSpirit Health shows what happens when mission and physics collide. The Catholic health mission drives them to serve vulnerable populations across 24 states. But serving 160,000 employees across 138 hospitals creates the exact friction that raises GPI. They can\'t divest underperforming hospitals as easily as a for-profit system because the mission says you don\'t abandon communities. They can\'t move fast on clinical changes because patient safety and Catholic directives constrain experimentation. They can\'t optimize purely for efficiency because the mission isn\'t about margins. The 242 AI tools and Google Cloud partnership show they\'re trying to reduce friction through technology. The divestitures show they\'re willing to shrink strategically. But the fundamental tension remains: the mi',
    keyNumbers: [
      'Founded: 2019 (CHI + Dignity Health merger)',
      'Employees: 160,000',
      'Revenue: $40B (FY 2025)',
      'Operating Income: -$165M (Q1 2025)',
      'Facilities: 138 hospitals, 2,300+ care sites',
      'Geographic Footprint: 24 states',
      'AI Tools Deployed: 242 ($100M estimated value)',
      'Headquarters: Chicago, IL'
    ],
    enablers: [
      '242 AI tools deployed, $100M estimated value',
      'Google Cloud partnership for data centralization',
      'CEO Lassiter announcing strategic divestitures',
      'Mission-driven culture supports talent retention'
    ],
    friction: [
      '138 hospitals create structural lock-in (8/10)',
      '$165M Q1 operating loss, thin margins',
      'Post-merger integration still ongoing after 7 years',
      'Non-profit governance adds approval layers',
      'Healthcare regulation constrains error correction speed'
    ],
  },

  'h-e-b': {
    slug: 'h-e-b',
    name: 'H E B',
    analysisDate: '2026-01-27',
    gpiScore: 3.3,
    state: 'Transitioning (lower)',
    dimensions: [
      { dimension: 'Decision Latency', score: 3, explanation: 'Private family ownership enables rapid decisions without quarterly earnings pressure. Multiple new stores opened in early 2026. Adjusted hours within 24 hours during January 2026 winter storms. Regional focus allows store-level autonomy in product selection.' },
      { dimension: 'Error Correction', score: 3, explanation: 'Named #1 grocery retailer by Dunnhumby for two consecutive years. Adopted tap-to-pay in Oct 2024 after years of resistance. Built 9 fulfillment centers since 2018 (major pandemic pivot). Maintained 48% San Antonio market share despite Walmart expansion.' },
      { dimension: 'Knowledge Location', score: 3, explanation: 'Sensor-based analytics capture real-time shopper behavior for dynamic layout optimization. Austin innovation hub operates with Silicon Valley culture. Data science teams personalize inventory and marketing at store level. Store managers exercise significant product curation autonomy.' },
      { dimension: 'Structural Lock-In', score: 3, explanation: 'Private ownership eliminates quarterly earnings pressures. Texas-only footprint provides operational consistency without nationwide complexity. Building modern 120,000-131,000 sq ft stores in 2026. No frozen pensions, union constraints, or debt covenants detected.' },
      { dimension: 'Talent Flow', score: 4, explanation: '160,000+ Partners with 4.2/5 Glassdoor rating. 84% recommend to friend. First female president in 120 years (Roxanne Orsak). However, frontline retail roles limit mobility. Glassdoor mentions monotonous work and strict attendance policies.' },
      { dimension: 'Capital Intensity', score: 5, explanation: 'Grocery retail requires substantial store infrastructure (120,000+ sq ft facilities, refrigeration, fulfillment centers). 340+ stores and 9 fulfillment centers demand ongoing capex. However, $46.5B revenue and strong cash generation fund expansion without debt pressure.' },
      { dimension: 'Knowledge Velocity', score: 3, explanation: 'Sensor-based analytics enable real-time store optimization. Austin innovation hub tests concepts with startup velocity. Rapid product scaling ($1M weekly brisket queso). Tap-to-pay deployment in Oct 2024. Physical retail constraints limit velocity vs digital-native businesses.' }
    ],
    pattern: 'Regional Dominance Through Localized Excellence',
    patternDescription: 'H-E-B demonstrates that geographic focus beats national scale when operational excellence and market intimacy compound. By concentrating entirely on Texas, the company achieves 48% market share in San Antonio while Walmart manages only 28% despite vastly greater resources. This pattern reveals how regional players can outcompete global giants through deep local knowledge, faster decision-making, and community-specific product curation. Private ownership enables long-term thinking that public competitors cannot match, while Texas-only operations provide consistency without nationwide complexity. The company\'s 120-year family ownership under the Butt family eliminates quarterly earnings pressure, enabling multi-year investments in innovation infrastructure like the Austin tech hub and nine f',
    keyNumbers: [
      '$46.5B revenue (2024 estimate, #5 on Forbes Private Companies list)',
      '160,000+ employees (called Partners)',
      '340+ stores across Texas and Mexico',
      '48% market share in San Antonio vs Walmart\'s 28%',
      '4.2/5 Glassdoor rating across 14,051 reviews',
      '84% of employees recommend to friend',
      '#1 Dunnhumby Retailer Index 2023-2024 (4 times since 2017)',
      '9 fulfillment centers built since 2018'
    ],
    enablers: [
      'Private family ownership eliminates quarterly earnings pressure and short-term decision constraints',
      'Texas-only geographic focus enables operational consistency and rapid market adaptation',
      'Austin innovation hub fosters Silicon Valley-style tech culture separate from legacy retail operations',
      'Sensor-based analytics and data science enable real-time store optimization and personalization',
      'Store-level autonomy in product curation creates localized market responsiveness',
      'Strong cash generation ($46.5B revenue, profitable) funds expansion without debt constraints'
    ],
    friction: [
      'Physical infrastructure requirements demand continuous capital investment for stores and fulfillment centers',
      'Retail workforce of 160,000+ Partners limits talent mobility compared to knowledge work environments',
      'Geographic restriction to Texas markets caps addressable market growth versus national competitors',
      'Grocery retail\'s thin margins create constant pressure despite revenue scale',
      'Physical store format limits knowledge velocity compared to digital-first businesses',
      '120-year-old company culture must balance tradition with innovation as it scales tech capabilities'
    ],
    quotable: 'Regional excellence defeats national mediocrity. H-E-B maintains 48% market share in San Antonio versus Walmart\'s 28% by choosing depth over breadth.',
  },

  'prologis': {
    slug: 'prologis',
    name: 'Prologis',
    analysisDate: '2026-01-26',
    gpiScore: 5.3,
    state: 'Transitioning (upper)',
    dimensions: [
      { dimension: 'Decision Latency', score: 5, explanation: 'Six-year succession planning shows strategic capacity. 228M SF leases indicate efficient execution. Investment Committee adds layers but ensures discipline.' },
      { dimension: 'Error Correction', score: 4, explanation: 'Cut development starts 30% when visibility dropped. $8B data center pivot shows strategic adaptability. 94% positive business outlook indicates healthy culture.' },
      { dimension: 'Knowledge Location', score: 5, explanation: 'PLD GPT 2.0 democratizes knowledge. 70% AI adoption. But 20-country spread creates coordination challenges. Investment Committee centralizes capital decisions.' },
      { dimension: 'Structural Lock-In', score: 7, explanation: 'REIT regulatory constraints. 1.3B sq ft physical assets. Long-term leases with 6,500 tenants. $60B third-party AUM adds stakeholder complexity.' },
      { dimension: 'Talent Flow', score: 4, explanation: 'Glassdoor 4.7/5, 96% recommend. Internal promotion culture. Six-year succession planning. Some note slow advancement on operations side.' },
      { dimension: 'Capital Intensity', score: 8, explanation: 'REIT with $121.75B market cap. $8B data center expansion. $3-4B annual development. No asset-light version of this business exists.' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'Annual Supply Chain Intelligence reports survey 1,800 executives. PLD GPT 2.0 accelerates internal processes. Physical asset timelines bound implementation speed.' }
    ],
    pattern: 'The Agile Behemoth',
    patternDescription: 'Prologis demonstrates a rare pattern: organizational agility maintained despite maximum capital intensity. Most companies with 1.3 billion square feet of physical assets become calcified by their own mass. Their decision-making slows to match the pace of their infrastructure. Prologis inverts this by treating their physical scale as a platform for experimentation rather than a constraint on movement. The $8B data center pivot happened in quarters, not decades. The AI adoption reached 70% before most competitors acknowledged the technology. The six-year succession plan executed flawlessly. This is not accidental agility. It is engineered agility, built through deliberate investment in knowledge systems (PLD GPT 2.0), talent development (internal promotions for all recent executive transitio',
    keyNumbers: [
      '$121.75B market cap',
      '$8.73B revenue (TTM), up 10.75% YoY',
      '2,703 employees (up 5% YoY)',
      '1.3 billion square feet across 20 countries',
      '6,500 tenant customers',
      '228 million SF record leases signed in 2025',
      '$8B data center expansion investment',
      '5.7 GW power pipeline for data centers'
    ],
    enablers: [
      'Six-year succession planning demonstrates strategic patience and institutional capability',
      '$8B data center expansion shows ability to pivot within capital-intensive constraints',
      '70% advanced AI adoption positions company ahead of peers in knowledge application',
      'PLD GPT 2.0 democratizes institutional knowledge across 2,703 employees',
      'Glassdoor 4.7/5 rating creates talent magnet effect in competitive market',
      'Record 228M SF leasing in 2025 validates execution capability'
    ],
    friction: [
      'REIT structure imposes regulatory constraints on capital allocation flexibility',
      '1.3B sq ft physical asset base cannot be quickly reconfigured or exited',
      'Long-term tenant leases create predictable but rigid revenue commitments',
      '20-country geographic spread introduces coordination complexity and regulatory friction',
      'Tenant decision delays (64-day average in 2025) expose company to external market friction',
      'Investment Committee structure adds layers to major capital decisions'
    ],
    quotable: 'Capital intensity is not destiny. Organizations can be massive and still move. The key is building knowledge and talent infrastructure that operates faster than the physical infrastructure.',
  },

  'hca-healthcare': {
    slug: 'hca-healthcare',
    name: 'Hca Healthcare',
    analysisDate: '2026-01-26',
    gpiScore: 6.05,
    state: 'Transitioning (upper)',
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: '220 hospitals, 316K employees, divisional structure provides some autonomy but scale creates approval chains.' },
      { dimension: 'Error Correction', score: 5, explanation: 'Proactive digital transformation (MEDITECH, OpenAI, AI for patient safety), but untested at scale under stress.' },
      { dimension: 'Knowledge Location', score: 6, explanation: 'Regional silos across 220 hospitals, MEDITECH Expanse centralizing clinical data but rollout takes years.' },
      { dimension: 'Structural Lock-In', score: 7, explanation: '220 hospitals, 40,000 beds, massive physical infrastructure, highly regulated industry creates constraints.' },
      { dimension: 'Talent Flow', score: 6, explanation: 'Glassdoor 3.3/5.0, only 48% recommend. Retention by industry dynamics (labor shortage), not organizational pull.' },
      { dimension: 'Capital Intensity', score: 8, explanation: 'Hospital business requires massive capital for facilities, equipment, and ongoing infrastructure investment.' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'Aggressive AI adoption (OpenAI GPT-5.2, MEDITECH with decision support), but 220-hospital scale slows propagation.' }
    ],
    pattern: 'Scale as Constraint',
    patternDescription: 'HCA Healthcare embodies the scale as constraint pattern. With 220 hospitals and 316,000 employees, HCA is the largest for-profit hospital system in America. That scale generates enormous advantages: market power, capital for investment, ability to absorb technology bets like OpenAI and MEDITECH. But scale also creates physics problems. Decision latency increases because changes must propagate across hundreds of facilities. Knowledge silos form because regional divisions operate semi-independently. Talent flow stagnates because employees feel like numbers in a 316,000-person workforce (Glassdoor 3.3/5.0). The company is trying to use digital transformation to break the constraint. AI tools should accelerate knowledge velocity. EHR standardization should reduce silos. But the rollout itself ',
    keyNumbers: [
      'Market Cap: $109.27B (up 34.85% year-over-year)',
      'Revenue: $74.37B (TTM, up 6.82% year-over-year)',
      'Employees: 316,000 (226,000 full-time equivalent)',
      'Hospitals: 220 facilities across multiple divisions',
      'Beds: 40,000+ staffed beds (largest in U.S. by bed count)',
      'Fortune 500 Rank: #61 (2024)',
      'Ticker: HCA (NYSE)',
      'Founded: 1968'
    ],
    enablers: [
      'MEDITECH Expanse EHR rollout (43 hospitals live January 2026, enterprise-wide deployment in progress)',
      'OpenAI for Healthcare deployment (GPT-5.2, HIPAA-compliant, across 220 facilities)',
      'Digital Transformation and Innovation department with dedicated COO (Whitney Staub-Juergens)',
      'AI-driven patient safety monitoring (upstream error detection before harm occurs)',
      'Strong financial position ($109B market cap, $74B revenue enables continued investment)',
      'Leadership stability (CEO Samuel Hazen, 36-year company veteran, since 2019)'
    ],
    friction: [
      'Scale creates decision latency (220 hospitals, 316K employees, multiple management layers)',
      'Knowledge silos across regional divisions (divisional structure fragments expertise)',
      'Mediocre employee sentiment (Glassdoor 3.3/5.0, only 48% recommend to friend)',
      'Capital intensity limits agility (hospitals, beds, equipment require massive ongoing investment)',
      'Regulatory constraints slow adaptation (CON laws, licensing, reimbursement structure)',
      'Competitive resistance to expansion (regional systems blocking HCA growth in Virginia and elsewhere)'
    ],
  },

  'synopsys': {
    slug: 'synopsys',
    name: 'Synopsys',
    analysisDate: '2026-01-26',
    gpiScore: 5.65,
    state: 'Transitioning (upper)',
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: 'Layoffs announced November 2025, execution delayed until January 2026+. Two-month lag between strategic decision and implementation signals approval bottlenecks.' },
      { dimension: 'Error Correction', score: 6, explanation: 'Stock crashed 35% from July 2025 peak. Response has been reactive (announce layoffs) rather than proactive (prepare integration plan pre-acquisition).' },
      { dimension: 'Knowledge Location', score: 6, explanation: 'Post-acquisition knowledge sits in silos. Legacy Synopsys EDA expertise separate from Ansys simulation know-how.' },
      { dimension: 'Structural Lock-In', score: 5, explanation: 'Software company with lower physical asset lock-in, but $35B Ansys acquisition creates financial lock-in and strategic path dependency.' },
      { dimension: 'Talent Flow', score: 6, explanation: '10% layoffs (2,800 jobs) will drain institutional knowledge. Reviews mention no raises in 2025 and benefits declining.' },
      { dimension: 'Capital Intensity', score: 4, explanation: 'Software and IP licensing business. Minimal physical infrastructure compared to semiconductor manufacturing.' },
      { dimension: 'Knowledge Velocity', score: 6, explanation: 'AI tools like AgentEngineer deployed, but RTO mandate and post-merger friction slow knowledge flow.' }
    ],
    pattern: 'Integration Gridlock',
    patternDescription: 'Synopsys exhibits the classic post-acquisition integration gridlock pattern. The $35 billion Ansys acquisition created immediate decision paralysis, knowledge silos between legacy organizations, and structural constraints that override strategic intent. Leadership announced layoffs in November 2025 but couldn\'t execute until January 2026 because the approval machinery was too slow. They see AI as the future but mandate return-to-office policies that drain knowledge velocity. The company has the capital and market position to transform, but the integration complexity creates friction at every decision point. This isn\'t strategy failure. It\'s physics. The larger and more complex the organization becomes, the slower it moves, even when speed is survival.',
    keyNumbers: [
      'Market Cap: $96.5B',
      'Revenue: $6.43B (TTM)',
      'Employees: 28,000 (down from 31,000 pre-layoff)',
      'Layoffs: 10% workforce reduction (2,800 jobs), announced Nov 2025, executing Jan 2026+',
      'Stock Performance: Down 35% from July 2025 peak',
      'Glassdoor: 4.0/5.0 (80% recommend, 87% approve CEO)',
      'Ticker: SNPS (Nasdaq)',
      'Founded: 1986'
    ],
    enablers: [
      'AgentEngineer AI tool for code generation and verification deployed',
      'NVIDIA $2B partnership for AI-driven chip design acceleration',
      'GlobalFoundries IP sale shows willingness to divest non-core assets',
      'Software business model allows faster pivots than hardware',
      'EDA market duopoly position provides financial cushion',
      'Glassdoor scores suggest cultural foundation still intact'
    ],
    friction: [
      'Two-month delay between layoff announcement and execution',
      'Stock down 35% from peak, market losing confidence',
      'Forced RTO mandate contradicts knowledge velocity needs',
      'Post-merger knowledge silos between Synopsys and Ansys teams',
      'No raises in 2025 despite strong market position',
      'Integration complexity creating decision bottlenecks'
    ],
  },

  'lennar': {
    slug: 'lennar',
    name: 'Lennar',
    analysisDate: '2026-01-26',
    gpiScore: 5.35,
    state: 'Transitioning (upper)',
    marketCap: '$30.2B',
    dimensions: [
      { dimension: 'Decision Latency', score: 5, explanation: 'Consolidated to sole CEO, Millrose/Quarterra decisions show decisiveness, but 30 states create coordination friction' },
      { dimension: 'Error Correction', score: 5, explanation: 'Strategic pivots (asset-light, divestitures) demonstrate correction, but weekly layoffs suggest reactive cuts' },
      { dimension: 'Knowledge Location', score: 5, explanation: 'Lennar Machine centralizes analytics, Azure data warehouse deployed, but CTO departure creates continuity risk' },
      { dimension: 'Structural Lock-In', score: 6, explanation: 'Asset-light model reduces land lock-in, 150-day cycles show flexibility, but physical homebuilding still constrains' },
      { dimension: 'Talent Flow', score: 6, explanation: 'Glassdoor 3.4/5.0 mediocre, layoffs creating churn, New Home Consultants only 2.6/5.0' },
      { dimension: 'Capital Intensity', score: 6, explanation: 'More cash than debt, Millrose removes land capital, but homebuilding still requires significant construction capital' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'AI chatbots, predictive analytics, $92M revenue from data warehouse, but CTO departure and 75-market scale slow propagation' }
    ],
    pattern: 'Strategic Shedding',
    patternDescription: 'Lennar is executing what we call Strategic Shedding. The company identified that its traditional homebuilder structure, heavy with land assets, multifamily exposure, and dual-CEO complexity, was creating organizational drag. So they shed: Millrose took the land. TPG took Quarterra. Jaffe took retirement. Each divestiture reduces mass and theoretically increases velocity. The bet is that a lighter Lennar can move faster in a volatile housing market. Asset-light models require less capital, enable faster pivots, and concentrate management attention on core competency. The Millrose spin-off removes $5-6B in land assets. The Quarterra sale eliminates a $75M operating loss drag. Leadership consolidation under Stuart Miller simplifies the decision chain. But shedding creates its own friction. We',
    keyNumbers: [
      'Market Cap: $30.2B (down 18.26% year-over-year)',
      'Revenue: $35.4B TTM (down 1.13% year-over-year)',
      'Employees: 13,265',
      'Homes Delivered: 82,500 (FY2025), targeting 85,000 (FY2026)',
      'Fortune 500 Rank: #141',
      'Gross Margin: 17% (down from 22% year-over-year)',
      'Incentives: 14% of sales price',
      'Average Sales Price: $386,000 (down 10% year-over-year)'
    ],
    enablers: [
      'Millrose spin-off removes $5-6B land assets, accelerating asset-light transition',
      'Quarterra divestiture to TPG eliminates multifamily drag, pure-play homebuilding focus',
      'Leadership consolidation under Stuart Miller simplifies decision chain',
      '"Lennar Machine" AI platform drives sales optimization and predictive analytics',
      '150-day cycle time (30% improvement) demonstrates production efficiency',
      'Strong balance sheet'
    ],
    friction: [
      'Margin compression',
      'Layoffs happening weekly, creating culture uncertainty and talent concerns',
      'Mediocre employee sentiment',
      'CTO departure (Scott Spradley, May 2025) creates digital transformation leadership gap',
      '30-state, 75-market footprint creates coordination complexity',
      'Housing market headwinds'
    ],
    quotable: 'Lennar is shedding mass to gain velocity, but the shedding itself creates turbulence.',
  },

  'ge-aerospace': {
    slug: 'ge-aerospace',
    name: 'Ge Aerospace',
    analysisDate: '2026-01-26',
    gpiScore: 4.75,
    state: 'Transitioning (upper)',
    dimensions: [
      { dimension: 'Decision Latency', score: 4, explanation: 'FLIGHT DECK operating system drives lean decisions, customer teams report to CEO, AI Wingmate deployed in 6 weeks' },
      { dimension: 'Error Correction', score: 4, explanation: 'GE9X fix validated in weeks, 500 engineers deployed to suppliers, proactive restructuring when issues arise' },
      { dimension: 'Knowledge Location', score: 5, explanation: '44,000+ engines monitored real-time, AI Wingmate for all employees, but some roles still siloed' },
      { dimension: 'Structural Lock-In', score: 6, explanation: 'CFM joint venture, FAA certification, union contracts, but willing to restructure when needed' },
      { dimension: 'Talent Flow', score: 4, explanation: '85% recommend, strong benefits, but limited advancement opportunities per reviews' },
      { dimension: 'Capital Intensity', score: 7, explanation: 'Billions in MRO investment, decades-long engine cycles, inherent to aerospace' },
      { dimension: 'Knowledge Velocity', score: 4, explanation: 'Top AI patent holder in aviation, real-time monitoring, GenAI tools accelerating knowledge sharing' }
    ],
    pattern: 'The Conglomerate Escape Velocity',
    patternDescription: 'GE Aerospace demonstrates what happens when a calcified conglomerate division achieves escape velocity. The old General Electric was a textbook case of Particle state calcification. Decision latency stretched for months. Knowledge was siloed across dozens of business units. Structural lock-in made transformation nearly impossible. But when GE Aerospace spun off in April 2024, it shed that organizational weight. Under CEO Larry Culp, the company has adopted lean operating principles, deployed AI tools at startup speed, and restructured leadership to put customer teams closer to the top. This is the rare case of a legacy industrial company successfully transitioning toward Field state characteristics. The company deployed AI Wingmate to 52,000 employees in just six weeks. Material input from',
    keyNumbers: [
      '$344 billion market cap (January 2026)',
      '$44 billion revenue (2025), up 21% YoY',
      '$190 billion order backlog',
      '53,000 employees globally',
      '70,000 commercial and defense engines installed',
      '44,000+ engines monitored in real-time',
      '52,000 employees with AI Wingmate access',
      '6 weeks to deploy AI platform company-wide'
    ],
    enablers: [
      'FLIGHT DECK operating system driving lean transformation across the organization',
      'CEO Larry Culp\'s proven track record of transformation at Danaher',
      'AI Wingmate deployed to 52,000 employees, democratizing knowledge access',
      'Clean separation from old GE conglomerate complexity after April 2024 spin-off',
      '$190 billion backlog providing financial runway for transformation investments',
      'Real-time monitoring of 44,000+ engines enabling data-driven decisions'
    ],
    friction: [
      'Capital-intensive manufacturing with multi-billion dollar investment requirements',
      'Supply chain fragility with ongoing vendor relationship challenges',
      'FAA certification requirements creating regulatory decision constraints',
      'Boeing platform dependencies affecting GE9X and LEAP programs',
      'Union contracts covering 3,000+ workers limiting workforce flexibility',
      'LEAP engine durability concerns requiring engineering attention'
    ],
    quotable: 'GE Aerospace is what happens when a calcified conglomerate division achieves escape velocity. The question is whether they can maintain velocity as they scale.',
  },

  'cencora': {
    slug: 'cencora',
    name: 'Cencora',
    analysisDate: '2026-01-26',
    gpiScore: 6.35,
    state: 'Transitioning (upper)',
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: '51K employees, 31K trading partners, reorganized divisional structure provides some autonomy but scale creates coordination overhead' },
      { dimension: 'Error Correction', score: 7, explanation: 'Layoff pattern every 18 months, offshoring to India/Costa Rica/Lithuania, Glassdoor cites poor management with outdated tools' },
      { dimension: 'Knowledge Location', score: 6, explanation: '31K partners and 800K documents daily fragment knowledge, new CDIO hired but L&D eliminated with zero notice' },
      { dimension: 'Structural Lock-In', score: 7, explanation: '$1B infrastructure investment, cold chain expansion, Big Three oligopoly, $9.4B acquisition debt creates new lock-in' },
      { dimension: 'Talent Flow', score: 6, explanation: 'Glassdoor 3.6/5.0 declining, good benefits but layoff uncertainty, offshore dev team strategy limits domestic flow' },
      { dimension: 'Capital Intensity', score: 7, explanation: '$1B infrastructure investment, $9.4B acquisitions, debt-to-equity 6.01, P/E 28x vs sector 18x' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'NLP/AI investments real, new CDIO with Forbes award, but 31K partner network slows propagation' }
    ],
    pattern: 'The Middleman Trap',
    patternDescription: 'Cencora embodies the middleman trap pattern. Pharmaceutical distributors sit between manufacturers and pharmacies, handling the logistics of moving drugs through the supply chain. This position generates massive revenue ($321B) but thin margins, because value creation happens upstream (drug development) and downstream (patient care), not in the middle. The Big Three solved this problem through consolidation. With 98% market control, they have pricing power and switching costs that protect profitability. But this solution creates a new trap: the business model depends on volume throughput, not value creation. Any disruption to volume flow threatens the entire model. Cencora is attempting to escape through vertical integration. The OneOncology and Retina Consultants acquisitions move the com',
    keyNumbers: [
      '$321.3B revenue (FY2025, up 9.3% YoY)',
      '$66B market cap (Large tier)',
      '51,000+ employees worldwide',
      'Fortune 500 Rank #10 (Global #18)',
      '31,000+ active trading partners',
      '800,000 documents exchanged daily',
      '5 million units shipped per day',
      '$9.4B in recent acquisitions (OneOncology + Retina Consultants)'
    ],
    enablers: [
      '$1 billion distribution network investment through 2030 (new Ohio and California facilities)',
      'New Chief Data and Information Officer (Pawan Verma, Forbes CIO Innovation Award winner)',
      'Vertical integration strategy through specialty acquisitions (OneOncology, Retina Consultants)',
      '99%+ DSCSA compliance rate demonstrating coordination capability at scale',
      'AI and NLP investments (Infinitus Systems, AWS, Azure) for automation',
      'Big Three oligopoly provides market stability and pricing power (98% market control)'
    ],
    friction: [
      'Layoff pattern every 18 months suggests reactive cost management vs adaptive correction',
      'Offshoring IT and development to India/Costa Rica/Lithuania fragments knowledge',
      'Glassdoor declining (3.6/5.0, down 1% YoY) with poor management reviews (238 mentions)',
      'Debt-to-equity ratio 6.01 with $9.4B in acquisition debt creates financial pressure',
      'Unresolved federal opioid case more expansive than McKesson and Cardinal settlements',
      'Learning and development eliminated with zero notice, limiting institutional knowledge transfer'
    ],
    quotable: 'Cencora is betting it can transform before the middleman gets squeezed. $9.4B in acquisitions represent an escape attempt funded by debt.',
  },

  'ascension': {
    slug: 'ascension',
    name: 'Ascension',
    analysisDate: '2026-01-26',
    gpiScore: 6.4,
    state: 'Transitioning (upper)',
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: 'Parent holding company structure (Ascension Health Alliance) with two main divisions before reaching 90 hospitals. $3.9B AmSurg acquisition shows big strategic moves possible, but new CEO just started Jan 1, 2026. Non-profit Catholic governance means board approvals and mission alignment required.' },
      { dimension: 'Error Correction', score: 6, explanation: 'Operating loss improved $221M→$88M Q1 YoY. Targeting gradual margin improvements through FY28. But May 2024 cyberattack caused $332M loss. Divestitures happening (sold 8 Chicago hospitals). Healthcare constraints on experimentation.' },
      { dimension: 'Knowledge Location', score: 6, explanation: 'Two main divisions, 17 states, 90 hospitals. Glassdoor reviews specifically mention "poor organization hospital to hospital." Google partnership (2019), Clinical Innovation Institute (Aug 2025, 100+ FTEs), Health360 platform trying to centralize. But scaling knowledge across 142,000 employees takes years.' },
      { dimension: 'Structural Lock-In', score: 8, explanation: '90 hospitals, 40 senior living facilities, 2,600+ care sites. Can\'t pivot real estate. Buildings, equipment, labor contracts, community obligations. Catholic mission means serving vulnerable populations, can\'t abandon communities. $3.9B AmSurg adds 250+ more ASCs.' },
      { dimension: 'Talent Flow', score: 6, explanation: 'Glassdoor 3.5/5.0, 62% recommend (nearly identical to CommonSpirit\'s 64%). Good benefits (27 days PTO, 8 holidays, bonuses twice/year) but "low pay and understaffed." Cyberattack and losses triggered layoffs (500 Michigan, more Texas, 100 post-acquisition). "Nonstop reorgs."' },
      { dimension: 'Capital Intensity', score: 8, explanation: '90 hospitals, 40 senior living, 2,600 sites. MRI machines, surgical suites, ICUs, ambulatory centers. Constant capital investment needed. $28.6B revenue but operating losses. $3.9B AmSurg acquisition shows capital access but adds more assets needing ongoing investment.' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'Clinical Innovation Institute ($20M budget, 100+ FTEs, launched Aug 2025). AI pilots: nurse documentation handoffs in minutes not hours, voice-to-text, EHR predictive analytics. Google partnership (2019), Health360 platform. But healthcare knowledge spreads through journals/trials. Regulation constrains velocity.' }
    ],
    pattern: 'Catholic Healthcare at Scale',
    patternDescription: 'Ascension and CommonSpirit both score GPI 6.40. This isn\'t random convergence. It\'s the same physics applied to the same structure. Large Catholic nonprofit hospital systems face identical constraints. The mission requires geographic scale to serve vulnerable populations. That scale creates structural lock-in (90-138 hospitals). Capital intensity runs high (constant facility investment). Non-profit governance adds approval layers that slow decisions. Both systems are trying the same playbook. Deploy AI to reduce administrative burden. Partner with tech giants (Google) for data infrastructure. Divest underperforming assets. Expand into outpatient care (Ascension\'s $3.9B AmSurg acquisition). Improve operating margins gradually over multi-year plans. The difference is Ascension had a cyberatt',
    keyNumbers: [
      'Founded: 1999 (merger of two Catholic healthcare organizations)',
      'Employees: 142,000',
      'Revenue: $28.6B (2025)',
      'Operating Loss: $88M (Q1 FY26, improved from $221M Q1 FY25)',
      'Facilities: 90 hospitals, 40 senior living facilities, 2,600+ care sites',
      'Geographic Footprint: 17 states + D.C.',
      'Strategic Acquisition: $3.9B AmSurg deal (250+ ASCs, 34 states, 25 new markets)',
      'AI Investment: Clinical Innovation Institute ($20M budget, 100+ FTEs)'
    ],
    enablers: [
      '$3.9B AmSurg acquisition adds 250+ ASCs, 25 new markets',
      'Clinical Innovation Institute ($20M budget, 100+ FTEs)',
      'Operating losses improving ($221M → $88M Q1 YoY)',
      'New CEO Eduardo Conrado (started Jan 1, 2026)'
    ],
    friction: [
      '90 hospitals create structural lock-in (8/10)',
      '$332M cyberattack losses (October 2024)',
      'Still operating at a loss despite improvements',
      'Ongoing layoffs and divestitures',
      'Reviews mention nonstop reorgs, hospital-to-hospital inconsistency'
    ],
  },

  'siemens-usa': {
    slug: 'siemens-usa',
    name: 'Siemens Usa',
    analysisDate: '2026-01-26',
    gpiScore: 5.5,
    state: 'Transitioning (upper)',
    marketCap: '$236B',
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: 'Three major divisions with own CEOs, U.S. subsidiary has P&L autonomy. Major decisions still flow through Munich. CFO noted political uncertainty causing "paralysis for decision makers." Layoffs take until 2027.' },
      { dimension: 'Error Correction', score: 5, explanation: 'Strong signals: 5,600 Digital Industries cuts, 450 EV charging cuts, Gamesa restructuring. Healthcare and Energy spinoffs show willingness to divest. Timeline is multi-year, not quarters.' },
      { dimension: 'Knowledge Location', score: 6, explanation: 'Xcelerator platform, NVIDIA partnership, 9 industrial copilots, Digital Twin Composer. But Glassdoor cites "silos both divisionally and geographically" in 300K+ employee company.' },
      { dimension: 'Structural Lock-In', score: 6, explanation: '25 U.S. manufacturing sites create lock-in. But software pivot (Altair, Dotmatics, ASTER) shifts revenue mix. Healthcare and Energy spinoffs reduced physical assets.' },
      { dimension: 'Talent Flow', score: 5, explanation: 'Glassdoor 4.1/5 with 82% recommend. Hybrid work retained. But 5,600 layoffs cast shadow. Reviews cite silos and complicated structure.' },
      { dimension: 'Capital Intensity', score: 6, explanation: 'Manufacturing base requires constant investment. But software acquisitions shift growth to lower capital intensity. AA- credit, no covenants.' },
      { dimension: 'Knowledge Velocity', score: 4, explanation: 'CES 2026 keynote on industrial AI. Digital Twin Composer with NVIDIA. 9 copilots. AI glasses with Meta. PepsiCo achieving 90% issue detection. Tech company velocity, not industrial.' }
    ],
    pattern: 'Industrial Giant Goes Software-First',
    patternDescription: 'Siemens is executing a playbook that most industrial companies talk about but few actually complete. They are not adding software to their manufacturing business. They are building a software company that happens to have manufacturing capabilities. The $15B+ in software acquisitions (Altair, Dotmatics, ASTER) are not diversification plays. They are the new core. The NVIDIA partnership for Industrial AI Operating System is not a marketing announcement. It is a platform bet. The Digital Twin Composer is not a feature. It is the future product line. The 5,600 automation layoffs are not cost-cutting. They are resource reallocation. The pattern: shed physical assets (Healthineers, Energy spinoffs), acquire software capabilities, partner with tech leaders (NVIDIA, Meta), and position as the plat',
    keyNumbers: [
      'U.S. Revenue: $24.4B (FY2025)',
      'Global Revenue: $88.5B TTM',
      'U.S. Employees: 50,000+',
      'Global Employees: 320,000',
      'U.S. Manufacturing Sites: 25',
      'Global Market Cap: $236B',
      'Glassdoor Rating: 4.1/5.0 (82% recommend)',
      'Recent Acquisitions: Altair ($10B), Dotmatics ($5.1B), ASTER Technologies'
    ],
    enablers: [
      'NVIDIA partnership for Industrial AI Operating System positions Siemens as platform layer for manufacturing intelligence',
      'Digital Twin Composer enabling PepsiCo to identify 90% of issues before physical build, 20% throughput increase',
      '$15B+ software acquisitions (Altair, Dotmatics, ASTER) shifting revenue mix toward lower capital intensity',
      'CES 2026 keynote demonstrated industrial AI leadership while competitors still discussing implementation',
      'AA- credit rating with no debt covenants provides financial flexibility for continued transformation',
      'Hybrid work policy (2-3 days remote) retained without RTO pushback, attracting software talent'
    ],
    friction: [
      '5,600 Digital Industries layoffs (8% of division) signal legacy automation business in decline',
      'China and Germany market weakness causing "paralysis for decision makers" per CFO',
      'Siemens Gamesa wind turbine business still targeting break-even in 2026 after years of losses',
      '25 U.S. manufacturing sites create structural lock-in even as software grows',
      'Glassdoor reviews cite "silos both divisionally and geographically" and complicated internal structure',
      'U.S. leadership transition unclear after Barbara Humpton departure to USA Rare Earth'
    ],
    quotable: 'GPI 5.5 reflects a company in mid-transformation, with the software future pulling the score down (good) while the legacy industrial base keeps it from dropping further.',
  },

  'spacex': {
    slug: 'spacex',
    name: 'Spacex',
    analysisDate: '2026-01-27',
    gpiScore: 3.05,
    state: 'Transitioning (lower)',
    dimensions: [
      { dimension: 'Decision Latency', score: 2, explanation: 'Only 4 direct reports to Musk in 13,000-person company. Flat hierarchy. 2019 layoffs executed rapidly. IPO decision Dec 2025 to bank selection Jan 2026. 971 launches in single quarter shows decision velocity.' },
      { dimension: 'Error Correction', score: 2, explanation: 'Starship failures treated as data, not scandals. Only 2 of 5 recoveries in 2025, yet launches continued with rapid iteration. FAA mishap investigations transparent. No committees reviewing failures. Mission-over-ego culture.' },
      { dimension: 'Knowledge Location', score: 3, explanation: '85% vertical integration keeps core knowledge in-house. 3,000+ suppliers create some dependencies. Musk as Chief Engineer concentrates technical knowledge. Geographic concentration across 6 sites. Flat structure enables knowledge flow.' },
      { dimension: 'Structural Lock-In', score: 4, explanation: '$17B EchoStar acquisition with $2B debt obligations through Nov 2027. $13.5B government contracts through 2029. Massive launch facility investments. However, reusable architecture reduces per-launch lock-in. Starlink recurring revenue funds flexibility.' },
      { dimension: 'Talent Flow', score: 4, explanation: '2022 RTO mandate caused 15% senior departures. Glassdoor 2.4/5 work-life balance. 65% recommend to friend (not great). Mandatory 40+ hour weeks. But doubled to 13,000 employees since 2019. Mission magnetism attracts talent. Musk 24 years, Shotwell 18 years stability.' },
      { dimension: 'Capital Intensity', score: 6, explanation: 'Space inherently capital-intensive. $17B EchoStar acquisition. Starship R&D billions. Orbital AI data centers require massive chip purchases. $30B+ IPO raise. However, reusability changes economics. Falcon 9 $2,720/kg versus competitors 2-10x higher. Starlink $15B+ recurring revenue.' },
      { dimension: 'Knowledge Velocity', score: 2, explanation: '971 LEO launches in Q4 2025 (30% QoQ growth). 3,200+ satellites in 2025 (record). Starship iterations unprecedented for aerospace. Simultaneous Starship dev, Starlink scaling, IPO prep, new launch sites. New domains entered rapidly: launch to satellites to orbital computing to spectrum.' }
    ],
    pattern: 'Field Physics at Scale',
    patternDescription: 'SpaceX proves that field-state physics can persist at massive scale if organizational architecture is intentional. Most companies calcify as they grow because layers accumulate, knowledge disperses, and capital commitments lock in structures. SpaceX inverts this: Musk maintains 4 direct reports in a 13,000-person company, vertical integration keeps knowledge concentrated, and reusable architecture reduces per-unit capital intensity despite massive infrastructure investments. The company doubled employees between 2019-2026 while maintaining flat hierarchy and fail-fast culture. This is the Field at Scale pattern: structural choices that resist gravitational pull toward particle state. The friction points are real (talent churn from RTO, regulatory delays, capital intensity), but they are ex',
    keyNumbers: [
      '$800B valuation (Dec 2025), targeting $1.5T IPO mid-2026',
      '$22-24B projected revenue for 2026, growing 50%+ annually',
      '13,000 employees (2026), doubled from 6,000 in 2019',
      '971 LEO launches in Q4 2025 alone (30% quarter-over-quarter growth)',
      '3,200+ satellites deployed in 2025 (yearly record)',
      'Only 4 direct reports to CEO Musk in 13,000-person company',
      '85% vertical integration keeps knowledge in-house',
      'Only 2 of 5 Starship recoveries successful in 2025, yet launches continued'
    ],
    enablers: [
      'Musk holds only 4 direct reports in 13,000-person company, minimizing decision layers',
      '85% vertical integration keeps critical knowledge in-house and reduces supply chain dependencies',
      'Fail-fast culture',
      'Reusable rocket architecture reduces per-launch capital intensity despite massive infrastructure investments',
      'Starlink recurring revenue ($15B+ projected) funds innovation without external dependency',
      'Leadership stability'
    ],
    friction: [
      'FAA regulatory approval processes taking 12+ months create external bottlenecks beyond company control',
      '2022 RTO mandate caused 15% senior employee departures, many to competitors with remote flexibility',
      'Glassdoor 2.4/5 work-life balance rating and mandatory 40+ hour weeks create talent retention challenges',
      '$17B EchoStar acquisition includes $2B debt interest obligations through November 2027',
      '$13.5B government contracts through 2029 create delivery commitments that constrain resource allocation',
      'Space infrastructure inherently capital-intensive'
    ],
    quotable: 'SpaceX at 3.05 GPI represents organizational fluidity that most Fortune 500 CEOs would kill for. Decision latency of 2, error correction of 2, knowledge velocity of 2 create operational tempo that launches 971 rockets in 90 days.',
  },

  'dr-horton': {
    slug: 'dr-horton',
    name: 'Dr Horton',
    analysisDate: '2026-01-26',
    gpiScore: 5.2,
    state: 'Transitioning (upper)',
    dimensions: [
      { dimension: 'Decision Latency', score: 4, explanation: 'Decentralized division structure, AI partnership with Prophetic for land decisions' },
      { dimension: 'Error Correction', score: 4, explanation: 'Improved construction cycles, flexible incentive strategy, guidance adjustments' },
      { dimension: 'Knowledge Location', score: 5, explanation: '98 executives, division presidents across regions, some corporate concentration' },
      { dimension: 'Structural Lock-In', score: 7, explanation: '601,400 lots committed, multi-year development cycles, integrated model' },
      { dimension: 'Talent Flow', score: 5, explanation: '3.7/5 Glassdoor, 65% recommend, some turnover concerns, stable C-suite' },
      { dimension: 'Capital Intensity', score: 8, explanation: '$5.09B debt, inherently capital-intensive industry, continuous land acquisition' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'AI adoption (Prophetic, TraceAir), paperless mortgage, but physical constraints' }
    ],
    pattern: 'Scale as Shield and Cage',
    patternDescription: 'D.R. Horton exemplifies what we call the Scale Paradox in GPI terms. Their enormous size creates both competitive moats and structural constraints that define their operational reality. Scale provides pricing power over suppliers, access to cheap capital (A3/A- rated), and ability to weather market downturns that crush smaller builders. With 601,400 lots in inventory and operations across 126 markets in 36 states, D.R. Horton commands a market position that smaller competitors cannot match. Their $34B annual revenue gives them leverage in every negotiation, from lumber suppliers to subcontractors. But scale also means 24% of capital locked in owned land that cannot pivot with quarterly market shifts. It means multi-year development cycles that require betting on housing demand years in adv',
    keyNumbers: [
      '$43.6B market cap',
      '$34.25B TTM revenue, guidance $33.5-35B for FY2026',
      '14,341 employees ($2.39M revenue per employee)',
      '601,400 lots in inventory (24% owned, 76% controlled)',
      'Fortune 500 Rank #120',
      '126 markets across 36 states',
      '$6.6B total liquidity',
      '18.8% debt-to-capital ratio'
    ],
    enablers: [
      'AI-powered land acquisition through Prophetic partnership across all divisions',
      'TraceAir drone mapping and construction management platform',
      'Decentralized division structure enabling local market responsiveness',
      'Paperless mortgage system reducing closing time by 5 days',
      '$6.6B liquidity providing flexibility during market volatility',
      'Investment grade credit rating (A3/A-) enabling low-cost capital access'
    ],
    friction: [
      '601,400 lot inventory creates multi-year geographic commitment',
      'Inherent capital intensity of homebuilding business model',
      'Physical construction cycles cannot be compressed like digital processes',
      'Regulatory approval dependencies for land development',
      'Interest rate sensitivity impacting buyer affordability',
      'Dependence on external land developers for 76% of lot position'
    ],
    quotable: 'Scale provides the shield of pricing power and capital access, but becomes a cage of committed land positions and multi-year cycles.',
  },

  'mckesson': {
    slug: 'mckesson',
    name: 'Mckesson',
    analysisDate: '2026-01-26',
    gpiScore: 5.5,
    state: 'Transitioning (upper)',
    dimensions: [
      { dimension: 'Decision Latency', score: 5, explanation: 'September 2025 restructuring into 4 segments, CEO stable since 2019, divisional autonomy, major acquisitions closed efficiently' },
      { dimension: 'Error Correction', score: 5, explanation: 'Proactive portfolio optimization (Med-Surg spin-off), quick response to Rite Aid bankruptcy, AI initiatives measured and scaled' },
      { dimension: 'Knowledge Location', score: 6, explanation: 'Heavy systems investment (SAP cloud in 10 months, Oracle), Ontada for oncology data, less frontline discretion' },
      { dimension: 'Structural Lock-In', score: 6, explanation: 'Distribution infrastructure and contracts, but actively divesting (Norway, Med-Surg), pivoting to higher-margin services' },
      { dimension: 'Talent Flow', score: 5, explanation: 'Glassdoor 3.6/5.0, 67% recommend, decent benefits, but layoff uncertainty and strict warehouse conditions' },
      { dimension: 'Capital Intensity', score: 7, explanation: '30+ distribution centers, inventory financing, $650M+ tech investment, but lower than hospitals or manufacturing' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'Aggressive AI adoption, 10-month SAP migration, Microsoft Azure OpenAI for oncology, building faster learning infrastructure' }
    ],
    pattern: 'Portfolio Discipline',
    patternDescription: 'McKesson demonstrates Portfolio Discipline. This is the pattern of actively reshaping a business portfolio rather than passively managing legacy assets. Most large distributors calcify into their existing structure, defending all segments equally as the business slowly declines. McKesson is doing the opposite. The company is shedding the Medical-Surgical segment (spin-off anticipated 2027), exiting Norway (August 2025 sale agreement), and doubling down on specialty oncology and biopharma services. This is strategic pruning. The September 2025 restructuring created four focused segments specifically to enable faster decision-making and clearer accountability. CEO Brian Tyler has spent 25 years at the company but is not defending legacy business models. The pattern produces a GPI of 5.50, wh',
    keyNumbers: [
      '$387B TTM revenue (up 17.23% YoY)',
      '$102B market cap (January 2026)',
      '50,000 employees',
      '30+ distribution centers across North America',
      'Fortune 500 #9 ranking',
      '1-2% operating margin (industry standard for distribution)',
      '$2.49B Core Ventures acquisition (specialty oncology)',
      '$850M PRISM Vision acquisition (ophthalmology)'
    ],
    enablers: [
      'September 2025 organizational restructuring into four focused segments',
      'Medical-Surgical Solutions spin-off (anticipated 2027) sheds lower-margin business',
      'Aggressive AI adoption',
      'SAP cloud migration completed in 10 months (genuinely fast for enterprise)',
      '$650-700M technology investment commitment',
      'Specialty oncology pivot to higher-margin services (Core Ventures $2.49B, PRISM Vision $850M)'
    ],
    friction: [
      '1-2% operating margins leave minimal room for error or experimentation',
      'Distribution center infrastructure limits geographic flexibility',
      'Inventory financing ties up billions in working capital',
      'Manufacturer and customer contract cycles create lock-in',
      'Ongoing layoffs (Rogers MN, Rock Hill SC, Ontada) create employee uncertainty',
      'Warehouse workers face strict conditions and high turnover'
    ],
    quotable: 'McKesson is a 193-year-old company that refuses to act its age.',
  },

  'northwell-health': {
    slug: 'northwell-health',
    name: 'Northwell Health',
    analysisDate: '2026-01-26',
    gpiScore: 6.68,
    state: 'Transitioning (upper)',
    dimensions: [
      { dimension: 'Decision Latency', score: 7, explanation: 'Centralized C-suite, regional layers, 23 hospitals create communication delays' },
      { dimension: 'Error Correction', score: 6, explanation: 'Quality committees exist but course correction takes quarters' },
      { dimension: 'Knowledge Location', score: 7, explanation: 'Knowledge in Epic systems and protocols, not frontline clinicians' },
      { dimension: 'Structural Lock-In', score: 8, explanation: '$billions real estate, Epic integration, SEIU contracts, CON regulations' },
      { dimension: 'Talent Flow', score: 6, explanation: 'Can recruit but 15-20% nursing turnover from burnout' },
      { dimension: 'Capital Intensity', score: 9, explanation: '23 hospitals, MRI/CT/surgical robots, can\'t test new models cheaply' },
      { dimension: 'Knowledge Velocity', score: 6, explanation: 'New treatments take years to become standard across 87K employees' }
    ],
    pattern: 'Scale Without Agility',
    patternDescription: 'Northwell achieved dominance through consolidation. They bought hospitals, integrated systems, standardized operations. Economies of scale reduced costs per patient. Market power improved payer negotiations. But scale without agility creates fragility. The market is shifting toward value-based care and outpatient procedures. Northwell\'s infrastructure is optimized for high-volume inpatient care. They can\'t pivot fast. Too many facilities, too many employees, too many contracts, too many regulations. Meanwhile, smaller competitors offer concierge medicine, urgent care networks, ambulatory surgery centers with lower overhead and faster decision-making. Northwell\'s GPI of 6.68 reflects Transitioning state. Not calcified yet, but the trajectory is clear.',
    keyNumbers: [
      '$18B revenue (2025)',
      '87,000 employees across the system',
      '23 hospitals in the network',
      '900+ outpatient locations',
      'Fortune 500 #289 ranking',
      'Founded 1997 as North Shore Health System',
      'Headquarters: New Hyde Park, NY',
      'CEO: Michael Dowling (since 2002, 24 years)'
    ],
    enablers: [
      'Innovation labs experimenting with digital health technologies',
      'Data analytics investments for outcome tracking',
      'COVID response demonstrated crisis adaptability',
      'Academic partnerships drive research',
      'Market dominance provides financial stability',
      'Teaching hospital affiliation attracts talent'
    ],
    friction: [
      '$Billions in hospital real estate can\'t pivot to outpatient',
      'Epic EHR integration creates massive switching costs',
      'SEIU 1199 contracts limit workforce flexibility',
      'Certificate of Need regulations constrain facility changes',
      '15-20% nursing turnover from burnout annually',
      '87,000 employees create diffusion lag for new practices'
    ],
    quotable: 'They dominate the market through size, not speed',
  },

  'cargill': {
    slug: 'cargill',
    name: 'Cargill',
    analysisDate: '2026-01-27',
    gpiScore: 7.2,
    state: 'Particle',
    dimensions: [
      { dimension: 'Decision Latency', score: 7, explanation: 'Family ownership creates capital allocation bottlenecks. Restructured from 5 to 3 business units (signals previous complexity). Took years to exit underperforming turkey operations. Response to 36% profit decline was layoffs, not pivots. $2B family extraction during crisis shows priorities. AI retrofitted onto legacy structures, not built-in.' },
      { dimension: 'Error Correction', score: 7, explanation: 'Revenue down 10%, profits down 36%, less than 1/3 of businesses hit targets. Response: layoffs and family dividends, not learning. Turkey exit after years as #3 player (reactive, not proactive). Brazilian deforestation criticism took years to address (2023-2025). Innovation awards paired with dividend extraction during crisis. Classic particle behavior: defending core, not adapting.' },
      { dimension: 'Knowledge Location', score: 6, explanation: 'Hybrid: distributed operationally (1,000+ facilities, 70 countries, 160,000 employees, AI-powered inspections), centralized strategically (family board, Minnetonka HQ controls capital). CTO Florian Schattenmann pushes analytics. But private ownership limits knowledge flow (no public market discipline, no external board pressure). Declining Glassdoor (down 1%), only 59% positive business outlook.' },
      { dimension: 'Structural Lock-In', score: 8, explanation: '160 years old, 1,000+ facilities globally, capital-intensive agriculture/food processing/maritime shipping. Cannot pivot grain elevators or bulk carriers. Family ownership (88%) creates succession lock-in. Controls 50-60% of global grain trade in oligopoly (reduced competitive pressure). Geographic footprint (70 countries) creates regulatory complexity. Architecturally locked into being exactly what it is.' },
      { dimension: 'Talent Flow', score: 6, explanation: 'Glassdoor 3.9/5 (declining), 76% recommend to friend but only 59% positive business outlook (gap signals doubt about direction). 8,000 layoffs while family took $2B creates cultural friction. Many roles in manufacturing/operations (rigid schedules, location-bound). Private ownership limits equity upside (12% employee vs 88% family). Digital/AI roles exist but layered onto traditional structures.' },
      { dimension: 'Capital Intensity', score: 9, explanation: 'Maximum capital intensity: agriculture, food processing, commodity trading, maritime shipping. 1,000+ facilities, bulk carriers (including new green methanol vessels), processing plants, grain elevators. $160B revenue on these assets = commodity margins. Cannot test new models with MVPs. Every strategic move requires billions and years. Net Debt/EBITDA 1.4x (conservative leverage) but absolute capital requirements massive. Particle physics: mass creates inertia.' },
      { dimension: 'Knowledge Velocity', score: 6, explanation: 'Operational velocity strong: 2026 BIG Innovation Award, Port Optimizer 30x ROI, $15M+ manufacturing analytics benefits, 31,500 metric tons CO2 cut. But strategic velocity lags: took years to respond to profit declines, years to address environmental criticism, slow turkey exit. Restructuring from 5 to 3 units suggests knowledge about complexity finally reached decision-makers but timeline was years. Innovation retrofitted, not embedded.' }
    ],
    pattern: 'Oligopoly Ossification',
    patternDescription: 'Cargill exhibits the classic pattern of oligopoly ossification. When you control 50-60% of a market with just three competitors, competitive pressure evaporates. There is no disruptor forcing you to adapt, no upstart threatening your position. Instead of racing to innovate, you optimize for stability. The result: 160 years of compounding inertia. The company invests in AI and automation, but these are ornaments on a particle, not engines of transformation. When profits collapse 36%, the response is layoffs and dividends to family owners, not strategic reinvention. This is the pattern: dominant market position breeds complacency, complacency breeds calcification, calcification breeds decline. Cargill has the resources to transform but lacks the existential pressure to force it. The privacy ',
    keyNumbers: [
      '$160B revenue (down from $177B, 10% decline)',
      '$2.5B profit (down 36% year-over-year)',
      '160,000 employees (after 8,000 layoffs, 5% reduction)',
      '1,000+ facilities across 70 countries',
      '88% family-owned (Cargill/MacMillan descendants)',
      '12% employee-owned',
      'Founded 1865 (160 years old)',
      'Controls 50-60% of global grain trade with 3 competitors (ADM, Bunge, Louis Dreyfus)'
    ],
    enablers: [
      'AI and robotics deployed at scale (10,000+ weekly inspections, Port Optimizer 30x ROI, $15M+ manufacturing analytics benefits)',
      'Strong balance sheet (A/A2 credit ratings, Net Debt/EBITDA 1.4x, $160B revenue base)',
      'Private ownership enables long-term decision horizons without quarterly earnings pressure',
      'Global scale and footprint (1,000+ facilities, 70 countries, 160,000 employees) provides resources for transformation',
      'Maritime decarbonization investments (green methanol dual-fuel vessels, 31,500 metric tons CO2 reduction)',
      'Recognition as innovation leader (2026 BIG Innovation Award, Top 10 Innovator)'
    ],
    friction: [
      'Family ownership structure (88% Cargill/MacMillan descendants) creates capital allocation bottlenecks and succession constraints',
      'Oligopoly complacency (controls 50-60% of global grain trade with 3 competitors, reduced competitive pressure)',
      'Maximum capital intensity (agriculture, processing, maritime shipping) limits strategic flexibility',
      'Revenue down 10% ($177B to $160B), profits down 36%, less than 1/3 of businesses hitting targets',
      'Cultural friction from $2B family dividends/buybacks during 8,000 layoffs (5% workforce reduction)',
      'Slow strategic response times (years to exit turkey, years to address Brazilian deforestation criticism)'
    ],
    quotable: 'Privacy has become a prison. Cargill is the largest private company in America, but that structure now creates the very constraints it once avoided.',
  },

  'wework': {
    slug: 'wework',
    name: 'Wework',
    analysisDate: '2026-01-27',
    gpiScore: 7.6,
    state: 'Particle',
    dimensions: [
      { dimension: 'Knowledge Location', score: 6, explanation: '514 employees managing 586 locations means distributed knowledge. 96% workforce reduction created institutional knowledge loss. Yardi ownership should improve information flow.' },
      { dimension: 'Structural Lock-In', score: 8, explanation: '586 physical locations with multi-year lease commitments totaling billions. Cannot pivot a real estate portfolio. Technology cannot change that real estate moves in decades.' },
      { dimension: 'Talent Flow', score: 7, explanation: 'Catastrophic outflow through layoffs. Post-bankruptcy stigma limits talent attraction. Who joins a company that just emerged from bankruptcy?' },
      { dimension: 'Capital Intensity', score: 9, explanation: 'Long-term leases (billions), $100M+ annual upgrades, thin margins on $3.33B revenue. Every new location requires millions before generating revenue.' }
    ],
    pattern: 'Post-Bankruptcy Physics',
    patternDescription: 'Bankruptcy can force structural reset, but it cannot change fundamental physics. WeWork demonstrates that when a company becomes so calcified that only external intervention (bankruptcy court) can force change, the reset is violent but incomplete. The company entered bankruptcy at GPI 9.5+ (calcified, unable to adapt voluntarily) and emerged at 7.6 (still Particle state, but Improving). The $4B debt reduction and 96% workforce cut were not strategic choices but forced error correction. New ownership (Yardi Systems 60%, SoftBank 20%) and leadership (CEO John Santora with 47 years real estate experience) bring operational discipline, but they inherited the same capital-intensive, structurally locked real estate model that caused the original failure. You can eliminate debt, shed locations, a',
    keyNumbers: [
      'Revenue: $3.33B (2026 TTM), projected $3.98B for fiscal 2025',
      'Employees: 514 (August 2024, down from 12,500 in 2019, 96% reduction)',
      'Locations: 586 post-bankruptcy (down from 777), across 120 cities in 37 countries',
      'Square footage: 45 million sq ft globally',
      'Debt eliminated: $4B through Chapter 11 bankruptcy',
      'Profitability: 6 consecutive months of global EBITDA profitability in early 2025',
      'Projected net profit: $101M for fiscal 2025',
      'Ownership: Yardi Systems 60%, SoftBank 20%, other investors 20%'
    ],
    enablers: [
      'New ownership (Yardi Systems 60%, SoftBank 20%) brings property management software expertise and operational discipline',
      'CEO John Santora has 47 years real estate experience, replacing startup culture with traditional real estate discipline',
      'Bankruptcy eliminated $4B in debt and shed 191 unprofitable locations, creating clean balance sheet',
      'Six consecutive months of global EBITDA profitability in early 2025, projected $101M net profit for fiscal 2025',
      'New operating model shifts from direct leases to management agreements and revenue-share deals, reducing future capital exposure',
      'Market demand for flexible office space remains strong, with permanent shift to flex work for companies of all sizes'
    ],
    friction: [
      '586 locations with multi-year lease commitments totaling billions, creating structural inflexibility',
      'Capital-intensive model requires $100M+ annual investment in upgrades and maintenance, limiting financial flexibility',
      '96% workforce reduction (from 12,500 to 514) created institutional knowledge loss and rebuilding challenges',
      'Post-bankruptcy stigma limits talent attraction and member confidence in long-term viability',
      'Real estate decision cycles measured in months and years, not weeks or quarters, constraining agility',
      'Competition from Regus/IWG (3,000+ locations), Industrious, and other established players with similar models'
    ],
    quotable: 'WeWork finally learned to say no, but only after physics forced its hand.',
  },

  'stripe': {
    slug: 'stripe',
    name: 'Stripe',
    analysisDate: '2026-01-27',
    gpiScore: 2.95,
    state: 'Field',
    dimensions: [
      { dimension: 'Decision Latency', score: 3, explanation: 'API-first culture enables rapid launches. Four acquisitions in 12 months plus Agentic Commerce Suite and Tempo blockchain demonstrate exceptional velocity. Founders still actively leading after 16 years without bureaucratic calcification.' },
      { dimension: 'Error Correction', score: 3, explanation: 'Returned to profitability after 2022 overhiring. Three strategic layoff rounds show adjustment capability. Aggressive crypto pivot demonstrates learning from market opportunities. Maintains remote work despite RTO industry trend.' },
      { dimension: 'Knowledge Location', score: 3, explanation: 'Developer-first API platform pushes knowledge to edges. 30-40% remote workforce with explicit defense of distributed work. Industry-leading API documentation. Collisons don\'t design for worst 5% showing trust in decentralized knowledge.' },
      { dimension: 'Structural Lock-In', score: 4, explanation: 'Fintech regulation creates some rigidity. $1.4T payment volume scale creates infrastructure constraints. But rapid crypto pivot and dual HQ flexibility demonstrate adaptability. Slightly elevated due to regulatory compliance.' },
      { dimension: 'Talent Flow', score: 3, explanation: 'Glassdoor 3.7/5 with 61% recommend is decent not exceptional. Aggressive hiring 8.5K to 10K in 2025. Remote-first aids talent acquisition. Work-life balance concerns noted as lean relative to product portfolio. Leadership stability with founders.' },
      { dimension: 'Capital Intensity', score: 2, explanation: 'Software API business requires minimal capex. No physical infrastructure. $1B+ acquisitions show capital availability. Profitable with high transaction margins. Scale via software not steel. Lowest CI possible for $70B+ company.' },
      { dimension: 'Knowledge Velocity', score: 2, explanation: 'Developer community engaged via Stripe Sessions conference. API-first creates instant feedback loops. Agentic Commerce for AI agents shows cutting-edge learning. Four crypto acquisitions in 12 months demonstrates rapid integration cycles.' }
    ],
    pattern: 'Infrastructure as Oxygen',
    patternDescription: 'Stripe proves that infrastructure companies can stay fluid at massive scale if they treat developers as customers and build invisible, essential systems. The company processes $1.4T annually but maintains a 2.95 GPI because payments infrastructure, when done right, is oxygen. You don\'t notice it until it\'s gone. This invisibility is strategic. Stripe doesn\'t compete for attention. It competes for necessity. Every feature ships as an API endpoint, not a dashboard. Every product becomes part of the stack, not part of the workflow. The result: Stripe can pivot into crypto, AI agents, and embedded finance without asking permission from the market. They just ship the infrastructure and let developers build on top. Most companies at $91.5B valuation are optimizing headcount. Stripe is acquiring ',
    keyNumbers: [
      '$91.5B valuation (Feb 2025 tender offer, approaching 2021 peak of $95B)',
      '$5.12B net revenue (2024, +34% year-over-year growth)',
      '$6.1B+ annual recurring revenue (ARR) in 2025',
      '$1.4T payment volume processed (2024)',
      '8,500 employees (growing to 10,000 by end of 2025)',
      '68% market share of US e-commerce payment processing technology',
      '$101.9M pre-tax profit (2024, returned to profitability)',
      '46+ countries of operation with dual HQ in San Francisco and Dublin'
    ],
    enablers: [
      'API-first architecture eliminates approval chains and enables instant developer feedback loops',
      'Founder-CEOs Patrick and John Collison actively engaged after 16 years, maintaining startup mentality at $91.5B scale',
      'Software-only business model requires minimal capital infrastructure, enabling $2.1B in acquisitions while maintaining profitability',
      '30-40% remote workforce enables global talent access without geographic or real estate lock-in',
      'Developer community provides continuous market intelligence through Stripe Sessions conference and direct API usage telemetry',
      'Aggressive M&A capability ($2.1B in 12 months) combined with fast integration cycles accelerates capability acquisition'
    ],
    friction: [
      'Work-life balance strain from deliberately lean staffing relative to expansive product portfolio creates retention risk',
      'Financial services regulatory compliance overhead in 46+ countries creates decision friction and deployment delays',
      '$1.4T annual payment volume scale creates infrastructure complexity and risk management requirements that limit experimentation',
      'Private company status limits employee liquidity options, creating compensation constraints relative to public tech peers',
      'Glassdoor 61% recommend rate indicates talent retention challenges despite strong compensation (4.3/5 rating)',
      'Three restructuring rounds since 2022 (14% in 2022, 40 in 2023, 3.5% in 2025) creates organizational uncertainty despite growth narrative'
    ],
    quotable: 'At $91.5B valuation and processing $1.4T annually, Stripe maintains startup-level agility through infrastructure thinking: they compete for necessity, not attention.',
  },


  'spotify': {
    slug: 'spotify',
    name: 'Spotify',
    analysisDate: '2026-01-27',
    gpiScore: 4.15,
    state: 'Transitioning (lower)',
    ticker: 'SPOT',
    marketCap: '$105',
    dimensions: [

    ],
    pattern: 'Agile Trapped in Analog Economics',
    patternDescription: 'Spotify reveals a critical tension in organizational physics: a field-state company operating inside particle-state industry constraints. This is what happens when internal agility meets external rigidity. Internally, every signal points to low GPI. The squad model enables autonomous decision-making. Work-from-anywhere policy (no RTO mandates) reduces geographic friction. Attrition dropped 50% after going remote. Knowledge is distributed, not hoarded. Decisions happen at the edges. AI DJ, Prompted Playlists, premium video all ship quickly. The engineering culture favors rapid iteration. But externally, Spotify can\'t escape structural lock-in. Music licensing requires relationships with all three major labels (Universal, Sony, Warner). Artist payment rates ($0.003-0.005 per stream) are set ',
    keyNumbers: [
      'GPI Score: 4.15/10 (Transitioning, Improving)',
      'Market Cap: $105-122B (Jan 2026)',
      'Revenue: $18.90B TTM, $16.86B (2024), $14.38B (2023)',
      'Users: 600M+ total, 281M premium subscribers',
      'Employees: 7,691 (Dec 2024), down 15.7% from 2023',
      'Founded: April 2006 (20 years old)',
      'Ticker: SPOT (NYSE)',
      'Headquarters: Stockholm, Sweden (operational), Luxembourg (legal)'
    ],
    enablers: [
      'Squad-based agile model enables autonomous decision-making at team level without hierarchical approval chains',
      'Work-from-anywhere policy (no RTO mandates) reduces geographic friction and improves talent retention (50% attrition drop)',
      'Co-CEO structure formalizes existing distributed leadership, both are 15+ year veterans with deep institutional knowledge',
      'AI investments (DJ, Prompted Playlists, generative research lab) create new revenue streams beyond streaming subscriptions',
      'First annual profit (2024) after 18 years shows business model finally validated at scale',
      'Strong talent culture'
    ],
    friction: [
      'Music licensing costs locked by major label relationships (Universal, Sony, Warner) compress margins permanently',
      'Artist payment economics ($0.003-0.005 per stream) set by industry structure, not Spotify decisions',
      '18 years to profitability shows business model constraints beyond company control',
      'Competitors (Apple Music with 103M subs, YouTube Music with video, Tidal with hi-fi) force pricing wars and feature parity pressure',
      '320 kbps audio quality locked by bandwidth economics (lossless is structurally unaffordable at Spotify scale)',
      'Layoffs (17% in Dec 2023) disrupted operations more than expected, showing error correction costs'
    ],
    quotable: 'Spotify shows what happens when a field-state company operates inside particle-state industry constraints. Internal agility meets external rigidity.',
  },


  'openai': {
    slug: 'openai',
    name: 'Openai',
    analysisDate: '2026-01-27',
    gpiScore: 4.8,
    state: 'Transitioning (upper)',
    dimensions: [

    ],
    pattern: 'Capital Gravity',
    patternDescription: 'OpenAI embodies the AI industry\'s central tension: exponential compute requirements colliding with linear revenue growth. The company ships fast, pivots strategically, and dominates consumer AI with Decision Latency (3.5), Error Correction (4.0), and Knowledge Velocity (4.0) all scoring in field-to-transitioning range. But Capital Intensity (8.5) is particle-state physics. Every capability leap requires 10x more compute. Training runs that cost millions in 2023 cost billions in 2026. The $1.4 trillion infrastructure commitment isn\'t excess. It\'s table stakes for maintaining leadership. But those commitments create Structural Lock-In (6.0) that constrains strategic options. Oracle needs OpenAI\'s IPO to service its bonds. CoreWeave\'s debt is collateralized by future compute demand. Microsoft',
    keyNumbers: [
      '$500B valuation (October 2025), world\'s most valuable private company',
      '$20B annual revenue run rate (2025), projected $30B (2026), 236% YoY growth',
      '$1.4T infrastructure liabilities through 2027+ ($300B Oracle, $250B Microsoft, $38B AWS)',
      '$17B projected cash burn (2026), $9B (2025), profitability not expected until 2030',
      '$20B shortfall in 2026 as supplier bills come due, $80B+ deferred commitments maturing',
      '$96B debt carried by partners (Oracle, CoreWeave) financing OpenAI infrastructure',
      '800M weekly active users, 1M+ business customers, 80% of generative AI traffic',
      '3,000+ employees (2025), 20x growth since 2020 from 375'
    ],
    enablers: [
      'Market leadership',
      'Rapid product velocity',
      'Strategic pivots',
      'Technical talent',
      'Revenue growth',
      'CEO stability'
    ],
    friction: [
      'Extreme capital intensity',
      'Profitability timeline',
      'Supply chain dependency',
      'Partner debt burden',
      'Enterprise share loss',
      'Knowledge politicization'
    ],
    quotable: 'You can have fast decision-making or extreme capital efficiency, but not both at frontier AI scale. OpenAI chose frontier. Now physics applies.',
  },


  'roblox': {
    slug: 'roblox',
    name: 'Roblox',
    analysisDate: '2026-01-27',
    gpiScore: 4.3,
    state: 'Transitioning (lower)',
    marketCap: '$52',
    dimensions: [
      { dimension: 'Decision Latency', score: 3.5, explanation: 'Founder-CEO after 22 years, lean structure (2,474 employees), doubled AI code acceptance to 60%, 400+ AI systems deployed. However, RTO mandate created friction and Glassdoor cites management issues.' },
      { dimension: 'Error Correction', score: 4.0, explanation: 'Strong product iteration (facial age verification, PII filter 4x capacity), weekly platform updates. But -25% operating margins persist after years at scale, analysts say profitability out of reach.' },
      { dimension: 'Knowledge Location', score: 3.0, explanation: 'Platform pushes creation to edges: 79M+ daily users, $1B+ to creators, millions of experiences. AI trained on distributed Roblox code. 10 academic papers studying platform. Core platform decisions remain centralized.' },
      { dimension: 'Structural Lock-In', score: 5.5, explanation: 'Requires heavy GPU/data center infrastructure, creator economy network effects hard to unwind, public company constraints. Software-based allows pivots, but economic model creates rigidity. RTO mandate shows organizational rigidity.' },
      { dimension: 'Talent Flow', score: 5.0, explanation: 'Strong compensation (4.5/5), software engineers rate 4.3/5, 79% recommend. However, RTO mandate forced relocations, 30 recruiting layoffs, Glassdoor complaints about poor leadership (21 reviews) and political environment (23 reviews).' },
      { dimension: 'Capital Intensity', score: 6.5, explanation: 'Operating margins -25%, profitability out of reach per analysts. Continuous GPU/infrastructure investment required, $1B+ creator payouts annually. Interest coverage -27.10, operating margin compression projected through 2026. Highest friction point.' },
      { dimension: 'Knowledge Velocity', score: 3.5, explanation: 'Doubled AI code acceptance through domain learning, 400+ AI systems deployed, weekly platform updates, 79M+ users provide distributed feedback, 10 academic papers. Fast on features but slow on monetization learning.' }
    ],
    pattern: 'The Infrastructure Trap',
    patternDescription: 'Roblox exemplifies a paradox: a company can maintain field-like agility in product development while simultaneously being trapped by particle-like capital intensity. The platform architecture pushes knowledge and creativity to 79M+ daily users at the edges, enabling rapid iteration and experimentation. The company ships AI features faster than most enterprises, doubling code acceptance rates and deploying 400+ systems. Yet none of this agility solves the fundamental economic constraint. Every user added requires more GPU capacity, more edge infrastructure, more moderation systems. Every creator empowered requires more payouts. The business model scales growth but not profit. This is the infrastructure trap: when the thing that makes you fast (distributed platform) is also the thing that ma',
    keyNumbers: [
      'Market cap: $52-61B (January 2026)',
      'Revenue: $4.46B TTM, 28.68% YoY growth',
      'Employees: 2,474 ($1.8M revenue per employee)',
      'Daily active users: 79M+ (151.5M total in Q3 2025, 70% YoY growth)',
      'Operating margin: -25.04%',
      'Interest coverage ratio: -27.10',
      'Debt: $1.76B, Cash: $2.41B (net cash $1.4B)',
      'Creator payouts: $1B+ annually through Developer Exchange'
    ],
    enablers: [
      'Founder-CEO David Baszucki maintains control after 22 years, avoiding leadership churn',
      'Lean org structure',
      'AI deployment velocity',
      'Platform model pushes knowledge to edges',
      'Rapid safety iteration',
      'Weekly platform updates and tight developer feedback loops'
    ],
    friction: [
      'Operating margins deeply negative at -25%, profitability described as out of reach',
      'Capital intensity from GPU infrastructure, edge data centers, security systems',
      'Creator payout pressure',
      'RTO mandate friction',
      'Interest coverage ratio -27.10 signals challenges meeting debt obligations',
      'Public company constraints from $52-61B market cap, investor expectations'
    ],
    quotable: 'The infrastructure trap: when the thing that makes you fast is also the thing that makes you expensive.',
  },




  'northvolt': {
    slug: 'northvolt',
    name: 'Northvolt',
    analysisDate: '2026-01-27',
    gpiScore: 8.6,
    state: 'Particle',
    dimensions: [
      { dimension: 'Decision Latency', score: 9, explanation: 'Management hid production problems from 2022 onward. Too many layers between C-suite and shop floor. Engineers reported decisions not made at all, causing material waste. Internal opposition paralyzed proposals to avoid market weakness signals.' },
      { dimension: 'Error Correction', score: 9, explanation: 'Gigafactory at 1% capacity was never fixed. Chinese/Korean equipment integration failures unresolved. BMW canceled $2.15B order, no recovery plan. $5.8B debt accumulated before bankruptcy with no course correction.' },
      { dimension: 'Knowledge Location', score: 7, explanation: 'Hired Apple AI scientist, built AWS digital factory with ML/computer vision. But knowledge was trapped. Shop floor engineers understood problems but couldn\'t reach decision-makers. Career protection trumped company survival.' },
      { dimension: 'Structural Lock-In', score: 9, explanation: '$3.8B convertibles + $1.6B project financing = debt house of cards. Gigafactory model locked into massive capital before output. 16 GWh capacity at 1% utilization, couldn\'t pivot. Geographic lock to Skellefteå. No escape route.' },
      { dimension: 'Talent Flow', score: 8, explanation: '5,290 net job losses Sept 2024 to March 2025 (7,000 to 1,700 employees, 76% reduction). Management top-heavy, knowledge hoarding. Glassdoor 3.5/5, 51% recommend. Post-bankruptcy exodus to Aris Machina.' },
      { dimension: 'Capital Intensity', score: 10, explanation: '$14.3B raised, still bankrupt. $128M revenue against billions deployed. 1% utilization meant capital burning with no return. Delays pushed targets 2026 to 2029 (3 years). Highest possible score: billions consumed, minimal production.' },
      { dimension: 'Knowledge Velocity', score: 8, explanation: 'ML team, AWS factory, computer vision built but production stuck at 1%. Couldn\'t iterate fast enough vs CATL. Equipment integration problems never resolved. 3-year lag from 2022 problems to 2025 book reveal. Post-bankruptcy, Carlsson launched Aris Machina to do it right.' }
    ],
    pattern: 'The Opacity Trap',
    patternDescription: 'Northvolt demonstrates the Opacity Trap: when organizations hide problems to preserve external perception, they guarantee internal collapse. Management knew production was failing in 2022 but concealed it from investors and customers. This opacity created a doom loop. Problems worsened without correction. Decision-making froze because acknowledging issues meant signaling weakness. Internal opposition paralyzed proposals. By the time external stakeholders lost confidence (BMW canceling $2.15B, VW writing down its stake), the damage was irreversible. The company burned through $14.3B in funding yet produced almost nothing at scale. This pattern appears across calcified organizations: Theranos concealed technology failures, WeWork hid unit economics, FTX obscured fund misuse. The opacity trap',
    keyNumbers: [
      'Raised $14.3B over 24 funding rounds before bankruptcy',
      'Filed bankruptcy with $5.8B debt and just $30M cash (7 days of operations)',
      'Gigafactory operated at 1% of 16 GWh design capacity (~160 MWh actual)',
      'Workforce collapsed 76% from 7,000 employees to 1,700 in six months',
      'BMW canceled $2.15B order due to production delays',
      'Volkswagen held 21% stake, wrote it down in 2024',
      '$128M revenue in 2023 against billions in capital deployed',
      'Chapter 11 secured $245M ($145M collateral + $100M DIP from Scania), still failed'
    ],
    enablers: [
      'Cloud-first Industry 4.0 architecture on AWS with digital twin modeling',
      'AI/ML team led by former Apple scientist developing defect detection and quality prediction',
      'Computer vision systems for near-real-time manufacturing monitoring',
      'Top technical talent recruited from Tesla, Apple, and leading battery researchers',
      'Strong investor backing initially ($14.3B raised over 24 rounds)',
      'Strategic partnerships with VW (21% stake), BMW, Scania, and major European OEMs'
    ],
    friction: [
      'Management concealed severe production problems from 2022 onward to preserve market image',
      'Too many organizational layers between C-suite and shop floor paralyzed decision-making',
      'Gigafactory operated at 1% capacity (16 GWh design vs ~160 MWh actual output)',
      'Debt-dependent house of cards structure ($5.8B debt, $3.8B convertibles, $1.6B project financing)',
      'Culture clashes with Chinese/Korean equipment vendors created integration failures',
      '76% workforce reduction (7,000 to 1,700 employees) destroyed institutional knowledge'
    ],
    quotable: 'Opacity kills faster than any competitor. Northvolt hid 2022 production problems until $30M cash remained against $5.8B debt.',
  },



  'microstrategy': {
    slug: 'microstrategy',
    name: 'Microstrategy',
    analysisDate: '2026-01-27',
    gpiScore: 5.5,
    state: 'Transitioning (upper)',
    dimensions: [
      { dimension: 'Decision Latency', score: 4, explanation: 'Saylor authorizes billion-dollar BTC purchases quickly, split into two companies in 3 months, but RTO mandates and stacked ranking suggest overhead remains' },
      { dimension: 'Error Correction', score: 5, explanation: 'Executed 20% layoff and business split when needed, but continues aggressive BTC accumulation despite 49% stock drop, mounting debt, and talent exodus' },
      { dimension: 'Knowledge Location', score: 5, explanation: 'Saylor and Phong Le hold significant knowledge, R&D layoffs show concentration, but Auto 2.0 and Strategy Mosaic democratize some data access' },
      { dimension: 'Structural Lock-In', score: 7, explanation: '$8.2B debt + $7.5B preferred stock + $779M annual obligations vs $475M revenue = cannot pivot without liquidating BTC at depressed prices' },
      { dimension: 'Talent Flow', score: 6, explanation: '400 employees cut in 2024, toxic culture per Glassdoor, stacked ranking creates fear, but 70% still recommend to friend' },
      { dimension: 'Capital Intensity', score: 9, explanation: 'Spent $51.8B on BTC, must issue stock/debt monthly to cover $991M annual obligations with only $475M revenue, among highest in tech' },
      { dimension: 'Knowledge Velocity', score: 4, explanation: 'Launched Auto 2.0 AI, Strategy One, Strategy Mosaic in software, but "software no longer priority" per employees, only 5 academic papers found' }
    ],
    pattern: 'The Capital Trap',
    patternDescription: 'MicroStrategy exemplifies the Capital Trap pattern: a company that chose a strategy requiring continuous external capital infusion, creating structural lock-in that prevents pivoting even when market conditions deteriorate. The company transformed from a profitable enterprise BI software business into a Bitcoin treasury operation, accumulating 687,410 BTC for $51.8B while maintaining a legacy software business generating only $475M annually. However, funding this accumulation required $8.2B in convertible debt and $7.5B in preferred stock. The structural mismatch is stark: the company holds Bitcoin (a non-income-producing asset) but owes dollars, with $779M in annual interest and dividend obligations creating a $304M annual shortfall. Every month, MicroStrategy must raise new capital throu',
    keyNumbers: [
      'Market Cap: $45.16B (down 66% from peak, -49% in 2025)',
      'Revenue: $475M annually (~$125M/quarter software), 1.65% YoY growth',
      'Employees: 1,534 (down 20% in 2024, from ~1,930)',
      'Bitcoin Holdings: 687,410 BTC acquired for $51.8B (trading 26% discount to NAV)',
      'Debt: $8.2B convertible debt (matures 2028), $7.5B preferred stock',
      'Annual Obligations: $87M interest + $904M preferred dividends = $991M total (vs $475M revenue)',
      'Cash Reserves: $2.19B operational, $1.44B dividend reserve (defensive positioning)',
      'S&P Credit Rating: B- (distressed)'
    ],
    enablers: [
      'Dual-company structure (Technologies and Strategy) separates concerns and enables focused execution',
      'Executive Chairman Saylor can authorize billion-dollar Bitcoin purchases with minimal approval layers',
      'Auto 2.0 agentic AI and Strategy Mosaic show software innovation continues despite Bitcoin focus',
      'Cloud subscription shift shows ability to adapt software business model to market demands',
      '20% workforce reduction shows willingness to right-size operations when revenue does not support headcount',
      'Phong Le as CEO creates some operational separation from Saylor\'s strategic Bitcoin focus'
    ],
    friction: [
      '$8.2B convertible debt maturing 2028 with $5B out of the money creates existential refinancing risk',
      '$779M annual interest and dividend obligations exceed $475M software revenue by 64%, requiring continuous capital raises',
      'MSCI exclusion risk could trigger $8.8B in forced investor outflows, creating downward price spiral',
      '687,410 BTC holdings generate zero cash flow but debt obligations require dollars monthly',
      'Toxic culture and stacked ranking driving talent exodus in R&D, consulting, and sales (400 employees in 2024)',
      'Software business deprioritized per employees, limiting future revenue growth and market share (1.23% BI market)'
    ],
    quotable: 'The company can make decisions quickly but cannot change direction. This is the opposite of agility.',
  },


  'rivian': {
    slug: 'rivian',
    name: 'Rivian',
    analysisDate: '2026-01-27',
    gpiScore: 5.75,
    state: 'Transitioning (upper)',
    marketCap: '$25.14B',
    dimensions: [
      { dimension: 'Decision Latency', score: 5, explanation: 'Three reactive layoff rounds in 2025, CEO taking interim CMO role shows leadership strain, but rapid execution on R2 launch and AI Day initiatives when focused' },
      { dimension: 'Error Correction', score: 6, explanation: 'Recovered from 2024 copper wire supplier miscommunication (18% production cut) with stabilized supply chain by 2025, building 1.2M sq ft supplier park, but recall of 20,000 vehicles shows ongoing quality issues' },
      { dimension: 'Knowledge Location', score: 4, explanation: 'Vertically integrated AI/autonomy strategy with custom chip development shows distributed engineering knowledge, founder-CEO with 17-year tenure, but 1,000+ layoffs create knowledge loss risk' },
      { dimension: 'Structural Lock-In', score: 7, explanation: 'Normal, IL factory with 155,000 unit capacity, 1.2M sq ft supplier park, $1.25B debt at 10%, 4-year R2 development cycle, cannot pivot from vehicle production without abandoning infrastructure' },
      { dimension: 'Talent Flow', score: 6, explanation: 'Glassdoor 3.2-3.5/5, career opportunities rated 2.8/5, three layoff rounds create exit pressure, but compensation 4.2/5 and mission-driven brand attract engineers' },
      { dimension: 'Capital Intensity', score: 8, explanation: '-57.4% EBIT margin, negative free cash flow, automotive manufacturing requires billions in upfront investment, each vehicle adds material costs, scale required for profitability' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'AI assistant, custom chip, Autonomy+ all launching 2026 shows fast technical cadence, but R2 4-year cycle slow, three layoffs reveal sluggish organizational learning' }
    ],
    pattern: 'Software Mind in Hardware Body',
    patternDescription: 'Rivian exhibits the classic tension of a software-velocity organization trapped in manufacturing-physics constraints. The company demonstrates field-state agility in domains where bits dominate (custom AI chips launching in 12-month cycles, Autonomy+ subscription model, vertically integrated software stack), while simultaneously experiencing particle-state calcification in domains where atoms dominate (4-year R2 development cycle, $1.25B debt refinancing, -57% EBIT margins requiring massive scale to approach breakeven). Founder-CEO RJ Scaringe brings MIT PhD technical depth and 17-year tenure, enabling rapid decision-making on engineering priorities, but the organization stumbles on operational execution (three layoff rounds, copper wire supply chain miscommunication, fragmented marketing ',
    keyNumbers: [
      'Market cap: $25.14B (up 88.58% in one year)',
      'Revenue: $5.83B TTM (2024: $4.97B, 12.09% growth)',
      'Employees: 14,861 ($392,638 revenue per employee)',
      'EBIT margin: -57.4% (crushing capital intensity)',
      'Cash position: $7.2-7.5B runway',
      'Debt: $1.25B at 10% interest (refinanced to 2031)',
      'Production capacity: 155,000 R2 units/year at Normal, IL factory',
      '2026 forecast: ~66,000 deliveries expected'
    ],
    enablers: [
      'Founder-led continuity',
      'Vertically integrated AI/autonomy strategy',
      'VW partnership leverage',
      'R2 volume economics',
      'Supply chain corrections',
      'Amazon delivery van anchor'
    ],
    friction: [
      'Crushing capital intensity',
      'Three layoff rounds in 2025',
      'Quality control challenges',
      'Demand headwinds',
      'Manufacturing lock-in',
      'Talent retention concerns'
    ],
    quotable: 'Rivian is a software-velocity organization trapped in manufacturing-physics constraints. They can ship custom AI chips in 12-month cycles but need 4 years to deliver an SUV.',
  },


  '23andme': {
    slug: '23andme',
    name: '23Andme',
    analysisDate: '2026-01-27',
    gpiScore: 7.85,
    state: 'Particle',
    ticker: 'MEHCQ',
    marketCap: '$23.64M',
    dimensions: [

    ],
    pattern: 'The Data Asset Trap',
    patternDescription: '23andMe exemplifies the Data Asset Trap: when your most valuable asset becomes your heaviest liability. The company owns 15 million genetic profiles, one of the largest human genetic databases in the world. This asset was supposed to unlock recurring revenue through therapeutics, data partnerships, and personalized health services. Instead, it became a structural anchor. The database requires perpetual compliance costs (HIPAA, GDPR, state privacy laws). It attracts litigation (data breach settlements up to $86.5 million). It cannot be sold without customer consent, which is eroding rapidly (1.9 million deletion requests post-bankruptcy). The core business model is fundamentally broken: one-time genetic testing with no recurring revenue. Customers pay $99-$199 once, get their ancestry and h',
    keyNumbers: [
      'Market cap: $23.64M (January 2026), down 99.6% from $6B peak (June 2021)',
      'Revenue: $208.78M TTM (December 2024), declining from $299M in 2022',
      'Employees: 582 (post-layoffs), down from 1,000+ at peak, 40% reduction November 2024',
      'Customers: 15 million genetic profiles in database',
      'Data deletion requests: 1.9 million (15% of customer base) post-bankruptcy',
      'Data breach: 6.9 million customers exposed (October 2023)',
      'ICO fine: £2.31M for inadequate data security',
      'Data breach settlements: Up to $86.5M in class actions'
    ],
    enablers: [
      '15 million customer genetic database remains a valuable asset for research and drug development partnerships',
      'TTAM Research Institute acquisition removes public market pressure, allows long-term restructuring without quarterly earnings',
      'Downsizing from 155K to 30K sq ft reduces fixed costs by 80%, right-sizes footprint for current revenue',
      'Shuttering therapeutics division eliminates capital-intensive R&D with no ROI, focuses resources on core testing business',
      'AI/ML firms (OpenAI, Google) interested in genetic data for training datasets, potential partnership revenue stream',
      'Consumer genomics market still growing globally, competitors like AncestryDNA and MyHeritage remain viable proving business model works'
    ],
    friction: [
      'One-and-done business model with no recurring revenue, customers buy test once and never return (structural economics broken)',
      'Data breach exposed 6.9 million customers, £2.31M ICO fine, ongoing class action settlements up to $86.5M (trust destroyed)',
      '1.9 million customers (15% of base) requested data deletion post-bankruptcy, eroding the core asset in real-time',
      'Privacy regulations and 27-state coalition lawsuit restrict data monetization without explicit consent (legal lock-in)',
      'Talent exodus',
      'Anne Wojcicki circular leadership (resigned as CEO, bought company via TTAM) signals founder dependency, not systemic health'
    ],
    quotable: 'The database is both the company\'s greatest asset and its heaviest anchor. At GPI 7.85, you cannot sell it, you cannot leverage it, and you cannot ignore it.',
  },

  'carvana': {
    slug: 'carvana',
    name: 'Carvana',
    analysisDate: '2026-01-27',
    gpiScore: 4.15,
    state: 'Transitioning (lower)',
    ticker: 'CVNA',
    marketCap: '$102.7B',
    dimensions: [
      { dimension: 'Decision Latency', score: 3, explanation: 'Founder-CEO since 2012, stable C-suite (10.6 yr avg), rapid crisis response (4K+ layoffs, $5.5B debt restructure in 18 months), AI decision support, 14-year-old company lacks bureaucratic cruft' },
      { dimension: 'Error Correction', score: 3, explanation: 'Exceptional turnaround ($5 to $470 stock), cut $1.1B costs, CARE AI feedback loops, 45% call reduction shows learning, but reactive not proactive (got into crisis first)' },
      { dimension: 'Knowledge Location', score: 4, explanation: 'Mixed: 10.6 yr leadership tenure concentrates knowledge at top, but heavy AI/data investment (Databricks, Azure, CARE) distributes operational knowledge, Sebastian AI democratizes support' },
      { dimension: 'Structural Lock-In', score: 5, explanation: 'Moderate: owns IRCs, vending machines, logistics ($5.6B debt limits flexibility), but more asset-light than traditional dealerships, cloud tech stack flexible, diversified inventory sourcing' },
      { dimension: 'Talent Flow', score: 6, explanation: '4K+ layoffs signal low job security, 3.0/5 Glassdoor (45% recommend), poor management cited, but leadership retention exceptional (CEO 14 yrs, C-suite 10.6 yr avg), remote options for some roles' },
      { dimension: 'Capital Intensity', score: 6, explanation: '$5.6B debt, $215M annual interest, owns IRCs/trucks/vending machines, $2.2B ADESA acquisition, but digital-first eliminates showrooms, cloud tech is software-heavy, inventory financed not owned' },
      { dimension: 'Knowledge Velocity', score: 4, explanation: 'AI systems (Sebastian, CARE) enable rapid learning, Databricks aggregates data, 45% call reduction in 2 years, cloud enables quick updates, but 10.6 yr leadership may slow fresh perspectives' }
    ],
    pattern: 'Reactive Resurgence Through AI',
    patternDescription: 'Carvana demonstrates the pattern of reactive rather than proactive transformation. The company allowed itself to reach near-bankruptcy before executing a dramatic turnaround. This is not the gradual, anticipatory adaptation of a field-state organization but rather the crisis-driven correction of a particle organization that belatedly recognized its unsustainable trajectory. The difference is that Carvana had the leadership, technology infrastructure, and market position to execute the correction successfully. By removing $1.1B in annualized expenses through 4,000+ layoffs and restructuring $5.6B in debt, the company went from a $5 stock price to $470 in 18 months. This is exceptional error correction velocity. The AI investment is the key differentiator. By building Sebastian (AI customer ',
    keyNumbers: [
      'Market cap: $102.7B (January 2026)',
      'Revenue: $18.27B TTM (up from $13.67B in 2024, $10.77B in 2023)',
      'Employees: 17,400 (down from 21,000 after 4,000+ layoffs)',
      'Stock performance: Up 108% in 2025, from $5 low in 2022 to $470 in January 2026',
      'Debt burden: $5.6B with $215M annual cash interest starting 2025',
      'Debt-to-Equity: 4.8 (down from 27.6 in 2023)',
      'Quarterly net income: $263M (Q2 2025)',
      'Glassdoor rating: 3.0/5 (45% recommend to friend)'
    ],
    enablers: [
      'AI-first infrastructure with Sebastian agent reducing calls per sale by 45%',
      'Founder-CEO leadership with 14 years of company knowledge and crisis experience',
      'Cloud-native tech stack (Azure, Databricks) enabling rapid iteration',
      'Proven ability to execute dramatic turnaround ($5 to $470 stock in 18 months)',
      'Asset-light model compared to traditional dealerships (no showrooms)',
      'S&P 500 inclusion validates operational improvements and market position'
    ],
    friction: [
      '$5.6B debt burden with $215M annual cash interest starting 2025',
      'Low employee satisfaction (3.0/5 Glassdoor) following mass layoffs',
      'Subprime auto loan exposure during period of high delinquencies',
      'Vertical integration creates physical infrastructure rigidity (IRCs, vending machines)',
      'Long-tenured leadership (10.6 year average) may resist fresh perspectives',
      'Debt covenants limit financial flexibility for future investments'
    ],
    quotable: 'Carvana nearly died but survived because it could learn and adapt faster than traditional competitors through AI-enabled error correction.',
  },


  'koch-industries': {
    slug: 'koch-industries',
    name: 'Koch Industries',
    analysisDate: '2026-01-29',
    gpiScore: 7.05,
    state: 'Particle',
    dimensions: [
      { dimension: 'Decision Latency', score: 7, explanation: 'Co-CEO structure introduced in 2023 adds approval layers between Charles Koch and Dave Robertson. 59 years of Charles Koch leadership (since 1967) creates institutional path dependency. Private ownership removes market forcing function for speed. Decisions flow through Wichita headquarters across 120,000 employees in 50 countries.' },
      { dimension: 'Error Correction', score: 6, explanation: 'Exiting oil/fuels trading in 2025 demonstrates strategic adaptability. Active AI deployment for 2+ years with Sema4.ai partnership. Koch Disruptive Technologies venture arm signals innovation appetite. But 84-year-old company with family control limits pivot speed.' },
      { dimension: 'Knowledge Location', score: 7, explanation: 'Centralized in Wichita, Kansas creates talent acquisition friction. Glassdoor reviews cite location as major drawback. 3.7/5 rating with only 68% recommending. High turnover mentioned by employees.' },
      { dimension: 'Structural Lock-In', score: 8, explanation: 'Petroleum refining origins create massive capital asset lock-in. Chemical plants, refineries, manufacturing facilities cannot be easily repurposed. $125B revenue requires enormous infrastructure. Legacy 1940s industrial mindset embedded in organizational DNA.' },
      { dimension: 'Talent Flow', score: 7, explanation: 'Glassdoor reviews report fire and hire every day with very high turnover. Wichita location challenge drives talent exits. Only 68% would recommend. Family ownership creates limited upward mobility paths.' },
      { dimension: 'Capital Intensity', score: 9, explanation: 'Oil refining, chemical production, and manufacturing are ultra-capital-intensive. Every dollar of revenue requires massive infrastructure investment. Energy costs at $2.98/gallon impact operations. Legacy assets from 1940s-1980s require constant maintenance capital.' },
      { dimension: 'Knowledge Velocity', score: 6, explanation: 'AI adoption for 2+ years shows commitment to modernization. Sema4.ai partnership, Data First Architecture with Snowflake. Koch Disruptive Technologies invests in emerging companies. But 84-year-old company culture slows knowledge circulation.' }
    ],
    pattern: 'The Private Particle',
    patternDescription: 'Koch Industries represents the private particle pattern: a family-owned industrial conglomerate that has calcified not from market failure but from overwhelming success. 84 years of continuous operation, 59 years under the same chairman, and $125 billion in revenue have created organizational mass that resists acceleration. The company can optimize within existing lanes but cannot escape the gravitational pull of billions invested in refineries, chemical plants, and manufacturing facilities. Private ownership removes the market forcing function, allowing the particle state to persist indefinitely.',
    keyNumbers: [
      'Revenue: $125 billion (2024 estimates)',
      'Employees: 120,000 worldwide across 50+ countries',
      'Ownership: Private (second-largest US private company after Cargill)',
      'Founded: 1940 by Fred C. Koch (petroleum refining process innovation)',
      'Headquarters: Wichita, Kansas',
      'Leadership: Charles Koch (Chairman/Co-CEO since 1967), Dave Robertson (Vice Chairman/Co-CEO since 2023)',
      'Glassdoor Rating: 3.7/5 (2,065+ reviews), 68% would recommend',
      'Key Subsidiaries: Georgia-Pacific, Invista, Guardian Industries, Molex'
    ],
    enablers: [
      'AI adoption for 2+ years with Sema4.ai partnership',
      'Koch Disruptive Technologies venture arm active',
      'Strategic exit from oil/fuels trading (2025)',
      'Data First Architecture with Snowflake',
      'Private ownership provides patient capital',
      'Diversified portfolio reduces sector risk'
    ],
    friction: [
      '59 years of Charles Koch leadership creates path dependency',
      'Co-CEO structure adds decision layers',
      'Ultra-high capital intensity from refineries/chemicals',
      'Wichita headquarters creates talent challenges',
      'High employee turnover reported',
      'Family ownership limits transformation pressure'
    ],
    quotable: 'Koch Industries will continue generating massive revenue and operating profitably for decades. But it will not achieve field state fluidity. The accumulated mass is too great, the leadership tenure too long, and the capital intensity too high.',
  },

  'netflix-wbd-deal-analysis': {
    slug: 'netflix-wbd-deal-analysis',
    name: 'Netflix Wbd Deal Analysis',
    analysisDate: '2026-01-16',
    gpiScore: 7.05,
    state: 'Transitioning (lower)',
    dimensions: [

    ],
    pattern: 'Organ Transplant',
    patternDescription: 'This acquisition is not a merger. It is an organ transplant. Netflix is receiving WB Studios and HBO like a transplant recipient receives a heart. The body (Netflix) must accept the organ (WBD assets) without rejecting it or being overwhelmed by it. Success requires: - Immunosuppression: Netflix must temporarily suppress its culture instincts to prevent rejection - Gradual integration: Blood supply (cash flow, data systems) first, then nervous system (decision processes), then muscles (execution) - Long recovery: Full metabolic alignment takes 3-5 years minimum Failure modes: - Rejection: Netflix culture attacks WBD assets, talent flees - Infection: WBD particle-state infects Netflix, calcification spreads - Organ failure: WBD assets underperform due to neglect or mismanagement',
    keyNumbers: [

    ],
    enablers: [

    ],
    friction: [

    ],
  },


  'walmart-inc': {
    slug: 'walmart-inc',
    name: 'Walmart Inc',
    analysisDate: '2026-02-01',
    gpiScore: 5.2,
    state: 'Transitioning (upper)',
    marketCap: '$710B',
    dimensions: [
      { dimension: 'Decision Latency', score: 5, explanation: 'Centralized Bentonville HQ with moderate store manager autonomy, fast follower on e-commerce but not innovator' },
      { dimension: 'Error Correction', score: 5, explanation: 'Healthcare exit shows willingness to kill failures, but grocery low-margin trap persists, slow adaptation to Amazon threat' },
      { dimension: 'Knowledge Location', score: 4, explanation: 'Strong RetailLink data system, VIZIO acquisition betting on customer data, but advertising platform 10 years behind Amazon' },
      { dimension: 'Structural Lock-In', score: 6, explanation: '10,750 stores cannot pivot to pure e-commerce, grocery = low-margin business model lock, own most property (inflexible)' },
      { dimension: 'Talent Flow', score: 5, explanation: '2.1M employees = hiring machine but bureaucratic, wage increases for retention ($14-19/hr avg), Arkansas HQ not tech talent hub' },
      { dimension: 'Capital Intensity', score: 7, explanation: 'Massive: 10,750 stores + 164 distribution centers + inventory = enormous fixed assets, real estate ownership limits pivoting' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'Fast pandemic response (pickup/delivery), automation accelerating, VIZIO data play, but still playing catch-up to Amazon' }
    ],
    pattern: 'Scale as Calcification Accelerator',
    patternDescription: '. Walmart proves that scale amplifies organizational mass. At 10,750 stores and 2.1M employees, every strategic pivot requires moving enormous capital and human systems. The VIZIO acquisition and Walmart+ membership are not transformation - they are optimizations within the existing particle. The company can improve margins and add revenue streams, but cannot escape the physics of its physical footprint. Unlike Disney (discretionary spend vulnerability), Walmart has grocery necessity moat. But like Disney, it cannot ask "what if we started over digitally?" The stores aren\'t going away. The question is whether 27% e-commerce growth and advertising revenue can overcome 7/10 capital intensity before Amazon\'s relentless pressure calcifies the core further.',
    keyNumbers: [
      'Revenue: $648.1B (FY2025, ended Jan 2025) - world\'s largest retailer',
      'Employees: 2.1M globally (one of world\'s largest employers)',
      'Founded: 1962, HQ: Bentonville, Arkansas',
      'Structure: Public (NYSE: WMT), Walton family owns ~50%',
      'Market cap: $710B (Feb 2026)',
      'Fortune 500 Rank: #1 (consistently)',
      'Customer base: 270M+ weekly customers across 19 countries',
      'Operating income: $27.0B (FY2025)'
    ],
    enablers: [
      'Necessity moat',
      'Omnichannel working',
      'Automation investments',
      'VIZIO acquisition',
      'Error correction',
      'Financial strength'
    ],
    friction: [
      'Physical footprint lock-in',
      'Low-margin trap',
      'Capital intensity',
      'E-commerce slowing',
      'Advertising nascent',
      'Arkansas disadvantage'
    ],
    quotable: '10,750 stores don\'t pivot. They optimize.',
  },


  'walmart-2026-02-01-complete': {
    slug: 'walmart-2026-02-01-complete',
    name: 'Walmart 2026 02 01 Complete',
    analysisDate: '2026-02-01',
    gpiScore: 6.05,
    state: 'Transitioning (upper)',
    marketCap: '$954B',
    dimensions: [
      { dimension: 'Decision Latency', score: 6, explanation: 'Centralized Bentonville HQ, RTO mandate forcing office consolidation, decisions flow through headquarters' },
      { dimension: 'Error Correction', score: 6, explanation: 'Healthcare exit shows adaptability, but 1,500 layoffs = cutting people not fixing process, supply chain 60% China' },
      { dimension: 'Knowledge Location', score: 4, explanation: 'Strong RetailLink system, VIZIO data, Google Gemini partnership, but RTO suggests knowledge must be office-bound' },
      { dimension: 'Structural Lock-In', score: 7, explanation: '10,750 stores + 164 distribution centers = massive physical lock-in, RTO reveals cannot operate distributed' },
      { dimension: 'Talent Flow', score: 7, explanation: 'RTO caused quits, 1,500 tech layoffs, Arkansas recruiting disadvantage, Glassdoor 3.4/5 only 55% recommend' },
      { dimension: 'Capital Intensity', score: 8, explanation: 'Enormous: 10,750 stores, $40B debt, 65% automation adds MORE capital, grocery = high inventory low margin' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'Google Gemini = "tinkering to transformation", accelerating but 5 years behind Amazon, RTO slows digital flow' }
    ],
    pattern: 'The RTO Calcification Cascade',
    patternDescription: 'The January 2026 return-to-office mandate is not a workplace policy. It is an organizational physics revelation. When forced to choose between distributed knowledge work (flexible, modern, aligned with AI-driven future) and centralized control (rigid, legacy, aligned with 1962 Bentonville model), Walmart chose control. This decision cascades through every dimension. Decision Latency increases because decisions must physically flow through Bentonville offices rather than flowing digitally. Talent Flow calcifies because tech workers will not relocate to Arkansas, they quit instead. Knowledge Velocity decreases because information becomes office-bound rather than cloud-native. The RTO mandate, combined with CEO transition, complete C-suite overhaul, 1,500 tech layoffs, and "streamline operati',
    keyNumbers: [
      'Revenue: $703B (trailing twelve months), $681B FY2025',
      'Market Cap: $954B (Jan 2026), +31% year-over-year',
      'Employees: 2.3M globally (1.6M in US)',
      'Stores: 10,750 globally (4,605 US, 5,566 international)',
      'Distribution: 164 US centers, 184 international facilities, 29 e-commerce fulfillment centers',
      'Fortune 500 Rank: #1 (consistently)',
      'Glassdoor: 3.4/5 stars, 55% recommend to friend',
      'E-commerce: 27% YoY growth (slowing from 35%)'
    ],
    enablers: [
      'Google Gemini partnership positioning AI as customer interface, external knowledge injection',
      'VIZIO $2.3B acquisition bringing 18M smart TV data streams for advertising intelligence',
      '65% store automation by FY2026, 60% e-commerce fulfillment automation',
      'Mature RetailLink supply chain data system providing vendor visibility',
      'Grocery necessity moat creating customer dependency (recession-resistant)',
      'Omnichannel integration working (4,700+ pickup locations, 2,900 international delivery)'
    ],
    friction: [
      'RTO mandate forcing office consolidation, caused employee quits and protests',
      'Complete C-suite overhaul Feb 2026 creating top-layer instability and transition friction',
      '1,500 tech layoffs signaling talent exodus, "layoffs as adaptation" pattern',
      '10,750 stores + 164 distribution centers = massive physical footprint lock-in',
      'Grocery low-margin trap (2-3% vs Amazon 5-6%) limiting reinvestment velocity',
      'Arkansas headquarters creating tech talent recruiting disadvantage vs coastal competitors'
    ],
    quotable: 'The RTO mandate is not a workplace policy. It\'s an organizational physics revelation.',
  },


  'pilot-company': {
    slug: 'pilot-company',
    name: 'Pilot Company',
    analysisDate: '2026-03-02',
    gpiScore: 5.5,
    state: 'Transitioning (upper)',
    dimensions: [
      { dimension: 'Decision Latency', score: 4, explanation: 'Berkshire\'s hands-off ownership gives real operational autonomy; lean executive structure keeps decisions close to operations' },
      { dimension: 'Error Correction', score: 5, explanation: 'Mixed: fuel rebate fraud ran for years before external detection (2013 FBI investigation); post-Berkshire controls improved but governance failure was severe' },
      { dimension: 'Knowledge Location', score: 5, explanation: 'CTO with Data and AI team, Jasper AI deployed, new mobile app (Jan 2026); distributing knowledge across 900 locations is inherently hard' },
      { dimension: 'Structural Lock-In', score: 7, explanation: 'Defines the analysis: owns third-largest tanker fleet, 900+ physical locations with restaurant franchises, truck service centers, 6,200 diesel lanes' },
      { dimension: 'Talent Flow', score: 6, explanation: 'Glassdoor 3.2/5.0, 48% recommend; Indeed management 2.7/5.0; "you are a number" culture post-Berkshire; Comparably executive team C- (bottom 30%)' },
      { dimension: 'Capital Intensity', score: 8, explanation: 'Highest score: $1B just to remodel existing stores; new travel centers require land, construction, fuel infrastructure, restaurant buildouts' },
      { dimension: 'Knowledge Velocity', score: 5, explanation: 'No earnings calls as Berkshire subsidiary; zero external visibility; Data and AI team building internal capabilities but opaque externally' }
    ],
    pattern: '"The Infrastructure Prisoner"',
    patternDescription: 'Pilot built the largest travel center network in North America by owning the physical ground between everywhere and everywhere else. That dominance is real. It\'s also a prison. Every dollar that has to go into maintaining, remodeling, and expanding 900 physical locations is a dollar that can\'t go into speed, flexibility, or reinvention.',
    keyNumbers: [

    ],
    enablers: [
      'Berkshire ownership removes quarterly earnings pressure, enabling long-term capital deployment',
      '$1B New Horizons initiative remodeling 400+ locations',
      'Tesla Semi charging partnership (2026) as heavy-haul EV infrastructure leader',
      '2,000 EV charging stations at 500 locations committed by end of 2026',
      'CTO with dedicated Data and AI team',
      'Jasper AI deployment for content creation'
    ],
    friction: [
      'Revenue down two straight years (~22% in 2023, 17.4% in 2024)',
      'SG&A up 10.3% while revenues collapsed',
      'Pre-tax earnings down 42% in 2024',
      'Fraud scandal legacy',
      'Haslam family vs. Berkshire lawsuit (2023) over final 20% valuation',
      'Love\'s opening more new locations than Pilot in 2024-25'
    ],
  },


  'canva': {
    slug: 'canva',
    name: 'Canva',
    analysisDate: '2026-02-12',
    gpiScore: 3.2,
    state: 'Transitioning (lower)',
    dimensions: [
      { dimension: 'Decision Latency', score: 3, explanation: 'All three co-founders in CEO/COO/CPO roles; Affinity acquisition closed in ~2 months; no board veto layer slowing calls' },
      { dimension: 'Error Correction', score: 4, explanation: 'Fast on product and talent corrections; slow on pricing (300%+ Teams hike backfired); AI layoffs showed willingness to act on data quickly' },
      { dimension: 'Knowledge Location', score: 3, explanation: 'Cloud-native, 800M monthly AI interactions, active engineering blog, AI Discovery Week all-hands; 260M users create strong data feedback loops' },
      { dimension: 'Structural Lock-In', score: 3, explanation: 'Pure SaaS, no factories or physical assets; moved consumer to enterprise without major reorg; Affinity integrated smoothly' },
      { dimension: 'Talent Flow', score: 4, explanation: 'Glassdoor 3.9/5.0, 68% recommend; Comparably eNPS bottom 35% of similar companies; favoritism complaints; AI layoffs unsettled workforce' },
      { dimension: 'Capital Intensity', score: 2, explanation: 'Asset-light: $589M total funding to $42B valuation, profitable at scale, no manufacturing or physical retail' },
      { dimension: 'Knowledge Velocity', score: 3, explanation: 'Information moves fast at current size; IPO prep adding governance layers; private company means limited external transparency' }
    ],
    pattern: '"Designing Its Own Gravity"',
    patternDescription: 'Canva is a company that eliminated friction for 260 million people, and now it\'s generating friction internally as it scales. The same growth that made Canva a $42B company is producing organizational mass: more employees, more offices, more governance, more investor expectations. The question isn\'t whether Canva will calcify. It\'s whether the founders can engineer their way around the physics.',
    keyNumbers: [

    ],
    enablers: [
      'Founder-led structure with all three co-founders in executive roles, eliminating principal-agent problems',
      '800M monthly AI interactions and company-wide AI Discovery Week',
      'Asset-light SaaS model',
      '260M monthly active users creating a data flywheel',
      'Affinity acquisition executed in two months, then made free',
      'Profitable at scale with no dependency on external capital'
    ],
    friction: [
      'IPO preparation adding governance, compliance, and structural layers',
      '300%+ Teams pricing hike damaged trust with core user base',
      'Comparably eNPS in bottom 35%, Glassdoor declining',
      'AI-driven layoffs unsettled workforce and contradicted augmentation narrative',
      'Favoritism complaints with employees reporting stagnation',
      '$42B valuation creating investor pressure that may override organizational health'
    ],
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
