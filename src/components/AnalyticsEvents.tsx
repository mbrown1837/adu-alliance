'use client';
import { useEffect } from 'react';
import { trackPhoneCallClick } from '@/lib/gtm';
export default function AnalyticsEvents() {
 useEffect(() => {
  const onClick = (event: MouseEvent) => {
   if (!(event.target instanceof Element)) return;
   const link = event.target.closest<HTMLAnchorElement>('a[href^="tel:"]');
   if (!link) return;
   const number = link.getAttribute('href')?.slice(4).replace(/[^0-9+]/g, '') || '';
   const area = link.closest('header') ? 'Header' : link.closest('footer') ? 'Footer' : link.closest('[data-call-location]')?.getAttribute('data-call-location') || 'Page';
   trackPhoneCallClick(number, area);
  };
  document.addEventListener('click', onClick);
  return () => document.removeEventListener('click', onClick);
 }, []);
 return null;
}
