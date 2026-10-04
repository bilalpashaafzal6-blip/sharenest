import React from 'react';
import { ItemCard } from './ItemCard';
import { CommunityItem } from '../types';
import { Inbox, Plus } from 'lucide-react';
import { Language } from '../utils/translations';

interface ItemGridProps {
  items: CommunityItem[];
  totalAvailableCount: number;
  onContact: (item: CommunityItem) => void;
  onViewDetails: (item: CommunityItem) => void;
  onOpenDonate: () => void;
  onResetFilters: () => void;
  language?: Language;
}

export const ItemGrid: React.FC<ItemGridProps> = ({
  items,
  totalAvailableCount,
  onContact,
  onViewDetails,
  onOpenDonate,
  onResetFilters,
}) => {
  return (
    <section id="items-section" className="scroll-mt-20 space-y-5">
      {/* Section Sub-Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-slate-200/80">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
            <span>Community Giveaways</span>
            <span>·</span>
            <span className="font-urdu text-[13px]">مفت عوامی سامان</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
            Explore Free Donated Items{' '}
            <span className="text-emerald-800 font-urdu text-xl sm:text-2xl block sm:inline font-semibold">
              / ضرورت مندوں کے لیے مفت سامان
            </span>
          </h2>
        </div>

        <div className="text-xs sm:text-sm text-slate-600 font-medium">
          Showing <span className="font-bold text-slate-900 tabular-nums">{items.length}</span>{' '}
          items (
          <span className="text-emerald-700 font-bold tabular-nums">{totalAvailableCount}</span>{' '}
          available / <span className="font-urdu text-emerald-800 font-bold">دستیاب</span>)
        </div>
      </div>

      {/* Grid or Empty State */}
      {items.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              onContact={onContact}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border-2 border-dashed border-slate-300 p-10 sm:p-14 text-center max-w-xl mx-auto space-y-4 my-8">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Inbox className="w-8 h-8" />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-lg font-bold text-slate-900 font-display">
              No matching free items found
            </h3>
            <div className="text-base font-urdu font-bold text-emerald-900">
              اس کیٹیگری میں فی الحال کوئی سامان نہیں ملا
            </div>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              Try choosing another category or clear your search to see all available items.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              onClick={onResetFilters}
              className="px-4 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
            >
              Clear All Filters / سب دیکھیں
            </button>
            <button
              onClick={onOpenDonate}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors shadow-xs cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Donate an Item / سامان عطیہ کریں</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
