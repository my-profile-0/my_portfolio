import React, { useState } from 'react';
import { 
  Zap, 
  Search, 
  TrendingUp,
  Video,
  BarChart3,
  LayoutGrid
} from 'lucide-react';
import { ALL_SKILLS } from '../data/portfolioData';
import { SkillCategory } from '../types';
import {
  MetaLogo,
  GoogleAdsLogo,
  TikTokLogo,
  PremiereProLogo,
  AfterEffectsLogo,
  PhotoshopLogo,
  DaVinciResolveLogo,
  CapCutLogo,
  GA4Logo,
  KlaviyoLogo,
  MetaCAPILogo,
  CROLogo,
  CopywritingLogo,
  ViralRetentionLogo,
  SoundDesignLogo,
  AdSpyLogo
} from './BrandLogos';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: { id: SkillCategory; label: string; icon: React.ElementType }[] = [
    { id: 'all', label: 'All Skills', icon: LayoutGrid },
    { id: 'marketing', label: 'Digital Marketing', icon: TrendingUp },
    { id: 'video', label: 'Video & Motion', icon: Video },
    { id: 'analytics', label: 'Analytics & Tracking', icon: BarChart3 },
    { id: 'tools', label: 'Software & Tools', icon: Zap },
  ];

  // Helper to render official brand logo components
  const renderSkillBrandLogo = (id: string, name: string) => {
    const lower = (name + ' ' + id).toLowerCase();
    
    // Video stack
    if (lower.includes('premiere')) return <PremiereProLogo size={24} className="w-6 h-6 shrink-0" />;
    if (lower.includes('after effects')) return <AfterEffectsLogo size={24} className="w-6 h-6 shrink-0" />;
    if (lower.includes('photoshop')) return <PhotoshopLogo size={24} className="w-6 h-6 shrink-0" />;
    if (lower.includes('davinci')) return <DaVinciResolveLogo size={24} className="w-6 h-6 shrink-0" />;
    if (lower.includes('capcut')) return <CapCutLogo size={24} className="w-6 h-6 shrink-0" />;
    if (lower.includes('short-form') || lower.includes('viral')) return <ViralRetentionLogo size={24} className="w-6 h-6 shrink-0" />;
    if (lower.includes('sound') || lower.includes('audio')) return <SoundDesignLogo size={24} className="w-6 h-6 shrink-0" />;

    // Marketing & Media Stack
    if (lower.includes('capi') || lower.includes('conversions api')) return <MetaCAPILogo size={24} className="w-6 h-6 shrink-0" />;
    if (lower.includes('meta') || lower.includes('facebook')) return <MetaLogo size={24} className="w-6 h-6 shrink-0" />;
    if (lower.includes('google ads') || lower.includes('p-max')) return <GoogleAdsLogo size={24} className="w-6 h-6 shrink-0" />;
    if (lower.includes('tiktok')) return <TikTokLogo size={24} className="w-6 h-6 shrink-0" />;
    if (lower.includes('klaviyo') || lower.includes('email')) return <KlaviyoLogo size={24} className="w-6 h-6 shrink-0" />;
    if (lower.includes('cro') || lower.includes('funnel')) return <CROLogo size={24} className="w-6 h-6 shrink-0" />;
    if (lower.includes('copywriting') || lower.includes('hook')) return <CopywritingLogo size={24} className="w-6 h-6 shrink-0" />;
    if (lower.includes('ga4') || lower.includes('analytics') || lower.includes('tag manager')) return <GA4Logo size={24} className="w-6 h-6 shrink-0" />;
    if (lower.includes('spy') || lower.includes('competitor') || lower.includes('foreplay')) return <AdSpyLogo size={24} className="w-6 h-6 shrink-0" />;

    return <Zap className="w-6 h-6 text-emerald-400" />;
  };

  // Helper for short, high-impact titles
  const getConciseTitle = (name: string): string => {
    if (name.includes('Meta Ads Manager')) return 'Meta Ads & CBO Scaling';
    if (name.includes('Google Ads & Performance Max')) return 'Google Ads & P-Max';
    if (name.includes('TikTok Ads Manager')) return 'TikTok & Spark Ads';
    if (name.includes('Conversion Rate Optimization')) return 'CRO & Funnel Strategy';
    if (name.includes('Direct-Response Ad Copywriting')) return 'Direct-Response Copy';
    if (name.includes('Email Marketing & Retention')) return 'Email & Retention (Klaviyo)';
    if (name.includes('Adobe Premiere Pro')) return 'Adobe Premiere Pro';
    if (name.includes('Adobe After Effects')) return 'After Effects (Motion VFX)';
    if (name.includes('DaVinci Resolve')) return 'DaVinci Resolve (Color)';
    if (name.includes('Short-Form Viral Retention')) return 'Viral Retention Editing';
    if (name.includes('Sound Design & Audio')) return 'Sound Design & Audio SFX';
    if (name.includes('CapCut Pro')) return 'CapCut Pro Power User';
    if (name.includes('Google Analytics 4')) return 'GA4 & Tag Manager (GTM)';
    if (name.includes('Meta Conversions API')) return 'Meta CAPI (Server-Side)';
    if (name.includes('Ad Spy & Competitor')) return 'Ad Spy & Competitor Intel';
    if (name.includes('Adobe Photoshop')) return 'Photoshop Creative Design';
    return name;
  };

  // Helper for category label tag
  const getCategoryLabel = (category: string): string => {
    switch (category) {
      case 'marketing':
        return 'Paid Media';
      case 'video':
        return 'Post-Production';
      case 'analytics':
        return 'Data & Tracking';
      case 'tools':
        return 'Creative Stack';
      default:
        return 'Specialization';
    }
  };

  const filteredSkills = ALL_SKILLS.filter((s) => {
    const matchesCategory = activeCategory === 'all' || s.category === activeCategory;
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#0B132B] via-slate-950 to-[#0F172A] text-white relative overflow-hidden">
      {/* Background Subtle Decorative Grids & Multi-Color Ambient Mesh Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      <div className="absolute top-10 left-10 w-[550px] h-[350px] bg-violet-600/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-cyan-500/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-5 left-1/3 w-[450px] h-[280px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold mb-3 uppercase tracking-wider shadow-xs">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>Technical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Tools & <span className="underline decoration-emerald-400 decoration-4 underline-offset-4 text-emerald-400">Core Arsenal</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 font-normal leading-relaxed">
            The direct-response ad platforms, post-production editing suites, and tracking infrastructure I operate daily.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            {categories.map((cat) => {
              const IconComp = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 scale-[1.02]'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10 shadow-2xs'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tools & skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-2xs"
            />
          </div>
        </div>

        {/* Compact 4-Column Skill Grid with Official Brand Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => {
            return (
              <div
                key={skill.id}
                className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-4 border border-white/10 hover:border-emerald-400/60 shadow-md hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  {/* Official Tool / Brand Logo (Clean 24x24px container) */}
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 group-hover:border-emerald-400/40 transition-colors shadow-2xs">
                    {renderSkillBrandLogo(skill.id, skill.name)}
                  </div>

                  {/* Title & Category Tag */}
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-extrabold text-white truncate group-hover:text-emerald-300 transition-colors tracking-tight">
                      {getConciseTitle(skill.name)}
                    </h3>
                    <span className="text-[11px] font-semibold text-slate-400 block mt-0.5">
                      {getCategoryLabel(skill.category)}
                    </span>
                  </div>
                </div>

                {/* Years of Experience Badge */}
                <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-black bg-white/10 text-slate-200 group-hover:bg-emerald-500/20 group-hover:text-emerald-300 transition-colors shrink-0 whitespace-nowrap border border-white/5">
                  {skill.experience}
                </span>
              </div>
            );
          })}
        </div>

        {/* Empty Search Fallback */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-12 bg-white/[0.04] backdrop-blur-md rounded-2xl border border-white/10">
            <p className="text-slate-300 text-sm">No matching tools found for "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-2 text-xs font-bold text-emerald-400 hover:underline cursor-pointer"
            >
              Clear filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
