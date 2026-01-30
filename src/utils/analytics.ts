/**
 * Envia um evento para o Google Tag Manager via dataLayer.
 * @param eventNome Nome do evento (ex: 'whatsapp_click', 'view_item')
 * @param eventData Dados adicionais do evento
 */
export const trackEvent = (event_name: string, event_data: Record<string, any> = {}) => {
    if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: event_name,
            ...event_data
        });
        console.log(`[Analytics] Event: ${event_name}`, event_data);
    }
};

/**
 * Eventos pré-definidos para padronização
 */
export const AnalyticsEvents = {
    WHATSAPP_CLICK: 'whatsapp_click',
    PRODUCT_VIEW: 'view_item',
    NAVIGATION: 'navigation_click'
};
