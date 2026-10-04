export type ItemCategory =
  | 'Clothes'
  | 'Furniture'
  | 'Books'
  | 'Electronics'
  | 'Toys & Baby'
  | 'Kitchen & Home'
  | 'Medical & Mobility'
  | 'Other';

export type ItemCondition =
  | 'Like New'
  | 'Gently Used'
  | 'Good Condition'
  | 'Fair / Functional';

export type ItemStatus = 'Available' | 'Reserved' | 'Claimed';

export interface CommunityItem {
  id: string;
  title: string;
  titleUr?: string;
  description: string;
  descriptionUr?: string;
  category: ItemCategory;
  condition: ItemCondition;
  location: string;
  locationUr?: string;
  donorName: string;
  donorPhone: string;
  donorWhatsApp: string;
  preferredContact: 'whatsapp' | 'phone' | 'both';
  imageUrl: string;
  datePosted: string;
  datePostedUr?: string;
  status: ItemStatus;
  urgentNeed?: boolean;
  pickupNotes?: string;
  pickupNotesUr?: string;
  isUserCreated?: boolean;
}

export interface FilterState {
  searchQuery: string;
  category: ItemCategory | 'All';
  condition: ItemCondition | 'All';
  status: 'All' | 'Available' | 'Claimed';
  sortBy: 'newest' | 'urgent' | 'alphabetical';
}
