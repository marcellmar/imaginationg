export interface DeepRead {
  slug: string;
  title: string;
  kicker: string;
  subtitle: string;
  description: string;
  opening: string[];
  sections: Array<{
    title: string;
    body: string[];
  }>;
  workingQuestions: Array<[string, string]>;
  useWhen: string;
}

export const deepReads: Record<string, DeepRead> = {
  'invested-in-the-waste': {
    slug: 'invested-in-the-waste',
    title: "You're Invested in the Waste",
    kicker: 'Structural Lock-In',
    subtitle: 'The broken step may be doing a job for somebody.',
    description: 'A delay can create work, status, budget, or cover. Cleanup gets strange when the mess has been useful to someone.',
    opening: [
      'Everybody knows one process that makes no sense. It might be the form nobody trusts, the handoff that always needs a call after the call, or the report people build because the system report never tells the truth. From far away, it looks like bad management.',
      'Up close, the mess is usually doing work. It gives someone control, keeps a budget alive, protects a team from blame, or makes one person the only one who knows the path through. When you remove the mess, you may also remove the thing somebody has been standing on.',
    ],
    sections: [
      {
        title: 'Somebody Lives In The Gap',
        body: [
          'Every company says it wants cleaner handoffs and faster decisions. Then the cleanup starts and the room gets careful. Someone defends the old report. A team asks for one more approval. The workaround comes back with a new name.',
          'That reaction is part of the read. The broken step has people around it because status, safety, budget, or control may be tied to the mess. The same thing annoying the business may be protecting someone inside it.',
        ],
      },
      {
        title: 'The System Trained Them',
        body: [
          'People learn the system they are given. If the business rewards the fixer, the translator, the gatekeeper, or the person who knows the secret path through the maze, people learn to protect that role.',
          'Most of the time, nobody is trying to damage the company. They are protecting the place the company gave them to stand.',
        ],
      },
      {
        title: 'Do Not Make It A Character Issue',
        body: [
          'The easy mistake is to blame the person closest to the mess. Usually they are just the one holding the bag. Look at the delay, the approvals around it, the files people keep rebuilding, and the budget or status sitting nearby.',
          'Then ask a simpler question: if this workaround goes away tomorrow, who loses their place in the work? Until the room can answer that honestly, cleanup mostly moves the mess around.',
        ],
      },
    ],
    workingQuestions: [
      ['Repeated delay', 'The handoff, report, approval, or workaround that keeps returning.'],
      ['People around it', 'The status, budget, control, identity, or safety tied to the mess.'],
      ['Cleaner role', 'A better place for people to stand before the waste gets pulled away.'],
    ],
    useWhen: 'Use this read when a broken process keeps surviving every cleanup attempt.',
  },
  'the-acquisition-trap': {
    slug: 'the-acquisition-trap',
    title: 'The Acquisition Trap',
    kicker: 'Case Study',
    subtitle: 'The deal can close before the two companies can live together.',
    description: 'A buyer gets the assets, the people, the pace, the habits, and the parts of the target the spreadsheet cleaned up.',
    opening: [
      'An acquisition can look beautiful in a deck. New market. New capability. New customers. A clean story for the board. Then the deal closes and the thing everybody bought starts acting like a living business instead of a slide.',
      'This is the trap. Companies think they are buying assets, but they are also buying a pace, a memory, a way decisions move, and a way people protect value. If the buyer cannot live with the target metabolism, the integration plan becomes a slow way to crush the thing it paid for.',
    ],
    sections: [
      {
        title: 'The Body Of The Deal',
        body: [
          'Strategic fit is not enough. HP could say software made sense. Amazon could say grocery made sense. The difference sits in the body of the companies: decision speed, error loops, knowledge flow, talent patterns, and the amount of structure each side can carry without breaking.',
          'A company does not absorb another company with a memo. It absorbs it through meetings, systems, incentives, approvals, reporting lines, and thousands of small choices after close.',
        ],
      },
      {
        title: 'The Gap Breaks It',
        body: [
          'A small gap can be bridged. A medium gap needs protection and time. A large gap should not be forced into one operating system just because the legal documents closed.',
          'When the buyer moves in quarters and the target moves in weeks, both sides start misreading each other. One side sees chaos. The other sees suffocation. Culture clash is the easy label. Speed mismatch is the deeper read.',
        ],
      },
      {
        title: 'The Integration Choice',
        body: [
          'Before the price gets all the attention, read the two metabolisms. The question is not only whether the deal makes sense. The question is whether the buyer can protect the value-creating part of the target.',
          'Some deals need absorption. Some need a protected boundary. Some need a slow bridge. Some should stay separate because the buyer bought a capability it cannot process yet.',
        ],
      },
    ],
    workingQuestions: [
      ['The real asset', 'Name the capability, speed, customer trust, knowledge, or habit the deal actually needs to preserve.'],
      ['The part to protect', 'Find the piece of the target most likely to be damaged by integration.'],
      ['The operating gap', 'Compare decision speed, knowledge flow, incentives, and tolerance for risk before choosing the integration path.'],
    ],
    useWhen: 'Use this read before a partnership, acquisition, merger, or major integration.',
  },
  'why-success-creates-rigidity': {
    slug: 'why-success-creates-rigidity',
    title: 'Success Creates Rigidity',
    kicker: 'All Dimensions',
    subtitle: 'The old win keeps getting a vote.',
    description: 'A company can protect the lesson that built it long after the market starts asking for something else.',
    opening: [
      'Success feels clean from a distance. The company found the customer, built the model, proved the point, and earned the right to keep going. Inside the business, success is heavier. It leaves grooves.',
      'People get promoted for repeating the win. Systems get built to protect it. Reports learn to prove it still works. The old lesson becomes more than a lesson. It becomes identity. Then reality changes, and the company keeps asking yesterday to make tomorrow’s decision.',
    ],
    sections: [
      {
        title: 'The Old Win Gets A Vote',
        body: [
          'A business does not become rigid because it forgot the past. It becomes rigid because the past worked too well. The customer pattern, the channel, the approval path, the leader, the margin model, the old way of seeing risk all keep showing up at the table.',
          'At first, this is wisdom. Later, it becomes weight. The business stops checking whether the lesson still matches reality and starts protecting the lesson because it explains who the company believes it is.',
        ],
      },
      {
        title: 'The Protection Reflex',
        body: [
          'The people defending the old way are often defending something real. It paid salaries. It won customers. It funded growth. It made the company credible.',
          'This is why attacking it usually fails. The move is to respect the old success, then lower its vote in decisions where the terrain has changed.',
        ],
      },
      {
        title: 'The Updated Weight',
        body: [
          'Name the old lesson plainly. Keep the part still telling the truth. Then find the decision where it has become too heavy.',
          'The goal is not amnesia. A company without memory is dangerous. The goal is updated memory: enough respect for the win to use it, enough honesty to stop worshiping it.',
        ],
      },
    ],
    workingQuestions: [
      ['The old win', 'Name the pattern behind the company’s success without turning it into a slogan.'],
      ['The part still true', 'Keep the piece of the old lesson still matching the current terrain.'],
      ['The overweight lesson', 'Find the decision getting distorted because the old success has too much vote.'],
    ],
    useWhen: 'Use this read when a strong company keeps repeating the old winning move.',
  },
  'friction-is-margin': {
    slug: 'friction-is-margin',
    title: 'Friction Is Margin',
    kicker: 'Structural Lock-In',
    subtitle: 'Somebody may be getting paid in the gap.',
    description: 'Delay, complexity, and confusion survive when they create margin, authority, budget, or cover.',
    opening: [
      'Friction is easy to hate when you are the one waiting. The form will not submit. The refund takes forever. The approval sits in somebody’s inbox. The customer has to call twice. From your side, it looks like a bad system.',
      'From another side, the same friction may be revenue, control, headcount, risk cover, or billable hours. This is why it survives. The gap is not always a leak. Sometimes the gap is the store.',
    ],
    sections: [
      {
        title: 'The Gap Sells',
        body: [
          'Some companies make money by removing friction. Others make money because friction remains. The same pattern shows up inside a business. Confusion creates coordinators. Delay creates escalation paths. Tool gaps create manual work. Manual work becomes budget. Budget becomes turf.',
          'Once friction pays someone, simplification stops being a clean improvement. It becomes a threat to the small economy built around the pain.',
        ],
      },
      {
        title: 'The Hidden Price',
        body: [
          'The customer pays in time. Employees pay in attention. Suppliers pay in uncertainty. The company pays in slower learning. But the cost is scattered, while the benefit may be concentrated.',
          'This is the trick. Everyone feels the drag, but one team may get the margin. Everyone complains about the process, but one role gets its authority from knowing the process better than anyone else.',
        ],
      },
      {
        title: 'The Money Map',
        body: [
          'Map friction like a cash flow. Who waits? Who explains? Who gets budget? Who gets authority? Who gets to say no because the gap still exists?',
          'Then decide whether the friction is useful protection, accidental drag, or defended margin. Those are different problems. Treating them the same is why cleanup projects stall.',
        ],
      },
    ],
    workingQuestions: [
      ['The person paying', 'Customer, employee, supplier, partner, or the business itself.'],
      ['The person gaining', 'Look for budget, status, control, margin, or safety.'],
      ['The result of removal', 'The reaction to simplification usually reveals the real business model.'],
    ],
    useWhen: 'Use this read when a problem is too profitable to vanish on its own.',
  },
  'organizational-antibodies': {
    slug: 'organizational-antibodies',
    title: 'Organizational Antibodies',
    kicker: 'Error Correction',
    subtitle: 'A good idea can still feel unsafe.',
    description: 'New work gets rejected when it threatens the way the company currently keeps itself together.',
    opening: [
      'A good idea does not enter an empty room. It enters a business with memory. People remember failed rollouts, surprise cuts, bad tools, power grabs, and leaders who called something innovation while making everyone’s day harder.',
      'So the system protects itself. Sometimes the protection is smart. Sometimes it rejects the next capability before anyone can judge whether the idea is useful. The business is not only asking, “Is this good?” It is asking, “Is this foreign?”',
    ],
    sections: [
      {
        title: 'The Immune Response',
        body: [
          'A new process can trigger process antibodies: we have always done it this way. A new decision path can trigger power antibodies: who approved this? A new model can trigger identity antibodies: this is not who we are. A new tool can trigger capability antibodies: we do not have the skills.',
          'The surface objection changes. The deeper move is the same. The business is checking whether the new thing threatens the way it currently stays coherent.',
        ],
      },
      {
        title: 'The Real Threat',
        body: [
          'Antibodies do not reject change because change is bad. They reject foreign metabolism. A fast, loose, field-style idea dropped into a slow, permission-heavy company can look irresponsible even when it is exactly the capability the company needs next.',
          'The mismatch creates a predictable cycle: detection, threat assessment, defense, rejection. By the time leaders call it resistance, the system has already decided the new thing does not belong.',
        ],
      },
      {
        title: 'The Bridge In',
        body: [
          'Do not introduce change as an argument. Introduce it as a compatible next move. The system needs a bridge, a boundary, or a small proof it can metabolize.',
          'Big jumps need preparation. If the business cannot absorb the speed of the change, it will attack the change and call the attack discipline.',
        ],
      },
    ],
    workingQuestions: [
      ['The foreign part', 'Name the part of the change the business experiences as unsafe or unfamiliar.'],
      ['The protected thing', 'Status, risk, customer trust, identity, job security, decision rights, or control.'],
      ['The bridge in', 'Design the smallest version the system can absorb without pretending to be someone else overnight.'],
    ],
    useWhen: 'Use this read when a good idea keeps dying inside the business.',
  },
  'metabolic-rate': {
    slug: 'metabolic-rate',
    title: 'Metabolic Rate',
    kicker: 'All Dimensions',
    subtitle: 'The company has a real speed.',
    description: 'A business changes at the speed of its decision paths, knowledge flow, error loops, and capital weight.',
    opening: [
      'Every business has a natural speed. Some can hear a signal on Monday and change behavior by Friday. Others need a quarter, a steering committee, a training plan, a budget cycle, and three people to agree on the wording.',
      'Speed is not personality. It is infrastructure. The dangerous moment comes when the outside world moves faster than the inside system can learn. Then leaders start demanding urgency from a body built for delay.',
    ],
    sections: [
      {
        title: 'Signal To Behavior',
        body: [
          'Metabolic rate is the time between reality changing and the business changing with it. Signal becomes shared context. Shared context becomes a decision. The decision becomes changed behavior. The shorter the loop, the faster the business can learn.',
          'Slow is not automatically bad. A nuclear plant should not move like a social app. The question is fit. Does the business move at the speed its terrain now requires?',
        ],
      },
      {
        title: 'The Speed Mistake',
        body: [
          'Fast companies can overlearn motion and outrun judgment. Slow companies can overlearn caution and call it discipline. Both mistakes come from treating their normal speed as the correct speed.',
          'Speed is not a virtue by itself. Terrain changes. A slow metabolism can survive in slow terrain. It gets exposed when customers, regulation, technology, or competitors force a faster loop.',
        ],
      },
      {
        title: 'The Rate Match',
        body: [
          'Read the decision path, error loop, knowledge flow, and capital weight together. This tells you the real speed, not the speed leaders announce.',
          'If the change needs a faster rate, build the bridge before demanding the jump. Protocol, training, pilot, boundary, or smaller first move. Urgency without infrastructure turns into theater.',
        ],
      },
    ],
    workingQuestions: [
      ['The outside speed', 'Market pressure, customer behavior, regulation, technology, or internal deadline.'],
      ['The inside speed', 'Decision latency, knowledge velocity, error correction, and capital weight.'],
      ['The needed bridge', 'Training, protocol, pilot, boundary, map, or smaller first move.'],
    ],
    useWhen: 'Use this read when a company is trying to change faster than its system can absorb.',
  },
  'the-spiral-model': {
    slug: 'the-spiral-model',
    title: 'The Spiral Model',
    kicker: 'Transformation',
    subtitle: 'Change rarely moves in a clean line.',
    description: 'The old pattern often comes back. The work is seeing it sooner and carrying more capability into the next pass.',
    opening: [
      'Most transformation plans pretend the business can walk from old to new in a straight line. Current state over here. Future state over there. A roadmap in the middle with clean arrows and confident dates.',
      'Real change does not behave so neatly. The business loosens, tightens, panics, learns, returns to an old habit, then sees the habit differently. It comes back around, but not to the same place. This is the spiral.',
    ],
    sections: [
      {
        title: 'No Clean Jump',
        body: [
          'You cannot skip phases just because the strategy deck wants speed. Each phase builds the capability needed for the next one. A rigid company needs enough structure to function while it learns to move. A loose company may need new boundaries before it can scale.',
          'Trying to jump from particle to field without the middle work creates chaos without coordination. The system does not become modern. It becomes confused.',
        ],
      },
      {
        title: 'The Return With Learning',
        body: [
          'The spiral is not failure because an old pattern returns. Pressure brings old patterns back. The question is whether the business can see the pattern sooner, hold it differently, and choose a better move the next time.',
          'Amazon did not start with AWS. It learned books, warehouses, marketplace, infrastructure, logistics. Each move carried capability from the last one. Most transformation stories clean up this part too much.',
        ],
      },
      {
        title: 'The Next Reachable Move',
        body: [
          'Name the current state honestly. Particle, transition, field, or a mix by function. Then choose the move the system can actually absorb.',
          'Good transformation keeps enough boundary to function while creating enough movement to learn. Too much boundary hardens the past. Too much movement breaks trust.',
        ],
      },
    ],
    workingQuestions: [
      ['The current state', 'Particle, Transitioning, Field, or a mix across functions.'],
      ['The skipped phase', 'The phase leaders want to leap over usually returns as resistance.'],
      ['The reachable move', 'Small enough to absorb, real enough to change the path.'],
    ],
    useWhen: 'Use this read when transformation is being treated like a clean jump instead of a staged change.',
  },
  'latent-capabilities': {
    slug: 'latent-capabilities',
    title: 'Latent Capabilities',
    kicker: 'Knowledge Location',
    subtitle: 'The thing you need may already be nearby.',
    description: 'A company can have the skill, relationship, data, or tool already inside the system and still fail to get it to the decision.',
    opening: [
      'A company can be starving next to a full pantry. The skill is already there. The customer knowledge is already there. The old project, the spreadsheet, the relationship, the tool, the person who knows the workaround by heart. All of it exists.',
      'The problem is access. Capability scattered across teams is not the same as capability available to the decision. Without coordination, the business keeps asking for more while stepping over the thing it already has.',
    ],
    sections: [
      {
        title: 'The Full Pantry Problem',
        body: [
          'Latent capability is something the business can do but does not reliably use. It may be a skill trapped inside a rigid role, a relationship trapped in one team, capacity trapped at the wrong time, or an asset trapped in the wrong place.',
          'From the outside, the company looks underpowered. Inside, it may be poorly connected. Adding more capacity to a coordination problem makes the pantry fuller and the meal no closer.',
        ],
      },
      {
        title: 'The More Reflex',
        body: [
          'Businesses learn to ask for more before they learn to use what they have. More tools. More headcount. More budget. More consultants. Sometimes more is real. Often it is easier than admitting the current capability has no path to the work.',
          'The unused thing becomes invisible because nobody owns the bridge. The company has knowledge, but the decision cannot reach it in time.',
        ],
      },
      {
        title: 'The Path To The Work',
        body: [
          'Map the capability before buying more. Skill latency, network latency, temporal latency, spatial latency. Different traps, same question: why can the business not use the thing it already has?',
          'The goal is not to make everyone know everything. The goal is to make the right capability available at the right moment, in the place where the decision happens.',
        ],
      },
    ],
    workingQuestions: [
      ['The existing capability', 'Hidden skills, old projects, expert people, datasets, customer knowledge, or underused tools.'],
      ['The reason it sits', 'Permission, visibility, coordination, trust, incentives, timing, or location.'],
      ['The connection point', 'Tie the capability to a decision, workflow, map, or customer outcome.'],
    ],
    useWhen: 'Use this read when the business keeps adding capacity while existing capability sits unused.',
  },
};

export const growingPainReadOrder = [
  'invested-in-the-waste',
  'the-acquisition-trap',
  'why-success-creates-rigidity',
  'friction-is-margin',
  'organizational-antibodies',
  'metabolic-rate',
  'the-spiral-model',
  'latent-capabilities',
];
