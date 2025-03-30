import { GithubIcon } from "lucide-react";
import useAnalytics from '@/hooks/useAnalytics';

const Footer = () => {
  const { trackEvent, trackCTAClick } = useAnalytics();
  
  const handleDownloadClick = (platform: string) => {
    trackCTAClick('download_button', `${platform} 版下載`, 'footer');
    trackEvent('Download Initiated', { platform });
  };
  
  const handleGithubClick = () => {
    trackEvent('External Link Click', { 
      destination: 'github',
      url: 'https://github.com/Gossip-Chitchat/Gossip'
    });
  };
  
  const handleEmailClick = () => {
    trackEvent('Contact Click', { 
      type: 'email',
      destination: 'henryliking@gmail.com'
    });
  };
  
  return (
    <footer id="download" className="py-16 md:py-24 bg-black text-white">
      <div className="container max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              準備好開始使用了嗎？
            </h2>
            <p className="text-gray-400 mb-8 md:pr-12">
              立即下載 Gossip，開啟一個匿名的聊天室，安全、私密地與團隊溝通。不留痕跡，隨開隨用。
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex">
              <a 
                href="https://github.com/Gossip-Chitchat/Gossip" 
                className="w-full md:w-auto py-3 px-6 flex justify-center items-center gap-2 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-all"
                onClick={() => handleDownloadClick('Windows')}
              >
                Windows 版下載
              </a>
              <a 
                href="https://github.com/Gossip-Chitchat/Gossip" 
                className="w-full md:w-auto py-3 px-6 flex justify-center items-center gap-2 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
                onClick={() => handleDownloadClick('macOS')}
              >
                macOS 版下載
              </a>
              <a 
                href="https://github.com/Gossip-Chitchat/Gossip" 
                className="w-full md:w-auto py-3 px-6 flex justify-center items-center gap-2 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
                onClick={() => handleDownloadClick('Linux')}
              >
                Linux 版下載
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <a 
                href="https://github.com/Gossip-Chitchat/Gossip" 
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                onClick={handleGithubClick}
              >
                <GithubIcon className="w-5 h-5" />
                <span>GitHub 源碼</span>
              </a>
            </div>
          </div>
          
          <div className="lg:pl-12 lg:border-l border-white/20">
            <h3 className="text-xl font-display font-bold mb-6">
              聯絡我們
            </h3>
            <p className="text-gray-400 mb-6">
              若需要技術支援或商業合作，請透過以下方式聯繫我們。
            </p>
            <a 
              href="mailto:henryliking@gmail.com" 
              className="text-white hover:text-gray-300 transition-colors"
              onClick={handleEmailClick}
            >
              henryliking@gmail.com
            </a>
            
            <div className="mt-12">
              <p className="text-sm text-gray-500">
                © 2025 Gossip Chat All Rights Reserved.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                本工具僅適用於內部交流，請遵守公司政策，不得散布機密或違法內容。
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
