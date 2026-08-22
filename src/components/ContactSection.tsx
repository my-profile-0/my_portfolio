import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { WhatsAppLogo } from './BrandLogos';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceInterest: 'both',
    monthlyBudget: '$2,000 - $5,000 / mo',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getServiceLabel = (id: string) => {
    switch (id) {
      case 'marketing':
        return 'Paid Ads / Media Buying';
      case 'video':
        return 'Video Editing & Motion VFX';
      default:
        return 'Full Turnkey Growth (Ads + Video Editing)';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceName = getServiceLabel(formData.serviceInterest);
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name} - ${serviceName}`);
    const body = encodeURIComponent(
      `Hi Miraj,\n\nI would like to inquire about your services.\n\n` +
      `Name: ${formData.name}\n` +
      `Work Email: ${formData.email}\n` +
      `Service Needed: ${serviceName}\n\n` +
      `Project Details & Goals:\n${formData.message}\n\n` +
      `Best regards,\n${formData.name}`
    );

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    // Open user's default email client
    const mailWindow = window.open(mailtoUrl, '_blank');
    if (!mailWindow || mailWindow.closed || typeof mailWindow.closed === 'undefined') {
      window.location.href = mailtoUrl;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/60 text-slate-900 border-t border-slate-200/80 relative overflow-hidden">
      {/* Background Decorative Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Booking Pitch */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-bold mb-3 uppercase tracking-wider shadow-2xs">
                <Mail className="w-3.5 h-3.5 text-emerald-600" />
                <span>Let's Build Something Huge</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Ready to Scale Your <span className="underline decoration-emerald-500 decoration-4 underline-offset-4 text-emerald-600">Ads & Content</span>?
              </h2>
              <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal leading-relaxed">
                Whether you need high-ROAS media buying, 4K viral video editing, or a full turnkey growth engine, let's connect.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              
              {/* Direct Email Card */}
              <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block">Direct Email</span>
                    <a 
                      href={`mailto:${PERSONAL_INFO.email}`} 
                      className="text-sm font-extrabold text-slate-900 hover:text-emerald-600 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shadow-2xs shrink-0"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* WhatsApp Card with Green WhatsApp Icon */}
              <a
                href={`https://wa.me/${PERSONAL_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-white p-5 rounded-3xl border border-slate-200 hover:border-emerald-400 shadow-xs hover:shadow-md transition-all flex items-center justify-between gap-4 group cursor-pointer block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center font-bold shrink-0">
                    <WhatsAppLogo size={24} className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] text-emerald-700 font-bold uppercase tracking-wider block">1-Click WhatsApp Chat</span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                      <span className="text-sm font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">
                        {PERSONAL_INFO.whatsapp}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-emerald-50 transition-colors shrink-0">
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>

            </div>

            {/* Quick Guarantees (Clean Bullets) */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-2.5 text-xs text-slate-600">
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Response time within 3 to 5 hours on business days</span>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Free 20-minute video audit of your current ad account</span>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Custom proposal tailored strictly to your ROAS targets</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm relative">
            
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Inquiry Ready & Sent!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. I will review your project requirements and get back to you within 3 to 5 hours.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/${PERSONAL_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi Miraj, I just submitted an inquiry on your portfolio for ${getServiceLabel(formData.serviceInterest)}.`)}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <WhatsAppLogo size={16} className="w-4 h-4" />
                    <span>Ping on WhatsApp for Instant Reply</span>
                  </a>
                  <button
                    onClick={() => {
                      setFormData({
                        name: '',
                        email: '',
                        serviceInterest: 'both',
                        monthlyBudget: '$2,000 - $5,000 / mo',
                        message: '',
                      });
                      setIsSubmitted(false);
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer shadow-2xs"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    Send a Project Inquiry
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out the form below to discuss your project requirements.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Name / Company
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Vance, Founder"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Service Interest */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Service You Need:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      { id: 'marketing', label: '1. Paid Ads / Media Buying' },
                      { id: 'video', label: '2. Video Editing & Motion' },
                      { id: 'both', label: '3. Full Turnkey Growth' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, serviceInterest: item.id })}
                        className={`p-3 rounded-2xl text-xs font-bold border transition-all text-center cursor-pointer ${
                          formData.serviceInterest === item.id
                            ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Project Details & Target Goals
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your product, monthly ad spend, current ROAS bottleneck, or video editing volume..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>{isSubmitting ? 'Sending Inquiry...' : 'Send Project Inquiry & Request Audit'}</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

