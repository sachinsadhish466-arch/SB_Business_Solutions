'use client';

import LoadingScreen from '@/components/site/LoadingScreen';
import ScrollProgress from '@/components/site/ScrollProgress';
import AnimatedCursor from '@/components/site/AnimatedCursor';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import BackToTop from '@/components/site/BackToTop';
import FloatingWhatsApp from '@/components/site/FloatingWhatsApp';
import CookieConsent from '@/components/site/CookieConsent';

import Hero from '@/components/sections/Hero';
import ClientLogosStrip from '@/components/sections/ClientLogosStrip';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import AISolutions from '@/components/sections/AISolutions';
import Industries from '@/components/sections/Industries';
import WhyAI from '@/components/sections/WhyAI';
import TechStack from '@/components/sections/TechStack';
import Portfolio from '@/components/sections/Portfolio';
import Process from '@/components/sections/Process';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTABand from '@/components/sections/CTABand';
import Blog from '@/components/sections/Blog';
import Careers from '@/components/sections/Careers';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <AnimatedCursor />
      <Navbar />

      <main>
        <Hero />
        <ClientLogosStrip />
        <About />
        <Services />
        <AISolutions />
        <Industries />
        <WhyAI />
        <TechStack />
        <Portfolio />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <CTABand />
        <Blog />
        <Careers />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
      <CookieConsent />
    </>
  );
}
