import { logisticsSteps, packagingOptions } from '../data/logistics.js';

export function renderLogistics() {
  const steps = logisticsSteps
    .map(
      (step) => `
        <div class="relative z-10 bg-background group">
          <div class="w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <span class="material-symbols-outlined text-3xl" aria-hidden="true">${step.icon}</span>
          </div>
          <div class="text-center space-y-2">
            <h3 class="font-headline-md text-headline-md text-deep-forest">${step.title}</h3>
            <p class="font-body-md text-on-surface-variant">${step.description}</p>
          </div>
        </div>
      `
    )
    .join('');

  const options = packagingOptions
    .map((option, index) => {
      const colSpan = index === packagingOptions.length - 1 ? 'col-span-2' : '';
      return `
        <div class="flex items-center gap-2 ${colSpan}">
          <span class="w-2 h-2 bg-primary rounded-full shrink-0" aria-hidden="true"></span>
          <span class="font-label-lg">${option}</span>
        </div>
      `;
    })
    .join('');

  return `
    <section class="py-section-gap bg-background overflow-hidden" id="process">
      <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="mb-20 text-center">
          <h2 class="font-headline-lg text-headline-lg text-deep-forest">Logistics &amp; Packaging</h2>
          <p class="font-body-lg text-on-surface-variant mt-4">Professionalism in every step of the export journey.</p>
        </div>
        <div class="relative mb-24">
          <div class="hidden md:block absolute top-1/2 left-0 w-full h-px bg-primary/20 -translate-y-1/2 z-0" aria-hidden="true"></div>
          <div class="grid md:grid-cols-4 gap-12">
            ${steps}
          </div>
        </div>
        <div class="bg-surface-container p-8 md:p-12 rounded-2xl">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                alt="Industrial nut packaging and palletized warehouse storage"
                class="rounded-lg shadow-lg w-full"
                src="/images/packaging-warehouse.jpg"
                loading="lazy"
                width="640"
                height="480"
              />
            </div>
            <div class="space-y-6">
              <h3 class="font-headline-lg text-headline-lg text-deep-forest">Packaging Options</h3>
              <p class="font-body-lg text-on-surface-variant">
                We provide a wide range of industrial and consumer-ready packaging solutions tailored to maintain flavor integrity during transit.
              </p>
              <div class="grid grid-cols-2 gap-4">
                ${options}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
