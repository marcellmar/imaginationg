/**
 * Industry-specific examples for GPI diagnostic questions
 *
 * These provide context without changing the universal questions.
 * The core question stays the same - we just add a relevant example.
 */

export type IndustryKey =
  | 'Technology/Software'
  | 'Healthcare/Medical'
  | 'Banking/Finance'
  | 'Manufacturing'
  | 'Retail/E-commerce'
  | 'Professional Services'
  | 'Government/Public Sector'
  | 'Energy/Utilities'
  | 'Education'
  | 'Media/Entertainment';

interface IndustryExample {
  context: string;
}

type QuestionExamples = {
  [questionId: number]: Partial<Record<IndustryKey, IndustryExample>>;
};

export const industryExamples: QuestionExamples = {
  // Q1: "Did you make a significant decision this week without seeking external validation?"
  1: {
    'Healthcare/Medical': { context: 'Like adjusting a care protocol or changing staffing levels' },
    'Technology/Software': { context: 'Like choosing a technical approach or killing a feature' },
    'Banking/Finance': { context: 'Like adjusting risk limits or changing investment strategy' },
    'Manufacturing': { context: 'Like switching suppliers or changing production parameters' },
    'Retail/E-commerce': { context: 'Like adjusting inventory levels or changing pricing' },
    'Government/Public Sector': { context: 'Like reallocating budget or changing a procedure' },
    'Professional Services': { context: 'Like changing a client approach or adjusting project scope' },
    'Energy/Utilities': { context: 'Like rerouting power loads or adjusting maintenance schedules' },
    'Education': { context: 'Like modifying curriculum delivery or adjusting class schedules' },
    'Media/Entertainment': { context: 'Like changing content direction or adjusting release timing' },
  },

  // Q2: "When faced with decisions, do you force them into YES/NO rather than maybe/later?"
  2: {
    'Healthcare/Medical': { context: 'Treatment decisions become "treat now" or "discharge," not "monitor"' },
    'Technology/Software': { context: 'Features become "ship" or "kill," not "needs more research"' },
    'Banking/Finance': { context: 'Positions become "buy/sell/hold," not "wait for more data"' },
    'Manufacturing': { context: 'Changes become "go/no-go," not "pending review"' },
    'Retail/E-commerce': { context: 'Products become "stock it" or "drop it," not "let\'s see"' },
    'Professional Services': { context: 'Projects become "do it" or "decline," not "maybe later"' },
    'Government/Public Sector': { context: 'Initiatives become "approve" or "reject," not "under consideration"' },
    'Energy/Utilities': { context: 'Investments become "proceed" or "cancel," not "pending analysis"' },
    'Education': { context: 'Programs become "implement" or "discontinue," not "pilot indefinitely"' },
    'Media/Entertainment': { context: 'Projects become "greenlight" or "pass," not "in development"' },
  },

  // Q3: "Do most decisions happen within 24 hours of being raised?"
  3: {
    'Healthcare/Medical': { context: 'Protocol changes, staffing adjustments, care escalations' },
    'Technology/Software': { context: 'Feature specs, bug prioritization, architecture choices' },
    'Banking/Finance': { context: 'Trade strategies, client requests, risk adjustments' },
    'Manufacturing': { context: 'Line changes, quality holds, supplier issues' },
    'Retail/E-commerce': { context: 'Pricing changes, display updates, inventory reorders' },
    'Government/Public Sector': { context: 'Policy clarifications, resource requests, escalations' },
    'Professional Services': { context: 'Client requests, project changes, resource allocation' },
    'Energy/Utilities': { context: 'Outage responses, maintenance priorities, safety calls' },
    'Education': { context: 'Student issues, schedule changes, resource requests' },
    'Media/Entertainment': { context: 'Content changes, talent decisions, production adjustments' },
  },

  // Q4: "Have you killed or reversed a decision this month when evidence changed?"
  4: {
    'Healthcare/Medical': { context: 'Changed treatment when patient responded differently than expected' },
    'Technology/Software': { context: 'Pivoted feature direction based on user feedback' },
    'Banking/Finance': { context: 'Exited a position when your thesis broke down' },
    'Manufacturing': { context: 'Stopped production when defect rate spiked' },
    'Retail/E-commerce': { context: 'Pulled a promotion when it cannibalized margins' },
    'Professional Services': { context: 'Changed project approach when client needs shifted' },
    'Government/Public Sector': { context: 'Adjusted policy when implementation data showed problems' },
    'Energy/Utilities': { context: 'Changed maintenance plan when equipment data showed new patterns' },
    'Education': { context: 'Modified teaching approach when student outcomes diverged' },
    'Media/Entertainment': { context: 'Recut content when audience testing showed different preferences' },
  },

  // Q5: "Do you make decisions with incomplete information rather than waiting for certainty?"
  5: {
    'Healthcare/Medical': { context: 'Acting on symptoms before full workup completes' },
    'Technology/Software': { context: 'Shipping MVP before perfect specifications' },
    'Banking/Finance': { context: 'Taking position before all data confirms thesis' },
    'Manufacturing': { context: 'Adjusting process before root cause analysis finishes' },
    'Retail/E-commerce': { context: 'Testing price changes before full market research' },
    'Professional Services': { context: 'Starting projects before perfect scope definition' },
    'Government/Public Sector': { context: 'Implementing policy before complete impact studies' },
    'Energy/Utilities': { context: 'Making grid decisions before all sensors report' },
    'Education': { context: 'Trying new approaches before longitudinal studies complete' },
    'Media/Entertainment': { context: 'Greenlighting content before comprehensive market analysis' },
  },

  // Q6: "Do you delegate decisions to the person closest to the problem?"
  6: {
    'Healthcare/Medical': { context: 'Nurses making care calls vs. waiting for physician sign-off' },
    'Technology/Software': { context: 'Engineers choosing approach vs. architecture review board' },
    'Banking/Finance': { context: 'Traders adjusting positions vs. risk committee approval' },
    'Manufacturing': { context: 'Floor supervisors stopping line vs. management escalation' },
    'Retail/E-commerce': { context: 'Store managers adjusting displays vs. corporate approval' },
    'Government/Public Sector': { context: 'Field officers making calls vs. headquarters clearance' },
    'Professional Services': { context: 'Consultants adapting approach vs. partner sign-off' },
    'Energy/Utilities': { context: 'Field technicians making repairs vs. dispatch approval' },
    'Education': { context: 'Teachers adjusting lessons vs. department approval' },
    'Media/Entertainment': { context: 'Directors making creative calls vs. executive review' },
  },

  // Q7: "When you change your mind, do you examine what bias led you astray?"
  7: {
    'Healthcare/Medical': { context: 'Why did we miss that diagnosis? What assumption failed?' },
    'Technology/Software': { context: 'Why did we build the wrong thing? What signal did we ignore?' },
    'Banking/Finance': { context: 'Why did the trade fail? What did we misread?' },
    'Manufacturing': { context: 'Why did quality slip? What did we not see?' },
    'Retail/E-commerce': { context: 'Why did the promotion fail? What did customers actually want?' },
    'Professional Services': { context: 'Why did the engagement go wrong? What did we assume incorrectly?' },
    'Government/Public Sector': { context: 'Why did the policy backfire? What stakeholder did we miss?' },
    'Energy/Utilities': { context: 'Why did the forecast fail? What variable did we overlook?' },
    'Education': { context: 'Why did students struggle? What learning need did we miss?' },
    'Media/Entertainment': { context: 'Why did the show fail? What audience signal did we misread?' },
  },

  // Q8: "Do you regularly revisit and kill decisions that no longer serve you?"
  8: {
    'Healthcare/Medical': { context: 'Sunsetting outdated protocols, stopping ineffective treatments' },
    'Technology/Software': { context: 'Killing zombie features, retiring technical debt' },
    'Banking/Finance': { context: 'Closing underperforming positions, exiting bad investments' },
    'Manufacturing': { context: 'Discontinuing low-margin products, ending supplier contracts' },
    'Retail/E-commerce': { context: 'Dropping slow SKUs, closing underperforming locations' },
    'Professional Services': { context: 'Ending unprofitable service lines, firing bad-fit clients' },
    'Government/Public Sector': { context: 'Sunsetting programs that no longer serve their purpose' },
    'Energy/Utilities': { context: 'Decommissioning inefficient plants, ending legacy contracts' },
    'Education': { context: 'Discontinuing courses with low enrollment or poor outcomes' },
    'Media/Entertainment': { context: 'Canceling underperforming shows, ending franchise commitments' },
  },

  // Q9: "Did you spend more time building than planning this week?"
  9: {
    'Healthcare/Medical': { context: 'Treating patients vs. attending planning meetings' },
    'Technology/Software': { context: 'Writing code vs. writing specs' },
    'Banking/Finance': { context: 'Executing trades vs. building models' },
    'Manufacturing': { context: 'Running production vs. process documentation' },
    'Retail/E-commerce': { context: 'Serving customers vs. planning sessions' },
    'Professional Services': { context: 'Delivering client work vs. internal meetings' },
    'Government/Public Sector': { context: 'Implementing programs vs. writing proposals' },
    'Energy/Utilities': { context: 'Operating facilities vs. planning reviews' },
    'Education': { context: 'Teaching students vs. curriculum committees' },
    'Media/Entertainment': { context: 'Creating content vs. development meetings' },
  },

  // Q10: "Did you ship something visible to users this week?"
  10: {
    'Healthcare/Medical': { context: 'New patient service, care improvement, or workflow change' },
    'Technology/Software': { context: 'Feature, bug fix, or improvement users can see' },
    'Banking/Finance': { context: 'New report, dashboard, or client-facing service' },
    'Manufacturing': { context: 'Product improvement or quality upgrade' },
    'Retail/E-commerce': { context: 'New display, service improvement, or site change' },
    'Professional Services': { context: 'Deliverable, presentation, or client-facing work product' },
    'Government/Public Sector': { context: 'New service, form improvement, or public communication' },
    'Energy/Utilities': { context: 'Service improvement, reliability upgrade, or customer tool' },
    'Education': { context: 'New course material, student resource, or program improvement' },
    'Media/Entertainment': { context: 'Released content, published article, or launched campaign' },
  },

  // Q11: "Can you ship improvements without anyone else's approval?"
  11: {
    'Healthcare/Medical': { context: 'Updating a care pathway or patient education material' },
    'Technology/Software': { context: 'Deploying a bug fix or UI improvement' },
    'Banking/Finance': { context: 'Adjusting a client report or internal dashboard' },
    'Manufacturing': { context: 'Tweaking a process parameter or quality check' },
    'Retail/E-commerce': { context: 'Changing store layout or promotional signage' },
    'Government/Public Sector': { context: 'Updating a form or internal procedure' },
    'Professional Services': { context: 'Improving a template or internal process' },
    'Energy/Utilities': { context: 'Adjusting an operational parameter or maintenance schedule' },
    'Education': { context: 'Updating a lesson plan or student resource' },
    'Media/Entertainment': { context: 'Publishing a post or making a minor content update' },
  },

  // Q12: "Are you moving faster now than 3 months ago?"
  12: {
    'Healthcare/Medical': { context: 'Faster patient throughput, quicker protocol updates' },
    'Technology/Software': { context: 'Faster deploy cycles, quicker feature iteration' },
    'Banking/Finance': { context: 'Faster trade execution, quicker client response' },
    'Manufacturing': { context: 'Faster production cycles, quicker changeovers' },
    'Retail/E-commerce': { context: 'Faster inventory turns, quicker promotions launch' },
    'Professional Services': { context: 'Faster project delivery, quicker client onboarding' },
    'Government/Public Sector': { context: 'Faster permit processing, quicker service delivery' },
    'Energy/Utilities': { context: 'Faster outage response, quicker project completion' },
    'Education': { context: 'Faster curriculum updates, quicker student feedback' },
    'Media/Entertainment': { context: 'Faster content production, quicker publication cycles' },
  },

  // Q13: "Do you ship smaller versions rather than waiting for the full vision?"
  13: {
    'Healthcare/Medical': { context: 'Piloting protocols on one unit before hospital-wide rollout' },
    'Technology/Software': { context: 'Releasing beta features before polished versions' },
    'Banking/Finance': { context: 'Testing strategies with small positions before scaling' },
    'Manufacturing': { context: 'Running small batches before full production' },
    'Retail/E-commerce': { context: 'Testing in select stores before chain-wide rollout' },
    'Professional Services': { context: 'Delivering phase 1 before complete solution' },
    'Government/Public Sector': { context: 'Piloting in one region before national deployment' },
    'Energy/Utilities': { context: 'Testing on one site before fleet-wide implementation' },
    'Education': { context: 'Testing with one class before department adoption' },
    'Media/Entertainment': { context: 'Soft launching content before major release' },
  },

  // Q14: "Do you get real user feedback within 48 hours of shipping?"
  14: {
    'Healthcare/Medical': { context: 'Patient feedback on new services or care changes' },
    'Technology/Software': { context: 'User analytics, support tickets, or direct feedback' },
    'Banking/Finance': { context: 'Client reactions to new reports or services' },
    'Manufacturing': { context: 'Quality data or customer complaints on changes' },
    'Retail/E-commerce': { context: 'Customer feedback on new products or store changes' },
    'Professional Services': { context: 'Client reactions to deliverables and presentations' },
    'Government/Public Sector': { context: 'Citizen feedback on new services or changes' },
    'Energy/Utilities': { context: 'Customer reactions to service changes or new tools' },
    'Education': { context: 'Student feedback on new materials or approaches' },
    'Media/Entertainment': { context: 'Audience metrics and reactions to new content' },
  },

  // Q15: "Can you implement feedback and ship improvements within a week?"
  15: {
    'Healthcare/Medical': { context: 'Adjusting care protocols based on patient outcomes' },
    'Technology/Software': { context: 'Pushing fixes based on user bug reports' },
    'Banking/Finance': { context: 'Modifying reports based on client requests' },
    'Manufacturing': { context: 'Adjusting processes based on quality feedback' },
    'Retail/E-commerce': { context: 'Changing displays based on sales data' },
    'Professional Services': { context: 'Revising deliverables based on client input' },
    'Government/Public Sector': { context: 'Updating procedures based on user complaints' },
    'Energy/Utilities': { context: 'Adjusting operations based on performance data' },
    'Education': { context: 'Modifying lessons based on student questions' },
    'Media/Entertainment': { context: 'Adjusting content based on audience engagement' },
  },

  // Q16: "Do you regularly kill features that aren't working?"
  16: {
    'Healthcare/Medical': { context: 'Discontinuing treatments that show poor outcomes' },
    'Technology/Software': { context: 'Removing features users ignore or complain about' },
    'Banking/Finance': { context: 'Closing products with poor uptake' },
    'Manufacturing': { context: 'Discontinuing product variations nobody buys' },
    'Retail/E-commerce': { context: 'Dropping services customers do not use' },
    'Professional Services': { context: 'Ending service offerings with no demand' },
    'Government/Public Sector': { context: 'Sunsetting programs with poor utilization' },
    'Energy/Utilities': { context: 'Retiring initiatives that fail to deliver ROI' },
    'Education': { context: 'Ending programs with low enrollment or poor outcomes' },
    'Media/Entertainment': { context: 'Canceling shows or formats that do not perform' },
  },

  // Q17: "Have you challenged a core assumption about your business this month?"
  17: {
    'Healthcare/Medical': { context: 'Questioning standard protocols or care delivery models' },
    'Technology/Software': { context: 'Questioning core architecture or product strategy' },
    'Banking/Finance': { context: 'Questioning investment thesis or risk models' },
    'Manufacturing': { context: 'Questioning production methods or supply chain' },
    'Retail/E-commerce': { context: 'Questioning customer segments or channel strategy' },
    'Professional Services': { context: 'Questioning billing model or service delivery approach' },
    'Government/Public Sector': { context: 'Questioning program design or service delivery model' },
    'Energy/Utilities': { context: 'Questioning infrastructure investments or generation mix' },
    'Education': { context: 'Questioning teaching methods or program structure' },
    'Media/Entertainment': { context: 'Questioning content strategy or distribution model' },
  },

  // Q18: "Did you have a productive disagreement that led to clarity this week?"
  18: {
    'Healthcare/Medical': { context: 'Clinicians debating treatment approach and reaching consensus' },
    'Technology/Software': { context: 'Engineers arguing architecture and finding better solution' },
    'Banking/Finance': { context: 'Traders debating thesis and sharpening strategy' },
    'Manufacturing': { context: 'Teams debating process change and improving plan' },
    'Retail/E-commerce': { context: 'Merchandising debating assortment and clarifying strategy' },
    'Professional Services': { context: 'Team debating approach and improving methodology' },
    'Government/Public Sector': { context: 'Staff debating policy and improving implementation' },
    'Energy/Utilities': { context: 'Engineers debating design and improving solution' },
    'Education': { context: 'Faculty debating curriculum and improving program' },
    'Media/Entertainment': { context: 'Creative teams debating direction and improving content' },
  },

  // Q19: "Can you explain your business model in one sentence?"
  19: {
    'Healthcare/Medical': { context: 'How you create value for patients and get paid for it' },
    'Technology/Software': { context: 'What problem you solve and who pays for the solution' },
    'Banking/Finance': { context: 'How you make money and for whom you create value' },
    'Manufacturing': { context: 'What you make, for whom, and why they choose you' },
    'Retail/E-commerce': { context: 'What you sell, to whom, and why they buy from you' },
    'Professional Services': { context: 'What expertise you provide and who pays for it' },
    'Government/Public Sector': { context: 'What service you provide and how it creates public value' },
    'Energy/Utilities': { context: 'What service you deliver and how you sustain operations' },
    'Education': { context: 'What outcomes you deliver and how they are funded' },
    'Media/Entertainment': { context: 'What content you create and how it generates revenue' },
  },

  // Q20: "Are you profitable or have a clear path within 12 months?"
  20: {
    'Healthcare/Medical': { context: 'Unit economics work or have a clear path to sustainability' },
    'Technology/Software': { context: 'Revenue exceeds burn or runway is clear' },
    'Banking/Finance': { context: 'Returns exceed cost of capital or path is visible' },
    'Manufacturing': { context: 'Margins cover overhead or improvement plan is clear' },
    'Retail/E-commerce': { context: 'Sales cover costs or growth plan changes economics' },
    'Professional Services': { context: 'Utilization supports profitability or pipeline changes math' },
    'Government/Public Sector': { context: 'Budget covers operations or funding path is secured' },
    'Energy/Utilities': { context: 'Rates cover costs or regulatory path is clear' },
    'Education': { context: 'Tuition and funding cover costs or growth changes economics' },
    'Media/Entertainment': { context: 'Revenue exceeds production costs or scale changes math' },
  },

  // Q21: "Do you talk to customers who've canceled or chosen competitors?"
  21: {
    'Healthcare/Medical': { context: 'Patients who switched providers or left against advice' },
    'Technology/Software': { context: 'Users who churned or chose a competitor' },
    'Banking/Finance': { context: 'Clients who moved assets to another firm' },
    'Manufacturing': { context: 'Buyers who switched to other suppliers' },
    'Retail/E-commerce': { context: 'Shoppers who stopped coming or went elsewhere' },
    'Professional Services': { context: 'Clients who ended engagements or chose other firms' },
    'Government/Public Sector': { context: 'Citizens who stopped using services or moved away' },
    'Energy/Utilities': { context: 'Customers who switched providers or reduced usage' },
    'Education': { context: 'Students who transferred or chose other programs' },
    'Media/Entertainment': { context: 'Audiences who unsubscribed or chose competitors' },
  },

  // Q22: "Do you know your real unit economics and customer lifetime value?"
  22: {
    'Healthcare/Medical': { context: 'Cost per patient encounter and lifetime patient value' },
    'Technology/Software': { context: 'Customer acquisition cost vs. lifetime value' },
    'Banking/Finance': { context: 'Cost to acquire and serve vs. client lifetime revenue' },
    'Manufacturing': { context: 'True cost per unit including overhead allocation' },
    'Retail/E-commerce': { context: 'Cost per transaction and customer repeat purchase value' },
    'Professional Services': { context: 'Cost per engagement and client lifetime billings' },
    'Government/Public Sector': { context: 'Cost per service delivered and citizen lifetime usage' },
    'Energy/Utilities': { context: 'Cost to serve each customer and lifetime usage value' },
    'Education': { context: 'Cost per student and lifetime alumni value' },
    'Media/Entertainment': { context: 'Content cost vs. subscriber lifetime value' },
  },

  // Q23: "Do team members openly disagree with you in meetings?"
  23: {
    'Healthcare/Medical': { context: 'Nurses questioning physician orders, techs flagging issues' },
    'Technology/Software': { context: 'Engineers pushing back on product decisions' },
    'Banking/Finance': { context: 'Analysts challenging senior trader assumptions' },
    'Manufacturing': { context: 'Floor workers questioning management decisions' },
    'Retail/E-commerce': { context: 'Store staff challenging corporate directives' },
    'Professional Services': { context: 'Junior staff challenging partner recommendations' },
    'Government/Public Sector': { context: 'Staff questioning leadership decisions' },
    'Energy/Utilities': { context: 'Operators challenging engineering assumptions' },
    'Education': { context: 'Teachers challenging administration decisions' },
    'Media/Entertainment': { context: 'Creative staff challenging executive direction' },
  },

  // Q24: "Do you study what competitors do better than you?"
  24: {
    'Healthcare/Medical': { context: 'How other providers achieve better outcomes or efficiency' },
    'Technology/Software': { context: 'Features or UX where competitors excel' },
    'Banking/Finance': { context: 'Products or services where competitors win business' },
    'Manufacturing': { context: 'Quality or cost areas where competitors outperform' },
    'Retail/E-commerce': { context: 'Experience or assortment where competitors win customers' },
    'Professional Services': { context: 'Methodologies or pricing where competitors win deals' },
    'Government/Public Sector': { context: 'Services where other agencies perform better' },
    'Energy/Utilities': { context: 'Reliability or cost areas where peers outperform' },
    'Education': { context: 'Programs or outcomes where competitors attract students' },
    'Media/Entertainment': { context: 'Content or experience where competitors win audiences' },
  },

  // Q25: "Did your last 3 meetings result in immediate actions?"
  25: {
    'Healthcare/Medical': { context: 'Care conferences, rounds, or team huddles' },
    'Technology/Software': { context: 'Standups, planning sessions, or reviews' },
    'Banking/Finance': { context: 'Trading meetings, risk reviews, or client calls' },
    'Manufacturing': { context: 'Production meetings, quality reviews, or shift handoffs' },
    'Retail/E-commerce': { context: 'Store meetings, inventory reviews, or team huddles' },
    'Professional Services': { context: 'Client meetings, project reviews, or team syncs' },
    'Government/Public Sector': { context: 'Staff meetings, briefings, or planning sessions' },
    'Energy/Utilities': { context: 'Operations meetings, safety briefings, or planning sessions' },
    'Education': { context: 'Department meetings, faculty councils, or team huddles' },
    'Media/Entertainment': { context: 'Production meetings, creative reviews, or planning sessions' },
  },

  // Q26: "Do you feel energized after working on core activities?"
  26: {
    'Healthcare/Medical': { context: 'Direct patient care vs. administrative burden' },
    'Technology/Software': { context: 'Building product vs. meetings and reporting' },
    'Banking/Finance': { context: 'Client work and analysis vs. compliance paperwork' },
    'Manufacturing': { context: 'Production and quality work vs. bureaucracy' },
    'Retail/E-commerce': { context: 'Serving customers vs. corporate reporting' },
    'Professional Services': { context: 'Client delivery vs. internal administration' },
    'Government/Public Sector': { context: 'Public service vs. bureaucratic process' },
    'Energy/Utilities': { context: 'Operations and reliability vs. regulatory paperwork' },
    'Education': { context: 'Teaching and student interaction vs. administrative tasks' },
    'Media/Entertainment': { context: 'Creating content vs. approvals and meetings' },
  },

  // Q27: "Are your processes helping you move faster?"
  27: {
    'Healthcare/Medical': { context: 'EMR workflows, care protocols, compliance procedures' },
    'Technology/Software': { context: 'CI/CD pipelines, code review, deploy processes' },
    'Banking/Finance': { context: 'Trading systems, compliance checks, reporting workflows' },
    'Manufacturing': { context: 'Production processes, quality systems, supply chain procedures' },
    'Retail/E-commerce': { context: 'Inventory systems, POS processes, returns workflows' },
    'Government/Public Sector': { context: 'Approval workflows, documentation requirements, audit processes' },
    'Professional Services': { context: 'Project management, quality review, billing processes' },
    'Energy/Utilities': { context: 'Operations procedures, safety systems, maintenance workflows' },
    'Education': { context: 'Grading systems, enrollment processes, curriculum approval' },
    'Media/Entertainment': { context: 'Production workflows, approval processes, distribution systems' },
  },

  // Q28: "Do you match tasks to people's natural problem-solving styles?"
  28: {
    'Healthcare/Medical': { context: 'Matching clinicians to cases that fit their strengths' },
    'Technology/Software': { context: 'Matching engineers to problems that fit their skills' },
    'Banking/Finance': { context: 'Matching analysts to deals that fit their expertise' },
    'Manufacturing': { context: 'Matching workers to tasks that fit their capabilities' },
    'Retail/E-commerce': { context: 'Matching staff to roles that fit their strengths' },
    'Professional Services': { context: 'Matching consultants to engagements that fit their style' },
    'Government/Public Sector': { context: 'Matching staff to assignments that fit their abilities' },
    'Energy/Utilities': { context: 'Matching technicians to problems that fit their expertise' },
    'Education': { context: 'Matching teachers to courses that fit their strengths' },
    'Media/Entertainment': { context: 'Matching creatives to projects that fit their talents' },
  },

  // Q29: "Do you default to async communication over meetings?"
  29: {
    'Healthcare/Medical': { context: 'Written handoffs and shared documentation vs. verbal huddles' },
    'Technology/Software': { context: 'Slack threads and docs vs. synchronous meetings' },
    'Banking/Finance': { context: 'Email and shared analysis vs. conference calls' },
    'Manufacturing': { context: 'Shift logs and dashboards vs. standing meetings' },
    'Retail/E-commerce': { context: 'Updates via systems vs. all-hands meetings' },
    'Professional Services': { context: 'Project updates via tools vs. status meetings' },
    'Government/Public Sector': { context: 'Memo and shared systems vs. briefings' },
    'Energy/Utilities': { context: 'Logs and monitoring vs. daily stand-ups' },
    'Education': { context: 'LMS updates and email vs. faculty meetings' },
    'Media/Entertainment': { context: 'Project management tools vs. production meetings' },
  },

  // Q30: "Do you automate repetitive tasks rather than hiring?"
  30: {
    'Healthcare/Medical': { context: 'Scheduling, billing, appointment reminders, data entry' },
    'Technology/Software': { context: 'Testing, deployment, monitoring, alerts' },
    'Banking/Finance': { context: 'Reconciliation, reporting, compliance checks' },
    'Manufacturing': { context: 'Quality inspection, inventory tracking, scheduling' },
    'Retail/E-commerce': { context: 'Reordering, pricing updates, customer service routing' },
    'Professional Services': { context: 'Time tracking, invoicing, document generation' },
    'Government/Public Sector': { context: 'Form processing, notifications, report generation' },
    'Energy/Utilities': { context: 'Meter reading, outage detection, billing' },
    'Education': { context: 'Grading, attendance, communication automation' },
    'Media/Entertainment': { context: 'Distribution, scheduling, analytics reporting' },
  },

  // Q31: "Do you measure leading indicators, not just lagging ones?"
  31: {
    'Healthcare/Medical': { context: 'Patient flow metrics vs. just readmission rates' },
    'Technology/Software': { context: 'User engagement vs. just revenue' },
    'Banking/Finance': { context: 'Pipeline and risk metrics vs. just returns' },
    'Manufacturing': { context: 'Process metrics vs. just defect rates' },
    'Retail/E-commerce': { context: 'Traffic and conversion vs. just sales' },
    'Professional Services': { context: 'Pipeline and utilization vs. just revenue' },
    'Government/Public Sector': { context: 'Service demand vs. just completion rates' },
    'Energy/Utilities': { context: 'Equipment health vs. just outage rates' },
    'Education': { context: 'Engagement metrics vs. just graduation rates' },
    'Media/Entertainment': { context: 'Engagement and sentiment vs. just ratings' },
  },

  // Q32: "Do you regularly remove systems that no longer serve you?"
  32: {
    'Healthcare/Medical': { context: 'Legacy EMR modules, outdated protocols, unused equipment' },
    'Technology/Software': { context: 'Zombie features, deprecated services, dead code' },
    'Banking/Finance': { context: 'Old reports nobody reads, legacy systems, redundant tools' },
    'Manufacturing': { context: 'Obsolete machines, unused processes, legacy suppliers' },
    'Retail/E-commerce': { context: 'Dead SKUs, unused displays, legacy POS features' },
    'Professional Services': { context: 'Outdated methodologies, unused templates, legacy tools' },
    'Government/Public Sector': { context: 'Obsolete forms, unused programs, legacy systems' },
    'Energy/Utilities': { context: 'Outdated equipment, unused procedures, legacy software' },
    'Education': { context: 'Outdated courses, unused materials, legacy systems' },
    'Media/Entertainment': { context: 'Dead formats, unused tools, legacy workflows' },
  },
};

