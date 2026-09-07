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
  website: string;
  websiteUrl: string;
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
  categories: {
    all: string;
    navagraha: string;
    shiva: string;
    vishnu: string;
    devi: string;
    remedial: string;
  };
  selector: {
    step1Tag: string;
    step1Heading: string;
    step1Sub: string;
    searchPlaceholder: string;
    selectAllBtn: string;
    resetBtn: string;
    viewDetails: string;
    addToRoute: string;
    removeFromRoute: string;
    selectedBadge: string;
    step2Tag: string;
    step2Heading: string;
    step2Sub: string;
    step3Tag: string;
    step3Heading: string;
    step3Sub: string;
    travelDateLabel: string;
    devoteesLabel: string;
    acVehicleLabel: string;
    homestayLabel: string;
    satvicFoodLabel: string;
    seniorCareLabel: string;
    archanaLabel: string;
    specialNotesLabel: string;
    specialNotesPlaceholder: string;
    summaryTitle: string;
    summaryTemplesSelected: string;
    summaryServiceTier: string;
    summaryAssistance: string;
    sendRouteWhatsApp: string;
    copyRoute: string;
    copiedAlert: string;
    helpNotice: string;
  };
  modal: {
    presidingDeity: string;
    pariharamTitle: string;
    sthalaPuranamTitle: string;
    closeBtn: string;
    inRoute: string;
    addRoute: string;
    selectedInRoute: string;
    notAddedToRoute: string;
  };
  aboutSection: {
    tag: string;
    title: string;
    lead: string;
    quote: string;
    quoteAuthor: string;
    story1: string;
    story2: string;
    story3: string;
    pillarsTitle: string;
    pillars: Array<{ title: string; desc: string }>;
  };
  experiencesSection: {
    tag: string;
    title: string;
    subtitle: string;
    packages: Array<{
      id: 1 | 2 | 3;
      title: string;
      desc: string;
      points: string[];
      cta: string;
    }>;
  };
  servicesSection: {
    tag: string;
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      desc: string;
      badge: string;
    }>;
  };
  journeysSection: {
    tag: string;
    title: string;
    subtitle: string;
    tabs: {
      oneDay: string;
      multiDay: string;
      custom: string;
    };
    oneDayDesc: string;
    multiDayDesc: string;
    customDesc: string;
    customizeBtn: string;
  };
  pricingSection: {
    tag: string;
    title: string;
    subtitle: string;
    transparentNote: string;
    customQuoteBtn: string;
  };
  whySection: {
    tag: string;
    title: string;
    reasons: Array<{
      title: string;
      desc: string;
    }>;
  };
  guideSection: {
    tag: string;
    title: string;
    subtitle: string;
    timingsTitle: string;
    timingsDesc: string;
    cauveryTitle: string;
    cauveryDesc: string;
    etiquetteTitle: string;
    etiquetteDesc: string;
  };
  footer: {
    desc: string;
    quickLinks: string;
    templeCircuits: string;
    contactDirect: string;
    copyright: string;
  };
}

