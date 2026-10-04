import React from 'react';
import { Gift, Search, Heart, Sparkles } from 'lucide-react';

interface HowItWorksProps {
  onOpenDonate: () => void;
  onBrowseClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({
  onOpenDonate,
  onBrowseClick,
}) => {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-16 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>3 Simple Steps / آسان 3 مراحل</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
            How ShareNest Works /{' '}
            <span className="font-urdu text-emerald-800 font-bold block sm:inline">
              طریقہ کار
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-urdu leading-relaxed">
            کوئی بھی ان پڑھ یا نیا صارف آسانی سے تصویر دیکھ کر سامان پیش یا حاصل کر سکتا ہے۔
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Step 1 */}
          <div className="bg-[#F8FAF9] rounded-3xl p-6 sm:p-7 border border-slate-200 space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start">
            <div className="w-14 h-14 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-md">
              <Gift className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                Step 1 / پہلا قدم
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display mt-0.5">
                Snap &amp; Post / تصویر لگائیں
              </h3>
            </div>
            <p className="text-xs text-slate-600 font-urdu leading-relaxed text-center sm:text-left">
              جو کپڑے، فرنیچر یا کتابیں فالتو ہوں، موبائل سے ان کی تصویر کھینچیں اور اپنا واٹس ایپ نمبر دے کر پوسٹ کر دیں۔
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#F8FAF9] rounded-3xl p-6 sm:p-7 border border-slate-200 space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start">
            <div className="w-14 h-14 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-md">
              <Search className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                Step 2 / دوسرا قدم
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display mt-0.5">
                Browse &amp; Connect / واٹس ایپ پر رابطہ
              </h3>
            </div>
            <p className="text-xs text-slate-600 font-urdu leading-relaxed text-center sm:text-left">
              ضرورت مند افراد تصویر دیکھ کر سامان پسند کریں گے اور براہ راست واٹس ایپ یا فون پر مالک سے رابطہ کریں گے۔
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#F8FAF9] rounded-3xl p-6 sm:p-7 border border-slate-200 space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start">
            <div className="w-14 h-14 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-md">
              <Heart className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                Step 3 / تیسرا قدم
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display mt-0.5">
                Pick Up Free / مفت وصولی
              </h3>
            </div>
            <p className="text-xs text-slate-600 font-urdu leading-relaxed text-center sm:text-left">
              طے شدہ وقت پر جا کر بغیر کسی معاوضے یا فیس کے سامان حاصل کریں۔ کسی کا بھلا ہوگا اور کچرا بھی کم ہوگا۔
            </p>
          </div>
        </div>

        {/* Action ribbon */}
        <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-emerald-800 to-teal-800 rounded-3xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-display">
              Have extra items at home? /{' '}
              <span className="font-urdu font-bold block sm:inline">گھر میں فالتو سامان ہے؟</span>
            </h3>
            <p className="text-xs text-emerald-100 font-urdu max-w-xl">
              کسی غریب یا طالبعلم کے لیے وہی سامان بہت بڑی نعمت بن سکتا ہے۔ ابھی 2 منٹ میں عطیہ کریں۔
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <button
              onClick={onOpenDonate}
              className="px-5 py-3 bg-white text-emerald-900 hover:bg-emerald-50 rounded-2xl font-bold text-xs shadow-md transition-colors cursor-pointer"
            >
              Donate Item / سامان عطیہ کریں
            </button>
            <button
              onClick={onBrowseClick}
              className="px-4 py-3 bg-emerald-700 hover:bg-emerald-600 text-white rounded-2xl font-bold text-xs border border-white/20 transition-colors cursor-pointer"
            >
              Browse / مفت سامان دیکھیں
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
