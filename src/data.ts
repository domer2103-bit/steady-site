import { Feature, Industry, DemoSite, PricingTier, Testimonial, FAQItem } from './types';

export const INCLUDED_FEATURES: Feature[] = [
  {
    id: 'website',
    title: 'Custom Website Design',
    description: 'Bespoke website designed specifically for your trade. High-converting layouts, custom copywriting, and high-quality visuals.',
    iconName: 'Laptop',
    category: 'core'
  },
  {
    id: 'hosting',
    title: 'Ultra-Fast Hosting',
    description: 'Blazing-fast, secure cloud hosting with 99.9% uptime. Your site loads instantly for potential clients on any network.',
    iconName: 'Server',
    category: 'core'
  },
  {
    id: 'ssl',
    title: 'SSL Certificate (Security)',
    description: 'Secure padlock next to your address. Fully encrypted connections that build trust and improve your Google rankings.',
    iconName: 'ShieldCheck',
    category: 'core'
  },
  {
    id: 'domain',
    title: 'Free Custom Domain',
    description: 'We register and manage your professional domain name (e.g., yourname.co.uk) for as long as you are with us.',
    iconName: 'Globe',
    category: 'core'
  },
  {
    id: 'email',
    title: 'Professional Email',
    description: 'Build confidence with custom email addresses (e.g., info@yourname.co.uk) instead of generic Gmail or Outlook mail.',
    iconName: 'Mail',
    category: 'core'
  },
  {
    id: 'seo',
    title: 'Local SEO Package',
    description: 'We research local search keywords and optimize your site to rank on Google in the areas you actually cover.',
    iconName: 'Search',
    category: 'growth'
  },
  {
    id: 'maps',
    title: 'Google Maps & Business Setup',
    description: 'Full setup and sync of your Google Business Profile to display properly on local maps and search results.',
    iconName: 'MapPin',
    category: 'growth'
  },
  {
    id: 'ai-content',
    title: 'AI Content Optimizer',
    description: 'Optimized blog posts and service descriptions written automatically to continuously improve your search ranking.',
    iconName: 'Sparkles',
    category: 'growth'
  },
  {
    id: 'updates',
    title: 'Unlimited Content Updates',
    description: 'Need to add a photo, change a phone number, or update a service? Send a WhatsApp message and we do it within 24 hours.',
    iconName: 'RefreshCw',
    category: 'core'
  },
  {
    id: 'blog',
    title: 'Bespoke Articles & Blog',
    description: 'A dedicated news or blog section showing your latest work, tips, and testimonials to show you are the local expert.',
    iconName: 'FileText',
    category: 'growth'
  },
  {
    id: 'booking',
    title: 'Client Booking System',
    description: 'Allow customers to request quotes or schedule appointments directly on your site, synced with your calendar.',
    iconName: 'Calendar',
    category: 'growth'
  },
  {
    id: 'forms',
    title: 'Secure Contact Forms',
    description: 'Custom lead capture forms that send text or email alerts directly to your phone the second a client gets in touch.',
    iconName: 'MessageSquareText',
    category: 'core'
  },
  {
    id: 'analytics',
    title: 'Simple Lead Analytics',
    description: 'A clean dashboard showing how many calls, clicks, and message requests you got this month, without the jargon.',
    iconName: 'BarChart3',
    category: 'growth'
  },
  {
    id: 'security',
    title: 'Active DDoS Protection',
    description: 'Real-time security monitoring to defend against malware, hacking attempts, and spam form submissions.',
    iconName: 'Shield',
    category: 'admin'
  },
  {
    id: 'backups',
    title: 'Daily Auto Backups',
    description: 'Your entire website is backed up every 24 hours. We can restore your site instantly in the rare event of an issue.',
    iconName: 'Database',
    category: 'admin'
  },
  {
    id: 'cookie-banner',
    title: 'GDPR Cookie Banner',
    description: 'Fully compliant UK cookie consent and policy settings to protect your business and follow modern privacy regulations.',
    iconName: 'CheckSquare',
    category: 'admin'
  },
  {
    id: 'legal',
    title: 'Compliant Legal Pages',
    description: 'Professionally drafted Privacy Policy and Terms of Service documents tailored specifically for your trade business.',
    iconName: 'FileSignature',
    category: 'admin'
  },
  {
    id: 'social-content',
    title: 'Social Media Content Kit',
    description: 'High-quality graphic templates branded with your colors to help you promote your website on Facebook and Instagram.',
    iconName: 'Share2',
    category: 'growth'
  },
  {
    id: 'chatbot',
    title: 'Interactive AI Assistant',
    description: 'Optional intelligent chat assistant on your site to answer FAQs and collect leads from late-night visitors.',
    iconName: 'Bot',
    category: 'growth'
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'plumber',
    name: 'Plumbers',
    iconName: 'Wrench',
    typicalNeeds: ['24/7 Emergency CTA', 'Services list (boiler, leaks)', 'Trust badges', 'WhatsApp instant chat'],
    heroImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600',
    tagline: 'Reliable, local plumbing & heating services when you need them most.',
    primaryColor: '#0ea5e9' // sky-500
  },
  {
    id: 'electrician',
    name: 'Electricians',
    iconName: 'Zap',
    typicalNeeds: ['NICEIC registration display', 'Emergency call-out rate card', 'Reviews widget', 'Fast quote form'],
    heroImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600',
    tagline: 'Fully certified domestic and commercial electricians.',
    primaryColor: '#eab308' // yellow-500
  },
  {
    id: 'builder',
    name: 'Builders',
    iconName: 'HardHat',
    typicalNeeds: ['Huge project gallery', 'FMB/Trustmark logos', 'Detailed testimonial stories', 'Request a site survey'],
    heroImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600',
    tagline: 'Extending and transforming spaces with premium craftsmanship.',
    primaryColor: '#f97316' // orange-500
  },
  {
    id: 'roofer',
    name: 'Roofers',
    iconName: 'Home',
    typicalNeeds: ['Drone footage placeholders', 'Guarantees text', 'Emergency repairs form', 'Insurance approved badge'],
    heroImage: 'https://images.unsplash.com/photo-1632759162444-1240411132dc?auto=format&fit=crop&q=80&w=600',
    tagline: 'Quality roofing repairs, installations, and maintenance.',
    primaryColor: '#4f46e5' // indigo-600
  },
  {
    id: 'decorator',
    name: 'Decorators',
    iconName: 'Paintbrush',
    typicalNeeds: ['Before & After slider', 'Colour palette gallery', 'Mess-free guarantee list', 'Schedule an estimate'],
    heroImage: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=600',
    tagline: 'Interior and exterior painting to high visual standards.',
    primaryColor: '#ec4899' // pink-500
  },
  {
    id: 'gardener',
    name: 'Gardeners',
    iconName: 'Flower',
    typicalNeeds: ['Seasonal maintenance plans', 'High-res lawn galleries', 'Sub-contracting quotes', 'Simple contact widget'],
    heroImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=600',
    tagline: 'Professional garden maintenance, landscaping, and tree care.',
    primaryColor: '#10b981' // emerald-500
  },
  {
    id: 'cleaning',
    name: 'Cleaning Services',
    iconName: 'Sparkles',
    typicalNeeds: ['Pricing calculator', 'Vetted cleaners assurance', 'One-off or deep clean scheduler', 'No-contract flexibility'],
    heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600',
    tagline: 'Sparkling clean homes and commercial properties, guaranteed.',
    primaryColor: '#06b6d4' // cyan-500
  },
  {
    id: 'flooring',
    name: 'Flooring Installers',
    iconName: 'Layers',
    typicalNeeds: ['Material catalog list', 'Underlay details', 'Request free samples CTA', 'Free measurement visit'],
    heroImage: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=600',
    tagline: 'Premium carpet, wood, LVT, and laminate flooring installations.',
    primaryColor: '#8b5cf6' // violet-500
  },
  {
    id: 'handyman',
    name: 'Handymen',
    iconName: 'Hammer',
    typicalNeeds: ['Hourly rate transparency', 'Odd-jobs checklists', 'Quick message via WhatsApp', 'Multi-skill credentials'],
    heroImage: 'https://images.unsplash.com/photo-1581141872292-2685769344d1?auto=format&fit=crop&q=80&w=600',
    tagline: 'No job too small. Professional property repairs and assemblies.',
    primaryColor: '#64748b' // slate-500
  }
];

