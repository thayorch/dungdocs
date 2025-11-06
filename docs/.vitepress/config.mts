import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dung Docs",
  description: "Assistance for Computer Science CMU Students",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Python', link: '/python' },
      { text: 'Java', link: '/java' }
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Get Started', link: '/get-started'},
          { text: 'Setup Environment', link: '/env' },
          { text: 'Python', link: '/python' },
          { text: 'Java', link: '/java' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/thayorch' }
    ]
  }
})
