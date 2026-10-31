import { MapPin, Database } from 'lucide-react';

export default function ParkoPreview() {
  return (
    <div className="bg-white border border-line rounded-2xl p-4 sm:p-8 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-line">
        <div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-serif text-xl font-bold text-ink whitespace-nowrap">Parko</span>
            <span className="px-2.5 py-0.5 bg-blush text-accent-ink text-[11px] font-medium rounded-full">
              Mobile App & Realtime DB
            </span>
          </div>
          <p className="text-xs text-muted mt-0.5">Smart Parking Space Finder & Reservation Engine</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left: Mobile Screen UI Mockup */}
        <div className="md:col-span-5 flex justify-center">
          <div className="w-full max-w-[260px] bg-ink p-3 rounded-[32px] shadow-lg border-4 border-taupe/20">
            {/* Phone Screen Container */}
            <div className="bg-ivory rounded-[24px] overflow-hidden space-y-3 p-4 text-ink">
              {/* Top Status */}
              <div className="flex items-center justify-between text-[10px] text-muted">
                <span>9:41</span>
                <span className="font-bold text-accent-ink">PARKO</span>
                <span>5G</span>
              </div>

              {/* Map View Box */}
              <div className="relative h-32 bg-line/50 rounded-xl overflow-hidden p-2 flex flex-col justify-between border border-line">
                <div className="absolute inset-0 bg-[radial-gradient(#B98286_1px,transparent_1px)] [background-size:12px_12px] opacity-30" />
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2 py-0.5 bg-white text-[9px] font-semibold rounded-full shadow-2xs">
                    Riyadh Central Lot
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                </div>

                {/* Spot Pin */}
                <div className="relative z-10 self-center bg-ink text-white px-2.5 py-1 rounded-full text-[10px] font-medium flex items-center gap-1 shadow-md">
                  <MapPin className="w-3 h-3 text-accent" />
                  <span>Bay A-14 (Available)</span>
                </div>
              </div>

              {/* Reservation Card */}
              <div className="p-3 bg-white border border-line rounded-xl space-y-2 text-xs">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-ink">Hold Duration</span>
                  <span className="text-accent-ink font-mono font-bold">15:00 min</span>
                </div>
                {/* Static mockup of a button: not interactive, so not focusable */}
                <div className="w-full py-2 bg-ink text-ivory font-medium text-[11px] text-center rounded-lg shadow-2xs">
                  Reserve Spot Now (1-Tap)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Technical Database Schema Overview */}
        <div className="md:col-span-7 space-y-4">
          <div className="p-5 bg-ivory border border-line rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-ink">
              <Database className="w-4 h-4 text-accent" />
              <span>Firebase Realtime Schema & Atomic Locks</span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              Designed with strict atomic state locks to prevent double-booking race conditions during peak hours.
            </p>

            <div className="bg-white p-3 rounded-lg border border-line font-mono text-[11px] text-ink space-y-1">
              <div className="text-muted">// Firebase Realtime Node</div>
              <div><span className="text-accent-ink">"slot_A14"</span>: &#123;</div>
              <div className="pl-4">"status": <span className="text-emerald-700">"RESERVED"</span>,</div>
              <div className="pl-4">"reserved_by": <span className="text-accent-ink">"user_8492"</span>,</div>
              <div className="pl-4">"expires_at": <span className="text-muted">1786594200</span></div>
              <div>&#125;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
