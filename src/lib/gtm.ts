'use client';
declare global {
 interface Window {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
 }
}
// One analytics transport: direct GA4 events. Do not also push a named GTM
// custom event for these actions, which can trigger a second GA4 event.
export const trackPhoneCallClick = (phoneNumber = '9498229561', label = 'Page') => {
 if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
 window.gtag('event', 'phone_call_click', {phone_number: phoneNumber, link_location: label});
};
export const trackFormSubmission = (formId = 'ZNe5dhYHKIoH4EyvJqNP', formName = 'Property Assessment') => {
 if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
 window.gtag('event', 'lead_form_submitted', {form_id: formId, form_name: formName});
};
