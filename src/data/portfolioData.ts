import { CampaignCaseStudy, VideoProject, SkillItem, Testimonial, MasteredTool } from '../types';

export const PERSONAL_INFO = {
  name: "My_Portfolio",
  title: "Digital Marketing Specialist & Senior Video Editor",
  tagline: "I scale brands with high-ROAS ad campaigns & hook-heavy viral video edits.",
  wittyTagline: "Warning: Working with me may lead to overloaded inventory and viral view counts.",
  experienceYears: "5+",
  adSpendManaged: "$2.4M+",
  avgRoas: "4.8x",
  videosEdited: "450+",
  clientSatisfaction: "99.4%",
  availability: "Available for New Projects & Monthly Retainers",
  email: "mbmiraj100@gmail.com",
  whatsapp: "+8801875717863",
  fiverrRating: "5.0 ★ (120+ Reviews)",
  upworkBadge: "Top Rated Plus",
  location: "Dhaka, Bangladesh (Serving Global Clients: US, UK, EU, UAE, Global)",
};

export const MARKETING_CAMPAIGNS: CampaignCaseStudy[] = [
  {
    id: 'camp-1',
    title: 'E-commerce D2C Skincare Brand - Black Friday Scaling',
    clientNiche: 'E-Commerce / Beauty & Cosmetics',
    platform: 'meta',
    platformLabel: 'Meta Ads (Facebook & Instagram)',
    roas: 5.6,
    spend: '$18,400',
    revenue: '$103,040',
    ctr: '4.12%',
    cpa: '$12.80',
    impressions: '2.1M',
    duration: '30 Days',
    badge: '5.6x ROAS • $103K Revenue',
    overview: 'Completely restructured the Meta Ads account with CBO broad-targeting, dynamic creative testing (DCT), and short-form UGC video hooks. Scaled monthly revenue from $24k to over $103k.',
    strategySteps: [
      'Deployed 3-second hook variations using UGC video edits to drop CPC by 42%',
      'Built custom audience exclusions & high-intent lookalikes (Top 25% Web Spenders)',
      'Introduced dynamic product catalogs with custom carousel overlays',
      'Optimized post-click checkout funnel with 1-click upsells'
    ],
    winningHook: '"Stop rubbing chemicals on your face — dermatologists finally leaked this 3-step glow recipe."',
    adCreativeUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
    metricsComparison: [
      { metric: 'Return on Ad Spend (ROAS)', before: '1.9x', after: '5.6x', improvement: '+194%' },
      { metric: 'Cost Per Acquisition (CPA)', before: '$34.50', after: '$12.80', improvement: '-63%' },
      { metric: 'Click-Through-Rate (CTR)', before: '1.4%', after: '4.12%', improvement: '+194%' },
      { metric: 'Conversion Rate', before: '2.1%', after: '5.8%', improvement: '+176%' }
    ],
    humorousHighlight: 'The client had to hire 3 temp warehouse staff because the orders broke their packing table.'
  },
  {
    id: 'camp-2',
    title: 'High-Ticket B2B SaaS Platform - Qualified Demo Funnel',
    clientNiche: 'B2B SaaS / Workflow Automation',
    platform: 'google',
    platformLabel: 'Google Ads & Performance Max',
    roas: 4.4,
    spend: '$22,600',
    revenue: '$99,440',
    ctr: '6.85%',
    cpa: '$46.00',
    impressions: '840K',
    duration: '60 Days',
    badge: '4.4x Pipeline ROAS • 216 Qualified Demos',
    overview: 'Overhauled an expensive Google Search & Display campaign. Eliminated 68% wasted search query spend via aggressive negative keyword harvesting and switched to high-intent intent match + Performance Max asset groups.',
    strategySteps: [
      'Filtered out 400+ irrelevant competitor search queries and low-intent job seekers',
      'Built targeted landing page variations matching search intent exactly',
      'Configured offline conversion tracking with HubSpot CRM to bid only on Sales-Qualified Leads',
      'Created compelling product walkthrough video snippets for YouTube Ads'
    ],
    winningHook: '"Your team wastes 14 hours every week copy-pasting spreadsheet rows. Fix it in 3 clicks."',
    adCreativeUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    metricsComparison: [
      { metric: 'Cost Per Booked Demo', before: '$148.00', after: '$46.00', improvement: '-69%' },
      { metric: 'Demo Show-up Rate', before: '54%', after: '88%', improvement: '+63%' },
      { metric: 'Search Imp. Share (Top)', before: '32%', after: '74%', improvement: '+131%' },
      { metric: 'Pipeline Deal Value', before: '$38,000', after: '$198,000', improvement: '+421%' }
    ],
    humorousHighlight: 'Sales reps went from begging for leads to muting Slack notifications during lunch.'
  },
  {
    id: 'camp-3',
    title: 'Gen-Z Apparel Brand - TikTok Spark Ads & Viral UGC',
    clientNiche: 'Streetwear & Gen-Z Fashion',
    platform: 'tiktok',
    platformLabel: 'TikTok Ads Manager & Spark Ads',
    roas: 6.2,
    spend: '$9,800',
    revenue: '$60,760',
    ctr: '5.20%',
    cpa: '$8.40',
    impressions: '3.4M',
    duration: '21 Days',
    badge: '6.2x ROAS • Viral Trend Hijack',
    overview: 'Combined native TikTok video editing trends with Spark Ads. Leveraged lo-fi creator footage, pacing cuts, trending audio cues, and limited flash-drop urgency counters.',
    strategySteps: [
      'Created 12 custom TikTok-native video ads with fast cuts (0.4s clip intervals)',
      'Identified top organic creator posts and boosted them as Spark Ads',
      'Set up TikTok Shop checkout integration for frictionless mobile purchases',
      'Ran automated midnight flash sales triggered by automated ad scheduling'
    ],
    winningHook: '"We got banned from 3 streetwear forums for making oversized hoodies this soft..."',
    adCreativeUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80',
    metricsComparison: [
      { metric: 'Video View-to-Cart Rate', before: '1.2%', after: '7.8%', improvement: '+550%' },
      { metric: 'Cost per Add to Cart', before: '$6.50', after: '$1.95', improvement: '-70%' },
      { metric: 'ROAS', before: '2.1x', after: '6.2x', improvement: '+195%' },
      { metric: 'Total Units Sold', before: '420 pcs', after: '3,140 pcs', improvement: '+647%' }
    ],
    humorousHighlight: 'Comments section was 90% "TAKE MY MONEY" and 10% people asking if we sleep.'
  },
  {
    id: 'camp-4',
    title: 'Gym & Fitness Franchise - Local High-Value Member Acquisition',
    clientNiche: 'Health & Fitness / Local Services',
    platform: 'meta',
    platformLabel: 'Meta Local Lead Ads + WhatsApp Funnel',
    roas: 4.9,
    spend: '$6,200',
    revenue: '$30,380',
    ctr: '3.40%',
    cpa: '$11.20',
    impressions: '420K',
    duration: '40 Days',
    badge: '4.9x ROI • 270 New Gym Memberships',
    overview: 'Targeted local geo-radius within 8km. Implemented high-converting 7-Day Free Transformation Pass lead forms connected directly to WhatsApp instant booking bot.',
    strategySteps: [
      'High-energy transformation montage video ads cut with motivational pacing',
      'Instant Lead Gen forms with auto-fill questions to maximize completion rate',
      'Immediate automated WhatsApp welcome message within 60 seconds of form submit',
      'Retargeted past website visitors who checked the pricing page but did not sign up'
    ],
    winningHook: '"Still making the same fitness resolution you made in 2021? Here is a free pass to fix it."',
    adCreativeUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80',
    metricsComparison: [
      { metric: 'Cost Per Lead', before: '$28.00', after: '$11.20', improvement: '-60%' },
      { metric: 'Lead-to-Walk-in Rate', before: '22%', after: '64%', improvement: '+190%' },
      { metric: 'Annual Contract Value', before: '$12,000', after: '$30,380', improvement: '+153%' },
      { metric: 'Cost Per Member Sign-up', before: '$95.00', after: '$22.90', improvement: '-76%' }
    ],
    humorousHighlight: 'The gym owner asked me to pause ads because the squat racks had a waiting line.'
  },
  {
    id: 'camp-5',
    title: 'Premium Ergonomic Chair - Omnichannel Retargeting Machine',
    clientNiche: 'Home Office & Furniture',
    platform: 'omnichannel',
    platformLabel: 'Omnichannel (Meta + Google + YouTube)',
    roas: 5.1,
    spend: '$15,500',
    revenue: '$79,050',
    ctr: '3.95%',
    cpa: '$38.50',
    impressions: '1.8M',
    duration: '45 Days',
    badge: '5.1x ROAS • Full Funnel Flywheel',
    overview: 'Unified top-of-funnel YouTube Shorts & TikTok awareness with high-intent Google Search & dynamic Meta catalog retargeting for a $350 ergonomic desk chair.',
    strategySteps: [
      'Created split-screen comparison video ads: $50 Amazon chair vs $350 Lumbar support chair',
      'Captured high-intent search terms like "best desk chair for lower back pain"',
      'Built a 3-tier retargeting matrix: Day 1-3 urgent discount, Day 4-10 video reviews, Day 11-30 founder story'
    ],
    winningHook: '"Your lower back is screaming at you right now. Here is why cheap foam is ruining your spine."',
    adCreativeUrl: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=800&q=80',
    metricsComparison: [
      { metric: 'Blended ROAS', before: '2.4x', after: '5.1x', improvement: '+112%' },
      { metric: 'Average Order Value (AOV)', before: '$290', after: '$385', improvement: '+32%' },
      { metric: 'Cart Abandonment Recovery', before: '14%', after: '36%', improvement: '+157%' },
      { metric: 'Organic Brand Search Growth', before: '+0%', after: '+340%', improvement: '+340%' }
    ],
    humorousHighlight: 'We convinced thousands of gamers and remote workers to finally respect their posture.'
  }
];

