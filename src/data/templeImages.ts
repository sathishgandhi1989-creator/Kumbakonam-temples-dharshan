// Curated authentic South Indian Dravidian & Chola temple architecture pictures
// All images are strictly sacred Hindu temple pictures (Gopurams, Vimanas, Sanctums, Mandapams, Kalyanis)

export const TEMPLE_IMAGE_MAP: Record<string, string> = {
  // --- Package 1: Astrology & Parihara Temples ---
  'p1-1': '/temple_vimana.jpg',    // Thiruvidaimarudur Mahalinga Swamy (Great Shiva Temple Vimana)
  'p1-2': '/temple_sanctum.jpg',   // Kanjanoor Agneeswarar (Sukra Navagraha Sanctum)
  'p1-3': '/temple_mandapam.jpg',  // Thirumangalakkudi Prananatheswarar (Sacred Mandapam Hall)
  'p1-4': '/temple_gopuram.jpg',   // Suryanar Kovil (Iconic Navagraha Temple Gopuram)
  'p1-5': '/temple_vimana.jpg',    // Thirukodikaval Koteeswarar (Chola Stone Vimana)
  'p1-6': '/temple_mandapam.jpg',  // Thiruvelliyangudi Kolavilli Ramar (Divya Desam Sanctum Hall)
  'p1-7': '/temple_sanctum.jpg',   // Thirunageswaram Naganathar (Rahu Sthalam Sanctum)
  'p1-8': '/temple_kalyani.jpg',   // Uppiliappan Temple (Sacred Temple Pushkarini & Gopuram)
  'p1-9': '/temple_gopuram.jpg',   // Alangudi Guru Temple (Towering Navagraha Temple Gopuram)
  'p1-10': '/temple_mandapam.jpg', // Nachiyar Koil (Carved Monolithic Temple Mandapam)
  'p1-11': '/temple_kalyani.jpg',  // Thirucherai Saranathar (Sara Pushkarini & Temple Tower)
  'p1-12': '/temple_vimana.jpg',   // Thirucherai Rinavimochanar (Ancient Shiva Stone Vimana)
  'p1-13': '/temple_gopuram.jpg',  // Kudavasal Konaeswarar (Sacred Temple Gopuram)
  'p1-14': '/temple_mandapam.jpg', // Thirukannamangai Bhaktavatsala Perumal (Pillared Mandapam)
  'p1-15': '/temple_sanctum.jpg',  // Thirumeyachur Lalithambigai (Sacred Devi Amman Sanctum)
  'p1-16': '/temple_mandapam.jpg', // Koothanur Maha Saraswathi (Vidya Sthalam Temple Mandapam)
  'p1-17': '/temple_vimana.jpg',   // Srivanchiyam Vanchinathar (Ancient Shiva Stone Vimana)

  // --- Package 2: Kumbakonam Town & Surrounding (12 temples) ---
  'p2-1': '/temple_gopuram.jpg',   // Adi Kumbeswarar Temple (Majestic Kumbakonam Rajagopuram)
  'p2-2': '/temple_gopuram.jpg',   // Sarangapani Temple (Grand 11-Tier Divya Desam Gopuram)
  'p2-3': '/temple_mandapam.jpg',  // Chakrapani Temple (Historic Carved Stone Pillars)
  'p2-4': '/temple_vimana.jpg',    // Nageswaran Temple (Early Chola Architectural Masterpiece)
  'p2-5': '/temple_mandapam.jpg',  // Ramaswamy Temple (Celebrated Sculpted Pillar Mandapam)
  'p2-6': '/temple_kalyani.jpg',   // Mahamaham Tank (Sacred Temple Stepped Kalyani & Shrines)
  'p2-7': '/temple_vimana.jpg',    // Someswarar Temple (Chola Stone Temple Vimana)
  'p2-8': '/temple_kalyani.jpg',   // Kasi Viswanathar Temple (Sacred Tank & North Bank Gopuram)
  'p2-9': '/temple_sanctum.jpg',   // Pattiswaram Thenupuriswarar (Divine Durga Amman Sanctum)
  'p2-10': '/temple_gopuram.jpg',  // Swamimalai Murugan Temple (Sacred Hill Temple Gopuram)
  'p2-11': '/temple_vimana.jpg',   // Darasuram Airavateswara Temple (UNESCO Stone Chariot Vimana)
  'p2-12': '/temple_mandapam.jpg', // Thiruvalanchuzhi Kabardheeshwarar (Sculpted Stone Mandapam)

  // --- Package 3: Thanjavur Heritage Circuit (5 temples) ---
  'p3-1': '/temple_vimana.jpg',    // Thanjavur Brihadisvara (Great Living Chola Granite Vimana)
  'p3-2': '/temple_mandapam.jpg',  // Thanjavur Royal Heritage (Historic Stone & Bronze Mandapam)
  'p3-3': '/temple_gopuram.jpg',   // Punnainallur Mariamman Temple (Sacred Temple Gopuram)
  'p3-4': '/temple_sanctum.jpg',   // Bangaru Kamakshi Amman Temple (Auspicious Amman Sanctum)
  'p3-5': '/temple_vimana.jpg'     // Thiruvedikudi Vedapureeswarar (Historic Chola Temple Vimana)
};

// Default fallback image: 100% sacred South Indian temple gopuram
export const DEFAULT_TEMPLE_IMAGE = '/temple_gopuram.jpg';

export function getTempleImage(templeId: string): string {
  return TEMPLE_IMAGE_MAP[templeId] || DEFAULT_TEMPLE_IMAGE;
}
