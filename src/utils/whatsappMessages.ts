import { Language, TRANSLATIONS } from '../data/translations';
import { ServiceTierId } from '../types';
import { PACKAGES_META, ALL_TEMPLES, SERVICE_TIERS, getLocalizedTemple, getLocalizedPackage, getLocalizedTier } from '../data/temples';

export interface ItineraryMessageOptions {
  packageId: 1 | 2 | 3;
  selectedTempleIds: string[];
  selectedTier: ServiceTierId;
  travelDate: string;
  groupSize: number;
  needVehicle: boolean;
  needStay: boolean;
  needSatvicFood: boolean;
  seniorAssistance: boolean;
  archanaAssistance: boolean;
  specialNotes: string;
}

export interface ContactMessageOptions {
  name: string;
  phone: string;
  recipient: 'saranya' | 'ishwarya';
  message: string;
}

/**
 * Generate a comprehensive, localized WhatsApp itinerary inquiry message for any of the 3 supported languages
 */
export function generateItineraryWhatsAppMessage(
  options: ItineraryMessageOptions,
  lang: Language
): string {
  const t = TRANSLATIONS[lang];
  const rawPkg = PACKAGES_META.find(p => p.id === options.packageId) || PACKAGES_META[0];
  const localizedPkg = getLocalizedPackage(rawPkg, lang);

  const tierObj = SERVICE_TIERS.find(s => s.id === options.selectedTier);
  const localizedTier = tierObj ? getLocalizedTier(tierObj, lang) : { name: options.selectedTier };

  // Date label
  let dateText = options.travelDate;
  if (!dateText) {
    if (lang === 'ta') dateText = 'முடிவு செய்யப்பட உள்ளது (நெகிழ்வானது)';
    else if (lang === 'hi') dateText = 'लचीली / शीघ्र तय की जाएगी';
    else dateText = 'Flexible / To be finalized';
  }

  // Services list
  const servicesList: string[] = [];
  if (options.needVehicle) servicesList.push(t.selector.acVehicleLabel);
  if (options.needStay) servicesList.push(t.selector.homestayLabel);
  if (options.needSatvicFood) servicesList.push(t.selector.satvicFoodLabel);
  if (options.seniorAssistance) servicesList.push(t.selector.seniorCareLabel);
  if (options.archanaAssistance) servicesList.push(t.selector.archanaLabel);

  let servicesText = '';
  if (servicesList.length > 0) {
    servicesText = servicesList.join(', ');
  } else {
    if (lang === 'ta') servicesText = 'பயண வழித்தடத் திட்டம் மற்றும் வழிகாட்டல் மட்டும்';
    else if (lang === 'hi') servicesText = 'केवल यात्रा मार्ग योजना एवं मार्गदर्शन';
    else servicesText = 'Route Planning & Guidance only';
  }

  // Selected temples list
  const selectedTemples = ALL_TEMPLES.filter(temple => options.selectedTempleIds.includes(temple.id));
  const templeLines = selectedTemples.map((temple, idx) => {
    const loc = getLocalizedTemple(temple, lang);
    const feature = loc.pariharam || loc.rulingPlanetOrFeature || loc.deity;
    if (lang === 'ta') {
      return `${idx + 1}. ${loc.name} (${temple.nameEnglish}) - [${feature}]`;
    } else if (lang === 'hi') {
      return `${idx + 1}. ${loc.name} (${temple.nameEnglish}) - [${feature}]`;
    } else {
      return `${idx + 1}. ${loc.name} (${loc.deity}) - [${feature}]`;
    }
  }).join('\n');

  if (lang === 'ta') {
    return `வணக்கம் கும்பகோணம் டெம்பிள்ஸ் தர்ஷன்,

எனது கும்பகோணம் ஆன்மீகத் திருத்தல தரிசனப் பயணத்திற்கான தனிப்பயன் திட்டத்தை பெற விரும்புகிறேன்.

📍 தேர்ந்தெடுக்கப்பட்ட தொகுப்பு: தொகுப்பு ${options.packageId} · ${localizedPkg.title}
⚜️ சேவைத் தரம்: ${localizedTier.name}
📅 பயணத் தேதி: ${dateText}
👥 பக்தர்கள் / பயணிகள் எண்ணிக்கை: ${options.groupSize} நபர்கள்
🛠️ தேவைப்படும் சேவைகள்: ${servicesText}
${options.specialNotes.trim() ? `📝 சிறப்பு பிரார்த்தனை / கோரிக்கைகள்: ${options.specialNotes.trim()}\n` : ''}
🛕 தேர்வு செய்த திருத்தலங்கள் (${selectedTemples.length}):
${templeLines}

எனக்கான தனிப்பயன் பயண வழித்தடம் (Route Map), கோவில் நடை திறக்கும் நேரங்கள் மற்றும் கட்டண விவரங்களை பகிருமாறு அன்புடன் கேட்டுக்கொள்கிறேன்.

📞 தொடர்புக்கு: +91 90253 04681
• எஸ். சரண்யா, B.Tech (தொகுப்பு & கோவில் விபரங்கள்)
• எஸ். ஐஸ்வர்யா, M.A. (முன்பதிவு & கட்டண உதவி)
• மின்னஞ்சல்: info@kumbakonamtemplesdharsan.ae`;
  }

  if (lang === 'hi') {
    return `नमस्ते कुंभकोणम टेम्पल्स दर्शन,

मैं कुंभकोणम एवं कावेरी डेल्टा तीर्थ दर्शन यात्रा की योजना बनाना चाहता/चाहती हूँ।

📍 पैकेज: पैकेज ${options.packageId} · ${localizedPkg.title}
⚜️ सेवा श्रेणी: ${localizedTier.name}
📅 यात्रा तिथि: ${dateText}
👥 यात्रियों / श्रद्धालुओं की संख्या: ${options.groupSize} व्यक्ति
🛠️ अपेक्षित सुविधाएं: ${servicesText}
${options.specialNotes.trim() ? `📝 विशेष प्रार्थना / गोत्र / आवश्यकता: ${options.specialNotes.trim()}\n` : ''}
🛕 चयनित पवित्र मंदिर (${selectedTemples.length}):
${templeLines}

कृपया यात्रा मार्ग (Route Map), शुभ दर्शन समय एवं विस्तृत कोटेशन साझा करें।

📞 संपर्क: +91 90253 04681
• एस. शरण्या, B.Tech (पैकेज एवं मंदिर जानकारी)
• एस. ऐश्वर्या, M.A. (बुकिंग एवं भुगतान सहायता)
• ईमेल: info@kumbakonamtemplesdharsan.ae`;
  }

  // English default
  return `Vanakkam Kumbakonam Temples Darshan,

I would like to plan a custom spiritual & heritage pilgrimage to Kumbakonam.

📍 Package Focus: Package ${options.packageId} · ${localizedPkg.title}
⚜️ Service Tier: ${localizedTier.name}
📅 Travel Date: ${dateText}
👥 Group Size: ${options.groupSize} Person(s)
🛠️ Modular Services: ${servicesText}
${options.specialNotes.trim() ? `📝 Special Requirements / Prayers: ${options.specialNotes.trim()}\n` : ''}
🛕 Selected Temples (${selectedTemples.length}):
${templeLines}

Please share my custom route map, temple darshan timing schedule, and customized quote.

📞 Contact: +91 90253 04681
• S. Saranya, B.Tech (Packages & Temple Info)
• S. Ishwarya, M.A. (Bookings & Payments)
• Email: info@kumbakonamtemplesdharsan.ae`;
}

