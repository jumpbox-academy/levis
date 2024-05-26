import { defineConfig, type DefaultTheme } from 'vitepress'

const pkg = require('../package.json')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Levis",
  outDir: '../docs',
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "../assets/favicon.ico"}],

  ],
  description: "Levis is a binary tool designed to simplify the deployment process for users who don’t need to focus on the complexities of Kubernetes objects.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'assets/logo.png',
    nav: [
      { text: 'Home', link: '/', },
      { text: 'Examples', link: 'docs/levis-examples', activeMatch: '/docs' },
      {
        text: pkg.version,
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/jumpbox-academy/levis/blob/main/CHANGELOG.md'
          },
          {
            text: 'Contributing',
            link: 'https://github.com/jumpbox-academy/levis/blob/main/.github/CONTRIBUTING.md'
          }
        ]
      }
    ],
    sidebar: {
      '/docs/': { base: '/docs/', items: sidebarDocs()},
      '/contrib/': { base: '/contrib/', items: sidebarContribution()},
      '/arch/': { base: '/arch/', items: sidebarArchiving()}
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jumpbox-academy/levis' }
    ],
    footer: {
      message: 'Released under the <a href="https://github.com/jumpbox-academy/levis/blob/main/LICENSE">MPLv2 </a>License.',
      copyright: 'Copyright © 2024 Jumpbox Co., Ltd.'
    }
  }
})


function sidebarDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Getting Started', link: 'getting-started',
      collapsed: false,
      items: [
        { text: 'What is VitePress?', link: 'what-is-vitepress' },
        { text: 'Routing', link: 'routing' },
        { text: 'Deploy', link: 'deploy' }
      ],
    },
    {
      text: 'Examples', link: 'levis-examples',
      collapsed: false,
      items: [
        { text: 'Using a Custom Theme', link: 'custom-theme' },
      ]
    },
    { text: 'Contribution', base: '/contrib/', link: 'index' }
  ]
}
function sidebarContribution(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Contribution', link: 'index',
      items: [
        {
          text: 'Levis',
          collapsed: false,
          items: [
            { text: 'Getting Started', link: '/levis/getting-started' },
            { text: 'Add New Command', link: '/levis/adding-command' }
          ]
        },
        {
          text: 'Levis Website',
          collapsed: true,
          items: [
            { text: 'Getting Started', link: '/web/getting-started' },
            { text: 'What is VitePress?', link: '/web/what-is-vitepress' },
          ]
        }
      ]
    },
    {
      text: 'Architecture Decision Records (ADR)',
      collapsed: true,
      items: [
        { text: 'Overview', link: 'adr/index' },
        { text: 'ADR001: Architecture Decision Record (ADR) log', link: 'adr/adr001-add-adr-log' },
        { text: 'ADR002: xxx', link: 'mdfile-name' },
      ]
    },
    { text: 'Archived Documents', base: '/arch/', link: 'index' }
  ]
}

function sidebarArchiving(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Archived Documents', link: 'index',
      items: [
        { text: 'Levis Instruction', link: 'levis-instruction' },
        { text: 'Levis Web Instruction', link: 'levis-web-instruction' }
      ]
    },
    { text: 'Contribution', base: '/contrib/', link: 'index' }
  ]
}
