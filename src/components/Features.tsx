import AnimatedElement from "./ui-elements/AnimatedElement";
import { MessageSquare, Shield, Zap, Cloud } from "lucide-react";
import useAnalytics from '@/hooks/useAnalytics';

const Features = () => {
  const { trackFeatureEngagement } = useAnalytics();
  
  const features = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "即時通訊 / 廣播",
      id: "instant-messaging",
      description: "採用輕量化的通訊協定，讓訊息能即時傳到所有上線成員。不儲存任何訊息至資料庫，關閉就消失，確保八卦不流傳。"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "多樣主題切換",
      id: "themes",
      description: "模擬各種常用工作介面：像是 Slack、Excel、IDE、簡報視窗...一鍵切換，不怕被老闆或同事識破。"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "緊急通知",
      id: "emergency-alert",
      description: "可自訂捷徑（例：Ctrl + Shift + B），按下即向所有人送出「老闆來了！」警示。可自動切換到「正常工作」UI，防截圖、擋突襲。"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "零資料庫，輕量安裝",
      id: "lightweight",
      description: "應用程式檔案容量小、記憶體佔用低，隨時可以在 Windows、macOS、Linux 上執行。不用任何資料庫，讓你在公司網路中隨開隨用，聊完即散。"
    }
  ];

  const handleFeatureHover = (featureId: string) => {
    trackFeatureEngagement(featureId, 'hover');
  };
  
  const handleFeatureClick = (featureId: string) => {
    trackFeatureEngagement(featureId, 'click');
  };

  return (
    <section id="features" className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <AnimatedElement animation="slide-up">
            <span className="inline-block py-2 px-3 text-xs font-medium text-gray-600 rounded-full bg-gray-100 mb-6">
              功能特色
            </span>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient-accent mb-6">
              為內網團隊設計的隱私聊天解決方案
            </h2>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={200}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              這是一款透過 Rust + Tauri 開發，輕量、快速且安全的桌面聊天應用。特別為企業或團隊設計，讓大家可以在同一個內網環境中快速連線、即時聊天。
            </p>
          </AnimatedElement>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <AnimatedElement
              key={index}
              animation="slide-up"
              delay={300 + index * 100}
              className="h-full"
            >
              <div 
                className="glass p-8 rounded-2xl h-full transition-all hover:shadow-md cursor-pointer"
                onMouseEnter={() => handleFeatureHover(feature.id)}
                onClick={() => handleFeatureClick(feature.id)}
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 text-gray-800 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
