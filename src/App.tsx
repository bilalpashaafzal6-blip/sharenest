/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FilterBar } from './components/FilterBar';
import { ItemGrid } from './components/ItemGrid';
import { DonateModal } from './components/DonateModal';
import { ContactModal } from './components/ContactModal';
import { ItemDetailModal } from './components/ItemDetailModal';
import { GuidelinesModal } from './components/GuidelinesModal';
import { HowItWorks } from './components/HowItWorks';
import { CommunityImpact } from './components/CommunityImpact';
import { Footer } from './components/Footer';
import { INITIAL_ITEMS } from './data/initialItems';
import { CommunityItem, FilterState } from './types';
import { Language } from './utils/translations';
import { Check, Info, HeartHandshake } from 'lucide-react';

const STORAGE_KEY = 'sharenest_community_items_v2';
const LANG_STORAGE_KEY = 'sharenest_lang_pref';

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const savedLang = localStorage.getItem(LANG_STORAGE_KEY);
      if (savedLang === 'ur' || savedLang === 'en' || savedLang === 'both') {
        return savedLang;
      }
    } catch {
      // Fallback
    }
    return 'both';
  });

  const [items, setItems] = useState<CommunityItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return INITIAL_ITEMS;
  });

  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    category: 'All',
    condition: 'All',
    status: 'All',
    sortBy: 'newest',
  });

  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [isGuidelinesOpen, setIsGuidelinesOpen] = useState(false);
  const [selectedContactItem, setSelectedContactItem] = useState<CommunityItem | null>(null);
  const [selectedDetailItem, setSelectedDetailItem] = useState<CommunityItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync Language
  useEffect(() => {
    try {
      localStorage.setItem(LANG_STORAGE_KEY, language);
      if (language === 'ur') {
        document.documentElement.setAttribute('lang', 'ur');
      } else {
        document.documentElement.setAttribute('lang', 'en');
      }
    } catch (e) {
      console.warn('Lang save error', e);
    }
  }, [language]);

  // Sync items to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  }, [items]);

  // Show Toast
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 3500);
  };

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    items.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, [items]);

  const totalAvailableCount = useMemo(() => {
    return items.filter((i) => i.status === 'Available').length;
  }, [items]);

  // Filtered & Sorted items
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Category filter
      if (filters.category !== 'All' && item.category !== filters.category) {
        return false;
      }

      // Condition filter
      if (filters.condition !== 'All' && item.condition !== filters.condition) {
        return false;
      }

      // Status filter
      if (filters.status === 'Available' && item.status !== 'Available') {
        return false;
      }

      // Search query filter (title, description, location)
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase().trim();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesTitleUr = item.titleUr?.toLowerCase().includes(query) ?? false;
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesDescUr = item.descriptionUr?.toLowerCase().includes(query) ?? false;
        const matchesLoc = item.location.toLowerCase().includes(query);
        const matchesLocUr = item.locationUr?.toLowerCase().includes(query) ?? false;
        const matchesCat = item.category.toLowerCase().includes(query);

        if (
          !matchesTitle &&
          !matchesTitleUr &&
          !matchesDesc &&
          !matchesDescUr &&
          !matchesLoc &&
          !matchesLocUr &&
          !matchesCat
        ) {
          return false;
        }
      }

      return true;
    });
  }, [items, filters]);

  // Handle New Donation Submit
  const handleDonateSubmit = (newItem: CommunityItem) => {
    setItems((prev) => [newItem, ...prev]);
    showToast(`"${newItem.title}" has been published! / سامان پوسٹ ہو گیا!`);

    setFilters({
      searchQuery: '',
      category: 'All',
      condition: 'All',
      status: 'All',
      sortBy: 'newest',
    });

    setTimeout(() => {
      const el = document.getElementById('items-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  // Toggle item status (Available <-> Claimed)
  const handleToggleStatus = (targetItem: CommunityItem) => {
    const newStatus = targetItem.status === 'Available' ? 'Claimed' : 'Available';
    setItems((prev) =>
      prev.map((item) => (item.id === targetItem.id ? { ...item, status: newStatus } : item))
    );

    if (selectedDetailItem && selectedDetailItem.id === targetItem.id) {
      setSelectedDetailItem({ ...selectedDetailItem, status: newStatus });
    }

    showToast(
      newStatus === 'Claimed'
        ? `Marked as Claimed / لے لیا گیا`
        : `Marked as Available / دوبارہ دستیاب`
    );
  };

  const handleMarkReserved = (targetItem: CommunityItem) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === targetItem.id ? { ...item, status: 'Reserved' } : item
      )
    );
    showToast(`Marked as Reserved / مخصوص کر دیا گیا`);
  };

  const handleBrowseClick = () => {
    const el = document.getElementById('items-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetFilters = () => {
    setFilters({
      searchQuery: '',
      category: 'All',
      condition: 'All',
      status: 'All',
      sortBy: 'newest',
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF9] text-slate-800 antialiased selection:bg-emerald-100 selection:text-emerald-950">
      {/* Strict Free Top Notification Bar with Urdu */}
      <div className="bg-emerald-900 text-emerald-100 px-4 py-2 text-center text-xs font-medium border-b border-emerald-950/40">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <Info className="w-4 h-4 text-emerald-300 shrink-0 inline" />
          <span>
            Every giveaway is strictly <strong>100% Free</strong>. No cash or trade demands.
          </span>
          <span className="hidden sm:inline text-emerald-400">·</span>
          <span className="font-urdu font-bold text-white text-[13px]">
            تمام سامان 100٪ مفت ہے — کوئی فیس یا پیسے طلب کرنا منع ہے
          </span>
          <button
            onClick={() => setIsGuidelinesOpen(true)}
            className="underline text-emerald-200 hover:text-white font-semibold cursor-pointer ml-1"
          >
            Guidelines / اصول پڑھیں
          </button>
        </div>
      </div>

      {/* Top Bar with Language Selector */}
      <Navbar
        onOpenDonate={() => setIsDonateOpen(true)}
        onOpenGuidelines={() => setIsGuidelinesOpen(true)}
        language={language}
        onToggleLanguage={setLanguage}
        totalAvailableCount={totalAvailableCount}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenDonate={() => setIsDonateOpen(true)}
          onBrowseClick={handleBrowseClick}
          totalItemsCount={items.length}
          language={language}
        />

        {/* Listings Section Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          {/* Visual Category & Filter Bar */}
          <FilterBar
            filters={filters}
            onFilterChange={setFilters}
            categoryCounts={categoryCounts}
            totalCount={items.length}
            language={language}
          />

          {/* Item Grid */}
          <ItemGrid
            items={filteredItems}
            totalAvailableCount={totalAvailableCount}
            onContact={(item) => setSelectedContactItem(item)}
            onViewDetails={(item) => setSelectedDetailItem(item)}
            onOpenDonate={() => setIsDonateOpen(true)}
            onResetFilters={handleResetFilters}
            language={language}
          />
        </div>

        {/* How It Works Educational Section */}
        <HowItWorks
          onOpenDonate={() => setIsDonateOpen(true)}
          onBrowseClick={handleBrowseClick}
        />

        {/* Community Impact & Testimonials */}
        <CommunityImpact />
      </main>

      {/* Footer */}
      <Footer
        onOpenGuidelines={() => setIsGuidelinesOpen(true)}
        onOpenDonate={() => setIsDonateOpen(true)}
        onBrowseClick={handleBrowseClick}
      />

      {/* Modals */}
      <DonateModal
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
        onSubmit={handleDonateSubmit}
      />

      <ContactModal
        item={selectedContactItem}
        isOpen={!!selectedContactItem}
        onClose={() => setSelectedContactItem(null)}
        onMarkReserved={handleMarkReserved}
      />

      <ItemDetailModal
        item={selectedDetailItem}
        isOpen={!!selectedDetailItem}
        onClose={() => setSelectedDetailItem(null)}
        onOpenContact={(item) => setSelectedContactItem(item)}
        onToggleStatus={handleToggleStatus}
      />

      <GuidelinesModal
        isOpen={isGuidelinesOpen}
        onClose={() => setIsGuidelinesOpen(false)}
      />

      {/* Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-xl border border-slate-700 flex items-center gap-2.5 text-xs sm:text-sm animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
