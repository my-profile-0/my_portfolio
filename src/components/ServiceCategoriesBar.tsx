import React from 'react';
import { 
  Laptop, 
  Palette, 
  Smartphone, 
  Languages, 
  Film, 
  Sparkles, 
  Music, 
  Users, 
  UserCheck 
} from 'lucide-react';

interface CategoryItem {
  id: string;
  title: string;
  subtitle?: string;
  icon: React.ElementType;
  sectionTarget: string;
  isFeatured?: boolean;
}

interface ServiceCategoriesBarProps {
  onNavigate: (sectionId: string) => void;
}

export const ServiceCategoriesBar: React.FC<ServiceCategoriesBarProps> = ({ onNavigate }) => {
  // Exact 9 categories from the user's uploaded image
  const categories: CategoryItem[] = [
    {
      id: 'programming-tech',
      title: 'Programming\n& Tech',
      icon: Laptop,
      sectionTarget: 'skills',
    },
    {
      id: 'graphics-design',
      title: 'Graphics &\nDesign',
      icon: Palette,
      sectionTarget: 'skills',
    },
    {
      id: 'digital-marketing',
      title: 'Digital\nMarketing',
      icon: Smartphone,
      sectionTarget: 'marketing',
      isFeatured: true, // Has subtle mint-green glow in the screenshot
    },
    {
      id: 'writing-translation',
      title: 'Writing &\nTranslation',
      icon: Languages,
      sectionTarget: 'skills',
    },
    {
      id: 'video-animation',
      title: 'Video &\nAnimation',
      icon: Film,
      sectionTarget: 'video',
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: Sparkles,
      sectionTarget: 'skills',
    },
    {
      id: 'music-audio',
      title: 'Music & Audio',
      icon: Music,
      sectionTarget: 'video',
    },
    {
      id: 'business',
      title: 'Business',
      icon: Users,
      sectionTarget: 'testimonials',
    },
    {
      id: 'consulting',
      title: 'Consulting',
      icon: UserCheck,
      sectionTarget: 'contact',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
      {/* Container: clean horizontal scroll on mobile, perfect 9-column grid on desktop */}
      <div className="flex sm:grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 sm:gap-4 overflow-x-auto pb-4 sm:pb-0 scrollbar-none items-stretch justify-start lg:justify-center">
        {categories.map((cat) => {
          const IconComp = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => onNavigate(cat.sectionTarget)}
              className={`flex-shrink-0 w-[130px] sm:w-auto h-[140px] sm:h-[150px] p-4 sm:p-5 rounded-2xl flex flex-col justify-between items-start text-left transition-all duration-200 cursor-pointer ${
                cat.isFeatured
                  ? 'bg-emerald-50/60 border border-emerald-300 shadow-[0_4px_16px_rgba(16,185,129,0.12)] hover:shadow-[0_8px_24px_rgba(16,185,129,0.2)] hover:-translate-y-1'
                  : 'bg-white border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_22px_rgba(0,0,0,0.08)] hover:border-slate-300 hover:-translate-y-1'
              }`}
            >
              {/* Top Icon */}
              <div className="text-slate-800">
                <IconComp className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />
              </div>

              {/* Bottom Label */}
              <div className="w-full">
                <span className="block text-xs sm:text-[13px] font-bold text-slate-900 leading-tight whitespace-pre-line tracking-tight">
                  {cat.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
