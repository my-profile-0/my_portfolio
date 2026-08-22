import React, { useState } from 'react';
import { 
  TrendingUp, 
  ArrowUpRight, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
} from 'lucide-react';
import { MARKETING_CAMPAIGNS } from '../data/portfolioData';
import { CampaignCaseStudy, MarketingPlatform } from '../types';
import { MetaLogo, GoogleAdsLogo, TikTokLogo } from './BrandLogos';

interface DigitalMarketingSectionProps {
  onSelectCampaign: (campaign: CampaignCaseStudy) => void;
  onBookAudit: () => void;
}

export const DigitalMarketingSection: React.FC<DigitalMarketingSectionProps> = ({
  onSelectCampaign,
  onBookAudit,
}) => {
  const [activePlatform, setActivePlatform] = useState<MarketingPlatform>('all');

  const filteredCampaigns = MARKETING_CAMPAIGNS.filter((c) => {
    if (activePlatform === 'all') return true;
    if (activePlatform === 'meta') return c.platform === 'meta';
    if (activePlatform === 'google') return c.platform === 'google';
    if (activePlatform === 'tiktok') return c.platform === 'tiktok';
    if (activePlatform === 'ecommerce') return c.clientNiche.toLowerCase().includes('commerce') || c.clientNiche.toLowerCase().includes('fashion');
    if (activePlatform === 'leadgen') return c.clientNiche.toLowerCase().includes('saas') || c.clientNiche.toLowerCase().includes('fitness') || c.clientNiche.toLowerCase().includes('services');
    return true;
  });

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'meta':
        return <MetaLogo size={18} className="w-4 h-4 shrink-0" />;
      case 'google':
        return <GoogleAdsLogo size={18} className="w-4 h-4 shrink-0" />;
      case 'tiktok':
        return <TikTokLogo size={18} className="w-4 h-4 shrink-0" />;
      default:
        return null;
    }
  };

  return (
    <section id="marketing" className="py-24 bg-slate-50/50 border-t border-slate-200/80 relative overflow-hidden">
      {/* Background Decorative Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-bold mb-3 uppercase tracking-wider shadow-2xs">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>Proven Ad Scaling • Verified Data</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Digital Marketing & <span className="underline decoration-emerald-500 decoration-4 underline-offset-4 text-emerald-600">Predictable Ad Profit</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mt-3 font-normal leading-relaxed">
              Tested strategies, real ad dashboards, verified ROAS figures, and multi-channel media buying frameworks that deliver predictable revenue.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-xs text-xs font-semibold text-slate-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>100% Verified Ad Accounts & Live Data</span>
          </div>
        </div>

        {/* Platform Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {[
            { id: 'all', label: 'All Campaigns', icon: null },
            { id: 'meta', label: 'Meta Ads (FB & IG)', icon: <MetaLogo size={16} className="w-4 h-4 shrink-0" /> },
            { id: 'google', label: 'Google & P-Max', icon: <GoogleAdsLogo size={16} className="w-4 h-4 shrink-0" /> },
            { id: 'tiktok', label: 'TikTok Spark Ads', icon: <TikTokLogo size={16} className="w-4 h-4 shrink-0" /> },
            { id: 'ecommerce', label: 'E-Commerce / D2C', icon: null },
            { id: 'leadgen', label: 'B2B & High-Ticket', icon: null },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActivePlatform(tab.id as MarketingPlatform)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activePlatform === tab.id
                  ? 'bg-slate-900 text-white shadow-xs scale-[1.02]'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80 shadow-2xs'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Campaign Cards Grid (3-Column, Spacious, Card-based) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCampaigns.map((camp) => (
            <div
              key={camp.id}
              onClick={() => onSelectCampaign(camp)}
              className="bg-white rounded-3xl border border-slate-200/90 hover:border-emerald-400 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group"
            >
              <div>
                {/* Top Image Preview Banner */}
                <div className="relative h-48 w-full overflow-hidden rounded-t-xl bg-slate-100">
                  <img
                    src={camp.adCreativeUrl}
                    alt={camp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Platform Badge with Official Logo */}
                  <div className="absolute top-3 left-3 z-10 bg-slate-900/80 backdrop-blur-md text-xs font-medium text-white px-2.5 py-1 rounded-md border border-slate-700/50 flex items-center gap-1.5">
                    {getPlatformIcon(camp.platform)}
                    <span>{camp.platformLabel.split(' ')[0]}</span>
                  </div>

                  {/* ROAS Badge */}
                  <div className="absolute top-3 right-3 z-10 bg-emerald-500/90 text-xs font-bold text-slate-950 px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-slate-950" />
                    <span>{camp.roas}x ROAS</span>
                  </div>
                </div>

                {/* Card Content & Metrics */}
                <div className="p-6 space-y-4">
                  {/* Title & Niche */}
                  <div>
                    <span className="text-[11px] font-bold text-emerald-600 block uppercase tracking-wider">
                      {camp.clientNiche}
                    </span>
                    <h3 className="text-base font-extrabold text-slate-900 mt-0.5 group-hover:text-emerald-600 transition-colors line-clamp-1">
                      {camp.title}
                    </h3>
                  </div>
                  {/* Spend vs Revenue Highlight Box */}
                  <div className="grid grid-cols-2 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-center">
                    <div>
                      <span className="text-[11px] text-slate-500 font-medium block">Total Ad Spend</span>
                      <span className="text-base font-bold text-slate-800">{camp.spend}</span>
                    </div>
                    <div className="border-l border-slate-200">
                      <span className="text-[11px] text-emerald-700 font-medium block">Revenue Generated</span>
                      <span className="text-base font-black text-emerald-600">{camp.revenue}</span>
                    </div>
                  </div>

                  {/* Secondary Metrics */}
                  <div className="flex items-center justify-between text-xs text-slate-600 px-1 font-medium">
                    <span>CTR: <strong className="text-slate-900 font-bold">{camp.ctr}</strong></span>
                    <span>•</span>
                    <span>CPA: <strong className="text-slate-900 font-bold">{camp.cpa}</strong></span>
                    <span>•</span>
                    <span>Duration: <strong className="text-slate-900 font-bold">{camp.duration}</strong></span>
                  </div>

                  {/* Scannable Strategy Bullets */}
                  <div className="space-y-1.5 pt-1">
                    {camp.strategySteps.slice(0, 2).map((step, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="truncate">{step}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hook preview */}
                  <div className="text-xs bg-amber-50/80 p-3 rounded-xl border border-amber-200/70 text-amber-900 leading-relaxed">
                    <strong className="text-amber-950 font-bold">Winning Hook: </strong>
                    "{camp.winningHook}"
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
                <span>View Full Strategy Breakdown</span>
                <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center group-hover:bg-emerald-50 group-hover:border-emerald-300 transition-all shadow-2xs">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
