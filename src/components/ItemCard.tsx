import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  PhoneCall,
  Eye,
  CheckCircle2,
  Package,
  MessageSquare,
  Gift,
} from 'lucide-react';
import { CommunityItem } from '../types';
import { CATEGORY_INFO, CONDITION_INFO, STATUS_INFO, Language } from '../utils/translations';

interface ItemCardProps {
  item: CommunityItem;
  onContact: (item: CommunityItem) => void;
  onViewDetails: (item: CommunityItem) => void;
  language?: Language;
}

export const ItemCard: React.FC<ItemCardProps> = ({
  item,
  onContact,
  onViewDetails,
}) => {
  const [imgError, setImgError] = useState(false);
  const isAvailable = item.status === 'Available';

  const categoryData = CATEGORY_INFO[item.category] || {
    en: item.category,
    ur: item.category,
  };

  const conditionData = CONDITION_INFO[item.condition] || {
    en: item.condition,
    ur: item.condition,
  };

  return (
    <article className="group bg-white rounded-2xl border border-slate-200 hover:border-emerald-600/50 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden">
      {/* Visual Slot */}
      <div
        onClick={() => onViewDetails(item)}
        className="relative aspect-[4/3] bg-slate-100 overflow-hidden cursor-pointer"
      >
        {!imgError ? (
          <img
            src={item.imageUrl}
            alt={item.title}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 to-slate-100 p-6 text-center text-slate-400">
            <Package className="w-10 h-10 text-emerald-600/60 mb-2" />
            <span className="text-xs font-medium text-slate-500">{item.category}</span>
          </div>
        )}

        {/* Big FREE / مفت Badge */}
        <div className="absolute top-3 left-3 bg-emerald-700/95 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-lg shadow-md flex items-center gap-1.5">
          <Gift className="w-3.5 h-3.5 text-emerald-200" />
          <span>FREE / مفت</span>
        </div>

        {/* Status overlay if reserved or claimed */}
        {!isAvailable && (
          <div className="absolute inset-0 bg-slate-950/65 backdrop-blur-[2px] flex items-center justify-center p-4">
            <div className="bg-white/95 text-slate-900 text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl shadow-lg flex flex-col items-center gap-0.5 text-center">
              <div className="flex items-center gap-1.5 text-amber-700">
                <CheckCircle2 className="w-4 h-4" />
                <span>{item.status}</span>
              </div>
              <span className="text-[11px] font-urdu text-slate-700">
                {STATUS_INFO[item.status]?.ur || 'دیا جا چکا ہے'}
              </span>
            </div>
          </div>
        )}

        {item.urgentNeed && isAvailable && (
          <div className="absolute top-3 right-3 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1">
            <span>Essential / اشد ضرورت</span>
          </div>
        )}
      </div>

      {/* Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          {/* Category & Condition unboxed metadata */}
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
              <span>{categoryData.en}</span>
              <span>·</span>
              <span className="font-urdu text-[13px]">{categoryData.ur}</span>
            </div>

            <span className="text-slate-400 text-[11px]">
              {item.datePostedUr ? `${item.datePostedUr}` : item.datePosted}
            </span>
          </div>

          {/* Bilingual Title */}
          <div
            onClick={() => onViewDetails(item)}
            className="cursor-pointer space-y-0.5 group-hover:text-emerald-700 transition-colors"
          >
            <h3 className="text-base font-bold text-slate-900 font-display line-clamp-1">
              {item.title}
            </h3>
            {item.titleUr && (
              <div className="text-sm font-urdu font-semibold text-emerald-900 line-clamp-1">
                {item.titleUr}
              </div>
            )}
          </div>

          {/* Condition Tag */}
          <div className="inline-flex items-center gap-1.5 text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
            <span className="font-medium">{conditionData.en}</span>
            <span className="text-slate-300">|</span>
            <span className="font-urdu font-medium text-slate-700">{conditionData.ur}</span>
          </div>

          {/* Location */}
          <div className="flex items-start gap-1.5 text-xs text-slate-600 pt-0.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="flex items-center gap-1 truncate">
              <span>{item.location}</span>
              {item.locationUr && (
                <>
                  <span className="text-slate-300">·</span>
                  <span className="font-urdu text-[11px] text-emerald-900 truncate">
                    {item.locationUr}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
          {/* Prominent Bilingual Contact Button */}
          <button
            onClick={() => onContact(item)}
            disabled={!isAvailable}
            className={`flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              isAvailable
                ? 'bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
          >
            <PhoneCall className="w-4 h-4 shrink-0" />
            <div className="flex items-center gap-1.5">
              <span>Contact Owner</span>
              <span className="opacity-75">/</span>
              <span className="font-urdu text-xs font-medium">رابطہ کریں</span>
            </div>
          </button>

          <button
            onClick={() => onViewDetails(item)}
            className="p-2.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer shrink-0"
            title="View Details / تفصیل دیکھیں"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
};
