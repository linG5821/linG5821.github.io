## 安装
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
   ```
   # 查看是否显示版本信息
   docker-compose --version
   ```