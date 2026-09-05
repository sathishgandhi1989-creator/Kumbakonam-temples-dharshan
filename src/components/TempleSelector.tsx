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
  HeartHandshake, 
  CheckSquare, 
  Square,
  Sparkles,
  MapPin,
  Compass
} from 'lucide-react';
import { Temple, ServiceTierId } from '../types';
import { PACKAGES_META, ALL_TEMPLES, SERVICE_TIERS } from '../data/temples';
import { TempleModal } from './TempleModal';

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
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [inspectingTemple, setInspectingTemple] = useState<Temple | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>('');

  const currentPkgMeta = PACKAGES_META.find(p => p.id === currentPackage) || PACKAGES_META[0];

  // Filter temples for current package
  const packageTemples = useMemo(() => {
    return ALL_TEMPLES.filter(t => t.packageId === currentPackage);
  }, [currentPackage]);

  // Apply search and category filter
  const filteredTemples = useMemo(() => {
    return packageTemples.filter(t => {
      const matchesSearch = 
        t.nameTamil.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.nameEnglish.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.deity.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.note.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.rulingPlanetOrFeature.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCat = activeCategory === 'All' || t.categoryTag === activeCategory;

      return matchesSearch && matchesCat;
    });
  }, [packageTemples, searchQuery, activeCategory]);

  const selectedTemplesList = useMemo(() => {
    return ALL_TEMPLES.filter(t => selectedTempleIds.includes(t.id));
  }, [selectedTempleIds]);

  const areAllInCurrentSelected = useMemo(() => {
    if (packageTemples.length === 0) return false;
    return packageTemples.every(t => selectedTempleIds.includes(t.id));
  }, [packageTemples, selectedTempleIds]);

  const handleToggleSelectAllCurrent = () => {
    if (areAllInCurrentSelected) {
      // Unselect current package temples
      packageTemples.forEach(t => {
        if (selectedTempleIds.includes(t.id)) {
          onToggleTemple(t.id);
        }
      });
      setStatusMessage(`Deselected Package ${currentPackage} temples.`);
    } else {
      onSelectAllInPackage(currentPackage);
      setStatusMessage(`Selected all ${packageTemples.length} temples in Package ${currentPackage}.`);
    }
  };

  const generateWhatsAppUrl = () => {
    if (selectedTemplesList.length === 0) {
      setStatusMessage('Please select at least one temple to prepare your customized itinerary.');
      return '';
    }

    const tierObj = SERVICE_TIERS.find(t => t.id === selectedTier);
    const tierName = tierObj ? tierObj.name : selectedTier;
    const dateText = travelDate ? travelDate : 'Flexible / To be finalized';

    const servicesList: string[] = [];
    if (needVehicle) servicesList.push('Private AC Vehicle');
    if (needStay) servicesList.push('Verified Satvic Accommodation');
    if (needSatvicFood) servicesList.push('Satvic Meals');
    if (seniorAssistance) servicesList.push('Senior Citizen Friendly Pacing');
    if (archanaAssistance) servicesList.push('Archana & Special Darshan Coordination');

    const templeLines = selectedTemplesList.map(t => `• ${t.nameTamil} (${t.nameEnglish}) - [${t.note}]`).join('\n');

    const message = `Vanakkam Kumbakonam Temples Darshan,

I would like to plan a custom spiritual & heritage journey to Kumbakonam.

Package Focus: Package ${currentPackage} · ${currentPkgMeta.title}
Service Tier: ${tierName}
Travel Date: ${dateText}
Group Size: ${groupSize} Person(s)
Modular Services: ${servicesList.length > 0 ? servicesList.join(', ') : 'Experience & Route Planning only'}
${specialNotes ? `Special Requirements / Doshas: ${specialNotes}\n` : ''}
Selected Temples (${selectedTemplesList.length}):
${templeLines}

Please share my custom route map, timing schedule, and customized quote.`;

    return `https://wa.me/919025304681?text=${encodeURIComponent(message)}`;
  };

  const handleSendWhatsApp = () => {
    if (selectedTemplesList.length === 0) {
      setStatusMessage('Please select at least one temple to prepare your customized itinerary.');
      return;
    }

    const tierObj = SERVICE_TIERS.find(t => t.id === selectedTier);
    const tierName = tierObj ? tierObj.name : selectedTier;
    const dateText = travelDate ? travelDate : 'Flexible / To be finalized';

    const servicesList: string[] = [];
    if (needVehicle) servicesList.push('Private AC Vehicle');
    if (needStay) servicesList.push('Verified Satvic Accommodation');
    if (needSatvicFood) servicesList.push('Satvic Meals');
    if (seniorAssistance) servicesList.push('Senior Citizen Friendly Pacing');
    if (archanaAssistance) servicesList.push('Archana & Special Darshan Coordination');

    const templeLines = selectedTemplesList.map(t => `• ${t.nameTamil} (${t.nameEnglish}) - [${t.note}]`).join('\n');

    const message = `Vanakkam Kumbakonam Temples Darshan,

I would like to plan a custom spiritual & heritage journey to Kumbakonam.

Package Focus: Package ${currentPackage} · ${currentPkgMeta.title}
Service Tier: ${tierName}
Travel Date: ${dateText}
Group Size: ${groupSize} Person(s)
Modular Services: ${servicesList.length > 0 ? servicesList.join(', ') : 'Experience & Route Planning only'}
${specialNotes ? `Special Requirements / Doshas: ${specialNotes}\n` : ''}
Selected Temples (${selectedTemplesList.length}):
${templeLines}

Please share my custom route map, timing schedule, and customized quote.`;

    const url = `https://wa.me/919025304681?text=${encodeURIComponent(message)}`;
    setStatusMessage('Opening WhatsApp with Kumbakonam Temples Darshan (+91 90253 04681)...');
    window.open(url, '_blank');
  };

  const handleCopyItinerary = () => {
    if (selectedTemplesList.length === 0) {
      setStatusMessage('Please select at least one temple before copying.');
      return;
    }
    const templeLines = selectedTemplesList.map((t, idx) => `${idx + 1}. ${t.nameTamil} - ${t.nameEnglish} (${t.note})`).join('\n');
    const summary = `Kumbakonam Temples Darshan - Custom Route Summary\n\nPackage: ${currentPkgMeta.title}\nTier: ${selectedTier.toUpperCase()}\nTravel Date: ${travelDate || 'Pending'}\nGroup Size: ${groupSize}\n\nTemples (${selectedTemplesList.length}):\n${templeLines}\n\nContacts & WhatsApp (+91 90253 04681):\n• S. Saranya, B.Tech (Packages & Temple Info)\n• S. Ishwarya, M.A. (Bookings & Payments)\n• Email: info@kumbakonamtemplesdharsan.ae`;
    
    navigator.clipboard.writeText(summary);
    setStatusMessage('✓ Itinerary summary copied to clipboard!');
  };

  return (
    <section id="selection" className="py-20 bg-[#fffdf7] border-b border-[#ead9c0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Head */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold tracking-widest text-[#a03824] uppercase mb-2">
            Temple Selection
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#701710] mb-3 leading-tight">
            Create your custom route
          </h2>
          <p className="text-base sm:text-lg text-[#66584e]">
            Select temples, customize your service tier and modular preferences, and send directly to our spiritual travel consultant on WhatsApp.
          </p>
          <div className="text-[#c38a29] text-xl mt-2">✦</div>
        </div>

        {/* Package Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {PACKAGES_META.map((pkg) => {
            const isActive = currentPackage === pkg.id;
            return (
              <button
                key={pkg.id}
                onClick={() => {
                  onSelectPackage(pkg.id);
                  setActiveCategory('All');
                }}
                className={`flex-1 min-w-[260px] max-w-sm p-4 rounded-xl text-left border transition-all ${
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
                    {ALL_TEMPLES.filter(t => t.packageId === pkg.id).length} Temples
                  </span>
                </div>
                <h4 className="font-cormorant text-xl font-bold leading-tight mb-1">
                  {pkg.title}
                </h4>
                <p className={`text-xs font-medium truncate ${isActive ? 'text-[#ffddbe]' : 'text-[#21602f]'}`}>
                  {pkg.titleTamil}
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
              className="bg-white border border-[#dfc69e] hover:bg-[#faedd4] text-[#701710] text-xs font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
            >
              {areAllInCurrentSelected ? (
                <>
                  <CheckSquare className="w-4 h-4 text-[#1e6631]" />
                  <span>Deselect All ({packageTemples.length})</span>
                </>
              ) : (
                <>
                  <Square className="w-4 h-4 text-[#701710]" />
                  <span>Select All ({packageTemples.length})</span>
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
              placeholder="Search temple by Tamil / English name, deity, or remedy..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#dacbb5] bg-white text-xs sm:text-sm text-[#3a2e26] focus:outline-none focus:ring-2 focus:ring-[#72130e]/30 placeholder:text-[#99877b]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8b796d] hover:text-[#72130e]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {['All', 'Navagraha', 'Shiva / Chola', 'Vishnu / Divya Desam', 'Devi / Amman', 'Remedial Shrine'].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#72130e] text-white'
                    : 'bg-white border border-[#dfcdb0] text-[#55453a] hover:bg-[#faedd4]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Temples List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
          {filteredTemples.length === 0 ? (
            <div className="col-span-2 text-center py-12 bg-white rounded-xl border border-[#e5d9c5]">
              <p className="text-sm text-[#736357]">No temples found matching your search filter.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="mt-2 text-xs font-bold text-[#72130e] underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredTemples.map((temple) => {
              const isSelected = selectedTempleIds.includes(temple.id);
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
                          • {temple.location}
                        </span>
                      </div>
                      <b className="font-cormorant text-lg text-[#65120f] block leading-tight group-hover:text-[#8e2016]">
                        {temple.nameTamil}
                      </b>
                      <span className="text-xs text-[#4b3c33] block mb-1 font-medium">
                        {temple.nameEnglish}
                      </span>
                      <small className="text-[#6c5d53] text-[11px] block leading-relaxed font-normal">
                        ✦ {temple.note}
                      </small>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setInspectingTemple(temple);
                    }}
                    className="p-1.5 rounded-lg text-[#8a5717] hover:bg-[#f6ebd9] transition-colors shrink-0"
                    title="View Temple Sthala Puranam & Details"
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
            <h3 className="font-cormorant text-2xl font-bold text-[#701710]">
              Trip Preferences & Modular Services
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="text-xs font-bold text-[#5e5149] uppercase tracking-wider block mb-2">
                Your Service Tier
              </label>
              <select
                value={selectedTier}
                onChange={(e) => onSelectTier(e.target.value as ServiceTierId)}
                className="w-full p-3 rounded-xl border border-[#dacbb5] bg-white text-sm text-[#3a2e26] font-medium focus:ring-2 focus:ring-[#72130e]/30 focus:outline-none"
              >
                <option value="economy">Economy (AC Sedan · Budget Homestay)</option>
                <option value="premium">Premium (AC Innova/Ertiga · Heritage Stay)</option>
                <option value="elite">Elite / VIP (Luxury Vehicle · VIP Resort & Darshan)</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-[#5e5149] uppercase tracking-wider block mb-2">
                Travel Date
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
                Group Size (Persons)
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
              Included Modular Services (Toggle as needed)
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
                  <span className="font-bold text-[#45372f] block">Private AC Transport</span>
                  <span className="text-[11px] text-[#716155]">Vehicle with experienced driver</span>
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
                  <span className="font-bold text-[#45372f] block">Verified Accommodation</span>
                  <span className="text-[11px] text-[#716155]">Clean traditional homestay / hotel</span>
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
                  <span className="font-bold text-[#45372f] block">Pure Satvic Meals</span>
                  <span className="text-[11px] text-[#716155]">Traditional South Indian vegetarian</span>
                </div>
              </label>
            </div>
          </div>

          {/* Special Care Toggles */}
          <div className="mb-6 pt-4 border-t border-[#eadcc9]">
            <span className="text-xs font-bold text-[#5e5149] uppercase tracking-wider block mb-3">
              Special Pilgrimage Care
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
                  <span className="font-bold text-[#45372f] block">Senior Citizen & Walking Comfort</span>
                  <span className="text-[11px] text-[#716155]">Gentle pacing, minimal stairs, resting intervals</span>
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
                  <span className="font-bold text-[#45372f] block">Archana & Puja Coordination</span>
                  <span className="text-[11px] text-[#716155]">Priest assistance for specific dosha pariharams</span>
                </div>
              </label>
            </div>
          </div>

          {/* Special Notes / Dosha Requirements */}
          <div>
            <label className="text-xs font-bold text-[#5e5149] uppercase tracking-wider block mb-2">
              Specific Astrological Dosha, Pariharam, or Kula Deivam details (Optional)
            </label>
            <textarea
              rows={2}
              value={specialNotes}
              onChange={(e) => setSpecialNotes(e.target.value)}
              placeholder="e.g. Seeking Rahu-Ketu dosha nivruthi, marriage pariharam, visiting ancestral village near Thiruvidaimarudur..."
              className="w-full p-3 rounded-xl border border-[#dacbb5] bg-white text-xs sm:text-sm text-[#3a2e26] focus:ring-2 focus:ring-[#72130e]/30 focus:outline-none"
            />
          </div>
        </div>

        {/* Live Selection Summary & Actions */}
        <div className="bg-white border border-[#e3d5c2] rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl font-bold font-cormorant text-[#701710]">
                {selectedTemplesList.length} Temples Selected
              </span>
              <span className="text-xs text-[#6e5d52] font-medium">
                across your pilgrimage itinerary
              </span>
            </div>
            <p className="text-xs text-[#52443a]">
              Estimated duration: {selectedTemplesList.length <= 5 ? '1 Focused Day' : selectedTemplesList.length <= 10 ? '2 Days' : '3 to 4 Days Comprehensive'}
              {' '}| Tier: <strong className="capitalize text-[#72130e]">{selectedTier}</strong>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
            <button
              onClick={handleSendWhatsApp}
              className="flex-1 sm:flex-initial bg-[#19783b] hover:bg-[#135f2f] text-white text-xs font-semibold px-5 py-3 rounded-full transition-all shadow hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
              title="Send selected temples to coordinators on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Itinerary via WhatsApp</span>
            </button>

            <button
              onClick={handleCopyItinerary}
              className="bg-[#f6ebd9] hover:bg-[#ebd9bf] text-[#6e160f] text-xs font-bold px-3.5 py-3 rounded-full transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              title="Copy itinerary summary"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </button>

            <button
              onClick={onClearAll}
              className="bg-transparent hover:bg-[#f6ebd9] text-[#7a583f] text-xs font-bold px-3.5 py-3 rounded-full border border-[#d9c5ad] transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear</span>
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
      />
    </section>
  );
};
