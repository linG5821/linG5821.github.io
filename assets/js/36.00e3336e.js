(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{309:function(s,n,e){"use strict";e.r(n);var t=e(10),r=Object(t.a)({},(function(){var s=this._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[s("h2",{attrs:{id:"ssl证书生成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssl证书生成"}},[this._v("#")]),this._v(" SSL证书生成")]),this._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("# Centos 7\n# 安装snapd (另一种包管理工具)\nsudo yum install snapd\nsudo systemctl enable --now snapd.socket\nsudo snap install core; sudo snap refresh core\nsudo snap install --classic certbot\nsudo ln -s /var/lib/snapd/snap /snap\n\n# 安装certbot\n# snap 安装\nsudo snap install --classic certbot\nsudo ln -s /snap/bin/certbot /usr/bin/certbot\n# yum 安装\nsudo yum install certbot\nsudo yum install certbot python2-certbot-nginx\n\nPS: \n错误: ImportError: 'pyOpenSSL' module missing required functionality. Try upgrading to v0.14 or newer.\n执行\nsudo pip uninstall requests\nsudo pip uninstall urllib3\nsudo yum remove python-urllib3\nsudo yum remove python-requests\nsudo yum install python-urllib3\nsudo yum install python-requests\nsudo yum install certbot\n\n# 生成证书\nsudo certbot certonly --nginx -d domain\n\n\n# 不用CA的自签名证书\n1. 生成私钥\nopenssl genrsa -out ssl.key 1024\n2. 创建签名请求\nopenssl req -new -key ssl.key -out ssl.csr\n3. 创建自签名证书\nopenssl x509 -req -in ssl.csr -signkey ssl.key -out ssl.crt\n4. 一行命令版\nopenssl req -x509 -nodes -days 1024 -newkey rsa:4096 -keyout local.key -out local.crt\n\n# 创建 根CA 及自签名证书\n\n1. 生成CA根证书秘钥\nopenssl genrsa -out CA.key 2048\n2. 生成CA根证书申请文件\nopenssl req -new -key CA.key -out CA.csr\n3. 创建一个自当前日期起为期十年的根证书CA.crt：\nopenssl x509 -req -days 3650 -sha1 -extensions v3_ca -signkey CA.key -in CA.csr -out CA.crt \n\n4. 生成服务私钥\nopenssl genrsa -out server.key 2048 \n5. 创建签名请求\nopenssl req -new -key server.key -out server.csr\n6. 创建服务器证书\nopenssl x509 -req -days 3650 -sha1 -extensions v3_ca -CA CA.crt -CAkey CA.key -CAcreateserial -in server.csr -out server.crt\n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);