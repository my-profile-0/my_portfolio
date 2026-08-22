import React from 'react';
import { 
  X, 
  TrendingUp, 
  DollarSign, 
  Target, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight,
} from 'lucide-react';
import { CampaignCaseStudy } from '../types';
import { MetaLogo, GoogleAdsLogo, TikTokLogo } from './BrandLogos';

interface CampaignDetailModalProps {
  campaign: CampaignCaseStudy | null;
  onClose: () => void;
  onBookAudit: () => void;
}

export const CampaignDetailModal: React.FC<CampaignDetailModalProps> = ({
  campaign,
  onClose,
  onBookAudit,
}) => {
  if (!campaign) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 flex items-center gap-1.5">
              {getPlatformIcon(campaign.platform)}
              <span>{campaign.platformLabel}</span>
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {campaign.clientNiche}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors border border-slate-200 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
          
          {/* Main Title & Key ROAS Highlight */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {campaign.title}
              </h2>
              <p className="text-sm text-slate-500 mt-1 flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400" />
                Campaign Execution Timeline: <strong className="text-slate-700">{campaign.duration}</strong>
              </p>
            </div>

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-emerald-600 text-white shadow-sm shrink-0">
              <div>
                <div className="text-xs font-semibold text-emerald-100 uppercase tracking-wider">Campaign ROAS</div>
                <div className="text-2xl font-black">{campaign.roas}x</div>
              </div>
              <div className="h-8 w-px bg-emerald-400/40" />
              <div>
                <div className="text-xs font-semibold text-emerald-100 uppercase tracking-wider">Total Revenue</div>
                <div className="text-xl font-bold">{campaign.revenue}</div>
              </div>
            </div>
          </div>

          {/* 4 Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
            <div className="text-center p-2">
              <div className="text-xs text-slate-500 font-medium">Ad Spend</div>
              <div className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5">{campaign.spend}</div>
            </div>
            <div className="text-center p-2">
              <div className="text-xs text-slate-500 font-medium">Click-Through Rate</div>
              <div className="text-lg sm:text-xl font-extrabold text-emerald-600 mt-0.5">{campaign.ctr}</div>
            </div>
            <div className="text-center p-2">
              <div className="text-xs text-slate-500 font-medium">Cost Per Acquisition</div>
              <div className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5">{campaign.cpa}</div>
            </div>
            <div className="text-center p-2">
              <div className="text-xs text-slate-500 font-medium">Total Impressions</div>
              <div className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5">{campaign.impressions}</div>
            </div>
          </div>

          {/* Overview & Strategy */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            <div className="lg:col-span-7 space-y-4">
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-emerald-600" />
                  The Problem & Strategy Overview
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed bg-white p-4 rounded-xl border border-slate-200/80">
                  {campaign.overview}
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  Tactical Implementation Steps
                </h3>
                <ul className="space-y-2.5">
                  {campaign.strategySteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50/60 p-3 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Winning Hook Box */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5 mb-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  Winning Direct-Response Hook
                </div>
                <p className="text-sm italic font-medium text-amber-950">
                  "{campaign.winningHook}"
                </p>
              </div>
            </div>

            {/* Right Side: Before vs After Metrics Table */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
                <div className="px-4 py-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-between">
                  <span>Before vs After Audit</span>
                  <span className="text-emerald-400">Verified Impact</span>
                </div>
                <div className="divide-y divide-slate-100">
                  {campaign.metricsComparison.map((m, idx) => (
                    <div key={idx} className="p-3 text-xs">
                      <div className="font-semibold text-slate-800 mb-1">{m.metric}</div>
                      <div className="flex items-center justify-between text-slate-500">
                        <span>Before: <del className="text-rose-500 font-medium">{m.before}</del></span>
                        <span>After: <strong className="text-emerald-600 font-bold">{m.after}</strong></span>
                        <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold">
                          {m.improvement}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Creative Thumbnail Mockup */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 aspect-video group">
                <img 
                  src={campaign.adCreativeUrl} 
                  alt={campaign.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white text-xs font-medium">
                    Verified Ad Asset Mockup & Dashboard Screenshot
                  </div>
                </div>
              </div>

              {/* Humorous Highlight */}
              {campaign.humorousHighlight && (
                <div className="p-3 bg-slate-100 rounded-xl text-xs text-slate-600 italic border border-slate-200">
                  <span className="font-bold text-slate-800 not-italic">Behind the scenes: </span>
                  "{campaign.humorousHighlight}"
                </div>
              )}
            </div>

          </div>

        </div>

        {/* Footer CTA */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            Want similar high-ROAS results for your business?
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookAudit();
              }}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
            >
              <span>Get Similar Campaign Strategy</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
