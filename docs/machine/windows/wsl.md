### WSL 常见问题汇总

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
  2. 退出 Docker Desktop, 并关停 WSL2 实例
  ```shell
  ## 关停 WSL2
  wsl --shutdown
  ```
  3. 命令行输入 diskpart, 进入 diskpart 工具
  ```cmd
  select vdisk file="C:\Users\<你的用户名>\AppData\Local\Docker\wsl\data\ext4.vhdx"
  attach vdisk readonly
  compact vdisk
  detach vdisk
  ```
  ![](https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo/20230519124624.png)

* WSL2 2.0.x 下内存回收和硬盘空闲空间回收

先前的 WSL 有着的内存泄露问题，目前在 `~/.wslconfig`内设置 `autoMemoryReclaim=gradual`` 可以解决问题，不过需要注意的是，设置了该选项之后不推荐启用 systemd 相关功能。

同时，可以设置 `sparseVhd=true`，之后新安装的发行版均会自动回收其虚拟硬盘文件的空闲空间。对于已经安装的发行版，可以使用 wsl --manage <Distro> --set-sparse <true/false> 为发行版的虚拟硬盘文件启用该功能。

```
[experimental]
autoMemoryReclaim=gradual # gradual/dropcache/disabled
sparseVhd=true
```

* WSL2.0 .wslconfig autoProxy 配置为 true 时会自动使用系统代理，导致的问题

wsl 任意分发版直接使用系统代理时，如果系统代理配置的是 127.0.0.1 的IP，WSL是无法访问，如果配置的是公网或者内网IP则可以。

当结合v2ray等代理工具使用时，使用其提供的自动代理设置功能同样会导致WSL自动配置 127.0.0.1 的代理IP，同样的使用docker 时 docker-desktop 分发版也会出现相同的问题，导致docker pull/push 无法拉取出现 `proxyconnect tcp: dial tcp 127.0.0.1:xxxx: connect: connection refused` 的错误。

解决方案一: 参照**WSL代理脚本** 在docker 和 默认的分发版 `~/.bashrc` 中都添加 `. /mnt/d/Dev/wslproxy/proxy.sh set`, 利用改脚本重设一下代理，在默认WSL当前会话生效，但是在Docker 的WSL分发版中无效的，推送拉取可能不会触发 ~/.bashrc 的加载，此时通过手动重置 docker 分发版的代理可以临时解除一下代理; 同样的此方法还可以设置在 `/etc/profile` 里

解决方案二: .wslconfig autoProxy 配置为 false 