import './styles/main.css';

import { renderHeader } from './components/Header.js';
import { renderHero } from './components/Hero.js';
import { renderAbout } from './components/About.js';
import { renderProducts } from './components/Products.js';
import { renderCertifications } from './components/Certifications.js';
import { renderWhyAgoris } from './components/WhyAgoris.js';
import { renderLogistics } from './components/Logistics.js';
import { renderContact, initContactForm } from './components/Contact.js';
import { renderFooter } from './components/Footer.js';

import { initStaggerObserver } from './js/staggerObserver.js';
import { initHeaderScroll } from './js/headerScroll.js';
import { initMobileMenu } from './js/mobileMenu.js';

const app = document.getElementById('app');

app.innerHTML = `
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
`;

initMobileMenu();
initHeaderScroll();
initStaggerObserver();
initContactForm();
