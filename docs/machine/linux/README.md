## 基本命令

* 文件处理命令
* 权限管理命令
* 文件搜索命令
* 帮助命令
  ```shell
    man 命令或者配置文件 # 查看命令的描述 /选项 查看对应选项的含义
                     # 查看配置文件存放的信息以及文件的格式
    whatis 命令 # 查看命令的描述
    apropos 配置文件 # 查看配置文件的描述
    命令 --help 查看命令的帮助信息
    info 与man类似 浏览方式更便捷
    help # 查看shell内置命令帮助 例如 cd
  ```
* 用户管理命令
  ```shell
    useradd 用户名  #添加用户
    passwd  用户名  #设置密码
    who    #查看登陆用户信息
    w      #查看登陆用户信息(稍微详细)
    uptime #查看当前机器运行时间(load average 代表1, 5, 15分钟的负载)

  ```
* 压缩解压命令
  ```shell
    # gzip (只能压缩文件)
    gzip 文件名  #压缩
    gunzip 文件名 / gzip -d 文件名 #解压缩

    # tar
    -c  打包
    -v  显示详细信息
    -f  指定文件名
    -z  打包同时压缩,使用gzip格式压缩
    -f  打包同时压缩,使用bz2格式压缩
    -x  解包

    # 常用组合 
    tar -zcvf 压缩后文件名 压缩文件/目录
    tar -zxvf 压缩文件名 -C 目标目录(不指定-C默认解压到当前目录)

    # zip
    zip [-r] [压缩后文件名] [压缩文件] # -r 可以压缩目录
    unzip [压缩文件] # 解压缩 目录已经存在可以使用 -o 覆盖不询问

    # bzip2
    # gizp 升级版 压缩比高 -k 参数可以保留源文件 压缩格式bz2
    bzip2 文件名 # 压缩 -k 参数保留源文件
    bunzip2 文件名 # 解压缩 -k 保留压缩包
  ```
* 网络命令
  ```shell
    write [用户名] # 给指定在线用户发送信息
    wall [消息内容] # 给所有在线用户发送广播
    ping [IP地址] # 测试网络连通性
        -c 指定ping的次数
    ifconfig #查看和设置网络信息
        [网卡] [IP] 设置IP地址
    # 网络信息配置文件
    /etc/sysconfig/network-scripts/ifcfg-eth0 # 配置IP地址等信息
    /etc/sysconfig/network # 配置hostname
    /etc/resolv.conf # 修改DNS服务器配置

    mail [用户名] # 给指定用户发送邮件
    last # 列出目前及历史用户登录的信息
    lastlog # 查看用户的最后一次的登录信息
    traceroute [域名/IP] # 追踪数据包的路径
    netstat  # 查看网络状态
        -t 查询TCP网络信息
        -u 查询UDP网络信息
        -l 监听
        -r 路由
        -n 显示IP地址和端口号
    # 范例
    netstat -tlun # 查看当前计算机开了哪些端口
    netstat -an # 查看所有的监听信息
    netstat -rn # 查看路由表
  ```
* 挂载/卸载命令
  ```shell
    # 挂载
    mount -t [文件系统] [设备名称] [挂载目录]

    # 卸载
    umount [设备名称]
  ```
* 关机/重启命令
  ```shell
  shutdown 
   -c 取消前一个关机命令
   -h 关机 [时间]
   -r 重启 [时间]
  ```

## 常用命令收集
1. 根据端口号批量kill
   ```shell
   ps -ef | grep {port} | cut -c 9-15 | xargs kill -9
   ps aux|grep process_name |grep -v grep|awk '{print $2}'|xargs kill -9 
   ```
2. nohup 运行jar程序时指定jar包的路径为绝对路径，这样jps可以显示正确的java项目的名称，使用相对路径只会显示jar
   ```shell
   nohup java -jar /home/xxx.jar > /dev/null 2>&1 &
   ```
3. 获取上一条命令的执行结果 $?
4. Redis删除统配符
   ```shell
   redis-cli -h {host} -a crs-2xexfxav:Frezzen2sweng keys "xxx*" | xargs redis-cli -h {host} -a crs-2xexfxav:Frezzen2sweng del
   ```
5. 获取当前进程的线程
   ```shell
   ps p ${pid} -L -o pcpu,pmem,pid,tid,time,tname,cmd // 线程明细
   ps p ${pid} -L -o pcpu,pmem,pid,tid,time,tname,cmd | wc -l // 线程明细
   ```
6. 查看本机的网络连接数
   ```shell
   ss -s && free -g
   ```
7. 查看CPU核数及序号
   ```shell
   cat /proc/cpuinfo | grep processor
   ```
8. 获取占用磁盘最大的前几个
   ```shell
   du -h -BM {file_path} | sort -nr |head -n3
   ```