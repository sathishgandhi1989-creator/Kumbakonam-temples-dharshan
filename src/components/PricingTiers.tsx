import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { ServiceTierId } from '../types';
import { SERVICE_TIERS, getLocalizedTier } from '../data/temples';
import { Language, TRANSLATIONS } from '../data/translations';

interface PricingTiersProps {
  selectedTier: ServiceTierId;
  onSelectTier: (tier: ServiceTierId) => void;
  onPlanClick: () => void;
  currentLang?: Language;
}

export const PricingTiers: React.FC<PricingTiersProps> = ({
  selectedTier,
  onSelectTier,
  onPlanClick,
  currentLang = 'en'
}) => {
  const t = TRANSLATIONS[currentLang];

  const icons: Record<ServiceTierId, string> = {
    economy: '🥉',
    premium: '🥈',
    elite: '🥇'
  };

  const ringClasses: Record<ServiceTierId, { active: string; border: string; btn: string; tagBg: string }> = {
    economy: {
      active: 'border-[#72130e] ring-2 ring-[#72130e]/20 shadow-md',
      border: 'border-[#e3d4bd] hover:border-[#b8956e]',
      btn: 'bg-[#72130e] text-white',
      tagBg: 'bg-[#f6ebd9] text-[#701710]'
    },
    premium: {
      active: 'border-[#c58a2c] ring-2 ring-[#c58a2c]/30 shadow-xl',
      border: 'border-[#c58a2c] hover:shadow-lg',
      btn: 'bg-[#72130e] text-white',
      tagBg: 'bg-[#c58a2c] text-white'
    },
    elite: {
      active: 'border-[#8d64a9] ring-2 ring-[#8d64a9]/20 shadow-md',
      border: 'border-[#e3d4bd] hover:border-[#8d64a9]',
      btn: 'bg-[#623083] text-white',
      tagBg: 'bg-[#f4eef9] text-[#623083]'
    }
  };

  return (
    <section id="pricing" className="py-20 bg-[#fffdf8] border-b border-[#ead9c0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Head */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-[#a03824] uppercase mb-2">
            {t.pricingSection.tag}
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#701710] mb-3 leading-tight">
            {t.pricingSection.title}
          </h2>
          <p className="text-base sm:text-lg text-[#66584e]">
            {t.pricingSection.subtitle}
          </p>
          <div className="text-[#c38a29] text-xl mt-2">✦</div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SERVICE_TIERS.map((tier) => {
            const loc = getLocalizedTier(tier, currentLang);
            const isSelected = selectedTier === tier.id;
            const style = ringClasses[tier.id];
            const isPremium = tier.id === 'premium';

            return (
              <div 
                key={tier.id}
                onClick={() => onSelectTier(tier.id)}
                className={`border rounded-2xl p-8 bg-white transition-all cursor-pointer relative flex flex-col justify-between ${
                  isPremium ? 'lg:-translate-y-2 bg-[#fffaf0]' : ''
                } ${isSelected ? style.active : style.border}`}
              >
                {isPremium && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#c58a2c] text-white text-[11px] font-bold tracking-wider uppercase px-4 py-0.5 rounded-full shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>{loc.badge}</span>
                  </div>
                )}

                <div>
                  <div className="text-3xl mb-3">{icons[tier.id]}</div>
                  <h3 className="font-cormorant text-3xl font-bold text-[#6e160f] mb-1">
                    {loc.name}
                  </h3>
                  <p className="text-xs text-[#716155] mb-6">
                    {currentLang === 'ta' ? tier.name : (tier.nameTamil || tier.name)} · {loc.badge}
                  </p>

                  <div className="border-t border-[#f0e4d2] pt-6 mb-8">
                    <ul className="space-y-3.5 text-xs sm:text-sm text-[#45372f]">
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#1e6631] shrink-0 mt-0.5" />
                        <span><strong>{currentLang === 'ta' ? 'வாகனம்:' : currentLang === 'hi' ? 'वाहन:' : 'Transport:'}</strong> {loc.vehicle}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#1e6631] shrink-0 mt-0.5" />
                        <span><strong>{currentLang === 'ta' ? 'தங்குமிடம்:' : currentLang === 'hi' ? 'आवास:' : 'Stay:'}</strong> {loc.stay}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#1e6631] shrink-0 mt-0.5" />
                        <span><strong>{currentLang === 'ta' ? 'உணவு:' : currentLang === 'hi' ? 'भोजन:' : 'Food:'}</strong> {loc.food}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#1e6631] shrink-0 mt-0.5" />
                        <span><strong>{currentLang === 'ta' ? 'சிறப்பு வசதி:' : currentLang === 'hi' ? 'विशेष सुविधा:' : 'Privilege:'}</strong> {loc.specialPerk}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="text-center py-3 border-t border-[#eadfcf] mb-4">
                    <span className="text-lg font-bold text-[#6e160f]">
                      {currentLang === 'ta' ? 'கட்டண விபரம்' : currentLang === 'hi' ? 'कस्टम कोटेशन' : 'Custom Quote'}
                    </span>
                    <span className="block text-[11px] text-[#716155] font-medium">
                      {loc.priceNote}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectTier(tier.id);
                      onPlanClick();
                    }}
                    className={`w-full py-3 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? `${style.btn} shadow-sm`
                        : 'bg-[#f6ebd9] text-[#6e160f] hover:bg-[#edd9bf]'
                    }`}
                  >
                    {isSelected 
                      ? (currentLang === 'ta' ? 'தேர்வு செய்யப்பட்டது · பயணத்தை திட்டமிடுக' : currentLang === 'hi' ? 'चयनित · यात्रा मार्ग बनाएं' : 'Selected · Build Route')
                      : (currentLang === 'ta' ? `${loc.name} தேர்ந்தெடுக்கவும்` : currentLang === 'hi' ? `${loc.name} चुनें` : `Choose ${loc.name}`)}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
