import React from 'react';
import { HeartHandshake, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenGuidelines: () => void;
  onOpenDonate: () => void;
  onBrowseClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenGuidelines,
  onOpenDonate,
  onBrowseClick,
}) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5 text-white font-display font-bold text-xl">
              <span className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-display text-base shadow-xs">
                <HeartHandshake className="w-4 h-4" />
              </span>
              <div>
                <span>ShareNest</span>
                <span className="text-xs font-urdu font-normal text-emerald-400 block -mt-1">
                  مفت عوامی تحائف کا نیٹ ورک
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-urdu">
              ایک ایسا عوامی پلیٹ فارم جہاں لوگ اپنے فالتو کپڑے، فرنیچر، کتابیں اور گھریلو سامان بلا معاوضہ ضرورت مندوں کو دیتے ہیں۔
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/80 px-3.5 py-1.5 rounded-xl border border-emerald-800/40">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Free Always / تمام اشیاء بالکل مفت ہیں</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Links / فوری روابط
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <button
                  onClick={onBrowseClick}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Browse Free Items / مفت سامان دیکھیں
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDonate}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Donate an Item / سامان عطیہ کریں
                </button>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works / طریقہ کار
                </a>
              </li>
              <li>
                <a href="#impact-section" className="hover:text-white transition-colors">
                  Community Impact / عوامی اثرات
                </a>
              </li>
            </ul>
          </div>

          {/* Guidelines & Safety */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Pledge &amp; Safety / حلف نامہ و حفاظت
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-urdu">
              یہاں کوئی بھی چیز بیچنا یا ڈیلیوری کے پیسے مانگنا ممنوع ہے۔ صرف ضرورت مند افراد کے لیے بلا معاوضہ تحفہ ہے۔
            </p>
            <div>
              <button
                onClick={onOpenGuidelines}
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 underline cursor-pointer"
              >
                Read Community Rules / مفت اصول پڑھیں &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Lower Row */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} ShareNest. Dedicated to zero waste and mutual aid / خدمت خلق اور بلا معاوضہ امداد۔
          </p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Built with care for people in need</span>
            <Heart className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500 inline ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};
