import React, { useState, useMemo } from 'react';
import { 
  Check, 
  RotateCcw, 
  MessageCircle, 
  Copy, 
  Search, 
  Info, 
  Calendar, 
  Users, 
  Car, 
  Hotel, 
  Utensils, 
  CheckSquare, 
  Square,
  Sparkles,
  MapPin,
  Compass
} from 'lucide-react';
import { Temple, ServiceTierId } from '../types';
import { PACKAGES_META, ALL_TEMPLES, SERVICE_TIERS, getLocalizedTemple, getLocalizedPackage, getLocalizedTier } from '../data/temples';
import { TempleModal } from './TempleModal';
import { WhatsAppMessageModal } from './WhatsAppMessageModal';
import { Language, TRANSLATIONS } from '../data/translations';

interface TempleSelectorProps {
  currentPackage: 1 | 2 | 3;
  onSelectPackage: (id: 1 | 2 | 3) => void;
  selectedTempleIds: string[];
  onToggleTemple: (id: string) => void;
  onSelectAllInPackage: (pkgId: 1 | 2 | 3) => void;
  onClearAll: () => void;
  selectedTier: ServiceTierId;
  onSelectTier: (tier: ServiceTierId) => void;
  travelDate: string;
  setTravelDate: (date: string) => void;
  groupSize: number;
  setGroupSize: (size: number) => void;
  needVehicle: boolean;
  setNeedVehicle: (val: boolean) => void;
  needStay: boolean;
  setNeedStay: (val: boolean) => void;
  needSatvicFood: boolean;
  setNeedSatvicFood: (val: boolean) => void;
  specialNotes: string;
  setSpecialNotes: (notes: string) => void;
  seniorAssistance: boolean;
  setSeniorAssistance: (val: boolean) => void;
  archanaAssistance: boolean;
  setArchanaAssistance: (val: boolean) => void;
  currentLang?: Language;
}

