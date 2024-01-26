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