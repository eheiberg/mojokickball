import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'About', href: getPermalink('/about') },
    { text: 'How to Play', href: getPermalink('/tutorial') },
    { text: 'FAQ', href: getPermalink('/faq') },
    { text: 'Events', href: getPermalink('/events') },
    { text: 'Tourney', href: getPermalink('/the-great-mojo-tourney') },
    { text: 'Donate', href: getPermalink('/donate') },
  ],
  actions: [
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Pages',
      links: [
        { text: 'Home', href: '/' },
        { text: 'About', href: '/about' },
        { text: 'How to Play', href: '/tutorial' },
        { text: 'FAQ', href: '/faq' },
        { text: 'Events', href: '/events' },
        { text: 'Tournament', href: '/the-great-mojo-tourney' },
        { text: 'Donate', href: '/donate' },
        { text: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { text: 'Facebook Group', href: 'https://www.facebook.com/groups/mojokickball', target: '_blank' },
        { text: 'YouTube Channel', href: 'https://www.youtube.com/@chicocarlucci3885', target: '_blank' },
        { text: 'Register (EventBrite)', href: 'https://www.eventbrite.com/e/mojo-kickball-tickets', target: '_blank' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/groups/mojokickball' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@chicocarlucci3885' },
  ],
  footNote: `
    <span>MojoKickball &copy; ${new Date().getFullYear()} · Kenwood Park, Minneapolis, MN</span>
  `,
};
