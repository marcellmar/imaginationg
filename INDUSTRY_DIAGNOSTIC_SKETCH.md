# Industry-Adaptive GPI Diagnostic - Sketch

## Core Principle
**Keep universal questions. Add industry-specific CONTEXT.**

The GPI's power is showing the same patterns across industries. We don't change the questions - we make them feel relevant by adding examples the user recognizes.

---

## Data Structure

```typescript
// lib/gpi-industry-examples.ts

type IndustryKey =
  | 'healthcare'
  | 'technology'
  | 'finance'
  | 'manufacturing'
  | 'retail'
  | 'professional_services'
  | 'government'
  | 'energy';

interface IndustryExample {
  context: string;      // Brief industry-specific example
  antiPattern?: string; // What bad looks like in this industry
}

interface QuestionExamples {
  [questionId: number]: {
    [industry in IndustryKey]?: IndustryExample;
  };
}
```

---

## Sample Question Adaptations

### Question 3: "Do most decisions happen within 24 hours of being raised?"

| Industry | Context Example |
|----------|-----------------|
| **Healthcare** | "Like approving a treatment protocol change or staffing adjustment" |
| **Technology** | "Like approving a feature spec or architecture decision" |
| **Finance** | "Like approving a trade strategy or risk limit change" |
| **Manufacturing** | "Like approving a production line change or supplier switch" |
| **Retail** | "Like approving a pricing change or inventory reorder" |
| **Government** | "Like approving a policy clarification or budget reallocation" |

### Question 6: "Do you delegate decisions to the person closest to the problem?"

| Industry | Context Example |
|----------|-----------------|
| **Healthcare** | "Nurses making care decisions vs. waiting for physician sign-off" |
| **Technology** | "Engineers choosing technical approach vs. architecture review board" |
| **Finance** | "Traders adjusting positions vs. risk committee approval" |
| **Manufacturing** | "Floor supervisors stopping the line vs. management escalation" |
| **Retail** | "Store managers adjusting displays vs. corporate approval" |
| **Government** | "Field officers making calls vs. headquarters clearance" |

### Question 11: "Can you ship improvements without anyone else's approval?"

| Industry | Context Example |
|----------|-----------------|
| **Healthcare** | "Updating a patient education handout or care pathway" |
| **Technology** | "Deploying a bug fix or UI improvement" |
| **Finance** | "Adjusting a client report format or internal dashboard" |
| **Manufacturing** | "Tweaking a process parameter or quality check" |
| **Retail** | "Changing store layout or promotional signage" |
| **Government** | "Updating a form or internal procedure" |

### Question 21: "Do you talk to customers who've canceled or chosen competitors?"

| Industry | Context Example |
|----------|-----------------|
| **Healthcare** | "Patients who switched providers or left AMA" |
| **Technology** | "Users who churned or chose a competitor" |
| **Finance** | "Clients who moved assets elsewhere" |
| **Manufacturing** | "Buyers who switched suppliers" |
| **Retail** | "Shoppers who stopped coming" |
| **Government** | "Citizens who moved or stopped using services" |

---

## UI Implementation

### Option A: Inline Context (Recommended)

```
┌─────────────────────────────────────────────────────────┐
│  DECISION SPEED                                          │
│                                                          │
│  Do most decisions happen within 24 hours               │
│  of being raised?                                        │
│                                                          │
│  ┌─────────────────────────────────────────────────┐    │
│  │ 💡 In healthcare: Like approving a treatment     │    │
│  │    protocol change or staffing adjustment        │    │
│  └─────────────────────────────────────────────────┘    │
│                                                          │
│     [ YES ]              [ NO ]                          │
└─────────────────────────────────────────────────────────┘
```

### Option B: Expandable Examples

```
┌─────────────────────────────────────────────────────────┐
│  DECISION SPEED                                          │
│                                                          │
│  Do most decisions happen within 24 hours               │
│  of being raised?                                        │
│                                                          │
│  [▼ See example for Healthcare]                          │
│                                                          │
│     [ YES ]              [ NO ]                          │
└─────────────────────────────────────────────────────────┘
```

---

## Results Enhancement

