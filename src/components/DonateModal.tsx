import React, { useState, useRef } from 'react';
import {
  X,
  Upload,
  CheckCircle,
  AlertCircle,
  Gift,
  Shirt,
  Armchair,
  BookOpen,
  Laptop,
  Utensils,
  Baby,
  HeartPulse,
  Package,
} from 'lucide-react';
import { CommunityItem, ItemCategory, ItemCondition } from '../types';

import defaultBikeImg from '../assets/images/item_used_bicycle_1791095678733.jpg';
import defaultBooksImg from '../assets/images/item_school_books_1791095692460.jpg';
import defaultDeskImg from '../assets/images/item_wooden_desk_1791095707785.jpg';
import defaultCoatImg from '../assets/images/item_winter_coat_1791095719647.jpg';
import defaultMicrowaveImg from '../assets/images/item_microwave_1791095774243.jpg';
import defaultStrollerImg from '../assets/images/item_stroller_1791095787071.jpg';
import defaultChromebookImg from '../assets/images/item_chromebook_1791095798737.jpg';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (item: CommunityItem) => void;
}

const CATEGORIES_WITH_ICONS: {
  category: ItemCategory;
  en: string;
  ur: string;
  icon: React.ComponentType<{ className?: string }>;
  sampleImg: string;
}[] = [
  { category: 'Clothes', en: 'Clothes', ur: 'کپڑے', icon: Shirt, sampleImg: defaultCoatImg },
  { category: 'Furniture', en: 'Furniture', ur: 'فرنیچر و میز', icon: Armchair, sampleImg: defaultDeskImg },
  { category: 'Books', en: 'Books', ur: 'کتابیں و اسکول', icon: BookOpen, sampleImg: defaultBooksImg },
  { category: 'Electronics', en: 'Electronics', ur: 'برقی سامان', icon: Laptop, sampleImg: defaultChromebookImg },
  { category: 'Kitchen & Home', en: 'Kitchen', ur: 'باورچی خانہ', icon: Utensils, sampleImg: defaultMicrowaveImg },
  { category: 'Toys & Baby', en: 'Baby & Kids', ur: 'بچوں کا سامان', icon: Baby, sampleImg: defaultStrollerImg },
  { category: 'Medical & Mobility', en: 'Medical Care', ur: 'طبی سامان', icon: HeartPulse, sampleImg: defaultDeskImg },
  { category: 'Other', en: 'Cycles/Other', ur: 'سائیکل و دیگر', icon: Package, sampleImg: defaultBikeImg },
];

