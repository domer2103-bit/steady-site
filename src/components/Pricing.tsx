import { useState } from 'react';
import { PRICING_TIERS } from '../data';
import { Check, HelpCircle, Lock, Shield, ArrowRight, HelpCircle as Info } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [calcYears, setCalcYears] = useState<number>(2);

  // Agency costs: Setup: £2500, Hosting/SSL: £40/mo, Domain/Email: £15/mo, Maintenance/Updates: £100/mo (approx 1 request)
  // Total Agency per month after setup: £155
  const agencySetup = 2500;
  const agencyMonthly = 155;
  const agencyTotal = agencySetup + (agencyMonthly * 12 * calcYears);

  // SteadySite cost: (Growth plan: £129/mo, Setup: £0)
  const ourMonthly = billingPeriod === 'monthly' ? 129 : 99; // £129 monthly or £99 on yearly plan
  const ourTotal = ourMonthly * 12 * calcYears;

  const totalSavings = agencyTotal - ourTotal;

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neutral-50 rounded-full blur-3xl opacity-50 -z-1" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest bg-neutral-100 border border-neutral-200/50 px-3 py-1 rounded-full mb-3">
            Simple Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
            One transparent price. Zero hidden fees.
          </h2>
          <p className="text-neutral-600 mt-4 text-base sm:text-lg">
            No massive setup invoices. No charging by the hour. Choose the tier that matches your goals and scale your local business stress-free.
          </p>

          {/* Billing Period Selector */}
          <div className="inline-flex items-center gap-1.5 bg-neutral-100 p-1.5 rounded-2xl mt-10 shadow-inner border border-neutral-200/40">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                billingPeriod === 'yearly'
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              <span>Yearly Billing</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-full font-extrabold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {PRICING_TIERS.map((tier) => {
            const displayPrice = billingPeriod === 'monthly' 
              ? tier.priceMonthly 
              : Math.round(tier.priceMonthly * 0.8);

            return (
              <div
                key={tier.name}
                className={`bg-white border rounded-3xl p-8 flex flex-col relative text-left transition-all duration-300 ${
                  tier.popular
                    ? 'border-neutral-950 shadow-premium-lg ring-1 ring-neutral-950 scale-102 lg:translate-y-[-8px] z-10'
                    : 'border-neutral-200/70 shadow-sm hover:shadow-premium'
                }`}
              >
                {/* Popular Highlight Tag */}
                {tier.popular && (
                  <span className="absolute top-0 right-8 -translate-y-1/2 bg-neutral-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                )}

                {/* Card Title & Cost */}
                <h3 className="text-xl font-extrabold text-neutral-900 mb-2">{tier.name}</h3>
                <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-6 min-h-[48px]">
                  {tier.description}
                </p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl sm:text-5xl font-extrabold text-neutral-900">£{displayPrice}</span>
                  <span className="text-neutral-500 text-sm font-semibold">/month</span>
                </div>

                {/* Included Features Checklist */}
                <hr className="border-neutral-200/50 mb-6" />
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-4">
                  What&apos;s Included:
                </h4>
                
                <ul className="flex flex-col gap-3.5 mb-8 flex-1">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600">
                      <div className="w-4 h-4 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 font-bold text-[9px] shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Action CTA */}
                <button
                  onClick={() => onSelectPlan(tier.name)}
                  className={`w-full py-3 rounded-xl text-center font-bold text-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
                    tier.popular
                      ? 'bg-neutral-900 hover:bg-neutral-800 text-white shadow-premium'
                      : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-800 border border-neutral-200'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* INTERACTIVE COMPARISON CALCULATOR */}
        <div className="bg-neutral-50 border border-neutral-200/60 p-8 rounded-3xl text-left max-w-4xl mx-auto shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-neutral-200/60 pb-6 mb-6">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span>Calculate Your Business Savings</span>
                <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">Compare vs Agencies</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                See exactly how much you save with our subscription service over typical UK website agency costs.
              </p>
            </div>

            {/* Years Selector Slider */}
            <div className="flex items-center gap-3 bg-white p-1.5 rounded-xl border border-neutral-200/60 shadow-inner shrink-0">
              <span className="text-xs font-semibold text-neutral-500 px-1.5">Project Lifetime:</span>
              {[1, 2, 3].map((yr) => (
                <button
                  key={yr}
                  onClick={() => setCalcYears(yr)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    calcYears === yr
                      ? 'bg-neutral-900 text-white shadow'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {yr} {yr === 1 ? 'Year' : 'Years'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            {/* Agency Cost Box */}
            <div className="bg-white border border-neutral-200/40 p-5 rounded-2xl shadow-sm">
              <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Traditional Agency Cost</p>
              <p className="text-2xl font-bold text-neutral-900 mt-2">£{agencyTotal.toLocaleString()}</p>
              <p className="text-[10px] text-neutral-400 mt-1">£2,500 setup + £155/mo upkeep</p>
            </div>

            {/* SteadySite Cost Box */}
            <div className="bg-white border border-neutral-200/40 p-5 rounded-2xl shadow-sm">
              <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider">SteadySite Cost</p>
              <p className="text-2xl font-bold text-emerald-600 mt-2">£{ourTotal.toLocaleString()}</p>
              <p className="text-[10px] text-neutral-400 mt-1">£0 setup + £{ourMonthly}/mo subscription</p>
            </div>

            {/* Savings Highlight Box */}
            <div className="bg-emerald-900 text-white p-5 rounded-2xl shadow flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Your Guaranteed Savings</p>
                <p className="text-3xl font-extrabold mt-1">£{totalSavings.toLocaleString()}</p>
              </div>
              <p className="text-[10px] text-emerald-200 leading-relaxed mt-2">
                Keep £{totalSavings.toLocaleString()} in your trade business instead of writing massive checks to agencies.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
