
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Authority } from './components/sections/Authority';
import { ProductShowcase } from './components/sections/ProductShowcase';
import { FAQ } from './components/sections/FAQ';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { Footer } from './components/layout/Footer';
import { Testimonials } from './components/sections/Testimonials';
import { CTASection } from './components/sections/CTASection';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Authority />
        <ProductShowcase />
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