/**
 * Get the industry-specific example for a question
 */
export function getQuestionExample(
  questionId: number,
  industry: string
): string | null {
  const hints: Record<number, string> = {
    1: 'who can make the call when the issue is live',
    2: 'where decisions wait because ownership is unclear',
    3: 'what level of spending turns into an approval event',
    4: 'how many people have to bless a normal call',
    5: 'what happens in the first day after something breaks',
    6: 'what meaningful work has actually been stopped or reversed',
    7: 'which protected project people quietly know is not working',
    8: 'how quickly new evidence changes the plan',
    9: 'where sunk cost keeps bad work alive',
    10: 'whether dissent arrives before the decision hardens',
    11: 'which knowledge would walk out with key operators',
    12: 'who learns about decisions too late',
    13: 'where the current way of working is written down or findable',
    14: 'who controls information other people need',
    15: 'whether frontline signal reaches leadership intact',
    16: 'whether bad news travels as quickly as good news',
    17: 'what the front line saw before leadership did',
    18: 'whether decision-makers see current reality',
    19: 'how long external shifts take to change priorities',
    20: 'whether strong people get moved to the hardest work',
    21: 'which role mismatch the system keeps tolerating',
    22: 'who left because useful work was too hard to do',
    23: 'what actually gets rewarded when people move up',
    24: 'what would have to change if reality forced a 90-day pivot',
    25: 'which process survives mostly from habit',
    26: 'which system or vendor now limits the next move',
    27: 'which meeting outlived its purpose',
    28: 'what happens when new work meets the old structure',
    29: 'whether spending protects future budget instead of current need',
    30: 'whether budget defense beats priority setting',
    31: 'which physical or contractual commitments force the next decision',
    32: 'where money, people, and attention are actually going',
  };

  const hint = hints[questionId];
  if (!hint) return null;
  return `In ${industry}, think about ${hint}.`;
}

/**
 * Check if an industry has examples available
 */
export function hasIndustryExamples(industry: string): boolean {
  return Object.values(industryExamples).some(
    (q) => q[industry as IndustryKey] !== undefined
  );
}
