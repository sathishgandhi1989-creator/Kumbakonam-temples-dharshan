import React from 'react';
import { Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface AboutProps {
  currentLang?: Language;
}

export const About: React.FC<AboutProps> = ({ currentLang = 'en' }) => {
  const t = TRANSLATIONS[currentLang];
  const section = t.aboutSection;

  const pillarIcons = [
    <Sparkles className="w-5 h-5" />,
    <HeartHandshake className="w-5 h-5" />,
    <ShieldCheck className="w-5 h-5" />
  ];

  return (
    <section id="about" className="py-20 bg-[#fffdf9] border-b border-[#ead9c0]">
      <div className="main-container">
        {/* Section Head */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-widest text-[#a03824] uppercase mb-2">
            {section.tag}
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#701710] mb-3 leading-tight">
            {section.title}
          </h2>
          <div className="text-[#c38a29] text-xl">✦</div>
        </div>

        {/* Narrative & Quote Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-5 text-[#3c2f27] text-base sm:text-lg leading-relaxed">
            <p>
              <strong className="text-[#72130e] font-semibold">{t.siteTitle}</strong> — {section.lead}
            </p>
            <p className="text-sm sm:text-base text-[#5c4a3e]">
              {section.story1}
            </p>
            <p className="text-sm sm:text-base text-[#5c4a3e]">
              {section.story2}
            </p>
            <p className="text-sm sm:text-base text-[#5c4a3e]">
              {section.story3}
            </p>
          </div>

          <div className="lg:col-span-5">
            <blockquote className="relative bg-[#fff9ed] border-l-4 border-[#b87a1c] p-7 sm:p-8 rounded-r-2xl shadow-sm border-y border-r border-[#eddcc5]">
              <span className="text-4xl text-[#b87a1c]/30 font-cormorant leading-none absolute top-3 left-4">“</span>
              <p className="font-cormorant italic text-xl sm:text-2xl text-[#6d1c13] leading-relaxed relative z-10 font-medium">
                {section.quote}
              </p>
              <footer className="mt-4 text-xs font-semibold text-[#8a5717] tracking-wider uppercase">
                — {section.quoteAuthor}
              </footer>
            </blockquote>
          </div>
        </div>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {section.pillars.map((pillar, idx) => (
            <div key={idx} className="bg-[#fffbf2] border border-[#ebdcc7] rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-[#f6e5c9] text-[#8a2b1d] flex items-center justify-center mb-4">
                {pillarIcons[idx]}
              </div>
              <h3 className="font-cormorant text-2xl font-bold text-[#72130e] mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#5a483d] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
