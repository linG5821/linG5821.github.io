## SSL证书生成
```
# Centos 7
# 安装snapd (另一种包管理工具)
sudo yum install snapd
sudo systemctl enable --now snapd.socket
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot
sudo ln -s /var/lib/snapd/snap /snap

# 安装certbot
# snap 安装
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
# yum 安装
sudo yum install certbot
sudo yum install certbot python2-certbot-nginx

PS: 
错误: ImportError: 'pyOpenSSL' module missing required functionality. Try upgrading to v0.14 or newer.
执行
sudo pip uninstall requests
sudo pip uninstall urllib3
sudo yum remove python-urllib3
sudo yum remove python-requests
sudo yum install python-urllib3
sudo yum install python-requests
sudo yum install certbot

# 生成证书
sudo certbot certonly --nginx -d domain


# 不用CA的自签名证书
1. 生成私钥
openssl genrsa -out ssl.key 1024
2. 创建签名请求
openssl req -new -key ssl.key -out ssl.csr
3. 创建自签名证书
openssl x509 -req -in ssl.csr -signkey ssl.key -out ssl.crt
4. 一行命令版
openssl req -x509 -nodes -days 1024 -newkey rsa:4096 -keyout local.key -out local.crt

# 创建 根CA 及自签名证书

1. 生成CA根证书秘钥
openssl genrsa -out CA.key 2048
2. 生成CA根证书申请文件
openssl req -new -key CA.key -out CA.csr
3. 创建一个自当前日期起为期十年的根证书CA.crt：
openssl x509 -req -days 3650 -sha1 -extensions v3_ca -signkey CA.key -in CA.csr -out CA.crt 

4. 生成服务私钥
openssl genrsa -out server.key 2048 
5. 创建签名请求
openssl req -new -key server.key -out server.csr
6. 创建服务器证书
openssl x509 -req -days 3650 -sha1 -extensions v3_ca -CA CA.crt -CAkey CA.key -CAcreateserial -in server.csr -out server.crt
```