import { INDUSTRIES } from '../data';
import * as Icons from 'lucide-react';

interface IndustriesProps {
  onSelectIndustry: (industryId: string) => void;
}

export default function Industries({ onSelectIndustry }: IndustriesProps) {
  // Helper to render icon safely
  const renderIcon = (iconName: string, color: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-5 h-5" style={{ color }} />;
    }
    return <Icons.HelpCircle className="w-5 h-5 text-neutral-500" />;
  };

  return (
    <section id="industries" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col items-center">
          <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest bg-neutral-100 border border-neutral-200/50 px-3 py-1 rounded-full mb-3">
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
            Tailored specifically for your trade.
          </h2>
          <p className="text-neutral-600 mt-4 text-base sm:text-lg">
            We don&apos;t use generic, boring layouts. We build custom websites pre-optimized with features and structures that your specific industry needs to attract local customers.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.id}
              className="bg-[#fafafa] border border-neutral-200/60 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Image Header with glass banner overlay */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={industry.heroImage}
                  alt={industry.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/30 to-transparent" />
                
                {/* Title and Badge on top of image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/25">
                    {renderIcon(industry.iconName, '#ffffff')}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {industry.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col text-left justify-between">
                <div>
                  <p className="text-neutral-500 text-xs sm:text-sm font-semibold italic">
                    &ldquo;{industry.tagline}&rdquo;
                  </p>

                  <hr className="border-neutral-200/50 my-4" />

                  {/* Typical features built in */}
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2.5">
                    Included features build-out:
                  </h4>
                  <ul className="flex flex-col gap-2 mb-6">
                    {industry.typicalNeeds.map((need, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-600">
                        <span className="text-emerald-600 font-bold mt-0.5 select-none">✓</span>
                        <span>{need}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onSelectIndustry(industry.id)}
                  className="w-full py-2.5 rounded-xl text-center bg-white border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white text-xs sm:text-sm font-semibold transition-all duration-250 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Build {industry.name} Presence</span>
                  <Icons.ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
