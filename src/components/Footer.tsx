import React from 'react';
import { 
  ArrowUp, 
  TrendingUp, 
  Video, 
  Zap, 
  Star, 
  Mail, 
  Heart,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 relative overflow-hidden">
      {/* Background Decorative Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="font-extrabold text-white text-xl tracking-tight block">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {PERSONAL_INFO.title}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed font-normal">
              Helping modern brands, creators, and founders scale predictably through direct-response media buying and retention-driven video editing.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-slate-300 text-xs border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for select Q3/Q4 scaling projects</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Portfolio Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('marketing')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>1. Digital Marketing & Past Ads</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('video')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Video className="w-3.5 h-3.5 text-emerald-400" />
                  <span>2. Video Editing & Motion Craft</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('skills')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>3. Detailed Skills & Tech Matrix</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('testimonials')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Star className="w-3.5 h-3.5 text-emerald-400" />
                  <span>4. Client Testimonials & Reviews</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>5. Hire Me & Contact</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Stats Card */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Verified Metrics
            </h4>
            <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800/80 space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 font-medium">Ad Spend Scaled:</span>
                <span className="font-extrabold text-white">{PERSONAL_INFO.adSpendManaged}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 font-medium">Average ROAS:</span>
                <span className="font-extrabold text-emerald-400">{PERSONAL_INFO.avgRoas}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 font-medium">Videos Delivered:</span>
                <span className="font-extrabold text-white">{PERSONAL_INFO.videosEdited}</span>
              </div>
              <div className="flex justify-between items-center pt-1 border-t border-slate-800">
                <span className="text-slate-400 font-medium">Client Rating:</span>
                <span className="font-extrabold text-amber-400 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400" /> 5.0 Top Rated
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Direct-Response & Retention Craft.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800 flex items-center gap-2 text-xs font-bold shadow-xs cursor-pointer"
            title="Scroll to Top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
