import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import analytics from "@/lib/analytics";

const queryClient = new QueryClient();

// 分析追蹤元件
const AnalyticsTracker = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // 僅初始化 Mixpanel 一次
    analytics.initMixpanel();
  }, []);

  useEffect(() => {
    // 從路徑獲取頁面名稱
    const pageName = location.pathname === "/" 
      ? "Home" 
      : location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2);
    
    // 追蹤頁面瀏覽
    analytics.trackPageView(pageName);
    
    // 追蹤導航類型 (POP, PUSH, REPLACE)
    if (navigationType) {
      analytics.trackEvent("Navigation Type", { type: navigationType });
    }
  }, [location, navigationType]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