const COMMON_PHONE = '+91 90253 04681';
const COMMON_PHONE_RAW = '919025304681';
const COMMON_WHATSAPP_LINK = 'https://wa.me/919025304681?text=Vanakkam%20Kumbakonam%20Temples%20Darshan%2C%20I%20would%20like%20information%20regarding%20temple%20itineraries%20and%20bookings.';
const COMMON_EMAIL = 'info@kumbakonamtemplesdharshan.com';
const COMMON_WEBSITE = 'www.kumbakonamtemplesdharshan.com';
const COMMON_WEBSITE_URL = 'https://www.kumbakonamtemplesdharshan.com';

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
    website: COMMON_WEBSITE,
    websiteUrl: COMMON_WEBSITE_URL,
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
    },
    categories: {
      all: 'All Temples',
      navagraha: 'Navagraha',
      shiva: 'Shiva / Chola',
      vishnu: 'Vishnu / Divya Desam',
      devi: 'Devi / Amman',
      remedial: 'Remedial Shrine'
    },
    selector: {
      step1Tag: 'Step 1: Curated Sacred Temples',
      step1Heading: 'Choose your sacred temples',
      step1Sub: 'Select temples to build your personalized Cauvery delta pilgrimage circuit.',
      searchPlaceholder: 'Search by temple name, deity, pariharam...',
      selectAllBtn: 'Select All in Package',
      resetBtn: 'Reset All',
      viewDetails: 'View Full Sthala Puranam & Pariharam',
      addToRoute: '+ Add to Route',
      removeFromRoute: '✓ In Route (Remove)',
      selectedBadge: 'Selected',
      step2Tag: 'Step 2: Service Tier & Comfort',
      step2Heading: 'Select your preferred travel comfort tier',
      step2Sub: 'Transparent, customizable tiers covering transport, traditional stays, and satvic meals.',
      step3Tag: 'Step 3: Customize Trip Options & Sacred Care',
      step3Heading: 'Personalize your pilgrimage details',
      step3Sub: 'Select travel dates, group size, vehicles, stays, and dedicated senior assistance.',
      travelDateLabel: 'Estimated Travel Date',
      devoteesLabel: 'Number of Devotees (Group Size)',
      acVehicleLabel: 'Private AC Vehicle Included',
      homestayLabel: 'Traditional Satvic Stay / Hotel',
      satvicFoodLabel: 'Pure Satvic South Indian Vegetarian Meals',
      seniorCareLabel: 'Senior Citizen Friendly Pacing & Comfort',
      archanaLabel: 'Archana & Sanctum Darshan Assistance',
      specialNotesLabel: 'Special Prayer Intentions / Star / Gotra / Requests',
      specialNotesPlaceholder: 'E.g., Birth star Rohini, Sevvai pariharam, wheelchair request for mother, 2-day relaxed schedule...',
      summaryTitle: 'Your Pilgrimage Circuit',
      summaryTemplesSelected: 'Temples Selected',
      summaryServiceTier: 'Service Comfort Tier',
      summaryAssistance: 'Special Assistance Included',
      sendRouteWhatsApp: 'Send Route via WhatsApp (+91 90253 04681)',
      copyRoute: 'Copy Route Itinerary',
      copiedAlert: 'Itinerary copied to clipboard!',
      helpNotice: 'Instant confirmation by S. Saranya & S. Ishwarya on +91 90253 04681'
    },
    modal: {
      presidingDeity: 'Presiding Deity & Sanctum',
      pariharamTitle: 'Pariharam & Spiritual Blessings',
      sthalaPuranamTitle: 'Sthala Puranam & Ancient Heritage',
      closeBtn: 'Close',
      inRoute: '✓ In My Route (Remove)',
      addRoute: '+ Add to My Route',
      selectedInRoute: 'Selected in your custom route',
      notAddedToRoute: 'Not yet added to your route'
    },
    aboutSection: {
      tag: 'Sacred Roots & Tradition',
      title: 'Rooted in the Cauvery Delta',
      lead: 'We bridge ancient spiritual wisdom and modern travel comfort, allowing every devotee to experience Kumbakonam with profound peace.',
      quote: '"The Cauvery delta is not merely a geographic expanse; it is a living, breathing realm of stone architecture, sacred chantings, and divine grace."',
      quoteAuthor: 'Kumbakonam Heritage Guardians',
      story1: 'For centuries, pilgrims have traveled to Kumbakonam seeking astrological remedies, inner solace, and ancestral blessings along the banks of the sacred Cauvery.',
      story2: 'Our mission is to eliminate commercial chaos, hurried darshans, and fatigue. We design deliberate, peaceful journeys aligned with sanctum timings.',
      story3: 'From senior-citizen accessibility to pure traditional Satvic meals served on fresh banana leaves, every detail reflects authentic delta hospitality.',
      pillarsTitle: 'Our Sacred Principles',
      pillars: [
        { title: 'Authentic Sthala Puranam', desc: 'Grounded in genuine Chola history, Agamas, and centuries-old temple oral traditions.' },
        { title: 'Unrushed Pacing', desc: 'Time for silent meditation, prathakshinam, and peaceful sanctum darshans without stress.' },
        { title: 'Pure Satvic Hospitality', desc: 'Hygienic traditional homestays, private AC vehicles, and authentic delta vegetarian food.' }
      ]
    },
    experiencesSection: {
      tag: 'Signature Curations',
      title: 'Thoughtfully Designed Circuits',
      subtitle: 'Choose from our three foundational temple packages or personalize your own itinerary.',
      packages: [
        {
          id: 1,
          title: 'Astrology & Planetary Remedies',
          desc: '17 Curated Shrines covering Navagraha dosha nivruthi, planetary afflictions, and ancestral Pitru Tharpanam.',
          points: ['Surya, Chandra, Sevvai, Budha, Sukra, Sani, Ketu shrines', 'Pitru Tharpanam at Thilatharpanapuri', 'Pongu Sani & Mangala Sani temples'],
          cta: 'Explore Package 1'
        },
        {
          id: 2,
          title: 'Suburb & West Highway Heritage',
          desc: '12 Celebrated Shrines featuring grand Chola architecture, Rahu-Guru circuits, and peaceful rural river paths.',
          points: ['Thirunageswaram Rahu Bhagavan blue milk abhishekam', 'Patteswaram Durga & Alangudi Guru', 'Thenkudi Thittai & 108 Divya Desam'],
          cta: 'Explore Package 2'
        },
        {
          id: 3,
          title: 'Kumbakonam Town & Mahamaham Core',
          desc: '5 Powerful Shrines within city limits for protection, peace, and sacred Mahamaham tank blessings.',
          points: ['Adi Kumbeswarar 9-tier Raja Gopuram', 'Ayyavadi Pratyangira Devi red chilli yajna', 'Chola Ugra Bhairavar & Dakshina Kalahasti'],
          cta: 'Explore Package 3'
        }
      ]
    },
    servicesSection: {
      tag: 'Modular & Flexible',
      title: 'You choose what you need',
      subtitle: 'Devotees never have to purchase services they do not need.',
      items: [
        { title: 'Experience Only', desc: 'Itinerary planning, temple selection, auspicious darshan timings, and local historical guidance.', badge: 'Ideal if driving your own vehicle' },
        { title: 'Transportation', desc: 'Private AC transport (Innova Crysta, Ertiga, Sedan, or Tempo Traveller) with seasoned delta drivers.', badge: 'Kumbakonam / Trichy / Chennai pick-up' },
        { title: 'Accommodation', desc: 'Handpicked verified traditional homestays, heritage boutique resorts, or comfortable modern hotels.', badge: 'Clean, peaceful & devotee-friendly' },
        { title: 'Satvic Dining', desc: 'Pure South Indian vegetarian meals, traditional filter coffee, and hygienic temple snacks.', badge: '100% Satvic vegetarian' },
        { title: 'Special Assistance', desc: 'Senior citizen wheelchair coordination, gentle pacing, and archana / sanctum guidance.', badge: 'For elders & families' },
        { title: 'Full Journey Management', desc: 'End-to-end seamless pilgrimage handling with a dedicated 24/7 delta travel coordinator.', badge: 'Complete peace of mind' }
      ]
    },
    journeysSection: {
      tag: 'Flexible Durations',
      title: 'Journeys tailored to your schedule',
      subtitle: 'Whether you have a single sacred day or a relaxed week, we curate the ideal circuit.',
      tabs: {
        oneDay: '1-Day Intensive',
        multiDay: '2 to 3-Day Relaxed',
        custom: 'Custom Multi-Day Circuit'
      },
      oneDayDesc: 'A fast-paced yet deeply devotional circuit focusing on core Navagraha or city heritage shrines with optimized route travel.',
      multiDayDesc: 'Our most popular pilgrimage rhythm. Allows peaceful morning and evening darshans, Cauvery holy dips, and restful nights.',
      customDesc: 'Tailor-made itineraries based on your birth star (Nakshatram), specific dosha pariharams, ancestral rites, or family reunions.',
      customizeBtn: 'Custom Route Generator'
    },
    pricingSection: {
      tag: 'Honest & Transparent',
      title: 'Comfort Tiers & Pricing',
      subtitle: 'Clear, unbundled pricing with no hidden charges or forced commissions.',
      transparentNote: 'All quotes are calculated transparently based on vehicle fuel, AC hours, verified room tariffs, and authentic Satvic meals.',
      customQuoteBtn: 'Request Custom Quote via WhatsApp'
    },
    whySection: {
      tag: 'Why Devotees Trust Us',
      title: 'Personalized, peaceful & well-paced',
      reasons: [
        { title: 'Expert Local Insight', desc: 'Deep context on centuries-old Sthala Puranam, Chola stone architecture, and spiritual rituals.' },
        { title: 'Uncrowded Exploration', desc: 'We prioritize peaceful Cauvery-karai shrines and optimal darshan timings to avoid chaotic crowds.' },
        { title: 'Completely Personalized', desc: 'Your birth chart, ancestral roots, personal prayers, and pacing dictate every turn of the road.' },
        { title: 'Senior & Family Care', desc: 'Wheelchair assistance, ground-floor rooms, gentle walking distances, and patient drivers.' },
        { title: '100% Satvic Hospitality', desc: 'Hygienic, purely vegetarian food prepared with traditional delta recipes that soothe the mind.' },
        { title: 'Direct Direct Coordinators', desc: 'Reach S. Saranya & S. Ishwarya directly on +91 90253 04681 without call center delays.' }
      ]
    },
    guideSection: {
      tag: 'Delta Wisdom',
      title: 'Cauvery Pilgrim Heritage Guide',
      subtitle: 'Essential advice for a meaningful and blessed pilgrimage across Thanjavur and Kumbakonam.',
      timingsTitle: 'Sanctum Timings & Auspicious Hours',
      timingsDesc: 'Most delta temples open from 6:30 AM to 12:00 PM and reopen at 4:30 PM to 8:30 PM. Planning around these hours ensures uninterrupted darshan.',
      cauveryTitle: 'Cauvery Holy Snanam (Bath)',
      cauveryDesc: 'Dipping in the sacred Cauvery river or temple theerthams (like Mahamaham tank or Gupta Ganga) before darshan washes away negative energies.',
      etiquetteTitle: 'Sacred Temple Dress Code',
      etiquetteDesc: 'Traditional attire (dhoti/kurta for men, saree/churidar for women) is respected across all ancient shrines.'
    },
    footer: {
      desc: 'Dedicated to offering peaceful, personalized spiritual and heritage journeys to Kumbakonam and the sacred Cauvery delta.',
      quickLinks: 'Quick Links',
      templeCircuits: 'Sacred Circuits',
      contactDirect: 'Direct Contacts',
      copyright: '© 2026 Kumbakonam Temples Darshan. All rights reserved.'
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
    website: COMMON_WEBSITE,
    websiteUrl: COMMON_WEBSITE_URL,
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
    },
    categories: {
      all: 'அனைத்து தலங்கள்',
      navagraha: 'நவகிரகம்',
      shiva: 'சிவன் / சோழர் கலை',
      vishnu: 'விஷ்ணு / திவ்ய தேசம்',
      devi: 'தேவி / அம்மன்',
      remedial: 'பரிகார தலம்'
    },
    selector: {
      step1Tag: 'படி 1: தேர்ந்தெடுக்கப்பட்ட புனிதத் தலங்கள்',
      step1Heading: 'உங்கள் தரிசனத் தலங்களைத் தேர்ந்தெடுங்கள்',
      step1Sub: 'உங்கள் விருப்பத்திற்கேற்ப கோவில்களைத் தேர்வு செய்து தனிப்பயன் வழித்தடத்தை உருவாக்குங்கள்.',
      searchPlaceholder: 'கோவில் பெயர், மூலவர், பரிகாரம் மூலம் தேடவும்...',
      selectAllBtn: 'தொகுப்பில் உள்ள அனைத்தையும் தேர்வு செய்',
      resetBtn: 'தேர்வை மீட்டமை',
      viewDetails: 'தல புராணம் மற்றும் பரிகார விவரங்களைக் காண்க',
      addToRoute: '+ பயணத்தில் சேர்க்க',
      removeFromRoute: '✓ பயணத்தில் உள்ளது (நீக்கு)',
      selectedBadge: 'தேர்வு செய்யப்பட்டது',
      step2Tag: 'படி 2: சேவைத் தரம் & வசதிகள்',
      step2Heading: 'உங்கள் பயண வசதியைத் தேர்வு செய்யவும்',
      step2Sub: 'வாகனம், தங்குமிடம் மற்றும் சாத்வீக உணவு உள்ளடக்கிய வெளிப்படையான கட்டண முறைகள்.',
      step3Tag: 'படி 3: பயண விருப்பங்கள் & சிறப்பு வசதிகள்',
      step3Heading: 'பயண விவரங்களை முடிவு செய்யுங்கள்',
      step3Sub: 'பயணத் தேதி, பயணிகள் எண்ணிக்கை, முதியோர் கவனிப்பு ஆகியவற்றை தேர்ந்தெடுக்கவும்.',
      travelDateLabel: 'உத்தேச பயணத் தேதி',
      devoteesLabel: 'பயணிகள் எண்ணிக்கை (குடும்பத்தினர்)',
      acVehicleLabel: 'தனிப்பட்ட ஏசி வாகனம் தேவை',
      homestayLabel: 'பாரம்பரிய சாத்வீக தங்குமிடம் தேவை',
      satvicFoodLabel: '100% தூய சாத்வீக தென்னிந்திய சைவ உணவு',
      seniorCareLabel: 'முதியோருக்கான மெதுவான நடை & சிறப்பு கவனிப்பு',
      archanaLabel: 'அர்ச்சனை மற்றும் நடை தரிசன ஒருங்கிணைப்பு',
      specialNotesLabel: 'சிறப்பு பிரார்த்தனை நோக்கம் / நட்சத்திரம் / கோத்திரம் / குறிப்புகள்',
      specialNotesPlaceholder: 'எ.கா: ரோகிணி நட்சத்திரம், செவ்வாய் தோஷ பரிகாரம், அம்மாவிற்கு சக்கர நாற்காலி உதவி, 2 நாள் நிதானப் பயணம்...',
      summaryTitle: 'உங்கள் தரிசனப் பயண விவரம்',
      summaryTemplesSelected: 'தலங்கள் தேர்வு செய்யப்பட்டுள்ளன',
      summaryServiceTier: 'தேர்ந்தெடுக்கப்பட்ட சேவைத் தரம்',
      summaryAssistance: 'சிறப்பு உதவிகள்',
      sendRouteWhatsApp: 'வாட்ஸ்அப் வழியாக அனுப்பவும் (+91 90253 04681)',
      copyRoute: 'பயண விவரத்தை நகலெடு',
      copiedAlert: 'பயண விவரம் நகலெடுக்கப்பட்டது!',
      helpNotice: 'எஸ். சரண்யா & எஸ். ஐஸ்வர்யா மூலம் உடனடி உறுதிப்படுத்தல்: +91 90253 04681'
    },
    modal: {
      presidingDeity: 'மூலவர் மற்றும் அம்பாள் சந்நிதி',
      pariharamTitle: 'பரிகாரம் & ஆன்மீக பலன்கள்',
      sthalaPuranamTitle: 'தல புராணம் & தொன்மையான சிறப்புகள்',
      closeBtn: 'மூடுக',
      inRoute: '✓ எனது பயணத்தில் உள்ளது (நீக்கு)',
      addRoute: '+ எனது பயணத்தில் சேர்க்க',
      selectedInRoute: 'உங்கள் தனிப்பயன் பயணத்தில் தேர்வு செய்யப்பட்டுள்ளது',
      notAddedToRoute: 'இன்னும் உங்கள் பயணத்தில் சேர்க்கப்படவில்லை'
    },
    aboutSection: {
      tag: 'ஆன்மீக வேர்கள் & பாரம்பரியம்',
      title: 'காவிரி டெல்டாவின் ஆன்மீக மடியில்',
      lead: 'தொன்மையான ஆன்மீக ஞானத்தையும் நவீன பயண வசதிகளையும் இணைத்து, ஒவ்வொரு பக்தரும் கும்பகோணத்தில் பேரமைதியை அனுபவிக்க உதவுகிறோம்.',
      quote: '"காவிரி டெல்டா என்பது வெறும் நிலப்பரப்பு மட்டுமல்ல; அது வாழும் கலையழகு, புனித மந்திரங்களின் அதிர்வு மற்றும் இறையருள் நிறைந்த புண்ணிய பூமி."',
      quoteAuthor: 'கும்பகோணம் பாரம்பரிய வழிகாட்டிகள்',
      story1: 'நூற்றாண்டுகளாக, பக்தர்கள் தங்களின் ஜாதக தோஷ நிவர்த்திக்காகவும், மன அமைதிக்காகவும், பித்ரு தர்ப்பணத்திற்காகவும் புனித காவிரி நதிக்கரைக்கு வருகை தருகின்றனர்.',
      story2: 'கூட்ட நெரிசல் மற்றும் அவசர தரிசனத்தால் ஏற்படும் சோர்வை நீக்கி, கோவில் நடை திறக்கும் நேரங்களுக்கு ஏற்ப நிதானமான, அமைதியான பயணங்களை நாங்கள் வடிவமைக்கிறோம்.',
      story3: 'முதியோருக்கான சிறப்பு ஏற்பாடுகள் முதல், வாழையிலையில் பரிமாறப்படும் தூய சாத்வீக உணவுகள் வரை அனைத்தும் உண்மையான டெல்டா விருந்தோம்பலை பறைசாற்றுகின்றன.',
      pillarsTitle: 'எங்களின் புனிதக் கோட்பாடுகள்',
      pillars: [
        { title: 'உண்மையான தல புராணம்', desc: 'சோழர் வரலாறு, ஆகம நெறிகள் மற்றும் கோவில் மரபுகளின்படி அமைந்த நேர்மையான வழிகாட்டல்.' },
        { title: 'அவசரமற்ற நிதான தரிசனம்', desc: 'தியானம், அமைதியான பிரதட்சணம் மற்றும் மனநிறைவான தரிசனத்திற்கு போதுமான அவகாசம்.' },
        { title: 'தூய சாத்வீக உபசரிப்பு', desc: 'சுத்தமான பாரம்பரிய தங்குமிடம், ஏசி வாகனங்கள் மற்றும் தரமான தென்னிந்திய சைவ உணவு.' }
      ]
    },
    experiencesSection: {
      tag: 'பிரதான தொகுப்புகள்',
      title: 'நேர்த்தியாக வடிவமைக்கப்பட்ட வழித்தடங்கள்',
      subtitle: 'எங்களின் மூன்று பிரதான தொகுப்புகளில் இருந்து தேர்வு செய்யலாம் அல்லது உங்கள் விருப்பப்படி தனிப்பயனாக்கலாம்.',
      packages: [
        {
          id: 1,
          title: 'ஜோதிட பரிகார & நவகிரக திருத்தலங்கள்',
          desc: 'நவகிரக தோஷ நிவர்த்தி, ஆயுள் பலம் மற்றும் முன்னோர்களின் பித்ரு தோஷ சாந்திக்கான 17 முக்கியத் தலங்கள்.',
          points: ['சூரியன், சந்திரன், செவ்வாய், புதன், சுக்கிரன், சனி, கேது தலங்கள்', 'திலதர்ப்பணபுரியில் பித்ரு தர்ப்பணம்', 'பொங்கு சனி மற்றும் மங்கள சனி தலங்கள்'],
          cta: 'தொகுப்பு 1 விவரங்கள்'
        },
        {
          id: 2,
          title: 'கும்பகோணம் புறநகர் & மேற்கு நெடுஞ்சாலைத் தலங்கள்',
          desc: 'சோழர் காலத்து பிரம்மாண்ட சிற்பக்கலை, ராகு-குரு தலங்கள் மற்றும் காவிரி நதிக்கரை தலங்கள் கொண்ட 12 ஆலயங்கள்.',
          points: ['திருநாகேஸ்வரம் ராகு பகவான் நீலப்பால் அபிஷேகம்', 'பட்டீஸ்வரம் துர்க்கை மற்றும் ஆலங்குடி குரு', 'தென்குடி திட்டை மற்றும் 108 திவ்ய தேசம்'],
          cta: 'தொகுப்பு 2 விவரங்கள்'
        },
        {
          id: 3,
          title: 'கும்பகோணம் மாநகர & சக்திவாய்ந்த தலங்கள்',
          desc: 'நகருக்குள்ளேயே அமைந்துள்ள ஆதி கும்பேஸ்வரர், உக்ர பைரவர் மற்றும் ஐயாவாடி பிரத்தியங்கிரா தேவி தலங்கள் அடங்கிய 5 பெருந்தலங்கள்.',
          points: ['ஆதி கும்பேஸ்வரர் 9 நிலை ராஜகோபுரம்', 'ஐயாவாடி பிரத்தியங்கிரா தேவி நிகும்பலா யாகம்', 'சோழர் உக்ர பைரவர் மற்றும் தென் காளஹஸ்தி'],
          cta: 'தொகுப்பு 3 விவரங்கள்'
        }
      ]
    },
    servicesSection: {
      tag: 'நெகிழ்வான சேவைகள்',
      title: 'உங்களுக்கு தேவையானதை நீங்களே தேர்வு செய்யுங்கள்',
      subtitle: 'தேவையற்ற சேவைகளுக்கு பக்தர்கள் எப்போதும் பணம் செலுத்த வேண்டியதில்லை.',
      items: [
        { title: 'பயண வழிகாட்டல் மட்டும்', desc: 'பயணத் திட்டம், கோவில் தேர்வு, உகந்த தரிசன நேரம் மற்றும் வரலாற்றுத் தகவல்கள்.', badge: 'சொந்த வாகனத்தில் வருவோருக்கு சிறந்தது' },
        { title: 'வாகன வசதி', desc: 'அனுபவம் வாய்ந்த ஓட்டுநருடன் கூடிய ஏசி இன்னோவா, எர்டிகா, செடான் அல்லது வேன்.', badge: 'கும்பகோணம் / திருச்சி / சென்னை பிக்-அப்' },
        { title: 'தங்குமிடம்', desc: 'சுத்தமான பாரம்பரிய ஹோம்ஸ்டே, ஹெரிட்டேஜ் ரிசார்ட் அல்லது நவீன ஹோட்டல்கள்.', badge: 'சுத்தமான, அமைதியான தங்குமிடம்' },
        { title: 'சாத்வீக உணவு', desc: 'சுவையான தென்னிந்திய சைவ உணவு, பாரம்பரிய ஃபில்டர் காபி மற்றும் கோவில் பிரசாதங்கள்.', badge: '100% தூய சாத்வீக உணவு' },
        { title: 'முதியோர் சிறப்பு உதவி', desc: 'சக்கர நாற்காலி உதவி, குறைந்த நடைப்பயிற்சி மற்றும் நடை தரிசன வழிகாட்டல்.', badge: 'முதியோர் மற்றும் குடும்பத்தினருக்கு' },
        { title: 'முழுமையான பயண மேலாண்மை', desc: '24/7 டெல்டா பயண ஒருங்கிணைப்பாளருடன் அமைதியான, மனநிறைவான யாத்திரை.', badge: 'முழுமையான மன அமைதி' }
      ]
    },
    journeysSection: {
      tag: 'பயண கால அளவுகள்',
      title: 'உங்கள் நேரத்திற்கு ஏற்ப பயணங்கள்',
      subtitle: 'உங்களிடம் ஒரே ஒரு நாள் இருந்தாலும் அல்லது ஒரு வாரம் இருந்தாலும், சிறந்த தரிசனத்தை திட்டமிட்டு தருகிறோம்.',
      tabs: {
        oneDay: '1-நாள் விரைவுப் பயணம்',
        multiDay: '2 முதல் 3-நாள் நிதானப் பயணம்',
        custom: 'தனிப்பயன் பல-நாள் தரிசனம்'
      },
      oneDayDesc: 'முக்கிய நவகிரகங்கள் அல்லது நகரத் தலங்களை விரைவாகவும் பக்தியுடனும் தரிசிக்க உகந்த திட்டம்.',
      multiDayDesc: 'காலை மற்றும் மாலை வேளைகளில் நிதானமாக தரிசித்து, காவிரி ஆற்றில் நீராடி அமைதி பெற மிகவும் விரும்பப்படும் திட்டம்.',
      customDesc: 'உங்கள் பிறந்த நட்சத்திரம், குடும்ப பரிகாரங்கள், பித்ரு கடன்கள் ஆகியவற்றை மையமாகக் கொண்ட தனிப்பயன் திட்டம்.',
      customizeBtn: 'தனிப்பயன் பயண அமைப்பாளர்'
    },
    pricingSection: {
      tag: 'நேர்மையான கட்டண முறை',
      title: 'சேவைத் தரங்களும் கட்டண விவரங்களும்',
      subtitle: 'எந்தவித மறைமுக கட்டணங்களும் அல்லது கட்டாய கமிஷன்களும் இல்லாத வெளிப்படையான கட்டண முறை.',
      transparentNote: 'வாகன எரிபொருள், ஏசி பயன்பாட்டு நேரம், அறை வாடகை மற்றும் உணவுச் செலவுகள் மட்டுமே வெளிப்படையாக கணக்கிடப்படுகின்றன.',
      customQuoteBtn: 'வாட்ஸ்அப் மூலம் கட்டண விவரம் பெற'
    },
    whySection: {
      tag: 'பக்தர்களின் நம்பிக்கை',
      title: 'தனிப்பயனாக்கப்பட்ட, அமைதியான யாத்திரை',
      reasons: [
        { title: 'உள்ளூர் நிபுணத்துவ வழிகாட்டல்', desc: 'நூற்றாண்டுகள் பழமையான தல புராணம், சோழர் சிற்பக்கலை மற்றும் ஆகம முறைகள் பற்றிய ஆழமான புரிதல்.' },
        { title: 'கூட்ட நெரிசலற்ற தரிசனம்', desc: 'அமைதியான காவிரி நதிக்கரை தலங்கள் மற்றும் சரியான தரிசன நேரங்களைத் திட்டமிட்டு நெரிசலைத் தவிர்த்தல்.' },
        { title: 'முழுமையான தனிப்பயனாக்கம்', desc: 'உங்கள் ஜாதகம், முன்னோர்களின் பூர்வீகம் மற்றும் தனிப்பட்ட வேண்டுதல்களுக்கு ஏற்ப அமையும் பாதை.' },
        { title: 'முதியோர் & குடும்ப பராமரிப்பு', desc: 'சக்கர நாற்காலி, தரைத்தள அறைகள், மெதுவான நடை வேகம் மற்றும் கனிவான ஓட்டுநர்கள்.' },
        { title: '100% சாத்வீக உபசரிப்பு', desc: 'மனதிற்கு அமைதியளிக்கும் பாரம்பரிய டெல்டா சமையல் முறையில் தயாரிக்கப்பட்ட தூய சைவ உணவு.' },
        { title: 'நேரடி ஒருங்கிணைப்பாளர்கள்', desc: 'எஸ். சரண்யா & எஸ். ஐஸ்வர்யா ஆகியோரை +91 90253 04681 எண்ணில் நேரடியாக அழைக்கலாம்.' }
      ]
    },
    guideSection: {
      tag: 'டெல்டா பாரம்பரியம்',
      title: 'காவிரி யாத்ரீகர் வழிகாட்டி',
      subtitle: 'தஞ்சை மற்றும் கும்பகோணத் தலங்களில் அர்த்தமுள்ள தரிசனம் பெற தேவையான முக்கிய ஆலோசனைகள்.',
      timingsTitle: 'கோவில் நடை திறக்கும் நேரங்கள்',
      timingsDesc: 'பெரும்பாலான டெல்டா கோவில்கள் காலை 6:30 முதல் 12:00 மணி வரையிலும், மாலை 4:30 முதல் 8:30 மணி வரையிலும் திறந்திருக்கும்.',
      cauveryTitle: 'புனித காவிரி நீராடல் (ஸ்நானம்)',
      cauveryDesc: 'தரிசனத்திற்கு முன் காவிரி நதியிலோ அல்லது கோவில் தீர்த்தங்களிலோ (மகாமகம் குளம், குப்த கங்கை) நீராடுவது மனதை தூய்மைப்படுத்தும்.',
      etiquetteTitle: 'பாரம்பரிய ஆடை மரபு',
      etiquetteDesc: 'ஆண்கள் வேஷ்டி/குர்தாவும், பெண்கள் புடவை/சுடிதாரும் அணிந்து கோவில்களுக்குச் செல்வது பாரம்பரிய மரபாகும்.'
    },
    footer: {
      desc: 'கும்பகோணம் மற்றும் புனித காவிரிப் பகுதி ஆலயங்களை நோக்கிய அர்த்தமுள்ள, அமைதியான ஆன்மீகத் திருத்தல யாத்திரைகள்.',
      quickLinks: 'முக்கிய இணைப்புகள்',
      templeCircuits: 'புனித வழித்தடங்கள்',
      contactDirect: 'நேரடி தொடர்புகள்',
      copyright: '© 2026 கும்பகோணம் டெம்பிள்ஸ் தர்ஷன். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.'
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
    website: COMMON_WEBSITE,
    websiteUrl: COMMON_WEBSITE_URL,
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
    },
    categories: {
      all: 'सभी तीर्थ',
      navagraha: 'नवग्रह',
      shiva: 'शिव / चोल धरोहर',
      vishnu: 'विष्णु / दिव्य देशम',
      devi: 'देवी / अम्मन शक्ति',
      remedial: 'दोष निवारण तीर्थ'
    },
    selector: {
      step1Tag: 'चरण 1: पावन तीर्थ चयन',
      step1Heading: 'अपने दर्शन तीर्थ चुनें',
      step1Sub: 'अपनी व्यक्तिगत कावेरी डेल्टा तीर्थ यात्रा हेतु मंदिरों का चयन करें।',
      searchPlaceholder: 'मंदिर का नाम, देवता, दोष निवारण से खोजें...',
      selectAllBtn: 'पैकेज के सभी मंदिर चुनें',
      resetBtn: 'चयन हटाएं',
      viewDetails: 'स्थल पुराण एवं दोष निवारण विवरण देखें',
      addToRoute: '+ मार्ग में जोड़ें',
      removeFromRoute: '✓ यात्रा में सम्मिलित (हटाएं)',
      selectedBadge: 'चयनित',
      step2Tag: 'चरण 2: सेवा स्तर एवं सुविधा',
      step2Heading: 'अपनी पसंद के अनुसार यात्रा सुविधा चुनें',
      step2Sub: 'वाहन, आवास एवं शुद्ध सात्विक भोजन से युक्त पारदर्शी दरें।',
      step3Tag: 'चरण 3: यात्रा विकल्प एवं विशेष प्रबंध',
      step3Heading: 'यात्रा संबंधी विवरण निर्धारित करें',
      step3Sub: 'यात्रा तिथि, यात्रियों की संख्या, वाहन, आवास एवं वरिष्ठ नागरिक विशेष सहायता चुनें।',
      travelDateLabel: 'अनुमानित यात्रा तिथि',
      devoteesLabel: 'यात्रियों की संख्या (परिवार)',
      acVehicleLabel: 'निजी एसी वाहन सुविधा',
      homestayLabel: 'सात्विक होटल / होमस्टे आवास',
      satvicFoodLabel: '100% शुद्ध सात्विक दक्षिण भारतीय भोजन',
      seniorCareLabel: 'वरिष्ठ नागरिकों हेतु सुगम गति एवं विशेष देखभाल',
      archanaLabel: 'अर्चना एवं सुगम दर्शन सहायता',
      specialNotesLabel: 'विशेष प्रार्थना संकल्प / जन्म नक्षत्र / गोत्र / अन्य आवश्यकताएं',
      specialNotesPlaceholder: 'उदा. रोहिणी नक्षत्र, मंगल दोष निवारण, वरिष्ठजनों हेतु व्हीलचेयर, 2 दिवसीय शांत यात्रा...',
      summaryTitle: 'आपकी पावन यात्रा योजना',
      summaryTemplesSelected: 'मंदिर चयनित',
      summaryServiceTier: 'चयनित यात्रा श्रेणी',
      summaryAssistance: 'विशेष सहायता सम्मिलित',
      sendRouteWhatsApp: 'व्हाट्सएप पर भेजें (+91 90253 04681)',
      copyRoute: 'यात्रा विवरण कॉपी करें',
      copiedAlert: 'यात्रा विवरण कॉपी हो गया!',
      helpNotice: 'एस. शरण्या एवं एस. ऐश्वर्या द्वारा त्वरित पुष्टि: +91 90253 04681'
    },
    modal: {
      presidingDeity: 'प्रधान विग्रह एवं पावन गर्भगृह',
      pariharamTitle: 'दोष निवारण एवं आध्यात्मिक लाभ',
      sthalaPuranamTitle: 'स्थल पुराण एवं प्राचीन इतिहास',
      closeBtn: 'बंद करें',
      inRoute: '✓ यात्रा में सम्मिलित (हटाएं)',
      addRoute: '+ यात्रा में सम्मिलित करें',
      selectedInRoute: 'आपकी व्यक्तिगत यात्रा में चयनित',
      notAddedToRoute: 'अभी तक यात्रा में नहीं जोड़ा गया'
    },
    aboutSection: {
      tag: 'आध्यात्मिक जड़ें एवं परंपरा',
      title: 'कावेरी डेल्टा की पावन गोद में',
      lead: 'हम प्राचीन आध्यात्मिक ज्ञान और आधुनिक यात्रा सुविधा का संगम कर प्रत्येक भक्त को शांतिपूर्ण दर्शन का अनुभव कराते हैं।',
      quote: '"कावेरी डेल्टा केवल एक भौगोलिक क्षेत्र नहीं है; यह जीवंत पाषाण स्थापत्य, वैदिक मंत्रों और ईश्वरीय अनुग्रह की तपोभूमि है।"',
      quoteAuthor: 'कुंभकोणम धरोहर संरक्षक',
      story1: 'शताब्दियों से भक्त अपनी जन्म कुंडली के ग्रह दोष निवारण, आत्मिक शांति और पितृ तर्पण हेतु कावेरी के पावन तटों पर आते रहे हैं।',
      story2: 'हम व्यावसायिक भीड़भाड़ और जल्दबाजी के तनाव को समाप्त कर गर्भगृह खुलने के शुभ समय अनुसार शांत यात्रा की रचना करते हैं।',
      story3: 'वरिष्ठ नागरिकों के लिए व्हीलचेयर प्रबंध से लेकर केले के पत्ते पर परोसे जाने वाले शुद्ध सात्विक भोजन तक, हर बात में प्रामाणिक सेवा भाव झलकता है।',
      pillarsTitle: 'हमारे पावन सिद्धांत',
      pillars: [
        { title: 'प्रामाणिक स्थल पुराण', desc: 'चोल इतिहास, आगम शास्त्र एवं मंदिर परंपराओं पर आधारित सटीक जानकारी।' },
        { title: 'शांत एवं सुगम गति', desc: 'ध्यान, परिक्रमा एवं शांतिपूर्ण गर्भगृह दर्शन हेतु पर्याप्त समय।' },
        { title: 'शुद्ध सात्विक आतिथ्य', desc: 'स्वच्छ पारंपरिक होमस्टे, एसी वाहन एवं पारंपरिक दक्षिण भारतीय शाकाहारी भोजन।' }
      ]
    },
    experiencesSection: {
      tag: 'विशेष यात्रा परिपथ',
      title: 'सुविचारित दर्शन पैकेज',
      subtitle: 'हमारे तीन प्रमुख यात्रा पैकेजों में से चुनें अथवा अपनी इच्छा अनुसार व्यक्तिगत परिपथ बनाएं।',
      packages: [
        {
          id: 1,
          title: 'ज्योतिष एवं ग्रह दोष निवारण तीर्थ',
          desc: 'नवग्रह दोष शांति, आयु रक्षा एवं पितृ तर्पण हेतु 17 अत्यंत प्रभावशाली पवित्र मंदिर।',
          points: ['सूर्य, चंद्र, मंगल, बुध, शुक्र, शनि, केतु तीर्थ', 'तिलतर्पणपुरी में पितृ श्राद्ध व तर्पण', 'पोंगू शनि एवं मंगल शनि मंदिर'],
          cta: 'पैकेज 1 का अन्वेषण करें'
        },
        {
          id: 2,
          title: 'कुंभकोणम उपनगर एवं पश्चिम राजमार्ग धरोहर',
          desc: 'भव्य चोल पाषाण कला, राहु-गुरु ग्रह पीठ एवं शांत कावेरी तटवर्ती 12 प्रसिद्ध मंदिर।',
          points: ['तिरुनागेश्वरम राहु भगवान का चमत्कारी नीला दुग्धाभिषेक', 'पट्टीश्वरम दुर्गा एवं आलंगुडी गुरु', 'देंकुडी तिट्टई एवं 108 दिव्य देशम'],
          cta: 'पैकेज 2 का अन्वेषण करें'
        },
        {
          id: 3,
          title: 'कुंभकोणम नगर एवं महामहाम मुख्य पीठ',
          desc: 'नगर सीमा के भीतर स्थित आदि कुंभेश्वरर, उग्र कालभैरव एवं अय्यावाडी प्रत्यंगिरा देवी सहित 5 पावन मंदिर।',
          points: ['आदि कुंभेश्वरर 9 मंजिला भव्य राजगोपुरम', 'अय्यावाडी प्रत्यंगिरा देवी का लाल मिर्च निकुम्बला होमम', 'चोल उग्र कालभैरव एवं दक्षिण कालहस्ती'],
          cta: 'पैकेज 3 का अन्वेषण करें'
        }
      ]
    },
    servicesSection: {
      tag: 'लचीली एवं सुलभ सेवाएं',
      title: 'आप केवल वही चुनें जिसकी आपको आवश्यकता है',
      subtitle: 'भक्तों को कभी भी उन सेवाओं के लिए भुगतान नहीं करना पड़ता जिनकी उन्हें आवश्यकता नहीं है।',
      items: [
        { title: 'केवल मार्गदर्शन एवं योजना', desc: 'यात्रा मार्ग निर्धारण, मंदिर चयन, शुभ दर्शन समय एवं ऐतिहासिक संदर्भ की जानकारी।', badge: 'स्वयं के वाहन से आने वालों हेतु आदर्श' },
        { title: 'वाहन सुविधा', desc: 'अनुभवी चालकों के साथ निजी एसी वाहन (इनोवा क्रिस्टा, अर्टिगा, सेडान अथवा टेम्पो ट्रेवलर)।', badge: 'कुंभकोणम / त्रिची / चेन्नई पिक-अप' },
        { title: 'आवास व्यवस्था', desc: 'स्वच्छ, प्रामाणिक पारंपरिक होमस्टे, हेरिटेज रिसॉर्ट अथवा आधुनिक आरामदायक होटल।', badge: 'स्वच्छ, शांत एवं सुरक्षित ठहराव' },
        { title: 'सात्विक भोजन', desc: 'शुद्ध दक्षिण भारतीय शाकाहारी भोजन, पारंपरिक फिल्टर कॉफी एवं स्वच्छ मंदिर प्रसाद।', badge: '100% शुद्ध सात्विक भोजन' },
        { title: 'विशेष सहयोग', desc: 'वरिष्ठ नागरिकों हेतु व्हीलचेयर प्रबंध, सुगम गति एवं दर्शन-अर्चना सहायता।', badge: 'बुजुर्गों एवं परिवारों के लिए' },
        { title: 'संपूर्ण यात्रा प्रबंधन', desc: '24/7 स्थानीय डेल्टा समन्वयक के साथ चिंतामुक्त एवं पूर्णतः शांत आध्यात्मिक यात्रा।', badge: 'पूर्ण आत्मिक शांति' }
      ]
    },
    journeysSection: {
      tag: 'लचीली समयावधि',
      title: 'आपकी सुविधानुसार यात्रा मार्ग',
      subtitle: 'चाहे आपके पास केवल एक दिन हो या पूरा सप्ताह, हम आपके लिए सर्वोत्तम दर्शन योजना बनाते हैं।',
      tabs: {
        oneDay: '1-दिवसीय सघन यात्रा',
        multiDay: '2 से 3-दिवसीय शांत यात्रा',
        custom: 'अनुकूलित बहु-दिवसीय दर्शन'
      },
      oneDayDesc: 'प्रमुख नवग्रह अथवा नगर के मुख्य मंदिरों के त्वरित एवं भक्तिमय दर्शन हेतु अनुकूलित मार्ग योजना।',
      multiDayDesc: 'सर्वाधिक लोकप्रिय यात्रा शैली। प्रातः एवं सांध्यकालीन शांत दर्शन, कावेरी पावन स्नान और सुखद विश्राम।',
      customDesc: 'आपके जन्म नक्षत्र, विशेष दोष निवारण, पूर्वज श्राद्ध अथवा पारिवारिक संकल्प पर आधारित विशेष परिपथ।',
      customizeBtn: 'कस्टम रूट जनरेटर'
    },
    pricingSection: {
      tag: 'ईमानदार एवं पारदर्शी',
      title: 'सुविधा श्रेणियां एवं दरें',
      subtitle: 'बिना किसी छिपे शुल्क अथवा अनावश्यक कमीशन के पूर्णतः स्पष्ट एवं पारदर्शी दरें।',
      transparentNote: 'सभी कोटेशन केवल वाहन ईंधन, एसी घंटे, प्रामाणिक होटल दर और शुद्ध सात्विक भोजन लागत के आधार पर तैयार किए जाते हैं।',
      customQuoteBtn: 'व्हाट्सएप पर कस्टम कोटेशन प्राप्त करें'
    },
    whySection: {
      tag: 'भक्तों का विश्वास',
      title: 'व्यक्तिगत, शांतिपूर्ण एवं सुव्यवस्थित यात्रा',
      reasons: [
        { title: 'विशेषज्ञ स्थानीय मार्गदर्शन', desc: 'शताब्दियों पुराने स्थल पुराण, चोल स्थापत्य एवं धार्मिक परंपराओं की गहरी समझ।' },
        { title: 'भीड़ से मुक्त दर्शन', desc: 'कावेरी तटवर्ती शांत मंदिरों एवं अनुकूल समय चयन द्वारा अनावश्यक भीड़ से बचाव।' },
        { title: 'पूर्णतः व्यक्तिगत परिपथ', desc: 'आपकी जन्म कुंडली, पूर्वजों की परंपरा एवं व्यक्तिगत प्रार्थनाओं के अनुसार यात्रा।' },
        { title: 'वरिष्ठ नागरिक एवं परिवार की देखभाल', desc: 'व्हीलचेयर सहायता, भूतल पर कमरे, कम पैदल दूरी एवं धैर्यवान चालक।' },
        { title: '100% शुद्ध सात्विक व्यवस्था', desc: 'पारंपरिक डेल्टा विधि से तैयार शुद्ध, पौष्टिक एवं सुपाच्य शाकाहारी भोजन।' },
        { title: 'सीधे संपर्क अधिकारी', desc: 'एस. शरण्या एवं एस. ऐश्वर्या से +91 90253 04681 पर बिना किसी बिचौलिए के सीधे बात करें।' }
      ]
    },
    guideSection: {
      tag: 'डेल्टा ज्ञान',
      title: 'कावेरी तीर्थयात्री धरोहर गाइड',
      subtitle: 'तंजावुर एवं कुंभकोणम क्षेत्र के पावन तीर्थों में सार्थक दर्शन हेतु अनिवार्य सुझाव।',
      timingsTitle: 'मंदिर गर्भगृह खुलने का समय',
      timingsDesc: 'अधिकांश मंदिर प्रातः 6:30 से दोपहर 12:00 बजे तक एवं सायं 4:30 से रात्रि 8:30 बजे तक खुले रहते हैं।',
      cauveryTitle: 'कावेरी पावन स्नान',
      cauveryDesc: 'दर्शन से पूर्व पवित्र कावेरी नदी अथवा मंदिर तीर्थों (जैसे महामहाम सरोवर, गुप्त गंगा) में स्नान से नकारात्मक ऊर्जा नष्ट होती है।',
      etiquetteTitle: 'पावन मंदिर वेशभूषा नियम',
      etiquetteDesc: 'पुरुषों हेतु धोती/कुर्ता एवं महिलाओं हेतु साड़ी/सूट पारंपरिक रूप से सर्वोत्तम माने जाते हैं।'
    },
    footer: {
      desc: 'कुंभकोणम एवं पवित्र कावेरी डेल्टा के दिव्य मंदिरों के शांतिपूर्ण, प्रामाणिक एवं व्यक्तिगत तीर्थ दर्शन हेतु समर्पित।',
      quickLinks: 'त्वरित लिंक',
      templeCircuits: 'पावन यात्रा मार्ग',
      contactDirect: 'सीधा संपर्क',
      copyright: '© 2026 कुंभकोणम टेम्पल्स दर्शन। सर्वाधिकार सुरक्षित।'
    }
  }
};
