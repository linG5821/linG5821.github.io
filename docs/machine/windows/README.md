### Windows

#### 使用过程中遇到的问题及解决方案
1. Hyper-V 将动态端口中的几段范围的端口保留给自己使用,导致产生各种端口被占用的问题
2. Git配置代理
  * http/https代理
  ```
  # 注意将对应的代理地址及端口更换为自己对应的值
  HTTP 代理
    git config --global http.proxy "http://127.0.0.1:10809"
    git config --global https.proxy "http://127.0.0.1:10809"

  Socket5 代理
    git config --global http.proxy "socks5://127.0.0.1:10808"
    git config --global https.proxy "socks5://127.0.0.1:10808"
  ```
  * ssh代理
  ```
  # windows
  # 编辑文件地址 ~/.ssh/config
    Host github.com *.github.com
        User git
        Port 22
        Hostname %h
        IdentityFile ~\.ssh\id_rsa
        ProxyCommand connect -S 127.0.0.1:10808 %h %p
    
   # wsl
   # 编辑文件地址 ~/.ssh/config
   # wsl2 中有一个问题，这里wsl实际上是蹭用主机的代理，wsl2相比wsl1在网络上发生了变
   # 化，导致访问windows需要知道具体的IP，所以这里的<windows ip>应该更换为对应的主机#（windows）的IP地址，我更多情况下会将其设置为域名，然后只在windows上更改hosts文
   # 件并同步到wsl中即可，但是如果切换网络，切换wifi之后需要重新配置，参考过一些文章
   # 可以通过/etc/resolv.conf获取winip，实际测试并未成功，因为我的/etc/resolv.conf
   # 之前因为wsl2无法访问互联网，所以修改过其中的DNS值，并取消了自动生成的机制
    Host github.com *.github.com
        User git
        Port 22
        Hostname %h
        IdentityFile ~\.ssh\id_rsa
        ProxyCommand nc -v -x <windows ip>:10808 %h %p
  ```
3. 截取主机某个网卡的IP
``` 
# 可以将 select-string 后的关键字改成具体的网卡名称关键字
(ipconfig|select-string "无线" -context 1,4 | findStr "IPv4").Split(":")[-1]
```
4. python脚本获取主机IP
  * 方式一：（ 此方式可能获取到虚拟IP ）
    ```
    import socket
    hostname = socket.gethostname()
    ip = socket.gethostbyname(hostname)
    print(ip)
    ```
   * 方式二：
   ```
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
  