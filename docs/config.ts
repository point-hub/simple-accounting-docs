import { type DefaultTheme } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid({
  lang: 'en-US',
  title: 'Simple Accounting',
  description: 'Documentation of Simple Accounting',
  cleanUrls: true,
  srcDir: './src',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' }],
    ['link', { rel: 'stylesheet', href: 'https://assets.pointhub.net/assets/fontawesome-6/css/all.min.css' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.png',
    nav: nav(),
    sidebar: {
      '/': sidebarDocs(),
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/point-hub/docs-starter' }],
    search: {
      provider: 'local',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 Pointhub',
    },
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Home', link: '/' },
  ]
}

function sidebarDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Documentation',
      items: [
        { text: 'Introduction', link: '/' },
        { text: 'Sitemap', link: '/sitemap' },
      ],
    },
    {
      text: 'Features',
      items: [
        { 
          text: 'Auth', 
          collapsed: true,
          items: [
            { text: 'About', link: '/auth/about/' },
            { text: 'Schema', link: '/auth/schema/' },
            { text: 'Signup', link: '/auth/signup/' },
            { text: 'Verify Email', link: '/auth/verify-email/' },
            { text: 'Signin', link: '/auth/signin/' },
            { text: 'Signout', link: '/auth/signout/' },
            { text: 'Forgot Password', link: '/auth/forgot-password/' },
            { text: 'Reset Password', link: '/auth/reset-password/' },
          ],
        },
        { 
          text: 'My Account', 
          collapsed: true,
          items: [
            { text: 'About', link: '/my-account/about/' },
            { text: 'Schema', link: '/my-account/schema/' },
            { text: 'Update Username', link: '/my-account/update-username/' },
            { text: 'Update Email', link: '/my-account/update-email/' },
            { text: 'Update Password', link: '/my-account/update-password/' },
          ],
        },
        { 
          text: 'Chart of Accounts', 
          collapsed: true,
          items: [
            { text: 'About', link: '/chart-of-accounts/about/' },
            { text: 'Schema', link: '/chart-of-accounts/schema/' },
            { text: 'Import', link: '/chart-of-accounts/import/' },
            { text: 'List', link: '/chart-of-accounts/list/' },
          ],
        },
        { 
          text: 'Journals', 
          collapsed: true,
          items: [
            { text: 'About', link: '/journals/about/' },
            { text: 'Schema', link: '/journals/schema/' },
            { text: 'Import', link: '/journals/import/' },
            { text: 'List', link: '/journals/list/' },
          ],
        },
        { 
          text: 'Accounting Reports', 
          collapsed: true,
          items: [
            { text: 'About', link: '/accounting-reports/about/' },
            { text: 'General Ledger', link: '/accounting-reports/general-ledger/' },
            { text: 'Subledger', link: '/accounting-reports/subledger/' },
            { text: 'Trial Balance', link: '/accounting-reports/trial-balance/' },
            { text: 'Profit & Loss', link: '/accounting-reports/profit-and-loss/' },
            { text: 'Balance Sheet', link: '/accounting-reports/balance-sheet/' },
          ],
        },
      ],
    },
    {
      text: 'Resources',
      items: [
        { text: 'Architecture Decision Records', link: '/architecture-decision-records/' },
        { text: 'Development Roadmap', link: '/development-roadmap/' },
        { text: 'Developer Resources', link: '/developer-resources/' },
      ],
    },
  ]
}
