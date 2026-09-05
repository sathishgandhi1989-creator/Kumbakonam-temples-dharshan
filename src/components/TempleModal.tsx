import React from 'react';
import { X, MapPin, Sparkles, Shield, BookOpen, Check } from 'lucide-react';
import { Temple } from '../types';
import { getTempleImage } from '../data/templeImages';
import { Language, TRANSLATIONS } from '../data/translations';
import { getLocalizedTemple } from '../data/temples';

interface TempleModalProps {
  temple: Temple | null;
  onClose: () => void;
  isSelected: boolean;
  onToggleSelect: (id: string) => void;
  currentLang?: Language;
}

export const TempleModal: React.FC<TempleModalProps> = ({
  temple,
  onClose,
  isSelected,
  onToggleSelect,
  currentLang = 'en'
}) => {
  if (!temple) return null;
  const t = TRANSLATIONS[currentLang];
  const loc = getLocalizedTemple(temple, currentLang);
  const imgUrl = temple.imageUrl || getTempleImage(temple.id);

  // Determine secondary title (e.g. if Tamil selected, show English; if English, show Tamil; if Hindi, show Tamil & English)
  const primaryTitle = loc.name;
  let secondaryTitle = '';
  if (currentLang === 'ta') {
    secondaryTitle = temple.nameEnglish;
  } else if (currentLang === 'hi') {
    secondaryTitle = `${temple.nameTamil || ''} • ${temple.nameEnglish}`;
  } else {
    secondaryTitle = temple.nameTamil || '';
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div 
        className="bg-[#fffdf8] border border-[#d9c4a8] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Temple Photo Hero Banner */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-[#3a0906]">
          <img
            src={imgUrl}
            alt={primaryTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#480c09] via-[#480c09]/60 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer z-10"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Overlay titles */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#f4bb4f] bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full inline-block mb-1 border border-white/10">
              Package {temple.packageId} · {temple.categoryTag}
            </span>
            <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-white mb-0.5 drop-shadow-sm">
              {primaryTitle}
            </h3>
            {secondaryTitle && (
              <p className="text-base sm:text-lg text-[#feddb0] font-medium font-cormorant drop-shadow-sm">
                {secondaryTitle}
              </p>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Location & Quick Feature */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#5a483d] pb-4 border-b border-[#eadcc9]">
            <div className="flex items-center gap-1.5 font-medium bg-[#fcf5e9] px-3 py-1.5 rounded-lg border border-[#e8d5bc]">
              <MapPin className="w-3.5 h-3.5 text-[#b27a20]" />
              <span>{loc.location}</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium bg-[#fcf5e9] px-3 py-1.5 rounded-lg border border-[#e8d5bc]">
              <Sparkles className="w-3.5 h-3.5 text-[#72130e]" />
              <span>{loc.rulingPlanetOrFeature}</span>
            </div>
          </div>

          {/* Deity Information */}
          <div className="bg-[#fff9ef] p-4 rounded-xl border border-[#ebdcc7]">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#a03824] block mb-1">
              {t.modal.presidingDeity}
            </span>
            <p className="font-cormorant text-xl font-bold text-[#6e160f]">
              {loc.deity}
            </p>
          </div>

          {/* Pariharam & Spiritual Significance */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#72130e] mb-2">
              <Shield className="w-4 h-4 text-[#b27a20]" />
              <span>{t.modal.pariharamTitle}</span>
            </div>
            <p className="text-sm text-[#4a3a30] bg-[#f8f2e7] p-4 rounded-xl border border-[#e4d3bd] leading-relaxed">
              {loc.pariharam}
            </p>
          </div>

          {/* Sthala Puranam Highlights */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#72130e] mb-3">
              <BookOpen className="w-4 h-4 text-[#b27a20]" />
              <span>{t.modal.sthalaPuranamTitle}</span>
            </div>
            <ul className="space-y-2.5">
              {loc.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4a3a30]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b27a20] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="bg-[#fcf5e9] border-t border-[#eadcc9] p-4 sm:p-6 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[#6e584a]">
            {isSelected ? (
              <span className="text-[#1e6631] font-bold flex items-center gap-1">
                <Check className="w-4 h-4" /> {t.modal.selectedInRoute}
              </span>
            ) : (
              <span>{t.modal.notAddedToRoute}</span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold text-[#5c4a3e] hover:bg-[#ebdcc7] transition-colors cursor-pointer"
            >
              {t.modal.closeBtn}
            </button>
            <button
              onClick={() => {
                onToggleSelect(temple.id);
              }}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                isSelected
                  ? 'bg-[#19783b] text-white shadow'
                  : 'bg-[#72130e] text-white hover:bg-[#5c0d0a] shadow'
              }`}
            >
              {isSelected ? t.modal.inRoute : t.modal.addRoute}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
