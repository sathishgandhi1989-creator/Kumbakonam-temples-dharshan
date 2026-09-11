import React, { useState, useMemo } from 'react';
import { MessageCircle, Copy, Check, X, Globe, Send, Sparkles, ExternalLink } from 'lucide-react';
import { Language } from '../data/translations';
import {
  ItineraryMessageOptions,
  ContactMessageOptions,
  generateItineraryWhatsAppMessage,
  generateContactWhatsAppMessage
} from '../utils/whatsappMessages';

export interface WhatsAppMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultLang?: Language;
  mode: 'itinerary' | 'contact';
  itineraryData?: ItineraryMessageOptions;
  contactData?: ContactMessageOptions;
}

const LANGUAGE_CONFIG: { id: Language; label: string; nativeName: string; flag: string; greeting: string }[] = [
  { id: 'en', label: 'English', nativeName: 'English', flag: '🇬🇧', greeting: 'Vanakkam' },
  { id: 'ta', label: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳', greeting: 'வணக்கம்' },
  { id: 'hi', label: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', greeting: 'नमस्ते' }
];

export const WhatsAppMessageModal: React.FC<WhatsAppMessageModalProps> = ({
  isOpen,
  onClose,
  defaultLang = 'en',
  mode,
  itineraryData,
  contactData
}) => {
  const [selectedLang, setSelectedLang] = useState<Language>(defaultLang);
  const [copied, setCopied] = useState(false);

  // Sync with defaultLang when modal opens
  React.useEffect(() => {
    if (isOpen) {
      setSelectedLang(defaultLang);
      setCopied(false);
    }
  }, [isOpen, defaultLang]);

  // Compute concern message in the currently selected language
  const concernMessage = useMemo(() => {
    if (mode === 'itinerary' && itineraryData) {
      return generateItineraryWhatsAppMessage(itineraryData, selectedLang);
    }
    if (mode === 'contact' && contactData) {
      return generateContactWhatsAppMessage(contactData, selectedLang);
    }
    return '';
  }, [mode, itineraryData, contactData, selectedLang]);

  if (!isOpen) return null;

  const handleCopy = () => {
    if (!concernMessage) return;
    navigator.clipboard.writeText(concernMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendWhatsApp = () => {
    if (!concernMessage) return;
    const url = `https://wa.me/918220502766?text=${encodeURIComponent(concernMessage)}`;
    window.open(url, '_blank');
    onClose();
  };

  // UI labels based on selected language
  const modalUi = {
    en: {
      title: 'WhatsApp Pilgrimage Message',
      subtitle: 'Select your preferred language below. The message will automatically adapt.',
      step1: 'Step 1: Select Language',
      step2: 'Step 2: Review Message in Chosen Language',
      copyBtn: 'Copy Message',
      copiedBtn: 'Message Copied!',
      sendBtn: 'Send via WhatsApp (+91 82205 02766)',
      coordinatorNote: 'Official Coordinator: Panneerselvam (+91 82205 02766)',
      closeBtn: 'Close'
    },
    ta: {
      title: 'வாட்ஸ்அப் தரிசனப் பயணச் செய்தி',
      subtitle: 'கீழே உங்கள் விருப்ப மொழியைத் தேர்ந்தெடுக்கவும். செய்தி தானாகவே மாற்றியமைக்கப்படும்.',
      step1: 'படி 1: மொழியைத் தேர்ந்தெடுக்கவும்',
      step2: 'படி 2: தேர்வு செய்த மொழியில் செய்தியை சரிபார்க்கவும்',
      copyBtn: 'செய்தியை நகலெடுக்க',
      copiedBtn: 'செய்தி நகலெடுக்கப்பட்டது!',
      sendBtn: 'வாட்ஸ்அப்பில் அனுப்பவும் (+91 82205 02766)',
      coordinatorNote: 'அதிகாரப்பூர்வ ஒருங்கிணைப்பாளர்: பன்னீர்செல்வம் (+91 82205 02766)',
      closeBtn: 'மூடு'
    },
    hi: {
      title: 'व्हाट्सएप तीर्थ दर्शन संदेश',
      subtitle: 'कृपया नीचे अपनी पसंदीदा भाषा चुनें। संदेश स्वतः उस भाषा में प्रदर्शित होगा।',
      step1: 'चरण 1: संदेश भाषा चुनें',
      step2: 'चरण 2: चयनित भाषा में संदेश की समीक्षा करें',
      copyBtn: 'संदेश कॉपी करें',
      copiedBtn: 'संदेश कॉपी हो गया!',
      sendBtn: 'व्हाट्सएप पर भेजें (+91 82205 02766)',
      coordinatorNote: 'आधिकारिक समन्वयक: पन्नीरसेल्वम (+91 82205 02766)',
      closeBtn: 'बंद करें'
    }
  }[selectedLang];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-[#fffdf8] border border-[#d9c4a8] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative my-auto transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-gradient-to-r from-[#530c08] via-[#6e130c] to-[#530c08] text-white p-5 sm:p-6 relative border-b border-[#f4bb4f]/20">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md shrink-0">
                <MessageCircle className="w-6 h-6 fill-current text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#f4bb4f] bg-black/30 px-2 py-0.5 rounded-full border border-white/10">
                    WhatsApp Message Preview
                  </span>
                  <span className="text-[#f4bb4f] text-xs">✦</span>
                </div>
                <h3 className="font-cormorant text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {modalUi.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#f6d7ab] mt-0.5">
                  {modalUi.subtitle}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-4 sm:p-6 space-y-5">
          {/* Step 1: Language Selection initially */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#751610] flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#cf4a24]" />
                {modalUi.step1}
              </span>
              <span className="text-[11px] text-[#8c6b45] font-medium">
                Click any language to change message
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {LANGUAGE_CONFIG.map((langItem) => {
                const isActive = selectedLang === langItem.id;
                return (
                  <button
                    key={langItem.id}
                    onClick={() => setSelectedLang(langItem.id)}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all cursor-pointer text-center relative ${
                      isActive
                        ? 'bg-gradient-to-b from-[#6e130c] to-[#530c08] text-white border-[#f4bb4f] shadow-md ring-2 ring-[#f4bb4f]/30'
                        : 'bg-[#faf4e8] hover:bg-[#f3e7d0] text-[#4a2e18] border-[#dfceb7]'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#f4bb4f] text-[#530c08] rounded-full flex items-center justify-center text-[10px] font-bold">
                        ✓
                      </span>
                    )}
                    <span className="text-lg mb-0.5">{langItem.flag}</span>
                    <span className={`text-xs sm:text-sm font-bold ${isActive ? 'text-[#f4bb4f]' : 'text-[#3c1d0b]'}`}>
                      {langItem.nativeName}
                    </span>
                    <span className={`text-[10px] ${isActive ? 'text-white/80' : 'text-[#7d6550]'}`}>
                      {langItem.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Concern Message Box in that selected language */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#751610] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#f4bb4f]" />
                {modalUi.step2}
              </span>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-[#faf4e8] hover:bg-[#f3e7d0] text-[#751610] border border-[#dfceb7] transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-green-700 font-bold">{modalUi.copiedBtn}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{modalUi.copyBtn}</span>
                  </>
                )}
              </button>
            </div>

            {/* Formatted concern message container */}
            <div className="relative">
              <div className="bg-[#fcf9f2] border border-[#d9c4a8] rounded-xl p-4 font-mono text-xs sm:text-sm text-[#2e1d11] whitespace-pre-wrap max-h-72 overflow-y-auto leading-relaxed shadow-inner select-all border-l-4 border-l-[#751610]">
                {concernMessage}
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#8c6b45] mt-1.5 px-1">
                <span>
                  Language: <strong className="text-[#751610]">{LANGUAGE_CONFIG.find(l => l.id === selectedLang)?.nativeName}</strong>
                </span>
                <span>{concernMessage.length} characters</span>
              </div>
            </div>
          </div>

          {/* Coordinators & Actions */}
          <div className="pt-2 border-t border-[#ead9c0] space-y-3">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <button
                onClick={handleCopy}
                className="px-4 py-2.5 rounded-xl border border-[#c4a06d] bg-white hover:bg-[#faf4e8] text-[#530c08] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-green-700">{modalUi.copiedBtn}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>{modalUi.copyBtn}</span>
                  </>
                )}
              </button>

              <button
                onClick={handleSendWhatsApp}
                className="flex-1 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-all shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{modalUi.sendBtn}</span>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </button>
            </div>

            <p className="text-center text-[11px] text-[#8c6b45]">
              {modalUi.coordinatorNote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
