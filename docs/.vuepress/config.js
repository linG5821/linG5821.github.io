module.exports = {
  title: 'Yolo Cloud',
  description: 'Yolo Cloud 记录了我技术成长中学到的各种知识,遇到的各种问题',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
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
          { title: 'Windows配置清单', path: 'machine/windows/envlist' }
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
        sidebarDepth: 1,
        children: [
          { title: 'MySQL', path: '/database/mysql' },
          { title: 'MongoDB', path: '/database/mongodb' },
        ]
      },
      {
        title: '中间件',
        path: '/middleware/',
        sidebarDepth: 1
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
        title: 'Java',
        path: '/java/',
        sidebarDepth: 1,
        children: [
          { title: 'JavaSE', path: '/java/javase' },
          { title: 'Java虚拟机', path: '/java/jvm' },
          { title: 'Java响应式编程', path: '/java/reactive' },
          { title: 'Maven', path: '/java/maven' },
          { title: 'SpringBoot', path: '/java/spring-boot' },
          { title: 'SpringCloud', path: '/java/spring-cloud' },
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