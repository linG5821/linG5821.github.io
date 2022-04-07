(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{431:function(t,s,a){"use strict";a.r(s);var n=a(32),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"powershell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#powershell"}},[t._v("#")]),t._v(" Powershell")]),t._v(" "),a("ol",[a("li",[t._v("执行多个命令使用 "),a("code",[t._v(";")]),t._v(" 分割  linux 中使用 &&")]),t._v(" "),a("li",[t._v('设置环境变量使用 $env:KEY="VALUE" 而 CMD 使用 set KEY=VALUE')])]),t._v(" "),a("h2",{attrs:{id:"win下gpg的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#win下gpg的使用"}},[t._v("#")]),t._v(" Win下GPG的使用")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("安装Gpg4win, 下载地址: "),a("a",{attrs:{href:"https://gpg4win.org/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gpg4win.org/download.html"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("修改Git配置使用安装的gpg")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global gpg.program "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yourpath\\GnuPG'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[t._v("\\b")]),t._v('in\\gpg.exe"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global gpg.program\n")])])])]),t._v(" "),a("li",[a("p",[t._v("创建与设置秘钥")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("gpg --full-generate-key\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选择加密方式 选择默认的1即可，表示加密和签名均使用 RSA 算法")]),t._v("\nPlease "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" what kind of key you want:\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" RSA and RSA "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" DSA and Elgamal\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" DSA "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sign only"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" RSA "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sign only"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Existing key from card\nYour selection? "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最长为4096位，设置为4096位即可")]),t._v("\nRSA keys may be between "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v(" and "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v(" bits long.\nWhat keysize "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" you want? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3072")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置密钥有效期 选择0为永久有效")]),t._v("\nPlease specify how long the key should be valid.\n         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" key does not expire\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" key expires "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" n days\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("w "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" key expires "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" n weeks\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" key expires "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" n months\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" key expires "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" n years\nKey is valid for? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 完成上述设置后，会要求确认 确认即可")]),t._v("\nIs this correct? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y/N"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("y\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置用户ID 邮箱  备注等信息  还需要输入密码")]),t._v("\nGnuPG needs to construct a user ID to identify your key.\nReal name:\nEmail address: \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示秘钥列表 此例子中GPG 密钥 ID 是 3AA5C34371567BD2")]),t._v("\ngpg --list-secret-keys --keyid-format"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("long\nor\ngpg -K\n/Users/hubot/.gnupg/secring.gpg\n------------------------------------\nsec   4096R/3AA5C34371567BD2 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2016")]),t._v("-03-10 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("expires: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v("-03-10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nuid                          Hubot \nssb   4096R/42B317FD4BA89E7A "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2016")]),t._v("-03-10\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输出 秘钥内容  ")]),t._v("\ngpg --armor --export 3AA5C34371567BD2\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输出秘钥到文件")]),t._v("\ngpg --armor --output public-key.txt --export 3AA5C34371567BD2\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成吊销证书(推荐生成, gpg默认会生成, 位置: C:\\Users\\xxx\\AppData\\Roaming\\gnupg\\openpgp-revocs.d\\keyid.rev)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 如果要使用需要去除 "-----BEGIN PGP PUBLIC KEY BLOCK-----" 前的 ":"')]),t._v("\ngpg --gen-revoke 3AA5C34371567BD2\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成吊销证书的交互, 最后复制吊销内容到文件")]),t._v("\nCreate a revocation certificate "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" this key? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y/N"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" y\nPlease "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" the reason "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the revocation:\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" No reason specified\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Key has been compromised\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Key is superseded\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Key is no longer used\n  Q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Cancel\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Probably you want to "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" here"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nYour decision? "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nEnter an optional description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" end it with an empty line:\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" To prevent leakage\nReason "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" revocation: No reason specified\nTo prevent leakage\nIs this okay? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y/N"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("y\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导出")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导出公钥 ASCII 形式")]),t._v("\ngpg --armor --output keyid.gpg.pub --export keyid\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导出私钥 ASCII 形式")]),t._v("\ngpg --armor --output keyid.gpg --export-secret-keys keyid\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有秘钥")]),t._v("\ngpg --list-keys\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导入吊销证书(导入后悔直接吊销对应的秘钥), 如果公钥已经发布还需要重新发布一下才能吊销已经上传的秘钥")]),t._v("\ngpg --import /path/xxxx.rev\n")])])])]),t._v(" "),a("li",[a("p",[t._v("GPG秘钥的使用")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("配置到github")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("复制公钥内容到 github 添加 GPG Key")])]),t._v(" "),a("li",[a("p",[t._v("设置 git 配置")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.signingkey 3AA5C34371567BD2\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确认配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config  -l\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置全局提交使用该秘钥")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global commit.gpgsign "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单次提交中签名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -S -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),t._v("\n\n")])])])])])]),t._v(" "),a("li",[a("p",[t._v("用于maven发布到中央仓库")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("发布公钥到公钥服务器")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 目前支持如下如下服务器")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# keyserver.ubuntu.com")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# keys.openpgp.org")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pgp.mit.edu")]),t._v("\ngpg --keyserver hkp://keyserver.ubuntu.com:80 --send-keys 3AA5C34371567BD2\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\ngpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 3AA5C34371567BD2\n\n")])])])]),t._v(" "),a("li",[a("p",[t._v("本地发布 如果秘钥存在密码 需要正在settings文件中添加如下内容 可以通过 maven-gpg-plugin 插件的配置修改对应的id 等")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("gpg.passphrase"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("passphrase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${your passphrase}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("passphrase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("配合github action 进行自动化发布 参考"),a("a",{attrs:{href:"https://github.com/linG5821/mtime.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/linG5821/mtime.git"),a("OutboundLink")],1)])])])])])])]),t._v(" "),a("h2",{attrs:{id:"问题杂项汇总及解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题杂项汇总及解决方案"}},[t._v("#")]),t._v(" 问题杂项汇总及解决方案")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Hyper-V 将动态端口中的几段范围的端口保留给自己使用,导致产生各种端口被占用的问题")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前动态端口的范围")]),t._v("\nnetsh int ipv4 show dynamicport tcp\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看tcp ipv4端口排除范围（被系统或者我们自己保留的端口）")]),t._v("\nnetsh int ipv4 show excludedport tcp\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 管理员身份打开 powershell，然后设置 tcp ipv4 的动态端口范围为 49152 开始的 16384 个端口，也就是 49152~65535 (这个是windows默认的)")]),t._v("\nnetsh int ipv4 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" dynamicport tcp "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("49152")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("num")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16384")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("截取主机某个网卡的IP")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('# 可以将 select-string 后的关键字改成具体的网卡名称关键字\n(ipconfig|select-string "无线" -context 1,4 | findStr "IPv4").Split(":")[-1]\n')])])])]),t._v(" "),a("li",[a("p",[t._v("python脚本获取主机IP")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("方式一: (此方式可能获取到虚拟IP)")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" socket\nhostname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gethostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nip "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gethostbyname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("方式二:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" socket\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_host_ip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n      查询本机ip地址\n      :return: ip\n      """')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AF_INET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SOCK_DGRAM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8.8.8.8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          ip "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getsockname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ip\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("get_host_ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);