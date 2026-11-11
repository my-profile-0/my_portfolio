import React, { useState } from 'react';
import { 
  TrendingUp, 
  Video, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Play, 
  DollarSign, 
  Flame, 
  Award,
  Zap,
  Layers,
  Search,
  Check,
  BarChart3,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO, MASTERED_TOOLS } from '../data/portfolioData';
import { ToolCategory } from '../types';
import { resolveBrandLogo } from './BrandLogos';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenVideoReel?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenVideoReel }) => {
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: { id: ToolCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Stack', count: MASTERED_TOOLS.length },
    { id: 'marketing', label: 'Paid Traffic & Ads', count: MASTERED_TOOLS.filter(t => t.category === 'marketing').length },
    { id: 'video', label: 'Video & Motion VFX', count: MASTERED_TOOLS.filter(t => t.category === 'video').length },
    { id: 'design', label: 'Design & Creatives', count: MASTERED_TOOLS.filter(t => t.category === 'design').length },
    { id: 'analytics', label: 'Analytics & Tracking', count: MASTERED_TOOLS.filter(t => t.category === 'analytics').length },
    { id: 'ecommerce', label: 'E-Commerce & Retention', count: MASTERED_TOOLS.filter(t => t.category === 'ecommerce').length },
  ];

  const filteredTools = MASTERED_TOOLS.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-[#0F0F10] via-slate-900 to-white">
      {/* Background Decorative Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      {/* Subtle accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white border border-white/15 text-xs font-semibold shadow-xs backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
            <span>Digital Marketer & Video Editor</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-500/15 text-orange-300 border border-orange-500/30 text-xs font-semibold backdrop-blur-md">
            <Award className="w-3.5 h-3.5 text-orange-400" />
            <span>Top Rated Growth Vibe • 5.0 ★ Rated</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
            I Turn Ad Spend into <span className="text-orange-400 underline decoration-orange-500 decoration-wavy decoration-2">Predictable Profit</span> & Raw Clips into <span className="text-white bg-white/10 border border-white/15 px-2 py-0.5 rounded-lg inline-block backdrop-blur-sm">Viral Machines</span>.
          </h1>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Most marketers <strong className="text-white font-semibold">don't understand video editing</strong>, and most video editors <strong className="text-white font-semibold">don't understand ROAS</strong>. <strong className="text-white font-semibold underline decoration-emerald-500 underline-offset-4 decoration-2">I bridge the gap</strong> — turning raw ad budgets into <strong className="text-white font-semibold">predictable, scalable profit</strong> with zero fluff.
          </p>

          {/* Witty disclaimer badge */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-500/10 border border-orange-500/25 rounded-full text-xs text-orange-200 font-medium backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-orange-400 shrink-0" />
            <span>{PERSONAL_INFO.wittyTagline}</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto mb-14"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('marketing')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <TrendingUp className="w-4 h-4" />
            <span>Explore Past Ads Data</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('video')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm tracking-wide border border-white/20 transition-all shadow-xs backdrop-blur-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <Video className="w-4 h-4 text-orange-400" />
            <span>Watch Video Portfolio</span>
          </motion.button>
        </motion.div>

        {/* 4 Core Metric Cards with Staggered Entrance */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mb-16">
          {[
            {
              icon: DollarSign,
              color: 'text-orange-400',
              bgColor: 'bg-orange-500/20',
              value: PERSONAL_INFO.adSpendManaged,
              label: 'Ad Spend Scaled (Meta & Google)',
              valueColor: 'text-white'
            },
            {
              icon: Flame,
              color: 'text-orange-400',
              bgColor: 'bg-orange-500/20',
              value: PERSONAL_INFO.avgRoas,
              label: 'Average Campaign ROAS',
              valueColor: 'text-orange-400'
            },
            {
              icon: Play,
              color: 'text-orange-400',
              bgColor: 'bg-orange-500/20',
              value: PERSONAL_INFO.videosEdited,
              label: 'Videos Edited & Mastered',
              valueColor: 'text-white'
            },
            {
              icon: CheckCircle2,
              color: 'text-orange-400',
              bgColor: 'bg-orange-500/20',
              value: PERSONAL_INFO.clientSatisfaction,
              label: '5-Star Client Rating',
              valueColor: 'text-white'
            }
          ].map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.35 + idx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-slate-900/80 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-700/80 shadow-xl hover:border-orange-400 hover:bg-slate-800/90 transition-all text-center group cursor-default"
              >
                <div className={`w-8 h-8 mx-auto rounded-lg ${metric.bgColor} ${metric.color} flex items-center justify-center mb-2 font-bold text-sm group-hover:bg-orange-500 group-hover:text-white transition-colors`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className={`text-2xl sm:text-3xl font-extrabold ${metric.valueColor} tracking-tight`}>
                  {metric.value}
                </div>
                <p className="text-xs text-slate-400 font-medium mt-1">
                  {metric.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* EXPANDED & PROMINENT: DAILY MASTERED SOFTWARE & PLATFORMS SHOWCASE */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm max-w-6xl mx-auto">
          
          {/* Header area */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold uppercase tracking-wider mb-2">
                <Layers className="w-3.5 h-3.5 text-emerald-600" />
                <span>Production Tech Stack & Tools</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                DAILY MASTERED SOFTWARE & PLATFORMS
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
                End-to-end operational software stack across paid media buying, 4K video post-production, motion graphics, and conversion analytics.
              </p>
            </div>

            {/* Quick search input */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tools or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-6 pb-6">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                  selectedCategory === cat.id ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-200 text-slate-600'
                }`}>
                  {cat.count}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Large, Prominent Tool Grid with Official Brand Logos */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredTools.map((tool, idx) => {
                const brandLogo = resolveBrandLogo(tool.id, tool.name, 28, 'w-7 h-7 shrink-0');

                return (
                  <motion.div
                    key={tool.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      duration: 0.35,
                      delay: (idx % 6) * 0.03,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
                    className="bg-slate-50 hover:bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-emerald-400 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group cursor-default"
                  >
                    <div>
                      {/* Top Row: Official Brand Logo + Experience Badge */}
                      <div className="flex items-start justify-between gap-3 mb-3.5">
                        <div className="w-10 h-10 rounded-xl bg-white p-1.5 border border-slate-200/80 shadow-2xs flex items-center justify-center">
                          {brandLogo || <Layers className="w-5 h-5 text-slate-700" />}
                        </div>

                        <div className="text-right">
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${tool.badgeColor}`}>
                            {tool.level}
                          </span>
                          <div className="text-[10px] text-slate-400 font-medium mt-0.5">
                            {tool.experience}
                          </div>
                        </div>
                      </div>

                      {/* Tool Name (Big & Bold) */}
                      <h4 className="text-base font-extrabold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                        {tool.name}
                      </h4>

                      {/* Category Label */}
                      <div className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider mt-0.5">
                        {tool.categoryLabel}
                      </div>

                      {/* Role / What it is used for */}
                      <p className="text-xs text-slate-600 font-medium mt-2 leading-relaxed">
                        {tool.role}
                      </p>

                      {/* Short concise description */}
                      <p className="text-[11px] text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                        {tool.description}
                      </p>
                    </div>

                    {/* Card Bottom: Verified Metric Badge */}
                    <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px]">
                      <span className="text-slate-400 font-medium">Outcome Metric:</span>
                      <span className="font-bold text-slate-900 flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-500" />
                        {tool.statsLabel}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* No results fallback */}
          {filteredTools.length === 0 && (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-slate-500 text-sm">No platforms matching "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="mt-3 text-xs font-bold text-emerald-600 hover:underline cursor-pointer"
              >
                Reset all filters
              </button>
            </div>
          )}

          {/* Bottom Footnote & Guarantee */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-ping" />
              <span className="font-semibold text-slate-700">
                20+ Mastered Platforms & Software ready to deploy on your projects
              </span>
            </div>

            <div className="flex items-center gap-3 font-medium">
              <button 
                onClick={() => onNavigate('skills')}
                className="text-emerald-700 hover:text-emerald-800 font-bold flex items-center gap-1 hover:underline cursor-pointer"
              >
                <span>View Full Skill Breakdown Matrix</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