export const DEMO_SITES: DemoSite[] = [
  {
    id: 'smith-plumbing',
    name: 'Smith Plumbing & Heating',
    industry: 'plumber',
    tagline: 'Emergency boiler repairs and high-efficiency heating systems throughout Surrey.',
    primaryColor: '#0ea5e9',
    rating: '4.9',
    reviewCount: 142,
    services: ['Boiler Installations', 'Emergency Repair', 'Gas Safety Inspections', 'Bathroom Plumbing'],
    phone: '01483 555 982',
    email: 'help@smithplumbing.co.uk',
    location: 'Guildford & surrounding Surrey areas'
  },
  {
    id: 'bright-spark',
    name: 'Bright Spark Electrical Services',
    industry: 'electrician',
    tagline: 'NIC-EIC registered local electricians for home upgrades, re-wires and EV chargers.',
    primaryColor: '#eab308',
    rating: '5.0',
    reviewCount: 94,
    services: ['Full House Rewiring', 'EV Charger Installation', 'Consumer Unit Upgrades', 'EICR Certifications'],
    phone: '020 7946 0192',
    email: 'office@brightsparkelec.co.uk',
    location: 'South West London & Kingston'
  },
  {
    id: 'elite-roofing',
    name: 'Elite Roofing Specialists',
    industry: 'roofer',
    tagline: 'Bespoke slate roofing, fast leak diagnosis, and fully insured flat-roof systems.',
    primaryColor: '#4f46e5',
    rating: '4.8',
    reviewCount: 215,
    services: ['Emergency Roof Repair', 'New Slate Roofs', 'Flat GRP Roofs', 'Gutter Cleaning & Repair'],
    phone: '0121 496 0329',
    email: 'info@eliteroofingmidlands.co.uk',
    location: 'Birmingham & West Midlands'
  },
  {
    id: 'green-gardens',
    name: 'Green Gardens Landscaping',
    industry: 'gardener',
    tagline: 'Transforming gardens with weekly lawn care, bespoke paving, and expert hedge trimming.',
    primaryColor: '#10b981',
    rating: '4.9',
    reviewCount: 88,
    services: ['Lawn Maintenance', 'Porcelain Paving', 'Fence Installations', 'Garden Cleanups'],
    phone: '0161 496 0881',
    email: 'hello@greengardensmanchester.co.uk',
    location: 'Greater Manchester & Cheshire'
  },
  {
    id: 'clean-shine',
    name: 'Clean Shine Domestic & Commercial',
    industry: 'cleaning',
    tagline: 'Highly vetted, reliable, fully insured home cleaners for busy families and commercial offices.',
    primaryColor: '#06b6d4',
    rating: '4.9',
    reviewCount: 120,
    services: ['Weekly Domestic Cleaning', 'Deep Spring Cleans', 'Office & Commercial Care', 'End of Tenancy Specialist'],
    phone: '0117 496 0292',
    email: 'team@cleanshinebristol.co.uk',
    location: 'Bristol, Bath & North Somerset'
  },
  {
    id: 'oak-flooring',
    name: 'Oak & Co Flooring Installers',
    industry: 'flooring',
    tagline: 'Flawless hardwood, LVT and premium carpet supply and professional installation.',
    primaryColor: '#8b5cf6',
    rating: '5.0',
    reviewCount: 76,
    services: ['Engineered Oak Flooring', 'LVT Herringbone Layouts', 'Luxury Wool Carpets', 'Screeding & Subfloor Prep'],
    phone: '0113 496 0503',
    email: 'quotes@oakflooringleeds.co.uk',
    location: 'Leeds & West Yorkshire'
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Starter Presence',
    priceMonthly: 79,
    description: 'Perfect for established tradesmen who want a beautiful, professional 1-page profile that ranks on Google and handles all customer leads.',
    features: [
      'Bespoke Single-Page Website',
      'Professional UK Domain (.co.uk)',
      '1 Secure Custom Email Box',
      'High-Speed Cloud Hosting',
      'Contact Forms & SMS/Email Alerts',
      'Local SEO Package (Google Maps Setup)',
      'Unlimited Text & Image Updates',
      'Full Security, Daily Backups & SSL',
      'GDPR Cookie & Legal Pages'
    ],
    ctaText: 'Start Starter Plan'
  },
  {
    name: 'Growth Presence',
    priceMonthly: 129,
    description: 'Our most popular plan. Ideal for expanding businesses that need individual service pages to target multiple local keywords and service bookings.',
    features: [
      'Multi-Page Bespoke Website (Up to 5 pages)',
      'Dedicated Service Landing Pages',
      'Up to 3 Custom Business Emails',
      'Interactive Booking / Quote Calendar',
      'Before/After Gallery Carousel',
      'Enhanced Google Maps Authority Setup',
      'WhatsApp Live Chat Integration',
      'Monthly Simple Lead Reports',
      'Priority WhatsApp Support (Response <4 hours)'
    ],
    ctaText: 'Start Growth Plan',
    popular: true
  },
  {
    name: 'Pro Presence',
    priceMonthly: 199,
    description: 'For busy trade companies and local multi-van services wanting to dominate their local market, publish regular content, and use automated AI customer helpers.',
    features: [
      'Premium Multi-Page Website (Up to 15 pages)',
      'Up to 5 Custom Business Emails',
      'Bespoke Content Hub & News Blog',
      'AI-Powered Lead Response Bot',
      'Before/After Sliders & Client Portals',
      'Advanced Multi-City Local SEO Focus',
      'Quarterly Competitor Ranking Reviews',
      'Social Media Image Templates (Monthly)',
      'Dedicated Web Manager Direct Phone Line'
    ],
    ctaText: 'Start Pro Plan'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Mark Henderson',
    role: 'Owner',
    company: 'Henderson Plumbing & Gas',
    quote: "I used to pay £3,000 upfront to an agency who took 6 months to build a site that I couldn't even update. Now, I pay a single monthly fee. Any time I want to change my boiler prices, I just WhatsApp my support agent, and it's done within an hour. My booking volume has more than doubled.",
    location: 'Guildford, Surrey',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Director',
    company: 'Jenkins Domestic Electrical',
    quote: "As an electrician, I'm great with wiring but hopeless with SEO. They took over everything—designed the site, configured my Google Maps, set up my email, and optimized it. I am now ranking in the top 3 on Google for 'electrician near me' in Bristol. Best decision I've made for my company.",
    location: 'Bristol',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'Davey Croft',
    role: 'Founder',
    company: 'Apex Roofs Ltd',
    quote: "These guys don't talk tech nonsense. They said they'd make me look professional and get more quote requests. They delivered exactly that. Our monthly lead analytics are straightforward and clean, and our phone hasn't stopped ringing. No massive upfront bills is the icing on the cake.",
    location: 'Coventry',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Is there really no upfront cost to build my website?',
    answer: 'Absolutely zero. Traditional agencies charge between £1,500 and £5,000 upfront. With us, we build, write, design, and launch your entire custom website under your monthly subscription. There are no hidden setup fees, ever.'
  },
  {
    question: 'Do I own my custom domain name and content?',
    answer: 'Yes! We register the custom domain (e.g., yourbusiness.co.uk) in your name. If you ever decide to leave us, we will hand over ownership of your domain name to you with no questions asked.'
  },
  {
    question: 'How do unlimited updates work? Is there a catch?',
    answer: 'No catch! Whenever you need to edit your pricing, change your phone number, swap high-resolution project photos, add new client reviews, or announce a new service, just send a text or WhatsApp to your dedicated team. We aim to complete all updates within 24 business hours.'
  },
  {
    question: 'Will my website actually rank on Google?',
    answer: 'Yes. Every website we build is crafted with optimized SEO coding, lightweight components, and structured metadata. We also configure and optimize your Google Business Profile on Google Maps, which is the absolute #1 way local tradesmen secure nearby clients.'
  },
  {
    question: 'How long are the contracts? Am I locked in?',
    answer: 'Our service operates on a rolling month-to-month subscription. We believe we should earn your business every single month. If your business direction changes or you want to pause, you can cancel at any time with a simple 30 days notice.'
  },
  {
    question: 'Can you help set up professional business email?',
    answer: 'Yes, professional email is included in all packages! We will set you up with beautiful, reliable custom email addresses (e.g., sales@yourcompany.co.uk) that run perfectly on your mobile phone, laptop, or tablet.'
  }
];

