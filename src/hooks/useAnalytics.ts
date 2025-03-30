import { useCallback } from 'react';
import analytics from '@/lib/analytics';

export function useAnalytics() {
    // Track page views
    const trackPageView = useCallback((pageName: string) => {
        analytics.trackPageView(pageName);
    }, []);

    // Track user actions
    const trackEvent = useCallback((eventName: string, properties?: Record<string, unknown>) => {
        analytics.trackEvent(eventName, properties);
    }, []);

    // Track navigation
    const trackNavigation = useCallback((destination: string) => {
        analytics.trackNavigation(destination);
    }, []);

    // Track CTA clicks
    const trackCTAClick = useCallback((ctaName: string, ctaText: string, location?: string) => {
        analytics.trackCTAClick(ctaName, ctaText, location);
    }, []);

    // Track feature engagement
    const trackFeatureEngagement = useCallback((featureName: string, action: string) => {
        analytics.trackFeatureEngagement(featureName, action);
    }, []);

    return {
        trackPageView,
        trackEvent,
        trackNavigation,
        trackCTAClick,
        trackFeatureEngagement
    };
}

export default useAnalytics; 
