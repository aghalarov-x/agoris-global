/**
 * Generates offline-openable HTML (code.html + preview.html) from the Vite source components.
 * Run after site changes: npm run sync:preview
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { readFileSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const src = join(root, 'src');

async function load(rel) {
  return import(pathToFileURL(join(src, rel)).href);
}

function toOfflinePaths(html) {
  return html
    .replace(/(src|href)="\/(images\/[^"]+)"/g, '$1="./public/$2"')
    .replace(/(src|href)="\/(favicon[^"]*)"/g, '$1="./public/$2"')
    .replace(/url\(['"]?\/(images\/[^'")]+)['"]?\)/g, "url('./public/$1')")
    .replace(/href="\/"/g, 'href="#"');
}

function stripExports(source) {
  return source
    .replace(/^export\s+function\s+/gm, 'function ')
    .replace(/^export\s+const\s+/gm, 'const ')
    .replace(/^export\s+\{[^}]+\};?\s*$/gm, '');
}

const { renderHeader } = await load('components/Header.js');
const { renderHero } = await load('components/Hero.js');
const { renderAbout } = await load('components/About.js');
const { renderProducts } = await load('components/Products.js');
const { renderCertifications } = await load('components/Certifications.js');
const { renderWhyAgoris } = await load('components/WhyAgoris.js');
const { renderLogistics } = await load('components/Logistics.js');
const { renderContact } = await load('components/Contact.js');
const { renderFooter } = await load('components/Footer.js');
const { site } = await load('data/site.js');

const bodyHtml = toOfflinePaths(`
  ${renderHeader()}
  <main>
    ${renderHero()}
    ${renderAbout()}
    ${renderProducts()}
    ${renderCertifications()}
    ${renderWhyAgoris()}
    ${renderLogistics()}
    ${renderContact()}
  </main>
  ${renderFooter()}
`);

const mobileMenuSrc = stripExports(readFileSync(join(src, 'js/mobileMenu.js'), 'utf8'));
const headerScrollSrc = stripExports(readFileSync(join(src, 'js/headerScroll.js'), 'utf8'));
const staggerSrc = stripExports(readFileSync(join(src, 'js/staggerObserver.js'), 'utf8'));

const html = `<!DOCTYPE html>
<html class="scroll-smooth" lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Agoris Global | Premium Nut Exports</title>
  <meta name="description" content="Agoris Global exports premium hazelnuts, almonds, cashews, raisins, and macadamia to global markets." />
  <link rel="icon" href="./public/favicon.ico" sizes="any" />
  <link rel="icon" type="image/png" sizes="32x32" href="./public/favicon-32x32.png" />
  <link rel="apple-touch-icon" href="./public/apple-touch-icon.png" />
  <script src="https://cdn.tailwindcss.com?plugins=forms"></script>
  <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&amp;family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&amp;display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&amp;display=swap" rel="stylesheet" />
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            'on-background': '#191c1b',
            'on-error-container': '#93000a',
            'on-primary-container': '#92dcc0',
            primary: '#004a38',
            'tertiary-fixed-dim': '#dec1ac',
            'outline-variant': '#bec9c3',
            'primary-fixed-dim': '#8bd5b9',
            'on-surface-variant': '#3f4944',
            'surface-container-highest': '#e2e3e1',
            'hazel-dark': '#5D3A1A',
            error: '#ba1a1a',
            'primary-fixed': '#a7f2d5',
            'inverse-surface': '#2e3130',
            'surface-tint': '#1c6a54',
            'on-primary-fixed': '#002117',
            'on-surface': '#191c1b',
            tertiary: '#503c2c',
            'on-error': '#ffffff',
            'secondary-container': '#feb294',
            'deep-forest': '#042D33',
            'on-primary-fixed-variant': '#00513e',
            'inverse-primary': '#8bd5b9',
            outline: '#6f7974',
            'surface-bright': '#f9faf8',
            'surface-variant': '#e2e3e1',
            'tertiary-fixed': '#fbddc7',
            secondary: '#894f37',
            'on-secondary': '#ffffff',
            'surface-container-high': '#e7e8e6',
            'success-green': '#2E7D32',
            'secondary-fixed': '#ffdbce',
            'surface-dim': '#d9dad8',
            'on-tertiary': '#ffffff',
            background: '#f9faf8',
            'on-secondary-container': '#79422b',
            'surface-container-low': '#f3f4f2',
            'inverse-on-surface': '#f0f1ef',
            'on-primary': '#ffffff',
            surface: '#f9faf8',
            'surface-container': '#edeeec',
            'on-secondary-fixed-variant': '#6d3822',
            'surface-container-lowest': '#ffffff',
            'on-tertiary-fixed': '#28180b',
            'secondary-fixed-dim': '#ffb598',
            'primary-container': '#10634d',
            'almond-cream': '#FAF9F6',
            'error-container': '#ffdad6',
            'on-tertiary-fixed-variant': '#574333',
            'tertiary-container': '#695342',
            'on-tertiary-container': '#e5c8b3',
            'on-secondary-fixed': '#360f00',
          },
          borderRadius: {
            DEFAULT: '0.125rem',
            lg: '0.25rem',
            xl: '0.5rem',
            full: '0.75rem',
          },
          spacing: {
            gutter: '24px',
            base: '8px',
            'section-gap': '120px',
            'container-max': '1280px',
            'margin-desktop': '64px',
            'margin-mobile': '20px',
          },
          maxWidth: {
            'container-max': '1280px',
          },
          fontFamily: {
            'label-md': ['Hanken Grotesk', 'sans-serif'],
            'body-md': ['Hanken Grotesk', 'sans-serif'],
            'body-lg': ['Hanken Grotesk', 'sans-serif'],
            'headline-lg': ['"Source Serif 4"', 'serif'],
            'display-lg': ['"Source Serif 4"', 'serif'],
            'display-lg-mobile': ['"Source Serif 4"', 'serif'],
            'label-lg': ['Hanken Grotesk', 'sans-serif'],
            'headline-md': ['"Source Serif 4"', 'serif'],
          },
          fontSize: {
            'label-md': ['12px', { lineHeight: '16px', fontWeight: '500' }],
            'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
            'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
            'headline-lg': ['32px', { lineHeight: '40px', fontWeight: '600' }],
            'display-lg': ['56px', { lineHeight: '64px', letterSpacing: '-0.02em', fontWeight: '700' }],
            'display-lg-mobile': ['40px', { lineHeight: '48px', letterSpacing: '-0.02em', fontWeight: '700' }],
            'label-lg': ['14px', { lineHeight: '20px', letterSpacing: '0.05em', fontWeight: '600' }],
            'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
          },
        },
      },
    };
  </script>
  <style>
    .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      display: inline-block;
      vertical-align: middle;
    }
    .animate-subtle-zoom { animation: zoom 20s infinite alternate linear; }
    @keyframes zoom {
      from { transform: scale(1); }
      to { transform: scale(1.1); }
    }
    .gradient-overlay {
      background: linear-gradient(to right, rgba(4, 45, 51, 0.8), rgba(4, 45, 51, 0.4));
    }
    .stagger-in {
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .stagger-in.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
  </style>
</head>
<body class="bg-background text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
${bodyHtml}
  <script>
    ${mobileMenuSrc}
    ${headerScrollSrc}
    ${staggerSrc}

    (function initContactFormOffline() {
      const form = document.getElementById('contact-form');
      const status = document.getElementById('form-status');
      const submitBtn = document.getElementById('contact-submit');
      if (!form || !status || !submitBtn) return;

      const recipient = ${JSON.stringify(site.formRecipient)};

      const showStatus = (message, type) => {
        status.textContent = message;
        status.classList.remove('hidden', 'bg-error-container', 'text-on-error-container', 'bg-primary-fixed', 'text-on-primary-fixed');
        if (type === 'error') {
          status.classList.add('bg-error-container', 'text-on-error-container');
        } else {
          status.classList.add('bg-primary-fixed', 'text-on-primary-fixed');
        }
      };

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        status.classList.add('hidden');

        const name = form.elements.name;
        const email = form.elements.email;
        const message = form.elements.message;

        if (!name.value.trim() || name.value.trim().length < 2) {
          showStatus('Please enter your name (at least 2 characters).', 'error');
          name.focus();
          return;
        }
        if (!email.validity.valid) {
          showStatus('Please enter a valid email address.', 'error');
          email.focus();
          return;
        }
        if (!message.value.trim() || message.value.trim().length < 10) {
          showStatus('Please enter a message (at least 10 characters).', 'error');
          message.focus();
          return;
        }

        submitBtn.disabled = true;
        const formData = new FormData(form);
        const payload = Object.fromEntries(formData.entries());
        payload._subject = 'Agoris Global inquiry from ' + (payload.name || 'website');
        payload._template = 'table';
        payload._captcha = 'false';

        try {
          const response = await fetch('https://formsubmit.co/ajax/' + encodeURIComponent(recipient), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify(payload),
          });
          if (response.ok) {
            showStatus('Thank you! Your inquiry has been sent. We will respond within 24 hours.', 'success');
            form.reset();
          } else {
            showStatus('Something went wrong. Please try again or email us directly.', 'error');
          }
        } catch {
          showStatus('Network error. Please check your connection and try again.', 'error');
        } finally {
          submitBtn.disabled = false;
        }
      });
    })();

    initMobileMenu();
    initHeaderScroll();
    initStaggerObserver();
  </script>
</body>
</html>
`;

const codePath = join(root, 'code.html');
const previewPath = join(root, 'preview.html');
const desktopPath = join('C:', 'Users', 'miris', 'OneDrive', 'Desktop', 'code.html');

writeFileSync(codePath, html, 'utf8');
writeFileSync(previewPath, html, 'utf8');

 // Desktop copy must point into the project folder for images/favicon
const desktopHtml = html.replace(/\.\/public\//g, './Agoris website/public/');

try {
  writeFileSync(desktopPath, desktopHtml, 'utf8');
  console.log('Updated:');
  console.log(' -', codePath);
  console.log(' -', previewPath);
  console.log(' -', desktopPath, '(paths -> ./Agoris website/public/)');
} catch (error) {
  console.log('Updated:');
  console.log(' -', codePath);
  console.log(' -', previewPath);
  console.warn('Desktop copy skipped:', error.message);
}
