import{_ as n,c as a,b as e,o as l}from"./app-DUNtouPH.js";const p={};function i(c,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h2 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令"><span>基本命令</span></a></h2><ul><li><p>文件处理命令</p></li><li><p>权限管理命令</p></li><li><p>文件搜索命令</p></li><li><p>帮助命令</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">  <span class="token function">man</span> 命令或者配置文件 <span class="token comment"># 查看命令的描述 /选项 查看对应选项的含义</span></span>
<span class="line">                   <span class="token comment"># 查看配置文件存放的信息以及文件的格式</span></span>
<span class="line">  whatis 命令 <span class="token comment"># 查看命令的描述</span></span>
<span class="line">  <span class="token function">apropos</span> 配置文件 <span class="token comment"># 查看配置文件的描述</span></span>
<span class="line">  命令 <span class="token parameter variable">--help</span> 查看命令的帮助信息</span>
<span class="line">  info 与man类似 浏览方式更便捷</span>
<span class="line">  <span class="token builtin class-name">help</span> <span class="token comment"># 查看shell内置命令帮助 例如 cd</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>用户管理命令</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">  <span class="token function">useradd</span> 用户名  <span class="token comment">#添加用户</span></span>
<span class="line">  <span class="token function">passwd</span>  用户名  <span class="token comment">#设置密码</span></span>
<span class="line">  <span class="token function">who</span>    <span class="token comment">#查看登陆用户信息</span></span>
<span class="line">  w      <span class="token comment">#查看登陆用户信息(稍微详细)</span></span>
<span class="line">  <span class="token function">uptime</span> <span class="token comment">#查看当前机器运行时间(load average 代表1, 5, 15分钟的负载)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>压缩解压命令</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">  <span class="token comment"># gzip (只能压缩文件)</span></span>
<span class="line">  <span class="token function">gzip</span> 文件名  <span class="token comment">#压缩</span></span>
<span class="line">  gunzip 文件名 / <span class="token function">gzip</span> <span class="token parameter variable">-d</span> 文件名 <span class="token comment">#解压缩</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># tar</span></span>
<span class="line">  <span class="token parameter variable">-c</span>  打包</span>
<span class="line">  <span class="token parameter variable">-v</span>  显示详细信息</span>
<span class="line">  <span class="token parameter variable">-f</span>  指定文件名</span>
<span class="line">  <span class="token parameter variable">-z</span>  打包同时压缩,使用gzip格式压缩</span>
<span class="line">  <span class="token parameter variable">-f</span>  打包同时压缩,使用bz2格式压缩</span>
<span class="line">  <span class="token parameter variable">-x</span>  解包</span>
<span class="line"></span>
<span class="line">  <span class="token comment"># 常用组合 </span></span>
<span class="line">  <span class="token function">tar</span> <span class="token parameter variable">-zcvf</span> 压缩后文件名 压缩文件/目录</span>
<span class="line">  <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> 压缩文件名 <span class="token parameter variable">-C</span> 目标目录<span class="token punctuation">(</span>不指定-C默认解压到当前目录<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># zip</span></span>
<span class="line">  <span class="token function">zip</span> <span class="token punctuation">[</span>-r<span class="token punctuation">]</span> <span class="token punctuation">[</span>压缩后文件名<span class="token punctuation">]</span> <span class="token punctuation">[</span>压缩文件<span class="token punctuation">]</span> <span class="token comment"># -r 可以压缩目录</span></span>
<span class="line">  <span class="token function">unzip</span> <span class="token punctuation">[</span>压缩文件<span class="token punctuation">]</span> <span class="token comment"># 解压缩 目录已经存在可以使用 -o 覆盖不询问</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># bzip2</span></span>
<span class="line">  <span class="token comment"># gizp 升级版 压缩比高 -k 参数可以保留源文件 压缩格式bz2</span></span>
<span class="line">  <span class="token function">bzip2</span> 文件名 <span class="token comment"># 压缩 -k 参数保留源文件</span></span>
<span class="line">  bunzip2 文件名 <span class="token comment"># 解压缩 -k 保留压缩包</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>网络命令</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">  <span class="token function">write</span> <span class="token punctuation">[</span>用户名<span class="token punctuation">]</span> <span class="token comment"># 给指定在线用户发送信息</span></span>
<span class="line">  wall <span class="token punctuation">[</span>消息内容<span class="token punctuation">]</span> <span class="token comment"># 给所有在线用户发送广播</span></span>
<span class="line">  <span class="token function">ping</span> <span class="token punctuation">[</span>IP地址<span class="token punctuation">]</span> <span class="token comment"># 测试网络连通性</span></span>
<span class="line">      <span class="token parameter variable">-c</span> 指定ping的次数</span>
<span class="line">  <span class="token function">ifconfig</span> <span class="token comment">#查看和设置网络信息</span></span>
<span class="line">      <span class="token punctuation">[</span>网卡<span class="token punctuation">]</span> <span class="token punctuation">[</span>IP<span class="token punctuation">]</span> 设置IP地址</span>
<span class="line">  <span class="token comment"># 网络信息配置文件</span></span>
<span class="line">  /etc/sysconfig/network-scripts/ifcfg-eth0 <span class="token comment"># 配置IP地址等信息</span></span>
<span class="line">  /etc/sysconfig/network <span class="token comment"># 配置hostname</span></span>
<span class="line">  /etc/resolv.conf <span class="token comment"># 修改DNS服务器配置</span></span>
<span class="line"></span>
<span class="line">  mail <span class="token punctuation">[</span>用户名<span class="token punctuation">]</span> <span class="token comment"># 给指定用户发送邮件</span></span>
<span class="line">  last <span class="token comment"># 列出目前及历史用户登录的信息</span></span>
<span class="line">  lastlog <span class="token comment"># 查看用户的最后一次的登录信息</span></span>
<span class="line">  <span class="token function">traceroute</span> <span class="token punctuation">[</span>域名/IP<span class="token punctuation">]</span> <span class="token comment"># 追踪数据包的路径</span></span>
<span class="line">  <span class="token function">netstat</span>  <span class="token comment"># 查看网络状态</span></span>
<span class="line">      <span class="token parameter variable">-t</span> 查询TCP网络信息</span>
<span class="line">      <span class="token parameter variable">-u</span> 查询UDP网络信息</span>
<span class="line">      <span class="token parameter variable">-l</span> 监听</span>
<span class="line">      <span class="token parameter variable">-r</span> 路由</span>
<span class="line">      <span class="token parameter variable">-n</span> 显示IP地址和端口号</span>
<span class="line">  <span class="token comment"># 范例</span></span>
<span class="line">  <span class="token function">netstat</span> <span class="token parameter variable">-tlun</span> <span class="token comment"># 查看当前计算机开了哪些端口</span></span>
<span class="line">  <span class="token function">netstat</span> <span class="token parameter variable">-an</span> <span class="token comment"># 查看所有的监听信息</span></span>
<span class="line">  <span class="token function">netstat</span> <span class="token parameter variable">-rn</span> <span class="token comment"># 查看路由表</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>挂载/卸载命令</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">  <span class="token comment"># 挂载</span></span>
<span class="line">  <span class="token function">mount</span> <span class="token parameter variable">-t</span> <span class="token punctuation">[</span>文件系统<span class="token punctuation">]</span> <span class="token punctuation">[</span>设备名称<span class="token punctuation">]</span> <span class="token punctuation">[</span>挂载目录<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment"># 卸载</span></span>
<span class="line">  <span class="token function">umount</span> <span class="token punctuation">[</span>设备名称<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>关机/重启命令</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">shutdown</span> </span>
<span class="line"> <span class="token parameter variable">-c</span> 取消前一个关机命令</span>
<span class="line"> <span class="token parameter variable">-h</span> 关机 <span class="token punctuation">[</span>时间<span class="token punctuation">]</span></span>
<span class="line"> <span class="token parameter variable">-r</span> 重启 <span class="token punctuation">[</span>时间<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="常用命令收集" tabindex="-1"><a class="header-anchor" href="#常用命令收集"><span>常用命令收集</span></a></h2><ol><li><p>根据端口号批量kill</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token punctuation">{</span>port<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-c</span> <span class="token number">9</span>-15 <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">kill</span> <span class="token parameter variable">-9</span></span>
<span class="line"><span class="token function">ps</span> aux<span class="token operator">|</span><span class="token function">grep</span> process_name <span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span><span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">kill</span> <span class="token parameter variable">-9</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>nohup 运行jar程序时指定jar包的路径为绝对路径，这样jps可以显示正确的java项目的名称，使用相对路径只会显示jar</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">nohup</span> <span class="token function">java</span> <span class="token parameter variable">-jar</span> /home/xxx.jar <span class="token operator">&gt;</span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>获取上一条命令的执行结果 $?</p></li><li><p>Redis删除统配符</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">redis-cli <span class="token parameter variable">-h</span> <span class="token punctuation">{</span>host<span class="token punctuation">}</span> <span class="token parameter variable">-a</span> crs-2xexfxav:Frezzen2sweng keys <span class="token string">&quot;xxx*&quot;</span> <span class="token operator">|</span> <span class="token function">xargs</span> redis-cli <span class="token parameter variable">-h</span> <span class="token punctuation">{</span>host<span class="token punctuation">}</span> <span class="token parameter variable">-a</span> crs-2xexfxav:Frezzen2sweng del</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>获取当前进程的线程</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">ps</span> p <span class="token variable">\${pid}</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-o</span> pcpu,pmem,pid,tid,time,tname,cmd // 线程明细</span>
<span class="line"><span class="token function">ps</span> p <span class="token variable">\${pid}</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-o</span> pcpu,pmem,pid,tid,time,tname,cmd <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span> // 线程明细</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看本机的网络连接数</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">ss <span class="token parameter variable">-s</span> <span class="token operator">&amp;&amp;</span> <span class="token function">free</span> <span class="token parameter variable">-g</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>查看CPU核数及序号</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">cat</span> /proc/cpuinfo <span class="token operator">|</span> <span class="token function">grep</span> processor</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>获取占用磁盘最大的前几个</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">du</span> <span class="token parameter variable">-h</span> <span class="token parameter variable">-BM</span> <span class="token punctuation">{</span>file_path<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-nr</span> <span class="token operator">|</span><span class="token function">head</span> <span class="token parameter variable">-n3</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>查看系统oom日志</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">journalctl <span class="token parameter variable">-k</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-e</span> memory <span class="token parameter variable">-e</span> oom</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><h2 id="定制化" tabindex="-1"><a class="header-anchor" href="#定制化"><span>定制化</span></a></h2><h3 id="更换镜像源" tabindex="-1"><a class="header-anchor" href="#更换镜像源"><span>更换镜像源</span></a></h3><ul><li><p>Ubuntu镜像源更换</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 1.首先将原配置文件备份</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">cp</span> /etc/apt/sources.list /etc/apt/sources.list.20181013</span>
<span class="line"><span class="token comment"># 2.然后 VIM 打开，替换</span></span>
<span class="line">:%s/security.ubuntu/mirrors.aliyun/g</span>
<span class="line">:%s/archive.ubuntu/mirrors.aliyun/g</span>
<span class="line"><span class="token comment"># 3.更新</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> update</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化"><span>性能优化</span></a></h2><ol><li><p>内核参数优化示例</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">//内核参数调整</span>
<span class="line"><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;&gt;</span> /etc/sysctl.conf</span></span>
<span class="line">fs.file-max=2097152 </span>
<span class="line">fs.nr_open=2097152</span>
<span class="line">net.core.somaxconn=32768</span>
<span class="line">net.ipv4.tcp_max_syn_backlog=16384</span>
<span class="line">net.core.netdev_max_backlog=16384</span>
<span class="line">net.ipv4.ip_local_port_range=1000 65535</span>
<span class="line">net.core.rmem_default=262144</span>
<span class="line">net.core.wmem_default=262144</span>
<span class="line">net.core.rmem_max=16777216</span>
<span class="line">net.core.wmem_max=16777216</span>
<span class="line">net.core.optmem_max=16777216</span>
<span class="line">net.ipv4.tcp_rmem=1024 4096 16777216</span>
<span class="line">net.ipv4.tcp_wmem=1024 4096 16777216</span>
<span class="line">net.nf_conntrack_max=1000000</span>
<span class="line">net.netfilter.nf_conntrack_max=1000000</span>
<span class="line">net.netfilter.nf_conntrack_tcp_timeout_time_wait=30</span>
<span class="line">net.ipv4.tcp_max_tw_buckets=1048576</span>
<span class="line">net.ipv4.tcp_fin_timeout = 15</span>
<span class="line">EOF</span></span>
<span class="line"></span>
<span class="line"><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;&gt;</span>/etc/security/limits.conf</span></span>
<span class="line">*      soft   nofile      1048576</span>
<span class="line">*      hard   nofile      1048576</span>
<span class="line">EOF</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token assign-left variable">DefaultLimitNOFILE</span><span class="token operator">=</span><span class="token number">1048576</span> <span class="token operator">&gt;&gt;</span>/etc/systemd/system.conf</span>
<span class="line"></span>
<span class="line">//网络参数调整</span>
<span class="line"><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;&gt;</span> /etc/sysctl.conf</span></span>
<span class="line">net.ipv4.tcp_tw_reuse=1</span>
<span class="line">net.ipv4.tcp_tw_recycle=1</span>
<span class="line">net.ipv4.tcp_fin_timeout=30</span>
<span class="line">net.ipv4.tcp_syncookies = 1</span>
<span class="line">EOF</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="常用软件安装与配置" tabindex="-1"><a class="header-anchor" href="#常用软件安装与配置"><span>常用软件安装与配置</span></a></h2><ul><li><p>Centos 安装 Supervisor</p><ol><li><p>pip方式安装</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">yum <span class="token function">install</span> python-setuptools</span>
<span class="line">easy_install pip</span>
<span class="line">pip <span class="token function">install</span> supervisor</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>源代码安装</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">get https://files.pythonhosted.org/packages/de/87/ee1ad8fa533a4b5f2c7623f4a2b585d3c1947af7bed8e65bc7772274320e/supervisor-4.1.0.tar.gz</span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> supervisor-4.1.0.tar.gz</span>
<span class="line"><span class="token builtin class-name">cd</span> supervisor-4.1.0</span>
<span class="line"><span class="token function">sudo</span> python setup.py <span class="token function">install</span></span>
<span class="line"><span class="token comment">## 如果报meld3版本的问题</span></span>
<span class="line"><span class="token function">wget</span> http://www.plope.com/software/meld3/meld3-0.6.5.tar.gz</span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-xf</span> meld3-0.6.5.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> meld3-0.6.5</span>
<span class="line">python setup.py <span class="token function">install</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>生成配置</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">echo_supervisord_conf <span class="token operator">&gt;</span> /usr/local/etc/supervisord.conf</span>
<span class="line"><span class="token comment"># 为了不将所有新增配置信息全写在一个配置文件里，这里新建一个文件夹，每个程序设置一个配置文件，相互隔离</span></span>
<span class="line"><span class="token function">mkdir</span> /usr/local/etc/supervisor.d/</span>
<span class="line"><span class="token comment"># 修改配置 加入以下配置</span></span>
<span class="line"><span class="token function">vim</span> /usr/local/etc/supervisord.conf</span>
<span class="line"><span class="token punctuation">[</span>include<span class="token punctuation">]</span></span>
<span class="line">files <span class="token operator">=</span> /usr/local/etc/supervisor.d/*.ini</span>
<span class="line"><span class="token comment"># 在supervisord.conf中设置通过web可以查看管理的进程，加入以下代码（默认即有，取消注释即可）    </span></span>
<span class="line"><span class="token punctuation">[</span>inet_http_server<span class="token punctuation">]</span> </span>
<span class="line"><span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">9001</span></span>
<span class="line"><span class="token assign-left variable">username</span><span class="token operator">=</span>user      </span>
<span class="line"><span class="token assign-left variable">password</span><span class="token operator">=</span><span class="token number">123</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置Service</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">vim</span> /usr/lib/systemd/system/supervisord.service</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 内容</span></span>
<span class="line"><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">Description</span><span class="token operator">=</span>Process Monitoring and Control Daemon</span>
<span class="line"><span class="token assign-left variable">After</span><span class="token operator">=</span>rc-local.service nss-user-lookup.target</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>Service<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 添加EnvironmentFile 或者 Environment 可以在service模式下使用环境变量 但是Service启动方式无法读取配置在系统环境变量中的值 是因为通过命令行启动方式和通过systemd的方式有差别导致的</span></span>
<span class="line"><span class="token assign-left variable">Type</span><span class="token operator">=</span>forking</span>
<span class="line"><span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/supervisord <span class="token parameter variable">-c</span> /usr/local/etc/supervisord.conf</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>Install<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">#设置开机启动</span></span>
<span class="line">systemctl <span class="token builtin class-name">enable</span> supervisord.service</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>Centos7 安装服务器版 Chrome</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> <span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> google-chrome-stable_current_x86_64.rpm</span>
<span class="line">yum <span class="token function">install</span> pax*</span>
<span class="line">yum <span class="token function">install</span> redhat-lsb*</span>
<span class="line">yum <span class="token parameter variable">-y</span> <span class="token function">install</span> libXss*</span>
<span class="line">yum <span class="token function">install</span> libappindicator*</span>
<span class="line">yum <span class="token function">install</span> liberation-fonts</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>iptables 使用</p></li></ul><ol><li><p>开放端口</p></li><li><p>端口转发</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 单次即时生效</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token number">1</span> <span class="token operator">&gt;</span> /proc/sys/net/ipv4/ip_forward</span>
<span class="line"><span class="token comment"># 永久生效</span></span>
<span class="line"><span class="token function">vi</span> /etc/sysctl.conf</span>
<span class="line"><span class="token comment">## 启用包过滤功能 </span></span>
<span class="line">net.ipv4.ip_forward <span class="token operator">=</span> <span class="token number">1</span> </span>
<span class="line"><span class="token comment">## 即时加载配置</span></span>
<span class="line"><span class="token function">sysctl</span> <span class="token parameter variable">-p</span></span>
<span class="line"><span class="token comment">## 显示所有系统参数</span></span>
<span class="line"><span class="token function">sysctl</span> <span class="token parameter variable">-a</span></span>
<span class="line">可以看到net.ipv4.ip_forward <span class="token operator">=</span> <span class="token number">1</span>  </span>
<span class="line">配置转发规则，如下示例是将26.xx.x.2:10001（云服务器外网地址，端口可自行选择）的访问转发至内网为10.0.0.5:6379的 Redis 实例。</span>
<span class="line">iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-A</span> PREROUTING <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">10001</span> <span class="token parameter variable">-j</span> DNAT --to-destination <span class="token number">10.0</span>.0.5:6379</span>
<span class="line">iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-A</span> POSTROUTING <span class="token parameter variable">-d</span> <span class="token number">10.0</span>.0.5 <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">6379</span> <span class="token parameter variable">-j</span> MASQUERADE</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="其他问题" tabindex="-1"><a class="header-anchor" href="#其他问题"><span>其他问题</span></a></h2><ul><li><p>VIRT占用内存过大</p><p>大致的原因是从glibc2.11版本开始，linux为了解决多线程下内存分配竞争而引起的性能问题，增强了动态内存分配行为，使用了一种叫做arena的memory pool,在64位系统下面缺省配置是一个arena大小为64M，一个进程可以最多有cpu cores * 8个arena。假设机器是8核的，那么最多可以有8 * 8 = 64个arena，也就是会使用64 * 64 = 4096M内存。然而我们可以通过设置系统环境变量来改变arena的数量：export MALLOC_ARENA_MAX=8（一般建议配置程序cpu核数）配置环境变量使其生效，再重启该jvm进程，VIRT比之前少了快2个G</p></li><li><p>Centos6 Autoconf version 2.64 or higher is required</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">rpm</span> <span class="token parameter variable">-qf</span> /usr/bin/autoconf</span>
<span class="line"><span class="token function">rpm</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">--nodeps</span> autoconf-2.63</span>
<span class="line"><span class="token function">wget</span> ftp://ftp.gnu.org/gnu/autoconf/autoconf-2.69.tar.gz</span>
<span class="line"><span class="token function">tar</span> zxvf autoconf-2.69.tar.gz</span>
<span class="line"><span class="token builtin class-name">cd</span> autoconf-2.69</span>
<span class="line">./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/</span>
<span class="line"><span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,14)]))}const r=n(p,[["render",i]]),o=JSON.parse('{"path":"/machine/linux/","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1754642790000,"contributors":[{"name":"lsj","username":"lsj","email":"lishaojie@aithu.com","commits":1,"url":"https://github.com/lsj"}],"changelog":[{"hash":"68c8fe668940c6c2d5e4fcf94e88aebaeecb290d","time":1754642790000,"email":"lishaojie@aithu.com","author":"lsj","message":"updte"}]},"filePathRelative":"machine/linux/README.md"}');export{r as comp,o as data};
