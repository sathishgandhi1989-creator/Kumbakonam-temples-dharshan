import React, { useState } from 'react';
import { Sparkles, Menu, X, Compass, ChevronDown } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';
import { GoldenVinayagar } from './GoldenVinayagar';

interface HeaderProps {
  onPlanClick: () => void;
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
}

const LanguageSelector: React.FC<{
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
}> = ({ currentLang, onSelectLang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const languages: { code: Language; label: string; script: string }[] = [
    { code: 'en', label: 'English', script: 'EN' },
    { code: 'ta', label: 'தமிழ்', script: 'TAMIL' },
    { code: 'hi', label: 'हिन्दी', script: 'HINDI' }
  ];

  const current = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <div className="relative inline-block text-left z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 bg-[#450b08] hover:bg-[#57100b] text-[#ffe9c9] px-2.5 py-1 rounded border border-[#7a2019] text-xs font-medium transition-colors cursor-pointer"
        title="Select Language / மொழியை தேர்ந்தெடுக்கவும் / भाषा चुनें"
      >
        <span className="text-[#f4bb4f] font-bold">🌐</span>
        <span className="font-semibold">{current.label}</span>
        <ChevronDown className={`w-3 h-3 text-[#f4bb4f] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-1 w-36 rounded-lg bg-[#3d0906] border border-[#6b1c15] shadow-2xl py-1 z-50 animate-in fade-in zoom-in-95 duration-100">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  onSelectLang(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between cursor-pointer transition-colors ${
                  currentLang === lang.code
                    ? 'bg-[#72130e] text-[#f4bb4f] font-bold'
                    : 'text-[#ffe9c9] hover:bg-[#520f0a]'
                }`}
              >
                <span>{lang.label}</span>
                <span className="text-[10px] text-[#e3ba77] opacity-80 uppercase tracking-widest font-mono">
                  {lang.script}
                </span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export const Header: React.FC<HeaderProps> = ({ onPlanClick, currentLang, onSelectLang }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[currentLang];

  const NAV_ITEMS = [
    { name: t.nav.home, href: '#' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experiences, href: '#experiences' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.journeys, href: '#journeys' },
    { name: t.nav.pricing, href: '#pricing' },
    { name: t.nav.selection, href: '#selection' },
    { name: t.nav.why, href: '#why' },
    { name: t.nav.guide, href: '#guide' },
    { name: t.nav.contact, href: '#contact' }
  ];

  return (
    <>
      {/* Top Banner Bar: Elegant sacred identity & language selector */}
      <div className="bg-[#5c0d0a] text-[#fff7e8] py-2 text-xs border-b border-[#72130e]/50 z-50 relative font-medium">
        <div className="main-container flex flex-wrap justify-between items-center gap-2">
          {/* Left: Sacred Symbol & Tagline */}
          <div className="flex items-center gap-2">
            <img src="/kumbam_navagraha_logo.jpg" alt="Kumbam Emblem" className="w-4 h-4 rounded-full object-cover border border-[#f4bb4f]/50" />
            <span className="text-[#f4bb4f] font-bold text-sm tracking-wider">ॐ ✦</span>
            <span className="font-medium text-[11px] sm:text-xs tracking-wide">
              {t.tagline}
            </span>
          </div>

          {/* Right: Language Selector + Quick Link to Designated Contact Area */}
          <div className="flex items-center gap-2 sm:gap-3 text-xs">
            <LanguageSelector
              currentLang={currentLang}
              onSelectLang={onSelectLang}
            />

            <a
              href="#contact"
              className="bg-[#781712] hover:bg-[#8f1f18] text-[#ffe9c9] px-2.5 py-1 rounded text-[11px] font-semibold transition-colors border border-[#a3322a]"
            >
              <span>📍 {t.nav.contact}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#fffdf8]/95 backdrop-blur-md border-b border-[#ebdcc7] shadow-sm transition-all">
        <div className="main-container">
          <div className="flex justify-between items-center h-20">
            {/* Brand Logo & Title with 9 Planets Outer Circle Kumbham */}
            <a href="#" className="flex items-center gap-3.5 group">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform border border-[#d8be9a] bg-white p-0.5 shrink-0 flex items-center justify-center">
                <img
                  src="/kumbam_navagraha_logo.jpg"
                  alt="Kumbakonam Temples Darshan Sacred Kumbam with 9 Planets Outer Circle Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-cormorant text-2xl sm:text-3xl font-bold tracking-wider text-[#6a120c] leading-none">
                  KUMBAKONAM
                </span>
                <span className="font-cormorant text-xs sm:text-sm font-semibold tracking-widest text-[#a03824] uppercase mt-0.5">
                  TEMPLES DARSHAN
                </span>
                <span className="text-[10px] text-[#2c6e39] font-medium leading-none mt-0.5">
                  {t.tamilName}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-4 text-xs font-semibold text-[#48372b]">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-colors py-1 ${
                    item.href === '#contact'
                      ? 'text-[#701710] font-bold hover:text-[#520f0a] border-b-2 border-[#701710]'
                      : 'hover:text-[#72130e]'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* CTA & Mobile Toggle with Golden Vinayagar */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Golden Vinayagar on the right corner of the header before option button */}
              <GoldenVinayagar currentLang={currentLang} />

              <button
                onClick={onPlanClick}
                className="hidden sm:inline-flex items-center gap-1.5 bg-[#72130e] hover:bg-[#5a0f0b] text-white text-xs font-bold px-4 py-2.5 rounded-full transition-all shadow-sm hover:shadow cursor-pointer"
              >
                <Compass className="w-3.5 h-3.5 text-[#f4bb4f]" />
                <span>{t.hero.planBtn}</span>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 rounded-lg text-[#65100c] hover:bg-[#f6e9d6] transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-[#fffaf0] border-b border-[#ebdcc7] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-medium ${
                    item.href === '#contact'
                      ? 'bg-[#f7ebd8] text-[#701710] font-bold'
                      : 'text-[#4e3d32] hover:bg-[#f5e7d3]'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Quick Actions in Mobile Drawer */}
            <div className="pt-3 border-t border-[#ebdcc7] space-y-2">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-[#72130e] text-white text-xs font-semibold py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 shadow-sm"
              >
                <span>📍 {t.nav.contact}</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onPlanClick();
                }}
                className="w-full bg-[#b27a20] hover:bg-[#9c6a1a] text-white text-xs font-bold py-2.5 rounded-lg flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#fff]" />
                <span>{t.hero.planBtn}</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