/**
 * Generate a localized WhatsApp contact inquiry message
 */
export function generateContactWhatsAppMessage(
  options: ContactMessageOptions,
  lang: Language
): string {
  const t = TRANSLATIONS[lang];
  const saranya = t.packageInfoDepartment;
  const ishwarya = t.bookingPaymentDepartment;
  const targetOfficer = options.recipient === 'saranya'
    ? `${saranya.name}, ${saranya.qual} (${saranya.roleTitle})`
    : `${ishwarya.name}, ${ishwarya.qual} (${ishwarya.roleTitle})`;

  if (lang === 'ta') {
    return `✨ கும்பகோணம் டெம்பிள்ஸ் தர்ஷன் ✨
📍 கவனத்திற்கு: ${targetOfficer}

👤 பக்தர் / பயணி பெயர்: ${options.name}
📱 தொலைபேசி / வாட்ஸ்அப் எண்: ${options.phone}
💬 ஆன்மீகப் பயண விசாரணை / விபரம்:
${options.message}

கும்பகோணம் ஆன்மீகத் திருத்தல தரிசன வழிகாட்டல் மற்றும் உதவிக்கு நன்றி!`;
  }

  if (lang === 'hi') {
    return `✨ कुंभकोणम टेम्पल्स दर्शन ✨
📍 सेवा में: ${targetOfficer}

👤 श्रद्धालु / यात्री नाम: ${options.name}
📱 संपर्क / व्हाट्सएप नंबर: ${options.phone}
💬 पूछताछ / तीर्थ यात्रा विवरण:
${options.message}

कुंभकोणम दर्शन यात्रा मार्गदर्शन एवं सहायता हेतु धन्यवाद!`;
  }

  return `✨ KUMBAKONAM TEMPLES DARSHAN ✨
📍 Attn: ${targetOfficer}

👤 Pilgrim / Traveler Name: ${options.name}
📱 Phone / WhatsApp: ${options.phone}
💬 Inquiry / Requirements:
${options.message}

Thank you for your guidance and travel assistance!`;
}
