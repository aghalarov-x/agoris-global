export function renderAbout() {
  return `
    <section class="py-section-gap bg-background" id="about">
      <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div class="relative group stagger-in">
            <div class="aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
              <img
                alt="Modern commercial freight truck transporting premium nuts on a sun-drenched highway"
                class="w-full h-full object-cover"
                src="/images/about-truck.jpg"
                loading="lazy"
                width="640"
                height="800"
              />
            </div>
            <div class="absolute -bottom-8 -right-8 w-48 h-48 bg-primary-container/20 rounded-full blur-3xl -z-10" aria-hidden="true"></div>
          </div>
          <div class="space-y-8 stagger-in">
            <div class="space-y-2">
              <span class="text-primary font-label-lg text-label-lg tracking-widest uppercase">Who We Are</span>
              <h2 class="font-headline-lg text-headline-lg text-deep-forest">Commitment to Global Excellence</h2>
            </div>
            <div class="space-y-6 text-on-surface-variant font-body-lg text-body-lg leading-relaxed">
              <p>
                Agoris Global is a symbol of excellence in agricultural exports. Our history is built on a love for the land and precision in global logistics. We export not just products, but trust.
              </p>
              <p>
                Collected from the world's most productive orchards, our nuts undergo quality checks in state-of-the-art laboratories. Currently, we deliver thousands of tons of premium products annually to markets in Europe, Asia, and America.
              </p>
            </div>
            <div class="grid grid-cols-2 gap-8 pt-4 border-t border-primary/10">
              <div>
                <div class="text-primary font-bold text-5xl mb-2">10+</div>
                <div class="text-on-surface-variant font-label-md text-label-md">Years of Experience</div>
              </div>
              <div>
                <div class="text-primary font-bold text-5xl mb-2">25+</div>
                <div class="text-on-surface-variant font-label-md text-label-md">Export Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
