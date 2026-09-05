import React, { useState } from 'react';
import { Language } from '../data/translations';

interface GoldenVinayagarProps {
  currentLang: Language;
}

export const GoldenVinayagar: React.FC<GoldenVinayagarProps> = ({ currentLang }) => {
  const [showBlessing, setShowBlessing] = useState(false);

  const blessingText: Record<Language, { title: string; subtitle: string; mantra: string }> = {
    ta: {
      title: 'ஸ்ரீ செல்வ விநாயகர் துணை',
      subtitle: 'சர்வ விக்ன நிவாரகர் • மங்கள ஆரம்பம்',
      mantra: 'ஓம் ஸ்ரீ கணேசாய நமஹ ✦'
    },
    hi: {
      title: 'श्री सिद्धि विनायक',
      subtitle: 'विघ्नहर्ता भगवान श्री गणेश • शुभ व मंगलकारी',
      mantra: 'ॐ गं गणपतये नमः ✦'
    },
    en: {
      title: 'Sri Selva Vinayagar',
      subtitle: 'Remover of Obstacles • Auspicious Blessings',
      mantra: 'Om Gam Ganapataye Namaha ✦'
    }
  };

  const currentBlessing = blessingText[currentLang] || blessingText.en;

  return (
    <div className="relative inline-flex items-center">
      {/* Golden Vinayagar Sacred Button / Icon Badge */}
      <button
        type="button"
        onClick={() => setShowBlessing(!showBlessing)}
        onMouseEnter={() => setShowBlessing(true)}
        onMouseLeave={() => setShowBlessing(false)}
        aria-label="Lord Vinayagar Auspicious Blessing"
        className="group relative flex items-center justify-center p-1 sm:p-1.5 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
        title={currentBlessing.title}
      >
        {/* Ambient Divine Golden Aura */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ffd700]/40 via-[#f4bb4f]/60 to-[#d48806]/40 blur-[5px] group-hover:blur-[8px] transition-all duration-300 animate-pulse pointer-events-none" />

        {/* Outer Sacred Golden Ring */}
        <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-[#8a5200] via-[#ffd700] via-[#fff3b0] to-[#b87a08] shadow-[0_2px_8px_rgba(184,122,8,0.4)] flex items-center justify-center">
          {/* Inner Golden Medallion Background with Idol Image */}
          <div className="w-full h-full rounded-full bg-gradient-to-b from-[#5c0d0a] via-[#400604] to-[#260302] flex items-center justify-center overflow-hidden border border-[#ffd700]/60">
            <img
              src="/golden_vinayagar.jpg"
              alt="Lord Sri Selva Vinayagar"
              className="w-full h-full object-cover object-center scale-110 drop-shadow-[0_1px_3px_rgba(255,215,0,0.8)] filter transition-transform duration-300 group-hover:scale-125"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </button>

      {/* Floating Auspicious Blessing Popover / Tooltip */}
      {showBlessing && (
        <div 
          className="absolute right-0 top-full mt-2 w-64 sm:w-72 z-50 bg-[#fffdf8] border-2 border-[#d4a853] rounded-2xl shadow-2xl p-3.5 text-center transition-all animate-in fade-in zoom-in-95 pointer-events-none"
          role="tooltip"
        >
          <div className="w-2.5 h-2.5 bg-[#fffdf8] border-t-2 border-l-2 border-[#d4a853] rotate-45 absolute -top-1.5 right-4" />
          
          <div className="w-16 h-16 mx-auto mb-2 rounded-xl overflow-hidden border border-[#e1be87] bg-gradient-to-b from-[#fff7e6] to-[#fcefd8] p-1 shadow-xs">
            <img
              src="/golden_vinayagar.jpg"
              alt="Lord Sri Selva Vinayagar"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex items-center justify-center gap-1 text-[#b87a08] text-xs font-bold mb-1">
            <span>ॐ</span>
            <span>✦</span>
            <span>{currentBlessing.title}</span>
            <span>✦</span>
          </div>
          
          <p className="text-[11px] text-[#593e2b] font-medium leading-tight mb-2">
            {currentBlessing.subtitle}
          </p>
          
          <div className="bg-[#fcf4e6] text-[#72130e] text-[10px] font-bold py-1 px-2.5 rounded-lg border border-[#edd5b3] tracking-wide">
            {currentBlessing.mantra}
          </div>
        </div>
      )}
    </div>
  );
};
