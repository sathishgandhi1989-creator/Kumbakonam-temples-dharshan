import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface ExperiencesProps {
  onSelectExperience: (pkgId: 1 | 2 | 3) => void;
  currentLang?: Language;
}

export const Experiences: React.FC<ExperiencesProps> = ({ 
  onSelectExperience,
  currentLang = 'en'
}) => {
  const t = TRANSLATIONS[currentLang];
  const section = t.experiencesSection;

  const icons = ['☀️', '🏛️', '🛕'];

  return (
    <section id="experiences" className="py-20 bg-[#fbf1df] border-b border-[#ecdcc6]">
      <div className="main-container">
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

        {/* 3 Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {section.packages.map((pkg, idx) => (
            <div 
              key={pkg.id}
              className="bg-[#fffaf0] border border-[#e2cba7] rounded-2xl p-8 relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#e4b94a]/20 pointer-events-none group-hover:scale-125 transition-transform" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#fff2d6] text-[#b27a20] flex items-center justify-center text-3xl mb-6 shadow-sm border border-[#e2cba7]">
                  {icons[idx]}
                </div>
                <span className="text-[11px] font-bold tracking-wider text-[#a03824] uppercase block mb-1">
                  Package {pkg.id}
                </span>
                <h3 className="font-cormorant text-3xl font-bold text-[#8a2b1d] leading-tight mb-4">
                  {pkg.title}
                </h3>
                <p className="text-sm text-[#5a483d] leading-relaxed mb-6">
                  {pkg.desc}
                </p>
                <ul className="text-xs text-[#6e584a] space-y-2 mb-8 border-t border-[#ebdcc7] pt-4">
                  {pkg.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8a2b1d] shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => onSelectExperience(pkg.id)}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#8d261a] hover:text-[#5c0d0a] transition-colors group-hover:translate-x-1 cursor-pointer"
              >
                <span>{pkg.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
