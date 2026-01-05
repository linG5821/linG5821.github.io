import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { defineUserConfig } from 'vuepress'
import { full as emoji } from 'markdown-it-emoji'
import markdownit from 'markdown-it'

const md = markdownit().use(emoji/* , options */);

export default defineUserConfig({
  bundler: viteBundler(),
  title: 'Yolo Cloud',
  description: 'Yolo Cloud 记录了我技术成长中学到的各种知识,遇到的各种问题',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  theme: defaultTheme({
    lastUpdated: true,
    activeHeaderLinks: false,
    nav: [
      { text: '主页', link: '/' },
      { text: 'GitHub', link: 'https://github.com/linG5821' },
    ],
    sidebar: [
      {
        text: '机器环境',
        link: '/machine/',
        sidebarDepth: 1,
        children: [
          { text: 'Windows', link: '/machine/windows/' },
          { text: 'Windows配置清单', link: 'machine/windows/envlist' },
          { text: 'Windows终端打造', link: 'machine/windows/terminal' },
          { text: 'WSL', link: 'machine/windows/wsl' },
          { text: 'Mac', link: '/machine/mac/' },
          { text: 'Linux', link: '/machine/linux/' },
        ]
      },
      {
        text: '网络编程',
        link: '/network/',
        sidebarDepth: 1
      },
      {
        text: '数据库',
        link: '/database/',
        sidebarDepth: 2,
        children: [
          { text: 'Redis', link: '/database/redis' },
          { text: 'MySQL', link: '/database/mysql' },
          { text: 'MongoDB', link: '/database/mongodb' },
        ]
      },
      {
        text: '中间件',
        link: '/middleware/',
        sidebarDepth: 2,
        children: [
          { text: 'Nginx', link: '/middleware/nginx' },
          { text: 'RocketMQ', link: '/middleware/rocketmq' }
        ]
      },
      {
        text: '容器技术',
        link: '/container/',
        sidebarDepth: 1,
        children: [
          { text: 'Docker', link: '/container/docker' },
          { text: 'Kubernetes', link: '/container/kubernetes' },
        ]
      },
      {
        text: '常用工具',
        link: '/tool/',
        sidebarDepth: 1,
        children: [
          { text: 'Git', link: '/tool/git' }
        ]
      },
      {
        text: '安全技术',
        link: '/security/',
        sidebarDepth: 1,
        children: [
          { text: 'SSL', link: '/security/ssl' }
        ]
      },
      {
        text: 'Java',
        link: '/java/',
        sidebarDepth: 2,
        children: [
          { text: 'Java环境', link: '/java/javaenv' },
          { text: 'JavaSE', link: '/java/javase' },
          { text: 'Java虚拟机', link: '/java/jvm' },
          { text: 'Java响应式编程', link: '/java/reactive' },
          { text: 'Maven', link: '/java/maven' },
          { text: 'Spring', link: '/java/spring' },
          { text: 'Boot&Cloud', link: '/java/boot&cloud' },
          { text: 'Netty', link: '/java/netty' },
        ]
      },
      {
        text: 'Go',
        link: '/go/',
        sidebarDepth: 1
      },
      {
        text: 'PHP',
        link: '/php/',
        sidebarDepth: 1
      },
      {
        text: '人工智能',
        link: '/ai/',
        sidebarDepth: 2,
        children: [
          { text: 'Stable Diffusion', link: '/ai/stable-diffusion' },
        ]
      },
    ]
  }),
  plugins: [
    mdEnhancePlugin({})
  ]
})