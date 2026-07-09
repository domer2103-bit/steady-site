import { useState } from 'react';
import { INCLUDED_FEATURES } from '../data';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function WhatsIncluded() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'growth' | 'admin'>('all');

  const filteredFeatures = INCLUDED_FEATURES.filter((feature) => {
    if (activeCategory === 'all') return true;
    return feature.category === activeCategory;
  });

  const categories = [
    { id: 'all', label: 'All Inclusions (19)' },
    { id: 'core', label: 'Core Essentials' },
    { id: 'growth', label: 'Growth & Leads' },
    { id: 'admin', label: 'Security & Legal' },
  ];

  // Helper to render icon safely
  const renderIcon = (iconName: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-5 h-5 text-neutral-800" />;
    }
    return <Icons.HelpCircle className="w-5 h-5 text-neutral-800" />;
  };

  return (
    <section id="whats-included" className="py-24 bg-neutral-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-3xl opacity-30 -z-10" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest bg-neutral-100 border border-neutral-200/50 px-3 py-1 rounded-full mb-3">
            What is Included
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
            A complete online presence. No hidden extras.
          </h2>
          <p className="text-neutral-600 mt-4 text-base sm:text-lg">
            We supply every piece of the puzzle. From registration and professional design to copy, SEO optimization, and legal compliance—we manage everything.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === category.id
                  ? 'bg-neutral-900 text-white shadow-sm font-bold'
                  : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200/50 hover:bg-neutral-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Features Grid with smooth entries */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredFeatures.map((feature) => (
              <motion.div
                layout
                key={feature.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-neutral-200/50 p-6 rounded-2xl shadow-sm hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300 flex gap-4 group"
              >
                {/* Icon block */}
                <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200/30 flex items-center justify-center shrink-0 group-hover:bg-neutral-900 transition-colors duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {renderIcon(feature.iconName)}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-neutral-900 text-base leading-snug group-hover:text-neutral-950 transition-colors">
                      {feature.title}
                    </h3>
                    <span
                      className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                        feature.category === 'core'
                          ? 'bg-neutral-100 text-neutral-700'
                          : feature.category === 'growth'
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-blue-50 text-blue-700'
                      }`}
                    >
                      {feature.category === 'core' ? 'Core' : feature.category === 'growth' ? 'Growth' : 'Admin'}
                    </span>
                  </div>
                  <p className="text-neutral-500 text-xs sm:text-sm mt-2 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* High Trust Guarantee Box */}
        <div className="mt-16 bg-white border border-neutral-200/80 p-8 rounded-3xl max-w-4xl mx-auto shadow-sm flex flex-col md:flex-row items-center gap-8 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-2xl opacity-50 -z-1 translate-x-10 -translate-y-10" />
          <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 border border-emerald-100 shadow-sm">
            <Icons.CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-neutral-900">The SteadySite Guarantee</h4>
            <p className="text-sm text-neutral-500 leading-relaxed mt-1">
              There is no catch or technical lock-in. If you choose to stop your subscription, we transfer the custom domain name and ownership of all professional emails back to you instantly with no exit fees. Your digital security is completely protected.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
