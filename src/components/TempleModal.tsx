import React from 'react';
import { X, MapPin, Sparkles, Shield, Compass, BookOpen, Check } from 'lucide-react';
import { Temple } from '../types';

interface TempleModalProps {
  temple: Temple | null;
  onClose: () => void;
  isSelected: boolean;
  onToggleSelect: (id: string) => void;
}

export const TempleModal: React.FC<TempleModalProps> = ({
  temple,
  onClose,
  isSelected,
  onToggleSelect
}) => {
  if (!temple) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div 
        className="bg-[#fffdf8] border border-[#d9c4a8] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#65120f] to-[#8a2117] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-[11px] font-bold tracking-widest uppercase text-[#f4bb4f] bg-black/20 px-2.5 py-1 rounded-full inline-block mb-2">
            Package {temple.packageId} · {temple.categoryTag}
          </span>
          <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-white mb-1">
            {temple.nameEnglish}
          </h3>
          <p className="text-lg text-[#feddb0] font-medium font-cormorant">
            {temple.nameTamil}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Location & Quick Feature */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#5a483d] pb-4 border-b border-[#eadcc9]">
            <div className="flex items-center gap-1.5 font-medium bg-[#fcf5e9] px-3 py-1.5 rounded-lg border border-[#e8d5bc]">
              <MapPin className="w-3.5 h-3.5 text-[#b27a20]" />
              <span>{temple.location}</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium bg-[#fcf5e9] px-3 py-1.5 rounded-lg border border-[#e8d5bc]">
              <Sparkles className="w-3.5 h-3.5 text-[#72130e]" />
              <span>{temple.rulingPlanetOrFeature}</span>
            </div>
          </div>

          {/* Deity Information */}
          <div className="bg-[#fff9ef] p-4 rounded-xl border border-[#ebdcc7]">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#a03824] block mb-1">
              Presiding Deity & Sanctum
            </span>
            <p className="font-cormorant text-xl font-bold text-[#6e160f]">
              {temple.deity}
            </p>
          </div>

          {/* Pariharam & Spiritual Significance */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#72130e] mb-2">
              <Shield className="w-4 h-4 text-[#b27a20]" />
              <span>Pariharam & Spiritual Blessings</span>
            </div>
            <p className="text-sm text-[#4a3a30] bg-[#f8f2e7] p-4 rounded-xl border border-[#e4d3bd] leading-relaxed">
              {temple.pariharam}
            </p>
          </div>

          {/* Sthala Puranam Highlights */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#72130e] mb-3">
              <BookOpen className="w-4 h-4 text-[#b27a20]" />
              <span>Sthala Puranam & Unique Heritage</span>
            </div>
            <ul className="space-y-2.5">
              {temple.highlights.map((item, idx) => (
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
                <Check className="w-4 h-4" /> Selected in your custom route
              </span>
            ) : (
              <span>Not yet added to your route</span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold text-[#5c4a3e] hover:bg-[#ebdcc7] transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onToggleSelect(temple.id);
              }}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                isSelected
                  ? 'bg-[#19783b] text-white shadow'
                  : 'bg-[#72130e] text-white hover:bg-[#5c0d0a] shadow'
              }`}
            >
              {isSelected ? '✓ In My Route (Remove)' : '卐 Add to My Route'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
