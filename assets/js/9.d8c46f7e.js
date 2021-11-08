(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{399:function(s,e,a){"use strict";a.r(e);var t=a(30),r=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"docker安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker安装"}},[s._v("#")]),s._v(" Docker安装")]),s._v(" "),a("ol",[a("li",[s._v("添加Docker 安装包的仓库"),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y yum-utils\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker官方仓库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 阿里云仓库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n")])])])]),s._v(" "),a("li",[s._v("按照Docker版本排序，安装指定版本"),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按照版本排序")]),s._v("\nyum list docker-ce --showduplicates"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -r\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 选择指定版本安装")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce-19.03.2-3.el7\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"docker配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker配置"}},[s._v("#")]),s._v(" Docker配置")]),s._v(" "),a("ol",[a("li",[s._v("修改Docker配置无需重启Docker守护进程即生效"),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改 /etc/docker/daemon.json 后 执行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -SIGHUP "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("pidof dockerd"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])])])]),s._v(" "),a("li",[s._v("重启守护进程，但不重启容器"),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改 /etc/docker/daemon.json")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"live-restore"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"特殊命令操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特殊命令操作"}},[s._v("#")]),s._v(" 特殊命令操作")]),s._v(" "),a("ol",[a("li",[s._v("抓取容器网络请求包"),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取容器的进程PID")]),s._v("\ndocker inspect --format "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{{.State.Pid}}"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${container_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("name}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换网络命名空间 PS : 退出使用exit 通过ifconfig 对比变化 多次执行需要退出多次")]),s._v("\nnsenter -n -t "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${container_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("name}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用tcpdump抓取网络请求包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例如: tcpdump tcp -i eth1 port 6379")]),s._v("\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[s._v("#")]),s._v(" Dockerfile")]),s._v(" "),a("ol",[a("li",[s._v("Dockerfile中 ENTRYPOINT/CMD 指定使用 shell 方式和exec方式时读取环境变量的区别"),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("shell 方式  只能读取到在 Dockerfile 中设置的环境变量, 无法读取通过-e指定但是没有在dockerfile中的环境变量\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" 方式 不仅能读取 Dockerfile 中的环境变量, 还能读取不存在的通过-e指定的其他环境变量\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"docker-swarm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-swarm"}},[s._v("#")]),s._v(" Docker Swarm")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("创建overlay 网络")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker network create --attachable -d overlay network_name --subnet"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${subnet}")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("swarm集群需要开放的端口")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# TCP 2377 用于swarm集群")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# TCP/UDP 端口 4789 覆盖网络流量 容器间可以相互ping通")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# TCP/UDP 端口 7946 节点间通信(容器网络发现)")]),s._v("\niptables -I INPUT -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2377")]),s._v(" -j ACCEPT\niptables -I INPUT -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4789")]),s._v(" -j ACCEPT\niptables -I INPUT -p udp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4789")]),s._v(" -j ACCEPT\niptables -I INPUT -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7946")]),s._v(" -j ACCEPT\niptables -I INPUT -p udp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7946")]),s._v(" -j ACCEPT\n\n")])])])]),s._v(" "),a("li",[a("p",[s._v("overlay网络创建后,子节点无法从docker-compose 直接使用,可以手动创建一个容器指定该网络后,该网络才会显示在子节点的网络列表中,在无任何引用节点后又会消失")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker run -it -d  --network "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${network}")]),s._v(" busybox\n")])])])]),s._v(" "),a("li",[a("p",[s._v("Error response from daemon: Could not attach to network mystack_default : context deadline exceeded")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker node update --availability active nodeId\n")])])])]),s._v(" "),a("li",[a("p",[s._v("Swarm Node 标签操作")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新 role 可以更换其他键 相同键仅能有一个值")]),s._v("\ndocker node update --label-add "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("role")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xxxx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移除 role 为删除的键")]),s._v("\ndocker node update --label-rm role "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"docker-compose安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose安装"}},[s._v("#")]),s._v(" Docker Compose安装")]),s._v(" "),a("ol",[a("li",[s._v("下载docker-compose 文件"),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最新版本请参考 https://docs.docker.com/compose/install/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://github.com/docker/compose/releases/download/1.29.2/docker-compose-'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -s"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -m"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" -o /usr/local/bin/docker-compose\n")])])])]),s._v(" "),a("li",[s._v("修改二进制执行权限"),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/docker-compose\n")])])])]),s._v(" "),a("li",[s._v("测试安装"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 查看是否显示版本信息\ndocker-compose --version\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"docker-stack-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-stack-使用"}},[s._v("#")]),s._v(" Docker Stack 使用")]),s._v(" "),a("ol",[a("li",[s._v("部署命令 "),a("code",[s._v("docker stack deploy -c xxxx.yml {stack_name} --with-registry-auth")]),s._v(" 当拉取镜像需要权限时需要添加 "),a("code",[s._v("--with-registry-auth")])]),s._v(" "),a("li",[s._v("部署模式 deploy.mode\n"),a("ul",[a("li",[s._v("部署模式分为 "),a("code",[s._v("global")]),s._v(" 和  "),a("code",[s._v("replicated")]),s._v("(默认)")]),s._v(" "),a("li",[a("code",[s._v("global")]),s._v(" 会根据部署策略在每一个节点上都部署一个服务, 没有预先指定数量, 那么每次新增节点服务也会被分配到新的节点")]),s._v(" "),a("li",[a("code",[s._v("replicated")]),s._v(" 可以指定相同服务的数量, 并根据策略分发在符合条件的机器上")])])]),s._v(" "),a("li",[s._v("端口发布模式 ports.mode\n"),a("ul",[a("li",[s._v("端口发布模式分为 "),a("code",[s._v("host")]),s._v(" 和  "),a("code",[s._v("ingress")]),s._v("(默认)")]),s._v(" "),a("li",[a("code",[s._v("host")]),s._v(" 会把每一个部署了服务的节点的端口都映射出来, 所以当端口发布模式为 "),a("code",[s._v("host")]),s._v(" 时 指定 "),a("code",[s._v("replicas")]),s._v(" 大于 swarm集群节点数量时只能启动 集群节点数量的服务节点, 因为一个集群节点只能映射一个端口")]),s._v(" "),a("li",[a("code",[s._v("ingress")]),s._v(" 会把swarm 集群内所有节点的端口都映射, 即使这个机器上没有部署该服务")])])])]),s._v(" "),a("h2",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),a("ol",[a("li",[s._v("Docker服务安装后无法启动 Error starting daemon: Error initializing network controller: error obtaining controller instance: failed to create NAT chain: Iptables not found"),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker 需要 iptables进行转发 安装iptables")]),s._v("\nyum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" iptables.service\nsystemctl start iptables.service\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" iptables.service\n")])])])]),s._v(" "),a("li",[s._v("Docker swarm 集群强制退出导致 Error response from daemon: rpc error: code = Unknown desc = The swarm does not have a leader. It's possible that too few managers are online. Make sure more than half of the managers are online."),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker swarm init --force-new-cluster\n")])])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);