### 1. Industry Benchmark Comparison (Already Exists)
Keep the current percentile comparison.

### 2. Add Industry-Specific Case Studies

After showing dimension breakdown, add:

```
┌─────────────────────────────────────────────────────────┐
│  FROM YOUR INDUSTRY                                      │
│                                                          │
│  ┌───────────────────────────────────────────────────┐  │
│  │ 🏥 Cleveland Clinic                                │  │
│  │ GPI: 4.2 (Transitioning)                          │  │
│  │                                                    │  │
│  │ How they reduced Decision Latency from 7 to 4:    │  │
│  │ Moved care decisions to bedside nurses with       │  │
│  │ real-time protocol access...                      │  │
│  │                                                    │  │
│  │ [READ ANALYSIS →]                                 │  │
│  └───────────────────────────────────────────────────┘  │
│                                                          │
│  ┌───────────────────────────────────────────────────┐  │
│  │ 🏥 Kaiser Permanente                              │  │
│  │ GPI: 5.8 (Transitioning)                          │  │
│  │                                                    │  │
│  │ Their structural lock-in challenge:               │  │
│  │ Legacy EMR systems create 3-day delays...         │  │
│  │                                                    │  │
│  │ [READ ANALYSIS →]                                 │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### 3. Industry-Specific Action Recommendations

For the "START HERE" section, add industry context:

```
┌─────────────────────────────────────────────────────────┐
│  START HERE                                              │
│                                                          │
│  Decision Speed (Score: 7.2)                            │
│  Your highest friction dimension.                        │
│                                                          │
│  In Healthcare, this often shows up as:                  │
│  • Prior authorization delays                            │
│  • Committee-based clinical decisions                    │
│  • Multi-layer approval for care changes                │
│                                                          │
│  [ VIEW HEALTHCARE ACTION GUIDE ]                        │
└─────────────────────────────────────────────────────────┘
```

---

## Full Example Mapping (First 10 Questions)

```typescript
const industryExamples: QuestionExamples = {
  1: { // "Did you make a significant decision this week without seeking external validation?"
    healthcare: { context: "Like changing a care protocol or adjusting staffing" },
    technology: { context: "Like choosing a technical approach or killing a feature" },
    finance: { context: "Like adjusting portfolio allocation or risk limits" },
    manufacturing: { context: "Like changing a supplier or process parameter" },
    retail: { context: "Like adjusting inventory levels or store layout" },
  },

  2: { // "When faced with decisions, do you force them into YES/NO rather than maybe/later?"
    healthcare: { context: "Treatment decisions, not 'let's monitor'" },
    technology: { context: "Ship or kill, not 'needs more research'" },
    finance: { context: "Buy/sell/hold, not 'wait for more data'" },
    manufacturing: { context: "Go/no-go, not 'pending review'" },
    retail: { context: "Stock it or drop it, not 'let's see'" },
  },

  3: { // "Do most decisions happen within 24 hours of being raised?"
    healthcare: { context: "Protocol changes, staffing adjustments, care escalations" },
    technology: { context: "Feature specs, bug prioritization, architecture choices" },
    finance: { context: "Trade strategies, client requests, risk adjustments" },
    manufacturing: { context: "Line changes, quality holds, supplier issues" },
    retail: { context: "Pricing changes, display updates, inventory reorders" },
  },

  4: { // "Have you killed or reversed a decision this month when evidence changed?"
    healthcare: { context: "Changed treatment approach when patient responded differently" },
    technology: { context: "Pivoted feature direction based on user feedback" },
    finance: { context: "Exited position when thesis broke down" },
    manufacturing: { context: "Stopped production when defect rate spiked" },
    retail: { context: "Pulled promotion when it cannibalized margins" },
  },

  5: { // "Do you make decisions with incomplete information rather than waiting for certainty?"
    healthcare: { context: "Acting on symptoms before full diagnosis" },
    technology: { context: "Shipping MVP before perfect specs" },
    finance: { context: "Trading on thesis before all data confirms" },
    manufacturing: { context: "Adjusting process before root cause analysis" },
    retail: { context: "Testing price before full market research" },
  },

  6: { // "Do you delegate decisions to the person closest to the problem?"
    healthcare: { context: "Nurses making care calls vs. waiting for physicians" },
    technology: { context: "Engineers choosing approach vs. architecture board" },
    finance: { context: "Traders adjusting vs. risk committee" },
    manufacturing: { context: "Floor supervisors stopping line vs. escalation" },
    retail: { context: "Store managers adjusting vs. corporate approval" },
  },

  7: { // "When you change your mind, do you examine what bias led you astray?"
    healthcare: { context: "Why did we miss that diagnosis? What assumption failed?" },
    technology: { context: "Why did we build the wrong thing? What signal did we ignore?" },
    finance: { context: "Why did the trade fail? What did we misread?" },
    manufacturing: { context: "Why did quality slip? What did we not see?" },
    retail: { context: "Why did the promotion fail? What did customers actually want?" },
  },

  8: { // "Do you regularly revisit and kill decisions that no longer serve you?"
    healthcare: { context: "Sunsetting outdated protocols, stopping ineffective treatments" },
    technology: { context: "Killing zombie features, retiring technical debt" },
    finance: { context: "Closing underperforming positions, exiting bad investments" },
    manufacturing: { context: "Discontinuing low-margin products, ending supplier contracts" },
    retail: { context: "Dropping slow SKUs, closing underperforming locations" },
  },

  9: { // "Did you spend more time building than planning this week?"
    healthcare: { context: "Treating patients vs. attending planning meetings" },
    technology: { context: "Writing code vs. writing specs" },
    finance: { context: "Executing trades vs. building models" },
    manufacturing: { context: "Running production vs. process documentation" },
    retail: { context: "Serving customers vs. planning sessions" },
  },

  10: { // "Did you ship something visible to users this week?"
    healthcare: { context: "New patient service, care improvement, visible change" },
    technology: { context: "Feature, fix, or improvement users can see" },
    finance: { context: "New report, improved service, visible client benefit" },
    manufacturing: { context: "Product improvement, quality upgrade, visible change" },
    retail: { context: "New display, service improvement, customer-facing change" },
  },
};
```

---

## Implementation Steps

### Phase 1: Add Examples Data (1-2 hours)
1. Create `lib/gpi-industry-examples.ts`
2. Map all 32 questions to 6-8 industry examples each
3. Export function: `getQuestionExample(questionId, industry)`

### Phase 2: Update Question UI (1 hour)
1. Add example display below question text
2. Style as subtle hint box (not overwhelming)
3. Only show if example exists for selected industry

### Phase 3: Enhance Results (2 hours)
1. Query GPI Analyses for same-industry companies
2. Display 2-3 relevant case studies in results
3. Add industry-specific context to action recommendations

### Phase 4: Industry-Specific Action Guides (Future)
1. Create `/actions/[dimension]/[industry]` routes
2. Industry-specific examples and tactics
3. Link from results page

---

## What This Does NOT Change

- The 32 questions remain identical
- The scoring algorithm stays the same
- The 7 dimensions are unchanged
- Cross-industry comparisons still work
- The framework's universality is preserved

## What This DOES Change

- Questions feel more relevant to each industry
- Users see themselves in the examples
- Results connect to industry-specific case studies
- Action recommendations feel tailored
- Higher completion rates (hypothesis)
- Better lead qualification (we know their industry deeply)

---

## Alternative: Industry-Specific Deep Dives

Instead of adapting ALL questions, add 5 industry-specific questions at the end:

```
UNIVERSAL QUESTIONS (1-32)
↓
INDUSTRY DEEP DIVE (33-37)
- Healthcare: Prior auth, EMR friction, care coordination, staffing, compliance
- Technology: Deploy frequency, tech debt, on-call, incident response, feature kill rate
- Finance: Trading latency, compliance overhead, client reporting, risk escalation, audit friction
```

This is more work but provides richer industry-specific data.

---

## Recommendation

**Start with Phase 1 + 2** (inline examples).

This gives 80% of the benefit with 20% of the effort. The examples make questions feel relevant without changing the core diagnostic.

If engagement data shows this works, proceed to Phase 3 and 4.
