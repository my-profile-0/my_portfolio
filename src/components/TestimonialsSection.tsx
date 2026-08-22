import React from 'react';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles,
  Award
} from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white border-t border-slate-200/80 text-slate-900 relative overflow-hidden">
      {/* Background Decorative Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-bold mb-3 uppercase tracking-wider shadow-2xs">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>5.0 Star Client Feedback • Verified Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            What Founders & <span className="underline decoration-emerald-500 decoration-4 underline-offset-4 text-emerald-600">Brands Say</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal leading-relaxed">
            Real feedback from marketing directors, e-commerce founders, and YouTube creators who scaled with my campaigns and retention edits.
          </p>
        </div>

        {/* Testimonial Cards Grid (3-Column, Breathable, Elevated) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-emerald-400 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                {/* Top Row: Stars + Result Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-900">
                    {review.keyMetric}
                  </span>
                </div>

                {/* Testimonial Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mb-6 italic">
                  "{review.review}"
                </p>
              </div>

              {/* Client Info & Highlight note */}
              <div>
                {review.funnyPraise && (
                  <div className="bg-amber-50/70 p-3 rounded-2xl border border-amber-200/60 text-xs text-amber-900 font-medium mb-5">
                    <span className="font-bold">Client Note: </span>
                    {review.funnyPraise}
                  </div>
                )}

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatarUrl}
                      alt={review.clientName}
                      className="w-11 h-11 rounded-full object-cover border-2 border-slate-100 shadow-xs"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900">
                        {review.clientName}
                      </h4>
                      <span className="text-xs text-slate-500 font-medium block">
                        {review.role} • {review.company}
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] font-bold text-slate-400">
                    {review.projectType}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-16 p-6 rounded-3xl bg-white/80 backdrop-blur-sm border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-slate-700 font-semibold shadow-xs">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            100% On-Time Delivery Track Record
          </span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            NDAs Signed & Respected for All Proprietary Ads
          </span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Daily Communication & Transparent Slack Reporting
          </span>
        </div>

      </div>
    </section>
  );
};
