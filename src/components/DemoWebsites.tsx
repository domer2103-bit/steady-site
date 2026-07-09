import { useState } from 'react';
import { DEMO_SITES, INDUSTRIES } from '../data';
import { Star, Smartphone, Tablet, Laptop, RefreshCw, Sparkles, Phone, Mail, Check, CheckSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DemoWebsitesProps {
  onGetStarted: () => void;
}

export default function DemoWebsites({ onGetStarted }: DemoWebsitesProps) {
  // Demo State
  const [selectedPresetId, setSelectedPresetId] = useState('smith-plumbing');
  
  // Custom interactive state (allows typing custom brand)
  const [customName, setCustomName] = useState('');
  const [customIndustryId, setCustomIndustryId] = useState('plumber');
  const [customColor, setCustomColor] = useState('#0ea5e9');
  
  // Device Frame selection State
  const [deviceFrame, setDeviceFrame] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // Active preset item
  const currentPreset = DEMO_SITES.find(site => site.id === selectedPresetId) || DEMO_SITES[0];

  // Derive current values based on whether custom brand is used or preset
  const finalName = customName.trim() !== '' ? customName : currentPreset.name;
  const finalIndustryId = customName.trim() !== '' ? customIndustryId : currentPreset.industry;
  const finalColor = customName.trim() !== '' ? customColor : currentPreset.primaryColor;

  const currentIndustry = INDUSTRIES.find(ind => ind.id === finalIndustryId) || INDUSTRIES[0];

  const finalTagline = customName.trim() !== '' 
    ? `${currentIndustry.tagline} Professional local workmanship guaranteed.`
    : currentPreset.tagline;

  const finalServices = customName.trim() !== ''
    ? [
        `Residential ${currentIndustry.name}`,
        `Emergency ${currentIndustry.name} Care`,
        `Commercial installations`,
        `Free Quotations & Diagnosis`
      ]
    : currentPreset.services;

  const finalPhone = customName.trim() !== '' ? '07946 000 000' : currentPreset.phone;
  const finalEmail = customName.trim() !== '' ? `info@${finalName.toLowerCase().replace(/[^a-z0-9]/g, '') || 'yourtrade'}.co.uk` : currentPreset.email;
  const finalLocation = customName.trim() !== '' ? 'Your local area & surroundings' : currentPreset.location;

  const handlePresetSelect = (id: string) => {
    setSelectedPresetId(id);
    setCustomName(''); // Reset custom input so preset takes effect
  };

  const handleCustomSetup = (industryId: string, color: string) => {
    setCustomIndustryId(industryId);
    setCustomColor(color);
    if (customName === '') {
      setCustomName('My Trade Business');
    }
  };

  const colorOptions = [
    { value: '#0ea5e9', label: 'Sky' },
    { value: '#eab308', label: 'Yellow' },
    { value: '#10b981', label: 'Emerald' },
    { value: '#4f46e5', label: 'Indigo' },
    { value: '#ec4899', label: 'Pink' },
    { value: '#06b6d4', label: 'Cyan' },
    { value: '#8b5cf6', label: 'Violet' },
  ];

  return (
    <section id="demo-websites" className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      {/* Background soft geometric light */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-neutral-800 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest bg-neutral-800 border border-neutral-700 px-3 py-1 rounded-full mb-3">
            Demo Playground
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Interact with our showcase.
          </h2>
          <p className="text-neutral-400 mt-4 text-base sm:text-lg">
            Choose a mock business below or type your own brand name to instantly preview how your custom, lightning-fast trades website will look on any device.
          </p>
        </div>

        {/* Dynamic Demo Workstation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT SIDE: Control Station */}
          <div className="lg:col-span-4 flex flex-col gap-6 bg-neutral-800/60 border border-neutral-800 p-6 rounded-2xl shadow-lg">
            
            {/* Step 1: Preset selector */}
            <div>
              <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">
                1. Select a trade preset
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {DEMO_SITES.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => handlePresetSelect(preset.id)}
                    className={`p-2.5 rounded-xl text-left text-xs font-semibold transition-all cursor-pointer border ${
                      selectedPresetId === preset.id && customName === ''
                        ? 'bg-white text-neutral-950 border-white'
                        : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
                    }`}
                  >
                    <p className="truncate">{preset.name.split(' ')[0]} {preset.name.split(' ')[1] || ''}</p>
                    <span className="text-[10px] text-neutral-500 font-medium capitalize mt-0.5 block">{preset.industry}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Custom branding creation */}
            <div className="border-t border-neutral-800 pt-4">
              <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>2. Customize with your business</span>
              </h3>
              
              <div className="flex flex-col gap-3">
                {/* Custom input */}
                <div>
                  <label className="block text-[11px] text-neutral-400 font-bold mb-1.5">Company Name</label>
                  <input
                    type="text"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    placeholder="e.g. Henderson Electrical"
                    className="w-full bg-neutral-900 border border-neutral-800 text-sm p-2.5 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500"
                  />
                </div>

                {/* Industry list */}
                <div>
                  <label className="block text-[11px] text-neutral-400 font-bold mb-1.5">Service Sector</label>
                  <select
                    value={customIndustryId}
                    onChange={(e) => handleCustomSetup(e.target.value, customColor)}
                    className="w-full bg-neutral-900 border border-neutral-800 text-sm p-2.5 rounded-xl text-white focus:outline-none focus:border-neutral-500 capitalize"
                  >
                    {INDUSTRIES.map((ind) => (
                      <option key={ind.id} value={ind.id}>
                        {ind.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Color dots picker */}
                <div>
                  <label className="block text-[11px] text-neutral-400 font-bold mb-1.5">Accent Theme Color</label>
                  <div className="flex flex-wrap gap-2">
                    {colorOptions.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => handleCustomSetup(customIndustryId, color.value)}
                        className="w-6 h-6 rounded-full relative transition-transform hover:scale-110 cursor-pointer"
                        style={{ backgroundColor: color.value }}
                        title={color.label}
                      >
                        {customColor === color.value && customName !== '' && (
                          <Check className="w-3.5 h-3.5 text-white absolute inset-0 m-auto font-bold" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Live status badge */}
            <div className="mt-auto bg-neutral-900/60 p-4 rounded-xl border border-neutral-800/80">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-neutral-200">Interactive Preview Active</span>
              </div>
              <p className="text-[10px] text-neutral-500 leading-relaxed">
                This simulator showcases real responsive code, layout strategies, and font pairings used in our actual trade deployments.
              </p>
            </div>

          </div>

          {/* RIGHT SIDE: Interactive Device Simulator */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            
            {/* Device Mode Switcher bar */}
            <div className="flex justify-between items-center bg-neutral-800/60 border border-neutral-800 p-2 rounded-xl">
              <span className="text-xs font-bold text-neutral-400 px-2 flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-neutral-500" />
                <span>Responsive Frame Control</span>
              </span>
              
              <div className="flex gap-1 bg-neutral-900 p-1 rounded-lg">
                {[
                  { id: 'desktop', label: 'Desktop', icon: Laptop },
                  { id: 'tablet', label: 'Tablet', icon: Tablet },
                  { id: 'mobile', label: 'Mobile', icon: Smartphone }
                ].map((device) => {
                  const Icon = device.icon;
                  return (
                    <button
                      key={device.id}
                      onClick={() => setDeviceFrame(device.id as any)}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                        deviceFrame === device.id
                          ? 'bg-white text-neutral-950'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">{device.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Live Web Canvas Container */}
            <div className="flex-1 bg-neutral-950 border border-neutral-800 rounded-2xl flex items-center justify-center p-4 min-h-[460px] relative">
              
              {/* Outer frame width adapter based on device selection */}
              <div
                className="transition-all duration-300 overflow-hidden bg-white text-neutral-900 flex flex-col shadow-2xl relative"
                style={{
                  width: deviceFrame === 'desktop' ? '100%' : deviceFrame === 'tablet' ? '480px' : '320px',
                  height: deviceFrame === 'desktop' ? '440px' : deviceFrame === 'tablet' ? '480px' : '520px',
                  borderRadius: deviceFrame === 'desktop' ? '8px' : '24px',
                  border: deviceFrame !== 'desktop' ? '6px solid #262626' : 'none'
                }}
              >
                {/* Simulated Web browser header */}
                {deviceFrame === 'desktop' && (
                  <div className="h-6 bg-neutral-100 border-b border-neutral-200 flex items-center justify-between px-3">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-neutral-300" />
                      <div className="w-2 h-2 rounded-full bg-neutral-300" />
                      <div className="w-2 h-2 rounded-full bg-neutral-300" />
                    </div>
                    <div className="bg-white px-8 py-0.5 rounded text-[9px] font-medium text-neutral-400 font-mono border border-neutral-200">
                      https://{finalName.toLowerCase().replace(/[^a-z0-9]/g, '') || 'yourtrade'}.co.uk
                    </div>
                    <div className="w-6" />
                  </div>
                )}

                {/* Simulated mobile speaker bar */}
                {deviceFrame !== 'desktop' && (
                  <div className="h-4 bg-neutral-900 text-white flex justify-center items-center relative">
                    <div className="w-12 h-1 bg-neutral-700 rounded-full" />
                  </div>
                )}

                {/* WEBPAGE PREVIEW CANVAS CONTENT */}
                <div className="flex-1 overflow-y-auto text-left relative bg-white flex flex-col text-neutral-900 select-none">
                  
                  {/* Web Page Header Navbar */}
                  <header className="sticky top-0 bg-white/90 backdrop-blur border-b border-neutral-100 py-2.5 px-4 flex justify-between items-center z-10">
                    <span className="font-bold text-[13px] tracking-tight text-neutral-950 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: finalColor }} />
                      {finalName}
                    </span>
                    <a
                      href={`tel:${finalPhone}`}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[10px] font-bold border border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                    >
                      <Phone className="w-3 h-3 text-emerald-600" />
                      <span>{finalPhone}</span>
                    </a>
                  </header>

                  {/* Web Page Hero */}
                  <section className="bg-neutral-50 py-8 px-4 border-b border-neutral-200/50 flex flex-col gap-3">
                    
                    {/* Star Badge */}
                    <div className="inline-flex items-center gap-1 bg-white border border-neutral-200 px-2 py-0.5 rounded self-start text-[9px] font-bold text-neutral-800">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span>5.0 Rated (120+ local reviews)</span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-extrabold text-neutral-950 tracking-tight leading-snug">
                      {finalTagline}
                    </h4>

                    <p className="text-[11px] sm:text-xs text-neutral-500 max-w-md">
                      Highly professional, certified {currentIndustry.name.toLowerCase()} offering services throughout {finalLocation}. Fully insured with free no-obligation quotes.
                    </p>

                    <div className="flex gap-2.5 mt-2">
                      <button
                        onClick={onGetStarted}
                        className="text-[10px] sm:text-xs text-white font-bold px-3.5 py-1.5 rounded shadow"
                        style={{ backgroundColor: finalColor }}
                      >
                        Request Free Quote
                      </button>
                      <a
                        href={`tel:${finalPhone}`}
                        className="text-[10px] sm:text-xs bg-white text-neutral-700 border border-neutral-200 font-bold px-3.5 py-1.5 rounded"
                      >
                        Emergency Callback
                      </a>
                    </div>
                  </section>

                  {/* Web Page Services Grid */}
                  <section className="py-6 px-4">
                    <h5 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-3">Our Core Specialties</h5>
                    <div className="grid grid-cols-2 gap-2.5">
                      {finalServices.map((service, idx) => (
                        <div key={idx} className="border border-neutral-200/60 p-2.5 rounded-lg bg-white shadow-sm">
                          <div className="w-5 h-5 rounded flex items-center justify-center mb-1.5" style={{ backgroundColor: `${finalColor}12` }}>
                            <span className="text-[10px] font-bold" style={{ color: finalColor }}>✓</span>
                          </div>
                          <p className="text-[10px] font-bold text-neutral-900 leading-tight">{service}</p>
                          <p className="text-[8px] text-neutral-400 mt-1">Professional, prompt, fully vetted execution.</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Trust footer & Maps highlight */}
                  <section className="bg-neutral-950 text-neutral-400 text-[9px] p-4 mt-auto border-t border-neutral-800">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <div>
                        <p className="font-bold text-white text-[10px] mb-0.5">{finalName}</p>
                        <p className="text-neutral-500 text-[8px]">© 2026 {finalName}. All rights reserved.</p>
                      </div>
                      <div className="flex flex-col gap-0.5 items-start sm:items-end text-neutral-500 text-[8px]">
                        <span>📍 Serving: {finalLocation}</span>
                        <span>✉ Email: {finalEmail}</span>
                      </div>
                    </div>
                  </section>

                </div>

              </div>

            </div>

            {/* Quick action button for the actual visitor */}
            <div className="bg-neutral-800/40 border border-neutral-800/80 p-4 rounded-xl flex items-center justify-between gap-4">
              <p className="text-xs text-neutral-400 text-left">
                Love this design? We customize the colors, logos, and features entirely for your trade business.
              </p>
              <button
                onClick={onGetStarted}
                className="bg-white text-neutral-950 hover:bg-neutral-100 px-4 py-2 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer"
              >
                Request My Custom Build
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
