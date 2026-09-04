import React from 'react';
import { Languages } from 'lucide-react';
import { Language } from '../data/translations';

interface LanguageSelectorProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLang,
  onSelectLang
}) => {
  const languages: { code: Language; label: string; nativeName: string }[] = [
    { code: 'en', label: 'English', nativeName: 'English' },
    { code: 'ta', label: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'hi', label: 'Hindi', nativeName: 'हिन्दी' }
  ];

  return (
    <div className="inline-flex items-center bg-[#460907]/90 p-0.5 rounded-full border border-[#9b3a32]/60 shadow-inner">
      <div className="pl-2 pr-1 text-[#f4bb4f] flex items-center">
        <Languages className="w-3.5 h-3.5" />
      </div>
      <div className="flex items-center space-x-0.5">
        {languages.map((lang) => {
          const isActive = currentLang === lang.code;
          return (
            <button
              key={lang.code}
              onClick={() => onSelectLang(lang.code)}
              className={`px-2.5 py-1 text-[11px] font-bold rounded-full transition-all duration-150 flex items-center gap-1 ${
                isActive
                  ? 'bg-[#f4bb4f] text-[#4a0b08] shadow-sm scale-105'
                  : 'text-[#feddb0] hover:text-white hover:bg-white/10'
              }`}
              title={`Switch language to ${lang.label}`}
            >
              <span>{lang.nativeName}</span>
              {isActive && <span className="w-1 h-1 rounded-full bg-[#4a0b08]"></span>}
            </button>
          );
        })}
      </div>
    </div>
  );
};
