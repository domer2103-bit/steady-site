import { useState, useEffect } from 'react';
import { Star, ArrowRight, Play, CheckCircle, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  onGetStarted: () => void;
  onViewDemo: () => void;
}

const FEATURED_TRADES = [
  { id: 'plumbing', label: 'Plumbing', title: 'Smith & Co. Plumbing', phone: '01483 555 982', color: 'bg-sky-500', textColor: 'text-sky-500', badgeColor: 'bg-sky-50 text-sky-700 border-sky-100', service: 'Emergency Boiler Repair', tag: 'Fast 1hr Response', tagline: 'Emergency Boiler Repair & Local Plumbing' },
  { id: 'electrician', label: 'Electrical', title: 'VoltSpark Electrical', phone: '020 7946 0192', color: 'bg-yellow-500', textColor: 'text-yellow-600', badgeColor: 'bg-yellow-50 text-yellow-800 border-yellow-100', service: 'NICEIC Certified Rewire', tag: 'Fully Insured', tagline: 'NIC-EIC Certified Electrical Specialists' },
  { id: 'building', label: 'Building', title: 'Apex Extensions & Co', phone: '0121 496 0329', color: 'bg-orange-500', textColor: 'text-orange-600', badgeColor: 'bg-orange-50 text-orange-800 border-orange-100', service: 'Kitchen & Home Extensions', tag: 'Federation of Master Builders', tagline: 'Bespoke Kitchen & Home Extensions' }
];

