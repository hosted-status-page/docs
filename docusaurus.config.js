module.exports = {
  title: 'Hosted Status Page Help & Support',
  tagline: 'The tagline of my site',
  url: 'https://help.hostedstatus.page',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hosted-status-page', // Usually your GitHub org/user name.
  projectName: 'help', // Usually your repo name.
  scripts: [{src: 'https://traffic.hostedstatus.page/js/index.js', async: true, defer: true, 'data-domain': 'help.hostedstatus.page'}],
  themeConfig: {
    navbar: {
      title: 'HSP Help',
      logo: {
        alt: 'HSP',
        src: 'img/hsplogo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'https://blog.hostedstatus.page', label: 'Our Blog', position: 'left'},
        {
          href: 'https://hostedstatus.page',
          label: 'Status Pages',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: 'docs/',
            },
            {
              label: 'Our Blog',
              to: 'blog/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'HSP on Indie Hackers',
              href: 'https://indiehackers.com/product/hosted-status-page',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/getStatusPage',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/hosted-status-page',
            },
          ],
        },
      ],
      copyright: `Copyright © 2020-${new Date().getFullYear()} Hosted Status Page.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/hosted-status-page/help/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/hosted-status-page/help/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
