import BilingualTitle from './BilingualTitle';
import { Heart, Activity, Flame, Droplet, Moon, Sparkles } from 'lucide-react';

export default function AfiahPreview() {
  return (
    <div className="bg-white border border-line rounded-2xl p-4 sm:p-8 shadow-xs space-y-6">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-line">
        <div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-serif text-xl font-bold text-ink whitespace-nowrap"><BilingualTitle text="Afiah | عافية" /></span>
            <span className="px-2.5 py-0.5 bg-blush text-accent-ink text-[11px] font-medium rounded-full">
              Empathetic AI Wellness
            </span>
          </div>
          <p className="text-xs text-muted mt-0.5">Personalized Daily Guidance & Adaptive Health Coaching</p>
        </div>

        {/* Daily Recovery Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-ivory border border-line rounded-full text-xs text-muted">
          <Moon className="w-3.5 h-3.5 text-accent" />
          <span>Sleep Quality: <strong className="text-ink font-semibold">8.2 hrs (Restful)</strong></span>
        </div>
      </div>

      {/* Hero Health Score & Core Rings */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left: Overall Health Score Widget */}
        <div className="md:col-span-5 p-6 bg-gradient-to-br from-ivory to-blush/40 border border-blush-strong/60 rounded-2xl flex flex-col items-center justify-center text-center space-y-3">
          <div className="text-xs font-medium text-muted uppercase tracking-wider">Today's Readiness Score</div>
          <div className="relative flex items-center justify-center">
            <svg className="w-32 h-32 transform -rotate-90" aria-hidden="true">
              <circle cx="64" cy="64" r="54" stroke="#E8DEDA" strokeWidth="8" fill="transparent" />
              <circle
                cx="64"
                cy="64"
                r="54"
                stroke="#B98286"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray="339.29"
                strokeDashoffset="33.9"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-serif font-bold text-ink">90</span>
              <span className="text-[10px] text-muted font-medium">Optimal Energy</span>
            </div>
          </div>
          <p className="text-xs text-muted">"High recovery detected. Ideal day for strength building."</p>
        </div>

        {/* Right: Metrics Grid */}
        <div className="md:col-span-7 grid grid-cols-1 min-[420px]:grid-cols-2 gap-4">
          {/* Workout Recommendation */}
          <div className="p-4 bg-ivory border border-line rounded-xl space-y-2">
            <div className="flex items-center justify-between gap-2 text-xs text-muted">
              <span className="flex items-center gap-1.5 font-medium text-ink">
                <Activity className="w-4 h-4 text-accent" /> AI Workout
              </span>
              <span className="text-[10px] text-accent-ink font-mono">25 Min</span>
            </div>
            <div className="text-sm font-semibold text-ink">Low-Impact Pilates</div>
            <p className="text-[11px] text-muted leading-tight">Tailored to active muscle recovery and mental focus.</p>
          </div>

          {/* Hydration */}
          <div className="p-4 bg-ivory border border-line rounded-xl space-y-2">
            <div className="flex items-center justify-between gap-2 text-xs text-muted">
              <span className="flex items-center gap-1.5 font-medium text-ink">
                <Droplet className="w-4 h-4 text-accent" /> Hydration
              </span>
              <span className="text-[10px] text-emerald-700 font-mono">75%</span>
            </div>
            <div className="text-sm font-semibold text-ink">2.1 L / 2.8 L</div>
            <div className="w-full h-2 bg-line rounded-full overflow-hidden">
              <div className="h-full bg-accent rounded-full w-3/4" />
            </div>
          </div>

          {/* Steps */}
          <div className="p-4 bg-ivory border border-line rounded-xl space-y-2">
            <div className="flex items-center justify-between gap-2 text-xs text-muted">
              <span className="flex items-center gap-1.5 font-medium text-ink">
                <Flame className="w-4 h-4 text-accent" /> Active Steps
              </span>
              <span className="text-[10px] text-muted font-mono">Target 8k</span>
            </div>
            <div className="text-sm font-semibold text-ink">7,420 steps</div>
            <p className="text-[11px] text-muted">420 kcal burned</p>
          </div>

          {/* Mood Logging */}
          <div className="p-4 bg-ivory border border-line rounded-xl space-y-2">
            <div className="flex items-center justify-between gap-2 text-xs text-muted">
              <span className="flex items-center gap-1.5 font-medium text-ink">
                <Heart className="w-4 h-4 text-accent" /> Mood & Mind
              </span>
              <span className="text-[10px] text-accent-ink">Logged</span>
            </div>
            <div className="text-sm font-semibold text-ink">Calm & Focused ✨</div>
            <p className="text-[11px] text-muted">Guided breathing completed</p>
          </div>
        </div>
      </div>

      {/* AI Nutrition Insight Bar */}
      <div className="p-4 bg-blush/50 border border-blush-strong rounded-xl flex items-center justify-between gap-4 text-xs text-ink">
        <div className="flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-accent shrink-0" />
          <span><strong>AI Nutrition Insight:</strong> Post-workout recommendation: Rich protein breakfast with antioxidants to support muscle synthesis.</span>
        </div>
        <span className="hidden sm:inline-flex text-[11px] font-mono text-accent-ink shrink-0">Personalized</span>
      </div>
    </div>
  );
}
