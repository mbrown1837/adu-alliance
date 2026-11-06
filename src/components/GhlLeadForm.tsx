'use client';

import React, { useEffect, useRef, useState } from 'react';
import { trackFormSubmission } from '@/lib/gtm';
import { Phone, Loader2 } from 'lucide-react';
import { ENQUIRY_CITIES } from '@/lib/enquiry-context';

interface GhlLeadFormProps {
  className?: string;
  minHeight?: string;
}

export default function GhlLeadForm({ className = '', minHeight = '750px' }: GhlLeadFormProps) {
  const [isLoading, setIsLoading] = useState(true);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const submissionTracked = useRef(false);
  const [frameSrc, setFrameSrc] = useState('https://link.westlanddre.com/widget/survey/ZNe5dhYHKIoH4EyvJqNP');

  useEffect(() => {
    // Standard city query-prefill was verified against the live survey input.
    // Other project fields are not mapped until their provider keys are verified.
    const city = new URLSearchParams(window.location.search).get('city') || '';
    if (Object.hasOwn(ENQUIRY_CITIES, city)) {
      const url = new URL('https://link.westlanddre.com/widget/survey/ZNe5dhYHKIoH4EyvJqNP');
      url.searchParams.set('city', ENQUIRY_CITIES[city]);
      setFrameSrc(url.href);
    }
    // Dynamically inject GHL form embed script if not already present
    const existingScript = document.querySelector('script[src="https://link.westlanddre.com/js/form_embed.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://link.westlanddre.com/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Listen for GHL submission message events
    const handleGhlMessage = (event: MessageEvent) => {
      // A form ID alone is also present in load/resize messages. Require the
      // success bridge from this exact embedded survey, and count it once.
      // Integration requirement: configure this custom message in the survey's
      // confirmed-success callback. Native load/resize events are not success.
      // Until that bridge is verified, CRM submissions remain the lead source.
      if (event.origin !== 'https://link.westlanddre.com' ||
          !frameRef.current?.contentWindow ||
          event.source !== frameRef.current.contentWindow ||
          typeof event.data !== 'object' || event.data === null ||
          event.data.type !== 'ghl_survey_submitted' ||
          event.data.formId !== 'ZNe5dhYHKIoH4EyvJqNP' ||
          submissionTracked.current) return;
      submissionTracked.current = true;
      trackFormSubmission('ZNe5dhYHKIoH4EyvJqNP', 'ADU Alliance Property Assessment');
    };

    window.addEventListener('message', handleGhlMessage);
    return () => window.removeEventListener('message', handleGhlMessage);
  }, []);

  return (
    <div className={`w-full overflow-hidden rounded-2xl bg-brand-dark border border-brand-borderDark shadow-2xl p-2 sm:p-6 force-dark ${className}`}>
      
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="w-full py-16 flex flex-col items-center justify-center space-y-3 text-slate-400 font-mono text-xs animate-pulse">
          <Loader2 className="w-8 h-8 text-brand-amber animate-spin" />
          <span>Loading Multi-Step Property Assessment Survey...</span>
        </div>
      )}

      {/* GHL Survey Iframe Embed */}
      <iframe
        ref={frameRef}
        src={frameSrc}
        onLoad={() => setIsLoading(false)}
        style={{
          width: '100%',
          minHeight,
          border: 'none',
          borderRadius: '8px',
          background: 'transparent',
          display: isLoading ? 'none' : 'block',
        }}
        id="ZNe5dhYHKIoH4EyvJqNP"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="ADU Alliance Property Assessment"
        data-height="750"
        data-layout-iframe-id="ZNe5dhYHKIoH4EyvJqNP"
        data-form-id="ZNe5dhYHKIoH4EyvJqNP"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="ADU Alliance Property Assessment"
      />

      {/* Fallback Assistance Banner */}
      <div className="mt-4 p-3.5 bg-brand-black rounded-xl border border-brand-borderDark/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-slate-300 text-center sm:text-left">
        <span>Having trouble loading the survey?</span>
        <a
          href="tel:9498229561"
          className="text-brand-amber hover:text-white font-bold flex items-center gap-1.5 shrink-0"
        >
          <Phone className="w-3.5 h-3.5" /> Call Planning Desk: (949) 822-9561
        </a>
      </div>
    </div>
  );
}
