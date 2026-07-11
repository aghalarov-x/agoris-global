import { whyAgorisFeatures } from '../data/whyAgoris.js';

export function renderWhyAgoris() {
  const features = whyAgorisFeatures
    .map(
      (feature) => `
        <div class="p-8 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
          <span class="material-symbols-outlined text-4xl mb-4 text-primary-fixed" aria-hidden="true">${feature.icon}</span>
          <h3 class="font-headline-md text-headline-md mb-2">${feature.title}</h3>
          <p class="text-surface-variant/80 font-body-md">${feature.description}</p>
        </div>
      `
    )
    .join('');

  return `
    <section class="py-section-gap bg-deep-forest text-on-primary" aria-labelledby="why-agoris-heading">
      <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="text-center mb-16">
          <h2 id="why-agoris-heading" class="font-headline-lg text-headline-lg mb-4">
            Why Global Partners Choose Agoris
          </h2>
        </div>
        <div class="grid md:grid-cols-4 gap-8">
          ${features}
        </div>
      </div>
    </section>
  `;
}
