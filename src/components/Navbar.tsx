import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  TrendingUp, 
  Video, 
  Zap, 
  Star, 
  Mail, 
  Sparkles,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'marketing', label: 'Digital Marketing', icon: TrendingUp },
    { id: 'video', label: 'Video Editing', icon: Video },
    { id: 'skills', label: 'Skills & Tools', icon: Zap },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0F0F10]/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3' 
          : 'bg-[#0F0F10] border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <button 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-left group focus:outline-none cursor-pointer py-1"
        >
          <div className="font-bold text-white tracking-tight flex items-center gap-1.5 text-lg sm:text-xl group-hover:text-orange-400 transition-colors">
            {PERSONAL_INFO.name}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </div>
          <p className="text-[11px] text-gray-400 font-medium hidden sm:block leading-tight">
            Growth Marketer & Video Specialist
          </p>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm tracking-wide transition-colors cursor-pointer py-1 ${
                  isActive 
                    ? 'text-orange-500 font-medium' 
                    : 'text-gray-400 hover:text-white font-normal'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Hire</span>
          </div>

          <button
            onClick={() => handleNavClick('contact')}
            className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold tracking-wide transition-all flex items-center gap-1.5 shadow-md shadow-orange-500/20 cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => handleNavClick('contact')}
            className="px-3 py-1.5 rounded-lg bg-orange-500 text-white text-xs font-semibold"
          >
            Hire Me
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/10 text-gray-300 hover:bg-white/20 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F0F10] border-b border-white/10 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="py-2 px-3 bg-orange-500/10 border border-orange-500/20 rounded-lg text-xs font-medium text-orange-300 flex items-center justify-between mb-3">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-orange-400" />
              Verified Marketing & Editing Pro
            </span>
            <span className="font-bold text-orange-400">{PERSONAL_INFO.avgRoas} Avg ROAS</span>
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors text-left ${
                  isActive
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                {item.label}
              </button>
            );
          })}

          <div className="pt-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm font-bold text-center flex items-center justify-center gap-2 shadow-md shadow-orange-500/25"
            >
              <Sparkles className="w-4 h-4" />
              Book Free Growth Strategy Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
