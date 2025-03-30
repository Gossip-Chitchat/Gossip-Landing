
import { useState } from 'react';
import AnimatedElement from "./ui-elements/AnimatedElement";
import { Check } from "lucide-react";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "下載並安裝",
      description: "點擊「立即下載」按鈕，獲取適用於你系統的安裝檔。安裝完成後，啟動應用程式。",
      image: "step1.png" // Placeholder - we don't have actual images yet
    },
    {
      title: "建立或加入聊天室",
      description: "想當房主的人，只需點選「建立連結」按鈕，系統自動生成連結或QRCode，並分享給同事。其他人複製連結後，在應用程式中貼上即可自動加入。",
      image: "step2.png" // Placeholder
    },
    {
      title: "開始聊天",
      description: "像 IRC 一樣的多人聊天列表，任何訊息一旦送出即自動廣播給所有人。在右上角選擇你喜愛的「工作介面」主題，一鍵變身，神不知鬼不覺。",
      image: "step3.png" // Placeholder
    },
    {
      title: "老闆出現警示",
      description: "預設快捷鍵 (可自訂)，如 Ctrl + Shift + B，立刻廣播「老闆來了」，並可同時把界面切回純文字或 Excel 模式。讓所有人保持警覺，又不失禮貌。",
      image: "step4.png" // Placeholder
    }
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="container max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <AnimatedElement animation="slide-up">
            <span className="inline-block py-2 px-3 text-xs font-medium text-gray-600 rounded-full bg-gray-100 mb-6">
              運作流程
            </span>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient-accent mb-6">
              簡單四步驟，開始私密聊天
            </h2>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={200}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              不需要複雜的設定，只要簡單幾個步驟，就能立即開始安全、隱私的內部聊天
            </p>
          </AnimatedElement>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement animation="slide-right" delay={300}>
            <div className="glass rounded-2xl overflow-hidden shadow-lg">
              <div className="h-[400px] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center text-white">
                <span className="text-lg font-medium">步驟 {activeStep + 1} 示範畫面</span>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-left" delay={400}>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeStep === index 
                      ? 'glass shadow-md' 
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 ${
                      activeStep === index 
                        ? 'bg-black text-white' 
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {activeStep > index ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <span>{index + 1}</span>
                      )}
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold mb-2 ${
                        activeStep === index ? 'text-black' : 'text-gray-700'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`${
                        activeStep === index ? 'text-gray-700' : 'text-gray-500'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
