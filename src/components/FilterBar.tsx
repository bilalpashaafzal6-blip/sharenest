import React from 'react';
import {
  Search,
  X,
  SlidersHorizontal,
  LayoutGrid,
  Shirt,
  Armchair,
  BookOpen,
  Laptop,
  Utensils,
  Baby,
  HeartPulse,
  Package,
} from 'lucide-react';
import { ItemCategory, ItemCondition, FilterState } from '../types';
import { CATEGORY_INFO, CONDITION_INFO, Language } from '../utils/translations';

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  categoryCounts: Record<string, number>;
  totalCount: number;
  language: Language;
}

const CATEGORY_ITEMS: {
  category: ItemCategory | 'All';
  labelEn: string;
  labelUr: string;
  icon: React.ComponentType<{ className?: string }>;
  hintUr: string;
}[] = [
  {
    category: 'All',
    labelEn: 'All Items',
    labelUr: 'تمام سامان',
    icon: LayoutGrid,
    hintUr: 'سب دیکھیں',
  },
  {
    category: 'Clothes',
    labelEn: 'Clothes',
    labelUr: 'کپڑے',
    icon: Shirt,
    hintUr: 'پینٹ، شرٹ، جیکٹ',
  },
  {
    category: 'Furniture',
    labelEn: 'Furniture',
    labelUr: 'فرنیچر و میز',
    icon: Armchair,
    hintUr: 'میز، کرسی، بیڈ',
  },
  {
    category: 'Books',
    labelEn: 'Books',
    labelUr: 'کتابیں',
    icon: BookOpen,
    hintUr: 'اسکول کی کتب، کاپیاں',
  },
  {
    category: 'Electronics',
    labelEn: 'Electronics',
    labelUr: 'برقی سامان',
    icon: Laptop,
    hintUr: 'موبائل، کمپیوٹر، استری',
  },
  {
    category: 'Kitchen & Home',
    labelEn: 'Kitchen',
    labelUr: 'باورچی خانہ',
    icon: Utensils,
    hintUr: 'برتن، اوون، چولہا',
  },
  {
    category: 'Toys & Baby',
    labelEn: 'Baby & Kids',
    labelUr: 'بچوں کا سامان',
    icon: Baby,
    hintUr: 'جھولا، کھلونے، پرام',
  },
  {
    category: 'Medical & Mobility',
    labelEn: 'Medical Care',
    labelUr: 'طبی سامان',
    icon: HeartPulse,
    hintUr: 'وہیل چیئر، واکر',
  },
  {
    category: 'Other',
    labelEn: 'Cycles & Other',
    labelUr: 'سائیکل و دیگر',
    icon: Package,
    hintUr: 'سائیکل، اوزار',
  },
];

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onFilterChange,
  categoryCounts,
  totalCount,
  language,
}) => {
  const hasActiveFilters =
    filters.searchQuery !== '' ||
    filters.category !== 'All' ||
    filters.condition !== 'All' ||
    filters.status !== 'All';

  const handleReset = () => {
    onFilterChange({
      searchQuery: '',
      category: 'All',
      condition: 'All',
      status: 'All',
      sortBy: 'newest',
    });
  };

  return (
    <div className="space-y-4">
      {/* Category Visual Banner - Large Icons for Non-Readers / Low Literacy */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Browse by Visual Category /
            </span>
            <span className="text-xs font-bold text-emerald-800 font-urdu">
              تصویر دیکھ کر سامان منتخب کریں
            </span>
          </div>
          {hasActiveFilters && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset Filters / تمام فلٹر ہٹائیں</span>
            </button>
          )}
        </div>

        {/* Large Visual Cards Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2 sm:gap-2.5">
          {CATEGORY_ITEMS.map((item) => {
            const isSelected = filters.category === item.category;
            const Icon = item.icon;
            const count =
              item.category === 'All'
                ? totalCount
                : categoryCounts[item.category] || 0;

            return (
              <button
                key={item.category}
                onClick={() =>
                  onFilterChange({
                    ...filters,
                    category: item.category,
                  })
                }
                className={`flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-2xl border transition-all text-center cursor-pointer group ${
                  isSelected
                    ? 'bg-emerald-700 text-white border-emerald-800 shadow-md scale-102 ring-2 ring-emerald-500/30'
                    : 'bg-white hover:bg-emerald-50/70 border-slate-200 text-slate-800 shadow-xs'
                }`}
              >
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center mb-1.5 transition-colors ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <span className="text-[11px] font-bold leading-tight line-clamp-1">
                  {item.labelEn}
                </span>

                <span
                  className={`text-[12px] font-urdu font-medium leading-tight mt-0.5 ${
                    isSelected ? 'text-emerald-100' : 'text-emerald-800'
                  }`}
                >
                  {item.labelUr}
                </span>

                <span
                  className={`text-[10px] tabular-nums mt-1 font-semibold ${
                    isSelected ? 'text-emerald-200' : 'text-slate-400'
                  }`}
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Search Bar & Condition Filter */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-3.5 sm:p-4 flex flex-col md:flex-row items-stretch md:items-center gap-3">
        {/* Search input with Urdu & English */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={filters.searchQuery}
            onChange={(e) =>
              onFilterChange({ ...filters, searchQuery: e.target.value })
            }
            placeholder="Search items / سامان تلاش کریں (e.g. bicycle, books, desk, coat, سائیکل، کپڑے)..."
            className="w-full pl-10 pr-9 py-2.5 bg-slate-50 hover:bg-slate-100/70 focus:bg-white text-sm text-slate-800 placeholder-slate-400 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
          />
          {filters.searchQuery && (
            <button
              onClick={() => onFilterChange({ ...filters, searchQuery: '' })}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Condition Selector */}
        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap shrink-0">
          <div className="relative">
            <select
              value={filters.condition}
              onChange={(e) =>
                onFilterChange({
                  ...filters,
                  condition: e.target.value as ItemCondition | 'All',
                })
              }
              className="appearance-none bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 py-2.5 pl-3 pr-7 rounded-xl border border-slate-200 focus:border-emerald-600 outline-none cursor-pointer"
            >
              <option value="All">Any Condition / ہر حالت</option>
              <option value="Like New">Like New / بالکل نیا</option>
              <option value="Gently Used">Gently Used / کم استعمال</option>
              <option value="Good Condition">Good Condition / اچھی حالت</option>
              <option value="Fair / Functional">Fair / قابل استعمال</option>
            </select>
            <SlidersHorizontal className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
          </div>

          {/* Status selector */}
          <div className="flex items-center bg-slate-100 p-0.5 rounded-xl border border-slate-200 text-xs">
            <button
              onClick={() => onFilterChange({ ...filters, status: 'All' })}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                filters.status === 'All'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All / سب
            </button>
            <button
              onClick={() => onFilterChange({ ...filters, status: 'Available' })}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                filters.status === 'Available'
                  ? 'bg-white text-emerald-800 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Free Now / مفت دستیاب
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
