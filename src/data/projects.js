export const projects = [
  {
    id: "wafeer",
    number: "01",
    title: "Wafeer | وفير",
    category: "AI · Sustainability · Product Design",
    shortDescription: "An intelligent platform that transforms household electricity and water consumption into clear insights, decisions, and more sustainable habits.",
    highlight: "From a bill to a decision.",
    ctaText: "View case study →",
    heroTags: ["AI Analytics", "Sustainability", "Smart Utilities", "Dashboard UX"],
    overview: "Wafeer is a digital product designed to solve a fundamental household problem: utility bills are abstract numbers delivered once a month without real-time breakdown or actionable guidance. By combining utility smart meter telemetry with localized AI reasoning, Wafeer transforms raw data into understandable household decisions.",
    problem: "Most households receive monthly utility bills with zero visibility into which appliances consumed the most energy or water. Standard bills offer past financial totals without actionable advice, leading to wasted electricity, high utility expenses, and unsustainable resource consumption.",
    idea: "What if utility data was converted from a passive financial document into an active daily habit coach? Wafeer bridges telemetry data and localized weather forecasts using AI to deliver timely, practical nudges (e.g., 'Temperatures will peak at 44°C tomorrow. Pre-cool your living space before 1:00 PM to reduce bill costs by 15%').",
    solution: "A unified web dashboard featuring dual electricity and water telemetry trackers, bill predictor engines, localized weather correlation widgets, and AI-generated sustainable habit recommendations customized to house size and family habits.",
    role: "Lead Product Designer & AI Systems Developer",
    userFlow: [
      { step: "01", title: "Data Ingestion", desc: "Sync smart meter telemetry or upload monthly utility bill PDF" },
      { step: "02", title: "Pattern Analysis", desc: "AI engine calculates baseline consumption vs weather & household size" },
      { step: "03", title: "Insight Generation", desc: "Generates daily actionable decisions and appliance usage breakdowns" },
      { step: "04", title: "Habit Tracking", desc: "Users complete mini sustainability challenges and track financial savings" }
    ],
    technicalArchitecture: {
      backend: "Python FastAPI microservices for telemetry processing",
      aiEngine: "LLM + custom prompt pipeline for localized usage recommendation",
      database: "PostgreSQL for historical consumption logs & user preferences",
      frontend: "React with dynamic SVG charts and Framer Motion micro-interactions"
    },
    challenges: "Parsing non-standard utility bill PDFs alongside IoT meter logs required robust validation pipelines. Furthermore, preventing notification fatigue meant consolidating micro-insights into a single daily 'Morning Sustainability Digest'.",
    learnings: "Data visualization is only effective if it drives physical human behavior change. Translating kWh into currency and carbon savings made users 3x more likely to act on recommendations."
  },
  {
    id: "afiah",
    number: "02",
    title: "Afiah | عافية",
    category: "AI · Health · Product Design",
    shortDescription: "An AI-powered wellness platform designed to turn personal health goals into personalized daily actions.",
    highlight: "Personalized guidance powered by AI.",
    ctaText: "View case study →",
    heroTags: ["AI Health", "Product Strategy", "Habit Design", "Wellness UX"],
    overview: "Afiah is a modern wellness application built to transform static fitness goals into dynamic daily guidance. Rather than imposing rigid 10,000-step routines, Afiah uses AI context modeling to adapt workout, nutrition, and recovery suggestions based on daily sleep, stress, and user schedules.",
    problem: "Traditional health and fitness apps bombard users with generic, non-adaptive targets. When users miss a day due to work stress or fatigue, rigid apps make them feel guilty, leading to abandoned health habits.",
    idea: "Afiah introduces 'Empathetic Adaptive Guidance'. If a user slept poorly or has a full calendar, the AI automatically adjusts targets—recommending a 15-minute gentle stretch and hydration focus instead of an intense cardio session.",
    solution: "A serene wellness dashboard highlighting a holistic Daily Health Score, adaptive exercise and nutrition plans, hydration & step trackers, mood logging, and an intelligent wellness companion.",
    role: "UI/UX Designer & Product Lead",
    userFlow: [
      { step: "01", title: "Morning Check-in", desc: "App reads wearable recovery metrics & quick user mood check" },
      { step: "02", title: "Adaptive Plan", desc: "AI generates realistic 3 daily wellness actions suited for today" },
      { step: "03", title: "Progress Logging", desc: "Seamless 1-tap logging for meals, water, and completed movement" },
      { step: "04", title: "Evening Reflection", desc: "Gentle summary of wins without punitive streak breaks" }
    ],
    technicalArchitecture: {
      backend: "Node.js REST API with modular health score calculator",
      aiCompanion: "RAG-enabled LLM assistant trained on verified wellness & nutrition frameworks",
      database: "Firebase Realtime DB for instant cross-device synchronization",
      designSystem: "Tailwind CSS custom palette with soft blush & warm taupe accents"
    },
    challenges: "Ensuring AI health guidance strictly stays within non-medical wellness boundaries while remaining personalized and genuinely useful.",
    learnings: "Empathy-first UI copy increases user retention dramatically. Products designed to accommodate human flexibility foster long-term positive behavior."
  },
  {
    id: "ai-agent",
    number: "03",
    title: "AI Agent Systems",
    category: "AI · Automation · Agent Architecture",
    shortDescription: "Designing intelligent agents that reason, use tools, validate information, and make decisions instead of simply generating text.",
    highlight: "Autonomous workflows built with rigor.",
    ctaText: "View case study →",
    heroTags: ["Agent Topology", "Tool Calling", "Validation", "Hallucination Prevention"],
    overview: "An architectural exploration and implementation of multi-step autonomous AI agents. Unlike simple chat models, these agent systems incorporate structured reasoning (ReAct loop), external tool execution, memory state management, and schema validation gates.",
    problem: "Standard raw LLMs frequently suffer from hallucinations, lack real-time factual data access, and fail when tasks require execution across external APIs and database schemas.",
    idea: "Build a modular agent runtime where LLMs act as cognitive orchestrators—reasoning step-by-step, choosing tools deterministically, validating intermediate data with Pydantic, and executing safe workflows.",
    solution: "An interactive, transparent agent visualizer and execution engine that exposes every stage of reasoning: User Input → Agent Routing → ReAct Loop → Tool Invocation → Validation & Guardrails → Final Decision → User Response.",
    role: "AI Architecture & Systems Developer",
    userFlow: [
      { step: "01", title: "User Prompt", desc: "Receives raw request from human operator or external trigger" },
      { step: "02", title: "Reasoning Loop", desc: "Evaluates task decomposition & formulates tool calling strategy" },
      { step: "03", title: "Tool Execution", desc: "Executes SQL query, web search API, or document lookup" },
      { step: "04", title: "Validation Gate", desc: "Validates payload structure & checks for hallucinated fields" },
      { step: "05", title: "Final Decision", desc: "Formats validated answer with cited references & confidence score" }
    ],
    technicalArchitecture: {
      framework: "Python LangGraph stateful agent workflow",
      validation: "Pydantic schema enforcement on tool inputs & outputs",
      tools: "Custom SQL Executor, Web Search, PDF Vector Retriever (RAG)",
      memory: "Episodic short-term memory + vector database long-term memory"
    },
    challenges: "Handling non-deterministic API responses and preventing recursive execution loops while maintaining sub-second user response times.",
    learnings: "Reliability in production AI comes from system design, explicit validation schemas, and fallback logic—not prompt engineering alone."
  },
  {
    id: "parko",
    number: "04",
    title: "Parko",
    category: "Mobile App · UI/UX · Database",
    shortDescription: "A smart parking application designed to simplify finding and managing parking spaces.",
    highlight: "Frictionless urban mobility.",
    ctaText: "View project →",
    heroTags: ["Mobile UI/UX", "Firebase", "Realtime Maps", "Database Design"],
    overview: "Parko is an end-to-end mobile application concept designed to eliminate urban parking frustration. Drivers can view real-time slot availability, reserve a space before arriving, and navigate directly to their designated parking bay.",
    problem: "Drivers in busy metropolitan zones spend up to 20 minutes circling blocks searching for open parking spaces, increasing traffic congestion and fuel waste.",
    idea: "A streamlined mobile interface powered by real-time spatial databases that lets drivers view, reserve, and pay for parking spots in under 30 seconds.",
    solution: "A clean mobile UI featuring dynamic interactive maps, live slot indicators (Available / Reserved / Occupied), slot countdown timer, and automated QR code entry.",
    role: "Mobile UI/UX Designer & Database Architect",
    userFlow: [
      { step: "01", title: "Map Discovery", desc: "Displays nearby parking lots with live available slot counts" },
      { step: "02", title: "Spot Selection", desc: "User chooses specific slot number (e.g. A-14, EV Charger)" },
      { step: "03", title: "Reservation", desc: "Holds spot for 15 minutes with 1-tap mobile payment" },
      { step: "04", title: "Check-in", desc: "Scans QR code at barrier gate to start parking session" }
    ],
    technicalArchitecture: {
      frontend: "Mobile UX prototype with interactive vector maps",
      backend: "Firebase Cloud Functions for slot reservation timers",
      database: "Firebase Realtime Database with geospatial index",
      auth: "Firebase Authentication with multi-factor support"
    },
    challenges: "Handling race conditions where two users attempt to reserve the exact same parking slot at the same second.",
    learnings: "Architecting real-time database transactions with atomic field locks is essential when physical world inventory is at stake."
  }
];

