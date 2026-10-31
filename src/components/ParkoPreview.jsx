import React from 'react';
import { MapPin, Car, Clock, Navigation, Database, ShieldCheck } from 'lucide-react';

export default function ParkoPreview() {
  return (
    <div className="bg-[#FFFFFF] border border-[#E8DEDA] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E8DEDA]">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold text-[#292525]">Parko</span>
            <span className="px-2.5 py-0.5 bg-[#F7E8E8] text-[#B98286] text-[11px] font-medium rounded-full">
              Mobile App & Realtime DB
            </span>
          </div>
          <p className="text-xs text-[#817575] mt-0.5">Smart Parking Space Finder & Reservation Engine</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left: Mobile Screen UI Mockup */}
        <div className="md:col-span-5 flex justify-center">
          <div className="w-full max-w-[260px] bg-[#292525] p-3 rounded-[32px] shadow-lg border-4 border-[#817575]/20">
            {/* Phone Screen Container */}
            <div className="bg-[#FBF7F5] rounded-[24px] overflow-hidden space-y-3 p-4 text-[#292525]">
              {/* Top Status */}
              <div className="flex items-center justify-between text-[10px] text-[#817575]">
                <span>9:41</span>
                <span className="font-bold text-[#B98286]">PARKO</span>
                <span>5G</span>
              </div>

              {/* Map View Box */}
              <div className="relative h-32 bg-[#E8DEDA]/50 rounded-xl overflow-hidden p-2 flex flex-col justify-between border border-[#E8DEDA]">
                <div className="absolute inset-0 bg-[radial-gradient(#B98286_1px,transparent_1px)] [background-size:12px_12px] opacity-30" />
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2 py-0.5 bg-[#FFFFFF] text-[9px] font-semibold rounded-full shadow-2xs">
                    Riyadh Central Lot
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                </div>

                {/* Spot Pin */}
                <div className="relative z-10 self-center bg-[#292525] text-[#FFFFFF] px-2.5 py-1 rounded-full text-[10px] font-medium flex items-center gap-1 shadow-md">
                  <MapPin className="w-3 h-3 text-[#B98286]" />
                  <span>Bay A-14 (Available)</span>
                </div>
              </div>

              {/* Reservation Card */}
              <div className="p-3 bg-[#FFFFFF] border border-[#E8DEDA] rounded-xl space-y-2 text-xs">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-[#292525]">Hold Duration</span>
                  <span className="text-[#B98286] font-mono font-bold">15:00 min</span>
                </div>
                <button className="w-full py-2 bg-[#292525] text-[#FBF7F5] font-medium text-[11px] rounded-lg shadow-2xs">
                  Reserve Spot Now (1-Tap)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Technical Database Schema Overview */}
        <div className="md:col-span-7 space-y-4">
          <div className="p-5 bg-[#FBF7F5] border border-[#E8DEDA] rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#292525]">
              <Database className="w-4 h-4 text-[#B98286]" />
              <span>Firebase Realtime Schema & Atomic Locks</span>
            </div>
            <p className="text-xs text-[#817575] leading-relaxed">
              Designed with strict atomic state locks to prevent double-booking race conditions during peak hours.
            </p>

            <div className="bg-[#FFFFFF] p-3 rounded-lg border border-[#E8DEDA] font-mono text-[11px] text-[#292525] space-y-1">
              <div className="text-[#817575]">// Firebase Realtime Node</div>
              <div><span className="text-[#B98286]">"slot_A14"</span>: &#123;</div>
              <div className="pl-4">"status": <span className="text-emerald-700">"RESERVED"</span>,</div>
              <div className="pl-4">"reserved_by": <span className="text-[#B98286]">"user_8492"</span>,</div>
              <div className="pl-4">"expires_at": <span className="text-[#817575]">1786594200</span></div>
              <div>&#125;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
