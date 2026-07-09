import { TESTIMONIALS } from '../data';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle light background bloom */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-neutral-50 rounded-full blur-3xl opacity-60 -z-1" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col items-center">
          <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest bg-neutral-100 border border-neutral-200/50 px-3 py-1 rounded-full mb-3">
            Client Success
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
            Loved by local trade business owners across the UK.
          </h2>
          <p className="text-neutral-600 mt-4 text-base sm:text-lg">
            Hear from real plumbers, electricians, and roofers who transitioned from massive upfront agency bills to our hassle-free monthly service.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#fafafa] border border-neutral-200/60 p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-premium transition-all duration-300 hover:bg-white text-left group relative"
            >
              {/* Decorative blockquote icon */}
              <div className="absolute top-6 right-8 text-neutral-200 group-hover:text-neutral-300 transition-colors">
                <Quote className="w-8 h-8 rotate-180" />
              </div>

              <div>
                {/* Five Star rating */}
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6 font-medium italic relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-4 border-t border-neutral-200/40 pt-4">
                <img
                  src={t.avatarUrl}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-neutral-900 leading-tight">
                    {t.name}
                  </span>
                  <span className="text-xs text-neutral-500 font-medium">
                    {t.role}, <span className="text-neutral-700">{t.company}</span>
                  </span>
                  <span className="text-[10px] text-neutral-400 font-semibold mt-0.5">
                    📍 {t.location}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Google Reviews Trust box */}
        <div className="mt-16 bg-neutral-50 border border-neutral-200/60 py-6 px-8 rounded-2xl max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3 justify-center">
            <span className="text-xs bg-emerald-100 text-emerald-800 font-extrabold px-2 py-1 rounded">5.0 / 5.0 Rating</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              ))}
            </div>
          </div>
          <span className="text-xs text-neutral-500 font-semibold">
            Based on 300+ vetted reviews from verified UK contractors
          </span>
        </div>

      </div>
    </section>
  );
}
