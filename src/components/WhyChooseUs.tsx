import React from 'react';
import { Language, TRANSLATIONS } from '../data/translations';

interface WhyChooseUsProps {
  currentLang?: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ currentLang = 'en' }) => {
  const t = TRANSLATIONS[currentLang];
  const section = t.whySection;

  const icons = ['📍', '🌿', '🧩', '👵', '🍲', '📞'];

  return (
    <section id="why" className="py-20 bg-[#fbf1df] border-b border-[#ecdcc6]">
      <div className="main-container">
        {/* Section Head */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-[#a03824] uppercase mb-2">
            {section.tag}
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#701710] mb-3 leading-tight">
            {section.title}
          </h2>
          <div className="text-[#c38a29] text-xl mt-2">✦</div>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {section.reasons.map((reason, idx) => (
            <div key={idx} className="bg-[#fffdf8] border border-[#e5d6c2] rounded-2xl p-7 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{icons[idx]}</div>
              <h3 className="font-cormorant text-2xl font-bold text-[#721710] mb-2">
                {reason.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5a483d] leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
