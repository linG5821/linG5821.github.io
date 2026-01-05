import{_ as s,c as a,b as i,o as e}from"./app-CYKM0tKh.js";const l={};function p(c,n){return e(),a("div",null,n[0]||(n[0]=[i(`<h2 id="性能调优" tabindex="-1"><a class="header-anchor" href="#性能调优"><span>性能调优</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">worker_processes 1;//nginx的 work进程数, 建议等于CPU核心数, 也可以设置 auto</span>
<span class="line">worker_cpu_affinity 0001 0010 0100 1000;// 配置进程与CPU的亲和力, 即把不同的进程分给不同的核心 也可以设置为 auto 自动分配</span>
<span class="line"></span>
<span class="line">events {</span>
<span class="line">  //事件处理模型 在linux下使用epoll多路复用模型 在 Freebsd 中使用 kqueue 的I/O多路复用模型 在 Solaris 中使用 /dev/poll 方式的 I/O 多路复用模型，在 Windows中使用 icop</span>
<span class="line">  use epoll;</span>
<span class="line">  </span>
<span class="line">  /* worker_connections 也是个事件模块指令，用于定义 Nginx 每个进程的最大连接数，默认是 1024。</span>
<span class="line">  最大连接数的计算公式如下：</span>
<span class="line">  max_clients = worker_processes * worker_connections;</span>
<span class="line">  如果作为反向代理，因为浏览器默认会开启 2 个连接到 server，而且 Nginx 还会使用fds（file descriptor）从同一个连接池建立连接到 upstream 后端。则最大连接数的计算公式如下：</span>
<span class="line">  max_clients = worker_processes * worker_connections / 4;</span>
<span class="line">  另外，进程的最大连接数受 Linux 系统进程的最大打开文件数限制，在执行操作系统命令 ulimit -HSn 65535或配置相应文件后， worker_connections 的设置才能生效 */</span>
<span class="line">  worker_connections 20480;</span>
<span class="line">  </span>
<span class="line">  /* 默认情况下，Nginx 进程只会在一个时刻接收一个新的连接，我们可以配置multi_accept 为 on，实现在一个时刻内可以接收多个新的连接，提高处理效率。该参数默认是 off，建议开启 */</span>
<span class="line">  multi_accept on;</span>
<span class="line">  </span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">http {</span>
<span class="line">  /* 参数作用:设置存放域名( server names)的最大散列表的存储桶( bucket)的大小。 默认值依赖 CPU 的缓存行 不能带单位</span>
<span class="line">  若报 出 hash max size 或 hash bucket size 的提示，则需要增加 server_names_hash_max size 的值*/</span>
<span class="line">  server_names_hash_bucket_size 128; </span>
<span class="line">  </span>
<span class="line">  /*第一行的 sendfile 配置可以提高 Nginx 静态资源托管效率。sendfile 是一个系统调用，直接在内核空间完成文件发送，不需要先 read 再 write，没有上下文切换开销*/</span>
<span class="line">  sendfile on;</span>
<span class="line">  </span>
<span class="line">  /*TCP_NOPUSH 是 FreeBSD 的一个 socket 选项，对应 Linux 的 TCP_CORK，Nginx 里统一用 tcp_nopush 来控制它，并且只有在启用了 sendfile 之后才生效。启用它之后，数据包会累计到一定大小之后才会发送，减小了额外开销，提高网络效率*/</span>
<span class="line">  tcp_nopush on;</span>
<span class="line">  </span>
<span class="line">  keepalive_timeout 120;</span>
<span class="line">  </span>
<span class="line">  /*TCP_NODELAY 也是一个 socket 选项，启用后会禁用 Nagle 算法，尽快发送数据，某些情况下可以节约 200ms（Nagle 算法原理是：在发出去的数据还未被确认之前，新生成的小数据先存起来，凑满一个 MSS 或者等到收到确认后再发送）。Nginx 只会针对处于 keep-alive 状态的 TCP 连接才会启用 tcp_nodelay */</span>
<span class="line">  tcp_nodelay on;</span>
<span class="line">  </span>
<span class="line">  client_header_buffer_size 32k;</span>
<span class="line">  large_client_header_buffers 4 32k;</span>
<span class="line">  client_max_body_size 1024m;</span>
<span class="line">  client_body_buffer_size 10m;</span>
<span class="line">  </span>
<span class="line">  #Gzip Compression</span>
<span class="line">  gzip on;</span>
<span class="line">  gzip_buffers 16 8k;</span>
<span class="line">  gzip_comp_level 6;</span>
<span class="line">  gzip_http_version 1.1;</span>
<span class="line">  gzip_min_length 256;</span>
<span class="line">  gzip_proxied any;</span>
<span class="line">  gzip_vary on;</span>
<span class="line">  gzip_types</span>
<span class="line">    text/xml application/xml application/atom+xml application/rss+xml application/xhtml+xml image/svg+xml</span>
<span class="line">    text/javascript application/javascript application/x-javascript</span>
<span class="line">    text/x-json application/json application/x-web-app-manifest+json</span>
<span class="line">    text/css text/plain text/x-component</span>
<span class="line">    font/opentype application/x-font-ttf application/vnd.ms-fontobject</span>
<span class="line">    image/x-icon;</span>
<span class="line">  gzip_disable &quot;MSIE [1-6]\\.(?!.*SV1)&quot;;</span>
<span class="line">  </span>
<span class="line">  # Fastcgi</span>
<span class="line">  fastcgi_connect_timeout 300;</span>
<span class="line">  fastcgi_send_timeout 300;</span>
<span class="line">  fastcgi_read_timeout 300;</span>
<span class="line">  fastcgi_buffer_size 64k;</span>
<span class="line">  fastcgi_buffers 4 64k;</span>
<span class="line">  fastcgi_busy_buffers_size 128k;</span>
<span class="line">  fastcgi_temp_file_write_size 128k;</span>
<span class="line">  fastcgi_intercept_errors on;</span>
<span class="line">  </span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见问题汇总" tabindex="-1"><a class="header-anchor" href="#常见问题汇总"><span>常见问题汇总</span></a></h2><ol><li>nginx: [error] invalid PID number in nginx.pid 的解决办法</li></ol><p>nginx 修改配置文件后，重启的时候出现了，这个提示。 nginx: [error] invalid PID number &quot;&quot; in &quot;/tmp/nginx.pid&quot; 。 意思是说 不能在文件/tmp/nginx.pid中找到有效的 PID(进程ID)</p><p>1.1 杀掉nginx主进程,然后重启</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">   <span class="token comment"># 重启前一定要先检查，配置文件是否正确，没有问题再重启</span></span>
<span class="line">   nginx <span class="token parameter variable">-t</span></span>
<span class="line">   nginx: the configuration <span class="token function">file</span> /usr/local/nginx/conf/nginx.conf syntax is ok</span>
<span class="line">   nginx: configuration <span class="token function">file</span> /usr/local/nginx/conf/nginx.conf <span class="token builtin class-name">test</span> is successful</span>
<span class="line">   </span>
<span class="line">   <span class="token comment"># 关掉nginx 的所有进程</span></span>
<span class="line">   <span class="token function">killall</span> nginx</span>
<span class="line">   <span class="token comment"># 重新启动 nginx</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.2 把nginx的进程号重新写入 nginx.pid 中，然后正常重启</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">   <span class="token comment"># 首先找到nginx进程 pid</span></span>
<span class="line">   <span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;nginx: master&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> pts <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2;}&#39;</span></span>
<span class="line">   </span>
<span class="line">   <span class="token comment"># 或者直接写入</span></span>
<span class="line">   <span class="token comment"># 需要注意的是， nginx.pid 的文件的路径，不同的配置，可能路径是不同的。 可以从 nginx.conf 的主配置文件中获得</span></span>
<span class="line">   </span>
<span class="line">   <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;nginx: master&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> pts <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2;}&#39;</span><span class="token variable">\`</span></span> <span class="token operator">&gt;</span> /tmp/nginx.pid</span>
<span class="line">   </span>
<span class="line">   <span class="token comment"># 然后重启</span></span>
<span class="line">   nginx <span class="token parameter variable">-s</span> reload</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)]))}const r=s(l,[["render",p]]),t=JSON.parse('{"path":"/middleware/nginx.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1767610787000,"contributors":[{"name":"lsj","username":"lsj","email":"lishaojie@aithu.com","commits":1,"url":"https://github.com/lsj"}],"changelog":[{"hash":"c44cbade27df20e77d4204fe0fa76423b764227a","time":1767610787000,"email":"lishaojie@aithu.com","author":"lsj","message":"add javaenv"}]},"filePathRelative":"middleware/nginx.md"}');export{r as comp,t as data};
