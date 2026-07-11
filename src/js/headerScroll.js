export function initHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;

  const nav = header.querySelector('nav');

  const onScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('py-2', 'bg-surface/95', 'shadow-md');
      header.classList.remove('h-20');
      if (nav) nav.classList.remove('h-20');
    } else {
      header.classList.remove('py-2', 'bg-surface/95', 'shadow-md');
      header.classList.add('h-20');
      if (nav) nav.classList.add('h-20');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
