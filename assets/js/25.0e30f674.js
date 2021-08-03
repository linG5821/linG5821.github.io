(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{392:function(t,s,n){"use strict";n.r(s);var a=n(25),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"powershell"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#powershell"}},[t._v("#")]),t._v(" Powershell")]),t._v(" "),n("ol",[n("li",[t._v("执行多个命令使用 "),n("code",[t._v(";")]),t._v(" 分割  linux 中使用 &&")]),t._v(" "),n("li",[t._v('设置环境变量使用 $env:KEY="VALUE" 而 CMD 使用 set KEY=VALUE')])]),t._v(" "),n("h2",{attrs:{id:"win下gpg的使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#win下gpg的使用"}},[t._v("#")]),t._v(" Win下GPG的使用")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("安装Gpg4win, 下载地址: "),n("a",{attrs:{href:"https://gpg4win.org/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gpg4win.org/download.html"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[t._v("修改Git配置使用安装的gpg")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global gpg.program "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yourpath\\GnuPG'),n("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[t._v("\\b")]),t._v('in\\gpg.exe"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示配置")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global gpg.program\n")])])])]),t._v(" "),n("li",[n("p",[t._v("创建与设置秘钥")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("gpg --full-generate-key\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选择加密方式 选择默认的1即可，表示加密和签名均使用 RSA 算法")]),t._v("\nPlease "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" what kind of key you want:\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" RSA and RSA "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" DSA and Elgamal\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" DSA "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sign only"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" RSA "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sign only"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Existing key from card\nYour selection? "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最长为4096位，设置为4096位即可")]),t._v("\nRSA keys may be between "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v(" and "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v(" bits long.\nWhat keysize "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" you want? "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3072")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置密钥有效期 选择0为永久有效")]),t._v("\nPlease specify how long the key should be valid.\n         "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" key does not expire\n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" key expires "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" n days\n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("w "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" key expires "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" n weeks\n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("m "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" key expires "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" n months\n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" key expires "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" n years\nKey is valid for? "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 完成上述设置后，会要求确认 确认即可")]),t._v("\nIs this correct? "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y/N"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("y\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置用户ID 邮箱  备注等信息  还需要输入密码")]),t._v("\nGnuPG needs to construct a user ID to identify your key.\nReal name:\nEmail address: \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示秘钥列表 此例子中GPG 密钥 ID 是 3AA5C34371567BD2")]),t._v("\ngpg --list-secret-keys --keyid-format"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("long\nor\ngpg -K\n/Users/hubot/.gnupg/secring.gpg\n------------------------------------\nsec   4096R/3AA5C34371567BD2 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2016")]),t._v("-03-10 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("expires: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v("-03-10"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nuid                          Hubot \nssb   4096R/42B317FD4BA89E7A "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2016")]),t._v("-03-10\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输出 秘钥内容  ")]),t._v("\ngpg --armor --export 3AA5C34371567BD2\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输出秘钥到文件")]),t._v("\ngpg --armor --output public-key.txt --export 3AA5C34371567BD2\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成吊销证书(推荐生成, gpg默认会生成, 位置: C:\\Users\\xxx\\AppData\\Roaming\\gnupg\\openpgp-revocs.d\\keyid.rev)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 如果要使用需要去除 "-----BEGIN PGP PUBLIC KEY BLOCK-----" 前的 ":"')]),t._v("\ngpg --gen-revoke 3AA5C34371567BD2\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成吊销证书的交互, 最后复制吊销内容到文件")]),t._v("\nCreate a revocation certificate "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" this key? "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y/N"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" y\nPlease "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" the reason "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the revocation:\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" No reason specified\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Key has been compromised\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Key is superseded\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Key is no longer used\n  Q "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Cancel\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Probably you want to "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" here"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nYour decision? "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nEnter an optional description"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" end it with an empty line:\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" To prevent leakage\nReason "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" revocation: No reason specified\nTo prevent leakage\nIs this okay? "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y/N"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("y\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导出")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导出公钥 ASCII 形式")]),t._v("\ngpg --armor --output keyid.gpg.pub --export keyid\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导出私钥 ASCII 形式")]),t._v("\ngpg --armor --output keyid.gpg --export-secret-keys keyid\n")])])])]),t._v(" "),n("li",[n("p",[t._v("GPG秘钥的使用")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("配置到github")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("复制公钥内容到 github 添加 GPG Key")])]),t._v(" "),n("li",[n("p",[t._v("设置 git 配置")])])]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.signingkey 3AA5C34371567BD2\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确认配置")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config  -l\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置全局提交使用该秘钥")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global commit.gpgsign "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单次提交中签名")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -S -m "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),t._v("\n\n")])])])]),t._v(" "),n("li",[n("p",[t._v("用于maven发布到中央仓库")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("发布公钥到公钥服务器")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 目前支持如下如下服务器")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# keyserver.ubuntu.com")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# keys.openpgp.org")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pgp.mit.edu")]),t._v("\ngpg --keyserver hkp://keyserver.ubuntu.com:80 --send-keys 3AA5C34371567BD2\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\ngpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 3AA5C34371567BD2\n\n")])])])]),t._v(" "),n("li",[n("p",[t._v("本地发布 如果秘钥存在密码 需要正在settings文件中添加如下内容 可以通过 maven-gpg-plugin 插件的配置修改对应的id 等")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("server")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("gpg.passphrase"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("passphrase")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${your passphrase}"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("passphrase")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("server")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),n("li",[n("p",[t._v("配合github action 进行自动化发布 参考"),n("a",{attrs:{href:"https://github.com/linG5821/mtime.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/linG5821/mtime.git"),n("OutboundLink")],1)])])])])])])]),t._v(" "),n("h2",{attrs:{id:"问题总结及解决方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题总结及解决方案"}},[t._v("#")]),t._v(" 问题总结及解决方案")]),t._v(" "),n("ol",[n("li",[t._v("Hyper-V 将动态端口中的几段范围的端口保留给自己使用,导致产生各种端口被占用的问题")])]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前动态端口的范围")]),t._v("\nnetsh int ipv4 show dynamicport tcp\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看tcp ipv4端口排除范围（被系统或者我们自己保留的端口）")]),t._v("\nnetsh int ipv4 show excludedport tcp\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 管理员身份打开 powershell，然后设置 tcp ipv4 的动态端口范围为 49152 开始的 16384 个端口，也就是 49152~65535 (这个是windows默认的)")]),t._v("\nnetsh int ipv4 "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" dynamicport tcp "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("start")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("49152")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("num")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16384")]),t._v("\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("Git配置代理")])]),t._v(" "),n("ul",[n("li",[t._v("http/https代理")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('# 注意将对应的代理地址及端口更换为自己对应的值\nHTTP 代理\n  git config --global http.proxy "http://127.0.0.1:10809"\n  git config --global https.proxy "http://127.0.0.1:10809"\n\nSocket5 代理\n  git config --global http.proxy "socks5://127.0.0.1:10808"\n  git config --global https.proxy "socks5://127.0.0.1:10808"\n')])])]),n("ul",[n("li",[t._v("ssh代理")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# windows\n# 编辑文件地址 ~/.ssh/config\n  Host github.com *.github.com\n      User git\n      Port 22\n      Hostname %h\n      IdentityFile ~\\.ssh\\id_rsa\n      ProxyCommand connect -S 127.0.0.1:10808 %h %p\n  \n # wsl\n # 编辑文件地址 ~/.ssh/config\n # wsl2 中有一个问题，这里wsl实际上是蹭用主机的代理，wsl2相比wsl1在网络上发生了变\n # 化，导致访问windows需要知道具体的IP，所以这里的<windows ip>应该更换为对应的主机#（windows）的IP地址，我更多情况下会将其设置为域名，然后只在windows上更改hosts文\n # 件并同步到wsl中即可，但是如果切换网络，切换wifi之后需要重新配置，参考过一些文章\n # 可以通过/etc/resolv.conf获取winip，实际测试并未成功，因为我的/etc/resolv.conf\n # 之前因为wsl2无法访问互联网，所以修改过其中的DNS值，并取消了自动生成的机制\n # 20210804 新增 如果不自定义/etc/resolv.conf 可以通过 `cat /etc/resolv.conf | grep nameserver | awk '{ print $2 }'` 获取宿主机IP\n  Host github.com *.github.com\n      User git\n      Port 22\n      Hostname %h\n      IdentityFile ~\\.ssh\\id_rsa\n      ProxyCommand nc -v -x <windows ip>:10808 %h %p\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("截取主机某个网卡的IP")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('# 可以将 select-string 后的关键字改成具体的网卡名称关键字\n(ipconfig|select-string "无线" -context 1,4 | findStr "IPv4").Split(":")[-1]\n')])])]),n("ol",{attrs:{start:"4"}},[n("li",[t._v("python脚本获取主机IP")])]),t._v(" "),n("ul",[n("li",[t._v("方式一：（ 此方式可能获取到虚拟IP ）"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import socket\nhostname = socket.gethostname()\nip = socket.gethostbyname(hostname)\nprint(ip)\n")])])])]),t._v(" "),n("li",[t._v("方式二：")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('import socket\n\ndef get_host_ip():\n     """\n     查询本机ip地址\n     :return: ip\n     """\n     try:\n         s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\n         s.connect((\'8.8.8.8\', 80))\n         ip = s.getsockname()[0]\n     finally:\n         s.close()\n\n     return ip\n\nif __name__ == \'__main__\':\n     print(get_host_ip())\n')])])])])}),[],!1,null,null,null);s.default=e.exports}}]);