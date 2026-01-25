
import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Authority } from './components/sections/Authority';
import { ProductShowcase } from './components/sections/ProductShowcase';
import { StatsSection } from './components/sections/StatsSection';
import { FAQ } from './components/sections/FAQ';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { Footer } from './components/layout/Footer';
import { Testimonials } from './components/sections/Testimonials';
import { CTASection } from './components/sections/CTASection';

// Register standard ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame to GSAP's ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable GSAP's default lag smoothing to prevent conflicts
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Cleanup
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      lenis.destroy();
    };
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
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export default App

