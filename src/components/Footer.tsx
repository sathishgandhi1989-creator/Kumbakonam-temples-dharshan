import React from 'react';
import { Sparkles, MapPin, Compass } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface FooterProps {
  currentLang?: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang = 'en' }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <footer className="bg-[#310806] text-[#f8ead0] border-t border-[#4d100c] pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#65120f] text-[#f4bb4f] flex items-center justify-center text-2xl font-bold border border-[#b27a20]/40 select-none">
                卐
              </div>
              <div>
                <strong className="block font-cormorant text-2xl font-bold tracking-wider text-white leading-none">
                  KUMBAKONAM
                </strong>
                <span className="block font-cormorant text-sm font-semibold tracking-widest text-[#f0c878]">
                  TEMPLES DARSHAN
                </span>
                <small className="block text-[10px] text-[#9ac49d] mt-1">
                  {t.tamilName}
                </small>
              </div>
            </div>
            <p className="text-xs text-[#c5b4a5] leading-relaxed pt-2">
              Personalized spiritual and heritage journeys through Kumbakonam, Thanjavur, and the sacred Cauvery region.
            </p>
            <div className="pt-2">
              <span className="inline-block text-[11px] font-bold text-[#f4bb4f] bg-[#470f0b] px-3 py-1 rounded-full border border-[#6b1e17]">
                卐 {t.tagline} 卐
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#e6bb65] mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-white transition-colors">About Kumbakonam Darshan</a></li>
              <li><a href="#experiences" className="hover:text-white transition-colors">Signature Experiences</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Modular Services</a></li>
              <li><a href="#journeys" className="hover:text-white transition-colors">One-Day &amp; Multi-Day Routes</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Transparent Pricing Tiers</a></li>
              <li><a href="#selection" className="hover:text-white transition-colors">Interactive Temple Selector</a></li>
              <li><a href="#why" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#guide" className="hover:text-white transition-colors">Heritage Guide</a></li>
              <li><a href="#contact" className="text-[#f4bb4f] font-semibold hover:underline">📍 {t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Sacred Temple Circuits */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#e6bb65] mb-4">
              Sacred Delta Circuits
            </h4>
            <ul className="space-y-2 text-xs text-[#d6c4b6]">
              <li className="flex items-center gap-1.5">
                <span className="text-[#f4bb4f]">✦</span>
                <span>Navagraha 9 Sthalams Circuit</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#f4bb4f]">✦</span>
                <span>Lord Shiva Paadal Petra Sthalams</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#f4bb4f]">✦</span>
                <span>Kumbakonam Town Pancha Bhootha &amp; Mahamaham</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#f4bb4f]">✦</span>
                <span>Divya Desam &amp; Chola Marvels</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#f4bb4f]">✦</span>
                <span>Rudra Ganga Sri Aabathsahayeswarar</span>
              </li>
            </ul>
          </div>

          {/* Sacred Mission & Location Box */}
          <div className="bg-[#440c09] p-5 rounded-xl border border-[#5d1611]">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#e6bb65] mb-2 flex items-center gap-1.5">
              <span className="text-[#f4bb4f] text-sm">卐</span>
              <span>Sacred Mission</span>
            </h4>
            <p className="font-cormorant text-xl text-white font-medium leading-snug mb-2">
              Your Time.<br />
              Your Purpose.<br />
              Your Journey.
            </p>
            <p className="text-[11px] text-[#d6c4b6] leading-relaxed mb-4">
              Serving devotees, families, and pilgrims across India and overseas with peaceful Cauvery hospitality.
            </p>
            <div className="pt-3 border-t border-[#5d1611] text-xs">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-[#f4bb4f] hover:text-white font-bold transition-colors"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Visit Contact &amp; Booking Section &rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#4d100c] text-center sm:flex sm:justify-between text-xs text-[#bda89b]">
          <p>© 2026 Kumbakonam Temples Darshan. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 flex items-center justify-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#f4bb4f]" />
            <span>Kumbakonam, Thanjavur District, Tamil Nadu, India</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
