'use client';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const trackPhoneCallClick = (phoneNumber: string = '6572984061', label: string = 'Header/CTA') => {
  if (typeof window === 'undefined') return;

  // Push to dataLayer for Google Tag Manager (GTM-KNC2GR4)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'phone_call_click',
    phone_number: phoneNumber,
    link_location: label,
  });

  // Call gtag directly if GA4 (G-C1EYM0JCZC) is present
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'phone_call_click', {
      event_category: 'engagement',
      event_label: label,
      value: phoneNumber,
    });
  }
};

export const trackFormSubmission = (formId: string = '5SviqisRQjnrGLdX2rLq', formName: string = 'Lead Form') => {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'lead_form_submitted',
    form_id: formId,
    form_name: formName,
  });

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'lead_form_submitted', {
      event_category: 'conversion',
      event_label: formName,
    });
  }
};
