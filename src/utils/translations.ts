export type Language = 'both' | 'ur' | 'en';

export interface BilingualText {
  en: string;
  ur: string;
}

export const CATEGORY_INFO: Record<
  string,
  { en: string; ur: string; iconName: string; hintUr: string }
> = {
  All: {
    en: 'All Items',
    ur: 'تمام سامان',
    iconName: 'LayoutGrid',
    hintUr: 'سب کچھ دیکھیں',
  },
  Clothes: {
    en: 'Clothes & Apparel',
    ur: 'کپڑے اور ملبوسات',
    iconName: 'Shirt',
    hintUr: 'شلوار قمیض، جیکٹ، جوتے',
  },
  Furniture: {
    en: 'Furniture & Tables',
    ur: 'فرنیچر اور چارپائی/میز',
    iconName: 'Armchair',
    hintUr: 'میز، کرسی، الماری، بیڈ',
  },
  Books: {
    en: 'Books & School',
    ur: 'کتابیں اور اسکول کا سامان',
    iconName: 'BookOpen',
    hintUr: 'درسی کتب، کاپیاں، بستے',
  },
  Electronics: {
    en: 'Electronics & Mobiles',
    ur: 'برقی سامان اور کمپیوٹر',
    iconName: 'Laptop',
    hintUr: 'موبائل، چارجر، استری، پنکھا',
  },
  'Kitchen & Home': {
    en: 'Kitchen & Home',
    ur: 'باورچی خانہ اور برتن',
    iconName: 'Utensils',
    hintUr: 'برتن، مائیکروویو، چولہا',
  },
  'Toys & Baby': {
    en: 'Baby & Kids Gear',
    ur: 'بچوں کا سامان اور جھولا',
    iconName: 'Baby',
    hintUr: 'جھولا، پرام، کھلونے',
  },
  'Medical & Mobility': {
    en: 'Medical & Wheelchair',
    ur: 'طبی سامان اور وہیل چیئر',
    iconName: 'HeartPulse',
    hintUr: 'وہیل چیئر، واکر، بی پی مشین',
  },
  Other: {
    en: 'Cycles & Other',
    ur: 'سائیکل اور دیگر اشیاء',
    iconName: 'Package',
    hintUr: 'سائیکل، اوزار، متفرق',
  },
};

export const CONDITION_INFO: Record<string, { en: string; ur: string }> = {
  All: { en: 'Any Condition', ur: 'تمام حالتیں' },
  'Like New': { en: 'Like New (Perfect)', ur: 'بالکل نیا جیسا' },
  'Gently Used': { en: 'Gently Used (Clean)', ur: 'تھوڑا استعمال شدہ' },
  'Good Condition': { en: 'Good Working Condition', ur: 'اچھی حالت میں' },
  'Fair / Functional': { en: 'Functional / Usable', ur: 'چلنے کے قابل' },
};

export const STATUS_INFO: Record<string, { en: string; ur: string }> = {
  Available: { en: 'Free & Available', ur: 'مفت دستیاب ہے' },
  Reserved: { en: 'Reserved for Pickup', ur: 'کسی کے لیے مخصوص ہے' },
  Claimed: { en: 'Already Given Away', ur: 'دیا جا چکا ہے' },
};
