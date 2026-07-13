export const site = {
  name: 'Agoris Global',
  tagline: 'Premium Nut Exports. From orchards to global dining tables.',
  url: 'https://agorisglobal.com',
  formspreeEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT || '',
  navLinks: [
    { href: '#about', label: 'About Us' },
    { href: '#products', label: 'Products' },
    { href: '#process', label: 'Logistics' },
    { href: '#contact', label: 'Contact' },
  ],
  contact: {
    office: {
      label: 'Office',
      value: '115 Heydar Aliyev Ave, Baku, Azerbaijan',
    },
    phone: {
      label: 'Phone',
      value: ['+994 77 573 26 68'],
    },
    email: {
      label: 'Email',
      value: ['ag@agorisglobal.com'],
    },
  },
  footerLinks: [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
    { href: '#quality', label: 'Certifications' },
    { href: '#process', label: 'Global Logistics' },
  ],
};
