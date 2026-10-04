import React, { useState } from 'react';
import {
  X,
  Phone,
  MessageSquare,
  Copy,
  Check,
  ShieldCheck,
  MapPin,
  ExternalLink,
  Gift,
} from 'lucide-react';
import { CommunityItem } from '../types';

interface ContactModalProps {
  item: CommunityItem | null;
  isOpen: boolean;
  onClose: () => void;
  onMarkReserved: (item: CommunityItem) => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  item,
  isOpen,
  onClose,
  onMarkReserved,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !item) return null;

  // Clean WhatsApp number for link
  const rawWhatsApp = item.donorWhatsApp.replace(/[^\d]/g, '');
  const suggestedMessage = `السلام علیکم ${item.donorName}! میں نے ShareNest پر آپ کا مفت دیا جانے والا سامان "${item.titleUr || item.title}" دیکھا ہے۔ کیا یہ ابھی دستیاب ہے؟ شکریہ!\n\n(Hello ${item.donorName}, I saw your free giveaway for "${item.title}" on ShareNest. Is it still available for pickup?)`;

  const whatsappUrl = `https://wa.me/${rawWhatsApp}?text=${encodeURIComponent(
    suggestedMessage
  )}`;

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(suggestedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/65 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-lg w-full my-6 shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-emerald-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center">
              <Gift className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                Contact Donor / رابطہ کریں
              </div>
              <div className="text-[11px] text-slate-500 font-urdu">
                سامان حاصل کرنے کے لیے مالک سے رابطہ
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Item preview strip */}
        <div className="p-5 border-b border-slate-100 flex items-center gap-4 bg-slate-50/30">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-16 h-16 rounded-2xl object-cover bg-slate-100 border border-slate-200 shrink-0"
          />
          <div className="min-w-0 flex-1">
            <span className="text-[10px] font-bold text-white bg-emerald-700 px-2 py-0.5 rounded-md">
              100% FREE / مفت
            </span>
            <h3 className="text-sm font-bold text-slate-900 truncate font-display mt-1">
              {item.title}
            </h3>
            {item.titleUr && (
              <div className="text-xs font-urdu font-semibold text-emerald-900 truncate">
                {item.titleUr}
              </div>
            )}
            <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="truncate">{item.location}</span>
            </div>
          </div>
        </div>

        {/* Contact Actions */}
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-slate-500 font-medium">Offered with kindness by:</div>
              <div className="text-base font-bold text-slate-900 font-display">
                {item.donorName}
              </div>
            </div>
            <div className="text-right">
              <div className="text-[11px] text-slate-400 font-urdu">عطیہ کنندہ</div>
              <div className="text-xs font-bold text-emerald-800 font-urdu">{item.donorName}</div>
            </div>
          </div>

          {/* Large Action Buttons with Clear Icons */}
          <div className="space-y-3">
            {/* WhatsApp Contact */}
            {item.donorWhatsApp && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-2xl font-bold shadow-md transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-sm">Contact on WhatsApp</span>
                    <span className="text-xs font-urdu font-medium text-emerald-100">
                      واٹس ایپ پر رابطہ کریں
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs opacity-90 font-mono">
                  <span>{item.donorWhatsApp}</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </div>
              </a>
            )}

            {/* Direct Phone Call */}
            {item.donorPhone && (
              <a
                href={`tel:${item.donorPhone.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-between p-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold shadow-sm transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-sm">Call on Phone</span>
                    <span className="text-xs font-urdu font-medium text-slate-300">
                      فون کال کریں
                    </span>
                  </div>
                </div>
                <span className="text-xs text-slate-300 font-mono">{item.donorPhone}</span>
              </a>
            )}
          </div>

          {/* Polite suggested message with 1-click copy */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
              <span>Suggested inquiry message / تیار شدہ پیغام:</span>
              <button
                onClick={handleCopyMessage}
                className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-bold cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied / کاپی ہو گیا</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Message / کاپی کریں</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-xs text-slate-800 font-urdu bg-white p-2.5 rounded-xl border border-slate-200 leading-relaxed">
              "السلام علیکم {item.donorName}! میں نے ShareNest پر آپ کا مفت دیا جانے والا سامان دیکھا ہے۔ کیا یہ ابھی دستیاب ہے؟ شکریہ!"
            </p>
          </div>

          {/* Safety Warning in Urdu and English */}
          <div className="flex items-start gap-2.5 p-3 bg-emerald-50/70 rounded-xl border border-emerald-900/10 text-xs text-emerald-950">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div className="leading-snug">
              <strong>100% Free Guarantee:</strong> Never pay any cash, delivery fee, or deposit.
              <span className="font-urdu block mt-0.5 text-emerald-900">
                یہ سامان 100٪ مفت ہے۔ کسی کو کوئی رقم، ڈیلیوری فیس یا ایڈوانس نہ دیں۔
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          {item.status === 'Available' ? (
            <button
              onClick={() => {
                onMarkReserved(item);
                onClose();
              }}
              className="text-xs font-medium text-slate-600 hover:text-slate-900 underline cursor-pointer"
            >
              Mark as Reserved / لے لیا گیا ہے
            </button>
          ) : (
            <span className="text-xs text-amber-700 font-bold">
              Currently {item.status}
            </span>
          )}

          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
          >
            Close / بند کریں
          </button>
        </div>
      </div>
    </div>
  );
};
