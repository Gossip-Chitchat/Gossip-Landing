import { ArrowDown } from "lucide-react";
import AnimatedElement from "./ui-elements/AnimatedElement";
import useAnalytics from '@/hooks/useAnalytics';

const Hero = () => {
  const { trackCTAClick, trackNavigation } = useAnalytics();
  
  const handleDownloadClick = () => {
    trackCTAClick('hero_download_button', '立即下載', 'hero');
  };
  
  const handleLearnMoreClick = () => {
    trackCTAClick('learn_more_button', '了解更多', 'hero');
    trackNavigation('features');
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-100 rounded-full filter blur-3xl opacity-50 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-100 rounded-full filter blur-3xl opacity-60 animate-float animation-delay-300"></div>
      </div>
      
      <div className="container max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <AnimatedElement animation="fade-in" delay={100}>
            <span className="inline-block py-2 px-3 text-xs font-medium text-gray-600 rounded-full bg-gray-100 mb-6">
              Gossip 隱私聊天應用
            </span>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-gradient-accent leading-tight mb-6 max-w-4xl mx-auto">
              免安裝伺服器，一鍵啟動的神祕聊天工具！
            </h1>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={300}>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              即時匿名聊天，內建多種主題，支援緊急"老闆警示"功能，零資料庫留存，訊息就此蒸發！
            </p>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={500}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a 
                href="#download" 
                className="w-full sm:w-auto py-4 px-8 rounded-full bg-black text-white font-medium hover:bg-black/90 transition-all shadow-md hover:shadow-lg"
                onClick={handleDownloadClick}
              >
                立即下載
              </a>
              <a 
                href="#features" 
                className="w-full sm:w-auto py-4 px-8 rounded-full bg-white text-gray-900 font-medium border border-gray-200 hover:bg-gray-50 transition-all"
                onClick={handleLearnMoreClick}
              >
                了解更多
              </a>
            </div>
          </AnimatedElement>
        </div>
        
        <AnimatedElement animation="slide-up" delay={600} className="relative">
          <div className="relative mx-auto max-w-4xl glass rounded-2xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5"></div>
            {/* This would be your app screenshot/mockup */}
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
              <div className="text-center text-white">
                <span className="text-lg font-medium">應用界面</span>
                <p className="text-sm text-gray-300 mt-2">多種主題，隨時偽裝常用工作介面</p>
              </div>
            </div>
          </div>
        </AnimatedElement>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">向下滑動了解更多</span>
          <ArrowDown className="w-5 h-5 text-gray-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
