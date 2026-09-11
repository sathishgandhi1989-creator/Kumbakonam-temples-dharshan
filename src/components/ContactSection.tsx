import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Send, CheckCircle2, UserCheck, Sparkles, Globe } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';
import { WhatsAppMessageModal } from './WhatsAppMessageModal';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  const t = TRANSLATIONS[currentLang];
  const coordinator = t.packageInfoDepartment;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsWhatsAppModalOpen(true);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#65100c] via-[#751610] to-[#8b2117] text-white">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct info & Team Directory */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#f0c878] text-xs font-bold uppercase tracking-wider">
              <img src="/kumbam_logo.jpg" alt="Logo" className="w-4 h-4 rounded-full object-cover border border-[#f4bb4f]/50" />
              <span>KUMBAKONAM TEMPLES DARSHAN</span>
              <span className="text-[#f4bb4f] text-sm">✦</span>
            </div>

            <h2 className="font-cormorant text-4xl sm:text-6xl font-bold leading-tight text-white">
              📍 {t.contactBookingTitle}
            </h2>
            
            <p className="text-base sm:text-lg text-[#feddb0] max-w-xl leading-relaxed">
              {t.contactBookingSubtitle}
            </p>

            {/* Unified Coordinator Card for Panneerselvam */}
            <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/20 shadow-xl space-y-4 hover:border-white/35 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4bb4f]/20 border border-[#f4bb4f]/40 text-[#f4bb4f] text-xs font-bold uppercase tracking-wider">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>{coordinator.roleTitle}</span>
                </div>
                <div className="text-[11px] text-[#98e2ac] font-semibold flex items-center gap-1.5 bg-[#19783b]/30 px-2.5 py-1 rounded-full border border-[#19783b]/50">
                  <span className="w-2 h-2 rounded-full bg-[#98e2ac] animate-pulse"></span>
                  <span>Direct Tour & Booking Support</span>
                </div>
              </div>

              <div>
                <div className="font-cormorant text-2xl sm:text-3xl font-bold text-white tracking-wide">
                  {coordinator.name}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#f0c878] mt-0.5">
                  {coordinator.services}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#feddb0] leading-relaxed">
                {coordinator.description}
              </p>

              {/* Service Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
                <div className="bg-black/25 px-2.5 py-1.5 rounded-lg border border-white/10 text-[#feddb0] flex items-center gap-1.5">
                  <span>🚗</span>
                  <span className="font-medium">AC Vehicles</span>
                </div>
                <div className="bg-black/25 px-2.5 py-1.5 rounded-lg border border-white/10 text-[#feddb0] flex items-center gap-1.5">
                  <span>🛕</span>
                  <span className="font-medium">34 Temples</span>
                </div>
                <div className="bg-black/25 px-2.5 py-1.5 rounded-lg border border-white/10 text-[#feddb0] flex items-center gap-1.5">
                  <span>🏨</span>
                  <span className="font-medium">Stays & Food</span>
                </div>
                <div className="bg-black/25 px-2.5 py-1.5 rounded-lg border border-white/10 text-[#feddb0] flex items-center gap-1.5">
                  <span>♿</span>
                  <span className="font-medium">Senior Care</span>
                </div>
              </div>

              {/* Direct Phone & Action Controls */}
              <div className="bg-black/30 p-3 sm:p-4 rounded-xl border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3">
                <div>
                  <div className="text-[11px] text-[#feddb0] uppercase tracking-wider">Mobile & WhatsApp</div>
                  <div className="font-cormorant text-2xl font-bold text-[#f4bb4f] tracking-wide">
                    {coordinator.phone}
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <a
                    href={coordinator.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#19783b] hover:bg-[#145f2f] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#a2f0b7]" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${coordinator.phoneRaw}`}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-bold text-xs transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#f0c878]" />
                    <span>Call Directly</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Support Hours, Official Website & Email */}
            <div className="space-y-3 pt-4 border-t border-white/15 text-xs text-[#feddb0]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#f4bb4f]">⏰</span>
                  <span>Assistance Hours: 7:00 AM – 9:30 PM Everyday</span>
                </div>

                <span className="text-[#f4bb4f] font-semibold">✦ Direct Delta Support</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={t.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-[#fff9ef] font-semibold text-xs px-4 py-2 rounded-full transition-all flex items-center gap-2 border border-white/20 hover:border-[#f4bb4f]"
                  title="Visit Official Website"
                >
                  <Globe className="w-3.5 h-3.5 text-[#f4bb4f]" />
                  <span>{t.website}</span>
                </a>

                <a
                  href={`mailto:${t.email}`}
                  className="bg-white/10 hover:bg-white/20 text-[#fff9ef] font-semibold text-xs px-4 py-2 rounded-full transition-all flex items-center gap-2 border border-white/20"
                >
                  <Mail className="w-3.5 h-3.5 text-[#f0c878]" />
                  <span>{t.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Inquiry Form */}
          <div className="lg:col-span-5 bg-white/95 backdrop-blur-md rounded-2xl p-7 text-[#2a211d] shadow-2xl border border-white/40">
            <h3 className="font-cormorant text-2xl font-bold text-[#6e160f] mb-1">
              {t.contactForm.title}
            </h3>
            <p className="text-xs text-[#6e584a] mb-5">
              {t.contactForm.subtitle}
            </p>

            {submitted ? (
              <div className="bg-[#eef7f0] border border-[#a3d9ae] p-6 rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#19783b] mx-auto" />
                <h4 className="font-bold text-[#19783b] text-base">{t.contactForm.successTitle}</h4>
                <p className="text-xs text-[#2c4e33]">
                  {t.contactForm.successMessage}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-[#65100c] underline pt-2 cursor-pointer"
                >
                  {t.contactForm.anotherBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Officer Indicator */}
                <div className="bg-[#fcf8f2] border border-[#e2d5c2] p-3 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#72130e] text-white flex items-center justify-center font-bold text-xs">
                      P
                    </div>
                    <div>
                      <div className="font-bold text-xs text-[#530c08]">Panneerselvam (பன்னீர்செல்வம்)</div>
                      <div className="text-[11px] text-[#7d6550]">Pilgrimage Coordinator • +91 82205 02766</div>
                    </div>
                  </div>
                  <a
                    href={`tel:${coordinator.phoneRaw}`}
                    className="px-2.5 py-1 rounded-lg bg-[#19783b] text-white font-bold text-xs flex items-center gap-1 hover:bg-[#145f2f] transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call</span>
                  </a>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#55453a] uppercase block mb-1">
                    {t.contactForm.yourName}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.contactForm.namePlaceholder}
                    className="w-full p-2.5 rounded-lg border border-[#dacbb5] text-xs sm:text-sm focus:ring-2 focus:ring-[#72130e]/30 focus:outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#55453a] uppercase block mb-1">
                    {t.contactForm.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full p-2.5 rounded-lg border border-[#dacbb5] text-xs sm:text-sm focus:ring-2 focus:ring-[#72130e]/30 focus:outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#55453a] uppercase block mb-1">
                    {t.contactForm.messageLabel}
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.contactForm.messagePlaceholder}
                    className="w-full p-2.5 rounded-lg border border-[#dacbb5] text-xs sm:text-sm focus:ring-2 focus:ring-[#72130e]/30 focus:outline-none bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#19783b] hover:bg-[#135f2f] text-white text-xs sm:text-sm font-bold py-3.5 rounded-xl transition-all shadow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    Send to Panneerselvam ({coordinator.phone}) on WhatsApp
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* WhatsApp Message Modal with Language Selection */}
      <WhatsAppMessageModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => {
          setIsWhatsAppModalOpen(false);
          setSubmitted(true);
        }}
        defaultLang={currentLang}
        mode="contact"
        contactData={{
          name,
          phone,
          recipient: 'panneerselvam',
          message
        }}
      />
    </section>
  );
};
