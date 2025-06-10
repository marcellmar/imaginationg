import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import { ArrowRight, AlertCircle, Users, TrendingUp, Hammer, Check, ChevronLeft, ChevronDown, ChevronUp, RefreshCw } from 'lucide-react';

const StartPage = () => {
  const [currentStep, setCurrentStep] = useState<'problem-type' | 'questions' | 'results'>('problem-type');
  const [selectedProblemType, setSelectedProblemType] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [questionAnswers, setQuestionAnswers] = useState<Record<number, 'yes' | 'no'>>({});

  const problemTypes = [
    {
      id: 'truth-crisis',
      icon: AlertCircle,
      title: 'We\'re avoiding hard truths',
      description: 'Team knows what\'s wrong but won\'t say it. False harmony, analysis paralysis, or identity confusion.',
      examples: ['Founder identity crisis', 'Everyone agrees but nothing happens', 'Obvious problems ignored', 'Leadership credibility questioned'],
      preselectedFilters: ['founder-identity', 'team-harmony', 'pre-awareness', 'truth-seeking'],
      color: 'red'
    },
    {
      id: 'broken-connections',
      icon: Users,
      title: 'Our network isn\'t working',
      description: 'Key relationships are broken, partnerships failing, or we\'re isolated from opportunities.',
      examples: ['Partner relationships strained', 'No access to key decision makers', 'Network gaps blocking growth', 'Relationship maintenance failing'],
      preselectedFilters: ['network-mapping', 'relationship-health', 'partnership-strategy', 'connection-gaps'],
      color: 'purple'
    },
    {
      id: 'market-decision',
      icon: TrendingUp,
      title: 'Should we enter this market?',
      description: 'We have an opportunity but need brutal GO/NO-GO clarity with real market evidence.',
      examples: ['Market validation needed', 'Competitive landscape unclear', 'Resource allocation decision', 'Risk vs reward analysis'],
      preselectedFilters: ['market-reality', 'binary-decisions', 'competitive-analysis', 'speed-strategy'],
      color: 'green'
    },
    {
      id: 'stuck-patterns',
      icon: RefreshCw,
      title: 'We\'re stuck in bad patterns',
      description: 'Repeating the same dysfunction cycles. Team energy is drained, momentum is dead.',
      examples: ['Same problems recurring', 'Energy constantly drained', 'Process paralysis', 'Momentum loss cycles'],
      preselectedFilters: ['pattern-breaking', 'energy-drain', 'process-dysfunction', 'momentum-loss'],
      color: 'orange'
    },
    {
      id: 'need-to-ship',
      icon: Hammer,
      title: 'We need to ship an MVP',
      description: 'Too much planning, not enough building. Need to get working product in front of real users.',
      examples: ['MVP paralysis', 'Feature creep blocking launch', 'Planning addiction', 'Perfect vs done debate'],
      preselectedFilters: ['shipping-paralysis', 'mvp-building', 'perfectionism', 'execution-focus'],
      color: 'blue'
    }
  ];

  // Problem-specific diagnostic questions
  const problemSpecificQuestions = {
    'truth-crisis': [
      {
        id: 1,
        category: "TEAM DYNAMICS",
        title: "MEETING PRODUCTIVITY",
        question: "Do your team meetings end with clear decisions and immediate next actions?",
        yesText: "DECISIVE MEETINGS",
        yesSubtext: "Meetings drive action",
        noText: "DISCUSSION LOOPS",
        noSubtext: "Meetings without outcomes",
        filterId: "team-harmony",
        color: "red",
        diy: true
      },
      {
        id: 2,
        category: "TEAM DYNAMICS", 
        title: "CONFLICT AVOIDANCE",
        question: "Does your team openly disagree and debate different approaches?",
        yesText: "HEALTHY CONFLICT",
        yesSubtext: "Productive disagreement",
        noText: "FALSE HARMONY",
        noSubtext: "Everyone agrees superficially",
        filterId: "team-harmony",
        color: "red",
        diy: true
      },
      {
        id: 3,
        category: "TEAM DYNAMICS",
        title: "ROLE CONFUSION",
        question: "Does everyone on your team know exactly what they're responsible for?",
        yesText: "ROLES CLEAR",
        yesSubtext: "Everyone owns their lane",
        noText: "ROLE OVERLAP",
        noSubtext: "Confusion about ownership",
        filterId: "team-harmony",
        color: "red",
        diy: true
      },
      {
        id: 4,
        category: "EXECUTION BLOCKS",
        title: "PERFECTIONISM PARALYSIS",
        question: "Is your team waiting for the 'perfect' solution before taking action?",
        yesText: "PERFECTIONISM STUCK",
        yesSubtext: "Can't act without perfect plan",
        noText: "ACTION ORIENTED",
        noSubtext: "Good enough to start",
        filterId: "perfectionism",
        color: "red",
        diy: true
      },
      {
        id: 5,
        category: "EXECUTION BLOCKS",
        title: "DECISION SPEED",
        question: "Do decisions happen within 24 hours of being raised?",
        yesText: "FAST DECISIONS",
        yesSubtext: "Speed is your advantage",
        noText: "SLOW DECISIONS",
        noSubtext: "Everything takes forever",
        filterId: "speed-strategy",
        color: "green",
        diy: true
      },
      {
        id: 6,
        category: "EXECUTION BLOCKS",
        title: "SHIPPING FREQUENCY",
        question: "Did you ship something visible to users this week?",
        yesText: "SHIPPING MOMENTUM",
        yesSubtext: "Regular delivery rhythm",
        noText: "SHIPPING STUCK",
        noSubtext: "Nothing gets out the door",
        filterId: "ship-daily",
        color: "green",
        diy: true
      },
      {
        id: 7,
        category: "EXECUTION BLOCKS",
        title: "NEXEL MISALIGNMENT",
        question: "Are team members working against their natural problem-solving styles?",
        yesText: "NEXEL FIGHTING",
        yesSubtext: "Working against the grain",
        noText: "NEXEL ALIGNED",
        noSubtext: "Everyone in their zone",
        filterId: "nexel-aligned",
        color: "blue",
        diy: true
      },
      {
        id: 8,
        category: "EXECUTION BLOCKS",
        title: "PROCESS WEIGHT",
        question: "Are your processes helping you move faster rather than slowing you down?",
        yesText: "PROCESS ACCELERATES",
        yesSubtext: "Systems serve speed",
        noText: "PROCESS SLOWS",
        noSubtext: "Bureaucracy everywhere",
        filterId: "process-efficiency",
        color: "yellow",
        diy: true
      },
      {
        id: 9,
        category: "ENERGY PATTERNS",
        title: "DAILY ENERGY",
        question: "Do you finish most days feeling energized rather than drained?",
        yesText: "ENERGY POSITIVE",
        yesSubtext: "Work gives you energy",
        noText: "ENERGY DRAIN",
        noSubtext: "Something invisible drains you",
        filterId: "energy-drain",
        color: "yellow",
        diy: true
      },
      {
        id: 10,
        category: "ENERGY PATTERNS",
        title: "TASK MATCHING",
        question: "Are people doing work that naturally energizes them?",
        yesText: "NATURAL FIT",
        yesSubtext: "Right people, right tasks",
        noText: "FORCED FIT",
        noSubtext: "Square pegs, round holes",
        filterId: "nexel-aligned",
        color: "blue",
        diy: true
      },
      {
        id: 11,
        category: "AWARENESS LEVEL",
        title: "PATTERN RECOGNITION",
        question: "Can you clearly identify what specific pattern is keeping the team stuck?",
        yesText: "PATTERN CLEAR",
        yesSubtext: "Know what's blocking us",
        noText: "PATTERN UNCLEAR",
        noSubtext: "Something's wrong but unclear",
        filterId: "pre-awareness",
        color: "yellow",
        diy: true
      },
      {
        id: 12,
        category: "AWARENESS LEVEL",
        title: "PROBLEM OWNERSHIP",
        question: "Does everyone acknowledge there's a problem that needs fixing?",
        yesText: "PROBLEM ACKNOWLEDGED",
        yesSubtext: "Team sees the issue",
        noText: "PROBLEM DENIED",
        noSubtext: "Everything is 'fine'",
        filterId: "pre-awareness",
        color: "yellow",
        diy: true
      }
    ],
    'broken-connections': [
      {
        id: 1,
        category: "LEADERSHIP CLARITY",
        title: "FOUNDER IDENTITY",
        question: "Do you feel confident in your role and identity as the leader?",
        yesText: "IDENTITY CLEAR",
        yesSubtext: "Know who you are as leader",
        noText: "IDENTITY CRISIS",
        noSubtext: "Uncertain about leadership role",
        filterId: "founder-identity",
        color: "red",
        diy: false
      },
      {
        id: 2,
        category: "LEADERSHIP CLARITY",
        title: "DECISION AUTHORITY",
        question: "Can you make major business decisions without seeking external validation?",
        yesText: "DECISION CONFIDENCE",
        yesSubtext: "You trust your judgment",
        noText: "VALIDATION SEEKING",
        noSubtext: "Need others to confirm choices",
        filterId: "founder-identity",
        color: "red",
        diy: false
      },
      {
        id: 3,
        category: "LEADERSHIP CLARITY",
        title: "VISION CLARITY",
        question: "Can you explain your business in one clear sentence?",
        yesText: "CRYSTAL CLEAR",
        yesSubtext: "Vision is simple and sharp",
        noText: "VISION FUZZY",
        noSubtext: "Takes paragraphs to explain",
        filterId: "clarity",
        color: "yellow",
        diy: true
      },
      {
        id: 4,
        category: "MARKET CONNECTION",
        title: "CUSTOMER REALITY",
        question: "Are you building what customers actually want vs what you think they want?",
        yesText: "MARKET ALIGNED",
        yesSubtext: "Customer-driven development",
        noText: "MARKET DISCONNECT",
        noSubtext: "Building assumptions",
        filterId: "market-reality",
        color: "red",
        diy: true
      },
      {
        id: 5,
        category: "MARKET CONNECTION",
        title: "CUSTOMER CONVERSATIONS",
        question: "Did you talk to actual customers this week?",
        yesText: "CUSTOMER CONNECTED",
        yesSubtext: "Regular customer contact",
        noText: "CUSTOMER DISTANT",
        noSubtext: "Operating on assumptions",
        filterId: "market-reality",
        color: "red",
        diy: true
      },
      {
        id: 6,
        category: "MARKET CONNECTION",
        title: "REVENUE MOMENTUM",
        question: "Is your revenue growing month over month?",
        yesText: "GROWTH MOMENTUM",
        yesSubtext: "Revenue trending up",
        noText: "PLATEAU STUCK",
        noSubtext: "Revenue flat or declining",
        filterId: "market-reality",
        color: "red",
        diy: true
      },
      {
        id: 7,
        category: "ENERGY PATTERNS",
        title: "DAILY ENERGY",
        question: "Do you finish most days feeling energized rather than drained?",
        yesText: "ENERGY FLOWING",
        yesSubtext: "Work gives energy",
        noText: "ENERGY DRAINING",
        noSubtext: "Something invisible drains you",
        filterId: "energy-drain",
        color: "red",
        diy: true
      },
      {
        id: 8,
        category: "ENERGY PATTERNS",
        title: "TASK ALIGNMENT",
        question: "Are you spending most of your time on work that naturally energizes you?",
        yesText: "NATURAL FLOW",
        yesSubtext: "Working with your grain",
        noText: "FORCED WORK",
        noSubtext: "Working against your grain",
        filterId: "nexel-aligned",
        color: "blue",
        diy: true
      },
      {
        id: 9,
        category: "PROBLEM FOCUS",
        title: "ROOT VS SYMPTOM",
        question: "Are you solving root causes vs just treating symptoms?",
        yesText: "ROOT FOCUSED",
        yesSubtext: "Addressing core issues",
        noText: "SYMPTOM CHASING",
        noSubtext: "Fixing surface problems",
        filterId: "pre-awareness",
        color: "yellow",
        diy: true
      },
      {
        id: 10,
        category: "PROBLEM FOCUS",
        title: "PRIORITY CLARITY",
        question: "Do you know exactly what your #1 priority is this week?",
        yesText: "LASER FOCUSED",
        yesSubtext: "Clear top priority",
        noText: "PRIORITY CHAOS",
        noSubtext: "Everything seems urgent",
        filterId: "clarity",
        color: "yellow",
        diy: true
      },
      {
        id: 11,
        category: "AWARENESS LEVEL",
        title: "PROBLEM RECOGNITION",
        question: "Can you name the specific thing that's blocking your progress?",
        yesText: "BLOCKER CLEAR",
        yesSubtext: "Know what's stopping you",
        noText: "BLOCKER UNCLEAR",
        noSubtext: "Something's wrong but unclear",
        filterId: "pre-awareness",
        color: "yellow",
        diy: true
      },
      {
        id: 12,
        category: "AWARENESS LEVEL",
        title: "SOLUTION READINESS",
        question: "Are you ready to commit time and resources to fixing this?",
        yesText: "READY TO ACT",
        yesSubtext: "Will invest in solution",
        noText: "STILL EXPLORING",
        noSubtext: "Not ready for commitment",
        filterId: "decision",
        color: "yellow",
        diy: false
      }
    ],
    'market-decision': [
      {
        id: 1,
        category: "MARKET VALIDATION",
        title: "CUSTOMER DEMAND",
        question: "Do you have clear evidence that customers will pay for this solution?",
        yesText: "DEMAND VALIDATED",
        yesSubtext: "Customers confirmed they'll pay",
        noText: "DEMAND UNCLEAR",
        noSubtext: "Assumption-based opportunity",
        filterId: "market-reality",
        color: "red",
        diy: true
      },
      {
        id: 2,
        category: "MARKET VALIDATION",
        title: "CUSTOMER CONVERSATIONS",
        question: "Have you talked to at least 10 potential customers about this opportunity?",
        yesText: "CUSTOMER VALIDATED",
        yesSubtext: "Real customer feedback",
        noText: "ASSUMPTION BASED",
        noSubtext: "Operating on hunches",
        filterId: "market-reality",
        color: "red",
        diy: true
      },
      {
        id: 3,
        category: "MARKET VALIDATION",
        title: "COMPETITOR ANALYSIS",
        question: "Do you know exactly how competitors are succeeding or failing in this space?",
        yesText: "COMPETITOR AWARE",
        yesSubtext: "Know the landscape",
        noText: "COMPETITOR BLIND",
        noSubtext: "Flying blind on competition",
        filterId: "market-reality",
        color: "red",
        diy: true
      },
      {
        id: 4,
        category: "DECISION FRAMEWORK",
        title: "BINARY CLARITY",
        question: "Are you forcing this into a clear GO/NO-GO decision?",
        yesText: "BINARY DECISION",
        yesSubtext: "Yes or no, no maybes",
        noText: "ANALYSIS LOOP",
        noSubtext: "Stuck in maybe mode",
        filterId: "binary-decisions",
        color: "green",
        diy: false
      },
      {
        id: 5,
        category: "DECISION FRAMEWORK",
        title: "DECISION TIMELINE",
        question: "Have you set a firm deadline for making this decision?",
        yesText: "DEADLINE SET",
        yesSubtext: "Decision has a due date",
        noText: "DEADLINE OPEN",
        noSubtext: "Could analyze forever",
        filterId: "speed-strategy",
        color: "green",
        diy: true
      },
      {
        id: 6,
        category: "RESOURCE REALITY",
        title: "EXECUTION CAPACITY",
        question: "Do you have the team and resources to execute this properly?",
        yesText: "CAPACITY READY",
        yesSubtext: "Team can execute",
        noText: "CAPACITY STRETCHED",
        noSubtext: "Resources insufficient",
        filterId: "consideration",
        color: "yellow",
        diy: true
      },
      {
        id: 7,
        category: "RESOURCE REALITY",
        title: "FINANCIAL RUNWAY",
        question: "Can you fund this opportunity without risking the core business?",
        yesText: "FINANCIALLY SAFE",
        yesSubtext: "Won't kill the business",
        noText: "FINANCIAL RISK",
        noSubtext: "Could jeopardize everything",
        filterId: "consideration",
        color: "yellow",
        diy: true
      },
      {
        id: 8,
        category: "COMPETITIVE LANDSCAPE",
        title: "MARKET TIMING",
        question: "Is this the right time to enter vs waiting for better conditions?",
        yesText: "TIMING RIGHT",
        yesSubtext: "Market window open",
        noText: "TIMING UNCLEAR",
        noSubtext: "Market timing uncertain",
        filterId: "speed-strategy",
        color: "green",
        diy: true
      },
      {
        id: 9,
        category: "COMPETITIVE LANDSCAPE",
        title: "DIFFERENTIATION",
        question: "Can you clearly explain why customers would choose you over alternatives?",
        yesText: "DIFFERENTIATED",
        yesSubtext: "Clear unique value",
        noText: "ME-TOO OFFERING",
        noSubtext: "Not obviously different",
        filterId: "market-reality",
        color: "red",
        diy: true
      },
      {
        id: 10,
        category: "RISK ASSESSMENT",
        title: "DOWNSIDE PROTECTION",
        question: "Can you survive if this market entry fails completely?",
        yesText: "DOWNSIDE PROTECTED",
        yesSubtext: "Can survive failure",
        noText: "DOWNSIDE RISKY",
        noSubtext: "Failure could be catastrophic",
        filterId: "consideration",
        color: "yellow",
        diy: true
      },
      {
        id: 11,
        category: "RISK ASSESSMENT",
        title: "TEST APPROACH",
        question: "Can you test this opportunity with a small experiment first?",
        yesText: "TESTABLE",
        yesSubtext: "Can start small",
        noText: "ALL-OR-NOTHING",
        noSubtext: "Must commit fully upfront",
        filterId: "speed-strategy",
        color: "green",
        diy: true
      },
      {
        id: 12,
        category: "EXECUTION READINESS",
        title: "COMMITMENT LEVEL",
        question: "Are you personally excited enough to work on this for the next 2 years?",
        yesText: "FULLY COMMITTED",
        yesSubtext: "Passionate about the work",
        noText: "LUKEWARM",
        noSubtext: "Not deeply excited",
        filterId: "founder-identity",
        color: "red",
        diy: false
      }
    ],
    'stuck-patterns': [
      {
        id: 1,
        category: "PATTERN RECOGNITION",
        title: "RECURRING PROBLEMS",
        question: "Do you find yourselves solving the same problems over and over?",
        yesText: "STUCK IN LOOPS",
        yesSubtext: "Same issues keep returning",
        noText: "PROGRESSIVE PROBLEMS",
        noSubtext: "New challenges each time",
        filterId: "pattern-breaking",
        color: "orange",
        diy: false
      },
      {
        id: 2,
        category: "PATTERN RECOGNITION",
        title: "ENERGY DRAIN PATTERNS",
        question: "Do you notice your team's energy consistently draining in predictable ways?",
        yesText: "ENERGY VAMPIRES",
        yesSubtext: "Predictable energy drains",
        noText: "ENERGY SUSTAINABLE",
        noSubtext: "Energy generally flows well",
        filterId: "energy-drain",
        color: "orange",
        diy: false
      },
      {
        id: 3,
        category: "PATTERN RECOGNITION",
        title: "MOMENTUM KILLERS",
        question: "Can you identify specific patterns that consistently kill your team's momentum?",
        yesText: "MOMENTUM SABOTEURS",
        yesSubtext: "Know what kills momentum",
        noText: "MOMENTUM MYSTERY",
        noSubtext: "Momentum loss feels random",
        filterId: "momentum-loss",
        color: "orange",
        diy: false
      },
      {
        id: 4,
        category: "DYSFUNCTION CYCLES",
        title: "PROCESS PARALYSIS",
        question: "Are your processes helping you move faster or slowing you down?",
        yesText: "PROCESS ACCELERATES",
        yesSubtext: "Systems serve speed",
        noText: "PROCESS SLOWS",
        noSubtext: "Bureaucracy everywhere",
        filterId: "process-dysfunction",
        color: "orange",
        diy: false
      },
      {
        id: 5,
        category: "DYSFUNCTION CYCLES",
        title: "MEETING THEATER",
        question: "Do your meetings result in actual decisions and immediate actions?",
        yesText: "MEETINGS = ACTION",
        yesSubtext: "Meetings drive results",
        noText: "MEETINGS = THEATER",
        noSubtext: "Meetings are performance",
        filterId: "process-dysfunction",
        color: "orange",
        diy: false
      },
      {
        id: 6,
        category: "DYSFUNCTION CYCLES",
        title: "BLAME CYCLES",
        question: "When problems arise, does your team focus on solutions or blame?",
        yesText: "SOLUTION FOCUSED",
        yesSubtext: "Focus on fixing issues",
        noText: "BLAME CYCLES",
        noSubtext: "Focus on who's at fault",
        filterId: "pattern-breaking",
        color: "orange",
        diy: false
      },
      {
        id: 7,
        category: "AWARENESS LEVEL",
        title: "PATTERN VISIBILITY",
        question: "Can you clearly name the specific patterns keeping your team stuck?",
        yesText: "PATTERNS CLEAR",
        yesSubtext: "Know what's blocking us",
        noText: "PATTERNS UNCLEAR",
        noSubtext: "Something's wrong but unclear",
        filterId: "pattern-breaking",
        color: "orange",
        diy: false
      },
      {
        id: 8,
        category: "AWARENESS LEVEL",
        title: "BREAKING READINESS",
        question: "Are you ready to completely interrupt your current way of working?",
        yesText: "READY FOR DISRUPTION",
        yesSubtext: "Will break current patterns",
        noText: "PREFER INCREMENTAL",
        noSubtext: "Want gradual improvement",
        filterId: "pattern-breaking",
        color: "orange",
        diy: false
      },
      {
        id: 9,
        category: "SYSTEMIC ISSUES",
        title: "ROOT CAUSE DEPTH",
        question: "Do your problems feel like symptoms of deeper systemic issues?",
        yesText: "SYSTEMIC PROBLEMS",
        yesSubtext: "Deep root causes",
        noText: "SURFACE PROBLEMS",
        noSubtext: "Issues seem isolated",
        filterId: "pattern-breaking",
        color: "orange",
        diy: false
      },
      {
        id: 10,
        category: "SYSTEMIC ISSUES",
        title: "CHANGE RESISTANCE",
        question: "Does your organization resist changes that would improve performance?",
        yesText: "CHANGE RESISTANCE",
        yesSubtext: "System fights improvement",
        noText: "CHANGE READY",
        noSubtext: "Open to beneficial changes",
        filterId: "pattern-breaking",
        color: "orange",
        diy: false
      },
      {
        id: 11,
        category: "INTERVENTION READINESS",
        title: "AUTHORITY LEVEL",
        question: "Do you have authority to implement significant organizational changes?",
        yesText: "CHANGE AUTHORITY",
        yesSubtext: "Can implement big changes",
        noText: "LIMITED AUTHORITY",
        noSubtext: "Need approval for changes",
        filterId: "pattern-breaking",
        color: "orange",
        diy: false
      },
      {
        id: 12,
        category: "INTERVENTION READINESS",
        title: "COMMITMENT LEVEL",
        question: "Are you willing to invest significant time and resources to break these patterns?",
        yesText: "FULLY COMMITTED",
        yesSubtext: "Will invest what's needed",
        noText: "LIMITED COMMITMENT",
        noSubtext: "Want low-cost solutions",
        filterId: "pattern-breaking",
        color: "orange",
        diy: false
      }
    ],
    'need-to-ship': [
      {
        id: 1,
        category: "SHIPPING DISCIPLINE",
        title: "PERFECTIONISM BLOCK",
        question: "Are you shipping regularly vs waiting for things to be perfect?",
        yesText: "SHIPPING MOMENTUM",
        yesSubtext: "Regular releases, iteration",
        noText: "PERFECTIONISM STUCK",
        noSubtext: "Waiting for perfect version",
        filterId: "perfectionism",
        color: "red",
        diy: true
      },
      {
        id: 2,
        category: "SHIPPING DISCIPLINE",
        title: "SHIP FREQUENCY",
        question: "Did you ship something visible to users this week?",
        yesText: "WEEKLY SHIPPER",
        yesSubtext: "Consistent delivery",
        noText: "INFREQUENT SHIPPER",
        noSubtext: "Long gaps between releases",
        filterId: "ship-daily",
        color: "green",
        diy: true
      },
      {
        id: 3,
        category: "SHIPPING DISCIPLINE",
        title: "SHIP PERMISSION",
        question: "Can you ship improvements without anyone else's approval?",
        yesText: "SHIP AUTONOMY",
        yesSubtext: "You control your output",
        noText: "SHIP DEPENDENCY",
        noSubtext: "Need permission to ship",
        filterId: "autonomy",
        color: "blue",
        diy: true
      },
      {
        id: 4,
        category: "SCOPE MANAGEMENT",
        title: "FEATURE CREEP",
        question: "Are you shipping the minimum viable version vs adding just one more feature?",
        yesText: "SCOPE DISCIPLINED",
        yesSubtext: "Ship minimum viable",
        noText: "SCOPE CREEPING",
        noSubtext: "Always adding more features",
        filterId: "ship-daily",
        color: "green",
        diy: true
      },
      {
        id: 5,
        category: "SCOPE MANAGEMENT",
        title: "DONE DEFINITION",
        question: "Do you have a clear definition of 'done' before you start building?",
        yesText: "DONE DEFINED",
        yesSubtext: "Know when to stop",
        noText: "DONE FUZZY",
        noSubtext: "Keep adding until it feels right",
        filterId: "clarity",
        color: "yellow",
        diy: true
      },
      {
        id: 6,
        category: "EXECUTION MINDSET",
        title: "UGLY VS PERFECT",
        question: "Would you rather ship something ugly now vs perfect later?",
        yesText: "UGLY SHIPPER",
        yesSubtext: "Ship ugly, improve later",
        noText: "PERFECT WAITER",
        noSubtext: "Polish before shipping",
        filterId: "ugly-beats",
        color: "green",
        diy: true
      },
      {
        id: 7,
        category: "EXECUTION MINDSET",
        title: "BUILD VS PLAN",
        question: "Are you spending more time building vs planning and discussing?",
        yesText: "BUILDING FOCUSED",
        yesSubtext: "More doing than talking",
        noText: "PLANNING FOCUSED",
        noSubtext: "More talking than doing",
        filterId: "speed-strategy",
        color: "green",
        diy: true
      },
      {
        id: 8,
        category: "EXECUTION MINDSET",
        title: "MOMENTUM CHECK",
        question: "Are you moving faster this week than last week?",
        yesText: "ACCELERATING",
        yesSubtext: "Momentum is building",
        noText: "DECELERATING",
        noSubtext: "Slowing down over time",
        filterId: "momentum",
        color: "blue",
        diy: true
      },
      {
        id: 9,
        category: "FEEDBACK LOOPS",
        title: "USER VALIDATION",
        question: "Are you getting real user feedback on shipped features?",
        yesText: "USER FEEDBACK",
        yesSubtext: "Real users validate",
        noText: "INTERNAL OPINIONS",
        noSubtext: "Team decides what users want",
        filterId: "market-reality",
        color: "red",
        diy: true
      },
      {
        id: 10,
        category: "FEEDBACK LOOPS",
        title: "FEEDBACK SPEED",
        question: "Do you get user feedback within 48 hours of shipping?",
        yesText: "FAST FEEDBACK",
        yesSubtext: "Learn immediately",
        noText: "SLOW FEEDBACK",
        noSubtext: "Learn eventually or never",
        filterId: "feedback-loops",
        color: "yellow",
        diy: true
      },
      {
        id: 11,
        category: "ITERATION SPEED",
        title: "FEEDBACK RESPONSE",
        question: "Can you implement user feedback and ship improvements within a week?",
        yesText: "RAPID ITERATION",
        yesSubtext: "Quick response to feedback",
        noText: "SLOW ITERATION",
        noSubtext: "Feedback sits in backlog",
        filterId: "iteration-cycles",
        color: "green",
        diy: true
      },
      {
        id: 12,
        category: "ITERATION SPEED",
        title: "KILL DISCIPLINE",
        question: "Do you regularly kill features that aren't working rather than trying to fix them?",
        yesText: "KILL READY",
        yesSubtext: "Cut losses quickly",
        noText: "SUNK COST TRAP",
        noSubtext: "Keep polishing failed features",
        filterId: "execution-maintenance",
        color: "red",
        diy: true
      }
    ]
  };

  // Fallback to generic questions if no problem type selected
  const quickScanQuestions = [
    // BLOCKING PATTERNS (1-7)
    {
      id: 1,
      category: "BLOCKING PATTERNS",
      title: "FINANCIAL FEAR",
      question: "Are you avoiding business decisions because you're afraid they might hurt revenue?",
      yesText: "REVENUE FEAR",
      yesSubtext: "Playing it safe financially",
      noText: "REVENUE COURAGE",
      noSubtext: "Will risk revenue for growth",
      filterId: "fear-revenue",
      color: "red",
      diy: true
    },
    {
      id: 2,
      category: "BLOCKING PATTERNS",
      title: "IDENTITY CRISIS",
      question: "Do you feel uncertain about your role and identity as a leader?",
      yesText: "IDENTITY UNCLEAR",
      yesSubtext: "Don't know who you are as leader",
      noText: "IDENTITY CLEAR",
      noSubtext: "Solid sense of leadership identity",
      filterId: "founder-identity",
      color: "red",
      diy: false
    },
    {
      id: 3,
      category: "BLOCKING PATTERNS",
      title: "FALSE HARMONY",
      question: "Does your team agree on everything but somehow nothing actually happens?",
      yesText: "FALSE HARMONY",
      yesSubtext: "Agreement without action",
      noText: "PRODUCTIVE TENSION",
      noSubtext: "Healthy disagreement drives action",
      filterId: "team-harmony",
      color: "red",
      diy: true
    },
    {
      id: 4,
      category: "BLOCKING PATTERNS",
      title: "MARKET DISCONNECT",
      question: "Are you building what you think customers want rather than what they actually want?",
      yesText: "MARKET DISCONNECT",
      yesSubtext: "Ignoring customer reality",
      noText: "MARKET CONNECTED",
      noSubtext: "Building what customers want",
      filterId: "market-reality",
      color: "red",
      diy: true
    },
    {
      id: 5,
      category: "BLOCKING PATTERNS",
      title: "PERFECTION PARALYSIS",
      question: "Do you struggle to ship anything that isn't perfectly polished?",
      yesText: "PERFECTION STUCK",
      yesSubtext: "Can't ship imperfect things",
      noText: "SHIP READY",
      noSubtext: "Good enough beats perfect",
      filterId: "perfectionism",
      color: "red",
      diy: true
    },
    {
      id: 6,
      category: "BLOCKING PATTERNS",
      title: "ENERGY DRAIN",
      question: "Do you feel like something invisible is constantly draining your team's energy?",
      yesText: "ENERGY DRAIN",
      yesSubtext: "Something is sucking energy",
      noText: "ENERGY FLOW",
      noSubtext: "Team feels energized",
      filterId: "energy-drain",
      color: "red",
      diy: true
    },
    {
      id: 7,
      category: "BLOCKING PATTERNS",
      title: "NEXEL MISALIGNMENT",
      question: "Do you feel like you're fighting against your natural problem-solving style?",
      yesText: "NEXEL FIGHTING",
      yesSubtext: "Working against your grain",
      noText: "NEXEL ALIGNED",
      noSubtext: "Working with your grain",
      filterId: "wrong-nexel",
      color: "red",
      diy: true
    },

    // DESIRED OPERATIONS (8-14)
    {
      id: 8,
      category: "DESIRED OPERATIONS",
      title: "DAILY SHIPPING",
      question: "Do you want to ship something visible to users every single day?",
      yesText: "DAILY SHIPPER",
      yesSubtext: "Ship something every day",
      noText: "BATCH SHIPPER",
      noSubtext: "Ship in larger batches",
      filterId: "ship-daily",
      color: "green",
      diy: true
    },
    {
      id: 9,
      category: "DESIRED OPERATIONS",
      title: "BINARY DECISIONS",
      question: "Do you prefer YES/NO decisions over maybe/later options?",
      yesText: "BINARY THINKER",
      yesSubtext: "Yes or no, no maybes",
      noText: "GRADUAL DECIDER",
      noSubtext: "Prefer nuanced decisions",
      filterId: "binary-decisions",
      color: "green",
      diy: false
    },
    {
      id: 10,
      category: "DESIRED OPERATIONS",
      title: "CONFLICT FOR CLARITY",
      question: "Do you believe teams should fight it out until they reach real clarity?",
      yesText: "CONFLICT POSITIVE",
      yesSubtext: "Fight until clear",
      noText: "HARMONY FOCUSED",
      noSubtext: "Prefer peaceful consensus",
      filterId: "conflict-clarity",
      color: "green",
      diy: false
    },
    {
      id: 11,
      category: "DESIRED OPERATIONS",
      title: "UGLY BEATS PERFECT",
      question: "Would you rather ship something ugly now than something perfect later?",
      yesText: "UGLY SHIPPER",
      yesSubtext: "Ship ugly, improve later",
      noText: "QUALITY FIRST",
      noSubtext: "Polish before shipping",
      filterId: "ugly-beats",
      color: "green",
      diy: true
    },
    {
      id: 12,
      category: "DESIRED OPERATIONS",
      title: "SPEED STRATEGY",
      question: "Do you believe moving fast and figuring it out as you go is better than planning?",
      yesText: "SPEED FIRST",
      yesSubtext: "Move fast, figure out later",
      noText: "PLAN FIRST",
      noSubtext: "Plan thoroughly, then move",
      filterId: "speed-strategy",
      color: "green",
      diy: true
    },
    {
      id: 13,
      category: "DESIRED OPERATIONS",
      title: "NATURAL STRENGTHS",
      question: "Do you want to work with your natural strengths rather than fixing weaknesses?",
      yesText: "STRENGTH FOCUSED",
      yesSubtext: "Work with natural strengths",
      noText: "WEAKNESS FOCUSED",
      noSubtext: "Fix weaknesses first",
      filterId: "nexel-aligned",
      color: "green",
      diy: true
    },
    {
      id: 14,
      category: "DESIRED OPERATIONS",
      title: "TEAM NEXEL MATCHING",
      question: "Should tasks be matched to people's natural problem-solving styles?",
      yesText: "NEXEL MATCHER",
      yesSubtext: "Match tasks to people's styles",
      noText: "UNIVERSAL APPROACH",
      noSubtext: "Same approach for everyone",
      filterId: "team-nexel",
      color: "green",
      diy: true
    },

    // AWARENESS STAGE (15-19)
    {
      id: 15,
      category: "AWARENESS STAGE",
      title: "PRE-AWARENESS",
      question: "Do you know something's wrong but can't put your finger on what it is?",
      yesText: "PRE-AWARE",
      yesSubtext: "Something's wrong, unclear what",
      noText: "PROBLEM CLEAR",
      noSubtext: "You know what's wrong",
      filterId: "pre-awareness",
      color: "yellow",
      diy: true
    },
    {
      id: 16,
      category: "AWARENESS STAGE",
      title: "CLEAR AWARENESS",
      question: "Can you see the problem clearly and name exactly what's wrong?",
      yesText: "PROBLEM CLEAR",
      yesSubtext: "Can see problem clearly",
      noText: "PROBLEM FUZZY",
      noSubtext: "Still unclear what's wrong",
      filterId: "awareness",
      color: "yellow",
      diy: true
    },
    {
      id: 17,
      category: "AWARENESS STAGE",
      title: "SOLUTION RESEARCH",
      question: "Are you currently researching and evaluating potential solutions?",
      yesText: "RESEARCHING",
      yesSubtext: "Evaluating solutions",
      noText: "NOT RESEARCHING",
      noSubtext: "Not looking for solutions yet",
      filterId: "consideration",
      color: "yellow",
      diy: true
    },
    {
      id: 18,
      category: "AWARENESS STAGE",
      title: "COMMITMENT READY",
      question: "Are you ready to commit time and resources to taking action?",
      yesText: "READY TO COMMIT",
      yesSubtext: "Will commit to action",
      noText: "NOT READY",
      noSubtext: "Still evaluating",
      filterId: "decision",
      color: "yellow",
      diy: false
    },
    {
      id: 19,
      category: "AWARENESS STAGE",
      title: "ALREADY MOVING",
      question: "Are you already working on the problem and just need optimization?",
      yesText: "ALREADY MOVING",
      yesSubtext: "Working on it, need fine-tuning",
      noText: "NOT STARTED",
      noSubtext: "Haven't started working on it",
      filterId: "action",
      color: "yellow",
      diy: false
    }
  ];

  const handleProblemTypeSelect = (problemTypeId: string) => {
    const problemType = problemTypes.find(p => p.id === problemTypeId);
    if (problemType) {
      setSelectedProblemType(problemTypeId);
      setSelectedFilters([]);
      setCurrentQuestion(1);
      setQuestionAnswers({});
      setCurrentStep('questions');
    }
  };

  // Get questions based on selected problem type
  const getCurrentQuestions = () => {
    if (selectedProblemType && problemSpecificQuestions[selectedProblemType as keyof typeof problemSpecificQuestions]) {
      return problemSpecificQuestions[selectedProblemType as keyof typeof problemSpecificQuestions];
    }
    return quickScanQuestions;
  };

  const handleQuestionAnswer = (answer: 'yes' | 'no') => {
    const currentQuestions = getCurrentQuestions();
    const currentQ = currentQuestions[currentQuestion - 1];
    
    // Update answers
    setQuestionAnswers(prev => ({ ...prev, [currentQuestion]: answer }));
    
    // Add to selected filters based on answer logic
    if (answer === 'yes') {
      // For blocking patterns, "yes" means they have the problem
      if (currentQ.category.includes("BLOCKING") || currentQ.category.includes("CRISIS") || 
          currentQ.category.includes("PARALYSIS") || currentQ.category.includes("DISCONNECT")) {
        setSelectedFilters(prev => [...prev, currentQ.filterId]);
      }
      // For positive capabilities, "no" means they have the problem
      else if (currentQ.category.includes("PRODUCTIVITY") || currentQ.category.includes("CLARITY") ||
               currentQ.category.includes("VALIDATION") || currentQ.category.includes("MOMENTUM")) {
        // Don't add filter for positive responses
      }
      // For other categories, "yes" means they want this way of working or have this capability
      else {
        setSelectedFilters(prev => [...prev, currentQ.filterId]);
      }
    } else {
      // "No" answers for positive capabilities indicate problems
      if (currentQ.category.includes("PRODUCTIVITY") || currentQ.category.includes("CLARITY") ||
          currentQ.category.includes("VALIDATION") || currentQ.category.includes("MOMENTUM") ||
          currentQ.category.includes("DYNAMICS") || currentQ.category.includes("DISCIPLINE") ||
          currentQ.category.includes("FRAMEWORK") || currentQ.category.includes("MINDSET") ||
          currentQ.category.includes("STRATEGY") || currentQ.category.includes("MANAGEMENT") ||
          currentQ.category.includes("LOOPS") || currentQ.category.includes("LEADERSHIP") ||
          currentQ.category.includes("CONNECTION") || currentQ.category.includes("PATTERNS") ||
          currentQ.category.includes("FOCUS") || currentQ.category.includes("ASSESSMENT") ||
          currentQ.category.includes("LANDSCAPE") || currentQ.category.includes("REALITY")) {
        setSelectedFilters(prev => [...prev, currentQ.filterId]);
      }
    }
    
    // Move to next question or results
    if (currentQuestion < currentQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentStep('results');
    }
  };

  const backToProblemType = () => {
    setCurrentStep('problem-type');
    setSelectedProblemType(null);
    setSelectedFilters([]);
    setCurrentQuestion(1);
    setQuestionAnswers({});
  };

  const backToQuestions = () => {
    setCurrentStep('questions');
    setCurrentQuestion(1);
    setQuestionAnswers({});
    setSelectedFilters([]);
  };

  const generateInterventionRoute = () => {
    // Map selected filters back to their DIY status
    const allQuestions = getCurrentQuestions();
    const selectedQuestions = allQuestions.filter(q => selectedFilters.includes(q.filterId));
    
    const diyFilters = selectedQuestions.filter(q => q.diy);
    const professionalFilters = selectedQuestions.filter(q => !q.diy);
    
    const hasEarlyStage = selectedFilters.some(filter => 
      ['pre-awareness', 'awareness', 'consideration'].includes(filter)
    );
    const hasNetworkIssues = selectedFilters.some(filter => 
      ['network-mapping', 'relationship-health', 'partnership-strategy', 'connection-gaps'].includes(filter)
    );
    const hasEnergyDrains = selectedFilters.some(filter => 
      ['energy-drain', 'pattern-breaking', 'momentum-loss', 'process-dysfunction'].includes(filter)
    );
    const hasTruthIssues = selectedFilters.some(filter => 
      ['founder-identity', 'truth-seeking', 'team-harmony', 'pre-awareness'].includes(filter)
    );
    const hasShippingIssues = selectedFilters.some(filter => 
      ['shipping-paralysis', 'mvp-building', 'perfectionism', 'execution-focus'].includes(filter)
    );
    const hasCrisisPatterns = selectedFilters.some(filter => 
      ['fear-revenue', 'founder-identity', 'team-harmony', 'market-reality'].includes(filter)
    );

    // Store routing context
    if (typeof window !== 'undefined') {
      const routingContext = {
        filters: selectedFilters,
        problemType: selectedProblemType,
        diyRecommended: diyFilters.length > professionalFilters.length,
        networkFocus: hasNetworkIssues,
        truthFocus: hasTruthIssues,
        patternFocus: hasEnergyDrains,
        shippingFocus: hasShippingIssues,
        stage: hasEarlyStage ? 'early' : 'advanced'
      };
      sessionStorage.setItem('routingContext', JSON.stringify(routingContext));
      sessionStorage.setItem('transformationFilters', JSON.stringify(selectedFilters));
    }

    // Route to professional interventions based on problem type and patterns
    if (selectedProblemType === 'truth-crisis' || selectedFilters.includes('founder-identity') || selectedFilters.includes('truth-seeking')) {
      return '/interventions/the-naming';
    } else if (selectedProblemType === 'broken-connections' || selectedFilters.includes('network-mapping') || selectedFilters.includes('relationship-health')) {
      return '/interventions/the-map';
    } else if (selectedProblemType === 'market-decision' || (selectedFilters.includes('market-reality') && selectedFilters.includes('binary-decisions'))) {
      return '/interventions/the-market-smackdown';
    } else if (selectedProblemType === 'stuck-patterns' || selectedFilters.includes('pattern-breaking') || hasEnergyDrains) {
      return '/interventions/the-override';
    } else if (selectedProblemType === 'need-to-ship' || selectedFilters.includes('mvp-building') || selectedFilters.includes('shipping-paralysis')) {
      return '/interventions/the-build';
    } else {
      return '/interventions';
    }
  };

  const currentProblemType = problemTypes.find(p => p.id === selectedProblemType);

  return (
    <>
      <SEOHead
        title="Pattern Break Diagnostic - Find Your Intervention | IMAGINATION G"
        description="Integrated diagnostic to identify your problem type and match you to the right intervention pathway. Stop optimizing around problems, start fixing them."
        ogImage="/images/og-start.svg"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation />

        {/* Progress Indicator */}
        <div className="pt-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full ${currentStep === 'problem-type' ? 'bg-red-600' : 'bg-green-500'}`}></div>
                <div className={`w-12 h-0.5 ${currentStep === 'questions' || currentStep === 'results' ? 'bg-green-500' : 'bg-zinc-700'}`}></div>
                <div className={`w-3 h-3 rounded-full ${currentStep === 'questions' ? 'bg-red-600' : currentStep === 'results' ? 'bg-green-500' : 'bg-zinc-700'}`}></div>
                <div className={`w-12 h-0.5 ${currentStep === 'results' ? 'bg-green-500' : 'bg-zinc-700'}`}></div>
                <div className={`w-3 h-3 rounded-full ${currentStep === 'results' ? 'bg-red-600' : 'bg-zinc-700'}`}></div>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 1: Problem Type Selection */}
        {currentStep === 'problem-type' && (
          <section className="pb-16 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  STEP 1: PROBLEM TYPE
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                  WHAT'S YOUR<br />PROBLEM<span className="text-red-600">?</span>
                </h1>
                
                <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
                  Choose the problem that sounds most like your situation. Each problem type gets 12 targeted diagnostic questions designed specifically for that challenge.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {problemTypes.map((problem) => {
                  const Icon = problem.icon;
                  return (
                    <button
                      key={problem.id}
                      onClick={() => handleProblemTypeSelect(problem.id)}
                      className="group border-2 border-zinc-800 p-8 hover:border-red-600 transition-all bg-zinc-950 hover:bg-black text-left"
                    >
                      <div className="flex items-start gap-6">
                        <div className={`p-4 border-2 border-${problem.color}-600 bg-${problem.color}-950 group-hover:border-${problem.color}-400 transition-colors`}>
                          <Icon className={`text-${problem.color}-600 group-hover:text-${problem.color}-400`} size={32} />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-black mb-3 group-hover:text-red-600 transition-colors">
                            {problem.title}
                          </h3>
                          <p className="text-zinc-400 mb-4 leading-relaxed">
                            {problem.description}
                          </p>
                          
                          <div className="mb-6">
                            <p className="text-sm font-bold text-zinc-500 mb-2">COMMON PATTERNS:</p>
                            <ul className="space-y-1">
                              {problem.examples.slice(0, 2).map((example, index) => (
                                <li key={index} className="text-sm text-zinc-600">• {example}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-zinc-500">
                              12 TARGETED QUESTIONS
                            </span>
                            <ArrowRight 
                              className="text-red-600 group-hover:text-red-400 transition-colors" 
                              size={20} 
                            />
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* STEP 2: Pattern Questions */}
        {currentStep === 'questions' && currentProblemType && (
          <section className="pb-16 px-6">
            <div className="max-w-4xl mx-auto">
              {(() => {
                const currentQuestions = getCurrentQuestions();
                const currentQ = currentQuestions[currentQuestion - 1];
                
                return (
                  <>
                    <div className="mb-8">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <span className="text-sm text-zinc-500">QUESTION {currentQuestion} OF {currentQuestions.length}</span>
                          <div className="text-lg font-bold text-zinc-400">{currentQ.category}</div>
                          <div className="text-sm text-zinc-600">{currentProblemType.title}</div>
                        </div>
                        <span className="text-sm text-zinc-500">{Math.round((currentQuestion / currentQuestions.length) * 100)}% COMPLETE</span>
                      </div>
                      <div className="h-2 bg-zinc-900 rounded">
                        <div 
                          className="h-2 bg-red-600 rounded transition-all duration-300"
                          style={{ width: `${(currentQuestion / currentQuestions.length) * 100}%` }}
                        />
                      </div>
                    </div>

                    {/* Back Button */}
                    {currentQuestion > 1 && (
                      <button
                        onClick={() => setCurrentQuestion(currentQuestion - 1)}
                        className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
                      >
                        <ChevronLeft size={20} />
                        Previous Question
                      </button>
                    )}

                    {/* Question */}
                    <div className="text-center mb-12">
                      <div className="inline-block mb-8 text-yellow-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                        <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                        STEP 2: {currentProblemType.title.toUpperCase()} ANALYSIS
                      </div>

                      <h2 className="text-xl font-black text-red-600 mb-4">{currentQ.title}</h2>
                      <h3 className="text-2xl md:text-3xl font-black mb-8 leading-tight">
                        {currentQ.question}
                      </h3>
                    </div>

                    {/* Answer Options */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <button
                        onClick={() => handleQuestionAnswer('yes')}
                        className="group border-2 border-green-600 p-8 hover:bg-green-600 transition-all text-left"
                      >
                        <h4 className="text-2xl font-black text-green-600 group-hover:text-black mb-3">
                          {currentQ.yesText}
                        </h4>
                        <p className="text-zinc-400 group-hover:text-black text-lg">
                          {currentQ.yesSubtext}
                        </p>
                      </button>

                      <button
                        onClick={() => handleQuestionAnswer('no')}
                        className="group border-2 border-red-600 p-8 hover:bg-red-600 transition-all text-left"
                      >
                        <h4 className="text-2xl font-black text-red-600 group-hover:text-black mb-3">
                          {currentQ.noText}
                        </h4>
                        <p className="text-zinc-400 group-hover:text-black text-lg">
                          {currentQ.noSubtext}
                        </p>
                      </button>
                    </div>

                    {/* Category indicator */}
                    <div className="mt-8 text-center">
                      <div className="inline-flex items-center gap-2 text-sm text-zinc-500">
                        <div className={`w-3 h-3 rounded-full ${currentQ.color === 'red' ? 'bg-red-500' : currentQ.color === 'green' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                        {currentQ.category} • {currentQ.diy ? 'DIY Available' : 'Professional Recommended'}
                      </div>
                    </div>

                    {/* Progress through categories */}
                    <div className="mt-8 flex justify-center">
                      <button
                        onClick={backToProblemType}
                        className="text-zinc-500 text-sm hover:text-zinc-400 transition-colors"
                      >
                        ← Back to Problem Types
                      </button>
                    </div>
                  </>
                );
              })()}
            </div>
          </section>
        )}

        {/* STEP 3: Results & Routing */}
        {currentStep === 'results' && (
          <section className="pb-16 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  STEP 3: INTERVENTION MATCHED
                </div>

                <h1 className="text-4xl md:text-5xl font-black mb-6 leading-[1.1]">
                  YOUR INTERVENTION<br />PATHWAY<span className="text-red-600">.</span>
                </h1>
              </div>

              <div className="max-w-4xl mx-auto">
                {/* Pathway Analysis */}
                <div className="mb-12 p-8 border border-zinc-800 bg-zinc-950">
                  <h3 className="text-2xl font-black mb-6">PATHWAY ANALYSIS</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="p-4 border border-zinc-700">
                      <h4 className="font-bold text-white mb-2">PROBLEM TYPE</h4>
                      <p className="text-zinc-400">{currentProblemType?.title}</p>
                    </div>
                    <div className="p-4 border border-zinc-700">
                      <h4 className="font-bold text-white mb-2">FILTERS SELECTED</h4>
                      <p className="text-zinc-400">{selectedFilters.length} specific patterns identified</p>
                    </div>
                  </div>

                  {/* Intervention Recommendation */}
                  {(() => {
                    const currentQuestions = getCurrentQuestions();
                    const selectedQuestions = currentQuestions.filter(q => selectedFilters.includes(q.filterId));
                    const diyCount = selectedQuestions.filter(q => q.diy).length;
                    const professionalCount = selectedQuestions.filter(q => !q.diy).length;
                    
                    const hasNexelIssues = selectedFilters.some(filter => 
                      ['wrong-nexel', 'nexel-aligned', 'team-nexel', 'energy-drain'].includes(filter)
                    );
                    const hasTeamIssues = selectedFilters.some(filter => 
                      ['team-harmony', 'team-nexel', 'conflict-clarity'].includes(filter)
                    );
                    const hasEarlyStage = selectedFilters.some(filter => 
                      ['pre-awareness', 'awareness', 'consideration'].includes(filter)
                    );
                    const hasComplexIssues = selectedFilters.some(filter => 
                      ['founder-identity', 'binary-decisions', 'conflict-clarity'].includes(filter)
                    );
                    const hasCrisisPatterns = selectedFilters.some(filter => 
                      ['fear-revenue', 'founder-identity', 'team-harmony', 'market-reality'].includes(filter)
                    );
                    
                    // Route to professional interventions based on problem type and patterns
                    if (selectedProblemType === 'truth-crisis' || selectedFilters.includes('founder-identity') || selectedFilters.includes('truth-seeking')) {
                      const truthTriggers = selectedQuestions.filter(q => 
                        ['founder-identity', 'truth-seeking', 'team-harmony', 'pre-awareness'].includes(q.filterId)
                      ).map(q => q.title).slice(0, 2);
                      
                      const explanationText = selectedProblemType !== 'truth-crisis' 
                        ? `Based on your answers${truthTriggers.length > 0 ? ` about ${truthTriggers.join(' and ')}` : ''}, you're avoiding hard truths or struggling with leadership identity. Until you get brutally honest about what's really happening, any other solution will fail. We need to fix the truth problem first.`
                        : `Your answers${truthTriggers.length > 0 ? ` about ${truthTriggers.join(' and ')}` : ''} confirm you know something is wrong but people aren't saying what they really think. This is a truth excavation problem.`
                      
                      return (
                        <div className="p-6 border-2 border-red-500 bg-red-950">
                          <h4 className="text-xl font-black text-red-400 mb-3">YOU NEED: THE NAMING</h4>
                          <div className="mb-4 p-3 bg-red-900 bg-opacity-50 border border-red-700">
                            <h5 className="text-sm font-bold text-red-300 mb-2">WHY THIS INTERVENTION:</h5>
                            <p className="text-xs text-red-200">{explanationText}</p>
                          </div>
                          <p className="text-red-200 mb-4">
                            Truth excavation session to break through identity confusion and false narratives. 
                            Surface what everyone knows but won't say, and rebuild authentic leadership foundation.
                          </p>
                          <p className="text-sm text-red-300">
                            <strong>Investment:</strong> $750 • <strong>Next step:</strong> Book The Naming intervention 
                            to excavate your core truth and eliminate the false layers blocking clarity.
                          </p>
                        </div>
                      );
                    } else if (selectedProblemType === 'broken-connections' || selectedFilters.includes('network-mapping') || selectedFilters.includes('relationship-health')) {
                      const networkTriggers = selectedQuestions.filter(q => 
                        ['network-mapping', 'relationship-health', 'partnership-strategy', 'connection-gaps'].includes(q.filterId)
                      ).map(q => q.title).slice(0, 2);
                      
                      const explanationText = selectedProblemType !== 'broken-connections'
                        ? `Based on your answers${networkTriggers.length > 0 ? ` about ${networkTriggers.join(' and ')}` : ''}, you have broken partnerships, missing connections to key people, or relationship issues blocking your progress. You can't solve this problem alone - you need to fix your network first.`
                        : `Your answers${networkTriggers.length > 0 ? ` about ${networkTriggers.join(' and ')}` : ''} confirm your key relationships and partnerships are broken or missing. This is blocking everything else.`
                      
                      return (
                        <div className="p-6 border-2 border-purple-500 bg-purple-950">
                          <h4 className="text-xl font-black text-purple-400 mb-3">YOU NEED: THE MAP</h4>
                          <div className="mb-4 p-3 bg-purple-900 bg-opacity-50 border border-purple-700">
                            <h5 className="text-sm font-bold text-purple-300 mb-2">WHY THIS INTERVENTION:</h5>
                            <p className="text-xs text-purple-200">{explanationText}</p>
                          </div>
                          <p className="text-purple-200 mb-4">
                            5-day intensive to rebuild broken networks and optimize relationship strategy. 
                            Map hidden connections, repair key partnerships, and design sustainable relationship systems.
                          </p>
                          <p className="text-sm text-purple-300">
                            <strong>Investment:</strong> $1,500 • <strong>Next step:</strong> Book The Map intervention 
                            to rebuild your network strategy and repair critical relationship gaps.
                          </p>
                        </div>
                      );
                    } else if (selectedProblemType === 'market-decision' || (selectedFilters.includes('market-reality') && selectedFilters.includes('binary-decisions'))) {
                      const marketTriggers = selectedQuestions.filter(q => 
                        ['market-reality', 'binary-decisions', 'competitive-analysis', 'speed-strategy'].includes(q.filterId)
                      ).map(q => q.title).slice(0, 2);
                      
                      const explanationText = selectedProblemType === 'market-decision'
                        ? `Based on your answers${marketTriggers.length > 0 ? ` about ${marketTriggers.join(' and ')}` : ''}, you're stuck in analysis paralysis about this market opportunity. You have the data but can't make the call. We need to force a binary decision.`
                        : `Based on your answers${marketTriggers.length > 0 ? ` about ${marketTriggers.join(' and ')}` : ''}, you're making decisions based on assumptions instead of real market data. Until you know what customers actually want and will pay for, everything else is guessing.`
                      
                      return (
                        <div className="p-6 border-2 border-green-500 bg-green-950">
                          <h4 className="text-xl font-black text-green-400 mb-3">YOU NEED: THE MARKET SMACKDOWN</h4>
                          <div className="mb-4 p-3 bg-green-900 bg-opacity-50 border border-green-700">
                            <h5 className="text-sm font-bold text-green-300 mb-2">WHY THIS INTERVENTION:</h5>
                            <p className="text-xs text-green-200">{explanationText}</p>
                          </div>
                          <p className="text-green-200 mb-4">
                            3-day intensive for brutal GO/NO-GO market decisions using real data, not opinions. 
                            Break analysis paralysis and force definitive market clarity with evidence.
                          </p>
                          <p className="text-sm text-green-300">
                            <strong>Investment:</strong> $2,250 • <strong>Next step:</strong> Book The Market Smackdown 
                            to get out of research mode and into clear market action.
                          </p>
                        </div>
                      );
                    } else if (selectedProblemType === 'stuck-patterns' || selectedFilters.includes('pattern-breaking') || selectedFilters.some(filter => ['energy-drain', 'pattern-breaking', 'momentum-loss', 'process-dysfunction'].includes(filter))) {
                      const patternTriggers = selectedQuestions.filter(q => 
                        ['pattern-breaking', 'energy-drain', 'momentum-loss', 'process-dysfunction'].includes(q.filterId)
                      ).map(q => q.title).slice(0, 2);
                      
                      const explanationText = selectedProblemType === 'stuck-patterns'
                        ? `Based on your answers${patternTriggers.length > 0 ? ` about ${patternTriggers.join(' and ')}` : ''}, you're repeating the same problems, draining energy in predictable ways, and stuck in cycles. These patterns will kill any solution we try unless we break them first.`
                        : `Based on your answers${patternTriggers.length > 0 ? ` about ${patternTriggers.join(' and ')}` : ''}, you have recurring problems and energy drains that keep sabotaging progress. The surface issue you picked isn't the real problem - the destructive patterns underneath are.`
                      
                      return (
                        <div className="p-6 border-2 border-orange-500 bg-orange-950">
                          <h4 className="text-xl font-black text-orange-400 mb-3">YOU NEED: THE OVERRIDE</h4>
                          <div className="mb-4 p-3 bg-orange-900 bg-opacity-50 border border-orange-700">
                            <h5 className="text-sm font-bold text-orange-300 mb-2">WHY THIS INTERVENTION:</h5>
                            <p className="text-xs text-orange-200">{explanationText}</p>
                          </div>
                          <p className="text-orange-200 mb-4">
                            30-day intensive pattern interruption to break destructive cycles and energy drains. 
                            Install new operating systems and eliminate the dysfunction patterns sabotaging momentum.
                          </p>
                          <p className="text-sm text-orange-300">
                            <strong>Investment:</strong> $3,000 • <strong>Next step:</strong> Book The Override intervention 
                            to break the patterns keeping you stuck and rebuild sustainable momentum.
                          </p>
                        </div>
                      );
                    } else if (selectedProblemType === 'need-to-ship' || selectedFilters.includes('mvp-building') || selectedFilters.includes('shipping-paralysis')) {
                      const shippingTriggers = selectedQuestions.filter(q => 
                        ['shipping-paralysis', 'mvp-building', 'perfectionism', 'execution-focus'].includes(q.filterId)
                      ).map(q => q.title).slice(0, 2);
                      
                      const explanationText = selectedProblemType === 'need-to-ship'
                        ? `Based on your answers${shippingTriggers.length > 0 ? ` about ${shippingTriggers.join(' and ')}` : ''}, you have classic perfectionism paralysis - planning addiction, scope creep, waiting for perfect conditions. You need forced shipping discipline to break the cycle.`
                        : `Based on your answers${shippingTriggers.length > 0 ? ` about ${shippingTriggers.join(' and ')}` : ''}, you're overthinking instead of building. The solution to your problem isn't more analysis - it's getting a working product in front of real users and learning from their reactions.`
                      
                      return (
                        <div className="p-6 border-2 border-blue-500 bg-blue-950">
                          <h4 className="text-xl font-black text-blue-400 mb-3">YOU NEED: THE BUILD</h4>
                          <div className="mb-4 p-3 bg-blue-900 bg-opacity-50 border border-blue-700">
                            <h5 className="text-sm font-bold text-blue-300 mb-2">WHY THIS INTERVENTION:</h5>
                            <p className="text-xs text-blue-200">{explanationText}</p>
                          </div>
                          <p className="text-blue-200 mb-4">
                            4-week intensive to break perfectionism paralysis and ship working MVP. 
                            Break planning addiction, eliminate scope creep, and get real product in front of users.
                          </p>
                          <p className="text-sm text-blue-300">
                            <strong>Investment:</strong> $4,500 • <strong>Next step:</strong> Book The Build intervention 
                            to break through perfectionism and ship your MVP within 30 days.
                          </p>
                        </div>
                      );
                    } else {
                      return (
                        <div className="p-6 border-2 border-red-500 bg-red-950">
                          <h4 className="text-xl font-black text-red-400 mb-3">MULTIPLE PATTERNS DETECTED</h4>
                          <div className="mb-4 p-3 bg-red-900 bg-opacity-50 border border-red-700">
                            <h5 className="text-sm font-bold text-red-300 mb-2">WHY NO SINGLE INTERVENTION:</h5>
                            <p className="text-xs text-red-200">
                              Your answers show problems in multiple areas - truth issues AND relationship problems AND pattern dysfunction. 
                              One intervention won\'t fix everything. We need to tackle these in the right order.
                            </p>
                          </div>
                          <p className="text-red-200 mb-4">
                            Your situation involves multiple complex patterns requiring strategic intervention sequencing. 
                            Let's determine the right starting point and intervention order.
                          </p>
                          <p className="text-sm text-red-300">
                            <strong>Next step:</strong> Book a pattern analysis call to identify your primary intervention 
                            and create a strategic sequence for breakthrough.
                          </p>
                        </div>
                      );
                    }
                  })()}
                </div>

                {/* Action Buttons */}
                <div className="text-center">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <Link
                      href={generateInterventionRoute()}
                      className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
                    >
                      DEPLOY INTERVENTION
                    </Link>
                    <button
                      onClick={backToProblemType}
                      className="border-2 border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors"
                    >
                      START OVER
                    </button>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                    <Link href="/interventions" className="text-zinc-400 hover:text-white transition-colors">
                      View All Professional Interventions →
                    </Link>
                    <Link href="/tools" className="text-zinc-400 hover:text-white transition-colors">
                      Browse DIY Tools →
                    </Link>
                    <Link href="/diagnostic" className="text-zinc-400 hover:text-white transition-colors">
                      Take Full Pattern Diagnostic →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default StartPage;