(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{378:function(s,a,e){"use strict";e.r(a);var t=e(25),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),e("ol",[e("li",[s._v("添加Docker 安装包的仓库"),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y yum-utils\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker官方仓库")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 阿里云仓库")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n")])])])]),s._v(" "),e("li",[s._v("按照Docker版本排序，安装指定版本"),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按照版本排序")]),s._v("\nyum list docker-ce --showduplicates"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -r\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 选择指定版本安装")]),s._v("\nyum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce-19.03.2-3.el7\n")])])])])]),s._v(" "),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),e("ol",[e("li",[s._v("修改Docker配置无需重启Docker守护进程即生效"),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改 /etc/docker/daemon.json 后 执行")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -SIGHUP "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("pidof dockerd"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])])])]),s._v(" "),e("li",[s._v("重启守护进程，但不重启容器"),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改 /etc/docker/daemon.json")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"live-restore"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])]),s._v(" "),e("h2",{attrs:{id:"特殊命令操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特殊命令操作"}},[s._v("#")]),s._v(" 特殊命令操作")]),s._v(" "),e("ol",[e("li",[s._v("抓取容器网络请求包"),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取容器的进程PID")]),s._v("\ndocker inspect --format "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{{.State.Pid}}"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${container_id"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("name}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换网络命名空间 PS : 退出使用exit 通过ifconfig 对比变化 多次执行需要退出多次")]),s._v("\nnsenter -n -t "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${container_id"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("name}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用tcpdump抓取网络请求包")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例如: tcpdump tcp -i eth1 port 6379")]),s._v("\n")])])])])]),s._v(" "),e("h2",{attrs:{id:"dockerfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[s._v("#")]),s._v(" Dockerfile")]),s._v(" "),e("ol",[e("li",[s._v("Dockerfile中 ENTRYPOINT/CMD 指定使用 shell 方式和exec方式时读取环境变量的区别"),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("shell 方式  只能读取到在 Dockerfile 中设置的环境变量, 无法读取通过-e指定但是没有在dockerfile中的环境变量\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" 方式 不仅能读取 Dockerfile 中的环境变量, 还能读取不存在的通过-e指定的其他环境变量\n")])])])])]),s._v(" "),e("h2",{attrs:{id:"docker-swarm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-swarm"}},[s._v("#")]),s._v(" Docker Swarm")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("创建overlay 网络")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker network create --attachable -d overlay network_name --subnet"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${subnet}")]),s._v("\n")])])])]),s._v(" "),e("li",[e("p",[s._v("swarm集群需要开放的端口")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# TCP 2377 用于swarm集群")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# TCP/UDP 端口 4789 覆盖网络流量 容器间可以相互ping通")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# TCP/UDP 端口 7946 节点间通信(容器网络发现)")]),s._v("\niptables -I INPUT -p tcp --dport "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2377")]),s._v(" -j ACCEPT\niptables -I INPUT -p tcp --dport "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4789")]),s._v(" -j ACCEPT\niptables -I INPUT -p udp --dport "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4789")]),s._v(" -j ACCEPT\niptables -I INPUT -p tcp --dport "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7946")]),s._v(" -j ACCEPT\niptables -I INPUT -p udp --dport "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7946")]),s._v(" -j ACCEPT\n\n")])])])]),s._v(" "),e("li",[e("p",[s._v("overlay网络创建后,子节点无法从docker-compose 直接使用,可以手动创建一个容器指定该网络后,该网络才会显示在子节点的网络列表中,在无任何引用节点后又会消失")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker run -it -d  --network "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${network}")]),s._v(" busybox\n")])])])]),s._v(" "),e("li",[e("p",[s._v("Error response from daemon: Could not attach to network mystack_default : context deadline exceeded")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker node update --availability active nodeId\n")])])])]),s._v(" "),e("li",[e("p",[s._v("Swarm Node 标签操作")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新 role 可以更换其他键 相同键仅能有一个值")]),s._v("\ndocker node update --label-add "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("role")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xxxx "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移除 role 为删除的键")]),s._v("\ndocker node update --label-rm role "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])]),s._v(" "),e("h2",{attrs:{id:"常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),e("ol",[e("li",[s._v("Docker服务安装后无法启动 Error starting daemon: Error initializing network controller: error obtaining controller instance: failed to create NAT chain: Iptables not found"),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker 需要 iptables进行转发 安装iptables")]),s._v("\nyum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" iptables.service\nsystemctl start iptables.service\nsystemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" iptables.service\n")])])])]),s._v(" "),e("li",[s._v("Docker swarm 集群强制退出导致 Error response from daemon: rpc error: code = Unknown desc = The swarm does not have a leader. It's possible that too few managers are online. Make sure more than half of the managers are online."),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker swarm init --force-new-cluster\n")])])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);