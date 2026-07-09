import { COMPARISONS } from '../data';
import { XCircle, CheckCircle2, ShieldAlert, ArrowRight } from 'lucide-react';

export default function Comparison() {
  return (
    <section className="py-24 bg-neutral-50 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest bg-neutral-100 border border-neutral-200/50 px-3 py-1 rounded-full mb-3">
            Service Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
            Why local trades choose subscription over buy-and-forget.
          </h2>
          <p className="text-neutral-600 mt-4 text-base sm:text-lg">
            Traditional agencies deliver a static site, charge massive upfront setup fees, and abandon you. We partner with you month-after-month to actively manage and grow your presence.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-neutral-200/60 shadow-sm overflow-hidden">
          
          {/* Table Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-neutral-900 text-white p-6 font-bold text-sm sm:text-base gap-4 md:gap-0">
            <div className="md:col-span-4 text-left font-extrabold">Feature / Service</div>
            <div className="md:col-span-4 text-left text-neutral-400">Traditional Design Agency</div>
            <div className="md:col-span-4 text-left text-emerald-400 flex items-center gap-1.5">
              <span>SteadySite Subscription</span>
              <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded-full font-bold uppercase">Included</span>
            </div>
          </div>

          {/* Table Body Rows */}
          <div className="divide-y divide-neutral-200/60">
            {COMPARISONS.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-neutral-50/50 transition-all text-left text-xs sm:text-sm items-center gap-3 md:gap-0"
              >
                {/* Criterion Name */}
                <div className="md:col-span-4 font-bold text-neutral-900 pr-4">
                  {row.criterion}
                </div>

                {/* Agency Status */}
                <div className="md:col-span-4 text-neutral-500 flex items-start gap-2 pr-4">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{row.agency}</span>
                </div>

                {/* Subscription Status */}
                <div className="md:col-span-4 text-neutral-800 font-semibold flex items-start gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{row.subscription}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* High-trust bottom box */}
        <div className="mt-12 bg-amber-50 border border-amber-200/50 p-6 rounded-2xl max-w-4xl mx-auto flex gap-4 text-left shadow-sm">
          <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-amber-900">Be aware of generic website builders:</h4>
            <p className="text-xs text-amber-800 leading-relaxed mt-1">
              Platforms like Wix, Squarespace or WordPress claim to be free, but they leave all the heavy lifting to you. You must write the copy, optimize the SEO, purchase a domain, handle email servers, design mobile pages, and resolve technical issues alone. With us, professional experts handle every single detail while you focus on your clients.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
