## 安装
1. 添加Docker 安装包的仓库
   ```shell
   sudo yum install -y yum-utils

   # docker官方仓库
   sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
   # 阿里云仓库
   sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
   ```
2. 按照Docker版本排序，安装指定版本
   ```shell
   # 按照版本排序
   yum list docker-ce --showduplicates|sort -r

   # 选择指定版本安装
   yum install docker-ce-19.03.2-3.el7
   ```

## 配置
1. 修改Docker配置无需重启Docker守护进程即生效
   ```shell
   # 修改 /etc/docker/daemon.json 后 执行
   kill -SIGHUP $(pidof dockerd)
   ```
2. 重启守护进程，但不重启容器
   ```shell
    # 修改 /etc/docker/daemon.json
    { "live-restore": true }
   ```
## 特殊命令操作
1. 抓取容器网络请求包
   ```shell
   # 获取容器的进程PID
   docker inspect --format "{{.State.Pid}}" ${container_id/name}
   # 切换网络命名空间 PS : 退出使用exit 通过ifconfig 对比变化 多次执行需要退出多次
   nsenter -n -t ${container_id/name}
   # 使用tcpdump抓取网络请求包
   # 例如: tcpdump tcp -i eth1 port 6379
   ```
## Dockerfile
1. Dockerfile中 ENTRYPOINT/CMD 指定使用 shell 方式和exec方式时读取环境变量的区别
   ```shell
   shell 方式  只能读取到在 Dockerfile 中设置的环境变量, 无法读取通过-e指定但是没有在dockerfile中的环境变量
   exec 方式 不仅能读取 Dockerfile 中的环境变量, 还能读取不存在的通过-e指定的其他环境变量
   ```


## Docker Swarm
1. 创建overlay 网络
   ```shell
   docker network create --attachable -d overlay network_name --subnet=${subnet}
   ```

2. swarm集群需要开放的端口
   ```shell
   # TCP 2377 用于swarm集群
   # TCP/UDP 端口 4789 覆盖网络流量 容器间可以相互ping通
   # TCP/UDP 端口 7946 节点间通信(容器网络发现)
   iptables -I INPUT -p tcp --dport 2377 -j ACCEPT
   iptables -I INPUT -p tcp --dport 4789 -j ACCEPT
   iptables -I INPUT -p udp --dport 4789 -j ACCEPT
   iptables -I INPUT -p tcp --dport 7946 -j ACCEPT
   iptables -I INPUT -p udp --dport 7946 -j ACCEPT

   ```
3. overlay网络创建后,子节点无法从docker-compose 直接使用,可以手动创建一个容器指定该网络后,该网络才会显示在子节点的网络列表中,在无任何引用节点后又会消失
   ```shell
   sudo docker run -it -d  --network ${network} busybox
   ```
4. Error response from daemon: Could not attach to network mystack_default : context deadline exceeded
   ```shell
   docker node update --availability active nodeId
   ```
5. Swarm Node 标签操作
   ```shell
   # 更新 role 可以更换其他键 相同键仅能有一个值
   docker node update --label-add role=xxxx {node}
   
   # 移除 role 为删除的键
   docker node update --label-rm role {node}
   ```
## 常见问题
1. Docker服务安装后无法启动 Error starting daemon: Error initializing network controller: error obtaining controller instance: failed to create NAT chain: Iptables not found
   ```shell
   # docker 需要 iptables进行转发 安装iptables
   yum -y install iptables.service
   systemctl start iptables.service
   systemctl enable iptables.service
   ```
2. Docker swarm 集群强制退出导致 Error response from daemon: rpc error: code = Unknown desc = The swarm does not have a leader. It's possible that too few managers are online. Make sure more than half of the managers are online.
   ```shell
   docker swarm init --force-new-cluster
   ```
