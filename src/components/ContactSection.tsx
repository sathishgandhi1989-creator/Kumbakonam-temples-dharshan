import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Send, CheckCircle2, UserCheck, CreditCard, Sparkles } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [recipient, setRecipient] = useState<'saranya' | 'ishwarya'>('saranya');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const t = TRANSLATIONS[currentLang];
  const saranya = t.packageInfoDepartment;
  const ishwarya = t.bookingPaymentDepartment;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isSaranya = recipient === 'saranya';
    const targetOfficer = isSaranya
      ? `${saranya.name}, ${saranya.qual} (${saranya.roleTitle})`
      : `${ishwarya.name}, ${ishwarya.qual} (${ishwarya.roleTitle})`;

    const encoded = encodeURIComponent(
      `✨ KUMBAKONAM TEMPLES DARSHAN ✨\n📍 Attn: ${targetOfficer}\n\nName: ${name}\nPhone: ${phone}\nEnquiry / Temples: ${message}`
    );
    window.open(`https://wa.me/${t.phoneRaw}?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#65100c] via-[#751610] to-[#8b2117] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

            {/* Officer Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* S. Saranya, B.Tech */}
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15 space-y-2 hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-2 text-[#f4bb4f] text-xs font-bold uppercase tracking-wider">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>📋 {saranya.roleTitle}</span>
                </div>
                <div className="font-cormorant text-xl font-bold text-white flex items-center gap-1.5">
                  <span>{saranya.name}</span>
                  <span className="text-[11px] font-sans font-semibold text-[#f0c878]">
                    ({saranya.qual})
                  </span>
                </div>
                <p className="text-xs text-[#feddb0] leading-snug">
                  {saranya.services}
                </p>

                {/* Direct Phone Number display */}
                <div className="bg-black/20 px-3 py-1.5 rounded-lg text-xs flex items-center justify-between">
                  <span className="text-[#f7e4ce] text-[11px]">Mobile / WhatsApp:</span>
                  <span className="font-bold text-[#f4bb4f] tracking-wide">{saranya.phone}</span>
                </div>

                <div className="pt-1 flex items-center gap-3">
                  <a
                    href={saranya.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#98e2ac] hover:text-white underline transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                  <span className="text-white/40">•</span>
                  <a
                    href={`tel:${saranya.phoneRaw}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#feddb0] hover:text-white transition-colors"
                  >
                    <Phone className="w-3 h-3 text-[#f0c878]" />
                    <span>Call Directly</span>
                  </a>
                </div>
              </div>

              {/* S. Ishwarya, M.A. */}
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15 space-y-2 hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-2 text-[#98e2ac] text-xs font-bold uppercase tracking-wider">
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>💳 {ishwarya.roleTitle}</span>
                </div>
                <div className="font-cormorant text-xl font-bold text-white flex items-center gap-1.5">
                  <span>{ishwarya.name}</span>
                  <span className="text-[11px] font-sans font-semibold text-[#f0c878]">
                    ({ishwarya.qual})
                  </span>
                </div>
                <p className="text-xs text-[#feddb0] leading-snug">
                  {ishwarya.services}
                </p>

                {/* Direct Phone Number display */}
                <div className="bg-black/20 px-3 py-1.5 rounded-lg text-xs flex items-center justify-between">
                  <span className="text-[#f7e4ce] text-[11px]">Mobile / WhatsApp:</span>
                  <span className="font-bold text-[#98e2ac] tracking-wide">{ishwarya.phone}</span>
                </div>

                <div className="pt-1 flex items-center gap-3">
                  <a
                    href={ishwarya.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#98e2ac] hover:text-white underline transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                  <span className="text-white/40">•</span>
                  <a
                    href={`tel:${ishwarya.phoneRaw}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#feddb0] hover:text-white transition-colors"
                  >
                    <Phone className="w-3 h-3 text-[#f0c878]" />
                    <span>Call Directly</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Support Hours & Email */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/15 text-xs text-[#feddb0]">
              <div className="flex items-center gap-2">
                <span className="text-[#f4bb4f]">⏰</span>
                <span>Assistance Hours: 7:00 AM – 9:30 PM Everyday</span>
              </div>

              <a
                href={`mailto:${t.email}`}
                className="bg-white/10 hover:bg-white/20 text-[#fff9ef] font-semibold text-xs px-4 py-2 rounded-full transition-all flex items-center gap-1.5 border border-white/20"
              >
                <Mail className="w-3.5 h-3.5 text-[#f0c878]" />
                <span>{t.email}</span>
              </a>
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
                {/* Officer Selection */}
                <div>
                  <label className="text-xs font-bold text-[#55453a] uppercase block mb-1">
                    Direct To Coordinator
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setRecipient('saranya')}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        recipient === 'saranya'
                          ? 'bg-[#72130e] text-white border-[#72130e] shadow'
                          : 'bg-white border-[#dacbb5] text-[#55453a] hover:bg-[#fff7ec]'
                      }`}
                    >
                      <div className="font-bold">S. Saranya (B.Tech)</div>
                      <div className={`text-[10px] ${recipient === 'saranya' ? 'text-[#f4bb4f]' : 'text-[#8a2b1d]'}`}>
                        Packages: {saranya.phone}
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setRecipient('ishwarya')}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        recipient === 'ishwarya'
                          ? 'bg-[#19783b] text-white border-[#19783b] shadow'
                          : 'bg-white border-[#dacbb5] text-[#55453a] hover:bg-[#eef8f1]'
                      }`}
                    >
                      <div className="font-bold">S. Ishwarya (M.A.)</div>
                      <div className={`text-[10px] ${recipient === 'ishwarya' ? 'text-[#a2f0b7]' : 'text-[#19783b]'}`}>
                        Bookings: {ishwarya.phone}
                      </div>
                    </button>
                  </div>
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
                  className="w-full bg-[#19783b] hover:bg-[#135f2f] text-white text-xs font-bold py-3.5 rounded-xl transition-all shadow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    Send to {recipient === 'saranya' ? `S. Saranya (${saranya.phone})` : `S. Ishwarya (${ishwarya.phone})`} on WhatsApp
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