export default function Hero({ onGetStarted, onViewDemo }: HeroProps) {
  const [activeTradeIndex, setActiveTradeIndex] = useState(0);

  // Auto rotate trade previews every 4 seconds to show off the customizability
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTradeIndex((prev) => (prev + 1) % FEATURED_TRADES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentTrade = FEATURED_TRADES[activeTradeIndex];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#fbfbfb] via-[#fafafa] to-neutral-50/50">
      {/* Background soft geometric blobs for depth */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neutral-100 rounded-full blur-3xl opacity-60 -z-10 translate-x-20 -translate-y-20" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-neutral-100 rounded-full blur-3xl opacity-40 -z-10" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            {/* Guarantee Tag */}
            <div className="inline-flex items-center gap-2 self-start bg-neutral-100/80 border border-neutral-200/60 px-3 py-1.5 rounded-full text-xs font-semibold text-neutral-800 tracking-wide">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>No Upfront Costs • Cancel Any Time</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.1]">
              Everything your business needs online.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-600">
                One monthly price.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl">
              We design, build, host, and maintain your custom website. We configure your business emails, optimize your Google Maps profile, and handle local Google SEO. All backed by rapid WhatsApp updates and support. 
              <span className="font-semibold text-neutral-900"> From only £79/month, no setup fees.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mt-2">
              <button
                onClick={onGetStarted}
                id="hero-get-started-btn"
                className="inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-medium px-7 py-3.5 rounded-xl shadow-premium hover:shadow-premium-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer text-base"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </button>

              <button
                onClick={onViewDemo}
                id="hero-view-demo-btn"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-200/80 font-medium px-6 py-3.5 rounded-xl shadow-sm hover:shadow-premium transition-all duration-200 cursor-pointer text-base"
              >
                <Play className="w-4 h-4 text-neutral-600 fill-neutral-600" />
                <span>View Interactive Demo</span>
              </button>
            </div>

            {/* Trust highlights */}
            <div className="grid grid-cols-3 gap-4 border-t border-neutral-200/60 pt-6 mt-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-neutral-900">24hr</span>
                <span className="text-xs text-neutral-500 font-medium mt-0.5">WhatsApp updates response</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-neutral-900">£0</span>
                <span className="text-xs text-neutral-500 font-medium mt-0.5">Upfront design or setup fees</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-neutral-900">100%</span>
                <span className="text-xs text-neutral-500 font-medium mt-0.5">Custom built, no cookie-cutters</span>
              </div>
            </div>
          </div>

          {/* Right Column: Multi-Device Interactive Mockup */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center">
            
            {/* Interactive Selector Badges */}
            <div className="flex items-center gap-2 bg-neutral-100 p-1 rounded-xl mb-4 shadow-sm border border-neutral-200/40">
              {FEATURED_TRADES.map((trade, idx) => (
                <button
                  key={trade.id}
                  onClick={() => setActiveTradeIndex(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTradeIndex === idx
                      ? 'bg-white text-neutral-900 shadow-sm font-bold'
                      : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  {trade.label}
                </button>
              ))}
            </div>

            {/* Device Frame Nest */}
            <div className="relative w-full max-w-[420px] aspect-[4/3] sm:aspect-square flex items-center justify-center select-none">
              
              {/* LAPTOP FRAME (Background) */}
              <div className="w-[88%] sm:w-[92%] aspect-[16/10] bg-neutral-900 rounded-xl p-[5px] shadow-premium-xl border border-neutral-800 relative z-10">
                <div className="w-full h-full bg-white rounded-lg overflow-hidden flex flex-col relative">
                  {/* Laptop Web Browser Bar */}
                  <div className="h-4 bg-neutral-100 border-b border-neutral-200 flex items-center px-2 gap-1 justify-between">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    </div>
                    <div className="w-32 h-2.5 bg-neutral-200/70 rounded flex items-center justify-center">
                      <span className="text-[6px] text-neutral-400 font-mono scale-[0.8]">steadysite.co.uk</span>
                    </div>
                    <div className="w-2" />
                  </div>

                  {/* Mock Web Content */}
                  <div className="flex-1 p-3 flex flex-col justify-between text-left relative overflow-hidden bg-neutral-50">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentTrade.id}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col gap-2 h-full justify-between"
                      >
                        {/* Header */}
                        <div className="flex justify-between items-center border-b border-neutral-200/60 pb-1">
                          <span className="text-[10px] font-bold text-neutral-800">{currentTrade.title}</span>
                          <span className="text-[7px] text-neutral-500 font-bold">{currentTrade.phone}</span>
                        </div>

                        {/* Content Grid */}
                        <div className="flex-1 py-1 flex flex-col justify-center">
                          <div className={`inline-flex items-center gap-1 self-start px-1.5 py-0.5 rounded border text-[6px] font-bold ${currentTrade.badgeColor} mb-1.5`}>
                            <Star className="w-1.5 h-1.5 fill-current" />
                            <span>5.0 Highly Rated</span>
                          </div>
                          <h3 className="text-sm font-extrabold text-neutral-900 leading-tight">
                            {currentTrade.tagline || 'Your Reliable Local Experts'}
                          </h3>
                          <p className="text-[8px] text-neutral-500 mt-1 max-w-[180px]">
                            Fully vetted, insured, and licensed team serving families across your local community.
                          </p>

                          <div className="flex gap-1.5 mt-2.5">
                            <span className="text-[7px] bg-neutral-200/80 px-2 py-0.5 rounded text-neutral-700 font-semibold">{currentTrade.service}</span>
                            <span className="text-[7px] bg-neutral-200/80 px-2 py-0.5 rounded text-neutral-700 font-semibold">{currentTrade.tag}</span>
                          </div>
                        </div>

                        {/* Footer / Trust logos */}
                        <div className="flex justify-between items-center text-[7px] border-t border-neutral-200/60 pt-1 text-neutral-400 font-medium">
                          <span>✔ Gas Safe Registered</span>
                          <span className="font-bold text-neutral-800">Quotes available 24/7</span>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* TABLET FRAME (Middle-right overlapping) */}
              <div className="absolute right-0 bottom-[12%] w-[42%] aspect-[3/4] bg-neutral-900 rounded-xl p-1 shadow-premium-lg border border-neutral-800 z-20 hidden sm:block">
                <div className="w-full h-full bg-white rounded-lg overflow-hidden flex flex-col relative bg-neutral-50">
                  <div className="h-3 bg-neutral-100 flex items-center justify-center border-b border-neutral-200">
                    <div className="w-1 h-1 bg-neutral-300 rounded-full" />
                  </div>
                  <div className="flex-1 p-2.5 flex flex-col justify-between text-left">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentTrade.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col gap-1.5 h-full justify-between"
                      >
                        <div className="flex items-center gap-1">
                          <div className={`w-1.5 h-1.5 rounded-full ${currentTrade.color}`} />
                          <span className="text-[7px] font-bold text-neutral-800">Our Services</span>
                        </div>
                        
                        <div className="flex-1 flex flex-col justify-center gap-1">
                          <div className="border border-neutral-200 bg-white p-1 rounded-md">
                            <p className="text-[6px] font-bold text-neutral-900">Heating & Boiler Maintenance</p>
                            <p className="text-[5px] text-neutral-400">Available 24 hours</p>
                          </div>
                          <div className="border border-neutral-200 bg-white p-1 rounded-md">
                            <p className="text-[6px] font-bold text-neutral-900">General Leak & Pipe Repairs</p>
                            <p className="text-[5px] text-neutral-400">Fixed rate pricing</p>
                          </div>
                        </div>

                        <div className="bg-neutral-950 p-1 rounded-md text-center">
                          <p className="text-[6px] text-white font-bold">Request Callback</p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* MOBILE FRAME (Front-left overlapping) */}
              <div className="absolute left-[3%] -bottom-[8%] w-[26%] sm:w-[25%] aspect-[9/19] bg-neutral-900 rounded-[20px] p-[3px] shadow-premium border border-neutral-800 z-30">
                <div className="w-full h-full bg-white rounded-[17px] overflow-hidden flex flex-col relative bg-neutral-50">
                  {/* Speaker Notch */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-neutral-900 rounded-full z-40 flex items-center justify-center">
                    <div className="w-3 h-0.5 bg-neutral-700 rounded-full" />
                  </div>

                  {/* Mobile Site Content */}
                  <div className="flex-1 pt-4 p-1.5 flex flex-col justify-between text-left">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentTrade.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col gap-1 h-full justify-between"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-[5px] font-bold text-neutral-800">{currentTrade.title.split(' ')[0]}</span>
                          <span className="text-[5px] bg-emerald-50 text-emerald-700 px-1 py-0.2 rounded font-bold">Online</span>
                        </div>

                        <div className="flex-1 flex flex-col justify-center py-1">
                          <div className="w-5 h-5 rounded bg-neutral-100 flex items-center justify-center mb-1">
                            <CheckCircle className={`w-3 h-3 ${currentTrade.textColor}`} />
                          </div>
                          <p className="text-[8px] font-extrabold text-neutral-900 leading-tight">Need assistance?</p>
                          <p className="text-[5px] text-neutral-400">Get a professional quote on WhatsApp instantly.</p>
                        </div>

                        <a
                          href={`tel:${currentTrade.phone}`}
                          className="bg-emerald-600 p-1 rounded-md text-center text-white flex items-center justify-center gap-1 shadow-sm"
                        >
                          <span className="text-[6px] font-bold">Call Now</span>
                        </a>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
