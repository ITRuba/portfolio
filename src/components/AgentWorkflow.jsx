import { useId, useState } from 'react';
import { User, Cpu, Brain, Wrench, ShieldCheck, CheckCircle, MessageSquare, Sparkles } from 'lucide-react';

export default function AgentWorkflow() {
  const [activeStep, setActiveStep] = useState(2); // Default to Reasoning
  const detailId = useId();

  const workflowSteps = [
    {
      id: 0,
      name: "User",
      icon: User,
      concept: "Intent Recognition",
      detail: "Receives raw natural language query or telemetry trigger from user or system process."
    },
    {
      id: 1,
      name: "Agent",
      icon: Cpu,
      concept: "Cognitive Router",
      detail: "Evaluates task complexity, loads system instructions, and instantiates short-term state memory."
    },
    {
      id: 2,
      name: "Reasoning",
      icon: Brain,
      concept: "ReAct Loop & Prompt Engineering",
      detail: "Decomposes complex requests into sequential logical sub-problems before acting."
    },
    {
      id: 3,
      name: "Tool",
      icon: Wrench,
      concept: "Tool Calling & API Execution",
      detail: "Invokes deterministic external functions: SQL query execution, vector search, or HTTP REST endpoints."
    },
    {
      id: 4,
      name: "Validation",
      icon: ShieldCheck,
      concept: "Validation & Hallucination Prevention",
      detail: "Validates output payloads against strict Pydantic schemas; enforces safety guardrails."
    },
    {
      id: 5,
      name: "Decision",
      icon: CheckCircle,
      concept: "Human-in-the-loop Gate",
      detail: "Determines whether confidence threshold is met or escalates high-risk actions for approval."
    },
    {
      id: 6,
      name: "Response",
      icon: MessageSquare,
      concept: "Structured Output",
      detail: "Formats verified answer with citations, confidence scores, and structured JSON UI payload."
    }
  ];

  return (
    <div className="bg-white border border-line rounded-2xl p-4 sm:p-8 shadow-xs space-y-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-line">
        <div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-serif text-xl font-bold text-ink whitespace-nowrap">AI Agent Systems Architecture</span>
            <span className="px-2.5 py-0.5 bg-blush text-accent-ink text-[11px] font-medium rounded-full">
              Interactive Topology
            </span>
          </div>
          <p className="text-xs text-muted mt-0.5">
            Hover or click nodes below to inspect reasoning, tool calling, and validation gates.
          </p>
        </div>
      </div>

      {/* Interactive Workflow Node Diagram */}
      <div className="relative py-4">
        {/* Horizontal Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-line -translate-y-1/2 -z-0" aria-hidden="true" />

        {/* Nodes Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 relative z-10">
          {workflowSteps.map((step) => {
            const StepIcon = step.icon;
            const isActive = activeStep === step.id;

            return (
              <button
                type="button"
                key={step.id}
                onMouseEnter={() => setActiveStep(step.id)}
                onClick={() => setActiveStep(step.id)}
                aria-pressed={isActive}
                aria-controls={detailId}
                className={`cursor-pointer group flex flex-col items-center p-3 rounded-xl border transition-all duration-300 ${
                  isActive
                    ? 'bg-blush border-accent shadow-sm transform -translate-y-1'
                    : 'bg-ivory border-line hover:border-blush-strong'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    isActive ? 'bg-accent text-white' : 'bg-white text-muted group-hover:text-accent-ink'
                  }`}
                >
                  <StepIcon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="mt-2 text-[11px] font-semibold text-ink text-center">{step.name}</div>
                <div className="text-[10px] text-muted text-center font-mono">Stage 0{step.id + 1}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Node Detail Card */}
      <div
        id={detailId}
        aria-live="polite"
        className="p-6 bg-gradient-to-r from-ivory to-blush/50 border border-blush-strong rounded-xl space-y-3"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent shrink-0" />
            <span className="text-xs font-semibold text-ink">
              Stage 0{workflowSteps[activeStep].id + 1}: {workflowSteps[activeStep].name} — {workflowSteps[activeStep].concept}
            </span>
          </div>
          <span className="text-[10px] font-mono text-accent-ink bg-white px-2.5 py-1 rounded-full border border-blush-strong">
            Active Inspector
          </span>
        </div>

        <p className="text-sm text-muted leading-relaxed">
          {workflowSteps[activeStep].detail}
        </p>

        {/* Technical Concepts Highlights Pills */}
        <div className="pt-2 flex flex-wrap items-center gap-2 border-t border-line/70">
          <span className="text-[10px] uppercase tracking-wider text-muted font-semibold">Key Concepts:</span>
          {["Prompt Engineering", "Tool Calling", "Short/Long Memory", "Schema Validation", "Hallucination Prevention", "Human-in-the-loop"].map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 bg-white text-[10px] text-ink border border-line rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
