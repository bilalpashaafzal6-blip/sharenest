import React from 'react';
import { Plus, HeartHandshake, Languages, Check } from 'lucide-react';
import { Language } from '../utils/translations';

interface NavbarProps {
  onOpenDonate: () => void;
  onOpenGuidelines: () => void;
  language: Language;
  onToggleLanguage: (lang: Language) => void;
  totalAvailableCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDonate,
  onOpenGuidelines,
  language,
  onToggleLanguage,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-900/10 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-2">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg sm:text-xl font-bold tracking-tight text-emerald-950 font-display hover:text-emerald-800 transition-colors flex items-center gap-2.5 shrink-0"
        >
          <span className="w-9 h-9 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-display text-lg font-extrabold shadow-xs">
            <HeartHandshake className="w-5 h-5" />
          </span>
          <div className="flex flex-col">
            <span className="leading-tight">ShareNest</span>
            <span className="text-[10px] text-emerald-700 font-urdu font-semibold -mt-0.5">
              مفت عوامی تحائف
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation links with clean bilingual representation */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-700">
          <a
            href="#items-section"
            className="hover:text-emerald-800 transition-colors py-1 flex flex-col items-center"
          >
            <span>Browse Free Items</span>
            <span className="text-[11px] text-emerald-800 font-urdu font-normal">مفت سامان دیکھیں</span>
          </a>
          <a
            href="#how-it-works"
            className="hover:text-emerald-800 transition-colors py-1 flex flex-col items-center"
          >
            <span>How It Works</span>
            <span className="text-[11px] text-slate-500 font-urdu font-normal">استعمال کا طریقہ</span>
          </a>
          <button
            onClick={onOpenGuidelines}
            className="hover:text-emerald-800 transition-colors py-1 flex flex-col items-center cursor-pointer"
          >
            <span>100% Free Pledge</span>
            <span className="text-[11px] text-slate-500 font-urdu font-normal">مفت اصول و ضوابط</span>
          </button>
          <a
            href="#impact-section"
            className="hover:text-emerald-800 transition-colors py-1 flex flex-col items-center"
          >
            <span>Community Impact</span>
            <span className="text-[11px] text-slate-500 font-urdu font-normal">عوامی اثرات</span>
          </a>
        </nav>

        {/* Zone 3: Language Toggle Button & Donate Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Toggle Selector */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
            <button
              onClick={() => onToggleLanguage('both')}
              className={`px-2.5 py-1.5 rounded-lg font-medium transition-all cursor-pointer text-xs ${
                language === 'both'
                  ? 'bg-white text-emerald-800 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Both English & Urdu"
            >
              <span>Both / دونوں</span>
            </button>
            <button
              onClick={() => onToggleLanguage('ur')}
              className={`px-2.5 py-1.5 rounded-lg font-medium transition-all cursor-pointer font-urdu text-xs ${
                language === 'ur'
                  ? 'bg-white text-emerald-800 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="اردو"
            >
              <span>اردو</span>
            </button>
            <button
              onClick={() => onToggleLanguage('en')}
              className={`px-2.5 py-1.5 rounded-lg font-medium transition-all cursor-pointer text-xs ${
                language === 'en'
                  ? 'bg-white text-emerald-800 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="English"
            >
              <span>EN</span>
            </button>
          </div>

          {/* Primary Action Button: Donate Item / سامان عطیہ کریں */}
          <button
            onClick={onOpenDonate}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded-xl shadow-sm transition-all whitespace-nowrap cursor-pointer transform active:scale-98"
          >
            <Plus className="w-4 h-4 shrink-0" />
            <div className="flex flex-col text-left">
              <span className="leading-tight">Donate Item</span>
              <span className="text-[11px] font-urdu font-medium text-emerald-100 leading-tight">
                سامان عطیہ کریں
              </span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