export const VIDEO_PROJECTS: VideoProject[] = [
  // 1. Shorts / Reels (Vertical 9:16)
  {
    id: 'yt-short-1',
    title: 'Civil Engineering & Construction Insights #1',
    category: 'shorts',
    categoryLabel: 'Shorts / Reel',
    videoAspect: '9:16',
    platform: 'YouTube',
    youtubeId: '9T0rTtEiBBs',
    youtubeUrl: 'https://youtube.com/shorts/9T0rTtEiBBs',
    videoUrl: 'https://youtube.com/shorts/9T0rTtEiBBs',
    thumbnailUrl: 'https://i.ytimg.com/vi/9T0rTtEiBBs/hqdefault.jpg',
    duration: '0:50'
  },
  {
    id: 'yt-short-2',
    title: 'Site Work & Soil Testing Short #2',
    category: 'shorts',
    categoryLabel: 'Shorts / Reel',
    videoAspect: '9:16',
    platform: 'YouTube',
    youtubeId: 'fViF6r2cNjc',
    youtubeUrl: 'https://youtube.com/shorts/fViF6r2cNjc',
    videoUrl: 'https://youtube.com/shorts/fViF6r2cNjc',
    thumbnailUrl: 'https://i.ytimg.com/vi/fViF6r2cNjc/hqdefault.jpg',
    duration: '0:45'
  },
  {
    id: 'yt-short-3',
    title: 'Construction Safety & Piling Tips #3',
    category: 'shorts',
    categoryLabel: 'Shorts / Reel',
    videoAspect: '9:16',
    platform: 'YouTube',
    youtubeId: 'OGlXVVvj4yc',
    youtubeUrl: 'https://youtube.com/shorts/OGlXVVvj4yc',
    videoUrl: 'https://youtube.com/shorts/OGlXVVvj4yc',
    thumbnailUrl: 'https://i.ytimg.com/vi/OGlXVVvj4yc/hqdefault.jpg',
    duration: '0:58'
  },
  {
    id: 'yt-short-4',
    title: 'Geotechnical & Foundation Breakdown #4',
    category: 'shorts',
    categoryLabel: 'Shorts / Reel',
    videoAspect: '9:16',
    platform: 'YouTube',
    youtubeId: 'erHm-LYuqf4',
    youtubeUrl: 'https://youtube.com/shorts/erHm-LYuqf4',
    videoUrl: 'https://youtube.com/shorts/erHm-LYuqf4',
    thumbnailUrl: 'https://i.ytimg.com/vi/erHm-LYuqf4/hqdefault.jpg',
    duration: '0:40'
  },
  {
    id: 'yt-short-5',
    title: 'Building Construction Shorts #5',
    category: 'shorts',
    categoryLabel: 'Shorts / Reel',
    videoAspect: '9:16',
    platform: 'YouTube',
    youtubeId: 'llSYKgtWZeI',
    youtubeUrl: 'https://youtube.com/shorts/llSYKgtWZeI',
    videoUrl: 'https://youtube.com/shorts/llSYKgtWZeI',
    thumbnailUrl: 'https://i.ytimg.com/vi/llSYKgtWZeI/hqdefault.jpg',
    duration: '0:52'
  },
  {
    id: 'yt-short-6',
    title: 'Civil Engineering Quick Tips #6',
    category: 'shorts',
    categoryLabel: 'Shorts / Reel',
    videoAspect: '9:16',
    platform: 'YouTube',
    youtubeId: 'r6cFZKCOn_k',
    youtubeUrl: 'https://youtube.com/shorts/r6cFZKCOn_k',
    videoUrl: 'https://youtube.com/shorts/r6cFZKCOn_k',
    thumbnailUrl: 'https://i.ytimg.com/vi/r6cFZKCOn_k/hqdefault.jpg',
    duration: '0:35'
  },
  {
    id: 'yt-short-7',
    title: 'Site Inspection Reel #7',
    category: 'shorts',
    categoryLabel: 'Shorts / Reel',
    videoAspect: '9:16',
    platform: 'YouTube',
    youtubeId: '5DJCdR_9Q-0',
    youtubeUrl: 'https://youtube.com/shorts/5DJCdR_9Q-0',
    videoUrl: 'https://youtube.com/shorts/5DJCdR_9Q-0',
    thumbnailUrl: 'https://i.ytimg.com/vi/5DJCdR_9Q-0/hqdefault.jpg',
    duration: '0:48'
  },

  // 2. Facebook Videos & Reels
  {
    id: 'fb-vid-1',
    title: 'Facebook Video Ad / Content #1',
    category: 'facebook',
    categoryLabel: 'Facebook Reel',
    videoAspect: '9:16',
    platform: 'Facebook',
    videoUrl: 'https://www.facebook.com/share/v/1YXsFUWGLQ/',
    thumbnailUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?w=800&auto=format&fit=crop&q=80',
    duration: '0:45'
  },
  {
    id: 'fb-vid-2',
    title: 'Facebook Video Ad / Content #2',
    category: 'facebook',
    categoryLabel: 'Facebook Video',
    videoAspect: '16:9',
    platform: 'Facebook',
    videoUrl: 'https://www.facebook.com/share/v/1Dtmj9KPPG/',
    thumbnailUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80',
    duration: '1:20'
  },
  {
    id: 'fb-vid-3',
    title: 'Facebook Reel Edit #3',
    category: 'facebook',
    categoryLabel: 'Facebook Reel',
    videoAspect: '9:16',
    platform: 'Facebook',
    videoUrl: 'https://www.facebook.com/share/r/18DmYGq1ud/',
    thumbnailUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80',
    duration: '0:38'
  },
  {
    id: 'fb-vid-4',
    title: 'Facebook Reel Edit #4',
    category: 'facebook',
    categoryLabel: 'Facebook Reel',
    videoAspect: '9:16',
    platform: 'Facebook',
    videoUrl: 'https://www.facebook.com/share/r/1EPZTF3wSk/',
    thumbnailUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=80',
    duration: '0:55'
  },

  // 3. YouTube Long-Form Videos (Widescreen 16:9)
  {
    id: 'yt-long-1',
    title: 'ঢাকার ভবন কি সত্যিই বসে যাচ্ছে? | BUILDING SINKING?',
    category: 'youtube',
    categoryLabel: 'YouTube Long-Form',
    videoAspect: '16:9',
    platform: 'YouTube',
    youtubeId: '_xj9xJ48Pn4',
    youtubeUrl: 'https://www.youtube.com/watch?v=_xj9xJ48Pn4',
    videoUrl: 'https://www.youtube.com/watch?v=_xj9xJ48Pn4',
    thumbnailUrl: 'https://i.ytimg.com/vi/_xj9xJ48Pn4/hqdefault.jpg',
    duration: '8:42'
  },
  {
    id: 'yt-long-2',
    title: 'Civil Engineering Explainer Video #2',
    category: 'youtube',
    categoryLabel: 'YouTube Long-Form',
    videoAspect: '16:9',
    platform: 'YouTube',
    youtubeId: 'ta2I8YpwElM',
    youtubeUrl: 'https://www.youtube.com/watch?v=ta2I8YpwElM',
    videoUrl: 'https://www.youtube.com/watch?v=ta2I8YpwElM',
    thumbnailUrl: 'https://i.ytimg.com/vi/ta2I8YpwElM/hqdefault.jpg',
    duration: '11:15'
  },
  {
    id: 'yt-long-3',
    title: 'Engineering & Foundation Detailed Guide #3',
    category: 'youtube',
    categoryLabel: 'YouTube Long-Form',
    videoAspect: '16:9',
    platform: 'YouTube',
    youtubeId: '1lhOcrCnWmI',
    youtubeUrl: 'https://www.youtube.com/watch?v=1lhOcrCnWmI',
    videoUrl: 'https://www.youtube.com/watch?v=1lhOcrCnWmI',
    thumbnailUrl: 'https://i.ytimg.com/vi/1lhOcrCnWmI/hqdefault.jpg',
    duration: '14:30'
  }
];

