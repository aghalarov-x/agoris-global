export function renderCertifications() {
  const certs = [
    { name: 'ISO 22000', src: '/images/certs/iso-22000.png', alt: 'ISO 22000 Food Safety certification seal' },
    { name: 'ISO 9001', src: '/images/certs/iso-9001.jpg', alt: 'ISO 9001 Quality Management certification seal' },
    { name: 'BRC', src: '/images/certs/brc.png', alt: 'BRC Food certificated logo' },
    { name: 'HACCP', src: '/images/certs/haccp.jpg', alt: 'HACCP food safety certified seal' },
    { name: 'Halal', src: '/images/certs/halal.png', alt: 'Halal quality product certified food seal' },
    { name: 'Kosher', src: '/images/certs/kosher.png', alt: 'Certified Kosher seal' },
  ];

  const certCards = certs
    .map(
      (cert) => `
        <figure class="flex flex-col items-center gap-3 min-w-0">
          <div class="w-full aspect-square bg-white flex items-center justify-center rounded-lg border border-outline-variant p-4 md:p-5 group hover:border-primary transition-colors overflow-hidden">
            <img
              src="${cert.src}"
              alt="${cert.alt}"
              class="max-w-full max-h-full w-auto h-auto object-contain"
              width="120"
              height="120"
              loading="lazy"
            />
          </div>
          <figcaption class="font-label-md text-label-md text-on-surface-variant text-center tracking-wide uppercase">
            ${cert.name}
          </figcaption>
        </figure>
      `
    )
    .join('');

  return `
    <section class="py-section-gap bg-background" id="quality">
      <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div class="space-y-8 stagger-in min-w-0">
            <div class="space-y-2">
              <span class="text-primary font-label-lg text-label-lg tracking-widest uppercase">Our Standard</span>
              <h2 class="font-headline-lg text-headline-lg text-deep-forest">Quality &amp; Traceability</h2>
            </div>
            <div class="space-y-6 text-on-surface-variant font-body-lg text-body-lg leading-relaxed">
              <p>
                We believe in absolute transparency. Every batch undergoes a rigorous vetting process starting from origin selection to the final loading. Our quality guarantee includes:
              </p>
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-primary mt-1 shrink-0" aria-hidden="true">check_circle</span>
                  <span class="min-w-0"><strong>Strict Origin Vetting:</strong> We only partner with audited orchards meeting global safety standards.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-primary mt-1 shrink-0" aria-hidden="true">check_circle</span>
                  <span class="min-w-0"><strong>Laboratory Testing:</strong> Compulsory moisture, aflatoxin, and microbiological testing per shipment.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-primary mt-1 shrink-0" aria-hidden="true">check_circle</span>
                  <span class="min-w-0"><strong>Full Traceability:</strong> Every bag is barcoded for batch-level tracking from farm to port.</span>
                </li>
              </ul>
            </div>
            <div class="grid gap-4 sm:gap-6 pt-8 grid-cols-2 sm:grid-cols-3" aria-label="Certifications">
              ${certCards}
            </div>
          </div>
          <div class="stagger-in w-full min-w-0 md:mt-8">
            <img
              alt="Food laboratory professionals examining nut samples for quality control"
              class="rounded-lg shadow-xl w-full h-auto object-cover"
              src="/images/quality-lab.jpg"
              loading="lazy"
              width="640"
              height="480"
            />
          </div>
        </div>
      </div>
    </section>
  `;
}
