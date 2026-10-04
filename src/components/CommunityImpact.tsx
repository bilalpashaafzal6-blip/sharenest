import React from 'react';
import { Leaf, Users, ShieldCheck, Heart } from 'lucide-react';

export const CommunityImpact: React.FC = () => {
  return (
    <section id="impact-section" className="scroll-mt-20 py-16 bg-[#F8FAF9] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100/90 px-3.5 py-1.5 rounded-full">
            <Heart className="w-4 h-4 text-emerald-700" />
            <span>Community Impact / عوامی خدمت کے ثمرات</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
            The Power of Free Neighborhood Giving{' '}
            <span className="font-urdu text-emerald-800 font-bold block sm:inline">
              / مفت عوامی ہمدردی کا اثر
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-urdu">
            جب ہم ایک دوسرے کا ہاتھ بٹاتے ہیں تو معاشرہ مضبوط ہوتا ہے اور کسی کو خالی ہاتھ نہیں رہنا پڑتا۔
          </p>
        </div>

        {/* 4 Quantitative Impact Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900 font-display tabular-nums">
              920+
            </div>
            <div className="text-xs font-bold text-slate-800">
              Families Assisted / خاندانوں کی مدد
            </div>
            <p className="text-[11px] text-slate-500 font-urdu leading-snug">
              ضرورت مند گھرانوں کو کپڑے، فرنیچر اور کتابیں مفت ملیں۔
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Leaf className="w-6 h-6" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900 font-display tabular-nums">
              14.5 t
            </div>
            <div className="text-xs font-bold text-slate-800">
              Landfill Diverted / کچرے سے بچاؤ
            </div>
            <p className="text-[11px] text-slate-500 font-urdu leading-snug">
              کارآمد سامان ضائع ہونے کے بجائے دوبارہ استعمال میں آیا۔
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900 font-display tabular-nums">
              1,480+
            </div>
            <div className="text-xs font-bold text-slate-800">
              Items Shared / اشیاء کا تبادلہ
            </div>
            <p className="text-[11px] text-slate-500 font-urdu leading-snug">
              پڑوسیوں نے آپس میں محبت سے چیزیں بانٹیں۔
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900 font-display tabular-nums">
              0 روپے / $0
            </div>
            <div className="text-xs font-bold text-slate-800">
              100% Free / ہمیشہ مفت
            </div>
            <p className="text-[11px] text-slate-500 font-urdu leading-snug">
              کوئی کمیشن یا پوشیدہ فیس کبھی نہیں لی جائے گی۔
            </p>
          </div>
        </div>

        {/* Bilingual Community Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-3">
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-urdu">
              "مجھے اسکول کی پڑھائی کے لیے کتابیں اور میز درکار تھی۔ نئی خریدنے کی سکت نہیں تھی، اس پلیٹ فارم کے ذریعے قریبی محلے سے ایک بزرگ استاد نے مفت میز دی جس سے میری پڑھائی جاری رہ سکی۔"
            </p>
            <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
              <div className="w-9 h-9 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-xs">
                DK
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">طالبعلم / Devon Kim</div>
                <div className="text-[11px] text-slate-500 font-urdu">نارتھ ڈسٹرکٹ</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-3">
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-urdu">
              "ہمارے بچے کا جھولا اور گرم کپڑے چھوٹے ہو گئے تھے۔ پھینکنے کے بجائے ہم نے یہاں تصویر لگائی اور ایک ضرورت مند فیملی کو شام تک مفت دے دیا۔ دل کو بہت سکون ملا۔"
            </p>
            <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
              <div className="w-9 h-9 rounded-full bg-teal-700 text-white font-bold flex items-center justify-center text-xs">
                MR
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">مایا اور رافیل / Maya &amp; Rafael</div>
                <div className="text-[11px] text-slate-500 font-urdu">میپل رج</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
