import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Video, 
  Zap, 
  ArrowRight,
  CheckCircle2,
  Layers,
  Award,
  BarChart3
} from 'lucide-react';
import { motion } from 'motion/react';
import { WHY_HIRE_ME_COMPARISON } from '../data/portfolioData';

interface WhyHireMeSectionProps {
  onHireClick: () => void;
}

export const WhyHireMeSection: React.FC<WhyHireMeSectionProps> = ({ onHireClick }) => {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  // Process / Pillars for the 3-column card view
  const valuePillars = [
    {
      icon: TrendingUp,
      badge: 'Pillar 1 • Ads Strategy',
      title: 'Direct-Response Architecture',
      description: 'Campaigns engineered strictly for ROAS & cashflow. Every ad group has clear scaling thresholds and zero wasted test budget.',
      bullets: [
        'Broad targeting with CBO & dynamic testing',
        'Server-side CAPI event deduplication (8.9+ EMQ)',
        'Negative keyword and audience leak pruning'
      ]
    },
    {
      icon: Video,
      badge: 'Pillar 2 • Video Craft',
      title: 'Retention-Engineered Video',
      description: 'Pacing, SFX, and visual pattern interrupts designed to hold viewers past the critical 3-second drop-off mark.',
      bullets: [
        'Sub-second cuts with zero dead air',
        'Custom kinetic captions and graphic callouts',
        '4K color space transforms and studio audio'
      ]
    },
    {
      icon: Zap,
      badge: 'Pillar 3 • Turnkey Flow',
      title: 'Dual-Discipline Advantage',
      description: 'No friction between media buyer and video editor. Ads are cut with conversion intent and iterated instantly based on live data.',
      bullets: [
        'Instant 24-48h creative hook iterations',
        'Transparent Slack & Frame.io collaboration',
        'Guaranteed commercial music & SFX licensing'
      ]
    }
  ];

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden border-t border-slate-200/80">
      {/* Background Decorative Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-bold mb-3 uppercase tracking-wider shadow-2xs">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>The Competitive Advantage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Why Brands Hire Me Over <span className="underline decoration-emerald-500 decoration-4 underline-offset-4 text-emerald-600">Generic Freelancers</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mt-3 font-normal leading-relaxed">
              Most marketers can't edit high-retention video. Most video editors don't understand ROAS or cost per acquisition. I bridge both.
            </p>
          </div>

          {/* View Mode Switcher Tabs */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 shadow-2xs">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'cards'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Core Pillars
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'table'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Side-by-Side Comparison
            </button>
          </div>
        </div>

        {/* View 1: 3-Column Pillars (Clean, Modern, Scannable) */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {valuePillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: idx * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-emerald-400 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shadow-2xs group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-slate-100 text-slate-700">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors mb-3">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                      {pillar.description}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-2.5 pt-4 border-t border-slate-100">
                      {pillar.bullets.map((b, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600">
                    <span>Verified Growth Standard</span>
                    <Sparkles className="w-4 h-4" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* View 2: Side-by-Side Comparison Matrix */}
        {viewMode === 'table' && (
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden mb-14">
            {/* Header */}
            <div className="grid grid-cols-12 bg-slate-50/80 p-5 text-xs font-bold uppercase tracking-wider border-b border-slate-200 text-slate-700">
              <div className="col-span-12 sm:col-span-4">Feature / Strategy Discipline</div>
              <div className="hidden sm:block col-span-4 text-rose-600 font-extrabold">Typical Generic Freelancer</div>
              <div className="hidden sm:block col-span-4 text-emerald-700 font-extrabold flex items-center gap-1.5">
                <span>Working With Arif</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-black uppercase">
                  Top Rated
                </span>
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-slate-100">
              {WHY_HIRE_ME_COMPARISON.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 p-5 sm:p-6 text-xs sm:text-sm items-center gap-4 hover:bg-slate-50/50 transition-colors"
                >
                  <div className="col-span-12 sm:col-span-4 font-extrabold text-slate-900">
                    {row.feature}
                  </div>

                  <div className="col-span-12 sm:col-span-4 text-slate-500 flex items-start gap-2 bg-rose-50/50 sm:bg-transparent p-3 sm:p-0 rounded-xl">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-xs">{row.standardFreelancer}</span>
                  </div>

                  <div className="col-span-12 sm:col-span-4 text-slate-900 flex items-start gap-2 bg-emerald-50/80 sm:bg-emerald-50/40 p-3 sm:p-3 rounded-2xl border border-emerald-100">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">{row.withMe}</span>
                      <span className="text-[11px] text-emerald-700 font-extrabold uppercase tracking-wider block mt-1">
                        ✓ {row.verdict}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Card (Exact Hero Style) */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-xl space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Zero Risk 20-Minute Strategy Audit</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Ready to Upgrade Your Marketing & Video Quality?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Book a free audit of your current ad account and video creative pipeline. Get actionable improvements within 24 hours.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              onClick={onHireClick}
              className="px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm tracking-wide transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2 cursor-pointer group"
            >
              <span>Get Free Strategy & Video Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
