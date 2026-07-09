import { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight, Building } from 'lucide-react';

interface NavbarProps {
  onGetStarted: () => void;
  onViewDemo: () => void;
}

export default function Navbar({ onGetStarted, onViewDemo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: "What's Included", href: '#whats-included' },
    { name: 'Industries', href: '#industries' },
    { name: 'Demo Websites', href: '#demo-websites' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-neutral-200/60 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-white shadow-premium transition-transform group-hover:scale-105">
              <Building className="w-5 h-5 text-neutral-100" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg tracking-tight text-neutral-900 leading-none">
                SteadySite
              </span>
              <span className="text-[10px] text-neutral-500 font-medium tracking-wider uppercase mt-1">
                UK Web Presence
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:02079460192"
              className="flex items-center gap-1.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors py-2 px-3 rounded-lg hover:bg-neutral-100/80"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>020 7946 0192</span>
            </a>
            <button
              onClick={onGetStarted}
              id="nav-get-started-btn"
              className="inline-flex items-center gap-1.5 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium px-4 py-2.5 rounded-xl shadow-premium hover:shadow-premium-lg transition-all duration-200 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="tel:02079460192"
              className="flex items-center justify-center p-2 rounded-lg bg-neutral-100 text-neutral-700"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/80 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] bg-white border-b border-neutral-200 shadow-xl py-6 px-4 animate-in fade-in slide-in-from-top-5 duration-200 z-30">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-neutral-800 hover:text-neutral-950 px-2 py-1"
              >
                {link.name}
              </a>
            ))}
            <hr className="border-neutral-100 my-2" />
            <div className="flex flex-col gap-3 px-2">
              <a
                href="tel:02079460192"
                className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <Phone className="w-4.5 h-4.5 text-emerald-600" />
                <span>Call support: 020 7946 0192</span>
              </a>
              <p className="text-xs text-neutral-500">Mon - Fri, 8am - 6pm UK Time</p>
            </div>
            <div className="flex gap-3 mt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onViewDemo();
                }}
                className="flex-1 text-center bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-sm font-medium py-3 rounded-xl transition-all"
              >
                View Demo
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onGetStarted();
                }}
                className="flex-1 text-center bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium py-3 rounded-xl shadow-premium transition-all"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