export const ALL_SKILLS: SkillItem[] = [
  // Digital Marketing Skills
  {
    id: 'sk-1',
    name: 'Meta Ads Manager (Facebook & Instagram)',
    category: 'marketing',
    proficiency: 98,
    experience: '5+ Years',
    description: 'Full-funnel campaign architecture, CBO scaling, Dynamic Creative Testing (DCT), lookalikes, custom conversions, and iOS 14+ Aggregated Event Measurement.',
    tags: ['CBO / ABO', 'Pixel & CAPI', 'A/B Testing', 'Scaling Strategy', 'Retargeting'],
    keyResult: 'Scaled multiple D2C stores past $100k/mo revenue at 4x+ ROAS.'
  },
  {
    id: 'sk-2',
    name: 'Google Ads & Performance Max (P-Max)',
    category: 'marketing',
    proficiency: 94,
    experience: '4+ Years',
    description: 'High-intent search keyword bidding, negative query pruning, Performance Max asset group optimization, YouTube in-stream video ads, and Display remarketing.',
    tags: ['Search Campaigns', 'Performance Max', 'Smart Bidding', 'Negative Keywords', 'Merchant Center'],
    keyResult: 'Reduced SaaS acquisition cost from $148 to $46 per qualified demo.'
  },
  {
    id: 'sk-3',
    name: 'TikTok Ads Manager & Spark Ads',
    category: 'marketing',
    proficiency: 92,
    experience: '3+ Years',
    description: 'Gen-Z engagement strategy, native Spark Ads boosting, trend hacking, instant pages, and TikTok Shop conversion optimization.',
    tags: ['Spark Ads', 'TikTok Pixel', 'Trend Jacking', 'UGC Creative Strategy'],
    keyResult: 'Achieved 6.2x ROAS and generated over 3.4M viral paid impressions.'
  },
  {
    id: 'sk-4',
    name: 'Conversion Rate Optimization (CRO) & Funnel Design',
    category: 'marketing',
    proficiency: 90,
    experience: '4+ Years',
    description: 'Landing page heatmaps, checkout friction reduction, 1-click upsells, high-converting offer creation, and post-click copy alignment.',
    tags: ['Landing Pages', 'Hotjar / Clarity', 'A/B Split Tests', 'Offer Crafting', 'Shopify / WordPress'],
    keyResult: 'Boosted average landing page conversion rate from 1.8% to 5.4%.'
  },
  {
    id: 'sk-5',
    name: 'Direct-Response Ad Copywriting',
    category: 'marketing',
    proficiency: 95,
    experience: '5+ Years',
    description: 'Psychological triggers, PAS/AIDA frameworks, scroll-stopping primary texts, headline variations, and compelling call-to-actions.',
    tags: ['PAS Framework', 'Hook Scripting', 'Storytelling Copy', 'Email Sequences'],
    keyResult: 'Authored winning hooks that generated over $1.2M in verified client sales.'
  },
  {
    id: 'sk-6',
    name: 'Email Marketing & Retention (Klaviyo / Mailchimp)',
    category: 'marketing',
    proficiency: 88,
    experience: '3+ Years',
    description: 'Automated email flows (Welcome series, Abandoned Cart, Post-purchase VIP), customer segmentation, list hygiene, and SMS marketing.',
    tags: ['Automated Flows', 'Cart Recovery', 'Segmentation', 'SMS Strategy'],
    keyResult: 'Recovered 36% of abandoned carts for e-commerce clients on autopilot.'
  },

  // Video Editing Skills
  {
    id: 'sk-7',
    name: 'Adobe Premiere Pro',
    category: 'video',
    proficiency: 99,
    experience: '5+ Years',
    description: 'Advanced multi-cam editing, time-remapping, audio syncing, nested sequences, proxies workflow, and lightning-fast keyboard shortcuts.',
    tags: ['Multi-Cam', 'Speed Ramping', 'Pacing & Rhythm', 'Shortcuts Master'],
    keyResult: 'Edited over 450+ client videos with 99.4% client satisfaction.'
  },
  {
    id: 'sk-8',
    name: 'Adobe After Effects (Motion Graphics)',
    category: 'video',
    proficiency: 92,
    experience: '4+ Years',
    description: 'Kinetic typography, 3D camera tracking, vector UI animations, logo reveals, lower thirds, particle effects, and expression scripts.',
    tags: ['3D Tracking', 'Kinetic Typography', 'UI Animations', 'VFX Cleanups'],
    keyResult: 'Created sleek SaaS explainer videos that helped secure seed funding.'
  },
  {
    id: 'sk-9',
    name: 'DaVinci Resolve & Color Grading',
    category: 'video',
    proficiency: 88,
    experience: '3+ Years',
    description: 'Node-based color grading, color space transform (CST), skin tone isolation, LUT crafting, and HDR/Rec.709 color management.',
    tags: ['Color Science', 'Node Grading', 'Skin Tone Balancing', 'Film Emulation'],
    keyResult: 'Turned dull smartphone footage into rich cinematic master grades.'
  },
  {
    id: 'sk-10',
    name: 'Short-Form Viral Retention Editing (Reels / TikTok / Shorts)',
    category: 'video',
    proficiency: 98,
    experience: '4+ Years',
    description: 'First 3-second hook optimization, micro-zooms, dynamic B-roll popups, animated text with highlight cues, and sound effects layering.',
    tags: ['Hook Optimization', 'Hormozi Style', 'Sound FX Design', 'Sub-second Cuts'],
    keyResult: 'Generated over 15M+ organic video views across client channels.'
  },
  {
    id: 'sk-11',
    name: 'Sound Design & Audio Engineering',
    category: 'video',
    proficiency: 92,
    experience: '4+ Years',
    description: 'Audio cleanup (Izotope RX noise reduction), parametric EQ, multi-band compression, swooshes, risers, impacts, and background ducking.',
    tags: ['Noise Scrubbing', 'Audio Ducking', 'SFX Layering', 'Loudness Normalization'],
    keyResult: 'Eliminated echo and wind noise from dozens of client field recordings.'
  },
  {
    id: 'sk-12',
    name: 'CapCut Pro (Desktop & Mobile Power User)',
    category: 'video',
    proficiency: 96,
    experience: '3+ Years',
    description: 'Fast viral turnaround, auto-captions with custom animation styling, keyframing, trending sound library integration, and quick format exports.',
    tags: ['Auto-Captions', 'Keyframing', 'Viral Presets', 'Fast Delivery'],
    keyResult: 'Delivered 24-hour turnaround batches of 10+ reels for high-volume creators.'
  },

  // Analytics & Tracking Skills
  {
    id: 'sk-13',
    name: 'Google Analytics 4 (GA4) & Google Tag Manager (GTM)',
    category: 'analytics',
    proficiency: 90,
    experience: '4+ Years',
    description: 'Custom event triggers, data layer variables, cross-domain tracking, funnel exploration reports, and conversion value attribution.',
    tags: ['GTM Data Layer', 'Custom Events', 'E-commerce Purchase Tracking', 'UTM Architecture'],
    keyResult: 'Fixed broken tracking setups for 25+ e-commerce brands.'
  },
  {
    id: 'sk-14',
    name: 'Meta Conversions API (CAPI) & Server-Side Tracking',
    category: 'analytics',
    proficiency: 88,
    experience: '3+ Years',
    description: 'Cloudflare / Stape server-side GTM, event deduplication, high event quality match scores (8.5+/10), and cookie recovery.',
    tags: ['Server-Side GTM', 'Event Match Quality', 'Deduplication', 'iOS 14+ Fix'],
    keyResult: 'Raised Meta Event Match Quality scores from 4.2 to 8.9 out of 10.'
  },

  // Tools & Workflow
  {
    id: 'sk-15',
    name: 'Ad Spy & Competitor Intelligence (Foreplay, AdPlexity, TikTok Creative Center)',
    category: 'tools',
    proficiency: 94,
    experience: '4+ Years',
    description: 'Competitor ad reverse-engineering, viral hook swipe files, market angle research, and creative trend forecasting.',
    tags: ['Creative Swiping', 'Foreplay.co', 'Angle Mapping', 'Trend Scouting'],
    keyResult: 'Discovered high-performing creative angles before competitors noticed.'
  },
  {
    id: 'sk-16',
    name: 'Adobe Photoshop & Creative Asset Design',
    category: 'tools',
    proficiency: 91,
    experience: '5+ Years',
    description: 'High-CTR YouTube thumbnails, carousel slide graphics, ad badge overlays, product cutouts, and color-matched backgrounds.',
    tags: ['Thumbnail Design', 'Product Cutouts', 'Carousel Slides', 'Banner Ads'],
    keyResult: 'Crafted YouTube thumbnails achieving sustained 11%+ click-through rates.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Daniel Vance',
    role: 'CEO & Founder',
    company: 'Lumiere Organics (US)',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    rating: 5,
    platform: 'Fiverr Pro',
    projectType: 'Both / Full Funnel',
    review: 'Working with this specialist was the single best decision for our e-commerce business this year. Not only did they revamp our entire Meta ad structure and take our ROAS from 1.8x to 5.6x, but they also edited all the winning video creatives themselves! You rarely find someone who understands both the marketing psychology AND the video cutting craft.',
    keyMetric: '$103,000+ Revenue in 30 Days (5.6x ROAS)',
    funnyPraise: 'They warned me I would run out of inventory. I laughed. Then I had to call my supplier in panic at 2 AM.'
  },
  {
    id: 'test-2',
    clientName: 'Sophie Martinez',
    role: 'Head of Growth',
    company: 'TaskFlow B2B SaaS (UK)',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
    rating: 5,
    platform: 'Upwork Top Rated',
    projectType: 'Digital Marketing',
    review: 'We were burning through $15k/month on Google Ads with mediocre lead quality. My Portfolio came in, completely audited our keywords, cut out hundreds of negative search terms, and rebuilt our Performance Max campaigns. Our cost per booked demo plummeted from $148 to under $46. A true data wizard.',
    keyMetric: '-69% Lower Cost Per Demo',
    funnyPraise: 'Our sales team actually enjoys opening their calendar now. Phenomenal growth work!'
  },
  {
    id: 'test-3',
    clientName: 'Liam O’Connor',
    role: 'YouTube Creator & Coach (450K Subs)',
    company: 'Creator Blueprint (Australia)',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    rating: 5,
    platform: 'Direct Client',
    projectType: 'Video Editing',
    review: 'The pacing and retention techniques demonstrated across this portfolio are insane. They turned my average 40% retention YouTube videos into 65%+ watch-time machines. Every cut has purpose, the sound design is crisp, and turnaround is always right on time. If you want videos that keep people glued to the screen, hire immediately.',
    keyMetric: '+2.8M Organic Views across 12 Videos',
    funnyPraise: 'I think they edit in their sleep because I sent raw footage at night and woke up to a masterpiece.'
  },
  {
    id: 'test-4',
    clientName: 'Karen Chen',
    role: 'Marketing Director',
    company: 'Apex Athleisure (Canada)',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    rating: 5,
    platform: 'Fiverr Pro',
    projectType: 'Both / Full Funnel',
    review: 'Handled our TikTok ads and short-form video batch production with exceptional skill. The speed at which viral trends are identified and translated into paid sales ads is unmatched. Our CPA dropped by over 60% within the first 3 weeks. 10/10 communication and sheer work ethic.',
    keyMetric: '6.2x ROAS on TikTok Ads',
    funnyPraise: 'Zero fluff, zero excuses — just pure metrics and sick video transitions.'
  }
];

