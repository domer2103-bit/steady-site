import { ShieldAlert, RefreshCw, Server, Search, Sparkles, HelpCircle, BadgeCheck, PhoneCall } from 'lucide-react';

export default function TrustBar() {
  const trusts = [
    { label: 'No upfront costs', icon: BadgeCheck, description: 'Pay nothing to start' },
    { label: 'Hosting included', icon: Server, description: 'Super fast UK servers' },
    { label: 'Unlimited updates', icon: RefreshCw, description: 'WhatsApp us anytime' },
    { label: 'AI-powered content', icon: Sparkles, description: 'Automatic SEO copy' },
    { label: 'SEO included', icon: Search, description: 'Rank high on Google' },
    { label: 'UK-based support', icon: PhoneCall, description: 'Talk to real humans' },
  ];

  return (
    <section className="bg-white border-y border-neutral-200/50 py-8 relative z-25">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4 divide-y md:divide-y-0 lg:divide-x divide-neutral-200/50 items-center justify-center">
          {trusts.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center px-4 ${
                  index >= 2 ? 'pt-4 md:pt-0' : ''
                } ${index >= 3 ? 'lg:pt-0' : ''}`}
              >
                <div className="w-9 h-9 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-800 mb-2 border border-neutral-200/40 shadow-sm">
                  <IconComponent className="w-4.5 h-4.5 text-neutral-800" />
                </div>
                <span className="text-sm font-semibold text-neutral-900 leading-tight">
                  {item.label}
                </span>
                <span className="text-[11px] text-neutral-500 font-medium mt-0.5">
                  {item.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
