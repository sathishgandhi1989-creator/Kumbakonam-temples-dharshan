import React from 'react';
import { MapPin, Sparkles, Sliders, Clock, Users, Gem } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why" className="py-20 bg-[#fbf1df] border-b border-[#ecdcc6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Head */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-[#a03824] uppercase mb-2">
            Why Clients Choose Us
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#701710] mb-3 leading-tight">
            Personalized, peaceful & well-paced
          </h2>
          <div className="text-[#c38a29] text-xl">✦</div>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Reason 1 */}
          <div className="bg-[#fffdf8] border border-[#e5d6c2] rounded-2xl p-7 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="font-cormorant text-2xl font-bold text-[#721710] mb-2">
              Expert Local Insight
            </h3>
            <p className="text-xs sm:text-sm text-[#5a483d] leading-relaxed">
              In-depth context on centuries-old temple history, authentic Sthala Puranam, Chola stone architecture, and profound cultural significance.
            </p>
          </div>

          {/* Reason 2 */}
          <div className="bg-[#fffdf8] border border-[#e5d6c2] rounded-2xl p-7 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">🌿</div>
            <h3 className="font-cormorant text-2xl font-bold text-[#721710] mb-2">
              Uncrowded Exploration
            </h3>
            <p className="text-xs sm:text-sm text-[#5a483d] leading-relaxed">
              We strategically prioritize lesser-known, serene Cauvery-karai shrines to grant you a peaceful, deeply meditative spiritual connection.
            </p>
          </div>

          {/* Reason 3 */}
          <div className="bg-[#fffdf8] border border-[#e5d6c2] rounded-2xl p-7 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">🧩</div>
            <h3 className="font-cormorant text-2xl font-bold text-[#721710] mb-2">
              Completely Personalized
            </h3>
            <p className="text-xs sm:text-sm text-[#5a483d] leading-relaxed">
              No two pilgrims need the exact same route. Your birth chart, ancestral roots, personal prayers, and pacing dictate every turn of the road.
            </p>
          </div>

          {/* Reason 4 */}
          <div className="bg-[#fffdf8] border border-[#e5d6c2] rounded-2xl p-7 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">🕐</div>
            <h3 className="font-cormorant text-2xl font-bold text-[#721710] mb-2">
              Flexible Duration
            </h3>
            <p className="text-xs sm:text-sm text-[#5a483d] leading-relaxed">
              Whether you have a single day, an extended weekend, or a week-long immersion, all our modular services can be combined or separated freely.
            </p>
          </div>

          {/* Reason 5 */}
          <div className="bg-[#fffdf8] border border-[#e5d6c2] rounded-2xl p-7 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">👨‍👩‍👧</div>
            <h3 className="font-cormorant text-2xl font-bold text-[#721710] mb-2">
              Comfortable & Well-Paced
            </h3>
            <p className="text-xs sm:text-sm text-[#5a483d] leading-relaxed">
              Age, family needs, walking ability, and midday heat are accounted for. We build restful pauses so you never feel exhausted or rushed.
            </p>
          </div>

          {/* Reason 6 */}
          <div className="bg-[#fffdf8] border border-[#e5d6c2] rounded-2xl p-7 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">💎</div>
            <h3 className="font-cormorant text-2xl font-bold text-[#721710] mb-2">
              Premium Private Experience
            </h3>
            <p className="text-xs sm:text-sm text-[#5a483d] leading-relaxed">
              Focus entirely on devotion and quality. No standardized crowded tour buses, impersonal guides, or hidden commercial shop stops.
            </p>
          </div>
        </div>

        {/* Our Business Promise Banner */}
        <div className="max-w-5xl mx-auto bg-[#6b130f] text-[#fff9e9] rounded-2xl p-8 sm:p-12 text-center shadow-lg border border-[#8a2117] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <h3 className="font-cormorant text-3xl sm:text-4xl font-bold mb-4 tracking-wide text-[#f4bb4f]">
            Our Business Promise
          </h3>
          <p className="text-sm sm:text-base text-[#ffebce] max-w-3xl mx-auto leading-relaxed mb-6 font-normal">
            Kumbakonam Temples Dharshan is not simply a temple tour. It is a personalized way to experience the spirituality, history, traditions and hidden heritage of Kumbakonam and the sacred Cauvery region.
          </p>
          <div className="inline-block bg-[#540c09] border border-[#b27a20]/40 px-6 py-3.5 rounded-xl">
            <p className="text-sm sm:text-base font-semibold text-white tracking-wide">
              The customer decides where they go, how long they stay, what they experience and what services they need. We take care of the rest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