export const WHY_HIRE_ME_COMPARISON = [
  {
    feature: 'Ad Strategy & Audience Testing',
    standardFreelancer: 'Throws random interest tags together and prays the algorithm does the work.',
    withMe: 'Systematic testing matrix: Broad CBO, DCT hook testing, and Lookalike segmentation with rigorous ROAS targets.',
    verdict: 'Data-Driven Win'
  },
  {
    feature: 'Video Editing & Retention',
    standardFreelancer: 'Boring slow cuts, robotic subtitles, and generic stock music that makes viewers scroll away.',
    withMe: 'Sub-second retention pacing, custom sound design (-6dB), kinetic animated captions, and dynamic visual hooks.',
    verdict: 'Scroll-Stopping Quality'
  },
  {
    feature: 'Tracking & Attribution Setup',
    standardFreelancer: 'Just pasts a basic pixel script and guesses which ad made the sale.',
    withMe: 'Server-side CAPI via GTM, GA4 custom conversion events, and 8.5+ event match quality score.',
    verdict: 'No Blind Ad Spend'
  },
  {
    feature: 'Communication & Turnaround',
    standardFreelancer: 'Disappears for 4 days and sends revisions filled with typos.',
    withMe: 'Fast proactive updates, transparent Notion dashboard, 24-48h turnaround for reels, and unlimited good vibes.',
    verdict: 'Peace of Mind'
  }
];

