import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { ScrollReveal } from './components/ScrollReveal';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DigitalMarketingSection } from './components/DigitalMarketingSection';
import { VideoEditingSection } from './components/VideoEditingSection';
import { SkillsSection } from './components/SkillsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WhyHireMeSection } from './components/WhyHireMeSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CampaignDetailModal } from './components/CampaignDetailModal';
import { VideoPreviewModal } from './components/VideoPreviewModal';
import { CampaignCaseStudy, VideoProject } from './types';
import { VIDEO_PROJECTS } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('marketing');
  const [selectedCampaign, setSelectedCampaign] = useState<CampaignCaseStudy | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);

  // Buttery-smooth momentum scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.6,
    });

    (window as any).__lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);

  // Scrollspy to automatically highlight active nav section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['marketing', 'video', 'skills', 'testimonials', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(element, { offset: -65, duration: 1.15 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBookAudit = () => {
    handleNavigate('contact');
  };

  const handleOpenVideoReel = () => {
    if (VIDEO_PROJECTS.length > 0) {
      setSelectedVideo(VIDEO_PROJECTS[0]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-['Poppins',sans-serif] selection:bg-emerald-500 selection:text-white flex flex-col">
      {/* Slim Persistent Top Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Sticky Top Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          onNavigate={handleNavigate} 
          onOpenVideoReel={handleOpenVideoReel}
        />

        {/* 1st Section: Digital Marketing & Past Ads Performance */}
        <ScrollReveal yOffset={45}>
          <DigitalMarketingSection
            onSelectCampaign={(campaign) => setSelectedCampaign(campaign)}
            onBookAudit={handleBookAudit}
          />
        </ScrollReveal>

        {/* 2nd Section: Video Editing & Motion Craft */}
        <ScrollReveal yOffset={45}>
          <VideoEditingSection
            onSelectVideo={(video) => setSelectedVideo(video)}
            onBookEditing={handleBookAudit}
          />
        </ScrollReveal>

        {/* 3rd Section: Detailed Skills Matrix */}
        <ScrollReveal yOffset={40}>
          <SkillsSection />
        </ScrollReveal>

        {/* 4th Section: Verified Client Testimonials */}
        <ScrollReveal yOffset={40}>
          <TestimonialsSection />
        </ScrollReveal>

        {/* Value Differentiation: Why Hire Me */}
        <ScrollReveal yOffset={40}>
          <WhyHireMeSection onHireClick={handleBookAudit} />
        </ScrollReveal>

        {/* Frequently Asked Questions */}
        <ScrollReveal yOffset={40}>
          <FaqSection />
        </ScrollReveal>

        {/* 5th Section: Contact & Booking */}
        <ScrollReveal yOffset={40}>
          <ContactSection />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modals for deep inspection */}
      <CampaignDetailModal
        campaign={selectedCampaign}
        onClose={() => setSelectedCampaign(null)}
        onBookAudit={handleBookAudit}
      />

      <VideoPreviewModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
        onOrderEdit={handleBookAudit}
      />
    </div>
  );
}
