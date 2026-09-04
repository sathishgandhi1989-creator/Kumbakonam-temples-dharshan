import React from 'react';
import { Sun, Waves, Sparkles, ArrowRight } from 'lucide-react';

interface ExperiencesProps {
  onSelectExperience: (pkgId: 1 | 2 | 3) => void;
}

export const Experiences: React.FC<ExperiencesProps> = ({ onSelectExperience }) => {
  return (
    <section id="experiences" className="py-20 bg-[#fbf1df] border-b border-[#ecdcc6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Head */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-[#a03824] uppercase mb-2">
            Our Three Signature Experiences
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#701710] mb-3 leading-tight">
            Journeys built around your purpose
          </h2>
          <div className="text-[#c38a29] text-xl">✦</div>
        </div>

        {/* 3 Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience 1: Astrology */}
          <div className="bg-[#fffaf0] border border-[#e2cba7] rounded-2xl p-8 relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#e4b94a]/20 pointer-events-none group-hover:scale-125 transition-transform" />
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#fff2d6] text-[#b27a20] flex items-center justify-center text-3xl mb-6 shadow-sm border border-[#e2cba7]">
                ☀️
              </div>
              <span className="text-[11px] font-bold tracking-wider text-[#a03824] uppercase block mb-1">
                Planetary & Dosha Pariharam
              </span>
              <h3 className="font-cormorant text-3xl font-bold text-[#8a2b1d] leading-tight mb-4">
                Astrology-Based <br />
                Remedial Temple Journeys
              </h3>
              <p className="text-sm text-[#5a483d] leading-relaxed mb-6">
                Customized temple journeys based on specific astrological and spiritual requirements, including lesser-known ancient temples associated with planets, dosha nivruthi, and sacred remedies.
              </p>
              <ul className="text-xs text-[#6e584a] space-y-2 mb-8 border-t border-[#ebdcc7] pt-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8a2b1d]" />
                  <span>Navagraha alignment (Surya, Chandra, Sevvai, Budha, Sukra, Sani, Rahu, Ketu)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8a2b1d]" />
                  <span>Rare Bala Sani, Pongu Sani, Mangala Sani & Yama shrines</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8a2b1d]" />
                  <span>Pitru dosha & ancestral karma blessing temples</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onSelectExperience(1)}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#8d261a] hover:text-[#5c0d0a] transition-colors group-hover:translate-x-1"
            >
              <span>Explore Astrology Route</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Experience 2: Cauvery Karai */}
          <div className="bg-[#fffaf0] border border-[#e2cba7] rounded-2xl p-8 relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#76a8a3]/20 pointer-events-none group-hover:scale-125 transition-transform" />
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#e6f3f0] text-[#1e6631] flex items-center justify-center text-3xl mb-6 shadow-sm border border-[#cbdcd8]">
                🌊
              </div>
              <span className="text-[11px] font-bold tracking-wider text-[#1e6631] uppercase block mb-1">
                Sacred River & Chola Art
              </span>
              <h3 className="font-cormorant text-3xl font-bold text-[#8a2b1d] leading-tight mb-4">
                Hidden Cauvery-Karai <br />
                Temple & Heritage Journeys
              </h3>
              <p className="text-sm text-[#5a483d] leading-relaxed mb-6">
                Go beyond usual tourist routes to discover ancient temples, local traditions, inscriptions, architecture and heritage connected with the sacred Cauvery river ecosystem.
              </p>
              <ul className="text-xs text-[#6e584a] space-y-2 mb-8 border-t border-[#ebdcc7] pt-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1e6631]" />
                  <span>Uncrowded peaceful Shaivite & Divya Desam sanctums</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1e6631]" />
                  <span>Ancient Chola granite inscriptions & legendary bronze history</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1e6631]" />
                  <span>Patteswaram Durga, Thirubuvanam Sarabeswarar & Thittai</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onSelectExperience(2)}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#8d261a] hover:text-[#5c0d0a] transition-colors group-hover:translate-x-1"
            >
              <span>Explore Cauvery Heritage</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Experience 3: Bespoke */}
          <div className="bg-[#fffaf0] border border-[#e2cba7] rounded-2xl p-8 relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#a36881]/20 pointer-events-none group-hover:scale-125 transition-transform" />
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#fdf0f4] text-[#72130e] flex items-center justify-center text-3xl mb-6 shadow-sm border border-[#e8cfd8]">
                🛕
              </div>
              <span className="text-[11px] font-bold tracking-wider text-[#a03824] uppercase block mb-1">
                100% Tailored To You
              </span>
              <h3 className="font-cormorant text-3xl font-bold text-[#8a2b1d] leading-tight mb-4">
                Bespoke Custom <br />
                Spiritual Quests
              </h3>
              <p className="text-sm text-[#5a483d] leading-relaxed mb-6">
                Every traveller has a different reason for visiting Kumbakonam. We shape the route around your exact temples, family needs, pace, walking comfort, time, and budget.
              </p>
              <ul className="text-xs text-[#6e584a] space-y-2 mb-8 border-t border-[#ebdcc7] pt-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8a2b1d]" />
                  <span>Kula Deivam & ancestral village pilgrimage tracing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8a2b1d]" />
                  <span>Wheelchair-accessible & senior citizen friendly scheduling</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8a2b1d]" />
                  <span>Modular services — choose vehicle, stay, or itinerary only</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onSelectExperience(3)}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#8d261a] hover:text-[#5c0d0a] transition-colors group-hover:translate-x-1"
            >
              <span>Build Bespoke Quest</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
