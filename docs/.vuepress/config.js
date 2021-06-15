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
          { title: 'MySQL', path: '/database/mysql.md' },
          { title: 'MongoDB', path: '/database/mongodb.md' },
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
          { title: 'Docker', path: '/container/docker.md' },
          { title: 'Docker-Compose', path: '/container/docker-compose.md' },
          { title: 'Kubernetes', path: '/container/kubernetes.md' },
        ]
      },
      {
        title: '常用工具',
        path: '/tool/',
        sidebarDepth: 1,
        children: [
          { title: 'Git', path: '/tool/git.md' }
        ]
      },
      {
        title: 'Java',
        path: '/java/',
        sidebarDepth: 1,
        children: [
          { title: 'Java虚拟机', path: '/java/jvm.md' },
          { title: 'Java响应式编程', path: '/java/reactive.md' },
          { title: 'Maven', path: '/java/maven.md' },
          { title: 'SpringCloud', path: '/java/spring-cloud.md' },
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
  }
}