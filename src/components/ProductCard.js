export function renderProductCard(product) {
  const badge = product.badge
    ? `<div class="absolute top-4 right-4 z-10 bg-secondary text-on-secondary px-3 py-1 rounded font-label-md text-label-md">${product.badge}</div>`
    : '';

  const imageClasses = [
    'aspect-square overflow-hidden',
    product.grayscale ? 'grayscale group-hover:grayscale-0 transition-all duration-700' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const buttonClasses = product.disabled
    ? 'w-full py-3 border border-outline text-outline font-label-lg text-label-lg rounded cursor-not-allowed'
    : 'w-full py-3 border border-primary text-primary font-label-lg text-label-lg rounded hover:bg-primary hover:text-white transition-colors duration-300';

  const buttonAttrs = product.disabled ? 'disabled aria-disabled="true"' : 'type="button"';

  return `
    <article class="bg-surface-container-lowest rounded-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-primary/5 relative">
      ${badge}
      <div class="${imageClasses}">
        <img
          alt="${product.imageAlt}"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          src="${product.image}"
          loading="lazy"
          width="400"
          height="400"
        />
      </div>
      <div class="p-8 space-y-4">
        <h3 class="font-headline-md text-headline-md text-deep-forest">${product.title}</h3>
        <p class="font-body-md text-body-md text-on-surface-variant">${product.description}</p>
        <button class="${buttonClasses}" ${buttonAttrs}>
          ${product.disabled ? product.badge : 'Inquire'}
        </button>
      </div>
    </article>
  `;
}
