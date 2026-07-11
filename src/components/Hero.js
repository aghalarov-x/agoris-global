export function renderHero() {
  return `
    <section class="relative h-screen min-h-[600px] flex items-center overflow-hidden" aria-label="Hero">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-deep-forest/20 z-10 gradient-overlay"></div>
        <div
          class="w-full h-full animate-subtle-zoom bg-cover bg-center"
          style="background-image: url('/images/hero-nuts.jpg')"
          role="img"
          aria-label="Assorted premium nuts including hazelnuts and cashews"
        ></div>
      </div>
      <div class="relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
        <div class="max-w-2xl text-white space-y-6">
          <h1 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg leading-tight">
            Premium Nut Exports to the Global Market
          </h1>
          <p class="font-body-lg text-body-lg text-almond-cream/90 leading-relaxed">
            Distributing the highest quality hazelnuts, almonds, and cashews to global markets. World-class supply with our commitment to quality and reliability.
          </p>
          <div class="pt-8">
            <a
              class="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary font-label-lg text-label-lg rounded hover:bg-primary-container transition-all group shadow-xl"
              href="#products"
            >
              Explore Our Products
              <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform" aria-hidden="true">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
