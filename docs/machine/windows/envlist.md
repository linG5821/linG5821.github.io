## 日常软件
1. 微信

2. 向日葵

3. 腾讯会议

4. 7z(解压压缩)

5. IDM下载

6. 百度云

7. Chrome
      插件及浏览器数据通过账号同步

8. uTools
   插件:
   * 聚合翻译
   * emoji搜索
   * gitemoji
   * 密码管理
   * Mybatis参数自动拼接
   * maven仓库查询
   * 编码小助手
   * linux命令文档
   * json编辑器
   * 二维码小助手
   * 本地搜索

9. Typora

10. 翻墙配置

    * [v2rayN](https://github.com/2dust/v2rayN) 

    * SwitchProxy

      配置地址 https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo/OmegaOptions.bak

11. Windows Terminal

    * oh-my-posh 和 posh-git

      ``` shell
      code $PROFILE
      ## C:\Users\linG\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1
      
      ## 输入文件内容
      Import-Module posh-git
      oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH/ys.omp.json" | Invoke-Expression
      ```

    * 字体配置从百度云下载

12. Geek

13. PicGo(图床)

14. Fiddler(抓包工具) 选装

15. GPG软件 选装

16. TDEngineGUI(TD图形工具) 选装

17. Netlimiter (网络限速等) 选装 

18. OBS Studio(推流工具) 选装

19. Resilio Sync (文件同步) 选装
## 基础编程软件相关
1. git 

   * 秘钥生成与配置

2. Docker

   * 启用WSL支持

   * 配置镜像源

     ```
     "registry-mirrors": [
         "http://hub-mirror.c.163.com",
         "https://tbh19dnw.mirror.aliyuncs.com"
     ]
     ```

     

3. 开启Telnet客户端 ，linux 子系统，虚拟机平台功能

4. WSL

   * 安装 Ubuntu

   * 无法访问外网参考
   [https://github.com/microsoft/WSL/issues/5336#issuecomment-653881695](https://github.com/microsoft/WSL/issues/5336#issuecomment-653881695)

   * 升级wsl 到 wsl2

      ```
      ## 查看 wsl 版本 如果为 1 则升级
      wsl -l -v
      
      ## 下载 wsl 内核，参考 https://learn.microsoft.com/en-us/windows/wsl/install
      
      ## 设置版本
      wsl --set-version 分发版名称 版本号
      ```
      
      
      
   * 代理配置

      ```
      vim .bashrc
      
      #alias proxy="source /mnt/d/Dev/wslproxy/proxy.sh"
      . /mnt/d/Dev/wslproxy/proxy.sh set
      ```
      
   * 命令配置

      ```shell
      sudo ln -s /mnt/d/Dev/wslproxy/proxy.sh /usr/bin/proxy
      sudo ln -s /mnt/d/Dev/docker-login/docker-login.sh /usr/local/bin/docker-login
      sudo ln -s /data/laradock/laradock.sh /usr/local/bin/laradock
      ```

5. XShell7/XFtp7

   * 下载：最新版已经无打开窗口限制，直接官网下载即可

   * xshell 配置：从百度云获取

6. Navicat

7. Postman

8. RDM(Redis图形化工具) 可以用 [RedisInsight](https://redis.com/redis-enterprise/redis-insight/) 替代

9. Vscode(配置通过账号同步)

10. jadx

## Java相关
1. JDK8

2. Maven3

3. Tomcat9

4. IDEA

   * ja-netfilter

   * JVM参数

     ```
     -javaagent:D:\Dev\ja-netfilter\ja-netfilter.jar
     --add-opens=java.base/jdk.internal.org.objectweb.asm=ALL-UNNAMED
     --add-opens=java.base/jdk.internal.org.objectweb.asm.tree=ALL-UNNAMED
     ```
     
   * 插件:
     - 插件仓库: https://plugins.zhile.io
     - .ignore
     - Alibaba Cloud Toolkit
     - Alibaba Java Coding Guidelines
     - CamelCase
     - GenerateAllSetter
     - GsonFormatPlus
     - JRebel
     - Key Promoter X
     - MapStruct support
     - Maven Helper
     - MybatisX
     - RoboPOJOGenerator
     - Translation
     - Resource Bundle Editor

## 前端
1. 安装 fnm
```shell

winget install Schniz.fnm
Invoke-Item $profile #打开PS1文件添加下面的内容
```
2. 修改PS Profiile 文件`fnm env --use-on-cd --shell powershell | Out-String | Invoke-Expression`
3. 增加环境变量 FNM_DIR=D:\Dev\fnm-node
4. 安装需要的node版本：`fnm install 22`
5. 配置镜像源：`npm config set registry https://registry.npmmirror.com`
   

## python
1. python3