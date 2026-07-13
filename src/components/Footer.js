import { site } from '../data/site.js';

export function renderFooter() {
  const footerLinks = site.footerLinks
    .map((link) => {
      if (!link.href) {
        return `
          <span class="text-surface-variant/80 font-label-md text-label-md cursor-default select-none">
            ${link.label}
          </span>
        `;
      }
      return `
        <a class="text-surface-variant/80 font-label-md text-label-md hover:text-almond-cream transition-colors" href="${link.href}">
          ${link.label}
        </a>
      `;
    })
    .join('');

  return `
    <footer class="w-full bg-deep-forest dark:bg-on-background border-t border-white/10">
      <div class="flex flex-col md:flex-row justify-between items-center gap-base max-w-container-max mx-auto py-12 px-margin-mobile md:px-margin-desktop">
        <div class="space-y-4">
          <div class="h-14 mb-4">
            <img
              src="/images/logo-footer.png"
              alt="${site.name} logo"
              class="h-full w-auto max-w-[280px] object-contain object-left"
              width="280"
              height="56"
            />
          </div>
          <p class="text-surface-variant/80 font-body-md text-body-md max-w-xs">${site.tagline}</p>
        </div>
        <nav class="flex flex-wrap justify-center gap-x-8 gap-y-4" aria-label="Footer navigation">
          ${footerLinks}
        </nav>
        <div class="text-surface-variant/80 font-label-md text-label-md text-center md:text-right">
          &copy; ${new Date().getFullYear()} ${site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  `;
}
