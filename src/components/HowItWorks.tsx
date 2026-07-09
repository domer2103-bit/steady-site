import { MessageSquareText, CodeXml, TrendingUp, ArrowRight, ArrowRightLeft } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Tell us about your business',
      icon: MessageSquareText,
      description: 'Fill out our simple onboarding questionnaire or schedule a friendly 15-minute phone call. Share your trade, the locations you cover, and send over any work photos you have.',
      highlight: 'No tech experience required'
    },
    {
      number: '02',
      title: 'We design & build everything',
      icon: CodeXml,
      description: 'Our professional UK-based copywriters, designers, and SEO specialists write all your website copy, build your layout, set up your custom domain, and secure your professional email.',
      highlight: 'Ready in under 7 business days'
    },
    {
      number: '03',
      title: 'Watch your trade business grow',
      icon: TrendingUp,
      description: 'Once you approve, your custom website goes live. You start receiving quote requests and phone calls directly to your mobile phone while we handle all technical tasks in the background.',
      highlight: 'WhatsApp updates included forever'
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col items-center">
          <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest bg-neutral-100 border border-neutral-200/50 px-3 py-1 rounded-full mb-3">
            Onboarding Flow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
            A beautiful web presence in three simple steps.
          </h2>
          <p className="text-neutral-600 mt-4 text-base sm:text-lg">
            We understand you are busy on-site. We have streamlined our process so you can get back to what you do best while we handle your digital presence.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Subtle connecting line for desktop */}
          <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-[1px] bg-neutral-200/80 -z-1" />

          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="flex flex-col bg-[#fafafa] border border-neutral-200/60 p-8 rounded-2xl shadow-sm hover:shadow-premium transition-all duration-300 hover:bg-white text-left group"
              >
                {/* Header Step Indicator & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <IconComponent className="w-5.5 h-5.5" />
                  </div>
                  <span className="font-mono text-3xl font-extrabold text-neutral-300 select-none group-hover:text-neutral-500 transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Body Content */}
                <h3 className="text-lg font-bold text-neutral-900 group-hover:text-neutral-950 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-neutral-600 text-sm leading-relaxed mt-3 mb-6 flex-1">
                  {step.description}
                </p>

                {/* Highlight Tag */}
                <div className="mt-auto pt-4 border-t border-neutral-200/40 flex items-center gap-1.5 text-xs font-bold text-neutral-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{step.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Extra Onboarding Note */}
        <div className="mt-16 bg-neutral-50 border border-neutral-200/60 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-left max-w-4xl mx-auto shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
              <span className="font-bold text-sm">✓</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-900">Are you currently locked in with another web agency?</h4>
              <p className="text-xs text-neutral-500 mt-0.5">Let us know. We often offer free migration and can sync your current domain name seamlessly with zero downtime.</p>
            </div>
          </div>
          <a
            href="#pricing"
            className="text-xs font-bold text-neutral-900 hover:text-neutral-800 transition-colors inline-flex items-center gap-1 shrink-0 py-2 px-3 hover:bg-neutral-100 rounded-lg"
          >
            <span>See Packages</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
