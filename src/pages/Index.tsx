import { useEffect, useRef } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import useAnalytics from '@/hooks/useAnalytics';

const Index = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const { trackEvent } = useAnalytics();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            
            // Track which section became visible
            const sectionId = entry.target.getAttribute('data-section-id');
            if (sectionId) {
              trackEvent('Section Viewed', { sectionId });
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    
    const sections = document.querySelectorAll('.section-transition');
    sections.forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [trackEvent]);
  
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      <div className="section-transition" data-section-id="features">
        <Features />
      </div>
      
      <div className="section-transition" data-section-id="how-it-works">
        <HowItWorks />
      </div>
      
      <div className="section-transition" data-section-id="faq">
        <FAQ />
      </div>
      
      <div className="section-transition" data-section-id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