export const TempleSelector: React.FC<TempleSelectorProps> = ({
  currentPackage,
  onSelectPackage,
  selectedTempleIds,
  onToggleTemple,
  onSelectAllInPackage,
  onClearAll,
  selectedTier,
  onSelectTier,
  travelDate,
  setTravelDate,
  groupSize,
  setGroupSize,
  needVehicle,
  setNeedVehicle,
  needStay,
  setNeedStay,
  needSatvicFood,
  setNeedSatvicFood,
  specialNotes,
  setSpecialNotes,
  seniorAssistance,
  setSeniorAssistance,
  archanaAssistance,
  setArchanaAssistance,
  currentLang = 'en'
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [inspectingTemple, setInspectingTemple] = useState<Temple | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  const t = TRANSLATIONS[currentLang];
  const currentPkgMeta = useMemo(() => {
    const raw = PACKAGES_META.find(p => p.id === currentPackage) || PACKAGES_META[0];
    return getLocalizedPackage(raw, currentLang);
  }, [currentPackage, currentLang]);

  // Categories list with localization
  const categoryOptions = useMemo(() => [
    { key: 'All', label: t.categories.all },
    { key: 'Navagraha', label: t.categories.navagraha },
    { key: 'Shiva / Chola', label: t.categories.shiva },
    { key: 'Vishnu / Divya Desam', label: t.categories.vishnu },
    { key: 'Devi / Amman', label: t.categories.devi },
    { key: 'Remedial Shrine', label: t.categories.remedial }
  ], [t]);

  // Filter temples for current package
  const packageTemples = useMemo(() => {
    return ALL_TEMPLES.filter(temple => temple.packageId === currentPackage);
  }, [currentPackage]);

  // Apply search and category filter
  const filteredTemples = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return packageTemples.filter(rawTemple => {
      const loc = getLocalizedTemple(rawTemple, currentLang);
      const matchesSearch = !q || (
        (loc.name && loc.name.toLowerCase().includes(q)) ||
        (rawTemple.nameTamil && rawTemple.nameTamil.toLowerCase().includes(q)) ||
        (rawTemple.nameEnglish && rawTemple.nameEnglish.toLowerCase().includes(q)) ||
        (rawTemple.nameHindi && rawTemple.nameHindi.toLowerCase().includes(q)) ||
        (loc.deity && loc.deity.toLowerCase().includes(q)) ||
        (loc.pariharam && loc.pariharam.toLowerCase().includes(q)) ||
        (loc.location && loc.location.toLowerCase().includes(q)) ||
        (loc.rulingPlanetOrFeature && loc.rulingPlanetOrFeature.toLowerCase().includes(q))
      );

      const matchesCat = activeCategory === 'All' || rawTemple.categoryTag === activeCategory;
      return matchesSearch && matchesCat;
    });
  }, [packageTemples, searchQuery, activeCategory, currentLang]);

  const selectedTemplesList = useMemo(() => {
    return ALL_TEMPLES.filter(temple => selectedTempleIds.includes(temple.id));
  }, [selectedTempleIds]);

  const areAllInCurrentSelected = useMemo(() => {
    if (packageTemples.length === 0) return false;
    return packageTemples.every(temple => selectedTempleIds.includes(temple.id));
  }, [packageTemples, selectedTempleIds]);

  const handleToggleSelectAllCurrent = () => {
    if (areAllInCurrentSelected) {
      packageTemples.forEach(temple => {
        if (selectedTempleIds.includes(temple.id)) {
          onToggleTemple(temple.id);
        }
      });
      setStatusMessage(currentLang === 'ta' 
        ? `தொகுப்பு ${currentPackage} தலங்கள் நீக்கப்பட்டன.` 
        : currentLang === 'hi'
        ? `पैकेज ${currentPackage} के मंदिर हटा दिए गए।`
        : `Deselected Package ${currentPackage} temples.`);
    } else {
      onSelectAllInPackage(currentPackage);
      setStatusMessage(currentLang === 'ta'
        ? `தொகுப்பு ${currentPackage}-ல் உள்ள அனைத்து ${packageTemples.length} தலங்களும் சேர்க்கப்பட்டன.`
        : currentLang === 'hi'
        ? `पैकेज ${currentPackage} के सभी ${packageTemples.length} मंदिर जोड़ लिए गए।`
        : `Selected all ${packageTemples.length} temples in Package ${currentPackage}.`);
    }
  };

  const handleSendWhatsApp = () => {
    if (selectedTemplesList.length === 0) {
      setStatusMessage(currentLang === 'ta'
        ? 'தயவுசெய்து குறைந்தது ஒரு கோவிலையாவது தேர்ந்தெடுக்கவும்.'
        : currentLang === 'hi'
        ? 'कृपया अपनी यात्रा हेतु कम से कम एक मंदिर का चयन करें।'
        : 'Please select at least one temple to prepare your customized itinerary.');
      return;
    }

    setIsWhatsAppModalOpen(true);
  };

  const handleCopyItinerary = () => {
    if (selectedTemplesList.length === 0) {
      setStatusMessage(currentLang === 'ta'
        ? 'நகலெடுக்க குறைந்தது ஒரு கோவிலையாவது தேர்வு செய்யவும்.'
        : currentLang === 'hi'
        ? 'कॉपी करने से पूर्व कृपया कम से कम एक मंदिर चुनें।'
        : 'Please select at least one temple before copying.');
      return;
    }

    const tierObj = SERVICE_TIERS.find(s => s.id === selectedTier);
    const localizedTier = tierObj ? getLocalizedTier(tierObj, currentLang) : null;
    const tierName = localizedTier ? localizedTier.name : selectedTier;

    const templeLines = selectedTemplesList.map((temple, idx) => {
      const loc = getLocalizedTemple(temple, currentLang);
      return `${idx + 1}. ${loc.name} (${temple.nameEnglish}) - [${loc.pariharam || loc.rulingPlanetOrFeature}]`;
    }).join('\n');

    const summary = `${t.siteTitle} - ${t.selector.summaryTitle}\n\nPackage: ${currentPkgMeta.title}\nTier: ${tierName}\nTravel Date: ${travelDate || 'Pending'}\nGroup Size: ${groupSize}\n\nTemples (${selectedTemplesList.length}):\n${templeLines}\n\nContacts & WhatsApp (+91 90253 04681):\n• S. Saranya, B.Tech (Packages & Temple Info)\n• S. Ishwarya, M.A. (Bookings & Payments)\n• Email: info@kumbakonamtemplesdharsan.ae`;

    navigator.clipboard.writeText(summary);
    setStatusMessage(`✓ ${t.selector.copiedAlert}`);
  };

  return (
    <section id="selection" className="py-20 bg-[#fffdf7] border-b border-[#ead9c0]">
      <div className="main-container">
        {/* Section Head */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold tracking-widest text-[#a03824] uppercase mb-2">
            {t.selector.step1Tag}
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#701710] mb-3 leading-tight">
            {t.selector.step1Heading}
          </h2>
          <p className="text-base sm:text-lg text-[#66584e]">
            {t.selector.step1Sub}
          </p>
          <div className="text-[#c38a29] text-xl mt-2">✦</div>
        </div>

        {/* Package Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {PACKAGES_META.map((pkg) => {
            const locPkg = getLocalizedPackage(pkg, currentLang);
            const isActive = currentPackage === pkg.id;
            return (
              <button
                key={pkg.id}
                onClick={() => {
                  onSelectPackage(pkg.id);
                  setActiveCategory('All');
                }}
                className={`flex-1 min-w-[260px] max-w-sm p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#701710] text-white border-[#701710] shadow-md'
                    : 'bg-white text-[#6e160f] border-[#dfcdb0] hover:bg-[#fff9ef]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-[#f4bb4f]' : 'bg-[#f6ebd9] text-[#701710]'
                  }`}>
                    Package {pkg.id}
                  </span>
                  <span className={`text-xs font-semibold ${isActive ? 'text-[#f4bb4f]' : 'text-[#8a2b1d]'}`}>
                    {ALL_TEMPLES.filter(temple => temple.packageId === pkg.id).length} {currentLang === 'ta' ? 'ஆலயங்கள்' : currentLang === 'hi' ? 'मंदिर' : 'Temples'}
                  </span>
                </div>
                <h4 className="font-cormorant text-xl font-bold leading-tight mb-1">
                  {locPkg.title}
                </h4>
                <p className={`text-xs font-medium truncate ${isActive ? 'text-[#ffddbe]' : 'text-[#21602f]'}`}>
                  {currentLang === 'ta' ? pkg.title : (pkg.titleTamil || pkg.title)}
                </p>
              </button>
            );
          })}
        </div>

        {/* Package Context Banner */}
        <div className="bg-[#fff9ef] border border-[#ebdcc7] rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#b27a20] uppercase tracking-wide">
              {currentPkgMeta.badge}
            </span>
            <p className="text-sm text-[#4a3a30] leading-relaxed">
              {currentPkgMeta.description}
            </p>
            <p className="text-xs font-semibold text-[#1e6631]">
              ✦ {currentPkgMeta.highlightText}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleToggleSelectAllCurrent}
              className="bg-white border border-[#dfc69e] hover:bg-[#faedd4] text-[#701710] text-xs font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {areAllInCurrentSelected ? (
                <>
                  <CheckSquare className="w-4 h-4 text-[#1e6631]" />
                  <span>{currentLang === 'ta' ? `அனைத்தையும் நீக்கு (${packageTemples.length})` : currentLang === 'hi' ? `सभी हटाएं (${packageTemples.length})` : `Deselect All (${packageTemples.length})`}</span>
                </>
              ) : (
                <>
                  <Square className="w-4 h-4 text-[#701710]" />
                  <span>{t.selector.selectAllBtn} ({packageTemples.length})</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8b796d]" />
            <input
              type="text"
              placeholder={t.selector.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#dacbb5] bg-white text-xs sm:text-sm text-[#3a2e26] focus:outline-none focus:ring-2 focus:ring-[#72130e]/30 placeholder:text-[#99877b]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8b796d] hover:text-[#72130e] cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {categoryOptions.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-[#72130e] text-white'
                    : 'bg-white border border-[#dfcdb0] text-[#55453a] hover:bg-[#faedd4]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Temples List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
          {filteredTemples.length === 0 ? (
            <div className="col-span-2 text-center py-12 bg-white rounded-xl border border-[#e5d9c5]">
              <p className="text-sm text-[#736357]">
                {currentLang === 'ta' ? 'தேடலுக்கு ஏற்ப கோவில்கள் எதுவும் கிடைக்கவில்லை.' : currentLang === 'hi' ? 'खोज के अनुसार कोई मंदिर नहीं मिला।' : 'No temples found matching your search filter.'}
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="mt-2 text-xs font-bold text-[#72130e] underline cursor-pointer"
              >
                {t.selector.resetBtn}
              </button>
            </div>
          ) : (
            filteredTemples.map((temple) => {
              const isSelected = selectedTempleIds.includes(temple.id);
              const loc = getLocalizedTemple(temple, currentLang);
              
              // Secondary title logic for subtitle display
              let secondaryTitle = '';
              if (currentLang === 'ta') {
                secondaryTitle = temple.nameEnglish;
              } else if (currentLang === 'hi') {
                secondaryTitle = `${temple.nameTamil || ''} • ${temple.nameEnglish}`;
              } else {
                secondaryTitle = temple.nameTamil || '';
              }

              return (
                <div
                  key={temple.id}
                  onClick={() => onToggleTemple(temple.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-3 group ${
                    isSelected
                      ? 'bg-[#fffaf0] border-[#b27a20] ring-1 ring-[#b27a20]/40 shadow-sm'
                      : 'bg-white border-[#e5d9c5] hover:border-[#b8956e]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => {}} // Handled by outer div
                      className="w-4 h-4 mt-1 accent-[#72130e] rounded cursor-pointer shrink-0"
                    />

                    <div>
                      <div className="flex flex-wrap items-center gap-1.5 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#b27a20] bg-[#fdf5e8] px-2 py-0.5 rounded border border-[#ebdcc7]">
                          {temple.categoryTag}
                        </span>
                        <span className="text-[10px] text-[#6d5b50]">
                          • {loc.location}
                        </span>
                      </div>
                      <b className="font-cormorant text-lg text-[#65120f] block leading-tight group-hover:text-[#8e2016]">
                        {loc.name}
                      </b>
                      {secondaryTitle && (
                        <span className="text-xs text-[#4b3c33] block mb-1 font-medium">
                          {secondaryTitle}
                        </span>
                      )}
                      <small className="text-[#6c5d53] text-[11px] block leading-relaxed font-normal">
                        ✦ {loc.note || loc.pariharam}
                      </small>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setInspectingTemple(temple);
                    }}
                    className="p-1.5 rounded-lg text-[#8a5717] hover:bg-[#f6ebd9] transition-colors shrink-0 cursor-pointer"
                    title={t.selector.viewDetails}
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Route Configuration Box */}
        <div className="bg-[#fffaf0] border border-[#dfc69e] rounded-2xl p-6 sm:p-8 mb-8 shadow-sm">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#eadcc9]">
            <Compass className="w-5 h-5 text-[#b27a20]" />
            <div>
              <span className="text-xs font-bold text-[#a03824] uppercase tracking-wider block">
                {t.selector.step3Tag}
              </span>
              <h3 className="font-cormorant text-2xl font-bold text-[#701710]">
                {t.selector.step3Heading}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="text-xs font-bold text-[#5e5149] uppercase tracking-wider block mb-2">
                {t.selector.summaryServiceTier}
              </label>
              <select
                value={selectedTier}
                onChange={(e) => onSelectTier(e.target.value as ServiceTierId)}
                className="w-full p-3 rounded-xl border border-[#dacbb5] bg-white text-sm text-[#3a2e26] font-medium focus:ring-2 focus:ring-[#72130e]/30 focus:outline-none"
              >
                {SERVICE_TIERS.map(st => {
                  const locTier = getLocalizedTier(st, currentLang);
                  return (
                    <option key={st.id} value={st.id}>
                      {locTier.name} ({locTier.vehicle} · {locTier.stay})
                    </option>
                  );
                })}
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-[#5e5149] uppercase tracking-wider block mb-2">
                {t.selector.travelDateLabel}
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full p-3 rounded-xl border border-[#dacbb5] bg-white text-sm text-[#3a2e26] font-medium focus:ring-2 focus:ring-[#72130e]/30 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-[#5e5149] uppercase tracking-wider block mb-2">
                {t.selector.devoteesLabel}
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={groupSize}
                  onChange={(e) => setGroupSize(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full p-3 rounded-xl border border-[#dacbb5] bg-white text-sm text-[#3a2e26] font-medium focus:ring-2 focus:ring-[#72130e]/30 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Modular Checkboxes */}
          <div className="mb-6 pt-4 border-t border-[#eadcc9]">
            <span className="text-xs font-bold text-[#5e5149] uppercase tracking-wider block mb-3">
              {t.servicesSection.title}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <label className="flex items-center gap-3 p-3 rounded-xl border border-[#e4d3bd] bg-white cursor-pointer hover:bg-[#fffcf7]">
                <input
                  type="checkbox"
                  checked={needVehicle}
                  onChange={(e) => setNeedVehicle(e.target.checked)}
                  className="w-4 h-4 accent-[#72130e] rounded"
                />
                <div className="text-xs">
                  <span className="font-bold text-[#45372f] block">{t.selector.acVehicleLabel}</span>
                  <span className="text-[11px] text-[#716155]">
                    {currentLang === 'ta' ? 'அனுபவம் வாய்ந்த ஓட்டுநர்' : currentLang === 'hi' ? 'अनुभवी चालक के साथ वाहन' : 'Vehicle with experienced driver'}
                  </span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-xl border border-[#e4d3bd] bg-white cursor-pointer hover:bg-[#fffcf7]">
                <input
                  type="checkbox"
                  checked={needStay}
                  onChange={(e) => setNeedStay(e.target.checked)}
                  className="w-4 h-4 accent-[#72130e] rounded"
                />
                <div className="text-xs">
                  <span className="font-bold text-[#45372f] block">{t.selector.homestayLabel}</span>
                  <span className="text-[11px] text-[#716155]">
                    {currentLang === 'ta' ? 'சுத்தமான பாரம்பரிய தங்குமிடம்' : currentLang === 'hi' ? 'स्वच्छ होमस्टे / होटल' : 'Clean traditional homestay / hotel'}
                  </span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-xl border border-[#e4d3bd] bg-white cursor-pointer hover:bg-[#fffcf7]">
                <input
                  type="checkbox"
                  checked={needSatvicFood}
                  onChange={(e) => setNeedSatvicFood(e.target.checked)}
                  className="w-4 h-4 accent-[#72130e] rounded"
                />
                <div className="text-xs">
                  <span className="font-bold text-[#45372f] block">{t.selector.satvicFoodLabel}</span>
                  <span className="text-[11px] text-[#716155]">
                    {currentLang === 'ta' ? 'பாரம்பரிய வாழை இலை சாப்பாடு' : currentLang === 'hi' ? 'दक्षिण भारतीय शुद्ध शाकाहारी' : 'Traditional South Indian vegetarian'}
                  </span>
                </div>
              </label>
            </div>
          </div>

          {/* Special Care Toggles */}
          <div className="mb-6 pt-4 border-t border-[#eadcc9]">
            <span className="text-xs font-bold text-[#5e5149] uppercase tracking-wider block mb-3">
              {t.selector.summaryAssistance}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="flex items-center gap-3 p-3 rounded-xl border border-[#e4d3bd] bg-white cursor-pointer hover:bg-[#fffcf7]">
                <input
                  type="checkbox"
                  checked={seniorAssistance}
                  onChange={(e) => setSeniorAssistance(e.target.checked)}
                  className="w-4 h-4 accent-[#72130e] rounded"
                />
                <div className="text-xs">
                  <span className="font-bold text-[#45372f] block">{t.selector.seniorCareLabel}</span>
                  <span className="text-[11px] text-[#716155]">
                    {currentLang === 'ta' ? 'மெதுவான நடை, படிகள் தவிர்ப்பு, ஓய்வு' : currentLang === 'hi' ? 'धीमी गति, सीढ़ियों से बचाव, पर्याप्त विश्राम' : 'Gentle pacing, minimal stairs, resting intervals'}
                  </span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-xl border border-[#e4d3bd] bg-white cursor-pointer hover:bg-[#fffcf7]">
                <input
                  type="checkbox"
                  checked={archanaAssistance}
                  onChange={(e) => setArchanaAssistance(e.target.checked)}
                  className="w-4 h-4 accent-[#72130e] rounded"
                />
                <div className="text-xs">
                  <span className="font-bold text-[#45372f] block">{t.selector.archanaLabel}</span>
                  <span className="text-[11px] text-[#716155]">
                    {currentLang === 'ta' ? 'அர்ச்சனை & தோஷ பரிகார பூஜை வழிகாட்டல்' : currentLang === 'hi' ? 'दोष निवारण संकल्प एवं पूजा समन्वय' : 'Priest assistance for specific dosha pariharams'}
                  </span>
                </div>
              </label>
            </div>
          </div>

          {/* Special Notes / Dosha Requirements */}
          <div>
            <label className="text-xs font-bold text-[#5e5149] uppercase tracking-wider block mb-2">
              {t.selector.specialNotesLabel}
            </label>
            <textarea
              rows={2}
              value={specialNotes}
              onChange={(e) => setSpecialNotes(e.target.value)}
              placeholder={t.selector.specialNotesPlaceholder}
              className="w-full p-3 rounded-xl border border-[#dacbb5] bg-white text-xs sm:text-sm text-[#3a2e26] focus:ring-2 focus:ring-[#72130e]/30 focus:outline-none"
            />
          </div>
        </div>

        {/* Live Selection Summary & Actions */}
        <div className="bg-white border border-[#e3d5c2] rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl font-bold font-cormorant text-[#701710]">
                {selectedTemplesList.length} {t.selector.summaryTemplesSelected}
              </span>
            </div>
            <p className="text-xs text-[#52443a]">
              {t.selector.summaryServiceTier}: <strong className="capitalize text-[#72130e]">{selectedTier}</strong>
              {' '}| {t.selector.helpNotice}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
            <button
              onClick={handleSendWhatsApp}
              className="flex-1 sm:flex-initial bg-[#19783b] hover:bg-[#135f2f] text-white text-xs font-semibold px-5 py-3 rounded-full transition-all shadow hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
              title="Send selected temples to coordinators on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.selector.sendRouteWhatsApp}</span>
            </button>

            <button
              onClick={handleCopyItinerary}
              className="bg-[#f6ebd9] hover:bg-[#ebd9bf] text-[#6e160f] text-xs font-bold px-3.5 py-3 rounded-full transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              title="Copy itinerary summary"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{t.selector.copyRoute}</span>
            </button>

            <button
              onClick={onClearAll}
              className="bg-transparent hover:bg-[#f6ebd9] text-[#7a583f] text-xs font-bold px-3.5 py-3 rounded-full border border-[#d9c5ad] transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.selector.resetBtn}</span>
            </button>
          </div>
        </div>

        {statusMessage && (
          <p className="text-center text-xs font-semibold text-[#1e6631] mt-3">
            {statusMessage}
          </p>
        )}
      </div>

      {/* Sthala Puranam Temple Modal */}
      <TempleModal
        temple={inspectingTemple}
        onClose={() => setInspectingTemple(null)}
        isSelected={inspectingTemple ? selectedTempleIds.includes(inspectingTemple.id) : false}
        onToggleSelect={onToggleTemple}
        currentLang={currentLang}
      />

      {/* WhatsApp Message Modal with Language Selection & Live Concern Message Preview */}
      <WhatsAppMessageModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        defaultLang={currentLang}
        mode="itinerary"
        itineraryData={{
          packageId: currentPackage,
          selectedTempleIds,
          selectedTier,
          travelDate,
          groupSize,
          needVehicle,
          needStay,
          needSatvicFood,
          seniorAssistance,
          archanaAssistance,
          specialNotes
        }}
      />
    </section>
  );
};
