import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import HowItWorks from './components/HowItWorks';
import WhatsIncluded from './components/WhatsIncluded';
import Industries from './components/Industries';
import DemoWebsites from './components/DemoWebsites';
import Pricing from './components/Pricing';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import GetStartedModal from './components/GetStartedModal';

export default function App() {
  // Get Started Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preselectedIndustry, setPreselectedIndustry] = useState('');
  const [preselectedPlan, setPreselectedPlan] = useState('');

  // Universal Get Started opener
  const handleOpenGetStarted = () => {
    setPreselectedIndustry('');
    setPreselectedPlan('');
    setIsModalOpen(true);
  };

  // Specific sector opener (from Industry cards)
  const handleSelectIndustry = (industryId: string) => {
    setPreselectedIndustry(industryId);
    setPreselectedPlan('');
    setIsModalOpen(true);
  };

  // Specific plan opener (from Pricing cards)
  const handleSelectPlan = (planName: string) => {
    setPreselectedIndustry('');
    setPreselectedPlan(planName);
    setIsModalOpen(true);
  };

  // Smooth scroll helper to jump down to Demo Playground
  const handleViewDemo = () => {
    const demoSection = document.getElementById('demo-websites');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 relative">
      {/* Dynamic Header Navbar */}
      <Navbar onGetStarted={handleOpenGetStarted} onViewDemo={handleViewDemo} />

      {/* Hero Section */}
      <Hero onGetStarted={handleOpenGetStarted} onViewDemo={handleViewDemo} />

      {/* Trust Badging Bar */}
      <TrustBar />

      {/* 1-2-3 How It Works */}
      <HowItWorks />

      {/* Detailed Grid Inclusions */}
      <WhatsIncluded />

      {/* Trade Industries Filter */}
      <Industries onSelectIndustry={handleSelectIndustry} />

      {/* Dynamic Browser Showcase Playground */}
      <DemoWebsites onGetStarted={handleOpenGetStarted} />

      {/* Pricing Options */}
      <Pricing onSelectPlan={handleSelectPlan} />

      {/* Feature Comparative Matrix */}
      <Comparison />

      {/* Contractor Social Proof */}
      <Testimonials />

      {/* Accordion Questions */}
      <FAQ />

      {/* Visual Retainer Banner */}
      <FinalCTA onGetStarted={handleOpenGetStarted} />

      {/* Detailed Footer Navigation */}
      <Footer />

      {/* Multi-step Setup Wizard Modal */}
      <GetStartedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedIndustryId={preselectedIndustry}
        preselectedPlanName={preselectedPlan}
      />
    </div>
  );
}
