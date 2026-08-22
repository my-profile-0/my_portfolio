import React, { useState, useEffect } from 'react';
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
      element.scrollIntoView({ behavior: 'smooth' });
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
        <DigitalMarketingSection
          onSelectCampaign={(campaign) => setSelectedCampaign(campaign)}
          onBookAudit={handleBookAudit}
        />

        {/* 2nd Section: Video Editing & Motion Craft */}
        <VideoEditingSection
          onSelectVideo={(video) => setSelectedVideo(video)}
          onBookEditing={handleBookAudit}
        />

        {/* 3rd Section: Detailed Skills Matrix */}
        <SkillsSection />

        {/* 4th Section: Verified Client Testimonials */}
        <TestimonialsSection />

        {/* Value Differentiation: Why Hire Me */}
        <WhyHireMeSection onHireClick={handleBookAudit} />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* 5th Section: Contact & Booking */}
        <ContactSection />
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
