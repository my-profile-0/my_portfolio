import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

// 1. Meta / Facebook Official Infinity Logo
export const MetaLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M16.68 4C14.75 4 13.06 4.96 12 6.44C10.94 4.96 9.25 4 7.32 4C3.83 4 1 6.83 1 10.32C1 14.89 5.25 18.66 10.98 19.86C11.65 20 12.35 20 13.02 19.86C18.75 18.66 23 14.89 23 10.32C23 6.83 20.17 4 16.68 4ZM12 16.73C7.45 15.65 4.09 12.68 4.09 10.32C4.09 8.54 5.54 7.09 7.32 7.09C8.82 7.09 10.12 7.97 10.82 9.38L12 11.75L13.18 9.38C13.88 7.97 15.18 7.09 16.68 7.09C18.46 7.09 19.91 8.54 19.91 10.32C19.91 12.68 16.55 15.65 12 16.73Z"
      fill="url(#metaGradient)"
    />
    <defs>
      <linearGradient id="metaGradient" x1="1" y1="4" x2="23" y2="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0064E0" />
        <stop offset="0.5" stopColor="#0082FB" />
        <stop offset="1" stopColor="#00C6FF" />
      </linearGradient>
    </defs>
  </svg>
);

// 2. Google Ads Official Icon
export const GoogleAdsLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M4.68 15.42L11.53 3.56C12.18 2.44 13.62 2.05 14.74 2.7C15.86 3.35 16.25 4.79 15.6 5.91L8.75 17.77C8.1 18.89 6.66 19.28 5.54 18.63C4.42 17.98 4.03 16.54 4.68 15.42Z"
      fill="#FBBC04"
    />
    <path
      d="M19.32 15.42L12.47 3.56C11.82 2.44 10.38 2.05 9.26 2.7C8.14 3.35 7.75 4.79 8.4 5.91L15.25 17.77C15.9 18.89 17.34 19.28 18.46 18.63C19.58 17.98 19.97 16.54 19.32 15.42Z"
      fill="#4285F4"
    />
    <circle cx="6.5" cy="17.5" r="3.5" fill="#34A853" />
  </svg>
);

// 3. TikTok Official Musical Note Logo
export const TikTokLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.31 0 .61.05.89.14V8.96a6.37 6.37 0 0 0-.89-.07A6.34 6.34 0 0 0 3 15.23a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.08a8.27 8.27 0 0 0 4.91 1.61V7.24a4.83 4.83 0 0 1-1-.55z"
      fill="#000000"
    />
    <path
      d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-1v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.31 0 .61.05.89.14V8.96a6.37 6.37 0 0 0-.89-.07A6.34 6.34 0 0 0 3 15.23a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.08a8.27 8.27 0 0 0 4.91 1.61V7.24a4.83 4.83 0 0 1-1-.55z"
      fill="#25F4EE"
      opacity="0.75"
    />
    <path
      d="M18.59 5.69a4.83 4.83 0 0 1-3.77-4.25V1h-2v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.31 0 .61.05.89.14V7.96a6.37 6.37 0 0 0-.89-.07A6.34 6.34 0 0 0 2 14.23a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.08a8.27 8.27 0 0 0 4.91 1.61V6.24a4.83 4.83 0 0 1-1-.55z"
      fill="#FE2C55"
      opacity="0.75"
    />
  </svg>
);

// 4. Adobe Premiere Pro Official Badge ('Pr')
export const PremiereProLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="5" fill="#00005B" />
    <text
      x="12"
      y="16.5"
      fill="#9999FF"
      fontSize="13"
      fontWeight="900"
      fontFamily="system-ui, -apple-system, sans-serif"
      textAnchor="middle"
      letterSpacing="-0.5px"
    >
      Pr
    </text>
  </svg>
);

