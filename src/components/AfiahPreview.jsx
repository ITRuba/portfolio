import React from 'react';
import { Heart, Activity, Flame, Droplet, Moon, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AfiahPreview() {
  return (
    <div className="bg-[#FFFFFF] border border-[#E8DEDA] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E8DEDA]">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold text-[#292525]">Afiah | عافية</span>
            <span className="px-2.5 py-0.5 bg-[#F7E8E8] text-[#B98286] text-[11px] font-medium rounded-full">
              Empathetic AI Wellness
            </span>
          </div>
          <p className="text-xs text-[#817575] mt-0.5">Personalized Daily Guidance & Adaptive Health Coaching</p>
        </div>

        {/* Daily Recovery Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#FBF7F5] border border-[#E8DEDA] rounded-full text-xs text-[#817575]">
          <Moon className="w-3.5 h-3.5 text-[#B98286]" />
          <span>Sleep Quality: <strong className="text-[#292525] font-semibold">8.2 hrs (Restful)</strong></span>
        </div>
      </div>

      {/* Hero Health Score & Core Rings */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left: Overall Health Score Widget */}
        <div className="md:col-span-5 p-6 bg-gradient-to-br from-[#FBF7F5] to-[#F7E8E8]/40 border border-[#E8C8CA]/60 rounded-2xl flex flex-col items-center justify-center text-center space-y-3">
          <div className="text-xs font-medium text-[#817575] uppercase tracking-wider">Today's Readiness Score</div>
          <div className="relative flex items-center justify-center">
            <svg className="w-32 h-32 transform -rotate-90">
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
              <span className="text-3xl font-serif font-bold text-[#292525]">90</span>
              <span className="text-[10px] text-[#817575] font-medium">Optimal Energy</span>
            </div>
          </div>
          <p className="text-xs text-[#817575]">"High recovery detected. Ideal day for strength building."</p>
        </div>

        {/* Right: Metrics Grid */}
        <div className="md:col-span-7 grid grid-cols-2 gap-4">
          {/* Workout Recommendation */}
          <div className="p-4 bg-[#FBF7F5] border border-[#E8DEDA] rounded-xl space-y-2">
            <div className="flex items-center justify-between text-xs text-[#817575]">
              <span className="flex items-center gap-1.5 font-medium text-[#292525]">
                <Activity className="w-4 h-4 text-[#B98286]" /> AI Workout
              </span>
              <span className="text-[10px] text-[#B98286] font-mono">25 Min</span>
            </div>
            <div className="text-sm font-semibold text-[#292525]">Low-Impact Pilates</div>
            <p className="text-[11px] text-[#817575] leading-tight">Tailored to active muscle recovery and mental focus.</p>
          </div>

          {/* Hydration */}
          <div className="p-4 bg-[#FBF7F5] border border-[#E8DEDA] rounded-xl space-y-2">
            <div className="flex items-center justify-between text-xs text-[#817575]">
              <span className="flex items-center gap-1.5 font-medium text-[#292525]">
                <Droplet className="w-4 h-4 text-[#B98286]" /> Hydration
              </span>
              <span className="text-[10px] text-emerald-600 font-mono">75%</span>
            </div>
            <div className="text-sm font-semibold text-[#292525]">2.1 L / 2.8 L</div>
            <div className="w-full h-2 bg-[#E8DEDA] rounded-full overflow-hidden">
              <div className="h-full bg-[#B98286] rounded-full w-3/4" />
            </div>
          </div>

          {/* Steps */}
          <div className="p-4 bg-[#FBF7F5] border border-[#E8DEDA] rounded-xl space-y-2">
            <div className="flex items-center justify-between text-xs text-[#817575]">
              <span className="flex items-center gap-1.5 font-medium text-[#292525]">
                <Flame className="w-4 h-4 text-[#B98286]" /> Active Steps
              </span>
              <span className="text-[10px] text-[#817575] font-mono">Target 8k</span>
            </div>
            <div className="text-sm font-semibold text-[#292525]">7,420 steps</div>
            <p className="text-[11px] text-[#817575]">420 kcal burned</p>
          </div>

          {/* Mood Logging */}
          <div className="p-4 bg-[#FBF7F5] border border-[#E8DEDA] rounded-xl space-y-2">
            <div className="flex items-center justify-between text-xs text-[#817575]">
              <span className="flex items-center gap-1.5 font-medium text-[#292525]">
                <Heart className="w-4 h-4 text-[#B98286]" /> Mood & Mind
              </span>
              <span className="text-[10px] text-[#B98286]">Logged</span>
            </div>
            <div className="text-sm font-semibold text-[#292525]">Calm & Focused ✨</div>
            <p className="text-[11px] text-[#817575]">Guided breathing completed</p>
          </div>
        </div>
      </div>

      {/* AI Nutrition Insight Bar */}
      <div className="p-4 bg-[#F7E8E8]/50 border border-[#E8C8CA] rounded-xl flex items-center justify-between gap-4 text-xs text-[#292525]">
        <div className="flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-[#B98286] shrink-0" />
          <span><strong>AI Nutrition Insight:</strong> Post-workout recommendation: Rich protein breakfast with antioxidants to support muscle synthesis.</span>
        </div>
        <span className="hidden sm:inline-flex text-[11px] font-mono text-[#B98286] shrink-0">Personalized</span>
      </div>
    </div>
  );
}
