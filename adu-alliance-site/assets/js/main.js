// ==========================================================================
// ADU ALLIANCE — MAIN SCRIPT
// FormSubmit AJAX handling, GA4 event triggers, Sticky Mobile CTA, Before/After Slider
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Current Year in footer
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  // 2. Sticky Mobile CTA Reveal on Scroll (after 300px)
  const mobileCta = document.getElementById('mobile-cta');
  if (mobileCta) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        mobileCta.classList.add('visible');
      } else {
        mobileCta.classList.remove('visible');
      }
    }, { passive: true });
  }

  // 3. Before/After Interactive Sliders
  const baSliders = document.querySelectorAll('.ba-slider');
  baSliders.forEach((slider) => {
    slider.addEventListener('input', (e) => {
      const val = e.target.value;
      const parent = e.target.closest('.ba-container');
      if (!parent) return;

      const overlay = parent.querySelector('.ba-overlay');
      const handle = parent.querySelector('.ba-handle');

      if (overlay) {
        overlay.style.clipPath = `inset(0 ${100 - val}% 0 0)`;
      }
      if (handle) {
        handle.style.left = `${val}%`;
      }
    });
  });

  // 4. FormSubmit AJAX Form Handling
  const forms = document.querySelectorAll('form[action*="formsubmit.co"]');
  forms.forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const btn = form.querySelector('button[type="submit"]');
      const origText = btn ? btn.innerHTML : 'Submit';
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = 'Sending Assessment Request...';
      }

      const formData = new FormData(form);
      const dataObj = {};
      formData.forEach((value, key) => {
        dataObj[key] = value;
      });

      try {
        const actionUrl = form.getAttribute('action') || 'https://formsubmit.co/ajax/info@adualliance.com';
        const response = await fetch(actionUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(dataObj),
        });

        if (response.ok) {
          form.innerHTML = `
            <div style="text-align: center; padding: 2rem 1rem;">
              <div style="font-size: 2.5rem; color: #22c55e; margin-bottom: 0.5rem;">✓</div>
              <h3 style="font-size: 1.5rem; color: #ffffff; margin-bottom: 0.5rem;">Assessment Request Confirmed!</h3>
              <p style="font-size: 0.875rem; color: #d1d5db; line-height: 1.6;">
                Thank you for contacting ADU Alliance. Our Orange County planning department is evaluating your property parcel and setback data. We will follow up within 1 business day.
              </p>
            </div>
          `;

          // Fire GA4 Event if gtag available
          if (typeof window.gtag === 'function') {
            window.gtag('event', 'generate_lead', {
              event_category: 'form',
              event_label: dataObj.source_page || 'homepage',
              value: 1,
            });
          }
        } else {
          throw new Error('Form submission failed');
        }
      } catch (err) {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = origText;
        }
        let errBox = form.querySelector('.form-error-msg');
        if (!errBox) {
          errBox = document.createElement('div');
          errBox.className = 'form-error-msg';
          errBox.style.cssText = 'color: #ef4444; font-size: 0.8125rem; margin-bottom: 0.75rem; text-align: center;';
          form.prepend(errBox);
        }
        errBox.textContent = 'Submission error. Please call our Orange County desk directly at (657) 298-4061.';
      }
    });
  });

  // 5. Track Click-to-Call in GA4
  const telLinks = document.querySelectorAll('a[href^="tel:"]');
  telLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'click_to_call', {
          event_category: 'contact',
          event_label: link.getAttribute('href'),
        });
      }
    });
  });
});
