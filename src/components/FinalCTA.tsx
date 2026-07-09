import { ArrowRight, Phone, ShieldCheck, Clock, BadgeCheck } from 'lucide-react';

interface FinalCTAProps {
  onGetStarted: () => void;
}

export default function FinalCTA({ onGetStarted }: FinalCTAProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background radial soft shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neutral-50 rounded-full blur-3xl opacity-60 -z-1" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner container */}
        <div className="bg-neutral-950 text-white rounded-3xl p-10 md:p-16 text-center flex flex-col items-center gap-6 relative overflow-hidden shadow-premium-xl">
          {/* Subtle grid decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
          
          <div className="relative z-10 flex flex-col items-center gap-4 max-w-2xl">
            {/* Tag */}
            <span className="text-[10px] sm:text-xs font-bold text-emerald-400 uppercase tracking-widest bg-neutral-900 border border-neutral-800 px-3.5 py-1.5 rounded-full">
              Risk-Free Launch
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Get your trade business online in under 7 days.
            </h2>

            {/* Paragraph */}
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Join hundreds of local UK plumbers, electricians, builders, and roofers who trust SteadySite to run their online presence. Pay £0 setup, enjoy unlimited updates, and focus entirely on your physical work.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4 w-full sm:w-auto">
            <button
              onClick={onGetStarted}
              className="bg-white hover:bg-neutral-100 text-neutral-950 font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:02079460192"
              className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white font-bold px-6 py-4 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>020 7946 0192</span>
            </a>
          </div>

          {/* Value tags row */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-neutral-900 pt-8 mt-6 text-xs text-neutral-500 font-medium">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>No Upfront Build Cost</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-500" />
              <span>Live in 7 Business Days</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BadgeCheck className="w-4 h-4 text-emerald-500" />
              <span>Cancel Anytime (Rolling Month)</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
