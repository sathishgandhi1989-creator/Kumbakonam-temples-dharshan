import React from 'react';
import { Clock, Shirt, Sparkles, Utensils, Calendar } from 'lucide-react';

export const HeritageGuide: React.FC = () => {
  return (
    <section id="guide" className="py-20 bg-[#fffdf8] border-b border-[#ead9c0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Head */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-[#a03824] uppercase mb-2">
            Pilgrim's Sacred Guide
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#701710] mb-3 leading-tight">
            Essential Cauvery pilgrimage insights
          </h2>
          <p className="text-base sm:text-lg text-[#66584e]">
            Practical knowledge to ensure your Kumbakonam spiritual journey is peaceful and seamless.
          </p>
          <div className="text-[#c38a29] text-xl mt-2">✦</div>
        </div>

        {/* 4 Informational Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Item 1 */}
          <div className="bg-[#fffaf0] border border-[#ebdcc7] rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-[#faedd0] text-[#72130e] flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-cormorant text-xl font-bold text-[#701710] mb-2">
              Temple Darshan Timings
            </h3>
            <p className="text-xs text-[#5e4d41] leading-relaxed">
              Most temples open 6:00 AM – 12:00 PM and 4:30 PM – 8:30 PM. We plan your travel so you avoid waiting outside during the midday Uchikalam closure.
            </p>
          </div>

          {/* Item 2 */}
          <div className="bg-[#fffaf0] border border-[#ebdcc7] rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-[#faedd0] text-[#1e6631] flex items-center justify-center mb-4">
              <Shirt className="w-5 h-5" />
            </div>
            <h3 className="font-cormorant text-xl font-bold text-[#701710] mb-2">
              Traditional Dress Code
            </h3>
            <p className="text-xs text-[#5e4d41] leading-relaxed">
              Traditional attire is mandated in most ancient sanctums: Dhoti with Angavastram or Kurta for men; Saree, half-saree, or Salwar Kameez with dupatta for women.
            </p>
          </div>

          {/* Item 3 */}
          <div className="bg-[#fffaf0] border border-[#ebdcc7] rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-[#faedd0] text-[#b27a20] flex items-center justify-center mb-4">
              <Utensils className="w-5 h-5" />
            </div>
            <h3 className="font-cormorant text-xl font-bold text-[#701710] mb-2">
              Satvic Meals & Coffee
            </h3>
            <p className="text-xs text-[#5e4d41] leading-relaxed">
              Experience authentic Kumbakonam brass-filtered degree coffee and pure Satvic plantain-leaf feasts prepared with sacred purity, without onion or garlic upon request.
            </p>
          </div>

          {/* Item 4 */}
          <div className="bg-[#fffaf0] border border-[#ebdcc7] rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-[#faedd0] text-[#8a2b1d] flex items-center justify-center mb-4">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="font-cormorant text-xl font-bold text-[#701710] mb-2">
              Ideal Season to Visit
            </h3>
            <p className="text-xs text-[#5e4d41] leading-relaxed">
              October through March offers pleasant delta breezes and mild daytime weather. Special auspicious festivals like Mahamaham, Masi Magam, and Thai Poosam bring cosmic energy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
