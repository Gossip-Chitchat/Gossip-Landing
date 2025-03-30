import mixpanel from 'mixpanel-browser';
import type { Config as MixpanelConfig } from 'mixpanel-browser';

// Mixpanel 令牌
const MIXPANEL_TOKEN = "cff3d318b341eb06a2c3820b7ba0c6d2"

// 初始化函式，將在 useEffect 中呼叫
export const initMixpanel = () => {
    if (typeof window === 'undefined') return;

    try {
        // 初始化 Mixpanel
        mixpanel.init(MIXPANEL_TOKEN, {
            debug: false,
            track_pageview: false,
            ignore_dnt: true,
            persistence: "localStorage"
        });

        // 設定基本屬性
        mixpanel.register({
            app_version: '1.0.0',
            platform: 'web'
        });
    } catch (error) {
        console.error('Failed to initialize Mixpanel:', error);
    }
};

// 追蹤頁面瀏覽
export const trackPageView = (pageName: string) => {
    if (typeof window === 'undefined') return;

    try {
        mixpanel.track('Page View', {
            page: pageName,
            url: window.location.href,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error tracking page view:', error);
    }
};

// 追蹤使用者動作
export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    if (typeof window === 'undefined') return;

    try {
        mixpanel.track(eventName, {
            ...properties,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error(`Error tracking event: ${eventName}`, error);
    }
};

// 追蹤導航事件
export const trackNavigation = (destination: string) => {
    if (typeof window === 'undefined') return;

    try {
        mixpanel.track('Navigation', {
            destination,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error tracking navigation:', error);
    }
};

// 追蹤 CTA 點擊
export const trackCTAClick = (ctaName: string, ctaText: string, location?: string) => {
    if (typeof window === 'undefined') return;

    try {
        mixpanel.track('CTA Click', {
            name: ctaName,
            text: ctaText,
            location: location || 'Unknown',
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error tracking CTA click:', error);
    }
};

// 追蹤功能互動
export const trackFeatureEngagement = (featureName: string, action: string) => {
    if (typeof window === 'undefined') return;

    try {
        mixpanel.track('Feature Engagement', {
            feature: featureName,
            action,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error tracking feature engagement:', error);
    }
};

// 識別使用者 (註冊或登入時)
export const identifyUser = (userId: string, userProperties?: Record<string, unknown>) => {
    if (typeof window === 'undefined') return;

    try {
        mixpanel.identify(userId);
        if (userProperties) {
            mixpanel.people.set(userProperties);
        }
    } catch (error) {
        console.error('Error identifying user:', error);
    }
};

// 重置使用者身份 (登出時)
export const resetIdentity = () => {
    if (typeof window === 'undefined') return;

    try {
        mixpanel.reset();
    } catch (error) {
        console.error('Error resetting identity:', error);
    }
};

// 為使用者建立別名 (通常用於匿名使用者轉為已知使用者時)
export const aliasUser = (userId: string, distinctId?: string) => {
    if (typeof window === 'undefined') return;

    try {
        mixpanel.alias(userId, distinctId);
    } catch (error) {
        console.error('Error creating user alias:', error);
    }
};

export default {
    initMixpanel,
    trackPageView,
    trackEvent,
    trackNavigation,
    trackCTAClick,
    trackFeatureEngagement,
    identifyUser,
    resetIdentity,
    aliasUser
}; 
