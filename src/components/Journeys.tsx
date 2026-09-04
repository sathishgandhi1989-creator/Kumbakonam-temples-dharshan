import React from 'react';
import { Compass, CalendarDays, Users, Flame, ShieldAlert, ArrowRight } from 'lucide-react';

interface JourneysProps {
  onBuildRouteClick: () => void;
}

export const Journeys: React.FC<JourneysProps> = ({ onBuildRouteClick }) => {
  return (
    <section id="journeys" className="py-20 bg-[#fbf1df] border-b border-[#ecdcc6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Head */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-[#a03824] uppercase mb-2">
            Our Journeys
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#701710] mb-3 leading-tight">
            One-day & multi-day private journeys
          </h2>
          <div className="text-[#c38a29] text-xl">✦</div>
        </div>

        {/* 4 One-Day Journey Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Journey 1 */}
          <div className="bg-white border border-[#e3d5c2] rounded-2xl overflow-hidden hover:shadow-lg transition-all group flex flex-col justify-between">
            <div>
              <div className="h-40 bg-gradient-to-br from-[#d6b06a] to-[#fff1cc] flex items-center justify-center text-6xl shadow-inner group-hover:scale-105 transition-transform duration-300">
                🛕
              </div>
              <div className="p-6">
                <span className="text-[10px] font-extrabold tracking-widest text-[#a13a22] uppercase block mb-1">
                  One-Day Journey
                </span>
                <h3 className="font-cormorant text-2xl font-bold text-[#71170f] leading-tight mb-2">
                  Astrology-Based Temple Journey
                </h3>
                <p className="text-xs text-[#5e4e43] leading-relaxed">
                  A focused route based on requested astrological and spiritual requirements, targeting specific planetary remedies and pariharams.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2">
              <button
                onClick={onBuildRouteClick}
                className="text-xs font-bold text-[#8a2b1d] group-hover:text-[#5c0d0a] flex items-center gap-1"
              >
                <span>Customize Route</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Journey 2 */}
          <div className="bg-white border border-[#e3d5c2] rounded-2xl overflow-hidden hover:shadow-lg transition-all group flex flex-col justify-between">
            <div>
              <div className="h-40 bg-gradient-to-br from-[#76a8a3] to-[#e4f0d8] flex items-center justify-center text-6xl shadow-inner group-hover:scale-105 transition-transform duration-300">
                🌊
              </div>
              <div className="p-6">
                <span className="text-[10px] font-extrabold tracking-widest text-[#1e6631] uppercase block mb-1">
                  One-Day Journey
                </span>
                <h3 className="font-cormorant text-2xl font-bold text-[#71170f] leading-tight mb-2">
                  Cauvery Heritage Journey
                </h3>
                <p className="text-xs text-[#5e4e43] leading-relaxed">
                  A curated route covering selected ancient temples, Chola stone architecture, riverbank sanctums, and timeless sculptural marvels.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2">
              <button
                onClick={onBuildRouteClick}
                className="text-xs font-bold text-[#8a2b1d] group-hover:text-[#5c0d0a] flex items-center gap-1"
              >
                <span>Customize Route</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Journey 3 */}
          <div className="bg-white border border-[#e3d5c2] rounded-2xl overflow-hidden hover:shadow-lg transition-all group flex flex-col justify-between">
            <div>
              <div className="h-40 bg-gradient-to-br from-[#cf9a69] to-[#f8e2bf] flex items-center justify-center text-6xl shadow-inner group-hover:scale-105 transition-transform duration-300">
                👨‍👩‍👧
              </div>
              <div className="p-6">
                <span className="text-[10px] font-extrabold tracking-widest text-[#a13a22] uppercase block mb-1">
                  One-Day Journey
                </span>
                <h3 className="font-cormorant text-2xl font-bold text-[#71170f] leading-tight mb-2">
                  Family Spiritual Journey
                </h3>
                <p className="text-xs text-[#5e4e43] leading-relaxed">
                  Comfortable pacing with appropriate travel and rest periods, senior citizen assistance, and family-friendly dining spots.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2">
              <button
                onClick={onBuildRouteClick}
                className="text-xs font-bold text-[#8a2b1d] group-hover:text-[#5c0d0a] flex items-center gap-1"
              >
                <span>Customize Route</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Journey 4 */}
          <div className="bg-white border border-[#e3d5c2] rounded-2xl overflow-hidden hover:shadow-lg transition-all group flex flex-col justify-between">
            <div>
              <div className="h-40 bg-gradient-to-br from-[#9e6c81] to-[#f0d7df] flex items-center justify-center text-6xl shadow-inner group-hover:scale-105 transition-transform duration-300">
                🔱
              </div>
              <div className="p-6">
                <span className="text-[10px] font-extrabold tracking-widest text-[#72130e] uppercase block mb-1">
                  One-Day Journey
                </span>
                <h3 className="font-cormorant text-2xl font-bold text-[#71170f] leading-tight mb-2">
                  Kula Deivam Journey
                </h3>
                <p className="text-xs text-[#5e4e43] leading-relaxed">
                  A customized pilgrimage for family deity, ancestral village roots, and traditional clan ritual requirements in the Thanjavur-Cauvery tract.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2">
              <button
                onClick={onBuildRouteClick}
                className="text-xs font-bold text-[#8a2b1d] group-hover:text-[#5c0d0a] flex items-center gap-1"
              >
                <span>Customize Route</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Multi-Day Private Journeys Banner */}
        <div className="bg-[#fff8eb] border border-[#dfc69e] rounded-2xl p-7 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#b27a20] uppercase tracking-wider">
              <CalendarDays className="w-4 h-4" />
              <span>Extended Pilgrimages</span>
            </div>
            <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-[#701710]">
              Multi-Day Private Journeys (2, 3 or More Days)
            </h3>
            <p className="text-sm text-[#5d4a3e] max-w-2xl leading-relaxed">
              Two-day, three-day or longer journeys seamlessly combine temples, heritage, private transportation, verified accommodation, Satvic food, local route guidance, flexible schedules, and family/senior-friendly planning.
            </p>
          </div>
          <button
            onClick={onBuildRouteClick}
            className="shrink-0 bg-[#72130e] hover:bg-[#5c0d0a] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-all shadow hover:shadow-md flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-[#f4bb4f]" />
            <span>Build My Route</span>
          </button>
        </div>
      </div>
    </section>
  );
};
