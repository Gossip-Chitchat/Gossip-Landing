import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import useAnalytics from '@/hooks/useAnalytics';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { trackNavigation, trackCTAClick } = useAnalytics();
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleNavClick = (destination: string) => {
    trackNavigation(destination);
  };
  
  const handleDownloadClick = () => {
    trackCTAClick('download_button', '立即下載', 'header');
  };
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12",
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="text-2xl font-display font-bold text-gradient-accent"
            onClick={() => handleNavClick('home')}
          >
            Gossip
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              onClick={() => handleNavClick('features')}
            >
              特色
            </a>
            <a 
              href="#how-it-works" 
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              onClick={() => handleNavClick('how-it-works')}
            >
              運作方式
            </a>
            <a 
              href="#faq" 
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              onClick={() => handleNavClick('faq')}
            >
              常見問題
            </a>
          </div>
          
          <a 
            href="#download" 
            className="py-2 px-4 rounded-full bg-black text-white text-sm font-medium hover:bg-black/90 transition-all shadow-sm hover:shadow"
            onClick={handleDownloadClick}
          >
            立即下載
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
