export type MarketingPlatform = 'all' | 'meta' | 'google' | 'tiktok' | 'ecommerce' | 'leadgen';

export interface CampaignCaseStudy {
  id: string;
  title: string;
  clientNiche: string;
  platform: 'meta' | 'google' | 'tiktok' | 'omnichannel';
  platformLabel: string;
  roas: number; // e.g. 5.4
  spend: string; // e.g. "$12,450"
  revenue: string; // e.g. "$67,230"
  ctr: string; // e.g. "3.85%"
  cpa: string; // e.g. "$14.20"
  impressions: string; // e.g. "1.4M"
  duration: string; // e.g. "45 Days"
  badge: string; // e.g. "5.4x ROAS Scaled"
  overview: string;
  strategySteps: string[];
  winningHook: string;
  adCreativeUrl: string;
  metricsComparison: {
    metric: string;
    before: string;
    after: string;
    improvement: string;
  }[];
  humorousHighlight?: string;
}

export type VideoCategory = 'all' | 'shorts' | 'facebook' | 'youtube' | 'short-form' | 'ads' | 'reels' | 'saas';

export interface VideoProject {
  id: string;
  title: string;
  client?: string;
  category: 'shorts' | 'facebook' | 'youtube' | 'short-form' | 'ads' | 'reels' | 'saas';
  categoryLabel: string;
  platform?: 'YouTube' | 'Facebook';
  views?: string; // e.g. "1.2M+"
  watchTimeRetention?: string; // e.g. "72%"
  hookRate?: string; // e.g. "84% (First 3s)"
  duration?: string; // e.g. "0:45"
  software?: string[]; // e.g. ["Premiere Pro", "After Effects"]
  thumbnailUrl: string;
  videoAspect: '9:16' | '16:9' | '1:1';
  youtubeId?: string; // e.g. "dQw4w9WgXcQ"
  youtubeUrl?: string; // e.g. "https://www.youtube.com/watch?v=..."
  videoUrl?: string; // Generic video URL (Facebook or YouTube)
  summary?: string;
  editingFeatures?: string[];
  funnyEditingQuote?: string;
  beforeAfterComparison?: {
    rawDesc: string;
    finalDesc: string;
  };
}

export type SkillCategory = 'all' | 'marketing' | 'video' | 'analytics' | 'tools';

export interface SkillItem {
  id: string;
  name: string;
  category: 'marketing' | 'video' | 'analytics' | 'tools';
  proficiency: number; // 0 to 100
  experience: string; // e.g. "4+ Years"
  description: string;
  tags: string[];
  keyResult: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  avatarUrl: string;
  rating: number;
  platform: 'Fiverr Pro' | 'Upwork Top Rated' | 'Direct Client';
  projectType: 'Digital Marketing' | 'Video Editing' | 'Both / Full Funnel';
  review: string;
  keyMetric: string; // e.g. "+380% ROAS in 30 days"
  funnyPraise?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  whatsappOrPhone: string;
  serviceType: 'digital-marketing' | 'video-editing' | 'both-growth-package' | 'consultation';
  budgetRange: string;
  projectDetails: string;
}

export type ToolCategory = 'all' | 'marketing' | 'video' | 'design' | 'analytics' | 'ecommerce';

export interface MasteredTool {
  id: string;
  name: string;
  shortName?: string;
  category: ToolCategory;
  categoryLabel: string;
  role: string;
  level: string; // e.g. "Daily Driver", "Expert", "Certified Specialist"
  experience: string;
  dotColor: string; // Tailwind color class or hex
  badgeColor: string;
  description: string;
  statsLabel: string; // e.g. "120+ Campaigns Run"
}
