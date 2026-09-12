'use client';

import React, { useEffect, useState } from 'react';
import { trackFormSubmission } from '@/lib/gtm';
import { Phone, Loader2 } from 'lucide-react';

interface GhlLeadFormProps {
  className?: string;
  minHeight?: string;
}

export default function GhlLeadForm({ className = '', minHeight = '750px' }: GhlLeadFormProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
      if (
        event.data?.type === 'ghl_survey_submitted' ||
        event.data?.formId === '6hD0FF59AuNJ7LflDzVg' ||
        (typeof event.data === 'string' && event.data.includes('6hD0FF59AuNJ7LflDzVg'))
      ) {
        trackFormSubmission('6hD0FF59AuNJ7LflDzVg', 'ADU Alliance Free Property Assessment');
      }
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
          <span>Loading Secure Property Assessment Form...</span>
        </div>
      )}

      {/* GHL Survey Iframe Embed */}
      <iframe
        src="https://link.westlanddre.com/widget/survey/6hD0FF59AuNJ7LflDzVg"
        onLoad={() => setIsLoading(false)}
        style={{
          width: '100%',
          minHeight,
          border: 'none',
          borderRadius: '8px',
          background: 'transparent',
          display: isLoading ? 'none' : 'block',
        }}
        id="6hD0FF59AuNJ7LflDzVg"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="ADU Alliance Free Property Assessment"
        data-height="750"
        data-layout-iframe-id="6hD0FF59AuNJ7LflDzVg"
        data-form-id="6hD0FF59AuNJ7LflDzVg"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="ADU Alliance Free Property Assessment"
      />

      {/* Fallback Assistance Banner */}
      <div className="mt-4 p-3.5 bg-brand-black rounded-xl border border-brand-borderDark/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-slate-300 text-center sm:text-left">
        <span>Having trouble loading the form?</span>
        <a
          href="tel:6572984061"
          className="text-brand-amber hover:text-white font-bold flex items-center gap-1.5 shrink-0"
        >
          <Phone className="w-3.5 h-3.5" /> Call Planning Desk: (657) 298-4061
        </a>
      </div>
    </div>
  );
}
