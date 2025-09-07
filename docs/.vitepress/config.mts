import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Kelivo',
  description: 'A LLM Chat Client',
  cleanUrls: true,
  lastUpdated: true,
  base: '/kelivo/',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/icon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/icon.png' }],
    ['meta', { name: 'theme-color', content: '#6C63FF' }]
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      link: '/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Docs', link: '/docs/getting-started/quick-start' },
          { text: 'Download', link: '/download' },
          { text: 'Privacy Policy', link: '/privacy-policy' }
        ],
        sidebar: {
          '/docs/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Quick Start', link: '/docs/getting-started/quick-start' },
                { text: 'FAQ', link: '/docs/getting-started/faq' },
                { text: 'Terminology', link: '/docs/getting-started/terminology' }
              ]
            },
            {
              text: 'Assistant',
              items: [
                { text: 'Basics', link: '/docs/assistant/basics' },
                { text: 'Prompts', link: '/docs/assistant/prompts' },
                { text: 'Memory', link: '/docs/assistant/memory' },
                { text: 'Custom Requests', link: '/docs/assistant/custom-requests' },
                { text: 'MCP', link: '/docs/assistant/mcp' }
              ]
            },
            {
              text: 'AI Providers',
              items: [
                { text: 'OpenAI', link: '/docs/providers/openai' },
                { text: 'Anthropic', link: '/docs/providers/anthropic' },
                { text: 'Google', link: '/docs/providers/google' }
              ]
            }
          ]
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/Chevey339/kelivo' }
        ]
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '主页', link: '/zh/' },
          { text: '文档', link: '/zh/docs/getting-started/quick-start' },
          { text: '下载', link: '/zh/download' },
          { text: '隐私政策', link: '/zh/privacy-policy' }
        ],
        sidebar: {
          '/zh/docs/': [
            {
              text: '入门',
              items: [
                { text: '快速开始', link: '/zh/docs/getting-started/quick-start' },
                { text: '常见问题', link: '/zh/docs/getting-started/faq' },
                { text: '技术名词解释', link: '/zh/docs/getting-started/terminology' }
              ]
            },
            {
              text: '助手',
              items: [
                { text: '基础设置', link: '/zh/docs/assistant/basics' },
                { text: '提示词', link: '/zh/docs/assistant/prompts' },
                { text: '记忆', link: '/zh/docs/assistant/memory' },
                { text: '自定义请求', link: '/zh/docs/assistant/custom-requests' },
                { text: 'MCP', link: '/zh/docs/assistant/mcp' }
              ]
            },
            {
              text: 'AI 提供商',
              items: [
                { text: 'OpenAI', link: '/zh/docs/providers/openai' },
                { text: 'Anthropic', link: '/zh/docs/providers/anthropic' },
                { text: 'Google', link: '/zh/docs/providers/google' }
              ]
            }
          ]
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/Chevey339/kelivo' }
        ]
      }
    }
  }
})
