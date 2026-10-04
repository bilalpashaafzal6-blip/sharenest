import React, { useState } from 'react';
import {
  X,
  MapPin,
  Clock,
  PhoneCall,
  CheckCircle2,
  Share2,
  Check,
  ShieldCheck,
  Gift,
} from 'lucide-react';
import { CommunityItem } from '../types';
import { CATEGORY_INFO, CONDITION_INFO, STATUS_INFO } from '../utils/translations';

interface ItemDetailModalProps {
  item: CommunityItem | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: (item: CommunityItem) => void;
  onToggleStatus: (item: CommunityItem) => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({
  item,
  isOpen,
  onClose,
  onOpenContact,
  onToggleStatus,
}) => {
  const [copiedShare, setCopiedShare] = useState(false);

  if (!isOpen || !item) return null;

  const handleShare = () => {
    const text = `ShareNest Free Giveaway: "${item.title}" (${item.titleUr || ''}) in ${item.location}`;
    navigator.clipboard.writeText(text);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const isAvailable = item.status === 'Available';
  const categoryData = CATEGORY_INFO[item.category] || { en: item.category, ur: item.category };
  const conditionData = CONDITION_INFO[item.condition] || { en: item.condition, ur: item.condition };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/65 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full my-6 shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
            <span className="text-xs font-bold text-emerald-950 uppercase tracking-wider">
              Free Item Details / سامان کی تفصیل
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1">
          {/* Main Visual */}
          <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
              <Gift className="w-4 h-4 text-emerald-200" />
              <span>100% FREE / بالکل مفت</span>
            </div>

            {!isAvailable && (
              <div className="absolute inset-0 bg-slate-950/65 backdrop-blur-[2px] flex items-center justify-center">
                <span className="bg-white text-slate-900 text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  <span>{item.status} / {STATUS_INFO[item.status]?.ur}</span>
                </span>
              </div>
            )}
          </div>

          {/* Details body */}
          <div className="p-6 space-y-6">
            {/* Metadata strip */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <span className="text-emerald-800 font-bold uppercase tracking-wider">
                  {categoryData.en} ({categoryData.ur})
                </span>
                <span aria-hidden="true">·</span>
                <span>{conditionData.en} ({conditionData.ur})</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Clock className="w-3 h-3" />
                  <span>{item.datePosted}</span>
                </span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 font-display">
                {item.title}
              </h2>
              {item.titleUr && (
                <div className="text-xl font-urdu font-bold text-emerald-900">
                  {item.titleUr}
                </div>
              )}

              <div className="flex items-center gap-1.5 text-sm text-slate-600">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{item.location}</span>
                {item.locationUr && (
                  <span className="font-urdu text-emerald-800 text-xs">
                    ({item.locationUr})
                  </span>
                )}
              </div>
            </div>

            {/* Description (English and Urdu) */}
            <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Description / سامان کی تفصیل
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {item.description}
              </p>
              {item.descriptionUr && (
                <p className="text-sm font-urdu font-medium text-emerald-950 leading-relaxed pt-2 border-t border-slate-200">
                  {item.descriptionUr}
                </p>
              )}
            </div>

            {/* Pickup details */}
            {(item.pickupNotes || item.pickupNotesUr) && (
              <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200/70 space-y-1">
                <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  <span>Pickup Instructions / وصولی کی ہدایات</span>
                </div>
                {item.pickupNotes && (
                  <p className="text-xs text-amber-900 leading-relaxed">
                    {item.pickupNotes}
                  </p>
                )}
                {item.pickupNotesUr && (
                  <p className="text-xs font-urdu font-semibold text-amber-950 leading-relaxed">
                    {item.pickupNotesUr}
                  </p>
                )}
              </div>
            )}

            {/* Donor info box */}
            <div className="p-4 bg-white rounded-2xl border border-slate-200 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-500 font-medium">Offered with kindness by:</div>
                <div className="text-base font-bold text-slate-900 font-display">
                  {item.donorName}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                >
                  {copiedShare ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied / کاپی ہو گیا</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share / لنک بھیجیں</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Community Free Notice */}
            <div className="flex items-start gap-2.5 p-3.5 bg-emerald-50/80 rounded-xl border border-emerald-900/10 text-xs text-emerald-900">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <strong>ShareNest Safety Rule:</strong> All items are completely free. Never transfer money, pay deposits, or wire shipping charges.
                <span className="font-urdu block mt-0.5 font-semibold text-emerald-950">
                  یہ سامان بالکل مفت ہے۔ کسی کو کوئی رقم یا ایڈوانس نہ دیں۔
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer sticky actions */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50/80 flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={() => onToggleStatus(item)}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline cursor-pointer"
          >
            {isAvailable ? 'Mark as Claimed / لے لیا گیا' : 'Mark as Available / دوبارہ دستیاب'}
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 rounded-xl transition-colors cursor-pointer"
            >
              Close / بند کریں
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenContact(item);
              }}
              disabled={!isAvailable}
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer ${
                isAvailable
                  ? 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-sm'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Owner / رابطہ کریں</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
