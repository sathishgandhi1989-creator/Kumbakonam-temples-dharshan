import React from 'react';
import { Language, TRANSLATIONS } from '../data/translations';

interface ServicesProps {
  currentLang?: Language;
}

export const Services: React.FC<ServicesProps> = ({ currentLang = 'en' }) => {
  const t = TRANSLATIONS[currentLang];
  const section = t.servicesSection;

  const icons = ['🧭', '🚙', '🛏️', '🍲', '🤝', '👑'];

  return (
    <section id="services" className="py-20 bg-[#fffdf8] border-b border-[#ead9c0]">
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

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {section.items.map((svc, idx) => (
            <div 
              key={idx}
              className="bg-white border border-[#eadbc4] rounded-2xl p-7 text-center hover:border-[#c58a2c] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 mx-auto rounded-full bg-[#fcf5e8] text-[#8a2b1d] flex items-center justify-center text-3xl mb-4 border border-[#e5d4bc]">
                  {icons[idx]}
                </div>
                <h3 className="font-cormorant text-2xl font-bold text-[#67150f] mb-2">
                  {svc.title}
                </h3>
                <p className="text-xs text-[#52443a] leading-relaxed mb-4">
                  {svc.desc}
                </p>
              </div>
              <div>
                <div className="text-[11px] font-semibold text-[#1e6631] bg-[#eef7f0] py-1 px-3 rounded-full inline-block">
                  {svc.badge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
