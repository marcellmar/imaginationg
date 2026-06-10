export interface PublishingLaneItem {
  title: string;
  href: string;
  note: string;
}

export interface PublishingLane {
  slug: string;
  title: string;
  description: string;
  purpose: string;
  items: PublishingLaneItem[];
}

export const publishingLanes: Record<string, PublishingLane> = {
  'gpi-analyses': {
    slug: 'gpi-analyses',
    title: 'Snapshots',
    description: 'Fast company reads: state, pressure, constraint, and the next question.',
    purpose: 'The company lane. A snapshot should feel like a clean read, not a mini report.',
    items: [
      { title: 'All Snapshots', href: '/insights/snapshots', note: 'Company reads from the GPI corpus.' },
    ],
  },
  'vital-signs': {
    slug: 'vital-signs',
    title: 'Vital Signs',
    description: 'Short watches on companies starting to move differently.',
    purpose: 'Used before the story has settled. The point is to catch the change while it can still be read clearly.',
    items: [
      { title: 'Anduril Transition Watch', href: '/insights/gpi-analyses/anduril-arsenal-transition-watch', note: 'The startup won the room. Now it has to survive the machinery it is entering.' },
      { title: 'Porsche Transition Watch', href: '/insights/gpi-analyses/porsche-new-ceo-transition-watch', note: 'A new CEO only helps if decisions start traveling a shorter path.' },
      { title: 'Citigroup Project Bora Bora', href: '/insights/gpi-analyses/citigroup-project-bora-bora', note: 'Fewer layers, fewer committees, and fewer places for ownership to hide.' },
    ],
  },
  smackdowns: {
    slug: 'smackdowns',
    title: 'Smackdowns',
    description: 'Two companies under the same pressure. The comparison makes the operating difference easier to see.',
    purpose: 'Used when one company makes the other easier to understand.',
    items: [
      { title: 'Tesla vs BYD EV Wars', href: '/insights/gpi-analyses/tesla-vs-byd-ev-wars', note: 'Same EV fight, different operating rhythm.' },
      { title: 'The Pill Wars: Eli Lilly vs Novo Nordisk', href: '/insights/gpi-analyses/eli-lilly-vs-novo-nordisk-pill-wars', note: 'Same obesity-drug fight, different patient friction.' },
      { title: 'The Agent Wars: OpenAI vs Anthropic', href: '/insights/gpi-analyses/openai-vs-anthropic-agent-wars', note: 'Same frontier AI fight, different permission layer.' },
    ],
  },
  'calcification-alerts': {
    slug: 'calcification-alerts',
    title: 'Calcification Alerts',
    description: 'Signs an old habit is starting to turn into a wall.',
    purpose: 'Used when the warning shows up before the collapse makes it obvious.',
    items: [
      { title: 'UnitedHealth Calcification Alert', href: '/insights/gpi-analyses/unitedhealth-risk-adjustment-calcification-alert', note: 'When the coding machine gets this powerful, trust becomes the operating constraint.' },
      { title: 'Chevron Calcification Alert', href: '/insights/gpi-analyses/chevron-layoffs-calcification-alert', note: 'Cutting heads is easier than removing the friction that made the work slow.' },
      { title: 'Forever Layoffs', href: '/insights/gpi-analyses/forever-layoffs-institutionalized-uncertainty', note: 'The slow bleed became the system.' },
    ],
  },
  'field-notes': {
    slug: 'field-notes',
    title: 'Field Notes',
    description: 'Short working notes from the edge of the work.',
    purpose: 'The quick-note lane. A smaller observation gets sharpened in public before it becomes a full read.',
    items: [
      { title: 'Agent Receipts', href: '/insights/gpi-analyses/agent-receipts-workplace-trust', note: 'Agents need a receipt trail before they earn real authority.' },
      { title: 'Blended Workforce', href: '/insights/gpi-analyses/blended-workforce-ai-teammates', note: 'AI teammates expose the org chart before they fix the work.' },
      { title: 'The One Percent', href: '/insights/gpi-analyses/the-one-percent-coordination-age', note: 'A note on the small share of organizations already moving like networks.' },
    ],
  },
  'wtf-files': {
    slug: 'wtf-files',
    title: 'THE WTF FILES',
    description: 'Strange company moves with a live wire under them.',
    purpose: 'Used when a move looks absurd at first glance, but deeper signal shows capital, panic, or power trying to run next.',
    items: [
      { title: 'Allbirds Put Its Logo On A Server Rack', href: '/insights/gpi-analyses/allbirds-newbird-ai-wtf-file', note: 'Allbirds became NewBird AI after brand logic lost its operating center.' },
    ],
  },
  autopsies: {
    slug: 'autopsies',
    title: 'Autopsies',
    description: 'Post-event reads on failures, write-downs, blown integrations, and decisions looking fine until they met the work.',
    purpose: 'Used after the event exposes what the plan missed.',
    items: [
      { title: 'Blockbuster Autopsy', href: '/insights/gpi-analyses/blockbuster-autopsy', note: 'A dead-company read on the change Blockbuster saw too late.' },
    ],
  },
  wildcards: {
    slug: 'wildcards',
    title: 'Wildcards',
    description: 'Odd reads on everyday systems, habits, and business models.',
    purpose: 'Used when naming the pattern makes the old situation hard to unsee.',
    items: [
      { title: 'The AI Answer Tax', href: '/insights/gpi-analyses/ai-answer-tax-zero-click-web', note: 'The web is learning what happens when answers travel without visits.' },
      { title: 'The Soft Layoff', href: '/insights/gpi-analyses/microsoft-soft-layoff-rto-mandate', note: 'Return-to-office as a filter, not only a workplace policy.' },
      { title: 'Subscription Heist', href: '/insights/gpi-analyses/subscription-heist-forgetfulness-business-model', note: 'Forgetting became a business model.' },
      { title: 'Shadow Work', href: '/insights/gpi-analyses/shadow-work-self-checkout-heist', note: 'A read on hidden labor transfer and who keeps the margin.' },
    ],
  },
  'operating-terrain-essays': {
    slug: 'operating-terrain-essays',
    title: 'Growing Pains',
    description: 'Eight deeper reads on good systems hardening, stalling, defending themselves, and hiding capacity.',
    purpose: 'The deeper-read lane. These sit below the snapshots and name the business behavior most reports clean up too early.',
    items: [
      { title: "You're Invested in the Waste", href: '/insights/invested-in-the-waste', note: 'Waste survives when jobs, budgets, status, and safety grow around the gap.' },
      { title: 'The Acquisition Trap', href: '/insights/the-acquisition-trap', note: 'The spreadsheet can be right while the buyer crushes the thing it paid for.' },
      { title: 'Success Creates Rigidity', href: '/insights/why-success-creates-rigidity', note: 'The old win keeps getting a vote after the terrain has changed.' },
      { title: 'Friction Is Margin', href: '/insights/friction-is-margin', note: 'The gap is not always a leak. Sometimes the gap is the store.' },
      { title: 'Organizational Antibodies', href: '/insights/organizational-antibodies', note: 'Good ideas die when they enter a system reading them as foreign.' },
      { title: 'Metabolic Rate', href: '/insights/metabolic-rate', note: 'Speed comes from the system, not the slogan.' },
      { title: 'The Spiral Model', href: '/insights/the-spiral-model', note: 'Change comes back around with more capability, not a clean jump.' },
      { title: 'Latent Capabilities', href: '/insights/latent-capabilities', note: 'The capacity may already be in the room. The path to the work is broken.' },
    ],
  },
  'source-to-signal': {
    slug: 'source-to-signal',
    title: 'Behind the Map',
    description: 'The workbench: what I looked at, what mattered, and how it became a map, card, packet, or decision path.',
    purpose: 'The proof-of-work lane. Raw material turns into something a client can actually use.',
    items: [
      { title: 'Studio', href: '/studio', note: 'Signal, maps, and working reps in one place.' },
      { title: 'Maps', href: '/maps', note: 'Visual examples from company and client work.' },
      { title: 'Knowledge Velocity', href: '/gpi-framework/knowledge-velocity', note: 'The dimension behind getting from notes to a usable read.' },
    ],
  },
};

export const publishingLaneList = [
  publishingLanes['gpi-analyses'],
  publishingLanes['vital-signs'],
  publishingLanes.smackdowns,
  publishingLanes['calcification-alerts'],
  publishingLanes['field-notes'],
  publishingLanes['wtf-files'],
  publishingLanes.autopsies,
  publishingLanes.wildcards,
  publishingLanes['operating-terrain-essays'],
  publishingLanes['source-to-signal'],
];