// 5. Adobe After Effects Official Badge ('Ae')
export const AfterEffectsLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="5" fill="#00005B" />
    <text
      x="12"
      y="16.5"
      fill="#9999FF"
      fontSize="13"
      fontWeight="900"
      fontFamily="system-ui, -apple-system, sans-serif"
      textAnchor="middle"
      letterSpacing="-0.5px"
    >
      Ae
    </text>
  </svg>
);

// 6. Adobe Photoshop Official Badge ('Ps')
export const PhotoshopLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="5" fill="#001E36" />
    <text
      x="12"
      y="16.5"
      fill="#31A8FF"
      fontSize="13"
      fontWeight="900"
      fontFamily="system-ui, -apple-system, sans-serif"
      textAnchor="middle"
      letterSpacing="-0.5px"
    >
      Ps
    </text>
  </svg>
);

// 7. Adobe Illustrator Official Badge ('Ai')
export const IllustratorLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="5" fill="#330000" />
    <text
      x="12"
      y="16.5"
      fill="#FF9A00"
      fontSize="13"
      fontWeight="900"
      fontFamily="system-ui, -apple-system, sans-serif"
      textAnchor="middle"
      letterSpacing="-0.5px"
    >
      Ai
    </text>
  </svg>
);

// 8. DaVinci Resolve Official Tri-Color Pinwheel
export const DaVinciResolveLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="5" fill="#18191C" />
    <path d="M12 12L7.5 4.5C9 3.5 11 3 12 3C13.5 3 15 3.5 16 4.5L12 12Z" fill="#FF3B30" />
    <path d="M12 12L4.5 16.5C3.5 15 3 13.5 3 12C3 10.5 3.5 9 4.5 7.5L12 12Z" fill="#00C7BE" />
    <path d="M12 12L19.5 16.5C18.5 18 17 19.5 15 20.5C13.5 21 12 21 10.5 20.5L12 12Z" fill="#FF9500" />
    <path d="M12 12L16.5 7.5C18 8.5 19.5 10 20.5 12C21 13.5 20.5 15 19.5 16.5L12 12Z" fill="#FF2D55" />
    <circle cx="12" cy="12" r="2.5" fill="#18191C" />
  </svg>
);

// 9. CapCut Official Logo
export const CapCutLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="5" fill="#000000" />
    <path d="M5 8.5L11 4.5L19 9.5L13 13.5L5 8.5Z" fill="#FFFFFF" />
    <path d="M5 15.5L11 19.5L19 14.5L13 10.5L5 15.5Z" fill="#FFFFFF" />
  </svg>
);

// 10. Google Analytics 4 (GA4) Official Logo
export const GA4Logo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="4" y="12" width="4" height="8" rx="2" fill="#F9AB00" />
    <rect x="10" y="8" width="4" height="12" rx="2" fill="#E37400" />
    <rect x="16" y="4" width="4" height="16" rx="2" fill="#F9AB00" />
  </svg>
);

// 11. Google Tag Manager (GTM) Official Logo
export const GTMLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" fill="#246FDB" opacity="0.15" />
    <path d="M12 5.5L6.5 8.5V14.5L12 17.5L17.5 14.5V8.5L12 5.5Z" fill="#246FDB" />
    <circle cx="12" cy="11.5" r="2.5" fill="#FFFFFF" />
  </svg>
);

// 12. Klaviyo Official Logo
export const KlaviyoLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="5" fill="#242424" />
    <path d="M6 6L14 12L6 18V6Z" fill="#FF5A36" />
    <rect x="15" y="6" width="3" height="12" rx="1.5" fill="#FF5A36" />
  </svg>
);

// 13. Meta Conversions API (CAPI / Server) Official Logo
export const MetaCAPILogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="5" fill="#0064E0" />
    <path
      d="M12 6L6 9.5V14.5L12 18L18 14.5V9.5L12 6Z"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="2" fill="#FFFFFF" />
  </svg>
);

