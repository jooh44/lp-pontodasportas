
import { useEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Authority } from './components/sections/Authority';
import { ProductShowcase } from './components/sections/ProductShowcase';
import { StatsSection } from './components/sections/StatsSection';
import { FAQ } from './components/sections/FAQ';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { BackToTop } from './components/common/BackToTop';
import { Footer } from './components/layout/Footer';
import { Testimonials } from './components/sections/Testimonials';
import { CTASection } from './components/sections/CTASection';
import { MapSection } from './components/sections/MapSection';

// Register standard ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Smooth scroll removed as per request

  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Authority />
        <ProductShowcase />
        <StatsSection />
        <Testimonials />
        <CTASection />
        <FAQ />
        <MapSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </>
  )
}

export default App

