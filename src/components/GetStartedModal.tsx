import { useState, useEffect } from 'react';
import { INDUSTRIES, PRICING_TIERS } from '../data';
import { X, ChevronRight, ChevronLeft, Sparkles, CheckCircle2, Lock, Building, Phone, Mail, Globe } from 'lucide-react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedIndustryId?: string;
  preselectedPlanName?: string;
}

export default function GetStartedModal({
  isOpen,
  onClose,
  preselectedIndustryId = '',
  preselectedPlanName = '',
}: GetStartedModalProps) {
  // Wizard steps: 1 (Trade), 2 (Details), 3 (Plan), 4 (Confirmation)
  const [step, setStep] = useState(1);

  // Form Fields
  const [industryId, setIndustryId] = useState('plumber');
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [planName, setPlanName] = useState('Growth Presence');
  const [notes, setNotes] = useState('');

  // Handle pre-selections when modal opens
  useEffect(() => {
    if (preselectedIndustryId) {
      setIndustryId(preselectedIndustryId);
      setStep(2); // Jump past step 1 if industry is pre-selected
    }
  }, [preselectedIndustryId, isOpen]);

  useEffect(() => {
    if (preselectedPlanName) {
      setPlanName(preselectedPlanName);
      setStep(2); // Jump straight to details if pricing tier is pre-selected
    }
  }, [preselectedPlanName, isOpen]);

  if (!isOpen) return null;

  const activeIndustry = INDUSTRIES.find((ind) => ind.id === industryId) || INDUSTRIES[0];

  const handleNext = () => {
    if (step === 2) {
      // Basic validation
      if (!companyName.trim() || !contactName.trim() || !email.trim() || !phone.trim()) {
        alert('Please fill out all contact and business details to continue.');
        return;
      }
    }
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleResetAndClose = () => {
    setStep(1);
    setCompanyName('');
    setContactName('');
    setEmail('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm">
      {/* Modal Dialog container */}
      <div className="bg-white rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl relative border border-neutral-200 flex flex-col text-left animate-in fade-in zoom-in-95 duration-250">
        {/* Header bar */}
        <div className="flex justify-between items-center px-6 py-4.5 border-b border-neutral-100">
          <div className="flex flex-col">
            <h3 className="font-extrabold text-neutral-900 text-lg leading-tight">
              {step === 4 ? 'Project Received!' : 'Setup Your Custom Presence'}
            </h3>
            {step < 4 && (
              <span className="text-[10px] text-neutral-400 font-bold tracking-widest uppercase mt-0.5">
                Step {step} of 3 • UK Managed Deployment
              </span>
            )}
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress horizontal line indicator */}
        {step < 4 && (
          <div className="h-1 bg-neutral-100 w-full flex">
            <div
              className="h-full bg-neutral-900 transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto max-h-[80vh] flex-1">
          {/* STEP 1: SELECT TRADE SECTOR */}
          {step === 1 && (
            <div className="flex flex-col gap-4 animate-in fade-in duration-200">
              <div className="mb-2">
                <h4 className="text-sm font-extrabold text-neutral-900">What sector is your trade business in?</h4>
                <p className="text-xs text-neutral-500 mt-1">We will pre-configure your domain, keywords, and local booking features to match your specific sector.</p>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {INDUSTRIES.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setIndustryId(ind.id)}
                    className={`p-3 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between h-20 ${
                      industryId === ind.id
                        ? 'border-neutral-950 bg-neutral-50 ring-1 ring-neutral-950'
                        : 'border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    <span className="text-xs font-extrabold text-neutral-900">{ind.name}</span>
                    <span className="text-[10px] text-neutral-500 block italic leading-tight truncate w-full">
                      {ind.tagline}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: BUSINESS DETAILS & CONTACT INFO */}
          {step === 2 && (
            <div className="flex flex-col gap-4 animate-in fade-in duration-200">
              <div className="mb-2">
                <h4 className="text-sm font-extrabold text-neutral-900">Tell us about your business</h4>
                <p className="text-xs text-neutral-500 mt-1">
                  We need some basic details to register your custom domain name and reach out with your prototype mockups.
                </p>
              </div>

              <div className="flex flex-col gap-3.5 text-xs sm:text-sm">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Company / Trading Name *</label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Henderson Plumbing & Heating"
                      className="w-full bg-white border border-neutral-200 rounded-xl p-2.5 pl-9 text-neutral-900 focus:outline-none focus:border-neutral-950"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">Contact Name *</label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Mark Henderson"
                      className="w-full bg-white border border-neutral-200 rounded-xl p-2.5 text-neutral-900 focus:outline-none focus:border-neutral-950"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">Phone Number *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 07946 000 000"
                        className="w-full bg-white border border-neutral-200 rounded-xl p-2.5 pl-9 text-neutral-900 focus:outline-none focus:border-neutral-950"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. mark@gmail.com"
                      className="w-full bg-white border border-neutral-200 rounded-xl p-2.5 pl-9 text-neutral-900 focus:outline-none focus:border-neutral-950"
                    />
                  </div>
                  <p className="text-[10px] text-neutral-400 mt-1">We will use this to email you prototype previews.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Do you cover specific towns/cities? (Optional)</label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Guildford, Woking, and surrounding Surrey villages"
                    className="w-full bg-white border border-neutral-200 rounded-xl p-2.5 text-neutral-900 focus:outline-none focus:border-neutral-950"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: PICK PRICING PLAN */}
          {step === 3 && (
            <div className="flex flex-col gap-4 animate-in fade-in duration-200">
              <div className="mb-2">
                <h4 className="text-sm font-extrabold text-neutral-900">Select your digital presence package</h4>
                <p className="text-xs text-neutral-500 mt-1">
                  You can change or upgrade your subscription plan at any time. No upfront building fees on any plan.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {PRICING_TIERS.map((tier) => (
                  <button
                    key={tier.name}
                    onClick={() => setPlanName(tier.name)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex justify-between items-center gap-4 ${
                      planName === tier.name
                        ? 'border-neutral-950 bg-neutral-50 ring-1 ring-neutral-950'
                        : 'border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-extrabold text-neutral-900">{tier.name}</span>
                        {tier.popular && (
                          <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">Most popular</span>
                        )}
                      </div>
                      <span className="text-[10px] sm:text-xs text-neutral-500 block leading-tight mt-1 max-w-sm truncate">
                        {tier.description}
                      </span>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-sm sm:text-base font-extrabold text-neutral-900">£{tier.priceMonthly}</span>
                      <span className="text-[9px] text-neutral-400 block font-bold uppercase mt-0.5">/month</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-4 bg-neutral-50 border border-neutral-200/50 p-4 rounded-xl flex items-center gap-3">
                <Lock className="w-4 h-4 text-neutral-400 shrink-0" />
                <p className="text-[10px] sm:text-xs text-neutral-500 text-left">
                  We secure your details. By continuing, you agree to our rolling monthly service terms. No card is charged today.
                </p>
              </div>
            </div>
          )}

          {/* STEP 4: CONFIRMATION SUCCESS */}
          {step === 4 && (
            <div className="flex flex-col items-center text-center gap-4 py-8 animate-in zoom-in-95 duration-250">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="max-w-md">
                <h4 className="text-xl font-extrabold text-neutral-900">Thank you, {contactName}!</h4>
                <p className="text-sm font-bold text-neutral-800 mt-1">We have received your SteadySite proposal.</p>
                <p className="text-xs text-neutral-500 leading-relaxed mt-3">
                  Our professional copywriters and designers are reviewing your details for the <span className="font-bold text-neutral-800">{companyName}</span> custom build ({planName}).
                </p>

                <div className="my-6 bg-neutral-50 border border-neutral-200/50 p-4 rounded-2xl text-left flex flex-col gap-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-500 font-semibold">Sector Spec:</span>
                    <span className="font-bold text-neutral-800 capitalize">{industryId}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-500 font-semibold">Email Setup:</span>
                    <span className="font-bold text-neutral-800">info@{companyName.toLowerCase().replace(/[^a-z0-9]/g, '') || 'yourtrade'}.co.uk</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-500 font-semibold">Selected Plan:</span>
                    <span className="font-bold text-neutral-800">{planName}</span>
                  </div>
                </div>

                <p className="text-xs text-neutral-500 leading-relaxed">
                  We will call you on <span className="font-bold text-neutral-800">{phone}</span> within 2 hours (Mon-Fri 8am-6pm) to verify your domain configuration and start drafting your bespoke landing page.
                </p>
              </div>

              <button
                onClick={handleResetAndClose}
                className="mt-6 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all cursor-pointer"
              >
                Close Window
              </button>
            </div>
          )}
        </div>

        {/* Modal Actions Footer Bar (Step 1-3) */}
        {step < 4 && (
          <div className="px-6 py-4 border-t border-neutral-100 bg-neutral-50 flex justify-between items-center">
            {step > 1 ? (
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-1 bg-white border border-neutral-200 text-neutral-700 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            <button
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-colors cursor-pointer"
            >
              <span>{step === 3 ? 'Confirm Order' : 'Continue'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
