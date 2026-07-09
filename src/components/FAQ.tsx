import { useState } from 'react';
import { FAQS } from '../data';
import { Plus, Minus, HelpCircle, PhoneCall } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first item

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-neutral-50 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest bg-neutral-100 border border-neutral-200/50 px-3 py-1 rounded-full mb-3">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-600 mt-4 text-base sm:text-lg">
            Got questions about how our service works, domain ownership, or contracts? We have answered everything below in simple, non-technical language.
          </p>
        </div>

        {/* Accordions Container */}
        <div className="max-w-3xl mx-auto flex flex-col gap-3.5 mb-16">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-neutral-200/50 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base text-neutral-900 pr-4">
                    {faq.question}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-600 shrink-0 border border-neutral-200/50">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                {/* Accordion Body Panel */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-neutral-100' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 text-xs sm:text-sm text-neutral-600 leading-relaxed text-left bg-neutral-50/40">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="bg-neutral-900 text-white rounded-3xl p-8 max-w-3xl mx-auto shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left relative overflow-hidden">
          {/* Decorative subtle ambient circle */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-neutral-800 rounded-full blur-xl opacity-50" />
          
          <div className="flex items-center gap-4 flex-col sm:flex-row">
            <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center border border-neutral-700 shrink-0">
              <PhoneCall className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-bold text-base text-white">Still have questions?</h4>
              <p className="text-xs text-neutral-400 mt-0.5">Call our friendly team in London for a chat. No hard-sales, ever.</p>
            </div>
          </div>

          <a
            href="tel:02079460192"
            className="bg-white hover:bg-neutral-100 text-neutral-950 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer"
          >
            020 7946 0192
          </a>
        </div>

      </div>
    </section>
  );
}
