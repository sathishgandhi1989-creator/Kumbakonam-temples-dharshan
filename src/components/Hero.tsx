import React from 'react';
import { ArrowRight, Compass, Sun, MapPin, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface HeroProps {
  onPlanClick: () => void;
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ onPlanClick, currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff6e6] via-[#fcf0dc] to-[#fffdf8] py-16 sm:py-24 border-b border-[#ebdcc7]">
      {/* Subtle Background Ornamentation */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(#72130e_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle, Navigation Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f6e5c9] border border-[#dcbfa3] text-[#72130e] text-xs font-bold tracking-wider uppercase">
              <span className="text-[#b27a20] text-sm font-bold">卐</span>
              <span>{t.hero.tag}</span>
              <span className="text-[#b27a20] text-sm font-bold">卐</span>
            </div>

            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#65100c] leading-none">
              {t.hero.h1Line1} <br />
              <span className="text-[#8e2016] italic font-normal">
                {t.hero.h1Line2}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#4a392f] max-w-2xl font-normal leading-relaxed">
              {t.hero.lead}
            </p>

            <p className="text-xs sm:text-sm text-[#7a583f] max-w-xl italic">
              {t.hero.subLead}
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onPlanClick}
                className="bg-[#72130e] hover:bg-[#580d09] text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all shadow hover:shadow-md flex items-center gap-2 cursor-pointer group"
              >
                <span>{t.hero.planBtn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#contact"
                className="bg-[#fff9ef] hover:bg-[#faeed9] text-[#72130e] font-semibold text-sm px-5 py-3.5 rounded-full border border-[#d6be9f] transition-all shadow-sm hover:shadow flex items-center gap-2"
              >
                <span>📍 {t.nav.contact}</span>
              </a>
            </div>

            {/* Quick Pillars Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#dfc49e]/80">
              <div className="flex items-center gap-2 text-xs text-[#523d30] font-medium">
                <Sun className="w-4 h-4 text-[#b27a20] shrink-0" />
                <span>{t.hero.pillars.astrology}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#523d30] font-medium">
                <MapPin className="w-4 h-4 text-[#b27a20] shrink-0" />
                <span>{t.hero.pillars.routes}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#523d30] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#1e6631] shrink-0" />
                <span>{t.hero.pillars.cauvery}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#523d30] font-medium">
                <HeartHandshake className="w-4 h-4 text-[#72130e] shrink-0" />
                <span>{t.hero.pillars.comfort}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sacred Heritage Art Panel */}
          <div className="hero-art relative bg-gradient-to-b from-[#f7e2bd] to-[#ecd0a0] border border-[#dfc49e] rounded-2xl p-7 text-center shadow-lg overflow-hidden">
            {/* Ambient Background Warm Halo */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#f4bb4f]/30 blur-2xl pointer-events-none" />

            {/* Radiant Sun Sphere */}
            <div className="relative mx-auto mb-3 w-20 h-20 rounded-full bg-gradient-to-tr from-[#e6a735] via-[#f9df90] to-[#fff4dd] shadow-[0_0_36px_rgba(230,167,53,0.5)] flex items-center justify-center">
              <span className="text-[#8e2016]/60 text-3xl font-bold select-none">卐</span>
            </div>

            {/* Traditional Gopuram Icon */}
            <div className="text-6xl sm:text-7xl leading-none select-none mb-3 filter drop-shadow-sm">
              🛕
            </div>

            {/* Sacred Quote */}
            <div className="font-cormorant text-xl italic font-semibold text-[#6b130d] leading-snug mb-2">
              &ldquo;{t.tagline}&rdquo;
            </div>

            <div className="text-xs text-[#523d30] font-medium tracking-wide mb-4">
              Kumbakonam &amp; Sacred Cauvery Delta
            </div>

            {/* Heritage Features List (Clean, devotional, no contact clutter) */}
            <div className="p-4 rounded-xl bg-white/85 backdrop-blur-sm border border-[#dfc5a2] text-left text-xs text-[#453328] space-y-2">
              <div className="font-bold text-[#72130e] flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#b27a20]" />
                <span>Sacred Pilgrimage Offerings</span>
              </div>

              <div className="text-[11px] text-[#554032] space-y-1.5 pt-1">
                <div className="flex items-center gap-2">
                  <span className="text-[#b27a20]">✦</span>
                  <span><strong>34 Sacred Shrines:</strong> Navagraha, Shiva, Divya Desams</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#b27a20]">✦</span>
                  <span><strong>Personalized Itineraries:</strong> Timing &amp; astrological alignment</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#b27a20]">✦</span>
                  <span><strong>Comfort &amp; Care:</strong> AC travel, senior assistance &amp; satvic dining</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#d8bc92] flex items-center justify-center gap-4 text-[11px] text-[#6e160f] font-semibold">
              <span>✦ 34 Shrines</span>
              <span>•</span>
              <span>✦ AC Cars</span>
              <span>•</span>
              <span>✦ Satvic Dining</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
