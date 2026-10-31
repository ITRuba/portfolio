import React, { useState } from 'react';
import { User, Cpu, Brain, Wrench, ShieldCheck, CheckCircle, MessageSquare, Info, Sparkles } from 'lucide-react';

export default function AgentWorkflow() {
  const [activeStep, setActiveStep] = useState(2); // Default to Reasoning

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
    <div className="bg-[#FFFFFF] border border-[#E8DEDA] rounded-2xl p-6 sm:p-8 shadow-xs space-y-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E8DEDA]">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold text-[#292525]">AI Agent Systems Architecture</span>
            <span className="px-2.5 py-0.5 bg-[#F7E8E8] text-[#B98286] text-[11px] font-medium rounded-full">
              Interactive Topology
            </span>
          </div>
          <p className="text-xs text-[#817575] mt-0.5">
            Hover or click nodes below to inspect reasoning, tool calling, and validation gates.
          </p>
        </div>
      </div>

      {/* Interactive Workflow Node Diagram */}
      <div className="relative py-4">
        {/* Horizontal Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-[#E8DEDA] -translate-y-1/2 -z-0" />

        {/* Nodes Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 relative z-10">
          {workflowSteps.map((step) => {
            const StepIcon = step.icon;
            const isActive = activeStep === step.id;

            return (
              <div
                key={step.id}
                onMouseEnter={() => setActiveStep(step.id)}
                onClick={() => setActiveStep(step.id)}
                className={`cursor-pointer group flex flex-col items-center p-3 rounded-xl border transition-all duration-300 ${
                  isActive
                    ? 'bg-[#F7E8E8] border-[#B98286] shadow-sm transform -translate-y-1'
                    : 'bg-[#FBF7F5] border-[#E8DEDA] hover:border-[#E8C8CA]'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    isActive ? 'bg-[#B98286] text-[#FFFFFF]' : 'bg-[#FFFFFF] text-[#817575] group-hover:text-[#B98286]'
                  }`}
                >
                  <StepIcon className="w-5 h-5" />
                </div>
                <div className="mt-2 text-[11px] font-semibold text-[#292525] text-center">{step.name}</div>
                <div className="text-[9px] text-[#817575] text-center font-mono">Stage 0{step.id + 1}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Node Detail Card */}
      <div className="p-6 bg-gradient-to-r from-[#FBF7F5] to-[#F7E8E8]/50 border border-[#E8C8CA] rounded-xl space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#B98286]" />
            <span className="text-xs font-semibold text-[#292525]">
              Stage 0{workflowSteps[activeStep].id + 1}: {workflowSteps[activeStep].name} — {workflowSteps[activeStep].concept}
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#B98286] bg-[#FFFFFF] px-2.5 py-1 rounded-full border border-[#E8C8CA]">
            Active Inspector
          </span>
        </div>

        <p className="text-sm text-[#817575] leading-relaxed">
          {workflowSteps[activeStep].detail}
        </p>

        {/* Technical Concepts Highlights Pills */}
        <div className="pt-2 flex flex-wrap items-center gap-2 border-t border-[#E8DEDA]/70">
          <span className="text-[10px] uppercase tracking-wider text-[#817575] font-semibold">Key Concepts:</span>
          {["Prompt Engineering", "Tool Calling", "Short/Long Memory", "Schema Validation", "Hallucination Prevention", "Human-in-the-loop"].map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 bg-[#FFFFFF] text-[10px] text-[#292525] border border-[#E8DEDA] rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
