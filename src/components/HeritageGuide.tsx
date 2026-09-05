import React from 'react';
import { Clock, Shirt, Waves, Sparkles } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface HeritageGuideProps {
  currentLang?: Language;
}

export const HeritageGuide: React.FC<HeritageGuideProps> = ({ currentLang = 'en' }) => {
  const t = TRANSLATIONS[currentLang];
  const section = t.guideSection;

  return (
    <section id="guide" className="py-20 bg-[#fffdf8] border-b border-[#ead9c0]">
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

        {/* 3 Informational Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-[#fffaf0] border border-[#ebdcc7] rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-[#faedd0] text-[#72130e] flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-cormorant text-xl font-bold text-[#701710] mb-2">
              {section.timingsTitle}
            </h3>
            <p className="text-xs text-[#5e4d41] leading-relaxed">
              {section.timingsDesc}
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#fffaf0] border border-[#ebdcc7] rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-[#faedd0] text-[#1e6631] flex items-center justify-center mb-4">
              <Waves className="w-5 h-5" />
            </div>
            <h3 className="font-cormorant text-xl font-bold text-[#701710] mb-2">
              {section.cauveryTitle}
            </h3>
            <p className="text-xs text-[#5e4d41] leading-relaxed">
              {section.cauveryDesc}
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#fffaf0] border border-[#ebdcc7] rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-[#faedd0] text-[#b27a20] flex items-center justify-center mb-4">
              <Shirt className="w-5 h-5" />
            </div>
            <h3 className="font-cormorant text-xl font-bold text-[#701710] mb-2">
              {section.etiquetteTitle}
            </h3>
            <p className="text-xs text-[#5e4d41] leading-relaxed">
              {section.etiquetteDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