export const FAQS = [
  {
    question: "Will you waste my ad budget on unprofitable testing?",
    answer: "Never. I treat your ad budget with the same respect as my own money. We start with a controlled testing budget (usually $30-$50/day per angle), validate winning hooks and audiences quickly, and ONLY scale the creatives that demonstrate positive ROAS.",
    wittyNote: "I have an allergic reaction to negative ROI."
  },
  {
    question: "How fast can you edit and deliver my videos?",
    answer: "For short-form content (TikTok, Reels, Shorts), typical delivery is 24 to 48 hours per batch of 3-5 videos. For long-form YouTube or documentary edits, standard turnaround is 3 to 5 business days with full color grading and sound design.",
    wittyNote: "Fueled by caffeine and 60fps timelines."
  },
  {
    question: "What platforms do you run ad campaigns on?",
    answer: "Meta Ads (Facebook & Instagram), Google Ads (Search, YouTube & Performance Max), and TikTok Ads Manager. Depending on your business model (E-commerce, SaaS, or Local Services), I recommend the platform that gives you the lowest CPA and highest lifetime value.",
    wittyNote: "If humans click on it, I know how to advertise on it."
  },
  {
    question: "What if I already have video footage but need better editing?",
    answer: "Send me your raw files via Google Drive, Dropbox, or WeTransfer! I will analyze the footage, cut out fluff and awkward pauses, script high-retention hooks, apply kinetic captions, add sound effects, and color grade it for maximum engagement.",
    wittyNote: "I can turn shaky bedroom phone videos into crisp client magnets."
  },
  {
    question: "How do we get started working together?",
    answer: "Simply scroll to the Contact section, pick your desired service or book a free 15-minute strategy audit. We will discuss your goals, review your past ads/videos, and map out a custom growth game plan.",
    wittyNote: "No boring sales pitches — just pure strategy."
  }
];

