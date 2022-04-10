## 性能调优
```
worker_processes 1;//nginx的 work进程数, 建议等于CPU核心数, 也可以设置 auto
worker_cpu_affinity 0001 0010 0100 1000;// 配置进程与CPU的亲和力, 即把不同的进程分给不同的核心 也可以设置为 auto 自动分配

events {
  //事件处理模型 在linux下使用epoll多路复用模型 在 Freebsd 中使用 kqueue 的I/O多路复用模型 在 Solaris 中使用 /dev/poll 方式的 I/O 多路复用模型，在 Windows中使用 icop
  use epoll;
  
  /* worker_connections 也是个事件模块指令，用于定义 Nginx 每个进程的最大连接数，默认是 1024。
  最大连接数的计算公式如下：
  max_clients = worker_processes * worker_connections;
  如果作为反向代理，因为浏览器默认会开启 2 个连接到 server，而且 Nginx 还会使用fds（file descriptor）从同一个连接池建立连接到 upstream 后端。则最大连接数的计算公式如下：
  max_clients = worker_processes * worker_connections / 4;
  另外，进程的最大连接数受 Linux 系统进程的最大打开文件数限制，在执行操作系统命令 ulimit -HSn 65535或配置相应文件后， worker_connections 的设置才能生效 */
  worker_connections 20480;
  
  /* 默认情况下，Nginx 进程只会在一个时刻接收一个新的连接，我们可以配置multi_accept 为 on，实现在一个时刻内可以接收多个新的连接，提高处理效率。该参数默认是 off，建议开启 */
  multi_accept on;
  
}


http {
  /* 参数作用:设置存放域名( server names)的最大散列表的存储桶( bucket)的大小。 默认值依赖 CPU 的缓存行 不能带单位
  若报 出 hash max size 或 hash bucket size 的提示，则需要增加 server_names_hash_max size 的值*/
  server_names_hash_bucket_size 128; 
  
  /*第一行的 sendfile 配置可以提高 Nginx 静态资源托管效率。sendfile 是一个系统调用，直接在内核空间完成文件发送，不需要先 read 再 write，没有上下文切换开销*/
  sendfile on;
  
  /*TCP_NOPUSH 是 FreeBSD 的一个 socket 选项，对应 Linux 的 TCP_CORK，Nginx 里统一用 tcp_nopush 来控制它，并且只有在启用了 sendfile 之后才生效。启用它之后，数据包会累计到一定大小之后才会发送，减小了额外开销，提高网络效率*/
  tcp_nopush on;
  
  keepalive_timeout 120;
  
  /*TCP_NODELAY 也是一个 socket 选项，启用后会禁用 Nagle 算法，尽快发送数据，某些情况下可以节约 200ms（Nagle 算法原理是：在发出去的数据还未被确认之前，新生成的小数据先存起来，凑满一个 MSS 或者等到收到确认后再发送）。Nginx 只会针对处于 keep-alive 状态的 TCP 连接才会启用 tcp_nodelay */
  tcp_nodelay on;
  
  client_header_buffer_size 32k;
  large_client_header_buffers 4 32k;
  client_max_body_size 1024m;
  client_body_buffer_size 10m;
  
  #Gzip Compression
  gzip on;
  gzip_buffers 16 8k;
  gzip_comp_level 6;
  gzip_http_version 1.1;
  gzip_min_length 256;
  gzip_proxied any;
  gzip_vary on;
  gzip_types
    text/xml application/xml application/atom+xml application/rss+xml application/xhtml+xml image/svg+xml
    text/javascript application/javascript application/x-javascript
    text/x-json application/json application/x-web-app-manifest+json
    text/css text/plain text/x-component
    font/opentype application/x-font-ttf application/vnd.ms-fontobject
    image/x-icon;
  gzip_disable "MSIE [1-6]\.(?!.*SV1)";
  
  # Fastcgi
  fastcgi_connect_timeout 300;
  fastcgi_send_timeout 300;
  fastcgi_read_timeout 300;
  fastcgi_buffer_size 64k;
  fastcgi_buffers 4 64k;
  fastcgi_busy_buffers_size 128k;
  fastcgi_temp_file_write_size 128k;
  fastcgi_intercept_errors on;
  
}

```
## 常见问题汇总

1. nginx: [error] invalid PID number in nginx.pid 的解决办法

nginx 修改配置文件后，重启的时候出现了，这个提示。 nginx: [error] invalid PID number "" in "/tmp/nginx.pid" 。 意思是说 不能在文件/tmp/nginx.pid中找到有效的 PID(进程ID)

1.1 杀掉nginx主进程,然后重启

```shell
   # 重启前一定要先检查，配置文件是否正确，没有问题再重启
   nginx -t
   nginx: the configuration file /usr/local/nginx/conf/nginx.conf syntax is ok
   nginx: configuration file /usr/local/nginx/conf/nginx.conf test is successful
   
   # 关掉nginx 的所有进程
   killall nginx
   # 重新启动 nginx
```
1.2 把nginx的进程号重新写入 nginx.pid 中，然后正常重启

```shell
   # 首先找到nginx进程 pid
   ps aux | grep "nginx: master" | grep -v pts | awk '{print $2;}'
   
   # 或者直接写入
   # 需要注意的是， nginx.pid 的文件的路径，不同的配置，可能路径是不同的。 可以从 nginx.conf 的主配置文件中获得
   
   echo `ps aux | grep "nginx: master" | grep -v pts | awk '{print $2;}'` > /tmp/nginx.pid
   
   # 然后重启
   nginx -s reload

```
