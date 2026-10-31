import React, { useState } from 'react';
import { Zap, Droplets, Sun, TrendingDown, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function WafeerPreview() {
  const [activeTab, setActiveTab] = useState('electricity');

  return (
    <div className="bg-[#FFFFFF] border border-[#E8DEDA] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
      {/* Mockup Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E8DEDA]">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold text-[#292525]">Wafeer | وفير</span>
            <span className="px-2.5 py-0.5 bg-[#F7E8E8] text-[#B98286] text-[11px] font-medium rounded-full">
              Live AI Telemetry
            </span>
          </div>
          <p className="text-xs text-[#817575] mt-0.5">Household Utility Telemetry & Consumption Decision Platform</p>
        </div>

        {/* Tab Toggle */}
        <div className="flex items-center p-1 bg-[#FBF7F5] border border-[#E8DEDA] rounded-lg text-xs font-medium">
          <button
            onClick={() => setActiveTab('electricity')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
              activeTab === 'electricity'
                ? 'bg-[#FFFFFF] text-[#292525] shadow-2xs font-semibold'
                : 'text-[#817575] hover:text-[#292525]'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-[#B98286]" />
            <span>Electricity (kWh)</span>
          </button>
          <button
            onClick={() => setActiveTab('water')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
              activeTab === 'water'
                ? 'bg-[#FFFFFF] text-[#292525] shadow-2xs font-semibold'
                : 'text-[#817575] hover:text-[#292525]'
            }`}
          >
            <Droplets className="w-3.5 h-3.5 text-[#B98286]" />
            <span>Water (Liters)</span>
          </button>
        </div>
      </div>

      {/* Main KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* KPI 1 */}
        <div className="p-4 bg-[#FBF7F5] border border-[#E8DEDA] rounded-xl">
          <div className="flex items-center justify-between text-xs text-[#817575]">
            <span>Monthly Consumption</span>
            {activeTab === 'electricity' ? <Zap className="w-4 h-4 text-[#B98286]" /> : <Droplets className="w-4 h-4 text-[#B98286]" />}
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-serif text-[#292525]">
              {activeTab === 'electricity' ? '1,420 kWh' : '18,500 L'}
            </span>
            <span className="text-xs font-medium text-emerald-600 flex items-center gap-0.5">
              <TrendingDown className="w-3 h-3" /> -14% vs last month
            </span>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="p-4 bg-[#FBF7F5] border border-[#E8DEDA] rounded-xl">
          <div className="flex items-center justify-between text-xs text-[#817575]">
            <span>Estimated Bill Impact</span>
            <span className="text-[10px] font-mono text-[#B98286]">GCC Tariff</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-serif text-[#292525]">
              {activeTab === 'electricity' ? '284.00 SAR' : '112.50 SAR'}
            </span>
            <span className="text-xs text-[#817575]">Saved 48 SAR</span>
          </div>
        </div>

        {/* KPI 3 - Sustainability Index */}
        <div className="p-4 bg-[#F7E8E8]/50 border border-[#E8C8CA]/60 rounded-xl">
          <div className="flex items-center justify-between text-xs text-[#817575]">
            <span>Sustainability Index</span>
            <Sparkles className="w-4 h-4 text-[#B98286]" />
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-2xl font-bold font-serif text-[#B98286]">94 / 100</span>
            <span className="px-2 py-0.5 bg-[#FFFFFF] text-[10px] font-semibold text-[#292525] rounded-full border border-[#E8C8CA]">
              Top 5% Household
            </span>
          </div>
        </div>
      </div>

      {/* Consumption Breakdown Bar Chart Visual & Weather Correlation */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Visual Chart */}
        <div className="md:col-span-7 space-y-3 p-4 bg-[#FBF7F5] border border-[#E8DEDA] rounded-xl">
          <div className="flex items-center justify-between text-xs text-[#817575]">
            <span className="font-medium text-[#292525]">Weekly Peak vs Off-Peak Usage</span>
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
                <span className="w-8 font-mono text-[#817575]">{item.day}</span>
                <div className="flex-1 h-3.5 bg-[#E8DEDA]/60 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#B98286] rounded-full transition-all duration-500"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
                <span className="w-24 text-[10px] text-[#817575] text-right truncate">{item.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Recommendations Card */}
        <div className="md:col-span-5 p-5 bg-[#FFFFFF] border border-[#E8C8CA] rounded-xl shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#B98286]">
            <Sparkles className="w-4 h-4" />
            <span>AI Habit Recommendation</span>
          </div>
          <p className="text-xs text-[#292525] leading-relaxed">
            "Outside temperature is forecasted to reach 44°C at 2:00 PM tomorrow. Adjusting thermostat by 2°C pre-noon will save ~18.50 SAR this week."
          </p>
          <div className="pt-2 flex items-center justify-between border-t border-[#E8DEDA]/60 text-[11px] text-[#817575]">
            <span className="flex items-center gap-1 text-emerald-600 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" /> High Impact
            </span>
            <span className="font-mono text-[#B98286]">From bill to decision</span>
          </div>
        </div>
      </div>
    </div>
  );
}
