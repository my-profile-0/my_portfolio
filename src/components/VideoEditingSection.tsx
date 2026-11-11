import React, { useState } from 'react';
import { 
  Video, 
  Play, 
  Flame, 
  Clock, 
  SlidersHorizontal,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { VIDEO_PROJECTS } from '../data/portfolioData';
import { VideoProject, VideoCategory } from '../types';

interface VideoEditingSectionProps {
  onSelectVideo: (video: VideoProject) => void;
  onBookEditing: () => void;
}

export const VideoEditingSection: React.FC<VideoEditingSectionProps> = ({
  onSelectVideo,
  onBookEditing,
}) => {
  const [activeCategory, setActiveCategory] = useState<VideoCategory>('all');
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const filteredVideos = VIDEO_PROJECTS.filter((v) => {
    if (activeCategory === 'all') return true;
    return v.category === activeCategory;
  });

  return (
    <section id="video" className="py-24 bg-gradient-to-b from-slate-50 via-[#0F172A] to-[#0B132B] text-white relative overflow-hidden">
      {/* Background Decorative Grids & Multi-Color Vibrant Ambient Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      <div className="absolute top-20 left-10 w-[550px] h-[350px] bg-purple-600/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[600px] h-[400px] bg-indigo-600/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[300px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold mb-3 uppercase tracking-wider shadow-xs">
              <Video className="w-3.5 h-3.5 text-emerald-400" />
              <span>Retention Post-Production • 4K Motion Craft</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Video Editing & <span className="underline decoration-emerald-400 decoration-4 underline-offset-4 text-emerald-400">Viral Retention Visuals</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mt-3 font-normal leading-relaxed">
              Pacing engineered for 80%+ average view duration. Dynamic zooms, kinetic captions, sound design, and color grading that stop the scroll.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-2xl border border-white/10 shadow-xs text-xs font-bold text-emerald-400 shrink-0"
          >
            <Flame className="w-4 h-4 text-amber-400 shrink-0" />
            <span>450+ High-Retention Videos Mastered</span>
          </motion.div>
        </motion.div>

        {/* Video Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {[
            { id: 'all', label: 'All Videos (14)' },
            { id: 'shorts', label: 'Shorts & Reels (9:16)' },
            { id: 'facebook', label: 'Facebook Videos & Reels' },
            { id: 'youtube', label: 'YouTube Long-Form (16:9)' },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveCategory(tab.id as VideoCategory)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10 shadow-2xs'
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Video Cards Grid (4-Column on XL screens, 3 on LG) */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video, idx) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.45,
                  delay: (idx % 4) * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6, scale: 1.015, transition: { duration: 0.22 } }}
                whileTap={{ scale: 0.985 }}
                onClick={() => onSelectVideo(video)}
                className="bg-slate-900/90 backdrop-blur-md rounded-2xl border border-white/10 hover:border-emerald-400/60 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 transition-all overflow-hidden cursor-pointer flex flex-col group"
              >
              {/* Video Thumbnail with Hover Overlay and Play Button */}
              <div className={`relative w-full overflow-hidden bg-slate-950 ${video.videoAspect === '9:16' ? 'h-72 sm:h-80' : 'h-52 sm:h-56'}`}>
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none" />

                {/* Aspect Ratio Badge (Top Right) */}
                <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-md bg-emerald-500/95 text-slate-950 text-[11px] font-black shadow-sm tracking-wide">
                  {video.videoAspect}
                </div>

                {/* Platform & Category Tag Badge (Top Left) */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-slate-900/90 backdrop-blur-md text-[11px] font-bold text-white border border-white/15 shadow-sm">
                    {video.categoryLabel}
                  </span>
                  {video.platform && (
                    <span className={`px-2 py-1 rounded-md text-[10px] font-extrabold shadow-sm ${
                      video.platform === 'YouTube' 
                        ? 'bg-red-600/90 text-white' 
                        : 'bg-blue-600/90 text-white'
                    }`}>
                      {video.platform}
                    </span>
                  )}
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-13 h-13 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-6 h-6 fill-slate-950 ml-0.5" />
                  </div>
                </div>

                {/* Optional Duration Pill (Bottom Right) */}
                {video.duration && (
                  <div className="absolute bottom-3 right-3 z-10 px-2 py-0.5 rounded bg-black/75 text-white text-[10px] font-semibold backdrop-blur-xs flex items-center gap-1 border border-white/10">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    <span>{video.duration}</span>
                  </div>
                )}
              </div>

              {/* Clean Title Section Beneath Thumbnail */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-emerald-400 block uppercase tracking-wider mb-1">
                    {video.categoryLabel}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug line-clamp-2">
                    {video.title}
                  </h3>
                </div>

                <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-emerald-400 transition-colors">
                  <span>Watch Video</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Before/After Color Grading & Retention Slider */}
        <div className="bg-white/[0.04] backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold mb-2">
                <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Post-Production Mastery</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Raw LOG Footage vs. Mastered 4K Color Grade
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                Drag the interactive comparison slider to see the difference between flat raw camera footage and a finalized color-graded edit.
              </p>
            </div>

            {/* Slider Showcase Box */}
            <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/20 select-none">
              
              {/* Right side image: Mastered Color Grade */}
              <img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&auto=format&fit=crop&q=80"
                alt="Mastered Cut"
                className="absolute inset-0 w-full h-full object-cover saturate-150 contrast-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-xs font-black shadow-md z-10">
                ✨ 4K Mastered & Graded
              </div>

              {/* Left side image: Raw LOG Footage (Clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&auto=format&fit=crop&q=80"
                  alt="Raw Footage"
                  className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-75 brightness-110 max-w-none"
                  style={{ width: '100%', height: '100%' }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/90 text-white text-xs font-bold shadow-md z-10 border border-white/20">
                  📁 Flat Raw Camera LOG
                </div>
              </div>

              {/* Slider Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.8)] cursor-ew-resize z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center shadow-xl border-2 border-white text-xs font-black">
                  ↔
                </div>
              </div>

              {/* Range Input on Top for touch/click dragging */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              />
            </div>

            {/* Feature Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-white/[0.04] p-4 rounded-2xl border border-white/10 text-center shadow-lg">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto mb-1.5" />
                <h4 className="text-xs font-bold text-white">Color Space Transform</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Rec.709 & HDR accurate mastering</p>
              </div>
              <div className="bg-white/[0.04] p-4 rounded-2xl border border-white/10 text-center shadow-lg">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto mb-1.5" />
                <h4 className="text-xs font-bold text-white">Sub-Second Retention Cuts</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Zero dead air, high dopamine flow</p>
              </div>
              <div className="bg-white/[0.04] p-4 rounded-2xl border border-white/10 text-center shadow-lg">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto mb-1.5" />
                <h4 className="text-xs font-bold text-white">Studio Audio Mastering</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Crisp dialogue with dynamic SFX</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
