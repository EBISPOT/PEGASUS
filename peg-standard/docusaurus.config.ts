import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Predicted Effect Gene Standard',
  tagline: 'Making gene prioritisation more FAIR',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://ebispot.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/PEGASUS/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EBISPOT', // Usually your GitHub org/user name.
  projectName: 'PEGASUS', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/EBISPOT/PEGASUS/tree/main/peg_standard/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/EBISPOT/PEGASUS/tree/main/peg_standard/blog/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-icon.jpg',
    announcementBar: {
      id: 'peg-dev',
      content: '🚧 PEG docs are under active development — content may change.',
      backgroundColor: '#fffbe6',
      textColor: '#ff0000',
      isCloseable: false,
    },
    navbar: {
      title: 'PEGASUS',
      logo: {
        alt: 'PEGASUS Logo',
        src: 'img/icon_2.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/EBISPOT/PEGASUS',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    docs: {
      sidebar: {
        autoCollapseCategories: false,
        hideable: true,
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Our Work',
              to: '/docs/home',
            },
            {
              label: 'PEG Standard',
              to: '/docs/peg-overview',
            },
            {
              label: 'PEG Evidence Matrix',
              to: '/docs/peg-matrix/peg-matrix-intro',
            },
            {
              label: 'PEG Metadata',
              to: '/docs/peg-metadata/peg-metadata-intro',
            },
            {
              label: 'PEG List',
              to: '/docs/peg-list',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'WorkShops',
              href: '/docs/community/workshop-2025',
            },
            {
              label: 'Publications',
              href: '/docs/community/publications',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/EBISPOT/PEGASUS',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
