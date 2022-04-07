
## Powershell
1. 执行多个命令使用 `;` 分割  linux 中使用 &&
2. 设置环境变量使用 $env:KEY="VALUE" 而 CMD 使用 set KEY=VALUE 

## Win下GPG的使用

1. 安装Gpg4win, 下载地址: [https://gpg4win.org/download.html](https://gpg4win.org/download.html)

2. 修改Git配置使用安装的gpg

   ```shell
   git config --global gpg.program "yourpath\GnuPG\bin\gpg.exe"
   # 显示配置
   git config --global gpg.program
   ```

   

3. 创建与设置秘钥

   ```shell
   gpg --full-generate-key
   
   # 选择加密方式 选择默认的1即可，表示加密和签名均使用 RSA 算法
   Please select what kind of key you want:
      (1) RSA and RSA (default)
      (2) DSA and Elgamal
      (3) DSA (sign only)
      (4) RSA (sign only)
     (14) Existing key from card
   Your selection? 1
   # 最长为4096位，设置为4096位即可
   RSA keys may be between 1024 and 4096 bits long.
   What keysize do you want? (3072) 4096
   
   # 设置密钥有效期 选择0为永久有效
   Please specify how long the key should be valid.
            0 = key does not expire
         <n>  = key expires in n days
         <n>w = key expires in n weeks
         <n>m = key expires in n months
         <n>y = key expires in n years
   Key is valid for? (0)
   
   # 完成上述设置后，会要求确认 确认即可
   Is this correct? (y/N)y
   
   # 设置用户ID 邮箱  备注等信息  还需要输入密码
   GnuPG needs to construct a user ID to identify your key.
   Real name:
   Email address: 
   
   # 显示秘钥列表 此例子中GPG 密钥 ID 是 3AA5C34371567BD2
   gpg --list-secret-keys --keyid-format=long
   or
   gpg -K
   /Users/hubot/.gnupg/secring.gpg
   ------------------------------------
   sec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]
   uid                          Hubot 
   ssb   4096R/42B317FD4BA89E7A 2016-03-10
   
   # 输出 秘钥内容  
   gpg --armor --export 3AA5C34371567BD2
   # 输出秘钥到文件
   gpg --armor --output public-key.txt --export 3AA5C34371567BD2
   
   
   # 生成吊销证书(推荐生成, gpg默认会生成, 位置: C:\Users\xxx\AppData\Roaming\gnupg\openpgp-revocs.d\keyid.rev)
   # 如果要使用需要去除 "-----BEGIN PGP PUBLIC KEY BLOCK-----" 前的 ":"
   gpg --gen-revoke 3AA5C34371567BD2
   # 生成吊销证书的交互, 最后复制吊销内容到文件
   Create a revocation certificate for this key? (y/N) y
   Please select the reason for the revocation:
     0 = No reason specified
     1 = Key has been compromised
     2 = Key is superseded
     3 = Key is no longer used
     Q = Cancel
   (Probably you want to select 1 here)
   Your decision? 0
   Enter an optional description; end it with an empty line:
   > To prevent leakage
   Reason for revocation: No reason specified
   To prevent leakage
   Is this okay? (y/N)y
   
   # 导出
   # 导出公钥 ASCII 形式
   gpg --armor --output keyid.gpg.pub --export keyid
   
   # 导出私钥 ASCII 形式
   gpg --armor --output keyid.gpg --export-secret-keys keyid

   # 列出所有秘钥
   gpg --list-keys

   # 导入吊销证书(导入后悔直接吊销对应的秘钥), 如果公钥已经发布还需要重新发布一下才能吊销已经上传的秘钥
   gpg --import /path/xxxx.rev
   ```

4. GPG秘钥的使用
    * 配置到github
        1. 复制公钥内容到 github 添加 GPG Key
        2. 设置 git 配置

            ```shell
            git config --global user.signingkey 3AA5C34371567BD2
            # 确认配置
            git config  -l
            # 配置全局提交使用该秘钥
            git config --global commit.gpgsign true

            # 单次提交中签名
            git commit -S -m "..."

            ```

    * 用于maven发布到中央仓库
        1. 发布公钥到公钥服务器

            ```shell
            # 目前支持如下如下服务器
            # keyserver.ubuntu.com
            # keys.openpgp.org
            # pgp.mit.edu
            gpg --keyserver hkp://keyserver.ubuntu.com:80 --send-keys 3AA5C34371567BD2
            # 验证
            gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 3AA5C34371567BD2
            
            ```
        2. 本地发布 如果秘钥存在密码 需要正在settings文件中添加如下内容 可以通过 maven-gpg-plugin 插件的配置修改对应的id 等
        
            ```xml
            <server>
              <id>gpg.passphrase</id>
              <passphrase>${your passphrase}</passphrase>
            </server>
            ```
        3. 配合github action 进行自动化发布 参考[https://github.com/linG5821/mtime.git](https://github.com/linG5821/mtime.git)

## 问题杂项汇总及解决方案
1. Hyper-V 将动态端口中的几段范围的端口保留给自己使用,导致产生各种端口被占用的问题

    ```shell
    # 查看当前动态端口的范围
    netsh int ipv4 show dynamicport tcp
    # 查看tcp ipv4端口排除范围（被系统或者我们自己保留的端口）
    netsh int ipv4 show excludedport tcp
    # 管理员身份打开 powershell，然后设置 tcp ipv4 的动态端口范围为 49152 开始的 16384 个端口，也就是 49152~65535 (这个是windows默认的)
    netsh int ipv4 set dynamicport tcp start=49152 num=16384
    ```
     
2. 截取主机某个网卡的IP

    ``` 
    # 可以将 select-string 后的关键字改成具体的网卡名称关键字
    (ipconfig|select-string "无线" -context 1,4 | findStr "IPv4").Split(":")[-1]
    ```
3. python脚本获取主机IP
    * 方式一: (此方式可能获取到虚拟IP)

      ```python
      import socket
      hostname = socket.gethostname()
      ip = socket.gethostbyname(hostname)
      print(ip)
      ```
    * 方式二:

      ```python
      import socket

      def get_host_ip():
            """
            查询本机ip地址
            :return: ip
            """
            try:
                s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
                s.connect(('8.8.8.8', 80))
                ip = s.getsockname()[0]
            finally:
                s.close()

            return ip

      if __name__ == '__main__':
            print(get_host_ip())
      ```