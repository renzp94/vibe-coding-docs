import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vibe Coding',
  description: 'Vibe Coding 教学网站 - 掌握 AI 辅助编程',
  lang: 'zh-CN',

  srcDir: '.',
  outDir: '.vitepress/dist',

  head: [
    ['meta', { name: 'author', content: 'Vibe Coding Team' }],
    ['meta', { name: 'keywords', content: 'Vibe Coding, AI编程, AI辅助编程, Claude, ChatGPT' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', { src: '/theme/auth-inject.js', defer: true }]
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '示例', link: '/examples/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '什么是 Vibe Coding', link: '/guide/what-is-vibe-coding' },
            { text: '快速开始', link: '/guide/getting-started' }
          ]
        },
        {
          text: '基础',
          items: [
            { text: '环境准备', link: '/guide/setup' },
            { text: '工具选择', link: '/guide/tools' }
          ]
        }
      ],
      '/examples/': [
        {
          text: '示例',
          items: [
            { text: '基础示例', link: '/examples/basic' },
            { text: '进阶示例', link: '/examples/advanced' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/renzp94/vibe-coding-docs' }
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2024 Vibe Coding'
    },

    outline: {
      label: '页面导航'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题'
  },

  markdown: {
    lineNumbers: true,
    config: (md) => {
      // 自定义 markdown-it 配置
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        css: {
          charset: false
        }
      }
    }
  }
})
