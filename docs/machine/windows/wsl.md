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