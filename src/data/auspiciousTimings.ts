import { Language } from './translations';

export interface DayTiming {
  dayId: number; // 0: Sunday, 1: Monday, ..., 6: Saturday
  name: { en: string; ta: string; hi: string };
  shortName: { en: string; ta: string; hi: string };
  planetaryRuler: { en: string; ta: string; hi: string };
  templeHighlight: { en: string; ta: string; hi: string };
  pariharaTip: { en: string; ta: string; hi: string };
  nallaNeramMorning: string;
  nallaNeramEvening: string;
  gowriNallaNeram: string;
  rahuKalam: string;
  yamagandam: string;
  kuligai: string;
}

export const DAILY_TIMINGS: DayTiming[] = [
  {
    dayId: 0,
    name: { en: 'Sunday', ta: 'ஞாயிறு', hi: 'रविवार' },
    shortName: { en: 'Sun', ta: 'ஞாயிறு', hi: 'रवि' },
    planetaryRuler: { en: 'Sun (Surya)', ta: 'சூரிய பகவான்', hi: 'सूर्य देव' },
    templeHighlight: {
      en: 'Suryanar Koil & Thirunageswaram Rahu Milk Abhishekam',
      ta: 'சூரியனார் கோவில் & திருநாகேஸ்வரம் ராகு பாலபிஷேகம்',
      hi: 'सूर्यनार कोविल एवं तिरुनागेश्वरम राहु दुग्धाभिषेक'
    },
    pariharaTip: {
      en: 'Thirunageswaram Rahu Kalam milk abhishekam (04:30 PM - 06:00 PM) is the most auspicious weekly pooja for Rahu dosham.',
      ta: 'மாலை 4:30 முதல் 6:00 மணி வரை உள்ள ராகு காலத்தில் திருநாகேஸ்வரத்தில் ராகு பகவானுக்கு பாலபிஷேகம் செய்வது அதீத பலன் தரும்.',
      hi: 'रविवार राहु काल (04:30 PM - 06:00 PM) में तिरुनागेश्वरम में दूध का अभिषेक राहु दोष निवारण हेतु सर्वश्रेष्ठ है।'
    },
    nallaNeramMorning: '07:30 AM – 08:30 AM',
    nallaNeramEvening: '03:30 PM – 04:30 PM',
    gowriNallaNeram: '01:30 PM – 02:30 PM',
    rahuKalam: '04:30 PM – 06:00 PM',
    yamagandam: '12:00 PM – 01:30 PM',
    kuligai: '03:00 PM – 04:30 PM'
  },
  {
    dayId: 1,
    name: { en: 'Monday', ta: 'திங்கள்', hi: 'सोमवार' },
    shortName: { en: 'Mon', ta: 'திங்கள்', hi: 'सोम' },
    planetaryRuler: { en: 'Moon (Chandra)', ta: 'சந்திர பகவான்', hi: 'चंद्र देव' },
    templeHighlight: {
      en: 'Thingalur Kailasanathar & Kumbeswarar Somavaram Darshan',
      ta: 'திங்களூர் கைலாசநாதர் & கும்பேஸ்வரர் சோமவார தரிசனம்',
      hi: 'थिंगलूर कैलासनाथर एवं कुंभेश्वरर सोमवार दर्शन'
    },
    pariharaTip: {
      en: 'Ideal for Chandran archana at Thingalur to eliminate mental anxiety, stress, and maternal afflictions.',
      ta: 'திங்களூரில் சந்திர பகவானுக்கு வெள்ளை வஸ்திரம் சாற்றி அர்ச்சனை செய்ய மன அமைதி மற்றும் தாயின் ஆரோக்கியம் மேம்படும்.',
      hi: 'थिंगलूर में चंद्र देव को सफेद वस्त्र एवं चावल अर्पित करने से मानसिक शांति एवं माता के स्वास्थ्य में वृद्धि होती है।'
    },
    nallaNeramMorning: '06:30 AM – 07:30 AM',
    nallaNeramEvening: '04:30 PM – 05:30 PM',
    gowriNallaNeram: '09:30 AM – 10:30 AM',
    rahuKalam: '07:30 AM – 09:00 AM',
    yamagandam: '10:30 AM – 12:00 PM',
    kuligai: '01:30 PM – 03:00 PM'
  },
  {
    dayId: 2,
    name: { en: 'Tuesday', ta: 'செவ்வாய்', hi: 'मंगलवार' },
    shortName: { en: 'Tue', ta: 'செவ்வாய்', hi: 'मंगल' },
    planetaryRuler: { en: 'Mars (Angaragan / Sevvai)', ta: 'செவ்வாய் (அங்காரகன்)', hi: 'मंगल (अंगारक)' },
    templeHighlight: {
      en: 'Vaitheeswaran Koil Sevvai Pariharam & Swamimalai Murugan',
      ta: 'வைத்தீஸ்வரன் கோவில் செவ்வாய் பரிகாரம் & சுவாமிமலை முருகன்',
      hi: 'वैथीस्वरन कोविल अंगारक पूजा एवं स्वामीमलै मुरुगन'
    },
    pariharaTip: {
      en: 'Best day for Chevvai Dosha pariharam, land dispute prayers, and blood-related wellness at Vaitheeswaran Koil.',
      ta: 'செவ்வாய் தோஷம், திருமணத் தடை நீங்க மற்றும் பூமி லாபம் பெற வைத்தீஸ்வரன் கோவில் அங்காரகன் சன்னதியில் நெய் தீபம் ஏற்ற உகந்த நாள்.',
      hi: 'मांगलिक दोष निवारण, विवाह बाधा मुक्ति एवं भूमि लाभ हेतु वैथीस्वरन कोविल में दीप प्रज्वलित करने का श्रेष्ठ दिन।'
    },
    nallaNeramMorning: '07:30 AM – 08:30 AM',
    nallaNeramEvening: '04:30 PM – 05:30 PM',
    gowriNallaNeram: '10:30 AM – 11:30 AM',
    rahuKalam: '03:00 PM – 04:30 PM',
    yamagandam: '09:00 AM – 10:30 AM',
    kuligai: '12:00 PM – 01:30 PM'
  },
  {
    dayId: 3,
    name: { en: 'Wednesday', ta: 'புதன்', hi: 'बुधवार' },
    shortName: { en: 'Wed', ta: 'புதன்', hi: 'बुध' },
    planetaryRuler: { en: 'Mercury (Budhan)', ta: 'புத பகவான்', hi: 'बुध देव' },
    templeHighlight: {
      en: 'Thiruvenkadu Swetharanyeswarar & Oppiliappan Perumal',
      ta: 'திருவெண்காடு சுவேதாரண்யேஸ்வரர் & ஒப்பிலியப்பன் பெருமாள்',
      hi: 'तिरुवेंकाडु श्वेतारण्येश्वरर एवं ओप्पिलियप्पन पेरुमाल'
    },
    pariharaTip: {
      en: 'Auspicious for students and professionals seeking intellect, communication, and business growth at Thiruvenkadu.',
      ta: 'கல்வி, அறிவு, பேச்சுத்திறன் மற்றும் வியாபார வெற்றி பெற திருவெண்காட்டில் புத பகவானுக்கு பச்சை பயறு நைவேத்தியம் சிறந்தது.',
      hi: 'विद्या, बुद्धि, वाणी एवं व्यापारिक सफलता हेतु तिरुवेंकाडु में बुध देव को मूंग दाल अर्पित करने का पावन दिन।'
    },
    nallaNeramMorning: '09:15 AM – 10:15 AM',
    nallaNeramEvening: '04:45 PM – 05:45 PM',
    gowriNallaNeram: '12:30 PM – 01:30 PM',
    rahuKalam: '12:00 PM – 01:30 PM',
    yamagandam: '07:30 AM – 09:00 AM',
    kuligai: '10:30 AM – 12:00 PM'
  },
  {
    dayId: 4,
    name: { en: 'Thursday', ta: 'வியாழன்', hi: 'गुरुवार' },
    shortName: { en: 'Thu', ta: 'வியாழன்', hi: 'गुरु' },
    planetaryRuler: { en: 'Jupiter (Guru Bhagavan)', ta: 'குரு பகவான்', hi: 'गुरु (बृहस्पति)' },
    templeHighlight: {
      en: 'Alangudi Abathsahayeswarar Guru Sthalam Darshan',
      ta: 'ஆலங்குடி ஆபத்சகாயேஸ்வரர் குரு தலம் தரிசனம்',
      hi: 'आलंगुडी आपत्सहायेश्वरर गुरु मंदिर दर्शन'
    },
    pariharaTip: {
      en: 'Offering yellow chana dal garland and yellow vastram at Alangudi grants wisdom, career prosperity, and child blessings.',
      ta: 'ஆலங்குடியில் குரு பகவானுக்கு முல்லை மலர், கொண்டைக்கடலை மாலை மற்றும் மஞ்சள் வஸ்திரம் சாற்றி நெய் விளக்கு ஏற்றுவது மிகுந்த புண்ணியம் தரும்.',
      hi: 'आलंगुडी में गुरु देव को पीले चने की माला व पीला वस्त्र अर्पित करने से संतान, पद एवं ज्ञान की प्राप्ति होती है।'
    },
    nallaNeramMorning: '10:45 AM – 11:45 AM',
    nallaNeramEvening: '06:30 PM – 07:30 PM',
    gowriNallaNeram: '02:00 PM – 03:00 PM',
    rahuKalam: '01:30 PM – 03:00 PM',
    yamagandam: '06:00 AM – 07:30 AM',
    kuligai: '09:00 AM – 10:30 AM'
  },
  {
    dayId: 5,
    name: { en: 'Friday', ta: 'வெள்ளி', hi: 'शुक्रवार' },
    shortName: { en: 'Fri', ta: 'வெள்ளி', hi: 'शुक्र' },
    planetaryRuler: { en: 'Venus (Sukran)', ta: 'சுக்கிர பகவான்', hi: 'शुक्र देव' },
    templeHighlight: {
      en: 'Kanjanoor Agneeswarar & Chakrapani Temple',
      ta: 'கஞ்சனூர் அக்னீஸ்வரர் & சக்கரபாணி திருக்கோவில்',
      hi: 'कंजनूर अग्नीश्वरर एवं चक्रपाणि मंदिर'
    },
    pariharaTip: {
      en: 'Visit Kanjanoor for wealth, marriage prospects, artistic success, and luxury vehicle purchases.',
      ta: 'குடும்ப செழிப்பு, திருமண யோகம், கலைத்துறை வெற்றி மற்றும் வாகனம் அமைய கஞ்சனூர் சுக்கிர பகவானுக்கு மொச்சை நைவேத்தியம் சிறப்பு.',
      hi: 'वैवाहिक सुख, धन-संपदा एवं वाहन प्राप्ति हेतु कंजनूर में शुक्र देव की विशेष अर्चना उत्तम फल देती है।'
    },
    nallaNeramMorning: '09:15 AM – 10:15 AM',
    nallaNeramEvening: '04:30 PM – 05:30 PM',
    gowriNallaNeram: '06:30 PM – 07:30 PM',
    rahuKalam: '10:30 AM – 12:00 PM',
    yamagandam: '03:00 PM – 04:30 PM',
    kuligai: '06:00 AM – 07:30 AM'
  },
  {
    dayId: 6,
    name: { en: 'Saturday', ta: 'சனி', hi: 'शनिवार' },
    shortName: { en: 'Sat', ta: 'சனி', hi: 'शनि' },
    planetaryRuler: { en: 'Saturn (Sani Bhagavan)', ta: 'சனி பகவான்', hi: 'शनि देव' },
    templeHighlight: {
      en: 'Thirunallar Saniswaran Dharbaranyeswarar & Sarangapani',
      ta: 'திருநள்ளாறு சனீஸ்வரன் & சாரங்கபாணி திருக்கோவில்',
      hi: 'तिरुनाल्लारु शनेश्वरर एवं सारंगपाणि मंदिर'
    },
    pariharaTip: {
      en: 'Holy bath in Nala Theertham and lighting sesame oil lamps (Til Deepam) at Thirunallar relieves Sade Sati hardships.',
      ta: 'திருநள்ளாற்றில் நள தீர்த்தத்தில் நீராடி, எள் தீபம் ஏற்றி சனீஸ்வர பகவானை வழிபட ஏழரை சனி மற்றும் அஷ்டம சனி தோஷங்கள் விலகும்.',
      hi: 'तिरुनाल्लारु में नल तीर्थ स्नान एवं तिल के तेल का दीपक जलाने से साढ़ेसाती एवं शनि ढैय्या के कष्टों से मुक्ति मिलती है।'
    },
    nallaNeramMorning: '07:45 AM – 08:45 AM',
    nallaNeramEvening: '04:45 PM – 05:45 PM',
    gowriNallaNeram: '10:30 AM – 11:30 AM',
    rahuKalam: '09:00 AM – 10:30 AM',
    yamagandam: '01:30 PM – 03:00 PM',
    kuligai: '06:00 AM – 07:30 AM'
  }
];

