import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface JourneysProps {
  onBuildRouteClick: () => void;
  currentLang?: Language;
}

export const Journeys: React.FC<JourneysProps> = ({ 
  onBuildRouteClick,
  currentLang = 'en'
}) => {
  const t = TRANSLATIONS[currentLang];
  const section = t.journeysSection;

  const cards = [
    {
      icon: '🛕',
      bgGradient: 'from-[#d6b06a] to-[#fff1cc]',
      tag: section.tabs.oneDay,
      title: section.tabs.oneDay,
      desc: section.oneDayDesc,
      cta: section.customizeBtn
    },
    {
      icon: '🌊',
      bgGradient: 'from-[#76a8a3] to-[#e4f0d8]',
      tag: section.tabs.multiDay,
      title: section.tabs.multiDay,
      desc: section.multiDayDesc,
      cta: section.customizeBtn
    },
    {
      icon: '🏛️',
      bgGradient: 'from-[#b5838d] to-[#ffcdb2]',
      tag: section.tabs.custom,
      title: section.tabs.custom,
      desc: section.customDesc,
      cta: section.customizeBtn
    }
  ];

  return (
    <section id="journeys" className="py-20 bg-[#fbf1df] border-b border-[#ecdcc6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Head */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-[#a03824] uppercase mb-2">
            {section.tag}
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#701710] mb-3 leading-tight">
            {section.title}
          </h2>
          <p className="text-base sm:text-lg text-[#66584e]">
            {section.subtitle}
          </p>
          <div className="text-[#c38a29] text-xl mt-2">✦</div>
        </div>

        {/* Journey Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="bg-white border border-[#e3d5c2] rounded-2xl overflow-hidden hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <div className={`h-40 bg-gradient-to-br ${card.bgGradient} flex items-center justify-center text-6xl shadow-inner group-hover:scale-105 transition-transform duration-300`}>
                  {card.icon}
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-extrabold tracking-widest text-[#a13a22] uppercase block mb-1">
                    {card.tag}
                  </span>
                  <h3 className="font-cormorant text-2xl font-bold text-[#71170f] leading-tight mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#5e4e43] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={onBuildRouteClick}
                  className="text-xs font-bold text-[#8a2b1d] group-hover:text-[#5c0d0a] flex items-center gap-1 cursor-pointer"
                >
                  <span>{card.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
