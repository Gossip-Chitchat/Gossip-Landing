
import { useState } from 'react';
import AnimatedElement from "./ui-elements/AnimatedElement";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "如果房主關機了怎麼辦？",
      answer: "房主相當於中繼伺服器，一旦他關閉應用，聊天室就中斷。重新啟動或換另一人開啟都可重建聊天室。"
    },
    {
      question: "真的不會有歷史紀錄？",
      answer: "是的，所有訊息只存在應用程式記憶體中；除非使用者截圖，否則關閉應用即無法回溯。"
    },
    {
      question: "是否支援跨平台？",
      answer: "是，Windows、macOS、Linux 都提供可執行檔或安裝包。可自由選擇。"
    },
    {
      question: "可以多人同時切換不同主題？",
      answer: "可以。主題切換對每個人都是獨立設定，無法得知對方的選擇。"
    },
    {
      question: "有沒有API可供整合？",
      answer: "目前該應用主要作為獨立的桌面應用程式使用，暫不提供外部API整合。如有特殊需求，可聯繫我們的開發團隊討論客製化方案。"
    }
  ];
  
  const toggleQuestion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <AnimatedElement animation="slide-up">
            <span className="inline-block py-2 px-3 text-xs font-medium text-gray-600 rounded-full bg-gray-100 mb-6">
              常見問題
            </span>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient-accent mb-6">
              你可能想問的問題
            </h2>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={200}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              我們收集了一些使用者最常詢問的問題，希望能解答您的疑惑
            </p>
          </AnimatedElement>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedElement
              key={index}
              animation="slide-up"
              delay={300 + index * 100}
            >
              <div className="glass rounded-xl overflow-hidden">
                <button
                  className="w-full px-6 py-5 flex justify-between items-center text-left"
                  onClick={() => toggleQuestion(index)}
                >
                  <h3 className="text-lg font-display font-medium">{faq.question}</h3>
                  <div className="flex-shrink-0 ml-4">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-gray-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-40 pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