export const whatIBuildData = [
  {
    number: "01",
    title: "AI PRODUCTS",
    tags: ["AI agents", "Intelligent workflows", "Prompt engineering", "AI-powered applications"],
    description: "Designing and engineering software that leverages large language models, agentic reasoning, RAG architectures, and custom AI pipelines to make digital products genuinely intelligent."
  },
  {
    number: "02",
    title: "DIGITAL EXPERIENCES",
    tags: ["UI/UX design", "Product thinking", "Interactive interfaces", "User-centered design"],
    description: "Crafting modern, accessible, and editorial user interfaces where complex technology feels intuitive, elegant, and delightful to interact with."
  },
  {
    number: "03",
    title: "DATA & SYSTEMS",
    tags: ["Databases", "APIs", "Data analysis", "Backend logic"],
    description: "Structuring clean backend data schemas, relational databases, RESTful APIs, and telemetry processing pipelines that power decision-making engines."
  }
];

export const techStackData = {
  Programming: ["Python", "Java", "JavaScript"],
  AI: ["LLMs", "Prompt Engineering", "AI Agents", "RAG"],
  Data: ["SQL", "PostgreSQL", "Firebase", "Data Analysis"],
  Development: ["React", "FastAPI", "Git", "GitHub"],
  Design: ["Figma", "UI/UX", "System Design", "Wireframing"]
};

export const journeyTimelineData = [
  {
    title: "AI & Intelligent Systems",
    subtitle: "Agentic Workflows & LLM Integration",
    desc: "Exploring AI agents, multi-step tool calling, prompt engineering, RAG pipelines, and intelligent system architectures."
  },
  {
    title: "Product & UI/UX",
    subtitle: "User-Centered Editorial Design",
    desc: "Learning how technology and design work together to turn complex utility & health data into understandable experiences."
  },
  {
    title: "Data & Systems",
    subtitle: "Backend Foundations & APIs",
    desc: "Building stronger foundations in relational database schema design, RESTful APIs, telemetry parsing, and backend logic."
  }
];
