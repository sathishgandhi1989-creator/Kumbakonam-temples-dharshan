import React, { useState } from 'react';
import { Download, Smartphone, Share2, PlusSquare, X, WifiOff, CheckCircle } from 'lucide-react';
import { usePWAInstall } from '../utils/usePWAInstall';
import { useOnlineStatus } from '../utils/useOnlineStatus';

export const PWAInstallBanner: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const isOnline = useOnlineStatus();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [isDismissed, setIsDismissed] = useState(() => {
    return sessionStorage.getItem('pwa_banner_dismissed') === 'true';
  });

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem('pwa_banner_dismissed', 'true');
  };

  React.useEffect(() => {
    const handler = () => {
      if (isInstallable) {
        install();
      } else if (isIOS) {
        setShowIOSGuide(true);
      } else {
        setIsDismissed(false);
      }
    };
    window.addEventListener('trigger-pwa-install', handler);
    return () => window.removeEventListener('trigger-pwa-install', handler);
  }, [isInstallable, isIOS, install]);

  const handleInstallClick = async () => {
    if (isInstallable) {
      await install();
    } else if (isIOS) {
      setShowIOSGuide(true);
    }
  };

  return (
    <>
      {/* Offline Alert Indicator */}
      {!isOnline && (
        <aside
          aria-label="Offline notice"
          className="bg-amber-900 text-amber-100 px-4 py-2 text-xs md:text-sm font-medium flex items-center justify-center gap-2 border-b border-amber-700/60 sticky top-0 z-50 shadow-md"
        >
          <WifiOff className="w-4 h-4 text-amber-300 animate-pulse" />
          <span>You are currently offline. Previously loaded temple details and routes are still viewable!</span>
        </aside>
      )}

      {/* PWA Floating Install Banner - only shown if not installed and not dismissed */}
      {!isInstalled && !isDismissed && (isInstallable || isIOS) && (
        <aside
          aria-label="App installation prompt"
          className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-40 bg-linear-to-r from-[#6C1D13] to-[#8E2819] text-white p-3.5 md:p-4 rounded-2xl shadow-2xl border border-amber-400/30 backdrop-blur-sm animate-fade-in"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-amber-400/40 shadow-inner bg-amber-950/40 flex items-center justify-center">
              <img
                src="/pwa-192x192.png"
                alt="Dharsan App Icon"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/kumbam_logo.jpg';
                }}
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-xs uppercase tracking-wider font-semibold text-amber-300">Quick Mobile App</span>
                <span className="text-[10px] bg-amber-400/20 text-amber-200 px-1.5 py-0.5 rounded-full font-medium">Free</span>
              </div>
              <h4 className="text-sm font-bold text-amber-50 truncate">Install Kumbakonam Temples App</h4>
              <p className="text-xs text-amber-100/85 mt-0.5 line-clamp-1">
                Fast home-screen access &amp; offline temple timings.
              </p>

              <div className="mt-2.5 flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleInstallClick}
                  className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-amber-950 font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-transform cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Install App</span>
                </button>
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="text-amber-200/80 hover:text-white text-xs px-2 py-1 rounded-md transition-colors"
                >
                  Maybe later
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleDismiss}
              className="text-amber-200/70 hover:text-white p-1 rounded-lg transition-colors -mr-1 -mt-1"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </aside>
      )}

      {/* iOS Safari Guide Modal */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fade-in">
          <div className="w-full max-w-sm rounded-2xl bg-[#FFFDF8] p-6 shadow-2xl border border-amber-900/10 text-stone-800">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-[#852211]" />
                <h3 className="text-base font-bold text-[#852211]">Install on iPhone / iPad</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                className="text-stone-400 hover:text-stone-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="mt-3 text-xs text-stone-600 leading-relaxed">
              Safari on iPhone doesn't allow automatic 1-click downloads, but you can install in 2 quick taps:
            </p>

            <ol className="mt-4 space-y-3 text-xs font-medium text-stone-700">
              <li className="flex items-start gap-2.5 bg-amber-50 p-2.5 rounded-xl border border-amber-200/60">
                <span className="w-5 h-5 rounded-full bg-[#852211] text-white flex items-center justify-center text-[10px] shrink-0 font-bold">1</span>
                <div>
                  Tap the <strong className="text-[#852211] inline-flex items-center gap-1">Share button <Share2 className="w-3.5 h-3.5 inline" /></strong> at the bottom of your Safari browser bar.
                </div>
              </li>
              <li className="flex items-start gap-2.5 bg-amber-50 p-2.5 rounded-xl border border-amber-200/60">
                <span className="w-5 h-5 rounded-full bg-[#852211] text-white flex items-center justify-center text-[10px] shrink-0 font-bold">2</span>
                <div>
                  Scroll down the options list and tap <strong className="text-[#852211] inline-flex items-center gap-1">Add to Home Screen <PlusSquare className="w-3.5 h-3.5 inline" /></strong>.
                </div>
              </li>
              <li className="flex items-start gap-2.5 bg-amber-50 p-2.5 rounded-xl border border-amber-200/60">
                <span className="w-5 h-5 rounded-full bg-[#852211] text-white flex items-center justify-center text-[10px] shrink-0 font-bold">3</span>
                <div>
                  Tap <strong className="text-[#852211]">Add</strong> in the top-right corner.
                </div>
              </li>
            </ol>

            <div className="mt-4 pt-3 border-t border-stone-200 flex items-center gap-2 text-[11px] text-stone-500">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>The app icon will immediately appear on your home screen!</span>
            </div>

            <button
              type="button"
              onClick={() => setShowIOSGuide(false)}
              className="mt-4 w-full rounded-xl bg-[#852211] py-2.5 text-xs font-bold text-white hover:bg-[#6C1D13] transition shadow-md cursor-pointer"
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      )}
    </>
  );
};
