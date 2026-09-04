import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experiences } from './components/Experiences';
import { Services } from './components/Services';
import { Journeys } from './components/Journeys';
import { PricingTiers } from './components/PricingTiers';
import { TempleSelector } from './components/TempleSelector';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HeritageGuide } from './components/HeritageGuide';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceTierId } from './types';
import { ALL_TEMPLES } from './data/temples';
import { Language, TRANSLATIONS } from './data/translations';
import { Phone, MessageCircle, Compass } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [currentPackage, setCurrentPackage] = useState<1 | 2 | 3>(1);
  // Default selected initial temples in package 1
  const [selectedTempleIds, setSelectedTempleIds] = useState<string[]>([
    'p1-1',
    'p1-2',
    'p1-4',
    'p1-7',
    'p1-9'
  ]);
  const [selectedTier, setSelectedTier] = useState<ServiceTierId>('premium');
  const [travelDate, setTravelDate] = useState<string>('');
  const [groupSize, setGroupSize] = useState<number>(2);
  const [needVehicle, setNeedVehicle] = useState<boolean>(true);
  const [needStay, setNeedStay] = useState<boolean>(true);
  const [needSatvicFood, setNeedSatvicFood] = useState<boolean>(true);
  const [seniorAssistance, setSeniorAssistance] = useState<boolean>(false);
  const [archanaAssistance, setArchanaAssistance] = useState<boolean>(true);
  const [specialNotes, setSpecialNotes] = useState<string>('');

  const scrollToSelection = () => {
    const el = document.getElementById('selection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleTemple = (id: string) => {
    setSelectedTempleIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAllInPackage = (pkgId: 1 | 2 | 3) => {
    const pkgTempleIds = ALL_TEMPLES.filter((t) => t.packageId === pkgId).map((t) => t.id);
    setSelectedTempleIds((prev) => {
      const combined = new Set([...prev, ...pkgTempleIds]);
      return Array.from(combined);
    });
  };

  const handleClearAll = () => {
    setSelectedTempleIds([]);
  };

  const handleSelectExperience = (pkgId: 1 | 2 | 3) => {
    setCurrentPackage(pkgId);
    scrollToSelection();
  };

  return (
    <div className="min-h-screen bg-[#fffdf8] text-[#2a211d] font-sans">
      <Header
        onPlanClick={scrollToSelection}
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
      />
      
      <main>
        <Hero
          onPlanClick={scrollToSelection}
          currentLang={currentLang}
        />

        <About />
        
        <Experiences onSelectExperience={handleSelectExperience} />
        
        <Services />
        
        <Journeys onBuildRouteClick={scrollToSelection} />
        
        <PricingTiers
          selectedTier={selectedTier}
          onSelectTier={setSelectedTier}
          onPlanClick={scrollToSelection}
        />
        
        <TempleSelector
          currentPackage={currentPackage}
          onSelectPackage={setCurrentPackage}
          selectedTempleIds={selectedTempleIds}
          onToggleTemple={handleToggleTemple}
          onSelectAllInPackage={handleSelectAllInPackage}
          onClearAll={handleClearAll}
          selectedTier={selectedTier}
          onSelectTier={setSelectedTier}
          travelDate={travelDate}
          setTravelDate={setTravelDate}
          groupSize={groupSize}
          setGroupSize={setGroupSize}
          needVehicle={needVehicle}
          setNeedVehicle={setNeedVehicle}
          needStay={needStay}
          setNeedStay={setNeedStay}
          needSatvicFood={needSatvicFood}
          setNeedSatvicFood={setNeedSatvicFood}
          specialNotes={specialNotes}
          setSpecialNotes={setSpecialNotes}
          seniorAssistance={seniorAssistance}
          setSeniorAssistance={setSeniorAssistance}
          archanaAssistance={archanaAssistance}
          setArchanaAssistance={setArchanaAssistance}
        />
        
        <WhyChooseUs />
        
        <HeritageGuide />
        
        {/* Designated Contact & Booking Area */}
        <ContactSection currentLang={currentLang} />
      </main>
      
      <Footer currentLang={currentLang} />

      {/* Mobile Sticky Quick-Action Bar (Fixed at bottom on screens < md) */}
      <aside aria-label="Quick booking and contact" className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#480c09]/95 backdrop-blur-md border-t border-[#7a1912] px-3 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.3)]">
        <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
          {/* Quick WhatsApp */}
          <a
            href={TRANSLATIONS[currentLang].whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#19783b] hover:bg-[#146330] text-white text-[11px] font-bold py-2 px-2 rounded-lg flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all text-center"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">WhatsApp</span>
          </a>

          {/* Quick Call */}
          <a
            href={`tel:${TRANSLATIONS[currentLang].phoneRaw}`}
            className="flex-1 bg-[#851e17] hover:bg-[#99251d] text-white text-[11px] font-bold py-2 px-2 rounded-lg flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all text-center border border-[#aa342a]"
            title="Call Helpline Directly"
          >
            <Phone className="w-3.5 h-3.5 shrink-0 text-[#f4bb4f]" />
            <span className="truncate">Call Help</span>
          </a>

          {/* Quick Plan Route */}
          <button
            onClick={scrollToSelection}
            className="flex-1 bg-[#b27a20] hover:bg-[#c98e29] text-[#2a0604] font-bold text-[11px] py-2 px-2 rounded-lg flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all text-center cursor-pointer"
            title="Customize Temple Circuit"
          >
            <Compass className="w-3.5 h-3.5 shrink-0 text-[#2a0604]" />
            <span className="truncate">Plan Route</span>
          </button>
        </div>
      </aside>
    </div>
  );
}
