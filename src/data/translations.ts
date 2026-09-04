export type Language = 'en' | 'ta' | 'hi';

export interface ServiceContactInfo {
  roleTitle: string;
  name: string;
  qual: string;
  services: string;
  description: string;
  phone: string;
  phoneRaw: string;
  whatsappLink: string;
}

export interface Translations {
  siteTitle: string;
  siteSubtitle: string;
  tamilName: string;
  tagline: string;
  phone: string;
  phoneRaw: string;
  whatsappLink: string;
  email: string;
  nav: {
    home: string;
    about: string;
    experiences: string;
    services: string;
    journeys: string;
    pricing: string;
    selection: string;
    why: string;
    guide: string;
    contact: string;
    helpline: string;
  };
  contactBookingTitle: string;
  contactBookingSubtitle: string;
  packageInfoDepartment: ServiceContactInfo;
  bookingPaymentDepartment: ServiceContactInfo;
  hero: {
    tag: string;
    h1Line1: string;
    h1Line2: string;
    lead: string;
    subLead: string;
    planBtn: string;
    whatsappBtn: string;
    callBtn: string;
    pillars: {
      astrology: string;
      routes: string;
      comfort: string;
      cauvery: string;
    };
  };
  contactForm: {
    title: string;
    subtitle: string;
    yourName: string;
    phoneLabel: string;
    messageLabel: string;
    namePlaceholder: string;
    messagePlaceholder: string;
    sendBtn: string;
    successTitle: string;
    successMessage: string;
    anotherBtn: string;
  };
}

