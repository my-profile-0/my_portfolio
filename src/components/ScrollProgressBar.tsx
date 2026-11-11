import React, { useState, useEffect } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const totalScrollableDistance = scrollHeight - clientHeight;

      if (totalScrollableDistance <= 0) {
        setScrollProgress(0);
      } else {
        const currentProgress = Math.min(
          100,
          Math.max(0, (scrollY / totalScrollableDistance) * 100)
        );
        setScrollProgress(currentProgress);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    // Calculate initial progress on mount
    updateScrollProgress();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-[3px] z-[60] pointer-events-none bg-black/20 backdrop-blur-xs"
      role="progressbar"
      aria-label="Portfolio scroll progress"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-400 transition-[width] duration-75 ease-out shadow-[0_0_10px_rgba(249,115,22,0.8)] relative"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Subtle glowing tip for added polish */}
        {scrollProgress > 0 && scrollProgress < 100 && (
          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_6px_#fff,0_0_10px_rgba(249,115,22,0.9)] opacity-90" />
        )}
      </div>
    </div>
  );
};
