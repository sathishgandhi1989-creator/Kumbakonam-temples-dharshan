import React from 'react';
import { Compass, Sparkles, Flower2, Clock } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#fffdf9] border-b border-[#ead9c0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Head */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-widest text-[#a03824] uppercase mb-2">
            About Us
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#701710] mb-3 leading-tight">
            A different way to experience Kumbakonam
          </h2>
          <div className="text-[#c38a29] text-xl">✦</div>
        </div>

        {/* Narrative & Quote Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-5 text-[#3c2f27] text-base sm:text-lg leading-relaxed">
            <p>
              <strong className="text-[#72130e] font-semibold">Kumbakonam Temples Dharshan</strong> is a premium, specialized spiritual and heritage travel organization rooted directly in Kumbakonam, Tamil Nadu.
            </p>
            <p>
              We craft deeply personalized journeys for spiritual seekers, families, history enthusiasts, architecture lovers, and travelers seeking a more peaceful, authentic experience beyond superficial tourist tours.
            </p>
            <p className="text-sm sm:text-base text-[#5c4a3e]">
              Unlike rushed commercial bus groups where devotees are hurried through overcrowded gates, each of our journeys is thoughtfully configured around your individual interests, available time, astrological requirements, walking comfort, and budget.
            </p>
          </div>

          <div className="lg:col-span-5">
            <blockquote className="relative bg-[#fff9ed] border-l-4 border-[#b87a1c] p-7 sm:p-8 rounded-r-2xl shadow-sm border-y border-r border-[#eddcc5]">
              <span className="text-4xl text-[#b87a1c]/30 font-cormorant leading-none absolute top-3 left-4">“</span>
              <p className="font-cormorant italic text-2xl sm:text-2xl text-[#6d1c13] leading-relaxed relative z-10 font-medium">
                We support you to find a different spiritual experience and identify hidden Cauvery-karai temples to strengthen your planetary influences.
              </p>
              <footer className="mt-4 text-xs font-semibold text-[#8a5717] tracking-wider uppercase">
                — Kumbakonam Temples Dharshan
              </footer>
            </blockquote>
          </div>
        </div>

        {/* 3 Core Philosophical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#fffbf2] border border-[#ebdcc7] rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-[#f6e5c9] text-[#8a2b1d] flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-cormorant text-2xl font-bold text-[#72130e] mb-2">
              Planetary & Remedial Alignment
            </h3>
            <p className="text-sm text-[#5a483d] leading-relaxed">
              Careful matching of sacred Cauvery shrines to your birth star, planetary period (Dasha/Bukthi), and family remedies, from Pongu Sani to Ayul Vriddhi.
            </p>
          </div>

          <div className="bg-[#fffbf2] border border-[#ebdcc7] rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-[#f6e5c9] text-[#1e6631] flex items-center justify-center mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-cormorant text-2xl font-bold text-[#72130e] mb-2">
              Hidden Cauvery-Karai Sthalams
            </h3>
            <p className="text-sm text-[#5a483d] leading-relaxed">
              Access ancient Chola stone masterworks, peaceful sanctums along the serene banks of the sacred river where few tourists step, preserving supreme serenity.
            </p>
          </div>

          <div className="bg-[#fffbf2] border border-[#ebdcc7] rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-[#f6e5c9] text-[#b27a20] flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-cormorant text-2xl font-bold text-[#72130e] mb-2">
              Unrushed, Respectful Timing
            </h3>
            <p className="text-sm text-[#5a483d] leading-relaxed">
              Every day plan accounts for temple closing hours (Uchikalam), afternoon rest periods, senior walking capability, and auspicious morning/evening darshan windows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
