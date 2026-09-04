import React from 'react';
import { Compass, Car, Hotel, Utensils, Sparkles, Sliders, CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-[#fffdf8] border-b border-[#ead9c0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Head */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-[#a03824] uppercase mb-2">
            Flexible & Modular
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#701710] mb-3 leading-tight">
            You choose what you need
          </h2>
          <p className="text-base sm:text-lg text-[#66584e]">
            Customers never have to purchase services they do not need.
          </p>
          <div className="text-[#c38a29] text-xl mt-2">✦</div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Service 1 */}
          <div className="bg-white border border-[#eadbc4] rounded-2xl p-7 text-center hover:border-[#c58a2c] hover:shadow-md transition-all">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#fcf5e8] text-[#8a2b1d] flex items-center justify-center text-3xl mb-4 border border-[#e5d4bc]">
              🧭
            </div>
            <h3 className="font-cormorant text-2xl font-bold text-[#67150f] mb-2">
              Experience Only
            </h3>
            <p className="text-xs text-[#52443a] leading-relaxed mb-4">
              Itinerary, temple selection, route planning, auspicious darshan timings, and local historical knowledge.
            </p>
            <div className="text-[11px] font-semibold text-[#1e6631] bg-[#eef7f0] py-1 px-3 rounded-full inline-block">
              Ideal if driving your own vehicle
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white border border-[#eadbc4] rounded-2xl p-7 text-center hover:border-[#c58a2c] hover:shadow-md transition-all">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#fcf5e8] text-[#8a2b1d] flex items-center justify-center text-3xl mb-4 border border-[#e5d4bc]">
              🚙
            </div>
            <h3 className="font-cormorant text-2xl font-bold text-[#67150f] mb-2">
              Transportation
            </h3>
            <p className="text-xs text-[#52443a] leading-relaxed mb-4">
              Use your own vehicle or request private AC transport (Innova Crysta, Ertiga, or Sedan) with seasoned drivers.
            </p>
            <div className="text-[11px] font-semibold text-[#1e6631] bg-[#eef7f0] py-1 px-3 rounded-full inline-block">
              Pick up from Kumbakonam / Trichy / Chennai
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white border border-[#eadbc4] rounded-2xl p-7 text-center hover:border-[#c58a2c] hover:shadow-md transition-all">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#fcf5e8] text-[#8a2b1d] flex items-center justify-center text-3xl mb-4 border border-[#e5d4bc]">
              🛏️
            </div>
            <h3 className="font-cormorant text-2xl font-bold text-[#67150f] mb-2">
              Accommodation
            </h3>
            <p className="text-xs text-[#52443a] leading-relaxed mb-4">
              Arrange your own stay or let us book verified traditional homestays, comfortable hotels, or luxury heritage resorts.
            </p>
            <div className="text-[11px] font-semibold text-[#1e6631] bg-[#eef7f0] py-1 px-3 rounded-full inline-block">
              Clean, verified & family-safe
            </div>
          </div>

          {/* Service 4 */}
          <div className="bg-white border border-[#eadbc4] rounded-2xl p-7 text-center hover:border-[#c58a2c] hover:shadow-md transition-all">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#fcf5e8] text-[#8a2b1d] flex items-center justify-center text-3xl mb-4 border border-[#e5d4bc]">
              🍚
            </div>
            <h3 className="font-cormorant text-2xl font-bold text-[#67150f] mb-2">
              Satvic Food
            </h3>
            <p className="text-xs text-[#52443a] leading-relaxed mb-4">
              Selected individual meals or complete traditional pure vegetarian meal planning (plantain leaf, Satvic cooking).
            </p>
            <div className="text-[11px] font-semibold text-[#1e6631] bg-[#eef7f0] py-1 px-3 rounded-full inline-block">
              Authentic Cauvery cuisine & Filter coffee
            </div>
          </div>

          {/* Service 5 - Featured Complete Package */}
          <div className="bg-[#fff6dd] border-2 border-[#cba34f] rounded-2xl p-7 text-center shadow-md relative hover:shadow-lg transition-all transform sm:-translate-y-1">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#72130e] text-[#f4bb4f] text-[10px] font-bold tracking-widest uppercase px-3 py-0.5 rounded-full">
              Most Convenient
            </div>
            <div className="w-14 h-14 mx-auto rounded-full bg-[#faedd0] text-[#72130e] flex items-center justify-center text-3xl mb-4 border border-[#dfc588]">
              ✨
            </div>
            <h3 className="font-cormorant text-2xl font-bold text-[#72130e] mb-2">
              Complete Private Experience
            </h3>
            <p className="text-xs text-[#4b3c32] leading-relaxed mb-4 font-medium">
              Itinerary · private transport · handpicked stay · traditional food · on-ground local darshan assistance.
            </p>
            <div className="text-[11px] font-semibold text-[#72130e] bg-[#f9e5b8] py-1 px-3 rounded-full inline-block">
              Zero stress for elderly & families
            </div>
          </div>

          {/* Service 6 */}
          <div className="bg-white border border-[#eadbc4] rounded-2xl p-7 text-center hover:border-[#c58a2c] hover:shadow-md transition-all">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#fcf5e8] text-[#8a2b1d] flex items-center justify-center text-3xl mb-4 border border-[#e5d4bc]">
              ⚙️
            </div>
            <h3 className="font-cormorant text-2xl font-bold text-[#67150f] mb-2">
              Fully Modular
            </h3>
            <p className="text-xs text-[#52443a] leading-relaxed mb-4">
              Combine or subtract any service. Pay only for the components you actually require during your sacred visit.
            </p>
            <div className="text-[11px] font-semibold text-[#1e6631] bg-[#eef7f0] py-1 px-3 rounded-full inline-block">
              100% Transparent quotation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