export const DonateModal: React.FC<DonateModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<ItemCategory>('Furniture');
  const [condition, setCondition] = useState<ItemCondition>('Gently Used');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [donorWhatsApp, setDonorWhatsApp] = useState('');
  const [pickupNotes, setPickupNotes] = useState('Porch pickup / گھر کے باہر سے اٹھا سکتے ہیں');
  const [urgentNeed, setUrgentNeed] = useState(false);
  const [pledgeAccepted, setPledgeAccepted] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>(defaultDeskImg);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please choose a valid image / تصویر کا درست فارمیٹ منتخب کریں');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('Image is too large (max 5MB) / تصویر کا سائز 5MB سے کم ہونا چاہیے');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      if (typeof event.target?.result === 'string') {
        setPreviewImage(event.target.result);
        setError(null);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleCategorySelect = (itemCat: ItemCategory) => {
    setCategory(itemCat);
    const match = CATEGORIES_WITH_ICONS.find((p) => p.category === itemCat);
    if (match && !previewImage.startsWith('data:image')) {
      setPreviewImage(match.sampleImg);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setError('Please provide a title / برائے مہربانی سامان کا نام درج کریں');
      return;
    }
    if (!location.trim()) {
      setError('Please provide a location / برائے مہربانی اپنا علاقہ یا شہر بتائیں');
      return;
    }
    if (!donorName.trim()) {
      setError('Please enter your name / برائے مہربانی اپنا نام لکھیں');
      return;
    }
    if (!donorPhone.trim() && !donorWhatsApp.trim()) {
      setError('Please provide WhatsApp or Phone / واٹس ایپ یا فون نمبر دینا ضروری ہے');
      return;
    }
    if (!pledgeAccepted) {
      setError('Please confirm that this item is 100% free / اقرار کریں کہ یہ سامان مفت ہے');
      return;
    }

    const newItem: CommunityItem = {
      id: `giveaway-${Date.now()}`,
      title: title.trim(),
      description: description.trim() || 'Good reusable item offered for free to anyone in need / ضرورت مند کے لیے مفت تحفہ',
      category,
      condition,
      location: location.trim(),
      donorName: donorName.trim(),
      donorPhone: donorPhone.trim() || donorWhatsApp.trim(),
      donorWhatsApp: donorWhatsApp.trim() || donorPhone.trim(),
      preferredContact: donorWhatsApp && donorPhone ? 'both' : donorWhatsApp ? 'whatsapp' : 'phone',
      imageUrl: previewImage,
      datePosted: 'Just now',
      datePostedUr: 'ابھی پوسٹ کیا گیا',
      status: 'Available',
      urgentNeed,
      pickupNotes: pickupNotes.trim(),
      isUserCreated: true,
    };

    onSubmit(newItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/65 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full my-6 shadow-2xl border border-slate-200 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-emerald-50/50 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                Donate Item / <span className="font-urdu font-bold text-emerald-800">مفت سامان عطیہ کریں</span>
              </h2>
              <p className="text-xs text-slate-500 font-urdu">
                جو چیز آپ کے کام کی نہیں، کسی ضرورت مند کے لیے کارآمد ہو سکتی ہے
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto p-5 sm:p-6 space-y-6 flex-1">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* 1. Visual Category Grid - Highly visual for low-literacy users */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800 uppercase tracking-wider">
              <span>1. Select Category / سامان کی قسم چنیں *</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {CATEGORIES_WITH_ICONS.map((cat) => {
                const Icon = cat.icon;
                const isSelected = category === cat.category;
                return (
                  <button
                    key={cat.category}
                    type="button"
                    onClick={() => handleCategorySelect(cat.category)}
                    className={`p-2.5 rounded-xl border flex items-center gap-2.5 text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-700 text-white border-emerald-800 shadow-sm'
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1 leading-tight">
                      <div className="text-xs font-bold truncate">{cat.en}</div>
                      <div className={`text-[11px] font-urdu truncate ${isSelected ? 'text-emerald-100' : 'text-emerald-800 font-semibold'}`}>
                        {cat.ur}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Photo Section with Large Upload Button */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
              2. Item Photo / سامان کی تصویر لگائیں
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <div className="sm:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={previewImage}
                  alt="Item preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-slate-900/80 text-white text-[10px] font-medium px-2 py-0.5 rounded">
                  Photo Preview / تصویر
                </div>
              </div>

              <div className="sm:col-span-7 space-y-2.5">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-4 text-xs font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-300 rounded-xl transition-colors cursor-pointer"
                >
                  <Upload className="w-5 h-5 text-emerald-700" />
                  <div className="flex flex-col text-left">
                    <span>Upload Photo from Camera/Mobile</span>
                    <span className="text-[11px] font-urdu text-emerald-800 font-medium">
                      موبائل یا کمپیوٹر سے تصویر منتخب کریں
                    </span>
                  </div>
                </button>
                <p className="text-[11px] text-slate-500 font-urdu leading-snug">
                  سامان کی صاف تصویر لگانے سے لوگ آسانی سے پہچان سکیں گے۔
                </p>
              </div>
            </div>
          </div>

          {/* 3. Title & Condition */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                Item Title / سامان کا نام *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Used Bicycle / سائیکل، اسکول کتب"
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600 rounded-xl outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                Condition / سامان کی حالت *
              </label>
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value as ItemCondition)}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600 outline-none rounded-xl cursor-pointer"
              >
                <option value="Like New">Like New / بالکل نیا جیسا</option>
                <option value="Gently Used">Gently Used / تھوڑا استعمال شدہ</option>
                <option value="Good Condition">Good Condition / اچھی حالت میں</option>
                <option value="Fair / Functional">Fair / چلنے کے قابل</option>
              </select>
            </div>
          </div>

          {/* 4. Location & Description */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                Pickup Location / علاقہ یا محلہ *
              </label>
              <input
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Model Town / ماڈل ٹاؤن، گلبرگ"
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600 rounded-xl outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                Pickup Notes / سامان اٹھانے کی ہدایات
              </label>
              <input
                type="text"
                value={pickupNotes}
                onChange={(e) => setPickupNotes(e.target.value)}
                placeholder="e.g. Call before coming / آنے سے پہلے فون کریں"
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600 rounded-xl outline-none"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
              Description / مزید تفصیل (سائز، رنگ وغیرہ)
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Give any details about the size, color or helpful info / سامان کے بارے میں چند الفاظ لکھیں..."
              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600 rounded-xl outline-none resize-none"
            />
          </div>

          {/* 5. Contact Info Box */}
          <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-900/10 space-y-3">
            <div className="text-xs font-bold text-emerald-950 uppercase tracking-wider">
              Contact Details / آپ سے رابطے کا طریقہ *
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Your Name / آپ کا نام *
                </label>
                <input
                  type="text"
                  required
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="e.g. Ali Raza / علی رضا"
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-200 focus:border-emerald-600 rounded-lg outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  WhatsApp / واٹس ایپ نمبر *
                </label>
                <input
                  type="tel"
                  value={donorWhatsApp}
                  onChange={(e) => setDonorWhatsApp(e.target.value)}
                  placeholder="+92 300 1234567"
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-200 focus:border-emerald-600 rounded-lg outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Phone / عام فون کال
                </label>
                <input
                  type="tel"
                  value={donorPhone}
                  onChange={(e) => setDonorPhone(e.target.value)}
                  placeholder="+92 321 7654321"
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-200 focus:border-emerald-600 rounded-lg outline-none"
                />
              </div>
            </div>
          </div>

          {/* Pledge Agreement Checkbox */}
          <label className="flex items-start gap-3 p-3.5 bg-emerald-50 rounded-2xl border-2 border-emerald-200 cursor-pointer select-none">
            <input
              type="checkbox"
              required
              checked={pledgeAccepted}
              onChange={(e) => setPledgeAccepted(e.target.checked)}
              className="mt-1 w-4 h-4 rounded text-emerald-700 focus:ring-emerald-500 cursor-pointer"
            />
            <div className="text-xs text-slate-800">
              <strong className="text-emerald-900 block font-bold">
                100% Free Pledge / حلف نامہ: یہ سامان بالکل مفت ہے
              </strong>
              <span className="text-[11px] font-urdu text-emerald-950 block mt-0.5">
                میں اقرار کرتا ہوں کہ یہ سامان ضرورت مند کے لیے بالکل مفت ہے۔ میں کوئی قیمت، ایڈوانس یا پیسے طلب نہیں کروں گا۔
              </span>
            </div>
          </label>

          {/* Submit Action */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            >
              Cancel / منسوخ
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded-xl shadow-md transition-colors cursor-pointer"
            >
              <CheckCircle className="w-5 h-5" />
              <span>Publish Free Giveaway / مفت سامان پیش کریں</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
