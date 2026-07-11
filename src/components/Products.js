import { products } from '../data/products.js';
import { renderProductCard } from './ProductCard.js';

export function renderProducts() {
  const cards = products.map((product) => renderProductCard(product)).join('');

  return `
    <section class="py-section-gap bg-almond-cream" id="products">
      <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 class="font-headline-lg text-headline-lg text-deep-forest">Our Premium Selections</h2>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Directly from the world's best orchards to your warehouse. Each product goes through strict selection and classification stages.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          ${cards}
        </div>
        <div class="mt-16 text-center">
          <a
            class="inline-flex items-center gap-2 px-8 py-3 bg-deep-forest text-on-primary font-label-lg text-label-lg rounded hover:opacity-90 transition-opacity"
            href="#contact"
          >
            <span class="material-symbols-outlined" aria-hidden="true">description</span>
            Download Full Spec Sheet (PDF)
          </a>
        </div>
      </div>
    </section>
  `;
}