// 14. Shopify Official Logo
export const ShopifyLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="5" fill="#95BF47" />
    <path
      d="M16 7L14.5 4H10.5L9 7H6L8 19H17L19 7H16Z"
      fill="#FFFFFF"
    />
    <text
      x="12.5"
      y="15.5"
      fill="#95BF47"
      fontSize="9"
      fontWeight="900"
      fontFamily="system-ui, sans-serif"
      textAnchor="middle"
    >
      S
    </text>
  </svg>
);

// 15. Figma Official Logo
export const FigmaLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="5" fill="#1E1E1E" />
    <path d="M8.5 5.5H12V9H8.5C7.67 9 7 8.33 7 7.5C7 6.67 7.67 5.5 8.5 5.5Z" fill="#F24E1E" />
    <path d="M12 5.5H15.5C16.33 5.5 17 6.67 17 7.5C17 8.33 16.33 9 15.5 9H12V5.5Z" fill="#FF7262" />
    <path d="M8.5 9H12V12.5H8.5C7.67 12.5 7 11.83 7 11C7 10.17 7.67 9 8.5 9Z" fill="#A259FF" />
    <circle cx="14" cy="11" r="2" fill="#1ABCFE" />
    <path d="M8.5 12.5H12V16C12 16.83 11.33 17.5 10.5 17.5C9.67 17.5 9 16.83 9 16C9 15.17 9 12.5 8.5 12.5Z" fill="#0ACF83" />
  </svg>
);

// 16. YouTube Ads Logo
export const YouTubeLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="5" fill="#FF0000" />
    <polygon points="10,8 16,12 10,16" fill="#FFFFFF" />
  </svg>
);

// 17. Triple Whale Logo
export const TripleWhaleLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="5" fill="#6A38EB" />
    <path
      d="M6 14C8 10 12 10 14 12C16 14 18 12 19 10C17 16 11 17 6 14Z"
      fill="#FFFFFF"
    />
    <circle cx="9" cy="11" r="1.2" fill="#6A38EB" />
  </svg>
);

// 18. Canva Logo
export const CanvaLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="5" fill="#00C4CC" />
    <text
      x="12"
      y="16"
      fill="#FFFFFF"
      fontSize="11"
      fontWeight="900"
      fontFamily="system-ui, sans-serif"
      textAnchor="middle"
      fontStyle="italic"
    >
      C
    </text>
  </svg>
);

// 19. Descript Logo
export const DescriptLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="5" fill="#E11D48" />
    <path d="M7 6H13C15.5 6 17 7.8 17 12C17 16.2 15.5 18 13 18H7V6Z" stroke="#FFFFFF" strokeWidth="2.5" />
  </svg>
);

// 20. Frame.io Logo
export const FrameIOLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="5" fill="#673AB7" />
    <path d="M7 7H17V10H10V12H15V15H10V17H7V7Z" fill="#FFFFFF" />
  </svg>
);

// 21. CRO & Funnels
export const CROLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="5" fill="#059669" />
    <path
      d="M6 15L10 11L13 14L18 9M18 9H14M18 9V13"
      stroke="#FFFFFF"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 22. Direct-Response Copywriting
export const CopywritingLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="5" fill="#D97706" />
    <path
      d="M7 8H17M7 12H14M7 16H11"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// 23. Viral Retention Editing
export const ViralRetentionLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="5" fill="#DC2626" />
    <path
      d="M12 4C10 7.5 8 9.5 8 13C8 15.76 10.24 18 13 18C15.76 18 18 15.76 18 13C18 9.5 15.5 8 15.5 8C15.5 8 15 10 13.5 11C13 10.5 13 9 13.5 6C13.5 6 12.5 5 12 4Z"
      fill="#FFFFFF"
    />
  </svg>
);

// 24. Sound Design & SFX
export const SoundDesignLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="5" fill="#4F46E5" />
    <path
      d="M6 10V14M9 7V17M12 4V20M15 8V16M18 10V14"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// 25. Competitor & AdSpy Tools
