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
    ]
  }
}