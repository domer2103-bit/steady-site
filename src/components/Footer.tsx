import { Building, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-neutral-400 pt-16 pb-8 border-t border-neutral-900 relative z-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-neutral-900">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-4 flex flex-col items-start gap-4 text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white text-neutral-950 flex items-center justify-center font-bold">
                <Building className="w-4.5 h-4.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base text-white tracking-tight leading-none">SteadySite</span>
                <span className="text-[9px] text-neutral-500 font-semibold tracking-wider uppercase mt-1">UK Web Presence</span>
              </div>
            </div>
            
            <p className="text-xs text-neutral-500 leading-relaxed max-w-sm">
              SteadySite is the UK’s leading all-inclusive digital presence service designed specifically for local trade business owners. We build, host, optimize, and manage your custom website for one simple, flat monthly price.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3.5 mt-2">
              <a href="#" className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Services & Navigation</h4>
            <div className="flex flex-col gap-3 text-xs">
              <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              <a href="#whats-included" className="hover:text-white transition-colors">What&apos;s Included</a>
              <a href="#industries" className="hover:text-white transition-colors">Industries Served</a>
              <a href="#demo-websites" className="hover:text-white transition-colors">Interactive Demo Playgrounds</a>
              <a href="#pricing" className="hover:text-white transition-colors">Simple Pricing Packages</a>
              <a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a>
            </div>
          </div>

          {/* Column 3: Contact Details */}
          <div className="md:col-span-5 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">UK Office Contact</h4>
            
            <div className="flex flex-col gap-3.5 text-xs">
              <a href="tel:02079460192" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="font-semibold text-white">020 7946 0192</p>
                  <p className="text-[10px] text-neutral-500">Mon - Fri, 8:00 AM - 6:00 PM GMT</p>
                </div>
              </a>

              <a href="mailto:team@steadysite.co.uk" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-blue-400">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="font-semibold text-white">team@steadysite.co.uk</p>
                  <p className="text-[10px] text-neutral-500">Get a response within 2 business hours</p>
                </div>
              </a>

              <div className="flex items-center gap-3 text-neutral-400">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-500">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="font-semibold text-white">SteadySite HQ</p>
                  <p className="text-[10px] text-neutral-500">Kensington, London, W8 5EH, United Kingdom</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-neutral-600">
            © {currentYear} SteadySite (UK) Limited. All rights reserved. Company Registration No. 12498205. VAT Registration No. GB 392 1029 44.
          </p>
          
          <div className="flex flex-wrap gap-4 text-[11px] text-neutral-600 font-medium">
            <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-neutral-400 transition-colors">Cookie Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-neutral-400 transition-colors">GDPR Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