export const AdSpyLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="5" fill="#7C3AED" />
    <circle cx="12" cy="12" r="3" fill="#FFFFFF" />
    <path
      d="M3 12C5.5 7 8.5 4.5 12 4.5C15.5 4.5 18.5 7 21 12C18.5 17 15.5 19.5 12 19.5C8.5 19.5 5.5 17 3 12Z"
      stroke="#FFFFFF"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 26. WhatsApp Official Logo
export const WhatsAppLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="6" fill="#25D366" />
    <path
      d="M17.5 14.3c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.6c.2.3 2.4 3.7 5.8 5.1.8.3 1.4.5 1.9.7.8.3 1.6.2 2.2.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.6.2-1.7-.1-.1-.3-.2-.6-.3z"
      fill="#FFFFFF"
    />
  </svg>
);

// Universal logo resolver function helper
export const resolveBrandLogo = (id: string, name: string = '', size: number = 24, className: string = 'w-6 h-6 shrink-0') => {
  const lower = (id + ' ' + name).toLowerCase();
  
  if (lower.includes('premiere') || lower.includes('pr')) return <PremiereProLogo size={size} className={className} />;
  if (lower.includes('after effects') || lower.includes('ae')) return <AfterEffectsLogo size={size} className={className} />;
  if (lower.includes('photoshop') || lower.includes('ps')) return <PhotoshopLogo size={size} className={className} />;
  if (lower.includes('illustrator') || lower.includes('ai')) return <IllustratorLogo size={size} className={className} />;
  if (lower.includes('davinci')) return <DaVinciResolveLogo size={size} className={className} />;
  if (lower.includes('capcut')) return <CapCutLogo size={size} className={className} />;
  if (lower.includes('figma')) return <FigmaLogo size={size} className={className} />;
  if (lower.includes('canva')) return <CanvaLogo size={size} className={className} />;
  if (lower.includes('descript')) return <DescriptLogo size={size} className={className} />;
  if (lower.includes('frameio') || lower.includes('frame.io')) return <FrameIOLogo size={size} className={className} />;
  if (lower.includes('youtube') || lower.includes('yt')) return <YouTubeLogo size={size} className={className} />;
  if (lower.includes('meta') || lower.includes('facebook') || lower.includes('instagram')) return <MetaLogo size={size} className={className} />;
  if (lower.includes('google ads') || lower.includes('p-max') || lower.includes('gads')) return <GoogleAdsLogo size={size} className={className} />;
  if (lower.includes('tiktok') || lower.includes('spark')) return <TikTokLogo size={size} className={className} />;
  if (lower.includes('ga4') || lower.includes('analytics')) return <GA4Logo size={size} className={className} />;
  if (lower.includes('gtm') || lower.includes('tag manager')) return <GTMLogo size={size} className={className} />;
  if (lower.includes('capi') || lower.includes('conversions api')) return <MetaCAPILogo size={size} className={className} />;
  if (lower.includes('klaviyo') || lower.includes('email')) return <KlaviyoLogo size={size} className={className} />;
  if (lower.includes('shopify')) return <ShopifyLogo size={size} className={className} />;
  if (lower.includes('triplewhale') || lower.includes('triple whale')) return <TripleWhaleLogo size={size} className={className} />;
  if (lower.includes('cro') || lower.includes('funnel')) return <CROLogo size={size} className={className} />;
  if (lower.includes('copywriting') || lower.includes('copy')) return <CopywritingLogo size={size} className={className} />;
  if (lower.includes('retention') || lower.includes('viral')) return <ViralRetentionLogo size={size} className={className} />;
  if (lower.includes('sound') || lower.includes('audio') || lower.includes('sfx')) return <SoundDesignLogo size={size} className={className} />;
  if (lower.includes('spy') || lower.includes('foreplay') || lower.includes('competitor')) return <AdSpyLogo size={size} className={className} />;

  return null;
};
