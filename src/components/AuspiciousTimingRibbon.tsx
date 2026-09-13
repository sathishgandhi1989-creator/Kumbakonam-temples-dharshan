import React, { useState } from 'react';
import { Clock, AlertTriangle, Sparkles, Calendar, ChevronDown, ChevronUp, ShieldCheck, Sun, Moon } from 'lucide-react';
import { Language } from '../data/translations';
import { DAILY_TIMINGS, KEY_FESTIVALS_2026, TEMPLE_DARSHAN_HOURS } from '../data/auspiciousTimings';

interface AuspiciousTimingRibbonProps {
  currentLang: Language;
}

export const AuspiciousTimingRibbon: React.FC<AuspiciousTimingRibbonProps> = ({ currentLang }) => {
  // Current local day (0: Sunday, 1: Monday, etc.)
  const todayDayIndex = new Date().getDay();
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(todayDayIndex);
  const [showFestivals, setShowFestivals] = useState<boolean>(false);

  const selectedDay = DAILY_TIMINGS[selectedDayIndex] || DAILY_TIMINGS[0];
  const isToday = selectedDayIndex === todayDayIndex;

  const labels = {
    en: {
      ribbonTitle: '2026 Auspicious Timings & Rahu Kalam',
      todayBadge: 'Today',
      nallaNeram: 'Nalla Neram (Auspicious)',
      rahuKalam: 'Rahu Kalam',
      yamagandam: 'Yamagandam',
      kuligai: 'Kuligai (Gulika)',
      gowriNallaNeram: 'Gowri Nalla Neram',
      planetaryLord: 'Ruling Deity',
      templeFocus: 'Special Darshan Focus',
      templeClosingAlert: 'Delta Temple Closing Alert',
      morningHours: 'Morning Darshan',
      eveningHours: 'Evening Darshan',
      afternoonBreak: 'Afternoon Break (Sanctum Closed)',
      pariharaNote: 'Daily Parihara Recommendation',
      viewFestivals: '2026 Key Kumbakonam Temple Festivals',
      hideFestivals: 'Hide Festival Calendar',
      whatsappPlan: 'Plan My Yatra Around Pooja Timings'
    },
    ta: {
      ribbonTitle: '2026 தினசரி நல்ல நேரம் & ராகு காலம் வழிகாட்டி',
      todayBadge: 'இன்று',
      nallaNeram: 'நல்ல நேரம்',
      rahuKalam: 'ராகு காலம்',
      yamagandam: 'எமகண்டம்',
      kuligai: 'குளிகை நேரம்',
      gowriNallaNeram: 'கௌரி நல்ல நேரம்',
      planetaryLord: 'அதிதேவதை',
      templeFocus: 'இன்றைய சிறப்பு தரிசனம்',
      templeClosingAlert: 'கோவில் நடை திறப்பு & சாத்தும் நேரம்',
      morningHours: 'காலை தரிசனம்',
      eveningHours: 'மாலை தரிசனம்',
      afternoonBreak: 'மதிய நடை சாத்தும் நேரம்',
      pariharaNote: 'இன்றைய தோஷ நிவர்த்தி & பரிகாரக் குறிப்பு',
      viewFestivals: '2026 முக்கிய கும்பகோணம் திருவிழாக்கள்',
      hideFestivals: 'திருவிழா நாட்காட்டியை மறை',
      whatsappPlan: 'பூஜை நேரத்திற்கு ஏற்ப கார் & தரிசனம் பதிவு செய்ய'
    },
    hi: {
      ribbonTitle: '2026 दैनिक शुभ मुहूर्त एवं राहु काल पंचांग',
      todayBadge: 'आज',
      nallaNeram: 'शुभ मुहूर्त (नल्ल नेरम)',
      rahuKalam: 'राहु काल',
      yamagandam: 'यमगंड',
      kuligai: 'गुलिक काल',
      gowriNallaNeram: 'गौरी शुभ मुहूर्त',
      planetaryLord: 'शासक ग्रह/देवता',
      templeFocus: 'विशेष दर्शन संस्तुति',
      templeClosingAlert: 'मंदिर पट खुलने एवं विश्राम का समय',
      morningHours: 'प्रातः दर्शन',
      eveningHours: 'संध्या दर्शन',
      afternoonBreak: 'मध्याह्न पट बंद (विश्राम)',
      pariharaNote: 'दैनिक पूजा एवं दोष निवारण परामर्श',
      viewFestivals: '2026 कुंभकोणम प्रमुख मंदिर उत्सव',
      hideFestivals: 'उत्सव सूची छिपाएं',
      whatsappPlan: 'पूजा समय अनुसार यात्रा व वाहन बुक करें'
    }
  }[currentLang];

  const formattedTodayDate = new Date().toLocaleDateString(
    currentLang === 'ta' ? 'ta-IN' : currentLang === 'hi' ? 'hi-IN' : 'en-IN',
    { month: 'short', day: 'numeric', year: 'numeric' }
  );

  return (
    <section id="timings" className="w-full bg-[#fcf9f2] border-y border-[#d8be9a]/50 py-5 sm:py-6 shadow-sm">
      <div className="main-container max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Header Bar with Live Indicator & Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 pb-3 border-b border-[#e8d5be]">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="inline-flex items-center gap-1.5 bg-[#72130e] text-[#f4bb4f] px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>2026 Panchangam</span>
            </span>
            <h2 className="text-base sm:text-lg md:text-xl font-serif font-bold text-[#420c09] flex items-center gap-2">
              <span>{labels.ribbonTitle}</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#633a29] font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-[#18793b] animate-ping" />
            <span>
              {currentLang === 'ta' ? 'இன்றைய தேதி' : currentLang === 'hi' ? 'आज का दिन' : 'Current Date'}:{' '}
              <strong className="text-[#3b120c] font-semibold">{formattedTodayDate}</strong>
            </span>
          </div>
        </div>

        {/* 7-Day Quick Selector Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 mb-4 scrollbar-thin">
          {DAILY_TIMINGS.map((day) => {
            const isSelected = day.dayId === selectedDayIndex;
            const isDayToday = day.dayId === todayDayIndex;
            return (
              <button
                key={day.dayId}
                type="button"
                onClick={() => setSelectedDayIndex(day.dayId)}
                className={`flex-1 min-w-[76px] sm:min-w-[90px] py-2 px-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#72130e] text-[#fff6e5] border-[#530c08] shadow-md ring-2 ring-[#d4a84f]'
                    : 'bg-white text-[#492b1e] border-[#e2cfbe] hover:bg-[#faefe2] hover:border-[#c59c6b]'
                }`}
              >
                <div className="flex items-center justify-center gap-1">
                  <span className="text-xs font-bold block">{day.shortName[currentLang]}</span>
                  {isDayToday && (
                    <span className={`text-[9px] px-1 py-0.2 rounded font-bold uppercase ${
                      isSelected ? 'bg-[#d4a84f] text-[#3e0a07]' : 'bg-[#e26922] text-white'
                    }`}>
                      {labels.todayBadge}
                    </span>
                  )}
                </div>
                <span className={`text-[10px] block mt-0.5 truncate ${isSelected ? 'text-[#f0c878]' : 'text-[#7d5642]'}`}>
                  {day.planetaryRuler[currentLang]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Auspicious Timings Data Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3 mb-4">
          
          {/* Nalla Neram (Auspicious Time) */}
          <div className="bg-[#eff9f0] border border-[#a4dbaa] rounded-xl p-3 shadow-2xs">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1a6b2d]">
                {labels.nallaNeram}
              </span>
              <Sun className="w-4 h-4 text-[#1a6b2d]" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#145222] leading-snug">
              <div>{selectedDay.nallaNeramMorning}</div>
              <div className="text-[11px] text-[#2c753d] mt-0.5">Eve: {selectedDay.nallaNeramEvening}</div>
            </div>
            <span className="inline-block mt-1.5 text-[10px] font-medium text-[#1c6e2f] bg-white/80 px-1.5 py-0.5 rounded">
              Gowri: {selectedDay.gowriNallaNeram}
            </span>
          </div>

          {/* Rahu Kalam (Avoid Auspicious Beginnings / Ideal for Rahu Pariharam) */}
          <div className="bg-[#fff1f0] border border-[#f4b3af] rounded-xl p-3 shadow-2xs">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#a31b14]">
                {labels.rahuKalam}
              </span>
              <AlertTriangle className="w-4 h-4 text-[#c5221f]" />
            </div>
            <div className="text-sm sm:text-base font-extrabold text-[#8c140e] tracking-tight">
              {selectedDay.rahuKalam}
            </div>
            <span className="inline-block mt-1.5 text-[10px] font-semibold text-[#8c140e] bg-white/80 px-1.5 py-0.5 rounded">
              {selectedDayIndex === 0
                ? (currentLang === 'ta' ? '★ திருநாகேஸ்வர பாலபிஷேகம்' : currentLang === 'hi' ? '★ राहु दुग्धाभिषेक समय' : '★ Thirunageswaram Milk Abhishekam')
                : (currentLang === 'ta' ? 'தவிர்க்க வேண்டிய நேரம்' : currentLang === 'hi' ? 'वर्जित समय' : 'Avoid New Journeys')}
            </span>
          </div>

          {/* Yamagandam */}
          <div className="bg-[#fff8eb] border border-[#eec88c] rounded-xl p-3 shadow-2xs">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#824b07]">
                {labels.yamagandam}
              </span>
              <Clock className="w-4 h-4 text-[#9c5908]" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#713f04] leading-snug">
              {selectedDay.yamagandam}
            </div>
            <span className="inline-block mt-1.5 text-[10px] font-medium text-[#713f04] bg-white/80 px-1.5 py-0.5 rounded">
              {currentLang === 'ta' ? 'எமகண்டம் காலம்' : currentLang === 'hi' ? 'यमगंड काल' : 'Inauspicious Span'}
            </span>
          </div>

          {/* Kuligai / Gulika */}
          <div className="bg-[#f2f7ff] border border-[#b6d0fa] rounded-xl p-3 shadow-2xs">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#185abc]">
                {labels.kuligai}
              </span>
              <Sparkles className="w-4 h-4 text-[#185abc]" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#134388] leading-snug">
              {selectedDay.kuligai}
            </div>
            <span className="inline-block mt-1.5 text-[10px] font-medium text-[#185abc] bg-white/80 px-1.5 py-0.5 rounded">
              {currentLang === 'ta' ? 'சுப நிகழ்வு பல மடங்கு ஆகும்' : currentLang === 'hi' ? 'शुभ कार्यों का फल द्विगुणित' : 'Multiplies Good Acts'}
            </span>
          </div>

          {/* Special Day Focus */}
          <div className="col-span-2 sm:col-span-2 md:col-span-4 lg:col-span-1 bg-white border border-[#e2cfbe] rounded-xl p-3 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#794f3b] mb-1">
                {labels.templeFocus}
              </div>
              <div className="text-xs font-bold text-[#57130f] leading-snug">
                {selectedDay.templeHighlight[currentLang]}
              </div>
            </div>
            <div className="text-[10px] text-[#794f3b] mt-1 italic">
              {selectedDay.planetaryRuler[currentLang]}
            </div>
          </div>
        </div>

        {/* Temple Midday Break Reminder & Parihara Note */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          
          {/* Temple Sanctum Opening Hours Alert */}
          <div className="bg-[#fff9ea] border-l-4 border-[#d48b12] border-y border-r border-[#edd6a9] p-3 rounded-r-xl flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#b06f05] shrink-0 mt-0.5" />
            <div className="text-xs text-[#523316] leading-relaxed">
              <strong className="block text-[#472202] font-bold text-xs uppercase tracking-wide mb-0.5">
                {labels.templeClosingAlert}: {TEMPLE_DARSHAN_HOURS.morning} &amp; {TEMPLE_DARSHAN_HOURS.evening}
              </strong>
              <span>
                <strong className="text-[#a03d07]">⚠️ {labels.afternoonBreak}: {TEMPLE_DARSHAN_HOURS.afternoonBreak}.</strong>{' '}
                {TEMPLE_DARSHAN_HOURS.note[currentLang]}
              </span>
            </div>
          </div>

          {/* Daily Pariharam Tip */}
          <div className="bg-[#fbf4ea] border-l-4 border-[#72130e] border-y border-r border-[#ebd7be] p-3 rounded-r-xl flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#72130e] shrink-0 mt-0.5" />
            <div className="text-xs text-[#4b261b] leading-relaxed">
              <strong className="block text-[#61100b] font-bold text-xs uppercase tracking-wide mb-0.5">
                {selectedDay.name[currentLang]} {labels.pariharaNote}
              </strong>
              <span>{selectedDay.pariharaTip[currentLang]}</span>
            </div>
          </div>

        </div>

        {/* Expandable 2026 Key Festivals Section & Booking CTA */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <button
            type="button"
            onClick={() => setShowFestivals(!showFestivals)}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#72130e] hover:text-[#490c08] bg-white border border-[#d8be9a] hover:bg-[#fff6e8] px-3 py-1.5 rounded-lg transition-colors cursor-pointer shadow-2xs"
          >
            <Calendar className="w-3.5 h-3.5 text-[#d48b12]" />
            <span>{showFestivals ? labels.hideFestivals : labels.viewFestivals}</span>
            {showFestivals ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          <a
            href={`https://wa.me/918220502766?text=${encodeURIComponent(
              `Vanakkam Panneerselvam sir, I am planning a Kumbakonam temple darshan on ${selectedDay.name.en} in 2026. Please suggest the best vehicle and timing route considering Rahu Kalam (${selectedDay.rahuKalam}) and Nalla Neram.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#145524] hover:text-[#0b3816] bg-[#eef9f0] hover:bg-[#def2e2] border border-[#a4dbaa] px-3.5 py-1.5 rounded-lg transition-colors shadow-2xs"
          >
            <span>💬 {labels.whatsappPlan}</span>
          </a>
        </div>

        {/* Collapsible 2026 Major Festival Dates */}
        {showFestivals && (
          <div className="mt-4 pt-4 border-t border-[#e8d5be] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 animate-fadeIn">
            {KEY_FESTIVALS_2026.map((fest, idx) => (
              <div key={idx} className="bg-white border border-[#e4d2bf] p-3 rounded-xl shadow-2xs">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[10px] font-bold text-[#964b00] uppercase bg-[#fff3e0] px-2 py-0.5 rounded">
                    {fest.date}
                  </span>
                  <span className="text-[10px] text-[#694e41] font-medium">{fest.location[currentLang]}</span>
                </div>
                <h4 className="text-xs font-bold text-[#5c0f0a] mb-1">
                  {fest.name[currentLang]}
                </h4>
                <p className="text-[11px] text-[#553b30] leading-snug">
                  {fest.significance[currentLang]}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
