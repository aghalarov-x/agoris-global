import { site } from '../data/site.js';

export function renderHeader() {
  const navLinks = site.navLinks
    .map(
      (link) => `
        <a
          class="px-4 py-2 text-on-surface-variant dark:text-surface-variant font-label-lg text-label-lg hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200"
          href="${link.href}"
        >${link.label}</a>
      `
    )
    .join('');

  const mobileLinks = site.navLinks
    .map(
      (link) => `
        <a
          class="block px-4 py-3 text-on-surface-variant font-label-lg text-label-lg hover:text-primary hover:bg-primary/5 rounded transition-colors"
          href="${link.href}"
        >${link.label}</a>
      `
    )
    .join('');

  return `
    <header class="fixed top-0 w-full z-50 bg-surface/90 dark:bg-on-background/90 backdrop-blur-md border-b border-primary/10 shadow-sm transition-all duration-300 h-20">
      <nav
        class="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-20"
        aria-label="Main navigation"
      >
        <a href="/" class="block h-11 md:h-12" aria-label="${site.name} home">
          <img
            src="/images/logo.png"
            alt="${site.name} logo"
            class="h-full w-auto max-w-[220px] md:max-w-[260px] object-contain object-left"
            width="260"
            height="50"
          />
        </a>

        <div class="hidden md:flex items-center gap-base">
          ${navLinks}
          <a
            class="ml-4 px-6 py-2.5 bg-primary text-on-primary font-label-lg text-label-lg rounded hover:opacity-90 transition-opacity"
            href="#contact"
          >Get Quote</a>
        </div>

        <button
          id="mobile-menu-toggle"
          type="button"
          class="md:hidden text-primary p-2 rounded hover:bg-primary/10 transition-colors"
          aria-expanded="false"
          aria-controls="mobile-menu"
          aria-label="Open navigation menu"
        >
          <span class="material-symbols-outlined" aria-hidden="true">menu</span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        class="hidden md:hidden flex-col bg-surface border-t border-primary/10 px-margin-mobile py-4 gap-1"
        role="navigation"
        aria-label="Mobile navigation"
      >
        ${mobileLinks}
        <a
          class="mt-2 px-4 py-3 bg-primary text-on-primary font-label-lg text-label-lg rounded text-center hover:opacity-90 transition-opacity"
          href="#contact"
        >Get Quote</a>
      </div>
    </header>
  `;
}
