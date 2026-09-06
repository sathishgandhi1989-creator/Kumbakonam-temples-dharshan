import React from 'react';
import { MapPin, Compass } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface FooterProps {
  currentLang?: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang = 'en' }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <footer className="bg-[#310806] text-[#f8ead0] border-t border-[#4d100c] pt-16 pb-24 md:pb-12">
      <div className="main-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-13 h-13 rounded-xl overflow-hidden border border-[#d8be9a] bg-white p-0.5 shrink-0 shadow-md flex items-center justify-center">
                <img
                  src="/kumbam_navagraha_logo.jpg"
                  alt="Kumbakonam Temples Darshan Sacred Kumbam with 9 Planets Outer Circle Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
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
              {currentLang === 'ta'
                ? 'கும்பகோணம், தஞ்சாவூர் மற்றும் காவேரி டெல்டா திருத்தலங்களுக்கான அமைதியான மற்றும் தனிப்பயனாக்கப்பட்ட ஆன்மீக யாத்திரை சேவை.'
                : currentLang === 'hi'
                ? 'कुंभकोणम, तंजावुर एवं पवित्र कावेरी क्षेत्र के प्राचीन मंदिरों हेतु व्यक्तिगत एवं शांत तीर्थ दर्शन सेवाएं।'
                : 'Personalized spiritual and heritage journeys through Kumbakonam, Thanjavur, and the sacred Cauvery region.'}
            </p>
            <div className="pt-2">
              <span className="inline-block text-[11px] font-bold text-[#f4bb4f] bg-[#470f0b] px-3 py-1 rounded-full border border-[#6b1e17]">
                ✦ {t.tagline} ✦
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#e6bb65] mb-4">
              {currentLang === 'ta' ? 'விரைவு வழிசெலுத்தல்' : currentLang === 'hi' ? 'त्वरित नेविगेशन' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a></li>
              <li><a href="#experiences" className="hover:text-white transition-colors">{t.nav.experiences}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a></li>
              <li><a href="#journeys" className="hover:text-white transition-colors">{t.nav.journeys}</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">{t.nav.pricing}</a></li>
              <li><a href="#selection" className="hover:text-white transition-colors">{t.nav.selectTemples}</a></li>
              <li><a href="#why" className="hover:text-white transition-colors">{t.nav.whyUs}</a></li>
              <li><a href="#guide" className="hover:text-white transition-colors">{t.nav.guide}</a></li>
              <li><a href="#contact" className="text-[#f4bb4f] font-semibold hover:underline">📍 {t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Sacred Temple Circuits */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#e6bb65] mb-4">
              {currentLang === 'ta' ? 'புனித யாத்திரை சுற்றுகள்' : currentLang === 'hi' ? 'पवित्र तीर्थ परिक्रमा' : 'Sacred Delta Circuits'}
            </h4>
            <ul className="space-y-2 text-xs text-[#d6c4b6]">
              <li className="flex items-center gap-1.5">
                <span className="text-[#f4bb4f]">✦</span>
                <span>{currentLang === 'ta' ? 'நவக்கிரக 9 தலங்கள் சுற்று' : currentLang === 'hi' ? 'नवग्रह 9 तीर्थ परिक्रमा' : 'Navagraha 9 Sthalams Circuit'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#f4bb4f]">✦</span>
                <span>{currentLang === 'ta' ? 'தேவார பாடல் பெற்ற சிவாலயங்கள்' : currentLang === 'hi' ? 'भगवान शिव पाडल पेट्र स्थल' : 'Lord Shiva Paadal Petra Sthalams'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#f4bb4f]">✦</span>
                <span>{currentLang === 'ta' ? 'பஞ்சபூத & மகாமகத் திருத்தலங்கள்' : currentLang === 'hi' ? 'कुंभकोणम नगर पंचभूत व महामहम' : 'Kumbakonam Town Pancha Bhootha & Mahamaham'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#f4bb4f]">✦</span>
                <span>{currentLang === 'ta' ? 'திவ்ய தேச வைணவத் திருத்தலங்கள்' : currentLang === 'hi' ? 'दिव्य देशम एवं चोल वास्तुशिल्प' : 'Divya Desam & Chola Marvels'}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#f4bb4f]">✦</span>
                <span>{currentLang === 'ta' ? 'ருத்ர கங்கை திருத்தலங்கள்' : currentLang === 'hi' ? 'रुद्र गंगा एवं परिहार तीर्थ' : 'Rudra Ganga Remedial Shrines'}</span>
              </li>
            </ul>
          </div>

          {/* Sacred Mission & Location Box */}
          <div className="bg-[#440c09] p-5 rounded-xl border border-[#5d1611]">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#e6bb65] mb-2 flex items-center gap-1.5">
              <span className="text-[#f4bb4f] text-sm">✦</span>
              <span>{currentLang === 'ta' ? 'எங்கள் நோக்கம்' : currentLang === 'hi' ? 'हमारा संकल्प' : 'Sacred Mission'}</span>
            </h4>
            <p className="font-cormorant text-xl text-white font-medium leading-snug mb-2">
              {currentLang === 'ta' 
                ? 'உங்கள் நேரம்.\nஉங்கள் பிரார்த்தனை.\nஉங்கள் புனிதப் பயணம்.' 
                : currentLang === 'hi' 
                ? 'आपका समय।\nआपकी श्रद्धा।\nआपकी यात्रा।' 
                : 'Your Time.\nYour Purpose.\nYour Journey.'}
            </p>
            <p className="text-[11px] text-[#d6c4b6] leading-relaxed mb-4">
              {currentLang === 'ta'
                ? 'பக்தர்களுக்கும் குடும்பங்களுக்கும் அமைதியான மற்றும் ஆத்மார்த்தமான காவேரி உபசரிப்புடன் வழிகாட்டுகிறோம்.'
                : currentLang === 'hi'
                ? 'देश-विदेश के श्रद्धालुओं और परिवारों को शांतिपूर्ण कावेरी आतिथ्य के साथ समर्पित सेवा।'
                : 'Serving devotees, families, and pilgrims across India and overseas with peaceful Cauvery hospitality.'}
            </p>
            <div className="pt-3 border-t border-[#5d1611] text-xs">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-[#f4bb4f] hover:text-white font-bold transition-colors"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>{currentLang === 'ta' ? 'தொடர்பு & முன்பதிவு பிரிவு →' : currentLang === 'hi' ? 'संपर्क एवं बुकिंग अनुभाग →' : 'Visit Contact & Booking Section →'}</span>
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