const COMMON_PHONE = '+91 90253 04681';
const COMMON_PHONE_RAW = '919025304681';
const COMMON_WHATSAPP_LINK = 'https://wa.me/919025304681?text=Vanakkam%20Kumbakonam%20Temples%20Darshan%2C%20I%20would%20like%20information%20regarding%20temple%20itineraries%20and%20bookings.';
const COMMON_EMAIL = 'info@kumbakonamtemplesdharsan.ae';

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    siteTitle: 'Kumbakonam Temples Darshan',
    siteSubtitle: 'TEMPLES DARSHAN',
    tamilName: 'கும்பகோணம் டெம்பிள்ஸ் தர்ஷன்',
    tagline: 'Your Time. Your Purpose. Your Journey.',
    phone: COMMON_PHONE,
    phoneRaw: COMMON_PHONE_RAW,
    whatsappLink: COMMON_WHATSAPP_LINK,
    email: COMMON_EMAIL,
    nav: {
      home: 'Home',
      about: 'About',
      experiences: 'Experiences',
      services: 'Services',
      journeys: 'Journeys',
      pricing: 'Pricing',
      selection: 'Temple Selector',
      why: 'Why Us',
      guide: 'Cauvery Guide',
      contact: 'Contact & Booking',
      helpline: 'Contacts'
    },
    contactBookingTitle: 'CONTACT & BOOKING',
    contactBookingSubtitle: 'Direct, dedicated support for your sacred pilgrimage planning and reservations',
    packageInfoDepartment: {
      roleTitle: 'PACKAGE & TEMPLE INFORMATION',
      name: 'S. Saranya',
      qual: 'B.Tech',
      services: 'Travel Packages | Temple Details | Tour Assistance',
      description: 'Expert guidance on 34 sacred delta temples, custom itineraries, astrology & planetary remedies, temple timings, and route logistics.',
      phone: COMMON_PHONE,
      phoneRaw: COMMON_PHONE_RAW,
      whatsappLink: 'https://wa.me/919025304681?text=Vanakkam%20S.Saranya%20(Kumbakonam%20Temples%20Darshan)%2C%20I%20would%20like%20information%20regarding%20travel%20packages%20and%20temple%20itineraries.'
    },
    bookingPaymentDepartment: {
      roleTitle: 'BOOKINGS & PAYMENTS',
      name: 'S. Ishwarya',
      qual: 'M.A.',
      services: 'Booking Support | Payment Assistance | Confirmation',
      description: 'Dedicated reservations for AC vehicles (Innova Crysta, Ertiga, Tempo Traveller), satvic stay arrangements, and payment confirmations.',
      phone: COMMON_PHONE,
      phoneRaw: COMMON_PHONE_RAW,
      whatsappLink: 'https://wa.me/919025304681?text=Vanakkam%20S.Ishwarya%20(Kumbakonam%20Temples%20Darshan)%2C%20I%20would%20like%20assistance%20with%20booking%20and%20payment%20confirmation.'
    },
    hero: {
      tag: 'Spiritual • Heritage • Custom Journeys',
      h1Line1: 'Kumbakonam',
      h1Line2: 'Temples Darshan',
      lead: 'Discover meaningful temple, heritage and Cauvery-region journeys designed around your time, purpose, comfort and budget.',
      subLead: 'Personalized spiritual and heritage journeys to Kumbakonam and the sacred Cauvery delta.',
      planBtn: '✦ Plan Your Journey',
      whatsappBtn: '◉ WhatsApp (+91 90253 04681)',
      callBtn: 'Call +91 90253 04681',
      pillars: {
        astrology: 'Astrology & Remedies',
        routes: 'Chola & Cauvery Routes',
        comfort: 'Senior & Family Comfort',
        cauvery: '100% Satvic Hospitality'
      }
    },
    contactForm: {
      title: 'Quick Direct Inquiry',
      subtitle: 'Connect directly with S. Saranya (Packages) or S. Ishwarya (Bookings) on +91 90253 04681.',
      yourName: 'Your Name',
      phoneLabel: 'Phone / WhatsApp Number',
      messageLabel: 'Message / Temples of Interest',
      namePlaceholder: 'e.g. Ramanathan / Priya / Sharma',
      messagePlaceholder: 'Specify preferred travel dates, family size, senior assistance or special shrines...',
      sendBtn: 'Send via WhatsApp (+91 90253 04681)',
      successTitle: 'Inquiry Prepared!',
      successMessage: 'Your message has been directed to our coordinator on WhatsApp.',
      anotherBtn: 'Send another inquiry'
    }
  },
  ta: {
    siteTitle: 'கும்பகோணம் டெம்பிள்ஸ் தர்ஷன்',
    siteSubtitle: 'ஆன்மீகத் திருத்தல தரிசனம்',
    tamilName: 'கும்பகோணம் டெம்பிள்ஸ் தர்ஷன்',
    tagline: 'உங்கள் நேரம். உங்கள் நோக்கம். உங்கள் திருத்தலப் பயணம்.',
    phone: COMMON_PHONE,
    phoneRaw: COMMON_PHONE_RAW,
    whatsappLink: COMMON_WHATSAPP_LINK,
    email: COMMON_EMAIL,
    nav: {
      home: 'முகப்பு',
      about: 'எங்களை பற்றி',
      experiences: 'ஆன்மீக அனுபவங்கள்',
      services: 'சேவைகள்',
      journeys: 'பயண வழிகள்',
      pricing: 'கட்டண விவரம்',
      selection: 'கோவில் தேர்வு',
      why: 'ஏன் நாங்கள்',
      guide: 'காவிரி வழிகாட்டி',
      contact: 'தொடர்பு & முன்பதிவு',
      helpline: 'தொடர்பு அதிகாரிகள்'
    },
    contactBookingTitle: 'தொடர்பு & முன்பதிவு (CONTACT & BOOKING)',
    contactBookingSubtitle: 'உங்கள் திருத்தல தரிசனப் பயணத்தை திட்டமிடவும் உறுதி செய்யவும் நேரடி உதவி எண்: +91 90253 04681',
    packageInfoDepartment: {
      roleTitle: 'தொகுப்பு & கோவில் விவரங்கள் (PACKAGE & TEMPLE INFORMATION)',
      name: 'எஸ். சரண்யா (S. Saranya)',
      qual: 'B.Tech',
      services: 'சுற்றுலாத் தொகுப்புகள் | கோவில் விவரங்கள் | பயண வழிகாட்டல் (Travel Packages | Temple Details | Tour Assistance)',
      description: '34 புனிதத் தலங்கள், பரிகார தலங்கள், தோஷ நிவர்த்தி, நடை திறக்கும் நேரங்கள் மற்றும் தனிப்பயன் பயணத் திட்ட ஆலோசனை.',
      phone: COMMON_PHONE,
      phoneRaw: COMMON_PHONE_RAW,
      whatsappLink: 'https://wa.me/919025304681?text=Vanakkam%20S.Saranya%20(Kumbakonam%20Temples%20Darshan)%2C%20I%20would%20like%20information%20regarding%20travel%20packages%20and%20temple%20itineraries.'
    },
    bookingPaymentDepartment: {
      roleTitle: 'முன்பதிவு & கட்டணங்கள் (BOOKINGS & PAYMENTS)',
      name: 'எஸ். ஐஸ்வர்யா (S. Ishwarya)',
      qual: 'M.A.',
      services: 'முன்பதிவு உதவி | கட்டண வழிகாட்டல் | பயண உறுதிப்படுத்தல் (Booking Support | Payment Assistance | Confirmation)',
      description: 'வாகனம் (இன்னோவா, எர்டிகா, வேன்), தங்கும் விடுதிகள், சாத்வீக உணவு ஏற்பாடுகள், முன்பதிவு மற்றும் ரசீது உறுதிப்படுத்தல்.',
      phone: COMMON_PHONE,
      phoneRaw: COMMON_PHONE_RAW,
      whatsappLink: 'https://wa.me/919025304681?text=Vanakkam%20S.Ishwarya%20(Kumbakonam%20Temples%20Darshan)%2C%20I%20would%20like%20assistance%20with%20booking%20and%20payment%20confirmation.'
    },
    hero: {
      tag: 'ஆன்மீகம் • பாரம்பரியம் • தனிப்பயன் திருத்தலப் பயணங்கள்',
      h1Line1: 'கும்பகோணம்',
      h1Line2: 'டெம்பிள்ஸ் தர்ஷன்',
      lead: 'உங்கள் நேரம், நோக்கம், வசதி மற்றும் வரவு செலவுக்கு ஏற்ப வடிவமைக்கப்பட்ட அர்த்தமுள்ள ஆன்மீக மற்றும் பாரம்பரியப் பயணங்கள்.',
      subLead: 'கும்பகோணம் மற்றும் புனித காவிரிப் பகுதி ஆலயங்களை நோக்கிய தனிப்பயனாக்கப்பட்ட தரிசனப் பயணங்கள்.',
      planBtn: '✦ உங்கள் பயணத்தை திட்டமிடுங்கள்',
      whatsappBtn: '◉ வாட்ஸ்அப் (+91 90253 04681)',
      callBtn: 'அழைக்கவும்: +91 90253 04681',
      pillars: {
        astrology: 'ஜோதிட & பரிகாரத் தலங்கள்',
        routes: 'சோழ & காவிரி வழித்தடங்கள்',
        comfort: 'முதியோர் & குடும்ப அமைதி',
        cauvery: '100% தூய சாத்வீக உபசரிப்பு'
      }
    },
    contactForm: {
      title: 'நேரடி உடனடித் தொடர்பு',
      subtitle: 'எஸ். சரண்யா அல்லது எஸ். ஐஸ்வர்யா ஆகியோரை +91 90253 04681 என்ற எண்ணில் வாட்ஸ்அப் அல்லது அழைப்பு மூலம் உடனே தொடர்பு கொள்ளவும்.',
      yourName: 'உங்கள் பெயர்',
      phoneLabel: 'தொலைபேசி / வாட்ஸ்அப் எண்',
      messageLabel: 'பயண விருப்பம் / தரிசிக்க வேண்டிய கோவில்கள்',
      namePlaceholder: 'எ.கா: ராமநாதன் / பிரியா / செந்தில்',
      messagePlaceholder: 'பயண தேதி, குடும்ப உறுப்பினர்கள் எண்ணிக்கை, முதியோர் உதவி போன்ற விவரங்களை குறிப்பிடவும்...',
      sendBtn: 'வாட்ஸ்அப் வழியாக அனுப்பவும் (+91 90253 04681)',
      successTitle: 'தகவல் தயாரானது!',
      successMessage: 'உங்கள் தகவல் வாட்ஸ்அப் உதவி மையத்திற்கு (+91 90253 04681) அனுப்பப்பட்டது.',
      anotherBtn: 'மற்றொரு கேள்வியை அனுப்பவும்'
    }
  },
  hi: {
    siteTitle: 'कुंभकोणम टेम्पल्स दर्शन',
    siteSubtitle: 'कुंभकोणम तीर्थ दर्शन',
    tamilName: 'கும்பகோணம் டெம்பிள்ஸ் தர்ஷன்',
    tagline: 'आपका समय। आपका उद्देश्य। आपकी पावन यात्रा।',
    phone: COMMON_PHONE,
    phoneRaw: COMMON_PHONE_RAW,
    whatsappLink: COMMON_WHATSAPP_LINK,
    email: COMMON_EMAIL,
    nav: {
      home: 'होम',
      about: 'हमारे बारे में',
      experiences: 'अनुभव',
      services: 'सेवाएं',
      journeys: 'यात्रा मार्ग',
      pricing: 'दरें',
      selection: 'मंदिर चयन',
      why: 'विशेषताएं',
      guide: 'कावेरी गाइड',
      contact: 'संपर्क एवं बुकिंग',
      helpline: 'संपर्क अधिकारी'
    },
    contactBookingTitle: 'संपर्क एवं बुकिंग (CONTACT & BOOKING)',
    contactBookingSubtitle: 'कुंभकोणम एवं कावेरी डेल्टा के दिव्य मंदिरों के दर्शन एवं सुगम यात्रा हेतु हेल्पलाइन: +91 90253 04681',
    packageInfoDepartment: {
      roleTitle: 'पैकेज एवं मंदिर जानकारी (PACKAGE & TEMPLE INFORMATION)',
      name: 'एस. शरण्या (S. Saranya)',
      qual: 'B.Tech',
      services: 'यात्रा पैकेज | मंदिर विवरण | टूर सहायता (Travel Packages | Temple Details | Tour Assistance)',
      description: '34 प्रमुख एवं दुर्लभ मंदिरों के दर्शन, नवग्रह पूजा, कालसर्प एवं पितृ दोष निवारण, मंदिर समय और यात्रा योजना की पूर्ण जानकारी।',
      phone: COMMON_PHONE,
      phoneRaw: COMMON_PHONE_RAW,
      whatsappLink: 'https://wa.me/919025304681?text=Vanakkam%20S.Saranya%20(Kumbakonam%20Temples%20Darshan)%2C%20I%20would%20like%20information%20regarding%20travel%20packages%20and%20temple%20itineraries.'
    },
    bookingPaymentDepartment: {
      roleTitle: 'बुकिंग एवं भुगतान (BOOKINGS & PAYMENTS)',
      name: 'एस. ऐश्वर्या (S. Ishwarya)',
      qual: 'M.A.',
      services: 'बुकिंग सहायता | भुगतान सुविधा | पुष्टि (Booking Support | Payment Assistance | Confirmation)',
      description: 'एसी वाहन (इनोवा, अर्टिगा, टेम्पो ट्रेवलर), सात्विक भोजन, होटल ठहरने की व्यवस्था और आधिकारिक बुकिंग पुष्टि।',
      phone: COMMON_PHONE,
      phoneRaw: COMMON_PHONE_RAW,
      whatsappLink: 'https://wa.me/919025304681?text=Vanakkam%20S.Ishwarya%20(Kumbakonam%20Temples%20Darshan)%2C%20I%20would%20like%20assistance%20with%20booking%20and%20payment%20confirmation.'
    },
    hero: {
      tag: 'आध्यात्मिक • ऐतिहासिक • व्यक्तिगत पावन यात्रा',
      h1Line1: 'कुंभकोणम',
      h1Line2: 'टेम्पल्स दर्शन',
      lead: 'आपके समय, धार्मिक संकल्प, सुविधा और बजट के अनुकूल तैयार की गई विशेष कावेरी तीर्थ दर्शन यात्राएं।',
      subLead: 'कुंभकोणम, तंजावुर और मयिलादुथुराई के पावन चोल मंदिरों की सुखद एवं प्रामाणिक यात्रा।',
      planBtn: '✦ यात्रा योजना बनाएं',
      whatsappBtn: '◉ व्हाट्सएप (+91 90253 04681)',
      callBtn: 'कॉल करें: +91 90253 04681',
      pillars: {
        astrology: 'ज्योतिष एवं दोष निवारण',
        routes: 'चोल एवं कावेरी मार्ग',
        comfort: 'वरिष्ठ नागरिक एवं परिवार अनुकूल',
        cauvery: '100% शुद्ध सात्विक व्यवस्था'
      }
    },
    contactForm: {
      title: 'त्वरित सीधा संपर्क',
      subtitle: 'एस. शरण्या अथवा एस. ऐश्वर्या से +91 90253 04681 (कॉल एवं व्हाट्सएप) पर तुरंत संपर्क करें।',
      yourName: 'आपका नाम',
      phoneLabel: 'मोबाइल / व्हाट्सएप नंबर',
      messageLabel: 'संदेश / रुचि के मंदिर',
      namePlaceholder: 'उदा. रामनाथन / शर्मा / प्रिया',
      messagePlaceholder: 'यात्रा की तारीखें, यात्रियों की संख्या, वरिष्ठजनों की सुविधा या विशेष मंदिर बताएं...',
      sendBtn: 'व्हाट्सएप से भेजें (+91 90253 04681)',
      successTitle: 'संदेश तैयार है!',
      successMessage: 'आपका विवरण व्हाट्सएप हेल्पलाइन (+91 90253 04681) को प्रेषित किया गया है।',
      anotherBtn: 'दूसरा संदेश भेजें'
    }
  }
};
