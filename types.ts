
export enum BrandArea {
  PERFORMANCE = 'performance',
  CREATIVE = 'creative',
  EVANS = 'evans'
}

export interface LeadData {
  name: string;
  email: string;
  role: string;
  problem: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'performance' | 'creative' | 'mindset';
  price: string;
  description: string;
  image: string;
  features: string[];
}
