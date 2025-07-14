## Docker安装
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

## Docker配置
1. 重启守护进程，但不重启容器(无法在docker swarm集群下使用)

   ```shell
    # 修改 /etc/docker/daemon.json
    { "live-restore": true }
    # 更新配置
    kill -SIGHUP $(pidof dockerd)
    # 检查是否配置成功
    docker info | grep -i live
    # 重启docker 不会重启容器
    systemctl restart docker
   ```

2. Docker 容器配置重新加载

   ```shell
   docker kill -s HUP {container-name}
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

## Docker Compose安装
1. 下载docker-compose 文件

   ```shell
   # 最新版本请参考 https://docs.docker.com/compose/install/
   sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   ```
2. 修改二进制执行权限

   ```shell
   sudo chmod +x /usr/local/bin/docker-compose
   ```
3. 测试安装

   ```shell
   # 查看是否显示版本信息
   docker-compose --version
   ```
## Docker Stack 使用

1. 部署命令 `docker stack deploy -c xxxx.yml {stack_name} --with-registry-auth` 当拉取镜像需要权限时需要添加 `--with-registry-auth`
2. 部署模式 deploy.mode
   * 部署模式分为 `global` 和  `replicated`(默认)
   * `global` 会根据部署策略在每一个节点上都部署一个服务, 没有预先指定数量, 那么每次新增节点服务也会被分配到新的节点
   * `replicated` 可以指定相同服务的数量, 并根据策略分发在符合条件的机器上
3. 端口发布模式 ports.mode
   * 端口发布模式分为 `host` 和  `ingress`(默认)
   * `host` 会把每一个部署了服务的节点的端口都映射出来, 所以当端口发布模式为 `host` 时 指定 `replicas` 大于 swarm集群节点数量时只能启动 集群节点数量的服务节点, 因为一个集群节点只能映射一个端口
   * `ingress` 会把swarm 集群内所有节点的端口都映射, 即使这个机器上没有部署该服务
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

3. Java 程序无法读取到外部环境变量, 例如： `spring.profiles.active`, 原因是部分基础镜像alpine, busybox不支持含有点的环境变量，Posix的命名规范是不能含有点号的， sh -c 方式运行的容器不支持传递含点的环境变量，具体参考 https://github.com/docker-library/docs/pull/1222/commits/f2854b0a019519880f56c2d5226c0121dba13d9c， JDK 镜像从 openjdk:8u131-jre-alpine之后就采取这种处理方式了。
   > 解决方式使用 bash -c 运行，或者不传递带有点的环境变量

## 一个Dockefile示例

```shell
## entrypoint.sh
## java17 才支持该参数 -r

#!/bin/sh
nohup jstatd ${JSTATD_ARGS} > jstatd.log 2>&1 &
java  ${HEAP_OPTS} ${JAVA_OPTS} ${GC_OPTS} ${JMX_OPTS} -jar /opt/app/${JAR_FILE}
```

```dockerfile
FROM eclipse-temurin:17

ENV RMI_HOSTNAME="一个IP"
ENV RMI_PORT=29010

ENV HEAP_OPTS="-Xms4G -Xmx4G"

ENV JAVA_OPTS="-Duser.timezone=GMT+08 \
-Djava.security.egd=file:/dev/./urandom \
--add-opens=java.base/sun.net=ALL-UNNAMED \
--add-opens=java.base/java.lang.invoke=ALL-UNNAMED \
-Xlog:gc*=debug:file=./data/log/gc/gc%t.log:utctime,level,tags:filecount=50,filesize=100M"

ENV GC_OPTS="-XX:+UnlockExperimentalVMOptions \
-XX:+UseG1GC \
-XX:+UseStringDeduplication \
-XX:G1NewSizePercent=20 \
-XX:G1MaxNewSizePercent=40 \
-XX:ConcGCThreads=8"

ENV JMX_OPTS="-Dcom.sun.management.jmxremote \
-Dcom.sun.management.jmxremote.port=${RMI_PORT} \
-Dcom.sun.management.jmxremote.rmi.port=${RMI_PORT} \
-Dcom.sun.management.jmxremote.authenticate=false \
-Dcom.sun.management.jmxremote.ssl=false \
-Djava.rmi.server.hostname=${RMI_HOSTNAME}"


ENV TZ=Asia/Shanghai

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && \
    echo $TZ > /etc/timezone && \
    sed -i 's/archive.ubuntu.com/mirrors.aliyun.com/g' /etc/apt/sources.list && \
    apt-get update && apt-get install -y telnet && \
    mkdir -p /opt/app/data/log/gc

ENV JSTATD_PORT=29011
ENV JSTATD_RMI_PORT=29012

ENV JSTATD_ARGS="-J-Djava.security.policy=/opt/jstatd/jstatd.all.policy -J-Djava.rmi.server.hostname=${RMI_HOSTNAME} -J-Djava.rmi.server.logCalls=true -p ${JSTATD_PORT} -r ${JSTATD_RMI_PORT}"

RUN mkdir -p /opt/jstatd && \
    echo 'grant codebase "jrt:/jdk.jstatd" {\n  permission java.security.AllPermission;\n};\n grant codebase "jrt:/jdk.internal.jvmstat" {\n  permission java.security.AllPermission;\n};' > /opt/jstatd/jstatd.all.policy

ARG JAR_FILE
ENV JAR_FILE=${JAR_FILE}

COPY ./entrypoint.sh /opt/app/entrypoint.sh
COPY target/${JAR_FILE} /opt/app/${JAR_FILE}

WORKDIR /opt/app

VOLUME /opt/app/data

EXPOSE ${RMI_PORT} ${JSTATD_PORT} ${JSTATD_RMI_PORT}
ENTRYPOINT ["bash", "/opt/entrypoint.sh"]

```
