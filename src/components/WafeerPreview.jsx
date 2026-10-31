import BilingualTitle from './BilingualTitle';
import { useState } from 'react';
import { Zap, Droplets, TrendingDown, Sparkles, CheckCircle2 } from 'lucide-react';

export default function WafeerPreview() {
  const [activeTab, setActiveTab] = useState('electricity');

  return (
    <div className="bg-white border border-line rounded-2xl p-4 sm:p-8 shadow-xs space-y-6">
      {/* Mockup Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-line">
        <div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-serif text-xl font-bold text-ink whitespace-nowrap"><BilingualTitle text="Wafeer | وفير" /></span>
            <span className="px-2.5 py-0.5 bg-blush text-accent-ink text-[11px] font-medium rounded-full">
              Live AI Telemetry
            </span>
          </div>
          <p className="text-xs text-muted mt-0.5">Household Utility Telemetry & Consumption Decision Platform</p>
        </div>

        {/* Tab Toggle */}
        <div className="flex items-center p-1 bg-ivory border border-line rounded-lg text-xs font-medium" role="group" aria-label="Utility type">
          <button
            type="button"
            onClick={() => setActiveTab('electricity')}
            aria-pressed={activeTab === 'electricity'}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
              activeTab === 'electricity'
                ? 'bg-white text-ink shadow-2xs font-semibold'
                : 'text-muted hover:text-ink'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-accent" />
            <span>Electricity (kWh)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('water')}
            aria-pressed={activeTab === 'water'}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
              activeTab === 'water'
                ? 'bg-white text-ink shadow-2xs font-semibold'
                : 'text-muted hover:text-ink'
            }`}
          >
            <Droplets className="w-3.5 h-3.5 text-accent" />
            <span>Water (Liters)</span>
          </button>
        </div>
      </div>

      {/* Main KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* KPI 1 */}
        <div className="p-4 bg-ivory border border-line rounded-xl">
          <div className="flex items-center justify-between text-xs text-muted">
            <span>Monthly Consumption</span>
            {activeTab === 'electricity' ? <Zap className="w-4 h-4 text-accent" /> : <Droplets className="w-4 h-4 text-accent" />}
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-serif text-ink">
              {activeTab === 'electricity' ? '1,420 kWh' : '18,500 L'}
            </span>
            <span className="text-xs font-medium text-emerald-700 flex items-center gap-0.5">
              <TrendingDown className="w-3 h-3" /> -14% vs last month
            </span>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="p-4 bg-ivory border border-line rounded-xl">
          <div className="flex items-center justify-between text-xs text-muted">
            <span>Estimated Bill Impact</span>
            <span className="text-[10px] font-mono text-accent-ink">GCC Tariff</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-serif text-ink">
              {activeTab === 'electricity' ? '284.00 SAR' : '112.50 SAR'}
            </span>
            <span className="text-xs text-muted">Saved 48 SAR</span>
          </div>
        </div>

        {/* KPI 3 - Sustainability Index */}
        <div className="p-4 bg-blush/50 border border-blush-strong/60 rounded-xl">
          <div className="flex items-center justify-between text-xs text-muted">
            <span>Sustainability Index</span>
            <Sparkles className="w-4 h-4 text-accent" />
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-2xl font-bold font-serif text-accent-display">94 / 100</span>
            <span className="px-2 py-0.5 bg-white text-[10px] font-semibold text-ink rounded-full border border-blush-strong">
              Top 5% Household
            </span>
          </div>
        </div>
      </div>

      {/* Consumption Breakdown Bar Chart Visual & Weather Correlation */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Visual Chart */}
        <div className="md:col-span-7 space-y-3 p-4 bg-ivory border border-line rounded-xl">
          <div className="flex items-center justify-between text-xs text-muted">
            <span className="font-medium text-ink">Weekly Peak vs Off-Peak Usage</span>
            <span className="text-[11px]">August 2026</span>
          </div>

          <div className="space-y-2 pt-2">
            {[
              { day: 'Sun', value: 65, status: 'Normal' },
              { day: 'Mon', value: 85, status: 'AC Peak (42°C)' },
              { day: 'Tue', value: 50, status: 'Optimal' },
              { day: 'Wed', value: 72, status: 'Normal' },
              { day: 'Thu', value: 45, status: 'Eco Habit Active' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-xs">
                <span className="w-8 font-mono text-muted">{item.day}</span>
                <div className="flex-1 h-3.5 bg-line/60 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-500"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
                <span className="w-24 text-[10px] text-muted text-right truncate">{item.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Recommendations Card */}
        <div className="md:col-span-5 p-5 bg-white border border-blush-strong rounded-xl shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-accent-ink">
            <Sparkles className="w-4 h-4" />
            <span>AI Habit Recommendation</span>
          </div>
          <p className="text-xs text-ink leading-relaxed">
            "Outside temperature is forecasted to reach 44°C at 2:00 PM tomorrow. Adjusting thermostat by 2°C pre-noon will save ~18.50 SAR this week."
          </p>
          <div className="pt-2 flex items-center justify-between border-t border-line/60 text-[11px] text-muted">
            <span className="flex items-center gap-1 text-emerald-700 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" /> High Impact
            </span>
            <span className="font-mono text-accent-ink">From bill to decision</span>
          </div>
        </div>
      </div>
    </div>
  );
}