export interface AuspiciousFestival2026 {
  date: string;
  month: string;
  name: { en: string; ta: string; hi: string };
  location: { en: string; ta: string; hi: string };
  significance: { en: string; ta: string; hi: string };
}

export const KEY_FESTIVALS_2026: AuspiciousFestival2026[] = [
  {
    date: 'Jan 14 - 17, 2026',
    month: 'January',
    name: { en: 'Thai Pongal & Thiruvalluvar Day', ta: 'தைப்பொங்கல் & மாட்டுப்பொங்கல்', hi: 'पोंगल एवं मकर संक्रांति' },
    location: { en: 'All 34 Delta Temples', ta: 'அனைத்து டெல்டா திருத்தலங்கள்', hi: 'समस्त डेल्टा मंदिर' },
    significance: {
      en: 'Sun transit celebration with grand harvest rituals and temple processions.',
      ta: 'சூரிய தேவருக்கு புது நெல் பொங்கல் வைத்து வழிபாடு மற்றும் பிரகார உற்சவம்.',
      hi: 'सूर्य देव को नवीन अन्न अर्पण एवं भव्य प्रदक्षिणा।'
    }
  },
  {
    date: 'Feb 1 - 2, 2026',
    month: 'February',
    name: { en: 'Thai Poosam & Theerthavari', ta: 'தைப்பூசம் & தீர்த்தவாரி', hi: 'थाई पूसम एवं तीर्थवारी' },
    location: { en: 'Swamimalai Murugan Temple', ta: 'சுவாமிமலை சுவாமிநாதசுவாமி', hi: 'स्वामीमलै मुरुगन मंदिर' },
    significance: {
      en: 'Lord Murugan’s victory vel worship; Cauvery river holy dip at Swamimalai.',
      ta: 'முருகப்பெருமான் சக்திவேல் பூஜை மற்றும் காவேரி நதிக்கரை தீர்த்தவாரி உற்சவம்.',
      hi: 'भगवान मुरुगन के शक्तिवेल की अर्चना एवं कावेरी पवित्र स्नान।'
    }
  },
  {
    date: 'March 2 - 4, 2026',
    month: 'March',
    name: { en: 'Masi Magam & Mahamaham Tank Theerthavari', ta: 'மாசி மகம் தீர்த்தவாரி', hi: 'मासी मगम महामहाम तीर्थवारी' },
    location: { en: 'Mahamaham Tank, Kumbakonam', ta: 'மகாமக குளம், கும்பகோணம்', hi: 'महामहाम सरोवर, कुंभकोणम' },
    significance: {
      en: 'Auspicious full moon when all 12 Shiva & 5 Vaishnava deities arrive at the sacred tank.',
      ta: 'கும்பகோணத்தின் 12 சிவன் மற்றும் 5 விஷ்ணு சுவாமிகள் மகாமக குளத்தில் எழுந்தருளும் மங்கள தீர்த்தவாரி.',
      hi: 'कुंभकोणम के सभी 12 शिव एवं 5 विष्णु विग्रहों का पवित्र सरोवर में भव्य स्नान।'
    }
  },
  {
    date: 'April 14, 2026',
    month: 'April',
    name: { en: 'Tamil New Year (Puttandu)', ta: 'தமிழ்ப் புத்தாண்டு சித்திரை விஷு', hi: 'तमिल नव वर्ष (पुतांडु)' },
    location: { en: 'Kumbeswarar & Sarangapani', ta: 'கும்பேஸ்வரர் & சாரங்கபாணி', hi: 'कुंभेश्वरर एवं सारंगपाणि' },
    significance: {
      en: 'Panchangam reading, special golden chariot processions, and blessings for the new year.',
      ta: 'வருட பஞ்சாங்கம் வாசித்தல், தங்க ரத உலா மற்றும் சிறப்பு மங்கள அர்ச்சனை.',
      hi: 'पंचांग पठन, स्वर्ण रथ उत्सव एवं वर्षारंभ की विशेष कृपा।'
    }
  },
  {
    date: 'October 11 - 20, 2026',
    month: 'October',
    name: { en: 'Sharad Navaratri & Vijayadasami', ta: 'சாரதா நவராத்திரி & விஜயதசமி', hi: 'शारदीय नवरात्रि एवं विजयादशमी' },
    location: { en: 'Mangalambigai (Kumbeswarar) & Oppiliappan', ta: 'மங்களாம்பிகை & ஒப்பிலியப்பன்', hi: 'मंगलाम्बिका एवं ओप्पिलियप्पन' },
    significance: {
      en: '10 days of celestial Golu decorations, laksharchana, and grand musical concerts.',
      ta: '10 நாட்கள் கொலு வைபவம், லட்சார்ச்சனை மற்றும் சங்கீத ஆராதனை.',
      hi: '10 दिवसीय भव्य गोलू उत्सव, लक्षार्चना एवं संगीत आराधना।'
    }
  }
];

export const TEMPLE_DARSHAN_HOURS = {
  morning: '06:00 AM – 12:30 PM',
  afternoonBreak: '12:30 PM – 04:00 PM',
  evening: '04:00 PM – 09:00 PM',
  note: {
    en: 'Cauvery Delta sanctums strictly close from 12:30 PM to 4:00 PM for deeparadhana & rest. Our private AC cab itineraries are timed to ensure zero wasted hours.',
    ta: 'கும்பகோணம் & டெல்டா திருக்கோவில்கள் மதியம் 12:30 முதல் மாலை 4:00 மணி வரை நடை சாத்தப்படும். நேரம் வீணாகாமல் மிகச்சரியான நேர அட்டவணையுடன் எங்களின் கார் சேவை அமையும்.',
    hi: 'कुंभकोणम के मंदिर दोपहर 12:30 से शाम 04:00 बजे तक विश्राम हेतु बंद रहते हैं। हमारी वातानुकूलित यात्रा सेवा सटीक दर्शन समय के अनुरूप संचालित होती है।'
  }
};
