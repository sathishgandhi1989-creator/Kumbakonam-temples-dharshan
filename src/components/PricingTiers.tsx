import React from 'react';
import { Check, Sparkles, MessageCircle } from 'lucide-react';
import { ServiceTierId } from '../types';

interface PricingTiersProps {
  selectedTier: ServiceTierId;
  onSelectTier: (tier: ServiceTierId) => void;
  onPlanClick: () => void;
}

export const PricingTiers: React.FC<PricingTiersProps> = ({
  selectedTier,
  onSelectTier,
  onPlanClick
}) => {
  return (
    <section id="pricing" className="py-20 bg-[#fffdf8] border-b border-[#ead9c0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Head */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-[#a03824] uppercase mb-2">
            Pricing Tiers
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#701710] mb-3 leading-tight">
            Custom & transparent
          </h2>
          <p className="text-base sm:text-lg text-[#66584e]">
            Final pricing is confirmed by custom quote based on group size, route, duration, and season.
          </p>
          <div className="text-[#c38a29] text-xl mt-2">✦</div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Economy Tier */}
          <div 
            onClick={() => onSelectTier('economy')}
            className={`border rounded-2xl p-8 bg-white transition-all cursor-pointer relative flex flex-col justify-between ${
              selectedTier === 'economy'
                ? 'border-[#72130e] ring-2 ring-[#72130e]/20 shadow-md'
                : 'border-[#e3d4bd] hover:border-[#b8956e]'
            }`}
          >
            <div>
              <div className="text-3xl mb-3">🥉</div>
              <h3 className="font-cormorant text-3xl font-bold text-[#6e160f] mb-1">
                Economy
              </h3>
              <p className="text-xs text-[#716155] mb-6">
                Cost-effective, reliable pilgrimage experience with essential comforts.
              </p>

              <div className="border-t border-[#f0e4d2] pt-6 mb-8">
                <ul className="space-y-3.5 text-xs sm:text-sm text-[#45372f]">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#1e6631] shrink-0 mt-0.5" />
                    <span><strong>Transport:</strong> AC sedan (Dzire / Etios class)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#1e6631] shrink-0 mt-0.5" />
                    <span><strong>Stay:</strong> Clean, verified budget homestay</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#1e6631] shrink-0 mt-0.5" />
                    <span><strong>Food:</strong> Basic pure Satvic South Indian vegetarian meals</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#1e6631] shrink-0 mt-0.5" />
                    <span><strong>Guidance:</strong> Curated daily route map & timing schedule</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="text-center py-3 border-t border-[#eadfcf] mb-4">
                <span className="text-lg font-bold text-[#6e160f]">Custom Quote</span>
                <span className="block text-[11px] text-[#716155]">Based on headcount & temples</span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectTier('economy');
                  onPlanClick();
                }}
                className={`w-full py-3 rounded-full text-xs font-bold transition-all ${
                  selectedTier === 'economy'
                    ? 'bg-[#72130e] text-white shadow-sm'
                    : 'bg-[#f6ebd9] text-[#6e160f] hover:bg-[#edd9bf]'
                }`}
              >
                {selectedTier === 'economy' ? 'Selected · Build Route' : 'Choose Economy'}
              </button>
            </div>
          </div>

          {/* Premium Tier (Featured) */}
          <div 
            onClick={() => onSelectTier('premium')}
            className={`border-2 rounded-2xl p-8 bg-[#fffaf0] transition-all cursor-pointer relative flex flex-col justify-between shadow-md transform lg:-translate-y-2 ${
              selectedTier === 'premium'
                ? 'border-[#c58a2c] ring-2 ring-[#c58a2c]/30 shadow-xl'
                : 'border-[#c58a2c] hover:shadow-lg'
            }`}
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#c58a2c] text-white text-[11px] font-bold tracking-wider uppercase px-4 py-0.5 rounded-full shadow-sm flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>Highly Recommended</span>
            </div>

            <div>
              <div className="text-3xl mb-3">🥈</div>
              <h3 className="font-cormorant text-3xl font-bold text-[#6e160f] mb-1">
                Premium
              </h3>
              <p className="text-xs text-[#716155] mb-6">
                Superior comfort, spacious travel, and handpicked traditional heritage stays.
              </p>

              <div className="border-t border-[#ebd9be] pt-6 mb-8">
                <ul className="space-y-3.5 text-xs sm:text-sm text-[#45372f]">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#1e6631] shrink-0 mt-0.5" />
                    <span><strong>Transport:</strong> AC Innova or Ertiga with experienced driver</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#1e6631] shrink-0 mt-0.5" />
                    <span><strong>Stay:</strong> Premium traditional heritage homestay or hotel</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#1e6631] shrink-0 mt-0.5" />
                    <span><strong>Food:</strong> High-quality traditional Satvic banana leaf feasts</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#1e6631] shrink-0 mt-0.5" />
                    <span><strong>Service:</strong> Dedicated route coordinator & senior pacing</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="text-center py-3 border-t border-[#eadfcf] mb-4">
                <span className="text-lg font-bold text-[#6e160f]">Custom Quote</span>
                <span className="block text-[11px] text-[#1c6a34] font-semibold">Best balance of comfort & price</span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectTier('premium');
                  onPlanClick();
                }}
                className="w-full py-3 rounded-full text-xs font-bold transition-all bg-[#72130e] hover:bg-[#5c0d0a] text-white shadow"
              >
                {selectedTier === 'premium' ? 'Selected · Build Route' : 'Choose Premium'}
              </button>
            </div>
          </div>

          {/* Elite / VIP Tier */}
          <div 
            onClick={() => onSelectTier('elite')}
            className={`border rounded-2xl p-8 bg-white transition-all cursor-pointer relative flex flex-col justify-between ${
              selectedTier === 'elite'
                ? 'border-[#8d64a9] ring-2 ring-[#8d64a9]/20 shadow-md'
                : 'border-[#e3d4bd] hover:border-[#8d64a9]'
            }`}
          >
            <div>
              <div className="text-3xl mb-3">🥇</div>
              <h3 className="font-cormorant text-3xl font-bold text-[#6e160f] mb-1">
                Elite / VIP
              </h3>
              <p className="text-xs text-[#716155] mb-6">
                Exclusive personalized care, luxury vehicles, and direct darshan assistance.
              </p>

              <div className="border-t border-[#f0e4d2] pt-6 mb-8">
                <ul className="space-y-3.5 text-xs sm:text-sm text-[#45372f]">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#1e6631] shrink-0 mt-0.5" />
                    <span><strong>Transport:</strong> Luxury Innova Crysta / Executive Vehicle</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#1e6631] shrink-0 mt-0.5" />
                    <span><strong>Stay:</strong> VIP heritage resort or private estate with butler</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#1e6631] shrink-0 mt-0.5" />
                    <span><strong>Food:</strong> Custom-prepared Satvic dining (Jain / diet options)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#1e6631] shrink-0 mt-0.5" />
                    <span><strong>Privilege:</strong> Special archana & VIP darshan coordination</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="text-center py-3 border-t border-[#eadfcf] mb-4">
                <span className="text-lg font-bold text-[#6e160f]">Custom Quote</span>
                <span className="block text-[11px] text-[#716155]">White-glove spiritual itinerary</span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectTier('elite');
                  onPlanClick();
                }}
                className={`w-full py-3 rounded-full text-xs font-bold transition-all ${
                  selectedTier === 'elite'
                    ? 'bg-[#623083] text-white shadow-sm'
                    : 'bg-[#f4eef9] text-[#623083] hover:bg-[#ebdff4]'
                }`}
              >
                {selectedTier === 'elite' ? 'Selected · Build Route' : 'Choose Elite / VIP'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
