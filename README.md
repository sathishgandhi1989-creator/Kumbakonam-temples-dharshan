# Kumbakonam Temples Dharshan (கும்பகோணம் டெம்பிள்ஸ் தர்ஷன்)

> **Personalized Spiritual and Heritage Journeys across Kumbakonam & the Sacred Cauvery Delta.**
> *"Your Time. Your Purpose. Your Journey."*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

---

## 🛕 About the Project

**Kumbakonam Temples Dharshan** is a modern, responsive web application and interactive pilgrimage customizer crafted for devotees, travelers, and heritage enthusiasts exploring the sacred Chola temple belt around Kumbakonam, Thanjavur, and Mayiladuthurai in Tamil Nadu, India.

### Key Highlights
- **Curated 34-Shrine Catalog**:
  - **Package 1 · Astrology & Remedies**: Navagraha planetary temples, rare Sani shrines (Mangala, Pongu, Bala), Thilatharpanapuri Pitru Sthalam, and Ayul Vriddhi Yama Sthalam.
  - **Package 2 · Suburb & West Highway**: Thirunageswaram Rahu temple, Patteswaram Durga, Thirubuvanam Sarabeswarar, and Alangudi Guru.
  - **Package 3 · Kumbakonam Town**: Adi Kumbeswarar, Ayyavadi Sri Maha Pratyangira Devi, and Chola Ugra Bhairavar.
- **Interactive Pilgrimage Planner**: Filter temples by category (Navagraha, Shiva/Chola, Divya Desam, Amman/Devi, Remedial), customize vehicle preferences (Innova Crysta, Ertiga, Sedan), choose service tiers (Economy, Premium, Elite), and specify satvic food or senior-friendly pacing.
- **1-Click WhatsApp Enquiry**: Formats chosen shrines, dates, and vehicle requirements into a pre-filled WhatsApp message sent directly to `+91 90253 04681`.
- **Bilingual Typographic Aesthetics**: Traditional temple crimson & sand color palette with Tamil and English script support.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn / pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/kumbakonam-temples-dharshan.git
   cd kumbakonam-temples-dharshan
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   The site will be running at `http://localhost:3000` (or `http://localhost:5173` depending on port availability).

4. **Build for production**:
   ```bash
   npm run build
   ```
   Production assets will be generated in the `dist/` directory.

---

## 📁 Project Structure

```text
├── index.html                  # HTML entry point with Cormorant Garamond & Tamil web fonts
├── metadata.json               # App metadata and project capabilities
├── package.json                # Project dependencies and build scripts
├── src/
│   ├── App.tsx                 # Root application component & state coordinator
│   ├── data/
│   │   └── temples.ts          # Comprehensive database of 34 temples with sthala puranam
│   ├── components/
│   │   ├── Header.tsx          # Top navigation bar & contact quick links
│   │   ├── Hero.tsx            # Visual hero section with sacred gopuram art panel
│   │   ├── About.tsx           # Corporate heritage profile & philosophy
│   │   ├── Experiences.tsx     # Signature experiences (Navagraha, Chola, Cauvery)
│   │   ├── Services.tsx        # Modular travel services (Transport, Stay, Satvic Food)
│   │   ├── Journeys.tsx        # One-day & multi-day curated route templates
│   │   ├── PricingTiers.tsx    # Transparent service tiers (Economy, Premium, Elite)
│   │   ├── TempleSelector.tsx  # Interactive temple selector & WhatsApp booking generator
│   │   ├── WhyChooseUs.tsx     # Pilgrim-first highlights & guarantees
│   │   ├── HeritageGuide.tsx   # Cauvery Delta cultural guide & temple etiquette
│   │   ├── ContactSection.tsx  # Direct phone, email, and WhatsApp inquiry form
│   │   ├── Footer.tsx          # Comprehensive footer & copyright
│   │   └── FloatingWhatsApp.tsx# Sticky WhatsApp contact widget
│   ├── types.ts                # TypeScript interfaces for temples and booking state
│   ├── main.tsx                # React root mount
│   └── index.css               # Global CSS & Tailwind setup
└── LICENSE                     # MIT License
```

---

## 🌐 Deploying to the Web

### Deploying to Vercel
1. Import your GitHub repository to [Vercel](https://vercel.com).
2. Framework Preset: **Vite**.
3. Click **Deploy**.

### Deploying to Netlify
1. Connect your repository on [Netlify](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy Site**.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open an issue or submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**Kumbakonam Temples Dharshan**  
Kumbakonam, Thanjavur District, Tamil Nadu, India  
- **WhatsApp**: [+91 90253 04681](https://wa.me/919025304681)  
- **Phone**: +91 90253 04681  
- **Email**: info@kumbakonamtempledharsan.ae  
