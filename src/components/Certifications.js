export function renderCertifications() {
  return `
    <section class="py-section-gap bg-background" id="quality">
      <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div class="space-y-8 stagger-in">
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
                  <span class="material-symbols-outlined text-primary mt-1" aria-hidden="true">check_circle</span>
                  <span><strong>Strict Origin Vetting:</strong> We only partner with audited orchards meeting global safety standards.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-primary mt-1" aria-hidden="true">check_circle</span>
                  <span><strong>Laboratory Testing:</strong> Compulsory moisture, aflatoxin, and microbiological testing per shipment.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-primary mt-1" aria-hidden="true">check_circle</span>
                  <span><strong>Full Traceability:</strong> Every bag is barcoded for batch-level tracking from farm to port.</span>
                </li>
              </ul>
            </div>
            <div class="grid gap-4 pt-8 grid-cols-3" aria-label="Certifications">
              <div class="aspect-square bg-surface-container flex items-center justify-center rounded border border-outline-variant p-2 group hover:border-primary transition-colors">
                <div class="text-center">
                  <div class="text-[10px] font-bold text-on-surface-variant uppercase mb-1">ISO 22000</div>
                  <div class="w-8 h-1 bg-primary/20 mx-auto" aria-hidden="true"></div>
                </div>
              </div>
              <div class="aspect-square bg-surface-container flex items-center justify-center rounded border border-outline-variant p-2 group hover:border-primary transition-colors">
                <div class="text-center">
                  <div class="text-[10px] font-bold text-on-surface-variant uppercase mb-1">BRC</div>
                  <div class="w-8 h-1 bg-primary/20 mx-auto" aria-hidden="true"></div>
                </div>
              </div>
              <div class="aspect-square bg-surface-container flex items-center justify-center rounded border border-outline-variant p-2 group hover:border-primary transition-colors">
                <div class="text-center">
                  <div class="text-[10px] font-bold text-on-surface-variant uppercase mb-1">HALAL</div>
                  <div class="w-8 h-1 bg-primary/20 mx-auto" aria-hidden="true"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="stagger-in">
            <img
              alt="Food laboratory professionals examining nut samples for quality control"
              class="rounded-lg shadow-xl w-full"
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
