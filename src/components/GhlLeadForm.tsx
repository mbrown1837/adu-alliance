'use client';

import React, { useEffect } from 'react';
import { trackFormSubmission } from '@/lib/gtm';

interface GhlLeadFormProps {
  className?: string;
  minHeight?: string;
}

export default function GhlLeadForm({ className = '', minHeight = '920px' }: GhlLeadFormProps) {
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
        event.data?.type === 'ghl_form_submitted' ||
        event.data?.formId === '5SviqisRQjnrGLdX2rLq' ||
        (typeof event.data === 'string' && event.data.includes('5SviqisRQjnrGLdX2rLq'))
      ) {
        trackFormSubmission('5SviqisRQjnrGLdX2rLq', 'ADU Alliance Assessment Lead Form');
      }
    };

    window.addEventListener('message', handleGhlMessage);
    return () => window.removeEventListener('message', handleGhlMessage);
  }, []);

  return (
    <div className={`w-full overflow-hidden rounded-2xl bg-brand-dark border border-brand-borderDark shadow-2xl p-2 sm:p-6 ${className}`}>
      <iframe
        src="https://link.westlanddre.com/widget/form/5SviqisRQjnrGLdX2rLq"
        style={{
          width: '100%',
          minHeight,
          border: 'none',
          borderRadius: '8px',
          background: 'transparent',
        }}
        id="inline-5SviqisRQjnrGLdX2rLq"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Lead Form"
        data-height="920"
        data-layout-iframe-id="inline-5SviqisRQjnrGLdX2rLq"
        data-form-id="5SviqisRQjnrGLdX2rLq"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="ADU Alliance Official Feasibility Assessment Form"
      />
    </div>
  );
}