export const MASTERED_TOOLS: MasteredTool[] = [
  // Paid Traffic & Ads
  {
    id: 'tool-meta',
    name: 'Meta Ads Manager',
    shortName: 'Meta Ads',
    category: 'marketing',
    categoryLabel: 'Paid Media Buying',
    role: 'Facebook & Instagram CBO Scaling, DCT & CAPI',
    level: 'Daily Driver / Expert',
    experience: '5+ Years',
    dotColor: 'bg-blue-500',
    badgeColor: 'border-blue-200 bg-blue-50/80 text-blue-800',
    description: 'Full-funnel media buying, dynamic creative testing, broad audience scaling, and aggregated event optimization.',
    statsLabel: '$1.6M+ Ad Spend Managed'
  },
  {
    id: 'tool-google',
    name: 'Google Ads & P-Max',
    shortName: 'Google Ads',
    category: 'marketing',
    categoryLabel: 'Search & Performance',
    role: 'Search Intent, Performance Max, YouTube Ads',
    level: 'Expert Specialist',
    experience: '4+ Years',
    dotColor: 'bg-amber-500',
    badgeColor: 'border-amber-200 bg-amber-50/80 text-amber-800',
    description: 'Smart bidding strategies, negative query pruning, P-Max asset groups, and high-intent keyword harvesting.',
    statsLabel: '4.4x Average ROAS'
  },
  {
    id: 'tool-tiktok',
    name: 'TikTok Ads Manager',
    shortName: 'TikTok Ads',
    category: 'marketing',
    categoryLabel: 'Short-Form Paid Ads',
    role: 'Spark Ads, TikTok Shop & Viral Hooks',
    level: 'Advanced',
    experience: '3+ Years',
    dotColor: 'bg-slate-900',
    badgeColor: 'border-slate-300 bg-slate-100 text-slate-900',
    description: 'Gen-Z trend capitalizing, creator Spark Ads boosting, instant checkout pages, and rapid hook testing.',
    statsLabel: '3.4M+ Video Impressions'
  },
  {
    id: 'tool-youtube-ads',
    name: 'YouTube Ads & Studio',
    shortName: 'YouTube Ads',
    category: 'marketing',
    categoryLabel: 'Video Ad Funnels',
    role: 'In-Stream Video Ads & Audience Retargeting',
    level: 'Advanced',
    experience: '4+ Years',
    dotColor: 'bg-red-500',
    badgeColor: 'border-red-200 bg-red-50/80 text-red-800',
    description: 'Direct-response video sequencing, high-hook in-stream ads, and channel growth analytics.',
    statsLabel: '88% First 30s Hook Rate'
  },

  // Video Editing & Motion
  {
    id: 'tool-premiere',
    name: 'Adobe Premiere Pro',
    shortName: 'Premiere Pro',
    category: 'video',
    categoryLabel: 'Core NLE Timeline',
    role: 'Master Video Editing, Rhythm & Sound Design',
    level: 'Master / 5+ Yrs',
    experience: '5+ Years',
    dotColor: 'bg-purple-600',
    badgeColor: 'border-purple-200 bg-purple-50/80 text-purple-800',
    description: 'Multi-cam synchronization, sub-second retention cuts, dynamic zooms, nested sequences, and audio mastering.',
    statsLabel: '450+ Videos Delivered'
  },
  {
    id: 'tool-after-effects',
    name: 'Adobe After Effects',
    shortName: 'After Effects',
    category: 'video',
    categoryLabel: 'Motion Graphics & VFX',
    role: 'Kinetic Typography, 3D Tracking & UI Mockups',
    level: 'Advanced / Pro',
    experience: '4+ Years',
    dotColor: 'bg-indigo-600',
    badgeColor: 'border-indigo-200 bg-indigo-50/80 text-indigo-800',
    description: '3D camera tracking, vector motion design, glowing stroke animations, logo stings, and visual effects cleanups.',
    statsLabel: '60fps Smooth Motion'
  },
  {
    id: 'tool-davinci',
    name: 'DaVinci Resolve Studio',
    shortName: 'DaVinci Resolve',
    category: 'video',
    categoryLabel: 'Color Grading & Finish',
    role: 'Node-Based Color Grading, CST & HDR Delivery',
    level: 'Color Specialist',
    experience: '3+ Years',
    dotColor: 'bg-orange-500',
    badgeColor: 'border-orange-200 bg-orange-50/80 text-orange-800',
    description: 'Color Space Transform (CST), skin tone isolation, film emulation LUTs, and broadcast-ready audio mastering.',
    statsLabel: 'Cinematic 4K Mastering'
  },
  {
    id: 'tool-capcut',
    name: 'CapCut Pro (Desktop & Mobile)',
    shortName: 'CapCut Pro',
    category: 'video',
    categoryLabel: 'Viral Shorts & Reels',
    role: 'Rapid Viral Captions, Sound Design & Auto Cuts',
    level: 'Daily Driver',
    experience: '3+ Years',
    dotColor: 'bg-emerald-600',
    badgeColor: 'border-emerald-200 bg-emerald-50/80 text-emerald-800',
    description: 'High-speed batch editing for Instagram Reels, YouTube Shorts, and TikTok with trendy dynamic subtitle presets.',
    statsLabel: '24h Batch Turnaround'
  },

  // Design & Creative Assets
  {
    id: 'tool-photoshop',
    name: 'Adobe Photoshop',
    shortName: 'Photoshop',
    category: 'design',
    categoryLabel: 'Asset Crafting',
    role: 'High-CTR Thumbnails, Product Mockups & Overlays',
    level: 'Expert',
    experience: '5+ Years',
    dotColor: 'bg-sky-500',
    badgeColor: 'border-sky-200 bg-sky-50/80 text-sky-800',
    description: 'Click-magnet YouTube thumbnails, ad creative banners, background removals, and high-converting product collages.',
    statsLabel: '11%+ Average CTR'
  },
  {
    id: 'tool-illustrator',
    name: 'Adobe Illustrator',
    shortName: 'Illustrator',
    category: 'design',
    categoryLabel: 'Vector Art',
    role: 'Vector Badges, Iconography & Brand Assets',
    level: 'Advanced',
    experience: '4+ Years',
    dotColor: 'bg-amber-600',
    badgeColor: 'border-amber-200 bg-amber-50/80 text-amber-800',
    description: 'Vector UI components, custom branding badges, typography layouts, and scalable animation assets.',
    statsLabel: 'Clean Vector Delivery'
  },
  {
    id: 'tool-figma',
    name: 'Figma',
    shortName: 'Figma',
    category: 'design',
    categoryLabel: 'UI/UX & Storyboards',
    role: 'Ad Storyboards, Wireframing & Creative Review',
    level: 'Advanced',
    experience: '3+ Years',
    dotColor: 'bg-rose-500',
    badgeColor: 'border-rose-200 bg-rose-50/80 text-rose-800',
    description: 'Collaborative creative boards, ad storyboard frames, landing page UI layouts, and asset export pipelines.',
    statsLabel: 'Pixel-Perfect Handoff'
  },
  {
    id: 'tool-canva',
    name: 'Canva Pro',
    shortName: 'Canva Pro',
    category: 'design',
    categoryLabel: 'Fast Turnaround',
    role: 'Speedy Social Media Packs & Carousel Sets',
    level: 'Power User',
    experience: '4+ Years',
    dotColor: 'bg-cyan-500',
    badgeColor: 'border-cyan-200 bg-cyan-50/80 text-cyan-800',
    description: 'Fast turnarounds for daily social feeds, multi-slide carousels, and client presentation templates.',
    statsLabel: '50+ Reusable Templates'
  },

  // Tracking, Analytics & Attribution
  {
    id: 'tool-ga4',
    name: 'Google Analytics 4 (GA4)',
    shortName: 'GA4',
    category: 'analytics',
    categoryLabel: 'Event Tracking',
    role: 'Cross-Domain Funnel & Conversion Attribution',
    level: 'Certified Pro',
    experience: '4+ Years',
    dotColor: 'bg-yellow-500',
    badgeColor: 'border-yellow-200 bg-yellow-50/80 text-yellow-800',
    description: 'Exploration funnel reports, custom purchase value events, user journey tracking, and UTM attribution audit.',
    statsLabel: '100% Verified Tracking'
  },
  {
    id: 'tool-gtm',
    name: 'Google Tag Manager (GTM)',
    shortName: 'GTM',
    category: 'analytics',
    categoryLabel: 'Tag Infrastructure',
    role: 'Data Layer Variables, Custom Triggers & Web Tags',
    level: 'Expert',
    experience: '4+ Years',
    dotColor: 'bg-blue-600',
    badgeColor: 'border-blue-200 bg-blue-50/80 text-blue-800',
    description: 'Seamless tag deployments, dynamic purchase events, custom javascript triggers, and consent mode v2 compliance.',
    statsLabel: 'Zero Code Bloat'
  },
  {
    id: 'tool-capi',
    name: 'Meta Conversions API (CAPI)',
    shortName: 'Meta CAPI',
    category: 'analytics',
    categoryLabel: 'Server-Side Tracking',
    role: 'Server-Side Event Deduplication & iOS 14+ Recovery',
    level: 'Specialist',
    experience: '3+ Years',
    dotColor: 'bg-emerald-500',
    badgeColor: 'border-emerald-200 bg-emerald-50/80 text-emerald-800',
    description: 'Stape & Cloudflare server-side container routing, cookie lifespan extension, and high Event Match Quality (8.5+/10).',
    statsLabel: '8.9/10 Match Score'
  },
  {
    id: 'tool-triplewhale',
    name: 'Triple Whale / Hyros',
    shortName: 'Triple Whale',
    category: 'analytics',
    categoryLabel: 'Multi-Touch Attribution',
    role: 'First-Party Attribution & True Blended ROAS',
    level: 'Attribution Specialist',
    experience: '3+ Years',
    dotColor: 'bg-violet-600',
    badgeColor: 'border-violet-200 bg-violet-50/80 text-violet-800',
    description: 'Pixel cohort analysis, customer lifetime value (LTV) modeling, and cross-channel ROAS validation.',
    statsLabel: 'Zero Wasted Ad Spend'
  },

  // E-Commerce & Growth Stack
  {
    id: 'tool-shopify',
    name: 'Shopify Plus & Funnels',
    shortName: 'Shopify Plus',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce Architecture',
    role: 'High-Converting Landing Pages & Checkout CRO',
    level: 'Advanced',
    experience: '4+ Years',
    dotColor: 'bg-emerald-600',
    badgeColor: 'border-emerald-200 bg-emerald-50/80 text-emerald-800',
    description: 'Product feed synchronization with Meta/Google Merchant Center, 1-click post-purchase upsells, and speed optimization.',
    statsLabel: '5.8% Avg Conversion Rate'
  },
  {
    id: 'tool-klaviyo',
    name: 'Klaviyo Email & SMS',
    shortName: 'Klaviyo',
    category: 'ecommerce',
    categoryLabel: 'Retention & Lifecycle',
    role: 'Automated Abandoned Cart & VIP Customer Flows',
    level: 'Flow Specialist',
    experience: '3+ Years',
    dotColor: 'bg-slate-800',
    badgeColor: 'border-slate-300 bg-slate-100 text-slate-800',
    description: 'High-converting email copy, customer segmentation, dynamic product recommendations, and SMS flash drops.',
    statsLabel: '36% Cart Recovery'
  },
  {
    id: 'tool-descript',
    name: 'Descript & ElevenLabs AI',
    shortName: 'Descript / AI Audio',
    category: 'video',
    categoryLabel: 'AI Audio & Captions',
    role: 'Text-Based Audio Cleanup & Voiceover Sync',
    level: 'Daily Driver',
    experience: '2+ Years',
    dotColor: 'bg-fuchsia-600',
    badgeColor: 'border-fuchsia-200 bg-fuchsia-50/80 text-fuchsia-800',
    description: 'Ultra-fast filler word scrubbing, AI studio sound normalization, multi-language dubbing, and voiceover enhancement.',
    statsLabel: 'Lightning Audio Clean'
  },
  {
    id: 'tool-frameio',
    name: 'Frame.io',
    shortName: 'Frame.io',
    category: 'video',
    categoryLabel: 'Client Collaboration',
    role: 'Frame-Accurate Video Review & Instant Feedback',
    level: 'Standard Workflow',
    experience: '3+ Years',
    dotColor: 'bg-purple-700',
    badgeColor: 'border-purple-200 bg-purple-50/80 text-purple-800',
    description: 'Timestamped client feedback, revision tracking, and seamless integration right into the Premiere timeline.',
    statsLabel: 'Zero Friction Revisions'
  }
];
