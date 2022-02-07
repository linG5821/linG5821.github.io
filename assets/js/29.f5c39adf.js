(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{433:function(t,a,s){"use strict";s.r(a);var e=s(32),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[t._v("#")]),t._v(" 环境搭建")]),t._v(" "),s("h3",{attrs:{id:"homestead-搭建基本环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#homestead-搭建基本环境"}},[t._v("#")]),t._v(" Homestead 搭建基本环境")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("拉取项目，添加env文件,并将项目放入虚拟机的映射文件中")])]),t._v(" "),s("li",[s("p",[t._v("修改项目权限，简单起见chmod 777")])]),t._v(" "),s("li",[s("p",[t._v("配置Homestead.yml文件的项目访问域名映射")])]),t._v(" "),s("li",[s("p",[t._v("修改/etc/hosts 文件,添加域名和IP的映射解析 例如:192.168.10.10  homestead.linde")])]),t._v(" "),s("li",[s("p",[t._v("vagrant up --provision 启动虚拟机")])]),t._v(" "),s("li",[s("p",[t._v("vagrant ssh 连接虚拟机 进入映射项目目录执行composer install 安装项目依赖")])]),t._v(" "),s("li",[s("p",[t._v("sudo killall -HUP mDNSResponder 刷新hosts文件的修改")])]),t._v(" "),s("li",[s("p",[t._v("PHP远程调试携带参数:Cookie: XDEBUG_SESSION=PHPSTORM")])]),t._v(" "),s("li",[s("p",[t._v("homestead nginx 配置php版本修改重启失效,可以在Homestead.yaml文件中单独指定每个站点的php版本，此时虚拟机的nginx配置改变")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" homestead.linde\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("to")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /home/vagrant/code/linde_web/public\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("php")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"7.1"')]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"docker-搭建基本环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-搭建基本环境"}},[t._v("#")]),t._v(" Docker 搭建基本环境")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Docker安装")]),t._v(" "),s("ul",[s("li",[t._v("官网地址： https://www.docker.com/")]),t._v(" "),s("li",[t._v("下载地址： https://www.docker.com/get-started")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("安装步骤不在赘述。")])])])]),t._v(" "),s("li",[s("p",[t._v("获取开发环境PHP docker镜像")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# github项目地址： https://github.com/Laradock/laradock\n# 克隆代码 克隆的位置比较敏感，PHP Workspace会以克隆地址目录作为基础。\ngit clone git@github.com:laradock/laradock.git\n")])])])]),t._v(" "),s("li",[s("p",[t._v("拉取部署镜像，首先要配置好docker的国内的源，用来加速镜像。配置位于： ~/.docker/daemon.json")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"registry-mirrors"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://registry.docker-cn.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://dockerhub.azk8s.cn"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://reg-mirror.qiniu.com"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"insecure-registries"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"debug"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"experimental"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("复制切换到源码目录，打开终端构建镜像。这要花费一定的时间。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("docker-compose build\n")])])])]),t._v(" "),s("li",[s("p",[t._v("启动PHP工作容器。\n")]),s("p",[t._v("根据自己的需要启动组件。比如mysql，redis，mongo之类的。nginx应该是必须要的这样访问localhost可以看到自己的项目")]),t._v(" "),s("p",[t._v("还有一些组件laradock_php-fpm，laradock_workspace是默认启动的，因为其他组件依赖这些组件。而且这些组件也算是基础必须的组件了。")]),s("p"),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("docker-compose up -d nginx mysql\n")])])])]),t._v(" "),s("li",[s("p",[t._v("构建第一个项目\n在这之前已经顺利启动了相关组件以及workspace。 通过“docker-compose ps”命令查看启用状况。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("        Name                          Command              State                    Ports\n--------------------------------------------------------------------------------------------------------------\nlaradock_docker-in-docker_1   dockerd-entrypoint.sh           Up      2375/tcp\nlaradock_mysql_1              docker-entrypoint.sh mysqld     Up      0.0.0.0:3306->3306/tcp, 33060/tcp\nlaradock_nginx_1              /bin/bash /opt/startup.sh       Up      0.0.0.0:443->443/tcp, 0.0.0.0:80->80/tcp\nlaradock_php-fpm_1            docker-php-entrypoint php-fpm   Up      9000/tcp\nlaradock_workspace_1          /sbin/my_init                   Up      0.0.0.0:2222->22/tcp\n")])])])]),t._v(" "),s("li",[s("p",[t._v("在这里需要作出一些说明")]),t._v(" "),s("ul",[s("li",[t._v("PHP所需要的SDK和Runtime已经安装在了docker容器中，并且容器正在运行。")]),t._v(" "),s("li",[t._v("想要创建新的项目，只能利用容器。因为主机只有docker，docker容器中才有SDK。")]),t._v(" "),s("li",[t._v("docker利用和主机共享目录的方式创建项目和开发项目。主机利用共享目录开发，容器利用共享目录支撑运行。")])])]),t._v(" "),s("li",[s("p",[t._v("进入workspace容器")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("docker-compose exec --user=laradock workspace bash\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("strong",[t._v("必须使用laradock用户权限进入创建项目。如果用root权限创建是不行的，具体会有提示。")])])])]),t._v(" "),s("li",[s("p",[t._v("脚手架安装和使用")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("创建项目的命令包括:（没有配置国内源，先配置。见下）")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("composer create-project laravel/laravel demo\n# or\nlaravel new demo\n")])])])]),t._v(" "),s("li",[s("p",[t._v("其中laravel脚手架需要额外进行安装。安装完就可以用脚手架搭建项目了。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("composer global require laravel/installer\n")])])])]),t._v(" "),s("li",[s("p",[t._v("进入容器后，使用脚手架需要配置国内源，否则很难创建项目。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("composer config -g repo.packagist composer https://packagist.phpcomposer.com\n")])])])])])]),t._v(" "),s("li",[s("p",[t._v("运行之前，这里需要修改")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# 修改.env文件，将基础目录直接映射至自己的项目。\n# Point to the path of your applications code on your host\nAPP_CODE_PATH_HOST=../wwwroot/demo\n\n# 重启niginx\ndocker-compose up -d nginx\n")])])])]),t._v(" "),s("li",[s("p",[t._v("运行")])])]),t._v(" "),s("p",[t._v("打开"),s("a",{attrs:{href:"http://localhost",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost"),s("OutboundLink")],1),t._v("此时应该会显示Laravel的项目开始图片。\n"),s("img",{attrs:{src:"https://laravelacademy.org/wp-content/uploads/2017/09/15051482331119.jpg",alt:"image"}}),t._v(" "),s("center",[s("font",{attrs:{size:"32"}},[t._v("GOOD LUCK")])],1)],1),t._v(" "),s("p",[t._v("一些有用的网址以及教程参考："),s("br"),t._v(" "),s("a",{attrs:{href:"https://note.youdao.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://laravel.com/"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://note.youdao.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://laravel.com/docs/5.7"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://pkg.phpcomposer.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://pkg.phpcomposer.com/"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://laravelacademy.org/post/7691.html%5D",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://laravelacademy.org/post/7691.html"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://laravelacademy.org/post/6569.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://laravelacademy.org/post/6569.html"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://learnku.com/articles/14767/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://learnku.com/articles/14767/"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://note.youdao.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("self-built-laravel-docker-development-environment"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"amqp-扩展安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amqp-扩展安装"}},[t._v("#")]),t._v(" AMQP 扩展安装")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("安装 rabbitmq-c")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/alanxz/rabbitmq-c.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" rabbitmq-c/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" build "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" build\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这一步是在rabbitmq-c的根目录下创建一个build子目录")]),t._v("\ncmake -DCMAKE_INSTALL_PREFIX"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/rabbitmq-c "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这一步是让cmake根据../CMakeList.txt，即rabbitmq-c的根目录下的CMakeList.txt创建Makefile文件，Makefile文件会被创建到build目录中")]),t._v("\ncmake --build "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("  --target "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这一步是真正的build rabbitmq-c库的，注意，不要漏掉点 '.'此时，rabbitmq-c已安装完毕,我们查询一下安装目录/usr/local/rabbitmq-c")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("whereis")]),t._v(" rabbitmq-c\n")])])])]),t._v(" "),s("li",[s("p",[t._v("安装 amqp PHP 扩展")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://pecl.php.net/get/amqp-1.9.3.tgz\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xvf amqp-1.9.3.tgz\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" amqp-1.9.3\nphpize\n./configure --with-php-config"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/php/bin/php-config\n--with-amqp --with-librabbitmq-dir"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/rabbitmq-c\n./configure --with-php-config"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/bin/php-config --with-amqp --with-librabbitmq-dir"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/rabbitmq-c\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此时，扩展生成完毕啦，大功告成。")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("安装 amqp")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("pecl "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" amqp\n")])])])]),t._v(" "),s("li",[s("p",[t._v("配置amqp扩展")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查找php.ini位置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" / -name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'php.ini'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /usr/local/php/etc/php.ini\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加 extension=amqp.so")]),t._v("\n")])])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);