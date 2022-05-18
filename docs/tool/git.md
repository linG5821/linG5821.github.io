## 命令速查表

![](https://ling-root-bucket.oss-cn-hangzhou.aliyuncs.com/picgo/011500266295799.jpg)

## Git配置代理

### http/https代理

  ```shell
  # 注意将对应的代理地址及端口更换为自己对应的值
  HTTP 代理
  git config --global http.proxy "http://127.0.0.1:10809"
  git config --global https.proxy "http://127.0.0.1:10809"

  Socket5 代理
  git config --global http.proxy "socks5://127.0.0.1:10808"
  git config --global https.proxy "socks5://127.0.0.1:10808"
  ```

### ssh代理

  - windows
  
    ```
    # 编辑文件地址 ~/.ssh/config
    # connect 命令已经内置 connect 命令, 需要配置路径(xx:\xxx\Git\mingw64\bin)到环境变量才可以使用
    # 如果配置不同的域名地址, 或某个地址别名 Hostname 应该为原地址而不是别名 例如: Host 使用 ling5821.github.com 作为 github.com 的别名  Hostname 应# 该为 github.com
    Host github.com *.github.com
        User git
        Port 22
        Hostname %h
        IdentityFile ~/.ssh/id_rsa
        ProxyCommand connect -S 127.0.0.1:10808 %h %p
    ```

  - WSL2

    ~~wsl2 中有一个问题，这里 wsl2 实际上是蹭用主机的代理，wsl2 相比 wsl1 在网络上发生了变化，导致访问windows需要知道具体的IP，所以这里的 winip 应该更换为对应的主机 (windows) 的IP地址，我更多情况下会将其设置为域名，然后只在 windows 上更改 hosts 文件并同步到wsl中即可，但是如果切换网络，切换 wifi 之后需要重新配置，参考过一些文章可以通过 `/etc/resolv.conf` 获取 winip ，实际测试并未成功，因为我的 `/etc/resolv.conf` 之前因为 wsl2 无法访问互联网，所以修改过其中的 DNS 值，并取消了自动生成的机制~~<br/>
    
    如果不自定义 `/etc/resolv.conf` 可以通过 `cat /etc/resolv.conf | grep nameserver | awk '{ print $2 }'` 获取宿主机IP, wsl2 默认配置在/etc/resolv.conf文件中的是一个代理,所以如果 wsl2 镜像源无法使用或者无法访问外网, 我们只需要去更改主机的DNS, 而不必去修改 /etc/resolv.conf 文件

    ```
    # 编辑文件地址 ~/.ssh/config
    Host github.com *.github.com
        User git
        Port 22
        Hostname %h
        IdentityFile ~/.ssh/id_rsa
        ProxyCommand nc -v -x winip:10808 %h %p
    ```
### 代理设置脚本

在 `~/.bashrc` 中添加:

```shell
alias proxy="source /path/to/proxy.sh"
. /path/to/proxy.sh set
```

脚本内容如下:

```shell
#!/bin/bash
hostip=$(cat /etc/resolv.conf | grep nameserver | awk '{ print $2 }')
wslip=$(hostname -I | awk '{print $1}')
http_port=10809
socket_port=10808


PROXY_HTTP="http://${hostip}:${http_port}"
PROXY_SOCKET="socks5://${hostip}:${socket_port}"

set_proxy(){
    #export http_proxy="${PROXY_HTTP}"
    #export HTTP_PROXY="${PROXY_HTTP}"
    #export https_proxy="${PROXY_HTTP}"
    #export HTTPS_PROXY="${PROXY_HTTP}"
    #export SOCKET_PROXY="${PROXY_SOCKET}"
    export PROXY_HOST_IP="${hostip}"

    git config --global http.proxy "${PROXY_HTTP}"
    git config --global https.proxy "${PROXY_HTTP}"

    echo "${PROXY_HOST_IP} winip" >> /etc/hosts
}

unset_proxy(){
    #unset http_proxy
    #unset HTTP_PROXY
    #unset https_proxy
    #unset HTTPS_PROXY
    #unset SOCKET_PROXY
    unset PROXY_HOST_IP

    git config --global --unset http.proxy
    git config --global --unset https.proxy

    sed -i '/winip/d' /etc/hosts
}

test_setting(){
    echo "Host ip:" ${hostip}
    echo "WSL ip:" ${wslip}
    echo "Current proxy: http: " $PROXY_HTTP "socket: " $PROXY_SOCKET
}

if [ "$1" = "set" ]
then
    set_proxy

elif [ "$1" = "unset" ]
then
    unset_proxy

elif [ "$1" = "test" ]
then
    test_setting
else
    echo "Unsupported arguments."
fi

```

## 常见问题
1. 没有共同祖先的分支进行pull操作时需要添加--allow-unrelated-histories,也就是当本地仓库已经存在，而又重新创建一个新的远程仓库，当该远程仓库已经有提交历史时，这个仓库和本地仓库不是同源的分支，再pull是被拒绝的
2. git子模块批量添加远程仓库

   ```shell
   #!/usr/bin/env bash
   remote_name=$1
   remote_url=$2

   modules=$(git submodule  | awk '{print $2 }')
   for module in ${modules[@]};
   do
    cd ./$module
    url="$remote_url/$module.git"
    if [[ $module ==  jetlinks-manager* ]]; then
        url="$remote_url/"$(echo $module | awk -F '/' '{print $2}')".git"
    fi
    echo $url
    git remote add $remote_name $url
    cd ..
    if [[ $module ==  jetlinks-manager* ]]; then
        cd ..
    fi
   done
   ```
3. git clone 代码自动转换为CRLF 

   ```shell
   # 全局关闭Git自动转换功能
   git config --global core.autocrlf false
   ```