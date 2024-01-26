#!/bin/bash
## 不启用 networkingMode=mirrored 镜像网络时使用该方式
#hostip=$(cat /etc/resolv.conf | grep nameserver | awk '{ print $2 }')
## 启用镜像网络直接获取 WSLIP 就是 WINIP
hostip=$(hostname -I | awk '{print $1}')
wslip=$(hostname -I | awk '{print $1}')
http_port=10809
socket_port=10808


PROXY_HTTP="http://${hostip}:${http_port}"
PROXY_SOCKET="socks5://${hostip}:${socket_port}"

set_proxy(){
    export http_proxy="${PROXY_HTTP}"
    export HTTP_PROXY="${PROXY_HTTP}"
    export https_proxy="${PROXY_HTTP}"
    export HTTPS_PROXY="${PROXY_HTTP}"
    export SOCKET_PROXY="${PROXY_SOCKET}"
    export PROXY_HOST_IP="${hostip}"

    git config --global http.proxy "${PROXY_HTTP}"
    git config --global https.proxy "${PROXY_HTTP}"

    echo "${PROXY_HOST_IP} winip" >> /etc/hosts
}

unset_proxy(){
    unset http_proxy
    unset HTTP_PROXY
    unset https_proxy
    unset HTTPS_PROXY
    unset SOCKET_PROXY
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
