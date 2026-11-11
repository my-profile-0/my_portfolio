import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink,
  Sparkles,
  Play
} from 'lucide-react';
import { VideoProject } from '../types';
import { MetaLogo, YouTubeLogo } from './BrandLogos';
import { motion } from 'motion/react';

interface VideoPreviewModalProps {
  video: VideoProject | null;
  onClose: () => void;
  onOrderEdit: () => void;
}

// Helper to extract clean YouTube Embed URL from youtubeId, youtubeUrl, or videoUrl
function getYoutubeEmbedUrl(video: VideoProject): string | null {
  const input = video.youtubeId || video.youtubeUrl || video.videoUrl || '';
  
  // 1. Direct 11-char ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(input.trim())) {
    return `https://www.youtube.com/embed/${input.trim()}?autoplay=1&rel=0&modestbranding=1`;
  }
  
  // 2. Extract from standard URL (youtube.com/watch?v=, youtu.be/, shorts/, embed/)
  const match = input.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/|watch\?.+&v=))([\w-]{11})/);
  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0&modestbranding=1`;
  }
  
  return null;
}

// Helper to get Facebook Embed plugin URL
function getFacebookEmbedUrl(url: string): string {
  return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=0&width=500&autoplay=1`;
}

export const VideoPreviewModal: React.FC<VideoPreviewModalProps> = ({
  video,
  onClose,
  onOrderEdit,
}) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!video) return null;

  const isFacebook = video.platform === 'Facebook' || (video.videoUrl && video.videoUrl.includes('facebook.com'));
  const isVertical = video.videoAspect === '9:16';
  const youtubeEmbedUrl = getYoutubeEmbedUrl(video);
  const directVideoUrl = video.videoUrl || video.youtubeUrl || (video.youtubeId ? `https://www.youtube.com/watch?v=${video.youtubeId}` : '#');

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className={`relative w-full ${isVertical ? 'max-w-md' : 'max-w-4xl'} bg-slate-900 text-white rounded-3xl shadow-2xl border border-slate-800 overflow-hidden my-auto transition-all`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
              {video.categoryLabel}
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] font-black bg-slate-800 text-slate-300 border border-slate-700 shrink-0">
              {video.videoAspect}
            </span>
            {isFacebook ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-blue-600/30 text-blue-300 border border-blue-500/30 shrink-0">
                <MetaLogo size={12} className="w-3 h-3" />
                Facebook
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-red-600/30 text-red-300 border border-red-500/30 shrink-0">
                <YouTubeLogo size={12} className="w-3 h-3" />
                YouTube
              </span>
            )}
            <h3 className="text-xs sm:text-sm font-bold text-slate-200 truncate hidden sm:inline">
              {video.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700 cursor-pointer shrink-0 ml-2"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Frame Area */}
        <div className="p-4 sm:p-6 bg-slate-950 flex flex-col items-center justify-center">
          
          {isFacebook ? (
            /* Facebook Player Container */
            <div className={`relative w-full ${isVertical ? 'aspect-[9/16] max-h-[65vh]' : 'aspect-video'} rounded-2xl overflow-hidden bg-slate-900 shadow-2xl border border-slate-800 flex flex-col items-center justify-center group`}>
              
              {/* Facebook Embed iframe */}
              <iframe
                src={getFacebookEmbedUrl(directVideoUrl)}
                title={video.title}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0 absolute inset-0 z-10"
              />

              {/* Background Thumbnail Fallback with Instant Launch Overlay if iframe is blocked by cookie policy */}
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="w-full h-full object-cover opacity-30 absolute inset-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-center pointer-events-auto">
                <a
                  href={directVideoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-xl flex items-center gap-2 transition-all hover:scale-105 border border-blue-400/40"
                >
                  <MetaLogo size={14} className="w-3.5 h-3.5" />
                  <span>Open Full Video on Facebook</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ) : youtubeEmbedUrl ? (
            /* YouTube Embed Player */
            <div className={`relative w-full ${isVertical ? 'aspect-[9/16] max-h-[68vh]' : 'aspect-video'} rounded-2xl overflow-hidden bg-black shadow-2xl border border-slate-800`}>
              <iframe
                src={youtubeEmbedUrl}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          ) : (
            /* Generic Fallback */
            <div className={`relative w-full ${isVertical ? 'aspect-[9/16]' : 'aspect-video'} rounded-2xl overflow-hidden bg-black shadow-2xl border border-slate-800 flex items-center justify-center`}>
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <a
                href={directVideoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="absolute px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black shadow-2xl flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                <span>Watch Video</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          )}

          {/* Title and Metadata info below video */}
          <div className="w-full mt-4 text-left">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
              {video.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-1">
              <span>Platform: <strong className="text-slate-200">{video.platform || (isFacebook ? 'Facebook' : 'YouTube')}</strong></span>
              <span>•</span>
              <span>Format: <strong className="text-slate-200">{video.videoAspect} High-Retention Edit</strong></span>
              {video.duration && (
                <>
                  <span>•</span>
                  <span>Duration: <strong className="text-slate-200">{video.duration}</strong></span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="px-5 sm:px-6 py-4 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-400 text-center sm:text-left flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Need high-retention video editing? 24-48h turnaround available.</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {directVideoUrl && directVideoUrl !== '#' && (
              <a
                href={directVideoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="px-3.5 py-2 rounded-xl border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                {isFacebook ? (
                  <>
                    <MetaLogo size={13} className="w-3.5 h-3.5" />
                    <span>Watch on Facebook</span>
                  </>
                ) : (
                  <>
                    <YouTubeLogo size={13} className="w-3.5 h-3.5" />
                    <span>Watch on YouTube</span>
                  </>
                )}
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            )}
            <button
              onClick={() => {
                onClose();
                onOrderEdit();
              }}
              className="flex-1 sm:flex-initial px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
            >
              <span>Order Video Edit</span>
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
};
