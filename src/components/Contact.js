import { site } from '../data/site.js';
import { products } from '../data/products.js';

function renderContactValue(value) {
  if (Array.isArray(value)) {
    return value.join('<br>');
  }
  return value;
}

export function renderContact() {
  const productOptions = products
    .map((product) => `<option value="${product.id}">${product.title}</option>`)
    .join('');

  return `
    <section class="py-section-gap bg-surface-container-low" id="contact">
      <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="grid md:grid-cols-2 gap-16">
          <div class="space-y-12">
            <div class="space-y-4">
              <h2 class="font-headline-lg text-headline-lg text-deep-forest">Contact Us</h2>
              <p class="font-body-lg text-body-lg text-on-surface-variant">
                Inquire for wholesale and partnership offers. Our team will respond to you within 24 hours.
              </p>
            </div>
            <address class="space-y-8 not-italic">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/10 rounded flex items-center justify-center text-primary shrink-0" aria-hidden="true">
                  <span class="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h3 class="font-label-lg text-label-lg text-deep-forest uppercase">${site.contact.office.label}</h3>
                  <p class="font-body-md text-body-md text-on-surface-variant">${site.contact.office.value}</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/10 rounded flex items-center justify-center text-primary shrink-0" aria-hidden="true">
                  <span class="material-symbols-outlined">phone_in_talk</span>
                </div>
                <div>
                  <h3 class="font-label-lg text-label-lg text-deep-forest uppercase">${site.contact.phone.label}</h3>
                  <p class="font-body-md text-body-md text-on-surface-variant">${renderContactValue(site.contact.phone.value)}</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/10 rounded flex items-center justify-center text-primary shrink-0" aria-hidden="true">
                  <span class="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h3 class="font-label-lg text-label-lg text-deep-forest uppercase">${site.contact.email.label}</h3>
                  <p class="font-body-md text-body-md text-on-surface-variant">
                    ${site.contact.email.value.map((email) => `<a href="mailto:${email}" class="hover:text-primary transition-colors">${email}</a>`).join('<br>')}
                  </p>
                </div>
              </div>
            </address>
          </div>

          <div class="bg-surface-container-lowest p-8 md:p-12 rounded-lg shadow-xl border border-primary/5">
            <form id="contact-form" class="space-y-6" novalidate>
              <div id="form-status" class="hidden rounded p-4 font-body-md text-body-md" role="status" aria-live="polite"></div>
              <input type="text" name="_gotcha" class="hidden" tabindex="-1" autocomplete="off" aria-hidden="true" />

              <div class="space-y-2">
                <label for="inquiry-type" class="font-label-lg text-label-lg text-on-surface-variant">Inquiry Type</label>
                <select
                  id="inquiry-type"
                  name="inquiryType"
                  class="w-full bg-transparent border-0 border-b border-primary/20 focus:border-primary focus:ring-0 px-0 py-2 transition-colors font-body-md"
                  required
                >
                  <option value="general">General Inquiry</option>
                  <option value="sample">Request a Sample</option>
                </select>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label for="contact-name" class="font-label-lg text-label-lg text-on-surface-variant">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    class="w-full bg-transparent border-0 border-b border-primary/20 focus:border-primary focus:ring-0 px-0 py-2 transition-colors"
                    placeholder="Your Name"
                    type="text"
                    autocomplete="name"
                    required
                    minlength="2"
                  />
                </div>
                <div class="space-y-2">
                  <label for="contact-email" class="font-label-lg text-label-lg text-on-surface-variant">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    class="w-full bg-transparent border-0 border-b border-primary/20 focus:border-primary focus:ring-0 px-0 py-2 transition-colors"
                    placeholder="Your Email Address"
                    type="email"
                    autocomplete="email"
                    required
                  />
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label for="product-interest" class="font-label-lg text-label-lg text-on-surface-variant">Product Interest</label>
                  <select
                    id="product-interest"
                    name="productInterest"
                    class="w-full bg-transparent border-0 border-b border-primary/20 focus:border-primary focus:ring-0 px-0 py-2 transition-colors font-body-md"
                    required
                  >
                    ${productOptions}
                  </select>
                </div>
                <div class="space-y-2">
                  <label for="quantity" class="font-label-lg text-label-lg text-on-surface-variant">Estimated Quantity (kg)</label>
                  <input
                    id="quantity"
                    name="quantity"
                    class="w-full bg-transparent border-0 border-b border-primary/20 focus:border-primary focus:ring-0 px-0 py-2 transition-colors"
                    placeholder="e.g. 500kg"
                    type="text"
                  />
                </div>
              </div>

              <div class="space-y-2">
                <label for="message" class="font-label-lg text-label-lg text-on-surface-variant">Message</label>
                <textarea
                  id="message"
                  name="message"
                  class="w-full bg-transparent border-0 border-b border-primary/20 focus:border-primary focus:ring-0 px-0 py-2 transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                  rows="4"
                  required
                  minlength="10"
                ></textarea>
              </div>

              <button
                id="contact-submit"
                class="w-full py-4 bg-primary text-on-primary font-label-lg text-label-lg rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                type="submit"
              >
                Submit Inquiry
                <span class="material-symbols-outlined" aria-hidden="true">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const submitBtn = document.getElementById('contact-submit');

  if (!form || !status || !submitBtn) return;

  const showStatus = (message, type) => {
    status.textContent = message;
    status.classList.remove('hidden', 'bg-error-container', 'text-on-error-container', 'bg-primary-fixed', 'text-on-primary-fixed');
    if (type === 'error') {
      status.classList.add('bg-error-container', 'text-on-error-container');
    } else {
      status.classList.add('bg-primary-fixed', 'text-on-primary-fixed');
    }
  };

  const validateForm = () => {
    const name = form.elements.name;
    const email = form.elements.email;
    const message = form.elements.message;

    if (!name.value.trim() || name.value.trim().length < 2) {
      showStatus('Please enter your name (at least 2 characters).', 'error');
      name.focus();
      return false;
    }

    if (!email.validity.valid) {
      showStatus('Please enter a valid email address.', 'error');
      email.focus();
      return false;
    }

    if (!message.value.trim() || message.value.trim().length < 10) {
      showStatus('Please enter a message (at least 10 characters).', 'error');
      message.focus();
      return false;
    }

    return true;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.classList.add('hidden');

    if (!validateForm()) return;

    const recipient = site.formRecipient || site.contact.email.value[0];
    if (!recipient) {
      showStatus('Contact email is not configured.', 'error');
      return;
    }

    submitBtn.disabled = true;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    payload._subject = `Agoris Global inquiry from ${payload.name || 'website'}`;
    payload._template = 'table';
    payload._captcha = 'false';

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        showStatus('Thank you! Your inquiry has been sent. We will respond within 24 hours.', 'success');
        form.reset();
      } else {
        showStatus(data.message || data.error || 'Something went wrong. Please try again or email us directly.', 'error');
      }
    } catch {
      showStatus('Network error. Please check your connection and try again.', 'error');
    } finally {
      submitBtn.disabled = false;
    }
  });
}