export const COMPARISONS = [
  {
    criterion: 'Upfront Setup Cost',
    agency: '£1,500 – £5,000 upfront fee',
    subscription: '£0 upfront cost (Included in subscription)',
    benefit: true
  },
  {
    criterion: 'Website Content Updates',
    agency: 'Charged £60–£120 per hour or per-request',
    subscription: 'Unlimited updates via WhatsApp (Included)',
    benefit: true
  },
  {
    criterion: 'Fast Cloud Hosting & SSL',
    agency: 'Usually extra £20–£50/month, user managed',
    subscription: 'Enterprise grade, ultra-secure hosting (Included)',
    benefit: true
  },
  {
    criterion: 'Professional Email Accounts',
    agency: 'Left for you to buy and figure out yourself',
    subscription: 'Fully configured business email (Included)',
    benefit: true
  },
  {
    criterion: 'Ongoing Local SEO & Maps',
    agency: 'Requires a secondary agency at £300+/month',
    subscription: 'Ongoing optimization & Maps setup (Included)',
    benefit: true
  },
  {
    criterion: 'Content and Copywriting',
    agency: 'You must write all text and supply it',
    subscription: 'Tailored copywriting for your trade (Included)',
    benefit: true
  },
  {
    criterion: 'Technical Maintenance & Backups',
    agency: 'Rarely done unless you pay a monthly fee',
    subscription: 'Daily automated backups & daily security patches',
    benefit: true
  }
];
