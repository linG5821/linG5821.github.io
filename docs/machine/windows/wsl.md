### WSL 常见问题汇总

* 关于适用于Windows的Liunx子系统功能开关

  WSL1 需要开启该功能
  ```powershell
  Dism.exe /Online /Enable-Feature /FeatureName:Microsoft-Windows-Subsystem-Linux /All /Norestart
  ```

  WSL2 不需要开启该功能, 直接执行安装好了
  ```powershell
  wsl.exe --install -d <Distribution Name>
  ```

* docker 启动 es 出现 `max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]`

  通常的做法
  
  ```shell
  vim /etc/sysctl.conf
  增加 vm.max_map_count=262144
  sysctl -p
  ```
  以上方法在 WSL 中如果重启就会失效，在 WSL 请使用以下方法

  ```conf
  # 修改或添加 %userprofile%/.wslconfig
  [wsl2]
  kernelCommandLine = "sysctl.vm.max_map_count=262144"
  ```

* WSL2 Docker释放磁盘空间
  > 参考 https://github.com/microsoft/WSL/issues/4699#issuecomment-627133168

  1. 删除Docker中的无用镜像
  ```shell
  docker system prune
  ```
  1. 退出 Docker Desktop, 并关停 WSL2 实例
  ```shell
  ## 关停 WSL2
  wsl --shutdown
  ```
  1. 命令行输入 diskpart, 进入 diskpart 工具
  ```cmd
  select vdisk file="C:\Users\<你的用户名>\AppData\Local\Docker\wsl\data\ext4.vhdx"
  attach vdisk readonly
  compact vdisk
  detach vdisk
  # 注意: 如果 .wslconfig 设置 sparseVhd=true, 导致 vhdx 文件变为稀疏文件，attach 会报错，通过如下命令设置，需要确保磁盘有足够的空间
  fsutil sparse setflag "C:\Users\lsj\AppData\Local\Docker\wsl\disk\docker_data.vhdx" 0
  ```
  ![](https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo/20230519124624.png)
  
* WSL2 2.0.x 下内存回收和硬盘空闲空间回收

  先前的 WSL 有着的内存泄露问题，目前在 `~/.wslconfig`内设置 `autoMemoryReclaim=gradual`` 可以解决问题，不过需要注意的是，设置了该选项之后不推荐启用 systemd 相关功能。`

  同时，可以设置 `sparseVhd=true`，之后新安装的发行版均会自动回收其虚拟硬盘文件的空闲空间。对于已经安装的发行版，可以使用 `wsl --manage <Distro> --set-sparse <true/false>` 为发行版的虚拟硬盘文件启用该功能。

  ```
  [experimental]
  autoMemoryReclaim=gradual # gradual/dropcache/disabled
  sparseVhd=true
  ```

  

* WSL2.0 .wslconfig autoProxy 配置为 true 时会自动使用系统代理，导致的问题

​	wsl 任意分发版直接使用系统代理时，如果系统代理配置的是 127.0.0.1 的IP，WSL是无法访问，如果配置的是公网或者内网IP则可以。

​	当结合v2ray等代理工具使用时，使用其提供的自动代理设置功能同样会导致WSL自动配置 127.0.0.1 的代理IP，同样的使用docker 时 docker-desktop 分发版	也会出现相同的问题，导致docker pull/push 无法拉取出现 `proxyconnect tcp: dial tcp 127.0.0.1:xxxx: connect: connection refused` 的错误。

​	解决方案一: 参照**WSL代理脚本** 在docker 和 默认的分发版 `~/.bashrc` 中都添加 `. /mnt/d/Dev/wslproxy/proxy.sh set`, 利用改脚本重设一下代理，在默认	WSL当前会话生效，但是在Docker 的WSL分发版中无效的，推送拉取可能不会触发 ~/.bashrc 的加载，此时通过手动重置 docker 分发版的代理可以临时解	除一下代理; 同样的此方法还可以设置在 `/etc/profile` 里

​	解决方案二: .wslconfig autoProxy 配置为 false 

 解决方案三: WSL网络模式使用 Mirrored, 并且设置 experimental 的 hostAddressLoopback 为 true，但是也有可能是BUG被修复了，之前在 docker docker-desktop 分发中无法通过 127.0.0.1:xxxx 导致代理无法连接，理论上 Mirrored 模式网络可以实现 windows 和 WSL 通过 localhost/127.0.0.1 互相访问


* Windows 开启 Tun 模式，WSL 采用Mirrored 网络模式，通过 TUN 代理上网，无需配置 PROXY 配置，但是出现 ping 可以通，curl 时钟无法访问超时的问题

  解决方案：查看TUN 模式配置的 MTU，默认为 9000， WSL2 默认为 1500，修改 TUN 模式配置改为 1500 


* 升级WSL ubuntu 的大版本
  
  ```shell
  # 可能会提示
  # Checking for a new Ubuntu release
  # Please install all available updates for your release before upgrading.
  # 先执行 sudo apt upgrade
  sudo do-release-upgrade
  
  #########
  # 如果出现如下错误 error: cannot list snaps: cannot communicate with server: Get "http://localhost/v2/snaps": dial unix /run/snapd.socket: connect: no such file or directory
  
  sudo nano /etc/wsl.conf
  # 添加
  [boot]
  systemd=true
  # 保存退出 Ctrl+O，Enter，然后 Ctrl+X
  wsl --shutdown
  
  # 查看状态
  systemctl status snapd 
  
  # 如果未正常运行执行如下内容
  # sudo systemctl unmask snapd.service
  # sudo systemctl enable snapd.service
  # sudo systemctl start snapd.service
  
  # 如果无法启动重装
  # sudo apt autoremove --purge snapd
  # sudo apt install snapd
  ```

* WSL 安装 Linux 内核headers

1. 安装必要依赖
   ```shell
   sudo apt update
   sudo apt install build-essential flex bison libssl-dev libelf-dev bc -y
   ```

2. 下载内核源码

   ```shell
   uname -r
   # 6.6.87.2
   sudo wget https://github.com/microsoft/WSL2-Linux-Kernel/archive/refs/tags/linux-msft-wsl-6.6.87.2.tar.gz
   sudo tar -zxvf linux-msft-wsl-6.6.87.2.tar.gz
   ```

3. 配置和准备 Headers
   ```shell
   cd linux-msft-wsl-6.6.87.2
   # 复制当前的内核配置
   sudo zcat /proc/config.gz > .config
   # 遇到问题一路回车
   make oldconfig
   make prepare
   make modules_prepare
   ```

4. 安装 Headers

   ```shell
   sudo make headers_install INSTALL_HDR_PATH=/usr/src/linux-headers-$(uname -r)
   ```

5.  建立软链接（让 DKMS 能找到）

   ```shell
   sudo ln -s /usr/src/linux-headers-$(uname -r) /lib/modules/$(uname -r)/build
   ```

   