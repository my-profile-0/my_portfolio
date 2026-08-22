import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  MessageSquare,
  DollarSign,
  Video,
  Clock,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { FAQS } from '../data/portfolioData';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('all');

  const faqCategories = [
    { id: 'all', label: 'All Questions' },
    { id: 'ads', label: 'Ad Spend & Budgets' },
    { id: 'video', label: 'Video Turnarounds' },
    { id: 'workflow', label: 'Process & Guarantees' },
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    if (activeFaqCategory === 'all') return true;
    if (activeFaqCategory === 'ads') return faq.question.toLowerCase().includes('budget') || faq.question.toLowerCase().includes('roas') || faq.question.toLowerCase().includes('ad');
    if (activeFaqCategory === 'video') return faq.question.toLowerCase().includes('video') || faq.question.toLowerCase().includes('footage') || faq.question.toLowerCase().includes('turnaround');
    if (activeFaqCategory === 'workflow') return faq.question.toLowerCase().includes('work') || faq.question.toLowerCase().includes('guarantee') || faq.question.toLowerCase().includes('client');
    return true;
  });

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50/60 relative overflow-hidden border-t border-slate-200/80">
      {/* Background Decorative Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold mb-3 uppercase tracking-wider shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Clear Answers • Zero Fluff</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked <span className="underline decoration-emerald-500 decoration-4 underline-offset-4 text-emerald-600">Client Questions</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal leading-relaxed">
            Everything you need to know about working with me, ad spend thresholds, turnaround speeds, and raw footage handoffs.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFaqCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFaqCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-xs scale-[1.02]'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80 shadow-2xs'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQs Accordion Cards */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden shadow-xs ${
                  isOpen
                    ? 'border-emerald-400 shadow-md ring-1 ring-emerald-400/20'
                    : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                    }`}>
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center text-slate-500 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-slate-900 text-white' : 'bg-slate-100'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-slate-100 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {faq.answer}
                    </p>
                    
                    {faq.wittyNote && (
                      <div className="p-3.5 bg-amber-50/80 text-amber-900 rounded-2xl text-xs flex items-center gap-2.5 font-medium border border-amber-200/70">
                        <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                        <span><strong className="font-bold">Pro Tip: </strong>{faq.wittyNote}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 text-center bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">Have a custom question or specific ad spend budget?</h4>
              <p className="text-[11px] sm:text-xs text-slate-500">I respond directly via WhatsApp or email within 2 hours.</p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs shrink-0 cursor-pointer"
          >
            Ask Me Directly
          </a>
        </div>

      </div>
    </section>
  );
};
