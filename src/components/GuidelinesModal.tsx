import React from 'react';
import { X, HeartHandshake, CheckCircle, Sparkles, Scale, Clock, Lock, ShieldAlert } from 'lucide-react';

interface GuidelinesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuidelinesModal: React.FC<GuidelinesModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/65 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full my-6 shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-emerald-50/50 shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-xl font-bold text-slate-900 font-display">
                Community Guidelines / <span className="font-urdu">اصول و ضوابط</span>
              </h2>
              <p className="text-xs text-emerald-800 font-urdu font-medium">
                ہمارے بنیادی اصول: سب کچھ 100 فیصد مفت اور خالص مدد کے لیے
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1 text-slate-700 text-sm">
          {/* Big Pledge Banner */}
          <div className="p-5 bg-emerald-700 text-white rounded-2xl space-y-2 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-200">
              <Sparkles className="w-4 h-4" />
              <span>Core Principle / بنیادی اصول</span>
            </div>
            <div className="text-lg font-bold font-display">
              Strictly 100% Free Forever / تمام اشیاء بالکل مفت ہیں
            </div>
            <p className="text-xs text-emerald-100 leading-relaxed font-urdu">
              یہاں کوئی چیز بیچی نہیں جا سکتی، نہ کوئی فیس یا ڈیلیوری کے پیسے مانگے جا سکتے ہیں۔ اگر کوئی رقم کا مطالبہ کرے تو فوراً آگاہ کریں۔
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Scale className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 font-display text-sm">
                1. Need First / ضرورت مندوں کو ترجیح
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-urdu">
                سامان صرف وہی لیں جس کی آپ کو یا آپ کے خاندان کو حقیقی ضرورت ہو۔ آگے بیچنے کے لیے سامان لینا منع ہے۔
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <CheckCircle className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 font-display text-sm">
                2. Honest Condition / سچائی اور دیانت
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-urdu">
                سامان دیتے وقت اس کی اصل حالت بتائیں۔ اگر کوئی خرابی یا کمی ہو تو سچ سچ بتا دیں تاکہ لینے والے کو پریشانی نہ ہو۔
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 font-display text-sm">
                3. Respect Time / وقت کی پابندی
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-urdu">
                عطیہ کنندہ کے ساتھ طے شدہ وقت پر سامان اٹھائیں۔ اگر تاخیر ہو تو واٹس ایپ یا فون پر پہلے سے بتا دیں۔
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Lock className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 font-display text-sm">
                4. Safe Pickups / حفاظت اور سلامتی
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-urdu">
                دن کی روشنی میں اور محفوظ طریقے سے سامان کا تبادلہ کریں۔ محلے کے پبلک مقامات یا گھر کے بیرونی دروازے کا استعمال کریں۔
              </p>
            </div>
          </div>

          {/* Prohibited items */}
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 text-amber-700" />
              <span>Forbidden Items / ممنوعہ اشیاء</span>
            </div>
            <p className="text-xs text-amber-900/90 leading-relaxed font-urdu">
              ختم المیعاد دوائیں، خراب اشیاء، خطرناک کیمیکلز یا غیر قانونی سامان دینا سختی سے منع ہے۔
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors cursor-pointer"
          >
            I Agree / میں متفق ہوں
          </button>
        </div>
      </div>
    </div>
  );
};
