module.exports = {
  title: 'Yolo Cloud',
  description: 'Yolo Cloud 记录了我技术成长中学到的各种知识,遇到的各种问题',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    lastUpdated: '最后更新时间',
    activeHeaderLinks: false,
    nav: [
      { text: '主页', link: '/' },
      { text: 'GitHub', link: 'https://github.com/linG5821' },
    ],
    sidebar: [
      {
        title: '机器环境',
        path: '/machine/',
        sidebarDepth: 1,
        children: [
          { title: 'Windows', path: '/machine/windows/' },
          { title: 'Mac', path: '/machine/mac/' },
          { title: 'Linux', path: '/machine/linux/' },
          { title: 'Windows配置清单', path: 'machine/windows/envlist' },
          { title: 'WSL', path: 'machine/windows/wsl' }
        ]
      },
      {
        title: '网络编程',
        path: '/network/',
        sidebarDepth: 1
      },
      {
        title: '数据库',
        path: '/database/',
        sidebarDepth: 2,
        children: [
          { title: 'Redis', path: '/database/redis' },
          { title: 'MySQL', path: '/database/mysql' },
          { title: 'MongoDB', path: '/database/mongodb' },
        ]
      },
      {
        title: '中间件',
        path: '/middleware/',
        sidebarDepth: 2,
        children: [
          { title: 'Nginx', path: '/middleware/nginx' },
          { title: 'RocketMQ', path: '/middleware/rocketmq' }
        ]
      },
      {
        title: '容器技术',
        path: '/container/',
        sidebarDepth: 1,
        children: [
          { title: 'Docker', path: '/container/docker' },
          { title: 'Kubernetes', path: '/container/kubernetes' },
        ]
      },
      {
        title: '常用工具',
        path: '/tool/',
        sidebarDepth: 1,
        children: [
          { title: 'Git', path: '/tool/git' }
        ]
      },
      {
        title: '安全技术',
        path: '/security/',
        sidebarDepth: 1,
        children: [
          { title: 'SSL', path: '/security/ssl' }
        ]
      },
      {
        title: 'Java',
        path: '/java/',
        sidebarDepth: 2,
        children: [
          { title: 'JavaSE', path: '/java/javase' },
          { title: 'Java虚拟机', path: '/java/jvm' },
          { title: 'Java响应式编程', path: '/java/reactive' },
          { title: 'Maven', path: '/java/maven' },
          { title: 'Spring', path: '/java/spring' },
          { title: 'Boot&Cloud', path: '/java/boot&cloud' },
          { title: 'Netty', path: '/java/netty' },
        ]
      },
      {
        title: 'Go',
        path: '/go/',
        sidebarDepth: 1
      },
      {
        title: 'PHP',
        path: '/php/',
        sidebarDepth: 1
      },
    ]
  },
  plugins: [
    'vuepress-plugin-mermaidjs'
  ]
}