import React from 'react';
import { ArrowDown, Gift, Sparkles, ShieldCheck, Leaf, HeartHandshake } from 'lucide-react';
import heroImage from '../assets/images/hero_community_share_1791095663466.jpg';
import { Language } from '../utils/translations';

interface HeroProps {
  onOpenDonate: () => void;
  onBrowseClick: () => void;
  totalItemsCount: number;
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenDonate,
  onBrowseClick,
  totalItemsCount,
  language,
}) => {
  const isUrduOnly = language === 'ur';

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-[#F8FAF9] to-[#F8FAF9] border-b border-emerald-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pt-12 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Core Narrative */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-900 bg-emerald-100/90 px-3.5 py-1.5 rounded-full shadow-xs">
              <Sparkles className="w-4 h-4 text-emerald-700 shrink-0" />
              <div className="flex items-center gap-1.5 flex-wrap">
                <span>100% Strictly Free Always</span>
                <span className="text-emerald-500">·</span>
                <span className="font-urdu font-bold text-[13px]">
                  تمام اشیاء بالکل مفت ہیں — کوئی فیس نہیں
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display leading-[1.18] text-balance">
                Share &amp; Help —{' '}
                <span className="text-emerald-700">Free Community</span> Giveaways
              </h1>
              <div className="text-2xl sm:text-3xl font-bold text-emerald-800 font-urdu leading-normal">
                مفت عوامی تحائف — جو سامان فالتو ہو، ضرورت مندوں کو دیں
              </div>
            </div>

            {/* Subtitle Description */}
            <div className="space-y-2 max-w-2xl">
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                A neighborly giveaway network where you can pass on furniture, clothes, books,
                and appliances you no longer use directly to local individuals and families in need.
                No price tags. No trading. Just pure community kindness.
              </p>
              <p className="text-base text-emerald-900 font-urdu leading-relaxed bg-emerald-50/70 p-3 rounded-xl border border-emerald-900/10">
                اگر آپ کے پاس کپڑے، کتابیں، فرنیچر یا بجلی کا ایسا سامان ہے جو آپ کے استعمال میں نہیں، تو اسے کچرے میں پھینکنے کے بجائے کسی ضرورت مند پڑوسی کو مفت دیں۔
              </p>
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-stretch gap-4 pt-2">
              {/* Donate Item Button */}
              <button
                onClick={onOpenDonate}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 text-base font-bold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded-2xl shadow-lg shadow-emerald-900/15 transition-all transform active:scale-98 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-base font-bold leading-tight">Donate Item</span>
                  <span className="text-sm font-urdu font-medium text-emerald-100 leading-tight">
                    سامان عطیہ کریں
                  </span>
                </div>
              </button>

              {/* Browse Free Items Button */}
              <button
                onClick={onBrowseClick}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border-2 border-slate-300 hover:border-emerald-600 rounded-2xl shadow-xs transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <ArrowDown className="w-5 h-5 text-emerald-700" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-base font-bold leading-tight">Browse Free Items</span>
                  <span className="text-sm font-urdu font-medium text-emerald-800 leading-tight">
                    مفت سامان دیکھیں
                  </span>
                </div>
              </button>
            </div>

            {/* Value Guarantees with Urdu */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/80 max-w-lg">
              <div className="space-y-0.5">
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums font-display">
                  {totalItemsCount}+
                </div>
                <div className="text-xs font-semibold text-slate-700">
                  Items listed
                </div>
                <div className="text-[11px] text-emerald-700 font-urdu">
                  سامان دستیاب
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-700 tabular-nums font-display">
                  $0 / ۰ روپے
                </div>
                <div className="text-xs font-semibold text-slate-700">
                  Completely Free
                </div>
                <div className="text-[11px] text-emerald-700 font-urdu">
                  بالکل مفت
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums font-display">
                  14.5 t
                </div>
                <div className="text-xs font-semibold text-slate-700">
                  Waste Saved
                </div>
                <div className="text-[11px] text-emerald-700 font-urdu">
                  کچرے سے بچاؤ
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-emerald-950/10 bg-slate-100 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src={heroImage}
                alt="Community neighbors sharing giveaway items"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Free Neighborhood Giving · خالص عوامی خدمت</span>
                </div>
                <p className="text-sm font-medium text-slate-100 leading-snug">
                  "I was able to give my old desk to a student starting high school in just 3 hours."
                </p>
                <p className="text-xs text-emerald-200 font-urdu">
                  "میں نے اپنی پرانی پڑھائی کی میز تین گھنٹے میں ایک ضرورت مند طالبعلم کو مفت پہنچا دی۔"
                </p>
              </div>
            </div>

            {/* Visual Icon Badge */}
            <div className="hidden sm:flex absolute -bottom-5 -left-4 bg-white/95 backdrop-blur-sm p-3.5 rounded-2xl border border-slate-200/90 shadow-xl items-center gap-3 max-w-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">
                  Direct Neighbor Hand-off
                </div>
                <div className="text-[11px] text-emerald-800 font-urdu font-medium">
                  براہ راست ایک دوسرے کی مدد
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
